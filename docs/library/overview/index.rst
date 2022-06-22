.. raw:: html

   <a name="38527"></a>

*********************************
Acrobat and PDFL SDK Overview
*********************************

The Acrobat SDK is a set of tools that help you develop software that interacts with Acrobat technology. The SDK contains header files, type libraries, simple utilities, sample code, and documentation. These tools provide several methods for developing software that integrates with Acrobat products, including JavaScript, plugins, and interapplication communication. These assets should help you design and develop projects such as:

-  External applications that communicate with and control Acrobat DC and Acrobat Reader.
-  Scripts written in JavaScript that control Acrobat DC and Acrobat Reader.
-  Plug-ins that extend Acrobat product functionality.

Developer support
=================

The Acrobat Developer Support team supports software development with the Acrobat DC SDK's core APIs. Developers can purchase support via the `Adobe Creative Cloud Exchange Developer Support program <https://helpx.adobe.com/ie/support/programs/cc-exchange-developer-support.html>`__ . Supported SDK development activities include those for which the product is designed, tested, and licensed. Acrobat Developer Support does not support use cases that do not involve the Acrobat core API.

Only the last two major SDK versions with interim updates are eligible for support.

.. note::

   For non-programmatic issues, such as questions about installing, using, customizing, or deploying Acrobat, contact `Acrobat Technical Support <https://helpx.adobe.com/uk/contact/what-contact-options.html>`__

.. raw:: html

   <a name="19084"></a>

Licensing and distribution
==========================

Some of the Acrobat products may be licensed for commercial redistribution.

Products built around Acrobat DC products must comply with the Acrobat End-User License Agreement (EULA). For example, customers who purchase third-party developer products that use Acrobat must still comply with the Acrobat EULA.

Acrobat Reader
----------------------------

You may distribute Acrobat Reader, subject to the terms set forth in the license agreement. However, you must use the installer that comes with Acrobat Reader. You may invoke the Acrobat Reader installer from your installer, but the Acrobat Reader installer must remain intact and the End User License Agreement (EULA) must be displayed at first use. For information on customizing the Acrobat Reader installer, see `How can I customize the Acrobat installer? <apxDevFAQ.html#94789>`__

If you would like to distribute Acrobat Reader, see the Acrobat Reader distribution page given below in `Additional resources <apxDevFAQ.html#44820>`__.

.. raw:: html

   <a name="44820"></a>

Additional resources
-------------------------------

Acrobat Reader distribution: http://www.adobe.com/products/acrobat/distribute.html?readstep

Volume software licensing: http://www.adobe.com/aboutadobe/openoptions/main.html

.. raw:: html

   <a name="54751"></a>

Technical and licensing limitations
------------------------------------------------

The following is a list of Acrobat SDK uses that are not supported. Most activities are identified as *technically infeasible* and/or *contrary to licensing* .

-  Use of any Acrobat product in a multithreaded way ( *technically infeasible* ).

Any multithreaded access to the Acrobat core API is likely to crash or hang the application. Acrobat makes the following methods available that can help a plug-in or application manage its thread's access to the Acrobat core API, as documented in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ :

::

         AVAppRegisterNotification
          AVAppRegisterIdleProc

When registering for a notification, the method is passed a function to be called by the Acrobat viewer when the event occurs. Registering for an ``IdleProc`` calls the function when nothing else is occurring. All notifications and ``IdleProcs`` are queued and called in order. Registering for notifications of events or ``IdleProcs`` can help a multithreaded application ensure that Acrobat is not accessed by multiple threads simultaneously; however, it is still the application's responsibility to manage its threads that access Acrobat.

-  Use of any Acrobat product as a server process accessed by multiple clients, unless it is specifically stated in product documentation as designed and licensed for such purpose ( *technically infeasible* | *contrary to licensing* ).

