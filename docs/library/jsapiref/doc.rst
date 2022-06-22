***********************
Doc and Doc.Media APIs
***********************


.. raw:: html

   <a name="53130"></a>

.. _doc-2:

Doc
===

This object provides the interface between a PDF document open in the viewer and the JavaScript interpreter. It provides methods and properties for accessing the PDF document.

You can access the Doc object from JavaScript in a variety of ways:

-  The ``this`` object usually points to the Doc object of the underlying document.
-  Some properties and methods, such as ``extractPages``, ``app.activeDocs``, and ``app. openDoc``, return the Doc object.
-  The Doc object can often be accessed through ``event`` objects, which are created for each event by which a JavaScript is executed:

   -  For ``mouse``, ``focus``, ``blur``, ``calculate``, ``validate``, and ``format`` events, ``event.target`` returns the Field object that initiated the event. You can then access the Doc object through the Doc method of the Field object.
   -  For all other events, ``event.target`` points to the Doc.

**Example 1: Access through this object**

Use ``this`` to get the number of pages in this document:

::

      var nPages = this.numPages;
      // Get the crop box for "this" document:
      var aCrop = this.getPageBox();

**Example 2: Access through return values**

**Returns** values from one document to open, modify, save and close another.

::

      // Path relative to "this" doc:
      var myDoc = app.openDoc("myNovel.pdf", this); 
      myDoc.info.Title = "My Great Novel"; 
      myDoc.saveAs(myDoc.path);
      myDoc.closeDoc(true);

**Example 3: Access through the event object.**

For mouse, calculate, validate, format, focus, and blur events:

::

      var myDoc = event.target.doc;

For all other events (for example, batch or console events):

::

      var myDoc = event.target;

Doc properties
--------------

.. list-table::
   :header-rows: 1

   * - `alternatePresentations <JS_API_AcroJS.html#27482>`__
     - `external <JS_API_AcroJS.html#49680>`__
     - `mouseX <JS_API_AcroJS.html#20930>`__
     - `securityHandler <JS_API_AcroJS.html#22498>`__

   * - `author <JS_API_AcroJS.html#38374>`__
     - `filesize <JS_API_AcroJS.html#42942>`__
     - `mouseY <JS_API_AcroJS.html#22578>`__
     - `selectedAnnots <JS_API_AcroJS.html#40269>`__

   * - `baseURL <JS_API_AcroJS.html#12307>`__
     - `hidden <JS_API_AcroJS.html#66824>`__
     - `noautocomplete <JS_API_AcroJS.html#33664>`__
     - `sounds <JS_API_AcroJS.html#41410>`__

   * - `bookmarkRoot <JS_API_AcroJS.html#74889>`__
     - `hostContainer <JS_API_AcroJS.html#53327>`__
     - `numFields <JS_API_AcroJS.html#32457>`__
     - `spellDictionaryOrder <JS_API_AcroJS.html#67243>`__

   * - `calculate <JS_API_AcroJS.html#20516>`__
     - `icons <JS_API_AcroJS.html#12748>`__
     - `numPages <JS_API_AcroJS.html#10320>`__
     - `spellLanguageOrder <JS_API_AcroJS.html#94403>`__

   * - `collection <JS_API_AcroJS.html#22209>`__
     - `info <JS_API_AcroJS.html#19596>`__
     - `numTemplates <JS_API_AcroJS.html#20010>`__
     - `subject <JS_API_AcroJS.html#33580>`__

   * - `creationDate <JS_API_AcroJS.html#13471>`__
     - `innerAppWindowRect <JS_API_AcroJS.html#40177>`__
     - `path <JS_API_AcroJS.html#52978>`__
     - `templates <JS_API_AcroJS.html#83340>`__

   * - `creator <JS_API_AcroJS.html#25897>`__
     - `innerDocWindowRect <JS_API_AcroJS.html#56840>`__
     - `outerAppWindowRect <JS_API_AcroJS.html#66325>`__
     - `title <JS_API_AcroJS.html#18152>`__

   * - `dataObjects <JS_API_AcroJS.html#32072>`__
     - `isModal <JS_API_AcroJS.html#96424>`__
     - `outerDocWindowRect <JS_API_AcroJS.html#85278>`__
     - `URL <JS_API_AcroJS.html#51048>`__

   * - `delay <JS_API_AcroJS.html#58427>`__
     - `keywords <JS_API_AcroJS.html#50133>`__
     - `pageNum <JS_API_AcroJS.html#17925>`__
     - `viewState <JS_API_AcroJS.html#36404>`__

   * - `dirty <JS_API_AcroJS.html#39186>`__
     - `layout <JS_API_AcroJS.html#45922>`__
     - `pageWindowRect <JS_API_AcroJS.html#91323>`__
     - `xfa <JS_API_AcroJS.html#55666>`__

   * - `disclosed <JS_API_AcroJS.html#28746>`__
     - `media <JS_API_AcroJS.html#39862>`__
     - `permStatusReady <JS_API_AcroJS.html#45430>`__
     - `XFAForeground <JS_API_AcroJS.html#40320>`__

   * - `docID <JS_API_AcroJS.html#34893>`__
     - `metadata <JS_API_AcroJS.html#92040>`__
     - `producer <JS_API_AcroJS.html#84415>`__
     - `zoom <JS_API_AcroJS.html#13145>`__

   * - `documentFileName <JS_API_AcroJS.html#38270>`__
     - `modDate <JS_API_AcroJS.html#14361>`__
     - `requiresFullSave <JS_API_AcroJS.html#59354>`__
     - `zoomType <JS_API_AcroJS.html#77812>`__

   * - `dynamicXFAForm <JS_API_AcroJS.html#38772>`__
     - 
     - 
     - 

.. raw:: html

   <a name="27482"></a>

alternatePresentations
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

References the document's ``AlternatePresentation`` object. If the functionality needed to display alternate presentations is not available, this property is ``undefined``.

The ``AlternatePresentation`` object provides access to the document's alternate presentations. The PDF language extension specifies that each document can potentially have many named alternate presentations. Each alternate presentation with a known ``type`` will have a corresponding ``alternatePresentations`` property in the document. This property should have the same name as its alternate presentation and should reference its alternate presentation's ``AlternatePresentation`` object. If there are no recognized alternate presentations in the document, this object is empty (does not have any properties).

The `PDF Referece <https://adobe.com/go/pdfreference>`_ provides details on alternate presentations.

.. note::

   For compatibility with the current implementation, the alternate presentation name must be an ASCII string. The only alternate presentation type currently implemented is "SlideShow".

See the `AlternatePresentation <JS_API_AcroJS.html#15210>`__ object for properties and methods that can be used to control an alternate presentation.

     - Object  undefined
     - R

Example 1: Test whether the ``AlternatePresentation`` object is present:

::

      if( typeof this.alternatePresentations != "undefined" )
      {
          // Assume AlternatePresentations are present
          // List the names of all alternate presentations in the doc
          for ( var ap in this.alternatePresentations ) console.println(ap);
      }

Example 2: Get the slide show named ``MySlideShow`` and start the show.

::

      // oMySlideShow is an AlternatePresentation object
      oMySlideShow = this.alternatePresentations["MySlideShow"];
      oMySlideShow.start();

.. raw:: html

   <a name="38374"></a>

.. _author-1:

author
~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - D
     - String
     - R/W (Adobe Reader: R only)

.. note::

   This property has been superseded by the ``info`` property.

The author of the document.

.. raw:: html

   <a name="12307"></a>

baseURL
~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - D
     - No
     - All
     - String
     - R/W

The base URL for the document is used to resolve relative web links within the document. See also `URL <JS_API_AcroJS.html#51048>`__.

Example: Sets the base URL and creates a link to go to a page relative to the base URL.

::

      console.println("Base URL was " + this.baseURL);
      this.baseURL = "http://www.example.com/products/";
      console.println("Base URL is " + this.baseURL);
      // Add a link to the first page
      var link = this.addLink(0, [200,200, 400, 300])
      // Set an action that goes to the Example Reader page on the Example website.
      link.setAction("this.getURL('reader',false)")

.. raw:: html

   <a name="74889"></a>

bookmarkRoot
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Object
     - R

The root bookmark for the bookmark tree. This bookmark is not displayed to the user but is a programmatic construct used to access the tree and the child bookmarks.

Example: See the `Bookmark <JS_API_AcroJS.html#49491>`__ object for an example.

.. raw:: html

   <a name="20516"></a>

.. _calculate-1:

calculate
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 4.0
     - No
     - No
     - All
     - Boolean
     - R/W

If ``true`` (the default value), calculations can be performed for this document. If ``false``, calculations cannot be performed for this document. This property supersedes the ``app.calculate`` property, whose use is now discouraged.

.. raw:: html

   <a name="22209"></a>

.. _collection-1:

collection
~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - All
     - Collection object or a ``null`` object if there is no collection in this PDF.
     - R

The value of the ``collection`` property is a `Collection <JS_API_AcroJS.html#26749>`__ object of the collection in this PDF. Properties of the collection may be changed through the `Collection <JS_API_AcroJS.html#26749>`__ object.

.. note::

   A PDF file cannot be converted into a PDF collection. The attribute of a document as a PDF collection cannot be removed.

If a new collection is desired, use ``app.newCollection``.

Example: 

::

   if (this.collection) {
      var collection = this.collection;
      // Do something with the collection...
   }

.. raw:: html

   <a name="13471"></a>">

creationDate

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - All
     - Date
     - R

.. note::

   This property has been superseded by the ``info`` property.

The document's creation date.

.. raw:: html

   <a name="25897"></a>

creator
~~~~~~~

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - No
     - String
     - R

.. note::

   This property has been superseded by the ``info`` property.

The creator of the document (for example, "Adobe FrameMaker" or "Adobe PageMaker").

.. raw:: html

   <a name="32072"></a>

dataObjects
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Array
     - R

An array containing all the named `Data <JS_API_AcroJS.html#69212>`__ objects in the document.

Related properties and methods are `openDataObject <JS_API_AcroJS.html#51160>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `removeDataObject <JS_API_AcroJS.html#81117>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__.

Example: List all embedded files in the document.

::

      var d = this.dataObjects;
      for (var i = 0; i < d.length; i++)
          console.println("Data Object[" + i + "]=" + d[i].name);

.. raw:: html

   <a name="58427"></a>

.. _delay-1:

delay
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 4.0
     - No
     - No
     - All
     - Boolean
     - R/W

This property can delay the redrawing of any appearance changes to every field in the document. It is generally used to buffer a series of changes to fields before requesting that the fields regenerate their appearance. If ``true``, all changes are queued until ``delay`` is reset to ``false``, at which time all the fields on the page are redrawn.

See also the Field object `delay <JS_API_AcroJS.html#29401>`__ property.

.. raw:: html

   <a name="39186"></a>

dirty
~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - D
     - No
     - Not available in Reader
     - Boolean
     - R/W

Specifies whether the document needs to be saved as the result of a changes to the document. It is useful to reset the ``dirty`` flag when performing changes that do not warrant saving, such as updating a status field.

.. note::

   If the document is temporary or newly created, setting ``dirty`` to ``false`` has no effect. That is, the user is still asked to save changes before closing the document. See `requiresFullSave <JS_API_AcroJS.html#59354>`__.

Example 1: Reset a form and sets ``dirty`` to ``false``. After the reset, the user can close the document without having to dismiss a Save dialog box.

::

      var f = this.getField("MsgField");
      f.value = "You have made too many mistakes, I'm resetting the form. "
          + "Start over, this time follow the directions!";
      this.resetForm();
      this.dirty = false;

.. raw:: html

   <a name="64781"></a>

Example 2: Fill a text field to instruct the user to complete the form. The script is constructed so that populating the field does not change the save state of the document.

::

      var f = this.getField("MsgField");
      var b = this.dirty;
      f.value = "Please fill in the fields below.";
      this.dirty = b;

.. raw:: html

   <a name="28746"></a>

disclosed
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.05
     - No
     - Yes
     - All
     - Boolean
     - R/W

Specifies whether the document should be accessible to JavaScript scripts in other documents.

The ``app.openDoc`` and ``app.activeDocs`` methods check the ``disclosed`` property of the document before returning its Doc.

.. note::

   The ``disclosed`` property can only be set during batch, console, Page/Open and Doc/Open events. See the `event <JS_API_AcroJS.html#38077>`__ object for a discussion of JavaScript events. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

Example 1: A document can be disclosed to others by placing the code at the document level (or as a page open action) at the top level:

::

      this.disclosed = true;

Example 2: The following code can be used in an Execute JavaScript Batch Sequence to disclose all selected documents.

::

      this.addScript("Disclosed", "this.disclosed = true;");

.. raw:: html

   <a name="34893"></a>

docID
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array
     - R

An array of two strings in hex-encoded binary format. The first string is a permanent identifier based on the contents of the file at the time it was originally created; it does not change when the file is incrementally updated. The second string is a changing identifier based on the file's contents at the time it was last updated. These identifiers are defined by the optional ``ID`` entry in a PDF file's trailer dictionary. (See the `PDF Referece <https://adobe.com/go/pdfreference>`_ .)

See `Example 6 (Acrobat 7.0) <JS_API_AcroJS.html#96149>`__ for an example of usage.

.. raw:: html

   <a name="38270"></a>

documentFileName
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - String
     - R

The base file name, with extension, of the document referenced by the Doc. The device-independent path is not returned. See also the `path <JS_API_AcroJS.html#52978>`__ and `URL <JS_API_AcroJS.html#51048>`__ properties. The file size of the document can be obtained from the ``filesize`` property.

Example: Get the document file name.

::

      console.println('"The file name of this document is '
          + this.documentFileName +'."');

Executing the script on this document, the *JavaScript for Acrobat API Reference*, yields the following statement:

::

      "The file name of this document is js_api_reference.pdf"

.. raw:: html

   <a name="38772"></a>

dynamicXFAForm
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Boolean
     - R

**Returns** ``true`` if the document is a dynamic XFA form and ``false`` otherwise.

A dynamic XFA form is one in which some of the fields can grow or shrink in size to accommodate the values they contain.

Example: See the `XFA <JS_API_AcroJS.html#22317>`__ object for an example of usage.

.. raw:: html

   <a name="49680"></a>">

external

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 4.0
     - No
     - No
     - All
     - Boolean
     - R

Specifies whether the current document is being viewed in the Acrobat application or in an external window (such as a web browser).

Example: Detect whether this document is in a browser or not.

::

      if ( this.external )
      {
          // Viewing from a browser
      }
      else
      {
          // Viewing in the Acrobat application.
      }

.. raw:: html

   <a name="42942"></a>

filesize
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - Integer
     - R

The file size of the document in bytes.

**Example (Acrobat 5.0)**

Get a readout of the difference in file sizes before and after saving a document:

::

      // Add the following code to the "Document Will Save" section
      var filesizeBeforeSave = this.filesize
      console.println("File size before saving is " + filesizeBeforeSave);
      
      // Add the following code to the "Document Did Save" section
      var filesizeAfterSave = this.filesize
      console.println("File size after saving is " + filesizeAfterSave);
      var difference = filesizeAfterSave - filesizeBeforeSave;
      console.println("The difference is " + difference );
      if ( difference < 0 )
          console.println("Reduced filesize!");
      else
          console.println("Increased filesize!");
   

.. raw:: html

   <a name="66824"></a>

.. _hidden-1:

hidden
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Boolean
     - R

This property is ``true`` if the document's window is hidden. A window may be hidden, for example, because it is being operated on in batch mode or if it was explicitly opened hidden. The ``openDataObject`` and ``app.openDoc`` methods can be used to open a document with a hidden window.

Example: Open a document and verify its hidden status.

::

      oDoc = app.openDoc({
          cPath:"/C/myDocs/myHidden.pdf", 
          bHidden: true
      });
      console.println("It is " + oDoc.hidden + " that this document hidden.");
      oDoc.closeDoc();

.. raw:: html

   <a name="53327"></a>

hostContainer
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.05
     - No
     - No
     - All
     - Object
     - R/W

An instance of the ``HostContainer`` object if the PDF document is embedded in another container such as a web browser, otherwise undefined.

.. note::

   This property is not implemented on the Mac OS platform.

.. raw:: html

   <a name="12748"></a>

icons
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Array  ``null``
     - R

An array of named ``Icon`` objects that are present in the document-level named icons tree. If there are no named icons in the document, the property has a value of ``null``.

See also `addIcon <JS_API_AcroJS.html#42105>`__, `getIcon <JS_API_AcroJS.html#79139>`__, `importIcon <JS_API_AcroJS.html#49983>`__, `removeIcon <JS_API_AcroJS.html#84305>`__, the Field object properties `buttonGetIcon <JS_API_AcroJS.html#41330>`__, `buttonImportIcon <JS_API_AcroJS.html#27194>`__, `buttonSetIcon <JS_API_AcroJS.html#39147>`__, and the `Icon <JS_API_AcroJS.html#73868>`__ object.

Example 1: Report the number of named icons in the current document.

::

      if (this.icons == null)
          console.println("No named icons in this doc");
      else
          console.println("There are " + this.icons.length
              + " named icons in this doc");

Example 2: List all named icons the current document.

::

      for (var i = 0; i < this.icons.length; i++) {
          console.println("icon[" + i + "]=" + this.icons[i].name);
      }

.. raw:: html

   <a name="19596"></a>

.. _info-1:

info
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - D
     - No
     - All
     - Object
     - R/W (Adobe Reader: R only)

Specifies an object with properties from the document information dictionary in the PDF file. (See the `PDF Referece <https://adobe.com/go/pdfreference>`_ ) *.* Standard entries are:

::

      Title
      Author
      Authors                         (Acrobat 9.0)
      Subject
      Keywords
      Creator
      Producer
      CreationDate
      ModDate
      Trapped 

For Acrobat, properties of this object are writeable and setting a property dirties the document. Additional document information fields can be added by setting non-standard properties.

In Adobe Reader, writing to any property in this object throws an exception.

.. note::

   Standard entries are case insensitive, that is, ``info.Keywords`` is the same as ``info.keywords``.

Acrobat 9.0 intoduces the ``Authors`` (``authors``) property of the ``info`` object. Use ``Authors`` to retrieve a seim-colon delimited list of authors. Author information is saved in the XMP metadata, and Doc ``.info.Authors`` retrieves the information from the metadata as an array. Individual authors can be accessed. See `Example 3 (Acrobat 9.0) <JS_API_AcroJS.html#91740>`__ below.

Example 1: Get the title of the current document.

::

      var docTitle = this.info.Title;

Example 2: Get information about the document.

::

      this.info.Title = "JavaScript, The Definitive Guide";
      this.info.ISBN = "1-56592-234-4";
      this.info.PublishDate = new Date();
      for (var i in this.info) 
          console.println(i + ": "+ this.info[i]);

The above script could produce the following output:

::

      CreationDate: Mon Jun 12 14:54:09 GMT-0500 (Central Daylight Time) 2000
      Producer: Acrobat Distiller 4.05 for Windows
      Title: JavaScript, The Definitive Guide
      Creator: FrameMaker 5.5.6p145
      ModDate: Wed Jun 21 17:07:22 GMT-0500 (Central Daylight Time) 2000
      SavedBy: Adobe Acrobat 4.0 Jun 19 2000
      PublishDate: Tue Aug 8 10:49:44 GMT-0500 (Central Daylight Time) 2000
      ISBN: 1-56592-234-4

.. raw:: html

   <a name="91740"></a>

**Example 3 (Acrobat 9.0)**

This example demonstrates how to set and to get multiple authors. Multiple authors may also be entered through the Description tab of the Document Properties dialog box.

Set three authors for this document.

::

   this.info.Authors=["Robat, A. C.", "Obe, A. D.","Torys, D. P."];

Execute ``this.info.Authors`` in the JavaScript Debugger Console window, the result is given below.

::

   Robat, A. C.,Obe, A. D.,Torys, D. P.

Get each of the authors.

::

   for (var i=0; i<this.info.Authors.length; i++)
       console.println((i+1) + ": " + this.info.Authors[i]);

The result,as reported in the Console window, is given below.

::

   1: Robat, A. C.
   2: Obe, A. D.
   3: Torys, D. P.

.. raw:: html

   <a name="40177"></a>

innerAppWindowRect
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of Numbers
     - R

This property returns an array of screen coordinates (a rectangle) for the Acrobat inner application window. This rectangle does not include items such as the title bar and resizing border, which are part of the outer rectangle of the application window.

Example: Read back to the console the Acrobat inner application window.

::

      var coords = this.innerAppWindowRect;
      console.println(coords.toSource()) 
      // Possible output: [115, 154, 1307, 990]

See also `innerDocWindowRect <JS_API_AcroJS.html#56840>`__, `outerAppWindowRect <JS_API_AcroJS.html#66325>`__ and `outerDocWindowRect <JS_API_AcroJS.html#85278>`__.

.. raw:: html

   <a name="56840"></a>

innerDocWindowRect
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of Numbers
     - R

This property returns an array of screen coordinates (a rectangle) for the Acrobat inner document window. This rectangle does not include items such as the title bar and resizing border, which are part of the outer rectangle of the document window.

The document and application rectangles may differ on different platforms. For example, on Windows, the document window is always inside the application window; on Mac OS, they are the same.

See also `innerAppWindowRect <JS_API_AcroJS.html#40177>`__, `outerAppWindowRect <JS_API_AcroJS.html#66325>`__, `outerDocWindowRect <JS_API_AcroJS.html#85278>`__, and `pageWindowRect <JS_API_AcroJS.html#91323>`__.

.. raw:: html

   <a name="96424"></a>

isModal
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.05
     - No
     - No
     - All
     - Object
     - R

A Boolean value indicating whether the document is currently in a modal state (for example, displaying a modal dialog box using ``app.execDialog``).

.. raw:: html

   <a name="50133"></a>

keywords
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - D
     - object
     - R/W (Adobe Reader: R only)

.. note::

   This property has been superseded by the ``info`` property.

The keywords that describe the document (for example, "forms", "taxes", "government").

.. raw:: html

   <a name="45922"></a>

.. _layout-1:

layout
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - String
     - R/W
     
Changes the page layout of the current document. Valid values are:

::

      SinglePage 
      OneColumn
      TwoColumnLeft
      TwoColumnRight

In Acrobat 6.0 and later, there are two additional properties:

::

      TwoPageLeft
      TwoPageRight

Example: Put the document into a continuous facing layout where the first page of the document appears in the left column:

::

      this.layout = "TwoColumnLeft";

.. raw:: html

   <a name="39862"></a>

.. _media-1:

media
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``Doc.media`` object
     - R/W

An object that contains multimedia properties and methods for the document. The properties and methods are described under the `Doc.media <JS_API_AcroJS.html#69910>`__ object.

.. raw:: html

   <a name="92040"></a>

metadata
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - D
     - No
     - Not available in Reader
     - String
     - R/W

Allows you to access the XMP metadata embedded in a PDF document. Returns a string containing the metadata as XML. For information on embedded XMP metadata, see the `PDF Referece <https://adobe.com/go/pdfreference>`_ .

**Exceptions**

``RaiseError`` is thrown if setting metadata to a string not in XMP format.

Example 1: Try to create metadata not in XMP format.

::

      this.metadata = "this is my metadata";
      RaiseError: The given metadata was not in the XMP format
      Global.metadata:1:Console undefined:Exec
       ===> The given metadata was not in the XMP format

Example 2: Create a PDF report file with metadata from a document.

::

      var r = new Report();
      r.writeText(this.metadata);
      r.open("myMetadataReportFile");

Example 3: (Acrobat 8.0) This example illustrates how to use E4X to change the metadata of the document. The script sets the Copyright Status, the Copyright Notice and the Copyright Info URL fields. The script can be executed from the console or as a batch sequence.

::

      var CopyrightStatus = "True";
      var CopyrightNotice = "Copyright(C) 2006, Example Systems, Inc."
      var CopyrightInfoURL = "http://www.example.com"
      var meta = this.metadata;
      var myXMPData = new XML(meta);
      myx = new Namespace("adobe:ns:meta/");
      myrdf = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
      mypdf = new Namespace("http://ns.adobe.com/pdf/1.3/");
      myxap = new Namespace("http://ns.adobe.com/xap/1.0/");
      mydc = new Namespace("http://purl.org/dc/elements/1.1/");
      myxapRights = new Namespace("http://ns.adobe.com/xap/1.0/rights/");
      var p = myXMPData.myrdf::RDF.myrdf::Description;
      /*
          We test whether this element has a value already, if no, we assign it a 

           value, otherwise we assign it another value.
      */
      if (p.mydc::rights.myrdf::Alt.myrdf::li.toString() == "") {
          p[0] +=  <rdf:Description rdf:about=""
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
              <dc:rights>
                  <rdf:Alt>
                      <rdf:li xml:lang="x-default">
                          {CopyrightNotice}
                      </rdf:li>
                  </rdf:Alt>
              </dc:rights>
          </rdf:Description>
      } else
          p.mydc::rights.myrdf::Alt.myrdf::li = CopyrightNotice;
   /*
      Some elements are converted into attributes, so we need to first test
      whether the xapRights:Marked attribute is present, if not, we add it in as an
      element; otherwise, if the attribute is present, we update the attribute.
      Acrobat changes certain elements into attributes; the xapRights:Marked and
      xapRights:WebStatement are two such examples, but dc:rights above is one
      that is not changed into an attribute. 
   */
      if (p.@myxapRights::Marked.toString() == "" ) {
          p[0] +=  <rdf:Description rdf:about=""
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:xapRights="http://ns.adobe.com/xap/1.0/rights/">
              <xapRights:Marked>{CopyrightStatus}</xapRights:Marked> 
              <xapRights:WebStatement> {CopyrightInfoURL} </xapRights:WebStatement>
          </rdf:Description>
      } else {
          p.@myxapRights::Marked = CopyrightStatus;
          p.@myxapRights::WebStatement = CopyrightInfoURL;
      }
   // Convert myXMPData into a string
      myNewXMPStr=myXMPData.toXMLString();
   // and assign it to the document metadata
      this.metadata = myNewXMPStr;

.. raw:: html

   <a name="14361"></a>

.. _moddate-3:

modDate
~~~~~~~

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - All
     - Date
     - R

.. note::

   This property has been superseded by the ``info`` property.

The date the document was last modified.

.. raw:: html

   <a name="20930"></a>

mouseX
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Number
     - R

Gets the *x* coordinate of the mouse coordinates in default user space in relation to the current page.

Example: Get the coordinates of the mouse as the user moves it around the viewer.

::

      function getMouseCoor() {
          console.println( "("+this.mouseX+","+ this.mouseY+")" );
      }
      var ckMouse = app.setInterval("getMouseCoor()", 100);
      var timeout = app.setTimeOut(
          "app.clearInterval(ckMouse); app.clearTimeOut(timeout)",2000);

.. raw:: html

   <a name="22578"></a>

mouseY
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Number
     - R

Gets the *y* coordinate of the mouse coordinates in default user space in relation to the current page.

.. raw:: html

   <a name="33664"></a>

noautocomplete
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Boolean
     - R/W

This property can be used to turn off the auto-complete feature of Acrobat forms, for this document only:

-  If ``true``, no suggestions are made as the user enters data into a field.
-  If ``false``, auto-complete respects the user preference Forms > Auto-Complete.

Setting this property does not change the user's auto-complete preferences.

Initially, this property has a value of ``undefined``.

Example: The following script could be executed from an open page action or as a top-level document JavaScript. It turns off the auto-complete feature:

::

      this.noautocomplete = true;

.. raw:: html

   <a name="32457"></a>">

numFields
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 4.0
     - No
     - No
     - All
     - Integer
     - R

The total number of fields in the document. See also `getNthFieldName <JS_API_AcroJS.html#30005>`__.

Example 1: 

::

      console.println("There are " + this.numFields + " in this document");

Example 2: This script uses the ``numFields`` property and ``getNthFieldName`` method to loop through all fields in the document. All button fields are changed so that they have a beveled appearance (other modifications to the buttons of the document can also be made).

::

      for ( var i = 0; i < this.numFields; i++) {
          var fname = this.getNthFieldName(i);
          if ( fname.type = "button" ) f.borderStyle = border.b;
      }

.. raw:: html

   <a name="10320"></a>

numPages
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - Integer
     - R

The number of pages in the document.

Example 1: 

::

      console.println("There are " + this.numPages + " in this document");

Example 2: Delete the last page from the document. The (0-based) page number of the last page in the document is ``this.numPages - 1``.

::

      this.deletePages({ nStart: this.numPages - 1 });

.. raw:: html

   <a name="20010"></a>

numTemplates
~~~~~~~~~~~~

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - All
     - Integer
     - R

.. note::

   This property has been superseded by ``templates``.

The number of templates in the document.

.. raw:: html

   <a name="52978"></a>

.. _path-2:

path
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - String
     - R

The device-independent path of the document, for example:

::

   /c/Program Files/Adobe/
   Acrobat 11.0/Help/AcroHelp.pdf

The file name of the document can be acquired by the ``documentFileName`` property. See also the `URL <JS_API_AcroJS.html#51048>`__ property.

.. raw:: html

   <a name="66325"></a>

outerAppWindowRect
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of Numbers
     - R

This property returns an array of screen coordinates (a rectangle) for the Acrobat outer application window. This rectangle includes items such as the title bar and resizing border, which are not part of the inner rectangle of the application window.

See also `innerAppWindowRect <JS_API_AcroJS.html#40177>`__, `outerDocWindowRect <JS_API_AcroJS.html#85278>`__, `outerDocWindowRect <JS_API_AcroJS.html#85278>`__, and `pageWindowRect <JS_API_AcroJS.html#91323>`__.

.. raw:: html

   <a name="85278"></a>

outerDocWindowRect
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of Numbers
     - R

This property returns an array of screen coordinates (a rectangle) for the Acrobat outer document window. This rectangle includes items such as the title bar and resizing border, which are not part of the inner rectangle of the document window.

The application and document rectangles may differ on different platforms. For example, on Windows, the document window is always inside the application window. In Mac OS, the windows are the same.

See also `innerAppWindowRect <JS_API_AcroJS.html#40177>`__, `outerDocWindowRect <JS_API_AcroJS.html#85278>`__, `outerAppWindowRect <JS_API_AcroJS.html#66325>`__, and `pageWindowRect <JS_API_AcroJS.html#91323>`__.

.. raw:: html

   <a name="17925"></a>

pageNum
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - Integer
     - R/W

Gets or sets the current page of the document. When setting ``pageNum`` to a specific page, remember that the values are 0-based.

Example: Go to the first page of the document.

::

      this.pageNum = 0;

Advance the document to the next page.

::

      this.pageNum++;

.. raw:: html

   <a name="91323"></a>

pageWindowRect
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of Numbers
     - R

An array of screen coordinates (a rectangle) for the Acrobat page view window. The page view window is the area inside the inner document window in which the PDF content is displayed.

See also `innerAppWindowRect <JS_API_AcroJS.html#40177>`__, `outerDocWindowRect <JS_API_AcroJS.html#85278>`__, `outerAppWindowRect <JS_API_AcroJS.html#66325>`__, and `outerDocWindowRect <JS_API_AcroJS.html#85278>`__.

.. raw:: html

   <a name="45430"></a>

permStatusReady
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R

A Boolean value specifying whether the permissions for this document have been resolved.

When downloading over a network connection, ``false`` can indicate that the document is not available, in the case where permissions must be determined based on an certification signature that covers the entire document.

.. raw:: html

   <a name="84415"></a>

producer
~~~~~~~~

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - All
     - String
     - R

.. note::

   This property has been superseded by the `info <JS_API_AcroJS.html#19596>`__ property.

The producer of the document (for example, "Acrobat Distiller®" or "PDFWriter").

.. raw:: html

   <a name="59354"></a>

requiresFullSave
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.0
     - No
     - No
     - All
     - Boolean
     - R

This property is ``true`` if the document requires a full save because it is temporary or newly created. Otherwise, it is ``false``.

Example: 

::

      var oDoc = app.newDoc();
      console.println("It is " + oDoc.requiresFullSave 
          + " that this document requires a full save.");

.. raw:: html

   <a name="22498"></a>

securityHandler
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - String
     - R

The name of the security handler used to encrypt the document. Returns ``null`` if there is no security handler (for example, the document is not encrypted).

Example: 

::

      console.println(this.securityHandler != null ? 
          "This document is encrypted with " + this.securityHandler 
          + " security." :   "This document is unencrypted.");

This script could print the following if the document was encrypted with the standard security handler.

::

      This document is encrypted with Standard security.

.. raw:: html

   <a name="40269"></a>

selectedAnnots
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - C
     - Array
     - R

An array of ``Annotation`` objects corresponding to all currently selected markup annotations.

See also `getAnnot <JS_API_AcroJS.html#27614>`__ and `getAnnots <JS_API_AcroJS.html#26254>`__.

Example: Show all the comments of selected annotations in the console.

::

      var aAnnots = this.selectedAnnots;
      for (var i=0; i < aAnnots.length; i++)
          console.println(aAnnots[i].contents);

.. raw:: html

   <a name="41410"></a>

sounds
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Array
     - R

An array containing all of the named ``Sound`` objects in the document.

See also `getSound <JS_API_AcroJS.html#10552>`__, `importSound <JS_API_AcroJS.html#42848>`__, `deleteSound <JS_API_AcroJS.html#26240>`__, and the `Sound <JS_API_AcroJS.html#11412>`__ object.

Example: 

::

      var s = this.sounds;
      for (i = 0; i < s.length; i++)
          console.println("Sound[" + i + "]=" + s[i].name);

.. raw:: html

   <a name="67243"></a>

spellDictionaryOrder
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Array
     - R/W

An array specifying the dictionary search order for this document. For example, the form designer of a medical form may want to specify a medical dictionary to be searched first before searching the user's preferred order.

The Spelling plug-in first searches for words in this array, then searches the dictionaries the user has selected on the Spelling Preference panel. The user's preferred order is available from ``spell.dictionaryOrder``. An array of the currently installed dictionaries can be obtained using ``spell.dictionaryNames``.

.. note::

   When setting this property, an exception is thrown if any of the elements in the array is not a valid dictionary name.

.. raw:: html

   <a name="94403"></a>

spellLanguageOrder
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - X
     - Array
     - R/W

An array specifying the language array search order for this document. The Spelling plug-in first searches for words in this array, then it searches the languages the user has selected on the Spelling Preferences panel. The user's preferred order is available from ``spell.languageOrder``. An array of currently installed languages can be obtained using the ``spell.languages`` property.

.. raw:: html

   <a name="33580"></a>

.. _subject-1:

subject
~~~~~~~

The document's subject. 

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - D
     - No
     - No
     - String
     - R only in Reader

.. note::

   This property has been superseded by the ``info`` property.

.. raw:: html

   <a name="83340"></a>

templates
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - Array
     - R

An array of all of the ``Template`` objects in the document. See also `createTemplate <JS_API_AcroJS.html#36567>`__, `getTemplate <JS_API_AcroJS.html#53136>`__, and `removeTemplate <JS_API_AcroJS.html#97652>`__.

Example: List all templates in the document.

::

      var t = this.templates
      for ( var i=0; i < t.length; i++)
      {
          var state = (t[i].hidden) ? "visible" : "hidden"
          console.println("Template: "" + t[i].name 
              + "", current state: " + state);
      }

.. raw:: html

   <a name="18152"></a>

title
~~~~~

.. _section-473:
 
.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - deprecated
     - No
     - No
     - D
     - String
     - R/W (Adobe Reader: R only)

.. note::

   This property has been superseded by the ``info`` property.

The title of the document.

.. raw:: html

   <a name="51048"></a>

URL
~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 5.0
     - No
     - No
     - All
     - String
     - R

The document's URL. If the document is local, it returns a URL with a ``file:///`` scheme for Windows and UNIX and ``file://localhost/`` for Mac OS. This may be different from the ``baseURL``.

See also the `path <JS_API_AcroJS.html#52978>`__ and `documentFileName <JS_API_AcroJS.html#38270>`__ properties.

.. raw:: html

   <a name="36404"></a>

viewState
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 7.05
     - No
     - No
     - All
     - Object
     - R/W

An opaque object representing the current view state of the document. The state includes, at minimum, information about the current page number, scroll position, zoom level, and field focus.

To set this value, you must use what was previously returned from a read of the value. It can be used to restore the view state of a document.

.. note::

   The object is only defined within an embedded PDF.

Example: This example gets the view state and sends it to the host application, which can store it and pass it back to the viewer later to restore the view to the original state. This code may be executed by a button in the PDF document. The first entry in the array signals the nature of the message to the host.

::

      if(this.hostContainer)
      {
          cVState = this.viewState.toSource();
          aMsg = new Array( "viewState", cVState );
          this.hostContainer.postMessage(aMsg);
      }

In the host application, the message handler might have this form:

::

      var cViewState=""; // Variable to save the viewState
      function onMessageFunc( stringArray )
      {
          var PDFObject = document.getElementById( PDFObjectID );
          if ( this != PDFObject.messageHandler )
              alert( "Incorrect this value in onMessage handler" );
          // The first entry in the encoming array is the signal
          var signal = stringArray[0];
   
          switch ( signal ) {
              case "Msg":
                  var msgStr = "";
                  for ( var i = 1; i < stringArray.length; i++ )
                      msgStr += (stringArray[ i ] + "<br>");
                  writeMsg( msgStr ); // A function to write to the document.
                  break;
   
              case "viewState":
                  // View state, let's save this
                  cViewState = stringArray[1];
                  break;
          }
      }

You can post the value of ``cViewState`` back to the embedded PDF using a button. Within the document level JavaScript of the PDF, you might have,

::

      if ( this.hostContainer )
      {
          myHostContainer = this.hostContainer;
          myHostContainer.messageHandler = {
              onMessage: function(aMessage) {
                  var f = this.doc.getField("msg4pdf");
                  var strValue = "";
                  var signal = aMessage[0];
                  switch ( signal ) {
                      case "Msg":
                          for(var i = 1; i < aMessage.length; i++) 
                              strValue += aMessage[i] + "r";
                          f.value = strValue;
                          break;
                      case "viewState":
                          var restoreViewState = eval( aMessage[1] );  
                          // Reset the viewState, begin sure to acquire the correct
                          // Doc as the doc property of this.
                          this.doc.viewState = restoreViewState; 
                          break;
                  }
              },
              onError: function(error, aMessage) { 
                      console.println("error: "+ error.toString())
              },
              onDisclose: HostContainerDisclosurePolicy.SameOriginPolicy,
              allowDeliverWhileDocIsModel: true
          };
          // The this object will be the messageHandler instance that the

           // method is being called on, so we save the Doc as a doc

           // property of the messageHandler instance.
          myHostContainer.messageHandler.doc = this;
      }

.. raw:: html

   <a name="55666"></a>

xfa
~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.02
     - No
     - No
     - All
     - XFAObject
     - R

The property is defined only if the document is an XML form, that is, if the document was created in LiveCycle Designer. When defined, ``xfa`` is a static XFAObject, which is the root node of the underlying xfa model, and gives access to the xfa scripting object model (SOM).

Refer to the document *Adobe XML Form Object Model Reference* for details on the xfa SOM. The document *Converting Acrobat JavaScript for Use in LiveCycle Designer Forms* has a comparison between the Acrobat and LiveCycle Designer scripting object models.

.. note::

   When executing this property from a folder level script, pass the Doc object from the document so that ``xfa`` will be executed in the proper context. See Example 2.

Example 1: Suppose this document is an XML form, and that there is a text field named ``EmployeeName``. This example uses the ``xfa`` object to access and change the value of this field.

::

      var eN = this.xfa.form.form1.EmployeeName;
      console.println("nEmployeeName: " + eN.rawValue);

The output to the console is

::

   EmployeeName: A. C. Robat

Now change the value of the EmployeeName.

::

      eN.rawValue = "Robat, A. C."
      console.println("nEmployeeName: " + eN.rawValue);

The output to the console is

::

   EmployeeName: Robat, A. C.

The value of the field is changed.

Example 2: Call a function, defined in a folder level script file, that uses the xfa property, by passing the Doc object.

::

      function isXFA(doc) {
          var wasWasNot = (typeof doc.xfa == "undefined") ? "not" : "";
          console.println("This document was "+wasWasNot+"created by Designer.");
      }

From within the document, or from the console, the function is called is by ``isXFA(this)``.

.. raw:: html

   <a name="40320"></a>

XFAForeground
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 8.0
     - No
     - No
     - All
     - Boolean
     - R

**Returns** ``true`` if the document is an XFA Foreground type of form and ``false`` otherwise.

Beginning with version 8.0, a PDF file can be imported as artwork into LiveCycle Designer. The possibly rich graphical content of the PDF is used as a background on which form fields can be placed using LiveCycle Designer. The ``XFAForeground`` property reports back whether the PDF was created in this way, a value of ``true`` means the PDF was imported into LiveCycle Designer as artwork, then saved by LiveCycle Designer.

Example: This script determines whether the current document is an XFA Foreground type of form, that is, whether it was created by importing a PDF into LiveCycle Designer and saved.

::

      if ( this.XFAForeground )
          console.println("This is an XFA Foreground form.");

.. raw:: html

   <a name="13145"></a>

zoom
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - Number
     - R/W

The current page zoom level. Allowed values are between 8.33% and 6400%, specified as a percentage number. For example, a zoom value of 100 specifies 100%.

Example: Zoom to twice the current zoom level.

::

      this.zoom *= 2;

Set the zoom to 200%.

::

      this.zoom = 200;

.. raw:: html

   <a name="77812"></a>

zoomType
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 3.01
     - No
     - No
     - All
     - String
     - R/W

The current zoom type of the document. The table below lists the valid zoom types.

The convenience ``zoomtype`` object defines all the valid zoom types and is used to access all zoom types.

=================== ================= =======
Zoom type           Keyword           Version
=================== ================= =======
``NoVary``          ``zoomtype.none`` 
``FitPage``         ``zoomtype.fitP`` 
``FitWidth``        ``zoomtype.fitW`` 
``FitHeight``       ``zoomtype.fitH`` 
``FitVisibleWidth`` ``zoomtype.fitV`` 
``Preferred``       ``zoomtype.pref`` 
``ReflowWidth``     ``zoomtype.refW`` 6.0
=================== ================= =======

Example: Set the zoom type of the document to fit the width.

::

      this.zoomType = zoomtype.fitW;

Doc methods
-----------

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - `addAnnot <JS_API_AcroJS.html#92733>`__
     - `getAnnot3D <JS_API_AcroJS.html#54780>`__
     - `mailDoc <JS_API_AcroJS.html#56439>`__

   * - `addField <JS_API_AcroJS.html#10776>`__
     - `getAnnots <JS_API_AcroJS.html#26254>`__
     - `mailForm <JS_API_AcroJS.html#29734>`__

   * - `addIcon <JS_API_AcroJS.html#42105>`__
     - `getAnnots3D <JS_API_AcroJS.html#86665>`__
     - `movePage <JS_API_AcroJS.html#52380>`__

   * - `addLink <JS_API_AcroJS.html#21259>`__
     - `getColorConvertAction <JS_API_AcroJS.html#82396>`__
     - `newPage <JS_API_AcroJS.html#58928>`__

   * - `addRecipientListCryptFilter <JS_API_AcroJS.html#27295>`__
     - `getDataObject <JS_API_AcroJS.html#86645>`__
     - `openDataObject <JS_API_AcroJS.html#51160>`__

   * - `addRequirement <JS_API_AcroJS.html#17850>`__
     - `getDataObjectContents <JS_API_AcroJS.html#42001>`__
     - `preflight <JS_API_AcroJS.html#29633>`__

   * - `addScript <JS_API_AcroJS.html#81436>`__
     - `getField <JS_API_AcroJS.html#16389>`__
     - `print <JS_API_AcroJS.html#71443>`__

   * - `addThumbnails <JS_API_AcroJS.html#78355>`__
     - `getIcon <JS_API_AcroJS.html#79139>`__
     - `removeDataObject <JS_API_AcroJS.html#81117>`__

   * - `addWatermarkFromFile <JS_API_AcroJS.html#85679>`__
     - `getLegalWarnings <JS_API_AcroJS.html#27797>`__
     - `removeField <JS_API_AcroJS.html#96986>`__

   * - `addWatermarkFromText <JS_API_AcroJS.html#73135>`__
     - `getLinks <JS_API_AcroJS.html#80686>`__
     - `removeIcon <JS_API_AcroJS.html#84305>`__

   * - `addWeblinks <JS_API_AcroJS.html#89952>`__
     - `getNthFieldName <JS_API_AcroJS.html#30005>`__
     - `removeLinks <JS_API_AcroJS.html#57408>`__

   * - `applyRedactions <JS_API_AcroJS.html#64761>`__
     - `getNthTemplate <JS_API_AcroJS.html#94458>`__
     - `removePreflightAuditTrail <JS_API_AcroJS.html#30155>`__

   * - `bringToFront <JS_API_AcroJS.html#93004>`__
     - `getOCGs <JS_API_AcroJS.html#82809>`__
     - `removeRequirement <JS_API_AcroJS.html#63100>`__

   * - `calculateNow <JS_API_AcroJS.html#14930>`__
     - `getOCGOrder <JS_API_AcroJS.html#78739>`__
     - `removeScript <JS_API_AcroJS.html#89341>`__

   * - `certifyInvisibleSign <JS_API_AcroJS.html#79191>`__
     - `getPageBox <JS_API_AcroJS.html#40225>`__
     - `removeTemplate <JS_API_AcroJS.html#97652>`__

   * - `closeDoc <JS_API_AcroJS.html#34158>`__
     - `getPageLabel <JS_API_AcroJS.html#67733>`__
     - `removeThumbnails <JS_API_AcroJS.html#54115>`__

   * - `colorConvertPage <JS_API_AcroJS.html#87010>`__
     - `getPageNthWord <JS_API_AcroJS.html#32356>`__
     - `removeWeblinks <JS_API_AcroJS.html#63275>`__

   * - `createDataObject <JS_API_AcroJS.html#49328>`__
     - `getPageNthWordQuads <JS_API_AcroJS.html#68212>`__
     - `replacePages <JS_API_AcroJS.html#58207>`__

   * - `createTemplate <JS_API_AcroJS.html#36567>`__
     - `getPageNumWords <JS_API_AcroJS.html#12782>`__
     - `resetForm <JS_API_AcroJS.html#49978>`__

   * - `deletePages <JS_API_AcroJS.html#99469>`__
     - `getPageRotation <JS_API_AcroJS.html#33574>`__
     - `saveAs <JS_API_AcroJS.html#34461>`__

   * - `deleteSound <JS_API_AcroJS.html#26240>`__
     - `getPageTransition <JS_API_AcroJS.html#67725>`__
     - `scroll <JS_API_AcroJS.html#14697>`__

   * - `embedDocAsDataObject <JS_API_AcroJS.html#62491>`__
     - `getPreflightAuditTrail <JS_API_AcroJS.html#34744>`__
     - `selectPageNthWord <JS_API_AcroJS.html#11214>`__

   * - `embedOutputIntent <JS_API_AcroJS.html#79258>`__
     - `getPrintParams <JS_API_AcroJS.html#39806>`__
     - `setAction <JS_API_AcroJS.html#35182>`__

   * - `encryptForRecipients <JS_API_AcroJS.html#21893>`__
     - `getSound <JS_API_AcroJS.html#10552>`__
     - `setDataObjectContents <JS_API_AcroJS.html#44192>`__

   * - `encryptUsingPolicy <JS_API_AcroJS.html#41211>`__
     - `getTemplate <JS_API_AcroJS.html#53136>`__
     - `setOCGOrder <JS_API_AcroJS.html#53506>`__

   * - `exportAsFDF <JS_API_AcroJS.html#26522>`__
     - `getURL <JS_API_AcroJS.html#57404>`__
     - `setPageAction <JS_API_AcroJS.html#69422>`__

   * - `exportAsFDFStr <JS_API_AcroJS.html#71999>`__
     - `getUserUnitSize <JS_API_AcroJS.html#20792>`__
     - `setPageBoxes <JS_API_AcroJS.html#10299>`__

   * - `exportAsText <JS_API_AcroJS.html#64033>`__
     - `gotoNamedDest <JS_API_AcroJS.html#11678>`__
     - `setPageLabels <JS_API_AcroJS.html#22005>`__

   * - `exportAsXFDF <JS_API_AcroJS.html#87686>`__
     - `importAnFDF <JS_API_AcroJS.html#21267>`__
     - `setPageRotations <JS_API_AcroJS.html#40483>`__

   * - `exportAsXFDFStr <JS_API_AcroJS.html#49722>`__
     - `importAnXFDF <JS_API_AcroJS.html#61122>`__
     - `setPageTabOrder <JS_API_AcroJS.html#43314>`__

   * - `exportDataObject <JS_API_AcroJS.html#84187>`__
     - `importDataObject <JS_API_AcroJS.html#64990>`__
     - `setPageTransitions <JS_API_AcroJS.html#76168>`__

   * - `exportXFAData <JS_API_AcroJS.html#36024>`__
     - `importIcon <JS_API_AcroJS.html#49983>`__
     - `spawnPageFromTemplate <JS_API_AcroJS.html#94080>`__

   * - `extractPages <JS_API_AcroJS.html#60156>`__
     - `importSound <JS_API_AcroJS.html#42848>`__
     - `submitForm <JS_API_AcroJS.html#20780>`__

   * - `flattenPages <JS_API_AcroJS.html#97907>`__
     - `importTextData <JS_API_AcroJS.html#92335>`__
     - `syncAnnotScan <JS_API_AcroJS.html#87285>`__

   * - `getAnnot <JS_API_AcroJS.html#27614>`__
     - `importXFAData <JS_API_AcroJS.html#65500>`__
     - `timestampSign <JS_API_AcroJS.html#75273>`__

   * - 
     - `insertPages <JS_API_AcroJS.html#20950>`__ 
     - `validatePreflightAuditTrail <JS_API_AcroJS.html#45663>`__ 

.. raw:: html

   <a name="92733"></a>

addAnnot
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - 
     - C 

Creates an ``Annotation`` object having the specified properties. Properties not specified are given their default values for the specified ``type`` of annotation.

.. note::

   (Acrobat 8.0) The behavior of ``addAnnot`` is changed in the case the ``author`` property is unspecified. If ``addAnnot`` is executed in an unprivileged context, the default value of ``author`` is the string ``undefined`` ; if ``addAnnot`` is executed in an privileged context, the default value of the ``author`` property is the login name of the current user.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - object literal
     - A generic object that specifies the properties of the ``Annotation`` object, such as ``type``, ``rect``, and ``page``, to be created. 



**Returns** 

The new ``Annotation`` object.

Example 1: This minimal example creates a square annotation.

::

      var sqannot = this.addAnnot({type: "Square", page: 0});

``sqannot`` will be created as a square annotation on the first page (using 0-based page numbering).

Example 2: Add a Text annotation with various properties.

::

      var annot = this.addAnnot
      ({
          page: 0,
          type: "Text",
          author: "A. C. Robat",
          point: [300,400],
          strokeColor: color.yellow,
          contents: "Need a little help with this paragraph.",
          noteIcon: "Help"
      });

Example 3: Add a Square annotation with various properties.

::

      var annot = this.addAnnot({
          page: 0,
          type: "Square",
          rect: [0, 0, 100, 100],
          name: "OnMarketShare",
          author: "A. C. Robat",
          contents: "This section needs revision."
   });

Example 4: A fancy ink annotation in the shape of a three-leaf rose.

::

      var inch = 72, x0 = 2*inch, y0 = 4*inch;
      var scaledInch = .5*inch;
      var nNodes = 60;
      var theta = 2*Math.PI/nNodes;
      var points = new Array();
      for (var i = 0; i <= nNodes; i++) {
          Theta = i*theta;
          points[i] = [x0 + 2*Math.cos(3*Theta)*Math.cos(Theta)*scaledInch,
          y0 + 2*Math.cos(3*Theta)*Math.sin(Theta)*scaledInch];
      }
      var annot = this.addAnnot({
          type: "Ink",
          page: 0,
          name: "myRose",
          author: "A. C. Robat",
          contents: "Three leaf rose",
          gestures: [points],
          strokeColor: color.red,
          width: 1
      });

.. raw:: html

   <a name="10776"></a>

.. _addfield-1:

addField
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - 
     - F 

Creates a new form field and returns it as a Field object.

.. note::

   (Acrobat 6.0): Beginning with Acrobat 6.0, this method can be used from within Adobe Reader for documents with forms usage rights enabled. Prior to 6.0, it was not available from Adobe Reader.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name of the new field to create. This name can use the dot separator syntax to denote a hierarchy (for example, ``name.last`` creates a parent node, ``name``, and a child node, ``last``). 

   * - ``cFieldType``
     - The type of form field to create. Valid types are:  *text button combobox listbox checkbox radiobutton signature*

   * - ``nPageNum``
     - The 0-based index of the page to which to add the field.

   * - ``oCoords``
     - An array of four numbers in rotated user space that specifies the size and placement of the form field. These four numbers are the coordinates of the bounding rectangle, in the following order: upper-left *x*, upper-left *y*, lower-right *x* and lower-right *y* . See also the Field object `rect <JS_API_AcroJS.html#91364>`__ property.  -  If you use the **Info** panel to obtain the coordinates of the bounding rectangle, you must transform them from info space to rotated user space. To do this, subtract the info space *y* coordinate from the on-screen page height.



**Returns** 

The newly created Field object.

Example: The following code might be used in a batch sequence to create a navigational icon on every page of a document, for each document in a selected set of documents.

::

      var inch = 72;
      for (var p = 0; p < this.numPages; p++) {
          // Position a rectangle (.5 inch, .5 inch)
          var aRect = this.getPageBox( {nPage: p} );
          aRect[0] += .5*inch;            // from upper left hand corner of page.
          aRect[2] = aRect[0]+.5*inch;    // Make it .5 inch wide
          aRect[1] -= .5*inch;
          aRect[3] = aRect[1] - 24;       // and 24 points high
      
          // Now construct a button field with a right arrow from ZapfDingbats
          var f = this.addField("NextPage", "button", p, aRect )
          f.setAction("MouseUp", "this.pageNum++");
          f.delay = true;
          f.borderStyle = border.s;
          f.highlight = "push";
          f.textSize = 0;                 // Auto-sized
          f.textColor = color.blue;
          f.fillColor = color.ltGray;
          f.textFont = font.ZapfD
          f.buttonSetCaption("341")      // A right arrow
          f.delay = false;
      }

See the Field object `setAction <JS_API_AcroJS.html#37472>`__ method for another example.

.. raw:: html

   <a name="42105"></a>

addIcon
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - All

Adds a new named ``Icon`` object to the document-level icon tree, storing it under the specified name.

See also `icons <JS_API_AcroJS.html#12748>`__, `getIcon <JS_API_AcroJS.html#79139>`__, `importIcon <JS_API_AcroJS.html#49983>`__, `removeIcon <JS_API_AcroJS.html#84305>`__, and the Field object methods `buttonGetIcon <JS_API_AcroJS.html#41330>`__, `buttonImportIcon <JS_API_AcroJS.html#27194>`__, and `buttonSetIcon <JS_API_AcroJS.html#39147>`__.

**Parameters**

========= ===========================
``cName`` The name of the new object
``icon``  The ``Icon`` object to add.
========= ===========================

Example: This example takes an icon already attached to a form button field in the document and assigns a name to it. This name can be used to retrieve the icon object with ``getIcon`` for use in another button, for example.

::

      var f = this.getField("myButton"); 
      this.addIcon("myButtonIcon", f.buttonGetIcon());

.. raw:: html

   <a name="21259"></a>

addLink
~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - 
     - Not available in Reader

Adds a new link to the specified page with the specified coordinates, if the user has permission to add links to the document. See also `getLinks <JS_API_AcroJS.html#80686>`__, `removeLinks <JS_API_AcroJS.html#57408>`__ and the `Link <JS_API_AcroJS.html#48288>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The page on which to add the new link.

   * - ``oCoords``
     - An array of four numbers in rotated user space specifying the size and placement of the link. The numbers are the coordinates of the bounding rectangle in the following order: upper-left *x*, upper-left *y*, lower-right *x* and lower-right *y* .



**Returns** 

The newly created ``Link`` object.

Example 1: Create simple navigational links in the lower left and right corners of each page of the current document. The link in lower left corner goes to the previous page; the one in the lower right corner goes to the next page.

::

      var linkWidth = 36, linkHeight = 18;
      for ( var i=0; i < this.numPages; i++)
      {
          var cropBox = this.getPageBox("Crop", i);
          var linkRect1 = [0,linkHeight,linkWidth,0];
          var offsetLink = cropBox[2] - cropBox[0] - linkWidth;
          var linkRect2 = [offsetLink,linkHeight,linkWidth + offsetLink,0]
          var lhLink = this.addLink(i, linkRect1);
          var rhLink = this.addLink(i, linkRect2);
          var nextPage = (i + 1) % this.numPages;
          var prevPage = (i - 1) % this.numPages;
          var prevPage = (prevPage>=0) ? prevPage : -prevPage;
          lhLink.setAction( "this.pageNum = " + prevPage);
          lhLink.borderColor = color.red;
          lhLink.borderWidth = 1;
          rhLink.setAction( "this.pageNum = " + nextPage);
          rhLink.borderColor = color.red;
          rhLink.borderWidth = 1;
      }

See the `Link <JS_API_AcroJS.html#48288>`__ object for information on setting the properties and the action of a link.

.. raw:: html

   <a name="93361"></a>

Example 2: Search through the document for the word "Acrobat" and create a link around that word.

::

      for (var p = 0; p < this.numPages; p++)
      {
          var numWords = this.getPageNumWords(p);
          for (var i=0; i<numWords; i++)
          {
              var ckWord = this.getPageNthWord(p, i, true);
              if ( ckWord == "Acrobat")
              {
                  var q = this.getPageNthWordQuads(p, i);
                  // Convert quads in default user space to rotated
                  // User space used by Links.
                  m = (new Matrix2D).fromRotated(this,p);
                  mInv = m.invert()
                  r = mInv.transform(q)
                  r=r.toString()
                  r = r.split(",");
                  l = addLink(p, [r[4], r[5], r[2], r[3]]);
                  l.borderColor = color.red;
                  l.borderWidth = 1;
                  l.setAction("this.getURL('http://www.example.com/')");
              }
          }
      }

.. raw:: html

   <a name="27295"></a>

addRecipientListCryptFilter
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - Yes
     - X

Adds a crypt filter to the document. The crypt filter is used for encrypting Data objects.

See also the ``cCryptFilter`` parameter of the `importDataObject <JS_API_AcroJS.html#64990>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__ methods.

.. note::

   Can only be executed during a batch, application initialization or console event. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cCryptFilter``
     - The language-independent name of the crypt filter. This same name should be used as the value of the ``cCryptFilter`` parameter of the Doc methods ``importDataObject``, ``createDataObject``, and ``setDataObjectContents``.   
.. note::  For Acrobat 7.0, the value of ``cCryptFilter`` must be ``DefEmbeddedFile`` ; for other versions of Acrobat, the value of ``cCryptFilter`` can be any string.

   * - ``oGroup``
     - An array of ``Group`` objects that lists the recipients for whom the data is to be encrypted.

Example: This script encrypts the current document and embeds it into a PDF document.

::

      var Note = "Select the list of people that you want to send this"

           + " document to. Each person must have both an email address" 

           + " and a certificate that you can use when creating the" 

           + "envelope.";
      var oOptions = { bAllowPermGroups: false, cNote: Note,
          bRequireEmail: true };
      var oGroups = security.chooseRecipientsDialog( oOptions );
      var env = app.openDoc( "/c/temp/ePaperMailEnvelope.pdf" );
      env.addRecipientListCryptFilter( "MyFilter", oGroups );
      env.importDataObject( "secureMail0", this.path, "MyFilter" );
      var envPath = "/c/temp/outMail.pdf";
      env.saveAs( envPath );

.. note::

   This script was executed in the console but is best executed as a folder JavaScript as part of a larger script for sending PDF documents securely.

.. raw:: html

   <a name="17850"></a>

addRequirement
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0.5
     - D
     - Yes
     - X

Allows a PDF document to be authored so that a certain requirement is needed for the document to properly function in Acrobat.

When Acrobat opens a document containing a requirement, it will try to satisfy the requirement before allowing the user to freely interact with the document. If the requirement is not fulfilled, the application may limit the functionality of the document.

.. note::

   This method can only be called from a console or batch event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cType``
     - The type of document requirement. The types are described by the ``Requirements Enumerator`` object.

   * - ``oReq``
     - (Optional) A ``Requirement`` object.

.. raw:: html

   <a name="77983"></a>

**Requirements enumerator object**

This object lists all the possible types of requirements that a document may contain to properly function in Acrobat.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - ``requirements.EnableJavaScripts``
     - Some documents may contain data validation scripts that may never run if the Enable JavaScript Execution user preference is disabled. This property allows a PDF document to enforce the execution of its scripts in Acrobat. The user will be prompted to either enable JavaScript execution for the particular document or to open the document in read-only mode.

**Requirement object**

This generic object contains properties that describe the nature of the requirement

======== ==============================================
Property Description
======== ==============================================
``aRH``  (Optional) An array of ``ReqHandler`` objects.
======== ==============================================

.. raw:: html

   <a name="50471"></a>

**ReqHandler object**

This generic object contains information about a requirement handler that can be used when Acrobat finds an unrecognized requirement. The viewer should delegate requirement checking for the unrecognized requirement to the first handler in the array that supports the type. If no requirement handler can be found to deal with the unrecognized requirement, a generic message should be provided by the viewer.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - ``cType``
     - A string specifying the type of the requirement handler (see the `ReqHandlers Enumerator object <JS_API_AcroJS.html#10986>`__ for a lists of possible names).

   * - ``cScriptName``
     - (Optional) A string specifying the name of a document-level JavaScript present in the document. It may be present if the value of ``cType`` is ``reqHandlers.JS``.   The named script will not be executed in case the requirement is satisfied.

.. raw:: html

   <a name="10986"></a>

**ReqHandlers Enumerator object**

This object enumerates the types of requirement handlers a document may contain.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - ``reqHandlers.JS``
     - This handler manages document-level scripts that deal with unrecognized requirements in the PDF document.

   * - ``reqHandlers.NoOp``
     - This handler allows older viewers to ignore unrecognized requirements.

Example: Add a requirement to enable JavaScript in a document.

::

      addRequirement(this.requirements.EnableJavaScripts, 
          {[{cType: reqHandlers.JS, cScriptName: "requirement"}]});

.. raw:: html

   <a name="81436"></a>

addScript
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - 
     - Not available in Reader

Sets a document-level script for a document. See also `setAction <JS_API_AcroJS.html#35182>`__, `setPageAction <JS_API_AcroJS.html#69422>`__, the ``Bookmark`` object `setAction <JS_API_AcroJS.html#52228>`__ method, and the Field object `setAction <JS_API_AcroJS.html#37472>`__ method.

.. note::

   This method overwrites any script already defined for ``cName``.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name of the script. If a script with this name already exists, the new script replaces the old one.

   * - ``cScript``
     - A JavaScript expression to be executed when the document is opened.

Example: Create a beeping sound every time the document is opened.

::

      this.addScript("My Code", "app.beep(0);");

See `Example 2 <JS_API_AcroJS.html#64781>`__ following the `disclosed <JS_API_AcroJS.html#28746>`__ property for another example.

.. raw:: html

   <a name="78355"></a>

addThumbnails
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - 
     - Not available in Reader

Creates thumbnails for the specified pages in the document. See also the `removeThumbnails <JS_API_AcroJS.html#54115>`__ method.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. If only ``nEnd`` is specified, the range of a pages is 0 to ``nEnd``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages. See ``nStart`` for details.

.. raw:: html

   <a name="85679"></a>

addWatermarkFromFile
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - D
     - Yes
     - X

Adds a page as a watermark to the specified pages in the document and places the watermark in an optional content group (OCG). See also the `OCG <JS_API_AcroJS.html#66402>`__ object.

.. note::

   Can only be executed during a batch or console event. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cDIPath``
     - The device-independent path of the source file to use for the watermark. If the file at this location is not a PDF file, Acrobat attempts to convert the file to a PDF file.

   * - ``nSourcePage``
     - (optional) The 0-based index of the page in the source file to be used as the watermark. The default is 0.

   * - ``nStart``
     - (optional) The 0-based index of the first page in the range of pages to which the watermark should be added. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

   * - ``nEnd``
     - (optional) The last page in the range of pages to which the watermark should be added. See ``nStart`` for details.

   * - ``bOnTop``
     - (optional) A Boolean value specifying the z-ordering of the watermark. If ``true`` (the default), the watermark is added above all other page content. If ``false``, the watermark is added below all other page content. This parameter is ignored if ``bFixedPrint`` is ``true``. 

   * - ``bOnScreen``
     - (optional) A Boolean value to indicate whether the watermark should be displayed when viewing the document on screen. The default is ``true``. 

   * - ``bOnPrint``
     - (optional) A Boolean value to indicate whether the watermark should be displayed when printing the document. The default is ``true``. 

   * - ``nHorizAlign``
     - (optional) A number indicating how the watermark should be aligned horizontally. See ``app.`` `constants <JS_API_AcroJS.html#99849>`__ ``.align`` for possible values. The default is ``app.constants.align.center``. 

   * - ``nVertAlign``
     - (optional) A number indicating how the watermark should be aligned vertically. See ``app.`` `constants <JS_API_AcroJS.html#99849>`__ ``.align`` for possible values. The default is ``app.constants.align.center``. 

   * - ``nHorizValue``
     - (optional) A number used to shift the horizontal position of the watermark on the page. If ``bPercentage`` is ``true``, this number represents a percentage of the horizontal page size. If ``bPercentage`` is ``false``, this number represents the number of points to be offset. The default is 0. 

   * - ``nVertValue``
     - (optional) A number used to shift the vertical position of the watermark on the page. If ``bPercentage`` is ``true``, this number represents a percentage of the vertical page size. If ``bPercentage`` is ``false``, this number represents the number of points to be offset. The default is 0. 

   * - ``bPercentage``
     - (optional) A Boolean value that indicates whether ``nHorizValue`` and ``nVertValue`` represent a percentage of the page size or an explicit number of points. The default is ``false``. 

   * - ``nScale``
     - (optional) The scale to be used for the watermark, where 1.0 is 100%. A value of -1 specifies that the watermark should fit to the page while maintaining its proportions. The default is 1.0.

   * - ``bFixedPrint``
     - (optional) A Boolean value that indicates that this watermark should be added as a FixedPrint Watermark annotation. This allows watermarks to be printed at a fixed size/position regardless of the size of the page being printed to. If ``true``, ``bOnTop`` is ignored. The default is ``false``. 

   * - ``nRotation``
     - (optional) The number of degrees to rotate the watermark counterclockwise. The default is ``0``. 

   * - ``nOpacity``
     - (optional) The opacity to be used for the watermark, where ``0`` is transparent and ``1.0`` is opaque. The default is ``1.0``. 

Example 1: Adds the first page of ``watermark.pdf`` as a watermark to the center of all pages of the current document.

::

      this.addWatermarkFromFile("/C/temp/watermark.pdf");

.. raw:: html

   <a name="52280"></a>

Example 2: Adds the second page of ``watermark.pdf`` as a watermark to the first 10 pages of the current document. The watermark is rotated counterclockwise 45 degrees and positioned 1 inch down and 2 inches over from the upper-left corner of the page.

::

      this.addWatermarkFromFile({ 
          cDIPath: "/C/temp/watermark.pdf", 
          nSourcePage: 4, nEnd: 9,
          nHorizAlign: app.constants.align.left, 
          nVertAlign: app.constants.align.top,
          nHorizValue: 144, nVertValue: -72, 
          nRotation: 45
      });

.. raw:: html

   <a name="73135"></a>

addWatermarkFromText
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - D
     - 
     - Not available in Reader

Adds the given text as a watermark to the specified pages in the document and places the watermark in an optional content group (OCG).

See the `OCG <JS_API_AcroJS.html#66402>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cText``
     - The text to use as the watermark. Multiline text is allowed. A newline can be specified with the characters "r". 

   * - ``nTextAlign``
     - (optional) The text alignment to use for ``cText`` within the watermark. See ``app.`` `constants <JS_API_AcroJS.html#99849>`__ ``.align`` for possible values. This parameter has no effect if ``cText`` is only one line.

   * - ``cFont``
     - (optional) The font to be used for this watermark. Valid fonts are defined as properties of the ``font`` object, as listed in the ``textFont`` property of the Field object. An arbitrary font can be used by passing a string that represents the PostScript name of the font. The default is ``font.Helv``. 

   * - ``nFontSize``
     - (optional) The point size of the font to use for the watermark. The default is ``24``. 

   * - ``aColor``
     - (optional) The color to use for the watermark. See `Color arrays <JS_API_AcroJS.html#98898>`__. The default is ``color.black``. 

   * - ``nStart``
     - (optional) The 0-based index of the first page in the range of pages to which the watermark should be added. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) The last page in the range of pages to which the watermark should be added. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nEnd`` is specified, the range of pages is ``0`` to ``nEnd``. 

   * - ``bOnTop``
     - (optional) A Boolean value specifying the z-ordering of the watermark. A value of ``true`` will result in the watermark being added above all other page content. A value of ``false`` will result in the watermark being added below all other page content. This parameter is ignored if ``bFixedPrint`` is ``true``. The default is ``true``. 

   * - ``bOnScreen``
     - (optional) A Boolean value to indicate whether the watermark should be displayed when viewing the document on screen.

   * - ``bOnPrint``
     - (optional) A Boolean value to indicate whether the watermark should be displayed when printing the document.

   * - ``nHorizAlign``
     - (optional) A number indicating how the watermark should be aligned horizontally. See ``app.`` `constants <JS_API_AcroJS.html#99849>`__ ``.align`` for possible values. The default is ``app.constants.align.center``. 

   * - ``nVertAlign``
     - (optional) A number indicating how the watermark should be aligned vertically. See ``app.`` `constants <JS_API_AcroJS.html#99849>`__ ``.align`` for possible values. The default is ``app.constants.align.center``. 

   * - ``nHorizValue``
     - (optional) A number used to shift the horizontal position of the watermark on the page. If ``bPercentage`` is ``true``, this number represents a percentage of the horizontal page size. If ``bPercentage`` is ``false``, this number represents the number of points to be offset. The default is 0. 

   * - ``nVertValue``
     - (optional) A number used to shift the vertical position of the watermark on the page. If ``bPercentage`` is ``true``, this number represents a percentage of the vertical page size. If ``bPercentage`` is ``false``, this number represents the number of points to be offset. The default is 0. 

   * - ``bPercentage``
     - (optional) A Boolean value used to indicate whether ``nHorizValue`` and ``nVertValue`` represent a percentage of the page size or an explicit number of points. The default is ``false``. 

   * - ``nScale``
     - (optional) The scale to be used for the watermark, where ``1.0`` is 100%. A value of ``-1`` specifies that the watermark should fit to the page while maintaining its proportions. The default is ``1.0``. 

   * - ``bFixedPrint``
     - (optional) A Boolean value that indicates that the watermark should be added as a FixedPrint Watermark annotation. This prints the watermark at a fixed size and position regardless of the size of the page being printed to. If ``true``, ``bOnTop`` is ignored. The default is ``false``. 

   * - ``nRotation``
     - (optional) The number of degrees to rotate the watermark counterclockwise. The default is ``0``. 

   * - ``nOpacity``
     - (optional) The opacity to be used for the watermark, where ``0`` is transparent and ``1.0`` is opaque. The default is ``1.0``. 

