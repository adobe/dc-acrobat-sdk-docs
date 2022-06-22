******************************************************
Acrobat and PDFL SDK: JS 3D APIs
******************************************************

To create 3D annotations and to attach scripts to them using this API, you need Adobe® Acrobat® Professional. Scripts attached to 3D annotations can run on Acrobat Pro Extended, Acrobat Pro, Acrobat Standard, and Adobe Reader® for Windows® and Mac OS® platforms. Unless otherwise noted, all JavaScript objects, properties, and methods have support starting in version 7.0.

The 3D JavaScript engine, which is distinct from the JavaScript engine for Acrobat, can be accessed in one of two ways. The primary way is by attaching a default script to the 3D annotation. This can be accomplished while placing a 3D annotation using the 3D Tool or on an existing 3D annotation by accessing its properties dialog box using the Select Object tool. This script will be run directly by the 3D JavaScript engine.

In addition, Acrobat provides a mechanism to directly access the entire 3D JavaScript engine API from within the Acrobat scripting engine by means of the JavaScript ``Annot3D.context3D`` property.

The following example illustrates how to access the 3D JavaScript engine. In this example, a button (or link) contains JavaScript code that rotates the U3D object named "Axes".

::

    // Get index of page containing the Annot3D object (count starts at 0).
     pageIndex = this.pageNum;
     
     // Index of the Annot3D (count starts at 0).
     annotIndex = 0;
     
     // Get a reference to the Annot3D script context.
     c3d = this.getAnnots3D( pageIndex )[ annotIndex ].context3D;
     
     // Get a reference to the node in the scene named "Axes".
     axes = c3d.scene.nodes.getByName( "Axes" );
     
     // Rotate the object about the X-Axis PI/6 radians (30 degrees).
     axes.transform.rotateAboutXInPlace( Math.PI / 6 );

More extensive actions can be executed by having a button or link get the ``SceneContext3d`` object and call a function defined in the default script of the 3D annotation, as in the following example.

::

    // Get the Annot3D script context of the targeted annotation.
     context3D = getAnnots3D(0)[0].context3D;
   
     // Call the JavaScript function setRenderMode() defined in the default

       // script of the referenced 3D annotation.
     context3D.setRenderMode("transparent");

The default script of the 3D annotation makes the definition.

::

    function setRenderMode( renderModeName ) {
         for (var i=0; i < scene.meshes.count; i++) {
             scene.meshes.getByIndex(i).renderMode = renderModeName;
         }
     }

Object overview
===============

This section provides an overview of the objects in the 3D JavaScript API.

Basic objects
-------------

There are several basic objects, such as ``Color`` , ``Matrix4x4`` , and ``Vector3`` , that are used to create general-purpose objects. The basic objects are used throughout the API and are only meaningful when attached to objects such as ``Scene`` or ``Runtime`` . For example, you could create a ``Color`` object and use it to set the ``Background`` color of a ``Canvas`` .

Vector3 Examples
^^^^^^^^^^^^^^^^

::

    v1 = new Vector3( 1.2, 3, 4.5 );
     v2 = new Vector3( 5, 8, 13 );
     v3 = new Vector3();

Matrix4x4 Examples
^^^^^^^^^^^^^^^^^^

::

    m1 = new Matrix4x4().rotateAboutX(Math.PI/1.5).rotateAboutY(Math.PI/3);
     m2 = new Matrix4x4().rotateAboutZ(Math.PI/4).translate(new Vector3(0,5,0));
     m3 = new Matrix4x4(m1);

Color Examples
^^^^^^^^^^^^^^

::

    c1 = new Color( 0.6, 0.8, 1.0 ); // light blue
     c2 = new Color( 0.5, 0.5, 0.5 ); // middle grey
     c3 = new Color(); //black
     
     // A function to blend two Colors
     Color.prototype.blend = function( color, amount )
     {
         red       = ( this.r * ( 1 - amount ) ) + ( color.r * amount );
         green     = ( this.g * ( 1 - amount ) ) + ( color.g * amount );
         blue      = ( this.b * ( 1 - amount ) ) + ( color.b * amount );
         return( new Color( red, green, blue ) );
     }
     c4  = c1.blend( c2, 0.25 );

Scene object
------------

The ``Scene`` is an object that contains all of the 3D-related content. It can be accessed using the global variable ``scene`` , which is a reference to the main ``Scene`` object. Most of the contents of the ``Scene`` are structured into a hierarchy of ``Node`` objects, and maintains lists of all these objects in the form of a ``SceneObjectList`` .

For more information, see `Scene <JS_3D_API.html#50552849_53181>`__.

Canvas object
-------------

Represents a rectangular region into which a ``Scene`` is rendered from a particular viewpoint.

For more information, see `Canvas <JS_3D_API.html#50552849_64381>`__.

Runtime object
--------------

The ``Runtime`` object is used to represent the instance of the playback engine. It manages all event processing and places where the graphic and textual content is rendered. It is accessed via the global variable ``runtime`` , which is a reference to the main ``Runtime`` object.

For more information, see `Runtime <JS_3D_API.html#50552849_89312>`__.

Console object
--------------

The Console is the Acrobat text output area. It is helpful in debugging scripts.

Resource objects
----------------

Some objects, such as ``Image`` , are driven by content that is streamed from a file or over a network. To create an ``Image`` , load a .png, .jpg, or .gif file as a ``Resource`` , which you may subsequently use to create a new ``Image`` object, as shown in the following example:

::

    faceRes = new Resource("pdf://picture.jpg");
     faceImage = new Image( faceRes );
     aMaterial = scene.meshes.getByIndex(0).material;
     aMaterial.diffuseTexture.setImage( faceImage );

For more information, see `Resource <JS_3D_API.html#50552849_90660>`__ and `Image <JS_3D_API.html#50552849_33825>`__.

Event handlers
--------------

There are several types of event handlers:

-  `CameraEventHandler <JS_3D_API.html#50552849_44478>`__
-  `KeyEventHandler <JS_3D_API.html#50552849_64405>`__
-  `MouseEventHandler <JS_3D_API.html#50552849_88510>`__
-  `MenuEventHandler <JS_3D_API.html#50552849_88392>`__
-  `RenderEventHandler <JS_3D_API.html#50552849_90292>`__
-  `ScrollWheelEventHandler <JS_3D_API.html#50552849_17926>`__
-  `SelectionEventHandler <JS_3D_API.html#50552849_72461>`__
-  `TimeEventHandler <JS_3D_API.html#50552849_37976>`__
-  `ToolEventHandler <JS_3D_API.html#50552849_36913>`__

Each one responds to a different type of event during simulation. They use a callback mechanism to run a function when an event occurs. The event is passed as an argument to the event handler^s ``onEvent`` function so that it can be queried when the function runs. Event handlers are registered via the `addEventHandler <JS_3D_API.html#50552849_22923>`__ method, of the ``Runtime`` object.

CamaraEvent
-----------

A ``CamaraEvent`` is created when a View is selected.

For more information, see `CameraEvent <JS_3D_API.html#50552849_70741>`__.

KeyEvent
--------

A ``KeyEvent`` is created when a key is pressed or released while the 3D ``Canvas`` is in focus. The following example illustrates how to handle a key event:

::

    myKeyHandler          = new KeyEventHandler();
     myKeyHandler.onEvent  = function( event )
     {
         console.print( "Key pressed with code: " + event.characterCode );
     }
     runtime.addEventHandler( myKeyHandler );

For more information, see `KeyEvent <JS_3D_API.html#50552849_34637>`__.

MenuEvent
---------

A ``MenuEvent`` is created when a custom menu item is selected. To create a custom menu item on the context menu, invoke the ``Runtime`` object^s ``addCustomMenuItem`` method, which allows a script to be attached to the item selection event.

For more information, see `MenuEvent <JS_3D_API.html#50552849_35098>`__.

MouseEvent
----------

A ``MouseEvent`` is created when the mouse is clicked on an active 3D ``Canvas`` or the cursor moves over an active 3D ``Canvas`` . The following syntax could be used to handle a mouse event:

::

    myMouseHandler               = new MouseEventHandler();
     myMouseHandler.onMouseDown   = true;
     myMouseHandler.target        = scene.meshes.getByIndex(0);
     myMouseHandler.onEvent       = function( event )
     {
         console.print( "Mouse down at pixel " + event.mouseX );
         console.print( ", " + event.mouseY );
     }
     runtime.addEventHandler( myMouseHandler );

For more information, see `MouseEvent <JS_3D_API.html#50552849_10766>`__.

RenderEvent
-----------

A ``RenderEvent`` is created immediately before an instance of the ``Canvas`` is drawn. If there is a split view in Acrobat resulting in two visible 3D rendered areas, a unique ``RenderEvent`` will be called for each of them. This is necessary in the case of a camera-aligned image (sprite) in the 3D content that needs to be pixel-aligned. Since the pixel dimensions of the two areas are possibly different, there are two callbacks that pass the different dimensions. This makes it possible to modify the ``Scene`` in the appropriate manner before it is drawn.

For more information, see `RenderEvent <JS_3D_API.html#50552849_39788>`__.

ScrollWheelEvent
----------------

A ``ScrollWheelEvent`` object is created when the mouse scroll wheel is activated over an active 3D ``Canvas`` object.

For more information, see `ScrollWheelEvent <JS_3D_API.html#50552849_36231>`__.

SelectionEvent
--------------

A ``SelectionEvent`` object is created when an object is selected from an active 3D ``Canvas`` object or from a model tree. If the selection is made from a ``Canvas`` object, a ``MouseEvent`` is also created.

For more information, see `SelectionEvent <JS_3D_API.html#50552849_25964>`__.

TimeEvent
---------

A ``TimeEvent`` is created when the 3D annotation is enabled and simulation is active. The time and deltaTime properties are measured in terms of simulation time, not real time. ``TimeEvent`` objects are used to drive animation. If you need an accurate, real-time measurement, use the JavaScript ``Date`` object. The following syntax is used to handle a time event:

::

    myTimeHandler              = new TimeEventHandler();
     myTimeHandler.onEvent      = function( event )
     {
         console.print( "Current simulation time is:" + event.time );
         console.print( " second(s)" );
     }
     runtime.addEventHandler( myTimeHandler );

For more information, see `TimeEvent <JS_3D_API.html#50552849_41486>`__.

ToolEvent
---------

A ``ToolEvent`` is created when a tool is clicked in the Acrobat 3D toolbar. The ``Runtime`` object^s ``addCustomToolButton`` method allows you to add a custom tool to the toolbar which will also be generated, and allows a script to be attached to the tool selection event.

For more information, see `ToolEvent <JS_3D_API.html#50552849_36004>`__.
