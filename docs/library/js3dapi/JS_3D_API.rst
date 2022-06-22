******************************************************
JavaScript Objects for Acrobat 3D
******************************************************

.. note::

   A property labeled as R (read-only) is one whose value cannot be set. An object labeled as R (read-only) is one whose reference cannot be modified, though the object itself can be set and its properties may be modified. Unless otherwise indicated, all properties and objects labeled with R/W have read/write access.

Animation
=========

A type of `SceneObject <JS_3D_API.html#50552849_10063>`__, used to store keyframe animation sequences of ``Node`` objects in the Scene. In addition to the methods and properties below, it also contains the same methods and properties as a ``SceneObject``.

**Properties**


.. _section-1:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - currentTime
     - number
     - R/W
     - The current time measured in seconds.

   * - endTime
     - number
     - R
     - The end time of the sequence, measured in seconds.

   * - framesPerSecond
     - number
     - R
     - The number of frames per second used to author the sequence.

   * - length
     - number
     - R
     - The length of the ``Animation`` , measured in seconds.

   * - startTime
     - number
     - R
     - The start time of the sequence, measured in seconds.


Background
==========

Represents the background of a ``Canvas``. It can be used as a target of a ``MouseEventHandler``. (See `Canvas <JS_3D_API.html#50552849_64381>`__ and `MouseEventHandler <JS_3D_API.html#50552849_88510>`__.)

.. _properties-1:

**Properties**


.. _section-2:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - image
     - Image
     - R/W
     - Acrobat 7.0.7
       
       The ``Image`` to be used by the ``Background``.                                                                                       

   * - FlashMovie
     - FlashMovie
     - R/W
     - Acrobat 9.0
       
       The ``FlashMovie`` to be used by the ``Background``. ``FlashMovie`` replaces any ``Image`` or ``Color`` currently being used by the ``Background``


getColor
--------

Obtains the background ``Color``.

**Syntax**


::

   getColor()

**Returns**


A ``Color`` object representing the background color of the ``Canvas``.

getImage
--------

Deprecated

Obtains the background ``Image``.

.. _syntax-1:

**Syntax**


::

   getImage()

.. _returns-1:

**Returns**


An ``Image`` object representing the background image of the ``Canvas``.

setColor
--------

Sets the background ``Color``. If only one color is passed to this method, the background is a constant color. If two colors are passed to this method, the background is a linear gradient from top to bottom, with the first color argument representing the top color and the second representing the bottom color.

.. _syntax-2:

**Syntax**


::

   setColor(topColor, bottomColor)

**Parameters**


.. _section-3:


 

.. list-table::
   :header-rows: 0


   * - topColor
     - A ``Color`` object representing the desired background color. If ``bottomColor`` is used, ``topColor`` represents the top background color used in a linear gradient.

   * - bottomColor
     - (Optional) A ``Color`` object representing the bottom background color used in a linear gradient.


.. _returns-2:

**Returns**


undefined

setImage
--------

Deprecated

Sets the background Image.

.. _syntax-3:

**Syntax**


::

   setImage(image)

.. _parameters-1:

**Parameters**


.. _section-4:


 

.. list-table::
   :header-rows: 0


   * - image
     - An ``Image`` object representing the desired background image.


.. _returns-3:

**Returns**


undefined

Bone
====

A type of ``Node`` used to modify the shape of a ``Mesh`` , and is usually moved over time to create animated characters. It contains the same methods and properties as a ``Node``.

Related objects are `Node <JS_3D_API.html#50552849_56757>`__ and `Mesh <JS_3D_API.html#50552849_30519>`__.

BoundingBox
===========

Represents an axis-aligned bounding box.

.. _properties-2:

**Properties**


.. _section-5:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - center
     - Vector3
     - R
     - Acrobat 7.0.7
       
       The coordinates of the ``BoundingBox`` center.

   * - max
     - Vector3
     - R
     - The coordinates of the ``BoundingBox`` corner with the greatest x, y, and z values.

   * - min
     - Vector3
     - R
     - The coordinates of the ``BoundingBox`` corner with the smallest x, y, and z values.


Camera
======

A ``Node`` that controls the projection from world space to screen space. In addition to the methods and properties below, it also contains the same methods and properties as a `Node <JS_3D_API.html#50552849_56757>`__.

.. _properties-3:

**Properties**


.. _section-6:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - absoluteBindingScale
     - number
     - R/W
     - Acrobat 7.0
       
       The absolute binding scale value for the camera.

   * - binding
     - string
     - R/W
     - The view plane calculation type, which can take one of the following values:
       
       -  ``"min"``
       -  ``"max"``
       -  ``"horizontal"``
       -  ``"vertical"``

   * - BINDING_HORIZONTAL
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the binding value of ``"horizontal"``.                                                                                  

   * - BINDING_MAX
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the binding value of ``"max"``.                                                                                         

   * - BINDING_MIN
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the binding value of ``"min"``.                                                                                         

   * - BINDING_VERTICAL
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the binding value of ``"vertical"``.                                                                                    

   * - far
     - number
     - R/W
     - The distance from the ``Camera`` to the far clipping plane. A value of -1 for both ``near`` and ``far`` signifies to use auto clipping plane calculations.

   * - fov
     - number
     - R/W
     - The size of the field of view for perspective ``Camera`` objects, measured in radians.

   * - near
     - number
     - R/W
     - The distance from the ``Camera`` to the near clipping plane. A value of -1 for both ``near`` and ``far`` signifies to use auto clipping plane calculations.

   * - position
     - Vector3
     - R
     - The position of the origin of the ``Camera`` in world space.

   * - positionLocal
     - Vector3
     - R
     - The position of the origin of the ``Camera`` in local space.

   * - projectionType
     - string
     - R/W
     - The type of projection, which can take one of the following values:
       
       -  ``"perspective"``
       -  ``"orthographic"``

   * - roll
     - number
     - R/W
     - The roll angle of the ``Camera`` , measured in radians.

   * - target
     - Node
     - R
     - The current ``Node`` used as the ``Camera`` object's target.

   * - targetPosition
     - Vector3
     - R
     - The position of the ``Camera`` object's target in world space.

   * - targetPositionLocal
     - Vector3
     - R/W
     - The position of the ``Camera`` object's target in local space.

   * - TYPE_ORTHOGRAPHIC
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the camera projection type of ``"orthographic"``.                                                                       

   * - TYPE_PERSPECTIVE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the camera projection type of ``"perspective"``.                                                                        

   * - up
     - Vector3
     - R
     - The up direction in world space.

   * - upLocal
     - Vector3
     - R
     - The up direction in local space.

   * - useAbsoluteBinding
     - Boolean
     - R
     - Acrobat 7.0
       
       Determines whether the camera uses absolute binding for its projection.

   * - viewPlaneSize
     - number
     - R/W
     - The size of the view plane for orthographic ``Camera`` objects, measured in scene units.


getScreenFromPosition
---------------------

Obtains the screen coordinates of the provided 3D position.

.. _syntax-4:

**Syntax**


::

   getScreenFromPosition(position, canvasWidth, canvasHeight)

.. _parameters-2:

**Parameters**


.. _section-7:


 

.. list-table::
   :header-rows: 0


   * - position
     - A ``Vector3`` object representing the 3D position.

   * - canvasWidth
     - The width of the ``Canvas`` , measured in pixels.

   * - canvasHeight
     - The height of the ``Canvas`` , measured in pixels.


.. _returns-4:

**Returns**


A ``Vector3`` object representing the screen coordinates, with ``x`` and ``y`` as pixel positions and ``z`` equal to zero.

See `Vector3 <JS_3D_API.html#50552849_18146>`__ for more information on the return object.

getDirectionFromScreen
----------------------

Obtains the direction from the normalized coordinates

.. _syntax-5:

**Syntax**


::

   getDirectionFromScreen(x, y, canvasWidth, canvasHeight)

.. _parameters-3:

**Parameters**


.. _section-8:


 

.. list-table::
   :header-rows: 0


   * - x
     - The x-coordinate, measured in pixels.

   * - y
     - The y-coordinate, measured in pixels.

   * - canvasWidth
     - The width of the ``Canvas`` , measured in pixels.

   * - canvasHeight
     - The height of the ``Canvas`` , measured in pixels.


.. _returns-5:

**Returns**


A ``Vector3`` object representing the direction.

See `Vector3 <JS_3D_API.html#50552849_18146>`__ for more information on the return object.

CameraEvent
===========

Describes the format of the object that is passed as an argument to the ``onEvent`` method of the ``CameraEventHandler`` object.

.. _properties-4:

**Properties**


.. _section-9:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - binding
     - string
     - R
     - The view plane calculation type, which can take one of the following values:
       
       -  "min"
       -  "max"
       -  "horizontal"
       -  "vertical"

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` in which the event took place.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - far
     - number
     - R
     - The distance from the ``Camera`` to the far clipping plane. A value of -1 for both ``near`` and ``far`` signifies to use auto clipping plane calculations.

   * - fov
     - number
     - R
     - The size of the field of view for perspective ``Camera`` objects, measured in radians.

   * - isNewCanvas
     - Boolean
     - R
     - Deprecated
       
       Determines whether this is the first event for this ``Canvas``.                                                                               

   * - near
     - number
     - R
     - The distance from the ``Camera`` to the near clipping plane. A value of -1 for both ``near`` and ``far`` signifies to use auto clipping plane calculations.

   * - projectionType
     - string
     - R
     - The type of projection, which can take one of the following values:
       
       -  "perspective"
       -  "orthographic"

   * - targetDistance
     - number
     - R
     - The distance from the ``Camera`` to its target.

   * - transform
     - Matrix4x4
     - R
     - The Camera object's transformation matrix.

   * - view
     - View object
     - R
     - The name of the view being activated.

   * - viewPlaneSize
     - number
     - R
     - The size of the view plane, measured in scene units.


CameraEventHandler
==================

Exposes a callback mechanism that allows a function to be evaluated when an camera event occurs. Event handlers are registered with the Runtime `addEventHandler <JS_3D_API.html#50552849_22923>`__ method.

.. _cameraeventhandler-1:

CameraEventHandler
------------------

A constructor that creates a new ``CameraEventHandler`` object.

.. _syntax-6:

**Syntax**


::

   new CameraEventHandler()

.. _returns-6:

**Returns**


A ``CameraEventHandler`` object.

onEvent
-------

A method that is called when a view is selected from the list of views on the 3D toolbar or in the context menu for an active 3D annotation.

.. _syntax-7:

syntax


::

   onEvent(event)

.. _parameters-4:

**Parameters**


.. _section-10:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``CameraEvent`` object representing the event.


.. _returns-7:

**Returns**


undefined

Canvas
======

Represents a rectangular region into which the ``Scene`` is rendered from the viewpoint of the attached ``Camera``.

See related objects, `Scene <JS_3D_API.html#50552849_53181>`__ and `Camera <JS_3D_API.html#50552849_61050>`__.

.. _properties-5:

**Properties**


.. _section-11:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - background
     - Background
     - R
     - The ``Background`` object associated with the ``Canvas.``


getCamera
---------

Obtains the ``Camera`` object attached to the ``Canvas``.

.. _syntax-8:

**Syntax**


::

   getCamera()

.. _returns-8:

**Returns**


A ``Camera`` object.

setCamera
---------

Sets the ``Camera`` object attached to the ``Canvas``.

.. _syntax-9:

**Syntax**


::

   setCamera(camera)

.. _parameters-5:

**Parameters**


.. _section-12:


 

.. list-table::
   :header-rows: 0


   * - camera
     - The ``Camera`` object used to set the object's value.


.. _returns-9:

**Returns**


undefined

ClippingPlane
=============

An object representing a plane, within the ``Scene`` , that clips all geometry on one side of it. It is created by invoking the `createClippingPlane <JS_3D_API.html#50552849_59373>`__ method of the ``Scene`` object.

remove
------

Removes the ``ClippingPlane`` object from the ``Scene``.

.. _syntax-10:

**Syntax**


::

   remove()

.. _returns-10:

**Returns**


undefined

Color
=====

An object that represents a RGB encoded color.

.. _properties-6:

**Properties**


.. _section-13:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - b
     - number
     - The blue component, which can be a value from ``0.0`` to ``1.0.``

   * - g
     - number
     - The green component, which can be a value from ``0.0`` to ``1.0.``

   * - r
     - number
     - The red component, which can be a value from ``0.0`` to ``1.0.``


.. _color-1:

Color
-----

A constructor that creates a ``Color`` object, initialized to black.

.. _syntax-11:

**Syntax**


::

   new Color()

.. _returns-11:

**Returns**


A ``Color`` object, initialized to black.

.. _color-2:

Color
-----

A constructor that creates a ``Color`` object, initialized to the supplied RGB values.

.. _syntax-12:

**Syntax**


::

   new Color(r, g, b)

.. _parameters-6:

**Parameters**


.. _section-14:


 

.. list-table::
   :header-rows: 0


   * - r
     - The red component, which can be a value from ``0.0`` to ``1.0.``

   * - g
     - The green component, which can be a value from ``0.0`` to ``1.0.``

   * - b
     - The blue component, which can be a value from ``0.0`` to ``1.0.``


.. _returns-12:

**Returns**


A ``Color`` object, initialized to the supplied RGB values.

set
---

Sets the ``Color`` object's value using an existing ``Color`` object

.. _syntax-13:

**Syntax**


::

   set(color)

.. _parameters-7:

**Parameters**


.. _section-15:


 

.. list-table::
   :header-rows: 0


   * - color
     - The ``Color`` object used to set the object's value.


.. _returns-13:

**Returns**


undefined

.. _set-1:

set
---

Acrobat 7.0.7

Sets the ``Color`` object's value using the given RGB components.

.. _syntax-14:

**Syntax**


::

   set(r, g, b)

.. _parameters-8:

**Parameters**


.. _section-16:


 

.. list-table::
   :header-rows: 0


   * - r
     - The red component, which can be a value from ``0.0`` to ``1.0.``

   * - g
     - The green component, which can be a value from ``0.0`` to ``1.0.``

   * - b
     - The blue component, which can be a value from ``0.0`` to ``1.0.``


.. _returns-14:

**Returns**


undefined

set3
----

Deprecated

Sets the ``Color`` object's value using the given RGB components.

.. _syntax-15:

**Syntax**


::

   set3(r, g, b)

.. _parameters-9:

**Parameters**


.. _section-17:


 

.. list-table::
   :header-rows: 0


   * - r
     - The red component, which can be a value from ``0.0`` to ``1.0.``

   * - g
     - The green component, which can be a value from ``0.0`` to ``1.0.``

   * - b
     - The blue component, which can be a value from ``0.0`` to ``1.0.``


.. _returns-15:

**Returns**


undefined

Console
=======

This object can direct output to the JavaScript console in Acrobat for debugging purposes. The variable ``console`` is a global reference to this object.

print
-----

Prints a string to the JavaScript Console.

.. _syntax-16:

**Syntax**


::

   print(string)

.. _parameters-10:

**Parameters**


.. _section-18:


 

.. list-table::
   :header-rows: 0


   * - string
     - The text to be printed to the JavaScript Console.


.. _returns-16:

**Returns**


undefined

println
-------

Prints a string with an accompanying newline to the JavaScript Console.

.. _syntax-17:

**Syntax**


::

   println(string)

.. _parameters-11:

**Parameters**


.. _section-19:


 

.. list-table::
   :header-rows: 0


   * - string
     - The text to be printed to the JavaScript Console.


.. _returns-17:

**Returns**


undefined

Dummy
=====

Deprecated

A ``Node`` object used as an empty placeholder or a group within a ``Scene``.

FlashEvent
==========

Acrobat 9.0

An object that is passed as an argument to the `onEvent <JS_3D_API.html#50552849_62858>`__ method of the FlashEventHandler object.

.. _properties-7:

**Properties**


.. _section-20:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - command
     - string
     - R
     - For a ``FlashEvent`` of type ``"command"`` , this is the string representation of the command that has been sent through the ActionScript ``FSCommand`` function or through the ``ExternalInterface.call`` method.
       
       To execute the command, run the JavaScript function ``eval`` with the command string as an argument.

   * - target
     - ``FlashMovie``
     - R
     - The target ``FlashMovie`` that the ``FlashEvent`` is from.

   * - type
     - string
     - R
     - The type of ``FlashEvent`` , which can be ``"command"`` , ``"progress",`` or ``"stateChange"``.                                                                                                      

   * - TYPE_COMMAND
     - string
     - R
     - A string constant for the ``FlashEvent`` type of ``"command"``.                                                                                                                                      

   * - TYPE_PROGRESS
     - string
     - R
     - A string constant for the ``FlashEvent`` type of ``"progress"``.                                                                                                                                     

   * - TYPE_STATECHANGE
     - string
     - R
     - A string constant for the ``FlashEvent`` type of ``"stateChange"``.                                                                                                                                  

   * - value
     - integer
     - R
     - The value for the corresponding type of ``FlashEvent``. The interpretation of ``value`` depends on the event type, ``"progress"`` or ``"stateChange"``.                                             
       
       ``"progress"`` : ``value`` is an integer from 0 to 100 representing the load progress of the ``FlashMovie``.                                                                                         
       
       ``"stateChange"`` : ``value`` is an integer signifying the ready state of the ``FlashMovie``. Permitted values are ``0`` (Loading), ``1`` (Uninitialized), ``2`` (Loaded), ``3`` (Interactive), ``4`` (Complete).


FlashEventHandler
=================

Acrobat 9.0

An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs in a ``FlashMovie`` object. Event handlers are registered with the Runtime. `addEventHandler <JS_3D_API.html#50552849_22923>`__ method.

.. _properties-8:

**Properties**


.. _section-21:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - target
     - ``FlashMovie``
     - R/W
     - When set, the ``FlashEventHandler`` will only report FlashEvents from the provided target ``FlashMovie``.


.. _onevent-1:

onEvent
-------

A method that is called when an ``ExternalInterface.call`` method or ``MMExecute`` command is invoked from the ``FlashMovie`` 's ActionScript.

.. _syntax-18:

**Syntax**


::

   onEvent(event)

.. _parameters-12:

**Parameters**


.. _section-22:


 

.. list-table::
   :header-rows: 0


   * - event
     - A FlashEvent object representing the event.


.. _returns-18:

**Returns**


undefined

.. _flasheventhandler-1:

FlashEventHandler
-----------------

The constructor that creates a new ``FlashEventHandler``.

.. _syntax-19:

**Syntax**


::

   new FlashEventHandler()

.. _returns-19:

**Returns**


A ``FlashEventHandler`` object.

FlashMovie
==========

Acrobat 9.0

An object that represents a Flash movie in the ``Scene``.

.. _properties-9:

**Properties**


.. _section-23:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - alignMode
     - integer
     - R/W
     - A bit flag that sets the alignment of the movie within the Scene. Values are +1 (left aligned), +2 (right aligned), +4 (top aligned), and +8 (bottom aligned).

   * - ALIGN_MODE_BOTTOM
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"`` bottom ``"``.                                                                                

   * - ALIGN_MODE_LEFT
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"`` left ``"``.                                                                                  

   * - ALIGN_MODE_RIGHT
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"`` right ``"``.                                                                                 

   * - ALIGN_MODE_TOP
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"`` top ``"``.                                                                                   

   * - backgroundColor
     - integer
     - R/W
     - Override the background color of a movie. An integer of the form (red * 65536 + green * 256 + blue). Use a value of -1 for the default movie color.
       
       The values for red, green and blue are integers between 0 and 255, inclusive, and represent the color components of red, green, and blue, respectively, in the RGB color model.

   * - desiredResolutionX
     - integer
     - R/W
     - The desired resolution width for the ``FlashMovie`` content to be rendered at.

   * - desiredResolutionY
     - integer
     - R/W
     - The desired resolution height for the ``FlashMovie`` content to be rendered at.

   * - frameNum
     - integer
     - R/W
     - The frame number of the currently displayed frame of the movie. Setting this property advances or rewinds the movie.

   * - hitEnabled
     - Boolean
     - R/W
     - Determines whether mouse events travel through the ``FlashMovie`` to elements in the scene behind it. If ``true`` , mouse events are trapped.

   * - id
     - integer
     - R
     - A unique ID for each ``FlashMovie`` in the scene.

   * - loop
     - Boolean
     - R/W
     - A flag that determines whether the animation loops. If ``true`` , the animation loops. If ``false`` , it plays only once.

   * - opacity
     - number
     - R/W
     - The opacity of the ``FlashMovie`` represented by a value from 0.0 to 1.0, where 1.0 is completely opaque.

   * - percentLoaded
     - integer
     - R
     - The percent of the Adobe Flash Player movie that has streamed into the browser so far with possible values from from 0 to 100.

   * - playing
     - Boolean
     - R
     - A flag that detects whether the movie is currently playing. If ``true`` , it is playing. If ``false`` , it is paused.

   * - quality
     - integer
     - R/W
     - The current rendering quality. Permitted values are ``0`` (Low), ``1`` (High), ``2`` (AutoLow), and ``3`` (AutoHigh).

   * - readyState
     - integer
     - R
     - The state of the ``FlashMovie``. Permitted values are ``0`` (Loading), ``1`` (Uninitialized), ``2`` (Loaded), ``3`` (Interactive), ``4`` (Complete).              

   * - resolutionType
     - string
     - R/W
     - A string value that specifies the type of resolution to be used for the movie. Recognized values are ``"custom"`` , ``"movie"`` , and ``"window"``.               

   * - RESOLUTION_TYPE_CUSTOM
     - string
     - R
     - A string constant for the ``FlashMovie`` resolution type of ``"custom"``.                                                                                         

   * - RESOLUTION_TYPE_MOVIE
     - string
     - R
     - A string constant for the ``FlashMovie`` resolution type of ``"movie"``.                                                                                          

   * - RESOLUTION_TYPE_WINDOW
     - string
     - R
     - A string constant for the ``FlashMovie`` resolution type of ``"window"``.                                                                                         

   * - scaleMode
     - string
     - R/W
     - The scale mode of the movie. The value of this property may be ``"exact fit"`` , ``"no border"`` , or ``"show all"``.                                             

   * - SCALE_MODE_EXACT_FIT
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"exact fit"``.                                                                                   

   * - SCALE_MODE_NO_BORDER
     - string
     - R
     - A string constant for the ``FlashMovie`` 's ``scaleMode`` type of ``"no border"``.                                                                                

   * - SCALE_MODE_SHOW_ALL
     - string
     - R
     - A string constant for the ``FlashMovie`` ``scaleMode`` type of ``"show all"``.                                                                                    

   * - totalFrames
     - integer
     - R
     - The total number of frames in the movie. This is not available until the movie has loaded. Wait for ``ReadyState`` = ``4``.                                       

   * - x
     - integer
     - R/W
     - The x-position of the ``FlashMovie`` in the ``Canvas``. Applies only to a ``FlashMovie`` if it is attached to the ``Foreground``.                                

   * - y
     - integer
     - R/W
     - The y-position of the ``FlashMovie`` in the ``Canvas``. Applies only to a ``FlashMovie`` if it is attached to the ``Foreground``.                                


.. _flashmovie-1:

FlashMovie
----------

Creates a new ``FlashMovie`` from a ``Resource`` of type ``"flash"``.

.. _syntax-20:

**Syntax**


::

   FlashMovie(FlashMovieResource)

.. _parameters-13:

**Parameters**


.. _section-24:


 

.. list-table::
   :header-rows: 0


   * - FlashMovieResource
     - A ``Resource`` of type ``"flash"``.


.. _returns-20:

**Returns**


A ``FlashMovie`` object.

call
----

Calls into ActionScript with the ``ExternalInterface`` calling convention to an exposed method (``ExternalInterface.addCallback`` in ActionScript). The ``call`` method returns the return value of the method specified as the first parameter.

.. note::

   See the Acrobat JavaScript API Reference which has the ``callAS`` method of the AnnotRichMedia object that uses the same mechanism as the ``call`` method.

.. _syntax-21:

**Syntax**


::

   call(functionName, [argument1[, ...,argumentn]])

.. _parameters-14:

**Parameters**


.. _section-25:


 

.. list-table::
   :header-rows: 0


   * - functionName
     - A string representing the function name to call in the ``FlashMovie`` ActionScript engine.

   * - argument1,argument2,...,argumentn
     - A comma-delimited list of arguments of varying type to be passed to the function in ActionScript.


.. _returns-21:

**Returns**


The return value from the called function, which can be of any type.

getVariable
-----------

A method that returns the value of the Flash variable specified by ``varName`` , and returns ``undefined`` if the variable does not exist.

.. _syntax-22:

**Syntax**


::

   getVariable(varName)

.. _parameters-15:

**Parameters**


.. _section-26:


 

.. list-table::
   :header-rows: 0


   * - varName
     - A string representing the variable requested.


.. _returns-22:

**Returns**


A string representing the value of the specified Flash variable, or ``undefined``.

gotoFrame
---------

Activates the frame number specified by ``frameNumber`` in the current movie. If the data for a requested frame is not yet available, the player goes to the last frame available and stops, causing unexpected results during playback. Use the ``percentLoaded`` property to determine if enough of the movie is available to execute the ``gotoFrame()`` method. The argument ``frameNumber`` is zero-based; that is, ``frameNumber`` is 0 in the first frame of the movie, 1 for the second frame, and so on. This differs from the ``Goto`` action within Flash, which begins at 1.

.. _syntax-23:

**Syntax**


::

   gotoFrame(frameNumber)

.. _parameters-16:

**Parameters**


.. _section-27:


 

.. list-table::
   :header-rows: 0


   * - frameNumber
     - An integer representing the frame number.


.. _returns-23:

**Returns**


undefined

isPlaying
---------

A method that returns ``true`` if the movie is currently playing.

.. _syntax-24:

**Syntax**


::

   isPlaying()

.. _returns-24:

**Returns**


A Boolean type, ``true`` if the movie is playing, ``false`` otherwise.

pan
---

This method pans a zoomed-in movie to the coordinates specified by ``x`` and ``y``. Use ``mode`` to specify whether the values for ``x`` and ``y`` are pixels or a percentage of the window. The ``pan`` method does not pan beyond the boundaries of the zoomed-in movie.

.. _syntax-25:

**Syntax**


::

   pan(x, y, mode)

.. _parameters-17:

**Parameters**


.. _section-28:


 

.. list-table::
   :header-rows: 0


   * - x
     - An integer representing the x coordinate.

   * - y
     - An integer representing the y coordinate.

   * - mode
     - When ``mode`` is 0, the coordinates are pixels; when ``mode`` is 1, the coordinates are a percentage of the window.


.. _returns-25:

**Returns**


undefined

play
----

Starts playing the movie.

.. _syntax-26:

**Syntax**


::

   play()

.. _returns-26:

**Returns**


undefined

rewind
------

Goes to the first frame.

.. _syntax-27:

**Syntax**


::

   rewind()

.. _returns-27:

**Returns**


undefined

setVariable
-----------

Sets the value of the Flash variable specified by ``variableName`` to the value specified by ``value``.

.. _syntax-28:

**Syntax**


::

   setVariable(varName, value)

.. _parameters-18:

**Parameters**


.. _section-29:


 

.. list-table::
   :header-rows: 0


   * - varName
     - A string representing the variable requested.

   * - value
     - A string value to be set for the provided variable name.


.. _returns-28:

**Returns**


undefined

setZoomRect
-----------

Zooms in on a rectangular area of the movie. The units of the coordinates are measured in twips (1440 units per inch).

.. note::

   To calculate the dimensions of a rectangle in the correct units, set the ruler units to Points and multiply the coordinates by 20 to get twips. (There are 72 points per inch.)

.. _syntax-29:

**Syntax**


::

   setZoomRect(left, top, right, bottom)

.. _parameters-19:

**Parameters**


.. _section-30:


 

.. list-table::
   :header-rows: 0


   * - left
     - An integer representing the left side of the rectangle.

   * - top
     - An integer representing the top side of the rectangle.

   * - right
     - An integer representing the right side of the rectangle.

   * - bottom
     - An integer representing the bottom side of the rectangle.


.. _returns-29:

**Returns**


undefined

stop
----

Stops playing the movie.

.. _syntax-30:

**Syntax**


::

   stop()

.. _returns-30:

**Returns**


undefined

zoom
----

This method zooms the view by a relative scale factor specified by percentage. For example, ``zoom(50)`` doubles the size of the objects in the view, ``zoom(200`` ) reduces the size of objects in the view by one half, and ``zoom(0)`` resets the view to 100%. You cannot specify a scale factor that will zoom-out the original content further than 100%.

.. _syntax-31:

**Syntax**


::

   zoom(percentage)

.. _parameters-20:

**Parameters**


.. _section-31:


 

.. list-table::
   :header-rows: 0


   * - percentage
     - An integer representing the zoom factor.


.. _returns-31:

**Returns**


undefined

HitInfo
=======

The object returned when a hit test occurs during a `MouseEvent <JS_3D_API.html#50552849_10766>`__.

.. _properties-10:

**Properties**


.. _section-32:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - distance
     - number
     - R
     - The distance from the ``Camera`` to the ``HitInfo`` object's ``position.``

   * - material
     - material
     - R
     - Acrobat 8.1
       
       The material of the node that was hit.

   * - position
     - vector3
     - R
     - The position of the point where the hit occurred.

   * - surfaceNormal
     - vector3
     - R
     - Acrobat 8.1
       
       The normal direction at the hit location on the world-space surface.

   * - target
     - node
     - R
     - The target of the hit test.

   * - textureCoordinate
     - vector3
     - R
     - Acrobat 8.1
       
       The texture coordinate of the material that was hit.


Host
====

Acrobat 7.0.7

An object that provides access to the JavaScript engine context and to pertinent objects within it. The variable ``host`` is a global reference to this object. It is a reference to the JavaScript Doc object in which the 3D annotation is contained.

Image
=====

An object that represents an image.

.. _properties-11:

**Properties**


.. _section-33:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - height
     - number
     - R
     - The image's height, measured in pixels.

   * - width
     - number
     - R
     - The image's width, measured in pixels.


.. _image-1:

Image
-----

A constructor that creates an new ``Image`` object.

.. _syntax-32:

**Syntax**


::

   new Image(resource)

.. _parameters-21:

**Parameters**


.. _section-34:


 

.. list-table::
   :header-rows: 0


   * - resource
     - An ``Image`` object used to create the new object.


.. _returns-32:

**Returns**


An ``Image`` object.

See `Image <JS_3D_API.html#50552849_33825>`__ for more information about the return object.

KeyEvent
========

An object that is passed as an argument to the `onEvent <JS_3D_API.html#50552849_78613>`__ method of the ``KeyEventHandler`` object.

.. _properties-12:

**Properties**


.. _section-35:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - canvas
     - R
     - The ``Canvas`` in which the ``KeyEvent`` took place.

   * - canvasPixelHeight
     - integer
     - R
     - The height, measured in pixels, of the ``Canvas``.

   * - canvasPixelWidth
     - integer
     - R
     - The width, measured in pixels, of the ``Canvas``.
   * - characterCode
     - integer
     - R
     - The value of the character pressed according to Acrobat's character mapping, as per this listing of Acrobat character codes:

   * - ctrlKeyDown
     - Boolean
     - R
     - Determines whether the Ctrl key (Windows) or Command key (Mac OS) was pressed.
       
       -  Acrobat intercepts many of the Ctrl + key events because they are used for accelerators in the main application.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - shiftKeyDown
     - Boolean
     - R
     - Determines whether the Shift key was pressed.
       
       -  Holding down the shift key changes the value of the ``KeyEvent.characterCode`` property.


KeyEventHandler
===============

An object that exposes a callback mechanism that allows a function to be evaluated when a key event occurs. Event handlers are registered with the Runtime `addEventHandler <JS_3D_API.html#50552849_22923>`__ method.

.. _keyeventhandler-1:

KeyEventHandler
---------------

A constructor that creates a new ``KeyEventHandler`` object.

.. _syntax-33:

**Syntax**


::

   new KeyEventHandler()

.. _returns-33:

**Returns**


A ``KeyEventHandler`` object.

.. _onevent-2:

onEvent
-------

A method that is called when a key is pressed.

.. _syntax-34:

**Syntax**


::

   onEvent(event)

.. _parameters-22:

**Parameters**


.. _section-37:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``KeyEvent`` object representing the event.


.. _returns-34:

**Returns**


undefined

Light
=====

A ``Node`` object that illuminates meshes in the ``Scene``.

There are different types of ``Light`` objects, each with their own distinct behavior. Infinite ``Light`` objects behave much like sunlight in that they cast parallel light in a given direction. Spot ``Light`` objects have a fixed cone angle that limits their beam to a conical projection. Point ``Light`` objects act similarly to a light bulb, where the light comes from a specific location in 3D space. Currently, none of the ``Light`` objects cast shadows.

In addition to the methods and properties that follow, the ``Light`` object also contains the same methods and properties as a ``Node``.

.. _properties-13:

**Properties**


.. _section-38:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - attenuationA
     - number
     - R/W
     - The ``a`` coefficient for ``attenuationType`` ``"abc"``.                                                                                                                                                                                                                                                                               

   * - attenuationB
     - number
     - R/W
       
         
     - The ``b`` coefficient for ``attenuationType`` ``"abc"``.                                                                                                                                                                                                                                                                               
       
                                                                                                                                                                                                                                                                                                                                              

   * - attenuationC
     - number
     - R/W
       
         
     - The ``c`` coefficient for ``attenuationType`` ``"abc"``.                                                                                                                                                                                                                                                                               
       
                                                                                                                                                                                                                                                                                                                                              

   * - attenuationType
     - string
     - R/W
     - The style of attenuation for the ``Light`` object being represented. Attenuation determines how fast the light intensity decreases with distance. The attenuation type of ``"abc"`` uses the equation 1 / max( ( a + bd + cdd ), 1 ) to determine the intensity where d is the distance from the light. One of the following values may be assigned:
       
       -  ``"abc"``.                                                                                                                                                                                                                                                                                                                          
       -  ``"none"``

   * - ATTENUATION_ABC
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``attenuationType`` of ``"abc"``.                                                                                                                                                                                                                                                                            

   * - ATTENUATION_NONE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``attenuationType`` of ``"none"``.                                                                                                                                                                                                                                                                           

   * - brightness
     - number
     - R/W
     - Specifies the brightness of the emission from the ``Light``. A value of ``1`` represents a brightness of 100%, though the property may be assigned higher values.                                                                                                                                                                      

   * - color
     - Color
     - R
     - Specifies the color of the light.

   * - direction
     - Vector3
     - R
     - The direction toward which the light is pointing.

   * - directionLocal
     - Vector3
     - R
     - Acrobat 7, but not documented until Acrobat 8.1
       
       The direction toward which the light is pointing relative to its parent ``Node``.                                                                                                                                                                                                                                                      

   * - innerConeAngle
     - number
     - R/W
     - The angle, measured in radians, about the ``direction`` in which the light is of uniform full density.

   * - innerRadius
     - number
     - R/W
     - The distance within which the light is of uniform full density.

   * - outerConeAngle
     - number
     - R/W
     - The angle, measured in radians, about the ``direction`` outside of which the light's intensity is zero.

   * - outerRadius
     - number
     - R/W
     - The distance beyond which the light's intensity is zero.

   * - position
     - Vector3
     - R
     - The position of the ``Light`` object.

   * - positionLocal
     - Vector3
     - R
     - The position of the ``Light`` object relative to its parent ``Node.``

   * - type
     - string
     - R/W
     - The type of ``Light`` object being represented. One of the following values may be assigned:
       
       -  "point"
       -  "spot"
       -  "infinite"

   * - TYPE_INFINITE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Light`` type of ``"infinite"``.                                                                                                                                                                                                                                                                            

   * - TYPE_POINT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Light`` type of ``"point"``.                                                                                                                                                                                                                                                                               

   * - TYPE_SPOT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Light`` type of ``"spot"``.                                                                                                                                                                                                                                                                                


Material
========

A ``SceneObject`` that controls the appearance of materials using the fixed function shader. In addition to the properties below, it contains the same methods and properties as a `SceneObject <JS_3D_API.html#50552849_10063>`__.

.. _properties-14:

**Properties**


.. _section-39:


 

.. _section-40:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - ambientColor
     - Color
     - R
     - The ambient color.

   * - ambientTexture
     - Texture
     - R
     - The ambient texture.

   * - bumpTexture
     - Texture
     - R
     - A texture map whose value is used to describe the roughness of the object.

   * - diffuseColor
     - Color
     - R
     - The matte color of an object.

   * - diffuseTexture
     - Texture
     - R
     - A texture map that is used for the matte color of the object.

   * - emissiveColor
     - Color
     - R
     - Emissive color except that it is does not require that any lighting to display. An object with an emissive color of white and no texture will appear pure white in the scene.

   * - emissiveTexture
     - Texture
     - R
     - The emissive texture. Emissive texture is similar to ambient color, except that it is does not require that any lighting to display. An object with an emissive color of white and no texture will appear pure white in the scene.

   * - opacity
     - number
     - R/W
     - The total opacity of the material.

   * - opacityTexture
     - Texture
     - R
     - A texture map whose brightness is used for the level of opacity of the object. White signifies completely opaque while black signifies completely transparent.

   * - phongExponent
     - number
     - R/W
     - The Phong exponent. The Phong exponent defines the "tightness" of the highlight. A higher exponent results in a smaller, tighter highlight while a lower exponent results in a broader flatter one.

   * - reflectionStrength
     - number
     - R/W
     - The reflection level, which can be a value from ``0.0`` to ``1.0.``

   * - reflectionTexture
     - Texture
     - R
     - The reflection texture, also known as an environment map, the texture is used to store the image of the environment surrounding the rendered object. It simulates the reflection of a mirrored surface

   * - specularColor
     - Color
     - R
     - The specular color. The ``specularColor`` is the color of the highlight on the material.

   * - specularStrength
     - number
     - R/W
     - The specular strength, which is a measure of how shiny the material is.


attachFlashMovie
----------------

Acrobat 9.0

Sets the provided ``FlashMovie`` as the diffuse texture for the ``Material``.

.. _syntax-35:

**Syntax**


::

   attachFlashMovie(movie)

.. _parameters-23:

**Parameters**


.. _section-41:


 

.. list-table::
   :header-rows: 0


   * - movie
     - The ``FlashMovie`` object to be used as the diffuse texture.


.. _returns-35:

**Returns**


undefined

Matrix4x4
=========

A four-by-four matrix commonly used for transformations.

.. _properties-15:

**Properties**


.. _section-42:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - determinant
     - number
     - R/W
     - The determinant of the matrix.

   * - inverse
     - Matrix4x4
     - R
     - The inverse of the matrix.

   * - scaleComponent
     - Vector3
     - R
     - The scale component of the transformation.

   * - translation
     - Vector3
     - R
     - The translation component of the transformation.

   * - transpose
     - Matrix4x4
     - R
     - The transpose of the matrix.


.. _matrix4x4-1:

Matrix4x4
---------

A constructor that creates a new ``Matrix4x4`` object initialized to the identity matrix.

.. _syntax-36:

**Syntax**


::

   new Matrix4x4()

.. _returns-36:

**Returns**


A ``Matrix4x4`` object initialized to the identity matrix.

.. _matrix4x4-2:

Matrix4x4
---------

A constructor that creates a new ``Matrix4x4`` object initialized to the specified matrix.

.. _syntax-37:

**Syntax**


::

   new Matrix4x4(matrix)

.. _parameters-24:

**Parameters**


.. _section-43:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - A ``Matrix4x4`` object used to initialize the new matrix.


.. _returns-37:

**Returns**


A ``Matrix4x4`` object initialized to the specified matrix.

invertInPlace
-------------

Inverts the matrix.

.. _returns-38:

**Returns**


undefined

isEqual
-------

Determines whether the current matrix is equal to the specified matrix.

.. _syntax-38:

**Syntax**


::

   isEqual(matrix)

.. _parameters-25:

**Parameters**


.. _section-44:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - A ``Matrix4x4`` object used for the comparison.


.. _returns-39:

**Returns**


**Returns** ``true`` if the matrices are equal, ``false`` otherwise.

multiply
--------

Multiplies the current matrix by the specified matrix.

.. _syntax-39:

**Syntax**


::

   multiply(matrix)

.. _parameters-26:

**Parameters**


.. _section-45:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - A ``Matrix4x4`` object used for the multiplication.


.. _returns-40:

**Returns**


A ``Matrix4x4`` object.

multiplyInPlace
---------------

Multiplies the current matrix by the specified matrix, and updates the current matrix with the resulting value.

.. _syntax-40:

**Syntax**


::

   multiplyInPlace(matrix)

.. _parameters-27:

**Parameters**


.. _section-46:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - A ``Matrix4x4`` object used for the multiplication.


.. _returns-41:

**Returns**


undefined

rotateWithQuaternion
--------------------

Rotates the current matrix using the specified ``Quaternion``.

.. _syntax-41:

**Syntax**


::

   rotateWithQuaternion(quaternion)

.. _parameters-28:

**Parameters**


.. _section-47:


 

.. list-table::
   :header-rows: 0


   * - quaternion
     - A ``Quaternion`` object used for the rotation.


.. _returns-42:

**Returns**


A ``Matrix4x4`` object.

rotateWithQuaternionInPlace
---------------------------

Rotates the current matrix using the specified quaternion, and updates the current matrix with the resulting value.

.. _syntax-42:

**Syntax**


::

   rotateWithQuaternionInPlace(quaternion)

.. _parameters-29:

**Parameters**


.. _section-48:


 

.. list-table::
   :header-rows: 0


   * - quaternion
     - A ``Quaternion`` object used for the rotation.


.. _returns-43:

**Returns**


undefined

rotateAboutLine
---------------

Rotates the current matrix about the specified line.

.. _syntax-43:

**Syntax**


::

   rotateAboutLine(angle, start, end)

.. _parameters-30:

**Parameters**


.. _section-49:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.

   * - start
     - A point described by a ``Vector3`` object used to specify the beginning of the line of rotation, which is represented by ``start`` ``-`` ``end``.

   * - end
     - A point described by a ``Vector3`` object used to specify the end of the line of rotation, which is represented by ``start`` ``-`` ``end``.      


.. _returns-44:

**Returns**


A ``Matrix4x4`` object.

rotateAboutLineInPlace
----------------------

Rotates the current matrix about the specified line, and updates the current matrix with the resulting value.

.. _syntax-44:

**Syntax**


::

   rotateAboutLineInPlace(angle, start, end)

.. _parameters-31:

**Parameters**


.. _section-50:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.

   * - start
     - A ``Vector3`` object used to specify the line of rotation, which is represented by ``start - end``.

   * - end
     - A ``Vector3`` object used to specify the line of rotation, which is represented by ``start - end``.


.. _returns-45:

**Returns**


undefined

rotateAboutX
------------

Rotates the current matrix about the x axis.

.. _syntax-45:

**Syntax**


::

   rotateAboutX(angle)

.. _parameters-32:

**Parameters**


.. _section-51:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-46:

**Returns**


A ``Matrix4x4`` object.

rotateAboutXInPlace
-------------------

Rotates the current matrix about the x axis, and updates the current matrix with the resulting value.

.. _syntax-46:

**Syntax**


::

   rotateAboutXInPlace(angle)

.. _parameters-33:

**Parameters**


.. _section-52:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-47:

**Returns**


undefined

rotateAboutVector
-----------------

Rotates the current matrix about the specified vector.

.. _syntax-47:

**Syntax**


::

   rotateAboutVector(angle, axis)

.. _parameters-34:

**Parameters**


.. _section-53:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.

   * - axis
     - A ``Vector3`` object about which the matrix is rotated.


.. _returns-48:

**Returns**


A ``Matrix4x4`` object.

rotateAboutVectorInPlace
------------------------

Rotates the current matrix about the specified vector, and updates the current matrix with the resulting value.

.. _syntax-48:

**Syntax**


::

   rotateAboutVectorInPlace(angle, axis)

.. _parameters-35:

**Parameters**


.. _section-54:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.

   * - axis
     - A ``Vector3`` object about which the matrix is rotated.


.. _returns-49:

**Returns**


undefined

rotateAboutY
------------

Rotates the current matrix about the y axis.

.. _syntax-49:

**Syntax**


::

   rotateAboutY(angle)

.. _parameters-36:

**Parameters**


.. _section-55:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-50:

**Returns**


A ``Matrix4x4`` object.

rotateAboutYInPlace
-------------------

Rotates the current matrix about the y axis, and updates the current matrix with the resulting value.

.. _syntax-50:

**Syntax**


::

   rotateAboutYInPlace(angle)

.. _parameters-37:

**Parameters**


.. _section-56:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-51:

**Returns**


undefined

rotateAboutZ
------------

Rotates the current matrix about the z axis.

.. _syntax-51:

**Syntax**


::

   rotateAboutZ(angle)

.. _parameters-38:

**Parameters**


.. _section-57:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-52:

**Returns**


A ``Matrix4x4`` object.

rotateAboutZInPlace
-------------------

Rotates the current matrix about the z axis, and updates the current matrix with the resulting value.

.. _syntax-52:

**Syntax**


::

   rotateAboutZInPlace(angle)

.. _parameters-39:

**Parameters**


.. _section-58:


 

.. list-table::
   :header-rows: 0


   * - angle
     - The angle of rotation, in radians.


.. _returns-53:

**Returns**


undefined

scale
-----

Scales the current matrix using the specified scaling components.

.. _syntax-53:

**Syntax**


::

   scale(x, y, z)

.. _parameters-40:

**Parameters**


.. _section-59:


 

.. list-table::
   :header-rows: 0


   * - x
     - The scaling component in the x direction.

   * - y
     - The scaling component in the y direction.

   * - z
     - The scaling component in the z direction.


.. _returns-54:

**Returns**


A ``Matrix4x4`` object.

scaleInPlace
------------

Scales the current matrix using the specified scaling components, and updates the current matrix with the resulting value.

.. _syntax-54:

**Syntax**


::

   scaleInPlace(x, y, z)

.. _parameters-41:

**Parameters**


.. _section-60:


 

.. list-table::
   :header-rows: 0


   * - x
     - The scaling component in the x direction.

   * - y
     - The scaling component in the y direction.

   * - z
     - The scaling component in the z direction.


.. _returns-55:

**Returns**


undefined

.. _set-2:

set
---

Sets the value of the current matrix using the specified matrix.

.. _syntax-55:

**Syntax**


::

   set(matrix)

.. _parameters-42:

**Parameters**


.. _section-61:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - The matrix whose value is copied into the current matrix.


.. _returns-56:

**Returns**


undefined

.. _set-3:

set
---

Acrobat 8.1

Sets the value of the current matrix using an array.

.. _syntax-56:

**Syntax**


::

   set( array )

.. _parameters-43:

**Parameters**


.. _section-62:


 

.. list-table::
   :header-rows: 0


   * - array
     - The array of length 16 whose values are copied into the current matrix.


.. _returns-57:

**Returns**


undefined

.. _set-4:

set
---

Acrobat 8.1

Sets the value of the current matrix using 16 numeric values.

.. _syntax-57:

**Syntax**


::

   set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15)

.. _parameters-44:

**Parameters**


.. _section-63:


 

.. list-table::
   :header-rows: 0


   * - v0-v15
     - Number values for the given indices of the matrix.


.. _returns-58:

**Returns**


undefined

setIdentity
-----------

Sets the value of the current matrix to the identity matrix.

.. _syntax-58:

**Syntax**


::

   setIdentity()

.. _returns-59:

**Returns**


undefined

setView
-------

Sets the current matrix according to the specified component vectors.

.. _syntax-59:

**Syntax**


::

   setView(position, direction, up)

.. _parameters-45:

**Parameters**


.. _section-64:


 

.. list-table::
   :header-rows: 0


   * - position
     - A ``Vector3`` object used to specify the position component.

   * - direction
     - A ``Vector3`` object used to specify the direction component.

   * - up
     - A ``Vector3`` object used to specify the upward component.


.. _returns-60:

**Returns**


undefined

transformDirection
------------------

Transforms the specified vector by the current matrix.

.. _syntax-60:

**Syntax**


::

   transformDirection(vector)

.. _parameters-46:

**Parameters**


.. _section-65:


 

.. list-table::
   :header-rows: 0


   * - vector
     - The ``Vector3`` object to be transformed.


.. _returns-61:

**Returns**


A ``Vector3`` object.

transformPosition
-----------------

Transforms the specified position by the current matrix.

.. _syntax-61:

**Syntax**


::

   transformPosition(position)

.. _parameters-47:

**Parameters**


.. _section-66:


 

.. list-table::
   :header-rows: 0


   * - position
     - A ``Vector3`` object representing the position to be transformed.


.. _returns-62:

**Returns**


A ``Vector3`` object.

translate
---------

Translates the current matrix by the components of the specified vector.

.. _syntax-62:

**Syntax**


::

   translate(translation)

.. _parameters-48:

**Parameters**


.. _section-67:


 

.. list-table::
   :header-rows: 0


   * - translation
     - The ``Vector3`` object whose components are used to perform the matrix translation.


.. _returns-63:

**Returns**


A ``Matrix4x4`` object.

translateInPlace
----------------

Translates the current matrix by the components of the specified vector, and updates the current matrix with the resulting value.

.. _syntax-63:

**Syntax**


::

   translateInPlace(translation)

.. _parameters-49:

**Parameters**


.. _section-68:


 

.. list-table::
   :header-rows: 0


   * - translation
     - The ``Vector3`` object whose components are used to perform the matrix translation.


.. _returns-64:

**Returns**


undefined

transposeInPlace
----------------

Sets the value of the current matrix to its transpose.

.. _syntax-64:

**Syntax**


::

   transposeInPlace()

.. _returns-65:

**Returns**


undefined

MenuEvent
=========

An object that is passed as an argument to the ``onEvent`` method of the ``MenuEventHandler`` object.

.. _properties-16:

**Properties**


.. _section-69:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` in which the ``MenuEvent`` took place.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - menuItemChecked
     - Boolean
     - R
     - Determines whether the menu item was selected.

   * - menuItemName
     - string
     - R
     - The name of the selected menu item.


MenuEventHandler
================

A ``MenuEventHandler`` object exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the ``Runtime`` ``addEventHandler`` method.

.. _menueventhandler-1:

MenuEventHandler
----------------

A constructor that creates a new ``MenuEventHandler`` object.

.. _syntax-65:

**Syntax**


::

   new MenuEventHandler()

.. _returns-66:

**Returns**


A ``MenuEventHandler`` object.

.. _onevent-3:

onEvent
-------

A method that is called when a custom menu item is selected on the context menu for an active 3D annotation.

.. _syntax-66:

**Syntax**


::

   onEvent(event)

.. _parameters-50:

**Parameters**


.. _section-70:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``MenuEvent`` object representing the event.


.. _returns-67:

**Returns**


undefined

Mesh
====

A ``Node`` object that contains geometry. A ``Mesh`` object with no geometry has children ``Node`` objects that can be transformed as a group. In addition to the methods and properties below, it contains the same methods and properties as a `Node <JS_3D_API.html#50552849_56757>`__.

.. _properties-17:

**Properties**


.. _section-71:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - faceCount
     - number object
     - The number of faces the 3D mesh has.

   * - material
     - material
     - The ``Mesh`` object's default ``Material``.                        

   * - renderMode
     - string
     - The ``Mesh`` object's rendering style, which can be one of the following values:
       
       -  ``"default"``
       -  ``"bounding box"``
       -  ``"transparent bounding box"``
       -  ``"transparent bounding box outline"``
       -  ``"vertices"``
       -  ``"shaded vertices"``
       -  ``"wireframe"``
       -  ``"shaded wireframe"``
       -  ``"solid"``
       -  ``"transparent"``
       -  ``"solid wireframe"``
       -  ``"transparent wireframe"``
       -  ``"illustration"``
       -  ``"solid outline"``
       -  ``"shaded illustration"``
       -  ``"hidden wireframe"``


computeBoundingBox
------------------

Acrobat 7.0.7

Computes the bounds of the ``Node`` object.

.. _syntax-67:

**Syntax**


::

   computeBoundingBox()

.. _returns-68:

**Returns**


A ``BoundingBox`` object.

.. _setcolor-1:

setColor
--------

Acrobat 11

Sets the color, either for the entire mesh or for any one of the faces of the mesh. ``setColor`` can be called several time for the same mesh, either to change the color of the entire mesh or to change the color of the faces.

.. _syntax-68:

**Syntax**


::

   setColor(color,faceIndex)

.. _parameters-51:

**Parameters**


.. _section-72:


 

.. list-table::
   :header-rows: 0


   * - color
     - (Optional) A ``Color`` object representing the desired color. Omit this parameter to reset the color and return to the original color (the one read from the PRC or U3D file).

   * - faceIndex
     - (Optional) The index representing the face whose color is to be changed. Omit this parameter to change the color of the entire mesh. If ``faceIndex`` is out of bounds, no action is performed by this method.


.. _returns-69:

**Returns**


undefined.

MouseEvent
==========

An object that is passed as an argument to the ``onEvent`` method of the `MouseEventHandler <JS_3D_API.html#50552849_88510>`__ object.

.. _properties-18:

**Properties**


.. _section-73:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` in which the ``MouseEvent`` took place.

   * - canvasPixelHeight
     - integer
     - R
     - The height, measured in pixels, of the ``Canvas`` in which the ``MouseEvent`` took place.

   * - canvasPixelWidth
     - integer
     - R
     - The width, measured in pixels, of the ``Canvas`` in which the ``MouseEvent`` took place.

   * - ctrlKeyDown
     - Boolean
     - R
     - Determines whether the Ctrl key (Windows) or Command key (Mac OS) was pressed.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - hits
     - Array
     - R
     - A set of ``HitInfo`` objects ordered by distance from nearest to furthest.

   * - isDoubleClick
     - Boolean
     - R
     - Determines whether a double-click event occurred

   * - isMouseDown
     - Boolean
     - R
     - Determines whether the mouse button was pressed

   * - isMouseHit
     - Boolean
     - R
     - Determines whether the target is under the mouse cursor.

   * - isMouseMove
     - Boolean
     - R
     - Determines whether the mouse position changed.

   * - isMouseOut
     - Boolean
     - R
     - Determines whether the mouse position moved off the target.

   * - isMouseOver
     - Boolean
     - R
     - Determines whether the mouse position moved onto the target.

   * - isMouseUp
     - Boolean
     - R
     - Determines whether the mouse button was released.

   * - leftButtonDown
     - Boolean
     - R
     - Determines whether the left mouse button was pressed.

   * - mouseX
     - integer
     - R
     - The x position of the mouse cursor in the ``Canvas.``

   * - mouseY
     - integer
     - R
     - The y position of the mouse cursor in the ``Canvas.``

   * - rightButtonDown
     - Boolean
     - R
     - Version 7.0.1
       
       Determines whether the right mouse button was pressed.

   * - shiftKeyDown
     - Boolean
     - R
     - Determines whether the Shift key was pressed.


MouseEventHandler
=================

An object that exposes a callback mechanism that allows a function to be evaluated when a mouse event occurs. The handler may be customized to filter out certain event types. Event handlers are registered with the Runtime `addEventHandler <JS_3D_API.html#50552849_22923>`__ method.

.. _properties-19:

**Properties**


.. _section-74:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - onMouseDoubleClick
     - Boolean
     - R/W
     - When set to true, the handler is called back when a mouse button is clicked twice in rapid successionon the target object. If no target is specified, the handler calls back on any double-click.

   * - onMouseDown
     - Boolean
     - R/W
     - When set to true, the handler is called back when a mouse button is initially pressed while the cursor is over the target object. If no target is specified, the handler calls back on any button press.

   * - onMouseHit
     - Boolean
     - R/W
     - When set to true, the handler is called back continuously when the cursor is over the target object. In the case of onMouseHit, it does not matter if the target object is behind another object in the scene. The list of resultant hit objects are provided in the ``MouseEvent`` ``hits`` property.

   * - onMouseMove
     - Boolean
     - R/W
     - When set to true, the handler is called back when the cursor moves over the target object. If no target is specified, the handler calls back on any mouse movement over the 3D annotation.

   * - onMouseOut
     - Boolean
     - R/W
     - When set to true, the handler is called back once when the cursor moves off of the target object. To be called back, the target must be the frontmost object. To exclude objects, use the ``Node`` ``hitEnabled`` property.

   * - onMouseOver
     - Boolean
     - R/W
     - When set to true, the handler is called back once when the cursor moves over the target object.

   * - onMouseUp
     - Boolean
     - R/W
     - When set to true, the handler is called back when a mouse button is initially released. If a target is specified, it calls back only when the cursor is over the handler's target.

   * - reportAllTargets
     - Boolean
     - R/W
     - Determines whether a hit test is performed. When set to ``false`` , a hit test is not performed except on a mouse-down or mouse-up event. This is an optimization feature because the current hit test is extremely expensive on complex models. When set to ``false`` , the following events are not reported because they depend on hit testing:
       
       -  ``mouse-hit``
       -  ``mouse-move``
       -  ``mouse-out``
       -  ``mouse-over``

   * - target
     - object
     - R/W
     - The ``Mesh`` or ``Background`` object on which the mouse event occurs.


.. _mouseeventhandler-1:

MouseEventHandler
-----------------

A constructor that creates a new ``MouseEventHandler`` object.

.. _syntax-69:

**Syntax**


::

   new MouseEventHandler()

.. _returns-70:

**Returns**


A ``MouseEventHandler`` object.

.. _onevent-4:

onEvent
-------

A method that is called when a mouse event occurs.

.. _syntax-70:

**Syntax**


::

   onEvent(event)

.. _parameters-52:

**Parameters**


.. _section-75:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``MouseEvent`` object representing the event.


.. _returns-71:

**Returns**


undefined

Node
====

An object within the ``Scene`` hierarchy (a ``SceneObject`` ) that has a 3D representation. The following objects are considered ``Node`` objects:

-   `Bone <JS_3D_API.html#50552849_53648>`__
-   `Camera <JS_3D_API.html#50552849_61050>`__
-  `ClippingPlane <JS_3D_API.html#50552849_68344>`__
-  `Dummy <JS_3D_API.html#50552849_86859>`__
-  `Light <JS_3D_API.html#50552849_50414>`__
-  `Mesh <JS_3D_API.html#50552849_30519>`__
-   `Procedural <JS_3D_API.html#50552849_93289>`__

To obtain a ``Node`` object's type, use the standard JavaScript ``constructor`` property. For example, the following syntax prints the ``Node`` object's type to the console:

::

    console.println(myNode.constructor.name);

In addition to the methods and properties below, it contains the same methods and properties as a `SceneObject <JS_3D_API.html#50552849_10063>`__.

.. _properties-20:

**Properties**


.. _section-76:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - firstChild
     - Node (if the first child exists), None otherwise
     - R
     - The ``Node`` object's first child.

   * - hitEnabled
     - Boolean
     - R/W
     - Determines whether the ``Node`` is included in hit tests. The default value is ``true``.                                                                                                                                                                                                                                                                 

   * - info
     - string
     - R
     - Acrobat 7.0.7
       
       Information associated with the ``Node.``

   * - metadataString
     - string
     - R
     - Acrobat 8.1
       
       A string containing ``Node`` -specific metadata.

   * - nextSibling
     - Node (if the next sibling exists), None otherwise
     - R
     - The next sibling.

   * - opacity
     - number
     - R/W
     - Acrobat 7.0.7
       
       The ``Node`` opacity. A value from 0 to 1, where 1 is completely opaque.

   * - parent
     - object
     - R
     - The ``Node`` object's parent ``Node`` or ``Scene.``

   * - transform
     - Matrix4x4
     - R
     - The local to world transformation matrix for the ``Node.``

   * - wireframeColor
     - Color
     - R
     - The ``Color`` object used to determine the wireframe appearance.

   * - visible
     - Boolean
     - R/W
     - Determines whether the ``Node`` object should be shown. This property applies to mesh notes only. For example, modifying the empty parent node of a mesh tree has no effect on the child mesh tree items. In such cases it is recommended that you modify a parent node that is also a mesh node, and the child mesh items will have the same value for this property.


detachFromCurrentAnimation
--------------------------

Removes the ability of the currently active ``Animation`` of the ``Node`` object to transform the ``Node``.

.. _syntax-71:

**Syntax**


::

   detachFromCurrentAnimation()

.. _returns-72:

**Returns**


undefined

Procedural
==========

Deprecated

A ``Node`` object used to represent procedurally created geometry, such as constructive solid geometry (CSG) solids, procedural spheres, or NURB objects (a 3D curve or surface). A ``Procedural`` object contains the same methods and properties as a `Node <JS_3D_API.html#50552849_56757>`__.

Quaternion
==========

Represents a rotation in 3D space, and allows for smooth interpolation (blending) between orientations of subjects. A ``Quaternion`` is typically used for animating a ``Camera`` or ``Mesh`` over time, and can be converted to and from angles of rotation about the axes.

.. _quaternion-1:

Quaternion
----------

A constructor that initializes the object with the identity matrix.

.. _syntax-72:

**Syntax**


::

   new Quaternion()

.. _returns-73:

**Returns**


A ``Quaternion`` object.

.. _quaternion-2:

Quaternion
----------

A constructor that initializes the object with the specified rotation matrix.

.. _syntax-73:

**Syntax**


::

   new Quaternion(matrix)

.. _parameters-53:

**Parameters**


.. _section-77:


 

.. list-table::
   :header-rows: 0


   * - matrix
     - A ``Matrix4x4`` object representing the rotation matrix.


.. _returns-74:

**Returns**


A ``Quaternion`` object.

.. _quaternion-3:

Quaternion
----------

A constructor that initializes the object with the specified ``Quaternion``.

.. _syntax-74:

**Syntax**


::

   new Quaternion(quaternion)

.. _parameters-54:

**Parameters**


.. _section-78:


 

.. list-table::
   :header-rows: 0


   * - quaternion
     - A ``Quaternion`` object used to initialize the new object.


.. _returns-75:

**Returns**


A ``Quaternion`` object.

interpolate
-----------

Creates a ``Quaternion`` object interpolated from the current and specified ``Quaternion`` objects and ``a``.

.. _syntax-75:

**Syntax**


::

   interpolate(quaternion, a)

.. _parameters-55:

**Parameters**


.. _section-79:


 

.. list-table::
   :header-rows: 0


   * - quaternion
     - A ``Quaternion`` object used to interpolate the new object.

   * - a
     - A number value, from ``0.0`` to ``1.0`` , that specifies the degree (percentage) of interpolation. A value of ``0.5`` represents an interpolation halfway between the current and specified ``Quaternion`` objects.


.. _returns-76:

**Returns**


A ``Quaternion`` object.

interpolateInPlace
------------------

Creates a ``Quaternion`` object interpolated from the current and specified ``Quaternion`` objects and ``a`` , and updates the current ``Quaternion`` object with the new value.

.. _syntax-76:

**Syntax**


::

   interpolateInPlace(quaternion, a)

.. _parameters-56:

**Parameters**


.. _section-80:


 

.. list-table::
   :header-rows: 0


   * - quaternion
     - A ``Quaternion`` object used to interpolate the new object.

   * - a
     - A number value, from ``0.0`` to ``1.0`` , that specifies the degree (percentage) of interpolation. A value of ``0.5`` represents an interpolation halfway between the current and specified ``Quaternion`` objects.


.. _returns-77:

**Returns**


A ``Quaternion`` object.

normalize
---------

Normalizes the ``Quaternion`` object

.. _syntax-77:

**Syntax**


::

   normalize()

.. _returns-78:

**Returns**


undefined

RenderEvent
===========

An object that is passed as an argument to the ``onEvent`` method of the ``RenderEventHandler`` object .

.. _properties-21:

**Properties**


.. _section-81:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` that is the target of the ``RenderEvent.``

   * - canvasPixelHeight
     - integer
     - R
     - The height, measured in pixels, of the ``Canvas`` for which the ``RenderEvent`` is intended.

   * - canvasPixelWidth
     - integer
     - R
     - The width, measured in pixels, of the ``Canvas`` for which the ``RenderEvent`` is intended.

   * - currentTool
     - string
     - R
     - The name of the current tool.


RenderEventHandler
==================

An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the Runtime `addEventHandler <JS_3D_API.html#50552849_22923>`__ method. It issues a callback just before each ``Canvas`` is rendered.

.. _rendereventhandler-1:

RenderEventHandler
------------------

A constructor that creates a new ``RenderEventHandler`` object.

.. _syntax-78:

**Syntax**


::

   new RenderEventHandler()

.. _returns-79:

**Returns**


A ``RenderEventHandler`` object.

.. _onevent-5:

onEvent
-------

A method that is called immediately before the ``Canvas`` is rendered.

.. _syntax-79:

**Syntax**


::

   onEvent(event)

.. _parameters-57:

**Parameters**


.. _section-82:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``RenderEvent`` object representing the event.


.. _returns-80:

**Returns**


undefined

RenderOptions
=============

An object that describes the style with which to render ``Node`` objects in the ``Scene``.

.. _properties-22:

**Properties**


.. _section-83:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - boundingBoxColor
     - Color
     - R
     - A ``Color`` object to be applied to the bounding box.

   * - clippingPlaneColor
     - Color
     - R
     - A ``Color`` object to be applied to the clipping plane.

   * - clippingPlaneIntersectionColor
     - Color
     - R
     - A ``Color`` object to be applied to the clipping plane intersection.

   * - defaultAmbientColor
     - Color
     - R
     - A ``Color`` object to be applied to the default ambient ``Material``. 

   * - defaultDiffuseColor
     - Color
     - R
     - A ``Color`` object to be applied to the default diffuse ``Material``. 

   * - defaultEmissiveColor
     - Color
     - R
     - A ``Color`` object to be applied to the default emissive ``Material``.

   * - defaultSpecularColor
     - Color
     - R
     - A ``Color`` object to be applied to the default specular ``Material``.

   * - illustrationRenderModeFaceColor
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the faces when the render mode is Illustration.

   * - illustrationRenderModeLineColor
     - Color
     - R
     - A ``Color`` object to be applied to the illustration lines.

   * - pointsRenderModeColor
     - Color
     - R
     - A ``Color`` object to be applied to the vertices in point render mode.

   * - shadedIllustrationRenderModeLineColor
     - Color
     - R
     - A ``Color`` object to be applied to the shaded illustration lines.

   * - solidGridColorEven
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the even squares of the checkered grid when drawn in solid mode.

   * - solidGridColorOdd
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the odd squares of the checkered grid when drawn in solid mode.

   * - solidRenderModeLineColor
     - Color
     - R
     - A ``Color`` object to be applied to the solid or transparent lines in render mode.

   * - transparentBoundsRenderModeColor
     - Color
     - R
     - A ``Color`` object to be applied to the transparent bounding box.

   * - transparentGridColorEven
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the even squares of the checkered grid when drawn in transparent mode.

   * - transparentGridColorOdd
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the odd squares of the checkered grid when drawn in transparent mode.

   * - wireframeRenderModeColor
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the wires when the render mode is Wireframe.

   * - xAxisColor
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the x axis.

   * - yAxisColor
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the y axis.

   * - zAxisColor
     - Color
     - R
     - Acrobat 7.0.7
       
       The color of the z axis.


Resource
========

An object that creates an abstraction for loading behavior in files and streams.

.. _properties-23:

**Properties**


.. _section-84:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - type
     - string
     - R
     - The type of ``Resource`` object, which can be one of the following values:
       
       -  ``"image"``
       -  ``"model"``
       -  ``"flash"`` (Acrobat 9.0)
       -  ``"unknown"``

   * - TYPE_IMAGE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Resource`` type of ``"image"``.  

   * - TYPE_MODEL
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Resource`` type of ``"model"``.  

   * - TYPE_UNKNOWN
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the ``Resource`` type of ``"unknown"``.

   * - TYPE_FLASH
     - string
     - R
     - Acrobat 9.0
       
       A string constant for the Resource type of ``"flash"``.      


.. _resource-1:

Resource
--------

A constructor that creates a new ``Resource``.

.. _syntax-80:

**Syntax**


::

   new Resource(pathname)

.. _parameters-58:

**Parameters**


.. _section-85:


 

.. list-table::
   :header-rows: 0


   * - pathname
     - A string representing the path of the file or stream. Can load embedded resources only from within the PDF file. The pathname string must start with pdf://.


.. _returns-81:

**Returns**


A ``Resource`` object.

Runtime
=======

An object that represents the run-time instance of the player. Each ``Runtime`` object can have its own unique script engine and set of annotations. The variable ``runtime`` is a global reference to this object.

.. _properties-24:

**Properties**