Unless specifically stated in the product documentation and licensing agreement, Acrobat products are not designed, tested, or licensed for this purpose. This use is in violation of the licensing restrictions, as described in the End User License Agreement displayed during Acrobat installation and is not supported by Acrobat Developer Support.

-  Use of Distiller as a Windows NT service ( *technically infeasible* ).

Acrobat Distiller requires the ability to open a window on the desktop to run. It is not possible to use Distiller as a Windows NT service.

.. warning::

   For customers needing this capability, Acrobat Professional DC 7 introduced support for *watched folders* . This same support is also present in Acrobat Pro Extended 10. When Distiller finds a PostScript file located in the In folder of a watched folder, it converts the file to PDF and then moves the PDF (and usually the PostScript file and any associated log file) to the Out folder.

-  Use of ``MenuItemExecute`` to bring up Acrobat DC dialog boxes when a PDF file is displayed in an external window using OLE automation ( *technically infeasible* ).

Due to problems of managing window focus, using the Acrobat DC dialog boxes (using ``MenuItemExecute`` ) when a PDF file is displayed in an external window using OLE automation is not supported. The actions executed by the dialog box may or may not affect the intended PDF file and there can be problems of windows not redrawing properly. The only supported workaround is to use the OLE automation methods or to develop a plug-in to achieve any functionality not available in the OLE API to Acrobat DC. The `Adobe Reader Integration Key License Agreement <http://adobe.com/go/acrobat_developer>`__ only permits displaying in an external window when Acrobat DC is used, not Acrobat Reader.

-  Use of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ to develop a third-party application that writes PDF files without the use of Acrobat DC products.

.. warning::

   The Adobe PDF Library, available under license, can be used to simplify development of these types of applications.

We do not provide support to developers who are creating their own PDF generation capabilities without the use of Adobe products. The `PDF Reference <https://www.adobe.com/go/pdfreference>`__ is the best resource for this kind of development. The use of Adobe products to create PDF files as a benchmark for your own development is recommended. Acrobat Developer Support will not debug PDF files created with non-Adobe products. Questions regarding the completeness or accuracy of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ will be answered. The `PDF Reference <https://www.adobe.com/go/pdfreference>`__ is available for free download from the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

-  Interapplication communication (IAC) between a plug-in and a third-party application.

Interapplication communication between a plug-in and a third-party application does not differ significantly from interapplication communication between two stand-alone applications. Documentation for your development platform's API and development environment are the best resources for this type of development. The Acrobat SDK contains two samples that can serve as examples.

-  ``DDEServer`` demonstrates DDE communication between a stand-alone application and a plug-in.
-  ``ExternalWindow`` uses Windows messaging to communicate with a stand-alone application.

One typical difficulty for developers occurs when a multithreaded stand-alone application communicates with a plug-in. See `Developing for Acrobat Reader <Overview_GettingStarted.html#81443>`__.

-  Use of platform API methods or the API methods of applications other than Acrobat DC.

Acrobat Developer Support can help you with the API to the Acrobat family of products. Questions regarding the use of platform API methods should be directed to the manufacturer of your operating system.

-  Use of the ActiveX® control or Netscape plug-in to display a PDF file in an external application besides Internet Explorer or Netscape. The methods used by Acrobat DC to display a PDF file in Netscape and Internet Explorer are intended only for use with these browsers. Use of the ActiveX Control and Netscape plug-in installed by Acrobat Reader is not licensed to other applications. Development with these interfaces is not supported and no documentation is available.
-  Automating the import of image files using the Import plug-in to Acrobat DC ( *technically infeasible* ).

The Import plug-in to Acrobat does not provide an API that allows it to be called from a plug-in or another application. Executing the Import Image menu item with ``MenuItemExecute`` brings up a dialog box requiring user input.

.. raw:: html

   <a name="94789"></a>

Samples provided with the Acrobat SDK
=====================================

The Acrobat SDK provides a large number of sample applications, plug-ins, and scripts to demonstrate how to use the SDK technologies. Reviewing the samples may guide you in choosing JavaScript, plug-ins, or IAC functionality for a particular implementation. For more information, see the `Acrobat SDK Samples Guide <http://www.adobe.com/go/acrobatsdk_samplesguide>`__ .

.. raw:: html

   <a name="81443"></a>

Developing for Acrobat Reader
=============================

Acrobat vs. Reader
------------------

Acrobat provides a full-featured development environment that includes the entire Acrobat core API. Like Acrobat, the primary technologies for creating software to extend or customize Adobe Reader are JavaScript, interapplication communication, and plug-ins. There are some small differences between the public APIs available in Acrobat DC and Acrobat Reader. Moreover, the APIs that may be used for Acrobat Reader are limited technically and legally.

Both Acrobat and Acrobat Reader accept plug-ins. The primary difference between the two is that, in general, Acrobat Reader can neither make changes to a file nor save a file. API methods that change a file in such a way that a save would be required are not available in Acrobat Reader.

Acrobat Reader plug-in guidelines
---------------------------------

If you are considering plug-ins for Acrobat Reader, remember the following:

-  You may not develop an Acrobat Reader plug-in without approval from Adobe. There is a web-based application where you describe your plug-in and submit the information to Adobe; Adobe will then review it and let you know whether your application has been approved. The application and the Acrobat Reader Integration Key Licensing Agreement can only be submitted as a web form and are found at http://www.adobe.com/go/acrobat_developer .
-  There is a fee to obtain the enabling key.
-  There is a restricted set of APIs available in Acrobat Reader.
-  For information on how to access the Host Function Tables (HFTs) available to Acrobat Reader plug-ins and how to enable your plugin, see the `Acrobat Plugin Developer Guide. <http://www.adobe.com/go/acrobatsdk_pluginguide>`__

Reader enabled plugins
----------------------

Acrobat Reader only accepts "Reader-enabled" plug-ins, which can access a subset of the APIs available to Acrobat DC. Certain APIs are available to a Reader-enabled plug-in if the PDF document has been assigned additional usage rights (rights-enabled). With a rights-enabled PDF document, the free and ubiquitous Acrobat Reader c an be used to download, save, fill in, digitally sign, and submit electronic PDF forms.

Though the APIs available for Adobe Reader are limited, additional APIs can be used for a given PDF document if that document is rights-enabled, meaning that it has additional usage rights. The extra functionality makes the following activities possible:

-  Saving forms with results offline
-  Connecting forms to databases or online services
-  Attaching files and media clips
-  Saving copies of documents with changes intact
-  Submitting completed documents electronically
-  Digitally signing documents
-  Sharing documents with others to review and add comments using intuitive markup tools such as electronic sticky notes, highlight, and text strikethrough.

SDK technologies and options
============================

You can develop software that integrates with Acrobat DC and Acrobat Reader in three ways: JavaScript, plug-ins, and IAC.

Based on your application's requirements, choose the appropriate technologies for development. In some situations, the desired functionality is only available using one technology. In other situations, you can choose between two or more technologies. For example, you can add menu items to Acrobat DC using either JavaScript or a plug-in. You can also use more than one technology in a single application or single document. For example, you can use both plug-ins and JavaScript to implement a particular feature.

Options include:

-  **JavaScript** — Write scripts, either in an individual PDF document or externally, to extend product functionality.
-  **Plug-ins** — Create plug-ins that are dynamically linked to and extend product functionality.
-  **Interapplication communication** — Write a separate application process that uses interapplication communication (IAC) to control the product. DDE and OLE are supported on Microsoft Windows, and Apple events/AppleScript on Mac OS.
-  **PDF manipulation without Acrobat** `: You can also use the PDF Library (PDFL) to develop applications that create and manipulate PDF documents but do not interact with Acrobat. For more information, see <http://www.adobe.com/go/pdflibrary>`__ `Adobe PDF Library <Overview_GettingStarted.html#66717>`__ .

.. raw:: html

   <a name="32820"></a>

JavaScript
----------

Through its JavaScript extensions, Acrobat DC exposes much of its functionality and its plug-ins to the document author. The JavaScript objects, properties and methods can also be accessed through Visual Basic or C# to automate the processing of PDF documents.

Acrobat DC defines several objects that allow your code to interact with the Acrobat DC application, a PDF document, or fields within a PDF document. The most commonly used objects control the Acrobat DC or Acrobat Reader application, the JavaScript console, the PDF document, SOAP web services, databases, security, searches, and JavaScript events.

JavaScript can be applied at a variety of levels. Each of the levels represents a context in which processing occurs, which affects when the scripts are loaded and how they are accessed inside and outside documents.

The placement of a script at a given level also determines its reusability. For example, folder level scripts are available within all documents, document level scripts are available to all fields within a given document, and field level scripts are visible only to the fields with which they are associated.

.. raw:: html

   <a name="33332"></a>

Plug-ins
--------

Plug-ins are dynamically-linked extensions to Acrobat DC or Acrobat Reader. They can hook in to the user interface in a number of ways and can register to be called when a variety of events occur in the application.

A plug-in is written in ANSI C/C++ and uses the Acrobat DC public APIs. It can add functionality to Acrobat Pro Extended, Acrobat Professional DC, Acrobat DC Standard, or Acrobat Reader. A plug-in program file goes into a Plug_ins folder or directory and is initialized during Acrobat DC or Acrobat Reader startup.

There are three types of plug-ins:

-  **Regular Acrobat DC plug-ins** — These plug-ins run on Acrobat Professional DC and Acrobat DC Standard. Plug-ins for Acrobat Professional DC can use any of the Acrobat SDK APIs. Plug-ins for Acrobat DC Standard do not have access to some APIs. For more information, see the `Acrobat Plugin Developer Guide. <http://www.adobe.com/go/acrobatsdk_pluginguide>`__
-  **Acrobat Reader-enabled plug-ins** — These plug-ins use a restricted set of APIs. Acrobat Reader-enabled plug-ins are developed with permission from Adobe and require special processing to load under Acrobat Reader. Plug-ins for Acrobat Reader can use additional APIs if the PDF document has additional usage rights.
-  **Certified plug-ins** — These plug-ins have undergone extensive testing to ensure that they do not compromise the integrity of Acrobat DC's security model. A checkbox in the Acrobat DC and Acrobat Reader user interface can be used to ensure that only certified plug-ins are loaded. Certified plug-ins can be provided only by Adobe.

Plug-ins are deployed differently on each platform:

-  Windows: DLLs. Note, however, that plug-in names must end in .API, not .DLL.
-  Mac: Code fragments on Mac OS.

Plug-in development environments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Windows developers can develop plug-ins using C and C++ with Visual Studio.

There is currently no support for development of plug-ins using managed languages such as C# or VB.NET. However, managed languages are supported for use with interapplication communication (IAC). This enables those languages to take full advantage of Acrobat DC's functionality through use of the JavaScript bridge.

All plug-ins developed on Mac OS X must use the Mach-O runtime architecture and must be built as a bundle. Apple Xcode 9.2 is required because SDK projects depend on certain header files that are included with the Xcode development environment.

.. raw:: html

   <a name="62256"></a>

Acrobat core API
~~~~~~~~~~~~~~~~

Plug-ins access and control the resources of the Acrobat application host environment using the Acrobat DC core API. The core API consists of a set of methods that operate on objects. The objects have types and encapsulate their data. This object orientation is a conceptual model, implemented using a standard ANSI C programming interface. Methods are C functions; objects are opaque data types. The core API is supported on Windows and Mac.

The API is organized into several layers.

+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Layer                             | Description                                                                                                                                                                                                                                                             |
+===================================+=========================================================================================================================================================================================================================================================================+
| AV                                | The AV layer, also known as AcroView or AV Model, works with the Acrobat DC or Acrobat Reader application. Its methods allow plug-ins to manipulate components of the Acrobat DC or Acrobat Reader application itself, such as menus and menu items.                    |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| PD                                | The PD layer, also known as PDModel, provides access to components of PDF documents. Its methods allow plug-ins to manipulate document components such as document pages and annotations.                                                                               |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| AS                                | The AS layer (a support layer) provides platform-independent utility functions and allows plug-ins to override the built-in file-handling mechanisms.                                                                                                                   |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Cos                               | The Cos Object System layer provides access to the building blocks used to construct documents. Cos methods allow plug-ins to manipulate low-level data such as dictionary and string objects in a PDF file.                                                            |
|                                   |                                                                                                                                                                                                                                                                         |
|                                   | Whenever possible, you should use higher level APIs to access and manipulate PDF files. Though you can use the Cos layer APIs to perform most types of access or manipulation of a PDF file, it can be difficult and requires in-depth knowledge of PDF file structure. |
+-----------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

The core API also includes platform-specific plug-in utilities to handle issues that are unique to Windows and Mac. For more information, see the `Acrobat Plugin Developer Guide. <http://www.adobe.com/go/acrobatsdk_pluginguide>`__

Extended APIs for plug-ins
~~~~~~~~~~~~~~~~~~~~~~~~~~

Plug-ins can expose their own functionality and make it available to other plug-ins in the same way that Acrobat DC functionality is available through the core API. Acrobat DC uses many plug-ins to implement features, such as the Search and Digital Signature plug-ins. In fact, the Acrobat DC architecture encourages the use of plug-ins to expose APIs for use by other plug-ins.

API exposure is accomplished through a mechanism called the Host Function Table (HFT). A plug-in can export an HFT for use by other plug-ins, and it can import the HFTs of other plug-ins. The following Adobe plug-ins export HFTs:

-  Catalog
-  Digital Signature
-  Forms
-  PDF Consultant
-  Search
-  Spelling
-  Weblink
-  SaveAsXML

For more information on plug-ins and HFTs, see the the `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ and the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .

JavaScript vs. plugins: pros and cons
-------------------------------------

While developers writing plug-ins have direct access to the Acrobat Core API, JavaScript applications tend to be easier to write and implement, since they are developed using the editor and debugger that are included in Acrobat. JavaScript applications are also easier to distribute since they can be included directly within a PDF file, whereas plug-ins must be placed in the Plug_ins folder by either an installer or the user. JavaScript for Acrobat can be used across multiple platforms, while a plug-in must have separate versions for each platform in order to handle certain platform-specific issues.

In general, plug-ins allow for more direct control over Acrobat DC than JavaScript. There is a richer set of APIs that you can use from a plug-in. Since it is interpreted rather than compiled, execution of JavaScript for Acrobat code is slower than plug-in code. However, the difference tends to be noticeable only in computationally intensive applications, such as a full text search in a large PDF file.

Implementation comparison
~~~~~~~~~~~~~~~~~~~~~~~~~

Comparison of plug-ins and JavaScript

.. _section-1:


 

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Plug-ins                                                                                                                                                                     | JavaScript                                                                                                                                                                                                                                                                   |
+=======================+==============================================================================================================================================================================+==============================================================================================================================================================================================================================================================================+
| **Scope**             | A plug-in affects all PDF documents viewed by Acrobat DC.                                                                                                                    | JavaScript can affect either a single document or all PDF documents.                                                                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Installation and    | Plug-ins must be placed in the Plug_ins folder or directory by an installer or by the user.                                                                                  | Document-level JavaScript code is easier to distribute since it can be included directly within the PDF file and does not require an installer. Folder-level JavaScript code must be placed in the Acrobat DC application JavaScript folder or the user's JavaScript folder. |
| distribution**        |                                                                                                                                                                              |                                                                                                                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Low-level access**  | Plug-ins can access and manipulate low-level objects in the PDF object model, such as the Cos layer.                                                                         | JavaScript can access a limited set of AV and PD layer objects.                                                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Execution speed**   | Plug-ins are compiled and loaded when Acrobat DC initializes.                                                                                                                | Execution of JavaScript code is slower than plug-in code because it is interpreted instead of compiled. However, the difference is noticeable only in computation-intensive applications, such as a full-text search in a large PDF file.                                    |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Ease of             | Plug-ins are developed in C or C++ and are compiled and linked in the appropriate development environment. You must include all necessary header files for your application. | JavaScript scripts are easier to write and implement since they are developed using the editor and debugger that come as part of Acrobat Professional DC. Developers can also use an external editor to create and edit JavaScript code.                                     |
| implementation**      |                                                                                                                                                                              |                                                                                                                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Cross-platform      | Plug-ins must be built on different platforms to handle certain platform-specific issues.                                                                                    | JavaScript is cross-platform compatible.                                                                                                                                                                                                                                     |
| compatibility**       |                                                                                                                                                                              |                                                                                                                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



Feature comparison
~~~~~~~~~~~~~~~~~~

Finally, while some JavaScript and plug-in capabilities overlap, others are only available in JavaScript while others are only available with a plug-in as summarized in the table below. JavaScript for Acrobat is well-suited to quickly tasks such as adding user interface capabilities, forms processing, interacting with databases and web services, and so on.

.. tip::

   Some of these example tasks, such as SOAP and web services, can in fact be done with a plug-in by using low-level APIs. However, this is a time-consuming approach and requires an in-depth knowledge of the low-level APIs.

.. _section-2:


 

+------------------------------------------------------------+------------+---------+
| Capability                                                 | JavaScript | Plug-in |
+============================================================+============+=========+
| Use SOAP and web services                                  | Yes        | No      |
+------------------------------------------------------------+------------+---------+
| Manipulating multimedia                                    | Yes        | No      |
+------------------------------------------------------------+------------+---------+
| Automate email review workflow                             | Yes        | No      |
+------------------------------------------------------------+------------+---------+
| Search Acrobat Help                                        | Yes        | No      |
+------------------------------------------------------------+------------+---------+
| Use Acrobat security policies                              | Yes        | No      |
+------------------------------------------------------------+------------+---------+
| Use content stream and other low-layer access              | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Add content to a PDF file by using a content stream        | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Create new menus or toolbars                               | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Create new annotation or action types                      | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Modify the ASFixed scaling factor for large PDF file sizes | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Access platform-specific services or events                | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Getting and setting wireframe drawing mode                 | No         | Yes     |
+------------------------------------------------------------+------------+---------+
| Accessing Cos and other low-layer objects                  | No         | Yes     |
+------------------------------------------------------------+------------+---------+

.. raw:: html

   <a name="40364"></a>

Interapplication communication
------------------------------

To take advantage of Acrobat DC functionality from within an external application, use interapplication communication (IAC). Acrobat DC provides support for IAC through OLE automation and DDE on Windows as well as Apple events and AppleScript on Mac OS. Acrobat Reader also supports IAC, but does not support OLE on Windows.

IAC support allows programs to control Acrobat DC or Acrobat Reader in much the same way a user would. You can also use IAC support to render a PDF file into an external application window instead of the Acrobat DC window. The IAC methods and events serve as wrappers for some of the core API calls in the SDK.

On Windows, you can develop IAC applications using Visual Basic .NET, Visual C++ .NET, or Visual C# .NET. On Mac OS, you develop IAC applications using Xcode. CodeWarrior is not supported.

For more documentation, see the `IAC Developer Guide <http://www.adobe.com/go/acrobat_developer>`__ .

Viewing PDF documents from an external application
--------------------------------------------------

If your Windows application only views a PDF document and does not need to edit it in any way, use the PDF Browser Controls to view the document from your external VB or C# application. When you open a document for viewing using the PDF Browser Controls, the document is displayed in the application window. Acrobat DC toolbars are also displayed and can be used with no additional API calls. The toolbars can be hidden. Acrobat DC or Acrobat Reader must be installed for the PDF Browser Controls to work.

You can also use the IAC API to open and view a PDF document. However, when you use the IAC API, no toolbars are displayed. You must place your own buttons with corresponding API calls for standard toolbar tasks such as printing and searching.

Controlling Acrobat from an external application
------------------------------------------------

If you need to do more than just view a PDF document from your application, you can use the IAC API to perform these tasks:

-  Get annotations, text and form data from a PDF document
-  Search a PDF document
-  Manipulate a PDF document, editing and adding content

Control Acrobat DC (but not Acrobat Reader) remotely

.. raw:: html

   <a name="45334"></a>

Plug-ins for IAC
~~~~~~~~~~~~~~~~

You can extend the functionality of the IAC interfaces by writing plug-ins that use core API objects that are not already part of the IAC support system. The Acrobat SDK provides a sample that demonstrates this. For more information, see the `Acrobat SDK Samples Guide <http://www.adobe.com/go/acrobatsdk_samplesguide>`__ .

JavaScript support
~~~~~~~~~~~~~~~~~~

Acrobat DC provides a rich set of JavaScript programming interfaces that are designed to be used from within the Acrobat DC environment. It also provides a mechanism that allows external clients to access the same functionality from environments such as VB .NET, Visual C++ .NET and Visual C# .NET.

Windows support
~~~~~~~~~~~~~~~

Acrobat DC is an OLE server and also responds to a variety of OLE automation messages. You can embed PDF documents into documents created by an application that is an OLE client. Acrobat Reader does not support OLE.

On Windows, you can display a PDF document in applications using simplified browser controls. In this case, the PDF is treated as an ActiveX document, and the interface is available in Acrobat Reader.

Once the PDF document is loaded, you can implement browser controls to perform the following tasks:

-  Determine which page to display
-  Control view and zoom modes
-  Determine whether to display bookmarks, thumbnails, scrollbars, and toolbars
-  Print pages using various options
-  Highlight a text selection

Apple event support
~~~~~~~~~~~~~~~~~~~

The Acrobat DC viewers support Apple events and a number of Apple event objects on Mac OS. IAC support includes some of the objects and events described in *Apple Event Registry: Standard Suites* , as well as Acrobat DC-specific objects and events.

You can find information on Apple events supported by the Acrobat DC Search plug-in by referring to the *Acrobat and PDF Library API Reference* . Other plug-ins supporting additional Apple events are described in `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ .

.. raw:: html

   <a name="66717"></a>

Adobe PDF Library
-----------------

The Adobe PDF Library is based on the core technology of the Acrobat DC line of products and offers complete functionality for generating, manipulating, rendering, and printing Adobe PDF documents.

Designed specifically for OEMs, ISVs, system integrators, and enterprise IT developers, the Adobe PDF Library SDK contains a set of functions for developing third-party solutions and workflows around PDF. The library enables PDF functionality to be seamlessly embedded within applications without the presence of Acrobat DC or Acrobat Reader. It also provides a reliable, accurate, and Adobe-supported implementation of the latest PDF specification.

There is significant overlap between the functionality provided by the PDF Library SDK and the Acrobat SDK. They differ in providing access to the Acrobat DC user interface:

-  The Acrobat SDK is designed for Acrobat product environments and allows you to control and interact with the Acrobat DC user interface.
-  The PDF Library SDK is intended for interaction between PDF and other applications, such as high volume batch processing and PDF generation applications. It does not export methods for creating or managing Acrobat DC user interface elements—that is, the AcroView (AV) layer of the core API.

For more documentation, see the `IAC Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .
