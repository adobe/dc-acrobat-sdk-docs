******************************************************
JavaScript Contexts in Acrobat
******************************************************

JavaScript for Acrobat can be placed in a variety of locations, both external to the document, and within the document. This chapter discusses how to determine the appropriate location for a script, and how to create and access the scripts.

.. raw:: html

   <a name="40979"></a>

The concept of a JavaScript event
=================================

All scripts are executed in response to a particular *event*. There are several *types* of events:

-  App: When the Viewer is started, the Application Initialization Event occurs. Script files, called Folder Level JavaScripts, are read in from the application and user JavaScript folders. See `Folder level <JS_Dev_Contexts.html#11693>`__ for additional details.
-  Batch: A batch event occurs during the processing of each document of a batch sequence.
-  Bookmark: This event occurs whenever a user clicks on a bookmark that executes a script.
-  Console: A console event occurs whenever a user evaluates a script in the console. See `Executing JavaScript <JS_Dev_Tools.html#14633>`__.
-  Doc: This event is triggered whenever a document level event occurs. For more information, see `Document level <JS_Dev_Contexts.html#63210>`__.
-  External: This event is the result of an external access, for example, through OLE, AppleScript, or loading an FDF
-  field: This event is triggered when the user interacts with an Acrobat form, see `Field level <JS_Dev_Contexts.html#35244>`__ for more information.
-  Link: This event is triggered when a link containing a JavaScript action is activated by the user.
-  Menu: A menu event occurs whenever JavaScript that has been attached to a menu item is executed. In Acrobat 5.0 and later, the user can add a menu item and associate JavaScript actions with it.
-  Page: This event is triggered when the user changes pages in the document. See `Page level <JS_Dev_Contexts.html#11553>`__ for more information.
-  Screen: This event is triggered when the user interacts with a multimedia screen annotation.

These types of events may be initiated, or triggered, in a number of different ways, for example, in response to a mouse up, a mouse down, a keystroke, on focus, or on blur. These are referred to by the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ as the event *names*. Event types and names appear in pairs. For example, if an action is initiated by clicking a button, this would generate a Field type event, triggered by a mouse up event; consequently, we refer to such an event as a field/mouse up event.

The table that follows lists all event type/name combinations.

Event type/name combinations

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Event type
     - Event names

   * - App
     - Init

   * - Batch
     - Exec

   * - Bookmark
     - Mouse Up

   * - Console
     - Exec

   * - Doc
     - DidPrint, DidSave, Open, WillClose, WillPrint, WillSave

   * - External
     - Exec

   * - Field
     - Blur, Calculate, Focus, Format, Keystroke, Mouse Down, Mouse Enter, Mouse Exit, Mouse Up, Validate

   * - Link
     - Mouse Up

   * - Menu
     - Exec

   * - Page
     - Open, Close

   * - Screen
     - InView, OutView, Open, Close, Focus, Blur, Mouse Up, Mouse Down, Mouse Enter, Mouse Exit

An event manifests itself in JavaScript as an Event object. Complete documentation for the different event types of events and the ways in which they can be triggered can be found in the description of the Event object in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__.

.. raw:: html

   <a name="62945"></a>

About contexts
==============

JavaScript for Acrobat can be placed at a variety of levels:

-  *Folder* level: Scripts placed here respond to App type events.
-  *Document* level: Scripts placed here respond to Doc type events.
-  *Page* level: Scripts placed here respond to Page type events.
-  *Field* level: Scripts placed here respond to Field type events.
-  *Batch* level: Scripts are placed here respond to Batch type events.

Each of these levels represents a context, or location, in which processing occurs. The list above is by no means a complete list of locations at which scripts can be placed.

The placement of a script at a given level determines its reusability. Folder level scripts are available within all documents, document level scripts are available to all form fields within a given document, field level scripts are visible to the form fields with which they are associated.

.. note::

   For instructions on how to disallow changes to scripts or hide scripts, see `Disallowing changes in scripts <JS_Dev_Security.html#92285>`__ and `Hiding scripts <JS_Dev_Security.html#87292>`__.

.. raw:: html

   <a name="11693"></a>

Folder level
------------

Folder level scripts contain variable declarations and function definitions that may be generally useful to Acrobat, and are visible from all documents. Top level scripts, ones that are not contained in a function definition, are executed when the application is initialized.

There are two kinds of folder level scripts: *App* and *User*. For example, if you would like to add specialized menus and menu items to be available to all documents opened in Acrobat, you can store the code at the folder level.

Folder level scripts are placed in separate files that have the ``.js`` extension. App folder level scripts are stored in the Acrobat application's ``JavaScripts`` folder, and user folder level scripts are stored in the user's ``JavaScripts`` folder. These scripts are loaded when Acrobat starts execution, and are associated with the event object's *Application Initialization*.``App/Init``) event.

.. note::

   The locations of these folders can be found by executing the following lines in the JavaScript Debugger Console:

::

          // for App folder scripts
          app.getPath("app", "javascript");
          // for User folder scripts
          app.getPath("user", "javascript");

When Acrobat is installed on your machine, it provides you with several standard folder level JavaScript files, including ``JSByteCodeWin.bin`` (this file is a pre-compiled script that supports the forms and annotation plug-ins) and ``debugger.js`` ; these are in the App folder. Other JavaScript files in the App folder may be installed by third-party Acrobat plug-in developers.

The user folder may contain the files ``glob.js`` and ``config.js``. The ``glob.js`` file is programmatically generated and contains cross-session global variables set using the ``global`` object's ``setPersistent`` method. The ``config.js`` file is used to set user preferences or to customize the viewer UI by adding toolbar buttons or menu items. (See `Adding toolbar buttons and menu items <JS_Dev_ModifyUserInterface.html#46316>`__ for more information on this topic.) Any file with an extension of ``.js`` found in the user folder is also loaded by Acrobat during initialization, after it has loaded the files found in the App folder, and after it has loaded the ``config.js`` and ``global.js`` files.

To create folder level scripts, use an external editor running in parallel to Acrobat. Note that the external editor cannot be invoked from Acrobat for folder level scripts.

.. raw:: html

   <a name="63210"></a>

Document level
--------------

Document level scripts are variable and function definitions that are generally useful to a given document, but are not applicable outside the document.

-  Variable definitions: Define variables at the document level to make them visible to any executing script. For example,

::

              var defaultUserColor = "red";

The variable defined above, which has an initial value of ``"red"``, may be changed as the user interacts with the document.

-  Function definitions: Define functions at the document level that support the user interaction with the document. These functions may be utility functions for handling common tasks for string or number manipulation, or functions that execute lengthy scripts called by actions initiated by a user interacting with Acrobat form fields, bookmarks, page changes, and so on.

To create or access document level scripts in Acrobat, select Tools pane > JavaScript > Document JavaScript, which enables you to add, modify, or delete document level scripts. Document level scripts are executed after the document has opened, but before the first Page Open event (See `Page level <JS_Dev_Contexts.html#11553>`__). They are stored within the PDF document.

You can also create Doc level scripts programmatically using the ``addScript`` method of the Doc object.

In addition to document level scripts, there are document action scripts that execute when certain document events occur. Such document events are

-  Document Will Close: This event is triggered before the document is closed.
-  Document Will Save: This event is triggered before the document is saved.
-  Document Did Save: This event is triggered after the document is saved.
-  Document Will Print: This event is triggered, before the document is printed.
-  Document Did Print: This event is triggered after the document is closed.

To access the JavaScript Editor for each of these document actions, select Tools pane > JavaScript > Set Document Action.

You can also create the document actions just described programmatically using the ``setAction`` method of the Doc object.

.. raw:: html

   <a name="11553"></a>

Page level
----------

Page level scripts are scripts that are executed when a particular page is either closed or opened.

-  Page Open: This event is triggered whenever a new page is viewed and after the drawing of the page has occurred.
-  Page Close: This event is triggered whenever the page being viewed is no longer the current page; that is, the user switched to a new page or closed the document. Page Close will occur before the Document Will Close event.
-  To create a page level script:
-  Click the **Pages** tab.
-  Right-click a thumbnail and select **Page Properties**.
-  Select the **Actions** tab from the Page Properties dialog box.
-  In the **Select Trigger** list, choose either **Page Open** or **Page Close**.
-  In the **Select Action** list, choose **Run a JavaScript**.
-  Click **Add** to open the JavaScript editor.
-  To access or delete a page level script:
-  Click the **Pages** tab.
-  Select the page by clicking the page thumbnail.
-  Right-click a thumbnail and select **Page Properties**.
-  Select the **Actions** tab from the **Page Properties** dialog box.
-  Select any of the actions listed in the **Actions** list.
-  Click **Edit** or **Delete**.

