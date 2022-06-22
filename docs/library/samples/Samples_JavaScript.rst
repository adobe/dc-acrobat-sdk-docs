******************************************************
JavaScript Samples
******************************************************

JavaScript Samples Portfolio
============================

**Location**


JavaScript/Samples/Portfolio

**Description**

A portfolio (a new feature introduced in Acrobat 9.0) which packages and organizes all Acrobat SDK JavaScript samples into folder hierarchies.

Upon opening this portfolio document, the embedded document JavaScript enumerates the content of the portfolio and prompts the user information about the details of files contained in the portfolio. The "Install Folder-level JavaScript Samples" button facilitates installation of folder-level JavaScript samples contained in the portfolio to your user JavaScript folder.

Notice that on Windows Vista, the user JavaScript folder is hidden by default. Please modify your file system folder option to reveal hidden folders and files prior to initiating the folder-level JavaScript installation to ensure uninterrupted installation process.



AddSignature
============

.. _location-1:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-1:

**Description**


Shows how to programmatically sign a PDF document using a predefined digital ID file. The JavaScript code includes all the digital signature information used to sign the document, except the path and password for the digital ID file.

When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Add My Signature under the Edit/Acrobat SDK JavaScript menu.

When you are ready to sign a PDF document, click the newly added Add My Signature menu item. After you input the platform-independent path and the password through a dialog box, the program creates a digital signature field in the top left corner. The path and password are valid in an Acrobat session, so you can continue to sign more documents in the session without the input dialog box. If you change the JavaScript code to specify the path and password for the digital ID file to be used, then when you click the menu item, the program will automatically sign PDF documents without requiring the UI. A digital signature file ( DrTest.pfx ) is provided with the sample. To use it, put it in a folder, and specify the proper DIpath (for example ``/C/DrTest.pfx`` ). The password is "testpassword".

It is also possible to execute the JavaScript code to sign a PDF document from another JavaScript program, or from a plugin, Visual Basic (using interapplication communication), or Visual C++ program through the function ExecuteThisScript. See the source code for more information.

To execute the security-restricted method through a menu event in this sample, the item labeled Enable Menu Items JavaScript Execution Privileges under Edit > Preferences > JavaScript must be checked. An alternative way is to wrap up the security methods used in the code through a trusted function. For details and examples, see app.trustedFunction in the *JavaScript for Acrobat API Reference* .

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

AddToolbarButton
================

.. _location-2:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Embedded JavaScript/

.. _description-2:

**Description**


This sample shows how to add/remove toolbar buttons in Acrobat using the Acrobat JavaScript APIs. The resulting button has warning text below it that tells the user that the added tool is a JavaScript window, as a security measure.

**Usage**


Click the Add Toolbar Button to add a toolbar button of a running man. When you click that item, you will see a message "You have clicked the JavaScript toolbar button". Click the Remove Toolbar Button to remove the toolbar button.

AnnotatedWords
==============

.. _location-3:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-3:

**Description**


This script returns to the console the words covered by highlight annotations. The script can be adapted to output the text elsewhere, such as to a file. It can also be edited to include other text-related annotations, such as underline or cross-out.

This script is limited to single-column, left-to-right, top-to-bottom, horizontal, non-overlapping text. Vertical text, text bound to a shape, right-to-left text, etc., may not work.

Annotated text is reported annotation by annotation in the order that the annotations were applied to the doc (appear in the annotations array), not in reading order or any other word order on the page.

This script uses doc.getPageNthWordQuads() to obtain its results. As such, it cannot report partial words under an annotation. Instead, any word that is partially covered by an annotation is included in the output. Additionally, line spacing, document origin, font size and other factors may affect how closely an annotation's quads and a word's quads overlap. For some documents, the results may not be accurate. Please see in-line comments for more information.

.. _usage-1:

**Usage**


When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Copy Annotated Words under the Edit/Acrobat SDK JavaScript menu.

The script will work on the active document and output words covered by highlight annotations to the console in a page-by-page list.

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

AnnotSample
===========

.. _location-4:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-4:

**Description**


Folder level JavaScript code to exercise the annotation APIs useful in reviewing workflow. It can be used with a rights-enabled PDF document in Adobe Reader as well as regular PDF documents in Acrobat.

.. _usage-2:

**Usage**


When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Annotation Sample under the Edit/Acrobat SDK JavaScript menu.

It will trigger a JSADM dialog box to show the following functions:

-  Set annotations as read only or editable
-  Import annotations from a local FDF file
-  Export all annotations to a local FDF file
-  Export editable annotations to a local FDF file

You can try the functions while creating or modifying annotations in the PDF document.

To run the sample, you need to specify a path in the dialog box for a data repository in your environment. The path must be a safe path and in a platform-independent format, such as ``/c/test/myAnnotDataFile.fdf`` .

A test file, ReaderEnabledSample.pdf, with Reader-enabled usage rights is provided in the sample folder.

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

CallMediaActionScript
=====================

.. _location-5:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Multimedia/

.. _description-5:

**Description**


This sample demonstrates the ability to invoke ActionScript methods embedded in the Rich Multimedia Annotation from Acrobat JavaScript.

ActionScript methods to be exposed to the ExternalInterface of the container (Acrobat Flash Framework) register themselves as callable from the container via the ExternalInterface.addCallback method.

ConvertDate
===========

.. _location-6:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Embedded JavaScript/

.. _description-6:

**Description**


ConvertDate.pdf is a JavaScript sample that demonstrates how to convert the PDF date format to a JavaScript date object and back again. It also shows how to display the JavaScript date in various formats using utility methods.

.. _usage-3:

**Usage**


There are three operation groups with instructions. Click the buttons and check results shown in text fields. You can convert the PDF date to a JavaScript date object with various formats, input your own date in the PDF format to check the conversion result, and convert the JavaScript date back to the PDF format.

DeleteNoCommentPages
====================

.. _location-7:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-7:

**Description**


DeleteNoCommentPages is a folder-level JavaScript code that can be useful in review workflows. It is similar to the Acrobat 6 Summarize Comments option which deleted pages without comments as it summarized.

.. _usage-4:

**Usage**


When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Delete Pages without Comments under the Edit/Acrobat SDK JavaScript menu.

To run the sample, select Edit > Acrobat SDK JavaScript > Delete Pages Without Comments.

This script provides a status message (alert) upon completion. It can be removed for silent operation, such as batch processing. The processed document is not saved.

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

EventState
==========

.. _location-8:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Multimedia/

.. _description-8:

**Description**


Demonstrates two ways for event listeners to have a local persistent state. It is particularly helpful to developers in writing multimedia event listeners. The boxes in the top row are ScreenAnnots with event listeners that log events to the list boxes below. Click each one to start logging, then move the mouse around among them and click some more to watch the events being logged.

The main functions are document-level JavaScript code. The two ScreenAnnots on the left use local variables and nested scope, and the two on the right use properties in the event listener object.

*System Requirements.* Acrobat 6.0 or later. The machine should be ready for multimedia play - sound card, speaker, proper system settings, and a multimedia player, such as Windows Media Player, QuickTime, or Flash.

GoToBookmark
============

.. _location-9:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-9:

**Description**


Provides a utility for users to get to a bookmark in a PDF document in Acrobat. If found, it executes the bookmark action defined in the PDF file. Usually this results in a page view, but other bookmark actions are possible.

The function GoToBookmark, demonstrated in this sample file, could be used, for instance, in accessing Help information in PDF documents. A help function could call this JavaScript method, specifying the PDF Help document and the bookmark to be found. The PDF page referenced by that bookmark would then be shown if the search succeeds.

When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Go To Bookmark under the Edit/Acrobat SDK JavaScript menu. Click on it to get a dialog box to fill in your search criteria.

The input string is the full name of a bookmark to be found. The search is case insensitive. For example, if you open this Samples Guide PDF file, select the Go to Bookmark... menu item, enter the string "GoToBookmark", and click OK, you will go to the beginning of this section because that heading is the first bookmark with the given name.

You may also specify the hierarchy level of your search in various ways, as in these examples:

``SDKJSSnippets`` - Gets the first match in any level

``"Guide to SDK Samples:JavaScript Samples:Inside PDF:SDKJSSnippets"`` - A completely specified hierarchy in which each token is one level down from the previous.

``"Guide to SDK Samples:*:SDKJSSnippets"`` - A wildcard hierarchy in which "*" means there may be any number of levels there, including no level between.

The search process may be time consuming for a PDF document with a large number of bookmarks. To cancel the process, press Esc on Windows or Command-period on Mac OS. A progress bar is implemented using the thermometer JavaScript object.