Example 1: Adds "Confidential" as a watermark to the center of all pages of the current document.

::

      this.addWatermarkFromText("Confidential", 0, font.Helv, 24, color.red);

Example 2: Adds a multiline watermark to each page of the current document 1 inch down and 1 inch over from the upper-right corner.

::

      this.addWatermarkFromText({ 
          cText: "Confidential DocumentrA. C. Robat", 
          nTextAlign: app.constants.align.right,
          nHorizAlign: app.constants.align.right, 
          nVertAlign: app.constants.align.top, 
          nHorizValue: -72, nVertValue: -72
      });

.. raw:: html

   <a name="89952"></a>">

addWeblinks
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - X 

Scans the specified pages looking for instances of text with an ``http:`` scheme and converts them into links with URL actions.

See also the `removeWeblinks <JS_API_AcroJS.html#63275>`__ method

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, the range of pages is for all pages in the document. If only ``nEnd`` is specified, the range of a pages is 0 to ``nEnd``. 



**Returns** 

The number of web links added to the document.

Example: Search the entire document and convert all content that appears to be a web address into a web link. Report back the number of links created.

::

      var numWeblinks = this.addWeblinks();
      console.println("There were " + numWeblinks + 

           " instances of text that looked like a web address,"

           +" and converted as such.");

.. raw:: html

   <a name="64761"></a>

applyRedactions
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - D
     - 
     - X 

Applies redaction marks to the document, removing all underlying content, and optionally removing the marks themselves.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``aMarks``
     - (optional) An array of redaction annotations that should be applied. If not specified, then all redaction marks in the document are applied.

   * - ``bKeepMarks``
     - (optional) A boolean, if ``true``, the redaction marks are not removed after they are applied. If not specified, or set to ``false``, the redaction marks are removed. The default is ``false``. 

   * - ``bShowConfirmation``
     - (optional) A boolean, if true, a confirmation dialog is presented to the user before any redaction marks are applied or removed. If not specified, or set to ``false``, a confirmation is not shown. The default is ``false``. 

   * - ``cProgText``
     - (optional) A string to be displayed in the UI along with a progress monitor for this operation. If blank or not specified, no progress is displayed.



**Returns** 

``true`` if the document was changed, ``false`` otherwise.

Example 1: Apply all redaction marks in the current document with the provided progress message

::

   this.applyRedactions({cProgText: "Applying redactions through JS..."});

Example 2: Apply redaction marks found only on the first page, and display a confirmation first.

::

   var markArray = Array();
   var pageAnnots = this.getAnnots(0);
   for (var i=0; i < pageAnnots.length; i++) {
      if (pageAnnots[i].type == "Redact") {
          markArray[markArray.length] = pageAnnots[i];
      }
   }
   if (markArray.length > 0) {
      this.applyRedactions({
          aMarks: 
   markArray, 
          bKeepMarks: 
   false, 
          bShowConfirmation: 
   true, 
          cProgText: 
   "Applying page 1 redactions..."
      });
   }

.. raw:: html

   <a name="93004"></a>">

bringToFront

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Brings an open document to the front.

Example: This example searches among the open documents for one with a title of "Annual Report" and brings it to the front.

::

      var d = app.activeDocs; 
      for (var i = 0; i < d.length; i++)
          if (d[i].info.Title == "Annual Report") d[i].bringToFront();

.. raw:: html

   <a name="14930"></a>

calculateNow
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - No
     - No
     - All

Forces computation of all calculation fields in the current document.

When a form contains many calculations, there can be a significant delay after the user inputs data into a field, even if it is not a calculation field. One strategy is to turn off calculations at some point and turn them back on later (see example).

Example: Turn off calculations

::

      this.calculate = false;
      .....

Turn on calculations

::

      this.calculate = true;

Unless the user committed data after this.calculate is set to true, automatic calculation does not occur. Calculation can be forced to occur by using the following code.

::

      this.calculateNow();

.. raw:: html

   <a name="79191"></a>

certifyInvisibleSign
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 10.0
     - D
     - Yes
     - All but Reader

Adds an invisible certification to a document. This method is not available in Adobe Reader.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oSig``
     - The signature engine object.

   * - ``oInfo``
     - (optional) Additional signing information.

   * - ``cDIPath``
     - (optional) The file path for saving the signed file. The file is saved over itself if no path is specified.

   * - ``bUI``
     - (optional) Set TRUE to enable UI interaction. May be FALSE if a path and certificate are supplied. The default is FALSE.

   * - ``cLegalAttest``
     - (optional) The signing reason.


**Returns** TRUE if the signing was successful.

Example: 

::

   var myEngine = security.getHandler( "Adobe.PPKLite" );
   myEngine.login( "password", "/C/Users/username/Desktop/PrivateUser.pfx" );
   
   var myInfo =  {password: "password",
                  reason: "SaveAs Test",
                  mdp: "defaultAndComments"};
   
   this.certifyInvisibleSign({
       oSig:myEngine,
       oInfo:myInfo,
       cDIPath:"/c/temp/sigSign.pdf",
       cLegalAttest: "Certified using JavaScript",
       bUI:false
   });

.. raw:: html

   <a name="34158"></a>">

closeDoc
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - Requires save rights

Closes the document.

For Adobe Reader 5.1 or later, the method is always allowed:

-  If the document was changed and no Document Save Rights are available, the document is closed without any warnings and changes are lost.
-  If Document Save Rights are available, the user has the option of saving the changed file.

.. note::

   This command does not work in browsers.

It is important to use this method carefully, because it is an abrupt change in the document state that can affect any JavaScript executing after the close. Triggering this method from a Page event or Document event could cause the application to behave strangely.

In versions of Acrobat earlier than 7.0, a document that closes itself by executing ``this.closeDoc`` terminates any script that follows it. In Acrobat 7.0, the script is allowed to continue and to terminate naturally. However, if the Doc of the closed document is referenced, an exception will be thrown.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bNoSave``
     - (optional) A Boolean value indicating whether to close the document without saving:  -  If ``false`` (the default), the user is prompted to save the document if it has been modified. -  If ``true``, the document is closed without prompting the user and without saving, even if the document has been modified. Be careful in using this feature because it can cause data loss without user approval. 

Example 1: From the console, close all open documents.

::

      var d = app.activeDocs;
      for( var i in d ) d[i].closeDoc();

The following code can be executed as a mouse-up action from an open document. It closes all *disclosed* open documents. The code is designed to close the active document last so that the execution of the code will not be abruptly terminated.

::

      var d = app.activeDocs;
      for( var i in d )
          if( d[i] != this ) d[i].closeDoc();
      if ( this.disclosed ) this.closeDoc();

Example 2: Create a series of three test files and save them to a directory. This code must be executed in the console, because ``saveAs`` has a security restriction.

::

      var myDoc = app.newDoc();
      for (var i=0; i < 3; i++) {
          myDoc.info.Title = "Test File " + i;
          myDoc.saveAs("/c/temp/test"+i+".pdf);
      }
      myDoc.closeDoc(true);

See `saveAs <JS_API_AcroJS.html#34461>`__ for an another example of ``closeDoc``.

.. raw:: html

   <a name="87010"></a>

colorConvertPage
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 8.0
     - D
     - NO
     - Acrobat Pro only

Performs color conversion on a page of the document.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``pageNum``
     - A 0-based index that defines the page number of the document that should be converted.

   * - ``actions``
     - An array of `colorConvertAction <JS_API_AcroJS.html#40112>`__ objects for this color conversion. See `colorConvertAction <JS_API_AcroJS.html#40112>`__ object for a listing of its properties.  For each object on the page, the actions are matched against the object's attributes and color spaces in the order in which they occur in the actions array, until a match is found and that action is executed. The list of actions is analogous to the list of filters in most email clients: each object is compared against the selection criteria for each of the actions, in order, until a matching action is found. The action is then executed on the object. Note that actions do not chain, except in the case of aliased ink definitions.

   * - ``inkActions``
     - An array of `colorConvertAction <JS_API_AcroJS.html#40112>`__ objects which describes the ink actions for this color conversion. The list of inks defines the actions for individual separations, whether they occur in Separation or DeviceN. This allows one to define, among other things, ink aliases.  If a DeviceN contains some inks to be aliased and some to be converted, the color is converted using OPP technology, so that the converted part ends up as process and the aliased part stays as spot.  For ink actions, the match fields are ignored.  There should be an underlying Separation or DeviceN defined in the action list describing what to do, and the aliases in the ink action list apply if the action in the action list for the underlying space is Preserve or Decalibrate.



**Returns** 

A Boolean value, returns ``true`` if the page was changed, otherwise, returns ``false``.

Example: See `getColorConvertAction <JS_API_AcroJS.html#82396>`__ for an example.

.. raw:: html

   <a name="49328"></a>

createDataObject
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     -  Requires forms rights

Creates a ``Data`` object.

Data objects can be constructed *ad hoc* . This is useful if the data is being created in JavaScript from sources other than an external file (for example, ADBC database calls).

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `removeDataObject <JS_API_AcroJS.html#81117>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to associate with the data object.

   * - ``cValue``
     - A string containing the data to be embedded.

   * - ``cMIMEType``
     - (optional) The MIME type of the data. The default is "text/plain".

   * - ``cCryptFilter``
     - (optional, Acrobat 6.0) The language-independent name of a crypt filter to use when encrypting this data object. This crypt filter must have previously been added to the document's list of crypt filters, using the Doc ``addRecipientListCryptFilter`` method, otherwise an exception will be thrown. The predefined Identity crypt filter can be used so that this data object is not encrypted in a file that is otherwise encrypted by the Doc ``encryptForRecipients`` method.

Example: 

::

      this.createDataObject("MyData.txt", "This is some data.");

See also the example that follows `addRecipientListCryptFilter <JS_API_AcroJS.html#27295>`__.

.. raw:: html

   <a name="36567"></a>

createTemplate
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - All but Reader

.. note::

   In Adobe Reader 5.1 and later, this method was allowed with Advanced Form Features rights. Beginning with version 7.0 of Adobe Reader, this method is not allowed and will throw a ``NotAllowedError`` exception.

Creates a visible template from the specified page. See also the `templates <JS_API_AcroJS.html#83340>`__ property, the `getTemplate <JS_API_AcroJS.html#53136>`__ and `removeTemplate <JS_API_AcroJS.html#97652>`__ methods, and the `Template <JS_API_AcroJS.html#79743>`__ object.

.. note::

   This method can only be executed during a batch or console event. (See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.) The ``event`` object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to be associated with this page.

   * - ``nPage``
     - (optional) The 0-based index of the page to operate on. The default is ``0``, the first page in the document. 



**Returns** 

The newly created ``Template`` object.

Example: Convert all pages beginning with page 2 to hidden templates. As the templates are hidden, ``this.numPages`` is updated to reflect that change in the number of (visible) pages. Notice that in the loop below, only page 2 is made a template and then hidden. The next page will become the new page 2.

::

      numNewTemplates = this.numPages - 2;
      for ( var i = 0; i < numNewTemplates; i++)
      {
          var t = this.createTemplate({cName:"myTemplate"+i, nPage:2 });
          t.hidden = true;
      }

.. raw:: html

   <a name="99469"></a>

deletePages
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Requires forms rights

Deletes pages from the document. If neither page of the range is specified, the first page (page 0) is deleted. See also `insertPages <JS_API_AcroJS.html#20950>`__, `extractPages <JS_API_AcroJS.html#60156>`__, and `replacePages <JS_API_AcroJS.html#58207>`__.

.. note::

   You cannot delete all pages in a document; there must be at least one page remaining.

(Acrobat 6.0): Beginning with version 6.0, this method deletes *spawned* pages from within Adobe Reader for documents with forms usage rights enabled.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) The 0-based index of the first page in the range of pages to be deleted. The default is ``0``, the first page in the document. 

   * - ``nEnd``
     - (optional) The last page in the range of pages to be deleted. If ``nEnd`` is not specified, only the page specified by ``nStart`` is deleted.

Example: Delete pages 1 through 3 (base 0), inclusive.

::

      this.deletePages({nStart: 1, nEnd: 3});

.. raw:: html

   <a name="26240"></a>

deleteSound
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - All but Reader

Deletes the ``Sound`` object with the specified name from the document.

See also `sounds <JS_API_AcroJS.html#41410>`__, `getSound <JS_API_AcroJS.html#10552>`__, `importSound <JS_API_AcroJS.html#42848>`__, and the `Sound <JS_API_AcroJS.html#11412>`__ object.

**Parameters**

========= =======================================
``cName`` The name of the sound object to delete.
========= =======================================

Example: 

::

      this.deleteSound("Moo");

.. raw:: html

   <a name="62491"></a>

embedDocAsDataObject
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - Requires attachment rigths

Embeds the specified document as a Data Object in the document.

.. note::

   For Adobe Reader 7.0 and later, this method is allowed if the document has file attachment rights, but the document to be embedded must have document Save rights in case it has changed.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to associate with the data object.

   * - ``oDoc``
     - The document to embed as a data object.

   * - ``cCryptFilter``
     - (optional) The language-independent name of a crypt filter to use when encrypting this data object. This crypt filter must have previously been added to the document's list of crypt filters, using the ``addRecipientListCryptFilter`` method, otherwise an exception will be thrown. The predefined Identity crypt filter can be used so that this data object is not encrypted in a file that is otherwise encrypted by the ``encryptForRecipients`` method.

   * - ``bUI``
     - (optional) If ``true``, an alert may be shown if ``oDoc`` requires saving and the permissions do not allow it to be saved. Default value is ``false``. 

Example: An envelope file that includes a "myFilter" crypt filter has been previously authored and has been included in the current document.

::

      var authorEmail = "johndoe@example.com";
      var envelopeDoc = this.openDataObject( "envelope" );
      envelopeDoc.embedDocAsDataObject( "attachment", this, "myFilter" );
      envelopeDoc.title.Author = authorEmail;
      envelopeDoc.mailDoc({ 
          cTo: "support@example.com", 
          cSubject: "Application from " + authorEmail 
      });

.. raw:: html

   <a name="79258"></a>

embedOutputIntent
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 8.0
     - D
     - No
     - Acrobat Pro only 

Embeds a color profile as a PDF/X Output Intent (see the `PDF Referece <https://adobe.com/go/pdfreference>`_ ).

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``outputIntentColorSpace``
     - A string containing the description of the profile to use for the output intent. A list of available color profiles can be obtained from the `printColorProfiles <JS_API_AcroJS.html#52944>`__ property of the ``app`` object.

Example: Embed a color profile.

::

      this.embedOutputIntent("U.S. Sheetfed Coated v2")

.. raw:: html

   <a name="21893"></a>

encryptForRecipients
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - Yes
     - X

Encrypts the document for the specified lists of recipients, using the public-key certificates of each recipient. Encryption does not take place until the document is saved. Recipients can be placed into groups and each group can have its own unique permission settings. This method throws an exception if it is unsuccessful.

.. note::

   This method is available from batch, console and app initialization events. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

See also the `createDataObject <JS_API_AcroJS.html#49328>`__ method, the ``security.`` `chooseRecipientsDialog <JS_API_AcroJS.html#42796>`__ method, and the `Data <JS_API_AcroJS.html#69212>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oGroups``
     - An array of generic ``Group`` objects that list the recipients for which the document is to be encrypted.

   * - ``bMetaData``
     - (optional) If ``true`` (the default), document metadata should be encrypted. Setting this value to ``false`` will produce a document that can only be viewed in Acrobat 6.0 or later.

   * - ``bUI``
     - (optional) If ``true``, the handler displays the user interface, in which the user can select the recipients for whom to encrypt the document. The default value is ``false``. 



**Returns** 

``true``, if successful, otherwise an exception is thrown.

.. raw:: html

   <a name="30663"></a>

**Group object**

A generic JavaScript object that allows a set of permissions to be attached to a list of recipients for which a document or data is to be encrypted. This object is passed to ``encryptForRecipients`` and returned by ``security.chooseRecipientsDialog``. It contains the following properties.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - ``permissions``
     - A ``Permissions`` object with the permissions for the group.

   * - ``userEntities``
     - An array of ``UserEntity`` objects, the users to whom the permissions apply.

**Permissions object**

A generic JavaScript object that contains a set of permissions, used in a ``Group`` object. It contains the following properties. The default value for all Boolean properties is ``false``.

.. list-table::
   :header-rows: 1

   * - Property
     - Type
     - Access
     - Description

   * - ``allowAll``
     - Boolean
     - R/W
     - Specifies whether full, unrestricted access is permitted. If ``true``, overrides all other properties. 

   * - ``allowAccessibility``
     - Boolean
     - R/W
     - Specifies whether content access for the visually impaired is permitted. If ``true``, allows content to be extracted for use by applications that, for example, read text aloud. 

   * - ``allowContentExtraction``
     - Boolean
     - R/W
     - Specifies whether content copying and extraction is permitted.

   * - ``allowChanges``
     - String
     - R/W
     - What changes are allowed to be made to the document. Values are:
       
       *none
       documentAssembly
       fillAndSign
       editNotesFillAndSign
       all*

   * - ``allowPrinting``
     - String
     - R/W
     - What the allowed printing security level is for the document. Values are:
       
       *none
       lowQuality
       highQuality*

Example: Encrypt all strings and streams in the document. This will produce a file that can be opened with Acrobat 5.0 and later:

::

      var sh = security.getHandler( "Adobe.PPKMS" );
      var dir = sh.directories[0];
      var dc = dir.connect();
      
      dc.setOutputFields({oFields:["certificates"]});
      var importantUsers = dc.search({oParams:{lastName:"Smith"}});
      var otherUsers = dc.search({oParams: {lastName:"Jones" }});
      
      this.encryptForRecipients({
          oGroups :
          [
              {userEntities:importantUsers,permissions:{allowAll:true }},
              {userEntities: otherUsers, permissions:{allowPrinting:"highQuality"}}
          ],
          bMetaData : true
      });

.. raw:: html

   <a name="41211"></a>

encryptUsingPolicy
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1



   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - Yes 
     - Not available in Reader

Encrypts the document using a specified policy object and handler. This method may require user interaction and may result in a new security policy being created.

.. note::

   This method can be executed only during a batch, console or application initialization event. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oPolicy``
     - The policy object to use when encrypting the document. It may be a ``SecurityPolicy`` object returned from ``chooseSecurityPolicy`` or ``getSecurityPolicies``.   This parameter may also be a generic object with the ``policyId`` property defined. If a predefined policy ID is passed, the associated policy is retrieved and used. If the policy ID passed is unknown, an error is returned.  There is a predefined policy ID that has a special behavior. If ``policyId`` is set to "adobe_secure_for_recipients", a new policy will be created by the Adobe® LiveCycle® Policy Server. (A Policy Server must be configured for publishing.)  -  If this special policy ID is used and ``oGroups`` is ``null``, an error will be returned. 

   * - ``oGroups``
     - (optional) An array of ``Group`` objects that the handler should use when applying the policy. The exact behavior depends on the policy used and the handler involved. The Group object may have embedded permission information. Whether that information is used depends on the policy and associated security handler. The default value is ``null``. 

   * - ``oHandler``
     - (optional) The ``SecurityHandler`` object to be used for encryption. This will result in failure if this handler does not match the handler name specified in the ``oPolicy`` object. If not specified, the default object associated with this handler will be used.  If you are using the APS security handler, you can create a new SecurityHandler ahead of time, authenticate to a server not configured in Acrobat through the ``login`` call, and then pass that SecurityHandler in ``oHandler``. This would allow you to use policies that are not defined on the server Acrobat is configured to use.   If you are using the PPKLite security handler, you could create a new SecurityHandler ahead of time, open a digital ID file not configured in Acrobat through the ``login`` call, and then pass that SecurityHandler in ``oHandler``. This would allow you to use certificates contained in the digital ID file but not in Acrobat. 

   * - ``bUI``
     - (optional) If ``true``, the user interface may be displayed (for example, for authentication). If ``false``, the user interface will not be displayed. If user interaction is required but not allowed, an error is returned. The default value is ``false``. 



**Returns** 

The value returned is a ``SecurityPolicyResults`` object, which has the following properties.

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Type
     - Description

   * - ``errorCode``
     - Integer
     - The error code returned from the handler implementing the policy. There are three possible errors:
       
        0 = Success.
       
        * ``errorText`` is not defined.
        * ``unknownRecipients`` may be defined.
        * ``policyApplied`` is defined.
            
        1 = Failure.
            
        * ``errorText`` is defined.
        * ``unknownRecipients`` may be defined.
        * ``policyApplied`` is not defined.
            
        2 = Abort, the user aborted the process.
            
        * ``errorText`` is not defined.
        * ``unknownRecipients`` is not defined.
        * ``policyApplied`` is not defined.

   * - ``errorText``
     - String
     - The localized error description, if defined. See ``errorCode`` for when this is defined.

   * - ``policyApplied``
     - Object
     - The SecurityPolicy object applied, if defined. If the policy passed in was "adobe_secure_for_recipients", a new policy was created by the call and the corresponding policy object will be returned here. See ``errorCode`` for when this is defined.

   * - ``unknownRecipients``
     - Recipients object
     - Recipients passed in that could not be used when applying the policy, if defined. See ``errorCode`` for when this is defined.

Example 1: Encrypt a newly created document using a chosen policy.

::

      var doc = app.newDoc();
      var policy = security.chooseSecurityPolicy();
      var results = doc.encryptUsingPolicy( { oPolicy: policy } );
      if ( results.errorCode == 0)
          console.println("The policy applied was: " + results.policyApplied.name);

Example 2: Encrypt a newly created document using a template policy. (A LiveCycle Policy Server must be configured for publishing before running this example.)

::

      var doc = app.newDoc();
      var groups = [ { userEntities: [{email:"jdoe@example.com"},

           {email:"bsmith@example.com"} ]} 
      ];
      var policy = { policyId: "adobe_secure_for_recipients" };
      var results = doc.encryptUsingPolicy({ 
          oPolicy: policy, 
          oGroups: groups, 
          bUI: true 
      });
      if ( results.errorCode == 0)
          console.println("The policy applied was: " 
              + results.policyApplied.name);

.. raw:: html

   <a name="26522"></a>

exportAsFDF
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - 
     - Yes 
     - F 

Exports form fields as an FDF file to the local hard drive.

.. note::

   If the ``cPath`` parameter is specified, this method can only be executed during batch and console events. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bAllFields``
     - (optional) If ``true``, all fields are exported, including those that have no value. If ``false`` (the default), excludes those fields that currently have no value. 

   * - ``bNoPassword``
     - (optional) If ``true`` (the default), do not include text fields that have the password flag set in the exported FDF file.

   * - ``aFields``
     - (optional) The array of field names to submit or a string containing a single field name:  -  If specified, only these fields are exported, except those excluded by ``bNoPassword``.  -  If ``aFields`` is an empty array, no fields are exported. The FDF file might still contain data, depending on the ``bAnnotations`` parameter. -  If this parameter is omitted or is ``null``, all fields in the form are exported, except those excluded by ``bNoPassword``.   Specify non-terminal field names to export an entire subtree of fields (see the example below).

   * - ``bFlags``
     - (optional) If ``true``, field flags are included in the exported FDF file. The default is ``false``. 

   * - ``cPath``
     - (optional) A string specifying the device-independent path for the file. The path may be relative to the location of the current document. If the parameter is omitted, a dialog box is shown to let the user select the file.  -  The parameter ``cPath`` must have a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__) and have a ``.fdf`` extension. This method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these security conditions are not met, and the method will fail.

   * - ``bAnnotations``
     - (optional, Acrobat 6.0) If ``true``, annotations are included in the exported FDF file. The default is ``false``. 

Example 1: Export the entire form (including empty fields) with flags.

::

      this.exportAsFDF(true, true, null, true);

Example 2: Export the *name* subtree with no flags.

::

      this.exportAsFDF(false, true, "name");

This example shows a shortcut to exporting a whole subtree. By passing "name" as part of the ``aFields`` parameter, fields such as "name.title", "name.first", "name.middle", and "name.last" are exported.

.. raw:: html

   <a name="71999"></a>

exportAsFDFStr
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 8.0
     - No
     - No
     - All

Computes the same results as calling the ``doc.exportAsFDF`` method, but returns the results as a string instead of saving to a file.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bAllFields``
     - (optional) If ``true``, all fields are exported, including those that have no value. If ``false`` (the default), excludes those fields that currently have no value. 

   * - ``bNoPassword``
     - (optional) If ``true`` (the default), do not include text fields that have the password flag set in the exported FDF file.

   * - ``aFields``
     - (optional) The array of field names to submit or a string containing a single field name:  -  If specified, only these fields are exported, except those excluded by ``bNoPassword``.  -  If ``aFields`` is an empty array, no fields are exported. The FDF file might still contain data, depending on the ``bAnnotations`` parameter. -  If this parameter is omitted or is ``null``, all fields in the form are exported, except those excluded by ``bNoPassword``.   Specify non-terminal field names to export an entire subtree of fields (see the example below).

   * - ``bFlags``
     - (optional) If ``true``, field flags are included in the exported FDF file. The default is ``false``. 

   * - ``bAnnotations``
     - Must be ``false``, which is the default. Annotations are not supported. 

   * - ``cHRef``
     - When supplied, its value is inserted as the source or target file of the returned FDF expression (i.e., the value of the F key in the FDF dictionary).



**Returns** 

The contents of the file as would be produced by the ``doc.exportAsFDF`` method, returned as a string. If supplied, the ``cHRef`` parameter is inserted as the value of the **F** key in the **FDF** dictionary. If not supplied, the **F** key contains the value as ``doc.exportAsFDF`` would produce.

Example: Get form data for the fields ``FirstName``, ``LastName`` and ``Address`` in FDF format as a string.

::

   var cFDF = this.exportAsFDFStr({
      aFields: ["FirstName", "LastName", "Address"], 
      cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
   });

.. raw:: html

   <a name="64033"></a>

exportAsText
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - 
     - Yes 
     - F 

Exports form fields as a tab-delimited text file to a local hard disk. The text file that is created follows the conventions specified by Microsoft Excel. In particular, ``exportAsText`` correctly handles quotes and multiline text fields.

This method writes two lines to the text file, the first line is a tab-delimited list of the names of the fields specified by ``aFields``, the second line is a tab-delimited list of the values of the fields.

.. note::

   If the ``cPath`` parameter is specified, this method can only be executed during a batch or console event. See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__. The `event <JS_API_AcroJS.html#38077>`__ object includes a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bNoPassword``
     - (optional) If ``true`` (the default), do not include text fields that have the password flag set in the exported text file.

   * - ``aFields``
     - (optional) The array of field names to submit or a string containing a single field name:  -  If specified, only these fields are exported, except those excluded by ``bNoPassword``.  -  If ``aFields`` is an empty array, no fields are exported. -  If this parameter is omitted or is ``null``, all fields in the form are exported, except those excluded by ``bNoPassword``. 

   * - ``cPath``
     - (optional) A string specifying the device-independent path for the file. The path may be relative to the location of the current document. If the parameter is omitted, a dialog box is shown to let the user select the file.  -  The parameter ``cPath`` is must have a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__) and have a ``.txt`` extension. This method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these security conditions are not met, and the method will fail.

Example: To export all fields to a tab-delimited file, execute the following script in the console:

::

      this.exportAsText();

To create a tab-delimited file with more than just one data line, see the `Example <JS_API_AcroJS.html#52103>`__. included with `getDataObjectContents <JS_API_AcroJS.html#42001>`__

.. raw:: html

   <a name="87686"></a>

exportAsXFDF
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1



   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - Yes 
     - F 

Exports form fields as an XFDF file to the local hard drive.

XFDF is an XML representation of Acrobat form data. See the document *XML Form Data Format Specification* at the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

There is an import version of this same method, ``importAnXFDF``.

.. note::

   If the ``cPath`` parameter is specified, this method can only be executed during batch and console events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bAllFields``
     - (optional) If ``true``, all fields are exported, including those that have no value. If ``false`` (the default), excludes those fields that currently have no value. 

   * - ``bNoPassword``
     - (optional) If ``true`` (the default), do not include text fields that have the password flag set in the exported XFDF.

   * - ``aFields``
     - (optional) The array of field names to submit or a string containing a single field name:  -  If specified, only these fields are exported, except those excluded by ``bNoPassword``.  -  If ``aFields`` is an empty array, no fields are exported. The XFDF file might still contain data, depending on the ``bAnnotations`` parameter. -  If this parameter is omitted or is ``null``, all fields in the form are exported, except those excluded by ``bNoPassword``.   Specify non-terminal field names to export an entire subtree of fields.

   * - ``cPath``
     - (optional) A string specifying the device-independent path for the file. The path may be relative to the location of the current document. If the parameter is omitted, a dialog box is shown to let the user select the file.  -  The parameter ``cPath`` must have a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__) and have a ``.xfdf`` extension. This method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these security conditions are not met, and the method will fail.

   * - ``bAnnotations``
     - (optional, Acrobat 6.0) If ``true``, annotations are included in the exported XFDF file. The default is ``false``. 

.. raw:: html

   <a name="49722"></a>

exportAsXFDFStr
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 8.0
     - No
     - No
     - All

Computes the same results as calling the ``doc.exportAsXFDF`` method, but returns the results as a string instead of saving to a file.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bAllFields``
     - (optional) If ``true``, all fields are exported, including those that have no value. If ``false`` (the default), excludes those fields that currently have no value. 

   * - ``bNoPassword``
     - (optional) If ``true`` (the default), do not include text fields that have the password flag set in the exported XFDF file.

   * - ``aFields``
     - (optional) The array of field names to submit or a string containing a single field name:  -  If specified, only these fields are exported, except those excluded by ``bNoPassword``.  -  If ``aFields`` is an empty array, no fields are exported. The XFDF file might still contain data, depending on the ``bAnnotations`` parameter. -  If this parameter is omitted or is ``null``, all fields in the form are exported, except those excluded by ``bNoPassword``.   Specify non-terminal field names to export an entire subtree of fields.

   * - ``bAnnotations``
     - Must be ``false``, which is the default. Annotations are not supported. 

   * - ``cHRef``
     - When supplied, its value is inserted as the source or target file of the returned XFDF expression (i.e., the value of the ``href`` attribute of the ``f`` element child of the ``xfdf`` element).



**Returns** 

The contents of the file as would be produced by the ``doc.exportAsXFDF`` method, returned as a string. If supplied, the ``cHRef`` parameter is inserted as the value of the ``href`` attribute of the ``f`` element child of the ``xfdf`` element. If not supplied, the ``href`` attribute of the ``f`` element key contains the value as ``doc.exportAsXFDF`` would produce.

Example: Get the values of the form fields ``FirstName``, ``LastName`` and ``Address`` in XFDF format as a string.

::

   var cXFDF = this.exportAsXFDFStr({
      aFields: ["FirstName", "LastName", "Address"],
      cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
   });

.. raw:: html

   <a name="84187"></a>

exportDataObject
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - Yes
     - All

Extracts the specified data object to an external file.

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `removeDataObject <JS_API_AcroJS.html#81117>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

.. note::

   Beginning with Acrobat 6.0, if the parameter ``cDIPath`` is non-``null``, a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception is thrown and the method fails.

If ``cDIPath`` is not passed to this method, a file selection dialog box opens to allow the user to select a save path for the embedded data object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name of the data object to extract.

   * - ``cDIPath``
     - (optional) A device-independent path to which to extract the data object. This path may be absolute or relative to the current document. If not specified, the user is prompted to specify a save location.  -  (Acrobat 6.0) The use of this parameter is no longer supported and should not be used. See the security notes above.

   * - ``bAllowAuth``
     - (optional, Acrobat 6.0) If ``true``, a dialog box is used to obtain user authorization. Authorization may be required if the data object was encrypted using the ``encryptForRecipients`` method. Authorization dialog boxes are allowed if ``bAllowAuth`` is ``true``. The default value is ``false``. 

   * - ``nLaunch``
     - (optional, Acrobat 6.0) ``nLaunch`` controls whether the file is launched, or opened, after it is saved. Launching may involve opening an external application if the file is not a PDF file. The values of ``nLaunch`` are:  -  If the value is ``0``, the file will not be launched after it is saved.  -  If the value is ``1``, the file will be saved and then launched. Launching will prompt the user with a security alert warning if the file is not a PDF file. The user will be prompted for a save path.  -  If the value is ``2``, the file will be saved and then launched. Launching will prompt the user with a security alert warning if the file is not a PDF file. A temporary path is used, and the user will not be prompted for a save path. The temporary file that is created will be deleted by Acrobat upon application shutdown.   The default value is ``0``. 

Example 1: Prompt the user for a file and location to extract to.

::

      this.exportDataObject("MyData");

**Example 2 (Acrobat 6.0)**

Extract a PDF document and launch it in the viewer.

::

      this.exportDataObject({ cName: "MyPDF.pdf", nLaunch: 2 });

Example 3: When a file attachment is imported using the ``importDataObject`` method, the value of its ``Data.name`` property is assigned by that method's ``cName`` parameter. However, when a file is attached using the UI, its ``name`` is automatically assigned. The attachments are assigned the sequential names "Untitled Object", "Untitled Object 2", "Untitled Object 3", and so on.

To export a file attached through the UI, the ``name`` of the attachment must be found. For the code that follows, the last file attached by the UI, if any, is exported.

::

      var d = this.dataObjects;
      if ( d == null ) console.println("No file attachments");
      else {
          for ( var i = d.length - 1; i>=0; i--) 
              if ( d[i].name.indexOf("Untitled Object") != -1 ) break;
          if ( i != -1 ) this.exportDataObject(d[i].name);
          else console.println("No attachment was embedded by UI");
      }

.. raw:: html

   <a name="36024"></a>

exportXFAData
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - Yes 
     - F 

Exports the XFA data (if any) from the document and saves it as an XDP file.

.. note::

   When exporting XFA data from Adobe Reader, the document must have export form rights.

If the ``cPath`` parameter is specified, this method can only be executed during batch, console or menu events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - (optional) A device-independent path for the file. The path may be relative to the document. If this parameter is omitted, a dialog box is shown to let the user select the file.  The path must meet the following conditions:  -  It must be a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__). -  If ``bXDP`` is ``true``, the file name must have an ``.xdp`` extension.  -  If ``bXDP`` is ``false``, the file name must have an ``.xml`` extension.   This method throws a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these conditions are not met.

   * - ``bXDP``
     - (optional) If ``true`` (the default), the data is exported in XDP format. Otherwise, it is exported in plain XML data format.

   * - ``aPackets``
     - (optional) An array of strings specifying the packets to include in the XDP export. This parameter is applicable only if ``bXDP`` is ``true``.   Possible strings are:  *template datasets stylesheet xfdf sourceSet pdf config **   If ``pdf`` is specified, the PDF file is embedded. Otherwise, only a link to the PDF file is included in the XDP file.  If ``xfdf`` is specified, annotations are included in the XDP file (since that packet uses XFDF format).  If ``*`` is specified, all packets are included in the XDP file. However, the default for the ``pdf`` packet is to include it as a *reference* . To embed the PDF file in the XDP file, explicitly specify ``pdf`` as one of the packets.  -  `(Save rights required) When exporting in the XDP format from Adobe Reader, the document must have document save rights only in the case where <JS_API_acrojspreface.html#Column4>`__ ``pdf`` is listed explicitly.  The default for this parameter is: ``["datasets", "xfdf"]``. 

Example: Export XFA data. In the following example, all packets are included. However, the PDF document is referenced, not embedded:

::

      this.exportXFAData({
          cPath: "/c/temp/myData.xdp",
          bXDP: true,
          aPackets: ["*"]
      })

In this example, all packets are included, with the PDF document embedded in the XDP file.

::

      this.exportXFAData({
          cPath: "/c/temp/myData.xdp",
          bXDP: true,
          aPackets: ["*","pdf"]
      })

.. raw:: html

   <a name="60156"></a>

extractPages
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - X

Creates a new document consisting of pages extracted from the current document. If a page range is not specified, the method extracts all pages in the document.

See also `deletePages <JS_API_AcroJS.html#99469>`__, `insertPages <JS_API_AcroJS.html#20950>`__, and `replacePages <JS_API_AcroJS.html#58207>`__.

.. note::

   If the ``cPath`` parameter is specified, this method can only be executed during a batch and console event, or through an external call (for example, OLE). See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of the range of pages to extract from the source document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of the range of pages to extract from the source document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

   * - ``cPath``
     - (optional) The device-independent path to save the new document. The path name may be relative to the location of the current document.  -  The parameter ``cPath`` must have a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__) and have a ``.pdf`` extension. This method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these security conditions are not met, and the method will fail.



