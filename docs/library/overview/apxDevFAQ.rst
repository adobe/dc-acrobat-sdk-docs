******************************************************
Frequently Asked Questions
******************************************************

Forms
=====

What are the requirements for using Acrobat forms?
--------------------------------------------------

You can create and fill in Acrobat forms in PDF files, and submit or import form data. These forms are typically used for viewing or printing information, filling in information, selecting options, digitally signing documents, and exchanging information with databases. Note that Reader users can fill in and submit forms. Once a user fills out an Acrobat form, the data can be submitted to a server for processing. Data can be exported from a PDF form into Forms Data Format (FDF). Data can be imported into a PDF form if it is in FDF, XFDF, XML, or TXT format. Acrobat forms support the following formats: FDF, XFDF, tab-delimited text, and XML.

Every FDF file contains a reference to a PDF file for which the data is intended, designated with the ``/F`` key inside the FDF file (unless the FDF file is for the same PDF from which you submitted your data). When Acrobat or Acrobat Reader receives an FDF file, it opens the corresponding PDF file, and fills the form fields with the data from the FDF file. If the PDF file is referenced by a URL (for example, http://example.com/file.pdf), the FDF file must be sent to the server in response to a ``submit`` action from a PDF form. For more information about the FDF format, which is based on PDF, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

Acrobat plug-ins can programmatically import FDF data into a PDF file from a local file system using the HFT made available by the Forms plug-in. OLE automation can be used to programmatically add, modify, or delete form fields, import or export FDF data, execute scripts written in JavaScript, and much more. For more information, see the `Acrobat and PDF Library API Reference. <http://www.adobe.com/go/pdflibrary>`__

.. raw:: html

   <a name="39683"></a>

What is the FDF Toolkit?
------------------------

The FDF (Forms Data Format) Toolkit is a thread-safe API for writing a server application that generates FDF data or parses FDF data from a form created by the Acrobat Forms plug-in. If you need to parse FDF files submitted from a PDF form, or generate FDF files to be submitted to a PDF form, you can use the FDF Toolkit. The FDF Toolkit supports COM on Windows, C and Perl on Windows, Solaris™, AIX® or Linux®, and Java VMs compatible with versions 1.2 or later.

For detailed information, see the documentation included with the FDF Toolkit.

.. raw:: html

   <a name="92232"></a>

PDF documents
=============

What ActiveX solutions are available?
-------------------------------------

The PDF browser control automation object, described in the `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ , supports the loading and display of PDF documents as ActiveX documents, and its interface is available in both Acrobat and Acrobat Reader.

Visual Basic .NET and Visual C# .NET
------------------------------------

How can I use Visual Basic .NET or Visual C# .NET?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Windows version of Acrobat is an OLE automation server. In order to use the OLE objects made available by Acrobat, you must have the full Acrobat product installed on your system and the ``Acrobat.tlb`` file included in the project references for your Visual Basic project. This allows you to use the Visual Studio 2005 object browser to browse the OLE objects.

For Acrobat versions 5.0 and later, it is possible to access the JavaScript object model in Acrobat through the OLE automation ``JSObject`` interface. See the ``JSObjectAccess`` sample. For more information, see the `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .

What resources are available for Visual Basic .NET or Visual C# .NET?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ describes the objects and methods available in these languages, as well as guidelines for usage. These documents (as well as the API) were designed with C programming in mind, and programming with the API requires some familiarity with C concepts such as ``enum`` .

Besides the object browser, the best resources for programming in these languages are the sample projects. The samples demonstrate use of the Acrobat OLE objects and contain comments describing the parameters for the more complicated methods. For more information, see the `Acrobat SDK Samples Guide <http://www.adobe.com/go/acrobatsdk_samplesguide>`__ .

The ``Iac.bas`` file in the InterAppCommunicationSupportHeaders folder contains the Visual Basic counterparts to the C ``#define`` statements and enumerations passed to many of the API methods.

What API methods are available to modify PDF documents?
-------------------------------------------------------

Modifying the page contents of a PDF file is primarily accomplished using the Acrobat core API.

Using the Acrobat core API greatly simplifies modifying and creating PDF page contents. To demonstrate this, there are several snippets available from the ``SnippetRunner`` sample plug-in that show you how to add data to the contents of a page, while ensuring that the PDF file is still readable after modification. To attempt to do this without using the core API would be significantly more difficult and could result in an unreadable PDF file.

Acrobat's automation interfaces are limited mainly to what a user can do through the user interface and cannot modify the contents of a page.

For more information on the Acrobat core API, see `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ and the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .

Can I modify PDFs without a C programming background?
-----------------------------------------------------

You can make some modifications to PDF files through JavaScript for Acrobat. See the `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

.. raw:: html

   <a name="63126"></a>

How can I extract text?
-----------------------

You can extract text with the Acrobat SDK in two ways:

-  Use the Acrobat core API
-  Use the Acrobat automation API

Through the core API, you can extract ASCII text from a PDF file using Acrobat and a plug-in developed in C or C++. The ``TextExtraction`` and ``WordFinder`` sample plug-ins demonstrate text extraction and can be used as starting points for your own plug-in. ``AVConversion`` methods also can be used to save PDF as text or rich text. In addition, the ``SDKTextExtraction`` sample in the first level of the SaveAsXML directory provides a good starting point for creating richer extraction tables. For more information, see the `Acrobat SDK Samples Guide <http://www.adobe.com/go/acrobatsdk_samplesguide>`__ .

.. raw:: html

   <a name="66729"></a>

How can I display a PDF in an external application window?
----------------------------------------------------------

There are several ways to have the Acrobat program display a PDF file in an external application's window. Acrobat must be installed on the system to view a PDF file in your own application's window.

There is no best way that we suggest to display PDF files in your application. Examine the following list for the most appropriate method for your situation. For more documentation, see `IAC Developer Guide <http://www.adobe.com/go/acrobat_developer>`__ .

.. raw:: html

   <a name="84076"></a>

Using Acrobat to view PDFs in your own application
---------------------------------------------------------------

Windows only:

-  OLE automation, using the ``OpenInWindowEx`` command. This displays a live view of the PDF file in the OLE application window.

For samples, see the Visual Basic and C++ ``ActiveView`` applications.

-  OLE automation, using the ``DrawEx`` command. This displays a bitmap of the current page in the OLE application window.

For samples, see the Visual Basic and C++ ``StaticView`` applications.

-  Copy to the clipboard. This copies a PDF image to the clipboard without requiring an ``hWnd`` or ``hDC`` using OLE automation.
-  If you are using simplified browser controls in your application, you may treat the PDF document as an ActiveX document by using the ``AcroPDF`` object's ``LoadFile`` method. This automation interface is available in both Acrobat and Acrobat Reader.

Mac OS only:

-  The ``AcroAppleEvents`` sample application demonstrates rendering a PDF file into another application's window (see ``DrawIntoWindowCommand`` for details).

Windows and Mac OS:

-  The ``ExternalWindow`` sample plug-in demonstrates a live view of the PDF file in a window created by the plug-in. You can extend this to display PDF files in an external application window.

Are multibyte font PDF documents supported by the Acrobat SDK?
--------------------------------------------------------------

Acrobat allows the creation, modification, and use of PDF files containing multibyte fonts.

How are security and encryption provided in PDFs?
-------------------------------------------------

Adobe provides password-based and certificate-based encryption schemes with Acrobat. In the password-based scheme, Acrobat queries the user for a password before a file is opened. The authorization procedure to open a file or to set an owner password can be modified by creating a custom security handler.

.. raw:: html

   <a name="61350"></a>

Full-text search
================

What tools are available with Acrobat for full-text search?
-----------------------------------------------------------

Adobe provides a full-text search system, known as the Acrobat Search Plug-in, based on third-party technology. However, this does not preclude other search systems from integrating with Acrobat. The Acrobat search system was created using only public API and IAC calls, and you can easily remove it from Acrobat and replace it with another search technology. For more information, see the ` <http://www.adobe.com/go/acrobatsdk_iacguide>`__ `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ *.*

The Acrobat interface can be extended with new menus and toolbar icons to allow tight integration with your search plug-in and Acrobat. For example, buttons to invoke a search and to find the next or previous occurrences can be added to the toolbar.

For samples of adding menu items and toolbar buttons, see the related snippets in the ``SnippetRunner`` sample plug-in.

.. raw:: html

   <a name="57294"></a>

What tools are available for extracting and highlighting text?
--------------------------------------------------------------

For indexing and searching PDF files directly, Acrobat provides support through IAC and plug-in calls. For indexing PDF files, Acrobat provides text extraction APIs. For further information on extracting text from PDF, see `How can I extract text? <Faq.html#63126>`__

How do I communicate with the Acrobat Search plug-in?
-----------------------------------------------------

You can communicate with the Search plug-in via its plug-in API or via IAC (DDE or Apple events). Using either of these methods, you can control the Acrobat Search plug-in in the following ways:

-  Control the list of indexes to search.

The search interface allows for searches to be performed on one or more of the available indexes. You can control the list of active indexes.

-  Initiate a search with options.

You can pass query expressions and search settings to the Acrobat search plug-in and initiate the search, and the results will be presented to the user.

For an example, see the ``SearchPDF`` Visual Basic application. For documentation, see the `Acrobat and PDF Library API Reference. <http://www.adobe.com/go/pdflibrary>`__

How do I create custom DocInfo fields for searching?
----------------------------------------------------

The Catalog feature is used to create a search index; its API is available to third parties via the Catalog plug-in provided with the Acrobat SDK. See the `Acrobat and PDF Library API Reference <https://www.adobe.com/devnet/pdf/library.html>`__ and the `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ for more information.

Once you have built the search index, you must create the custom ``DocInfo`` fields, which can be used to search document metadata. You can accomplish this task with either the Acrobat core API or using interapplication communication. See theadobefor more information.

At this point you may submit custom queries to the Acrobat Search plug-in to search by the custom fields, as demonstrated by the ``SearchQuery`` sample plug-in. You can include your custom ``DocInfo`` fields in the search by specifying them in the ``sortSpec`` parameter of the ``SearchExecuteQuery`` method.

.. raw:: html

   <a name="57770"></a>

How do I use the Windows command line?
======================================

You can display and print a PDF file with Acrobat and Acrobat Reader from the command line. These commands are unsupported, but have worked for some developers. There is no documentation for these commands other than what is listed below.

.. note::

   All examples below use Acrobat Reader, but apply to Acrobat as well. If you are using Acrobat, substitute ``Acrobat.exe`` for ``AcroRd32.exe`` on the command line.

*AcroRd32.exe* *pathname* — Start Acrobat Reader and display the file. The full path must be provided.

This command can accept the following options.


 

+-----------------------------------+----------------------------------------------------------------------------------------+
| Option                            | Meaning                                                                                |
+===================================+========================================================================================+
|                                   | Start a separate instance of Acrobat or Acrobat Reader, even if one is currently open. |
|                                   |                                                                                        |
|    /n                             |                                                                                        |
+-----------------------------------+----------------------------------------------------------------------------------------+
|                                   | Suppress the splash screen.                                                            |
|                                   |                                                                                        |
|    /s                             |                                                                                        |
+-----------------------------------+----------------------------------------------------------------------------------------+
|                                   | Suppress the open file dialog box.                                                     |
|                                   |                                                                                        |
|    /o                             |                                                                                        |
+-----------------------------------+----------------------------------------------------------------------------------------+
|                                   | Start Acrobat or Acrobat Reader in a minimized window.                                 |
|                                   |                                                                                        |
|    /h                             |                                                                                        |
+-----------------------------------+----------------------------------------------------------------------------------------+

*AcroRd32.exe /p* *pathname* — Start Acrobat Reader and display the Print dialog box.

*AcroRd32.exe /t path* *"printername" "drivername" "portname"* — Start Acrobat Reader and print a file while suppressing the Print dialog box. The path must be fully specified.

The four parameters of the ``/t`` option evaluate to ``path`` , ``printername`` , ``drivername`` , and ``portname`` (all strings).

*printername* — The name of your printer.

*drivername* — Your printer driver's name, as it appears in your printer's properties.

*portname* — The printer's port. ``portname`` cannot contain any "/" characters; if it does, output is routed to the default port for that printer.


How can I customize the Acrobat installer?
==========================================

Adobe provides various ways in which you can deploy Acrobat products to a large number of systems.

You can find documentation about enterprise installation, including information about tools for customization and installation as well as guidelines for extending enterprise applications, in the `Enterprise Toolkit <https://www.adobe.com/go/acrobatetk>`__ .
