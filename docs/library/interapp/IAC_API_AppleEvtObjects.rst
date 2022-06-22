******************************************************
Apple Event Objects and Apple Events
******************************************************

This chapter describes the supported Apple event objects, with descriptions of each object's elements and properties, and the supported Apple events.

Objects
=======

Acrobat presents the following objects to the Apple event interface:

-  ``annotation``
-  ``application``
-  ``bookmark``
-  ``conversion``
-  ``document``
-  ``Link Annotation``
-  ``menu``
-  ``menu item``
-  ``page``
-  ``PDF Window``
-  ``Text Annotation``

.. raw:: html

   <a name="50532410_25583"></a>

annotation
----------

An annotation on a page in a PDF file that corresponds to ``PDAnnot``, an internal Acrobat class. This object was formerly known as ``PDAnnot``.

Acrobat also has two built-in annotation objects. For more information, see `Link Annotation <IAC_API_AppleEvtObjects.html#50532410_90412>`__ and `Text Annotation <IAC_API_AppleEvtObjects.html#50532410_22569>`__.

**Plural form**

Annotations

**Properties**

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - bounds
     - a list of small real
     - The boundary rectangle for the annotation in PDF space (left, top, right, bottom).

   * - class
     - type class [r/o]
     - The class.

   * - color
     - 'RGB'
     - The color of the border around the annotation.

   * - contents
     - international text
     - Text annotations only. The textual contents of the note.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - destination page number
     - integer
     - Link annotations only. The page number to appear in the PDF window when the annotation link is activated.

   * - destination rectangle
     - a list of small real
     - Link annotations only. The boundary rectangle (specified in user space) for the view of the destination. Coordinates are specified in the following order: left, top, right, bottom.

   * - fit type
     - constant
     - Link annotations only. Determines how the destination rectangle is fitted to the window when the link is activated. Values are: ``Left Top Zoom``, ``Fit Page``, ``Fit Width``, ``Fit Height``, ``Fit Rect``, ``Fit BBox``, ``Fit BB Width``, ``Fit BB Height`` 
       
       These are described in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

   * - index
     - integer [r/o]
     - The annotation's index within the `page <IAC_API_AppleEvtObjects.html#50532410_24065>`__ object.

   * - modification date
     - date
     - The date and time the annotation was last modified.

   * - name
     - string
     - Text annotations only. The annotation's label.

   * - open state
     - Boolean
     - Text annotations only. Whether the annotation is open.

   * - subtype
     - international text [r/o]
     - The subtype of the annotation.

   * - zoom factor
     - small real
     - Link annotations only. If ``fit type`` is ``Left Top Zoom``, this specifies the zoom factor; otherwise it is ignored. Setting this property automatically sets ``fit type`` to ``Left Top Zoom``. 

**Related methods**

* `delete <IAC_API_AppleEvtObjects.html#50532410_41487>`__

* `perform <IAC_API_AppleEvtObjects.html#50532410_27016>`__

.. raw:: html

   <a name="50532410_98408"></a>

application
-----------

The Acrobat or Acrobat Reader application itself.

**Elements**

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Element
     - Accessed by

   * - `document <IAC_API_AppleEvtObjects.html#50532410_48845>`__
     - name, numeric index

   * - `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__
     - name, numeric index

   * - `menu <IAC_API_AppleEvtObjects.html#50532410_45214>`__
     - name, numeric index

   * - `menu item <IAC_API_AppleEvtObjects.html#50532410_78053>`__
     - name

**Properties**

.. _section-2:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - active doc
     - reference
     - The active document.

   * - active tool
     - international text
     - The type of the currently active tool. See the *Acrobat and PDF Library API Reference* for a list of tool names.

   * - anti_alias text
     - Boolean
     - Determines whether to anti-alias text and monochrome images.

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - case sensitivity
     - Boolean
     - Determines whether searches are case- sensitive.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - default zoom factor
     - small real
     - The default zoom factor, in percent, used for displaying new documents. For example, a value of 100 corresponds to a zoom factor of 1.0 (100%).

   * - default zoom type
     - constant
     - The default zoom type when opening a new document. Valid values are ``no vary``, ``fit page``, ``fit width``, ``fit height``, and ``fit visible width``. 

   * - download entire file
     - Boolean
     - Determines whether to download the entire file.

   * - frontmost
     - Boolean
     - Determines whether Acrobat is the frontmost application. Value can be set to true only. 

   * - fullscreen click advances
     - Boolean
     - Determines whether mouse click advances in fullscreen mode.

   * - fullscreen cursor
     - Boolean
     - Determines whether to hide the cursor in fullscreen mode.

   * - fullscreen escape
     - Boolean
     - Determines whether the Esc key can be used to exit fullscreen mode.

   * - fullscreen loop
     - Boolean [r/o]
     - Determines whether the document's pages are displayed in a loop while in fullscreen mode.

   * - fullscreen timer delay
     - integer
     - The number of seconds to advance to the next page in fullscreen mode.

   * - fullscreen transition
     - international text [r/o]
     - Default fullscreen transition.

   * - highlight color
     - 'RGB '
     - Color used to highlight selections.

   * - maximum documents
     - integer [r/o]
     - Maximum number of open documents.

   * - name
     - string [r/o]
     - The application's name.

   * - note color
     - 'RGB '
     - A list of three values between 0 and 65535 representing the color of the border around text annotations. For example, the following sets the note color to deep blue:``set the note color to {0, 0, 32768}``. 

   * - note font name
     - international text
     - Deprecated.

   * - note font size
     - integer
     - Deprecated.

   * - open in place
     - Boolean
     - Determines whether to open cross-document links in the same window.

   * - page layout
     - international text
     - Default page layout. Values are: ``Single Page``, ``Continuous``, ``Facing``, and ``Continuous - Facing``. 

   * - page units
     - international text
     - Default page display units: ``Points``, ``Inches`` or ``Millimeters.`` 

   * - PS level
     - integer
     - Deprecated. Set the PostScript level when using `save <IAC_API_AppleEvtObjects.html#50532410_32794>`__ or `print pages <IAC_API_AppleEvtObjects.html#50532410_40027>`__ commands.

   * - save as linearize
     - Boolean
     - Determines whether to save the document as optimized for the web.

   * - show splash at startup
     - Boolean
     - Determines whether the splash screen is shown at startup.

   * - skip warnings
     - Boolean
     - Determines whether to skip warning dialog boxes during program execution.

   * - shrink to fit
     - Boolean
     - Deprecated.

   * - text note label
     - international text
     - The text that will appear in the title bar of all newly created text notes.

   * - toolbar visibility
     - Boolean
     - Determines whether the toolbar is visible.

   * - UI language
     - international text [r/o]
     - A three-character language code identifying which language is used in the Acrobat user interface. Example: ``ENU`` represents English. 

   * - use fullscreen timer
     - Boolean
     - Determines whether to use a timer to advance pages in fullscreen mode

   * - version
     - string [r/o]
     - The version number of the application.

   * - whole word searching
     - Boolean
     - Determines whether searches are applied to whole words only.

.. _related-methods-1:

**Related methods**

* `close all docs <IAC_API_AppleEvtObjects.html#50532410_31136>`__

* `count <IAC_API_AppleEvtObjects.html#50532410_16155>`__

* `make <IAC_API_AppleEvtObjects.html#50532410_24328>`__

