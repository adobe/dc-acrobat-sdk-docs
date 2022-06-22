******************************************************
Reading PDF Files Through the DOM Interface
******************************************************

Acrobat 6.0 and later defines a document object model (DOM) that provides more complete access to the document structure than the MSAA interface. The Accessibility plug-in defines and exports five COM interfaces in ``AcrobatAccess.lib`` that expose Acrobat's document hierarchy:

-  ``IPDDomNode`` defines methods that apply to all elements of the document hierarchy.
-  ``IPDDomDocument`` interface is exported by the root object for the page or document.
-  ``IPDDomNodeExt`` interface is exported by every object that exports ``IPDDomNode`` .
-  ``IPDDomElement`` defines additional methods that apply only to structure elements.
-  ``IPDDomWord`` defines additional methods that apply only to individual words in the document.
-  ``IPDDomGroupInfo`` defines an additional method that applies to radio buttons, list boxes, and combo boxes.

Clients of these interfaces must include the files ``AcrobatAccess.h`` , ``AcrobatAccess_i.c`` and ``IPDDom.h`` .

.. raw:: html

   <a name="17539"></a>

IPDDomNode data types
=====================

This section describes the data types for the PDF DOM hierarchy.

CPDDomNodeType
--------------

Defines the type of a node in the PDF DOM hierarchy returned by ``GetType`` .



::

   typedef enum {
      CPDDomNode_Document = 1,
      CPDDomNode_Page = 2,
      CPDDomNode_StructElement = 3,
      CPDDomNode_Text = 4,
      CPDDomNode_Word = 5,
      CPDDomNode_Char = 6,
      CPDDomNode_Graphic = 7,
      CPDDomNode_Link = 8,
      CPDDomNode_PushButtonField = 9,
      CPDDomNode_TextEditField =10,
      CPDDomNode_StaticTextField =11,
      CPDDomNode_ListboxField =12,
      CPDDomNode_ComboboxField =13,
      CPDDomNode_CheckboxField =14,
      CPDDomNode_RadioButtonField =15,
      PDDomNode_SignatureField =16,
      CPDDomNode_OtherField =17,
      CPDDomNode_Comment =18,
      CPDDomNode_TextComment =19,
      CPDDomNode_Other =20,
      CPDDomNode_LineSeg =21,
      CPDDomNode_WordSeg =22
   } CPDDomNodeType;

.. raw:: html

   <a name="51223"></a>

PDDom_FontStyle
---------------

Constants for font styles returned by ``GetFontInfo`` .



::

   typedef enum {
      PDDOM_FONTATTR_ITALIC = 0x1,
      PDDOM_FONTATTR_SMALLCAP = 0x2,
      PDDOM_FONTATTR_ALLCAP = 0x4,
      PDDOM_FONTATTR_SCRIPT = 0x8,
      PDDOM_FONTATTR_BOLD = 0x10,
      PDDOM_FONTATTR_LIGHT = 0x20
   } PDDOM_FontStyle;

.. raw:: html

   <a name="39567"></a>

FontInfoState
-------------

Constants for font status returned by ``GetFontInfo`` .



::

   typedef enum {
      FontInfo_Unchecked =1,
      FontInfo_NoInfo =2,
      FontInfo_MixedInfo =3,
      FontInfo_Valid =4
   } FontInfoState;

DocState
--------

Constants for document status returned by ``GetDocInfo`` in the IPDDomDocument interface.



::

   enum DocState {
      DocState_OK =0,
      DocState_Protected =1,
      DocState_Empty =2,
      DocState_Unavailable =3
   };

NodeRelationship
----------------

Constants returned by ``Relationship`` in the IPDDomNodeExt interface.

::

   enum NodeRelationship {
      NodeRelationship_Descendant =0,
      NodeRelationship_Ancestor =1,
      NodeRelationship_Before =2,
      NodeRelationship_After =3
      NodeRelationship_Equal =4,
      NodeRelationship_None =5
   };

.. raw:: html

   <a name="16187"></a>

IPDDomNode methods
==================

``IPDDomNode`` defines methods that apply to all elements of the document hierarchy.

.. raw:: html

   <a name="33811"></a>

Words and lines in text
-----------------------

An ``IPDDomNode`` that represents a text node has the role ``CPDDomNode_Text`` . By default, the children of text nodes are word nodes. To get the word children of a text node, call the ``IPDomNode`` method ``GetChild`` . An ``IPDDomNode`` that represents a word has the role ``CPDDomNode_Word`` .

.. note::

   When a word is hyphenated and thus appears on two lines, each segment of the word is returned as a child that has the role ``CPDDom_WordSeg`` .

Text can also be thought of as having lines as children. To get the line children of a text node, call the ``IPDomNode`` method ``GetTextInLines`` . This method returns a new object for the text node. Subsequently, calling ``getChild`` on this object returns lines as children. An ``IPDDomNode`` that represents a line has the role ``CPDDomNode_LineSeg`` . The children of that line node will be the words in that line.

GetParent
---------

``ppDispParent`` returns the ``IPDDomNode`` for the parent of this element if there ís a parent element in the DOM hierarchy, or ``NULL`` if this element is the root element of the hierarchy.



::

   LRESULT GetParent (IDispatch **ppDispParent)

GetType
-------

``nodeType`` returns the ``CPDDomNodeType`` of this element.



::

   LRESULT GetType (long *nodeType)

.. raw:: html

   <a name="76623"></a>

GetChild
--------

``ppDispChild`` returns the ``IPDDomNode`` for the child of this element at position ``index`` , or ``NULL`` if there is no child at position ``index`` .

For a text node, this returns child words; see `Words and lines in text <Access_DOM.html#33811>`__.



::

   LRESULT GetChild (ASInt32 index,  IDispatch **ppDispChild)

GetChildCount
-------------

``pCountChildren`` returns the number of children of this element.



::

   LRESULT GetChildCount (long *pCountChildren)

GetName
-------

``pszName`` returns the name of this element.

-  For individual words, this is ``NULL`` .
-  For form fields, it is the short description associated with the field.
-  For comments, it is a combination of the comment type and subject (if any).



::

   LRESULT GetName (BSTR *pszName)

GetValue
--------

``pszValue`` returns the value of this element.

-  For individual words, this is the word itself.
-  For form fields, it is the current text content of the field.
-  For links, it is a description of the associated action.
-  For comments, it is the contents.
-  For a signature field, it is the name of the signer and the date signed.



::

   LRESULT GetValue (BSTR *pszValue)

IsSame
------

If ``pNode`` refers to the same node as this element, ``isSame`` returns ``true`` .



::

   LRESULT IsSame (IPDDomNode *pNode,  BOOL *isSame)

GetTextContent
--------------

``pszText`` returns the value of all text in the document subtree rooted at this element. Alternate text, actual text, and expansion attributes are included and may override text within the document.



::

   LRESULT GetTextContent (BSTR *pszText)

GetFontInfo
-----------

These values describe the font characteristics for the text content of this element.

-  ``fontStatus`` returns a value of type ``FontInfoState`` .

   -  If value is ``FontInfo_NoInfo`` , the text is not rendered, so it has no font characteristics. For example, alternate text has no font characteristics.
   -  If value is ``FontInfo_Valid`` , the rest of the values describe the font characteristics for all of the text in the subtree. That is, each word of the text either has these characteristics or has no font characteristics.
   -  If value is ``FontInfo_MixedInfo`` , different words of the text have different font characteristics, and the document subtree must be examined more closely to determine which text has which font characteristics.

-  ``pszName`` returns the name of the font.
-  ``fontSize`` returns the point size.
-  ``fontAttr`` returns the set of ``PDDom_FontStyle`` values.

``red, green, blue`` return the RGB components of the color of the text. Each component is a value between 0 and 1.



::

   LRESULT GetFontInfo (long* fontStatus,  BSTR* pszName,  float* fontSize,  long* fontAttr, float* red,  float* green,  float* blue)

GetLocation
-----------

Returns the screen coordinates of the upper left corner, width, and height of the content of the element. Note that this is not exactly the same as the bounding box. If the element spans multiple pages, this method returns only the location on the first visible page. If none of the element's contents are visible, this method returns an empty location.



::

   LRESULT GetLocation (long *pxLeft, ong *pyTop,  long *pcxWidth,  long *pcyHeight)

GetFromID
---------

``ppDispNode`` returns the ``IPDDomNode`` for the element in the same document with the matching ID attribute, or ``NULL`` if there is no such element.

The ``id`` value is not the same as the UID returned by ``IAccID`` in the MSAA interface; it is an optional attribute of the PDF file itself, as returned by ``GetID`` in ``IPDDomElement`` .



::

   LRESULT GetFromID (BSTR id,  IDispatch **ppDispNode)

GetIAccessible
--------------

Returns the MSAA ``IAccessible`` element corresponding to this element. (Acrobat exports an MSAA interface to the document, as well as a DOM interface.)

Not all DOM elements have corresponding MSAA elements, because the DOM tree breaks the content down into much smaller pieces. If ``ppIAccessible`` is ``NULL`` , search for an ancestor with a non-``NULL`` value for ``GetIAccessible`` to find the corresponding MSAA interface.

Use the method ``get_PDDomNode`` to find the ``IPDDomNode`` corresponding to a PDF document ``IAccessible`` object.



::

   LRESULT GetIAccessible (IDispatch **ppIAccessible)

ScrollTo
--------

Makes the contents of the node visible. If the contents cover more than one page, only the contents on the first page are made visible. If the entire contents do not fit, the upper left portion is shown.



::

   LRESULT ScrollTo()

.. raw:: html

   <a name="54271"></a>

GetTextInLines
--------------

``ppDispTextLines`` returns an ``IPDDomNode`` whose children (obtained by calling ``GetChild`` ) have the role ``CPDDomNode_LineSeg`` ; see `Words and lines in text <Access_DOM.html#33811>`__.

``visibleOnly`` controls whether the children include only lines that contain at least some visible text.

If the role the node is not ``CPDDomNode_Text`` , this method returns ``E_FAIL`` .



::

   LRESULT GetTextInLines (BOOL visibleOnly,  IDispatch** ppDispTextLines)


.. raw:: html

   <a name="70643"></a>

IPDDomNodeExt methods
=====================

The ``IPDDomNodeExt`` interface is exported by every object that exports ``IPDDomNode`` . For Acrobat 7.0 and later, the following methods are available from all objects.

Navigate
--------

Traverses to another user interface element within a container and retrieves the object. ``navDir`` indicates which type of navigation is desired, and the node in that direction is returned in ``next`` . This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT Navigate(
   long navDir,
   IPDDomNode* next);

ScrollToEx
----------

Determines where to scroll when the item is too large to fit in the window. If both parameters are ``true`` , this method is equivalent to ``ScrollTo`` . This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT ScrollToEx(
   BOOL favorLeft,
   BOOL favorTop);

SetFocus
--------

Sets the focus to this node, if it can take focus. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT SetFocus();

GetState
--------

Returns a set of state flags identical to those returned by ``get_accState`` for the corresponding ``IAccessible`` object. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT GetState(
   long* state);

GetIndex
--------

Returns the child index of this node in its parent. The root node returns -1. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT GetIndex(
   long* pIndex);

GetPageNum
----------

Returns the first and last pages on which the node appears. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT GetPageNum(
   long* firstPage,
   long* lastPage);

DoDefaultAction
---------------

Executes the default action for a node. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT DoDefaultAction();

Relationship
------------

Returns the relationship of the ``node`` parameter to this node. The value is of type ``NodeRelationship`` , defined in IPDDom.h. This method is defined in the ``IPDDomNodeExt`` interface on any node.



::

   HRESULT Relationship(
   PDDomNode* node,
   long* pRel);


IPDDomDocument methods
======================

The root object for the page or document exports the ``IPDDomDocument`` interface. For Acrobat 7.0 and later, the following methods are available from the root object.

SetCaret
--------

Sets the caret to the specified index in the word. If the index is 0, it is placed at the beginning of the word.



::

   HRESULT SetCaret(
   IPDDomWord* node, 
   long index);

GetCaret
--------

Returns the screen location of the caret, the node containing the caret, and the zero-based index of the caret within the node. The node may be a word node or a form field. If there is no active caret, the call returns ``S_FALSE`` .



::

   HRESULT GetCaret(
   long* pxLeft,
   long* pyTop,
   long* pcxWidth,
   long* pcyHeight,
   IPDDomNode** node,
   long* index);

NextFocusNode
-------------

Gets the next or previous focusable ``IPDDomNode`` . If ``forward`` is ``true`` , it gets the next focusable node. Returns ``NULL`` if there is not another focusable node in the selected direction. Searches only the current DOM tree, which means that in page mode it will only return results within the page tree instead of the entire document.



::

   HRESULT NextFocusNode(
   BOOL forward,
   IPDDomNode* node);

GetFocusNode
------------

Returns the ``IPDDomNode`` with focus. The node is set to ``NULL`` if the focus is on the document (rather than an annotation) or if the focus is not within the document.



::

   HRESULT GetFocusNode(
   IPDDomNode* node);

SelectText
----------

Sets the text selection by identifying the start and end locations of the selection.



::

   HRESULT SelectText(
   IPDDomWord* startNode,
   long startIndex,
   IPDDomWord* endNode,
   long endIndex);

GetTextSelection
----------------

Retrieves the value of the selected text.



::

   HRESULT GetTextSelection(
   BSTR* selection);

GetSelectionBounds
------------------

**Not implemented** . This procedure always returns ``S_FALSE`` .



::

   HRESULT GetSelectionBounds(
   IPDDomWord** start,
   long* startIndex,
   IPDDomWord** stop,
   long* stopIndex);

GetDocInfo
----------

Returns the full pathname of the file, how many pages it contains, and the range of pages that are at least partially visible. The ``status`` indicates whether there are issues with this document or page, such as access controls prohibiting access or an apparently empty page or document. If ``lang`` is not ``NULL`` , it is the default language used in the document.

.. note::

   The ``GetDocInfo`` and ``GoToPage`` methods use different numbering systems. The page numbers returned as ``firstVisiblePage`` and ``lastVisiblePage`` by ``GetDocInfo`` are based on page 1 as the first page of the document. However, the ``GoToPage`` method treats page 0 as the first page of the document. Therefore, you must adjust accordingly when passing the value of ``pageNum`` to ``GoToPage`` .



::

   HRESULT GetDocInfo(
   BSTR* fileName,
   long* nPages,
   long* firstVisiblePage,
   long* lastVisiblePage,
   long* status,
   BSTR* lang);

GoToPage
--------

Positions the document so that the requested page is visible.

.. note::

   The ``GetDocInfo`` and ``GoToPage`` methods use different numbering systems. The page numbers returned as ``firstVisiblePage`` and ``lastVisiblePage`` by ``GetDocInfo`` are based on page 1 as the first page of the document. However, the ``GoToPage`` method treats page 0 as the first page of the document. Therefore, you must adjust accordingly when passing the value of ``pageNum`` to ``GoToPage`` .



::

   HRESULT GoToPage(
   long pageNum);


.. raw:: html

   <a name="99257"></a>

IPDDomElement Methods
=====================

``IPDDomElement`` defines additional methods that apply only to structure elements.

GetTagName
----------

``pszTagName`` returns the structural element tag for this element.



::

   LRESULT GetTagName (BSTR *pszTagName)

GetStdName
----------

``pszStdName`` returns the standard role for this element. The standard roles are:

::

   Document, Part, Art, Sect, Div, BlockQuote, Caption, TOC, TOCI, Index, NonStruct, Private, Table, TR, TH, TD, L, LI, Lbl, LBody, P, H, H1, H2, H3, H4, H5, H6, Span, Quote, Note, Reference, BibEntry, Code, Link, Figure, Formula,Form

For details, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__.



::

   LRESULT GetStdName (BSTR *pszStdName)

.. raw:: html

   <a name="85767"></a>

GetID
-----

``pszId`` returns the ID string associated with this element, if it has been defined.

The ``id`` value is not the same as the UID returned by ``IAccID`` in the MSAA interface; it is an optional attribute of the PDF file itself. For details, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. .



::

   LRESULT GetID (BSTR *pszId)

GetAttribute
------------

``pszAttrVal`` returns the value of the specified attribute for specified owner for this element. Owner can be ``NULL`` or an empty string.

If the element does not have the requested attribute, the method returns ``S_FALSE`` .

The set of owners and attributes is open-ended, but the standard structure attributes for Tagged PDF are defined in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. See the table below for accessibility attributes.



::

   LRESULT GetAttribute (BSTR pszAttr, BSTR pszOwner,  BSTR *pszAttrVal)

Accessibility attributes
^^^^^^^^^^^^^^^^^^^^^^^^

Some of the attributes that are useful for assistive technology are listed here. For a complete list, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. .


 

+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
| Attribute             | Owner                 | Value                                                                                                                  |
+=======================+=======================+========================================================================================================================+
|                       |                       | ISO language code for text within this element.                                                                        |
|                       |                       |                                                                                                                        |
|    Lang               |                       |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Text containing an equivalent replacement for the content of this element.                                             |
|                       |                       |                                                                                                                        |
|    Alt                |                       | Automatically incorporated into the value or text content of the element or any of its ancestor elements.              |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Text which is an exact replacement for the content of this element, for example, the text of an illuminated character. |
|                       |                       |                                                                                                                        |
|    ActualText         |                       | Automatically incorporated into the value or text content of the element or any of its ancestor elements.              |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | The expanded form of the element's content, when it is an abbreviation or acronym.                                     |
|                       |                       |                                                                                                                        |
|    E                  |                       |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Number of rows spanned by the table cell.                                                                              |
|                       |                       |                                                                                                                        |
|    RowSpan            |    Table              |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Number of columns spanned by the table cell.                                                                           |
|                       |                       |                                                                                                                        |
|    ColSpan            |    Table              |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Array of IDs of Table Header (TH) cells associated with this table cell (TD or TH).                                    |
|                       |                       |                                                                                                                        |
|    Headers            |    Table              |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | The scope of this table header cell: ``Row`` , ``Column`` , or ``Both`` .                                              |
|                       |                       |                                                                                                                        |
|    Scope              |    Table              |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+
|                       |                       | Text that describes the table's purpose and structure, for use in non-visual rendering such as speech or Braille.      |
|                       |                       |                                                                                                                        |
|    Summary            |    Table              |                                                                                                                        |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="96578"></a>

IPDDomWord methods
==================

``IPDDomWord`` defines additional methods that apply only to individual words in the document.

LastWordOfLine
--------------

If this is the last word in a line on the page, ``isLast`` returns ``true`` . Use this function to determine where the line breaks occur in text. Note that line breaks are inserted into the text content for elements.



::

   LRESULT LastWordOfLine (BOOL *isLast)


IPDDomGroupInfo method
======================

``IPDDomGroupInfo`` defines an additional method that applies to radio buttons, list boxes, and combo boxes.

GetGroupPosition
----------------

``groupSize`` returns the number of items in the radio button set, the list, or the combo box drop-down list. ``position`` returns the 1-based index of the node in that set of values. That is, a value of 1 for ``position`` indicates the first value in the set.



::

   GetGroupPosition (long *groupSize, long *position)

