******************************************************
Media and Marker APIs
******************************************************

Marker
======

A Marker object represents a named location in a media clip that identifies a particular time or frame number, similar to a track on an audio CD or a chapter on a DVD. Markers are defined by the media clip itself.

A Marker object can be obtained from the ``Markers.get`` method.

Marker properties
-----------------

* `frame <JS_API_AcroJS.html#42227>`__
* `index <JS_API_AcroJS.html#90667>`__
* `name <JS_API_AcroJS.html#81053>`__
* `time <JS_API_AcroJS.html#55620>`__

.. raw:: html

   <a name="42227"></a>

frame
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R

A frame number, where 0 represents the beginning of media. For most players, markers have either a frame or a time value, but not both.

.. raw:: html

   <a name="90667"></a>

.. _index-1:

index
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R

An index number assigned to this marker. Markers have sequential index numbers beginning with 0, but the numbers may not be in the same order that the markers appear in the media.

.. raw:: html

   <a name="81053"></a>

.. _name-16:

name
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - String
     - R

The name of this marker. Each marker in a media clip has a unique name.

Example: Get a marker by its index, then print the name of the marker to the console.

::

      // Assume player is a MediaPlayer object
      var markers = player.markers;
      // Get marker with index of 2
      var markers = g.get( { index: 2 } );
      console.println( "The marker with index of " + markers.index 
          +", has a name of " + index.name );

.. raw:: html

   <a name="55620"></a>

time
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R

A time in seconds, where 0 represents the beginning of media. For most players, markers have either a frame or a time value, but not both.

Example: Get a named marker, then print the time in seconds from the beginning of the media, of that marker.

::

      // Assume player is a MediaPlayer object
      var g = player.markers;
      // Get marker with name of "Chapter 1"
      var markers = g.get( { name: "Chapter 1" } );
      console.println( "The named marker "Chapter 1", occurs at time " 
          + markers.time);

.. raw:: html

   <a name="46714"></a>

Markers
=======

The ``markers`` property of a MediaPlayer is a Markers object that represents all of the markers found in the media clip currently loaded into the player. A marker is a named location in a media clip that identifies a particular time or frame number, similar to a track on an audio CD or a chapter on a DVD. Markers are defined by the media clip.

The constructor is ``app.media.Markers``.

Markers properties
------------------

* `player <JS_API_AcroJS.html#49163>`__

.. raw:: html

   <a name="49163"></a>

player
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``MediaPlayer`` object
     - R

The ``MediaPlayer`` object that this Markers object belongs to.

Markers methods
---------------

* `get <JS_API_AcroJS.html#15049>`__

.. raw:: html

   <a name="15049"></a>

get
~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Looks up a marker by name, index number, time in seconds, or frame number and returns the ``Marker`` object representing the requested marker. The object parameter should contain either a name, index, time, or frame property. A marker name can also be passed in directly as a string.

If a time or frame is passed in, the nearest marker at or before that time or frame is returned. If the time or frame is before any markers in the media, null is returned.

**Parameters**

An object or string representing the name, index number, time in seconds, or the frame number of the marker. The object parameter should contain either a name, index, time, or frame property. A marker name can also be passed in directly as a string.



**Returns** 

``Marker`` object or ``null``

Marker index numbers are assigned sequentially starting with 0. They are not necessarily in order by time or frame. In particular, note that these are not the same values that Windows Media Player uses for marker numbers. To find all of the available markers in a media clip, call ``MediaPlayer.markers.get`` in a loop starting with ``{index: 0}`` and incrementing the number until ``get`` returns ``null``.

Example 1: Count the number of markers on the media clip.

::

      var index, i =  0;
      // assume player is a MediaPlayer object.
      var m = player.markers;
      while ( (index = m.get( { index: i } ) ) != null ) i++;
      console.println("There are " + i + " markers.");

Example 2: Get markers by name, index, time and frame.

::

      // Get a marker by name, two different ways
      var marker = player.markers.get( "My Marker" );
      var marker = player.markers.get({ name: "My Marker" });
      // Get a marker by index
      var marker = player.markers.get({ index: 1 });
      // Get a marker by time
      var marker = player.markers.get({ time: 17.5 });
      // Get a marker by frame
      var marker = player.markers.get({ frame: 43 });

.. raw:: html

   <a name="40623"></a>

MediaOffset
===========

A MediaOffset represents a position in a MediaClip, specified by time or frame count. The position can be absolute (that is, relative to the beginning of the media) or relative to a named marker.

The MediaOffset object can have the properties specified below, or it can simply be a number, which is interpreted as ``{time: number}``.

Some media formats (such as QuickTime) are time-based and others (such as Flash) are frame-based. A MediaOffset that specifies a time or frame must match the media format in use. If both time and frame are specified, the results are undefined. The incorrect one may be ignored, or a JavaScript exception may be thrown.

The MediaOffset object is used by ``MediaPlayer.`` *seek*, ``MediaPlayer.`` *where*, ``MediaSettings.`` *endAt*, and ``MediaSettings.`` *startAt* .

MediaOffset properties
----------------------

* `frame <JS_API_AcroJS.html#85689>`__
* `marker <JS_API_AcroJS.html#36461>`__
* `time <JS_API_AcroJS.html#66128>`__

.. raw:: html

   <a name="85689"></a>

.. _frame-1:

frame
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

A frame number. If the ``marker`` property is also present, this frame number is relative to the specified marker and may be positive, negative, or zero. Otherwise, it is relative to the beginning of media and may not be negative. Note that ``{frame: 0}`` represents the beginning of media.

.. raw:: html

   <a name="36461"></a>

.. _marker-1:

marker
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - String
     - R/W

The name of a specific marker in the media.

.. raw:: html

   <a name="66128"></a>

.. _time-1:

time
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

A time in seconds, or ``Infinity``. If the ``marker`` property is also present, this time is relative to the specified marker and is a nonnegative value, but not ``Infinity``. Otherwise, the time is relative to the beginning of media and must not be negative. Note that the offset { time: 0 } represents the beginning of media.

Example: These are examples of absolute and relative offsets.

::

      { time: 5.4 } // offset 5.4 seconds from the beginning of media
      { marker: "Chapter 1", time: 17 } // 17 seconds after "Chapter 1"

These offsets can be used by the ``MediaPlayer.`` *seek* method.

::

      // assume player is a MediaPlayer object
      player.seek({ time: 5.4 }); 
      player.seek({ marker: "Chapter 1", time: 17 }); 

.. raw:: html

   <a name="47696"></a>

MediaPlayer
===========

A MediaPlayer object represents an instance of a multimedia player such as QuickTime, Windows Media Player, or others. Its ``settings`` and ``events`` properties let you manipulate the player from JavaScript code and handle events that the player triggers. MediaPlayer is not part of a PDF file; it is a transient object created in memory when needed.

MediaPlayer properties
----------------------

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - `annot <JS_API_AcroJS.html#17383>`__
     - `id <JS_API_AcroJS.html#94578>`__
     - `outerRect <JS_API_AcroJS.html#58125>`__

   * - `defaultSize <JS_API_AcroJS.html#71321>`__
     - `innerRect <JS_API_AcroJS.html#49000>`__
     - `page <JS_API_AcroJS.html#48828>`__

   * - `doc <JS_API_AcroJS.html#51225>`__
     - `isOpen <JS_API_AcroJS.html#49436>`__
     - `settings <JS_API_AcroJS.html#31898>`__

   * - `events <JS_API_AcroJS.html#12391>`__
     - `isPlaying <JS_API_AcroJS.html#91927>`__
     - `uiSize <JS_API_AcroJS.html#51769>`__

   * - `hasFocus <JS_API_AcroJS.html#77116>`__
     - `markers <JS_API_AcroJS.html#54328>`__
     - `visible <JS_API_AcroJS.html#96180>`__

.. raw:: html

   <a name="17383"></a>

annot
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``ScreenAnnot`` object
     - R/W

A reference to the screen annotation associated with a MediaPlayer. This property exists only for a MediaPlayer object that is connected to a screen annotation. The property is set by ``app.media.`` *addStockEvents* or by methods that call ``addStockEvents`` indirectly, such as ``app.media.`` *openPlayer* .

.. raw:: html

   <a name="71321"></a>

defaultSize
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Object
     - R

A read-only object containing the width and height of the MediaPlayer's MediaClip:

::

      { width: number, height: number }

If the media player is unable to provide this value, it is ``undefined``.

.. raw:: html

   <a name="51225"></a>

.. _doc-4:

doc
~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Object
     - R

A reference to the Doc that owns the MediaPlayer.

.. raw:: html

   <a name="12391"></a>

.. _events-7:

events
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``Events`` object
     - R/W

An ``Events`` object containing the EventListeners that are attached to a MediaPlayer. See `Events <JS_API_AcroJS.html#36164>`__ object for details.

Example: Create a media player, then modify the events of that player. The script is executed as a Rendition action with an associated rendition.

::

      var events = new app.media.Events;
      var player = app.media.createPlayer();
      player.events.add({
          onReady: function() { console.println("The player is ready"); }
      });
      player.open();

.. raw:: html

   <a name="77116"></a>

hasFocus
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R

A Boolean value that is ``true`` if the media player is open and has the keyboard focus.

.. raw:: html

   <a name="94578"></a>

id
~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R

The player ID for the player software that this player is using. It is ``undefined`` if the player has not been opened. This player ID is the same value that is found in ``PlayerInfo.id`` for the media player software that implements this player.

Example: Print the player ID to the console.

::

      // Assume args has been defined
      var player = app.media.openPlayer( args )
      console.println("player.id = " + player.id); 
      // In the console, this script could possibly print...
      player.id = vnd.adobe.swname:ADBE_MCI

.. raw:: html

   <a name="49000"></a>

.. _innerrect-1:

innerRect
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array
     - R/W

A rectangle array representing the player's inner rectangle. As with other such arrays in JavaScript, the coordinates are in the order [left, top, right, bottom]. The rectangle does not include a window title or other such gadgets around the edges of the player, but it does include the player controller, if present. It is undefined if the player is not open.

For a docked media player, this rectangle is in device space and is read-only (it throws an exception if you try to set it). Instead, use ``triggerGetRect`` to cause a docked player to be resized. For a floating media player, the rectangle is in screen coordinates and is writable, but the user's security settings may override a value you set here. For example, if you try to move a floating media player offscreen, it may be forced back on-screen. This will not throw an exception. You can read this property after writing it to see if your value was overridden.

See also `outerRect <JS_API_AcroJS.html#58125>`__.

.. raw:: html

   <a name="49436"></a>

isOpen
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R

A Boolean value that is ``true`` if the media player is currently open. Use ``MediaPlayer.open`` and ``MediaPlayer.close`` to open or close a player.

.. raw:: html

   <a name="91927"></a>

isPlaying
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R

A Boolean value that is ``true`` if the media is currently playing. It is ``false`` if the player is not open, or if the media is paused, stopped, fast forwarding or rewinding, or in any other state.

.. raw:: html

   <a name="54328"></a>

.. _markers-1:

markers
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``Markers`` Object
     - R

A collection of all the markers available for the current media.

See `Markers <JS_API_AcroJS.html#46714>`__ object for details of this property.

Example: See `Example 2 <JS_API_AcroJS.html#**************Example%202%20on%20page%20510>`__ following `seek <JS_API_AcroJS.html#41580>`__ for an illustration of usage.

.. raw:: html

   <a name="58125"></a>

outerRect
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array
     - R/W

A rectangle array representing the player's outer rectangle. As with other such arrays in JavaScript for Acrobat, the coordinates are in the order [ left, top, right, bottom ]. This rectangle includes any player controller, window title, and other such gadgets around the edges of the player. It is ``undefined`` if the player is not open.

For a docked media player, this rectangle is in device space and is read-only. It will throw an exception if you try to set it. Instead, use ``MediaPlayer.triggerGetRect`` to cause a docked player to be resized. For a floating media player, the rectangle is in screen coordinates and is writable, but the user's security settings may override a value you set here. For example, if you try to move a floating media player offscreen, it may be forced back on-screen. This will not throw an exception. You can read this property after writing it to see if your value was overridden.

See also `innerRect <JS_API_AcroJS.html#49000>`__.

.. raw:: html

   <a name="48828"></a>

.. _page-3:

page
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

The page number in which a docked media player appears. It is ``undefined`` for players that are not docked. A docked media player can be moved to another page by changing its ``page`` property, which triggers a GetRect (see `onGetRect <JS_API_AcroJS.html#61508>`__) event.

Example: Play a media clip on page 1 (base zero). The placement of the media player on page 1 is the same as the screen annotation on page 0.

::

      var player = app.media.openPlayer({
              rendition: this.media.getRendition( "myClip" ),
              annot: this.media.getAnnot({ nPage:0, cAnnotTitle:"myScreen" }),
              settings: { windowType: app.media.windowType.docked }
          });
      player.page = 1; 

See `onGetRect <JS_API_AcroJS.html#61508>`__ and `triggerGetRect <JS_API_AcroJS.html#63484>`__ for variations on this example.

.. raw:: html

   <a name="31898"></a>

settings
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``MediaSettings`` object
     - R/W

Includes all of the settings that are used to create a MediaPlayer. See `MediaSettings <JS_API_AcroJS.html#91559>`__ object for a complete list.

.. note::

   In Acrobat 6.0, changing a property in ``MediaPlayer.settings`` after the player has been created has no effect. This may be changed in a future release to make these settings live. For compatibility with current and future releases, avoid changing any settings properties while a player is open.

.. raw:: html

   <a name="51769"></a>

uiSize
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array
     - R

An array containing the size of the controller of the player for each edge of the player, in the same order as a window rectangle: [ left, top, right, bottom ]. Each of these values is normally a positive value or zero. These values do not include window gadgets such as title bars.

This property is not available until the Ready event is triggered (see `onReady <JS_API_AcroJS.html#82350>`__ and `afterReady <JS_API_AcroJS.html#75362>`__). Unlike most MediaPlayer properties, it is permissible to read it during an on event method such as ``onReady``.

Example: Get the ``uiSize`` of the player. This code is executed as a Rendition action event.

::

      var args = {
          events: { 
              onReady: function () { 
                  console.println("uiSize = " + player.uiSize ); 
              }
          }
      };
      var player = app.media.openPlayer(args);

.. raw:: html

   <a name="96180"></a>

visible
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R/W

A Boolean value controlling whether the player is visible. Unlike ``MediaPlayer.settings.visible``, this property takes effect immediately. If the player is not open, reading this property returns ``undefined`` and setting it throws an exception.

Setting this property may trigger events. For example, if the player is visible and has the focus, making it invisible triggers a Blur event.

Example: Play the audio *only* of a video clip

::

      // Assume a definition of args
      var player = app.media.openPlayer(args);
      player.visible = false;

MediaPlayer methods
-------------------

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - `close <JS_API_AcroJS.html#11397>`__
     - `play <JS_API_AcroJS.html#61004>`__
     - `stop <JS_API_AcroJS.html#21014>`__

   * - `open <JS_API_AcroJS.html#50913>`__
     - `seek <JS_API_AcroJS.html#41580>`__
     - `triggerGetRect <JS_API_AcroJS.html#63484>`__

   * - `pause <JS_API_AcroJS.html#37680>`__
     - `setFocus <JS_API_AcroJS.html#58878>`__
     - `where <JS_API_AcroJS.html#90314>`__

.. raw:: html

   <a name="11397"></a>

close

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Closes the media player if it is open. Does nothing (and is not an error) if the player is closed.

The ``eReason`` parameter should be a value from the ``app.media.closeReason`` enumeration. This value is passed through to the ``event.media.closeReason`` property for the Close event (see `onClose <JS_API_AcroJS.html#45762>`__ and `afterClose <JS_API_AcroJS.html#83809>`__) that the ``close`` method is triggered.

If the player has the keyboard focus, a Blur event (``onBlur`` /``afterBlur``) is triggered before the Close event. Other events, such as Status (``onStatus`` /``afterStatus``) and Stop (``onStop`` /``afterStop``), may also be triggered depending on the particular media player.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``eReason``
     - ``eReason`` is a value from the ``app.media.closeReason`` enumeration.

.. raw:: html

   <a name="50913"></a>

.. _open-1:

open
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Attempts to open the media player as specified by ``MediaPlayer.settings``. If the player is already open, an exception is thrown. If the player was previously opened and then closed, ``open`` may be called to open the player again. This uses the same JavaScript object as before but opens a new instance of the actual media player. In this case, for example, the new player does not remember the playback position from the old player.

For a docked player, a GetRect event (``onGetRect``) is triggered when the player is opened.

If ``MediaPlayer.settings.autoPlay`` is ``true`` (the default), playback begins and a Play event (``onPlay`` /``afterPlay``) is triggered.

The ``open`` method may result in a security prompt dialog box, depending on the user's settings. It may also result in events being triggered in objects such as other media players and screen annotations. For example, if another media player has the keyboard focus, it will receive a Blur event (``onBlur`` /``afterBlur``).

If ``bAllowSecurityUI`` is ``false``, the ``open`` method never displays a security prompt, but returns a failure code instead.

For a media player in a floating window, additional security checks are made against the user's settings. For example, the user may specify that title bars are required on all floating player windows. If ``MediaPlayer.settings.floating`` contains options that the user does not allow, ``bAllowFloatOptionsFallback`` controls what happens. If it is ``false``, playback is disallowed and an error code is returned. If it is ``true``, the options in ``MediaPlayer.settings.floating`` are changed as needed to conform to the user's security settings and ``open`` proceeds with those changed settings.

The return value is an object that currently contains one property, ``code``, which is a result code from the ``app.media.openCode`` enumeration. If your PDF is opened in a future version of Acrobat, there may be additional properties in this object, or a code value added in that future version. Be sure to handle any such values gracefully.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``bAllowSecurityUI``
     - (optional) The default is ``true``. See the description of this parameter given above. 

   * - ``bAllowFloatOptionsFallback``
     - (optional) The default is ``true``. See the description of this parameter given above. 



**Returns** 

An object with a ``code`` property

Example: See `Example 1 <JS_API_AcroJS.html#68527>`__ following `createPlayer <JS_API_AcroJS.html#97532>`__ for an example of usage.

.. raw:: html

   <a name="37680"></a>

pause
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Pauses playback of the current media and triggers a Pause event (``onPause`` /``afterPause``). The Pause event may occur during the ``pause`` call or afterward, depending on the player.

The ``pause`` method has no effect if the media is already paused or stopped, or if playback has not yet started or has completed. Not every media player and media format supports ``pause``. In particular, most streaming formats do not support ``pause``. Players may either throw an exception or silently ignore ``pause`` in these cases.

Example: See `Example 2 <JS_API_AcroJS.html#**************Example%202%20on%20page%20510>`__ following `seek <JS_API_AcroJS.html#41580>`__ for an example of usage.

.. raw:: html

   <a name="61004"></a>

play
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Starts playback of the current media and triggers a Play event (``onPlay`` /``afterPlay``). The Play event may occur during the ``play`` call or afterward, depending on the player.

If the media is already playing, it continues playing and no event is triggered. If it is paused, rewinding, or fast forwarding, it resumes playback at the current position. If it is stopped, either at the beginning or end of media, playback starts from the beginning.

Example: See `Example 2 <JS_API_AcroJS.html#**************Example%202%20on%20page%20510>`__ following `seek <JS_API_AcroJS.html#41580>`__ for an example of usage.

.. raw:: html

   <a name="41580"></a>

seek
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Sets the current media's playback location to the position described by the ``MediaOffset`` object contained in ``oMediaOffset``.

If the media is playing, it continues playing at the new location. If the media is paused, it moves to the new location and remains paused there. If the media is stopped, the result will vary depending on the player.

Media players handle seek errors in different ways. Some ignore the error and others throw a JavaScript exception.

Most, but not all, media players trigger a Seek event (``onSeek`` /``afterSeek``) when a seek is completed.

The seek operation may take place during the execution of the ``seek`` method or later, depending on the player. If ``seek`` returns before the seek operation is completed and you call another player method before the seek is completed, the results will vary depending on the player.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oMediaOffset``
     - A ``MediaOffset`` object, the properties of which indicate the playback location to be set.

Example 1: 

::

      // Rewind the media clip
      player.seek({ time: 0 });
      
      // Play starting from marker "First"
      player.seek({ marker: "First" });
      
      // Play starting five seconds after marker "One"
      player.seek({ marker: "One", time: 5 });

.. raw:: html

   <a name="93265"></a>Example

2

The following script randomly plays (famous) quotations. The media is an audio clip (``.wma``) of famous quotations, which supports markers and scripts. The ``afterReady`` listener counts the number of markers, one at the beginning of each quotation. At the end of each quotation, there is also an embedded command script. The ``afterScript`` listener watches for these commands and if it is a "pause" command, it pauses the player.

::

      var nMarkers=0;
      var events = new app.media.Events;
      events.add({
          // Count the number of quotes in this audio clip, save as nMarkers
          afterReady: function()
          {
              var g = player.markers;
              while ( (index =  g.get( { index: nMarkers } ) ) != null )

                   nMarkers++;
          },
          // Each quote should be followed by a script, if the command is to

           // pause, then pause the player.
          afterScript: function( e ) {
              if ( e.media.command == "pause" ) player.pause();
          }
      });
      var player = app.media.openPlayer({
          rendition: this.media.getRendition( "myQuotes" ),
          settings: { autoPlay: false },
          events: events
      });
      // Randomly choose a quotation
      function randomQuote() {
          var randomMarker, randomMarkerName;
          console.println("nMarkers = " + nMarkers);
          // Randomly choose an integer between 1 and nMarkers, inclusive
          randomMarker = Math.floor(Math.random() * 100) % ( nMarkers ) + 1;
          // Indicate what quotation we are playing
          this.getField("Quote").value = "Playing quote " + randomMarker;
          // The marker names are "quote 1", "quote 2", "quote 3", etc.
          randomMarkerName = "quote " + randomMarker;    
          // See the marker with the name randomMarkerName
          player.seek( { marker: randomMarkerName } );
          player.play(); 
      }

Action is initiated by the mouse-up button action such as

::

      try { randomQuote() } catch(e) {}

.. raw:: html

   <a name="58878"></a>

setFocus
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Sets the keyboard focus to the media player and triggers a Focus event (``onFocus`` /``afterFocus``). If another player or PDF object has the focus, that object receives a Blur event (``onBlur`` /``afterBlur``). If the media player already has the focus, nothing happens. If the player is not open or not visible, an exception is thrown.

Example: See `Example 1 <JS_API_AcroJS.html#68527>`__ following `createPlayer <JS_API_AcroJS.html#97532>`__ for an example of usage.

.. raw:: html

   <a name="21014"></a>

.. _stop-1:

stop
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Stops playback of the current media, if it is playing or paused, and triggers a Stop event (``onStop`` /``afterStop``). The Stop event may occur during execution of the ``stop`` method or afterward, depending on the player. Does nothing if the media is not playing or paused.

Throws an exception if the player is not open.

After playback stops, the player sets the media position to either the beginning or end of media, depending on the player. If ``MediaPlayer.play`` is called after this, playback starts at the beginning of media.

.. raw:: html

   <a name="63484"></a>

triggerGetRect
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Triggers a GetRect event (see `onGetRect <JS_API_AcroJS.html#61508>`__) to cause a docked media player to be resized.

Example: This example is similar to the one that follows ``onGetRect``. Page 0 has a series of (thumbnail-size) ScreenAnnots. Below is a typical Rendition action or mouse-up button JavaScript action, when the action is executed, the media clip is resized and played.

::

      var rendition = this.media.getRendition("Clip1");
      var annot = this.media.getAnnot({ nPage:0,cAnnotTitle:"ScreenClip1" }); 
      var player = app.media.openPlayer({
          rendition: rendition,
          annot: annot, 
          settings: { windowType: app.media.windowType.docked },
          events: {
              onGetRect: function (e) {
                  var width = e.media.rect[2] - e.media.rect[0];
                  var height = e.media.rect[3] - e.media.rect[1]; 
                  width *= 3; // Triple width and height
                  height *= 3;
                  e.media.rect[0] = 36; // Move left,upper to 
                  e.media.rect[1] = 36; // upper left-hand corner
                  e.media.rect[2] = e.media.rect[0]+width;
                  e.media.rect[3] = e.media.rect[1]+height;
                  return e.media.rect; // Return this
              } 
          }
      });
      player.triggerGetRect(); // trigger the onGetRec event

.. raw:: html

   <a name="90314"></a>

where
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

Reports the current media's playback location in a ``MediaOffset`` object. This object contains either a time or frame property, depending on the media player and media type.

Throws an exception if the player is not open or if the player does not support ``where``.



**Returns** 

``MediaOffset`` object

.. raw:: html

   <a name="26770"></a>

Example: Obtain the playback location in seconds.

::

      // This code assumes that the player supports where() using time.
      var where = player.where();
      var seconds = where.time;

Obtain the chapter (marker).

::

      var marker = player.markers.get({ time: seconds });
      var name = marker ? marker.name : "no marker";

.. raw:: html

   <a name="16239"></a>

MediaReject
===========

A MediaReject provides information about a Rendition that was rejected by a ``Rendition.select`` call. It includes a reference to the original Rendition along with the reason why it was rejected. In a ``MediaSelection`` object returned by ``select``, ``MediaSelection.rejects`` is an array of MediaReject objects.

MediaReject properties
----------------------

* `rendition <JS_API_AcroJS.html#31167>`__

.. raw:: html

   <a name="31167"></a>

rendition
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``Rendition`` object
     - R

A reference to the Rendition that was rejected in a ``select`` call.

.. raw:: html

   <a name="55114"></a>Example

Get a list of rejected renditions. The script is executed as a Rendition action.

::

      selection = event.action.rendition.select(true);
      for ( var i=0; i<selection.rejects.length; i++)
          console.println("Rejected Renditions: "

               + selection.rejects[i].rendition.uiName);
      
      // Now play the first available rendition.
      console.println( "Preparing to play " + selection.rendition.uiName);
      var settings = selection.rendition.getPlaySettings();
      var args = { 
          rendition: selection.rendition,
          annot: this.media.getAnnot({ nPage: 0, cAnnotTitle: "myScreen" }),
          settings: settings 
      };
      app.media.openPlayer(args);

.. raw:: html

   <a name="47359"></a>

MediaSelection
==============

The ``Rendition.select`` method returns a MediaSelection object that can be used to create a ``MediaSettings`` object for playback.

MediaSelection properties
-------------------------

* `selectContext <JS_API_AcroJS.html#36039>`__
* `players <JS_API_AcroJS.html#77091>`__
* `rejects <JS_API_AcroJS.html#83651>`__
* `rendition <JS_API_AcroJS.html#11395>`__

.. raw:: html

   <a name="36039"></a>

selectContext
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Object
     - R

A value that can be used to write a loop that calls ``Rendition.select`` repeatedly to do a customized selection based on any criteria that you can test in JavaScript code.

Example: Generic script for using selectContext.

::

      function MyTestSelection( selection )
      {
          // This function should test the selection as you wish and return
          // true to use it or false to reject it and try another one.
      }
      function MyGetSelection( rendition )
      {
          var selection;
          for( selection = rendition.select(); selection;
              selection = rendition.select
                  ({ oContext: selection.selectContext }))
          {
              if( MyTestSelection( selection ) )
                  break;
          }
          return selection;
      }

.. raw:: html

   <a name="77091"></a>

players
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of String
     - R

An array of strings identifying the media players that may be used to play ``MediaSelection.rendition``. Both the players and rendition properties are ``null`` if no playable rendition is found.

.. raw:: html

   <a name="81816"></a>

Example: Get a list of the players that will play the selected rendition. The code below assumes execution as a Rendition action.

::

      var selection = event.action.rendition.select();
      for ( var o in selection.players ) 
          console.println( selection.players[o].id );

.. raw:: html

   <a name="83651"></a>

rejects
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Array of ``MediaReject`` objects
     - R

An array of ``MediaReject`` objects. These are the Renditions that were rejected by the ``Rendition.select`` call that returned this MediaSelection. See `MediaReject <JS_API_AcroJS.html#16239>`__ object for details.

Example: See the `Example <JS_API_AcroJS.html#***************see%20example%20on%20514>`__ following `rendition <JS_API_AcroJS.html#11395>`__.

.. raw:: html

   <a name="11395"></a>

.. _rendition-1:

rendition
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``Rendition`` object
     - R

The selected rendition, or ``null`` if none was playable.

Example: Get the name of the selected rendition. This script is executed from a Rendition action event.

::

      var selection = event.action.rendition.select();
      console.println( "Preparing to play " + selection.rendition.uiName);

.. raw:: html

   <a name="91559"></a>

MediaSettings
=============

A MediaSettings object contains settings required to create and open a MediaPlayer. It is the value of the ``settings`` property of the ``MediaPlayer`` object. Many of these settings have default values, but some are required depending on the type of player being opened and depending on other settings. See the notes for each MediaSettings property for details.

Acrobat and the various media players will attempt to use these settings, but there is no guarantee that they will all be honored. (For example, very few players honor the ``palindrome`` setting.)

MediaSettings properties
------------------------

.. list-table::
   :header-rows: 1

   * - `autoPlay <JS_API_AcroJS.html#11885>`__
     - `endAt <JS_API_AcroJS.html#30733>`__
     - `page <JS_API_AcroJS.html#37286>`__
     - `showUI <JS_API_AcroJS.html#22987>`__

   * - `baseURL <JS_API_AcroJS.html#97037>`__
     - `floating <JS_API_AcroJS.html#16893>`__
     - `palindrome <JS_API_AcroJS.html#30683>`__
     - `startAt <JS_API_AcroJS.html#25011>`__

   * - `bgColor <JS_API_AcroJS.html#83870>`__
     - `layout <JS_API_AcroJS.html#17615>`__
     - `players <JS_API_AcroJS.html#22715>`__
     - `visible <JS_API_AcroJS.html#44957>`__

   * - `bgOpacity <JS_API_AcroJS.html#81817>`__
     - `monitor <JS_API_AcroJS.html#19974>`__
     - `rate <JS_API_AcroJS.html#86332>`__
     - `volume <JS_API_AcroJS.html#97636>`__

   * - `data <JS_API_AcroJS.html#52881>`__
     - `monitorType <JS_API_AcroJS.html#26076>`__
     - `repeat <JS_API_AcroJS.html#94336>`__
     - `windowType <JS_API_AcroJS.html#46521>`__

   * - `duration <JS_API_AcroJS.html#42027>`__
     - 
     - 
     - 

.. raw:: html

   <a name="11885"></a>

autoPlay
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R/W

Specifies whether the media clip should begin playing automatically after the player is opened. If you set ``autoPlay`` to ``false``, use ``MediaPlayer.play`` to begin playback. The default value is ``true``.

Example: See the examples following `afterReady <JS_API_AcroJS.html#75362>`__ and `players <JS_API_AcroJS.html#22715>`__.

.. raw:: html

   <a name="97037"></a>

.. _baseurl-1:

baseURL
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - String
     - R/W

The base URL to be used to resolve any relative URLs used in the media clip, for example, if the media opens a web page. There is no default value; if baseURL is not specified, the interpretation of a relative URL will vary depending the media player, but in most cases will not work.

.. raw:: html

   <a name="83870"></a>

bgColor
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Color Array
     - R/W

The background color for the media player window. The array may be in any of the color array formats supported by JavaScript for Acrobat.

If bgColor is not specified, the default value depends on the window type:

* *Docked*: White
* *Floating*: The window background color specified in the operating system control panel
* *Full Screen*: The full screen background color specified in the user's Acrobat preferences

.. raw:: html

   <a name="13149"></a>

Example: 

::

      // Red background
      settings.bgColor = [ "RGB", 1, 0, 0 ];

.. raw:: html

   <a name="81817"></a>

bgOpacity
~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W
     
The background opacity for the media player window. The value may range from 0.0 (fully transparent) to 1.0 (fully opaque). The default value is 1.0.

.. raw:: html

   <a name="52881"></a>

.. _data-1:

data
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Object
     - R/W

An object, often referred to as a *MediaData object*, that a media player can use to read its media clip data, whether from an external file or embedded in the PDF. The contents of this object are not directly usable from JavaScript.

This object can be obtained from ``app.media.getAltTextData``, ``app.media.getURLData``, or indirectly by ``Rendition.getPlaySettings``. The ``data`` object may be bound to the rendition's document, so it may become unavailable if the document is closed.

Example: See the examples that follow ``app.media.`` `getURLData <JS_API_AcroJS.html#27456>`__.

.. raw:: html

   <a name="42027"></a>

duration
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

The amount of time in seconds that playback will take. If not specified, the default is to play the entire media, or the amount of time between the ``startAt`` and ``endAt`` points if either of those is specified.

Note that the duration may be longer than the entire media length or the difference between the ``startAt`` and ``endAt`` points. In that case, playback continues to the end of media or to the ``endAt`` point and then playback pauses at that location until the duration elapses.

Example: Play a floating window with infinite duration. The playback location (from the UI) of the rendition is a floating window. The code below is executed from a form button. The floating window remains open after the player has reached the end of the media. To avoid stacked floating windows, the player is closed before reopening it.

If this script is executed from a Rendition action, the rendition can be specified through the UI and closing the player would not be necessary.

::

      var rendition = this.media.getRendition("Clip");
      if ( player && player.isOpen ) 
          try { player.close(app.media.closeReason.done); } catch(e) {};
      var player = app.media.openPlayer({ 
          rendition: rendition, 
          settings: { duration: Infinity }
      });

.. raw:: html

   <a name="30733"></a>

endAt
~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``MediaOffset`` object
     - R/W

The ending time or frame for playback. This may be an absolute time or frame value, or a marker name, or a marker plus a time or frame, as described under ``MediaOffset`` object. Playback ends at the specified time or frame, or as close to that point as the media player is able to stop. If ``endAt`` is not specified, the default value is the end of media.

See also `startAt <JS_API_AcroJS.html#25011>`__.

Example: The following script plays an audio clip beginning 3 seconds into the media to 8 seconds into the media.

::

      var player = app.media.openPlayer({
          rendition: this.media.getRendition( "myAudio" ),
          doc: this,
          settings: {
              startAt: 3,
              endAt: 8
          }
      });

.. raw:: html

   <a name="16893"></a>

floating
~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All     
     - Object
     - R/W

An object containing properties (listed below) that define the location and style of a floating window.

This object is ignored unless ``MediaSettings.windowType`` has a value of ``app.media.windowType.floating``.

Defaults are used for all the floating settings if they are not specified.

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Type
     - Description

   * - ``align``
     - Number
     - Specifies how the floating window is to be positioned relative to the window specified by the over property. The value of ``align`` is one of the values of ``app.media.align``. 

   * - ``over``
     - Number
     - Specifies the window to which the floating window is to be aligned. The value of ``over`` is one of the values of ``app.media.over``. 

   * - ``canResize``
     - Number
     - Specifies whether the floating window may be resized by the user. The value of ``canResize`` is one of the values of ``app.media.canResize``. 

   * - ``hasClose``
     - Boolean
     - If ``true``, the floating window should have a close window control button. 

   * - ``hasTitle``
     - Boolean
     - If ``true``, a title should be displayed in the title bar. 

   * - ``title``
     - String
     - This title to be displayed if ``hasTitle`` is ``true``. 

   * - ``ifOffScreen``
     - Number
     - Specifies what action should be taken if the floating window is positioned totally or partially offscreen. The value of ifOffScreen is one of the values of ``app.media.ifOffScreen``. 

   * - ``rect``
     - Array of four Numbers
     - An array of screen coordinates specifying the location and size of the floating window. Required if ``width`` and ``height`` are not given.

   * - ``width``
     - Number
     - The width of the floating window. Required if ``rect`` is not given.

   * - ``height``
     - Number
     - The height of the floating window. Required if ``rect`` is not given.

Example: Play a media clip in a floating window.

::

      var rendition = this.media.getRendition( "myClip" );
      var floating = {
          align: app.media.align.topCenter,
          over: app.media.over.appWindow,
          canResize: app.media.canResize.no,
          hasClose: true,
          hasTitle: true,
          title: rendition.altText,
          ifOffScreen: app.media.ifOffScreen.forceOnScreen,
          width: 400,
          height: 300
      };
      var player = app.media.openPlayer({
          rendition: rendition,
          settings: { 
              windowType: app.media.windowType.floating,
              floating: floating
          }
      });

.. raw:: html

   <a name="17615"></a>



layout
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

A value chosen from the ``app.media.layout`` enumeration, which defines whether and how the content should be resized to fit the window. The default value varies with different media players.

.. raw:: html

   <a name="19974"></a>

monitor
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Monitor or Monitors object
     - R/W

For a full screen media player, this property determines which display monitor will be used for playback. This may be either a ``Monitor`` object or a ``Monitors`` object. If it is an array, the first element (which is a Monitor object) is used.

     

.. note::

   Only the ``rect`` property ``MediaSettings.monitor.`` *rect* (in the case of a Monitor object) or ``MediaSettings.monitor[0].`` *rect* (for a Monitors object) is used for playback.

See `monitorType <JS_API_AcroJS.html#26076>`__ (below) for a discussion of the relationship between the ``monitor`` and ``monitorType`` properties.
     

Example: Play a media clip in full screen from a form button.

::

      var player = app.media.openPlayer({ 
          rendition: this.media.getRendition("Clip"), 
          settings: {
              monitor: app.monitors.primary(),
              windowType: app.media.windowType.fullScreen, 
          }
      });

.. note::

   The user trust manager settings must allow full screen play back.

.. raw:: html

   <a name="26076"></a>



monitorType
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 6.0
     - No
     - No
     - All

An ``app.media.monitorType`` value that represents the type of monitor to be selected for playback for a floating or full screen window.

Note the difference between the ``monitor`` and ``monitorType`` properties:

-  ``monitor`` specifies a specific monitor on the current system by defining its rectangle.
-  ``monitorType`` specifies a general category of monitor based on attributes such as primary, secondary, and best color depth.

A PDF file that does not use JavaScript cannot specify a particular monitor, but it can specify a monitor type. When ``monitorType`` is specified in a call to ``app.media.createPlayer`` or ``app.media.openPlayer``, JavaScript code gets the list of monitors available on the system and uses ``monitorType`` to select one of the monitors for playback. The monitor rectangle is then used when ``MediaPlayer.open`` is called to select the monitor.

     - Number
     - R/W

Example: Play a media clip in full screen on a monitor with the best color depth.

::

      var player = app.media.openPlayer({ 
          rendition: this.media.getRendition("Clip"), 
          settings: {
              monitorType: app.media.monitorType.bestColor,
              windowType: app.media.windowType.fullScreen, 
          }
      });

.. raw:: html

   <a name="37286"></a>



page
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

For a docked media player, this property is the number of the page on which the player should be docked. For other types of media players, this property is ignored.

See also ``MediaPlayer``. `page <JS_API_AcroJS.html#48828>`__.

.. raw:: html

   <a name="30683"></a>

palindrome
~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R/W

If this property is ``true``, the media plays once normally and then plays in reverse back to the beginning. If ``repeat`` is specified, this forward-and-reverse playback repeats that many times. Each complete forward and reverse playback counts as one repeat.

The default value is ``false``.

.. note::

   Most media players do not support palindrome and ignore this setting.

Example: Use QuickTime, which supports palindrome, to view the media clip.

::

      var playerList = app.media.getPlayers().select({ id: /quicktime/i });
      var settings = { players: playerList, palindrome: true };
      var player = app.media.openPlayer({ settings: settings });

The above code should be run within a Rendition action event with an associated rendition.

.. raw:: html

   <a name="22715"></a>

.. _players-1:

players
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Players or Array of String
     - R/W

An array of objects that represent the media players that can be used to play this rendition. JavaScript code does not usually access this array directly but passes it through from ``Rendition.select`` to the ``settings`` object for ``app.media.createPlayer``.

Example: List the available players that can play this rendition. This script is run as a Rendition action with associated rendition.

::

      var player = app.media.openPlayer({ settings: {autoPlay: false} });
      console.println("players: " + player.settings.players.toSource() );
      
      // Sample output to the console:
      players: [{id:"vnd.adobe.swname:ADBE_MCI", rank:0},

       {id:"vnd.adobe.swname:AAPL_QuickTime", rank:0},

       {id:"vnd.adobe.swname:RNWK_RealPlayer", rank:0},

       {id:"vnd.adobe.swname:MSFT_WindowsMediaPlayer", rank:0}]

.. raw:: html

   <a name="86332"></a>

rate
~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

A number that specifies the playback rate. The default value is 1, which means normal playback. Other values are relative to normal speed. For example, .5 is half speed, 2 is double speed, and -1 is normal speed in reverse.

Many players and media types are limited in the values they support for rate and will choose the closest playback rate that they support.

Example: Play a media clip at double speed. This script is executed as a Rendition action.

::

      var player = app.media.createPlayer();
      player.settings.rate = 2;
      player.open();

.. raw:: html

   <a name="94336"></a>

.. _repeat-1:

repeat
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

The number of times the media playback should automatically repeat. The default value of 1 causes the media to be played once.

Many players support only integer values for repeat, but some allow non-integer values such as 1.5. A value of ``Infinity`` plays the media clip continuously.

The default value is 1.

Example: Play a media clip from a Rendition action continuously.

::

      var player = app.media.openPlayer({settings: { repeat: Infinity } });

.. raw:: html

   <a name="22987"></a>

showUI
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R/W

A Boolean value that specifies whether the controls of the media player should be visible or not.

The default value is ``false``.

Example: Show the controls of the media player. This script is executed as a Rendition action.

::

      var player = app.media.createPlayer();
      player.settings.showUI = true;
      player.open();

or

::

      app.media.openPlayer( {settings: {showUI: true} });

.. raw:: html

   <a name="25011"></a>

startAt
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - ``MediaOffset`` object
     - R/W

Defines the starting time or frame for playback. This may be an absolute time or frame value, or a marker name, or a marker plus a time or frame, as described under MediaOffset. Playback starts at the specified time or frame, or as close to that point as the media player is able to stop. If startAt is not specified, the default value is the beginning of media.

See also `endAt <JS_API_AcroJS.html#30733>`__.

Example: See the example that follows `endAt <JS_API_AcroJS.html#30733>`__.

.. raw:: html

   <a name="44957"></a>

.. _visible-1:

visible
~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Boolean
     - R/W

A Boolean value that specifies whether the player should be visible.

The default value is ``true``.

Example: Set a docked media clip to play audio only. The script is executed as a Rendition action.

::

      var args = {
          settings: {
              visible: false, 
              windowType: app.media.windowType.docked
          }
      };
   app.media.openPlayer( args );

See also ``MediaPlayer.`` `visible <JS_API_AcroJS.html#96180>`__.

.. raw:: html

   <a name="97636"></a>

volume
~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

Specifies the playback volume. A value of 0 is muted, a value of 100 is normal (full) volume; values in between are intermediate volumes. Future media players may allow values greater than 100 to indicate louder than normal volume, but none currently do.

The default value is 100.

.. raw:: html

   <a name="46521"></a>

.. _windowtype-1:

windowType
~~~~~~~~~~

.. list-table::
   :header-rows: 1
   
   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 6.0
     - No
     - No
     - All
     - Number
     - R/W

A value, chosen from the ``app.media.windowType`` enumeration, that defines what type of window the MediaPlayer should be created in.

If you use the low-level function ``doc.media.newPlayer``, the default value for ``windowType`` is ``app.media.windowType.docked``.

If you use the higher-level ``createPlayer`` or ``openPlayer`` functions of the ``app.media`` object, the default value is determined as follows:

-  If an ``annot`` is provided (see the description of the `PlayerArgs object <JS_API_AcroJS.html#42847>`__), the default is ``app.media.windowType.docked``.
-  If a ``settings.floating`` object is provided (see the description of the `PlayerArgs object <JS_API_AcroJS.html#42847>`__), the default is ``app.media.windowType.floating``.
-  Otherwise, the default is undefined.

Example: Create media players with different window types. Script is executed as a Rendition action, so the selection of the specification of the rendition is not needed.

::

      // Docked player that will be played in the associated ScreenAnnot
      app.media.openPlayer({ 
          settings: { windowType: app.media.windowType.docked }
      });
      // Play in full screen mode, see also monitor and monitorType
      app.media.openPlayer({ 
          settings: { windowType: app.media.windowType.fullScreen }
      });
      // Show the media clip in a floating window, also, see the floating property
      var args = {
          settings: {
              windowType: app.media.windowType.floating,
              floating: {
                  title: "A. C. Robat",
                  width: 352,
                  height: 240,
              }
          }
      };
      app.media.openPlayer( args );

.. raw:: html

   <a name="80470"></a>
 