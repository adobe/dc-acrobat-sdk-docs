******************************************************
PDF File Creation
******************************************************

This chapter provides information about how you can use the Acrobat DC SDK to create PDF files.

.. raw:: html

   <a name="43214"></a>

Creating PDF files from an authoring application
================================================

Authoring applications can simplify the creation of PDF files by making the following steps appear seamless:

-  Invoking Acrobat DC Distiller® through Apple events or DDE
-  Printing to a PostScript file
-  Automatically generating advanced Acrobat DC features using pdfmark

.. raw:: html

   <a name="32649"></a>

Acrobat Distiller
-----------------

Acrobat Distiller is essentially a PostScript interpreter that can be used to convert PostScript to PDF. Distiller is the PDF creation application intended for batch processing and for the creation of PDF files containing high-end print publishing features such as OPI comments, CMYK color spaces, and spot colors. Distiller also has the ability to interpret PostScript extensions called pdfmarks and to convert them into PDF objects such as links, bookmarks, optional content (OC), and annotations.

On Windows, you can automate Distiller through OLE automation (commonly referred to as ActiveX or COM). The automation interface makes it easy to start and control Distiller from any programming language that supports automation. Distiller supports programming environments written for Visual Basic and for Visual C++ with and without MFC.

The Mac OS version of Distiller supports Apple events. Apple events can be used from external applications written in programming languages such as C or from AppleScript. Because AppleScript is more straightforward, it is recommended.

For more information on Distiller, see the Distiller Help and the Acrobat Distiller API Reference

.. raw:: html

   <a name="26108"></a>

Automated creation of PDF documents from Windows
------------------------------------------------

The Acrobat DC SDK has a set of APIs that allow you to automate the creation of PDF files from an external Windows application.

When you use OLE automation, the Distiller splash screen and status are displayed even when the process is automated. With the API, there is no interaction with the user and no display on the screen. The API allows you to specify the name and location of the output PDF file. To do so, you must modify the Windows registry. For more information, see the Acrobat Distiller API Reference.

.. raw:: html

   <a name="76770"></a>

Automatic generation of advanced Acrobat features
-------------------------------------------------

The most convenient place to generate advanced Acrobat DC features is in the authoring application itself, because that application defines the structure of the document. Advanced PDF features are generated using the pdfmark PostScript operator. The authoring application must generate a PostScript language file that contains the appropriate pdfmark operators for the document structure. The resulting PostScript language file is converted into a PDF file by Distiller. In addition, Acrobat DC allows logical structure information to be added to a document. For instance, paragraphs in a page's contents can be associated with a structural element representing a paragraph.

For more information, see the `pdfMark Reference <http://www.adobe.com/go/pdfmark>`__ .

.. raw:: html

   <a name="68522"></a>

Attaching a native document to a PDF file
-----------------------------------------

Another way that an authoring application can integrate with Acrobat DC or Acrobat DC Reader is to allow the user access to the original authoring document through the Acrobat DC user interface. Through the use of private data in a PDF file, an authoring application can embed the entire authoring document as part of the PDF file that represents it. This way, not only can the resulting electronic document be viewed by anyone using Acrobat DC, it can also be edited by users who have the authoring application.

You must write a plug-in for Acrobat DC to allow users to embed and extract the authoring document. This plug-in would add the authoring document as a private data stream when embedding, and, when extracting, save the stream to a temporary file and invoke the authoring application.

.. note::

   Acrobat DC and Acrobat DC Reader ignore private data. Embedding authoring documents in PDF files greatly increases the size of the PDF file.

An association between the PDF file and the authoring document can also be maintained through the use of links in the PDF file. Links can be created that invoke files and their associated applications. If a document management system places such a link in the PDF file, users can invoke the original authoring document by executing the link.

.. raw:: html

   <a name="87316"></a>

Batch processing with Distiller
-------------------------------

You do not need to use the Distiller API to integrate Distiller with your product. Distiller has the ability to watch directories over a network and to convert any PostScript files saved to those directories to PDF. It is also possible to set different job options for each directory so that one directory can be used, for example, for high-end color output, while the other can generate a more compressed file suitable for web use. These features of Distiller are not supported by Acrobat Developer Support. Check the help documentation packaged with the product or books by Adobe Press and other publishers for using Distiller through the user interface.

The Distiller API can be used to programmatically process files and set the output path and file names while Acrobat Professional DC can be used to set up watched folders.

.. raw:: html

   <a name="77695"></a>

Tagged PDF documents
--------------------

PDF files are well known for representing the physical layout of a document; that is, the page markings that comprise the page contents. In addition, PDF provides a mechanism for describing logical structure in PDF files. This includes information such as the organization of the document into chapters and sections, as well as figures, tables, and footnotes.

Tagged PDF is a particular use of structured PDF that allows page content to be extracted and used for various purposes, including:

-  Reflow of text and graphics
-  Conversion to file formats such as HTML and XML
-  Access for the visually impaired

.. raw:: html

   <a name="53364"></a>

Creating PDF files using plug-ins or JavaScript
===============================================

You can use Acrobat DC and the Acrobat DC SDK to create a new, empty PDF file and to create a PDF file from supported file types.

.. raw:: html

   <a name="55125"></a>

Empty PDF files
---------------

Using either a plug-in or JavaScript, you can dynamically create a PDF file and modify its contents in an automated fashion. This can help make a document responsive to user input and enhance the workflow process.

JavaScript provides support for dynamic PDF file creation and content generation. Using a plug-in, you can also create a new, empty PDF file. You can then use methods to add content to the created file.

.. raw:: html

   <a name="65387"></a>

PDF files from multiple files
-----------------------------

It is possible to use either a plug-in, IAC, or JavaScript to dynamically add content from other sources into a new PDF file. The sources can include files whose types conform to Multipurpose Internet Mail Extensions (MIME) type definitions.

Using JavaScript, you can import an external file into a PDF document. After doing this, it is possible to extract information from the data object for placement and presentation within the PDF document. You can automate the insertion of multiple PDF files into a single PDF document through a series of method calls, and you can also use a portion of the current document to create a new document.

With a plug-in or IAC, you can extract data from other file types, and then bind the resulting PDF files into one PDF file. The relevant APIs can also be executed directly from an IAC application.

Creating PDF files without using Acrobat
========================================

Some developers have developed the capability of generating PDF from their own applications without using Adobe products. Some of these developers have used the Adobe PDF Library product to extend their own application. Others have built PDF-generation capability into their applications from scratch. This type of development is not supported by Adobe.

`The best resource for building PDF-generation capability is the <http://www.adobe.com/go/pdfreference>`__ `PDF Reference <https://www.adobe.com/go/pdfreference>`__ , which fully documents the PDF specification. The PDF file format is complex, and developing code to generate it requires a significant amount of development.
