******************************************************
Metadata, Accessibility, and PDF Layers
******************************************************

Metadata
========

A PDF document can include general information such as the document's title, author, and creation and modification dates. Such global information about the document itself (as opposed to its content or structure) is called metadata, and is intended to assist in cataloguing and searching for documents in external databases.

Metadata properties and values are represented in the World Wide Web Consortium's Resource Definition Format (RDF), which is a standard metadata format based on XML. The set of standard metadata items is organized into schemas, each of which represents a set of properties from a particular application or industry standard. The schemas, as well as the physical representation, are defined by Adobe's Extensible Metadata Platform (XMP). For more information, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

.. raw:: html

   <a name="29650"></a>

Extensible Metadata Platform (XMP)
----------------------------------

Adobe's Extensible Metadata Platform (XMP) is a labeling technology that allows you to embed metadata into the file itself. With XMP, desktop applications and back-end publishing systems gain a common method for capturing, sharing, and leveraging this valuable metadata — opening the door for more efficient job processing, workflow automation, and rights management, among many other possibilities.

You can use JavaScript to access the XMP metadata embedded in a PDF document, and you can search metadata by using JavaScript or a plug-in.

Plug-ins can also get or set XMP metadata. Furthermore, you can get or set the XMP metadata associated with an internal PDF dictionary or stream. For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .

Acrobat Distiller also supports embedding of XMP metadata in PDF files.

.. raw:: html

   <a name="71302"></a>

Adobe XMP Toolkit
-----------------

The XMP Toolkit is designed to help applications handle XMP operations such as the creation and manipulation of metadata. The toolkit makes it easier for developers to support XMP metadata, and helps to standardize how the data is represented and interchanged. The XMP Toolkit can be licensed, royalty-free, from Adobe.

Accessibility
=============

Acrobat DC and the Acrobat SDK provide extensive support for accessibility of documents to visually-impaired users. To enable proper vocalization, either through a screen reader or by some more direct invocation of a text-to-speech engine, PDF supports the following features:

-  Specifying the natural language used for text in a PDF document—for example, as English or Spanish
-  Providing textual descriptions for images or other items that do not translate naturally into text, or replacement text for content that does translate into text but is represented in a nonstandard way (such as with a ligature or illuminated character)
-  Specifying the expansion of abbreviations or acronyms

The core of this support lies in the ability to determine the logical order of content in a PDF document, independently of the content's appearance or layout, through logical structure and tagged PDF documents. Tagged PDF documents are created using the Acrobat Professional DC user interface or using the Acrobat SDK.

If a PDF document is untagged, you can convert it to a tagged PDF document using Acrobat Professional DC. Acrobat DC Standard provides only minimal support for tagging and no way to review or repair accessibility problems.

An accessible application can extract the content of a document for presentation to a user who is disabled by traversing the structure hierarchy and presenting the contents of each node. For this reason, producers of PDF files must ensure that all information in a document is reachable through the structure hierarchy.

For more information on accessibility support in PDF files, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ . For more information on implementing accessibility support, see the Acrobat DC Help and the `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

PDF layers
==========

Adobe PDF layers are components of content that can occupy the same physical space as other components. Multiple components may be visible or invisible depending on their settings, and may be used to support the display, navigation, and printing of layered PDF content by various applications.

Using the Acrobat SDK, you can display, navigate and print layered PDF documents.

Acrobat DC supports the display, navigation, and printing of layered Adobe PDF content output by applications such as Adobe InDesign®, AutoCAD, and Microsoft Visio. PDF layers are supported through the usage of PDF Optional Content Group (OCG) objects. Optional content refers to content in a PDF document that can be selectively viewed or hidden.

Note the following:

-  You can rename and merge layers, change the properties of layers, and add actions to layers. You can also lock layers to prevent them from being hidden.
-  You can control the display of layers using the default and initial state settings. For example, if your document contains a copyright notice, you can easily hide the layer whenever the document is displayed onscreen but ensure that the layer always prints.
-  Acrobat DC does not allow you to author layers that change visibility according to the zoom level, but it does support this capability from other authoring applications.
-  To direct users to a custom view using a particular layer set, you can add bookmarks to a PDF document that contains layers. Use this technique to highlight a portion of a layer that is especially important. You can add links so that users can click on a visible or invisible link to navigate to or zoom in on a layer.
-  To create layers while exporting InDesign CS or later documents to PDF, make sure that Compatibility is set to the latest Acrobat DC version and that Create Acrobat Layers is selected in the Export PDF dialog box.

.. raw:: html

   <a name="93498"></a>

Creation of layered PDF files
-----------------------------

When creating PDFs, several engineering applications, including Microsoft Visio and AutoCad, automatically generate the necessary ProcSets to create layered PDF documents.

You create layered PDF documents with the ProcSet used to build Optional Content (OC) into PDF through Acrobat Distiller.

Third-party developers must insert OC ProcSet information into the PostScript stream. For more information, see `Creating PDF files from an authoring application <Overview_PDFCreation.html#43214>`__ and the `Acrobat Distiller API Reference <http://www.adobe.com/go/distiller>`__ .

.. raw:: html

   <a name="69900"></a>

What you can do with layers
---------------------------

Since information can be stored in different layers of a PDF document, navigational controls can be customized within different layers, whose visibility settings may be dynamically customized so that they are tied to context and user interaction. For example, if the user selects a given option, a set of navigational links belonging to a corresponding optional content group can be shown.

Using JavaScript, you can determine the order in which layers are displayed in the user interface. You can also use JavaScript to perform the following tasks:

-  Merge layers in a PDF document
-  Flatten layers in a PDF document
-  Combine PDF layered documents

For more information, see `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

For plug-ins, you use an object to represent an optional-content group. This corresponds to a PDF dictionary representing a collection of graphic objects that can be made visible or invisible. Any graphic content of the PDF can be made optional, including page contents, XObjects, and annotations. From a plug-in, you can perform the following tasks:

-  Create an OCG
-  Get and set the current state of an OCG
-  Get and set the initial OCG state
-  Get and set document configurations

For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .
