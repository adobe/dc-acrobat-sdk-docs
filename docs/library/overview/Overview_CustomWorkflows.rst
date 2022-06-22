******************************************************
Annotations and Online Collaboration
******************************************************

Acrobat DC 8.0 introduces the Shared Reviews feature, which you should use for most online collaboration processes. You cannot initiate a Shared Review using the Acrobat SDK. For information on Shared Reviews, see the Acrobat DC Help.

.. raw:: html

   <a name="55113"></a>

About annotations
=================

An annotation associates an object such as a note, sound, or movie with a location on a page of a PDF document, or provides a way to interact with the user through the mouse and keyboard. PDF includes a wide variety of standard annotation types, described in detail in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

Many of the standard annotation types can be displayed in either the open or the closed state. When closed, they appear on the page in some distinctive form depending on the specific annotation type, such as an icon, a box, or a rubber stamp. When the user activates the annotation by clicking it with the mouse, it exhibits its associated object, such as opening a pop-up window displaying a text note or playing a sound or a movie.

You can access and manipulate annotation data from both a plug-in and JavaScript. However, you can only create new annotation types using a plug-in or the IAC API; you cannot create new annotation types from JavaScript.

Annotations and JavaScript
--------------------------

You can set, modify, and access annotation information using JavaScript. However, you cannot create a new annotation type from JavaScript. To do this, you must use a plug-in or the IAC API.

Using JavaScript, you can perform the following tasks:

-  Add note comments
-  Make text edits
-  Highlight, cross out, or underline text
-  Add or delete custom stamps
-  Add comments in a text box
-  Add attachments
-  Spell check in comments and forms
-  Add commenting preferences
-  Change colors, icons, and other comment properties

Annotations with plug-ins or IAC
--------------------------------

There is an abstract superclass for all annotations. Acrobat DC and Acrobat Reader have two built-in annotation classes. Plug-ins can add movie, widget (form field), and other annotation types. You can define new annotation subtypes by creating new annotation handlers. For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ *.*

The IAC API has an object you can use to set, modify, and access annotation information from external applications. For more information, see `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .



.. raw:: html

   <a name="46877"></a>

New annotation types
====================

PDF supports many standard annotation types. Your plug-in can create annotation types, including any data they need. For example, a custom annotation type might allow a user to draw (not just type) in an annotation, provide support for multiple fonts or text styles, or support annotations that can only be viewed by specific users.

Support for new annotation types can be added by defining and registering an annotation handler. The Acrobat DC Movie plug-in, for example, uses this to support video annotations.

To add a new annotation type, a plug-in must provide a set of callbacks, specify them in the appropriate structure, and register them. For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .
