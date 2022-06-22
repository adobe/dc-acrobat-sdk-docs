
*********************************
Adobe PDF Creation Settings
*********************************

The Adobe PDF Creation Settings file format provides a means of storing settings that affect the creation of PDF files. It is based on the settings (``.joboptions`` ) files that have been used in all versions of Acrobat Distiller. The format has been expanded so that other applications can share the files and store private settings.

Terminology
===========

Adobe PDF Creation Settings files have an extension of ``.joboptions`` and have often been called *job options* files (referring to the Distiller *job* that converts PostScript to PDF). Creative Suite applications refer to the files as *presets* . This document refers to the files as *settings files* .

The individual PDF creation settings themselves are represented in the settings files as *key-value pairs.* The key is a name and the value can be any data type supported by PostScript or PDF. In previous versions of *Acrobat Distiller Parameters* , the settings are referred to as *parameters.* This document refers to them as *settings.*

.. raw:: html

   <a name="18721"></a>

Organization of settings files
==============================

A PDF creation settings file contains a number of *settings.* (In the context of Acrobat Distiller, these settings are also referred to as *parameters.* ) Each setting has a name, called its *key* , and a *value* , which is data of a defined type. All data types conform to PostScript and PDF syntax, as described in the *PostScript Language Reference* and the *PDF Reference.* All applications in the Adobe Creative Suite, version 2.0 and later, as well as Acrobat Distiller, can read and write settings files.

The settings file is a text file, represented in a format that is recognized by a PostScript interpreter. At the highest level, the file consists of two *dictionaries* that contain key-value pairs representing the settings. The first dictionary is followed by the ``setdistillerparams`` operator and the second is followed by the ``setpagedevice`` operator.

::

      << 
         key-value pairs representing settings
      >> setdistillerparams
      << 
         key-value pairs representing settings
      >> setpagedevice

``setdistillerparams`` is a Distiller-specific PostScript operator; that is, it may not be recognized by standard PostScript interpreters. The dictionary that is an operand to ``setdistillerparams`` contains most of the key-value pairs representing the settings described in this document. For example:

::

     <<
              /ASCII85EncodePages false
              /AllowTransparency false
              /AutoRotatePages /None
              /Binding /Left
              ...
     >> setdistillerparams

``setpagedevice`` is a PostScript operator that allows specifying page device parameters (see the *PostScript Language Reference* for more information). A small number of settings (``HWResolution`` and ``PageSize`` ) are specified in the ``setpagedevice`` dictionary. Unless otherwise specified, this document refers to settings in the ``setdistillerparams`` dictionary.

.. note::

   Acrobat Distiller has the ability to process ``setdistillerparams`` operators that appear in PostScript files that it is processing. For example, image compression settings can be changed for specific images. See `How Distiller processes PostScript files <PDF_Create_Principles.html#45049>`__ for more information.

.. raw:: html

   <a name="90851"></a>

Namespaces
==========

Prior to Distiller 7.0 and Creative Suite 2.0, all parameters were specified at the root level of the ``setdistillerparams`` dictionary and were publicly available to Distiller and other applications that used the file.

The concept of *namespaces* has been introduced to allow settings that are private to one or more applications. Each namespace is conceptually separate, which allows multiple applications to define keys with the same name but different meanings.

A single namespace is represented as an entry whose key is ``Namespace`` and whose value is an array of three required strings that represent the following items, in this order:

-  The *creator* of the namespace
-  The *name* of the namespace
-  The *version number* of the namespace

The following example represents the Common namespace, version 1.0.

::

     /Namespace [ (Adobe) (Common) (1.0) ] 

The version number makes it possible for settings to be added to a namespace or for the values of existing settings to change. In the future, a file might also contain the following code, which would have additional entries not part of the original set.

::

     /Namespace [ (Adobe) (Common) (2.0) ] 

Applications not supporting version 2.0 would ignore them, while newer applications could use them.

.. note::

   The specification allows more than three elements to be stored in the array. It would be possible to refine namespaces further, as in the following example.

::

     /Namespace [ (Adobe) (CreativeSuite) (2.0) (Professional) ] 

Common namespace
----------------

All settings supported by Distiller 7.0 and earlier, and documented in past editions of *Acrobat Distiller Parameters* , are considered to be in the ``Common`` namespace.

-  Some settings are applicable to Distiller only (for example, because they make sense only in the context of conversion from PostScript to PDF).
-  Other settings have more general applicability, and are supported by one or more of the Creative Suite applications (or may be supported in the future), as indicated in the reference sections of this document.
-  Historically, some settings have been provided for specialized use by certain customers and/or OEMs. They do not appear in the user interface nor in preset files provided by Adobe and are expected to be used in highly customized and controlled environments. They are not intended for general use.

The ``Namespace`` entry appears in the same dictionary as all the other settings defined for that namespace. Therefore, an entry for the ``Common`` namespace may appear in the top-level dictionary in a settings file, as in the following example:

::

     <<
              /ASCII85EncodePages false
              /AllowTransparency false
              /AutoRotatePages /None
              /Binding /Left
              /Namespace [ (Adobe) (Common) (1.0) ] 
              ...
      >> setdistillerparams

In the top-level dictionary, the ``Namespace`` setting is optional. All settings are assumed to be part of the ``Common`` namespace. The ``Namespace`` key is required in the dictionaries in the ``OtherNamespaces`` array, discussed below.

Othernamespaces
----------------

The ``OtherNamespaces`` entry is used to define namespaces other than the ``Common`` namespace. Its value is an array consisting of one or more dictionaries representing namespaces. Each of the dictionaries must contain the ``Namespace`` key that identifies the namespace, as well as the settings that are part of the namespace.

Three namespaces have been defined to support Creative Suite 2.0:

*CreativeSuite* (version 2.0): Contains settings that are used by one or more of the suite applications and are not recognized by Distiller.

*InDesign* (version 4.0): contains settings supported by InDesign alone.

The ``OtherNamespaces`` entry can also be used by third parties and OEMs to place their dictionary of private settings.

Here is an example of the ``OtherNamespaces`` entry. It contains two namespaces: ``InDesign`` and ``CreativeSuite`` :

::

     /OtherNamespaces [
          <<
              /AsReaderSpreads false
              /CropImagesToFrames true
              /ErrorControl /WarnAndContinue
              /FlattenerIgnoreSpreadOverrides false
              /IncludeGuidesGrids false
              /IncludeNonPrinting false
              /IncludeSlug false
              /Namespace [
                  (Adobe)
                  (InDesign)
                  (4.0)
              ]
              /OmitPlacedBitmaps false
              /OmitPlacedEPS false
              /OmitPlacedPDF false
              /SimulateOverprint /Legacy
          >>
          <<
              /AddBleedMarks false
              /AddColorBars false
              /AddCropMarks false
              /AddPageInfo false
              /AddRegMarks false
              /ConvertColors /ConvertToCMYK
              /DestinationProfileName ()
              /DestinationProfileSelector /DocumentCMYK
              /Downsample16BitImages true
              /FlattenerPreset <<
              /PresetSelector /MediumResolution
              >>
              /FormElements false
              /GenerateStructure false
              /IncludeBookmarks false
              /IncludeHyperlinks false
              /IncludeInteractive false
              /IncludeLayers false
              /IncludeProfiles false
              /MultimediaHandling /UseObjectSettings
              /Namespace [
                  (Adobe)
                  (CreativeSuite)
                  (2.0)
              ]

Applications that do not recognize the ``OtherNamespaces`` entry will ignore its contents but should preserve the contents when saving the settings file (as they should preserve all settings); see `Reading and writing settings files <PDF_Create_Principles.html#13147>`__.

.. raw:: html

   <a name="18498"></a>

Predefined settings files
=========================

Adobe provides a set of predefined PDF settings files or *presets* that you can use for common scenarios. By means of the user interface (UI) of Acrobat Distiller and the Creative Suite applications, you can create and modify new PDF settings files based on the presets. (You should not actually modify the presets themselves.)

The reference chapters, `Common PDF Settings <PDF_Create_CommonSettings.html#80362>`__ and `Other Namespaces <PDF_Create_NewNamespaces.html#69127>`__, indicate the UI controls, if any, that correspond to each setting. See the Help for these products for detailed information about working with settings files in the user interface.

You can also edit settings files in a text editor. This gives you greater control, because some settings cannot be modified in the UI. However, it also increases the chances of having a settings file that contains syntactic or semantic errors. `How applications handle incorrect settings files <PDF_Create_Principles.html#incorrect%20.joboptions%20files>`__ explains how Adobe applications deal with errors.

Where presets are installed
---------------------------

When a user installs Distiller or the Creative Suite applications, a group of presets are installed on the user's system. These presets can be shared between applications. `System preset information <PDF_Create_Principles.html#26306>`__ describes in detail how applications share information about presets.

Each application displays certain presets by default in its user interface. These are stored in a Settings directory, which is typically at these locations:

* Windows: C:Documents and SettingsAll UsersDocumentsAdobe PDFSettings
* Mac OS: /Library/Application Support/Adobe PDF/Settings/

.. note::

   The paths specified here represent typical installations. They may differ for specific languages or versions of the products.

Another group of presets is installed in an Extras directory. These can be loaded as needed and typically appear in these locations:

* Windows: C:Documents and SettingsAll UsersDocumentsAdobe PDFExtras
* Mac OS: /Library/Application Support/Adobe PDF/Extras/

The table `Common settings files <PDF_Create_Principles.html#43899>`__ lists presets that are installed in the Common directory. The table `Extra settings files <PDF_Create_Principles.html#67530>`__ lists presets that are installed in the Extras directory.

In addition to its file name, each preset file has a set of *display names* , one for each language, that are displayed in the application user interface. The first column of the following tables shows the preset file name (minus the ``.joboptions`` extension), as well as the English display name if different.

Specific applications need not display all presets in their user interface. The third column of each table lists the applications for which the file is visible. For details on how applications show or hide presets, see `System preset information <PDF_Create_Principles.html#26306>`__).


 

+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| Common settings files  |                                                                                                                                                                                                                                                                                                                                                       |                       |
+========================+=======================================================================================================================================================================================================================================================================================================================================================+=======================+
| | File name/           | Description                                                                                                                                                                                                                                                                                                                                           | Visible to            |
| | English display name |                                                                                                                                                                                                                                                                                                                                                       |                       |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| High Quality Printing  | Creates PDF documents for quality printing on desktop printers and proofers. Created PDF documents can be opened with Acrobat and Adobe Reader 5.0 and later.                                                                                                                                                                                         | All                   |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| Smallest File Size     | Creates PDF documents best suited for on-screen display, e-mail, and the Internet. Created PDF documents can be opened with Acrobat and Adobe Reader 6.0 and later.                                                                                                                                                                                   | All                   |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| Oversized Pages        | Creates PDF documents suitable for reliable viewing and printing of engineering drawings larger than 200 x 200 inches. Created PDF documents can be opened with Acrobat and Adobe Reader 7.0 and later.                                                                                                                                               | Distiller             |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| Press Quality          | Creates PDF documents best suited for high quality prepress printing. Created PDF documents can be opened with Acrobat and Adobe Reader 5.0 and later.                                                                                                                                                                                                | All                   |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| PDFX1a 2001            | Creates PDF documents that are to be checked or must conform to PDF/X-1a:2001, an ISO standard for graphic content exchange. Created PDF documents can be opened with Acrobat or Adobe Reader 4.0 and later.                                                                                                                                          | All                   |
|                        |                                                                                                                                                                                                                                                                                                                                                       |                       |
| PDF/X-1a:2001          |                                                                                                                                                                                                                                                                                                                                                       |                       |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| PDFX3 2002             | Creates PDF documents that are to be checked or must conform to PDF/X-3:2002, an ISO standard for graphic content exchange. Created PDF documents can be opened with Acrobat or Adobe Reader 4.0 and later.                                                                                                                                           | All                   |
|                        |                                                                                                                                                                                                                                                                                                                                                       |                       |
| PDF/X-3:2002           |                                                                                                                                                                                                                                                                                                                                                       |                       |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| Standard               | Creates PDF documents suitable for reliable viewing and printing of business documents. Created PDF documents can be opened with Acrobat and Adobe Reader 6.0 and later. With a few exceptions (see `Settings descriptions <PDF_Create_CommonSettings.html#36016>`__), these settings match the default values for all the settings.                  | Distiller             |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| PDFA1b 2005 CMYK       | Creates PDF documents that are to be checked or must conform to PDF/A-1b, an ISO standard for the long-term preservation (archival) of electronic documents. For more information on creating PDF/A compliant PDF documents, please refer to the Acrobat User Guide. Created PDF documents can be opened with Acrobat and Adobe Reader 5.0 and later. | Distiller             |
|                        |                                                                                                                                                                                                                                                                                                                                                       |                       |
| PDF/A-1b:2005 (CMYK)   |                                                                                                                                                                                                                                                                                                                                                       |                       |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| PDFA1b 2005 RGB        | Same description as PDFA1b 2005 CMYK.                                                                                                                                                                                                                                                                                                                 | Distiller             |
|                        |                                                                                                                                                                                                                                                                                                                                                       |                       |
| PDF/A-1b:2005 (RGB)    | See notes following this table.                                                                                                                                                                                                                                                                                                                       |                       |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------+

The ``PDFA1b 2005 CMYK.joboptions`` and ``PDFA1b 2005 RGB.joboptions`` files are identical except for the /ColorConversionStrategy and /PDFXOutputIntentProfile entries. The ``PDFA1b 2005 CMYK.joboptions`` file contains lines,

::

         /ColorConversionStrategy /CMYK 
          /PDFXOutputIntentProfile (U.S. Web Coated (SWOP) v2) 

while ``PDFA1b 2005 RGB.joboptions`` contains the lines,

::

         /ColorConversionStrategy /sRGB 
          /PDFXOutputIntentProfile (sRGB IEC61966-2.1) 
   

.. _section-1:


 

+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| Extra settings files     |                                                                                                                                                                                                                                                                                                                   |                        |
+==========================+===================================================================================================================================================================================================================================================================================================================+========================+
| | File name/             | Description                                                                                                                                                                                                                                                                                                       | Visible to             |
| | English display name   |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX1a 2003              | Creates PDF documents that are to be checked or must conform to PDF/X-1a:2003, an ISO standard for graphic content exchange. For more information on creating PDF/X-1a compliant PDF documents, please refer to the Acrobat Help. Created PDF documents can be opened with Acrobat or Adobe Reader 5.0 and later. | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-1a:2003            |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX3 2003               | Creates PDF documents that are to be checked or must conform to PDF/X-3:2003, an ISO standard for graphic content exchange. For more information on creating PDF/X- 3 compliant PDF documents, please refer to the Acrobat Help. Created PDF documents can be opened with Acrobat or Adobe Reader 5.0 and later.  | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-3:2003             |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX1a 2001 JPN          | Japanese version of ``PDFX1a 2001``                                                                                                                                                                                                                                                                               | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-1a:2001 (Japan)    |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX1a 2003 JPN          | Japanese version of ``PDFX1a 2003``                                                                                                                                                                                                                                                                               | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-1a:2003 (Japan)    |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX3 2002 JPN           | Japanese version of ``PDFX3 2002``                                                                                                                                                                                                                                                                                | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-3:2002 (Japan)     |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| PDFX3 2003 JPN           | Japanese version of ``PDFX3 2003``                                                                                                                                                                                                                                                                                | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| PDF/X-3:2003 (Japan)     |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| Rich Content PDF         | Creates accessible Adobe PDF documents that include tags, hyperlinks, bookmarks, interactive elements, and layers. Created PDF documents can be opened with Acrobat and Adobe Reader 7.0 and later.                                                                                                               | All except Illustrator |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| MAGAZINE Ad 2006 JPN     | Creates PDF documents customized for Japanese Magazine Advertisement. The settings are defined by Japan Magazine Publisher Association Digitizing Promotional Council. Created PDF documents can be opened with Acrobat and Adobe Reader 4.0 and later.                                                           | All                    |
|                          |                                                                                                                                                                                                                                                                                                                   |                        |
| MAGAZINE Ad 2006 (Japan) |                                                                                                                                                                                                                                                                                                                   |                        |
+--------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------------+

.. raw:: html

   <a name="26306"></a>

System preset information
-------------------------

To facilitate the sharing of settings files, Adobe applications use a mechanism, described in this section, to keep track of the following information:

-  The path where the common Settings folder is located.

.. warning::

   The Extras folder is in a location parallel to the Settings folder.

-  The display name (the name that should appear in the user interface) that corresponds to each settings (``.joboptions`` ) file in the Settings directory. For each language for which the application is localized, there is a display name.
-  Visibility information about each settings file (that is, whether it should appear in the application's user interface). Settings files that are hidden with respect to an application are said to be *cloaked* . There is visibility information for each application.

This information is equivalent for Windows and Mac OS but is stored in different ways:

-  In Windows, the information is in the system registry.
-  In Mac OS, the information is in a preference file.

On installation or initialization, Adobe applications instantiate this information if it does not exist. Applications should never assume hard-coded paths but use system calls to obtain the information.

The following sections contain system-specific details.

Windows
~~~~~~~

In Windows, the top-level registry entry is this setting:

::

     My ComputerHKEY_LOCAL_MACHINESOFTWAREAdobePDF Settings

It contains these key items:

-  ``(Default)`` : The full UTF-16 path of the Adobe PDF Settings folder
-  A set of key entries for each language (localization). These are ``CHS`` , ``CHT`` , ``DAN`` , ``DEU`` , ``ENU`` , ``ESO`` , ``FRA`` , ``ITA`` , ``JPN`` , ``KOR`` , ``NLD`` , ``NOR`` , ``PTB`` , ``SUO`` , and ``SVE`` . For each of these, the ``(Default)`` entry is ignored, and the rest of these entries map the name of a settings file (minus the ``.joboptions`` extension) to the display name for that localization.
-  Optionally a ``ShowHide`` entry that specifies, for each application, which settings files are hidden (cloaked).

The display names (as with all registry strings) are stored as UTF-16 strings. They may be represented as ASCII or in hexadecimal where ASCII is not suitable. The following example shows the entry for Japanese:

::

     [HKEY_LOCAL_MACHINESOFTWAREAdobePDF SettingsJPN]
              "Standard"=hex:19,6a,96,6e
              "High Quality Print"=hex:d8,9a,c1,54,ea,8c,70,53,37,52
              "Press Quality"=hex:d7,30,ec,30,b9,30,c1,54,ea,8c
              "Smallest File Size"=hex:00,67,0f,5c,d5,30,a1,30,
                      a4,30,eb,30,b5,30,a4,30,ba,30
              "PDFX1a 2001"="PDF/X-1a:2001"
              "PDFX3 2002"="PDF/X-3:2002"
              "PDFA1b 2005 CMYK"="PDF/A-1b:2005 (CMYK)"

Mac OS
~~~~~~

In Mac OS, the preferences file is ``com.adobe.AdobePDFSettings.plist`` . It is typically stored in ``/Library/Preferences/`` . (Developers should use the Mac OS APIs to locate this directory rather than assuming a hard-coded path.)

This file contains a dictionary with at least the following keys:

-  ``AdobePDFSettingsPath`` : The full UTF-8 path of the Adobe PDF Settings folder.
-  ``AdobePDFSettings`` : A dictionary containing entries for each localization, where the key is one of the language codes specified above, and the value is an array consisting of pairs of strings, where the first is the file name (less ``.joboptions`` ) and the second is the display name.
-  Optionally a ``ShowHide`` key that specifies, for each application, which settings files are hidden (cloaked).

The following example shows two settings files, ``Standard`` and ``High Quality`` , that are localized for English and Spanish.

::

     <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" 
              "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
      <plist version="1.0">
      <dict>
              <key>AdobePDFSettings</key>
              <dict>
                      <key>ENU</key>
                      <array>
                              <string>Standard</string>
                              <string>Standard</string>
                              <string>High Quality</string> 
                              <string>High Quality Print</string>
                      </array>
                      <key>ESO</key> 
                      <array>
                              <string>Standard</string> 
                              <string>Estandar</string>
                              <string>High Quality</string> 
                              <string>Impresion de alta calidad</string>
                      </array>
              </dict>
              key>AdobePDFSettingsPath</key> 
              <string>/Library/Application Support/Adobe PDF/Settings/</string>
      </dict>
      </plist>


.. raw:: html

   <a name="13147"></a>

Reading and writing settings files
==================================

This section describes the behavior that Adobe applications follow when reading and writing settings files. Many of the principles described are extensions of behavior that has been employed by Distiller since its earliest use of ``.joboptions`` files.

Compatibility strategies
------------------------

Applications should provide default values for all settings that are meaningful to them and not present in the settings file. When rewriting a settings file, applications should preserve all settings:

-  Settings that are not meaningful to the application should be written out unchanged, along with meaningful settings that have not been changed by the user.
-  Settings changed by the user should have their new values saved to the file, assuming the value is of the correct type and is supported by the application.

In some cases, settings have been deprecated and replaced with new settings. Applications should recognize the deprecated versions, if possible, and use them for processing if the functionality is still available. When re-writing files containing such settings, the new variant should be written in addition to, or as a replacement for, the old setting. For an example, see `Using the compliance checking settings <PDF_Create_UsingSettings.html#83753>`__.

In some cases, different applications may use different settings for similar functionality. For example, Distiller uses settings in the ``Common`` namespace to perform color conversions. The Creative Suite applications have a larger set of options for color conversion, provided by settings in the ``CreativeSuite`` namespace. For maximum compatibility with Distiller, the Creative Suite applications write out the most closely matching Common settings when saving settings files. See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details.

How applications handle incorrect settings files
------------------------------------------------

A settings (``.joboptions`` ) file can be incorrect in two primary ways:

-  The file contains invalid PostScript syntax. PDF creation is never allowed in this case.
-  The file contains invalid types or values.

Distiller treats files containing invalid types or values in one of three ways, depending on the settings that are invalid:

-  PDF creation is not allowed in cases for which a workaround is not reasonable, given that the resulting PDF file would contain unexpected content.
-  A default value is used when the type of a setting is correct but whose incorrect value can be reasonably or predictably converted to another value that does not affect the intent. For example: an application that encounters ``/GrayImageFilter /LZWEncode`` will substitute ``/GrayImageFilter /FlateEncode`` .
-  All values are converted to defaults when there are more seriously incorrect settings, but not so severe as to require that the PDF file not be created. Many incorrect settings cause Distiller to take this course of action.

The following types of errors are defined for the Creative Suite:

-  Syntactic: The settings file contains syntactic errors (that is, invalid PostScript). A warning is generated, and PDF cannot be created using this settings file.
-  Catastrophic: Specific settings have values such that Creative Suite applications cannot allow the settings files to be used. The following setting/value combinations result in catastrophic errors:

   -  ``CompatibilityLevel`` is 1.2. Creative Suite only supports 1.3 or greater.
   -  ``CheckCompliance`` is ``[(PDF/A-1b:2005 (CMYK))]`` . Creative Suite does not support PDF/A.

-  Override: The application will use a particular value for a setting regardless of the value in the settings file. For example, Illustrator, InDesign and Photoshop always embed fonts regardless of the value of ``EmbedAllFonts`` . A warning lets the user know this is occurring.
-  Ignore: These do not generate warnings. They involve two categories of settings:

   -  The setting is irrelevant to the Creative Suite application, possibly because it involves PostScript processing.
   -  The application behaves as though the setting always has a particular value, regardless of its actual value in the settings file. For example, Creative Suite applications always treat the value of ``ConvertImagesToIndexed`` as if it were ``true`` .

.. raw:: html

   <a name="78550"></a>

How Distiller uses Adobe PDF settings
=====================================

Acrobat Distiller differs from the Creative Suite applications in that it creates PDF files by processing PostScript files. This section provides some information that is specific to the operation of Distiller.

.. note::

   Distiller also provides an API by which programmers can automate its operation. For details on automation methods, see the ` <../DistillerAPIReference/Distiller_AutomationIntro.html#90081>`__.

Distiller initialization
------------------------

Distiller initialization is controlled by the file ``distinit.ps`` , which is executed once at Distiller startup. As part of the initialization process, all of the files in the Distiller ``Startup`` folder are executed. ``Example.ps`` is one such file.

You can add as many other startup files as you want inside the ``Startup`` folder. Those files are executed by ``distinit.ps`` during initialization.

.. note::

   The files in the ``Startup`` folder are not executed in any specific order—not alphabetically, nor in any other predictable order. For that reason, it is best to add all extra initialization code to the ``Example.ps`` file to ensure that it all runs in order.

.. raw:: html

   <a name="45049"></a>

How Distiller processes PostScript files
----------------------------------------

Distiller may process one or more PostScript files during a single job:

-  The first file processed is always the Adobe PDF settings file. The ``setdistillerparams`` dictionary specifies the initial values for a number of settings. (See `Organization of settings files <PDF_Create_Principles.html#18721>`__ for details.) For any setting that is not present in the settings file, Distiller assigns its internal *default value* to that setting. `Common PDF Settings <PDF_Create_CommonSettings.html#80362>`__," lists the default values for all settings.
-  The prologue file (``prologue.ps`` ) is processed if present and the value of the ``UsePrologue`` setting is ``true`` in the settings file.
-  The main PostScript file is processed.
-  The epilogue file (``epilogue.ps`` ) is processed if present and the value of the ``UsePrologue`` setting is ``true`` in the settings file.

Distiller contains a PostScript 3 interpreter with two Distiller-specific operators:

-  *setdistillerparams* : Attempts to set one or more Distiller parameters (settings). Its operand is a dictionary with one or more key-value pairs, for example:

::

         <</CompressPages true>> setdistillerparams

Where the value of a key is another dictionary, provide the keys you want to set in that dictionary. For example:

::

         <</AutoFilterGrayImages true /GrayACSImageDict <<
           /QFactor 0.25 /HSamples [1 1 1 1] /VSamples [1 1 1 1]>>
           >> setdistillerparams

-  *currentdistillerparams* : Returns a dictionary containing key-value pairs for all Distiller parameters (settings). Each execution of this operator allocates and returns a new dictionary.

Where the value of a key is another dictionary, ``currentdistillerparams`` returns the key-value pairs in that dictionary.

To enable PostScript files containing the ``currentdistillerparams`` or ``setdistillerparams`` operators to be used on PostScript devices such as printers that do not implement these operators, you must add the following definitions to the beginning of the file:

::

     /currentdistillerparams where {pop}
      {userdict /currentdistillerparams {1 dict} put} ifelse
      /setdistillerparams where {pop}
      {userdict /setdistillerparams {pop} put} ifelse

This PostScript code sequence uses the existing ``currentdistillerparams`` and ``setdistillerparams`` , if present. If not, it defines ``currentdistillerparams`` to return an empty one-element dictionary, and ``setdistillerparams`` to be a NULL operation.

PostScript language programs that use these operators must not assume that any particular key is present in the dictionary returned by ``currentdistillerparams`` , or that ``setdistillerparams`` has any particular side effects.

.. raw:: html

   <a name="68813"></a>

Modifying settings during the job
---------------------------------

The prologue, PostScript, and epilogue files may themselves contain ``setdistillerparams`` operators that override the initial values of the settings as specified in the settings file (or through the default values). The parameters remain in effect for the duration of the current save level. (See Section 3.7.3 in the *PostScript Language Reference* for a discussion of the save and restore operators.) At the end of the current job, Distiller restores the values to those present before the job began.

Settings specified in the settings file cannot be modified if the ``LockDistillerParams`` setting is ``true`` . In addition, a number of settings cannot be modified during a job using ``setdistillerparams`` . Their values are always taken from the settings file or the default values:

Settings that cannot be modified during a job

.. _section-2:


 

+-------------------------+----------------------------+-----------------------------+
| AlwaysEmbe              | JPEG2000ColorACSImageDict  | PDFX1aCheck                 |
+-------------------------+----------------------------+-----------------------------+
| AutoRotatePages         | JPEG2000ColorImageDict     | PDFX3Check                  |
+-------------------------+----------------------------+-----------------------------+
| Binding                 | JPEG2000GrayACSImageDict   | PDFXCompliantPDFOnly        |
+-------------------------+----------------------------+-----------------------------+
| CheckCompliance         | JPEG2000GrayImageDict      | PDFXNoTrimBoxError          |
+-------------------------+----------------------------+-----------------------------+
| ColorConversionStrategy | LockDistillerParams        | PDFXTrimBoxtoMediaBoxOffset |
+-------------------------+----------------------------+-----------------------------+
| CompatibilityLevel      | MaxSubsetPc                | PDFXSetBleedBoxToMediaBox   |
+-------------------------+----------------------------+-----------------------------+
| CreateJobTicket         | NeverEmbed                 | PDFXBleedBoxToTrimBoxOffset |
+-------------------------+----------------------------+-----------------------------+
| Description             | Optimize                   | PDFXOutputIntentProfile     |
+-------------------------+----------------------------+-----------------------------+
| DoThumbnails            | ParseDSCComments           | PDFXTrapped                 |
+-------------------------+----------------------------+-----------------------------+
| EmbedAllFonts           | ParseDSCCommentsForDocInfo | SubsetFonts                 |
+-------------------------+----------------------------+-----------------------------+

Three of the settings in this list (``DoThumbnails`` , ``Optimize`` , and/or ``CompressObjects`` ) are not used until the post-processing step of distillation.

The remaining Distiller settings can be changed during a job using ``setdistillerparams`` . One exception is that ``PreserveFlatness`` cannot be changed in the middle of a page. Its value must be set before any marks are created on the page. For example, when the following PostScript command sequence is distilled, the value in the ``.joboptions`` file will be honored and the changes indicated by ``setdistillerparams`` will not be used:

::

     1 1 moveto 1 2 lineto
      << /PreserveFlatness false>> setdistillerparams
      20 setflat

Any attempt to change ``PreserveFlatness`` after any marks are drawn on a page is ignored.

Using Distiller to combine PostScript files
-------------------------------------------

.. note::

   Adobe recommends that the Acrobat 7.0 feature Create PDF from Multiple Files be used to combine PostScript and/or PDF files together into one PDF.

Distiller can combine two or more PostScript files to produce a single Adobe PDF document. If the PostScript files have embedded font subsets, Distiller gives the resulting PDF file only one subset for each font. This is much more efficient than creating a set of several PDF documents with duplicate font subsets.

The Acrobat installation provides two files you can modify to combine two or more PostScript files to create a single PDF:

-  ``Runfilex.ps`` combines a set of PostScript files from one or more locations into one PDF file.
-  ``Rundirex.txt`` combines a set of PostScript files from a specific folder or directory into one PDF file.

These files should be located in these directories:

* For Acrobat 7 in Windows 2000: Documents and SettingsAll UsersDocumentsAdobe PDF 7.0Example Files
* For Acrobat 7 in Windows XP: Documents and SettingsAll UsersShared DocumentsAdobe PDF 7.0Example Files
* In Mac OS: /Library/Application Support/Adobe PDF/Example Files

Follow the instructions in the sample files. The PostScript files are combined in the order in which they are listed. Edit the files in a text editor or word processor, and save the modified files under a new name, as text, with a ``.ps`` suffix.

You can then use Distiller to convert the combined file to PDF. You can also place the file in an In folder to be converted later.

The conversion settings used are those listed in the Default Settings pop-up menu in the Acrobat Distiller dialog box.

