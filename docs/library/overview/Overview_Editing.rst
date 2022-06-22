******************************************************
Working with PDF Features
******************************************************

This chapter discusses how you can work with various features of PDF documents using the Acrobat SDK.

.. raw:: html

   <a name="48010"></a>

Navigation in PDF documents
===========================

.. raw:: html

   <a name="61268"></a>

Bookmarks
---------

A bookmark corresponds to an outline object in a PDF document. A document outline consists of a tree-structured hierarchy of bookmarks

that displays the document's structure, allowing the user to navigate interactively from one part of the document to another. Each bookmark has a title that appears on screen and an action that specifies what happens when the user clicks on the bookmark.

Bookmarks can be either created interactively through the Acrobat DC user interface or generated programmatically. Typically, a user-created bookmark is used to move to another location in the current document, although other actions can be specified, such as opening a web link, opening a file, playing a sound, or executing JavaScript.

You can use JavaScript, a plug-in, or IAC to get or set the following properties:

-  The open attribute of a bookmark
-  The text used for the bookmark's title
-  The action that is invoked when the bookmark is selected

.. raw:: html

   <a name="48703"></a>

Thumbnails
----------

Page thumbnails are miniature previews of the pages in a document. You can use page thumbnails in Acrobat DC to jump quickly to a selected page and to adjust the view of the page.

When you move, copy, or delete a page thumbnail, you actually move, copy, or delete the corresponding page. You can embed page thumbnails in a PDF document so that they need not be redrawn every time you select the Pages tab. They can easily be removed and embedded again if necessary.

You can use the Acrobat SDK to create and remove thumbnails in a PDF document.

.. raw:: html

   <a name="74764"></a>

Links
-----

Links, or hyperlinks, let users jump to other locations in the same document, to other electronic documents, or to websites. You can use links when you want to ensure that your reader has immediate access to related information. You can also use links to initiate actions.

The Acrobat SDK provides support for the addition, customization, or removal of links within PDF documents. These links can be used to access URLs, file attachments, or destinations within the document.

In addition, JavaScript can be used to specify whether cross-document links are opened in the same window or in a new one.

.. raw:: html

   <a name="36257"></a>

Actions for special effects
---------------------------

Thumbnails, bookmarks, links, and other objects have actions associated with them, and you can use JavaScript to customize their behavior. For example, you can use them to display messages, jump to destinations in the same document or any other, open attachments, open web pages, execute menu commands, or perform a variety of other tasks.

You can also customize these actions so that they change their appearance after the user has clicked on them.

.. raw:: html

   <a name="67060"></a>

PDF page manipulation
=====================

You can use the Acrobat SDK to insert or remove pages from a PDF document. For example, you can do the following tasks:

-  Create an empty page in the current document (not with IAC)
-  Insert pages from another document into the current document
-  Move a page to another location in the same document (not with IAC and AppleScript)
-  Replace pages with pages from another document
-  Delete pages from the current document

You can also access JavaScript functionality from an external application.

.. raw:: html

   <a name="70311"></a>

Page content
------------

Page content is a major component of a PDF file. It represents the visible marks on a page that are drawn by a set of PDF marking operators. The set of marking operators for a page is also referred to as a *display list* , since it is a list of marking operations that represent the displayed portion of a page. For more information on page content streams, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

You can use the PDFEdit API to access PDF page contents. With PDFEdit, your plug-in can treat a page's contents as a list of objects rather than manipulating the content stream's marking operators. There is no JavaScript equivalent to the PDFEdit API to allow you to manipulate page content. For more information on this API, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ and the `Snippet Runner Cookbook <http://www.adobe.com/go/acrobatsdk_snippet>`__ .

.. raw:: html

   <a name="89157"></a>

Document logical structure
--------------------------

You can insert logical structure into a PDF document by creating a tagged PDF document. The PDSEdit API provides the ability to add, modify, and view this logical structure. For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .

Authoring applications can also add structure pdfmarks to the PostScript language code generated when a document is printed. For more information, see the . `pdfmark Reference <http://www.adobe.com/go/pdfmark>`__ .

