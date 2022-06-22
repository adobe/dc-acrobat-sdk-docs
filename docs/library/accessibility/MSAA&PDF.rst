******************************************************
Reading PDF Files Through MSAA
******************************************************

Microsoft Active Accessibility defines the ``IAccessible`` interface to applications. This interface consists of a set of methods and properties that are defined in the MSAA documentation.

Acrobat implements and exports a set of ``IAccessible`` objects of different types to represent a document, its pages, and other elements of the document hierarchy.

An MSAA client can retrieve an ``IAccessible`` object for a user interface element in the following four ways:

-  Set a ``WinEvent`` hook, receive a notification, and call ``AccessibleObjectFromEvent`` to retrieve an ``IAccessible`` interface pointer for the user interface element that generated the event. See `Handling event notifications <AccessOverview.html#21082>`__ for details.
-  Call ``AccessibleObjectFromWindow`` and pass the user interface element's window handle. Each open document in Acrobat is associated with its own window handle.
-  Call ``AccessibleObjectFromPoint`` and pass a screen location that lies within the user interface element's bounding rectangle.
-  Call an ``IAccessible`` method such as ``accNavigate`` or ``get_accParent`` to move to a different ``IAccessible`` object.

Acrobat implementation of IAccessible objects
=============================================

Each type of ``IAccessible`` object has a different implementation of the standard methods:

-  Links, tables, and form fields are explicitly identified through MSAA.
-  Headers, paragraphs, and other elements of document structure are only represented implicitly.

.. note::

   These elements are explicit in the DOM interface; see `Reading PDF Files Through the DOM Interface <Access_DOM.html#30124>`__.

For each document, Acrobat builds a tree of ``IAccessible`` objects representing the document and its internal structure. Because there is just one window handle associated with the document, Acrobat posts all event notifications to that window. In each notification, a ``childID`` identifies an ``IAccessible`` object for an element in the document. For example, when the user tabs to the next link, the ``EVENT_OBJECT_FOCUS`` notification includes a ``childID`` that is the UID of the link object. See `Handling event notifications <AccessOverview.html#21082>`__.

The following interfaces are exported from the ``IAccessible`` object by Acrobat:

.. raw:: html

   <a name="10950"></a>

IGetPDDomNode interface
=======================

This interface exports one function, ``get_PDDomNode`` , which returns a DOM object. The methods described in `Reading PDF Files Through the DOM Interface <Access_DOM.html#30124>`__" can then be used on this object.

get_PDDomNode
-------------

Returns a DOM object. For more information, see `Reading PDF Files Through the DOM Interface <Access_DOM.html#30124>`__.

``varID`` is the same as for the other MSAA methods (see `Descriptive properties and methods <MSAA&PDF.html#89440>`__)



::

   HRESULT get_PDDomNode(
   VARIANT varID, 
   IPDDomNode **ppDispDoc);


ISelectText interface
=====================

In Acrobat 7.0, the ``ISelectText`` interface is an interface exported by the ``IAccessible`` objects. It exports one function, ``selectText`` , that sets the text selection, but specifies the end location via ``IAccessible`` objects instead of DOM nodes. The ``ISelectText`` interface is available from the root ``IAccessible`` object.

selectText
----------

Sets the text selection. ``startAccID`` and ``endAccID`` are the ``accID`` identifiers for the starting and ending ``IAccessible`` elements, and ``startIndex`` and ``endIndex`` are zero-based indexes into the text of those ``IAccessible`` objects.



::

   LRESULT selectText(
   long startAccID,
   long startIndex,
   long endAccID,
   long endIndex);


.. raw:: html

   <a name="99842"></a>

Identifying IAccessible objects in a document
=============================================

You can identify the type of an ``IAccessible`` object by using the ``get_accRole`` method to get its Role attribute. However, you must also distinguish individual objects from others of the same type. You can do this by means of a unique identifier (UID) defined by Acrobat.

The ``IAccessible`` objects defined by Acrobat export a private interface, ``IAccID`` , defined in the file ``IAccID.h`` . It contains one function, ``get_accID`` . Use this UID to determine when two ``IAccessible`` objects refer to the same element in the document.

When a value-change notification or a focus notification has a non-zero ``childID`` , the value of ``childID`` is the UID of one of the objects on the page or document. Use the UID to uniquely identify the object that is the target of the notification.

get_accID
---------

Returns an identifier that is unique within the open document or page.


::

   HRESULT get_accID(long *id);

**Parameters**

+-----------------------------------+------------------------------------------------------------------------------------------------------------+
|                                   | (Filled by the method) Returns the unique identifier of the ``IAccessible`` object. Must not be ``NULL`` . |
|                                   |                                                                                                            |
|    id                             |                                                                                                            |
+-----------------------------------+------------------------------------------------------------------------------------------------------------+

**Returns**

Always returns ``s_ok`` .

**Example**

::

     IAccID *pID;
      long uid;
      /* query for the IAccID interface */
      RESULT hr = pObj->QueryInterface (IID_IAccID, 
                                              reinterpret_cast<void **>(&pID));
      if (!FAILED(hr)) 
      {
              pID->get_accID(&uid);
              pID->Release();
      }

.. note::

   If you obtained the ``IAccessible`` object via a call to ``AccessibleObjectFrom`` XXX, it is not possible to query directly for this private interface. In that case, you must use this alternate code:

::

     IServiceProvider *sp = NULL;
      hr = n->QueryInterface(IID_IServiceProvider, (LPVOID*)&sp);
      if (SUCCEEDED(hr) && sp) {
              hr = sp->QueryService(SID_AccID, IID_IAccID, (LPVOID*)&pID);
              sp->Release();
      }


.. raw:: html

   <a name="29922"></a>

IAccessible method summary
==========================

This section provides a brief syntax summary of the ``IAccessible`` interface methods as defined by MSAA. All methods return ``HRESULT`` . The methods and properties are organized into the following groups:

-  `Navigation and hierarchy <MSAA&PDF.html#73526>`__
-  `Descriptive properties and methods <MSAA&PDF.html#89440>`__
-  `Selection and focus <MSAA&PDF.html#22290>`__
-  `Spatial mapping <MSAA&PDF.html#57514>`__

.. raw:: html

   <a name="73526"></a>

Navigation and hierarchy
========================

This section provides information on the APIs used in navigation and to traverse the hierarchy.

accNavigate
-----------

Traverses to another user interface element within a container and retrieves the object. All visual objects support this method.



::

   accNavigate (long navDir, VARIANT varStart, VARIANT* pvarEnd);

**Properties**

.. _section-1:


 

+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The direction to navigate, in spatial order or logical order. These are the spatial navigation constants:                                                                                                                                                                                      |
|                                   |                                                                                                                                                                                                                                                                                                |
|    navDir                         |                                                                                                                                                                                                                                                                                                |
|     [in]                          |                                                                                                                                                                                                                                                                                                |
|                                   |      NAVDIR_UP                                                                                                                                                                                                                                                                                 |
|                                   |       NAVDIR_DOWN                                                                                                                                                                                                                                                                              |
|                                   |       NAVDIR_RIGHT                                                                                                                                                                                                                                                                             |
|                                   |       NAVDIR_LEFT                                                                                                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                                                                                                |
|                                   | These are the logical navigation constants:                                                                                                                                                                                                                                                    |
|                                   |                                                                                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                                                                |
|                                   |      NAVDIR_FIRSTCHILD                                                                                                                                                                                                                                                                         |
|                                   |       NAVDIR_LASTCHILD                                                                                                                                                                                                                                                                         |
|                                   |       NAVDIR_NEXT                                                                                                                                                                                                                                                                              |
|                                   |       NAVDIR_PREVIOUS                                                                                                                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                                                                                                                |
|                                   | -  All ``accNavigate`` methods in PDF objects support the logical navigation directions. Only a few (PDF Structure Element, PDF ComboBox Form Field, and PDF ListBox Form Field) support the spatial navigation directions. Spatial navigation is only supported where it is explicitly noted. |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to start navigation at the object itself, a child ID to start at one of the object's child elements.                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                                                                                                                |
|    varStart                       |                                                                                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                                                                |
|    [in]                           |                                                                                                                                                                                                                                                                                                |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a structure that contains information about the destination object. See MSAA documentation for details.                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                                                                |
|    pvarEnd                        |                                                                                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                                                                |
|    [out, retval]                  |                                                                                                                                                                                                                                                                                                |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accChild
------------

Retrieves an ``IDispatch`` interface pointer for the specified child, if one exists. All objects support this property.



::

   get_accChild (VARIANT varChildID, IDispatch** ppdispChild);

**Properties**

.. _section-2:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child ID for which to obtain a pointer. This can be a UID or the 1-based index of the child to retrieve. |
|                                   |                                                                                                              |
|    varChildID                     |                                                                                                              |
|     [in]                          |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the address of the child's ``IDispatch`` interface.                                                  |
|                                   |                                                                                                              |
|    ppdispChild                    |                                                                                                              |
|                                   |                                                                                                              |
|    [out, retval]                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accChildCount
-----------------

Retrieves the number of children that belong to this object. All objects support this property.



::

   get_accChildCount (long* pcountChildren);

**Properties**

.. _section-3:


 

+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the number of children. The children are accessible objects or child elements. If the object has no children, this value is zero. |
|                                   |                                                                                                                                           |
|    pcountChildren                 |                                                                                                                                           |
|                                   |                                                                                                                                           |
|    [out, retval]                  |                                                                                                                                           |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accParent
-------------

Retrieves an ``IDispatch`` interface pointer for the parent of this object. All objects support this property.



::

   get_accParent (IDispatch** ppdispParent);

**Properties**

.. _section-4:


 

+-----------------------------------+--------------------------------------------------------------+
|                                   | Returns the address of the parent's ``IDispatch`` interface. |
|                                   |                                                              |
|    ppdispParent                   |                                                              |
|                                   |                                                              |
|    [out, retval]                  |                                                              |
+-----------------------------------+--------------------------------------------------------------+

**Returns**

::

   HRESULT



.. raw:: html

   <a name="89440"></a>

Descriptive properties and methods
==================================

This section provides information on the descriptive APIs.

accDoDefaultAction
------------------

Performs the object's default action. Not all objects have a default action.



::

   accDoDefaultAction (VARIANT varID);

**Properties**

.. _section-5:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to perform the action for the object itself, a child ID to perform the action for one of the object's child elements. |
|                                   |                                                                                                                                        |
|    varID                          |                                                                                                                                        |
|     [in]                          |                                                                                                                                        |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accDefaultAction
--------------------

Retrieves a string that describes the object's default action. Not all objects have a default action.



::

   get_accDefaultAction(VARIANT varID, BSTR* pszDefaultAction);

**Properties**

.. _section-6:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a localized string that describes the default action for the object, or ``NULL`` if this object has no default action.   |
|                                   |                                                                                                                                  |
|    pszDefaultAction               |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accDescription
------------------

Retrieves a string that describes the visual appearance of the object. Not all objects have a description.



::

   get_accDescription (VARIANT varID, BSTR* pszDescription);

**Properties**

.. _section-7:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a localized string that describes the object, or ``NULL`` if this object has no description.                             |
|                                   |                                                                                                                                  |
|    pszDescription                 |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accName
-----------

Retrieves the name of the object. All objects have a name.



::

   get_accName (VARIANT varID, BSTR* pszName );

**Properties**

.. _section-8:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a localized string that contains the name of the object.                                                                 |
|                                   |                                                                                                                                  |
|    pszName                        |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accRole
-----------

Retrieves the role of the object. All objects have a role.



::

   get_accRole (VARIANT varID, VARIANT* pvarRole );

**Properties**

.. _section-9:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a structure that contain an object role constant in its ``IVal`` member.                                                 |
|                                   |                                                                                                                                  |
|    pvarRole                       |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accState
------------

Retrieves the state of the object. All objects have a state.



::

   get_accState (VARIANT varID, VARIANT* pvarState );

**Properties**

.. _section-10:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a structure that contain an object state constant in its ``IVal`` member.                                                |
|                                   |                                                                                                                                  |
|    pvarRole                       |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accValue
------------

Retrieves the value of the object. Not all objects have a value.



::

   get_accValue (VARIANT varID, BSTR* pszValue );

**Properties**

.. _section-11:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements. |
|                                   |                                                                                                                                  |
|    varID                          |                                                                                                                                  |
|     [in]                          |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a localized string that contains the current value of the object.                                                        |
|                                   |                                                                                                                                  |
|    pszValue                       |                                                                                                                                  |
|                                   |                                                                                                                                  |
|    [out, retval]                  |                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT



.. raw:: html

   <a name="22290"></a>

Selection and focus
===================

This section provides information on the selection and focus APIs.

accSelect
---------

Modifies the selection or moves the keyboard focus of the object. All objects that support selection or receive the keyboard focus support this method.



::

   accSelect (long flagsSelect, VARIANT varID);

**Properties**

.. _section-12:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                   | Flags that control how the selection or focus operation is performed. A logical OR of these ``SELFLAG`` constants: |
|                                   |                                                                                                                    |
|    flagsSelect                    |                                                                                                                    |
|     [in]                          |                                                                                                                    |
|                                   |      SELFLAG_NONE                                                                                                  |
|                                   |       SELFLAG_TAKEFOCUS                                                                                            |
|                                   |       SELFLAG_TAKESELECTION                                                                                        |
|                                   |       SELFLAG_EXTENDSELECTION                                                                                      |
|                                   |       SELFLAG_ADDSELECTION                                                                                         |
|                                   |       SELFLAG_REMOVESELECTION                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to select the object itself, a child ID to select one of the object's child elements.             |
|                                   |                                                                                                                    |
|    varID                          |                                                                                                                    |
|     [in]                          |                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accFocus
------------

Retrieves the object that has the keyboard focus. All objects that receive the keyboard focus support this property.



::

   get_accFocus (VARIANT* pvarID);

**Properties**

.. _section-13:


 

+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the address of a ``VARIANT`` structure that contains information about the object that has the focus. See MSAA documentation for details. |
|                                   |                                                                                                                                                   |
|    pvarID                         |                                                                                                                                                   |
|                                   |                                                                                                                                                   |
|    [out, retval]                  |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


