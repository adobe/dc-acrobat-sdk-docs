******************************************************
DDE Messages
******************************************************

This chapter lists all DDE messages supported by Acrobat.

These DDE messages handle the display of the Acrobat application:

* `AppExit <IAC_API_DDE_Messages.html#50532407_21507>`_
* `AppHide <IAC_API_DDE_Messages.html#50532407_40535>`_
* `AppShow <IAC_API_DDE_Messages.html#50532407_36588>`_
* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`_
* `HideToolbar <IAC_API_DDE_Messages.html#50532407_41722>`_
* `MenuitemExecute <IAC_API_DDE_Messages.html#50532407_30748>`_
* `ShowToolbar <IAC_API_DDE_Messages.html#50532407_23287>`_

These DDE messages control the display of the document:

* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`_
* `DocDeletePages <IAC_API_DDE_Messages.html#50532407_17772>`_
* `DocInsertPages <IAC_API_DDE_Messages.html#50532407_24045>`_
* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`_
* `DocReplacePages <IAC_API_DDE_Messages.html#50532407_32593>`_
* `DocSave <IAC_API_DDE_Messages.html#50532407_35684>`_
* `DocSaveAs <IAC_API_DDE_Messages.html#50532407_11107>`_
* `DocSetViewMode <IAC_API_DDE_Messages.html#50532407_33767>`_
* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`_
* `FileOpenEx <IAC_API_DDE_Messages.html#50532407_17462>`__

These DDE messages handle printing of a document:

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`_
* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`_
* `FilePrintEx <IAC_API_DDE_Messages.html#50532407_28199>`_
* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`_
* `FilePrintSilentEx <IAC_API_DDE_Messages.html#50532407_29945>`_
* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`_
* `FilePrintToEx <IAC_API_DDE_Messages.html#50532407_42695>`_

These DDE messages control the view of a document.:

* `DocGoTo <IAC_API_DDE_Messages.html#50532407_55018>`_
* `DocGoToNameDest <IAC_API_DDE_Messages.html#50532407_79623>`_
* `DocPageDown <IAC_API_DDE_Messages.html#50532407_28808>`_
* `DocPageLeft <IAC_API_DDE_Messages.html#50532407_40373>`_
* `DocPageRight <IAC_API_DDE_Messages.html#50532407_14904>`_
* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`_
* `DocScrollTo <IAC_API_DDE_Messages.html#50532407_33970>`_
* `DocZoomTo <IAC_API_DDE_Messages.html#50532407_97206>`_

This DDE message is used for searching:

* `DocFind <IAC_API_DDE_Messages.html#50532407_77617>`_

Acrobat Reader supports the following subset of DDE messages:

* `AppExit <IAC_API_DDE_Messages.html#50532407_21507>`_
* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`_
* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`_
* `DocGoTo <IAC_API_DDE_Messages.html#50532407_55018>`_
* `DocGoToNameDest <IAC_API_DDE_Messages.html#50532407_79623>`_
* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`_
* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`_
* `FileOpenEx <IAC_API_DDE_Messages.html#50532407_17462>`_
* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`_
* `FilePrintEx <IAC_API_DDE_Messages.html#50532407_28199>`_
* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`_
* `FilePrintSilentEx <IAC_API_DDE_Messages.html#50532407_29945>`_
* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`_
* `FilePrintToEx <IAC_API_DDE_Messages.html#50532407_42695>`_

.. raw:: html

   <a name="50532407_21507"></a>

AppExit
=======

Exits the Acrobat application.

``AppExit`` is also supported in Acrobat Reader.

**Syntax**

::

   [AppExit()]

**Returns**

``true`` if the Acrobat application exits successfully, ``false`` otherwise.

**Related methods**

* `AppHide <IAC_API_DDE_Messages.html#50532407_40535>`__

* `AppShow <IAC_API_DDE_Messages.html#50532407_36588>`__

.. raw:: html

   <a name="50532407_40535"></a>

AppHide
=======

Iconifies or hides the Acrobat application.

**Syntax**

::

   [AppHide()]

**Returns**

``true`` if the Acrobat application is hidden successfully, ``false`` otherwise.

.. _related-methods-1:

**Related methods**

* `AppExit <IAC_API_DDE_Messages.html#50532407_21507>`__

* `AppShow <IAC_API_DDE_Messages.html#50532407_36588>`__

.. raw:: html

   <a name="50532407_36588"></a>

AppShow
=======

Shows the Acrobat application.

**Syntax**

::

   [AppShow()]

**Returns**

``true`` if the Acrobat application is shown successfully, ``false`` otherwise.

.. _related-methods-2:

**Related methods**

* `AppExit <IAC_API_DDE_Messages.html#50532407_21507>`__

* `AppHide <IAC_API_DDE_Messages.html#50532407_40535>`__

.. raw:: html

   <a name="50532407_21798"></a>

CloseAllDocs
============

Closes all open documents.

``CloseAllDocs`` is also supported in Acrobat Reader.

**Syntax**

::

   [CloseAllDocs()]

**Returns**

``true`` if the documents are closed successfully, ``false`` otherwise.

.. _related-methods-3:

**Related methods**

* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`__

* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__

* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`__

.. raw:: html

   <a name="50532407_35723"></a>

DocClose
========

Closes the specified document without saving it, and without prompting the user to save the document if it has been modified.

``DocClose`` is also supported in Acrobat Reader.

**Syntax**

::

   [DocClose(char* fullPath)]

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be closed.

**Returns**

``true`` if the document is closed successfully, ``false`` if the document does not exist or is not closed successfully.

.. _related-methods-4:

**Related methods**

* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`__

* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__

* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`__

.. raw:: html

   <a name="50532407_17772"></a>

DocDeletePages
==============

Deletes the specified pages in the document. Requests to delete all pages in a document are ignored because a document must have at least one page.

**Syntax**

::

   [DocDeletePages(char* fullPath, long fromPage, long toPage)]

.. _parameters-1:

**Parameters**

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

   * - fromPage
     - The page number of the first page to be deleted.

   * - toPage
     - The page number of the last page to be deleted.

**Returns**

``true`` if the pages are deleted successfully. Returns ``false`` if the document specified by ``fullPath`` does not exist, if the request was to delete all the document's pages, or if the pages are not deleted successfully.

.. _related-methods-5:

**Related methods**

* `DocInsertPages <IAC_API_DDE_Messages.html#50532407_24045>`__

* `DocReplacePages <IAC_API_DDE_Messages.html#50532407_32593>`__

.. raw:: html

   <a name="50532407_77617"></a>

DocFind
=======

Finds a string in a specified file. This does not use a cross-document search, but instead performs a page-by-page search of the specified file.

**Syntax**

::

   [DocFind(char* fullPath, char* string, boolean caseSensitive,

                    boolean wholeWords, boolean bReset)]

.. _parameters-2:

**Parameters**

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be searched.

   * - string
     - The string to be found.

   * - caseSensitive
     - ``true`` if the search is case-sensitive, ``false`` otherwise.

   * - wholeWords
     - ``true`` if the search will only match whole words, ``false`` otherwise.

   * - bReset
     - ``true`` if the search begins on the first page of the document, ``false`` if the search begins on the current page.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist or if the text is not found, ``true`` otherwise.

.. raw:: html

   <a name="50532407_55018"></a>

DocGoTo
=======

Goes to the specified page.

``DocGoTo`` is also supported in Acrobat Reader.

**Syntax**

::

   [DocGoTo(char* fullPath, long pageNum)]

.. _parameters-3:

**Parameters**

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file.

   * - pageNum
     - The page number of the destination page.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. raw:: html

   <a name="50532407_79623"></a>

DocGoToNameDest
===============

Goes to the specified named destination.

``DocGoToNameDest`` is also supported in Acrobat Reader.

**Syntax**

::

   [DocGoToNameDest(char* fullPath, char* nameDest)]

.. _parameters-4:

**Parameters**

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file.

   * - nameDest
     - The named destination.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. raw:: html

   <a name="50532407_24045"></a>

DocInsertPages
==============

Inserts pages from one file into another.

**Syntax**

::

   [DocInsertPages(char* fullPath, long insertAfterPage, char* sourcePath)]

.. _parameters-5:

**Parameters**

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the target document, which must already be open in the Acrobat application. 

   * - insertAfterPage
     - The page number after which pages are being inserted. Possible values can be a page number or one of the following:  ``PDBeforeFirstPage``: Pages are inserted at the beginning of the document.  ``PDLastPage``: Pages are inserted at the end of the document.

   * - sourcePath
     - The full path of the source document. This file need not be open in the Acrobat application. 

**Returns**

``true`` if the pages are inserted successfully, ``false`` if the document does not exist or the pages are not inserted successfully.

.. _related-methods-6:

**Related methods**

* `DocDeletePages <IAC_API_DDE_Messages.html#50532407_17772>`__

* `DocReplacePages <IAC_API_DDE_Messages.html#50532407_32593>`__

.. raw:: html

   <a name="50532407_31954"></a>

DocOpen
=======

Opens a document and adds it to the list of documents known to DDE, allowing it to be manipulated by other DDE messages (see `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`__ ).

``DocOpen`` is also supported in Acrobat Reader.

**Syntax**

::

   [DocOpen(char* fullPath)]

.. _parameters-6:

**Parameters**

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be opened.

**Returns**

``true`` if the file is opened successfully, ``false`` otherwise.

.. _related-methods-7:

**Related methods**

* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`__

* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`__

* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`__

.. raw:: html

   <a name="50532407_28808"></a>

DocPageDown
===========

Scrolls forward through the document by one screen area.

**Syntax**

::

   [DocPageDown(char* fullPath)]

.. _parameters-7:

**Parameters**

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-8:

**Related methods**

* `DocPageLeft <IAC_API_DDE_Messages.html#50532407_40373>`__

* `DocPageRight <IAC_API_DDE_Messages.html#50532407_14904>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

* `DocScrollTo <IAC_API_DDE_Messages.html#50532407_33970>`__

.. raw:: html

   <a name="50532407_40373"></a>

DocPageLeft
===========

Scrolls to the left by a small amount.

**Syntax**

::

   [DocPageLeft(char* fullPath)]

.. _parameters-8:

**Parameters**

.. _section-8:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-9:

**Related methods**

* `DocPageDown <IAC_API_DDE_Messages.html#50532407_28808>`__

* `DocPageRight <IAC_API_DDE_Messages.html#50532407_14904>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

.. raw:: html

   <a name="50532407_14904"></a>

DocPageRight
============

Scrolls to the right by a small amount.

**Syntax**

::

   [DocPageRight(char* fullPath)]

.. _parameters-9:

**Parameters**

.. _section-9:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-10:

**Related methods**

* `DocPageDown <IAC_API_DDE_Messages.html#50532407_28808>`__

* `DocPageLeft <IAC_API_DDE_Messages.html#50532407_40373>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

.. raw:: html

   <a name="50532407_16952"></a>

DocPageUp
=========

Scrolls backward through the document by one screen area.

**Syntax**

::

   [DocPageUp(char* fullPath)]

.. _parameters-10:

**Parameters**

.. _section-10:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-11:

**Related methods**

* `DocPageDown <IAC_API_DDE_Messages.html#50532407_28808>`__

* `DocPageLeft <IAC_API_DDE_Messages.html#50532407_40373>`__

* `DocPageRight <IAC_API_DDE_Messages.html#50532407_14904>`__

* `DocScrollTo <IAC_API_DDE_Messages.html#50532407_33970>`__

.. raw:: html

   <a name="50532407_14556"></a>

DocPrint
========

Prints a specified range of pages from a document, without displaying any modal Print dialog box to the user. For PostScript printing, only Level 1 operators are used, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

**Syntax**

::

   [DocPrint(char* fullPath, long startPage, long endPage)]

.. _parameters-11:

**Parameters**

.. _section-11:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of document.

   * - startPage
     - The page number of the first page to be printed.

   * - endPage
     - The page number of the last page to be printed.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-12:

**Related methods**

* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`__

* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

.. raw:: html

   <a name="50532407_32593"></a>

DocReplacePages
===============

Replaces pages in the target document using the specified pages from the source document.

**Syntax**

::

   [DocReplacePages(char* fullPath, long startDestPage,

                    char* sourcePath, long startSourcePage,

                    long endSourcePage)]

.. _parameters-12:

**Parameters**

.. _section-12:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the target document. This file must already be open in the Acrobat application. 

   * - startDestPage
     - The page number of the first page in the target document to be replaced.

   * - sourcePath
     - The full path of the source document. This file does not have to be already open in the Acrobat application. 

   * - startSourcePage
     - The page number of the first page in the source document to use as a replacement page.

   * - endSourcePage
     - The page number of the last page in the source document to use as a replacement page.

**Returns**

``true`` if the pages are replaced successfully. Returns ``false`` if the document does not exist or the pages are not replaced successfully.

.. _related-methods-13:

**Related methods**

* `DocDeletePages <IAC_API_DDE_Messages.html#50532407_17772>`__

