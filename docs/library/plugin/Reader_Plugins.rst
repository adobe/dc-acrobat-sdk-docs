******************************************************
Reader Plugins
******************************************************

The Acrobat core and extended APIs allow you to write plugins that integrate with Adobe Reader. For details, see this guide and the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Reader enablement
=================

Any plugins written for Adobe Reader must be Reader-enabled, which means that you will need to obtain permission and licensing from Adobe Systems.

When developing a Reader-enabled plugin, follow the steps described in ` <../../../../../Common/docs_fm/PluginAppsDeveloperGuide/Plugins_ReaderPlug.html#11144>`__ to make specific changes to your plugin code in order for Adobe Reader to recognize and load it. For information on obtaining a license key for enabling your Reader plugin, see the site for the Acrobat DC Reader Integration Key License (RIKLA) Program at http://www.adobe.com/go/rikla_program.

A Reader-enabled plugin is a dynamically linked extension to Adobe Reader created using C/C++ APIs, and can be developed for any supported platform:

-  DLLs on Windows (using the extension ``.api`` )
-  Shared libraries (code fragments) on Mac OS X

.. note::

   Don't confuse *Reader enablement* with *rights-enabled PDF*. Reader enablement enables a plugin to work with Adobe Reader. A rights-enabled PDF turns on additional user features in Adobe Reader, such as the ability to save forms offline.

APIs available for Adobe Reader
===============================

Host Function Tables (HFTs) are tables of function pointers, essentially providing a means by which plugins call methods in Adobe Reader. The following HFTs are available for development with Adobe Reader:

-  ``AcroSupport``
-  ``AcroView``
-  ``AcroViewSweetPea``
-  ``ASExtra``
-  ``Catalog``
-  ``Cos``
-  ``PDModel``
-  ``ASExtra``
-  ``PDSRead``
-  ``AcroSupport``
-  ``Core``
-  ``Forms``
-  ``TTS``
-  ``DigSigHFT``
-  ``AcroHLS``
-  ``PubSecHFT``
-  ``Search``
-  ``WebLink``

Additional details reside in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__. 
