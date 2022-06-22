******************************************************
Actions and Destinations
******************************************************

When a user opens a file, clicks on a link, or clicks on a bookmark, several types of information need to be specified to indicate what should happen. Different pdfmark types require one or more of the following:

-   *Actions* specify what type of action should be taken. They are indicated by the ``Action`` key in a pdfmark. See `Actions <pdfmark_Actions.html#50454557_92618>`__. *File specifiers* indicate the target of an action when it is not the current file. See the table `File specifier keys <pdfmark_Actions.html#50454557_44931>`__.
-   *Destinations* specify a particular location in a file, and a zoom factor. See `Destinations <pdfmark_Actions.html#50454557_30628>`__.

Actions
=======

PDF defines several types of actions that can be specified for bookmarks and annotations. The following table outlines the types defined as of PDF 1.3.

Action types

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Action type
     - Description

   * - GoTo
     - Go to a destination in the current document.

   * - GoToR
     - Go to a destination in another document.

   * - Hide
     - Set an annotation's Hidden flag.

   * - ImportData
     - Import field values from a files.

   * - JavaScript
     - Execute a JavaScript™ script.

   * - Launch
     - Launch an application, usually to open a file.

   * - Movie
     - Play a movie.

   * - Named
     - Execute an action predefined by the viewer application.

   * - ResetForm
     - Set fields to their default values.

   * - Sound
     - Play a sound.

   * - SubmitForm
     - Send data to a URL.

   * - Thread
     - Begin reading an article thread.

   * - URI
     - Resolve a uniform resource identifier.


When using pdfmark, the type of action for the annotation or bookmark is specified by the ``Action`` key. It takes one of the following values:

-  A predefined name corresponding to one of the first four items in the table `Action types <pdfmark_Actions.html#50454557_74461>`__: ``GoTo`` , ``GoToR`` , ``Launch`` , or ``Article`` (which corresponds to the ``Thread`` type in PDF).
-  A dictionary specifying one of the other types, or a custom action. This dictionary must contain the key–value pairs that are to be placed into the *action dictionary* in the PDF file. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for a detailed description of all the actions and their dictionaries. The syntax for this type of ``Action`` key is as follows:

::

        /Action << / Subtype 
   actiontype
           ...other action dictionary key–value pairs... 
   >>

`Custom link action (URI link for the Acrobat WebLink plug-in) <pdfmark_Basic.html#50454556_25340>`__ shows a note pdfmark containing a ``URI`` action.

If the ``Action`` key is not present, the action is assumed to be the equivalent of ``GoTo`` ; that is, jumping to a location in the current document. Actions other than ``GoTo`` may require a file-specifier key to specify an external document (see the table `File specifier keys <pdfmark_Actions.html#50454557_44931>`__).

GoTo actions
------------

``GoTo`` actions jump to a specified page and zoom factor within the current document. They require the ``Dest`` key, or both the ``Page`` and ``View`` keys. See `Destinations <pdfmark_Actions.html#50454557_30628>`__ for more information on these keys.

GoToR actions
-------------

``GoToR`` actions specify a location in another PDF file. They require the ``Dest`` key, or both the ``Page`` and ``View`` keys, plus one or more file-specifier keys (see the table `File specifier keys <pdfmark_Actions.html#50454557_44931>`__).

See `Bookmarks (OUT) <pdfmark_Basic.html#50454556_44268>`__ for an example of a ``GoToR`` action.

The following table specifies keys that can be used with the ``GoToR`` , ``Launch`` , and ``Article`` actions to specify the target file.

File specifier keys

.. _section-1:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Semantics

   * - DOSFile
     - string
     - Optional. The MS-DOS path (in the PDF path format), of the PDF file. Acrobat viewer applications in Windows and DOS ignore the ``File`` key if the ``DOSFile`` key is present.

   * - File
     - string
     - Required. The device-independent path of the PDF file.

   * - ID
     - array
     - Optional. An array of two strings specifying the PDF file ID. This key can be used to ensure the correct version of the destination file is found. If present, the destination PDF file's ID is compared with ``ID`` , and the user is warned if they are different.

   * - MacFile
     - string
     - Optional. The Mac OS file name (in the PDF path format) of the PDF file. Acrobat viewer applications in Mac OS ignore the ``File`` key if the ``MacFile`` key is present.

   * - UnixFile
     - string
     - Optional. The UNIX file name (in the PDF path format) of the PDF file. Acrobat viewer applications in UNIX ignore the ``File`` key if the ``UnixFile`` key is present.

   * - URI
     - string
     - Optional. The uniform resource identifier (URI) of a file on the Internet. It can be either an HTML or PDF file. Acrobat viewer applications ignore the ``File`` key if the ``URI`` key is present.
       
       Named destinations may be appended to URLs, following a "#" character, as in ``http://www.example.com/example.pdf#name`` . The Acrobat viewer displays the part of the PDF file specified by the named destination.
       
       -  This key is used with the ``Launch`` action. URIs can also be specified with an action dictionary where the value of the ``Subtype`` key is ``/URI`` (see `Custom link action (URI link for the Acrobat WebLink plug-in) <pdfmark_Basic.html#50454556_25340>`__.)


