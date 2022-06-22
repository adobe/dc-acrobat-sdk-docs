******************************************************
Logical Structure
******************************************************

PDF files (in versions 1.3 and later) can contain *structure trees* giving a logical structure to the information in a document. The facilities for logical structure in PDF are described in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

A *structure suite* of names is used with the pdfmark operator that can be used to specify logical structure within PDF files.

`Structure examples <pdfmark_Examples.html#50454555_65255>`__ gives a variety of examples of using the structure suite.

Elements and parents
====================

A document's logical structure consists of a hierarchy of *structure elements.* Elements can contain contents and attributes. At the root of the hierarchy is a dictionary object called the Structure Tree Root.

When using the structure suite, the hierarchy is established by means of the *implicit parent stack* of elements. Elements can be pushed onto or popped off of this stack. When an element is created, its parent is the current top item on the stack. If the stack is empty, the document's Structure Tree Root is made the parent; the Structure Tree Root is created if it does not already exist. When element content is created, its containing element is the current top item on the stack.

.. note::

   Some operators that specify an element cannot accept the Structure Tree Root as the implicit argument; therefore these commands are in error if the implicit parent stack is empty when they are encountered or if the top item on the stack is the Structure Tree Root. These cases are noted in the command descriptions.

Structure operators
===================

This section lists the pdfmark names that make up the structure suite. Most of these are directly related to PDF logical structure features, but some only manipulate the state of the PDF creation process, without corresponding to any particular output.

-  Structure Tree Root

   -  `StRoleMap <pdfmark_Logical.html#50454553_91312>`__ adds entries to the role map.
   -  `StClassMap <pdfmark_Logical.html#50454553_StClassMap>`__ adds entries to the class map.

-  Elements

   -  `StPNE <pdfmark_Logical.html#50454553_48437>`__ creates a new structure element.
   -  `StBookmarkRoot <pdfmark_Logical.html#50454553_34079>`__ creates a root bookmark for a structure bookmark tree.
   -  `StPush <pdfmark_Logical.html#50454553_75789>`__ pushes an existing element onto the implicit parent stack.
   -  `StPop <pdfmark_Logical.html#50454553_69556>`__ pops an element off the implicit parent stack.
   -  `StPopAll <pdfmark_Logical.html#50454553_66687>`__ empties the implicit parent stack.

-  Element Content

   -  `StBMC <pdfmark_Logical.html#50454553_53028>`__ indicates the beginning of marked content.
   -  `StBDC <pdfmark_Logical.html#50454553_73021>`__ indicates the beginning of marked content with a dictionary.
   -  `EMC <pdfmark_Logical.html#50454553_75598>`__ delimits the end of marked content.
   -  `StOBJ <pdfmark_Logical.html#50454553_43183>`__ adds an existing PDF object as part of an element's content.

-  Attributes

   -  `StAttr <pdfmark_Logical.html#50454553_10527>`__ enables the attachment of attribute objects to elements.

-  Saving and restoring the stack

   -  `StStore <pdfmark_Logical.html#50454553_60367>`__ saves the current state of the implicit parent stack.
   -  `StRetrieve <pdfmark_Logical.html#50454553_89182>`__ restores the implicit parent stack from a saved state.

The following sections provide details about the structure suite.

Structure Tree Root
===================

Distiller automatically creates a new Structure Tree Root the first time it creates a new element with ``StPNE`` (see `StPNE <pdfmark_Logical.html#50454553_48437>`__).

The Structure Tree Root contains a *role map* and a *class map* (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for details). The following two pdfmark features can be used to add information to these maps.

StRoleMap
---------

``StRoleMap`` specifies key-value pairs to be added as dictionary entries to the Structure Tree Root's role map. If the Structure Tree Root doesn't already exist, it is created; if the Structure Tree Root doesn't have a role map dictionary, one is created. A given key–value pair always modifies the role map, even if the key is already in the dictionary.

The syntax for adding entries to a role map is as follows:

::

    [ /
   new-element-subtype-name[ /
               /
   standard-structural-subtype-name[ /
           ...[ /           /
   new-element-subtype-name[ /
               /
   standard-structural-subtype-name[ /
           /StRoleMap pdfmark

StClassMap
----------

``StClassMap`` behaves like ``StRoleMap`` , except that it adds entries to the Structure Tree Root's class map, rather than the role map. The syntax for adding entries to a class map is as follows:

::

    [ /
   class-name 
   /
   attribute-object-name[ /
           ...[ /           /
   class-name 
   /
   attribute-object-name[ /
           /StClassMap pdfmark

Elements
========

The structure suite provides several commands to create elements and link them into structure trees.

StPNE
-----

``StPNE`` ("Push New Element") creates a new element whose parent is the element on the top of the implicit parent stack. Its syntax is as follows:

::

    [ /Subtype 
   name[ /
           /_objdef {
   objname
   }[ /           /Title 
   string[ /
           /Alt 
   string[ /
           /ID 
   string[ /
           /Class 
   name[ /
           /At 
   integer[ /
           /Bookmark 
   dictionary[ /
           /StPNE pdfmark

These keys are described in the following table.

Common element keys


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Description

   * - Subtype
     - name
     - Required. The element type, such as Link or Section.

   * - Title
     - string
     - Optional. A human-readable name for the particular element.

   * - Alt
     - string
     - Optional. An alternate representation of the element's contents as human-readable text

   * - ID
     - string
     - Optional. A unique identifier for the element. The identifier must be unique within the document in which the element occurs. It is an error to specify an element with the same ID as an existing element in the same tree.

   * - Class
     - name
     - Optional. The class name to be associated with the element

   * - At
     - integer
     - Optional. Index at which to insert this item within its parent. If omitted, or greater than or equal to the parent's current number of children, the item is added as the *last* child of its parent, retaining all existing items in their original positions. If less than or equal to zero, the new item becomes the *first* child of its parent. If the index is any other number, the item is inserted at that index within the container, and all items that had indices greater than or equal to the given index are shifted to the position with index one greater. An item may be an element, marked content, or a PDF object.

   * - Bookmark
     - dictionary
     - Optional. Specifies a bookmark that is generated for this structural element. The table `Bookmark dictionary / bookmark tree root <pdfmark_Logical.html#50454553_33804>`__ describes this dictionary.


A new element is added to its parent at the index specified with the ``At`` key. The newly-created element is pushed onto the implicit parent stack.

.. note::

   If the implicit parent stack is empty, the Structure Tree Root is pushed onto the stack and used as the new element's parent. If there is no Structure Tree Root, one is created, pushed onto the stack, and used as the new element's parent.

``StPNE`` may also take the key ``_objdef`` to specify an object name for the element. Once an element is named, it can be referenced with the ``E`` key of the ``StPush`` pdfmark (see `StPush <pdfmark_Logical.html#50454553_75789>`__).

The ``Bookmark`` key allows a bookmark to be automatically generated for an element and added to the Structured Bookmark subtree. Its value is a bookmark dictionary, which may contain the ``Title`` and ``Open`` keys described in the following table.

Bookmark dictionary / bookmark tree root

.. _section-1:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Semantics

   * - Open
     - Boolean
     - Optional. If ``true`` , the bookmark is open, that is, its children are visible. If ``false`` , the bookmark is closed. If this key is absent, the bookmark is closed.

   * - Title
     - string
     - Optional. The bookmark title. The encoding and character set used is either PDFDocEncoding (as described in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ ) or Unicode. If Unicode, the string must begin with <FEFF>. For example, the Unicode string for (ABC) is <FEFF004100420043>. ``Title`` has a maximum length of 255 PDFDocEncoding characters or 126 Unicode values, although a practical limit of 32 characters is advised so that it


If the ``Title`` key is absent, the title is the title of the element or its subtype.

The bookmark dictionary may also contain key-value pairs that specify an action to be taken when the bookmark is activated (see `Actions and Destinations <pdfmark_Actions.html#50454557_94191>`__). If none of the action keys are present, the bookmark's action is to go to either the first page where marked content is a child of this element or a child in one of its descendant elements.

The example `A bookmark for a structural element <pdfmark_Examples.html#50454555_70689>`__ defines a bookmark for an element.

StBookmarkRoot
--------------

``StBookmarkRoot`` creates the root bookmark for structure bookmarks added by a ``StPNE`` with a ``Bookmark`` key. Its syntax is as follows:

::

    [ /Title 
   string[ /
           /Open 
   boolean[ /           ... action-specifying-keys ...[ /
           /StBookmarkRoot pdfmark

It contains the ``Title`` and ``Open`` keys shown in the table `Bookmark dictionary / bookmark tree root <pdfmark_Logical.html#50454553_33804>`__. If the ``Title`` key is absent, the title is "Untitled".

It may also contain the action keys in `Actions and Destinations <pdfmark_Actions.html#50454557_94191>`__ if none of these keys are present, the bookmark root has no action associated with it.

An operator with ``StBookmarkRoot`` *must* appear before any ``StPNE`` with a ``Bookmark`` key; otherwise the default ("Untitled", closed, no action) is used for the structured bookmark subtree.

StPush
------

``StPush`` pushes an existing element onto the implicit parent stack. The syntax for pushing an element is as follows:

::

    [/E {
   objname
   }

       /StPush pdfmark

The ``E`` key specifies an existing element, given as an object name of the special form {objname} used to refer to Cos objects. It must be a name that was created by a previous ``StPNE`` using the ``_objdef`` key (see `StPNE <pdfmark_Logical.html#50454553_48437>`__).

.. note::

   If the ``E`` key is omitted, the Structure Tree Root of the document is specified. The Structure Tree Root is created if it does not already exist.

StPop
-----

``StPop`` removes the element at the top of the implicit parent stack. It is an error for ``StPop`` to be encountered when the implicit parent stack is empty.

The syntax for popping an element is as follows:

::

    [ /StPop pdfmark

StPopAll
--------

``StPopAll`` completely empties the implicit parent stack. The syntax for emptying the stack is as follows:

::

    [ /StPopAll pdfmark

StUpdate
--------

``StUpdate`` updates the entries of the current structure element. The syntax is as follows:

::

    [   << 
   /S /Span...
    >> /StUpdate pdfmark

Element content
===============

Elements can have two kinds of document content: marked content and references to PDF objects.

Use ``StBDC`` and ``StBMC`` to indicate the beginning of marked content and ``EMC`` to delimit the end of marked content. These operators combine the creation of the marked content region in the PDF content stream with the creation of marked content and its placement within the structure hierarchy.

.. note::

   Marked content can be specified independently of the structure suite, using the operators described in `Marked content (MP, DP, BMC, BDC, EMC) <pdfmark_Basic.html#50454556_41438>`__.

It is possible to nest marked content by nesting the ``StBMC/BDC`` and ``EMC`` operators. This is different from the nesting maintained by the tree structure of elements, which is implemented using ``StPNE`` and ``StPop`` . Note that nested marked content may belong to elements in different branches of a Structure Tree.

To specify references to PDF objects, use the ``StOBJ`` operator.

StBMC
-----

``StBMC`` marks the beginning of a sequence of marked content objects. Its syntax is as follows:

::

    [ /T 
   tag[ /
           /At 
   integer[ /
           /StBMC pdfmark

The marked content is added to its containing element (the top element of the implicit parent stack) at the position optionally specified by the ``At`` key (see the table `Common element keys <pdfmark_Logical.html#50454553_65055>`__). The ``T`` key is described in the following table. It is an error if the implicit parent stack is empty when ``StBMC`` is encountered.

Specifying tags and property list entries for marked content

.. _section-2:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Key
     - Type
     - Description

   * - P (Properties)
     - dictionary
     - Optional. Key–value pairs that are entered into the properties dictionary of the marked content being created. If this key is omitted, no properties other than those required by the implementation of logical structure in PDF are entered into the properties dictionary. This key is supported only with StBDC.

   * - T (Tag)
     - name
     - Optional. The tag to be given to the marked content being created. If this key is omitted, the subtype of the containing element is used.


StBDC
-----

``StBDC`` marks the beginning of a sequence of page content objects with an associated property list, given by a dictionary. ``StBDC`` behaves just like ``StBMC`` , with the addition of a property list. Its syntax is as follows:

::

    [ /T 
   tag[ /
           /P 
   properties-dictionary[ /
           /At 
   integer[ /
           /StBDC pdfmark

The marked content is added to its containing element (the element on top of the implicit parent stack) at the position optionally specified by the ``At`` key (see the table `Common element keys <pdfmark_Logical.html#50454553_65055>`__). The ``P (Properties)`` and ``T (Tag)`` keys are described in the table `Specifying tags and property list entries for marked content <pdfmark_Logical.html#50454553_43535>`__. It is an error if the implicit parent stack is empty when ``StBDC`` is encountered.

EMC
---

``EMC`` signals the end of a marked sequence of page content operators. Its syntax is as follows:

::

    [ /EMC pdfmark

StOBJ
-----

``StOBJ`` adds an existing PDF object to the content of the top element of the implicit parent stack, using the Cos object reference mechanism. Its syntax is as follows:

::

    [ /Obj {
   objname
   }[ /           /At 
   integer[ /
           /StOBJ pdfmark

The ``Obj`` key specifies the object to be added as data to the specified element, given as an object name of the special form {objname} used to refer to Cos objects. This object must have been created previously and must be a dictionary or stream.

The ``At`` key (see the table `Common element keys <pdfmark_Logical.html#50454553_65055>`__) specifies the position of the new content within the containing element.

It is an error if the implicit parent stack is empty when ``StOBJ`` is encountered.

Attribute objects
=================

Elements can have additional information, or attributes, associated with them. Attributes are held in attribute objects, which can be associated with either a single element by using ``StAttr`` (see `StAttr <pdfmark_Logical.html#50454553_10527>`__), or with a group of objects by storing it in the ``ClassMap`` of the Structure Tree Root, using ``StClassMap`` (see `StClassMap <pdfmark_Logical.html#50454553_StClassMap>`__).

StAttr
------

``StAttr`` creates a new attribute object and adds it to the element on top of the implicit parent stack.

The syntax to create a new attribute object is as follows:

::

    [ /Obj {
   objname
   }

           /StAttr pdfmark

The ``Obj`` key specifies the object to be added as an attribute object to the specified element, given as an object name of the special form {objname} used to refer to Cos objects. This object must have been created previously and must be a dictionary or stream.

.. note::

   In the PDF file, the attribute object is stored in the ``A`` key in the element's dictionary.

It is an error if the implicit parent stack is empty when ``StAttr`` is encountered.

Storage and retrieval of the implicit parent stack
==================================================

Structure suite operators specify parents implicitly by means of the stack. However, it is not always possible to mimic a tree's structure by nesting the structure within the document. For example, a paragraph may be represented by regions on more than one page, or it may be interrupted by other page content.

To allow applications flexibility in their page output while allowing them the convenience of specifying tree structure, the structure suite provides a way of storing and later retrieving the tree's context.

See `Interrupted structure <pdfmark_Examples.html#50454555_16737>`__ for an example of storing and retrieving the implicit parent stack.

.. note::

   The names under which implicit parent stacks are stored and retrieved are in the current namespace governed by the stack operators ``NamespacePush`` and ``NamespacePop`` , defined in `Namespaces <pdfmark_Syntax.html#50454537_19819>`__.

StStore
-------

``StStore`` saves the current state of the implicit parent stack (without changing it). Its syntax is as follows:

::

    [ /StoreName 
   name
           /StStore pdfmark

The ``StoreName`` key specifies a name object to be associated with the saved implicit parent stack state. Storing an implicit parent stack state under a previously used name completely replaces the implicit parent stack state already stored under that name.

StRetrieve
----------

``StRetrieve`` restores the implicit parent stack from a saved state, whose name is specified by the ``StoreName`` key (as described in `StStore <pdfmark_Logical.html#50454553_60367>`__). The syntax for a restoring the current state is as follows:

::

    [ /StoreName 
   name
    /StRetrieve pdfmark

The previous state of the implicit parent stack is overwritten by the restored state. It is an error to try to retrieve a nonexistent state, that is, to use a name that was not associated with a stack state by a previous ``StStore`` .

EPS considerations
==================

Encapsulated PostScript (EPS) is a form of PostScript used to embed graphics created in one application in a document created in another application. Applications can create EPS files containing structure elements without knowing anything about the environment into which the EPS file is to be embedded, which complicates the processing of a structure inside embedded EPS.

The logical structure design allows structure within an embedded EPS to be connected to the structure of the surrounding file by way of the implicit parent stack, while insulating the namespace of the containing file from accidents due to naming coincidences in embedded EPS files.

It is strongly recommended that applications embedding EPS files wrap the embedded PostScript between NamespacePush and NamespacePop to insulate the overall PostScript document from the consequences of multiply-defined object names.

Tagged PDF
==========

PDF 1.4 introduced the concept of *tagged PDF.* Tagged PDF is a type of structured PDF that allows page content to be extracted and reused for various purposes, such as reflow of text and graphics, conversion to various file formats such as HTML and XML, and accessibility to the visually impaired.

For detailed information on tagged PDF, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

In PDF 1.4, the Catalog dictionary contains a ``MarkInfo`` entry whose value is a dictionary. That dictionary has a single key called ``Marked`` whose value is a Boolean; a value of ``true`` indicates that the document is a tagged PDF.

The syntax for indicating tagged PDF using pdfmark is as follows:

::

    [   {Catalog} <</MarkInfo <</Marked true >> >> /PUT pdfmark

#. Tagged PDF

This is a sample PostScript file that illustrates the use of tagged PDF.

Three items should be added to this example for completeness:

1. A small table (just two rows, three column)
2. A figure (either standalone, or actually embedded in the text)
3. If possible, the encoding of a font so that the soft hyphen really works without the "actual text"

::

   
     [ /Creator (Hand Created)
         /CreationDate (D:20010508130548)
         /ModDate (D:20010508145339)
         /Author (Adobe Developer)
         /Title (Sample Document 1 for tagged PDF creation)
         /Subject (A base document for the creation of some simple PostScript and

       PDFMarks to show tagged PDF)
         /Session (Tagged PDF Dev Tech Seminar)
         /Purpose (Demonstration)
         /DOCINFO pdfmark
   
     [   {Catalog} <</MarkInfo <</Marked true>>>> /PUT pdfmark
   

Layout class for documenttitle below

::

    [ /_objdef {C1} /type /dict /OBJ pdfmark
     [   {C1} <</O /Layout /SpaceAfter 10 /SpaceBefore 10 /TextAlign /Center>>
     /   PUT pdfmark
     [ /CM1 {C1} /StClassMap pdfmark
   

Layout class for topichead

::

    [ /_objdef {C2} /type /dict /OBJ pdfmark
     [   {C2} <</O /Layout /SpaceAfter 5 /SpaceBefore 5 /TextAlign /Left>>
         /PUT pdfmark
     [ /CM2 {C2} /StClassMap pdfmark
   

Layout class for topichead2

::

    [ /_objdef {C3} /type /dict /OBJ pdfmark
     [   {C3} <</O /Layout /SpaceAfter 3 /SpaceBefore 3 /TextAlign /Left>>
         /PUT pdfmark
     [ /CM3 {C3} /StClassMap pdfmark
   

Layout class for p

::

    [ /_objdef {C4} /type /dict /OBJ pdfmark
     [   {C4} <</O /Layout /SpaceAfter 1 /SpaceBefore 3 /TextAlign /Left>>
         /PUT pdfmark
     [ /CM4 {C4} /StClassMap pdfmark
   
     [ /Subtype /document /Lang (en-US) /StPNE pdfmark
   
     [ /_objdef {dta1} /type /dict /OBJ pdfmark
   
     [   {dta1} <</O /XML-1.00 /Author (Joe)>> /PUT pdfmark
     [ /Subtype /documenttitle /Class /CM1 /StPNE pdfmark
     [ /Obj {dta1} /StAttr pdfmark
   
     [ /StBMC pdfmark
   
     /Helvetica-Bold findfont 24 scalefont setfont
     216 720 moveto
     (Title of Document) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /topic /StPNE pdfmark
     [ /Subtype /topichead /Class /CM2 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica-Bold findfont 18 scalefont setfont
     72 690 moveto
     (First Topic) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /p /Class /CM4 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica findfont 12 scalefont setfont
     72 674 moveto
     (Some text in a paragraph in the first topic. These lines may not be

       justified, but are illustrative.) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /topic /StPNE pdfmark
     [ /Subtype /topichead /Class /CM2 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica-Bold findfont 18 scalefont setfont
     72 648 moveto
     (Second Topic) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /Subtype /p /Class /CM4 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica findfont 12 scalefont setfont
     72 632 moveto
     (This is a paragraph of text in the second topic. ) show
   
     [ /EMC pdfmark
     [ /Subtype /emph /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica-Oblique findfont 12 scalefont setfont
     (Emphasized ) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /StBMC pdfmark
   
     /Helvetica findfont 12 scalefont setfont
     (words ) show
   
     72 618 moveto
     (here.) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /topic /StPNE pdfmark
     [ /Subtype /topichead2 /Class /CM3 /StPNE pdfmark
   
     [ /StBMC pdfmark
   
     /Helvetica-Bold findfont 14 scalefont setfont
     72 596 moveto
     (Subtopic of second topic) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /p /Class /CM4 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica findfont 12 scalefont setfont
     72 580 moveto
     (This paragraph of text is the second topic, first subtopic. ) show
     72 566 moveto
     (Hyphenated words make up this para) show
   
     [ /EMC pdfmark
     [ /Subtype /Span /ActualText <FEFF00AD> /StPNE pdfmark
     [ /StBMC pdfmark
   
     (-) show
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /StBMC pdfmark
   
     72 552 moveto
     (graph also.) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /StPop pdfmark
     [ /StPop pdfmark
   

Add another topic with line numbers

::

   
     [ /Subtype /topic /StPNE pdfmark
     [ /Subtype /topichead /Class /CM2 /StPNE pdfmark
     [ /StBMC pdfmark
   
     /Helvetica-Bold findfont 18 scalefont setfont
     72 510 moveto
     (Line Numbered Topic) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /p /Class /CM4 /StPNE pdfmark
   
     /Helvetica findfont 12 scalefont setfont
     [ /Artifact <</Type /Layout>> /BDC pdfmark
     48 494 moveto (1) show
   
     [ /EMC pdfmark
     [ /StBMC pdfmark
   
     72 494 moveto
     (This is some text such as would appear in a legal bill. ) show
   
     [ /EMC pdfmark
     [ /Artifact <</Type /Layout>> /BDC pdfmark
   
     48 478 moveto (2) show
   
     [ /EMC pdfmark
     [ /StBMC pdfmark
   
     72 478 moveto
     (Note that this text has line numbers, but that ) show
   
     [ /EMC pdfmark
     [ /Artifact <</Type /Layout>> /BDC pdfmark
   
     48 464 moveto (3) show
   
     [ /EMC pdfmark
     [ /StBMC pdfmark
   
     72 464 moveto
     (the numbers disappear when you reflow ) show
   
     [ /EMC pdfmark
     [ /Artifact <</Type /Layout>> /BDC pdfmark
   
     48 450 moveto (4) show
   
     [ /EMC pdfmark
   
     [ /StBMC pdfmark
   
     72 450 moveto
     (the text or save the text as XML.) show
   
     [ /EMC pdfmark
     [ /StPop pdfmark
     [ /StPop pdfmark
   

    % =================================================================
    % Create a simple link example
    % =================================================================
   
     [ /Subtype /P /StPNE pdfmark
     [ /Subtype /Link /StPNE pdfmark
   
     [ /_objdef {annotObj} /Rect [70 398 202 412]
         /Action << /Subtype /URI /URI (http://www.adobe.com) >>
         /Border [0 0 0]
         /Subtype /Link
         /ANN pdfmark
   
     [ /Obj {annotObj} /StOBJ pdfmark
   
     [ /StBMC pdfmark
         0 0 1 setrgbcolor
         72 400 moveto
   
     (http://www.adobe.com.) show
   
     [ /EMC pdfmark
   
     [ /StPop pdfmark
     [ /StPop pdfmark
   

    % Set the tab order for the page to structure order.

    [   {ThisPage} << /Tabs /S >> /PUT pdfmark
   
    % =================================================================
    % Create figure with a bounding box
    % =================================================================

     [ /Subtype /Figure /Alt (Logo.) /Title (Company Logo) /StPNE pdfmark
   

    % Generate attribute dictionary for figure

    [ /_objdef {layoutObj} /type /dict /OBJ pdfmark
    [   {layoutObj} <</O /Layout /Height 70 /Width 140 /BBox [90 290 250 360]
         /Placement /Block>> /PUT pdfmark
   
    % Attach attributes to figure

    [ /Obj {layoutObj} /StAttr pdfmark
   
     [ /StBMC pdfmark
   
     /Helvetica findfont 48 scalefont setfont
     0 0 0 setrgbcolor
     90 290 moveto
     90 360 lineto
     250 360 lineto
     250 290 lineto
     closepath
     stroke
     100 300 moveto
     1 0 0 setrgbcolor
     (LOGO) false charpath
     2 setlinewidth stroke
   
     [ /EMC pdfmark
   
     [ /StPop pdfmark

    % =================================================================
    % Simple List Example
    % =================================================================

     /Helvetica-Bold findfont 18 scalefont setfont
     0 0 0 setrgbcolor
   
     [ /Subtype /L /Lang (en-US) /Title (Some salutations) /StPNE pdfmark
   

    % Create a list attribute which specifies the type of label to use

    [ /_objdef {firstAttrObj} /type /dict /OBJ pdfmark
     [   {firstAttrObj} <</O /List /ListNumbering /LowerRoman>> /PUT pdfmark
   
    % Create an attribute specifying the writing direction

    [ /_objdef {secondAttrObj} /type /dict /OBJ pdfmark
     [   {secondAttrObj} <</O /Layout /WritingMode /LrTb>> /PUT pdfmark
   
    % Set attribute dict on list

    [ /Obj {firstAttrObj} /StAttr pdfmark
     [ /Obj {secondAttrObj} /StAttr pdfmark
   
     /Helvetica-Oblique findfont 12 scalefont setfont
   
     [ /Subtype /LI /StPNE pdfmark
         [ /Subtype /Lbl /StPNE pdfmark
             [ /StBMC pdfmark
                 48 238 moveto
                 (i ) show
             [ /EMC pdfmark
         [ /StPop pdfmark
         [ /Subtype /LBody /Lang (en-cockney) /StPNE pdfmark
             [ /StBMC pdfmark
                 72 238 moveto
                 (whatcha) show
             [ /EMC pdfmark
         [ /StPop pdfmark
     [ /StPop pdfmark
   
     [ /Subtype /LI /StPNE pdfmark
         [ /Subtype /Lbl /StPNE pdfmark
             [ /StBMC pdfmark
                 48 226 moveto
                 (ii ) show
             [ /EMC pdfmark
         [ /StPop pdfmark
         [ /Subtype /LBody /Lang (fr) /StPNE pdfmark
             [ /StBMC pdfmark
                 72 226 moveto
                 (bon jour) show
             [ /EMC pdfmark
         [ /StPop pdfmark
     [ /StPop pdfmark
   
     [ /StPop pdfmark

    % =================================================================
    % Simple Table Example
    % =================================================================

    % Create a table element

    [ /Subtype /Table /Lang (en-US) /StPNE pdfmark
   

    % Place the frame of the table in an artifact

        [ /Artifact <</Type /Layout /BBox [40 175 340 220] >> /BDC pdfmark
             40 220 moveto 340 220 lineto 340 175 lineto 40 175 lineto closepath
             40 196 moveto 340 196 lineto
             190 220 moveto 190 175 lineto
             stroke
         [ /EMC pdfmark
   

        % Create a table attribute which specifies the type of label to use

        [ /_objdef {tableattrObj} /type /dict /OBJ pdfmark
         [   {tableattrObj} <</O /Layout /Placement /Block /SpaceAfter 10

       /BorderColor [0 0 0]>> /PUT pdfmark
     

    % Attach attribute to table

        [ /Obj {tableattrObj} /StAttr pdfmark
     

    % Create an attribute object with the common settings for each table data cell

        [ /_objdef {tableCellsObj} /type /dict /OBJ pdfmark
         [   {tableCellsObj} <</O /Layout /Width 150 /BorderStyle /Solid

       /BorderThickness 2 /BorderColor [0 0 0]>> /PUT pdfmark
     
    % Add it to the classmap

        [ /CommonTableInfo {widthObj} /StClassMap pdfmark
     
         [ /Subtype /THead /StPNE pdfmark
         [ /Subtype /TR /StPNE pdfmark
             [ /Subtype /TH /Class /CommonTableInfo /StPNE pdfmark
                 [ /StBMC pdfmark
                     48 200 moveto
                     (Item) show
                 [ /EMC pdfmark
             [ /StPop pdfmark
             [ /Subtype /TH /Class /CommonTableInfo /StPNE pdfmark
                 [ /StBMC pdfmark
                     200 200 moveto
                     (Description) show
                 [ /EMC pdfmark
             [ /StPop pdfmark
         [ /StPop pdfmark
         [ /StPop pdfmark
     
         [ /Subtype /TBody /StPNE pdfmark
         [ /Subtype /TR /StPNE pdfmark
             [ /Subtype /TD /Class /CommonTableInfo /StPNE pdfmark
                 [ /StBMC pdfmark
                     48 180 moveto
                     (Thing) show
                 [ /EMC pdfmark
             [ /StPop pdfmark
         
             [ /Subtype /TD /Class /CommonTableInfo /StPNE pdfmark
                 [ /StBMC pdfmark
                     200 180 moveto
                     (Things) show
                 [ /EMC pdfmark
             [ /StPop pdfmark
         [ /StPop pdfmark
         [ /StPop pdfmark
         
     [ /StPop pdfmark
   
   
     [ /StPop pdfmark
   
    % Now that the text is done, let's make the outlines.
    % The first bookmark magnifies 400 percent, while the others go to their
    % line in the text.

    [ /Count 4 /Page 1 /View [/XYZ 216 744 4.0] /Title (Title of Document)
     /OUT pdfmark
     [ /Page 1 /View [/XYZ 0 704 1.0] /Title (First Topic) /OUT pdfmark
     [ /Count -1 /Page 1 /View [/XYZ 0 662 1.0] /Title (Second Topic) /OUT pdfmark
     [ /Page 1 /View [/XYZ 0 610 1.0] /Title (Subtopic of second Topic) /OUT pdfmark
     [ /Page 1 /View [/XYZ 0 530 1.0] /Title (Line Numbered Topic) /OUT pdfmark
     [ /PageMode /UseOutlines /Page 1 /View [/XYZ null null null] /DOCVIEW pdfmark
   
    % And finally the rolemap, with every tag that we have used defined.

    [ /document /Document
         /documenttitle /H
         /p /P
         /emph /Span
         /topic /Div
         /topic2 /Div
         /topichead /H1
         /topichead2 /H2
         /StRoleMap pdfmark
   
     showpage
     (%%[Page: 1]%%) =
