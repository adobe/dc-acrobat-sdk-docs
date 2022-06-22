******************************************************
Windows - Interapplication Communications
******************************************************

AcrobatActiveXVB
================

**Location**


IAC/win/VBSamples/AcrobatActiveXVB

**Description**


Demonstrates how to use the Acrobat ActiveX control to embed a PDF document window with toolbars in a VB.NET application. It also shows how to use the ActiveX APIs to create user graphical interfaces to externally control the PDF window.

Acrobat provides a COM-based automation interface (AcroPDF.dll). You can add it to your project's references to add the control to your toolbox. Once you drag the ActiveX control to a window in your application, you can open a PDF document window with tool bars. You can also use the APIs provided by the ActiveX control to programmatically manage the window for opening a PDF file from a URL or a local disk, page navigation, setting display mode or style, hiding tool bars, and so on.

**Usage**


You must have Acrobat or Adobe Reader installed to run this VB.NET application. You can access a PDF document in a URL or open a PDF document on a local disk, and then use the tool bar in the ActiveX control or the buttons and dialog boxes implemented with APIs to control the PDF document window.

AcroPDFInHTML
=============

.. _location-1:

**Location**


IAC/win/HTMLSamples/AcroPDFInHTML

.. _description-1:

**Description**


A simple example of using the PDF control embedded in an HTML page. The <OBJECT> tag with a unique classid for AcroPDF ActiveX control is used to embed it. That is, classid="clsidCA8A9780-280D-11CF-A24D-444553540000".

This sample also demonstrates how to use the automation API on the control from client-side JavaScript.

.. _usage-1:

**Usage**


Users must have Internet Explorer installed on their machine. To make the sample work properly, set the option to allow blocked content. For example, the user can click the security bar.

The sample includes four HTML files. Click the frameset1.htm file to start. A web page with frames will display in the browser. Input a URL to a PDF file and click the Go button to pop up the PDF ActiveX control. There are two buttons in the left frame, the user can click to move to the previous or next page. The sample code only works with Internet Explorer on Windows, but the approach can be adapted for other browsers.

ActiveViewVB
============

.. _location-2:

**Location**


IAC/win/VBSamples/ActiveViewVB

.. _description-2:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use the Acrobat automation interface to display an interactive view of a PDF document within a VB.NET application window.

.. _usage-2:

**Usage**


This sample is an MDI application that opens PDF documents as if the application were rendering them itself. The user can perform a number of operations to edit the PDF document and manipulate the view.

ActiveViewVC
============

.. _location-3:

**Location**


IAC/win/CSamples/ActiveViewVC

.. _description-3:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use the Acrobat automation interface to display an interactive view of a PDF document within a VC.NET application's window.

.. _usage-3:

**Usage**


ActiveView is an MDI application that opens PDF documents as if the application were rendering them itself. The user can perform a number of operations to edit the PDF document and manipulate the view.

AdobePDFSilentVB
================

.. _location-4:

**Location**


IAC/win/VBSamples/AdobePDFSilentVB

.. _description-4:

**Description**


This Visual Basic sample demonstrates how to silently print to the Adobe PDF printer. It processes files from a specified input directory (the default is the application's current directory) and places output PDF files in a specified output directory (the default is the current directory). If a valid directory is not specified, output is directed to My Documents. Output file names are created from the original file name with a .pdf extension.

The application uses Windows printing and can process file types for which there is a registered application, that is, Print appears on the file's context menu. Note that the application will try to process a file that has an associated application for opening the file even if it does not have a print process associated with it. That is, the file's context menu has an Open item but not a Print item. This may generate an unhandled exception. To manage such occurrences, there is an array of file types (file extensions) not to process. The array is initially set to ignore three file extensions: .dll, .exe and .pdf. Others may be added. Files for which an associated application cannot be found are skipped (not converted) without notice.

Because this application is dependent on Windows printing and specific registry entries, successful conversion of specific files, types and locations will vary from machine to machine and user to user. Careful testing should be done to ensure desired results can be achieved.

.. _usage-4:

**Usage**


The application (AdobePDFSilent.exe) can be invoked from the command line. One or two arguments are required for automated use. If one argument is specified, it is used for both the Input and Output directory paths. If two arguments are included, the first is used to set the Input directory path and the second is used for the Output directory.

To prevent the created PDF documents from opening an Acrobat viewer, unselect the View Adobe PDF Results option in the Adobe PDF print driver printing preferences.

BasicIacCS
==========

.. _location-5:

**Location**


IAC/win/C#Samples/BasicIacCS

.. _description-5:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) A simple sample that provides the minimum code to use the interapplication communication in a C# application. It includes code to launch Acrobat, open a PDF file (``TwoColumnTaggedDoc.pdf`` in the ``IACTestFiles`` directory), and get simple information (the number of pages).

