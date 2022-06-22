
******************************************
Acrobat and PDFL SDKs and Accessibility
******************************************

Adobe provides methods to make the content of a PDF file available to assistive technology such as screen readers:

-  On the Microsoft® Windows® operating system, Acrobat and Adobe Reader export PDF content as COM objects. Accessibility applications such as screen readers can interface with Acrobat or Adobe Reader in two ways:

   -  Through the Microsoft Active Accessibility (MSAA) interface, using MSAA objects that Acrobat or Adobe Reader exports
   -  Directly through exported COM objects that allow access to the PDF document's internal structure, called the *document object model* (DOM).

The DOM and MSAA models are related, and developers can use either or both. Acrobat issues notifications to accessibility clients about interesting events occurring in the PDF file window and responds to requests from such clients.

.. warning::

   This document assumes that you are familiar with the ATK architecture.

Determining rendering order and logical order
=============================================

When rendering documents on the screen, Acrobat provides visual fidelity in a device-independent manner. However, the order in which Acrobat renders characters is not necessarily the same as the order in which they are to be read. Acrobat does not use standard system services that are used by assistive technology to capture content displayed on the screen.

*Tagged PDF* , introduced in PDF 1.4, defines a *logical structure* for the document that corresponds to the logical order of the content, regardless of the order in which the content is rendered. Acrobat uses the logical structure of a Tagged PDF document to determine word order. Through the accessibility interfaces, Acrobat can deliver the text of the PDF file as Unicode and can also make active elements such as links and form fields accessible.

.. note::

   Acrobat can determine the logical structure of an untagged PDF file to some extent, but the results may be less satisfactory.

Accessing documents and pages
-----------------------------

Through the accessibility interfaces, Acrobat can deliver contents of the entire PDF document contents or only the current visible pages, regardless of what part of the document is visible on the screen:

-  Delivering the entire document permits assistive technology to search the document for the next link or next instance of text.
-  Delivering individual pages is necessary for very large documents that might exhaust the resources of the assistive technology.

The user controls the delivery method using the reading preferences.

Processing inaccessible documents
=================================

A document can be *inaccessible* for one of the following reasons:

-  It is protected by security settings
-  It is, or appears, empty
-  It is temporarily unavailable

The interfaces treat inaccessible documents as follows:

-  Acrobat exports an MSAA object from the document, whose type indicates the reason for the inaccessibility.
-  In Acrobat 6.0, inaccessible documents do not export any PDF DOM objects; attempts to retrieve PDF DOM objects from it fail without indicating the reason.
-  In Acrobat 7.0 and later, the DOM interface returns objects that represent the document, and DOM methods can be used to find out why the document is inaccessible.

.. raw:: html

   <a name="57086"></a>

Processing protected documents
------------------------------

A document may have security settings that make it inaccessible. This can occur under the following conditions:

-  It uses 40-bit RC4 encryption, and the author has forbidden copying text and graphics.
-  It uses 128-bit RC4 encryption, and the author has forbidden making the contents accessible.
-  It uses a non-standard security handler, and the document settings forbid making the contents accessible.

In these cases, the user must contact the document author to provide a version that permits accessibility.

The following occurs when a document has security settings that make it inaccessible:

-  Acrobat exports an MSAA ``IAccessible`` object warning of a possible error. This object has the role ``ROLE_SYSTEM_TEXT`` and the name "``Alert: Protection Failure`` ". For more information, see `PDF Protected Document <MSAA&PDF.html#72837>`__.
-  When using the DOM interface in Acrobat 7, ``GetDocInfo`` returns the status ``DocState_Protected`` .

You can become an Adobe Trusted Partner and create Trusted Assistive Technology. Trusted Partners are developers of assistive products that respect the copy protection of encrypted PDF files, and can gain access to 40-bit encrypted files. For more information on becoming a Trusted Partner, see http://www.adobe.com/go/acrobat_developer .

.. raw:: html

   <a name="97997"></a>

Processing empty documents
--------------------------

A document can be inaccessible because it is empty, or it can appear empty because of the way the PDF was created. For instance, scanned images that have not been run through an optical character recognition (OCR) tool appear to be empty. Malformed structure trees can also make a document appear empty.

The following occurs when a document appears to be empty:

-  Acrobat exports an MSAA ``IAccessible`` object warning of a possible error. This object has the role ``ROLE_SYSTEM_TEXT`` and the name "``Alert: Empty document`` ". If Acrobat is delivering information a page at a time, a genuinely empty page also generates this warning. For more information, see `Empty PDF Document <MSAA&PDF.html#10863>`__.
-  When using the DOM in Acrobat 7, ``GetDocInfo`` returns the status ``DocState_Empty`` .

.. raw:: html

   <a name="45172"></a>

Processing unavailable documents
--------------------------------

When a document is unavailable, Acrobat returns similar objects from MSAA and DOM. A document may be unavailable for one of several reasons:

-  If Acrobat is still preparing the document for access and the assistive technology attempts to read the document, the MSAA object name is "``Alert: Document being processed`` ".
-  If Acrobat is waiting for a document on the web to download to the disk, the MSAA object name is "``Alert: Document downloading`` ".
-  If the user cancels processing so that the document will never be available, the MSAA object name is "``Alert: Document unavailable`` ".

In all these cases, when using the DOM, the status returned in ``GetDocInfo`` is ``DocState_Unavailable`` .

.. raw:: html

   <a name="21082"></a>

Handling event notifications
============================

Each open document in Acrobat is associated with its own window handle. All ``WinNotifyEvent`` notifications for any part of the document use that window handle. For the PDF window:

-  If ``childID == CHILDID_SELF`` (that is, 0), the event is for the entire document or page.
-  If the ``childID`` parameter of the notification is non-zero, the event is for an object within the window, such as a form field, link, comment, or some part of the page content such a line or paragraph of text.

For Acrobat 7.0 and later, the following occurs:

-  If the selection is set or changed, ``VALUECHANGE`` is notified, with the ``childID`` of the ``IAccessible`` object containing the beginning of the selection.
-  If the selection is set, ``SELECTION`` is notified on the document (with a ``childID`` of ``0`` ).
-  If the selection is cleared, ``SELECTIONREMOVE`` is notified on the document.
-  If the selection is extended, ``SELECTIONADD`` is notified, except when it is extended via keyboard commands (in that case ``SELECTIONREMOVE`` followed by ``SELECTION`` is notified).
-  A ``LOCATIONCHANGE`` notification is issued when the caret moves. ``SHOW`` and ``HIDE`` notifications are issued when the caret is activated and deactivated.

Retrieving an MSAA object for an event
--------------------------------------

You can retrieve an ``IAccessible`` object from event notifications by using the MSAA function ``AccessibleObjectFromEvent`` . This object represents the document or an element within the document.

Some events always return an object of a particular type. For others, you must determine the type of the object from the role and specific ``childID`` . The meaning of the event can be different for different types of objects. For more information, see `Identifying IAccessible objects in a document <MSAA&PDF.html#99842>`__.

Acrobat posts the following ``WinEvent`` notifications:


 

+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Notification                      | Description                                                                                                                                                                                                                                                                                                                                                                      |
+===================================+==================================================================================================================================================================================================================================================================================================================================================================================+
| ``EVENT_OBJECT_FOCUS``            | The document window, a link, a comment, or a form field has received keyboard focus.                                                                                                                                                                                                                                                                                             |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``AccessibleObjectFromEvent``     | Returns the appropriate ``IAccessible`` object, either for the document or page itself or for the link, comment, or form field. The ``childID`` parameter identifies the object.                                                                                                                                                                                                 |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``EVENT_OBJECT_LOCATIONCHANGE``   | The caret (text cursor) has moved. If the caret is in a text edit field containing keyboard focus, the value of the text field may also have changed.                                                                                                                                                                                                                            |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                  |
|                                   | The ``idObjectType`` parameter for this event is ``objid_caret`` . ``AccessibleObjectFromEvent`` returns an ``IAccessible`` object for the caret.                                                                                                                                                                                                                                |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``EVENT_OBJECT_STATECHANGE``      | If the ``childID`` parameter is ``CHILDID_SELF`` , the current document or page has changed its state by opening or closing a comment. The client should update its copy of the document content. Only the ``IAccessible`` object for the comment changes when this occurs.                                                                                                      |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                  |
|                                   | If ``childID`` is non-zero, it is the UID of the ``IAccessible`` object for a form field, such as a checkbox or radio button, whose state has changed.                                                                                                                                                                                                                           |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``EVENT_OBJECT_VALUECHANGE``      | If the ``childID`` parameter is ``CHILDID_SELF`` , a new document or page has been opened or the current content has changed. The client should update its cached value of the document or page.                                                                                                                                                                                 |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                  |
|                                   | If the ``childID`` parameter is not ``CHILDID_SELF`` , it identifies the content on the page to which the user has turned his or her attention. For instance, if a page has scrolled or Acrobat has followed a link to a new page, it identifies the first visible content on the page. The client may wish to update its internal state about where it is reading the document. |
+-----------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Retrieving a PDF DOM object for an event
----------------------------------------

To retrieve a DOM object, you can do one of the following actions:

-  Call the MSAA library function ``AccessibleObjectFromEvent`` to get an ``IAccessible`` object (as described above). Then call that ``IAccessible`` object's ``get_PDDomNode`` method to get the corresponding DOM object. For more information, see `IGetPDDomNode interface <MSAA&PDF.html#10950>`__.
-  Call the MSAA library function ``AccessibleObjectFromWindow`` on the window containing the document and pass ``OBJID_NATIVEOM`` as the second parameter. This returns the DOM object for the root of the document.