The `PDF Reference <https://www.adobe.com/go/pdfreference>`__ provides more information about the above specifiers.

Launch actions
--------------

``Launch`` actions launch an arbitrary application or document, specified by the ``File`` key. If an application is specified, some platforms allow passing options or filenames to the application that is launched. See `Link that launches another file <pdfmark_Basic.html#50454556_25749>`__ for an example of a launch action.

See the table `File specifier keys <pdfmark_Actions.html#50454557_44931>`__ for the file specifier keys that can be used by Launch actions. In addition, the following optional keys can be used.

Optional keys for Launch actions

.. _section-2:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Semantics

   * - Dir
     - string
     - Optional. The default directory of a Windows application.

   * - Op
     - string
     - Optional. The operation to perform; used only under Windows. The string must be open (the default) or print. If ``WinFile`` specifies an application, not a document, this key is ignored and the application is launched.

   * - Params
     - string
     - Optional. The parameters passed to a Windows application started with the Launch action. If the ``WinFile`` key specifies an application, ``Params`` must not be present.

   * - WinFile
     - string
     - Optional. The MS-DOS file name of the document or application to launch.


.. note::

   Acrobat viewer applications running under Windows use the Windows function ``ShellExecute`` to launch an application specified using the Launch action. The keys ``WinFile`` , ``Dir`` , ``Op`` , and ``Params`` correspond to the parameters of ``ShellExecute`` .

Article actions
---------------

Article actions set the Acrobat viewer to article-reading mode, at the beginning of a specified article in the current document or another PDF document.

They require the ``Dest`` key, which takes one of the following values:

-  An integer that specifies the article's index in the document (the first article in a document has an index of 0).
-  A string that matches the article's Title.

In addition, article actions require one or more file-specifier keys if the article is in a different PDF file (see the table `File specifier keys <pdfmark_Actions.html#50454557_44931>`__).

See `Article action <pdfmark_Basic.html#50454556_47055>`__ for an example of an article action.

Destinations
============

There are two ways of specifying a location within a document that is the target of an action:

-   *View destinations* explicitly specify a page, a location on the page, and a fit type. View destinations require a ``Page`` key and a ``View`` key. Typically they are used along with an ``Action`` key; if there is no ``Action`` key, the action is the equivalent of ``GoTo`` , meaning to jump to the destination in the current file. See `View destinations <pdfmark_Actions.html#50454557_52160>`__.
-   *Named destinations* specify the target as a name which has been defined. Named destinations are specified by the ``Dest`` key. They specify a destination in the same file or another file, by name. See `Defining named destinations <pdfmark_Actions.html#50454557_47823>`__.

View destinations
-----------------

View destinations require the following two keys.

Keys for view destinations

.. _section-3:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Semantics

   * - Page
     - integer or name
     - The destination page. An integer value represents the sequence number of the page within the PDF file. The first page in a file is page 1, not page 0.
       
       The name objects ``Next`` and ``Prev`` are valid destination page values for links and articles.
       
       If the destination of a link is on the same page, the ``Page`` key should be omitted. If the value of the ``Page`` key is 0, the bookmark or link has a ``NULL`` destination.

   * - View
     - array
     - Specifies a link or bookmark's destination on a page, and its fit type. The first array entry is one of the fit type names shown in the table `Fit type names and parameters <pdfmark_Actions.html#50454557_47544>`__. The remaining entries, if any, specify the location as either a rectangle, a point, or an x– or y–coordinate, depending on the fit type.


All distances and coordinates specified in the following table are in default user space.

Fit type names and parameters

