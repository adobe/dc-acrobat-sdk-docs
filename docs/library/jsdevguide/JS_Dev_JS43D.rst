******************************************************
Interfacing with 3D JavaScript
******************************************************

In this chapter, you will learn about how to connect the JavaScript engine for Acrobat with the JavaScript engine used for 3D annotations, giving you access to the entire 3D JavaScript API. Though this chapter is not a tutorial on the 3D JavaScript API, some of the APIs will be demonstrated through the examples.

.. raw:: html

   <a name="28979"></a>

Basic concepts
==============

To create 3D annotations and attach scripts to them using the JavaScript for 3D API you need Acrobat Pro DC or Acrobat 3D. Those scripts can run on Acrobat 3D, Acrobat Pro DC, Acrobat Standard DC, and Acrobat Reader for Windows and Mac OS platforms. Unless otherwise noted, all JavaScript objects, properties, and methods have support starting in version 7.0.

When you create a 3D annotation, it has certain default behaviors that allow the user to interact with the 3D model. These behaviors, which are accessed through the 3D Annotation's toolbar, are Rotate, Spin, Pan, Zoom, Measurement, Play/Pause Animation, Use Perspective/Orthographic Projection, Model Render Mode, Lighting Scheme, Background Color and Toggle Cross Section.

If you wish to enhance the user's 3D experience beyond the default behaviors, you must use the JavaScript API for 3D annotations. With the 3D JavaScript engine, you can specify the render modes and 3D matrix transformations of any of the individual meshes; set camera position, target, and field of view; detect mouse and keyboard events; control animations, and many more behaviors. See JavaScript for `Acrobat 3D Annotations API Reference <https://www.adobe.com/go/acrobatsdkk_3djs>`__ .


The document is the complete reference for the JavaScript API for 3D annotations.

The 3D JavaScript engine, which is distinct from the JavaScript engine for Acrobat, can be accessed in one of two ways:

-  The primary way is by attaching a *default script* to the 3D annotation. This can be accomplished while placing a 3D annotation using the 3D Tool or on an existing 3D annotation by accessing its properties dialog box using the Select Object tool. This script will be run directly by the 3D JavaScript engine.
-  Acrobat provides a mechanism to directly access the entire 3D JavaScript engine API from within Acrobat's own scripting engine by means of the JavaScript ``Annot3D.context3D`` property. This allows the author to wire up elements on the PDF page, such as buttons and links, to manipulate the 3D content.

The second method is the primary focus of this chapter, but we must necessarily address the default script of the 3D annotation.

.. raw:: html

   <a name="76395"></a>

Getting the Annot3D object of the 3D annotation
=================================================

To get access to the JavaScript 3D API engine from an Acrobat form or link, you must first get the Annot3D object of the annotation. There are two methods for doing this: ``Doc.getAnnot3D`` and ``Doc.getAnnots3D``.

The Doc method ``getAnnot3D`` takes two parameters:

* ``nPage``: The 0-based page number that contains the 3D annotation

* ``cName``: The ``name`` of the 3D annotation

A 3D annotation is not required to have a name, and there is no UI for entering the name of the annotation, so this method may not be useful unless you've already programmatically assigned a name to the 3D annotation, see the Example `Assigning a name to a 3D annotation <JS_Dev_JS43D.html#10514>`__. For a 3D annotation on page 1 of the document with a name of ``my3DAnnot``, we can acquire the Annot3D object as follows:

::

      var oMy3DAnnot = this.getAnnot3D(0, "my3DAnnot");

Note that the first argument has a value of 0 because the index of the page is one less than the page number.

The Doc method ``getAnnots3D`` returns the array of all Annot3D objects on a specified page. This method takes only a parameter of ``nPage``, the 0-based page number,

::

      var aMy3DAnnots = this.getAnnots3D(0);

The variable ``aMy3DAnnots`` is either undefined, or is an array of Annot3D objects.

#. Assigning a name to a 3D annotation

Suppose your target annotation is the first annotation on page 0 of the document. The following script is executed from the JavaScript console.

::

      var aMy3DAnnots = this.getAnnots3D(0);
      aMy3DAnnots[0].name = "my3DAnnot";

Annot3D properties
------------------

The Annot3D has a number of properties, as summarized in the table below.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - activated
     - A Boolean value, which if ``true``, indicates that the 3D model is activated. 

   * - context3D
     - If ``activated`` is ``true``, this property returns the context of the 3D annotation, a ``global`` object containing the 3D scene. 

   * - innerRect
     - An array of four numbers specifying the lower-left x, lower-left y, upper-right x and upper-right y coordinates, in the coordinate system of the annotation (lower-left is [0, 0], top right is [width, height]), of the 3D annotation's 3D bounding box, where the 3D artwork is rendered.

   * - name
     - The name of the annotation.

   * - page
     - The 0-based page number of the page containing the annotation.

   * - rect
     - Returns an array of four numbers specifying the lower-left x, lower-left y, upper-right x and upper-right y coordinates, in default user space, of the rectangle defining the location of the annotation on the page.

Of particular importance is the ``context3D`` property. The object returned is, in fact, the handle to the JavaScript 3D engine.

Acquiring the JavaScript 3D engine
----------------------------------

Having acquired the Annot3D object of your 3D annotation, as described above, the next step is to get the object that gives you access to the JavaScript 3D engine. This is done through the ``context3D`` property of the Annot3D object. In the script below, we get the Annot3D object of the first annotation on page 0 of the document, then we get the object that gives us access to the 3D engine.

::

      var aMy3DAnnots = this.getAnnots3D(0);
      var c3d = aMy3DAnnots[0].context3D;

Alternatively, we can use a single line of code.

::

      var c3d = this.getAnnots3D(0)[0].context3D;

The ``context3D`` will be undefined until the corresponding annotation is activated. You may need to check in your script for this condition before attempting to execute script commands on the 3D annotation.

::

      var c3d = this.getAnnots3D(0)[0].context3D;
      if ( typeof c3d != "undefined" ) {
          // 3D annotation activated
          ....
      } else {
          // 3D annotation not activated
          ...
      }

The example below demonstrates how to acquire the JavaScript 3D engine, and to use it to rotate a component of the 3D content.

#. Rotating a named object in a 3D model

Suppose that you have a 3D annotation and that you wish to create a button or link to rotate a U3D object. Suppose that the object you wish to rotate is named "Axes". The following script is a mouse-up button action, or perhaps, a link action, that does the job.

::

      // Get index of the page containing the Annot3D object (count starts at 0).
      pageIndex = this.pageNum;
      
      // Index of the Annot3D (count starts at 0).
      annotIndex = 0;
      
      // Get a reference to the Annot3D script context.
      var c3d = this.getAnnots3D( pageIndex )[ annotIndex ].context3D;
      
      if ( typeof c3d != "undefined" ) {
          // Get a reference to the node in the scene named "Axes".
          axes = c3d.scene.nodes.getByName( "Axes" );
      
          // Rotate the object about the X-Axis PI/6 radians (30 degrees).
          axes.transform.rotateAboutXInPlace( Math.PI / 6 );
      }

.. raw:: html

   <a name="70994"></a>

Using the default script of a 3D annotation
===========================================

The rotation problem of the Example `Rotating a named object in a 3D model <JS_Dev_JS43D.html#50115>`__ was simple enough that it was not necessary to use the default script of the 3D annotation. In this section, we present several examples illustrating the use of the default script.

Unlike JavaScript for Acrobat, which has a build-in Acrobat editor, the default script of a 3D annotation must be written using an external text editor and imported into the 3D annotation via the UI. The script is saved with a ``.js`` extension.

#. To import a script into a 3D annotation
#. If not already showing, display the **Tools** pane.
#. On the page containing your 3D annotation, select the **Select Object** tool from Interactive Objects.
#. Double-click the 3D annotation to view the 3D Properties dialog box.
#. Click the **Edit Content** button.
#. In the Add 3D Content dialog box, click the **Browse** button corresponding to the Default Script, and browse for your ``.js`` file.
#. Once located, click **Open** to import the file as the default script of the 3D annotation.
#. Click **OK** to exit the Add 3D Content dialog box, then click **OK** to exit the 3D Properties dialog box.
#. Click the **Hand** tool to exit Select Object mode.

.. note::

   The default script for a 3D annotation is executed directly by the JavaScript 3D engine.

#. Setting the render mode of a 3D model

Create a button that changes the render mode of a 3D annotation to "transparent".

The default script of the 3D annotation defines a function ``setRenderMode``, which goes through all the meshes of the scene and changes the render mode of that mesh to the mode passed to the function.

::

      function setRenderMode( renderModeName ) {
          for (var i=0; i < scene.meshes.count; i++) {
              scene.meshes.getByIndex(i).renderMode = renderModeName;
              }
      }

Now to call the function ``setRenderMode`` from a button or link using the JavaScript engine for Acrobat, you would have script as follows:

::

      // Get the Annot3D script context of the targeted annot.
      var c3D = getAnnots3D(0)[0].context3D;
   
      // Call the JavaScript function setRenderMode() defined in the default

       // script of the referenced 3D annotation.
      c3D.setRenderMode("transparent");

.. raw:: html

   <a name="14015"></a>

Initializing upon activation
============================

When you have developed a general "library" of JavaScript functions to manipulate 3D content, you might want to set the values of certain parameters of one or more of these functions when the 3D annotation is activated without having to edit the default script itself. One approach for this is to insert a script at the document level to make the initialization. Below is a template for an initialization function:

::

      function initialize()
      {
          console.println( "nchecking for 3D Annotation activation..." );
   
          if ( waitingFor3DActivated )
              {
                  var a3d = getAnnots3D(0)[0];
                  if ( a3d.activated )
                  {
                      waitingFor3DActivated = false;
                      console.println( "...3D Annotation is activated." );
                      app.clearInterval( timeout );
   
                      c3D = a3d.context3D;
   
                  // 3D annotation has been activated, do any initializations here
                  }
   
                  if ( timeout.count >= 10 ) // Set to 10 seconds
                  {
                      console.println( "The 3D annotation is still not activated" );
                  console.println(    "Time limit exceeded, terminating initialization");
                      app.clearInterval( timeout );
                  }
              }
          timeout.count++;
      }
   
      // Check for activation every second
      timeout = app.setInterval( "initialize()", 1000 );
      timeout.count = 0;
      var waitingFor3DActivated = true;

See the example that follows.

#. Setting the background color of the canvas on activation

A simple example of this initialization is to set the background color when the 3D annotation becomes activated.

The following script is executed as a document level script.

::

      function initialize()
      {
          console.println( "nchecking for 3D Annotation activation..." );
   
          if ( waitingFor3DActivated )
              {
                  var a3d = getAnnots3D(0)[0];
                  if ( a3d.activated )
                  {
                      waitingFor3DActivated = false;
                      console.println( "...3D Annotation is activated." );
                      app.clearInterval( timeout );
   
                      c3D = a3d.context3D;
   
                  // The function setBackgroundColor is defined as part of the 
                  // default script, so it must be executed using the 3D JS engine
                  // Here, we set the background color of the canvas to dark green.
                  c3D.setBackgroundColor( 0, 0.6, 0 );
                  }
   
                  if ( timeout.count >= 10 ) // set to 10 seconds
                  {
                      console.println( "The 3D Annotation is still not activated" );
                  console.println(    "Time limit exceeded, terminating initialization");
                      app.clearInterval( timeout );
                  }
              }
   
          timeout.count++;
      }
   
      // Check for activation every second
      timeout = app.setInterval( "initialize()", 1000 );
      timeout.count = 0;
      var waitingFor3DActivated = true;

The default script of the 3D annotation contains the following script:

::

      // The variable theBackground is initially set to null. When the 

       //  renderEventHandler is set to canvas background just before the runtime
      // engine renders the 3D model.
      var theBackground = null;
   
      function setBackgroundColor( r, g, b )
      {      
          theBackground.setColor(new Color( r, g, b ));
      }
   
      // Create a new render event handler
      renderEventHandler = new RenderEventHandler();
      // Define the onEvent property that will handle things when the 3D is
      // rendered
      renderEventHandler.onEvent = function( event )
      {
          // Remove this handler after it has executed once.
          runtime.removeEventHandler( this );
          // Set theBackground to point to the background of the canvas.
          theBackground = event.canvas.background;
      }
      // Add our new handler using the addEventHandler method of the runtime
      //  object.
      runtime.addEventHandler( renderEventHandler );