JSCollection
============

.. _location-10:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/

.. _description-10:

**Description**


A collection of JavaScript snippets organized by function and fully indexed for easy access. It includes sections for Acrobat forms(field manipulation, data validation, etc.) and for documents (bookmarks, navigation, etc.). This collection provides a range of basic JavaScript samples which can be cut-and-pasted into a PDF document to perform basic tasks or to help build larger workflow solutions.

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

JSCollectionDemo
================

.. _location-11:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Embedded JavaScript/

.. _description-11:

**Description**


Includes several JavaScript snippets that demonstrate Acrobat JavaScript objects and methods. Each page in this sample document contains an independent piece of JavaScript sample code. The availability of JavaScript objects depends on the viewer type, platform, and code location, so some snippets have certain restrictions. For example, Text-To-Speech is a Windows-only sample; and Use of Template, Add Links, and Metadata do not work on Adobe Reader.

Contents:

-  Execute a JavaScript - assigns text input of JavaScript code to a button action and executes the input code with the button.
-  Popup Menu - creates a popup menu.
-  Metadata - shows a quick way to get document metadata in XML-formatted text.
-  Full screen - displays a PDF document as an automatically-progressing, full-screen slideshow.
-  Progress Bar - displays a progress bar at the bottom of the Acrobat viewer window.
-  Add Links - creates new links at specified words in a page.
-  Text-To-Speech - presents a simple sample to speak the user's input text.
-  Calculator - presents a functional calculator made by Acrobat forms with JavaScript.
-  Show/Hide Text - shows text blocks one-by-one at the touch of a hidden button, as in a PDF presentation.
-  Conditional Text - shows or hides fields as might be used in a PDF presentation.
-  Printing - controls document printing through JavaScript print parameters.
-  Use of Template - adds a new page using a predefined page template.

Due to the functionality restriction, the following snippets won't work on Adobe Reader:

-  Metadata
-  Add Links
-  Text-To-Speech
-  Use of Template

There are annotations on each page in the file. Typically, the notes with the "Help" icon (question mark) provide help to users in running the snippet and the notes with the "Comment" icon (word balloon) are hints about how the snippet is implemented. Most of the JavaScript code is attached; users can look at it and modify it to experiment.

.. note::

   Will not run in Adobe Reader.

OCGLayerControl
===============

.. _location-12:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Embedded JavaScript/

.. _description-12:

**Description**


Demonstrates JavaScript APIs for PDF optional content groups. The code is embedded as document level and form field JavaScript.

.. _usage-5:

**Usage**


Exercise the sample by clicking the various buttons. The functions are self-explanatory.

.. note::

   Will not run in Adobe Reader.

PresentationMonitor
===================

.. _location-13:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-13:

**Description**


Creates a set of tools to monitor the progress of a presentation using PDF slides.

When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Presentation Monitor under the Edit/Acrobat SDK JavaScript menu. But before clicking the menu item, open a PDF file for the presentation (it is generally a PDF file including up to 30 slides). Now click the menu item to get a dialog box to enter the number of minutes you plan to use for the presentation. After that the monitor shown in the top of the slide page will start. When you go through the pages, check the following tools:

-  A message showing number of pages untouched.
-  A message showing time left.
-  A time progress bar.
-  A set of page icons:

The page icons with the different colors can indicate which page is current, and which pages have been visited.

When the mouse enters/exits a page icon, the page image will be shown/hidden in the top left corner.

Click a page icon to go to that page.

-  A check box (the second one in the top-right corner): check/uncheck to show or hide the time bar and page icons.
-  A quit button with "X" (in the top-right corner): click to quit the monitor tool.

.. note::

   While the Thermometer is available in Adobe Reader, this sample will not run there due to use of methods not available.

PresentationNote
================

.. _location-14:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-14:

**Description**


Creates a temporary note on top of the front PDF file to show the amount of time before a presentation begins.

When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Presentation Note under the Edit/Acrobat SDK JavaScript menu. But before clicking the menu item, open the PDF file containing the presentation. Then click the menu item to get a dialog box. Enter the number of minutes before the start of the presentation and click the OK button to close the dialog box. The amount of time until the presentation begins will display and the time will be constantly updated until the specified time period is over. The display will last 10 seconds more after the end time, then go away. You may click the menu item again at any time to stop and remove the display.