* `open <IAC_API_AppleEvtObjects.html#50532410_41641>`__

* `print <IAC_API_AppleEvtObjects.html#50532410_29870>`__

* `quit <IAC_API_AppleEvtObjects.html#50532410_37698>`__

* `run <IAC_API_AppleEvtObjects.html#50532410_40886>`__

AVPageView
----------

.. note::

   Deprecated. Use `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ instead.

.. raw:: html

   <a name="50532410_75140"></a>

bookmark
--------

A bookmark on a page in a PDF file. Corresponds to Acrobat's ``PDBookmark`` object.

.. note::

   This object was formerly known as ``PDBookmark``.

.. _plural-form-1:

**Plural form**

Bookmarks

**Properties**

.. _section-3:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - destination page number
     - integer
     - The page number to which the `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ goes when the bookmark's action is performed.

   * - destination rectangle
     - list of small real
     - Boundary rectangle (specified in user space) for the view of the destination when the bookmark's action is performed. Coordinates are specified in the following order: (left, top, right, bottom).
       
       -  Set this only after setting ``fit type``. 

   * - fit type
     - constant
     - Controls how the destination rectangle is fitted to the window when the bookmark's action is performed. Possible values:
       
       ``Left Top Zoom``: Sets a specified zoom and a specified location on the page.
       
       ``Fit Page``: Sets the zoom factor so that the entire page fits into the window.
       
       ``Fit Width``: Sets the zoom factor so that the width of the page fits into the window.
       
       ``Fit Height``: Sets the zoom factor so that the height of the page fits into the window.
       
       ``Fit Rect``: Sets the zoom factor so that the specified rectangle fits into the window.
       
       ``Fit BBox``: Sets the zoom so that the rectangle enclosing all marks on the page (known as the bounding box) fits into the window.
       
       ``Fit BB Width``: Sets the zoom factor so that the width of the bounding box fits into the window.
       
       ``Fit BB Height``: Sets the zoom factor so that the height of the bounding box fits into the window.

   * - index
     - integer [r/o]
     - The bookmark's index within the `document <IAC_API_AppleEvtObjects.html#50532410_48845>`__ .

   * - name
     - international text
     - The bookmark's title.

   * - zoom factor
     - small real
     - The zoom factor used when ``fit type`` is ``Left Top Zoom`` ; ignored otherwise. Setting this property automatically sets ``fit type`` to ``Left Top Zoom``. 

.. _related-methods-2:

**Related methods**

* `insert pages <IAC_API_AppleEvtObjects.html#50532410_35783>`__

* `perform <IAC_API_AppleEvtObjects.html#50532410_27016>`__

.. raw:: html

   <a name="50532410_56571"></a>

conversion
----------

A file type converter that exports PDF files into other formats. Conversions correspond to the list of formats specified in the Acrobat Save As menu. A list of formats can be obtained as follows:

::

      get every conversion

**Properties**

.. _section-4:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - index
     - integer [r/o]
     - The index number of the converter.

   * - name
     - international text
     - The conversion's description.

.. _related-methods-3:

**Related methods**

* `save <IAC_API_AppleEvtObjects.html#50532410_32794>`__

.. raw:: html

   <a name="50532410_48845"></a>">

document

Represents a single open document in Acrobat or Acrobat Reader.

.. _elements-1:

**Elements**

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Element
     - Accessed by

   * - `page <IAC_API_AppleEvtObjects.html#50532410_24065>`__
     - Numeric index. The first page in a document is page 1.

   * - `bookmark <IAC_API_AppleEvtObjects.html#50532410_75140>`__
     - Name or numeric index.

   * - `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__
     - An index of 1 or with the ``some`` keyword in AppleScript. No document has more than one ``PDF Window``. 

.. _plural-form-2:

**Plural form**

documents

**Properties**

.. _section-6:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - bounds
     - bounding rectangle [r/o]
     - The boundary rectangle for the document's window, in screen coordinates (left, top, right, bottom).

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - file alias
     - alias [r/o]
     - An alias for the file to which the document will be saved if no other name is specified; this is usually the same path from which the document was read.

   * - modified
     - Boolean [r/o]
     - Determines whether the document has been modified and should be saved.

   * - name
     - international text [r/o]
     - The document's name as it appears in the window's titlebar.

   * - view mode
     - constant
     - The viewing mode of the document. Possible values: ``just pages``, ``pages and thumbs``, or ``pages and bookmarks``. 

.. _related-methods-4:

**Related methods**

* `bring to front <IAC_API_AppleEvtObjects.html#50532410_19936>`__

* `clear selection <IAC_API_AppleEvtObjects.html#50532410_33043>`__

* `close <IAC_API_AppleEvtObjects.html#50532410_39856>`__

* `count <IAC_API_AppleEvtObjects.html#50532410_16155>`__

* `create thumbs <IAC_API_AppleEvtObjects.html#50532410_15865>`__

* `delete <IAC_API_AppleEvtObjects.html#50532410_41487>`__

* `delete pages <IAC_API_AppleEvtObjects.html#50532410_15460>`__

* `delete thumbs <IAC_API_AppleEvtObjects.html#50532410_29225>`__

* `find next note <IAC_API_AppleEvtObjects.html#50532410_15335>`__

* `find text <IAC_API_AppleEvtObjects.html#50532410_15620>`__

* `get info <IAC_API_AppleEvtObjects.html#50532410_19217>`__

* `insert pages <IAC_API_AppleEvtObjects.html#50532410_35783>`__

* `maximize <IAC_API_AppleEvtObjects.html#50532410_26208>`__

* `print pages <IAC_API_AppleEvtObjects.html#50532410_40027>`__

* `replace pages <IAC_API_AppleEvtObjects.html#50532410_27808>`__

* `save <IAC_API_AppleEvtObjects.html#50532410_32794>`__

* `set info <IAC_API_AppleEvtObjects.html#50532410_18444>`__

.. raw:: html

   <a name="50532410_79350"></a>

EPS Conversion
--------------

A file type converter that exports PDF files into EPS format.

**Properties**

Inherits from `PostScript Conversion <IAC_API_AppleEvtObjects.html#50532410_17521>`__ .

.. _related-methods-5:

**Related methods**

* `save <IAC_API_AppleEvtObjects.html#50532410_32794>`__

.. raw:: html

   <a name="50532410_90412"></a>

Link Annotation
---------------

A link annotation on a page in a PDF file. Can only be used as the target of a `make <IAC_API_AppleEvtObjects.html#50532410_24328>`__ event. All other access is via the `annotation <IAC_API_AppleEvtObjects.html#50532410_25583>`__ class.

.. note::

   This object was formerly known as `PDLinkAnnot <IAC_API_AppleEvtObjects.html#50532410_21206>`__ .

**Properties**

Inherits from `annotation <IAC_API_AppleEvtObjects.html#50532410_25583>`__ .

.. _related-methods-6:

**Related methods**

* `delete <IAC_API_AppleEvtObjects.html#50532410_41487>`__

* `perform <IAC_API_AppleEvtObjects.html#50532410_27016>`__

.. raw:: html

   <a name="50532410_45214"></a>

menu
----

A menu in the Acrobat or Acrobat Reader menu bar.

.. _elements-2:

**Elements**

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Element
     - Accessed by

   * - `menu item <IAC_API_AppleEvtObjects.html#50532410_78053>`__
     - name, numeric index.

**Properties**