.. raw:: html

   <a name="56283"></a>

Other ways of modifying PDF documents
-------------------------------------

You can use a plug-in or JavaScript to modify a PDF document by cropping and rotating pages, numbering pages, and adding headers and footers.

.. raw:: html

   <a name="67602"></a>

Watermarks
==========

JavaScript provides methods to create watermarks within a document, and place them in optional content groups (OCGs). You can also add watermarks using C APIs. The Acrobat SDK contains a sample plug-in that adds a watermark. For more information, see the `Acrobat SDK Samples Guide. <http://www.adobe.com/go/acrobatsdk_samplesguide>`__

.. raw:: html

   <a name="53850"></a>

Spell-checking
==============

Acrobat DC provides a Spelling plug-in that can scan a document for spelling errors. Using any of the Acrobat SDK technologies, you can do the following tasks:

-  Add or remove a dictionary from the list of available dictionaries
-  Add or remove a spelling domain (search scope) from the Spell Check dialog box
-  Add or remove a word in the user's dictionary
-  Check the spelling of an individual word
-  Ignore all occurrences of a word in a document when spell-checking
-  Scan a text buffer and return the next word
-  Set the document's dictionary search order
-  Set the document's dictionary search order from an array of ISO 639-2 and 3166 language codes, allowing you to identify a dictionary by language rather than by name

The following additional functionality is available to plug-ins and external applications, but is not available using JavaScript:

-  Check a text object and optionally receive a callback for each change as the user interacts with the Spell Check dialog box
-  Count the words in a text buffer that are contained in each of a set of dictionaries
-  Create a new custom user dictionary and add it to the list of available dictionaries

.. raw:: html

   <a name="13204"></a>

Multimedia
==========

Multimedia objects can be included in the content of PDF documents, as well as in annotations. You can only manipulate multimedia objects and players using JavaScript; you cannot use a plug-in. Using JavaScript, you can perform the following tasks:

-  Customize the settings, renditions, and events associated with media players
-  Access and control the properties for all monitors connected to the system
-  Add movie and sound clips
-  Add and edit renditions
-  Control rendition settings
-  Set multimedia preferences that apply throughout a document

For more information, see `Acrobat JavaScript Developer Guide. <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__

.. raw:: html

   <a name="39330"></a>

Printing PDF files
==================

Using the Acrobat SDK, you can control the way that Acrobat DC, Acrobat Reader, or your external application prints PDF files. Using any of the Acrobat DC technologies, you can customize the way that a PDF document is printed.

Since printing involves sending pages to an output device, there are many options that can affect print quality. JavaScript can be used to enhance and automate the use of these options in print production workflows. For more information, see the `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

With plug-ins, you can use methods to customize and control how a PDF file is printed from Acrobat DC or Acrobat Reader. Depending on the methods you use, a user interface may be invoked. For example, you can use a method to print a document to the current printer using the current print settings and job settings with no user interface. You can specify a page range, a PostScript version, and whether to shrink the pages to fit the printer. For more information, see `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ .

Using the IAC APIs, you can print a PDF file from an external application. For more information, see `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .

.. raw:: html

   <a name="56377"></a>

Embedded fonts
==============

Acrobat Distiller and the PDF Library add font embedding information to fonts that are embedded in PDF files. With the inclusion of this information, your code can determine how an embedded font can be used. These operations also may apply to code used with the PDF Library SDK.

Acrobat DC plug-in developers can remove and embed fonts in an existing PDF document. You can also use fonts that are already embedded in a PDF document for preview and printing, as well as editing. However, allowing editing using embedded fonts is not recommended, and in some cases it is impractical. For example, Chinese, Japanese and Korean (CJK) fonts potentially include thousands of glyphs, so applications must subset these fonts when embedding them in a PDF file. This precludes embedded CJK fonts from being used for editing by a plug-in.

PDF Library users can perform these operations using an existing PDF document, or they can create a PDF document from scratch that includes embedded fonts. Creating a document from scratch cannot be performed by a plug-in, but it can be done by using PDF Library calls from within a compiled application that includes the PDF Library.