**Returns** 

If ``cPath`` is not specified, returns the Doc for the new document; otherwise, returns the ``null`` object.

Example: The following batch sequence takes each of the selected files, extracts each page, and saves the page in a folder with a unique name. It could be used, for example, when the client's one-page bills are produced by an application and placed in a single PDF file. The client wants to separate the pages for distribution or for separate printing jobs.

::

      /* Extract pages to folder */
      // Regular expression used to acquire the base name of file
      var re = /.pdf$/i;
      // filename is the base name of the file Acrobat is working on
      var filename = this.documentFileName.replace(re,"");
      try {for (var i = 0; i < this.numPages; i++) 
              this.extractPages({
                  nStart: i,
                  cPath: "/F/temp/"+filename+"_" + i +".pdf"
              });         
      } catch (e) { console.println("Aborted: " + e) }

.. raw:: html

   <a name="97907"></a>

flattenPages
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Converts all annotations in a page range to page contents. If a page range is not specified, all annotations in the document are converted.

.. note::

   Great care must be used when using this method. All annotations—including form fields, comments, and links—on the specified range of pages are flattened. They may have appearances, but they will no longer be annotations.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the current document. If only ``nStart`` is specified, the page range is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the current document.

   * - ``nNonPrint``
     - (optional, Acrobat 6.0) This parameter determines how to handle non-printing annotations. Values are: 
       
       * *0*: (default) Non-printing annotations are flattened.  
       * *1*: Non-printing annotations are left as is.
       * *2*: Non-printing annotations are removed from the document.

Example: Flatten all pages in the document.

::

      this.flattenPages();

.. raw:: html

   <a name="27614"></a>

getAnnot
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

**Returns** an ``Annotation`` object contained on a specific document page.

**Parameters**

========= =================================================
``nPage`` The page that contains the ``Annotation`` object.
``cName`` The name of the ``Annotation`` object.
========= =================================================



**Returns** 

The ` <JS_API_AcroJS.html#41213>`__ object, or ``null`` if there is no such annotation.

Example: Attempt to get a particular annotation.

::

      var ann = this.getAnnot(0, "OnMarketShare");
      if (ann == null)
          console.println("Not Found!")
      else
          console.println("Found it! type: " + ann.type);

.. raw:: html

   <a name="16446"></a>

getAnnotRichMedia
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - All

This method gets an AnnotRichMedia object with a given name for a given page.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The 0-based page number that contains the ``AnnotRichMedia`` object.

   * - ``cName``
     - The name of the ``AnnotRichMedia`` object.



**Returns** 

An `AnnotRichMedia <JS_API_AcroJS.html#99657>`__ object, or ``undefined`` if there is no such object.

See also `getAnnotsRichMedia <JS_API_AcroJS.html#55638>`__.

.. raw:: html

   <a name="54780"></a>

getAnnot3D
~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

Gets an ``Annot3D`` object with a given name from a given page.

**Parameters**

========= =============================================================
``nPage`` The 0-based page number that contains the ``Annot3D`` object.
``cName`` The name of the ``Annot3D`` object.
========= =============================================================



**Returns** 

The `Annot3D <JS_API_AcroJS.html#98081>`__ object, or ``undefined`` if there is no such object.

.. raw:: html

   <a name="26254"></a>

getAnnots
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets an array of ``Annotation`` objects satisfying specified criteria. See also `getAnnot <JS_API_AcroJS.html#27614>`__ and `syncAnnotScan <JS_API_AcroJS.html#87285>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) A 0-based page number. If specified, gets only annotations on the given page. If not specified, gets annotations that meet the search criteria from all pages.

   * - ``nSortBy``
     - (optional) A sort method applied to the array. Values are:  
     
       * *ANSB_None*: (default) Do not sort; equivalent to not specifiying this parameter.  
       * *ANSB_Page*: Use the page number as the primary sort criteria.  
       * *ANSB_Author*: Use the author as the primary sort criteria.  
       * *ANSB_ModDate*: Use the modification date as the primary sort criteria. 
       * *ANSB_Type*: Use the annotation type as the primary sort criteria.

   * - ``bReverse``
     - (optional) If ``true``, causes the array to be reverse sorted with respect to ``nSortBy``. 

   * - ``nFilterBy``
     - (optional) Gets only annotations satisfying certain criteria. Values are:  
     
       * *ANFB_ShouldNone*: (default) Get all annotations. Equivalent of not specifying this parameter.  
       * *ANFB_ShouldPrint*: Only include annotations that can be printed.  
       * *ANFB_ShouldView*: Only include annotations that can be viewed.  
       * *ANFB_ShouldEdit*: Only include annotations that can be edited. 
       * *ANFB_ShouldAppearInPanel*: Only annotations that appear in the annotations pane.  
       * *ANFB_ShouldSummarize*: Only include annotations that can be included in a summary.  
       * *ANFB_ShouldExport*: Only include annotations that can be included in an export.



**Returns** 

An array of ` <JS_API_AcroJS.html#41213>`__ objects, or ``null`` if none are found.

Example: Acquire all annotations on the first page, and write information to the console.

::

      this.syncAnnotScan();
      var annots = this.getAnnots({
          nPage:0, 
          nSortBy: ANSB_Author,
          bReverse: true
      });
      console.show();
      console.println("Number of Annotations: " + annots.length);
      var msg = "%s in a %s annot said: "%s"";
      for (var i = 0; i < annots.length; i++) 
          console.println(util.printf(msg, annots[i].author, annots[i].type,
              annots[i].contents));

.. raw:: html

   <a name="55638"></a>

getAnnotsRichMedia
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - All

This method returns an array of AnnotRichMedia objects for a given page.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The 0-based page number that contains the AnnotRichMedia object.



**Returns** 

An array of `AnnotRichMedia <JS_API_AcroJS.html#99657>`__ objects, or ``undefined`` if none is found.

See also `getAnnotRichMedia <JS_API_AcroJS.html#16446>`__.

.. raw:: html

   <a name="86665"></a>

getAnnots3D
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

This method returns an array of ``Annot3D`` objects for a page.

.. caution::

   Do not use this method when adding Flash content to an existing 3D annotation. In such cases use `getAnnotsRichMedia <JS_API_AcroJS.html#55638>`__ instead.

**Parameters**

========= ==============================================================
``nPage`` The 0-based page number that contains the ``Annot3D`` objects.
========= ==============================================================



**Returns** 

An array of `Annot3D <JS_API_AcroJS.html#98081>`__ objects, or ``undefined`` if none is found.

.. raw:: html

   <a name="82396"></a>

getColorConvertAction
~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 8.0
     - No
     - No
     - Acrobat Pro only
	

Gets a `colorConvertAction <JS_API_AcroJS.html#40112>`__ object that reflects default color conversion settings.

See `colorConvertPage <JS_API_AcroJS.html#87010>`__, which takes two arrays of colorConvertAction objects as parameters.



**Returns** 

A colorConvertAction object

Example: Get a colorConvertAction object, set it up to convert everything to RGB. (Note that we do not convert any alternate spaces, hence the "space type" match is for anything but alternate spaces.)

::

      // Get a color convert action
      var toRGB = this.getColorConvertAction();
   
      // Set up the action for a conversion to RGB
      toRGB.matchAttributesAny = -1;
      toRGB.matchSpaceTypeAny = ~toRGB.constants.spaceFlags.AlternateSpace;
      toRGB.matchIntent = toRGB.constants.renderingIntents.Any;
      toRGB.convertProfile = "Apple RGB";
      toRGB.convertIntent = toRGB.constants.renderingIntents.Document;
      toRGB.embed = true;
      toRGB.preserveBlack = false;
      toRGB.useBlackPointCompensation = true;
      toRGB.action = toRGB.constants.actions.Convert;
   
      // Convert the first page of the document
      var result = this.colorConvertPage(0,[toRGB],[]);

.. raw:: html

   <a name="86645"></a>

getDataObject
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Obtains a specific ``Data`` object. See also `dataObjects <JS_API_AcroJS.html#32072>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `exportDataObject <JS_API_AcroJS.html#84187>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, and `removeDataObject <JS_API_AcroJS.html#81117>`__.

**Parameters**

========= ==========================================
``cName`` The name of the ``data`` object to obtain.
========= ==========================================



**Returns** 

The ``Data`` object corresponding to the specified name.

Example: Get a specific file attachment, and write various information to the console.

::

      var MyData = this.getDataObject("MyData");
      console.show(); console.clear();
      for (var i in MyData) console.println("MyData." + i + "=" + MyData[i]);

.. raw:: html

   <a name="42001"></a>

getDataObjectContents
~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

Allows access to the contents of the file attachment associated with a DataObject.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name associated with the ``Data`` object to get.

   * - ``bAllowAuth``
     - (optional) The default value is ``false``. If ``true``, a dialog box is used to obtain user authorization. Authorization may be required if the data object was encrypted using ``encryptForRecipients``. Authorization dialog boxes are allowed if ``bAllowAuth`` is ``true``. 



**Returns** 

``ReadStream`` object

A ``NotAllowedError`` is thrown and the method fails if it attempts to access the content of an embedded file attachment for which any of the following conditions is true (all file name extension matching is case-insensitive):

-  The attachment's file name extension is ".SWF". If a legitimate .SWF application or module run as part of Acrobat's Rich Media Annotation or PDF Portfolio navigator is allowed access to the content bytes of .SWF embedded file attachments, it is possible that the legitimate .SWF will load a malicious .SWF.

.. note::

   If you use the ``Data.MIMEType`` property to check whether a Data object represents a .SWF file, note that the MIME type for .SWF files is ``application/x-shockwave-flash``.

-  The attachment's file name extension is ".GIF", ".JPG", ".JPEG", or ".PNG" and the first three bytes of its content have the header signature of a .SWF file ("FWS" or "CWS"). The reason for this security restriction is that the same ``ActionScriptflash.display.Loader class load()`` method that can be used to load GIF, JPEG, and PNG images can also be used to load a SWF file. If a malicious SWF file's extension has been altered to that of one of these image types, the SWF could be loaded.

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `setDataObjectContents <JS_API_AcroJS.html#44192>`__, and `removeDataObject <JS_API_AcroJS.html#81117>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

.. raw:: html

   <a name="52103"></a>

Example: This code is part of a circulating memo. A PDF file is circulated among members on an email list. Each recipient enters a budget figure, then forwards the document to the next person on the list. Before the document is sent, the budget number is appended to an embedded tab-delimited document, ``budget.xls``, an attachment to this document. The last recipient can open the attachment, ``budget.xls``, in a spreadsheet application to view the various budget numbers.

::

      // Get the name and department of the current recipient
      var firstName = this.getField("Name.First").value;
      var lastName =  this.getField("Name.Last").value;
      var deptName =  this.getField("Dept.Name").value;
      // Get the budget number
      var deptBudget =  this.getField("Dept.Budget").value;
      if ( app.viewerVersion >= 7 ) {
          // Get the file stream object of the embedded file
          var oFile = this.getDataObjectContents("budget.xls");
          // Convert to a string
          var myBudget = util.stringFromStream(oFile, "utf-8");
          // Append current data to the end, using tabs to separate info
          var myBudget = myBudget + "rn" + firstName
              + "t" + lastName + "t" + deptName + "t" + deptBudget;
          // Convert back to a file stream
          var oFile = util.streamFromString(myBudget, "uft-8");
          // Now "overwrite" budget.xls
          this.setDataObjectContents("budget.xls", oFile);
      } else {
              app.alert("Acrobat 7.0 or later is required."

                   + " Your budget data will not be included. "
                  + "Will e-mail on to the next correspondent, sorry. "
                  + "Send in your budget request using traditional methods.");
      }

The rest of the code, not shown, saves the document and sends it to the next person on the mailing list.

This example uses `getDataObjectContents <JS_API_AcroJS.html#42001>`__, `setDataObjectContents <JS_API_AcroJS.html#44192>`__, ``util.`` `stringFromStream <JS_API_AcroJS.html#25458>`__, and ``util.`` `streamFromString <JS_API_AcroJS.html#10740>`__.

.. raw:: html

   <a name="16389"></a>

.. _getfield-1:

getField
~~~~~~~~

==== = = =
3.01   
==== = = =

Maps a Field object in the PDF document to a JavaScript variable.

Beginning with Acrobat 6.0, this method can return the Field object of an individual widget. For more information, see `Field <JS_API_AcroJS.html#36795>`__ object.

**Parameters**

========= ==================================
``cName`` The name of the field of interest.
========= ==================================



**Returns** 

A Field object representing a form field in the PDF document.

.. raw:: html

   <a name="55215"></a>">Example

1

Make a text field multiline and triple its height

::

      var f = this.getField("myText");
      var aRect = f.rect;               // Get bounding rectangle
      f.multiline = true;               // Make it multiline
      var height = aRect[1]-aRect[3];   // Calculate height
      aRect[3] -= 2* height;            // Triple the height of the text field
      f.rect = aRect;                   // and make it so

.. raw:: html

   <a name="57793"></a>

**Example 2 (Acrobat 6.0)**

Attach a JavaScript action to an individual widget, in this case, a radio button:

::

      var f = this.getField("myRadio.0");
      f.setAction("MouseUp", 
          "app.alert('Thanks for selecting the first choice.');");

Example 3: List all properties of a field. This technique can be used to programmatically duplicate a field and its properties.

::

      f = this.getField("myField");
      for ( var i in f ) {
          try {
              if ( typeof f[i] != "function" )    // Do not list field methods
                  console.println( i + ":" + f[i] ) 
          } catch(e) {}           // An exception occurs when we get a property
      }                         // that does not apply to this field type.

.. raw:: html

   <a name="79139"></a>

getIcon
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Obtains a specific ``icon`` object. See also the `icons <JS_API_AcroJS.html#12748>`__ property, the `addIcon <JS_API_AcroJS.html#42105>`__, `importIcon <JS_API_AcroJS.html#49983>`__, and `removeIcon <JS_API_AcroJS.html#84305>`__ methods, and the Field object methods `buttonGetIcon <JS_API_AcroJS.html#41330>`__, `buttonImportIcon <JS_API_AcroJS.html#27194>`__, and `buttonSetIcon <JS_API_AcroJS.html#39147>`__.

**Parameters**

========= ==========================================
``cName`` The name of the ``icon`` object to obtain.
========= ==========================================



**Returns** 

An ``Icon`` object associated with the specified name in the document or ``null`` if no icon of that name exists.

Example: The following is a custom keystroke script from a combo box. The face names of the items in the combo box are the names of some of the icons that populate the document. As the user chooses different items from the combo box, the corresponding icon appears as the button face of the field "myPictures".

::

      if (!event.willCommit) {
          var b = this.getField("myPictures");
          var i = this.getIcon(event.change);
          b.buttonSetIcon(i);
      }

See the Field object `buttonSetIcon <JS_API_AcroJS.html#39147>`__ method or a more elaborate variation on this example.

.. raw:: html

   <a name="27797"></a>

getLegalWarnings
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

**Returns** the legal warnings for this document in the form of an object with entries for each warning that has been found in the document.

.. note::

   In versions of Acrobat previous to 8.0, ``Document.getLegalWarnings`` would dirty the document.

The process that analyzes a file to determine this list of warnings is not available in Adobe Reader.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bExecute``
     - if ``true``, will cause the file to be examined and all detected warnings will be returned. In Acrobat 8, this examination is done by running a PDF/SigQ conformance check. If ``false``, the default value, the warnings that have been embedded in the file, along with the certifier's attestation (if any) will be returned.   In Acrobat 6 and 7, legal warnings can be embedded in a file at the time of certifying (using ``cLegalAttest`` of the Field object method `signatureSign <JS_API_AcroJS.html#20782>`__ ). In Acrobat 8, the certifier may still embed an attestation, but not the warning themselves. To obtain this attestation, call this method with ``bExecute=false``. 



**Returns** 

A DocLegalWarning object containing property names and values of legal warnings. The value of each entry is the number of occurrences of this warning in the document. If ``bExecute`` is ``false``, refer to `PDF Referece <https://adobe.com/go/pdfreference>`_ for a list of possible property names. If ``bExecute`` is ``true``, the property names correspond to PDF/SigQ level A violations listed below. Note that the warnings listed in `PDF Referece <https://adobe.com/go/pdfreference>`_ intersects but significantly differ from the list below.

**DocLegalWarning object**

The following properties describe the PDF/SigQ1-A Violations.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - ``AlternateImages``
     - Image XObject must not contain an alternate version.

   * - ``Annotations``
     - The document contains comments. The visual appearances of the comments may change based on external variables.

   * - ``CatalogHasAA``
     - The document contains hidden actions that may not be intended or known by the end user. Actions include JavaScript actions (document open, save, etc.), playing multimedia, executing a menu item, and so on.

   * - ``CatalogHasOpenAction``
     - The document contains hidden actions that will be launched on open. These actions may not be intended or known by the end user. Actions include JavaScript actions (document open, save, etc.), playing multimedia, executing a menu item, and so on.

   * - ``DevDepGS_FL``
     - The extended graphic state of the document uses the FL key. The key is a number that indicates how much flatness tolerance should exist when drawing objects. Content may display differently from Acrobat to other applications.

   * - ``DevDepGS_TR``
     - The document uses a PDF transfer function that interprets and replaces color. For example, it could replace black with white.

   * - ``DocHasCryptFilter``
     - Some or all of the content is encrypted and the encryption method is not available in standard Acrobat installations. For example, the document may be protected by LiveCycle Policy Server. The document contains streams encrypted using the crypt filter.

   * - ``DocHasNonSigField``
     - The document contains non-signature form fields. The visual appearance of such fields may change based on external variables.

   * - ``DocHasPresentation``
     - Presentations are not allowed since a presentation may contain animations or other elements that may change document appearance or behavior.

   * - ``DocHasPSXObj``
     - Visual elements may change based on external variables. For example, a logo may change color based on time or zoom level. No PostScript XObjects allowed.

   * - ``DocHasXFA``
     - XFA-based (dynamic forms) documents are not allowed since such forms could alter the document's appearance or behavior.

   * - ``DynamicSigAP``
     - The document contains signed signature fields that may change their visual appearance based on external variables.

   * - ``ExternalOPIdicts``
     - The document links to images not in the PDF file that are used as alternates. For example, an alternate, high resolution image might be specified for printing. Images and form XObject must not contain an OPI alternate version.

   * - ``ExternalRefXObjects``
     - Document links to images not in the PDF file. No external XObjects allowed.

   * - ``ExternalStreams``
     - Document contains external streams. The author has flagged some PDF bytes as a stream which may get data from an external source.

   * - ``GoTo3DViewActions``
     - The document contains Go To 3D View actions that may be used to change the document's visual appearance through manipulating 3D views without the user's knowledge.

   * - ``GoToEHasF``
     - The document links to external PDF documents on the Internet, file system, or network and it has no control over the nature of that linked content. Embedded Go To actions must not refer to external hierarchies.

   * - ``GoToRemoteAction``
     - The document contains Go To actions that may link to external content.

   * - ``InvalidEOF``
     - The PDF file contains extra bytes after the PDF's end of file marker.

   * - ``InvalidFileHeader``
     - The PDF file contains extra bytes before the PDF's file header.

   * - ``JavaScriptActions``
     - The document contains JavaScript actions that may be launched without the user's knowledge.

   * - ``LaunchActions``
     - The document contains Launch File Attachment actions.

   * - ``MalformedContentStm``
     - Malformed drawing instructions: Syntax error. The page content violates the grammar for page content definition. For example, the instruction might specify drawing a square but the syntax for doing it is incorrect.

   * - ``MovieActions``
     - The document contains Launch Movie actions that may be launched without the user's knowledge.

   * - ``NonEmbeddedFonts``
     - Document contains non-embedded fonts. When the document opens on a system that does not have the requisite fonts, Acrobat will replace them with some other font. Users should always turn on font-related warnings.

   * - ``OptionalContent``
     - The content of the document is divided into layers that can be silently displayed or hidden on the fly.

   * - ``PageHasAA``
     - A page contains hidden actions that may not be intended or known by the end user. Actions include JavaScript actions (document open, save, etc.), playing multimedia, executing a menu item, and so on.

   * - ``RenditionActions``
     - The document contains rendition actions that may be used to launch movies without the user's knowledge.

   * - ``SetOCStateActions``
     - The document contains SetOCState actions that may be used to change the document's visual appearance by modifying layers' visibility without the user's knowledge.

   * - ``SigFieldHasAA``
     - A signature field contains actions that could be invoked by mouse over or other user interaction. Actions include JavaScript actions (document open, save, etc.), playing multimedia, executing a menu item, and so on.

   * - ``SigFieldHasAction``
     - A signature field contains actions that could be invoked by clicking. Actions include JavaScript actions (document open, save, etc.), playing multimedia, executing a menu item, and so on.

   * - ``SoundActions``
     - The document contains launch sound actions.

   * - ``TrueTypeFonts``
     - This document uses TrueType fonts. TrueType and TrueType-based OpenType fonts are not allowed because they are programs and may change the document's appearance based on external variables. This restriction is not required by PDF/SigQ and is not reported unless the preference setting securityDigSigbTrueTypeFontPDFSigQWarn is set to 1. 

   * - ``UnknownNamedAction``
     - The document contains named actions that may launch menu items without the user's knowledge.

   * - ``UnknownPDFContent``
     - Unrecognized PDF content: The document contains PDF content or custom content not supported by the current version of Acrobat. The document may have been created by a later version of Acrobat (PDF 1.8 or above).

   * - ``UnknownPDFContentStmOp``
     - Unrecognized drawing operator: The document contains PDF content or custom content not supported by the current version of Acrobat. The document may have been created by a later version of Acrobat.

   * - ``URIActions``
     - The document contains Launch URI actions that links to external content.

   * - ``XObjHasInterpolate``
     - The document author has enabled image interpolation. No image interpolation is allowed.

Example: Process a document and get legal PDF warnings.

::

      var w = this.getLegalWarnings( true );
      console.println( "Actual Legal PDF Warnings:" );
      for(i in w) console.println( i + " = " + w[i] );
      
      var w1 = this.getLegalWarnings( false );
      console.println( "Declared Legal PDF Warnings:" );
      for(i in w1) console.println( i + " = " + w1[i] );
      
      // For a certification signature, note also if annotations are 
      // allowed by MDP settings
      
      var f = this.getField( "AuthorSig" );
      var s = f.signatureInfo();
      if( s.mdp == "defaultAndComments" )
          console.println( "Annotations are allowed" );
      
      // What does the author have to say about all this?
      
      console.println( "Legal PDF Attestation:" );
      console.println( w1.Attestation );

.. raw:: html

   <a name="80686"></a>

getLinks
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Gets an array of ``Link`` objects that are enclosed within specified coordinates on a page. See also `addLink <JS_API_AcroJS.html#21259>`__ and `removeLinks <JS_API_AcroJS.html#57408>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The page that contains the ``Link`` objects. The first page is 0.

   * - ``oCoords``
     - An array of four numbers in rotated user space, the coordinates of a rectangle listed in the following order: upper-left *x*, upper-left *y*, lower-right *x* and lower-right *y* .



**Returns** 

An array of ``Link`` objects.

Example: Count the number of links in a document and report to the console.

::

      var numLinks=0; 
      for ( var p = 0; p < this.numPages; p++) 
      {
          var b = this.getPageBox("Crop", p);
          var l = this.getLinks(p, b);
          console.println("Number of Links on page " + p +" is " + l.length);
          numLinks += l.length;
      }
      console.println("Number of Links in Document is " + numLinks);

.. raw:: html

   <a name="30005"></a>">

getNthFieldName

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - No
     - No
     - All

Gets the name of the *n* th field in the document. See also `numFields <JS_API_AcroJS.html#32457>`__.

**Parameters**

========== =====================================================
``nIndex`` The index of the field whose name should be obtained.
========== =====================================================



**Returns** 

The name of the field in the document.

Example: Enumerate through all of the fields in the document.

::

      for (var i = 0; i < this.numFields; i++)
          console.println("Field[" + i + "] = " + this.getNthFieldName(i));

.. raw:: html

   <a name="94458"></a>">

getNthTemplate

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - deprecated
     - No
     - No
     - All

.. note::

   This method is superseded by the ``templates`` property, the ``getTemplate`` method, and the ``Template`` object.

Gets the name of the *n* th template within the document.

**Parameters**

========== ====================================
``nIndex`` The index of the template to obtain.
========== ====================================



**Returns** 

The name of the specified template.

.. raw:: html

   <a name="82809"></a>

getOCGs
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Gets an array of ``OCG`` objects found on a specified page.

**Related methods** are `getOCGOrder <JS_API_AcroJS.html#78739>`__ and `setOCGOrder <JS_API_AcroJS.html#53506>`__, and the `OCG <JS_API_AcroJS.html#66402>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based page number. If not specified, all the OCGs found in the document are returned.  If no argument is passed, returns all OCGs listed in alphabetical order, by name. If ``nPage`` is passed, this method returns the OCGs for that page, in the order they were created.



**Returns** 

An array of ``OCG`` objects or ``null`` if no OCGs are present.

Example: Turn on all the OCGs on the given document and page.

::

      function TurnOnOCGsForPage(doc, nPage)
      {
          var ocgArray = doc.getOCGs(nPage);
          for (var i=0; i < ocgArray.length; i++) 
              ocgArray[i].state = true;
      } 

.. raw:: html

   <a name="78739"></a>

getOCGOrder
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

**Returns** this document's OCGOrder array. This array represents how layers are displayed in the UI.

**Related methods** are `getOCGs <JS_API_AcroJS.html#82809>`__ and `setOCGOrder <JS_API_AcroJS.html#53506>`__, and the `OCG <JS_API_AcroJS.html#66402>`__ object.



**Returns** 

An array containing OCG objects, strings, and similar subarrays, or ``null`` if no OCGs are present.

See `setOCGOrder <JS_API_AcroJS.html#53506>`__ for a description of the order array.

.. raw:: html

   <a name="40225"></a>

getPageBox
~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets a rectangle in rotated user space that encompasses the named box for the page. See also `setPageBoxes <JS_API_AcroJS.html#10299>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cBox``
     - (optional) The type of box. Values are:  *Art Bleed BBox Crop* (default)  ``Trim``  For definitions of these boxes see the `PDF Referece <https://adobe.com/go/pdfreference>`_ *.*

   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.



**Returns** 

A rectangle in rotated user space that encompasses the named box for the page.

Example: Get the dimensions of the Media box.

::

      var aRect = this.getPageBox("Media");
      var width = aRect[2] - aRect[0];
      var height = aRect[1] - aRect[3];
      console.println("Page 1 has a width of " + width + " and a height of " 

           + height);

.. raw:: html

   <a name="67733"></a>

getPageLabel
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets page label information for the specified page.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.



**Returns** 

Page label information for the specified page.

Example: See `setPageLabels <JS_API_AcroJS.html#22005>`__ for an example.

.. raw:: html

   <a name="32356"></a>

getPageNthWord
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - Yes
     - All

Gets the *n* th word on the page.

See also `getPageNumWords <JS_API_AcroJS.html#12782>`__ and `selectPageNthWord <JS_API_AcroJS.html#11214>`__.

.. note::

   This method throws an exception if the document security is set to prevent content extraction.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.

   * - ``nWord``
     - (optional) The 0-based index of the word. The default is 0, the first word on the page.

   * - ``bStrip``
     - (optional) Specifies whether punctuation and white space should be removed from the word before returning. The default is ``true``. 



**Returns** 

The *n* th word on the page.

Example: See `Example 2 <JS_API_AcroJS.html#86751>`__ of ``spell.checkWord`` for an example.

.. raw:: html

   <a name="68212"></a>

getPageNthWordQuads
~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - Yes
     - All

Gets the quads list for the *n* th word on the page. The ``quads`` property of the ``Annotation`` object can be used for constructing text markup, underline, strikeout, highlight and squiggly annotations. See also `getPageNthWord <JS_API_AcroJS.html#32356>`__, `getPageNumWords <JS_API_AcroJS.html#12782>`__, and `selectPageNthWord <JS_API_AcroJS.html#11214>`__.

.. note::

   This method throws an exception if the document security is set to prevent content extraction.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.

   * - ``nWord``
     - (optional) The 0-based index of the word. The default is 0, the first word on the page.



**Returns** 

The quads list for the *n* th word on the page.

Example: Underline the fifth word on the second page of a document.

::

      var annot = this.addAnnot({
          page: 1,
          type: "Underline",
          quads:  this.getPageNthWordQuads(1, 4),
          author: "A. C. Robat",
          contents: "Fifth word on second page"
      }); 

See ``spell.`` `checkWord <JS_API_AcroJS.html#21151>`__ for an additional example.

.. raw:: html

   <a name="12782"></a>

getPageNumWords
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets the number of words on the page.

See also `getPageNthWord <JS_API_AcroJS.html#32356>`__, `getPageNthWordQuads <JS_API_AcroJS.html#68212>`__, and `selectPageNthWord <JS_API_AcroJS.html#11214>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.



**Returns** 

The number of words on the page.

Example: Count the number of words in a document

::

      var cnt=0;
      for (var p = 0; p < this.numPages; p++)
          cnt += getPageNumWords(p);
      console.println("There are " + cnt + " words in this doc.");

See `Example 2 <JS_API_AcroJS.html#86751>`__ of ``spell.`` `checkWord <JS_API_AcroJS.html#21151>`__ for an additional example.

.. raw:: html

   <a name="33574"></a>

getPageRotation
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets the rotation of the specified page. See also `setPageRotations <JS_API_AcroJS.html#40483>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.



**Returns** 

The rotation value of 0, 90, 180, or 270.

.. raw:: html

   <a name="67725"></a>

getPageTransition
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets the transition of the specified page. See also `setPageTransitions <JS_API_AcroJS.html#76168>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page. The default is 0, the first page in the document.



**Returns** 

An array of three values: ``[ nDuration, cTransition, nTransDuration ]``.

-  ``nDuration`` is the maximum amount of time the page is displayed before the viewer automatically turns to the next page. A duration of -1 indicates that there is no automatic page turning.
-  ``cTransition`` is the name of the transition to apply to the page. See the property ``app.fs.`` `transitions <JS_API_AcroJS.html#85692>`__ for a list of valid transitions.
-  ``cTransDuration`` is the duration (in seconds) of the transition effect.

.. raw:: html

   <a name="34744"></a>

getPreflightAuditTrail
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only


Gets the current embedded audit trail.



**Returns** 

A `PreflightAuditTrail <JS_API_AcroJS.html#72375>`__ object or ``Undefined`` if no audit trail exists.

.. raw:: html

   <a name="39806"></a>

getPrintParams
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Gets a PrintParams object that reflects the default print settings. See the `print <JS_API_AcroJS.html#71443>`__ method, which now takes the PrintParams object as its parameter.



**Returns** 

A PrintParams object.

Example: Get the PrintParams object of the default printer.

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.automatic;
      this.print(pp); // Print

.. raw:: html

   <a name="10552"></a>">

getSound

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets the ``sound`` object corresponding to the specified name. See also `sounds <JS_API_AcroJS.html#41410>`__, `importSound <JS_API_AcroJS.html#42848>`__, `deleteSound <JS_API_AcroJS.html#26240>`__, and the `Sound <JS_API_AcroJS.html#11412>`__ object.

**Parameters**

========= =================================
``cName`` The name of the object to obtain.
========= =================================



**Returns** 

The ``Sound`` object corresponding to the specified name.

Example: Play a sound.

::

      var s = this.getSound("Moo");
      console.println("Playing the " + s.name + " sound.");
      s.play();

.. raw:: html

   <a name="53136"></a>

getTemplate
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Gets the named template from the document. See also `templates <JS_API_AcroJS.html#83340>`__, `createTemplate <JS_API_AcroJS.html#36567>`__, `removeTemplate <JS_API_AcroJS.html#97652>`__, and the `Template <JS_API_AcroJS.html#79743>`__ object.

**Parameters**

========= =====================================
``cName`` The name of the template to retrieve.
========= =====================================



**Returns** 

The ``Template`` object or ``null`` if the named template does not exist in the document.

Example: Try to get a particular template and determine if it is hidden or visible.

::

      var t = this.getTemplate("myTemplate");
      if ( t != null ) console.println( "myTemplate exists and is "
          + eval( '( t.hidden) ? "hidden" : "visible"' ) + ".");
      else console.println( "myTemplate is not present!");
   

.. raw:: html

   <a name="57404"></a>

getURL
~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - D
     - Yes
     - X

Gets the specified URL over the Internet using a GET. If the current document is being viewed inside the browser or Acrobat Web Capture is not available, the method uses the Acrobat Weblink plug-in to retrieve the requested URL. If running inside Acrobat, the method gets the URL of the current document either from the `baseURL <JS_API_AcroJS.html#12307>`__, from the URL of the first page (page 0) if the document was obtained by Web Capture, or from the file system.

.. note::

   Beginning with Acrobat 8.1, File and JavaScript URLs can be executed only when operating in a privileged context, such as during a batch or console event. File and JavaScript URLs begin with the scheme names ``javascript`` or ``file``.

.. note::

   This method is not available for Adobe Reader when the ``bAppend`` parameter is set to ``true``.

This method roughly corresponds to the "open a web page" action.

A related method is ``app.`` `launchURL <JS_API_AcroJS.html#88818>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cURL``
     - A fully qualified URL or a relative URL. There can be a query string at the end of the URL.

   * - ``bAppend``
     - (optional) If ``true`` (the default), the resulting page or pages should be appended to the current document. This flag is considered to be ``false`` if the document is running inside the web browser, the Acrobat Web Capture plug-in is not available, or if the URL is of type ``"file:///"``.   -  Beginning with Acrobat 6.0, if ``bAppend`` is ``true``, the ``getURL`` method can only be executed during a console or batch event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. 

Example: 

::

      this.getURL("http://www.example.com/", false);
   

.. raw:: html

   <a name="20792"></a>

getUserUnitSize
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 12.0
     - No
     - No
     - All


**Returns** the UserUnit value of a page. The UserUnit value can be used to calculate page sizes for large pages. For example, you can use it with the pages where size exceeds 14,400 units.

The PDF reference defines UserUnit as a positive number giving the size of default user space units, in multiples of 1 / 72 inch. Since the largest page size in user space coordinates cannot exceed 14,400, the UserUnit provides a way to specify larger pages by acting as a scaling factor. You can use the ``getUserUnitSize`` with the APIs that deal with the page size (such as ``getPageBox``), to determine the actual page size.

**Parameters**

===== ==============================
nPage The 0-based index of the page.
===== ==============================



**Returns** 

A number indicating the UserUnit value for the page.

     - Integer
     - R

**Example (Acrobat)**

Determine the page size in inches:

::

   var aRect = this.getPageBox("Media");
   var pageHeight = aRect[1];
   var pageWidth = aRect[2];
   var userUnit  = this.getUserUnitSize(0);
   var pageHeightInches = ((pageHeight * userUnit) / 72);
   var pageWidthInches = ((pageWidth * userUnit) / 72);
   console.println("nPage 1 height : " + pageHeightInches + 
              " inches nPage 1 width : " + pageWidthInches + " inchesn");
   

.. raw:: html

   <a name="11678"></a>

gotoNamedDest
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - No
     - No
     - All


Goes to a named destination within the PDF document. For details on named destinations and how to create them, see the `PDF Referece <https://adobe.com/go/pdfreference>`_ .

**Parameters**

========= ==============================================
``cName`` The name of the destination within a document.
========= ==============================================

Example: Open a document, and go to a named destination within that document. The example assumes the document being opened by ``openDoc`` is ``disclosed``.

::

      // Open a new document

       var myNovelDoc = app.openDoc("/c/fiction/myNovel.pdf");
      // Go to a destination in this new doc
      myNovelDoc.gotoNamedDest("chapter5");
      // Close the old document
      this.closeDoc();

See `Example 6 (Acrobat 8.0) <JS_API_AcroJS.html#78489>`__ following `openDoc <JS_API_AcroJS.html#61826>`__ for a more efficient way of performing this same task.

.. raw:: html

   <a name="21267"></a>

importAnFDF
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - D
     - No
     - F 

Imports the specified FDF file. See also `importAnXFDF <JS_API_AcroJS.html#61122>`__ and `importTextData <JS_API_AcroJS.html#92335>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - (optional) The device-independent path to the FDF file. It should look like the value of the F entry in an FDF file exported with the ``submitForm`` method or with the Forms > Manage Form Data > Export Data From Form menu item. The path may be relative to the location of the current document. If this parameter is omitted, a dialog box is shown to let the user select the file.

Example: The following code, which is an action of a Page Open event, checks whether a certain function, ``ProcResponse``, is already defined, if not, it installs a document-level JavaScript, which resides in an FDF file.

::

      if(typeof ProcResponse == "undefined") this.importAnFDF("myDLJS.fdf"); 

Here, the path is a relative one. This technique may be useful for automatically installing document-level scripts for PDF files distilled from a PostScript file.

.. raw:: html

   <a name="61122"></a>

importAnXFDF
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - F 

Imports the specified XFDF file containing XML form data.

XFDF is an XML representation of Acrobat form data. See the document *XML Form Data Format (XFDF) Specification,* available through the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

See also `exportAsXFDF <JS_API_AcroJS.html#87686>`__, `importAnFDF <JS_API_AcroJS.html#21267>`__ and `importTextData <JS_API_AcroJS.html#92335>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - (optional) The device-independent path to the XFDF file. The path may be relative to the location of the current document. If the parameter is omitted, a dialog box is shown to let the user select the file.

.. raw:: html

   <a name="64990"></a>

importDataObject
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - All

Imports an external file into the document and associates the specified name with the ``data`` object. Data objects can later be extracted or manipulated.

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `exportDataObject <JS_API_AcroJS.html#84187>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

.. note::

   If the ``cDIPath`` parameter is specified, this method can only be executed during a batch or console event, or through an external call (for example, OLE). See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. See the `event <JS_API_AcroJS.html#38077>`__ object for a discussion of JavaScript events.

When a file attachment is imported using ``importDataObject``, the value of its ``Data.name`` is assigned by the parameter ``cName``. However, when a file is attached using the UI, its ``name`` is automatically assigned. The attachments are assigned the sequential names "Untitled Object", "Untitled Object 2", "Untitled Object 3", and so on.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to associate with the data object.

   * - ``cDIPath``
     - (optional) A device-independent path to a data file on the user's hard drive. This path may be absolute or relative to the current document. If not specified, the user is prompted to locate a data file.

   * - ``cCryptFilter``
     - (optional, Acrobat 6.0) The language-independent name of a crypt filter to use when encrypting this data object. This crypt filter must have previously been added to the document's list of crypt filters, using the Doc ``addRecipientListCryptFilter`` method, otherwise an exception will be thrown. To leave this data object unencrypted in a file that is encrypted by the Doc ``encryptForRecipients`` method, the predefined Identity crypt filter can be used.



**Returns** 

``true`` on success. An exception is thrown on failure.

Example: Attach two files into current document, and write all Data object information to the console.

::

      function DumpDataObjectInfo(dataobj)
      {
          for (var i in dataobj)
              console.println(dataobj.name + "[" + i + "]=" + dataobj[i]);
      }
      // Prompt the user for a data file to embed.
      this.importDataObject("MyData");
      DumpDataObjectInfo(this.getDataObject("MyData"));
      // Embed Foo.xml (found in the parent directory for this doc).
      this.importDataObject("MyData2", "../Foo.xml");
      DumpDataObjectInfo(this.getDataObject("MyData2"));

.. raw:: html

   <a name="49983"></a>

importIcon
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - All

Imports an icon into the document and associates it with the specified name.

See also `icons <JS_API_AcroJS.html#12748>`__, `addIcon <JS_API_AcroJS.html#42105>`__, `getIcon <JS_API_AcroJS.html#79139>`__, `removeIcon <JS_API_AcroJS.html#84305>`__, the Field object methods `buttonGetIcon <JS_API_AcroJS.html#41330>`__, `buttonImportIcon <JS_API_AcroJS.html#27194>`__, `buttonSetIcon <JS_API_AcroJS.html#39147>`__, and the `Icon <JS_API_AcroJS.html#73868>`__ object.

Beginning with version 6.0, Acrobat will first attempt to open ``cDIPath`` as a PDF file. On failure, Acrobat will try to convert ``cDIPath`` to PDF from one of the known graphics formats (BMP, GIF, JPEG, PCX, PNG, TIFF) and then import the converted file as a button icon.

.. note::

   If ``cDIPath`` is specified, this method can only be executed during a batch or console event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of Acrobat JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to associate with the icon.

   * - ``cDIPath``
     - (optional) A device-independent path to a PDF file on the user's hard drive. This path may be absolute or relative to the current document. ``cDIPath`` may only be specified in a batch environment or from the console. If not specified, the ``nPage`` parameter is ignored and the user is prompted to locate a PDF file and browse to a particular page.

   * - ``nPage``
     - (optional) The 0-based index of the page in the PDF file to import as an icon. The default is 0.



**Returns** 

An integer code indicating whether it was successful or not:

* *0*: No error
* *1*: The user cancelled the dialog box
* *-1*: The selected file could not be opened
* *-2*: The selected page was invalid

Example: This function is useful to populate a document with a series of named icons for later retrieval. For example, an author may want a picture of a list box state to appear next to the list box when the user selects the state in a list box. Without this function, it could be done by using a number of fields that could be hidden and shown. However, this is difficult to author. Instead, the appropriate script might be something like this:

::

      var f = this.getField("StateListBox");
      var b = this.getField("StateButton");
      b.buttonSetIcon(this.getIcon(f.value));

This uses a single field to perform the same effect.

A simple user interface can be constructed to add named icons to a document. Assume the existence of two fields: a field called ``IconName`` that will contain the icon name and a field called ``IconAdd`` that will add the icon to the document. The mouse-up script for ``IconAdd`` would be:

::

      var t = this.getField("IconName");
      this.importIcon(t.value);

The same kind of script can be applied in a batch setting to populate a document with every selected icon file in a folder.

.. raw:: html

   <a name="42848"></a>

importSound
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - All

Imports a sound into the document and associates the specified name with the sound.

.. note::

   If ``cDIPath`` is specified, this method can only be executed during a batch or console event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name to associate with the sound object.

   * - ``cDIPath``
     - (optional) A device-independent path to a sound file on the user's hard drive. This path may be absolute or relative to the current document. If not specified, the user is prompted to locate a sound file.

Example: Import two sounds and play them.

::

      this.importSound("Moo");
      this.getSound("Moo").play();
      this.importSound("Moof", "./moof.wav");
      this.getSound("Moof").play();

See also `sounds <JS_API_AcroJS.html#41410>`__, `getSound <JS_API_AcroJS.html#10552>`__, `deleteSound <JS_API_AcroJS.html#26240>`__, and the `Sound <JS_API_AcroJS.html#11412>`__ object.

.. raw:: html

   <a name="92335"></a>

importTextData
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - F

Imports a row of data from a text file. Each row must be *tab delimited* . The entries in the first row of the text file are the column names of the tab delimited data. These names are also field names for text fields present in the PDF file. The data row numbers are 0-based; that is, the first row of data is row zero (this does not include the column name row). When a row of data is imported, each column datum becomes the field value of the field that corresponds to the column to which the data belongs.

See also the export version of this method, `exportAsText <JS_API_AcroJS.html#64033>`__.

.. note::

   (Acrobat 8.0) If ``cPath`` is specified, this method can only be executed during batch and console events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - (optional) A relative device-independent path to the text file. If not specified, the user is prompted to locate the text data file.

   * - ``nRow``
     - (optional) The 0-based index of the row of the data to import, not counting the header row. If not specified, the user is prompted to select the row to import.



**Returns** 

An integer return code.

=========== ===================================
**Returns** code Description
=========== ===================================
-3          Warning: Missing Data
-2          Warning: User Cancelled Row Select
-1          Warning: User Cancelled File Select
0           No Error
1           Error: Cannot Open File
2           Error: Cannot Load Data
3           Error: Invalid Row
=========== ===================================

Example 1: In this example, there are text fields named "First", "Middle", and "Last", and a data file whose first row consists of the three strings, "First", "Middle", and "Last", separated by tabs, along with four additional rows of tab-separated name data.

::

      First    Middle    Last
      A.       C.        Robat
      T.       A.        Croba
      A.       T.        Acrob
      B.       A.        Tacro
      // Import the first row of data from "myData.txt".
      this.importTextData("/c/data/myData.txt", 0)

**Example (continued)**

The following code is a mouse-up action for a button. Clicking on the button cycles through the text file and populates the three fields "First", "Middle", and "Last" with the name data.

::

      if (typeof cnt == "undefined") cnt = 0;
          this.importTextData("/c/data/textdata.txt", cnt++ % 4)

The data file can be a spreadsheet or a database.

.. raw:: html

   <a name="65500"></a>

importXFAData
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - Yes
     - F

Imports the specified XFA file. See also `importAnXFDF <JS_API_AcroJS.html#61122>`__ and `importTextData <JS_API_AcroJS.html#92335>`__.

.. note::

   This method is only allowed in batch and console events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - (optional) The device-independent path of the XFA file. The path may be relative to the location of the current document. If this parameter is omitted, a dialog box is shown to let the user select the file.

.. raw:: html

   <a name="20950"></a>">

insertPages

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - X

Inserts pages from the source document into the current document. If a page range is not specified, the method gets all pages in the source document.

See also `deletePages <JS_API_AcroJS.html#99469>`__ and `replacePages <JS_API_AcroJS.html#58207>`__.

.. note::

   This method can only be executed during batch and console events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page after which to insert the source document pages. Use -1 to insert pages before the first page of the document.

   * - ``cPath``
     - The device-independent path to the PDF file that will provide the inserted pages. The path may be relative to the location of the current document.

   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the source document to insert. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the source document to insert. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

Example: Insert a cover page to the current document.

::

      this.insertPages ({ 
          nPage: -1, 
          cPath: "/c/temp/myCoverPage.pdf",
          nStart: 0
      });

.. raw:: html

   <a name="56439"></a>

mailDoc
~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - No
     - No
     - Requires document save rights

Saves the current PDF document and mails it as an attachment to all recipients, with or without user interaction.

See also `mailForm <JS_API_AcroJS.html#29734>`__, ``app.`` `mailGetAddrs <JS_API_AcroJS.html#75294>`__, ``app.`` `mailMsg <JS_API_AcroJS.html#29487>`__, the ``FDF`` object `mail <JS_API_AcroJS.html#38284>`__ method and the ``Report`` object `mail <JS_API_AcroJS.html#52175>`__ method.

.. note::

   (Acrobat 7.0) When this method is executed in a non-privileged context, the ``bUI`` parameter is not honored and defaults to ``true``. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details.

* `(Save Rights) For Adobe Reader 5.1 and later, this method is allowed, but document Save rights are required in case the document is changed. <JS_API_acrojspreface.html#Column4>`__

On Windows, the client computer must have its default mail program configured to be MAPI enabled to use this method.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bUI``
     - (optional) If ``true`` (the default), the rest of the parameters are used in a compose-new-message window that is displayed to the user. If ``false``, the ``cTo`` parameter is required and all others are optional.   -  (Acrobat 7.0) When this method is executed in a non-privileged context, the ``bUI`` parameter is not honored and defaults to ``true``. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__. 

   * - ``cTo``
     - (optional) The semicolon-delimited list of recipients for the message.

   * - ``cCc``
     - (optional) The semicolon-delimited list of CC recipients for the message.

   * - ``cBcc``
     - (optional) The semicolon-delimited list of BCC recipients for the message.

   * - ``cSubject``
     - (optional) The subject of the message. The length limit is 64 KB.

   * - ``cMsg``
     - (optional) The content of the message. The length limit is 64 KB.

Example: Open the compose message window.

::

      this.mailDoc(true);

Send email with the attached PDF file to ``apstory@example.com`` and ``dpsmith@example.com``. Beginning with Acrobat 7.0, the code below would have to be executed in a privileged context if the ``bUI`` parameter (set to ``false``) is to be honored.

::

      this.mailDoc({
          bUI: false, 
          cTo: "apstory@example.com", 
          cCC: "dpsmith@example.com",

           cSubject: "The Latest News", 
          cMsg: "A.P., attached is my latest news story in PDF."
      });

.. raw:: html

   <a name="29734"></a>

mailForm
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 4.0
     - No
     - No
     - Requires forms rights

Exports the form data and mails the resulting FDF file as an attachment to all recipients, with or without user interaction. The method does not support signed signature fields.

See also `mailDoc <JS_API_AcroJS.html#56439>`__, ``app.`` `mailGetAddrs <JS_API_AcroJS.html#75294>`__, ``app.`` `mailMsg <JS_API_AcroJS.html#29487>`__, the ``FDF`` object `mail <JS_API_AcroJS.html#38284>`__ method and the ``Report`` object `mail <JS_API_AcroJS.html#52175>`__ method.

.. note::

   On Windows, the client machine must have its default mail program configured to be MAPI enabled to use this method.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bUI``
     - If ``true``, the rest of the parameters are used in a compose-new-message window that is displayed to the user. If ``false``, the ``cTo`` parameter is required and all others are optional.   -  (Acrobat 7.0) When this method is executed in a non-privileged context, the ``bUI`` parameter is not honored and defaults to ``true``. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__. 

   * - ``cTo``
     - (required if ``bUI`` is ``true``) A semicolon-delimited list of recipients for the message. 

   * - ``cCc``
     - (optional) A semicolon-delimited list of CC recipients for the message.

   * - ``cBcc``
     - (optional) A semicolon-delimited list of BCC recipients for the message.

   * - ``cSubject``
     - (optional) The subject of the message. The length limit is 64 KB.

   * - ``cMsg``
     - (optional) The content of the message. The length limit is 64 KB.

Example: Open the compose message window.

::

      this.mailForm(true);

Send the mail with the attached FDF file to ``fun1@example.com`` and ``fun2@example.com``.

::

      this.mailForm(false, "fun1@example.com; fun2@example.com", "", "", 
          "This is the subject", "This is the body of the mail.");

.. raw:: html

   <a name="52380"></a>

movePage
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Moves a page within the document.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page to move. The default is 0.

   * - ``nAfter``
     - (optional) The 0-based index of the page after which to move the specified page. Use -1 to move the page before the first page of the document. The default is the last page in the document.

Example: Reverse the pages in the document.

::

      for (i = this.numPages - 1; i >= 0; i--) this.movePage(i);

.. raw:: html

   <a name="58928"></a>

newPage
~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - Yes
     - X

Adds a new page to the active document.

.. note::

   This method can only be executed during batch and console events. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The page after which to add the new page in a 1-based page numbering system. The default is the last page of the document. Use 0 to add a page before the first page. An invalid page range is truncated to the valid range of pages.

   * - ``nWidth``
     - (optional) The width of the page in points. The default value is ``612``. 

   * - ``nHeight``
     - (optional) The height of the page in points. The default value is ``792``. 

Example: Add a new page to match the page size of the doc.

::

      var Rect = this.getPageBox("Crop");
      this.newPage(0, Rect[2], Rect[1]);

.. raw:: html

   <a name="51160"></a>

openDataObject
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

**Returns** the Doc of a PDF document that is an embedded data object (an attachment) within the document that this method is being called for.

The method can throw an exception instead of returning a Doc if any of the following conditions are true:

-  The document that this method is being called for does not contain the requested embedded data object.
-  The data object is not a PDF document.
-  Permissions forbid opening attachments by means of JavaScript.

The document should be closed (using ``closeDoc``) after it is no longer needed.

**Parameters**

========= ============================
``cName`` The name of the data object.
========= ============================

The name of a data object is a property of the ``Data`` object. A name is given to the object when it is embedded, automatically by the Acrobat UI, or programmatically by the JavaScript methods ``createDataObject`` or ``importDataObject``.



**Returns** 

Doc or an exception is thrown.

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, `setDataObjectContents <JS_API_AcroJS.html#44192>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, and `importDataObject <JS_API_AcroJS.html#64990>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

Example: Open a PDF attachment and extract form data from it.

::

      var oDoc = this.openDataObject("myAttachment");
      try {
          var myField = this.getField("myTextField");
          // Get the value of "yourTextField" in PDF attachment
          var yourField = oDoc.getField("yourTextField");
          // View this value in "myTextField"
          myField.value = yourField.value;
          oDoc.closeDoc();
      } catch(e) { app.alert("Operation failed");}

See also `Example 5 (Acrobat 7.0) <JS_API_AcroJS.html#84733>`__ following the ``submitForm`` method.

.. raw:: html

   <a name="29633"></a>

preflight
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - D
     - No
     - Acrobat Pro only

Runs a Preflight profile for the document. An exception is thrown if the Preflight run fails.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oProfile``
     - The Preflight profile to be used for the Preflight run, described by a `PreflightProfile <JS_API_AcroJS.html#83635>`__ object.

   * - ``bOmitFixups``
     - (optional) Omit all fixups in the Preflight profile. If ``bOmitFixups`` is not specified, ``false`` is used.

   * - ``oThermometer``
     - (optional) Show the status window and progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 

**Returns** 

A `PreflightResult <JS_API_AcroJS.html#73619>`__ object.

Example: Run a Preflight profile and show the progress of the operation.

::

   var oProfile = Preflight.getProfileByName("Magazine Ads")
   if( oProfile != undefined )
   {
      var oThermometer = app.thermometer;
      var myPreflightResult = this.preflight( oProfile, false, oThermometer);
      if( myPreflightResult.numErrors > 0 ) {
      console.println( "Preflight found " + myPreflightResult.numErrors + " Errors.");
   } else {
      console.println( "Preflight found no Errors.");
   }

.. raw:: html

   <a name="71443"></a>">

print
~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - No
     - Yes
     - All

Prints all or a specific number of pages of the document.

Beginning with Acrobat 6.0, the method can print the document using the settings contained in a PrintParams object, rather than through the other parameters. The permanent print settings are not altered.

.. note::

   (Acrobat 6.0) When printing to a file, the path must be a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__). The ``print`` method will not overwrite an existing file.