.. _section-86:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - BUTTON_TYPE_PUSH
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the custom tool button type of push button. It is used with the ``addCustomToolButton`` method.

   * - BUTTON_TYPE_TOOL
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the custom button type of tool button. It is used with the ``addCustomToolButton`` method.

   * - canvasCount
     - number
     - R
     - Acrobat 8.1
       
       The number of Canvases that are attached to the active 3D annotation.

   * - ctrlKeyDown
     - Boolean
     - R
     - Determines whether the Ctrl key (Windows) or Command key (Mac OS) was pressed.

   * - eventHandlerCount
     - integer
     - R
     - The number of registered event handlers.

   * - instances
     - Array
     - R
     - Acrobat 7.0.7
       
       An array of JavaScript ``Annot3D`` objects that are attached to the 3D script context.

   * - MENU_ITEM_TYPE_CHECKED
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the custom menu item type of checked. It is used with the ``addCustomMenuItem`` method.

   * - MENU_ITEM_TYPE_DEFAULT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the custom menu item type of default. It is used with the ``addCustomMenuItem`` method.

   * - overrideFlyTool
     - Boolean
     - R/W
     - Acrobat 9.0
       
       Determines whether to override the built-in Fly tool behavior.

   * - overrideNavTools
     - Boolean
     - R/W
     - Determines whether to disable all default navigation behavior.
       
       -  Setting this property does not prevent view changes.

   * - overridePanTool
     - Boolean
     - R/W
     - Determines whether to override the built-in Pan tool behavior.
       
       -  Setting this property does not affect the pan behavior of other navigation tools.

   * - overrideRotateTool
     - Boolean
     - R/W
     - Determines whether to override the built-in Rotate tool behavior.

   * - overrideSelection
     - Boolean
     - R/W
     - Acrobat 7.0.7
       
       Determines whether to override the built-in Selection tool behavior.

   * - overrideSpinTool
     - Boolean
     - R/W
     - Acrobat 8.0
       
       Determines whether to override the built-in Spin tool behavior.

   * - overrideViewChange
     - Boolean
     - R/W
     - Determines whether to override the setting of Views from Acrobat.

   * - overrideWalkTool
     - Boolean
     - R/W
     - Determines whether to override the built-in Walk tool behavior.

   * - overrideScrollWheel
     - Boolean
     - R/W
     - Acrobat 8.1
       
       Determines whether to override the built-in scroll-wheel behavior.

   * - overrideZoomTool
     - Boolean
     - R/W
     - Determines whether to override the built-in Zoom tool behavior.
       
       -  Setting this property does not affect the zoom behavior of other navigation tools.

   * - scrollWheelSpeed
     - number
     - R/W
     - Acrobat 8.1
       
       A speed multiplier for the value of the scroll-wheel motion.

   * - shiftKeyDown
     - Boolean
     - R
     - Determines whether the Shift key was pressed.

   * - speedThreshold
     - number
     - R/W
     - Acrobat 8.1
       
       A length (based upon the diagonal of the scene's bounding box) under which the Walk tool's motion is scaled relative to the size of the model.
       
       The Walk tool's motion is constant based upon the scene's scale factor, such that it emulates a natural pace relative to the model's size. This works well for architectural models that are created with a defined scale. However, the walk motion is too quick for very small models.

   * - strafeSpeed
     - number
     - R/W
     - Acrobat 8.1
       
       A speed multiplier for the lateral motion while using the Walk tool.

   * - TOOL_NAME_FLY|
     - string  
     - R
       
       
         
     - Acrobat 9.0
       
       A string constant for the name of the fly tool. Its value is ``"Fly".``
                                                                                                                                                                                                                                                                                 

   * - TOOL_NAME_MEASURE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the name of the measure tool. Its value is ``"Measure"``.                                                                                                                                                                                           

   * - TOOL_NAME_PAN
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the name of the pan tool. Its value is "``Pan"``.                                                                                                                                                                                                   

   * - TOOL_NAME_ROTATE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the name of the rotate tool. Its value is ``"Rotate"``.                                                                                                                                                                                             

   * - TOOL_NAME_SPIN
     - string
     - R
     - Acrobat 8.0
       
       A string constant for the name of the Spin tool. Its value is ``"Spin"``.                                                                                                                                                                                                 

   * - TOOL_NAME_WALK
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the name of the walk tool. Its value is ``"Walk"``.                                                                                                                                                                                                 

   * - TOOL_NAME_ZOOM
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the name of the zoom tool. Its value is ``"Zoom"``.                                                                                                                                                                                                 

   * - version
     - number
     - R
     - The number corresponding to the version of the ``Runtime`` system.

   * - viewCount
     - integer
     - R
     - Acrobat 9.0
       
       The number of named views for the annotation.

   * - walkSpeed
     - number
     - R/W
     - Acrobat 8.1
       
       A speed multiplier for the forward/backward motion while using the Walk tool.


addCustomMenuItem
-----------------

Creates a custom menu item in the 3D annotation context menu.

.. _syntax-81:

**Syntax**


::

   addCustomMenuItem(name, label, type, checkedState)

.. _parameters-59:

**Parameters**


.. _section-87:


 

.. list-table::
   :header-rows: 0


   * - name
     - A string identifying the menu item.

   * - label
     - A string appearing on the menu item.

   * - type
     - A string indicating whether it is a checked menu item. A checked menu item has a check mark toggle next to it. Its possible values are:  -  ``"default"`` -  ``"checked"``

   * - checkedState
     - A Boolean value indicating the state of a checked menu item.


.. _returns-82:

**Returns**


undefined

addCustomToolButton
-------------------

Creates a custom tool button in the 3D toolbar.

.. _syntax-82:

**Syntax**


::

   addCustomToolButton(name, label, type)

.. _parameters-60:

**Parameters**


.. _section-88:


 

.. list-table::
   :header-rows: 0


   * - name
     - A string identifying the tool button.

   * - label
     - A string appearing on the tool button.

   * - type
     - A string indicating whether it is a tool button or a push button. Its possible values are:  -  ``"tool button"`` -  ``"push button"``


.. _returns-83:

**Returns**


undefined

addEventHandler
---------------

Registers the provided event handler.

.. _syntax-83:

**Syntax**


::

   addEventHandler(eventHandler)

.. _parameters-61:

**Parameters**


.. _section-89:


 

.. list-table::
   :header-rows: 0


   * - eventHandler
     - The event handler object to be registered.


.. _returns-84:

**Returns**


undefined

disableTool
-----------

Disables the tool with the specified ID.

.. _syntax-84:

**Syntax**


::

   disableTool(toolName)

.. _parameters-62:

**Parameters**


.. _section-90:


 

.. list-table::
   :header-rows: 0


   * - toolName
     - A string identifying the tool.


.. _returns-85:

**Returns**


undefined

enableTool
----------

Enables the tool with the specified ID.

.. _syntax-85:

**Syntax**


::

   enableTool(toolName)

.. _parameters-63:

**Parameters**


.. _section-91:


 

.. list-table::
   :header-rows: 0


   * - toolName
     - A string identifying the tool.


.. _returns-86:

**Returns**


undefined

getEventHandler
---------------

Obtains the event handler corresponding to the specified index.

.. _syntax-86:

**Syntax**


::

   getEventHandler(index)

.. _parameters-64:

**Parameters**


.. _section-92:


 

.. list-table::
   :header-rows: 0


   * - index
     - An integer identifying the event handler.


.. _returns-87:

**Returns**


An event handler object.

getRendererName
---------------

Obtains the name of the current renderer.

.. _syntax-87:

**Syntax**


::

   getRendererName()

.. _returns-88:

**Returns**


A string containing the current renderer's name.

getView
-------

Acrobat 9.0

Gets the indicated view for the annotation by its index.

See the related method, `setView <JS_3D_API.html#50552849_90335>`__, for setting the view by its index.

.. _syntax-88:

**Syntax**


::

   getView( index )

.. _parameters-65:

**Parameters**


.. _section-93:


 

.. list-table::
   :header-rows: 0


   * - index
     - The integer index of the view.


.. _returns-89:

**Returns**


View

.. _getview-1:

getView
-------

Acrobat 9.0

Gets the indicated view for the annotation by its name.

See the related method, `setView <JS_3D_API.html#50552849_66547>`__, for setting the view by its name.

.. _syntax-89:

**Syntax**


::

   getView( name )

.. _parameters-66:

**Parameters**


.. _section-94:


 

.. list-table::
   :header-rows: 0


   * - name
     - The string name of the view.


.. _returns-90:

**Returns**


View

pause
-----

Acrobat 9.0

Pauses the runtime. This is the same as selecting the Pause toolbar button or menu item.

.. _syntax-90:

**Syntax**


::

   pause()

.. _returns-91:

**Returns**


undefined

.. _play-1:

play
----

Acrobat 9.0

Resumes playback of the runtime. This is the same as selecting the Play toolbar button or menu item.

.. _syntax-91:

**Syntax**


::

   play()

.. _returns-92:

**Returns**


undefined

refresh
-------

Version 7.0.1

Marks the render area dirty so that it is redrawn. This is useful when something changes in the scene but the annotation is in a Loaded and not Live state.

.. _syntax-92:

**Syntax**


::

   refresh()

.. _returns-93:

**Returns**


undefined

removeEventHandler
------------------

Unregisters the specified event handler.

.. _syntax-93:

**Syntax**


::

   removeEventHandler(handler)

.. _parameters-67:

**Parameters**


.. _section-95:


 

.. list-table::
   :header-rows: 0


   * - handler
     - An event handler object representing the event handler.


.. _returns-94:

**Returns**


undefined

removeCustomMenuItem
--------------------

Removes the custom menu item with the specified ID.

.. _syntax-94:

**Syntax**


::

   removeCustomMenuItem(menuName)

.. _parameters-68:

**Parameters**


.. _section-96:


 

.. list-table::
   :header-rows: 0


   * - menuName
     - A string identifying the custom menu item.


.. _returns-95:

**Returns**


undefined

removeCustomToolButton
----------------------

Removes the custom tool button with the specified ID.

.. _syntax-95:

**Syntax**


::

   removeCustomToolButton(toolName)

.. _parameters-69:

**Parameters**


.. _section-97:


 

.. list-table::
   :header-rows: 0


   * - toolName
     - A string identifying the custom tool button.


.. _returns-96:

**Returns**


undefined

setCurrentTool
--------------

Sets the current tool to the one with the specified ID.

.. _syntax-96:

**Syntax**


::

   setCurrentTool(toolName)

.. _parameters-70:

**Parameters**


.. _section-98:


 

.. list-table::
   :header-rows: 0


   * - toolName
     - A string identifying the tool.


.. _returns-97:

**Returns**


undefined

setCustomMenuItemChecked
------------------------

Acrobat 7.0.7

Sets the checked state of the provided custom menu item.

.. _syntax-97:

**Syntax**


::

   setCustomMenuItemChecked( menuItemName, checkedState )

.. _parameters-71:

**Parameters**


.. _section-99:


 

.. list-table::
   :header-rows: 0


   * - menuItemName
     - A string identifying the name of the custom menu item.

   * - checkedState
     - A Boolean value determining whether the menu should be checked.


.. _returns-98:

**Returns**


undefined

.. _setview-1:

setView
-------

Acrobat 9.0.

Sets the current view for the annotation.

See the related method, `getView <JS_3D_API.html#50552849_27390>`__, for getting the view by its index.

.. _syntax-98:

**Syntax**


::

   setView( index, animate)

.. _parameters-72:

**Parameters**


.. _section-100:


 

.. list-table::
   :header-rows: 0


   * - index
     - The integer index of the view to be set .

   * - animate
     - (Optional) A Boolean value, when ``true`` , indicates that the view should be animated to when set.


.. _returns-99:

**Returns**


undefined

.. _setview-2:

setView
-------

Acrobat 9.0

Sets the current view for the annotation.

See the related method, `getView <JS_3D_API.html#50552849_46742>`__, for getting the view by its name.

.. _syntax-99:

**Syntax**


::

   setView( name, animate)

.. _parameters-73:

**Parameters**


.. _section-101:


 

.. list-table::
   :header-rows: 0


   * - menuItemName
     - The string name of the view to be set.

   * - checkedState
     - (Optional) A Boolean value, when ``true`` , indicates that the view should be animated to when set.


.. _returns-100:

**Returns**


undefined





Scene
=====

An object that represents the hierarchy of the 3D related content, including ``Animation`` , ``Light`` , ``Material`` , and ``Mesh`` objects. The variable ``scene`` is a global reference to this object.

Related objects are `Animation <JS_3D_API.html#50552849_65932>`__, `Light <JS_3D_API.html#50552849_50414>`__, `Material <JS_3D_API.html#50552849_19137>`__ and `Mesh <JS_3D_API.html#50552849_30519>`__.

.. _properties-25:

**Properties**


.. _section-102:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - ambientIlluminationColor
     - Color
     - R
     - Modulates the ambient ``Color`` of all materials.

   * - animations
     - SceneObjectList
     - R
     - A list of all ``Animation`` objects.

   * - cameras
     - SceneObjectList
     - R
     - A list of all ``Camera`` objects in the ``Scene``.                                                                        

   * - defaultRenderOptions
     - RenderOptions
     - R
     - A set of all default rendering options for the ``Scene``.                                                                 

   * - gridMode
     - string
     - R/W
     - Acrobat 7.0.7
       
       The display style of the grid that represents a portion of the ground plane in the ``Scene``. It can have one of the following values:
       
       -  ``"off"`` (no grid)
       -  ``"wire"`` (a wireframe grid)
       -  ``"solid"(`` a solid checkerboard grid)
       -  ``"transparent"`` (a semi-transparent checkerboard grid)

   * - GRID_MODE_OFF
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the grid mode of ``"off"``.                                                                         

   * - GRID_MODE_SOLID
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the grid mode of ``"solid"``.                                                                       

   * - GRID_MODE_TRANSPARENT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the grid mode of ``"transparent"``.                                                                 

   * - GRID_MODE_WIRE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the grid mode of ``"wire"``.                                                                        

   * - gridSize
     - number
     - R
     - Acrobat 7.0.7
       
       The number of squares on the ground plane grid.

   * - lengthUnits
     - number
     - R
     - The scale of a unit of length, specified in meters.

   * - LIGHT_MODE_FILE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"file"``.                                                                       

   * - LIGHT_MODE_NONE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"none"``.                                                                       

   * - LIGHT_MODE_WHITE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"white"``.                                                                      

   * - LIGHT_MODE_DAY
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"day"``.                                                                        

   * - LIGHT_MODE_BRIGHT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"bright"``.                                                                     

   * - LIGHT_MODE_RGB
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"rgb"``.                                                                        

   * - LIGHT_MODE_NIGHT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"night"``.                                                                      

   * - LIGHT_MODE_BLUE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"blue"``.                                                                       

   * - LIGHT_MODE_RED
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"red"``.                                                                        

   * - LIGHT_MODE_CUBE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"cube"``.                                                                       

   * - LIGHT_MODE_CAD
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"cad"``.                                                                        

   * - LIGHT_MODE_HEADLAMP
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the light mode of ``"headlamp"``.                                                                   

   * - lights
     - SceneObjectList
     - R
     - A list of all ``Light`` objects in the ``Scene``.                                                                         

   * - lightScaleFactor
     - number
     - R/W
     - A uniform scale factor for all ``Light`` objects in the ``Scene``.                                                        

   * - lightScheme
     - string
     - R/W
     - Acrobat 7.0.7
       
       The current, preconfigured lighting scheme for the ``Scene``.                                                             
       
       It can take one of the following values:
       
       -  ``"file"``
       -  ``"none"``
       -  ``"white"``
       -  ``"day"``
       -  ``"bright"``
       -  ``"rgb"``
       -  ``"night"``
       -  ``"blue"``
       -  ``"red"``
       -  ``"cube"``
       -  ``"cad"``
       -  ``"headlamp"``

   * - materials
     - SceneObjectList
     - R
     - A list of all ``Material`` objects.

   * - meshes
     - SceneObjectList
     - R
     - A list of all ``Mesh`` objects in the ``Scene``.                                                                          

   * - nodes
     - SceneObjectList
     - R
     - A list of all ``Node`` objects except the default ``Camera`` and default ``Light`` objects.

   * - outlineAngle
     - number
     - R/W
     - Acrobat 7.0.7
       
       The crease angle (in degrees) for the appearance of lines in Illustration render modes.

   * - showGrid
     - Boolean
     - R/W
     - Acrobat 7.0.7
       
       Determines whether the ground plane grid is displayed.

   * - renderDoubleSided
     - Boolean
     - R/W
     - Acrobat 8.1
       
       Toggles if backfacing polygons are rendered.

   * - renderMode
     - string
     - R/W
     - Acrobat 7.0.7
       
       The default rendering type for all objects in the ``Scene`` , which can be one of the following values:
       
       -  ``"default"``
       -  ``"bounding box"``
       -  ``"transparent bounding box"``
       -  ``"transparent bounding box outline"``
       -  ``"vertices"``
       -  ``"shaded vertices"``
       -  ``"wireframe"``
       -  ``"shaded wireframe"``
       -  ``"solid"``
       -  ``"transparent"``
       -  ``"solid wireframe"``
       -  ``"transparent wireframe"``
       -  ``"illustration"``
       -  ``"solid outline"``
       -  ``"shaded illustration"``
       -  ``"hidden wireframe"``

   * - RENDER_MODE_DEFAULT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"default"``.                                                                   

   * - RENDER_MODE_BOUNDING_BOX
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"bounding box"``.                                                              

   * - RENDER_MODE_TRANSPARENT_BOUNDING_BOX
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"transparent bounding box"``.                                                  

   * - RENDER_MODE_TRANSPARENT_BOUNDING_BOX_OUTLINE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"transparent bounding box outline"``.                                          

   * - RENDER_MODE_VERTICES
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"vertices"``.                                                                  

   * - RENDER_MODE_SHADED_VERTICES
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"shaded vertices"``.                                                           

   * - RENDER_MODE_WIREFRAME
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"wireframe"``.                                                                 

   * - RENDER_MODE_SHADED_WIREFRAME
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"shaded wireframe"``.                                                          

   * - RENDER_MODE_SOLID
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"solid"``.                                                                     

   * - RENDER_MODE_TRANSPARENT
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"transparent"``.                                                               

   * - RENDER_MODE_SOLID_WIREFRAME
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"solid wireframe"``.                                                           

   * - RENDER_MODE_TRANSPARENT_WIREFRAME
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"transparent wireframe"``.                                                     

   * - RENDER_MODE_ILLUSTRATION
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"illustration"``.                                                              

   * - RENDER_MODE_SOLID_OUTLINE
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"solid outline"``.                                                             

   * - RENDER_MODE_SHADED_ILLUSTRATION
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"shaded illustration"``.                                                       

   * - RENDER_MODE_HIDDEN_WIREFRAME
     - string
     - R
     - Acrobat 7.0.7
       
       A string constant for the render mode of ``"hidden wireframe"``.                                                          

   * - selectedNode
     - Node
     - R/W
     - Acrobat 8.1
       
       The currently selected Node.

   * - showAxes
     - Boolean
     - R/W
     - Acrobat 7.0.7
       
       Determines whether the world axes are displayed.

   * - showOrientationAxes
     - Boolean
     - R/W
     - Acrobat 9.0
       
       Determines whether the orientation axes are displayed.

   * - smoothing
     - Boolean
     - R/W
     - Acrobat 7.0.7
       
       When ``true`` , smoothing is enabled for meshes in the scene.

   * - smoothingAngle
     - number
     - R/W
     - Acrobat 7.0.7
       
       The default smoothing angle (in degrees) for meshes in the scene.

   * - smoothingOverride
     - Boolean
     - R/W
     - Acrobat 7.0.7
       
       When set to ``true`` , overrides the smoothing values from the loaded model file.


activateAnimation
-----------------

Sets the given ``Animation`` to be active on its ``Node`` objects.

.. _syntax-100:

**Syntax**


::

   activateAnimation(animation)

.. _parameters-74:

**Parameters**


.. _section-103:


 

.. list-table::
   :header-rows: 0


   * - animation
     - The ``Animation`` object to be activated.


.. _returns-101:

**Returns**


undefined

addFlashForeground
------------------

Acrobat 9.0

Adds the provided ``FlashMovie`` as a foreground element within the 3D scene.

.. _syntax-101:

**Syntax**


::

   addFlashForeground(movie)

.. _parameters-75:

**Parameters**


.. _section-104:


 

.. list-table::
   :header-rows: 0


   * - movie
     - The ``FlashMovie`` to be added as a foreground element.


.. _returns-102:

**Returns**


undefined

addModel
--------

Adds a model ``Resource`` to the top level of the ``Scene``.

.. _syntax-102:

**Syntax**


::

   addModel(modelRes)

.. _parameters-76:

**Parameters**


.. _section-105:


 

.. list-table::
   :header-rows: 0


   * - modelRes
     - The ``Resource`` object to be added.


.. _returns-103:

**Returns**


A ``Node`` object representing the top-level ``Mesh`` of the loaded model.

createClippingPlane
-------------------

Creates a new clipping plane.

.. _syntax-103:

**Syntax**


::

   createClippingPlane()

.. _returns-104:

**Returns**


A ``ClippingPlane`` object.

createLight
-----------

Creates a new ``Light`` and attaches it to the ``Scene.``

.. _syntax-104:

**Syntax**


::

   createLight()

.. _returns-105:

**Returns**


A ``Light`` object.

createSquareMesh
----------------

Creates a ``Mesh`` that is a unit square. The default UV parameterization fits once in U and V.

.. _syntax-105:

**Syntax**


::

   createSquareMesh(sizeX, sizeY, name)

.. _parameters-77:

**Parameters**


.. _section-106:


 

.. list-table::
   :header-rows: 0


   * - sizeX
     - Model units in the x direction used to size the ``Mesh``.

   * - sizeY
     - Model units in the y direction used to size the ``Mesh``.

   * - name
     - (Optional) The name that is assigned to the ``Mesh``.    


.. _returns-106:

**Returns**


A ``Mesh`` object.

.. _computeboundingbox-1:

computeBoundingBox
------------------

Computes the ``BoundingBox`` of the ``Scene.``

.. _syntax-106:

**Syntax**


::

   computeBoundingBox()

.. _returns-107:

**Returns**


A ``BoundingBox`` object.

update
------

Applies all changes to the ``Scene``.

.. _syntax-107:

**Syntax**


::

   update()

.. _returns-108:

**Returns**


undefined

SceneObject
===========

The base type for objects within the ``Scene`` , including ``Animation`` , ``Material`` , and ``Node`` objects.

Related objects are `Scene <JS_3D_API.html#50552849_53181>`__, `Animation <JS_3D_API.html#50552849_65932>`__, `Light <JS_3D_API.html#50552849_50414>`__, `Material <JS_3D_API.html#50552849_19137>`__, and `Mesh <JS_3D_API.html#50552849_30519>`__.

.. _properties-26:

**Properties**


.. _section-107:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - name
     - string
     - The name of the ``SceneObject`` object.

   * - objectGUID
     - string
     - Deprecated
       
       A value that uniquely identifies the ``SceneObject`` in custom data. This property has a default value.

   * - objectID
     - integer
     - An unsigned 32-bit value that uniquely identifies the ``SceneObject``. This property can be assigned, but it does not have a default value. It always returns ``0``.


SceneObjectList
===============

A structure that contains references to several ``SceneObject`` objects.

.. _properties-27:

**Properties**


.. _section-108:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - count
     - integer
     - R
     - The number of elements in the ``SceneObjectList``.


getByGUID
---------

Deprecated

Obtains the specified ``SceneObject`` object from the list.

.. _syntax-108:

**Syntax**


::

   getByGUID(guid)

.. _parameters-78:

**Parameters**


.. _section-109:


 

.. list-table::
   :header-rows: 0


   * - guid
     - A string representing the GUID for the specified element.


.. _returns-109:

**Returns**


A ``SceneObject`` object.

getByID
-------

Obtains the specified ``SceneObject`` object from the list

.. _syntax-109:

**Syntax**


::

   getByID(id)

.. _parameters-79:

**Parameters**


.. _section-110:


 

.. list-table::
   :header-rows: 0


   * - id
     - An integer representing the object identifier for the specified ``SceneObject`` object.


.. _returns-110:

**Returns**


A ``SceneObject`` object.

getByIndex
----------

Obtains the specified ``SceneObject`` object from the list.

.. _syntax-110:

**Syntax**


::

   getByIndex(index)

.. _parameters-80:

**Parameters**


.. _section-111:


 

.. list-table::
   :header-rows: 0


   * - index
     - An integer representing the index of the specified ``SceneObject`` object.


.. _returns-111:

**Returns**


A ``SceneObject`` object.

getByName
---------

Obtains the specified ``SceneObject`` object from the list.

.. _syntax-111:

**Syntax**


::

   getByName(name)

.. _parameters-81:

**Parameters**


.. _section-112:


 

.. list-table::
   :header-rows: 0


   * - name
     - A string representing the name of the specified ``SceneObject`` object.


.. _returns-112:

**Returns**


A ``SceneObject`` object.

removeAll
---------

Deprecated

Removes all the ``SceneObject`` objects from the list, but does not delete them from the ``Scene``.

.. _syntax-112:

**Syntax**


::

   removeAll()

.. _returns-113:

**Returns**


undefined

removeByIndex
-------------

Deprecated

Removes the specified ``SceneObject`` object from the list, but does not delete it from the ``Scene``.

.. _syntax-113:

**Syntax**


::

   removeByIndex(index)

.. _parameters-82:

**Parameters**


.. _section-113:


 

.. list-table::
   :header-rows: 0


   * - index
     - An index to the specified element.


.. _returns-114:

**Returns**


undefined

removeItem
----------

Deprecated

Removes a ``SceneObject`` object from the list, but does not delete it from the ``Scene``.

.. _syntax-114:

**Syntax**


::

   removeItem(scene)

.. _parameters-83:

**Parameters**


.. _section-114:


 

.. list-table::
   :header-rows: 0


   * - scene
     - A scene object that is to be removed.


.. _returns-115:

**Returns**


undefined

ScrollWheelEvent
================

(Acrobat 8.1) An object that is passed as an argument to the ``onEvent`` method of the `ScrollWheelEventHandler <JS_3D_API.html#50552849_17926>`__ object. A ``ScrollWheelEvent`` object is created when the mouse scroll wheel is activated over an active 3D ``Canvas`` object.

.. _properties-28:

**Properties**


.. _section-115:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` in which the ``ScrollWheelEvent`` took place.

   * - canvasPixelHeight
     - integer
     - R
     - The height, measured in pixels, of the ``Canvas`` in which the ``ScrollWheelEvent`` took place.

   * - canvasPixelWidth
     - integer
     - R
     - The width, measured in pixels, of the ``Canvas`` in which the ``ScrollWheelEvent`` took place.

   * - ctrlKeyDown
     - Boolean
     - R
     - Determines whether the Ctrl key (Windows) or Command key (Mac OS) was pressed.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - deltaY
     - number
     - R
     - The amount the scroll wheel was moved in the Y direction.

   * - shiftKeyDown
     - Boolean
     - R
     - Determines whether the Shift key was pressed.


ScrollWheelEventHandler
=======================

(Acrobat 8.1) An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the ``Runtime`` method `addEventHandler <JS_3D_API.html#50552849_22923>`__.

.. _scrollwheeleventhandler-1:

ScrollWheelEventHandler
-----------------------

A constructor that creates a new ``ScrollWheelEventHandler``.

.. _syntax-115:

**Syntax**


::

   new ScrollWheelEventHandler()

.. _returns-116:

**Returns**


A ``ScrollWheelEventHandler`` object.

.. _onevent-6:

onEvent
-------

A method that is called when the scroll wheel is used in an active 3D annotation.

.. _syntax-116:

**Syntax**


::

   onEvent(event)

.. _parameters-84:

**Parameters**


.. _section-116:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``ScrollWheelEvent`` object representing the event.


.. _returns-117:

**Returns**


undefined

SelectionEvent
==============

(Acrobat 8.1) An object that is passed as an argument to the ``onEvent`` method of the `SelectionEventHandler <JS_3D_API.html#50552849_72461>`__ object.

A ``SelectionEvent`` object is created when an object is selected from an active 3D ``Canvas`` object or from a model tree. If the selection is made from a ``Canvas`` object, a ``MouseEvent`` is also created.

.. _properties-29:

**Properties**


.. _section-117:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - node
     - Node
     - R
     - The Node that is the target of the selection change.

   * - selected
     - Boolean
     - R
     - The selected state of the target Node.


SelectionEventHandler
=====================

(Acrobat 8.1) An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the ``Runtime`` method ``addEventHandler``.

.. _selectioneventhandler-1:

SelectionEventHandler
---------------------

A constructor that creates a new ``SelectionEventHandler`` object.

.. _syntax-117:

**Syntax**


::

   new SelectionEventHandler()

.. _returns-118:

**Returns**


A ``SelectionEventHandler`` object.

.. _onevent-7:

onEvent
-------

A method that is called when the selection state changes in an active 3D annotation.

.. _syntax-118:

**Syntax**


::

   onEvent(event)

.. _parameters-85:

**Parameters**


.. _section-118:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``ScrollWheelEvent`` object representing the event.


.. _returns-119:

**Returns**


undefined

StateEvent
==========

Acrobat 9.0

An object that is passed as an argument to the ``onEvent`` method of the ``StateEventHandler`` object. A ``StateEvent`` object is created when state data must be stored or loaded for the scene, such as when a new comment view is created or invoked for the annotation.

.. _properties-30:

**Properties**


.. _section-119:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - stateString
     - string
     - R
     - If the ``SaveEvent`` ``type`` is ``"load"`` , this property contains the state data that was stored as part of the corresponding ``"save"`` ``StateEvent``. If the ``SaveEvent`` ``type`` is ``"save"`` , the ``stateString`` is undefined.

   * - type
     - string
     - R
     - The type of ``StateEvent`` , this property has a value of either ``"load"`` or ``"save"``.                                                                                                                                     

   * - TYPE_LOAD
     - string
     - R
     - A string constant for the ``StateEvent`` type of ``"load"``.                                                                                                                                                                   
       
       The state data that was stored as part of the original ``stateEvent``.                                                                                                                                                         

   * - TYPE_SAVE
     - string
     - R
     - A string constant for the ``StateEvent`` type of ``"save"``.                                                                                                                                                                   


StateEventHandler
=================

Acrobat 9.0

An object that exposes a callback mechanism that allows a function to be evaluated when a state event occurs. Event handlers are registered with the ``Runtime`` method ``addEventHandler``.

.. _onevent-8:

onEvent
-------

A method that is called when state data must be stored or loaded for the annotation. The return value is stored as the ``stateString`` for the given ``StateEvent``.

.. _syntax-119:

**Syntax**

::

   onEvent(event)

.. _parameters-86:

**Parameters**


.. _section-120:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``StateEvent`` object representing the event.


.. _returns-120:

**Returns**


string or undefined

.. _stateeventhandler-1:

StateEventHandler
-----------------

The constructor that creates a new ``StateEventHandler``.

.. _syntax-120:

**Syntax**

::

   new StateEventHandler()

.. _returns-121:

**Returns**


::

   A StateEventHandler
    object.


Texture
=======

A ``Texture`` object represents the mapping of a texture. All ``Texture`` properties have read-write permissions.

.. _properties-31:

**Properties**


.. _section-121:


 

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - amount
     - number
     - The degree to which the ``Texture`` is applied, which can be a value from ``0.0`` to ``1.0``.

   * - angle
     - number
     - The rotation angle, measured in degrees, of the map.

   * - clampU
     - Boolean
     - Determines whether the map should be clamped in the U direction.

   * - clampV
     - Boolean
     - Determines whether the map should be clamped in the V direction.

   * - image
     - Image
     - Acrobat 7.0.7
       
       The ``Image`` to be used by the ``Texture``.                                     

   * - modulate
     - Boolean
     - Determines whether to set the blend mode of the ``Texture`` with its corresponding color.

   * - uOffset
     - number
     - The U-offset of the given map.

   * - uScale
     - number
     - The U-scale of the given map.

   * - use3DSStyleMapping
     - Boolean
     - Determines whether to use 3D Studio style map parameterizations.

   * - vOffset
     - number
     - The V-offset of the given map.

   * - vScale
     - number
     - The V-scale of the given map.


.. _getimage-1:

getImage
--------

Deprecated

Gets the ``Image`` currently used by the ``Texture``.

.. _syntax-121:

**Syntax**


::

   getImage()

.. _returns-122:

**Returns**


The Image currently being used.

.. _setimage-1:

setImage
--------

Deprecated

Sets the ``Image`` to be used by the ``Texture``.

.. _syntax-122:

**Syntax**


::

   setImage(image)

.. _parameters-87:

**Parameters**


.. _section-122:


 

.. list-table::
   :header-rows: 0


   * - image
     - The ``Image`` to be used.


.. _returns-123:

**Returns**


undefined

TimeEvent
=========

An object that is passed as an argument to the ``TimeEventHandler`` object's ``onEvent`` method.

.. _properties-32:

**Properties**


.. _section-123:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - deltaTime
     - number
     - R
     - The difference between the current time and the last time.

   * - time
     - number
     - R
     - The current time.


TimeEventHandler
================

An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the ``Runtime`` ``addEventHandler`` method.

.. _timeeventhandler-1:

TimeEventHandler
----------------

A constructor that creates a new ``TimeEventHandler`` object.

.. _syntax-123:

**Syntax**


::

   new TimeEventHandler()

.. _returns-124:

**Returns**


A ``TimeEventHandler`` object.

.. _onevent-9:

onEvent
-------

A method that is called when simulation time is incremented in an active 3D annotation.

.. _syntax-124:

**Syntax**


::

   onEvent(event)

.. _parameters-88:

**Parameters**


.. _section-124:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``TimeEvent`` object representing the event.


.. _returns-125:

**Returns**


undefined

ToolEvent
=========

An object that is passed as an argument to the ``onEvent`` method of the `ToolEventHandler <JS_3D_API.html#50552849_36913>`__ object.

.. _properties-33:

**Properties**


.. _section-125:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - canvas
     - Canvas
     - R
     - The ``Canvas`` that is the target of the ``ToolEvent``.                      

   * - canvasPixelHeight
     - integer
     - R
     - The height, measured in pixels, of the ``Canvas`` for which the ``ToolEvent`` is intended.

   * - canvasPixelWidth
     - integer
     - R
     - The width, measured in pixels, of the ``Canvas`` for which the ``ToolEvent`` is intended.

   * - currentTool
     - string
     - R
     - The name of the current tool.

   * - toolName
     - string
     - R
     - The name of the tool that was clicked.


ToolEventHandler
================

An object that exposes a callback mechanism that allows a function to be evaluated when an event occurs. Event handlers are registered with the ``Runtime`` `addEventHandler <JS_3D_API.html#50552849_22923>`__ method.

.. _tooleventhandler-1:

ToolEventHandler
----------------

A constructor that creates a new ``ToolEventHandler`` object.

.. _syntax-125:

**Syntax**


::

   new ToolEventHandler()

.. _returns-126:

**Returns**


A ``ToolEventHandler`` object.

.. _onevent-10:

onEvent
-------

A method that is called when a tool button is pressed on the 3D toolbar.

.. _syntax-126:

**Syntax**


::

   onEvent(event)

.. _parameters-89:

**Parameters**


.. _section-126:


 

.. list-table::
   :header-rows: 0


   * - event
     - A ``ToolEvent`` object representing the event.


.. _returns-127:

**Returns**


undefined

Vector3
=======

An object comprised of three values that represent a point in space or a direction and magnitude.

.. _properties-34:

**Properties**


.. _section-127:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - x
     - number
     - R/W
     - The x component of the ``Vector3`` object.

   * - y
     - number
     - R/W
     - The y component of the ``Vector3`` object.

   * - z
     - number
     - R/W
     - The z component of the ``Vector3`` object.

   * - length
     - number
     - R
     - The length of the ``Vector3`` object.


.. _vector3-1:

Vector3
-------

A constructor that initializes the new object to ``(0.0, 0.0, 0.0)``.

.. _syntax-127:

**Syntax**


::

   new Vector3()

.. _returns-128:

**Returns**


A ``Vector3`` object.

.. _vector3-2:

Vector3
-------

A constructor that initializes the new object to the specified components.

.. _syntax-128:

**Syntax**


::

   new Vector3(x, y, z)

.. _parameters-90:

**Parameters**


.. _section-128:


 

.. list-table::
   :header-rows: 0


   * - x
     - The x component used to initialize the new object.

   * - y
     - The y component used to initialize the new object.

   * - z
     - The z component used to initialize the new object.


.. _returns-129:

**Returns**


A ``Vector3`` object.

add
---

Adds the specified ``Vector3`` to the current one.

.. _syntax-129:

**Syntax**


::

   add(offset)

.. _parameters-91:

**Parameters**


.. _section-129:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be added to the current one.


.. _returns-130:

**Returns**


A ``Vector3`` object.

addInPlace
----------

Adds the specified ``Vector3`` to the current one, and updates the current ``Vector3`` with the resulting value.

.. _syntax-130:

**Syntax**


::

   addInPlace(offset)

.. _parameters-92:

**Parameters**


.. _section-130:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be added to the current one.


.. _returns-131:

**Returns**


undefined

addScaled
---------

Adds the specified ``Vector3`` with the scaled offset to the current one.

.. _syntax-131:

**Syntax**


::

   addScaled(offset, scale)

.. _parameters-93:

**Parameters**


.. _section-131:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be added to the current one.

   * - scale
     - The scaling factor for the ``offset``.   


.. _returns-132:

**Returns**


A ``Vector3`` object.

addScaledInPlace
----------------

Adds the specified ``Vector3`` with the scaled offset to the current one, and updates the current ``Vector3`` with the resulting value.

.. _syntax-132:

**Syntax**


::

   addScaledInPlace(offset, scale)

.. _parameters-94:

**Parameters**


.. _section-132:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be added to the current one.

   * - scale
     - The scaling factor for the ``offset``.   


.. _returns-133:

**Returns**


undefined

blend
-----

Blends the current and specified ``Vector3`` by the specified degree.

.. _syntax-133:

**Syntax**


::

   blend(vec, blendFactor)

.. _parameters-95:

**Parameters**


.. _section-133:


 

.. list-table::
   :header-rows: 0


   * - vec
     - The ``Vector3`` object to be blended with the current one.

   * - blendFactor
     - The degree of blending to be applied, which can be a value from ``0.0`` to ``1.0``.


.. _returns-134:

**Returns**


A ``Vector3`` object.

blendInPlace
------------

Blends the current and specified ``Vector3`` by the specified degree, and updates the current ``Vector3`` with the resulting value.

.. _syntax-134:

**Syntax**


::

   blendInPlace(vec, blendFactor)

.. _parameters-96:

**Parameters**


.. _section-134:


 

.. list-table::
   :header-rows: 0


   * - vec
     - The ``Vector3`` object to be blended with the current one.

   * - blendFactor
     - The degree of blending to be applied, which can be a value from ``0.0`` to ``1.0.``


.. _returns-135:

**Returns**


undefined

cross
-----

Calculates the cross product between the specified ``Vector3`` and the current one.

.. _syntax-135:

**Syntax**


::

   cross(vec)

.. _parameters-97:

**Parameters**


.. _section-135:


 

.. list-table::
   :header-rows: 0


   * - vec
     - The ``Vector3`` object to be used in calculating the cross product.


.. _returns-136:

**Returns**


A ``Vector3`` object.

dot
---

Calculates the dot product between the specified ``Vector3`` and the current one.

.. _syntax-136:

**Syntax**


::

   dot(vec)

.. _parameters-98:

**Parameters**


.. _section-136:


 

.. list-table::
   :header-rows: 0


   * - vec
     - The ``Vector3`` object to be used in calculating the dot product.


.. _returns-137:

**Returns**


A number value representing the scalar dot product.

.. _normalize-1:

normalize
---------

Normalizes the current ``Vector3``.

.. _syntax-137:

**Syntax**


::

   normalize()

.. _returns-138:

**Returns**


undefined

.. _scale-1:

scale
-----

Scales the current ``Vector3``.

.. _syntax-138:

**Syntax**


::

   scale(scale)

.. _parameters-99:

**Parameters**


.. _section-137:


 

.. list-table::
   :header-rows: 0


   * - scale
     - A number value used to scale the current ``Vector3``.


.. _returns-139:

**Returns**


A ``Vector3`` object.

.. _scaleinplace-1:

scaleInPlace
------------

Scales the current ``Vector3`` , and updates the current ``Vector3`` with the resulting value.

.. _syntax-139:

**Syntax**


::

   scaleInPlace(scale)

.. _parameters-100:

**Parameters**


.. _section-138:


 

.. list-table::
   :header-rows: 0


   * - scale
     - A number value used to scale the current ``Vector3``.


.. _returns-140:

**Returns**


undefined

.. _set-5:

set
---

Sets the current ``Vector3`` to the value contained in the specified ``Vector3``.

.. _syntax-140:

**Syntax**


::

   set(vec)

.. _parameters-101:

**Parameters**


.. _section-139:


 

.. list-table::
   :header-rows: 0


   * - vec
     - The Vector3 used to set the current ``Vector3``.


.. _returns-141:

**Returns**


undefined

.. _set-6:

set
---

Acrobat 7.0.7

Sets the current ``Vector3`` to the values contained in the specified components.

.. _syntax-141:

**Syntax**


::

   set(x, y, z)

.. _parameters-102:

**Parameters**


.. _section-140:


 

.. list-table::
   :header-rows: 0


   * - x
     - The x component used to set the current ``Vector3``.

   * - y
     - The y component used to set the current ``Vector3``.

   * - z
     - The z component used to set the current ``Vector3``.


.. _returns-142:

**Returns**


undefined

.. _set3-1:

set3
----

Deprecated

Sets the current ``Vector3`` to the values contained in the specified components.

.. _syntax-142:

**Syntax**


::

   set3(x, y, z)

.. _parameters-103:

**Parameters**


.. _section-141:


 

.. list-table::
   :header-rows: 0


   * - x
     - The x component used to set the current ``Vector3``.

   * - y
     - The y component used to set the current ``Vector3``.

   * - z
     - The z component used to set the current ``Vector3``.


.. _returns-143:

**Returns**


undefined

subtract
--------

Subtracts the specified ``Vector3`` from the current one.

.. _syntax-143:

**Syntax**


::

   subtract(offset)

.. _parameters-104:

**Parameters**


.. _section-142:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be subtracted from the current one.


.. _returns-144:

**Returns**


A ``Vector3`` object.

subtractInPlace
---------------

Subtracts the specified ``Vector3`` from the current one, and updates the current ``Vector3`` with the resulting value.

.. _syntax-144:

**Syntax**


::

   subtractInPlace(offset)

.. _parameters-105:

**Parameters**


.. _section-143:


 

.. list-table::
   :header-rows: 0


   * - offset
     - The ``Vector3`` object to be subtracted from the current one.


.. _returns-145:

**Returns**


undefined

View
====

Acrobat 9.0

An object that represents a named view for the annotation.

See the ``viewCount`` property and the `getView <JS_3D_API.html#50552849_27390>`__ and `setView <JS_3D_API.html#50552849_90335>`__ methods of the `Runtime <JS_3D_API.html#50552849_89312>`__ object.

.. _properties-35:

**Properties**


.. _section-144:


 

.. list-table::
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description

   * - name
     - string
     - R
     - The name of the view.