get_accSelection
----------------

Retrieves the selected children of the object. All objects that support selection support this property.



::

   get_accSelection (VARIANT* pvarChildren);

**Properties**

.. _section-14:


 

+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the address of a ``VARIANT`` structure that contains information about the selected children. See the MSAA documentation for details. |
|                                   |                                                                                                                                               |
|    pvarChildren                   |                                                                                                                                               |
|                                   |                                                                                                                                               |
|    [out, retval]                  |                                                                                                                                               |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT



.. raw:: html

   <a name="57514"></a>

Spatial mapping
===============

accLocation
-----------

Retrieves the object's current screen location. All visual objects support this method.



::

   accLocation (long* pxLeft, long* pyTop, long* pcxWidth, long* pcyHeight, VARIANT varID );

**Properties**

.. _section-15:


 

+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Return the x and y screen coordinates of the upper-left boundary of the object's location. (The origin is the upper left corner of the screen.) |
|                                   |                                                                                                                                                 |
|    pxLeft, pxTop                  |                                                                                                                                                 |
|    [out]                          |                                                                                                                                                 |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Return the object's width and height in pixels.                                                                                                 |
|                                   |                                                                                                                                                 |
|    pxWidth, pxHeight              |                                                                                                                                                 |
|    [in]                           |                                                                                                                                                 |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | ``CHILDID_SELF`` to get information for the object itself, a child ID to get information for one of the object's child elements.                |
|                                   |                                                                                                                                                 |
|    varID                          |                                                                                                                                                 |
|     [in]                          |                                                                                                                                                 |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT


accHitTest
----------

Retrieves the object at a specific screen location. All visual objects support this method.



::

   accHitTest (long, long, VARIANT* pvarID);

**Properties**

.. _section-16:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The x and y screen coordinates of the point to test. (The origin is the upper left corner of the screen.)                                                                                                                                                                                                                                                                                                    |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                                              |
|    pxLeft, pxTop                  |                                                                                                                                                                                                                                                                                                                                                                                                              |
|    [in]                           |                                                                                                                                                                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Address of a ``VARIANT`` structure that identifies the object at the specified point. The information returned depends on the location of the specified point in relation to the object whose ``accHitTest`` method is being called. You can use this method to determine whether the object at that point is a child of the object for which the method is called. For details, see the MSAA documentation. |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                                              |
|    pvarID                         | -  For PDF objects, hit testing has been implemented in a very basic way; it does not identify the boundaries of the object itself with fine granularity, but reports whether or not the tested location is within the bounding box of an element or subtree.                                                                                                                                                |
|     [out, retval]                 |                                                                                                                                                                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

::

   HRESULT



.. raw:: html

   <a name="88342"></a>

IAccessible object types for PDF
================================

This section describes the MSAA ``IAccessible`` object types that are defined to represent PDF documents and their elements. For each object, its methods are listed along with notes on how the implementation is specific to the object type.

.. note::

   Methods that are not listed are not implemented for a given object type.

The objects are:

-  `PDF Document <MSAA&PDF.html#39396>`__
-  `PDF Page <MSAA&PDF.html#89992>`__
-  `PDF Protected Document <MSAA&PDF.html#72837>`__
-  `Empty PDF Document <MSAA&PDF.html#10863>`__
-  `PDF Structure Element <MSAA&PDF.html#77828>`__
-  `PDF Content Element <MSAA&PDF.html#23328>`__
-  `PDF Comment <MSAA&PDF.html#22500>`__
-  `PDF Link <MSAA&PDF.html#55866>`__
-  `PDF Text Form Field <MSAA&PDF.html#40546>`__
-  `PDF Button Form Field <MSAA&PDF.html#91493>`__
-  `PDF CheckBox Form Field <MSAA&PDF.html#13511>`__
-  `PDF RadioButton Form Field <MSAA&PDF.html#19394>`__
-  `PDF ComboBox Form Field <MSAA&PDF.html#25792>`__
-  `PDF List Box Form Field <MSAA&PDF.html#20747>`__
-  `PDF Digital Signature Form Field <MSAA&PDF.html#91488>`__
-  `PDF Caret <MSAA&PDF.html#49405>`__

The following are some general notes:

-  PDF form fields generally correspond closely to standard user interface elements described in the MSAA SDK document. The ``IAccessible`` objects of form fields attempt to match the behavior described in Appendix A, "Supported User Interface Elements," of the MSAA document. An exception is the PDF combo box, which has a much simpler structure.
-  Form fields, links, and comments, as well as the document as a whole, can take keyboard focus. Subparts of the document (sections, paragraphs, and so on) cannot take focus.
-  A document's contents may be only partially visible on the screen. The ``get_accLocation`` method for a given object returns the screen location of the visible part of the object only. You can use this method to determine which portions of the content are visible.

.. raw:: html

   <a name="39396"></a>

PDF Document
------------

Represents the contents of an entire PDF document. The subtree of ``IAccessible`` objects beneath the PDF Document object reflects the logical structure of the document.

.. note::

   Content that is not part of the logical structure, such as page headers and footers, is not presented through the MSAA interface.

.. _section-17:


 

+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                                |
+===================================+=====================================================================================================================================================================================+
|                                   | Returns the object at a given location if the location is within the document's bounding box.                                                                                       |
|                                   |                                                                                                                                                                                     |
|    accHitTest                     |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the document.                                                                                                                 |
|                                   |                                                                                                                                                                                     |
|    accLocation                    |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                                                        |
|                                   |                                                                                                                                                                                     |
|    accNavigate                    |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | For ``SELFLAG_TAKEFOCUS`` , the focus is set to the window containing the document and the document is positioned at the beginning. The other ``SELFLAG`` values are not supported. |
|                                   |                                                                                                                                                                                     |
|    accSelect                      |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a child object.                                                                                                                                                             |
|                                   |                                                                                                                                                                                     |
|    get_accChild                   |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the number of child objects beneath this one.                                                                                                                               |
|                                   |                                                                                                                                                                                     |
|    get_accChildCount              |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The description contains the full path name of the document and the number of pages it contains: "fileName, XXX pages".                                                             |
|                                   |                                                                                                                                                                                     |
|    get_accDescription             |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                                   |
|                                   |                                                                                                                                                                                     |
|    get_accFocus                   |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is ``NULL`` .                                                                                                                                                            |
|                                   |                                                                                                                                                                                     |
|    get_accParent                  |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_DOCUMENT`` .                                                                                                                                              |
|                                   |                                                                                                                                                                                     |
|    get_accRole                    |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                                  |
|                                   |                                                                                                                                                                                     |
|    get_accSelection               |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is ``STATE_SYSTEM_READONLY`` .                                                                                                                                            |
|                                   |                                                                                                                                                                                     |
|    get_accState                   |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If the root of the structure tree has an ``Alt`` attribute, the value is the contents of the ``Alt`` attribute.                                                                     |
|                                   |                                                                                                                                                                                     |
|    get_accValue                   |                                                                                                                                                                                     |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="89992"></a>

PDF Page
--------

Represents the contents of one page of a PDF document. The subtree of ``IAccessible`` objects beneath the PDF Page node reflects the logical structure of the page.

.. note::

   Content that is not part of the logical structure, such as page headers and footers, is not presented through the MSAA interface.

.. _section-18:


 

+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                  |
+===================================+=======================================================================================================================================================================+
|                                   | Returns the object at the given location if the location is within the page's bounding box.                                                                           |
|                                   |                                                                                                                                                                       |
|    accHitTest                     |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the page.                                                                                                       |
|                                   |                                                                                                                                                                       |
|    accLocation                    |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                                          |
|                                   |                                                                                                                                                                       |
|    accNavigate                    |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | For ``SELFLAG_TAKEFOCUS`` , the focus is set to the window containing the page and the page is positioned at the top. The other ``SELFLAG`` values are not supported. |
|                                   |                                                                                                                                                                       |
|    accSelect                      |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a child object.                                                                                                                                               |
|                                   |                                                                                                                                                                       |
|    get_accChild                   |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the number of child objects beneath this one.                                                                                                                 |
|                                   |                                                                                                                                                                       |
|    get_accChildCount              |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The description contains the full path name of the document and the page number of the page: "fileName, page XXX".                                                    |
|                                   |                                                                                                                                                                       |
|    get_accDescription             |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                     |
|                                   |                                                                                                                                                                       |
|    get_accFocus                   |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is ``NULL`` .                                                                                                                                              |
|                                   |                                                                                                                                                                       |
|    get_accParent                  |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | A custom role, ``Page`` , is defined for this object.                                                                                                                 |
|                                   |                                                                                                                                                                       |
|    get_accRole                    |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                    |
|                                   |                                                                                                                                                                       |
|    get_accSelection               |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is ``STATE_SYSTEM_READONLY`` .                                                                                                                              |
|                                   |                                                                                                                                                                       |
|    get_accState                   |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If the root of the structure tree has an ``Alt`` attribute, the value is the contents of the ``Alt`` attribute                                                        |
|                                   |                                                                                                                                                                       |
|    get_accValue                   |                                                                                                                                                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="72837"></a>

PDF Protected Document
----------------------

Represents a protected document. When the permissions associated with a document disable accessibility, the contents are not exported through the MSAA interface. The ``IAccessible`` object for such a document informs the client that the document is protected.

.. _section-19:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                         |
+===================================+==============================================================================================================+
|                                   | Returns ``NULL`` .                                                                                           |
|                                   |                                                                                                              |
|    accHitTest                     |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The screen coordinates of the visible part of the document.                                                  |
|                                   |                                                                                                              |
|    accLocation                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ). |
|                                   |                                                                                                              |
|    accNavigate                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                           |
|                                   |                                                                                                              |
|    accSelect                      |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                        |
|                                   |                                                                                                              |
|    get_accChildCount              |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                           |
|                                   |                                                                                                              |
|    get_accFocus                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The name is "Alert: Protection Failure".                                                                     |
|                                   |                                                                                                              |
|    get_accName                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The parent is ``NULL`` .                                                                                     |
|                                   |                                                                                                              |
|    get_accParent                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_TEXT`` .                                                                           |
|                                   |                                                                                                              |
|    get_accRole                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                           |
|                                   |                                                                                                              |
|    get_accSelection               |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The state is ``STATE_SYSTEM_ALERT_MEDIUM + STATE_SYSTEM_UNAVAILABLE + STATE_SYSTEM_READONLY`` .              |
|                                   |                                                                                                              |
|    get_accState                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The value is "This document's security settings prevent access."                                             |
|                                   |                                                                                                              |
|    get_accValue                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="10863"></a>

Empty PDF Document
------------------

Represents an empty or apparently empty document. A PDF file may have no contents to export through MSAA if, for instance, the file is a scanned image that has not been run through an optical character recognition (OCR) tool. The ``IAccessible`` object for empty documents and pages informs the client that there may be a problem, even if the document or page is genuinely empty.

.. _section-20:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                           |
+===================================+================================================================================================================================+
|                                   | Returns ``NULL`` .                                                                                                             |
|                                   |                                                                                                                                |
|    accHitTest                     |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the document.                                                            |
|                                   |                                                                                                                                |
|    accLocation                    |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                   |
|                                   |                                                                                                                                |
|    accNavigate                    |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                             |
|                                   |                                                                                                                                |
|    accSelect                      |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                                          |
|                                   |                                                                                                                                |
|    get_accChildCount              |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                             |
|                                   |                                                                                                                                |
|    get_accFocus                   |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The name is "Alert: Empty document".                                                                                           |
|                                   |                                                                                                                                |
|    get_accName                    |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is ``NULL`` .                                                                                                       |
|                                   |                                                                                                                                |
|    get_accParent                  |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_TEXT`` .                                                                                             |
|                                   |                                                                                                                                |
|    get_accRole                    |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                             |
|                                   |                                                                                                                                |
|    get_accSelection               |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is ``STATE_SYSTEM_READONLY`` .                                                                                       |
|                                   |                                                                                                                                |
|    get_accState                   |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
|                                   | The value is "This document appears to be empty. It may be a scanned image that needs OCR or it may have malformed structure." |
|                                   |                                                                                                                                |
|    get_accValue                   |                                                                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="77828"></a>

PDF Structure Element
---------------------

Represents a subtree of the logical structure tree for the document. It might correspond to a paragraph, a heading, a chapter, a span of text within a word, or a figure.

.. _section-21:


 

+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                                                                                     |
+===================================+==========================================================================================================================================================================================================================================+
|                                   | If the element has state ``STATE_SYSTEM_LINKED`` , performs the action associated with the link.                                                                                                                                         |
|                                   |                                                                                                                                                                                                                                          |
|    accDoDefaultAction             |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object or any child at the given location if the location is within the bounding box of this object.                                                                                                                        |
|                                   |                                                                                                                                                                                                                                          |
|    accHitTest                     |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the subtree.                                                                                                                                                                       |
|                                   |                                                                                                                                                                                                                                          |
|    accLocation                    |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Only spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ) is supported for table elements (``ROLE_SYSTEM_CELL`` , ``ROLE_SYSTEM_ROW`` , ``ROLE_SYSTEM_ROWHEADER`` , ``ROW_SYSTEM_COLUMNHEADER`` ). |
|                                   |                                                                                                                                                                                                                                          |
|    accNavigate                    |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | For ``SELFLAG_TAKEFOCUS`` , sets focus to the document window and positions the document to the beginning of the structure element content. The other ``SELFLAG`` values are not supported.                                              |
|                                   |                                                                                                                                                                                                                                          |
|    accSelect                      |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a child object.                                                                                                                                                                                                                  |
|                                   |                                                                                                                                                                                                                                          |
|    get_accChild                   |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the number of child objects beneath this one.                                                                                                                                                                                    |
|                                   |                                                                                                                                                                                                                                          |
|    get_accChildCount              | If the node has an ``Alt`` or ``ActualText`` attribute, the child count is always zero.                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If the element has state ``STATE_SYSTEM_LINKED`` , returns a text description of the action associated with the link (such as "go to page 5" or "play movie").                                                                           |
|                                   |                                                                                                                                                                                                                                          |
|    get_accDefaultAction           |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                                                                                        |
|                                   |                                                                                                                                                                                                                                          |
|    get_accFocus                   |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is either another structure element or the document structure root.                                                                                                                                                           |
|                                   |                                                                                                                                                                                                                                          |
|    get_accParent                  |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is one of:                                                                                                                                                                                                                      |
|                                   |                                                                                                                                                                                                                                          |
|    get_accRole                    |                                                                                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                                                          |
|                                   |      ROLE_SYSTEM_GROUPING                                                                                                                                                                                                                |
|                                   |       ROLE_SYSTEM_TABLE                                                                                                                                                                                                                  |
|                                   |       ROLE_SYSTEM_CELL                                                                                                                                                                                                                   |
|                                   |       ROLE_SYSTEM_ROW                                                                                                                                                                                                                    |
|                                   |       ROLE_SYSTEM_ROWHEADER                                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                                          |
|                                   |        ROW_SYSTEM_COLUMNHEADER                                                                                                                                                                                                           |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                                                                                       |
|                                   |                                                                                                                                                                                                                                          |
|    get_accSelection               |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is a logical OR of one or more of the following:                                                                                                                                                                               |
|                                   |                                                                                                                                                                                                                                          |
|    get_accState                   |                                                                                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                                                          |
|                                   |      * STATE_SYSTEM_READONLY                                                                                                                                                                                                             |
|                                   |                                                                                                                                                                                                                                          |
|                                   |      * STATE_SYSTEM_LINKED                                                                                                                                                                                                               |
|                                   |                                                                                                                                                                                                                                          |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                                          |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                                          |
|                                   | -  ``STATE_SYSTEM_READONLY`` is always set.                                                                                                                                                                                              |
|                                   | -  If the element is part of a link (that is, if it has an ancestor of role ``ROLE_SYSTEM_LINK`` ) then both ``STATE_SYSTEM_LINKED`` and ``STATE_SYSTEM_FOCUSABLE`` are set, and ``STATE_SYSTEM_FOCUSED`` can also be set.               |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If this node has an ``Alt`` or ``ActualText`` attribute, the value is the contents of the attribute.                                                                                                                                     |
|                                   |                                                                                                                                                                                                                                          |
|    get_accValue                   |                                                                                                                                                                                                                                          |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="23328"></a>

PDF Content Element
-------------------

Corresponds to a leaf node of the logical structure tree for the document. It corresponds to marking commands in the page content stream.

.. _section-22:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                                                                       |
+===================================+============================================================================================================================================================================================================================+
|                                   | If the element has state ``STATE_SYSTEM_LINKED`` , performs the action associated with the link.                                                                                                                           |
|                                   |                                                                                                                                                                                                                            |
|    accDoDefaultAction             |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                                                                                                                                       |
|                                   |                                                                                                                                                                                                                            |
|    accHitTest                     |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the element.                                                                                                                                                         |
|                                   |                                                                                                                                                                                                                            |
|    accLocation                    |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                                                                                               |
|                                   |                                                                                                                                                                                                                            |
|    accNavigate                    |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | For ``SELFLAG_TAKEFOCUS`` , sets focus to the document window and positions the document to the beginning of the content. The other ``SELFLAG`` values are not supported.                                                  |
|                                   |                                                                                                                                                                                                                            |
|    accSelect                      |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                                                                                                                                      |
|                                   |                                                                                                                                                                                                                            |
|    get_accChildCount              |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If the element has state ``STATE_SYSTEM_LINKED`` , describes the action associated with the link.                                                                                                                          |
|                                   |                                                                                                                                                                                                                            |
|    get_accDefaultAction           |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                                                                          |
|                                   |                                                                                                                                                                                                                            |
|    get_accFocus                   |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is either a structure element or the document structure root.                                                                                                                                                   |
|                                   |                                                                                                                                                                                                                            |
|    get_accParent                  |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is one of:                                                                                                                                                                                                        |
|                                   |                                                                                                                                                                                                                            |
|    get_accRole                    |                                                                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                            |
|                                   |      ROLE_SYSTEM_TEXT                                                                                                                                                                                                      |
|                                   |                                                                                                                                                                                                                            |
|                                   |        ROLE_SYSTEM_GRAPHIC                                                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                            |
|                                   |        ROLE_SYSTEM_CLIENT                                                                                                                                                                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                                                                         |
|                                   |                                                                                                                                                                                                                            |
|    get_accSelection               |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is a logical OR of one or more of the following:                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                            |
|    get_accState                   |                                                                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                            |
|                                   |      * STATE_SYSTEM_READONLY                                                                                                                                                                                               |
|                                   |                                                                                                                                                                                                                            |
|                                   |      * STATE_SYSTEM_LINKED                                                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                            |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                            |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                            |
|                                   | -  ``STATE_SYSTEM_READONLY`` is always set.                                                                                                                                                                                |
|                                   | -  If the element is part of a link (that is, if it has an ancestor of role ``ROLE_SYSTEM_LINK`` ) then both ``STATE_SYSTEM_LINKED`` and ``STATE_SYSTEM_FOCUSABLE`` are set, and ``STATE_SYSTEM_FOCUSED`` can also be set. |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If this node has an ``Alt`` or ``ActualText`` attribute, the value is the content of that attribute. Otherwise, the value is all of the text contained in the marking commands for this node.                              |
|                                   |                                                                                                                                                                                                                            |
|    get_accValue                   |                                                                                                                                                                                                                            |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="22500"></a>

PDF Comment
-----------

Corresponds to a comment, such as a text note or highlight comment, attached to the document.

.. note::

   PDF comments cover a range of objects, many of which do not map into the standard MSAA roles. The ``IAccessible`` object captures the most important properties of comments.

.. _section-23:


 

+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                              |
+===================================+===================================================================================================================================================+
|                                   | The default action depends on the type of comment. It can, for example, open or close a popup.                                                    |
|                                   |                                                                                                                                                   |
|    accDoDefaultAction             |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                                                              |
|                                   |                                                                                                                                                   |
|    accHitTest                     |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                                                                 |
|                                   |                                                                                                                                                   |
|    accLocation                    |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                      |
|                                   |                                                                                                                                                   |
|    accNavigate                    |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the comment gives it the keyboard focus).                                                      |
|                                   |                                                                                                                                                   |
|    accSelect                      |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                                                             |
|                                   |                                                                                                                                                   |
|    get_accChildCount              |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Describes the default action, which depends on the type of comment.                                                                               |
|                                   |                                                                                                                                                   |
|    get_accDefaultAction           |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | For file attachment and sound comments, a description of the icon for the comment.                                                                |
|                                   |                                                                                                                                                   |
|    get_accDescription             |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                 |
|                                   |                                                                                                                                                   |
|    get_accFocus                   |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  The name indicates the type of comment; for example, Text Comment or Underline Comment.                                                        |
|                                   | -  If the comment is open and has a title, the name also contains the title of the comment.                                                       |
|    get_accName                    | -  If the comment is a Free Text comment or modifies a span of text (such as an Underline or Strikeout Comment), the name also contains the text. |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is either a structure element or the document structure root.                                                                          |
|                                   |                                                                                                                                                   |
|    get_accParent                  |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is one of:                                                                                                                               |
|                                   |                                                                                                                                                   |
|    get_accRole                    |                                                                                                                                                   |
|                                   |                                                                                                                                                   |
|                                   |      ROLE_SYSTEM_TEXT                                                                                                                             |
|                                   |                                                                                                                                                   |
|                                   |        ROLE_SYSTEM_WHITESPACE                                                                                                                     |
|                                   |                                                                                                                                                   |
|                                   |        ROLE_SYSTEM_PUSHBUTTON                                                                                                                     |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                |
|                                   |                                                                                                                                                   |
|    get_accSelection               |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is a logical OR of one or more of the following:                                                                                        |
|                                   |                                                                                                                                                   |
|    get_accState                   |                                                                                                                                                   |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_READONLY                                                                                                                      |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                                                     |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_LINKED                                                                                                                        |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                                                     |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_EXPANDED                                                                                                                      |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_COLLAPSED                                                                                                                     |
|                                   |                                                                                                                                                   |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                                                       |
|                                   |                                                                                                                                                   |
|                                   | -  If a comment can be opened, ``STATE_SYSTEM_LINKED`` is set.                                                                                    |
|                                   | -  ``STATE_SYSTEM_EXPANDED`` and ``STATE_SYSTEM_COLLAPSED`` indicate whether the comment is open.                                                 |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  If the comment is open, the value is the contents of the comment pop-up window.                                                                |
|                                   | -  If the comment is a type that does not open, the value is the contents of the comment itself.                                                  |
|    get_accValue                   |                                                                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="55866"></a>

PDF Link
--------

Corresponds to a link in the document.

.. _section-24:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                                                   |
+===================================+========================================================================================================================================================================================================+
|                                   | Performs the link's action.                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                        |
|    accDoDefaultAction             |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object or any child at the given location if the location is within the bounding box of this object.                                                                                      |
|                                   |                                                                                                                                                                                                        |
|    accHitTest                     |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                                                                                                                      |
|                                   |                                                                                                                                                                                                        |
|    accLocation                    |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                                                                           |
|                                   |                                                                                                                                                                                                        |
|    accNavigate                    |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS``                                                                                                                                                                         |
|                                   |                                                                                                                                                                                                        |
|    accSelect                      |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns a child object.                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                        |
|    get_accChild                   |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the number of children. If the node has an ``Alt`` or ``ActualText`` attribute, the child count is always zero.                                                                                |
|                                   |                                                                                                                                                                                                        |
|    get_accChildCount              |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Describes the action defined for this link.                                                                                                                                                            |
|                                   |                                                                                                                                                                                                        |
|    get_accDefaultAction           |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                                                      |
|                                   |                                                                                                                                                                                                        |
|    get_accFocus                   |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | If there is an ``Alt`` or ``ActualText`` attribute associated with this link, the name is the associated ``Alt`` text or ``ActualText`` . Otherwise, the name is the value of the first content child. |
|                                   |                                                                                                                                                                                                        |
|    get_accName                    |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is either a structure element or the document structure root.                                                                                                                               |
|                                   |                                                                                                                                                                                                        |
|    get_accParent                  |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_LINK`` .                                                                                                                                                                     |
|                                   |                                                                                                                                                                                                        |
|    get_accRole                    |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                                                     |
|                                   |                                                                                                                                                                                                        |
|    get_accSelection               |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is a logical OR of the following:                                                                                                                                                            |
|                                   |                                                                                                                                                                                                        |
|    get_accState                   |                                                                                                                                                                                                        |
|                                   |                                                                                                                                                                                                        |
|                                   |      * STATE_SYSTEM_READONLY                                                                                                                                                                           |
|                                   |                                                                                                                                                                                                        |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                        |
|                                   |      * STATE_SYSTEM_LINKED                                                                                                                                                                             |
|                                   |                                                                                                                                                                                                        |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                                                                                                          |
|                                   |                                                                                                                                                                                                        |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                                                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The value is a unique identifier for each link.                                                                                                                                                        |
|                                   |                                                                                                                                                                                                        |
|    get_accValue                   |                                                                                                                                                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="40546"></a>

PDF Text Form Field
-------------------

Corresponds to a text form field in the document.

.. _section-25:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                         |
+===================================+==============================================================================================================+
|                                   | Sets focus to the text field for editing.                                                                    |
|                                   |                                                                                                              |
|    accDoDefaultAction             |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                         |
|                                   |                                                                                                              |
|    accHitTest                     |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                            |
|                                   |                                                                                                              |
|    accLocation                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ). |
|                                   |                                                                                                              |
|    accNavigate                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                   |
|                                   |                                                                                                              |
|    accSelect                      |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                        |
|                                   |                                                                                                              |
|    get_accChildCount              |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The default action is "DoubleClick", which sets the keyboard focus to this field.                            |
|                                   |                                                                                                              |
|    get_accDefaultAction           |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                            |
|                                   |                                                                                                              |
|    get_accFocus                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The user name (short description) of the form field.                                                         |
|                                   |                                                                                                              |
|    get_accName                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the parent object.                                                                                   |
|                                   |                                                                                                              |
|    get_accParent                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_TEXT`` .                                                                           |
|                                   |                                                                                                              |
|    get_accRole                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The state of the text field is a logical OR of one of more of:                                               |
|                                   |                                                                                                              |
|    get_accState                   |                                                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_UNAVAILABLE                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_READONLY                                                                                 |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_SELECTABLE                                                                               |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                  |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_PROTECTED                                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The value is the text in the text field.                                                                     |
|                                   |                                                                                                              |
|    get_accValue                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="91493"></a>

PDF Button Form Field
---------------------

Corresponds to a button form field in the document.

.. _section-26:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                         |
+===================================+==============================================================================================================+
|                                   | Presses the button.                                                                                          |
|                                   |                                                                                                              |
|    accDoDefaultAction             |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                         |
|                                   |                                                                                                              |
|    accHitTest                     |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                            |
|                                   |                                                                                                              |
|    accLocation                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ). |
|                                   |                                                                                                              |
|    accNavigate                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                   |
|                                   |                                                                                                              |
|    accSelect                      |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                        |
|                                   |                                                                                                              |
|    get_accChildCount              |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The default action is "Press".                                                                               |
|                                   |                                                                                                              |
|    get_accDefaultAction           |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                            |
|                                   |                                                                                                              |
|    get_accFocus                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The user name of the form field (short description).                                                         |
|                                   |                                                                                                              |
|    get_accName                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the parent object.                                                                                   |
|                                   |                                                                                                              |
|    get_accParent                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_PUSHBUTTON`` .                                                                     |
|                                   |                                                                                                              |
|    get_accRole                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The state of the button is a logical OR of one or more of:                                                   |
|                                   |                                                                                                              |
|    get_accState                   |                                                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_UNAVAILABLE                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_READONLY                                                                                 |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="13511"></a>

PDF CheckBox Form Field
-----------------------

Corresponds to a checkbox form field in the document.

.. _section-27:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                         |
+===================================+==============================================================================================================+
|                                   | Checks or unchecks the box.                                                                                  |
|                                   |                                                                                                              |
|    accDoDefaultAction             |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                         |
|                                   |                                                                                                              |
|    accHitTest                     |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                            |
|                                   |                                                                                                              |
|    accLocation                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ). |
|                                   |                                                                                                              |
|    accNavigate                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                   |
|                                   |                                                                                                              |
|    accSelect                      |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                        |
|                                   |                                                                                                              |
|    get_accChildCount              |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | -  If the check box has been selected, the default action is "UnCheck".                                      |
|                                   | -  If the check box has not been selected, the default action is "Check".                                    |
|    get_accDefaultAction           |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                            |
|                                   |                                                                                                              |
|    get_accFocus                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The user name (short description) of the form field.                                                         |
|                                   |                                                                                                              |
|    get_accName                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the parent object.                                                                                   |
|                                   |                                                                                                              |
|    get_accParent                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_CHECKBUTTON`` .                                                                    |
|                                   |                                                                                                              |
|    get_accRole                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The state of the check box is a logical OR of one or more of:                                                |
|                                   |                                                                                                              |
|    get_accState                   |                                                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_UNAVAILABLE                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_READONLY                                                                                 |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                  |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_CHECKED                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="19394"></a>

PDF RadioButton Form Field
--------------------------

Corresponds to a radio button form field in the document.

.. _section-28:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                         |
+===================================+==============================================================================================================+
|                                   | Clicks the radio button.                                                                                     |
|                                   |                                                                                                              |
|    accDoDefaultAction             |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                         |
|                                   |                                                                                                              |
|    accHitTest                     |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                            |
|                                   |                                                                                                              |
|    accLocation                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ). |
|                                   |                                                                                                              |
|    accNavigate                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                   |
|                                   |                                                                                                              |
|    accSelect                      |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                        |
|                                   |                                                                                                              |
|    get_accChildCount              |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The default action is "Check".                                                                               |
|                                   |                                                                                                              |
|    get_accDefaultAction           |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                            |
|                                   |                                                                                                              |
|    get_accFocus                   |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The user name (short description) of the form field.                                                         |
|                                   |                                                                                                              |
|    get_accName                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | Returns the parent object.                                                                                   |
|                                   |                                                                                                              |
|    get_accParent                  |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_RADIOBUTTON`` .                                                                    |
|                                   |                                                                                                              |
|    get_accRole                    |                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+
|                                   | The state of the radio button is a logical OR of one or more of:                                             |
|                                   |                                                                                                              |
|    get_accState                   |                                                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_UNAVAILABLE                                                                              |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_READONLY                                                                                 |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                  |
|                                   |                                                                                                              |
|                                   |      * STATE_SYSTEM_CHECKED                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="25792"></a>

PDF ComboBox Form Field
-----------------------

Corresponds to a combo box form field in the document. It can represent either the combo box itself, or a list item in a combo box.

.. _section-29:


 

+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                  |
+===================================+=======================================================================================================================================+
|                                   | -  The combo box does not have a default action.                                                                                      |
|                                   | -  For a list item, the default action is "DoubleClick", which selects the list item.                                                 |
|    accDoDefaultAction             |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, returns this object or any child at the given location if the location is within the bounding box of this object. |
|                                   | -  For a list item, returns this object if the given location is within the bounding box of this object.                              |
|    accHitTest                     |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, returns the screen coordinates of the visible part of the object.                                                 |
|                                   | -  For a list item, the location is always reported as 0,0,0,0.                                                                       |
|    accLocation                    |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Spatial directions ``NAVDIR_UP`` and ``NAVDIR_DOWN`` are available for list items.                                                 |
|                                   |                                                                                                                                       |
|    accNavigate                    |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  The combo box supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                           |
|                                   | -  For a list item, sets the combo box to the list item value.                                                                        |
|    accSelect                      |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, gets the child items.                                                                                             |
|                                   | -  A list item has no children.                                                                                                       |
|    get_accChild                   |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, the child count is the number of items in the list.                                                               |
|                                   | -  For a list item, the child count is 0.                                                                                             |
|    get_accChildCount              |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  The combobox does not have a default action.                                                                                       |
|                                   | -  For a list item, the default action is "DoubleClick", which selects the list item.                                                 |
|    get_accDefaultAction           |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns the object that has the keyboard focus if it is this object or its child.                                                  |
|                                   |                                                                                                                                       |
|    get_accFocus                   |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, the name is the user name (short description) of the form field if it has been defined.                           |
|                                   | -  For a list item, the name is the text of the list item.                                                                            |
|    get_accName                    |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns the parent object.                                                                                                         |
|                                   |                                                                                                                                       |
|    get_accParent                  |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns ``NULL`` .                                                                                                                 |
|                                   |                                                                                                                                       |
|    get_accSelection               |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, the role is ``ROLE_SYSTEM_COMBOBOX`` .                                                                            |
|                                   | -  For a list item, the role is ``ROLE_SYSTEM_LISTITEM`` .                                                                            |
|    get_accRole                    |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, the state is a logical OR of one or more these values:                                                            |
|    get_accState                   |                                                                                                                                       |
|                                   |          * STATE_SYSTEM_INVISIBLE                                                                                                     |
|                                   |          * STATE_SYSTEM_UNAVAILABLE                                                                                                   |
|                                   |          * STATE_SYSTEM_READONLY                                                                                                      |
|                                   |          * STATE_SYSTEM_FOCUSABLE                                                                                                     |
|                                   |          * STATE_SYSTEM_FOCUSED                                                                                                       |
|                                   |          * STATE_SYSTEM_SELECTABLE                                                                                                    |
|                                   |          * STATE_SYSTEM_SELECTED                                                                                                      |
|                                   |                                                                                                                                       |
|                                   | -  For a list box item, the state is a logical OR of one or more these values:                                                        |
|                                   |          * STATE_SYSTEM_READONLY                                                                                                      |
|                                   |          * STATE_SYSTEM_SELECTABLE                                                                                                    |
|                                   |          * STATE_SYSTEM_SELECTED                                                                                                      |
|                                   |          * STATE_SYSTEM_INVISIBLE                                                                                                     |
|                                   |          * STATE_SYSTEM_UNAVAILABLE                                                                                                   |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a combo box, the value is the text value of the currently selected list item.                                                  |
|                                   | -  For a list item, the value is the text of the list item.                                                                           |
|    get_accValue                   |                                                                                                                                       |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="20747"></a>

PDF List Box Form Field
-----------------------

Corresponds to a list box form field in the document. It can represent either the list box itself or a list item in a list box.