BasicIacJsoVB
=============

.. _location-6:

**Location**


IAC/win/VBSamples/BasicIacJsoVB

.. _description-6:

**Description**


This simple Visual Basic sample demonstrates how to use the interapplication communication (IAC) JavaScript object in Visual Basic applications. It includes the minimum code to create IAC objects and use their properties and methods. The program opens a PDF file (``IACTestFilesTestForm.pdf`` ) and gets some information about the document (number of pages, number of words, and number of form fields).

BasicIacOCXCS
=============

.. _location-7:

**Location**


IAC/win/C#Samples/BasicIacOCXCS

.. _description-7:

**Description**


Demonstrates how to use the PDF ActiveX control in a C# application.

.. _usage-5:

**Usage**


This sample displays two PDF windows within the sample form. Type in a URL or browse a local PDF file by clicking a Browse button. The file specified in the Address field will be displayed in the corresponding PDF window after you click Go. The two windows can display the same or different PDF files.

BasicIACVB
==========

.. _location-8:

**Location**


IAC/win/VBSamples/BasicIacVB

.. _description-8:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) A simple Visual Basic sample for interapplication communication. It includes the code to launch the Acrobat viewer, open a PDF file (``IACTestFilessample.pdf`` ), and get simple information (number of pages).

BasicIacVC
==========

.. _location-9:

**Location**


IAC/win/CSamples/BasicIacVC

.. _description-9:

**Description**


Provides the minimum code to use interapplication communication (IAC) in a Visual C++ application. The sample first creates an Acrobat IAC PDDoc object, then tries to open a sample file ``C:simple.pdf`` . If the file is opened successfully, it gets the number of pages and displays this number in the dialog box. Otherwise, it shows an error message.

DdeOpenVC
=========

.. _location-10:

**Location**


IAC/win/CSamples/DdeopenVC

.. _description-10:

**Description**


DdeOpenVC demonstrates how to communicate with Acrobat through DDE interfaces.

.. _usage-6:

**Usage**


The sample attempts to open a PDF document in Acrobat. The path ``"c:simple.pdf"`` is sent to Acrobat as the parameter of the FileOpenEx command. That file needs to exist.

**Implementation details**


DDE server executables must be running before external applications can initiate a conversation with them. The sample checks the following key in the registry to determine if Acrobat has been installed:

``HCLMMicrosoftWindowsCurrentVersionApp PathsAcrobat.exe``

If the key is found, the path stored under the key is launched.

DistillerCtrlVB
===============

.. _location-11:

**Location**


IAC/win/VBSamples/DistillerCtrlVB

.. _description-11:

**Description**


Demonstrates how to use the Acrobat Distiller automation interface to convert PostScript files to PDF in a VB.NET application.

.. _usage-7:

**Usage**


Click Select Input File to select the PostScript file that will be processed. The Visual Basic implementation also allows users to select a job options file to use when processing the file. The progress of the conversion operation is shown in the application window.

.. _implementation-details-1:

**Implementation details**


Both implementations receive progress updates from Distiller. This is achieved through the use of the _PdfEvents IConnectionPoint interface that the automation interface supports.

Visual Basic makes use of this interface rather easy - simply declare the Distiller application object with the WithEvents keyword, for example, ``Private WithEvents pdfDist As PdfDistiller``

When the WithEvents keyword is used, Visual Basic provides the framework for the application to provide implementations for each event in the interface. The C++ implementation is more involved. The application must provide an implementation of the _PdfEvents interface and register it with Distiller using the Advise method on the _PdfEvents IConnectionPoint interface.

DistillerCtrlVC
===============

.. _location-12:

**Location**


IAC/win/CSamples/DistillerCtrlVC

.. _description-12:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use the Acrobat Distiller automation interface to convert PostScript files to PDF in a C++ application.

.. _usage-8:

**Usage**


Click Select Input File to select the PostScript file that will be processed. There is one in IACTestFiles that you can use. The Visual Basic implementation also allows users to select a job options file to use when processing the file. The progress of the conversion operation is shown in the application window.

.. _implementation-details-2:

**Implementation details**


Both implementations receive progress updates from Distiller. This is achieved through the use of the _PdfEvents IConnectionPoint interface that the automation interface supports.

Visual Basic makes use of this interface rather easy - simply declare the Distiller application object with the WithEvents keyword, for example, ``Private WithEvents pdfDist As PdfDistiller``

When the WithEvents keyword is used, Visual Basic provides the framework for the application to provide implementations for each event in the interface. The C++ implementation is more involved. The application must provide an implementation of the _PdfEvents interface and register it with Distiller using the Advise method on the _PdfEvents IConnectionPoint interface.

DistillerCtrlWMVC
=================

.. _location-13:

**Location**


IAC/win/CSamples/DistillerCtrlWMVC

.. _description-13:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use the Acrobat Distiller Windows messaging interface to convert PostScript files to PDF in a C++ application.

.. _usage-9:

**Usage**


The sample allow users to select the PostScript file that will be processed. The user can also specify the level of interactivity that Distiller should use to determine the name of the output file.

.. _implementation-details-3:

**Implementation details**


An instance of the Distiller application must be running to receive the messages from the external application. The sample checks the following key in the registry to determine if Acrobat has been installed:

``HCLMMicrosoftWindowsCurrentVersionApp PathsAcroDist.exe``

If the key is found, the path stored under the key is launched.

External applications can initiate conversion operations within Distiller by sending it the WM_COPYDATA message. As the LPARAM parameter, you must pass a pointer to a COPYDATASTRUCT structure which contains (amongst other things) a DISTILLRECORD structure. The DISTILLRECORD structure contains the conversion parameters for the operation being performed.

For the WPARAM parameter, you can pass an HWND to which Distiller should report the status of each conversion operation. This response is also passed using a WM_COPYDATA message. When the specified HWND receives the reply message from Distiller, the LPARAM parameter contains a pointer COPYDATASTRUCT structure which contains a DISTILLRECORD structure. The param member of this structure will contain zero if the operation was completed successfully, or -1 if some error occurred.

ExecuteScriptIacVB
==================

.. _location-14:

**Location**


IAC/win/VBSamples/ExecuteScriptIacVB

.. _description-14:

**Description**


Demonstrates how to execute JavaScript code by calling the AcroForm OLE ExecuteThisScript method in Visual Basic applications. The default code writes information about the active PDF document to a new PDF report file, then opens the report. The program provides a dialog box for users to modify, rewrite, and execute their own JavaScript code.

.. _usage-10:

**Usage**


-  Click PDF Document to open or change the active PDF file open in Acrobat.
-  Click Execute to execute the JavaScript code. First try the default JavaScript code mentioned above, and check the PDF report in Acrobat. Close the report.
-  Click Clear to clear the text window, then input your JavaScript to execute.
-  Click Reset to restore the default JavaScript code.
-  Click Help to check the help message.
-  Click Close to quit the program. Acrobat viewer also quits if it is opened by this program or it has no PDF files opened.

The BasicIacVBJso sample also shows how to execute JavaScript code from an IAC application.

FillFormCS
==========

.. _location-15:

**Location**


IAC/win/C#Samples/FillFormCS

.. _description-15:

**Description**


Demonstrates how to fill a form from a C# application using interapplication communication.

.. _usage-11:

**Usage**


Run the application.It uses the PDF file in IACTestFilesSampleForm.pdf. The form field Name will be filled with value ``John Doe`` .

FormsAutomationVB
=================

.. _location-16:

**Location**


IAC/win/VBSamples/FormsAutomationVB

.. _description-16:

**Description**


Demonstrates how to create and manipulate form fields using the automation interface exposed by the Acrobat Forms plugin in a VB.NET application.

.. _usage-12:

**Usage**


Before running the sample you must copy the ``FormsAutomation.pdf`` file to the ``C:`` directory. The sample creates a variety of form fields in the file. It is best to have Acrobat open and visible to see the form creation.

To run as a batch process, save the form and close the file in Acrobat. There is commented-out code in the sample that shows how to do this.

JSObjectAccessVB
================

.. _location-17:

**Location**


IAC/win/VBSamples/JSObjectAccessVB

.. _description-17:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to access the JavaScript object model through the Acrobat automation interface.

The sample opens a PDF (IACTestFilesFormSample.pdf) with a template that contains form fields, loads data from a data file (IACTestFilesdata.txt), and then saves the resulting PDF in a outputfiles directory at the root level of the sample.

JSObjectControlCS
=================

.. _location-18:

**Location**


IAC/win/C#Samples/JSObjectControlCS

.. _description-18:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) The sample includes functionality to use the JSObject interface. After opening a document, you can affix a watermark, add form data to copies of the document, and/or search the document for a word.

A sample watermark stamp and files for testing forms are included in the IACTestFiles directory. These are RecievedStamp.pdf which can be used as a watermark, and FormSample.pdf and data.txt for the form testing.

JSOFindWordVB
=============

.. _location-19:

**Location**


IAC/win/VBSamples/JSOFindWordVB

.. _description-19:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) A JSObject sample that shows how to access JavaScript using Visual Basic. The approach is to get the JavaScript object from the PDDoc of a PDF file, then call JavaScript methods.

The application displays a dialog box in which the user can select a PDF file and input a word (in Roman characters only) to find. Clicking the Find Word button displays the page on which the word is first found and highlights the word. After each occurrence is found, the user is asked whether to continue the search. The final count of words found is displayed in the dialog box.

.. _implementation-details-4:

**Implementation details**


Since the JavaScript code runs slowly, it is not suitable for searching through a large PDF file.

RemoteControlAcrobatVC
======================

.. _location-20:

**Location**


IAC/win/CSamples/RemoteControlAcrobatVC

.. _description-20:

**Description**


An MFC Windows program that controls Acrobat remotely through IAC (interapplication communication). It shows how to start IAC, create IAC objects, and call their methods. The program has an Acrobat menu that has the following items:

Launch

-  App submenu: Show Acrobat, Hide Acrobat
-  AVDoc submenu: Open, Close, Print PDF, Find Text in PDF
-  AVPageView submenu: Display Page Number, Go to Next View, Go to Previous View, Go to Page
-  Exit

The menu item Find Text in PDF simply finds and highlights the first occurrence of a word in Roman characters. Since a workspace with sample code has been set up, the user can easily add any other Acrobat IAC objects and methods to the program. The source file ``RemoteControlAcrobat.cpp`` contains information about the program, its limitations, and how to extend it in real programs.

.. note::

   The other menus do not have handlers created for them, and so don't do anything.

SearchPdfVB
===========

.. _location-21:

**Location**


IAC/win/VBSamples/SearchPdfVB

.. _description-21:

**Description**


Demonstrates how to communicate with the Search plugin through its DDE interface. The DDE interface allows external applications to manage indices and initiate queries.

.. _usage-13:

**Usage**


The SearchPDF application divides its functionality into two distinct operations; index manipulation and search queries. Users can add, remove, enable, or disable index files.

Users can also formulate a search query and specify a number of query options, including the query parser to be used and the maximum number of documents returned.

.. _implementation-details-5:

**Implementation details**


The application uses a C-based DLL to manage the DDE conversation with the Search plugin. The interface provided by the DLL mimics the functionality exposed by the plugin's DDE interface. The DLL (``ddeproxy.dll`` ) should be in the system directory or the directory where the Visual Basic program is located.

StaticViewVB
============

.. _location-22:

**Location**


IAC/win/VBSamples/StaticViewVB

.. _description-22:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use Acrobat's automation interface to render the contents of a PDF page into a VB.NET application's window.

.. _usage-14:

**Usage**


StaticView is an MDI application that opens PDF documents as if the application were rendering them itself. The user can manipulate the view of the PDF document through the toolbar and View menu.

StaticViewVC
============

.. _location-23:

**Location**


IAC/win/CSamples/StaticViewVC

.. _description-23:

**Description**


(Adobe Acrobat only. Does not work on Adobe Reader.) Demonstrates how to use the Acrobat automation interface to render the contents of a PDF page into a C++ application's window.

.. _usage-15:

**Usage**


StaticView is an MDI application that opens PDF documents as if the application were rendering them itself. The user can manipulate the view of the PDF document through the toolbar and View menu.

.. note::

   When protected mode is enabled, the PDF opens in a temporary window.

WatermarkJsoVB
==============

.. _location-24:

**Location**


IAC/win/VBSamples/WatermarkJsoVB

.. _description-24:

**Description**


A VB.NET sample that shows how to add watermarks to a PDF document programmatically. Two JavaScript methods, addWatermarkFromFile and addWatermarkFromText, are used through the JavaScript object in the IAC application.

.. _usage-16:

**Usage**


The program will open IACTestFilesSamplePDF01.pdf and add IACTestFilesStamp.pdf as a water mark. It will save the resulting file in the root directory of the sample. A stamp with a date and time will be added to the top left corner of the first page of the PDF document.

Due to security restriction enforced by Vista, exercise this sample in one of the two ways on Vista: (1) Run Acrobat with "administrator" privilege, then run the sample with "administrator" privilege. (2) Make sure Acrobat is not running. Quit Acrobat if it is. Run the sample with "administrator" privilege. To run an application with administrator privilege, right-click on the application icon to bring up the context menu then select "run as administrator."

Note that logging in with administrator capacity does not override the security restriction.
