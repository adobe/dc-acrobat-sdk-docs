******************************************************
Acrobat Search Plug-in
******************************************************

This chapter describes IAC support for the Acrobat Search plug-in, which allows users to perform text searches in PDF documents. It adds menus, menu items, toolbar buttons, and a Search panel to the Acrobat application. The Search plug-in exports a host function table (HFT) containing several methods that can be used by other Plugins.

Search supports interapplication communication in the form of DDE messages in Windows and Apple events in Mac OS. These messages and events allow remote clients to submit search queries and manipulate a list of indexes (the list of indexes is referred to as the shelf).

For more information, see the `PDF Library documentation <https://www.adobe.com/go/pdflibrary>`__.

.. raw:: html

   <a name="50532404_58297"></a>

Search plug-in using DDE
========================

A client can connect to the Search plug-in with DDE using the service name ``"Acrobat Search"`` and the topic name ``"Acrobat Search"``.

::

      DdeInitialize(&id, &DDE_ProcessMessage, APPCMD_CLIENTONLY, 0); 
      hszServerName = DdeCreateStringHandle(id, "Acrobat Search", 0); 
      hszTopicName = DdeCreateStringHandle(id, "Acrobat Search", 0); 
      hConv = DdeConnect(id, hszServerName, hszTopicName, NULL);

After a connection has been made, a single poke transaction will submit a search query. Two types of queries are supported: simple query and query.

Simple query item
-----------------

A simple query has the item name "``SimpleQuery"``. When using a simple query, pass only a string that contains the query, using the ASQL query parser's format (see ``QLangType_CQL`` in the table `Query language type constants <IAC_API_SearchIntro.html#50532404_97440>`__). It is not possible to choose another parser or to set word options using the simple query item.

Query item
----------

A query has the item name "``Query`` ". When using query, a ``QueryData`` structure is used. This structure contains the query, as well as specifying the query parser to use and additional options.

::

      hszItemName = DdeCreateStringHandle(id, "Query", 0);
      DdeClientTransaction(qd, nLen, hConv, hszItemName, CF_TEXT, XTYP_POKE,
      1000, &dwResult);
      DdeDisconnect(hConv)

The global data handle (``qd``) passed to the server must be in the following format:

::

      typedef struct _QueryData { 
           eQLangType qlt;
           boolean bOverrideWordOptions;
           uns32 nWordOptions;
           uns16 nMaxDocs;
           uns16 nQueryOffset;
           uns16 nNumSorts; //deprecated in Acrobat 6.0
           uns16 nSortOffset[QP_MAX_SORT_FIELDS]; //deprecated in Acrobat 6.0
           boolean bSortWays[QP_MAX_SORT_FIELDS]; //deprecated in Acrobat 6.0
           unsigned char cData[1];
       } QueryData;

Query options
-------------

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - qlt
     - The query language type. Must be one of the values shown in `Query language type constants <IAC_API_SearchIntro.html#50532404_97440>`__.

   * - bOverrideWordOptions
     - Indicates that the client wishes to use different word options than those currently set by the user.

   * - nWordOptions
     - The word options. Must be an ``OR`` of the values shown in `Word option bit-flag constants <IAC_API_SearchIntro.html#50532404_78200>`__.

   * - nMaxDocs
     - If non-zero, the client wishes to use a different limit for the maximum number of documents than the limit currently set by the user.

   * - nSortOffsets
     - A list of offsets into the ``cData`` chunk. Each offset points to a ``NULL`` -terminated string containing the field name.  This value has no effect in Acrobat 6.0 or later, because sort options are not valid. 

   * - nQueryOffset
     - An offset into the ``cData`` chunk that points to a ``NULL`` -terminated string containing the query to execute.

   * - nNumSorts
     - The number of fields in the sort spec. If this number is ``0``, the plug-in uses the current sort spec set by the user.   This value has no effect in Acrobat 6.0 or later, because sort options are not valid. 

   * - bSortWays
     - A list of sort order flags, one for each sort field. ``true`` indicates an ascending sort, and ``false`` indicates a descending sort.  This value has no effect in Acrobat 6.0 or later, because sort options are not valid. 

.. raw:: html

   <a name="50532404_97440"></a>

Query language type constants
-----------------------------

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - QLangType_Simple
     - Allows only simple phrase searches; does not allow Boolean searching.  This query type does not work in the DDE interface of the Search plug-in shipped with version 2.0 of Acrobat. 

   * - QLangType_CQL
     - Allows Boolean searches using ``AND``, ``OR``, and ``NOT``, as described in the Acrobat Search plug-in's online help file. 

   * - QLangType_Passthrough
     - The Verity BooleanPlus query language. Contact Verity for further information on this language.

.. raw:: html

   <a name="50532404_78200"></a>

Word option bit-flag constants
------------------------------

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - QPON_Case
     - The search is case-sensitive.

   * - QPON_Stemming
     - Find not only the specified word, but other words that have the same stem. For example, run and ran have the same stem.

   * - QPON_SoundsLike
     - Find not only the specified word, but other words that sound like it.

   * - QPON_Thesaurus
     - Find not only the specified word, but other words that have the same meaning.

   * - QPON_Proximity
     - Consider the proximity of results when using the ``AND`` operator to look for more than one word in a document. Without this option, ``AND`` terms can be anywhere in a document. Searching for "red" and "blue," for example, finds a document where "red" is the first word on the first page and where "blue" is the last word on the last page. With this option, however, ``AND`` terms must be within two or three pages of each other to be found. Also, the closer ``AND`` terms appear together, the higher the relevance ranking of the document that contains them.

   * - QPON_Refine
     - Do not search the entire list of indexes, but only the documents that matched the previous search. This is used to refine the results of the previous search.

To create and populate this structure correctly, the client must know the sum of the lengths of each sort field (``sls``), the length of the query (``lq``), and the size of the ``QueryData`` structure. The client then allocates memory as follows:

::

      nSize = sizeof(QueryData) + sls + lq;
      qd = (QueryData *)malloc(nSize);

For example, if the query was "Adobe" and the sort spec was "Title" ascending and "Score" descending then the structure would be packed as follows:

::

      memset(qd, 0, nSize);
      qd->nQueryOffset = 0;
      strcpy(&cData[0], "Adobe");
      qd->nNumSort = 2;
      qd->nSortOffset[0] = strlen("Adobe") + 1;
      qd->bSortWays[0] = TRUE; 
      strcpy(&cData[qd->nSortOffset[0]], "Title");
      qd->bSortWays[1] = FALSE;
      qd->nSortOffset[1] = qd->nSortOffset[0] + strlen("Title") + 1;
      strcpy(&cData[qd->nSortOffset[1]], "Score");

Manipulating indexes through DDE
--------------------------------

After a connection has been made, a single poke transaction can add, delete, add, or remove indexes. The item name to use is "``Index".``

::

      hszItemName = DdeCreateStringHandle(id, "Index", 0);
      DdeClientTransaction(qd, nLen, hConv, hszItemName, CF_TEXT, XTYP_POKE,
      1000, &dwResult); 
      DdeDisconnect(hConv);

The global data handle (``gd``) passed to the server must be in the following format:

::

      typedef struct _IndexData {
           IndexActionType eAction; 
           int16 nIndexOffset; 
           int16 nTempNameOffset; 
           unsigned char cData[1]; 
       } IndexData;

Options
-------

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - eAction
     - The operation to be performed on the index. Must be one of values listed in `Index operation selectors <IAC_API_SearchIntro.html#50532404_25513>`__.

   * - nIndexOffset
     - An offset into the ``cData`` chunk that points to a ``NULL`` -terminated string containing the PDX file representing the index.

   * - nTempNameOffset
     - An offset into ``cData``. It points to a temporary name that is displayed by the Search plug-in when the index is unavailable. This field must specify an offset either to an empty string (``0``) or to a non-empty C string. 

.. raw:: html

   <a name="50532404_25513"></a>

Index operation selectors
-------------------------

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - IndexAction_Add
     - Adds an index to the shelf.

   * - IndexAction_Remove
     - Removes an index from the shelf.

   * - IndexAction_Enable
     - Enables an index on the shelf.

   * - IndexAction_Disable
     - Disables an index on the shelf.

To create and populate this structure correctly, the client must know the sum of the lengths of the Index (``li``) and Temp names (``lt``) (including ``NULL`` -terminating characters), and the size of the ``IndexData`` structure.

The client then allocates memory as follows:

::

      nSize = sizeof(IndexData) + li + lt; 
      id = (IndexData *)malloc(nSize);

For example, to add the index C:FOO.PDX to the Search plug-in's shelf:

::

      memset(id, 0, nSize); 
      id->eAction = IndexAction_Add; 
      id->nIndexOffset = 0; 
      strcpy(&id->cData[0], "C:FOO.PDX"); 
      id->nTempNameOffset = strlen("C:FOO.PDX") + 1; 
      strcpy(&id->cData[id->nTempNameOffset], 

       "My Favorite Index");

.. raw:: html

   <a name="50532404_72280"></a>