.. _section-30:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                 |
+===================================+======================================================================================================================================+
|                                   | -  The list box does not have a default action.                                                                                      |
|                                   | -  For a list item, the default action is "Double Click," which selects the item.                                                    |
|    accDoDefaultAction             |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, returns this object or any child at the given location if the location is within the bounding box of this object. |
|                                   | -  For a list item, returns this object if the given location is within the bounding box of this object.                             |
|    accHitTest                     |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, returns the screen coordinates of the visible part of the object.                                                 |
|                                   | -  For a list item, the location is always reported as 0,0,0,0.                                                                      |
|    accLocation                    |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Spatial directions ``NAVDIR_UP`` and ``NAVDIR_DOWN`` are available for list items.                                                |
|                                   |                                                                                                                                      |
|    accNavigate                    |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  The list box supports ``SELFLAG_TAKEFOCUS`` (that is, selecting the field gives it the keyboard focus).                           |
|                                   | -  For a list item, sets the list box selection to the list item value.                                                              |
|    accSelect                      |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, gets the child items.                                                                                             |
|                                   | -  A list item has no children.                                                                                                      |
|    get_accChild                   |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, the child count is the number of items in the list box.                                                           |
|                                   | -  For a list item, the child count is 0.                                                                                            |
|    get_accChildCount              |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  The list box does not have a default action.                                                                                      |
|                                   | -  For a list item, the default action is "Double Click," which selects the item.                                                    |
|    get_accDefaultAction           |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns the object that has the keyboard focus if it is this object or its child.                                                 |
|                                   |                                                                                                                                      |
|    get_accFocus                   |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, the name is the user name (short description) for the form field.                                                 |
|                                   | -  For a list item, the name is the text of the list item.                                                                           |
|    get_accName                    |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns the parent object.                                                                                                        |
|                                   |                                                                                                                                      |
|    get_accParent                  |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, the role is ``ROLE_SYSTEM_LIST`` .                                                                                |
|                                   | -  For a list item, the role is ``ROLE_SYSTEM_LISTITEM`` .                                                                           |
|    get_accRole                    |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, the state is a logical OR of one or more these values:                                                            |
|                                   |                                                                                                                                      |
|    get_accState                   |                                                                                                                                      |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_INVISIBLEc                                                                                                   |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_UNAVAILABLE                                                                                                  |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_READONLY                                                                                                     |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_FOCUSABLE                                                                                                    |
|                                   |                                                                                                                                      |
|                                   | -  For a list item, the state is a logical OR of one or more these values:                                                           |
|                                   |                                                                                                                                      |
|                                   |                                                                                                                                      |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_READONLY                                                                                                     |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_SELECTABLE                                                                                                   |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_SELECTED                                                                                                     |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_INVISIBLE                                                                                                    |
|                                   |                                                                                                                                      |
|                                   |          * STATE_SYSTEM_UNAVAILABLE                                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  Returns ``NULL`` .                                                                                                                |
|                                   |                                                                                                                                      |
|    get_accSelection               |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
|                                   | -  For a list box, the value is the text value of the currently selected list item.                                                  |
|                                   | -  For a list item, the ``Value`` attribute is the text of the list item.                                                            |
|    get_accValue                   |                                                                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="91488"></a>

PDF Digital Signature Form Field
--------------------------------

Corresponds to a digital signature form field in the document.

.. _section-31:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                                                                                                                         |
+===================================+==============================================================================================================================================================================================================================================================+
|                                   | Signs the document if the signature field is unsigned and has either been opened with Acrobat or the document has permissions that allow signing. If the document is signed, the default action brings up a dialog box containing the signature information. |
|                                   |                                                                                                                                                                                                                                                              |
|    accDoDefaultAction             |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns this object if the given location is within the bounding box of this object.                                                                                                                                                                         |
|                                   |                                                                                                                                                                                                                                                              |
|    accHitTest                     |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the visible part of the object.                                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                                                              |
|    accLocation                    |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Does not support spatial navigation (``NAVDIR_UP`` , ``NAVDIR_DOWN`` , ``NAVDIR_RIGHT`` , ``NAVDIR_LEFT`` ).                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                                                              |
|    accNavigate                    |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Supports ``SELFLAG_TAKEFOCUS`` .                                                                                                                                                                                                                             |
|                                   |                                                                                                                                                                                                                                                              |
|    accSelect                      |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                                                                                                                                                                        |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accChildCount              |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns ``NULL`` .                                                                                                                                                                                                                                           |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accDefaultAction           |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the object that has the keyboard focus if it is this object or its child.                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accFocus                   |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The user name (short description) of the form field.                                                                                                                                                                                                         |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accName                    |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the parent object.                                                                                                                                                                                                                                   |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accParent                  |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The Digital Signature form field does not map to any of the existing roles, and a custom role, ``Signature`` , has been defined for it.                                                                                                                      |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accRole                    |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The ``State`` attribute of the digital signature is a logical OR of one of more of these values:                                                                                                                                                             |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accState                   |                                                                                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_INVISIBLE                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_UNAVAILABLE                                                                                                                                                                                                                              |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_READONLY                                                                                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSABLE                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_FOCUSED                                                                                                                                                                                                                                  |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_CHECKED                                                                                                                                                                                                                                  |
|                                   |                                                                                                                                                                                                                                                              |
|                                   |      * STATE_SYSTEM_TRAVERSED                                                                                                                                                                                                                                |
|                                   |                                                                                                                                                                                                                                                              |
|                                   | -  If ``STATE_SYSTEM_CHECKED`` is set, but not ``STATE_SYSTEM_TRAVERSED`` , the signature is unverified.                                                                                                                                                     |
|                                   | -  If ``STATE_SYSTEM_TRAVERSED`` is set, but not ``STATE_SYSTEM_CHECKED`` , the signature is invalid.                                                                                                                                                        |
|                                   | -  If both ``STATE_SYSTEM_CHECKED`` and ``STATE_SYSTEM_TRAVERSED`` are set, the signature is valid.                                                                                                                                                          |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The ``Value`` attribute is the name and date of the signature, if that information is present.                                                                                                                                                               |
|                                   |                                                                                                                                                                                                                                                              |
|    get_accValue                   |                                                                                                                                                                                                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. raw:: html

   <a name="49405"></a>

PDF Caret
---------

Represents a caret (text cursor). If a document contains the system caret because focus is within an editable text field or an editable ComboBox field, clients can obtain an ``IAccessible`` object for the caret to determine where it is located.

.. _section-32:


 

+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Method                            | Implementation notes                                                                                                                                             |
+===================================+==================================================================================================================================================================+
|                                   | Returns this object if the given location is within the bounding box of this object.                                                                             |
|                                   |                                                                                                                                                                  |
|    accHitTest                     |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Returns the screen coordinates of the caret, both when the caret is in a form field and when it is in the document.                                              |
|                                   |                                                                                                                                                                  |
|    accLocation                    |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The child count is 0.                                                                                                                                            |
|                                   |                                                                                                                                                                  |
|    get_accChildCount              |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The description is a string containing the index of the character in the field that follows the caret.                                                           |
|                                   |                                                                                                                                                                  |
|    get_accDescription             | If the caret is at the beginning of the field, the description string is "0". If the caret follows the first character, the description string is "1".           |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The parent is the field containing the caret. However, the caret ``IAccessible`` object is not listed among the children of that field's ``IAccessible`` object. |
|                                   |                                                                                                                                                                  |
|    get_accParent                  |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The role is ``ROLE_SYSTEM_CARET`` .                                                                                                                              |
|                                   |                                                                                                                                                                  |
|    get_accRole                    |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The state is 0.                                                                                                                                                  |
|                                   |                                                                                                                                                                  |
|    get_accState                   |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The value is the current value of the Text field or ComboBox form field containing the caret.                                                                    |
|                                   |                                                                                                                                                                  |
|    get_accValue                   |                                                                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