Other actions, as listed in the Select Action Menu of the Page Properties dialog box, can be created, accessed and deleted in the same way.

Page level scripts can also be created programmatically using the ``setPageAction`` method of the Doc object.

.. raw:: html

   <a name="35244"></a>

Field level
-----------

Field level scripts are associated or attached to an Acrobat form field. Field events occur as the user interacts with the field, either directly or indirectly. Field scripts are typically executed to validate, format, or calculate form field values. Like document level scripts, field level scripts are stored within the PDF document.

There are several ways to create or edit field level scripts. The most straightforward manner is to right-click the form field, select the Properties context menu item and choose the Actions tab. Choose Run a JavaScript for Select Action and choose how to trigger the script from the Select Trigger Menu.

Field level scripts can also be created programmatically using the ``setAction`` method of the Field object.

.. raw:: html

   <a name="76421"></a>

Privileged versus non-privileged context
========================================

Some JavaScript methods have security restrictions. These methods can be executed only in a *privileged context* which includes console, batch, and application initialization events. All other events (for example, page open and mouse-up events) are considered *non-privileged*. In the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__, methods with security restrictions are marked by an *S* in the third column of the quick bar.

The description of each security-restricted method indicates the events during which the method can be executed.

Beginning with Acrobat 6.0, security-restricted methods can execute in a non-privileged context if the document is *certified* by the document author for embedded JavaScript.

Security-restricted methods can also execute in a non-privileged context through the use of a *trusted function* introduced in Acrobat 7.0).

In Acrobat versions earlier than 7.0, menu events were considered privileged contexts. Beginning with Acrobat 7.0, execution of JavaScript through a menu event is no longer privileged. You can execute security-restricted methods through menu events in one of the following ways:

-  By enabling the preferences item named Enable Menu Items JavaScript Execution Privileges.
-  By executing a specific method through a *trusted function* introduced in Acrobat 7.0). Trusted functions allow privileged code—code that normally requires a privileged context to execute—to execute in a non-privileged context. For details and examples, see documentation of the ``app.trustedFunction`` method in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__.

.. raw:: html

   <a name="30303"></a>

Executing privileged methods in a non-privileged context
--------------------------------------------------------

To illustrate the techniques required, let's work with a specific method, ``app.browseForFile``. According to the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__, this method can only be executed during batch or console events. This means that we are free to executed this method in the console, or to use it as a part of a batch sequence.

What happens when we execute this method in a non-privileged context? Create an Acrobat form button, and attach the following script as a mouse up JavaScript action.

::

      var oRetn = app.browseForDoc({bSave: true});

After clicking the button, an exception is thrown; the console displays the following message:

::

   NotAllowedError: Security settings prevent access to this property or method.
   app.browseForDoc:1:Field Button1:Mouse Up

This shows that we have violated the documented security restriction.

If we really want this method in our workflow what do we need to do? We need to move this method to folder JavaScript and declare it as a trusted function. Why move it to the folder context? Because you can only declare a function trusted from a folder (console or batch) context.

Navigate to the user JavaScript folder and open the file ``config.js`` in your text editor. Paste the following script into ``config.js`` :

::

   myTrustedBrowseForDoc = app.trustedFunction( function ( oArgs )
   {
      app.beginPriv();
          var myTrustedRetn = app.browseForDoc( oArgs ); 
      app.endPriv();
      return myTrustedRetn;
   });

For the syntax details of ``app.trustedFunction``, see the *JavaScript for Acrobat API Reference*. Note that the privileged script must be enclosed by the ``app.beginPriv`` and ``app.endPriv`` pair.

Save the file and restart Acrobat (folder JavaScript is read only at startup).

Now create a PDF with a single button on it. The script for that button is

::

      try {
              var oRetn = myTrustedBrowseForDoc({bSave: true});    
              console.println(oRetn.toSource());
      } catch(e) {
          console.println("User cancelled Save As dialog box");
      }

Clicking the button now executes the ``app.browseForDoc`` method without throwing the security exception.


In this example, we use the ``app.browseForDoc`` and the ``Doc.saveAs`` methods, both of which have security restrictions.

In ``config.js``, paste both the ``myTrustedBrowseForDoc`` script listed above, and paste this script:

::

   myTrustedSaveAs = app.trustedFunction( function ( doc, oArgs )
   {
      app.beginPriv();
          var myTrustedRetn = doc.saveAs( oArgs ); 
      app.endPriv();
      return myTrustedRetn;
   });

Note that the Doc object is passed to this trusted function. Now, revise the button described above to read as follows:

::

   try {
      var oRetn = myTrustedBrowseForDoc({bSave: true});    
      try { 
              myTrustedSaveAs(this, { cPath: oRetn.cPath, cFS:oRetn.cFS });
          } catch(e) { console.println("Save not allowed, perhaps readonly."); }
      } catch(e) { console.println("User cancelled Save As dialog box");}

Now, the PDF document, through a mouse up button action, can open a Save As dialog box and save the current document.

.. raw:: html

   <a name="40133"></a>

Executing privileged methods through the menu
---------------------------------------------

In versions of Acrobat previous to 7.0, executing JavaScript through a menu was non-privileged. This is no longer the case. To execute *privileged* JavaScript through a menu event there are now two choices:

#. Ask the user to enable the Enable Menu Items JavaScript Execution Privileges option, in the JavaScript section of the Preferences.
#. Use the trusted function approach discussed above.

In this section we discuss the first alternative.

Open ``config.js``, found in the user's JavaScript folder, and paste the following script:

::

   app.addSubMenu({ cName: "New", cParent: "File", nPos: 0 })
   app.addMenuItem({ cName: "Letter", cParent: "New", cExec: "app.newDoc();"});
   app.addMenuItem({ cName: "A4", cParent: "New", cExec: "app.newDoc(420,595)"});

As usual, restart Acrobat so that the ``config.js`` file is read. Under the File menu, there is now a menu item named New, with a sub menu with two items, Letter and A4.

With the Enable Menu Items JavaScript Execution Privileges option *not* enabled, upon the execution of one of these menu items, either File > New > Letter or File > New > A4 are executed, an alert box appears declaring that "An internal error occurred", and the console shows the following error message:

::

   1:Menu Letter:Exec
   NotAllowedError: Security settings prevent access to this property or method.
   app.newDoc:1:Menu Letter:Exec

The problem is ``app.newDoc``, a method that has a *security restriction*.

Now enable the Enable Menu Items JavaScript Execution Privileges option and execute the same menu item again, a new document is created, the menu operates as designed.

The above discussion shows what happens when you try to executed a privileged method through the menu system and how to work around the restrictions on privileged methods by enabling the Enable Menu Items JavaScript Execution Privileges option of the JavaScript section of the Preferences.

A note of caution. An Acrobat developer, cannot assume the user has enabled the JavaScript execution privileges options; indeed, in a corporate setting, enabling this option may not be allowed for security reasons. An Acrobat developer using JavaScript should perhaps use the trusted function approach, as discussed in `Executing privileged methods in a non-privileged context <JS_Dev_Contexts.html#30303>`__, which necessarily implies the installation of folder JavaScript on the user's system.

Executing privileged methods in a certified document
----------------------------------------------------

Many of the JavaScript methods in Acrobat are restricted for security reasons, and their execution is only allowed during batch, console or menu events. This restriction is a limitation when enterprise customers try to develop solutions that require these methods and know that their environment is secure.

Three requirements must be met to make restricted JavaScript methods available to users.

-  You must obtain a digital ID.
-  You must sign the PDF document containing the restricted JavaScript methods using the digital ID.

For details on where you can obtain digital IDs and the procedures for using them to sign documents, see Acrobat Help.

-  The recipient should trust the signer for certified documents and JavaScript.

For details, see Acrobat Help.

All trusted certificates can be accessed by selecting Certificates from **Preferences > Signatures > Identities & Trusted Certificates > more** in the Acrobat main menu.
