******************************************************
Modifying the User Interface
******************************************************

This chapter will provide you with an understanding of the ways in which you can present and modify the user interface. You will learn how to use JavaScript to add menu items and toolbars, customize navigation in PDF documents and customize PDF layers.

.. raw:: html

   <a name="46316"></a>

Adding toolbar buttons and menu items
=====================================

You can add menu items and toolbar buttons to help the user navigate through your application, or to help the user perform designated tasks.

Use ``app.addSubMenu`` and/or ``app.addMenuItem`` to add a menu item. The following example uses only ``app.addMenuItem``.

#. Adding a menu item

The intention of this menu is to add a button set to the toolbar; the button set will only appear on the toolbar if there is no document open in the window. Once the button set is installed on the toolbar, the menu item is only enabled if there is a document open in the window.

This code is placed in the user JavaScript folder and uses a variable ``atbtoolbuttons`` to detect if this menu item should be marked. It is set to marked if ``atbtoolbuttons`` is defined and is ``false``.

::

      var atbtoolbuttons;
      app.addMenuItem({ 
          cName: "atbToolButtonSet", 
          cUser: "My Menu",
          cParent: "Tools", 
          cMarked: "event.rc = ( (typeof atbtoolbuttons != 'undefined') 
              && !atbtoolbuttons )",
          cEnable: "event.rc = (event.target == null);",
          cExec: "loadATBToolButton();", nPos: 0 
   });

There is brief example of ``app.addSubMenu`` and ``app.addMenuItem``, see `Executing privileged methods through the menu <JS_Dev_Contexts.html#40133>`__.

The Example `Adding a menu item <JS_Dev_ModifyUserInterface.html#95641>`__ installs a menu item under the main Tools menu. When executed, the menu calls the function ``loadATBToolButton()``. This function loads the custom toolbar set, the definition of which follows.

#. Installing and uninstalling a toolbar

If this function is called with ``atbtoolbuttons`` set to ``false``, it means the toolbar is already installed, and the function uninstalls the toolbar set; otherwise, the toolbar set is installed.

The method ``app.addToolButton`` is used to add a toolbar button, and ``app.removeToolButton`` is used to remove a toolbar button.

For Acrobat 8, this script assumes that the Enable Global Object Security Policy is enabled in the JavaScript section of the Preferences, see the discussion in `Enable the global object security policy <JS_Dev_AcrobatForms.html#43014>`__.

The function ``loadATBToolButton`` is a trusted function because it executes privileged methods, such as ``app.getPath`` and ``app.openDoc``.

The icons for the toolbar buttons are contained in ``icon_toolbar.pdf``, which resides in the same folder as this script. The document contains two named icons with the names of ``myIcon1`` and ``myIcon2``. Note that according to the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__, the icon size is restricted to 20 by 20 pixels. If an icon of larger dimensions is used, an exception is thrown.

::

   var loadATBToolButton = app.trustedFunction( function ()
   {
      if ( typeof atbtoolbuttons == "undefined" )
          atbtoolbuttons = true;
      else {
          if (!atbtoolbuttons) {
              app.removeToolButton("atbToolButton1");
              app.removeToolButton("atbToolButton2");
              atbtoolbuttons = true;
              return;
          }
      }
      if ( atbtoolbuttons ) {
          app.beginPriv();
          // Get the path to the user JavaScript folder
          var atbPath=app.getPath({cCategory: "user", cFolder: "javascript"});
          try {
              // Try opening the icon doc as in hidden mode, and retrieve its doc 
              // object.
              var doc=app.openDoc({
                  cPath: atbPath+"/icon_toolbar.pdf", bHidden: true});
          } catch (e) { console.println("Could not open icon file"); return;}
          // Get the icon stream for myIcon1 from the hidden doc
          var oIcon = util.iconStreamFromIcon(doc.getIcon("myIcon1"));
          // Add a tool button using this icon
          app.addToolButton({
              cName: "atbToolButton1",
              oIcon: oIcon,
              cExec: "atbTask1();",
              cTooltext: "My toolbar button 1",
              nPos: 0
          });
          // Now get myIcon2 from the hidden document.
          oIcon = util.iconStreamFromIcon(doc.getIcon("myIcon2"));
          // and install this toolbar button as well
          app.addToolButton({
              cName: "atbToolButton2",
              oIcon: oIcon,
              cExec: "atbTask2()",
              cTooltext: "My toolbar button 2",
              nPos: 0
          });
          // Close our hidden document containing the icons.
          doc.closeDoc();
          app.endPriv();
          // Set this variable to signal that the toolbars are installed.
          atbtoolbuttons = false;
      }
   })

.. raw:: html

   <a name="78613"></a>

Adding navigation to PDF documents

JavaScript for Acrobat provides a number of constructs that enable you to add and customize navigation features within PDF documents. These features make it convenient for the user to see and visit areas of interest within the document, and you can associate a variety of actions with navigation events. In addition, you can customize the appearance of your form fields and pages, manipulate multiple documents, add and delete pages, and add headers, footers, watermarks, backgrounds, and buttons.

The list of topics in this section is:

-  `Thumbnails <JS_Dev_ModifyUserInterface.html#35265>`__
-  `Bookmarks <JS_Dev_ModifyUserInterface.html#14709>`__
-  `Links <JS_Dev_ModifyUserInterface.html#23951>`__
-  `Using actions for special effects <JS_Dev_ModifyUserInterface.html#36257>`__
-  `Highlighting form fields and navigational components <JS_Dev_ModifyUserInterface.html#60825>`__
-  `Setting up a presentation <JS_Dev_ModifyUserInterface.html#94930>`__
-  `Numbering pages <JS_Dev_ModifyUserInterface.html#36794>`__
-  `Creating buttons <JS_Dev_ModifyUserInterface.html#23421>`__

.. raw:: html

   <a name="35265"></a>

Thumbnails
----------

This section discusses how to embed thumbnail images in a PDF document and how to add page actions.

Creating page thumbnails
~~~~~~~~~~~~~~~~~~~~~~~~

Acrobat renders thumbnail images of each page on the fly. Should you want to store the images as part of the PDF document, there are methods for adding and removing thumbnails in a document. To add a set of thumbnails, invoke the Doc object ``addThumbnails`` method, which creates thumbnails for a specified set of pages in the document. It accepts two optional parameters: ``nStart`` and ``nEnd`` represent the beginning and end of an inclusive range of page numbers.

For example, to add thumbnails for pages 2 through 5, use the following command:

::

      this.addThumbnails({nStart: 2, nEnd: 5});

To add a thumbnail for just one page, just provide a value for ``nStart``. The following example adds a thumbnail for page 7:

::

      this.addThumbnails({nStart: 7});

To add thumbnails from page 0 to a specified page, just provide a value for ``nEnd``. The following example adds thumbnails for pages 0-7:

::

      this.addThumbnails({nEnd: 7});

To add thumbnails for all the pages in the document, omit both parameters:

::

      this.addThumbnails();

To remove a set of thumbnails, invoke the Doc object's ``removeThumbnails`` method, which accepts the same parameters as the ``addThumbnails`` method. For example, to remove the thumbnails for pages 2 to 5, use the following code:

::

      this.removeThumbnails({nStart: 2, nEnd: 5});

Adding page actions with page thumbnails
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can associate a ``Page`` ``Open`` event with a page thumbnail. The most straightforward way of doing this is to specify a ``Page`` ``Open`` or ``Page`` ``Clos`` e action in the Page Properties dialog box.

To customize a page action using JavaScript, invoke the Doc object ``setPageAction`` method for the page to be opened. In the following example, a greeting is displayed when the user clicks on the thumbnail for page 2:

::

      this.setPageAction({ nPage: 2, cTrigger: "Open", 
          cScript: "app.alert('Hello');"}
      );

The advantage of this approach is that you can dynamically build JavaScript strings to be used in the method call.

.. raw:: html

   <a name="14709"></a>

Bookmarks
---------

You can use JavaScript to customize the appearance and behavior of the bookmarks that appear in the Bookmarks navigation panel. Every PDF document has an object known as the ``bookmarkRoot``, which is the root of the bookmark tree for the document. It is possible to recursively add and modify levels of bookmarks underneath the root. Each node is a ``bookmark`` object which can have any number of children.

Acrobat makes the ``bookmarkRoot`` object available as a property of the Doc object. This root node contains a property called ``children``, which is an array of ``bookmark`` objects. The ``bookmark`` object has the properties shown in the table `Bookmark properties <JS_Dev_ModifyUserInterface.html#52466>`__, and the methods shown in the table `Bookmark methods <JS_Dev_ModifyUserInterface.html#52995>`__.

Bookmark properties

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - children
     - Returns the array of child objects for the current node.

   * - color
     - Specifies the color for the bookmark.

   * - doc
     - The Doc object for the bookmark.

   * - name
     - The text string appearing in the navigational panel.

   * - open
     - Determines if children are shown.

   * - parent
     - The parent bookmark.

   * - style
     - Font style.

Bookmark methods

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - createChild
     - Creates a new child bookmark.

   * - execute
     - Executes the ``Mouse Up`` action for the bookmark.

   * - insertChild
     - Inserts a bookmark as a new child for this bookmark (this may be used to move existing bookmarks).

   * - remove
     - Removes the bookmark and all its children.

   * - setAction
     - Sets a ``Mouse Up`` action for the bookmark.

.. raw:: html

   <a name="64295"></a>

Creating bookmarks
~~~~~~~~~~~~~~~~~~

To create a bookmark, it is necessary to navigate through the bookmark tree and identify the parent of the new node. Begin by accessing the ``bookmarkRoot``, which is a property of the current document representing the top node in the bookmark tree:

::

      var myRoot = this.bookmarkRoot;

Assume there are no bookmarks in the document. To create a new bookmark, invoke the Bookmark object ``createChild`` method to which you can submit the following parameters: ``cName`` (the name to appear in the navigation panel), ``cExpr`` (an optional JavaScript to be executed when the bookmark is clicked), and ``nIndex`` (an optional zero-based index into the ``children`` array).

The following code creates a bookmark that displays a greeting when clicked. Note that the omission of the ``nIndex`` value means that it is placed at position 0 in the ``children`` array:

::

      myRoot.createChild("myBookmark", "app.alert('Hello!');");

The following code adds a bookmark called ``grandChild`` as a child of ``myBookmark`` :

::

      var current = myRoot.children[0];
      current.createChild("grandChild");

To move ``grandChild`` so that it becomes a child of the root, invoke the Bookmark object ``insertChild`` method, and provide a reference to ``grandChild`` as a parameter:

::

      var grandChild = myRoot.children[0].children[0];
      myRoot.insertChild(grandChild, 1);

Managing bookmarks
~~~~~~~~~~~~~~~~~~

You can use JavaScript to change the ``name``, ``color``, and ``style`` properties of a bookmark. Note that the ``style`` property is an integer: ``0`` means normal, ``1`` means italic, ``2`` means bold, and ``3`` means bold-italic. The code below changes the name to ``New Name``, the color to red, and the font style to bold:

::

      var myRoot = this.bookmarkRoot;
      var myChild = myRoot.children[0];
      myChild.name = "New Name";
      myChild.color = color.red;
      myChild.style = 2;

In addition to adding new or existing bookmarks as you learned in `Creating bookmarks <JS_Dev_ModifyUserInterface.html#64295>`__, you can also delete a bookmark and its children by invoking its ``remove`` method. The following line of code removes all bookmarks from the document:

::

      this.bookmarkRoot.remove();

Creating a bookmark hierarchy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Because of the tree structure associated with bookmarks, it is possible to construct a hierarchy of bookmarks; a child of a bookmark represents a subsection of the section represented by that bookmark. To create a hierarchy, first add bookmarks to the root, then to the children of the root, and recursively to their children.

The following code creates bookmarks ``A``, ``B``, ``C``. Each section has 3 children. Child ``A`` has children ``A0``, ``A1``, and ``A2``. Child ``B`` has children ``B0``, ``B1``, and ``B2``. Child ``C`` has children ``C0``, ``C1``, and ``C2`` :

::

      var myRoot = this.bookmarkRoot;
      myRoot.createChild("A");
      myRoot.createChild({cName: "B", nIndex: 1});
      myRoot.createChild({cName: "C", nIndex: 2});
      for (var i = 0; i < myRoot.children.length; i++) {
          var child = myRoot.children[i];
          for (var j = 0; j < 3; j++) {
              var name = child.name + j;
              child.createChild({cName: name, nIndex: j});
          }
      }

To print out the hierarchy to the console, you can keep track of levels as shown in the following code. Note its recursive nature:

::

      function DumpBookmark(bm, nLevel){
          // Build indents to illustrate the level
          var s = "";
          for (var i = 0; i < nLevel; i++) s += " ";
      
          // Print out the bookmark's name:
          console.println(s + "+-" + bm.name);
      
          // Recursively print out the bookmark's children:
          if (bm.children != null)
              for (var i = 0; i < bm.children.length; i++)
                  DumpBookmark(bm.children[i], nLevel+1);
      }
      
      // Open the console to begin:
      console.clear(); console.show();
      
      // Recursively print out the bookmark tree
      DumpBookmark(this.bookmarkRoot, 0);

.. raw:: html

   <a name="23951"></a>

Links
-----

JavaScript provides support for the addition, customization, or removal of links within PDF documents. These links may be used to access URLs, file attachments, or destinations within the document.

The Doc object contains methods for adding, retrieving, and removing links. These include the methods listed in the table `Doc object link methods <JS_Dev_ModifyUserInterface.html#88290>`__. This is used in conjunction with the ``link`` object, which contains properties as well as a ``setAction`` method for customizing the appearance and behavior of a given link. Its properties are listed in the table `Link properties <JS_Dev_ModifyUserInterface.html#38017>`__.

