******************************************************
Apple Events
******************************************************

Apple events can be used from programming languages such as C or from AppleScript. Because AppleScript is more straightforward, it is recommended for use with Distiller.

Distiller supports the ``application`` object and the following Apple events:

-  ``Distill``
-  ``run``
-  ``quit``

Objects
=======

`application <Distiller_Mac.html#90916>`__

.. raw:: html

   <a name="90916"></a>

application
-----------

The top-level scripting object.

**Elements**

* ``Document``
* ``Window``

**Properties**

+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+
| Property              | Class                 | Description                                                                                     |
+=======================+=======================+=================================================================================================+
|                       | Unicode text [r/o]    | PostScript interpreter version; for example, "3016.102".                                        |
|                       |                       |                                                                                                 |
|    postScriptVersion  |                       |                                                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+
|                       | Unicode text [r/o]    | Three-character language code for the Distiller user interface (for example, "ENU" is English). |
|                       |                       |                                                                                                 |
|    locale             |                       |                                                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+
|                       | Boolean [r/o]         | True if Distiller is the active application.                                                    |
|                       |                       |                                                                                                 |
|    frontmost          |                       |                                                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+
|                       | Unicode text [r/o]    | Name of the application.                                                                        |
|                       |                       |                                                                                                 |
|    name               |                       |                                                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+
|                       | Unicode text [r/o]    | Version of the application.                                                                     |
|                       |                       |                                                                                                 |
|    version            |                       |                                                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------+

Events
======

* `Distill <Distiller_Mac.html#75815>`__
* `quit <Distiller_Mac.html#12807>`__
* `run <Distiller_Mac.html#39237>`__

.. raw:: html

   <a name="75815"></a>

Distill
-------

Distills a file.

**Syntax**

::

   Distill 
   sourcePath UnicodeText [destinationPath UnicodeText]

       [adobePDFSettingsPath UnicodeText]

**Parameters**


.. _section-1:


 

+-----------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                   | POSIX path to the input file (the file to be distilled).                                                         |
|                                   |                                                                                                                  |
|    sourcePath                     |                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                   | POSIX path to the output file. If not specified, the PDF file is generated in the same folder as the input file. |
|                                   |                                                                                                                  |
|    destinationPath                |                                                                                                                  |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                   | Either the POSIX path to the Adobe PDF Settings file, or the name of one of the settings files in Distiller.     |
|                                   |                                                                                                                  |
|    adobePDFSettingsPath           | If not specified, the settings file selected in the application is used.                                         |
+-----------------------------------+------------------------------------------------------------------------------------------------------------------+

**Returns**

A Boolean value indicating status. If ``true`` , the command succeeded.

**Examples**

These examples assume the presence of an appropriate *tell – end* construct, for example:

::

     tell application "Acrobat Distiller 8.0"
              [Your code] 
      end tell

Ensure each command is on one line without line breaks. Some of the following examples appear on two lines solely to fit the page.

::

     Distill sourcePath "/hello.ps"
     Distill sourcePath "/hello.ps" destinationPath "/Users/username/Desktop"
               adobePDFSettingsPath "Standard"
     Distill sourcePath "/hello.ps" adobePDFSettingsPath "/Library/
               Application Support/Adobe PDF/Settings/"

The following example uses application properties to determine which settings file is used:

::

     set distSetting to "Standard"
      if (postScriptVersion as string) is equal to "3015.102" then
              set distSetting to "High Quality"
      end if
      if locale is "CHT" then
              set distSetting to "Smallest File Size"
      end if
      Distill sourcePath "/hello.ps" adobePDFSettingsPath distSetting

.. raw:: html

   <a name="12807"></a>

quit
----

Terminates the Distiller program.

**Syntax**

::

   quit 

.. raw:: html

   <a name="39237"></a>

run
---

Launches the Distiller program and invokes its standard startup procedures.

**Syntax**

::

   run 

