******************************************************
Working with Digital Media in PDF
******************************************************

In this chapter you will learn how to use JavaScript to extend Acrobat's ability to integrate digital media into PDF documents. You will learn how to set up, control, and customize properties and preferences for media players and monitors, how to integrate movie and sound clips into your documents, and how to add, edit, and control the settings for their renditions.

.. raw:: html

   <a name="78613"></a>

Media players: control, settings, renditions, and events
========================================================

There are several objects that provide you with the means to customize the control, settings, renditions, and events related to media players. These are shown in the following table.

Media player objects

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Object
     - Description

   * - app.media
     - Primary object for media control, settings, and renditions.

   * - MediaOffset
     - Time or frame position within a media clip.

   * - Event
     - A multimedia event fired by a ``Rendition`` object.

   * - Events
     - A collection of multimedia event objects.

   * - MediaPlayer
     - An instance of a multimedia player.

   * - Marker
     - A location representing a frame or time value in a media clip.

   * - Markers
     - All the markers in the currently loaded media clip.

   * - MediaReject
     - Error information when a ``Rendition`` object is rejected.

   * - MediaSelection
     - A media selection object used to create the ``MediaSettings`` object.

   * - MediaSettings
     - An object containing settings used to create a ``MediaPlayer`` object.

   * - Monitor
     - A display monitor used for playback.

   * - Monitors
     - An array of display monitors connected to the user's system.

   * - PlayerInfo
     - An available media player.

   * - PlayerInfoList
     - An array of ``PlayerInfo`` objects.

   * - Rendition
     - Information needed to play a media clip.

   * - ScreenAnnot
     - A display area used for media playback.

.. raw:: html

   <a name="97742"></a>

Accessing a list of active players
----------------------------------

To obtain a list of available players, call the ``getPlayers`` method of the ``app.media`` object, which accepts an optional parameter specifying the MIME type and returns a ``PlayerInfoList`` object. The ``PlayerInfoList`` object is an array of ``PlayerInfo`` objects that can be filtered using its ``select`` method.

The following code sample shows how to obtain a list of all available players:

::

      var mp = app.media.getPlayers();

The following code sample shows how to obtain a list of all available MP3 players and print them to the console:

::

      var mp = app.media.getPlayers("audio/MP3");
      for (var i = 0; i < mp.length; i++) {
          console.println("nmp[" + i + "] Properties");
          for (var p in mp[i])
              console.println(p + ": " + mp[i][p]);
      }

To filter the list of players using the ``select`` method of the ``PlayerInfoList`` object, you can supply an optional ``object`` parameter which can contain any combination of ``id``, ``name``, and ``version`` properties, each of which may be either a string or a regular expression. For example, the following code obtains the QuickTime media player:

::

      var mp = app.media.getPlayers().select({id: /quicktime/i});

In addition, the ``getOpenPlayers`` method of the ``doc.media`` object returns an array of all currently open ``MediaPlayer`` objects. With this array, you can stop or close all players, and manipulate any subset of the open players. The following example stops all running players in the document:

::

      var players = doc.media.getOpenPlayers(oDoc);
      for (var i in players) players[i].stop();

.. raw:: html

   <a name="33983"></a>

Specifying playback settings
----------------------------

You can obtain and adjust the media settings offered by a player. To do this, invoke the ``getPlaySettings`` method of the ``Rendition`` object, which returns a ``MediaSettings`` object, as shown in the code below:

::

      var settings = myRendition.getPlaySettings();

In addition to the ``app.media`` properties and methods, a ``MediaSettings`` object, which is used to create a ``MediaPlayer`` object, contains many properties related to the functional capabilities of players. These are described in the following table.

MediaSettings object properties

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - autoPlay
     - Determines whether to play the media clip automatically when the player is opened.

   * - baseURL
     - Resolves any relative URLs used in the media clip.

   * - bgColor
     - Specifies the background color for the media player window.

   * - bgOpacity
     - Specifies the background opacity for the media player window.

   * - endAt
     - Defines the ending time or frame for playback.

   * - data
     - The contents of the media clip (``MediaData`` object).

   * - duration
     - The number of seconds required for playback.

   * - floating
     - An object containing the location and size properties of a floating window used for playback.

   * - layout
     - A value indicating whether and how the content should be resized to fit the window.

   * - monitor
     - Defines the rectangle containing the display monitor used for playback.

   * - monitorType
     - The category of display monitor used for playback (such as primary, secondary, best color depth, etc.)

   * - page
     - The document page number used in case a docked media player is used.

   * - palindrome
     - Indicates that the media can play from beginning to end, and then in reverse from the end to the beginning.

   * - players
     - The list of available players for this rendition.

   * - rate
     - The playback speed.

   * - repeat
     - The number of times the playback repeats.

   * - showUI
     - Indicates whether the media player controls will be visible.

   * - startAt
     - Defines the starting time or frame for playback.

   * - visible
     - Indicates whether the media player will be visible.

   * - volume
     - The playback volume.

   * - windowType
     - An enumeration obtained from ``App.media.WindowType`` indicating whether the media player window will be docked or floating.

The example that follows illustrates the use of these properties to control how the media file is played. Other examples can be found in `Integrating media into documents <JS_Dev_DigitalMedia.html#63345>`__, as well as in the *JavaScript for Acrobat API Reference*.

#. Customizing the number of repetitions for playback

This minimal example is a custom script from the Actions tab in the Multimedia Properties panel of a screen annotation. To override the parameters specified by the UI of the screen annotation, the args parameter is passed.

::

      // Obtain the MediaSettings object, and store its repeat value
      var nRepeat = event.action.rendition.getPlaySettings().repeat;
      
      nRepeat =(nRepeat == 1) ? 2 : 1;
      
      // Set the new repeat value when opening the media player
      var args = { settings: {repeat: nRepeat} };
      app.media.openPlayer(args);

.. raw:: html

   <a name="93532"></a>

Monitors
========

The ``Monitors`` object is a read-only array of ``Monitor`` objects, each of which represents a display monitor connected to the user's system. It is available as a property of the ``app`` object, and you can write customized JavaScript code to iterate through this array to obtain information about the available monitors and select one for a full-screen or popup media player.

It is possible to apply filtering criteria to select a monitor. For example, you can select the monitor with the best color, or if there are multiple instances, additionally select the monitor with the greatest color depth. These criteria are methods of the ``Monitor`` object, and are listed in the following table.

Monitors filter criteria methods

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - bestColor
     - Returns the monitors with the greatest color depth.

   * - bestFit
     - Returns the smallest monitors with minimum specified dimensions.

   * - desktop
     - Creates a new monitor representing the entire virtual desktop.

   * - document
     - Returns the monitors containing the greatest amount of the document.

   * - filter
     - Returns the monitors having the highest rank according to a ranking function supplied as a parameter.

   * - largest
     - Returns the monitors with the greatest area in pixels.

   * - leastOverlap
     - Returns the monitors overlapping the least with a given rectangle.

   * - mostOverlap
     - Returns the monitors overlapping the most with a given rectangle.

   * - nonDocument
     - Returns the monitors displaying the least amount (or none) of the document.

   * - primary
     - Returns the primary monitor.

   * - secondary
     - Returns all monitors except for the primary one.

   * - select
     - Returns monitors filtered by monitor type.

   * - tallest
     - Returns the monitors with the greatest height in pixels.

   * - widest
     - Returns the monitors with the greatest width in pixels.

In addition to the capabilities within the ``Monitors`` object, the ``Monitor`` object provides the properties shown in the following table.

Monitor object properties

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - colorDepth
     - The color depth of the monitor in bits per pixel.

   * - isPrimary
     - Returns ``true`` if the monitor is the primary one.

   * - rect
     - The boundaries of the monitor in virtual desktop coordinates.

   * - workRect
     - The monitor's workspace boundaries in virtual desktop coordinates.

The example below illustrates how to obtain the primary monitor and check its color depth:

::

      var monitors = app.monitors.primary();
      if (monitors.length > 0)
          console.println("Color depth: " + monitors[0].colorDepth);

The next example illustrates how to obtain the monitor with the greatest color depth, with a minimum specified depth of 24:

::

      var monitors = app.monitors.bestColor(24);
      if (monitors.length > 0)
          console.println("Found the best color depth over 24!");

The next example illustrates how to obtain the monitor with the greatest width in pixels, and determines whether it is the primary monitor:

::

      var monitors = app.monitors.widest();
      var isIsNot = (monitors[0].isPrimary) ? " is " : " is not ";
      console.println("Widest monitor" + isIsNot + "the primary.");

.. raw:: html

   <a name="63345"></a>

Integrating media into documents
================================

You can integrate media into documents, which can be played in either a screen annotation, a floating window, or in full screen mode. Media can be embedded in the document itself through the UI, played from the local hard drive, or played from an external URL. There are no JavaScript methods for embedding a movie or sound clip into the document.

When a movie or sound clip is played, there is a default behavior. For a movie, the user clicks on a screen annotation to start the movie. A customized behavior can be developed for when the user clicks the screen annotation or a form button. (The mechanism for activating a clip is not restricted to clicking the screen annotation or a button, for example such events can be activated from a bookmark action or a page open action.)

#. To embed a movie or sound file in a document
#. Open a document and change to the page on which you wish to place a screen annotation.
#. Display the **Tools pane**.
#. Select either the Video tool or the Sound tool from the Interactive Objects panel on Tools pane, as appropriate.
#. Marquee-select the desired movie screen area for your sound.
#. In the Add Movie or Add Sound dialog box, click the **Browse** button and browse for your media file.
#. From the toolbar, select the **Hand** tool, and click the screen annotation. The media file will play. This is the default behavior of a new screen annotation.

Select the Object tool on the Editing toolbar and double click on your screen annotation to bring up the Multimedia Properties dialog box. The dialog box has three tabs, Settings, Appearance and Actions. See Acrobat help for detailed descriptions of these tabs.

The Actions tab of the Multimedia Properties dialog box is the same as that for any Acrobat form field. Of particular interest are the Play Media (Acrobat 6 or Later Compatible) and the Run a JavaScript actions. These are extensively discussed below.

Select the Object tool from the Editing tool bar and double click on the screen annotation to bring up the Multimedia Properties dialog box again, and choose the Actions tab. Note that in the Actions window, a Mouse Up trigger is listed, and the action is "Play Media (Acrobat 6 or Later Compatible)". Highlight the Action, click the Edit button below. You now see the "Play Media (Acrobat 6 or Later Compatible)" dialog box. At the top of this dialog box there is a menu "Operation to Perform". The operations are

-  Play
-  Stop
-  Pause
-  Resume
-  Play from beginning
-  Custom JavaScript

The operation should be set to Play from Beginning, the default operation for a new screen annotation. The other operations of Play, Stop, Pause, and Resume can be used with buttons so that the user can pause and resume the media clip.

In this chapter, however, we are most interested in the Custom JavaScript option, and you will learn how to play a media clip and to add event listeners.

When using a button to play a media clip, there are two possible actions to be selected from the Button Properties dialog box.

-  Play Media (Acrobat 6 or Later Compatible)
-  Run a JavaScript

In the first case, a media clip can be played by setting the UI to play the selected clip, or by executing a custom JavaScript the rendition to be used. In second case, that of Run a JavaScript, is used when setting the action of a form field, such as a button. Both these cases are discussed in the paragraphs that follow.

Controlling multimedia through a rendition action
-------------------------------------------------

In this section, you will learn how to write JavaScript to play a media clip from a screen annotation in the context of a *rendition action*.

#. To control the Play Media option using a JavaScript rendition action
#. Create a screen annotation by embedding a movie into your document, as described on `To embed a movie or sound file in a document <JS_Dev_DigitalMedia.html#87086>`__.
#. In the Actions tab of the Multimedia Properties dialog box, click **Play Media (Acrobat 6 or Later Compatible)** or a mouse up trigger, and click the **Edit** button.
#. In the Play Media (Acrobat 6 or Later Compatible) dialog box, select **Custom JavaScript** from the Operations to Perform menu, and click the **Specify JavaScript** button.
#. In the Select Rendition dialog box, choose the rendition you want to control, and click **Next**. The JavaScript editor appears with the following text:

::

          /* var player = */ app.media.openPlayer({
              /* events, settings, etc. */
          });

This is a rough template for starting your clip, the text suggests that you can define events and settings. Custom JavaScript like this is referred to as a *rendition action*.

A minimal example for playing the clip is

::

      app.media.openPlayer();

Close all dialog boxes and select the Hand tool. The movie plays when you click the screen annotation.

Additional examples follow.

#. Running openPlayer with settings and events as a rendition action

For a rendition action, the ``event`` object carries certain multimedia specific information, for example, ``event.action.annot`` is the annotation object to be used to play the media, and ``event.action.rendition`` is the rendition to be played. In this example, we set the number of times this media is to play to three, and we install some event listeners.

::

      // Get the rendition.
      var rendition = event.action.rendition;
      // Get the play settings for this rendition
      var settings = rendition.getPlaySettings();
      // Change the repeat property to 3.
      settings.repeat = 3;
   
      // Create some event listeners for this action. 
      var events = new app.media.Events(
      {
          onPlay: function() { console.println( "Playing..." ); },
          onClose: function() { console.println( "Closing..." ); },
      });
      
      // Set these into an args object, with property names expected by
      //openPlayer.
      args = { events: events, settings: settings };
      // Play the media with specified argument.
      app.media.openPlayer(args);

The ``app.media.openPlayer`` method calls ``app.media.createPlayer``, then calls the method ``MediaPlayer.open``, which, by default, begins playback of the media. In the next example, the ``createPlayer`` method is used, and playback is delayed to add in some listener events. Compare the techniques of the previous example with the next.

#. Play a clip in full screen

The script below is for a rendition action. The movie clip is played in full screen with the UI controls visible. An event listener is added that causes an alert box to appear when the clip is closed.

::

      // Get the rendition chosen in a Select Rendition dialog box.
      // We need the rendition to change its settings.
      var rendition = event.action.rendition;
      // Get the play settings for this rendition
      var settings = rendition.getPlaySettings();
      // Make the window type to be full screen.
      settings.windowType=app.media.windowType.fullScreen;
      // Play the clip only once.
      settings.repeat = 1;
      // Show the UI of the player
      settings.showUI = true;
      // Form an args object to pass to createPlayer.
      var args = { settings: settings };
   
      // Get the returned MediaPlayer object
      var player = app.media.createPlayer(args);
      // Use the MediaPlayer object to add an onClose event.
      player.events.add({ onClose: function() { 
          app.alert("That's the end of the   clip. Any questions?") 
      } });
      // Now, open the player, which begins playback, provided
      // player.settings.autoPlay is true (the default). If
      // player.settings.autoPlay is false, we would have to
      // use player.play();
      player.open()

Controlling multimedia with a Run a JavaScript action
-----------------------------------------------------

Controlling a multimedia clip with a Run a JavaScript action is similar to a rendition action, except the multimedia events, ``event.action.rendition`` and ``event.action.annot``, are not defined. The rendition and screen annotation need to be specified, and passed as part of the argument to the ``openPlayer`` or ``createPlayer`` method.

When working with a Run a JavaScript action, the methods ``app.media.getAnnot`` and ``app.media.getAnnots`` are fundamental for acquiring a particular screen annotation or an array of screen annotations; the method ``app.media.getRendition`` is used to get the rendition of the selected clip. Some of these methods are illustrated by the following example.

#. Playing a rendition in a screen annotation from a form button

This script is for a Run a JavaScript action of a form button. It gets a media clip and plays it in a screen annotation.

::

      // Get the screen annotation with a title of myScreen
      var annot= this.media.getAnnot
          ({ nPage: 0,cAnnotTitle: "myScreen" });
      // Get the rendition present in this document with a rendition name of
      // myClip
      var rendition = this.media.getRendition("myClip");
      // Get the set of default settings for this rendition.
      var settings = rendition.getPlaySettings();
      // Play the clip in a docked window.
      settings.windowType=app.media.windowType.docked;
      // Set the arguments to be passed to openPlayer, the rendition, the
      //annotation and the settings.
      var args = { 
          rendition: rendition, 
          annot: annot, 
          settings: settings 
      };
      // Open the the media player and play.
      app.media.openPlayer( args );

The above example assumes that ``myClip`` is embedded in the document. In the next two examples, techniques for playing media from the local hard drive and from a URL are illustrated.

#. Playing a media clip from a URL

This example references a media clip on the Internet and plays it in a floating window.

::

      var myURLClip = "http://www.example.com/myClips/myClip.mpg";
      var args = {
              URL: myURLClip,
              mimeType: "video/x-mpg",    
              doc: this,
              settings:
              {
              players: app.media.getPlayers("video/x-mpg"),
                      windowType: app.media.windowType.floating,
                      data: app.media.getURLData( myURLClip,"video/x-mpg" ),
                      floating: { height: 400, width: 600 }
          }
      }
      var settings = app.media.getURLSettings(args)
      args.settings = settings;
      app.media.openPlayer(args);

Here is the same example with the media on the local hard drive.

#. Playing a media clip from a file

The problem with playing a file from the local hard drive is locating it. This example assumes the media clip is in the same folder as the document.

::

      // Get the path to the current folder.
      var folderPath = /.*//i.exec(this.URL);
      // Form the path to the clip.
      var myURLClip = folderPath+"/myClip.mpg";
      var args = {
          URL: myURLClip,
          mimeType: "video/x-mpg",
          doc: this,
          settings:
              {
              players: app.media.getPlayers("video/x-mpg"),
              windowType: app.media.windowType.floating,
              data: app.media.getURLData( myURLClip,"video/x-mpg" ),
              floating: { height: 400, width: 600 }
          }
      }
      var settings = app.media.getURLSettings(args)
      args.settings = settings;
      app.media.openPlayer(args);

Playing sound clips is handled in the same way, as the following example shows.

#. Playing a sound clip from a URL.

::

      var myURLClip = "http://www.example.com/myClips/dream.mp3";
      var args = {
          URL: myURLClip,
          mimeType: "audio/mp3",
          doc: this,
          settings: {
              players: app.media.getPlayers("audio/mp3"),
              windowType: app.media.windowType.floating,
              floating: {height: 72, width: 128},
              data: app.media.getURLData(myURLClip, "audio/mp3"),
                      showUI: true
          },
      };
      var settings = app.media.getURLSettings(args);
      args.settings = settings;
      app.media.openPlayer(args);

.. raw:: html

   <a name="69782"></a>

Adding and editing renditions
-----------------------------

A ``rendition`` object contains information needed to play a media clip, including embedded media data (or a URL), and playback settings, and corresponds to the rendition in the Acrobat user interface. When you add a movie or sound clip to your document, a default rendition is listed in the Multimedia Properties dialog box and is assigned to a ``Mouse`` ``Up`` action. In case the rendition cannot be played, you can add other renditions or edit the existing ones.

If you add alternate versions of the media clip, these become new renditions that can serve as alternates in case the default choice cannot be played. It is then possible to invoke the ``rendition`` object's ``select`` method to obtain the available media players for each rendition.

There are several types of settings that can be specified for a given rendition: media settings, playback settings, playback location, system requirements, and playback requirements. You can use JavaScript to customize some of these settings through the ``rendition`` object. There are several properties to which you have read-only access when editing a rendition. These are listed in the following table.

Rendition object properties

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - altText
     - The alternate text string for the rendition.

   * - doc
     - The document that contains the rendition.

   * - fileName
     - Returns the file name or URL of an external media clip.

   * - type
     - A ``MediaRendition`` object or a rendition list.

   * - uiName
     - The name of the rendition.

In addition to these properties, you can invoke the ``rendition`` object's ``getPlaySettings`` method, which returns a ``MediaSettings`` object. As you learned earlier in `Specifying playback settings <JS_Dev_DigitalMedia.html#33983>`__, you can adjust the settings through this object. You can also invoke its ``testCriteria`` method, with which you can test the rendition against any criteria specified in the PDF file, such as minimum bandwidth.

.. raw:: html

   <a name="68889"></a>

Setting multimedia preferences

In general, you can choose which media player should be used to play a given clip, determine whether the Player Finder dialog box is displayed, and set accessibility options for impaired users (these include subtitles, dubbed audio, or supplemental text captions).

In addition, you can use JavaScript to access or customize multimedia preferences. For example, the ``doc.media`` object's ``canPlay`` property may be used to indicate whether multimedia playback is allowed for the document. The ``MediaSettings`` object's ``bgColor`` property can be used to specify the background color for the media player window. Examples of each are given below:

::

      var canPlay = doc.media.canPlay;
      if (canPlay.no) {
          // Determine whether security settings prohibit playback:
          if (canPlay.no.security) {
              if (canPlay.canShowUI)
                  app.alert("Security prohibits playback.");
              else
                  console.println("Security prohibits playback.");
          }
      }
      
      // Set the background color to red:
      settings.bgColor = ["RGB", 1, 0, 0];