In addition, the ``app`` object contains a property called ``openInPlace``, which can be used to specify whether cross-document links are opened in the same window or in a new one.

Doc object link methods

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - addLink
     - Adds a new link to a page.

   * - addWeblinks
     - Converts text instances to web links with URL actions.

   * - getLinks
     - Retrieves the links within a specified area on a page.

   * - getURL
     - Opens a web page.

   * - gotoNamedDest
     - Goes to a named destination within the document.

   * - removeLinks
     - Removes the links within a specified area on a page.

   * - removeWeblinks
     - Removes web links created with the Acrobat user interface. 

Link properties

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - borderColor
     - The border color of the bounding rectangle.

   * - borderWidth
     - The border width of the surrounding rectangle.

   * - highlightMode
     - The visual effect when the user clicks the link.

   * - rect
     - The rotated user space coordinates of the link.

Adding and removing web links from text
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If a PDF document contains text beginning with http://, such as http://www.example.com, you can convert all such instances to links with URL actions by invoking the Doc object ``addWeblinks`` method. The method returns an integer representing the number of text instances converted, as shown in the code below:

::

      var numberOfLinks = this.addWeblinks();
      console.println("Converted " + numberOfLinks + " links.");

To remove web links that were authored in Acrobat, invoke the Doc object ``removeWeblinks`` method. It accepts two optional parameters: ``nStart`` and ``nEnd`` represent the beginning and end of an inclusive range of page numbers. The following examples illustrate how to remove web links from different page ranges in the document:

::

      // Remove the web links from pages 2 through 5:
      this.removeWeblinks({nStart: 2, nEnd: 5});
      
      // Remove the web links from page 7
      this.removeWeblinks({nStart: 7});
      
      // Remove the web links from pages 0 through 7:
      this.removeWeblinks({nEnd: 7});
      
      // Remove all the web links in the document:
      this.removeWeblinks();

Adding and removing links
~~~~~~~~~~~~~~~~~~~~~~~~~

To add a single link to a PDF document, first invoke the Doc object ``addLink`` method, and then customize the returned ``link`` object properties. The ``addLink`` method requires two parameters: the page number and the coordinates, in rotated user space, of the bounding rectangle. The next example illustrates the use of ``addLink``.

#. Add navigation links to the document

In this example, navigational links are added to the lower left and right corners of each page in the document. The left link opens the previous page, and the right link opens the next page:

::

      var linkWidth = 36, linkHeight = 18;
      for (var i = 0; i < this.numPages; i++)
      {
          // Create the coordinates for the left link:
          var lRect = [0, linkHeight, linkWidth, 0];
      
          // Create the coordinates for the right link:
          var cropBox = this.getPageBox("Crop", i);
          var offset = cropBox[2] - cropBox[0] - linkWidth;
          var rRect = [offset, linkHeight, linkWidth + offset, 0];
      
          // Create the Link objects:
          var leftLink = this.addLink(i, lRect);
          var rightLink = this.addLink(i, rRect);
      
          // Calculate the previous and next page numbers:
          var nextPage = (i + 1) % this.numPages;
          var prevPage = i - 1;
          if (prevPage < 0) prevPage = this.numPages - 1;
      
          // Set the link actions to go to the pages:
          leftLink.setAction("this.pageNum = " + prevPage);
          rightLink.setAction("this.pageNum = " + nextPage);
      
          // Customize the link appearance:
          leftLink.borderColor = color.red;
          leftLink.borderWidth = 1;
          rightLink.borderColor = color.red;
          rightLink.borderWidth = 1;
      }

To remove a known link object from a given page, retrieve its bounding rectangle coordinates and invoke the Doc object ``removeLinks`` method. In the following example, ``myLink`` is removed from page 2 of the document. In the script below, it is assumed that ``myLink`` is a Link object:

::

      var linkRect = myLink.rect;
      this.removeLinks(2, linkRect);

To remove all links from the document, simply use the crop box for each page, as shown in the code below:

::

      for (var page = 0; page < this.numPages; page++)
      {
          var box = this.getPageBox("Crop", page);
          this.removeLinks(page, box);
      }

Defining the appearance of a link
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Example `Add navigation links to the document <JS_Dev_ModifyUserInterface.html#41025>`__ contains a script that sets the appearance of the bounding rectangle for the links through their ``borderColor`` and ``borderWidth`` properties. You can also specify how the link will appear when it is clicked by setting its ``highlightMode`` property to one of four values: ``None``, ``Outline``, ``Invert`` (the default), or ``Push``.

For example, the following code sets the border color to blue, the border thickness to 2, and the highlight mode to ``Outline`` for ``myLink`` :

::

      myLink.borderColor = color.blue;
      myLink.borderWidth = 2;
      myLink.highlightMode = "Outline";

Opening links
~~~~~~~~~~~~~

To open a web page for a given link, invoke the Link object ``setAction`` method, and pass in a script containing a call to the Doc object ``getURL`` method.

For example, suppose you have created a Link object named ``myLink``. The following code opens ``http://www.example.com`` :

::

      myLink.setAction("this.getURL('http://www.example.com')");

To open a file that resides in a known location on your local hard drive, use the ``app`` object ``openDoc`` method.

The following example opens ``myDoc.pdf`` when ``myLink`` is clicked:

::

      myLink.setAction("app.openDoc('/C/temp/myDoc.pdf');");

Opening file attachments
~~~~~~~~~~~~~~~~~~~~~~~~

To open a file that is an attachment of the document, use the Doc object ``exportDataObject`` method. The method takes up to three parameters: ``cName``, the name of the data object to extract; ``bAllowAuth``, a Boolean value which, if true, uses a dialog box to obtain user authorization; ``nLaunch``, a number that controls how the attachment is launched, permissible values are 0 (user is prompted to save, file not launched), 1 (user is prompted to save, and the file is launched), and 2 (file is saved to a temporary file and launched, file will be deleted by Acrobat upon application shutdown).

::

      this.exportDataObject({ cName: "myDoc.pdf", nLaunch: 2 });

The file ``myDoc.pdf`` can be attached to a PDF document by executing the following script in the console:

::

      var thisPath = "/c/temp/myDoc.pdf";
   this.importDataObject({cName:"myDoc.pdf", cDIPath: thisPath })

Using destinations
~~~~~~~~~~~~~~~~~~

To go to a named destination within a document, embed a script in the call to the Link object ``setAction`` method. The script contains a call to the Doc object ``gotoNamedDest`` method.

The following example goes to the destination named as ``myDest`` in the current document when ``myLink`` is clicked:

::

      myLink.setAction("this.gotoNamedDest('myDest');");

The following example opens a document, then goes to a named destination within that document. The example assumes the document being opened by ``openDoc`` is ``disclosed`` and can be used for a link action.

::

      // Open a new document
      var myDoc = app.openDoc("/c/temp/myDoc.pdf");
      // Go to a destination in this new doc
      myDoc.gotoNamedDest("myDest");
      // Close the old document
      this.closeDoc();

Beginning with Acrobat 8, there is an additional parameter, ``cDest``, for the ``app.openDoc`` method to set the destination. With this parameter, the target document need not be ``disclosed``. For example,

::

      app.openDoc({ cPath: "/c/temp/myDoc.pdf", cDest: "myDest" });
      this.closeDoc();

.. raw:: html

   <a name="36257"></a>

Using actions for special effects
---------------------------------

Thumbnails, bookmarks, links, and other objects have actions associated with them, and you can use JavaScript to customize these actions. For example, you can display messages, jump to destinations in the same document or any other, open attachments, open web pages, execute menu commands, or perform a variety of other tasks.

As you learned earlier, you can associate a thumbnail with a ``Page`` ``Open`` event, and associate bookmarks and links with ``Mouse`` ``Up`` events.

You can use JavaScript to customize the actions associated with a thumbnail by invoking the Doc object ``setPageAction`` method. To customize the actions associated with bookmarks and links, create a string containing script and pass it to the object's ``setAction`` method. In the examples shown below, a greeting is displayed when a thumbnail, bookmark, and link are clicked:

::

      // Open action for thumbnail:
      this.setPageAction(2, "Open", "app.alert('Hello!');");
      
      // MouseUp actions for bookmark and link:
      myBookmark.setAction("app.alert('Hello!');");
      myLink.setAction("app.alert('Hello!');");

.. raw:: html

   <a name="60825"></a>

Highlighting form fields and navigational components
----------------------------------------------------

You can use JavaScript to customize the actions associated with buttons, links, and bookmarks so that they change their appearance after the user has clicked them.

For a button, which is a field, you can invoke its ``highlight`` property, which allows you to specify how the button appears once it has been clicked. There are four choices, as shown in the following table.

Button appearance

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Type
     - Keyword

   * - none
     - highlight.n

   * - invert
     - highlight.i

   * - push
     - highlight.p

   * - outline
     - highlight.o

For example, the following code makes the button appear pushed when clicked:

::

      // Set the highlight mode to push
      var f = this.getField("myButton");
      f.highlight = highlight.p;

As you learned earlier, the ``link`` object also has a ``highlight`` property.

There are other ways in which you can creatively address the issue of highlighting. For example, you can change the background color of the button when clicked, by including a line of code in the script passed into its ``setAction`` method.

In the following example, the button displays a greeting and changes its background color to blue when the mouse enters its area:

::

      var script = "app.alert('Hello!');";
      script += "var myButton = this.getField('myButton');";
      script += "myButton.fillColor = color.blue;";
      f.setAction("MouseEnter", script);

The above script can also be entered through the UI as well.

This idea can be applied to the ``bookMark`` object's ``color`` property, as well as the ``link`` object's ``borderColor`` property. In both cases, similar code to that shown in the example above can be used in the scripts passed into their ``setAction`` methods.

For ``bookMark`` objects, you can change the text or font style through its ``name`` and ``style`` properties. For example, the following code adds the word ``VISITED`` to ``myBookmark`` and changes the font style to bold:

::

      myBookmark.name += " - VISITED");
      myBookmark.style = 2;

.. raw:: html

   <a name="94930"></a>

Setting up a presentation

There are two viewing modes for Acrobat and Acrobat Reader: full screen mode and regular viewing mode. Full screen mode is often appropriate for presentations, since PDF pages can fill the entire screen with the menu bar, toolbar, and window controls hidden.

You can use JavaScript to customize the viewing mode when setting up presentations. The ``app`` object ``fs`` property may be used to set the viewing mode. (Media clips can also be played in full screen, see the Example `Play a clip in full screen <JS_Dev_DigitalMedia.html#90837>`__.)

Defining the initial view in full screen view
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To cause Acrobat and Acrobat Reader to display in full screen mode, include the following statement in a document JavaScript triggered when the document is opened.

::

      app.fs.isFullScreen=true;

``app.fs`` is the FullScreen object, which can be used to set your full screen preferences.

#. Setting full screen preferences and resetting them

You want the document to be viewed in full screen, but as a courtesy, you want to restore the screen preferences of the user back to the original settings. Place the following script as document JavaScript, it will be executed once and only once upon loading the document.

::

      // Save the settings we plan to change.
      var _clickAdvances = app.fs.clickAdvances;
      var _defaultTransition = app.fs.defaultTransition;
      var _escapeExits = app.fs.escapeExits;
      
      // Change these settings now.
      app.fs.clickAdvances=true;
      app.fs.defaultTransition = "UncoverLeft";
      app.fs.escapeExits=true;
      
      // Now, go into full screen.    
      app.fs.isFullScreen=true;

To restore the settings, place the following code in the Will Close section of the Document JavaScripts, located at Tools panel > JavaScript > Set Document Actions.

::

      // Restore the full screen preferences that we changed.
      app.fs.clickAdvances = _clickAdvances;
      app.fs.defaultTransition = _defaultTransition;
      app.fs.escapeExits = _escapeExits;

You can use JavaScript to customize how page transitions occur for any pages within a document. This is accomplished through the Doc object's ``setPageTransitions`` and ``getPageTransitions`` methods.

The ``setPageTransitions`` method accepts three parameters:

* ``nStart``: the zero-based index of the beginning page

* ``nEnd``: the zero-based index of the last page

* ``aTrans``: a page transition array containing three values:

* ``nDuration``: the time a page is displayed before automatically changing

* ``cTransition``: the name of the transition to be applied

* ``nTransDuration``: the duration in seconds of the transition effect

The name of the transition to be applied can be chosen from a comprehensive list made available through the FullScreen object ``transitions`` property. To obtain the list, type the following code into the console:

::

      console.println("[" + app.fs.transitions + "]");

In addition, you can set up a default page transition through the FullScreen object ``defaultTransition`` property, as the Example `Setting full screen preferences and resetting them <JS_Dev_ModifyUserInterface.html#68950>`__ demonstrates.

#. Adding page transitions

In the following example, page transitions are applied to pages 2 through 5. Each page displays for 10 seconds, and then an automatic transition occurs for one second:

::

      this.setPageTransitions({
          nStart: 2,
          nEnd: 5,
          aTrans: {
              nDuration: 10,
              cTransition: "WipeLeft",
              nTransDuration: 1
          }
      });
      
      // Set the viewing mode to full screen
      app.fs.isFullScreen = true;

Defining an initial view
~~~~~~~~~~~~~~~~~~~~~~~~

In addition to specifying whether the full screen or regular viewing mode will be used, you can also use JavaScript to set up the document view. You can customize the initial view in terms of magnification, page layout, application and document viewing dimensions, the initial page to which the document opens, and whether parts of the user interface will be visible.

The Doc object ``layout`` property allows you to specify page layout by assigning one of the following values:

-  ``SinglePage``
-  ``OneColumn``
-  ``TwoColumnLeft``
-  ``TwoColumnRight``
-  ``TwoPageLeft``
-  ``TwoPageRight``

For example, the script ``this.layout = "SinglePage"`` puts the document into single page viewing.

To set up the magnification, assign a value to the Doc object ``zoom`` property. For example, the following code sets up a magnification of 125%:

::

      this.zoom = 125;

You can also set the zoom type by assigning one of the settings, shown in the following table, to the Doc object's ``zoomtype`` property:

ZoomType settings

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Zoom type
     - Property value

   * - NoVary
     - zoomtype.none

   * - FitPage
     - zoomtype.fitP

   * - FitWidth
     - zoomtype.fitW

   * - FitHeight
     - zoomtype.fitH

   * - FitVisibleWidth
     - zoomtype.fitV

   * - Preferred
     - zoomtype.pref

   * - ReflowWidth
     - zoomtype.refW

The following example sets the zoom type of the document to fit the width:

::

      this.zoomType = zoomtype.fitW;

To specify the page to which the document initially opens (or to simply change the page), set the Doc object ``pageNum`` property. If the following code is included in the script used in the document ``Open`` event, the document automatically opens to page 30:

::

      this.pageNum = 30;

Finally, you can choose whether menu items and toolbar buttons will be visible by invoking the following methods of the ``app`` object:

* ``hideMenuItem``: Removes a specific menu item

* ``hideToolbarButton``: Removes a specific toolbar button

For example, if the following code is placed in a folder-level script, the Hand toolbar button is removed when Acrobat or Acrobat Reader is started:

::

      app.hideToolbarButton("Hand");

.. raw:: html

   <a name="36794"></a>

Numbering pages

You can customize the page numbering schemes used throughout a document. There are three numbering formats:

-  decimal (often used for normal page ranges)
-  roman (often used for front matter such as a preface)
-  alphabetic (often used for back matter such as appendices)

The Doc object ``getPageLabel`` and ``setPageLabels`` methods can be used to control and customize the appearance of numbering schemes within a PDF document.

The ``getPageLabel`` method accepts the zero-based page index and returns a string containing the label for a given page.

The ``setPageLabels`` method accepts two parameters: ``nPage`` is the zero-based index for the page to be labeled, and ``aLabel`` is an array of three values representing the numbering scheme. If ``aLabel`` is not supplied, the method removes page numbering for the specified page and any others up to the next specified label.

The ``aLabel`` array contains three required values:

* ``cStyle``: the style of page numbering as shown in the following table

* ``cPrefix``: the string used to prefix the numeric portion of the page label

* ``nStart``: the ordinal with which to start numbering the pages

Page numbering style values

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - cStyle value
     - Description

   * - D
     - Decimal numbering

   * - R
     - Upper case Roman numbering

   * - r
     - Lower case Roman numbering

   * - A
     - Upper case alphabetic numbering

   * - a
     - Lower case alphabetic numbering

For example, the code shown below labels 10 pages within a document using the following scheme: ``i``, ``ii``, ``iii``, ``1``, ``2``, ``3``, ``4``, ``5``, ``Appendix-A``, ``Appendix-B`` :

::

      // Pages 0-2 will have lower case roman numerals i, ii, iii:
      this.setPageLabels(0, ["r", "", 1]);
      
      // Pages 3-7 will have decimal numbering 1-5:
      this.setPageLabels(3, ["D", "", 1]);
      
      // Pages 8-9 will have alphabetic numbering:
      this.setPageLabels(8, ["A", "Appendix-", 1]);
      
      // The page labels will be printed to the console:
      var labels = this.getPageLabel(0);
      for (var i=1; i<this.numPages; i++)
          labels += ", " + this.getPageLabel(i);
      console.println(labels);

It is also possible to remove a page label by omitting the ``aLabel`` parameter, as shown in the code below (which assumes the existence of the labels in the previous example:

::

      // The labels for pages 3-7 will be removed:
      this.setPageLabels(3);

.. raw:: html

   <a name="23421"></a>

Creating buttons

Though buttons are normally considered form fields, you can add them to any document. A button may be used for a variety of purposes, such as opening files, playing sound or movie clips, or submitting data to a web server. As you learned earlier, you can place text and images on a button, making it a user-friendly interactive portion of your document. To show or hide portions of graphic buttons, use the ``Mouse`` ``Enter`` and ``Mouse`` ``Exit`` events or other types of control mechanisms to manage the usage of the Field object ``buttonSetIcon`` method.

#. Creating a rollover effect

The following code shows one icon when the mouse enters the button field, and a different icon when the mouse exits:

::

      // Mouse enter script.
      var f = event.target;
      f.buttonSetIcon(this.getIcon('oneIcon'));
      
      // Mouse exit script.
      var f = event.target;
      f.buttonSetIcon(this.getIcon('otherIcon'));

.. raw:: html

   <a name="43845"></a>

Working with PDF layers
=======================

PDF layers (called Optional Content Groups in the `PDF Reference <https://www.adobe.com/go/pdfreference>`_) are sections of content that can be selectively viewed or hidden by document authors or consumers. Multiple components may be visible or hidden depending on their settings, and may be used to support the display, navigation, and printing of layered PDF content by various applications. It is possible to edit the properties of layers, to lock layers, to add navigation to them, to merge or flatten layers, and to combine PDF layered documents. Properties and methods for handling PDF layers are accessed through the OCG object.

To obtain an array of the OCG objects for a given page in the document, invoke the Doc object ``getOCGs`` method. The following code obtains the array of OCG objects contained on page 3 of the document:

::

      var ocgArray = this.getOCGs(3);

The getOCGs method returns an array of OCG objects or ``null``, if there are none; consequently, in situations in which it is uncertain if there are any OCGs on the page, you need to test the return value for null:

::

      var ocgArray = this.getOCGs(3);
      if ( ocgArray != null ) {
          <some action script>
      }

Navigating with layers
----------------------

Since information can be stored in different layers of a PDF document, navigational controls can be customized within different layers, whose visibility settings may be dynamically customized so that they are tied to context and user interaction. For example, if the user selects a given option, a set of navigational links belonging to a corresponding optional content group may be shown.

#. Toggling a PDF layer

This example is a Mouse Up action for a button. The action is to toggle the visibility of a particular layer. The methodology is to get the array of OCGs on the page, search through them to find the particular layer of interest, and finally, to toggle its state property, which determines the visibility of the layer, see `OCG properties <JS_Dev_ModifyUserInterface.html#42039>`__.

::

      var ocgLayerName = "myLayer";
      var ocgArray = this.getOCGs(this.pageNum);  
      for ( var i=0; i < ocgArray.length; i++) {
          if ( ocgArray[i].name == ocgLayerName ) {
              ocgArray[i].state = !ocgArray[i].state;
              break;
          }           
      }

Editing the properties of PDF layers
------------------------------------

The OCG object provides properties that can be used to determine whether the object's default state should be on or off, whether its intent should be for viewing or design purposes, whether it should be locked, the text string seen in the user interface, and the current state. The properties are shown in the following table.

OCG properties

.. _section-8:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - initState
     - Determines whether the ``OCG`` object is on or off by default

   * - intent
     - The intent of the ``OCG`` object (View or Design)

   * - locked
     - Whether the on/off state can be toggled through the user interface

   * - name
     - The text string seen in the user interface for the ``OCG`` object

   * - state
     - The current on/off state of the ``OCG`` object

The ``initState`` property can be used to set the default state for an optional content group. In the following example, ``myLayer`` is set to ``on`` by default:

::

      myLayer.initState = true;

The ``intent`` property, which is an array of values, can be used to define the intent of a particular optional content group. There are two possible values used in the array: ``View`` and ``Design``. A ``Design`` layer is created for informational purposes only, and does not affect the visibility of content. Its purpose is to represent a document designer's structural organization of artwork. The ``View`` layer is intended for interactive use by document consumers. If ``View`` is used, the visibility of the layer is affected.

In the following example, the intent of all the ``OCG`` objects in the document is set to both values:

::

      var ocgs = this.getOCGs();
      for (var i=0; i<ocgs.length; i++)
          ocgs[i].intent = ["View", "Design"];

The ``locked`` property is used to determine whether a given layer can be toggled through the user interface. In the following example, ``myLayer`` is locked, meaning that it cannot be toggled through the user interface:

::

      myLayer.locked = true;

The ``state`` property represents the current on/off state for a given OCG. In the following example, all the OCGs are turned on:

::

      var ocgs = this.getOCGs();
      for (var i=0; i<ocgs.length; i++)
              ocgs[i].state = true;

The ``name`` property represents the text string seen in the user interface that is used to identify layers. In the following example, the ``Watermark`` OCG is toggled:

::

      var ocgs = this.getOCGs();
      for (var i=0; i<ocgs.length; i++)
          if (ocgs[i].name == "Watermark")
              ocgs[i].state = !ocgs[i].state;

Reordering layers
-----------------

It is possible to determine the order in which layers are displayed in the user interface by invoking the Doc object ``getOCGOrder`` and ``setOCGOrder`` methods. In the following example, the display order of all the layers is reversed:

::

      var ocgOrder = this.getOCGOrder();
      var newOrder = new Array();
      for (var i=0; i<ocgOrder.length; i++)
          newOrder[i] = ocgOrder[ocgOrder.length - i - 1];
      this.setOCGOrder(newOrder
   )
   ;
