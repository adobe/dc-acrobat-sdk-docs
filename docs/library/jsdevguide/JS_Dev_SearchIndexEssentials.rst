******************************************************
Search and Index Essentials
******************************************************

This chapter will enable you to customize and extend searching operations for PDF document content and metadata, as well as indexing operations. The principal JavaScript objects used in searching and indexing are the ``search``, ``catalog``, and ``index`` objects. In this chapter we shall see how to use these objects.


Searching for text in PDF documents
=====================================================

JavaScript provides a static ``search`` object, which provides powerful searching capabilities that may be applied to PDF documents and indexes. Its properties and methods are described in the following tables.

Search properties

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - attachments
     - Searches PDF attachments along with the base document.

   * - available
     - Determines if searching is possible.

   * - docInfo
     - Searches document metadata information.

   * - docText
     - Searches document text.

   * - docXMP
     - Searches document XMP metadata.

   * - bookmarks
     - Searches document bookmarks.

   * - ignoreAccents
     - Ignores accents and diactrics in search.

   * - ignoreAsianCharacterWidth
     - Matches Kana characters in query.

   * - indexes
     - Obtains all accessible ``index`` objects.

   * - jpegExif
     - Searches EXIF data in associated JPEG images.

   * - markup
     - Searches annotations.

   * - matchCase
     - Determines whether query is case-sensitive.

   * - matchWholeWord
     - Finds only occurrences of complete words.

   * - maxDocs
     - Specifies the maximum number of documents returned.

   * - proximity
     - Uses proximity in results ranking for ``AND`` clauses.

   * - proximityRange
     - Specifies the range of proximity search in number of words.

   * - refine
     - Uses previous results in query.

   * - stem
     - Uses word stemming in searches.

   * - wordMatching
     - Determines how words will be matched (phrase, all words, any words, Boolean query).

Search methods
=====================================================

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - addIndex
     - Adds an index to the list of searchable indexes.

   * - getIndexForPath
     - Searches the index list according to a specified path.

   * - query
     - Searches the document or index for specified text.

   * - removeIndex
     - Removes an index from the list of searchable indexes.

Finding words in an PDF document
===============================================

The ``search`` object ``query`` method is used to search for text within a PDF document. It accepts three parameters:

* ``cQuery``: the search text

* ``cWhere``: where to search:

* ``ActiveDoc``: within the active document

* ``Folder``: within a specified folder

* ``Index``: within a specified index

* ``ActiveIndexes``: within the active set of available indexes (the default)

* ``cDIPath``: the path to a folder or index used in the search

The simplest type of search is applied to the text within the PDF document. For example, the following code performs a case-insensitive search for the word Acrobat within the current document:

::

      search.query("Acrobat", "ActiveDoc");

Using advanced search options
========================================

You can set the ``search`` object properties to use advanced searching options, which can be used to determine how to match search strings, and whether to use proximity or stemming.

To determine how the words in the search string will be matched, set the ``search`` object ``wordMatching`` property to one of the following values:

* ``MatchPhrase``: match the exact phrase

* ``MatchAllWords``: match all the words without regard to the order in which they appear

* ``MatchAnyWord``: match any of the words in the search string

* ``BooleanQuery``: perform a Boolean query for multiple-document searches (the default)

For example, the following code matches the phrases "My Search" or "Search My":

::

      search.wordMatching = "MatchAllWords";
      search.query("My Search");

To determine whether proximity is used in searches involving multiple documents or index definition files, set the ``search`` object ``wordMatching`` property to ``MatchAllWords`` and set its ``proximity`` property to ``true``. In the example below, all instances of the words ``My`` and ``Search`` that are not separated by more than 900 words will be listed in the search:

::

      search.wordMatching = "MatchAllWords";
      search.proximity = true;
      search.query("My Search");

To use stemming in the search, set the ``search`` object ``stem`` property to ``true``. For example, the following search lists words that begin with "run", such as "running" or "runs":

::

      search.stem = true;
      search.query("run");

To specify that the search should only identify occurrences of complete words, set the ``search`` object ``matchWholeWord`` property to ``true``. For example, the following code matches "nail", but not "thumbnail" or "nails":

::

      search.matchWholeWord = true;
      search.query("nail");

To set the maximum number of documents to be returned as part of a query, set the ``search`` object ``maxDocs`` property to the desired number (the default is 100). For example, the following code limits the number of documents to be searched to 5:

::

      search.maxDocs = 5;

To refine the results of the previous query, set the ``search`` object ``refine`` property to ``true``, as shown in the following code:

::

      search.refine = true;

Searching across multiple PDF documents
===================================================

This section discusses searches involving more than one PDF document.

Searching all PDF files in a specific location
------------------------------------------------------------

To search all the PDF files within a folder, set the ``cWhere`` parameter in the ``search`` object ``query`` method to ``Folder``. In the following example, all documents in ``/C/MyFolder`` will be searched for the word "Acrobat":

::

      search.query("Acrobat", "Folder", "/C/MyFolder");

Using advanced search options for multiple document searches
---------------------------------------------------------------------------

In addition to the advanced options for matching phrases, using stemming, and using proximity, it is also possible to specify whether the search should be case-sensitive, whether to match whole words, to set the maximum number of documents to be returned as part of a query, and whether to refine the results of the previous query.

To specify that a search should be case sensitive, set the ``search`` object ``matchCase`` property to ``true``. For example, the following code matches "Acrobat" but not "acrobat":

::

      search.matchCase = true;
      search.query("Acrobat", "Folder", "/C/MyFolder");

Searching PDF index files
-------------------------------------

A PDF index file often covers multiple PDF files, and the time required to search an index is much less than that required to search each of the corresponding individual PDF files.

To search a PDF index, set the ``cWhere`` parameter in the ``search`` object's ``query`` method to ``Index``. In the following example, ``myIndex`` is searched for the word "Acrobat":

::

      search.query("Acrobat", "Index", "/C/MyIndex.pdx");

Using Boolean queries
---------------------------------------

You can perform a Boolean query when searching multiple document or index files. Boolean queries use the following operations as logical connectors:

-  ``AND``
-  ``OR``
-  ``^`` (exclusive or)
-  ``NOT``

For example, the phrase ``"Paris AND France"`` used in a search would return all documents containing both the words ``Paris`` and ``France``.

The phrase ``"Paris OR France"`` used in a search would return all documents containing one or both of the words ``Paris`` and ``France``.

The phrase ``"Paris ^ France"`` used in a search would return all documents containing exactly one (not both) of the words ``Paris`` and ``France``.

The phrase ``"Paris NOT France"`` used in a search would return all documents containing ``Paris`` that do not contain the word ``France``.

In addition, parentheses may be used. For example, the phrase ``"Acrobat AND (Standard OR Professional OR Pro)"``. The result of this query would return all documents that contain the word "Acrobat" and either "Standard", "Professional" or "Pro" in it.

::

      search.wordMatching="BooleanQuery";
      search.query("Acrobat AND (Standard OR Professional OR Pro)
   ", "Folder",
          "/C/MyFolder");

To specify that a Boolean query will be used, be sure that the ``search`` object ``wordMatching`` property is set to ``BooleanQuery`` (which is the default).

.. raw:: html

   <a name="17671"></a>

Indexing multiple PDF documents
===============================

It is possible to extend and customize indexes for multiple PDF documents using the JavaScript ``catalog``, ``catalogJob``, and ``index`` objects. These objects may be used to build, retrieve, or remove indexes. The ``index`` object represents a ``catalog`` -generated index, contains a ``build`` method that is used to create an index (and returns a ``catalogJob`` object containing information about the index), and has the properties shown below the following table.

Index properties

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - available
     - Indicates whether an index is available

   * - name
     - The name of the index

   * - path
     - The device-independent path of the index

   * - selected
     - Indicates whether the index will participate in the search

The ``catalog`` object may be used to manage indexing jobs and retrieve indexes. It contains a ``getIndex`` method for retrieving an index, a ``remove`` method for removing a pending indexing job, and properties containing information about indexing jobs.

Creating, updating, or rebuilding indexes
-----------------------------------------

To determine which indexes are available, use the ``search`` object ``indexes`` property, which contains an array of ``index`` objects. For each object in the array, you can determine its name by using its ``name`` property. In the code below, the names and paths of all available selected indexes are printed to the console:

::

      var arr = search.indexes;
      for (var i=0; i<arr.length; i++)
      {
          if (arr[i].selected)
          {
              var str = "Index[" + i + "] = " + arr[i].name;
              str += "nPath = " + arr[i].path;
              console.println(str);
          }
      }

To build an index, first invoke the ``catalog`` object ``getIndex`` method to retrieve the ``index`` object. This method accepts a parameter containing the path of the ``index`` object. Then invoke the ``index`` object ``build`` method, which returns a ``catalogJob`` object. The method accepts two parameters:

* ``cExpr``: a JavaScript expression executed once the build operation is complete

* ``bRebuildAll``: indicates whether to perform a clean build in which the existing index is first deleted and then completely built

Finally, the returned ``catalogJob`` object contains three properties providing useful information about the indexing job:

* ``path``: the device-independent path of the index

* ``type``: the type of indexing operation (``Build``, ``Rebuild``, or ``Delete``)

* ``status``: the status of the indexing operation (``Pending``, ``Processing``, ``Completed``, or ``CompletedWithErrors``)

In the code shown below, the index ``myIndex`` is completely rebuilt, after which its status is reported:

::

      // Retrieve the Index object
      var idx = catalog.getIndex("/C/myIndex.pdx");
      
      // Build the index
      var job = idx.build("app.alert('Index build');", true);
      
      // Confirm the path of the rebuilt index:
      console.println("Path of rebuilt index: " + job.path);
      
      // Confirm that the index was rebuilt:
      console.println("Type of operation: " + job.type);
      
      // Report the job status
      console.println("Status: " + job.status);

.. raw:: html

   <a name="83210"></a>

Searching metadata
==================

PDF documents contain document metadata in XML format, which includes information such as the document title, subject, author's name, keywords, copyright information, date modified, file size, and file name and location path.

To use JavaScript to search a document's XMP metadata, set the ``search`` object's ``docXMP`` property to ``true``, as shown in the following code:

::

      search.docXMP = true;