(Acrobat 7.0) Non-interactive printing can only be executed during batch, console, and menu events. Printing is made non-interactive by setting ``bUI`` to ``false`` or by setting the ``interactive`` property to ``silent``, for example:

::

              var pp = this.getPrintParams();
              pp.interactive = pp.constants.interactionLevel.silent;

Outside of batch, console, and menu events, the values of ``bUI`` and of ``interactive`` are ignored and a print dialog box will always be presented.

See also `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__.

.. note::

   On a Windows platform, the file name must include an extension of ``.ps`` or ``.prn`` (case insensitive). Additionally, the ``print`` method will not create a file directly in the root directory, the windows directory, or the windows system directory.

An ``InvalidArgsError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception will be thrown and ``print`` will fail if any of the above security restrictions are not met.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bUI``
     - (optional) If ``true`` (the default), will cause a UI to be presented to the user to obtain printing information and confirm the action.

   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, all pages in the document are printed. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``.   If ``nStart`` and ``nEnd`` parameters are used, ``bUI`` must be ``false``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive page range. If ``nStart`` and ``nEnd`` are not specified, all pages in the document are printed. If only ``nEnd`` is specified, the range of a pages is 0 to ``nEnd``.   If ``nStart`` and ``nEnd`` parameters are used, ``bUI`` must be ``false``. 

   * - ``bSilent``
     - (optional) If ``true``, suppresses the cancel dialog box while the document is printing. The default is ``false``. 

   * - ``bShrinkToFit``
     - (optional, Acrobat 5.0) If ``true``, the page is shrunk (if necessary) to fit within the imageable area of the printed page. If ``false``, it is not. The default is ``false``. 

   * - ``bPrintAsImage``
     - (optional, Acrobat 5.0) If ``true``, print pages as an image. The default is ``false``. 

   * - ``bReverse``
     - (optional, Acrobat 5.0) If ``true``, print from ``nEnd`` to ``nStart``. The default is ``false``. 

   * - ``bAnnotations``
     - (optional, Acrobat 5.0) If ``true`` (the default), annotations are printed.

   * - ``printParams``
     - (optional, Acrobat 6.0) The PrintParams object containing the settings to use for printing. If this parameter is passed, any other parameters are ignored.

Example 1: Print the current page.

::

      this.print(false, this.pageNum, this.pageNum);
      // Print a file silently
      this.print({bUI: false, bSilent: true, bShrinkToFit: true});

**Example 2 (Acrobat 6.0)**

Print current document to a known printer.

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.automatic;
      pp.printerName = "hp officejet d series";
      this.print(pp);

.. note::

   If ``printerName`` is an empty string and ``fileName`` is nonempty, the current document is saved to disk as a PostScript file.

**Example 3 (Acrobat 6.0)**

Save the current document as a PostScript file.

::

      var pp = this.getPrintParams();
      pp.fileName = "/c/temp/myDoc.ps";
      pp.printerName = "";
      this.print(pp);

.. raw:: html

   <a name="81117"></a>

removeDataObject
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Requies file attachment rights

Deletes the data object corresponding to the specified name from the document.

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `removeDataObject <JS_API_AcroJS.html#81117>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `setDataObjectContents <JS_API_AcroJS.html#44192>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

**Parameters**

========= ======================================
``cName`` The name of the data object to remove.
========= ======================================

The name of a data object is a property of the ``Data`` object. A name is given to the object when it is embedded, either automatically by the Acrobat UI or programmatically by the JavaScript methods ``createDataObject`` or ``importDataObject``.

Example: 

::

   this.removeDataObject("MyData");

.. raw:: html

   <a name="96986"></a>

.. _removefield-1:

removeField
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - F 

Removes the specified field from the document. If the field appears on more than one page, all representations are removed.

.. note::

   (Acrobat 6.0): Beginning with Acrobat 6.0, ``removeField`` can be used from within Adobe Reader for documents with forms usage rights.

**Parameters**

========= =========================
``cName`` The field name to remove.
========= =========================

Example: 

::

      this.removeField("myBadField");

.. raw:: html

   <a name="84305"></a>

removeIcon
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Removes the specified named icon from the document.

See also `icons <JS_API_AcroJS.html#12748>`__, `addIcon <JS_API_AcroJS.html#42105>`__, `getIcon <JS_API_AcroJS.html#79139>`__, and `importIcon <JS_API_AcroJS.html#49983>`__, the Field object methods `buttonGetIcon <JS_API_AcroJS.html#41330>`__, `buttonImportIcon <JS_API_AcroJS.html#27194>`__, and `buttonSetIcon <JS_API_AcroJS.html#39147>`__, and the `Icon <JS_API_AcroJS.html#73868>`__ object.

**Parameters**

========= ===============================
``cName`` The name of the icon to remove.
========= ===============================

The name of the icon is a property of the ``Icon`` object. A name is given to the object either by ``importIcon``, when the icon file is imported into the document, or by ``addIcon``, which names an icon that is not in the document-level named icons tree.

Example: Remove all named icons from the document.

::

      for ( var i = 0; i < this.icons.length; i++)
          this.removeIcon(this.icons[i].name);

.. raw:: html

   <a name="57408"></a>

removeLinks
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - No
     - Not available in Reader

If the user has permission to remove links from the document, removes all the links on the specified page within the specified coordinates

See also `addLink <JS_API_AcroJS.html#21259>`__, `getLinks <JS_API_AcroJS.html#80686>`__, and the `Link <JS_API_AcroJS.html#48288>`__ object.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The 0-based index of the page from which to remove links.

   * - ``oCoords``
     - An array of four numbers in rotated user space, the coordinates of a rectangle listed in the following order: upper-left *x*, upper-left *y*, lower-right *x*, and lower-right *y* .

Example: Remove all links from the document.

::

      // Remove all links from the document
      for ( var p = 0; p < this.numPages; p++) 
      {
          var b = this.getPageBox("Crop", p);
          this.removeLinks(p, b);
      }

Use ``getLinks`` to help count the number of links removed.

.. raw:: html

   <a name="30155"></a>

removePreflightAuditTrail
~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - D
     - No
     - Acrobat Pro only

Removes the current audit trail from the document.

**Returns** 

``true`` if successfully removed, ``false`` otherwise.

.. raw:: html

   <a name="63100"></a>

removeRequirement
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0.5
     - D
     - Yes
     - X

Removes an existing requirement present in a PDF document. Removing a requirement frees Acrobat from having to fulfill it to open the document. The document may not function properly if a requirement is removed.

.. note::

   This method can only be called from a console or batch event.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cType``
     - The type of requirement to be removed. The types are described by the ``Requirements Enumerator`` object.

.. raw:: html

   <a name="89341"></a>

removeScript
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - D
     - No
     - Not available in Reader

Removes a document-level JavaScript, if permissions for script removal is granted.

**Parameters**

========= =============================================================
``cName`` A string that specifies the name of the script to be removed.
========= =============================================================



**Returns** 

The value ``undefined`` on success. The method throws an exception if the script is not found.

Example: Add a document-level script, then remove it.

::

      this.addScript("myScript", "app.alert('A.C. Robat welcomes you!')");

Now remove this script:

::

      this.removeScript("myScript");

.. raw:: html

   <a name="97652"></a>">

removeTemplate

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - X

Removes the named template from the document.

See also `templates <JS_API_AcroJS.html#83340>`__, `createTemplate <JS_API_AcroJS.html#36567>`__, `getTemplate <JS_API_AcroJS.html#53136>`__, and the `Template <JS_API_AcroJS.html#79743>`__ object.

.. note::

   This method can only be executed during a batch or console event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. See the `event <JS_API_AcroJS.html#38077>`__ object for a discussion of JavaScript events.

**Parameters**

========= ===================================
``cName`` The name of the template to remove.
========= ===================================

The template name is a property of the ``Template`` object. A name is given to a template when it is created, either by the Acrobat UI or by the JavaScript method ``getTemplate``.

.. raw:: html

   <a name="54115"></a>

removeThumbnails
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Deletes thumbnails for the specified pages in the document. See also `addThumbnails <JS_API_AcroJS.html#78355>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

.. raw:: html

   <a name="63275"></a>

removeWeblinks
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Scans the specified pages looking for links with actions to go to a particular URL on the web and deletes them. See also `addWeblinks <JS_API_AcroJS.html#89952>`__.

.. note::

   This method only removes weblinks authored in the application using the UI. Web links that are executed through JavaScript (for example, using ``getURL``) are not removed.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 



**Returns** 

The number of web links removed from the document.

Example: Remove all web links from the document and report results to the console window.

::

      var numWeblinks = this.removeWeblinks();
      console.println("There were " + numWeblinks + 

           " web links removed from the document.");

.. raw:: html

   <a name="58207"></a>

replacePages
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - Yes
     - X

Replaces pages in the current document with pages from the source document.

See also `deletePages <JS_API_AcroJS.html#99469>`__, `extractPages <JS_API_AcroJS.html#60156>`__, and `insertPages <JS_API_AcroJS.html#20950>`__.

.. note::

   This method can only be executed during a batch or console event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. See the `event <JS_API_AcroJS.html#38077>`__ object for a discussion of JavaScript events.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page at which to start replacement. The default is 0.

   * - ``cPath``
     - The device-independent path to the PDF file that will provide the replacement pages. The path may be relative to the location of the current document.

   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the source document to be used for replacement.  If ``nStart`` and ``nEnd`` are not specified, gets all pages in the source document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the source document to be used for replacement.  If ``nStart`` and ``nEnd`` are not specified, gets all pages in the source document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

.. raw:: html

   <a name="49978"></a>

resetForm
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - D
     - 
     - F 

Resets the field values within a document. Resetting a field causes it to take on its default value (which, in the case of text fields, is usually blank).

.. note::

   If the form contains signature fields, signature rights ` <JS_API_acrojspreface.html#Column4>`__ are required to use the method in Adobe Reader.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``aFields``
     - (optional) An array specifying the fields to reset. If not present or ``null``, all fields in the form are reset. You can include non-terminal fields in the array. 

Example 1: Select fields to be reset and reset them.

::

      var fields = new Array();
      fields[0] = "P1.OrderForm.Description";
      fields[1] = "P1.OrderForm.Qty";
      this.resetForm(fields);

The same fields can be reset using only one line of code:

::

      this.resetForm(["P1.OrderForm.Description","P1.OrderForm.Qty"]);

Example 2: This example shows how to reset a whole subtree. For example, if you pass "name" as part of the fields array, all ``name`` fields, such as ``name.first`` and ``name.last``, are reset.

::

      this.resetForm(["name"]);

.. raw:: html

   <a name="34461"></a>

saveAs
~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - Yes 
     - Requires save rights 

Saves the file to the device-independent path specified by the required parameter, ``cPath``. The file is not saved optimized for the web. Beginning with Acrobat 6.0, the document can be converted to another file type (other than PDF) and saved as specified by the value of the ``cConvID`` parameter.

.. note::

   This method can only be executed during a batch or console event. See `Privileged versus non-privileged context <JS_API_AcroJSPreface.html#76421>`__ for details. The `event <JS_API_AcroJS.html#38077>`__ object contains a discussion of JavaScript events.

(Adobe Reader *S* ): This method is available in Adobe Reader for documents that have Save usage rights.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cPath``
     - The device-independent path in which to save the file.  -  The parameter ``cPath`` must have a safe path (see `Safe path <JS_API_AcroJSPreface.html#63828>`__) and an extension appropriate to the value of ``cConvID``. See the `Values of cConvID and Valid Extensions <JS_API_AcroJS.html#36211>`__ table below. This method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) exception if these security conditions are not met, and the method will fail. 

   * - ``cConvID``
     - (optional, Acrobat 6.0) A conversion ID string that specifies the conversion file type. Currently supported values for ``cConvID`` are listed by the ``app.fromPDFConverters``. If ``cConvID`` is not specified, PDF is assumed. 

   * - ``cFS``
     - (optional, Acrobat 7.0) A string that specifies the source file system name. Two values are supported: "" (the empty string) representing the default file system and "CHTTP". The default is the default file system. This parameter is only relevant if the web server supports WebDAV.

   * - ``bCopy``
     - (optional, Acrobat 7.0) A Boolean value which, if ``true``, saves the PDF file as a copy. The default is ``false``. 

   * - ``bPromptToOverwrite``
     - (optional, Acrobat 7.0) A Boolean value which, if ``true``, prompts the user if the destination file already exists. The default is ``false``. 



**Returns** 

The value ``undefined`` is returned on success. An exception is thrown if an error occurs. For example, this method will throw a ``NotAllowedError`` (see `Error <JS_API_AcroJS.html#13935>`__ object) if the user disallows an overwrite.

.. note::

   Prior to Acrobat 7.0, this method had no return value.

.. raw:: html

   <a name="36211"></a>

**Values of cConvID and Valid Extensions**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - cConvID
     - Valid extensions

   * - ``com.adobe.acrobat.eps``
     - ``eps``

   * - ``com.adobe.acrobat.html``
     - ``html``, ``htm`` 

   * - ``com.adobe.acrobat.jpeg``
     - ``jpeg``, ``jpg``, ``jpe`` 

   * - ``com.adobe.acrobat.jp2k``
     - ``jpf``, ``jpx``, ``jp2``, ``j2k``, ``j2c``, ``jpc`` 

   * - com.adobe.acrobat.docx
     - docx

   * - ``com.adobe.acrobat.doc``
     - ``doc``

   * - ``com.callas.preflight.pdfa``
     - ``pdf``

   * - ``com.callas.preflight.pdfe``
     - ``pdf``

   * - ``com.callas.preflight.pdfx``
     - ``pdf``

   * - ``com.adobe.acrobat.png``
     - ``png``

   * - ``com.adobe.acrobat.ps``
     - ``ps``

   * - ``com.adobe.acrobat.rtf``
     - ``rft``

   * - com.adobe.acrobat.xlsx
     - xlsx

   * - ``com.adobe.acrobat.spreadsheet``
     - ``xml``

   * - ``com.adobe.acrobat.accesstext``
     - ``txt``

   * - ``com.adobe.acrobat.plain-text``
     - ``txt``

   * - ``com.adobe.acrobat.tiff``
     - ``tiff``, ``tif`` 

   * - ``com.adobe.acrobat.xml-1-00``
     - ``xml``

   * - ``com.adobe.acrobat.pptx`` (Acrobat Professional only)
     - ``pptx``

**Deprecated Values of cConvID (as of Acrobat 10)**

The conversion IDs listed below are deprecated in Acrobat 10. They are not registered but (only when used with the JavaScript doc.saveAs call) are internally mapped to valid, registered conversion IDs. Support for the deprecated conversion IDs will be fully removed in subsequent Acrobat releases.

========================================== ==========================
Deprecated cConvID                         Equivalent Valid cConvID
========================================== ==========================
``com.adobe.acrobat.html-3-20``            ``com.adobe.acrobat.html``
``com.adobe.acrobat.htm l- 4-01-css-1-00`` ``com.adobe.acrobat.html``
========================================== ==========================

.. note::

   When the conversion ID corresponds to ``jpeg``, ``jp2k``, ``png``, or ``tiff``, this method saves each page individually under a file name obtained by appending ``"_Page_#"`` to the basename of the file name provided. For example, if the value of the ``cPath`` is ``"/C/temp/mySaveAsDocs/myJPGs.jpg"``, the names of the files generated will be ``myJPGs_Page_1.jpg``, ``myJPGs_Page_2.jpg``, and so on.

Example 1: The following code, which could appear as a batch sequence, is an outline of a script. It assumes a PDF file containing form fields is open. The fields must be populated from a database and the document saved.

::

      // code lines to read from a database and populate the form with data
      // now save file to a folder; use customerID from database record 
      // as name
      var row = statement.getRow();
      .......
      this.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");

Example 2: You can use ``newDoc`` and ``addField`` to dynamically lay out a form, then populate it from a database and save.

::

      var myDoc = app.newDoc()
      // layout some dynamic form fields
      // connect to database, populate with data, perhaps from a database
      ..........
      // save the doc and/or print it; print it silently this time 
      // to default printer
      myDoc.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");
      myDoc.closeDoc(true);       // close the doc, no notification

**Example 3 (Acrobat 6.0)**

Save the current document in rich text format:

::

      this.saveAs("/c/myDocs/myDoc.rtf", "com.adobe.acrobat.rtf");

See `fromPDFConverters <JS_API_AcroJS.html#72896>`__ for a listing of supported conversion ID strings.

.. raw:: html

   <a name="35868"></a>

**Example 3 (Acrobat 7.0)**

Save the document to a WebDAV folder.

::

      this.saveAs({
          cPath: "http://www.example.com/WebDAV/myDoc.pdf",
          bPromptToOverwrite: true,
          cFS: "CHTTP"
      });

.. raw:: html

   <a name="14697"></a>

scroll
~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - No
     - No
     - All

Scrolls the specified point on the current page into the middle of the current view. These coordinates must be defined in rotated user space. See the `PDF Referece <https://adobe.com/go/pdfreference>`_ for details.

**Parameters**

====== ===========================================
``nX`` The *x* coordinate for the point to scroll.
``nY`` The *y* coordinate for the point to scroll.
====== ===========================================

.. raw:: html

   <a name="11214"></a>

selectPageNthWord
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Changes the current page number and selects the specified word on the page.

See also `getPageNthWord <JS_API_AcroJS.html#32356>`__, `getPageNthWordQuads <JS_API_AcroJS.html#68212>`__, and `getPageNumWords <JS_API_AcroJS.html#12782>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index of the page to operate on. The default is 0, the first page in the document.

   * - ``nWord``
     - (optional) The 0-based index of the word to obtain. The default is 0, the first word on the page.

   * - ``bScroll``
     - (optional) Specifies whether to scroll the selected word into the view if it is not already viewable. The default is ``true``. 

Example: Get and select a particular word.

::

      // Get the 20th word on page 2 (page 1, 0-based)
      var cWord = this.getPageNthWord(1, 20);
      // Select that word (highlight) for the user to see, and change the page if 

       // necessary.
      this.selectPageNthWord(1, 20);

.. raw:: html

   <a name="35182"></a>

.. _setaction-1:

setAction
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - 
     - Not available in Reader

Sets the JavaScript action of the document for a given trigger.

See also `addScript <JS_API_AcroJS.html#81436>`__, `setPageAction <JS_API_AcroJS.html#69422>`__, the ``Bookmark`` object `setAction <JS_API_AcroJS.html#52228>`__ method, and the Field object `setAction <JS_API_AcroJS.html#37472>`__ method.

.. note::

   This method will overwrite any action already defined for the selected trigger.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cTrigger``
     - The name of the trigger point to which to attach the action. Values are:  *WillClose WillSave DidSave WillPrint DidPrint*

   * - ``cScript``
     - The JavaScript expression to be executed when the trigger is activated.

Example: Insert ``WillSave`` and ``DidSave`` actions. The code gets the file size before saving and after saving, and compares the two.

::

      // WillSave script
      var myWillSave = 'var filesizeBeforeSave = this.filesize;r'
          + 'console.println("File size before saving is " + '
          + ' filesizeBeforeSave );';
      
      // DidSave script
      var myDidSave =  'var filesizeAfterSave = this.filesize;r'
          + 'console.println("File size after saving is "' 

           + 'filesizeAfterSave);r'
          + 'var difference = filesizeAfterSave - filesizeBeforeSave;r'
          + 'console.println("The difference is " + difference );r'
          + 'if ( difference < 0 )rt'
          + 'console.println("Reduced filesize!");r'
          + 'elsert'
          + 'console.println("Increased filesize!");'
      
      // Set document actions...
      this.setAction("WillSave", myWillSave);
      this.setAction("DidSave", myDidSave);

.. raw:: html

   <a name="44192"></a>

setDataObjectContents
~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - Requires attachment rights

Replaces the file attachment specified by the parameter ``cName`` with the contents of the ``oStream`` parameter.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name associated with the ``Data`` object that is to be replaced with ``oStream``. 

   * - ``oStream``
     - A ``ReadStream`` object representing the contents of the file attachment.

   * - ``cCryptFilter``
     - (optional) The language-independent name of a crypt filter to use when encrypting this data object. This crypt filter must have previously been added to the document's list of crypt filters, using the ``addRecipientListCryptFilter`` method, otherwise, an exception will be thrown. The predefined Identity crypt filter can be used so that this data object is not encrypted in a file that is otherwise encrypted by the ``encryptForRecipients`` method.

Example 1: See the `Example <JS_API_AcroJS.html#52103>`__ following `getDataObjectContents <JS_API_AcroJS.html#42001>`__.

Example 2: This document has a file attachment named ``Acrobat.xml``. The attachment is opened, the XML data is updated, then the new XML document is saved back to the attachment. It is possible to submit this XML file attachment. See `Example 5 (Acrobat 7.0) <JS_API_AcroJS.html#84733>`__, following the `submitForm <JS_API_AcroJS.html#20780>`__ method. This example uses the XML data defined in the `Example <JS_API_AcroJS.html#47440>`__ following ``XMLData.`` `applyXPath <JS_API_AcroJS.html#36467>`__ .

::

      // Get the file stream object of the attachment
      var Acrobat = this.getDataObjectContents("Acrobat.xml");
      
      // Convert to a string
      var cAcrobat = util.stringFromStream(Acrobat, "utf-8");
      
      // Parse this and get XFAObject
      var myXML = XMLData.parse(cAcrobat,false);
      
      // Change the value of grandad's income
      myXML.family.grandad.personal.income.value = "300000"; 
      
      // Save the XML document as a string, cAcrobat
      var cAcrobat = myXML.saveXML('pretty');
      
      // Convert to a file stream
      var Acrobat = util.streamFromString(cAcrobat, "utf-8");
      
      // Now "update" the attachment Acrobat.xml with this file stream
      this.setDataObjectContents("Acrobat.xml", Acrobat);

Related objects, properties, and methods are `dataObjects <JS_API_AcroJS.html#32072>`__, `getDataObject <JS_API_AcroJS.html#86645>`__, `openDataObject <JS_API_AcroJS.html#51160>`__, `createDataObject <JS_API_AcroJS.html#49328>`__, `importDataObject <JS_API_AcroJS.html#64990>`__, `getDataObjectContents <JS_API_AcroJS.html#42001>`__, and `removeDataObject <JS_API_AcroJS.html#81117>`__, and the `Data <JS_API_AcroJS.html#69212>`__ object.

.. raw:: html

   <a name="53506"></a>

setOCGOrder
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - D
     - No
     - Not available in Reader

Sets this document's OCGOrder array. This array represents how layers are displayed in the UI.

The simplest order array is a flat array of OCG objects. In this case, the listed OCGs are displayed in the UI as a flat list in the same order. If a subarray is present in the order array and the first element of the array is a string, the string will be listed with the rest of the array nested underneath it. If the first element of the array is not a string, the entire array will appear nested underneath the OCG preceding the subarray.

**Related methods** are `getOCGs <JS_API_AcroJS.html#82809>`__ and `getOCGOrder <JS_API_AcroJS.html#78739>`__, and the `OCG <JS_API_AcroJS.html#66402>`__ object.

**Parameters**

=============== ========================================================
``oOrderArray`` The array to be used as this document's OCG Order array.
=============== ========================================================

Example: Reverse the order of OCGs as listed in the UI.

::

      var ocgOrder = this.getOCGOrder();
      var newOrder = new Array();
      for (var j=0; j < ocgOrder.length; j++)
          newOrder[j] = ocgOrder[ocgOrder.length-j-1];
      this.setOCGOrder(newOrder);

.. raw:: html

   <a name="69422"></a>

setPageAction
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - NO
     - Not available in Reader

Sets the action of a page in a document for a given trigger.

See also `setAction <JS_API_AcroJS.html#35182>`__, `addScript <JS_API_AcroJS.html#81436>`__, the ``Bookmark`` object `setAction <JS_API_AcroJS.html#35182>`__ method, and the Field object `setAction <JS_API_AcroJS.html#37472>`__ method.

.. note::

   This method will overwrite any action already defined for the chosen page and trigger.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The 0-based index of the page in the document to which an action is added.

   * - ``cTrigger``
     - The trigger for the action. Values are:  *Open Close*

   * - ``cScript``
     - The JavaScript expression to be executed when the trigger is activated.

Example: This example causes the application to beep when the first page is opened.

::

      this.setPageAction(0, "Open", "app.beep(0);");

.. raw:: html

   <a name="10299"></a>">

setPageBoxes
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Sets a rectangle that encompasses the named box for the specified pages.

See also `getPageBox <JS_API_AcroJS.html#40225>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cBox``
     - (optional) The box type value, one of:  *Art Bleed Crop Media Trim*  Note that the BBox box type is read-only and only supported in ``getPageBox``. For definitions of these boxes, see the `PDF Referece <https://adobe.com/go/pdfreference>`_ . 

   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document.

   * - ``rBox``
     - (optional) An array of four numbers in rotated user space to which to set the specified box. If not provided, the specified box is removed.

.. raw:: html

   <a name="22005"></a>

setPageLabels
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Establishes the numbering scheme for the specified page and all pages following it until the next page with an attached label is encountered.

See also `getPageLabel <JS_API_AcroJS.html#67733>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - (optional) The 0-based index for the page to be labeled.

   * - ``aLabel``
     - (optional) An array of three required items ``[cStyle, cPrefix, nStart ]``: ``cStyle`` is the style of page numbering. It can be:  
     
       * *D*: decimal numbering  
       * *R* or *r*: roman numbering, upper or lower case  
       * *A* or *a*: alphabetic numbering, upper or lower case  See the `PDF Referece <https://adobe.com/go/pdfreference>`_ for the exact definitions of these styles.
       
       ``cPrefix`` is a string to prefix the numeric portion of the page label. -  ``nStart`` is the ordinal with which to start numbering the pages.  If not supplied, any page numbering is removed for the specified page and any others up to the next specified label.  The value of ``aLabel`` cannot be ``null``. 

Example 1: For the ten pages in the document, label the first three with small roman numerals, the next five with numbers (starting at 1) and the last two with an "Appendix-" prefix and alphabetics.

::

      this.setPageLabels(0, [ "r", "", 1]);
      this.setPageLabels(3, [ "D", "", 1]);
      this.setPageLabels(8, [ "A", "Appendix-", 1]);
      var s = this.getPageLabel(0);
      for (var i = 1; i < this.numPages; i++)
          s += ", " + this.getPageLabel(i);
      console.println(s);

The example will produce the following output on the console:

::

      i, ii, iii, 1, 2, 3, 4, 5, Appendix-A, Appendix-B

Example 2: Remove all page labels from a document.

::

      for (var i = 0; i < this.numPages; i++) {
          if (i + 1 != this.getPageLabel(i)) {
              // Page label does not match ordinal page number.
              this.setPageLabels(i);
          }
      }

.. raw:: html

   <a name="40483"></a>

setPageRotations
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Rotates the specified pages in the current document.