.. _section-8:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - name
     - international text [r/o]
     - The menu's name (a language-independent name that uniquely identifies the menu). See the *Acrobat and PDF Library API Reference* for a list of menu names.

   * - title
     - string [r/o]
     - The menu's title as it would appear in the user interface.

.. _related-methods-7:

**Related methods**

* `execute <IAC_API_AppleEvtObjects.html#50532410_21312>`__

.. raw:: html

   <a name="50532410_78053"></a>

menu item
---------

A menu item contained within a menu in Acrobat or Acrobat Reader.

**Properties**

.. _section-9:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - enabled
     - Boolean [r/o]
     - Determines whether the menu item is enabled.

   * - has submenu
     - Boolean [r/o]
     - Determines whether the menu item has a hierarchical sub-menu.

   * - marked
     - Boolean [r/o]
     - Determines whether the menu item is checked.

   * - name
     - international text [r/o]
     - The menu item's language-independent name. See the *Acrobat and PDF Library API Reference* for a list of menu item names.

   * - title
     - string [r/o]
     - The menu's title as it would appear in the user interface.

.. _related-methods-8:

**Related methods**

* `execute <IAC_API_AppleEvtObjects.html#50532410_21312>`__

.. raw:: html

   <a name="50532410_24065"></a>">

page

A single page in the PDF representation of a document. Corresponds to Acrobat's internal ``PDPage`` object.

.. note::

   This object was formerly known as ``PDPage``.

.. _elements-3:

**Elements**

.. _section-10:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Element
     - Accessed by

   * - annotation
     - numeric index.

.. _plural-form-3:

**Plural form**

Pages

**Properties**

.. _section-11:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - bounds
     - list of small real
     - The boundary rectangle for the page in user space (left, top, right, bottom).

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - page number
     - integer [r/o]
     - The page's number. The first page in a document is page 1.

   * - rotation
     - integer
     - The rotation angle of the page in degrees (0, 90, 180, or 270).

.. _related-methods-9:

**Related methods**

* `delete pages <IAC_API_AppleEvtObjects.html#50532410_15460>`__

* `insert pages <IAC_API_AppleEvtObjects.html#50532410_35783>`__

* `replace pages <IAC_API_AppleEvtObjects.html#50532410_27808>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `move <IAC_API_AppleEvtObjects.html#50532410_34612>`__

PDAnnot
-------

.. note::

   Deprecated. Use `annotation <IAC_API_AppleEvtObjects.html#50532410_25583>`__ instead.

PDBookMark
----------

.. note::

   Deprecated. Use `bookmark <IAC_API_AppleEvtObjects.html#50532410_75140>`__ instead.

.. raw:: html

   <a name="50532410_21206"></a>

PDLinkAnnot
-----------

.. note::

   Deprecated. Use `Link Annotation <IAC_API_AppleEvtObjects.html#50532410_90412>`__ instead.

PDPage
------

.. note::

   Deprecated. Use `page <IAC_API_AppleEvtObjects.html#50532410_51939>`__ instead.

PDTextAnnot
-----------

.. note::

   Deprecated. Use `Text Annotation <IAC_API_AppleEvtObjects.html#50532410_22569>`__ instead.

.. raw:: html

   <a name="50532410_29037"></a>

PDF Window
----------

The area of the Acrobat or Acrobat Reader window that displays the contents of a page within the document. Corresponds to the Acrobat internal ``AvPageView`` object. A document that is not visible does not have a ``PDF Window``.

.. note::

   This object was formerly known as ``AVPageView``.

.. _elements-4:

**Elements**

.. _section-12:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Element
     - Accessed by

   * - `page <IAC_API_AppleEvtObjects.html#50532410_24065>`__
     - numeric index. The first page in a document is page 1.

**Properties**

.. _section-13:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - best type
     - type class [r/o]
     - The best descriptor type.

   * - bounds
     - bounding rectangle
     - The boundary rectangle for the window.

   * - class
     - type class [r/o]
     - The class.

   * - default type
     - type class [r/o]
     - The default descriptor type.

   * - document
     - document [r/o]
     - The document that owns this window.

   * - index
     - integer
     - The number of the window.

   * - name
     - international text [r/o]
     - The document's name as shown in the window's titlebar.

   * - page number
     - integer
     - The number of the currently displayed page.

   * - position
     - point [r/o]
     - The upper left coordinates of the window.

   * - visible
     - Boolean [r/o]
     - Whether the window is visible.

   * - zoomed
     - Boolean
     - Whether the window is zoomed.

   * - zoom factor
     - small real
     - The current zoom factor specified as a percentage. For example, a value of 100 corresponds to a zoom factor of 1.0 (100%).

   * - zoom type
     - constant
     - The zooming and content fitting algorithm currently employed. Possible values: ``no vary``, ``fit page``, ``fit width``, ``fit height``, and ``fit visible width``. 

.. _related-methods-10:

**Related methods**

* `go backward <IAC_API_AppleEvtObjects.html#50532410_33904>`__

* `go forward <IAC_API_AppleEvtObjects.html#50532410_30533>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `goto next <IAC_API_AppleEvtObjects.html#50532410_24656>`__

* `goto previous <IAC_API_AppleEvtObjects.html#50532410_21200>`__

* `read page down <IAC_API_AppleEvtObjects.html#50532410_32063>`__

* `read page up <IAC_API_AppleEvtObjects.html#50532410_37225>`__

* `scroll <IAC_API_AppleEvtObjects.html#50532410_21493>`__

* `select text <IAC_API_AppleEvtObjects.html#50532410_27478>`__

* `zoom <IAC_API_AppleEvtObjects.html#50532410_35096>`__

.. raw:: html

   <a name="50532410_17521"></a>

PostScript Conversion
---------------------

A file type converter that exports PDF files into PostScript format.

**Properties**

Inherits other properties from `conversion <IAC_API_AppleEvtObjects.html#50532410_56571>`__ .

.. _section-14:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Class
     - Description

   * - annotations
     - Boolean [r/o]
     - Determines whether to include annotations.

   * - binary
     - Boolean [r/o]
     - Determines whether the output file should be in binary or ASCII text format.

   * - embedded fonts
     - Boolean [r/o]
     - Determines whether to include fonts.

   * - halftones
     - Boolean [r/o]
     - Determines whether to use halftone screens.

   * - images
     - Boolean [r/o]
     - Determines whether to include RGB and LAB images.

   * - postScript level
     - integer [r/o]
     - The PostScript Language level. Only levels 2 and 3 are supported.

   * - preview
     - Boolean [r/o]
     - Determines whether to include preview in output.

   * - TrueType
     - Boolean [r/o]
     - Determines whether to convert TrueType fonts to Type 1.

.. _related-methods-11:

**Related methods**

* `save <IAC_API_AppleEvtObjects.html#50532410_32794>`__

.. raw:: html

   <a name="50532410_22569"></a>

Text Annotation
---------------

A PDF text annotation (note) on a page in a PDF file. Can only be used as the target of a `make <IAC_API_AppleEvtObjects.html#50532410_24328>`__ event. All other access is via the `annotation <IAC_API_AppleEvtObjects.html#50532410_25583>`__ class.

.. note::

   This object was formerly known as ``TextAnnot``.

**Properties**

Inherits from `annotation <IAC_API_AppleEvtObjects.html#50532410_25583>`__ .

.. _related-methods-12:

**Related methods**

* `find next note <IAC_API_AppleEvtObjects.html#50532410_15335>`__

* `perform <IAC_API_AppleEvtObjects.html#50532410_27016>`__

* `replace pages <IAC_API_AppleEvtObjects.html#50532410_27808>`__

Required suite events
=====================

The following events are sent by the Finder to all applications:

-  ``open``
-  ``print``
-  ``quit``
-  ``run``

.. note::

   Most of these events have counterparts in the Core suite that have greater functionality. The Required suite is not listed in the AppleScript dictionary, even though it is implemented.

Acrobat Reader also supports the Required suite events, but no others.

.. raw:: html

   <a name="50532410_99533"></a>

open
----

Opens a file.

**Syntax**

::

   open [reference]

**Parameters**

.. _section-15:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - open
     - The file or files to open.

.. raw:: html

   <a name="50532410_29870"></a>

print
-----

Prints one or more files.

**Syntax**

::

   print
    [reference]

.. _parameters-1:

**Parameters**

.. _section-16:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - print
     - The file or files to print.

.. raw:: html

   <a name="50532410_37698"></a>

quit
----

Terminates an application. For information on a variant event in the Core suite that accepts options, see `quit <IAC_API_AppleEvtObjects.html#50532410_14269>`__.

**Syntax**

::

   quit
    

.. raw:: html

   <a name="50532410_40886"></a>

run
---

Launches the application and invokes its standard startup procedures.

.. _syntax-1:

**Syntax**

::

   run
    

Core suite events
=================

Acrobat supports the following subset of the Core suite of Apple events:

-  ``close``
-  ``count``
-  ``delete``
-  ``exists``
-  ``get``
-  ``make``
-  ``move``
-  ``open``
-  ``quit``
-  ``save``
-  ``set``

.. raw:: html

   <a name="50532410_39856"></a>

close
-----

Closes a document.

.. _syntax-2:

**Syntax**

::

   close
    [reference] saving
    [constant] linearize
    [boolean]

.. _parameters-2:

**Parameters**

.. _section-17:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - close
     - The document to close.

   * - saving
     - Determines whether to save a document that has been modified before quitting. Possible values:  ``yes``: Save the document.  ``no``: Do not save the document.  ``ask``: Ask the user whether to save the document.  The default value is ``ask``. 

   * - linearize
     - Determines whether the document should be optimized for the web when saving before closing.

**Related events**

* `open <IAC_API_AppleEvtObjects.html#50532410_41641>`__

.. raw:: html

   <a name="50532410_16155"></a>

count
-----

Counts the number of instances of a particular class.

.. _syntax-3:

**Syntax**

::

   count
    [type class] of
    [reference]

.. _parameters-3:

**Parameters**

.. _section-18:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - count
     - The class whose instances are to be counted.

   * - each
     - The class whose instances are to be counted. This keyword is optional.

.. note::

   There is an alternate form using the keyword ``each`` in which the parameters are reversed:

::

          count
    [reference] each
    [type class] 

**Returns**

An integer specifying the number of elements.

**AppleScript example**

::

   count annotation of document "dev_acro.pdf"
   count menu item of menu "View"
   count document 1 each bookmark

.. raw:: html

   <a name="50532410_41487"></a>

delete
------

Deletes one or more objects.

.. _syntax-4:

**Syntax**

::

   delete
    [reference]

.. _parameters-4:

**Parameters**

.. _section-19:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - delete
     - The object to be deleted.

.. _related-events-1:

**Related events**

* `make <IAC_API_AppleEvtObjects.html#50532410_24328>`__

* `exists <IAC_API_AppleEvtObjects.html#50532410_24542>`__

.. _applescript-example-1:

**AppleScript example**

::

   delete first bookmark of document "test.pdf"

.. raw:: html

   <a name="50532410_24542"></a>

exists
------

Tests whether a specified object exists.

.. _syntax-5:

**Syntax**

::

   [reference] exists
    
   exists
    [reference] 

.. _parameters-5:

**Parameters**

.. _section-20:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - exists
     - Object whose existence is checked.

**Returns**

``true`` if the object exists, ``false`` otherwise.

.. _applescript-example-2:

**AppleScript example**

::

   exists second document

   second document exists

.. raw:: html

   <a name="50532410_32661"></a>

get
---

Retrieves the value of an object or property.

.. _syntax-6:

**Syntax**

::

   get [reference] as [class] 

.. note::

   The keyword ``get`` is optional.

.. _parameters-6:

**Parameters**

.. _section-21:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - get
     - The object or property whose value is returned.

   * - as
     - The form in which the data is returned.

**Returns**

The value of the specified property or object. If the specified object does not exist, no result is returned.

.. _related-events-2:

**Related events**

* `set <IAC_API_AppleEvtObjects.html#50532410_41279>`__

.. _applescript-example-3:

**AppleScript example**

::

   get the name of last bookmark
   get the index of last bookmark as string

.. raw:: html

   <a name="50532410_24328"></a>

make
----

Creates a new object.

.. _syntax-7:

**Syntax**

::

   make
    new [
   type class] at
    [location reference] with data
    [anything] with properties
    [record]

.. _parameters-7:

**Parameters**

.. _section-22:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - make [new]
     - The class of the new object.

   * - at
     - The location at which to insert the new object.

   * - with data
     - The initial data for the new object.

   * - with properties
     - The initial values for the properties of the new object.

**Returns**

A reference to the newly created object.

.. _related-events-3:

**Related events**

* `delete <IAC_API_AppleEvtObjects.html#50532410_41487>`__

* `exists <IAC_API_AppleEvtObjects.html#50532410_24542>`__

.. _applescript-example-4:

**AppleScript example**

::

   set myAnnotation to make TextAnnotation at beginning
   set name of myAnnotation to "Werner Heisenberg"
   set contents of myAnnotation to "Might have been here"

.. raw:: html

   <a name="50532410_34612"></a>

move
----

Moves a `page <IAC_API_AppleEvtObjects.html#50532410_24065>`__ object.

.. _syntax-8:

**Syntax**

::

   move
    [reference] to
    [location reference]

.. _parameters-8:

**Parameters**

.. _section-23:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - move
     - The page object to move. The first page in a document is page 1.

   * - to
     - The new location for the page.

**Returns**

A reference to the page that is moved.

.. _applescript-example-5:

**AppleScript example**

::

   move page 3 to before page 1

.. raw:: html

   <a name="50532410_41641"></a>

.. _open-1:

open
----

Opens a document or documents.

.. _syntax-9:

**Syntax**

::

   open
    [list of alias] invisible
    [boolean] options
    [string]

.. _parameters-9:

**Parameters**

.. _section-24:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameters
     - Description
   * - open
     - The document or documents to open.

   * - invisible
     - Whether the opened document should be hidden. Default is ``false``. 

   * - options
     - Optional parameter string of open actions.

.. _related-events-4:

**Related events**

* `close <IAC_API_AppleEvtObjects.html#50532410_39856>`__

.. raw:: html

   <a name="50532410_14269"></a>

.. _quit-1:

quit
----

Causes the Acrobat application to quit.

.. _syntax-10:

**Syntax**

::

   quit
    saving [constant]

.. _parameters-10:

**Parameters**

.. _section-25:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - saving
     - Determines whether to save documents that have been modified before quitting. Possible values:  ``yes``: Save the document.  ``no``: Do not save the document.  ``ask``: If the documents have been modified, ask the user whether to save them.  The default value is ``ask``. 

.. _applescript-example-6:

**AppleScript example**

::

   quit saving yes

.. raw:: html

   <a name="50532410_32794"></a>

save
----

Saves a document.

.. _syntax-11:

**Syntax**

::

   save
    [reference] to
    [file specification] using
    [reference] linearize[
    boolean]

.. _parameters-11:

**Parameters**

.. _section-26:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - save
     - The document to be saved.

   * - to
     - The file into which the document is to be saved. This parameter is optional in Acrobat 6.0 and higher. Specifying the ``to`` parameter is equivalent to doing a Save As. You can save a document in one of the supported formats with the ``using`` parameter. 

   * - linearize
     - Determines whether the document should be optimized for the web.

   * - using
     - The conversion method used to save the document in the desired format. Supported conversions by name are `EPS Conversion <IAC_API_AppleEvtObjects.html#50532410_79350>`__ and `PostScript Conversion <IAC_API_AppleEvtObjects.html#50532410_17521>`__ . All others can be specified by index using the `conversion <IAC_API_AppleEvtObjects.html#50532410_56571>`__ object.

.. _applescript-example-7:

**AppleScript example**

::

   save document 1 to file "MyHardDrive:tempBig.ps" using PostScript Conversion with embedded fonts, images, preview, and annotation without binary given postScript level: 1

.. raw:: html

   <a name="50532410_41279"></a>

set
---

Sets an object's data or properties.

.. _syntax-12:

**Syntax**

::

   set
    [reference] to
    [anything]

.. _parameters-12:

**Parameters**

.. _section-27:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - set
     - The object or property whose value is set.

   * - to
     - The new value.

.. _related-events-5:

**Related events**

* `get <IAC_API_AppleEvtObjects.html#50532410_32661>`__

.. _applescript-example-8:

**AppleScript example**

::

   set the name of first bookmark to "Chapter 1"

Acrobat application events
=============================

This section describes a number of Acrobat API calls for the Apple event interface that are specific to Acrobat applications. The supported events in this suite are:

-  ``bring to front``
-  ``clear selection``
-  ``close all docs``
-  ``create thumbs``
-  ``delete pages``
-  ``delete thumbs``
-  ``execute``
-  ``find next note``
-  ``find text``
-  ``get info``
-  ``go backward``
-  ``go forward``
-  ``goto``
-  ``goto next``
-  ``goto previous``
-  ``insert pages``
-  ``is toolbutton enabled``
-  ``maximize``
-  ``perform``
-  ``print pages``
-  ``read page down``
-  ``read page up``
-  ``remove toolbutton``
-  ``replace pages``
-  ``scroll``
-  ``select text``
-  ``set info``
-  ``zoom``

Apple encourages the use of an application's signature as the name of its class for application-specific Apple events. The string ``CARO`` is the name of the class for Acrobat-specific Apple events:

::

      #define kAEAcrobatViewerClass 'CARO'

AppleScript does not need this information.

.. raw:: html

   <a name="50532410_19936"></a>

bring to front
--------------

Brings the specified document's window to the front.

.. _syntax-13:

**Syntax**

::

   bring to front
    [reference]

.. _parameters-13:

**Parameters**

.. _section-28:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bring to front
     - The document to be displayed as the active document in the front window.

.. _applescript-example-9:

**AppleScript example**

::

   bring to front document "AppleEvt.pdf"

**Apple event ID**

::

   kAEBringToFront ('bfrt')

.. raw:: html

   <a name="50532410_33043"></a>

clear selection
---------------

Clears the document's current selection, if any.

.. _syntax-14:

**Syntax**

::

   clear selection
    [reference]

.. _parameters-14:

**Parameters**

.. _section-29:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - clear selection
     - The document containing the selection to be cleared

.. _related-events-6:

**Related events**

* `select text <IAC_API_AppleEvtObjects.html#50532410_27478>`__

.. _applescript-example-10:

**AppleScript example**

::

   clear selection document "PLUGINS.PDF"

.. _apple-event-id-1:

**Apple event ID**

::

   kAEClearSelection ('clsl')

.. raw:: html

   <a name="50532410_31136"></a>

close all docs
--------------

Closes all documents.

.. _syntax-15:

**Syntax**

::

   close all docs
    saving
    [constant]

.. _parameters-15:

**Parameters**

.. _section-30:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - saving
     - Determines whether to save modified documents before closing. Possible values:  ``yes``: Save the document.  ``no``: Do not save the document.  ``ask``: If the document has been modified, ask the user whether to save it.  The default value is ``ask``. 

.. _related-events-7:

**Related events**

* `open <IAC_API_AppleEvtObjects.html#50532410_99533>`__ (Required suite)

* `open <IAC_API_AppleEvtObjects.html#50532410_41641>`__ (Core suite)

.. _applescript-example-11:

**AppleScript example**

::

   close all docs

.. _apple-event-id-2:

**Apple event ID**

::

   kAECloseAllDocs ('cldc')

.. raw:: html

   <a name="50532410_15865"></a>

create thumbs
-------------

Creates thumbnail images for all pages in the document.

.. _syntax-16:

**Syntax**

::

   create thumbs
    [reference]

.. _parameters-16:

**Parameters**

.. _section-31:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - create thumbs
     - The document in which thumbnails are created.

.. _related-events-8:

**Related events**

* `delete thumbs <IAC_API_AppleEvtObjects.html#50532410_29225>`__

.. _applescript-example-12:

**AppleScript example**

::

   create thumbs document "roadmap.pdf"

.. _apple-event-id-3:

**Apple event ID**

::

   kAECreateThumbs ('crtb')

.. raw:: html

   <a name="50532410_15460"></a>

delete pages
------------

Deletes the specified pages in the document.

**Syntax**

::

   delete pages
    [reference] first
    [integer] last [
   integer] 

.. _parameters-17:

**Parameters**

.. _section-32:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - delete pages
     - The document containing the pages to be deleted.

   * - first
     - The first page to be deleted. The first page in a document is page 1.

   * - last
     - The last page to be deleted.

.. _related-events-9:

**Related events**

* `insert pages <IAC_API_AppleEvtObjects.html#50532410_35783>`__

* `replace pages <IAC_API_AppleEvtObjects.html#50532410_27808>`__

.. _applescript-example-13:

**AppleScript example**

::

   delete pages document "AppleEvt.pdf" first 1 last 3

.. _apple-event-id-4:

**Apple event ID**

::

   kAEDeletePages ('dlpg')

**Apple event parameters**

::

   keyAEFirstPage ('frpg')
   keyAELastPage ('lapg'')

.. raw:: html

   <a name="50532410_29225"></a>

delete thumbs
-------------

Deletes all thumbnails from the document.

.. _syntax-17:

**Syntax**

::

   delete thumbs
    [reference]

.. _parameters-18:

**Parameters**

.. _section-33:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - delete thumbs
     - The document from which thumbnails are deleted.

.. _related-events-10:

**Related events**

* `create thumbs <IAC_API_AppleEvtObjects.html#50532410_15865>`__

.. _applescript-example-14:

**AppleScript example**

::

   delete thumbs document "AppleEvt.pdf"

.. _apple-event-id-5:

**Apple event ID**

::

   kAEDeleteThumbs ('dltb')

.. raw:: html

   <a name="50532410_21312"></a>

execute
-------

Executes the specified menu item.

.. _syntax-18:

**Syntax**

::

   execute
    [reference]

.. _parameters-19:

**Parameters**

.. _section-34:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - execute
     - The menu item to execute. See the *Acrobat and PDF Library API Reference* for a list of menu item names.

.. _applescript-example-15:

**AppleScript example**

::

   activate
   execute menu item "Open"

.. _apple-event-id-6:

**Apple event ID**

::

   kAEExecute ('exec')

.. raw:: html

   <a name="50532410_15335"></a>

find next note
--------------

Finds and selects the next text note in a document.

.. _syntax-19:

**Syntax**

::

   find next note
    [reference] wrap around
    [boolean]

.. _parameters-20:

**Parameters**

.. _section-35:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - find next note
     - The document in which to find the next text note.

   * - wrap around
     - Determines whether to continue the search at the beginning of a document if a note has not been found after the end of the document is reached. If ``true``, the search wraps around; otherwise it does not. The default value is ``false``. 

**Returns**

The text annotation found.

.. _related-events-11:

**Related events**

* `find text <IAC_API_AppleEvtObjects.html#50532410_15620>`__

.. _applescript-example-16:

**AppleScript example**

::

   find next note document "dev_acro.pdf"

.. _apple-event-id-7:

**Apple event ID**

::

   kAEFindNextNote ('fnnt')

.. _apple-event-parameters-1:

**Apple event parameters**

::

   keyAEWrapAround ('wrar')

.. raw:: html

   <a name="50532410_15620"></a>

find text
---------

Finds text in a document.

.. _syntax-20:

**Syntax**

::

   find text
    [reference] string
    [international text] case sensitive
    [boolean] whole words
    [boolean] wrap around
    [boolean]

.. _parameters-21:

**Parameters**

.. _section-36:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - find text
     - The document to be searched.

   * - string
     - The string to be found.

   * - case sensitive
     - Determines whether searching is case-sensitive. The default value is ``false``. 

   * - whole words
     - Determines whether to search only for whole words. The default value is ``false``. 

   * - wrap around
     - Determines whether to continue the search at the beginning of a document if the specified text has not been found after the end of the document is reached. If ``true``, the search wraps around; otherwise it does not. The default value is ``false``. 

.. _related-events-12:

**Related events**

* `find next note <IAC_API_AppleEvtObjects.html#50532410_15335>`__

.. _applescript-example-17:

**AppleScript example**

::

   find text document "PLUGINS.PDF" string "Develop" whole words true

.. _apple-event-id-8:

**Apple event ID**

::

   kAEFindText ('ftxt')

.. _apple-event-parameters-2:

**Apple event parameters**

::

   keyAESearchString ('sstr')
   keyAECaseSensitive ('case')
   keyAEWholeWordsOnly ('whwd')
   keyAEWrapAround ('wrar')

.. raw:: html

   <a name="50532410_19217"></a>

get info
--------

Gets the value of the specified key in the document's ``Info`` dictionary.

.. _syntax-21:

**Syntax**

::

   get info
    [reference] key
    [international text]

.. _parameters-22:

**Parameters**

.. _section-37:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - get info
     - The document from which to obtain the ``Info`` dictionary entry.

   * - key
     - The case-sensitive ``Info`` dictionary key whose value is to be obtained. The predefined keys are: ``Creator``, ``Producer``, ``CreationDate``, ``Author``, ``Title``, ``Subject``, and ``Keywords``. None of these is required in the PDF file. 

**Returns**

A string containing the specified key's value, or an empty string if the key is not found.

.. _applescript-example-18:

**AppleScript example**

::

   get info document "PLUGINS.PDF" key "CreationDate"

.. _apple-event-id-9:

**Apple event ID**

::

   kAEGetInfo ('gnfo')

.. _apple-event-parameters-3:

**Apple event parameters**

::

   keyAEInfoKey ('inky')

.. raw:: html

   <a name="50532410_33904"></a>

go backward
-----------

Goes to the previous view in the stored view history. Does nothing if the current view is the first view in the history.

.. _syntax-22:

**Syntax**

::

   go backward
    [reference]

.. _parameters-23:

**Parameters**

.. _section-38:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - go backward
     - A `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object

.. _related-events-13:

**Related events**

* `go forward <IAC_API_AppleEvtObjects.html#50532410_30533>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `goto next <IAC_API_AppleEvtObjects.html#50532410_24656>`__

* `goto previous <IAC_API_AppleEvtObjects.html#50532410_21200>`__

.. _applescript-example-19:

**AppleScript example**

::

   go backward first PDF Window

.. _apple-event-id-10:

**Apple event ID**

::

   kAEGoBack ('gbck')

.. raw:: html

   <a name="50532410_30533"></a>

go forward
----------

Goes to the next view in the stored view history. Does nothing if the current view is the last view in the history.

.. _syntax-23:

**Syntax**

::

   go forward
    [reference]

.. _parameters-24:

**Parameters**

.. _section-39:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - go forward
     - A `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object

.. _related-events-14:

**Related events**

* `go backward <IAC_API_AppleEvtObjects.html#50532410_33904>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `goto next <IAC_API_AppleEvtObjects.html#50532410_24656>`__

* `goto previous <IAC_API_AppleEvtObjects.html#50532410_21200>`__

.. _applescript-example-20:

**AppleScript example**

::

   go forward first PDF Window

.. _apple-event-id-11:

**Apple event ID**

::

   kAEGoForward ('gfwd')

.. raw:: html

   <a name="50532410_16433"></a>

goto
----

Displays the page that has the specified page number.

.. _syntax-24:

**Syntax**

::

   goto
    [reference] page
    [integer]

.. _parameters-25:

**Parameters**

.. _section-40:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - goto
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object in which to change the page.

   * - page
     - The page number of the page to be displayed. The first page in a document is page 1.

.. _related-events-15:

**Related events**

* `go backward <IAC_API_AppleEvtObjects.html#50532410_33904>`__

* `go forward <IAC_API_AppleEvtObjects.html#50532410_30533>`__

* `goto next <IAC_API_AppleEvtObjects.html#50532410_24656>`__

* `goto previous <IAC_API_AppleEvtObjects.html#50532410_21200>`__

.. _applescript-example-21:

**AppleScript example**

::

   goto first PDF Window page 2

.. _apple-event-id-12:

**Apple event ID**

::

   kAEGotoPage ('gtpg')

.. _apple-event-parameters-4:

**Apple event parameters**

::

   keyAEPageNumber ('pg #')

.. raw:: html

   <a name="50532410_24656"></a>

goto next
---------

Displays the next page after the one currently displayed in the `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ . Does nothing if the current page is the last page in the document.

.. _syntax-25:

**Syntax**

::

   goto next
    [reference]

.. _parameters-26:

**Parameters**

.. _section-41:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - goto next
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object in which to change the page.

.. _related-events-16:

**Related events**

* `go backward <IAC_API_AppleEvtObjects.html#50532410_33904>`__

* `go forward <IAC_API_AppleEvtObjects.html#50532410_30533>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `goto previous <IAC_API_AppleEvtObjects.html#50532410_21200>`__

.. _applescript-example-22:

**AppleScript example**

::

   goto next first PDF Window

.. _apple-event-id-13:

**Apple event ID**

::

   kAEGotoNextPage ('nxpg')

.. raw:: html

   <a name="50532410_21200"></a>

goto previous
-------------

Displays the previous page before the one currently displayed in the `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ . Does nothing if the current page is the first page in the document.

.. _syntax-26:

**Syntax**

::

   goto previous
    [reference]

.. _parameters-27:

**Parameters**

.. _section-42:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - goto previous
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object in which to change the page.

.. _related-events-17:

**Related events**

* `go backward <IAC_API_AppleEvtObjects.html#50532410_33904>`__

* `go forward <IAC_API_AppleEvtObjects.html#50532410_30533>`__

* `goto <IAC_API_AppleEvtObjects.html#50532410_16433>`__

* `goto next <IAC_API_AppleEvtObjects.html#50532410_24656>`__

.. _applescript-example-23:

**AppleScript example**

::

   goto previous first PDF Window

.. _apple-event-id-14:

**Apple event ID**

::

   kAEGotoPrevPage ('pvpg')

.. raw:: html

   <a name="50532410_35783"></a>

insert pages
------------

Inserts one or more pages from one document into another.

.. _syntax-27:

**Syntax**

::

   insert pages
    [reference] after
    [integer] from
    [reference] starting with
    [integer] number of pages
    [integer] insert bookmarks
    [boolean]

.. _parameters-28:

**Parameters**

.. _section-43:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - insert pages
     - The target document in which to insert the page or pages.

   * - after
     - The number of the page after which the pages will be inserted. The first page in a document is page 1.

   * - from
     - The source document containing the page or pages to be inserted.

   * - starting with
     - The first page to be inserted.

   * - number of pages
     - The number of pages to be inserted.

   * - insert bookmarks
     - Determines whether to copy bookmarks that point to the inserted pages. Default is ``true``. 

.. _related-events-18:

**Related events**

* `delete pages <IAC_API_AppleEvtObjects.html#50532410_15460>`__

.. _applescript-example-24:

**AppleScript example**

::

   insert pages document "AppleEvt.pdf" after 2 from document "dev_acro.pdf" starting with 1 number of pages 4

.. _apple-event-id-15:

**Apple event ID**

::

   kAEInsertPages ('inpg')

.. _apple-event-parameters-5:

**Apple event parameters**

::

   keyAEInsertAfter ('inaf')
   keyAESourceDoc ('srdc')
   kAESourceStartPage ('stpg')
   keyAENumPages ('nmpg')
   keyAEInsertBookmarks ('inbm')

.. raw:: html

   <a name="50532410_40528"></a>

is toolbutton enabled
---------------------

Determines whether the specified toolbar button is enabled.

.. _syntax-28:

**Syntax**

::

   is toolbutton enabled named
    [international text]

.. _parameters-29:

**Parameters**

.. _section-44:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - named
     - Button name. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of toolbar button names.

**Returns**

``true`` if the toolbar button is enabled, ``false`` otherwise.

.. _related-events-19:

**Related events**

* `remove toolbutton <IAC_API_AppleEvtObjects.html#50532410_11291>`__

.. _applescript-example-25:

**AppleScript example**

::

   is toolbutton enabled named "AcroSrch:Query"

.. _apple-event-id-16:

**Apple event ID**

::

   kAEIsToolButtonEnabled ('tben')

.. _apple-event-parameters-6:

**Apple event parameters**

::

   keyAEButtonname ('tbnm')

.. raw:: html

   <a name="50532410_26208"></a>

maximize
--------

Sets the document's window size to either its maximum or original size.

.. _syntax-29:

**Syntax**

::

   maximize
    [reference] max size
    [integer]

.. _parameters-30:

**Parameters**

.. _section-45:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - maximize
     - The document whose window is to be resized.

   * - max size
     - If ``true``, the document's window is set to full size. If ``false``, the window is returned to its original size. 

.. _applescript-example-26:

**AppleScript example**

::

   maximize document "AppleEvt.pdf" max size false

.. _apple-event-id-17:

**Apple event ID**

::

   kAEMaximize ('maxi')

.. _apple-event-parameters-7:

**Apple event parameters**

::

   keyAEMaxSize ('mxsz')

.. raw:: html

   <a name="50532410_27016"></a>

perform
-------

Executes a bookmark's or link annotation's action.

.. _syntax-30:

**Syntax**

::

   perform
    [reference]

.. _parameters-31:

**Parameters**

.. _section-46:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - object
     - The `bookmark <IAC_API_AppleEvtObjects.html#50532410_75140>`__ or `page <IAC_API_AppleEvtObjects.html#50532410_24065>`__ object whose action is to be performed.

.. _applescript-example-27:

**AppleScript example**

::

   perform last bookmark

.. _apple-event-id-18:

**Apple event ID**

::

   kAEPerform ('prfm')

.. raw:: html

   <a name="50532410_40027"></a>

print pages
-----------

Prints one or more pages from a document without displaying a modal Print dialog box.

.. _syntax-31:

**Syntax**

::

   print pages
    [reference] first
    [integer] last
    [integer] PS Level
    [integer] binary output
    [boolean] shrink to fit
    [boolean]

.. _parameters-32:

**Parameters**

.. _section-47:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - print pages
     - The document containing the page or pages to be printed. This keyword and the actual filename must be specified.

   * - first
     - The first page to be printed. The default value is 1.

   * - last
     - The last page to print. The default value is the number of the last page in the document.

   * - PS Level
     - The PostScript language level (1 or 2) to use when printing to a PostScript printer. The default value is 1.

   * - binary output
     - Determines whether binary output is permitted (used for PostScript printing only). The default value is ``false``. 

   * - shrink to fit
     - Determines whether pages should be shrunk to fit paper in printer. The default value is ``false``. 

.. _applescript-example-28:

**AppleScript example**

::

   print pages document "AppleEvt.pdf" first 1 last 3 PS Level 2 binary output true shrink to fit true

.. _apple-event-id-19:

**Apple event ID**

::

   kAEPrintPages ('prpg')

.. _apple-event-parameters-8:

**Apple event parameters**

::

   keyAEFirstPage ('frpg')
   keyAELastPage ('lapg')
   keyAEPSLevel ('pslv')
   keyAEBinaryOK ('binO')
   keyAEShrinkToFit ('s2ft')

.. raw:: html

   <a name="50532410_32063"></a>

read page down
--------------

Scrolls forward through the document by one screen.

.. _syntax-32:

**Syntax**

::

   read page down
    [reference]

.. _parameters-33:

**Parameters**

.. _section-48:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - read page down
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object to be scrolled.

.. _related-events-20:

**Related events**

* `read page up <IAC_API_AppleEvtObjects.html#50532410_37225>`__

* `scroll <IAC_API_AppleEvtObjects.html#50532410_21493>`__

.. _applescript-example-29:

**AppleScript example**

::

   read page down first PDF Window

.. _apple-event-id-20:

**Apple event ID**

::

   kAEReadPageDown ('pgdn')

.. raw:: html

   <a name="50532410_37225"></a>

read page up
------------

Scrolls backward through the document by one screen.

.. _syntax-33:

**Syntax**

::

   read page up
    [reference]

.. _parameters-34:

**Parameters**

.. _section-49:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - read page up
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object to be scrolled.

.. _related-events-21:

**Related events**

* `read page down <IAC_API_AppleEvtObjects.html#50532410_32063>`__

* `scroll <IAC_API_AppleEvtObjects.html#50532410_21493>`__

.. _applescript-example-30:

**AppleScript example**

::

   read page up first PDFPageWindow

.. _apple-event-id-21:

**Apple event ID**

::

   kAEReadPageUp ('pgup')

.. raw:: html

   <a name="50532410_11291"></a>

remove toolbutton
-----------------

Removes the specified button from the toolbar.

.. _syntax-34:

**Syntax**

::

   remove toolbutton named
    [international text]

.. _parameters-35:

**Parameters**

.. _section-50:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - named
     - The name of the toolbar button to be removed. See the *Acrobat and PDF Library API Reference* for a list of toolbar button names.

.. _related-events-22:

**Related events**

* `is toolbutton enabled <IAC_API_AppleEvtObjects.html#50532410_40528>`__

.. _applescript-example-31:

**AppleScript example**

::

   remove toolbutton named "ZoomIn"

.. _apple-event-id-22:

**Apple event ID**

::

   kAERemoveToolButton ('rmtb')

.. _apple-event-parameters-9:

**Apple event parameters**

::

   keyAEButtonname ('tbnm')

.. raw:: html

   <a name="50532410_27808"></a>

replace pages
-------------

Replaces one or more pages in a document with pages from another document.

.. _syntax-35:

**Syntax**

::

   replace pages
    [reference] over
    [integer] from
    [reference] starting with
    [integer] number of pages
    [integer] merge notes
    [boolean]

.. _parameters-36:

**Parameters**

.. _section-51:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - replace pages
     - The target document whose pages are to be replaced.

   * - over
     - The first page to be replaced. The first page in a document is page 1.

   * - from
     - The source document from which the replacement page or pages are obtained.

   * - starting with
     - The first page in the source document to be copied.

   * - number of pages
     - The number of pages to be replaced.

   * - merge notes
     - Determines whether to copy notes from the source document. The default value is ``true``. 

.. _related-events-23:

**Related events**

* `delete pages <IAC_API_AppleEvtObjects.html#50532410_15460>`__

* `insert pages <IAC_API_AppleEvtObjects.html#50532410_35783>`__

.. _applescript-example-32:

**AppleScript example**

::

   replace pages document "AppleEvt.pdf" over 2 from document "dev_acro.pdf" starting with 1 number of pages 4 merge notes false

.. _apple-event-id-23:

**Apple event ID**

::

   kAEReplacePages ('rppg')

.. _apple-event-parameters-10:

**Apple event parameters**

::

   keyAEDestStartPage ('dtpg')
   keyAESourceDoc ('srdc')
   keyAESourceStartPage ('stpg')
   keyAENumPages ('nmpg')
   keyAEMergeNotes ('mgnt')

.. raw:: html

   <a name="50532410_21493"></a>

scroll
------

Scrolls the view of a page by the specified amount.

.. _syntax-36:

**Syntax**

::

   scroll
    [reference] X Amount
    [integer] Y Amount
    [integer]

.. _parameters-37:

**Parameters**

.. _section-52:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - scroll
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object in which to scroll the view.

   * - X Amount
     - The amount to scroll in the horizontal direction, in pixels. Positive values move the view to the right.

   * - Y Amount
     - The amount to scroll in the vertical direction, in pixels. Positive values move the view down.

.. _related-events-24:

**Related events**

* `read page down <IAC_API_AppleEvtObjects.html#50532410_32063>`__

* `read page up <IAC_API_AppleEvtObjects.html#50532410_37225>`__

.. _applescript-example-33:

**AppleScript example**

::

   scroll first PDFWindow X Amount 20 Y Amount 100

.. _apple-event-id-24:

**Apple event ID**

::

   kAEScroll ('scrl')

.. _apple-event-parameters-11:

**Apple event parameters**

::

   keyAEXDelta ('xdlt')
   keyAEYDelta ('ydlt')

.. raw:: html

   <a name="50532410_27478"></a>

select text
-----------

Selects text as specified by either character or word offsets.

.. _syntax-37:

**Syntax**

::

   select text
    [reference] from words
    [list of integer] from chars
    [list of integer]

.. _parameters-38:

**Parameters**

.. _section-53:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - select text
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object in which to select text.

   * - from words
     - The words to be selected. This consists of one or more pairs of word offsets from the beginning of the document and word lengths (the number of contiguous words).

   * - from chars
     - Characters to be selected. This consists of one or more pairs of character offsets from the beginning of the document and character lengths (the number of contiguous characters).

.. _related-events-25:

**Related events**

* `clear selection <IAC_API_AppleEvtObjects.html#50532410_33043>`__

.. _applescript-example-34:

**AppleScript example**

::

   repeat with i from 1 to 10
          repeat with j from 1 to (10 - i)
          select text from words {i, j}
      end repeat
   end repeat

.. _apple-event-id-25:

**Apple event ID**

::

   kAESetTextSelection ('stxs')

.. _apple-event-parameters-12:

**Apple event parameters**

::

   keyAEWordList ('fmwd')
   keyAECharList ('fmch')

.. raw:: html

   <a name="50532410_18444"></a>

set info
--------

Sets the value of a specified key in the document's ``Info`` dictionary

.. _syntax-38:

**Syntax**

::

   set info
    [reference] key
    [international text] value
    [international text]

.. _parameters-39:

**Parameters**

.. _section-54:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - set info
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ in which to set the value of an ``Info`` dictionary entry.

   * - key
     - The ``Info`` dictionary key whose value is to be set.

   * - value
     - The value to be stored.

.. _applescript-example-35:

**AppleScript example**

::

   set info document "PlugIns.pdf" key "Author" 

   value "Wolfgang Pauli"

.. _apple-event-id-26:

**Apple event ID**

::

   kAESetInfo ('snfo')

.. _apple-event-parameters-13:

**Apple event parameters**

::

   keyAEInfoKey ('inky')
   keyAEInfoValue ('invl')

.. raw:: html

   <a name="50532410_35096"></a>

zoom
----

Changes the zoom level of the specified `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ .

.. _syntax-39:

**Syntax**

::

   zoom
    [reference] to
    [small real]

.. _parameters-40:

**Parameters**

.. _section-55:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - zoom
     - The `PDF Window <IAC_API_AppleEvtObjects.html#50532410_29037>`__ object to be zoomed.

   * - to
     - The zoom factor specified as a percentage. For example, a value of 100 (100%) displays the document with a magnification of 1.0.

.. _applescript-example-36:

**AppleScript example**

::

   zoom first PDFWindow to 150

.. _apple-event-id-27:

**Apple event ID**

::

   kAEZoomTo ('zmto')

.. _apple-event-parameters-14:

**Apple event parameters**

::

   keyAEZoomFactor ('zmft')

Miscellaneous events
====================

Acrobat provides an Apple event that does not fall into one of the regular suites: `do script <IAC_API_AppleEvtObjects.html#50532410_82140>`__

.. raw:: html

   <a name="50532410_82140"></a>

do script
---------

Executes the specified JavaScript script.

.. _syntax-40:

**Syntax**

::

   do script
    [international text] file
    [alias]

.. _parameters-41:

**Parameters**

.. _section-56:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - do script
     - The JavaScript script to be executed.

   * - file
     - File holding the JavaScript script to be executed.

**Returns**

Result of JavaScript execution as text.

.. _applescript-example-37:

**AppleScript example**

::

   do script MyJavaScriptFile.js