Search plug-in using Apple events
=================================

The Search plug-in supports the Apple events described in this section.

.. raw:: html

   <a name="50532404_63056"></a>

SearchAddIndex
--------------

Adds a specified index to the shelf.

**Apple event ID**

::

   kSearchAddIndex ('addx')

**Parameters**

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexListTag ('SilP'), typeLongInteger
     - An opaque ``void*`` representing the shelf, obtained from ``SearchGetIndexList``. 

   * - kPathTag ('Path'), typeChar
     - Mac OS full path representing an index, of the form: ``MyDisk:TopFolder:BottomFolder:Strange.pdx``

   * - kFlagTag ('Flag'), typeLongInteger
     - Index flags. See `SearchGetIndexFlags <IAC_API_SearchIntro.html#50532404_73191>`__ for a description. The ``kIndexAvailable`` flag should always be set.

**Returns**

::

   kIndexTag ('SixP'), typeLongInteger

An opaque ``void*`` representing an index. Returns ``NULL`` if failure.

**Returns**

::

      #define kIndexExists ((SearchIndexPtr)-1)

if the index already exists in the index list. If the index already exists, you can retrieve it using `SearchGetIndexByPath <IAC_API_SearchIntro.html#50532404_56157>`__.

SearchCountIndexList
--------------------

Gets the number of indexes currently on the shelf.

.. _apple-event-id-1:

**Apple event ID**

::

   kSearchCountIndexList ('cidx')

.. _parameters-1:

**Parameters**

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexListTag ('SilP'), typeLongInteger
     - An opaque ``void*`` representing the shelf, obtained from `SearchGetIndexList <IAC_API_SearchIntro.html#50532404_64605>`__ .

**Returns**

::

   kIndexListTag ('SilP'), typeLongInteger 

Number of indexes on the shelf (``kIndexListTag`` here is not semantically correct, but works).

SearchDoQuery
-------------

Executes a specified query, using the set of indexes currently on the shelf. The search results are displayed in the Acrobat Search plug-in's Results window.

.. _apple-event-id-2:

**Apple event ID**

::

   kSearchDoQuery ('kwry')

.. _parameters-2:

**Parameters**

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kQueryStringTag ('Quryv), typeChar
     - The query string, a ``NULL`` -terminated block of text. Its format is the same as what a user would type into the search Query window, and depends on the search language specified by ``kParserTag``. 

   * - kParserTag ('Prsr'), typeShortInteger
     - The query parser to use; may be one of (see SrchType.h):  ``kParserSimple 0``: Allows only simple phrase searches; does not allow Boolean searching.  ``kParserCQL 1``: Allows Boolean searches using ``AND``, ``OR``, and ``NOT``, as described in the Acrobat Search plug-in's online help file.   ``kParserBPlus 2``: The Verity BooleanPlus query language. Contact Verity for further information on this language.

   * - kSortSpecTag ('Sort'), typeAEList
     - A list of C strings representing fields to sort by. The first element is the first level sort, the second is the second level sort, and so forth.  Each string may be any field that appears in the index, plus ``Score`` (which sorts results by relevance ranking). Some common fields are Title, ModificationDate, CreationDate, and Keywords.

   * - kWordOptionsTag ('WOpt'), typeLongInteger
     - A bit field of word options. Must be a logical OR of the values listed below in `Word options for Apple events <IAC_API_SearchIntro.html#50532404_40152>`__.  The manner in which the options are used depends on the value associated with ``kOptionsOverrideTag``. 

   * - kOptionsOverrideTag ('WOer'), typeShortInteger
     - Flag that indicates whether the word options are ``OR'ed`` with the search options set in the user interface, or used instead of them. If ``0``, the word options are ``OR'ed`` with the user interface search options, and the resulting value is used. If non-zero, the word options are used instead of the user interface search options. 

   * - kMaxDocsTag ('MaxD'), typeShortInteger
     - The maximum number of documents to display in the Results window. If more documents than this have hits, only the first ``maxDocs`` are displayed. ``maxDocs`` cannot be greater than 999.

.. raw:: html

   <a name="50532404_40152"></a>

Word options for Apple events
-----------------------------

.. _section-8:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - kWordOptionCase
     - The search is case-sensitive.

   * - kWordOptionStemming
     - Find not only the specified word, but other words that have the same stem (for example, run and ran have the same stem).

   * - kWordOptionSoundsLike
     - Find not only the specified word, but other words that sound like it.

   * - kWordOptionThesaurus
     - Find not only the specified word, but other words that have the same meaning.

   * - kWordOptionProximity
     - Consider the proximity of results when using the ``AND`` operator to look for more than one word in a document. Without ``kWordOptionProximity``, ``AND`` terms can be anywhere in a document. Searching for "red" and "blue," for example, finds a document where "red" is the first word on the first page and where "blue" is the last word on the last page. With ``kWordOptionProximity``, however, ``AND`` terms must be within two or three pages of each other to be found. Also, with ``kWordOptionProximity``, the closer ``AND`` terms appear together, the higher the relevance ranking of the document that contains them. 

   * - kWordOptionRefine
     - Do not search the entire list of indexes, but only the documents that matched the previous search. This is used to refine the results of the previous search.

.. raw:: html

   <a name="50532404_56157"></a>

SearchGetIndexByPath
--------------------

Gets the index that has the specified path. The index must already be on the shelf. The index can be passed to other Search Apple events to remove it from the shelf, obtain its title, and so forth.

.. _apple-event-id-3:

**Apple event ID**

::

   kSearchGetIndexByPath ('fpdx')

.. _parameters-3:

**Parameters**

.. _section-9:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexListTag ('SilP'), typeLongInteger
     - An opaque ``void*`` representing the shelf, obtained from `SearchGetIndexList <IAC_API_SearchIntro.html#50532404_64605>`__ .

   * - kPathTag ('Path'), typeChar
     - Mac OS full path representing an index, of the form: ``MyDisk:TopFolder:BottomFolder:Strange.pdx``

**Returns**

::

   kIndexTag ('SixP'), typeLongInteger

An opaque ``void*`` representing an index. Returns ``NULL`` if the specified index is gone.

.. raw:: html

   <a name="50532404_73191"></a>

SearchGetIndexFlags
-------------------

Get the flags for an index.

.. _apple-event-id-4:

**Apple event ID**

::

   kSearchGetIndexFlags ('gfdx')

.. _parameters-4:

**Parameters**

.. _section-10:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexTag ('SixP'), typeLongInteger
     - An opaque ``void*`` representing an index.

**Returns**

::

   kFlagTag ('Flag'), typeLongInteger

A logical ``OR`` of the following:

* ``kIndexAvailableFlag (1L << 0)``: Set if the index is available for searching.
* ``kIndexSelectedFlag (1L << 1)``: Set if the index appears with a check mark in the Search plug-in's user interface.
* ``kIndexPtrInvalidFlag (1L << 31)``: Set if the index is not valid or is no longer valid.

.. raw:: html

   <a name="50532404_64605"></a>

SearchGetIndexList
------------------

Gets a list of the indexes currently on the shelf.

.. _apple-event-id-5:

**Apple event ID**

::

   kSearchGetIndexList ('gidx')

**Returns**

::

   kIndexListTag ('SilP'), typeLongInteger

An opaque ``void*`` representing the list of indexes currently on the shelf. This value can subsequently be used by other search Apple events to obtain information about a specific index, the number of indexes on the shelf, and so forth.

SearchGetIndexPath
------------------

Gets the full path to an index.

.. _apple-event-id-6:

**Apple event ID**

::

   kSearchGetIndexPath ('gpdx')

.. _parameters-5:

**Parameters**

.. _section-11:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexTag ('SixP'), typeLongInteger
     - An opaque ``void*`` representing the index whose path is to be obtained. The index may be obtained using `SearchGetIndexByPath <IAC_API_SearchIntro.html#50532404_56157>`__ , `SearchGetNthIndex <IAC_API_SearchIntro.html#50532404_62682>`__ , or `SearchAddIndex <IAC_API_SearchIntro.html#50532404_63056>`__ .

**Returns**

::

   kPathTag ('Path'), typeChar

A ``NULL`` -terminated character string representing the full path of the index . Returns an empty string if the requested index is not valid.

SearchGetIndexTitle
-------------------

Gets the title of an index.

.. _apple-event-id-7:

**Apple event ID**

::

   kSearchGetIndexTitle ('gtdx')

.. _parameters-6:

**Parameters**

.. _section-12:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexTag ('SixP'), typeLongInteger
     - An opaque ``void*`` representing the index whose title is to be obtained. The index may be obtained using `SearchGetIndexByPath <IAC_API_SearchIntro.html#50532404_56157>`__ , `SearchGetNthIndex <IAC_API_SearchIntro.html#50532404_62682>`__ , or `SearchAddIndex <IAC_API_SearchIntro.html#50532404_63056>`__ .

**Returns**

::

   kTitleTag ('Title'), typeChar

A ``NULL`` -terminated character string representing the title of the index. If there is no title, it returns the index's path . Returns an empty string if the requested index is not valid.

.. raw:: html

   <a name="50532404_62682"></a>

SearchGetNthIndex
-----------------

Gets the n *th* index on the shelf. The index can be passed to other Search Apple events to remove it from the shelf, obtain its title, and so forth.

.. _apple-event-id-8:

**Apple event ID**

::

   kSearchGetNthIndex ('fndx')

.. _parameters-7:

**Parameters**

.. _section-13:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexListTag ('SilP'), typeLongInteger
     - An opaque ``void*`` representing the shelf, obtained from `SearchGetIndexList <IAC_API_SearchIntro.html#50532404_64605>`__ .

   * - kNthIndexTag ('Enth'), typeLongInteger
     - The index to get. The first index on the shelf is index zero.

**Returns**

::

   kIndexTag ('SixP'), typeLongInteger

An opaque ``void*`` representing an index . Returns ``NULL`` if the n *th* index is gone.

SearchRemoveIndex
-----------------

Removes the specified index from the shelf.

.. _apple-event-id-9:

**Apple event ID**

::

   kSearchRemoveIndex ('rmdx')

.. _parameters-8:

**Parameters**

.. _section-14:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexListTag ('SilP'), typeLongInteger
     - An opaque ``void*`` representing the shelf, obtained from `SearchGetIndexList <IAC_API_SearchIntro.html#50532404_64605>`__ .

   * - kIndexTag ('SixP'), typeLongInteger
     - An opaque ``void*`` representing the index to be removed. The index may be obtained using `SearchGetIndexByPath <IAC_API_SearchIntro.html#50532404_56157>`__ , `SearchGetNthIndex <IAC_API_SearchIntro.html#50532404_62682>`__ , or `SearchAddIndex <IAC_API_SearchIntro.html#50532404_63056>`__ .

SearchSetIndexFlags
-------------------

Sets the flags for an index.

.. _apple-event-id-10:

**Apple event ID**

::

   kSearchSetIndexFlags ('sfdx')

.. _parameters-9:

**Parameters**

.. _section-15:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - kIndexTag ('SixP'), typeLongInteger
     - An opaque ``void*`` representing an index.

   * - kFlagTag ('Flag'),typeLongInteger
     - Index flags. See the description in `SearchGetIndexFlags <IAC_API_SearchIntro.html#50532404_73191>`__. In practice, ``kIndexAvailableFlag`` should always be set.

**Returns**

::

   kFlagTag ('Flag'), typeLongInteger

Index flags. See the description in `SearchGetIndexFlags <IAC_API_SearchIntro.html#50532404_73191>`__. This value is returned because it is possible for a request to set a flag to fail.

.. raw:: html

   <a name="50532404_69263"></a>

Search lists
============

The Search plug-in adds a new menu, menu items, and toolbar buttons to the Acrobat application.

.. raw:: html

   <a name="50532404_32193"></a>">

Menu names

The Search plug-in adds the following menu to Acrobat.

.. _section-16:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Menu name
     - Description

   * - AcroSrch:ToolsSubMenu
     - Acrobat Search submenu of Edit menu 

Menu item names
---------------

The Search plug-in adds the following menu items to Acrobat.

.. _section-17:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Menu item name
     - Description

   * - AcroSrch:Query
     - Displays the Search dialog box.

   * - AcroSrch:Indexes
     - Displays the Index dialog box.

   * - AcroSrch:Results
     - Displays the Results dialog box.

   * - AcroSrch:Assist
     - Displays the Word Assistant dialog box.

   * - AcroSrch:Separator
     - A separator item in the Search tools menu.

   * - AcroSrch:PrevDoc
     - Goes to the previous document in the hit list.

   * - AcroSrch:PrevHit
     - Goes to the previous hit in the hit list.

   * - AcroSrch:NextHit
     - Goes to the next hit in the hit list.

   * - AcroSrch:NextDoc
     - Goes to the next document in the hit list.

Toolbar button names
--------------------

The Search plug-in adds the following buttons to the Acrobat toolbar.

.. _section-18:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Button name
     - Description

   * - AcroSrch:Separator
     - Separator (not visible).

   * - AcroSrch:Query
     - Displays the Acrobat Search plug-in's query dialog box. 

   * - AcroSrch:Results
     - Displays the Acrobat Search plug-in's search results dialog box. 

   * - AcroSrch:Prev
     - Goes to the previous hit in the Acrobat Search plug-in's results list. 

   * - AcroSrch:Next
     - Goes to the next hit in the Acrobat Search plug-in's results list. 