See also `getPageRotation <JS_API_AcroJS.html#33574>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

   * - ``nRotate``
     - (optional) The amount of rotation that should be applied to the target pages. Can be 0, 90, 180, or 270. The default is 0.

Example: Rotate pages 0 through 10 of the current document.

::

      this.setPageRotations(0, 10, 90);

.. raw:: html

   <a name="43314"></a>

setPageTabOrder
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - D
     - No
     - X 

Sets the tab order of the form fields on a page. The tab order can be set by row, by column, or by structure.

If a PDF 1.4 document is viewed in Acrobat 6.0, tabbing between fields is in the same order as it is in Acrobat 5.0. Similarly, if a PDF 1.5 document is opened in Acrobat 5.0, the tabbing order for fields is the same as it is in Acrobat 6.0.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nPage``
     - The 0-based index of the page number on which the tabbing order is to be set.

   * - ``cOrder``
     - The order to be used. Values are:  *rows columns structure*

Example: Set the page tab order for all pages to ``rows``.

::

      for (var i = 0; i < this.numPages; i++)
          this.setPageTabOrder(i, "rows");

.. raw:: html

   <a name="76168"></a>

setPageTransitions
~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - D
     - No
     - Not available in Reader

Sets the page transition for a specific range of pages.

See also `getPageTransition <JS_API_AcroJS.html#67725>`__.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nStart``
     - (optional) A 0-based index that defines the start of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nStart`` is specified, the range of pages is the single page specified by ``nStart``. 

   * - ``nEnd``
     - (optional) A 0-based index that defines the end of an inclusive range of pages in the document to be operated on. If ``nStart`` and ``nEnd`` are not specified, operates on all pages in the document. If only ``nEnd`` is specified, the range of pages is 0 to ``nEnd``. 

   * - ``aTrans``
     -  (optional) The page transition array consists of three values:  ``[nDuration, cTransition, nTransDuration]``.   -  ``nDuration`` is the maximum amount of time the page is displayed before the viewer automatically turns to the next page. Set to -1 to turn off automatic page turning. -  ``cTransition`` is the name of the transition to apply to the page. See ``fullScreen.`` `transitions <JS_API_AcroJS.html#85692>`__ for a list of valid transitions. -  ``nTransDuration`` is the duration (in seconds) of the transition effect.  If ``aTrans`` is not present, any page transitions for the pages are removed.

Example: Put the document into full screen mode and apply some transitions:

::

      this.setPageTransitions({ aTrans: [-1, "Random", 1] } );
      app.fs.isFullScreen=true;

.. raw:: html

   <a name="94080"></a>

spawnPageFromTemplate
~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - deprecated
     - No
     - No
     - D, F

.. note::

   This method has been superseded by ``templates``, ``createTemplate``, and the ``Template`` object ``spawn`` method.

Spawns a page in the document using the given template, as returned by ``getNthTemplate``. The template feature does not work in Adobe Reader.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cTemplate``
     - The template name.

   * - ``nPage``
     - (optional) The 0-based page number before which or into which the template is spawned, depending on the value of ``bOverlay``. If ``nPage`` is omitted, a new page is created at the end of the document. 

   * - ``bRename``
     - (optional) Specifies whether fields should be renamed. The default is ``true``. 

   * - ``bOverlay``
     - (optional, Acrobat 4.0) If ``false``, the template is inserted before the page specified by ``nPage``. If ``true`` (the default) it is overlaid on top of that page. 

   * - ``oXObject``
     - (optional, Acrobat 6.0) The value of this parameter is the return value of an earlier call to ``spawnPageFromTemplate``. 



**Returns** 

Prior to Acrobat 6.0, this method returned nothing. Now, this method returns an object representing the page contents of the page spawned. This return object can then be used as the value of the optional parameter ``oXObject`` for subsequent calls to ``spawnPageFromTemplate``.

.. note::

   Repeatedly spawning the *same* page can cause a large increase in file size. To avoid this problem, ``spawnPageFromTemplate`` now returns an object that represents the page contents of the spawned page. This return value can be used as the value of the ``oXObject`` parameter in subsequent calls to the ``spawnPageFromTemplate`` method to spawn the same page.

Example 1: Spawn each template page in the current document.

::

      var n = this.numTemplates;
      var cTempl;
      for (i = 0; i < n; i++) {
          cTempl = this.getNthTemplate(i);
          this.spawnPageFromTemplate(cTempl);
      }

.. raw:: html

   <a name="56305"></a>

**Example 2 (Acrobat 6.0)**

The following example spawns the same template 31 times using the ``oXObject`` parameter and return value. Using this technique avoids overly inflating the file size.

::

      var t = this.getNthTemplate(0)
      var XO = this.spawnPageFromTemplate(t, this.numPages, false, false);
      for (var i=0; i < 30; i++) 
          this.spawnPageFromTemplate(t,this.numPages, false, false, XO);

.. raw:: html

   <a name="20780"></a>

submitForm
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 3.01
     - No
     - No
     - All

Submits the form to a specified URL. To call this method, you must be running inside a web browser or have the Acrobat Web Capture plug-in installed. (If the URL uses the "mailto" scheme, it will be honored even if not running inside a web browser, as long as the SendMail plug-in is present.) Beginning with Adobe Reader 6.0, you need not be inside a web browser to call this method.

.. note::

   (Acrobat 6.0) Depending on the parameters passed, there are restrictions on the use of this method. See the notes embedded in the description of the parameters.

The ``https`` protocol is supported for secure connections.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cURL``
     - The URL to submit to. This string must end in ``#FDF`` if the result from the submission is FDF or XFDF (that is, the value of ``cSubmitAs`` is "FDF" or "XFDF") and the document is being viewed inside a browser window.

   * - ``bFDF``
     - (optional) If ``true`` (the default) form data is submitted as FDF. If ``false``, it is submitted as URL-encoded HTML.   -  This option has been deprecated; use ``cSubmitAs`` instead.

   * - ``bEmpty``
     - (optional) If ``true``, submit all fields, including those that have no value. If ``false`` (the default), exclude fields that currently have no value.   -  If data is submitted as XDP, XML, or XFD (see the ``cSubmitAs`` parameter, below), this parameter is ignored. All fields are submitted, even fields that are empty. See ``aFields``. 

   * - ``aFields``
     - (optional) An array of field names to submit or a string containing a single field name:  -  If supplied, only the fields indicated are submitted, except those excluded by ``bEmpty``.  -  If omitted or ``null``, all fields are submitted, except those excluded by ``bEmpty``.  -  If an empty array, no fields are submitted. A submitted FDF file might still contain data if ``bAnnotations`` is ``true``.   You can specify non-terminal field names to export an entire subtree of fields.  -  If data is submitted as XDP, XML, or XFD (see the ``cSubmitAs`` parameter), this parameter is ignored. All fields are submitted, even fields that are empty. See ``bEmpty``. 

   * - ``bGet``
     - (optional, Acrobat 4.0) If ``true``, submit using the HTTP GET method. If ``false`` (the default), use a POST. GET is only allowed if using Acrobat Web Capture to submit (the browser interface only supports POST) and only if the data is sent as HTML (that is, ``cSubmitAs`` is ``HTML``). 

   * - ``bAnnotations``
     - (optional, Acrobat 5.0) If ``true``, annotations are included in the submitted FDF or XML file. The default is ``false``. Only applicable if ``cSubmitAs`` is ``FDF`` or ``XFDF``. 

   * - ``bXML``
     - `(optional, Acrobat 5.0) If <JS_API_acrojspreface.html#deprecated>`__ ``true``, submit as XML. The default is ``false``.   -  This option has been deprecated; use ``cSubmitAs`` instead.

   * - ``bIncrChanges``
     - (optional, Acrobat 5.0) If ``true``, include the incremental changes to the PDF document in the submitted FDF file. The default is ``false``. Only applicable if ``cSubmitAs`` is ``FDF``. Not available in Adobe Reader. 

   * - ``bPDF``
     - `(optional, Acrobat 5.0) If <JS_API_acrojspreface.html#deprecated>`__ ``true``, submit the complete PDF document. The default is ``false``. If ``true``, all other parameters except ``cURL`` are ignored. Not available in Adobe Reader.   -  This option has been deprecated; use ``cSubmitAs`` instead.

   * - ``bCanonical``
     - (optional, Acrobat 5.0) If ``true``, convert any dates being submitted to standard format (that is, ``D:YYYYMMDDHHmmSSOHH'mm'`` ; see the `PDF Referece <https://adobe.com/go/pdfreference>`_ ). The default is ``false``. 

   * - ``bExclNonUserAnnots``
     - (optional, Acrobat 5.0) If ``true``, exclude any annotations that are not owned by the current user. The default is ``false``. 

   * - ``bExclFKey``
     - (optional, Acrobat 5.0) If true, exclude the F entry. The default is ``false``. 

   * - ``cPassword``
     - (optional, Acrobat 5.0) The password to use to generate the encryption key, if the FDF file needs to be encrypted before being submitted.  Pass the value ``true`` (no quotes) to use the password that the user has previously entered (within this Acrobat session) for submitting or receiving an encrypted FDF file. If no password has been entered, the user is prompted to enter a password.  Regardless of whether the password is passed in or requested from the user, this new password is remembered within this Acrobat session for future outgoing or incoming encrypted FDF files.  Only applicable if ``cSubmitAs`` is ``FDF``.   
.. caution::  As of Acrobat 8.0, you cannot create password-encrypted FDF files. If this parameter is used, a form trying to submit a password-encrypted FDF will throw an ``ESErrorInvalidArgs`` exception and the form submission will not occur.

   * - ``bEmbedForm``
     - (optional, Acrobat 6.0) If ``true``, the call embeds the entire form from which the data is being submitted in the FDF file.   Only applicable if ``cSubmitAs`` is ``FDF``. 

   * - ``oJavaScript``
     - (optional, Acrobat 6.0) Can be used to include ``Before``, ``After``, and ``Doc`` scripts in a submitted FDF file. If present, the value is converted directly to an analogous ``CosObj`` and used as the JavaScript attribute in the FDF file. For example:   *oJavaScript: { Before: 'app.alert("before!")', After: 'app.alert("after")', Doc: [ "MyDocScript1", "myFunc1()", "MyDocScript2", "myFunc2()" ] }*  Only applicable if ``cSubmitAs`` is ``FDF``. 

   * - ``cSubmitAs``
     - (optional, Acrobat 6.0) This parameter indicates the format for submission. Values are: 
     
       * *FDF*: (default): Submit as FDF  
       * *XFDF*: Submit as XFDF  
       * *HTML*: Submit as HTML  
       * *XDP*: Submit as XDP  
       * *XML*: submit as XML. In Acrobat 7.0, form data is submitted in XML format unless the parameter ``oXML`` (new to Acrobat 7.0) contains a valid ``XMLData`` object, in which case that is what gets submitted instead.  
       * *XFD*: Submit as Adobe Form Client Data File 
       * *PDF*: Submit the complete PDF document; all other parameters except ``cURL`` are ignored. (Save rights required) The choice of *PDF* is not available in Adobe Reader, unless the document has save rights.  This parameter supersedes the individual format parameters. However, they are considered in the following priority order, from high to low: ``cSubmitAs``, ``bPDF``, ``bXML``, ``bFDF``. 

   * - ``bInclNMKey``
     - (optional, Acrobat 6.0) If ``true``, include the NM entry of any annotations. The default is ``false``. 

   * - ``aPackets``
     - (optional, Acrobat 6.0) An array of strings, specifying which packets to include in an XDP submission. This parameter is only applicable if ``cSubmitAs`` is ``XDP``. Possible strings are:   
     
       * *config*  
       * *datasets*  
       * *sourceSet*  
       * *stylesheet*  
       * *template*  
       * *pdf*: The PDF should be embedded; if pdf is not included, only a link to the PDF is included in the XDP.  
       * *xfdf*: Include annotations in the XDP (since that packet uses XFDF format)  
       * ``*``: All packets should be included in the XDP. The default for ``pdf`` is to include it as a *reference* . To embed the PDF file in the XDP, explicitly specify ``pdf`` as one of the packets.   -  (Save rights required) When submitting a document as ``XDP`` from Adobe Reader with ``pdf`` explicitly listed, the document must have document save rights.  The default is: ``["datasets", "xfdf"]``. 

   * - ``cCharset``
     - (optional, Acrobat 6.0) The encoding for the values submitted. String values are ``utf-8``, ``utf-16``, ``Shift-JIS``, ``BigFive``, ``GBK``, and ``UHC``.   If not passed, the current Acrobat behavior applies. For XML-based formats, ``utf-8`` is used. For other formats, Acrobat tries to find the best host encoding for the values being submitted.  XFDF submission ignores this value and always uses ``utf-8``. 

   * - ``oXML``
     - (optional, Acrobat 7.0) This parameter is only applicable if ``cSubmitAs`` equals ``XML``. It should be an ``XMLData`` object, which will get submitted. 

   * - ``cPermID``
     - (optional, Acrobat 7.0) Specifies a permanent ID to assign to the PDF that is submitted if either the value of ``cSubmitAs`` is ``PDF`` or ``bEmbedForm`` is ``true``. This permanent ID is the first entry in the ``docID`` array (``docID[0]``).   Does not affect the current document.

   * - ``cInstID``
     - (optional, Acrobat 7.0) Specifies an instance ID to assign to the PDF that is submitted if either the value of ``cSubmitAs`` is ``PDF`` or ``bEmbedForm`` is ``true``. This instance ID is the second entry in the ``docID`` array (``docID[1]``).   Does not affect the current document.

   * - ``cUsageRights``
     - (optional, Acrobat 7.0) Specifies the additional usage rights to be applied to the PDF that is submitted if either the value of ``cSubmitAs`` is ``PDF`` or ``bEmbedForm`` is ``true``. The only valid value is ``submitFormUsageRights.RMA``.   Does not affect the current document.

Example 1: Submit the form to the server.

::

      this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF");

Example 2: Submit selected form fields to a server-side script as FDF.

::

      var aSubmitFields = new Array( "name", "id", "score" );
      this.submitForm({
          cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
          aFields: aSubmitFields,
          cSubmitAs: "FDF" // the default, not needed here
      });

Example 3: This example shows a shortcut to submitting a whole subtree. Passing "name" as part of the ``field`` parameter, submits "``name.title`` ", "``name.first`` ", "``name.middle`` " and "``name.last`` ".

::

      this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF", 
          true, false, "name");

Example 4: Submit form as XFDF to a server-side script.

::

      this.submitForm({
          cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
          cSubmitAs: "XFDF"
      });

.. raw:: html

   <a name="84733"></a>

**Example 5 (Acrobat 7.0)**

For a PDF file that contains several XFA forms as attachments, the following script gathers the XML data from each attachment and concatenates them. The combined data is then submitted.

::

      var oParent = event.target;
      var oDataObjects = oParent.dataObjects;
      if (oDataObjects == null)
          app.alert("This form has no attachments!");
      else {
          var nChildren = oDataObjects.length;
          var oFirstChild = oParent.openDataObject(oDataObjects[0].name);
          var oSubmitData = oFirstChild.xfa.data.nodes.item(0).clone(true);

           for (var iChild = 1; iChild < nChildren; iChild++) {
              var oNextChild = oParent.openDataObject(
                  oDataObjects[iChild].name);

               oSubmitData.nodes.append(oNextChild.xfa.data.nodes.item(0));

               oNextChild.closeDoc();
          }
          oParent.submitForm({
          cURL: "http://www.example.com/cgi-bin/myCGI.pl#FDF",

           cSubmitAs: "XML", 

           oXML: oSubmitData
          });
          oFirstChild.closeDoc();
      }

This example uses ``dataObjects``, ``openDataObject`` and properties and methods of the ``XFA`` object.

.. raw:: html

   <a name="96149"></a>

**Example 6 (Acrobat 7.0)**

Submits current document as a PDF. This script uses cPermID, cInstID and cUsageRights.

::

      this.submitForm({
          cUrl: myURL, 
          cSubmitAs: "PDF",
          cPermID: someDoc.docID[0], 
          cInstID: someDoc.docID[1], 
          cUsageRights: submitFormUsageRights.RMA });

.. raw:: html

   <a name="87285"></a>

syncAnnotScan
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 5.0
     - No
     - No
     - All

Guarantees that all annotations will be scanned by the time this method returns.

To show or process annotations for the entire document, all annotations must have been detected. Normally, a background task runs that examines every page and looks for annotations during idle time, as this scan is a time-consuming task. Much of the annotation behavior works gracefully even when the full list of annotations is not yet acquired by background scanning.

In general, you should call this method if you want the entire list of annotations.

See also `getAnnots <JS_API_AcroJS.html#26254>`__.

Example: Wait for all annotations to be scanned, then get the array of annotations in the document and sort by author.

The second line of code is not executed until ``syncAnnotScan`` returns, which does not occur until the annotation scan of the document is completed.

::

      this.syncAnnotScan();
      annots = this.getAnnots({nSortBy:ANSB_Author});
      // Now, do something with the annotations.

.. raw:: html

   <a name="75273"></a>

timestampSign
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 10.0
     - D
     - Yes
     - All

Adds an invisible timestamp to a document.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oSig``
     - (optional) The signature engine object. If this parameter is not specified, the default (internal) signature engine is used.

   * - ``cDIPath``
     - (optional) The file path for saving the signed file. If this parameter is not specified, the file is saved over itself.

   * - ``bUI``
     - (optional) Set TRUE to enable UI interaction. May be FALSE if a path is supplied. The default is FALSE.



**Returns**

 TRUE if the signing was successful.

Example: 

::

   var myEngine = security.getHandler( "Adobe.PPKLite" );
   // Note that login is not required
   
   this.timestampSign({
       oSig:myEngine,
       cDIPath:"/c/temp/TSsigSign.pdf",
       bUI:false
   });

.. raw:: html

   <a name="45663"></a>

validatePreflightAuditTrail
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - D
     - No
     - Acrobat Pro only

Validates the current embedded audit trail.



**Returns** 

The validity status ofthe current embedded audit trail. Validity values are.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Value
     - Description

   * - ``-1``
     - Not a signature field.

   * - ``0``
     - The signature is blank.

   * - ``1``
     - Unknown status.

   * - ``2``
     - The signature is invalid.

   * - ``3``
     - The signature of the document is valid but the identity of signer could not be verified.

   * - ``4``
     - The signature of the document is valid and the identity of signer is valid.

.. raw:: html

   <a name="69910"></a>

Doc.media
=========

The ``media`` property of each document specifies an object that contains multimedia properties and methods that apply to the document.

.. note::

   The Doc. ``media`` is part of the Acrobat 6.0 (and Later) Compatible Media JavaScript API. Multimedia assets that use this approach rely on the underlying operating system to locate and launch a multimedia player residing on the user's system. Acrobat 9.0 (and Later) natively supports Flash video (FLV) and Flash applications (SWF) which can be embedded in, or streamed to, a PDF document. Native support for Flash enables reliable cross-platform playback. No additional media player or specific codec is necessary.

Acrobat 6.0 (and Later) Compatible Media is superseded by the multimedia of Acrobat 9.0 (and Later), which uses rich media annotations. Developers of PDFs with multimedia assets are, therefore, strongly encouraged to use the rich media annotations of Acrobat 9 (and Later). Refer to the `AnnotRichMedia <JS_API_AcroJS.html#99657>`__ object for JavaScript support for rich media annotations.

Doc.media properties
--------------------

* `canPlay <JS_API_AcroJS.html#40443>`__

.. raw:: html

   <a name="40443"></a>

canPlay
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Object
     - R

Indicates whether multimedia playback is allowed for a document. Playback depends on the user's Trust Manager preferences and other factors. For example, playback is not allowed in authoring mode.

``doc.media.canPlay`` returns an object that contains both a yes/no indication and a reason why playback is not allowed, if that is the case.

If playback is allowed, ``canPlay.yes`` exists to indicate this. (It is an empty object, but it may contain other information in the future.) You can make a simple test like this:

::

      if( doc.media.canPlay.yes )
      {
          // We can play back multimedia for this document
      }

If playback is not allowed, the ``canPlay.no`` object exists instead. As with ``canPlay.yes``, you can simply test for the existence of ``canPlay.no`` or you can look inside it for information about why playback is not allowed. At least one of these properties or other properties that may be added in the future will exist within ``canPlay.no`` :

============= ============================================
Property      Description
============= ============================================
``authoring`` Cannot play when in authoring mode.
``closing``   Cannot play because the document is closing.
``saving``    Cannot play because the document is saving.
``security``  Cannot play because of security settings.
``other``     Cannot play for some other reason.
============= ============================================

In addition, ``canPlay.canShowUI`` indicates whether any alert boxes or other user interface are allowed in response to this particular playback rejection.

Example: Get ``canPlay`` object and analyze the case we can't play the media in the document.

::

      var canPlay = doc.media.canPlay;
      if( canPlay.no )
      {
          // We can't play, why not?
          if( canPlay.no.security )
          {
              // The user's security settings prohibit playback,
              // are we allowed to put up alerts right now?
              if( canPlay.canShowUI )
                  app.alert( "Security prohibits playback" );
              else
                  console.println( "Security prohibits playback" );
          }
          else
          {
              // Can't play for some other reason, handle it here
          }
      }

Doc.media methods
-----------------

* `deleteRendition <JS_API_AcroJS.html#47744>`__
* `getAnnot <JS_API_AcroJS.html#50140>`__
* `getAnnots <JS_API_AcroJS.html#90687>`__
* `getOpenPlayers <JS_API_AcroJS.html#65571>`__
* `getRendition <JS_API_AcroJS.html#95842>`__
* `newPlayer <JS_API_AcroJS.html#59092>`__

.. raw:: html

   <a name="47744"></a>

deleteRendition
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Deletes the named Rendition from the document. The Rendition is no longer accessible with JavaScript. It does nothing if the Rendition is not present.

**Parameters**

========= ===========================================
``cName`` A string that is the name of the Rendition.
========= ===========================================

Example: Delete a particular rendition, and report back if we are successful.

::

      this.media.deleteRendition("myMedia");
      if ( this.media.getRendition("myMedia") == null) 
          console.println( "Rendition successfully deleted" );

.. raw:: html

   <a name="50140"></a>

.. _getannot-1:

getAnnot
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Looks for and returns a ``ScreenAnnot`` object in the document by page number and either name or title, or returns ``null`` if there is no matching screen annotation. If both name and title are specified, both must match.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``args``
     - An object containing the properties to be passed to this method. The properties are described below.
     
This table describes the properties of ``args``.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - ``nPage``
     - The page number (base 0) on which the annotation resides.

   * - ``cAnnotName``
     - (optional) The name of the screen annotation.  -  ``cAnnotName`` is never used in PDF files generated by Acrobat.

   * - ``cAnnotTitle``
     - (optional) The title of the screen annotation.

.. note::

   The parameters for this method must be passed as an object literal and not as an ordered listing of parameters.



**Returns** 

``ScreenAnnot`` object

Example: The Acrobat user interface allows you to specify the title for a screen annotation but not its name, so a typical use of ``getAnnot`` would be:

::

      var annot= myDoc.media.getAnnot

           ({ nPage: 0,cAnnotTitle: "My Annot Title" });

See the example following `getRendition <JS_API_AcroJS.html#95842>`__ for an additional example.

.. raw:: html

   <a name="90687"></a>

.. _getannots-1:

getAnnots
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

The ``doc.media.getAnnots`` method returns an array of all the ``ScreenAnnot`` objects on the specified page of the document, or all the ``ScreenAnnot`` objects on all pages of the document if ``nPage`` is omitted. The array is empty if there are no such ScreenAnnots.

**Parameters**

========= ==========================================================
``nPage`` The page number (base 0) on which the ScreenAnnots reside.
========= ==========================================================



**Returns** 

Array of ``ScreenAnnot`` objects

Example: Get a listing of the ScreenAnnots on page 0, then play a media clip in a screen annotation randomly chosen from the list.

::

      var annots = this.media.getAnnots({ nPage: 0 });
      var rendition = this.media.getRendition("myClip");
      var settings = { windowType: app.media.windowType.docked }
      var l = annots.length
      var i = Math.floor( Math.random() * l ) % l
      var args = { rendition:rendition, annot:annots[i], settings:settings };
      app.media.openPlayer( args );

.. raw:: html

   <a name="65571"></a>

getOpenPlayers
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 7.0
     - No
     - No
     - All

**Returns** an array of ``MediaPlayer`` objects, one for each currently open media player. The players in the array are listed in the order in which they were opened. Using this array, some or all of the open players can be manipulated. For example, you can stop or close all players that the document has opened, without having to keep a list of them yourself.

Each time ``getOpenPlayers`` is called, it returns a new copy of the array, listing the players open at that time. New players that are subsequently opened do not show up in an array already returned. If a player in the array is closed, the player object remains in the array and ``player.isOpen`` becomes ``false``. The ``doc.media.getOpenPlayers`` method can be called again to get a new, up-to-date player array.

Do not write code that iterates directly over ``doc.media.getOpenPlayers`` :

::

      for( var i in doc.media.getOpenPlayers() ) // Wrong!

Instead, get a copy of the player array and iterate over that:

::

      var players = doc.media.getOpenPlayers();
      for( var i in players ) {
      ....
      }

This insures that the loop works correctly even if players are opened or closed during the loop.



**Returns** 

Array of ``MediaPlayer`` objects.

Example: The following two functions take a Doc as a parameter and operate on the running players associated with that Doc.

::

      // Stop all running players.
      function stopAllPlayers( doc ) {
          var players = doc.media.getOpenPlayers();
          for( var i in players ) players[i].stop();
      }
      // Close all running players. Closing a player does not remove it from 
      // the array.
      function closeAllPlayers( doc ) {
          var players = doc.media.getOpenPlayers();
          for( var i in players )
              players[i].close( app.media.closeReason.general );
      }

.. raw:: html

   <a name="95842"></a>

getRendition
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Looks up a Rendition in the document by name and returns it, or returns ``null`` if there is no Rendition with that name.

**Parameters**

========= ===================================================
``cName`` ``cName``, a string, is the name of the Rendition.
========= ===================================================



**Returns** 

``Rendition`` object

Example: The following script is executed from a mouse-up action of a form button. It plays a docked media clip in a screen annotation.

::

      app.media.openPlayer({
          rendition: this.media.getRendition( "myClip" ),
          annot: this.media.getAnnot( {nPage:0,cAnnotTitle:"myScreen"} ),
          settings: { windowType: app.media.windowType.docked }
      });

.. raw:: html

   <a name="59092"></a>

newPlayer
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

This method creates and returns a ``MediaPlayer`` object. The ``args`` parameter must contain a ``settings`` property and optionally can contain an ``events`` property. It can also contain additional user-defined properties. The properties of ``args`` are copied into the new ``MediaPlayer`` object. This is a shallow copy, which means that if any of the copied properties are objects themselves, those objects are shared between ``args`` and the new player.

The ``newPlayer`` method creates a bare-bones player that does not have any of the standard EventListeners required for standard Acrobat media player behavior. Use ``app.media.addStockEvents`` to add the necessary EventListeners.

In most cases, it is better to use ``app.media.createPlayer`` instead of ``doc.media.newPlayer`` to create a media player. The ``createPlayer`` method sets up the standard EventListeners and other player properties automatically.

**Parameters**

======== ========================
``args`` A ``PlayerArgs`` object.
======== ========================



**Returns** 

``MediaPlayer`` object.

Example: See ``Events.`` `dispatch <JS_API_AcroJS.html#27002>`__ for an example.

