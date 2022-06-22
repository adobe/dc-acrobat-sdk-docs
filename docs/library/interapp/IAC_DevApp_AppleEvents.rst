******************************************************
Using Apple Events
******************************************************

You can use several objects and events to develop Acrobat applications for Mac OS. Some of the objects and events in the Apple event registry are supported, as well as Acrobat-specific objects and events. Acrobat supports the following categories of Apple events:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Category
     - Description

   * - Required events
     - Events that the Finder sends to all applications.

   * - Core events
     - Events that are common to a wide variety of applications, though not universally applicable to all applications.

   * - Acrobat-specific events  E
     - ents that are specific to Acrobat. 

   * - Miscellaneous Apple events
     - Events that are not in one of the preceding categories.

When programming for Mac OS, use AppleScript with Acrobat whenever possible. For Apple events that are not available through AppleScript, handle them with C or other programming languages.

* For information on Apple events supported by the Acrobat Search plug-in, see the `PDF Library documentation <https://www.adobe.com/go/pdflibrary>`__ . 
* For more information on Apple events and scripting, see *Inside Macintosh: Interapplication Communication* , ISBN 0-201-62200-9, Addison-Wesley. The content of this document is currently available at http://developer.apple.com/documentation/mac/IAC/IAC-2.html .
* For more information on the AppleScript language, see the *AppleScript Language Guide* , ISBN 0-201-40735-3, Addison-Wesley. The content of this document is currently available at http://developer.apple.com/documentation/AppleScript/Conceptual/AppleScriptLangGuide/ .
* For more information on the core and required Apple events, see the Apple event registry for Mac OS. This file is in the AppleScript 1.3.4 SDK, which is currently available at http://developer.apple.com/sdk/ .