RunMediaPlayers
===============

.. _location-15:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Multimedia/

.. _description-15:

**Description**


This Acrobat multimedia sample demonstrates the use of JavaScript to cue up two media players and then start them playing simultaneously.

Click the Play button to see the two movies playing. The movies have no sound. When you click the Play button, JavaScript code will open each player and install an afterReady event listener in each one. When all players have reported afterReady, the code calls the play() method on each player. This way, the players start within a fraction of a second of each other.

*System Requirements.* Acrobat 6.0 or later. The machine should be ready for multimedia play - sound card, speaker, proper system settings, and a multimedia player, such as Windows Media Player, Apple QuickTime, or Adobe Flash.

ScriptEvents
============

.. _location-16:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Multimedia/

.. _description-16:

**Description**


This Acrobat multimedia sample demonstrates JavaScript commands sent from a Flash movie. This is a sample showing how to write JavaScript event listener functions to send out movie commands from a movie object, and interpret movie commands as you wish.

Click on the movie in the upper-right box, and the movie will begin to play and write scripts to the bottom script window.

Main functions are set as document-level JavaScript. An AfterScript listener function was created to send out the movie command with a parameter which is the movie script.

SilentPrint
===========

.. _location-17:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-17:

**Description**


Folder level JavaScript code to demonstrate the print APIs. It can be used in Adobe Reader as well as Acrobat. There are many print options that users may set up in the JavaScript print parameters. See the *JavaScript for Acrobat API Reference* and *Developing Acrobat Applications Using JavaScript* for further information about silent print functionality.

.. _usage-6:

**Usage**


When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Silent Print under the Edit/Acrobat SDK JavaScript menu. Click on it to print the current document to the default printer without displaying the Print dialog box.

StoreFormData
=============

.. _location-18:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Embedded JavaScript/

.. _description-18:

**Description**


Demonstrates that a searchable database can be embedded inside a PDF form document, using the Doc's data object methods and other objects and methods. The code in this sample is located inside a PDF document, but it can be modified to be folder-level code to work with other PDF form files.

.. _usage-7:

**Usage**


Some form data are already embedded in the PDF document, and you can click a form data entry under the Form Data List bookmark to retrieve the data. You can delete a bookmark to remove the data entry. There are buttons for you to reset form fields, to add or modify a set of data, and to search for certain form data. Click the Help button to get to the second page for detailed instructions.

.. note::

   Will not run in Adobe Reader.

TextExtract
===========

.. _location-19:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Non-Embedded JavaScript/

.. _description-19:

**Description**


A folder level JavaScript sample that demonstrates how to extract the text in PDF page contents and save it to a local file. The JavaScript Doc.getPageNthWord method is used to get the words one by one from the current page, and then a data object is created and exported.

.. _usage-8:

**Usage**


When you open the Acrobat SDK JavaScript Samples Portfolio.pdf, a dialog prompts you with basic information about sample files contained in the portfolio. Clicking on the "Install Folder-level JavaScript Samples" button and follow the steps to copy JavaScript samples to your user's ``JavaScript`` folder. When you restart Acrobat you should see a new item Extract Text under the Edit/Acrobat SDK JavaScript menu. When the new menu item is clicked, you can select a file to where you can save the text extracted from the current page. You can use Microsoft Word to view the text file.

.. note::

   Requires Reader-enabled PDF document to run in Adobe Reader.

TwoPartInvention
================

.. _location-20:

**Location**


JavaScriptSupport/Acrobat SDK JavaScript Samples Portfolio.pdf/Home/JavaScript Samples/Multimedia/

.. _description-20:

**Description**


Demonstrates how to use script events to synchronize UI and multimedia playback. This is a PDF document with sheet music you can click to play back. The music is a QuickTime file which contains a MIDI track. A C++ program using the QuickTime API was used to add a marker at each measure in the QuickTime file, and a script event at each measure and beat within a measure. When the music is playing, the script events trigger JavaScript code in the PDF document that outlines the current measure and beat and turns the page when needed. You can also click a measure for the music to jump to.

You can click About to learn the implementation details.

*System Requirements.* Acrobat 6.0 or later. The machine should be ready for multimedia play - sound card, speaker, proper system settings, and a multimedia player, such as Windows Media Player, QuickTime, or Flash.

.. note::

   Will not run in Adobe Reader.