* `DocInsertPages <IAC_API_DDE_Messages.html#50532407_24045>`__

.. raw:: html

   <a name="50532407_35684"></a>

DocSave
=======

Saves the specified file. The user is not warned if there are any problems saving the file.

**Syntax**

::

   [DocSave(char* fullPath)]

.. _parameters-13:

**Parameters**

.. _section-13:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be saved.

**Returns**

``true`` if the document is saved successfully, ``false`` if the document does not exist or is not saved successfully.

.. _related-methods-14:

**Related methods**

* `DocSaveAs <IAC_API_DDE_Messages.html#50532407_11107>`__

.. raw:: html

   <a name="50532407_11107"></a>

DocSaveAs
=========

Saves an open file to a new path. The user is not warned if there are any problems saving the file.

**Syntax**

::

   [DocSaveAs(char* fullPath, char* newPath)]

.. _parameters-14:

**Parameters**

.. _section-14:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the existing file.

   * - newPath
     - The full path of the new file.

**Returns**

``true`` if the document is saved successfully, ``false`` if the document does not exist or is not saved successfully.

.. _related-methods-15:

**Related methods**

* `DocSave <IAC_API_DDE_Messages.html#50532407_35684>`__

.. raw:: html

   <a name="50532407_33970"></a>

DocScrollTo
===========

Scrolls the view of the current page to the specified location.

**Syntax**

::

   [DocScrollTo(char* fullPath, int x, int y)]

.. _parameters-15:

**Parameters**

.. _section-15:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

   * - x
     - The destination's x–coordinate.

   * - y
     - The destination's y–coordinate.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-16:

**Related methods**

* `DocPageDown <IAC_API_DDE_Messages.html#50532407_28808>`__

* `DocPageLeft <IAC_API_DDE_Messages.html#50532407_40373>`__

* `DocPageRight <IAC_API_DDE_Messages.html#50532407_14904>`__

* `DocPageUp <IAC_API_DDE_Messages.html#50532407_16952>`__

.. raw:: html

   <a name="50532407_33767"></a>

DocSetViewMode
==============

Determines whether bookmarks, thumbnail images, or neither are shown in addition to the document.

**Syntax**

::

   [DocSetViewMode(char* fullPath, char* viewType)]

.. _parameters-16:

**Parameters**

.. _section-16:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the document.

   * - viewType
     - The view mode to be used. Must be one of the following:  ``PDUseThumbs``: Displays pages and thumbnail images.  ``PDUseNone``: Displays only pages.  ``PDUseBookmarks``: Displays pages and bookmarks.

**Returns**

``true`` if the view mode is set successfully, ``false`` if the document specified by ``fullPath`` does not exist or an unknown view mode is specified.

.. _related-methods-17:

**Related methods**

* `FullMenus <IAC_API_DDE_Messages.html#50532407_36770>`__

* `ShortMenus <IAC_API_DDE_Messages.html#50532407_38602>`__

.. raw:: html

   <a name="50532407_97206"></a>

DocZoomTo
=========

Sets the zoom for a specified document.

**Syntax**

::

   [DocZoomTo(char* fullPath, char* zoomType, int scale)]

.. _parameters-17:

**Parameters**

.. _section-17:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file whose zoom to set.

   * - zoomType
     - The zoom strategy to use. Must be one of the following:  ``AVZoomNoVary``: A fixed zoom, such as 100%.  ``AVZoomFitPage``: Fits the page in the window.  ``AVZoomFitWidth``: Fits the page's width into the window.  ``AVZoomFitVisibleWidth``: Fits the page's visible content into the window.

   * - scale
     - The magnification specified as a percent (for example, 100 corresponds to a magnification of 1.0). ``scale`` is used only when ``zoomType`` is ``AVZoomNoVary``. 

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, or if ``zoomType`` has an unknown value. Returns ``true`` otherwise.

.. raw:: html

   <a name="50532407_13590"></a>

FileOpen
========

Opens and displays the specified document. If the file is already open, it becomes the active document and appears in the front. This DDE message does not add the document to the list that can be manipulated using DDE messages; use `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__ to do that.

``FileOpen`` is also supported in Acrobat Reader.

**Syntax**

::

   [FileOpen(char* fullPath)]

.. _parameters-18:

**Parameters**

.. _section-18:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be opened.

**Returns**

``true`` if the file is opened successfully, ``false`` otherwise.

.. _related-methods-18:

**Related methods**

* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`__

* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`__

* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__

.. raw:: html

   <a name="50532407_17462"></a>

FileOpenEx
==========

Opens and displays a file. If the file is already open, it becomes the active document and appears in the front. This DDE message does not add the document to the list that can be manipulated using DDE messages; use `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__ to do that.

This method allows documents that either take a long time to open or are password-protected to open without stopping the flow of DDE messages. Documents opened with ``FileOpenEx`` are opened during an idle period. This is useful in situations in which several DDE messages are sent at once, such as a multiple file select from Windows Explorer.

``FileOpenEx`` is also supported in Acrobat Reader.

**Syntax**

::

   [FileOpenEx(char* fullPath)]

.. _parameters-19:

**Parameters**

.. _section-19:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be opened.

**Returns**

``true`` is always returned. The specified file may not actually open.

.. _related-methods-19:

**Related methods**

* `FileOpen <IAC_API_DDE_Messages.html#50532407_13590>`__

* `CloseAllDocs <IAC_API_DDE_Messages.html#50532407_21798>`__

* `DocClose <IAC_API_DDE_Messages.html#50532407_35723>`__

* `DocOpen <IAC_API_DDE_Messages.html#50532407_31954>`__

.. raw:: html

   <a name="50532407_41414"></a>

FilePrint
=========

Prints all pages in a document, displaying a modal print dialog box to the user. For PostScript printing, only Level 1 operators are used, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

``FilePrint`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrint(char* fullPath)]

.. _parameters-20:

**Parameters**

.. _section-20:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be printed.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-20:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

.. raw:: html

   <a name="50532407_28199"></a>

FilePrintEx
===========

Prints all pages in a document, displaying a modal print dialog box to the user. For PostScript printing, only Level 1 operators are used, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

Similar to ``FileOpenEx``, this is a special DDE command that returns ``true`` right away and performs the action during idle periods. This ensures that no DDE commands are lost when printing a large number of files simultaneously.

``FilePrintEx`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrintEx(char* fullPath)]

.. _parameters-21:

**Parameters**

.. _section-21:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to print.

**Returns**

``true`` is always returned.

.. _related-methods-21:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FileOpenEx <IAC_API_DDE_Messages.html#50532407_17462>`__

* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`__

* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`__

* `FilePrintSilentEx <IAC_API_DDE_Messages.html#50532407_29945>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

* `FilePrintToEx <IAC_API_DDE_Messages.html#50532407_42695>`__

.. raw:: html

   <a name="50532407_15288"></a>

FilePrintSilent
===============

Prints all pages in a document, without displaying a print dialog box to the user. For PostScript printing, only Level 1 operators are used, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

``FilePrintSilent`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrintSilent(char* fullPath)]

.. _parameters-22:

**Parameters**

.. _section-22:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be printed.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-22:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

.. raw:: html

   <a name="50532407_29945"></a>

FilePrintSilentEx
=================

Prints all pages in a document, without displaying a print dialog box to the user. For PostScript printing, only Level 1 operators are used, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

Similar to ``FileOpenEx``, this is a DDE command that returns ``true`` right away and does the action during idle periods. This is to ensure that no DDE commands are lost when printing a large number of files simultaneously.

``FilePrintSilentEx`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrintSilentEx(char* fullPath)]

.. _parameters-23:

**Parameters**

.. _section-23:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be printed.

**Returns**

``true`` is always returned.

.. _related-methods-23:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FileOpenEx <IAC_API_DDE_Messages.html#50532407_17462>`__

* `FilePrintEx <IAC_API_DDE_Messages.html#50532407_28199>`__

* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

* `FilePrintToEx <IAC_API_DDE_Messages.html#50532407_42695>`__

.. raw:: html

   <a name="50532407_20716"></a>

FilePrintTo
===========

Prints all pages in a document to a specified printer, using a specified driver and port, displaying a modal print dialog box to the user. For PostScript printing, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

``FilePrintTo`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrintTo(char* fullPath, char* printName, 

                    char* driverName, char* portName)]

.. _parameters-24:

**Parameters**

.. _section-24:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be printed.

   * - printName
     - The name of the printer. Required for Windows 95 and later.

   * - driverName
     - Printer driver name.

   * - portName
     - Port name. Required for Windows NT.

**Returns**

``false`` if the document specified by ``fullPath`` does not exist, ``true`` otherwise.

.. _related-methods-24:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FilePrint <IAC_API_DDE_Messages.html#50532407_41414>`__

* `FilePrintSilent <IAC_API_DDE_Messages.html#50532407_15288>`__

.. raw:: html

   <a name="50532407_42695"></a>

FilePrintToEx
=============

Prints all pages in a document to a specified printer, using a specified driver and port, displaying a modal print dialog box to the user. For PostScript printing, only ASCII data is generated, and the document's pages are not shrunk to fit into the imageable area of the printed page.

Similar to ``FileOpenEx``, this is a DDE command that returns ``true`` right away and does the action during idle periods. This is to ensure that no DDE commands are lost when printing a large number of files simultaneously.

``FilePrintToEx`` is also supported in Acrobat Reader.

**Syntax**

::

   [FilePrintToEx(char* fullPath, char* printName, 

                    char* driverName, char* portName)]

.. _parameters-25:

**Parameters**

.. _section-25:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be printed.

   * - printName
     - The name of the printer. Required for Windows 95 and later.

   * - driverName
     - Printer driver name.

   * - portName
     - Port name. Required for Windows NT.

**Returns**

``true`` is always returned.

.. _related-methods-25:

**Related methods**

* `DocPrint <IAC_API_DDE_Messages.html#50532407_14556>`__

* `FileOpenEx <IAC_API_DDE_Messages.html#50532407_17462>`__

* `FilePrintEx <IAC_API_DDE_Messages.html#50532407_28199>`__

* `FilePrintSilentEx <IAC_API_DDE_Messages.html#50532407_29945>`__

* `FilePrintTo <IAC_API_DDE_Messages.html#50532407_20716>`__

* `FilePrintToEx <IAC_API_DDE_Messages.html#50532407_42695>`__

.. raw:: html

   <a name="50532407_36770"></a>

FullMenus
=========

Displays full menus, and sets this option in the Acrobat application's preferences file.

With Acrobat 3.0 or later, all menus are displayed, and this function is ignored.

**Syntax**

::

   [FullMenus()]

**Returns**

``true`` if full menus are set successfully, ``false`` otherwise.

.. _related-methods-26:

**Related methods**

* `DocSetViewMode <IAC_API_DDE_Messages.html#50532407_33767>`__

* `ShortMenus <IAC_API_DDE_Messages.html#50532407_38602>`__

.. raw:: html

   <a name="50532407_41722"></a>

HideToolbar
===========

Hides the toolbar.

**Syntax**

::

   [HideToolbar()]

**Returns**

``true`` if the toolbar is hidden successfully, ``false`` otherwise.

.. _related-methods-27:

**Related methods**

* `ShowToolbar <IAC_API_DDE_Messages.html#50532407_23287>`__

.. raw:: html

   <a name="50532407_30748"></a>

MenuitemExecute
===============

Executes the menu item specified by its language-independent name.

**Syntax**

::

   [MenuitemExecute(char* menuItemName)]

.. _parameters-26:

**Parameters**

.. _section-26:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - menuItemName
     - The language-independent name of the menu item to execute. See the `Acrobat and PDF Library API Reference <./API_References/Acrobat_API_Reference/index.html>`__ for a list of menu item names.

.. raw:: html

   <a name="50532407_38602"></a>

ShortMenus
==========

Displays short menus, and sets this option in the Acrobat application's preferences file.

With Acrobat 3.0 or later, all menus are displayed, and this function is ignored.

**Syntax**

::

   [ShortMenus()]

**Returns**

``true`` if short menus are set successfully, ``false`` otherwise.

.. _related-methods-28:

**Related methods**

* `DocSetViewMode <IAC_API_DDE_Messages.html#50532407_33767>`__

* `FullMenus <IAC_API_DDE_Messages.html#50532407_36770>`__

.. raw:: html

   <a name="50532407_23287"></a>

ShowToolbar
===========

Shows the toolbar.

**Syntax**

::

   [ShowToolbar()]

**Returns**

``true`` if the toolbar is shown successfully, ``false`` otherwise.

.. _related-methods-29:

**Related methods**

* `HideToolbar <IAC_API_DDE_Messages.html#50532407_41722>`__