.. _section-4:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Name
     - Parameters
     - Description

   * - Fit
     - None
     - Fit the page to the window. This is a shortcut for specifying ``FitR`` with the rectangle being the crop box for the page.

   * - FitB
     - None
     - Fit the bounding box of the page contents to the window.

   * - FitBH
     - top
     - Fit the width of the bounding box of the page contents to the window. top specifies the distance from the page origin to the top of the window.

   * - FitBV
     - left
     - Fit the height of the bounding box of the page contents to the window. left specifies the distance from the page origin to the left edge of the window.

   * - FitH
     - top
     - Fit the width of the page to the window. *top* specifies the distance from the page origin to the top of the window. This is a shortcut for specifying ``FitR`` with the rectangle having the width of the page, and both y-coordinates equal to top.

   * - FitR
     - x1 y1 x2 y2
     - Fit the rectangle specified by the parameters to the window.

   * - FitV
     - left
     - Fit the height of the page to the window. *left* specifies the distance in from the page origin to the left edge of the window. This is a shortcut for specifying ``FitR`` with the rectangle having the height of the page, and both x-coordinates equal to left.

   * - XYZ
     - left top zoom
     - left and top specify the distance from the origin of the page to the top-left corner of the window. zoom specifies the zoom factor, with 1 being 100% magnification. If left, top or zoom is ``NULL`` , the current value of that parameter is retained. For example, specifying a view destination of
       
       
       
           /View [/XYZ NULL NULL NULL]
       
       goes to the specified page and retains the same horizontal and vertical offset and zoom as the current page. A zoom of 0 has the same meaning as a zoom of ``NULL`` .


The zoom factors for the horizontal and vertical directions are identical; there are not separate zoom factors for the two directions. As a result, more of the page may be shown than specified by the destination. For example, when using ``FitR`` , portions of the page outside the destination rectangle appear in the window unless the window happens to have the same aspect ratio (height-to-width ratio) as the destination rectangle.

A common destination is "upper left corner of the specified page, with a zoom factor of 1." This can be obtained using the ``XYZ`` destination form, with a left of -4 and a top equal to the top of the ``CropBox`` (or the page size if no ``CropBox`` was specified) plus 4. The offset of 4 is used to slightly move the page corner from the corner of the window, to provide a visual cue that the corner of the page is being shown.

The following sections have examples related to destinations: `Links <pdfmark_Basic.html#50454556_13483>`__, `Bookmarks (OUT) <pdfmark_Basic.html#50454556_44268>`__, `File Open action <pdfmark_Basic.html#50454556_35664>`__, and `Defining named destinations <pdfmark_Actions.html#50454557_47823>`__.

Defining named destinations
---------------------------

Locations in PDF files can be specified by name instead of by page number and view. These names can then be used as destinations of bookmarks or links. Using named destinations is particularly advantageous for cross-document links, because if the document containing a link's destination is revised, the link still works, regardless of whether its location in the file has changed.

A named destination is specified by using the pdfmark operator with the name ``DEST`` . The syntax for a named destination pdfmark is as follows:

::

    [ /Dest 
   name

           /Page 
   pagenum

           /View 
   destination

           /DEST pdfmark

Named destination attributes

.. _section-5:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Description

   * - Dest
     - name
     - Required. The destination's name.

   * - Page
     - integer
     - Optional. The sequence number of the destination page. If present, the named destination pdfmark can be placed anywhere in the PostScript language file. If omitted, the pdfmark must occur within the PostScript language description for the destination page.

   * - View
     - array
     - Optional. The view to display on the destination page. If omitted, defaults to a null destination (lower left corner of the page at a zoom of 100%). See `Destinations <pdfmark_Actions.html#50454557_30628>`__ for information on specifying a view destination.


In addition to the keys listed in the table `Named destination attributes <pdfmark_Actions.html#50454557_52162>`__, named destinations can also specify arbitrary key–value pairs.

Named destinations can be appended to URLs, following a "#" character, as in ``http://www.example.com/example.pdf#nameddest=name`` . The Acrobat viewer displays the part of the PDF file specified in the named destination.

#. Definition of named destination

::

   [ /Dest /MyNamedDest
       /Page 1
       /View [/FitH 5]
       /DEST pdfmark

#. Link to a named destination

::

   [ /Rect [70 650 210 675]
       /Border [16 16 1 [3 10]]
       /Color [0 .7 1]
       /Dest /MyNamedDest
       /Subtype /Link
       /ANN pdfmark

Referencing named destinations
------------------------------

Named destinations that have been defined with the ``DEST`` pdfmark can be used as the target of a bookmark or link, or by the optional open action in a document's Catalog dictionary. They are specified using the ``Dest`` key.

See `Defining named destinations <pdfmark_Actions.html#50454557_47823>`__ for examples of named destinations.

.. note::

   When used with the ``Article`` action, ``Dest`` has a different syntax. See `Article actions <pdfmark_Actions.html#50454557_38957>`__.
