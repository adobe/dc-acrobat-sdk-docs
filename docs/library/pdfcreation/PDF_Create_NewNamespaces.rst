******************************************************
Other Namespaces
******************************************************

This chapter describes the settings that belong to namespaces other than the ``Common`` namespace. See `Namespaces <PDF_Create_Principles.html#90851>`__ for information on how namespaces are organized.

.. raw:: html

   <a name="92173"></a>

CreativeSuite namespace settings
================================

The following settings belong to the ``CreativeSuite`` namespace. They are supported by one or more of the applications in Creative Suite version 2.0 and later (llustrator, InDesign, and Photoshop). The entries for each setting indicate which applications support it.

AddBleedMarks
-------------

If ``true`` , bleed marks are included in the PDF file.

**Supported by**


InDesign

**Type**


Boolean

**UI name**


Add Bleed Marks

**Default value**


::

   false

AddColorBars
------------

If ``true`` , color bars are included in the PDF file.

.. _supported-by-1:

**Supported by**


Illustrator, InDesign

.. _type-1:

**Type**


Boolean

.. _ui-name-1:

**UI name**


Color Bars

.. _default-value-1:

**Default value**


::

   false

AddCropMarks
------------

If ``true`` , crop marks are included in the PDF file.

.. _supported-by-2:

**Supported by**


Illustrator, InDesign

.. _type-2:

**Type**


Boolean

.. _ui-name-2:

**UI name**


InDesign: Crop Marks

Illustrator: Trim Marks

.. _default-value-2:

**Default value**


::

   false

AddPageInfo
-----------

If ``true`` , page information (document name, page number, and time stamp) are included in the PDF file.

.. _supported-by-3:

**Supported by**


Illustrator, InDesign

.. _type-3:

**Type**


Boolean

.. _ui-name-3:

**UI name**


Page Information

.. _default-value-3:

**Default value**


::

   false

AddRegMarks
-----------

If ``true`` , registration marks are included in the PDF file.

.. _supported-by-4:

**Supported by**


Illustrator, InDesign

.. _type-4:

**Type**


Boolean

.. _ui-name-4:

**UI name**


Registration Marks

.. _default-value-4:

**Default value**


::

   false

.. raw:: html

   <a name="84563"></a>

BleedOffset
-----------

An array of four floating point numbers with values between 0.0 to 432.0, representing the offsets of the bleed in points from the top, left, bottom, and right edges of the document.

In InDesign, if ``UseDocumentBleed`` is ``true`` , the bleed values are taken from the document bleed rather than the value of this setting.

.. _supported-by-5:

**Supported by**


Illustrator, InDesign

.. _type-5:

**Type**


array

.. _ui-name-5:

**UI name**


Bleeds

.. _default-value-5:

**Default value**


::

   [0.0, 0.0, 0.0, 0.0]

.. raw:: html

   <a name="39802"></a>

ConvertColors
-------------

Specifies whether colors should be converted to CMYK or RGB. The following table shows the valid values.


 

+-----------------------+-----------------------+------------------------------+
| Value                 | UI equivalent         | Description                  |
+=======================+=======================+==============================+
|                       | No Color Conversion   | Colors are not converted.    |
|                       |                       |                              |
|    NoConversion       |                       |                              |
+-----------------------+-----------------------+------------------------------+
|                       | *See below*           | Colors are converted to CMYK |
|                       |                       |                              |
|    ConvertToCMYK      |                       |                              |
+-----------------------+-----------------------+------------------------------+
|                       | *See below*           | Colors are converted to RGB. |
|                       |                       |                              |
|    ConvertToRGB       |                       |                              |
+-----------------------+-----------------------+------------------------------+

``ConvertToCMYK`` or ``ConvertToRGB`` do not map precisely to the UI options, which are "Convert to Destination" or "Convert to Destination (preserve numbers)". The "destination" referred to is a specified by the appropriate profile (CMYK or RGB) and additional settings. See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for more details.

.. note::

   When converting to CMYK, the resulting Common settings are supported by Distiller 7.0, but previous versions of Distiller did not support conversion to CMYK.

.. _supported-by-6:

**Supported by**


Illustrator, InDesign, Photoshop

.. _type-6:

**Type**


name

.. _ui-name-6:

**UI name**


Color Conversion

.. _default-value-6:

**Default value**


::

   NoConversion

.. raw:: html

   <a name="55683"></a>

DestinationProfileName
----------------------

When the value of ``DestinationProfileSelector`` is ``UseName`` , this setting specifies the name of the destination profile to be used.

When the value of ``DestinationProfileSelector`` is one of the document or working space profiles, Creative Suite applications store the profile name in this setting when saving the settings. This enables determining whether a setting has been changed outside the application. For example, when converting to CMYK:

-  If the value of this setting is a profile name, it should be the same as that of ``CalCMYKProfile`` . Different profile names imply that ``CalCMYKProfile`` was changed in Distiller; therefore, Creative Suite applications will use ``CalCMYKProfile`` instead of ``DestinationProfileName`` .
-  If the value of this setting is the empty string, Creative Suite applications will use the document CMYK profile regardless of the value of ``CalCMYKProfile`` .

.. _supported-by-7:

**Supported by**


Illustrator, InDesign, Photoshop

.. _type-7:

**Type**


string

.. _ui-name-7:

**UI name**


Destination

.. raw:: html

   <a name="23735"></a>

DestinationProfileSelector
--------------------------

Specifies which destination color profile should be used. The following table shows the valid values.

.. _section-1:


 

+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                   |
+=======================+=======================+===============================================================================================================+
|                       | N/A                   | No profile                                                                                                    |
|                       |                       |                                                                                                               |
|    NA                 |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
|                       | *Any named profile*   | The profile specified by ``DestinationProfileName`` is used.                                                  |
|                       |                       |                                                                                                               |
|    UseName            |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
|                       | Working CMYK          | The effective working CMYK profile is used. The profile name is also written to ``DestinationProfileName`` .  |
|                       |                       |                                                                                                               |
|    WorkingCMYK        |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
|                       | Working RGB           | The effective working RGB profile is used.                                                                    |
|                       |                       |                                                                                                               |
|    WorkingRGB         |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
|                       | Document CMYK         | The effective document CMYK profile is used. The profile name is also written to ``DestinationProfileName`` . |
|                       |                       |                                                                                                               |
|    DocumentCMYK       |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+
|                       | Document RGB          | The effective document RGB profile is used.                                                                   |
|                       |                       |                                                                                                               |
|    DocumentRGB        |                       |                                                                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------+

.. _supported-by-8:

**Supported by**


all applications

.. _type-8:

**Type**


name

.. _ui-name-8:

**UI name**


Destination

.. _default-value-7:

**Default value**


::

   NA

.. raw:: html

   <a name="62333"></a>

Downsample16BitImages
---------------------

If ``true`` , 16 bits-per-channel images are converted to 8 bits-per-channel images. If ``false`` , 16-bit images are not converted, and Flate (ZIP) is the only compression method available.

This setting is available only if ``CompatibilityLevel`` is 1.5 or greater. For 1.4 or earlier, 16-bit images are always converted to 8 bits per channel.

.. _supported-by-9:

**Supported by**


Photoshop

.. _type-9:

**Type**


Boolean

.. _ui-name-9:

**UI name**


Convert 16 Bit/Channel Image to 8 Bit/Channel

.. _default-value-8:

**Default value**


::

   true

FlattenerPreset
---------------

A dictionary that specifies a preset or set of options for flattening transparency. One of the entries is ``PresetSelector`` , which is a string corresponding to a preset file. It can correspond to one of the preset files that specify transparency flattening: ``LowResolution`` , ``MediumResolution`` , or ``HighResolution`` . It can also take the value ``UseName`` , which means that the ``PresetName`` entry specifies the name of the preset file.

The other entries are: ``ClipComplexRegions`` , ``ConvertStrokesToOutlines`` , ``ConvertTextToOutlines`` , ``GradientResolution`` , ``LineArtTextResolution`` , and ``RasterVectorBalance`` . See Creative Suite application Help for more information on these transparency flattening options.

.. note::

   This setting applies only when ``CompatibilityLevel`` is 1.3; that is, for PDF versions where transparency is not supported.

.. _supported-by-10:

**Supported by**


Illustrator, InDesign

.. _type-10:

**Type**


dictionary

.. _ui-name-10:

**UI name**


Transparency Flattener: Preset

.. _default-value-9:

**Default value**


::

   <</PresetSelector /MediumResolution>>

.. raw:: html

   <a name="55617"></a>

GenerateStructure
-----------------

If ``true`` , a Tagged PDF document is generated. Tagged PDF contains information about the logical structure of the document that can be used to provide document reflow, improved accessibility, and interchange with other file formats. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for more information on Tagged PDF.

If ``CompatibilityLevel`` is 1.5 or later (that is, Acrobat 6 or later compatibility is chosen), tags are compressed for smaller file size.

.. _supported-by-11:

**Supported by**


InDesign

.. _type-11:

**Type**


Boolean

.. _ui-name-11:

**UI name**


Create Tagged PDF

.. _default-value-10:

**Default value**


::

   false

IncludeBookmarks
----------------

A Boolean value to include bookmarks, defined in an InDesign document, in generated PDF.

.. _supported-by-12:

**Supported by**


InDesign

.. _type-12:

**Type**


Boolean

.. _ui-name-12:

**UI name**


Bookmarks

.. _default-value-11:

**Default value**


::

   false

If ``true`` , bookmarks are included in generated PDF.

IncludeHyperlinks
-----------------

A Boolean value to include hyperlinks in generated PDF.

.. _supported-by-13:

**Supported by**


InDesign

.. _type-13:

**Type**


Boolean

.. _ui-name-13:

**UI name**


Hyperlinks

.. _default-value-12:

**Default value**


::

   false

If ``true`` , hyperlinks are included in generated PDF.

IncludeInteractive
------------------

If ``true`` , interactive elements should be included in the PDF document. These can be:

**Multimedia elements** : If ``true`` , the ``MultimediaHandling`` setting controls how the elements should be included.

.. _supported-by-14:

**Supported by**


InDesign

.. _type-14:

**Type**


Boolean

.. _ui-name-14:

**UI name**


Interactive Elements

.. _default-value-13:

**Default value**


::

   false

IncludeLayers
-------------

If ``true`` , layers (optional content) are included in generated PDF; available in PDF 1.5 or later.

.. _supported-by-15:

**Supported by**


Illustrator, InDesign

.. _type-15:

**Type**


Boolean

.. _ui-name-15:

**UI name**


Create Acrobat Layers

.. _default-value-14:

**Default value**


::

   false

.. raw:: html

   <a name="51577"></a>

IncludeProfiles
---------------

If ``false`` , color profiles are not included in generated PDF. This corresponds to Don't Include Profiles in the UI. If ``true`` , which profiles are included is dependent on the value of other settings. See `Creative Suite color conversion settings <PDF_Create_UsingSettings.html#74214>`__ for details.

.. _supported-by-16:

**Supported by**


Illustrator, InDesign, Photoshop

.. _type-16:

**Type**


Boolean

.. _ui-name-16:

**UI name**


Profile Inclusion Policy

.. _default-value-15:

**Default value**


::

   false

MarksOffset
-----------

A floating-point number between ``0.0`` and ``6.0`` indicating the printer offset in points.

.. _supported-by-17:

**Supported by**


Illustrator, InDesign

.. _type-17:

**Type**


number

.. _ui-name-17:

**UI name**


Offset

.. _default-value-16:

**Default value**


::

   0

MarksWeight
-----------

A floating-point number between ``0.125`` and ``0.5`` indicating the line weight in points to be used for printer's marks.

.. _supported-by-18:

**Supported by**


Illustrator, InDesign

.. _type-18:

**Type**


number

.. _ui-name-18:

**UI name**


InDesign: Weight

Illustrator: Trim Mark Weight

.. _default-value-17:

**Default value**


::

   0.25

.. raw:: html

   <a name="34743"></a>

MultimediaHandling
------------------

Specifies how multimedia objects (movies and sounds) are referenced in the PDF file. This setting is relevant only if ``IncludeInteractive`` is ``true`` . Valid values are:

.. _section-2:


 

+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                        |
+=======================+=======================+====================================================================================================================================+
|                       | Automatic             | If ``CompatibilityLevel`` is PDF 1.5 or later, all objects are embedded. If it is PDF 1.4 or earlier, all objects are linked.      |
|                       |                       |                                                                                                                                    |
|    UseObjectSettings  |                       | -  Used by InDesign only.                                                                                                          |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|                       | Link All              | All objects are linked when ``CompatibilityLevel`` is PDF 1.5 or later; otherwise, sound clips are embedded and movies are linked. |
|                       |                       |                                                                                                                                    |
|    LinkAll            |                       |                                                                                                                                    |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|                       | Embed All             | All objects are embedded. This setting is valid only when ``CompatibilityLevel`` is PDF 1.5 or later.                              |
|                       |                       |                                                                                                                                    |
|    EmbedAll           |                       |                                                                                                                                    |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+

Embedding means that the multimedia object is included in the PDF file itself. Linking means that the PDF file contains a reference to an external file. (The user should make sure that the media files are in the same directory as the PDF file.)

.. _supported-by-19:

**Supported by**


InDesign

.. _type-19:

**Type**


name

.. _ui-name-19:

**UI name**


Multimedia

.. _default-value-18:

**Default value**


::

   UseObjectSettings

PageMarksFile
-------------

Specifies selection of the page marks file. Valid values are:

* ``RomanDefault`` : Use the built-in Roman page marks file
* ``JapaneseWithCircle`` : Use the built-in Japanese (with circle) page marks file.
* ``JapaneseNoCircle`` : Use the built-in Japanese (with no circle) page marks file.
* ``UseName`` : Use the value of ``PageMarksFileName`` for the page marks file

The files presented in the user interface vary according to application and language.

.. _supported-by-20:

**Supported by**


Illustrator, InDesign

.. _type-20:

**Type**


name

.. _ui-name-20:

**UI name**


InDesign: "Type" pop-up

Illustrator: Printer Mark Type

.. _default-value-19:

**Default value**


::

   RomanDefault

.. raw:: html

   <a name="39345"></a>

PageMarksFileName
-----------------

If ``PageMarksFile`` has the value ``UseName`` , this setting represents the page marks file that should be used.

.. _supported-by-21:

**Supported by**


Illustrator, InDesign

.. _type-21:

**Type**


string

.. _ui-name-21:

**UI name**


Page mark file name

.. _default-value-20:

**Default value**


::

   ""

.. raw:: html

   <a name="84948"></a>

PDFXOutputIntentProfileSelector
-------------------------------

Specifies the PDF/X output intent profile to be used for PDF/X compliance. The values are similar to those for the ``DestinationProfileSelector`` setting.

Valid values are:

.. _section-3:


 

+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                      |
+=======================+=======================+==================================================================================================+
|                       | N/A                   | Indicates that no PDF/X compliance standard has been specified.                                  |
|                       |                       |                                                                                                  |
|    NA                 |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | *Any named profile*   | The profile specified by ``PDFXOutputIntentProfile`` is used as the PDF/X output intent profile. |
|                       |                       |                                                                                                  |
|    UseName            |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | Working CMYK          | The effective working CMYK profile is used as the PDF/X output intent profile.                   |
|                       |                       |                                                                                                  |
|    WorkingCMYK        |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | Working RGB           | The effective working RGB profile is used as the PDF/X output intent profile.                    |
|                       |                       |                                                                                                  |
|    WorkingRGB         |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | Document CMYK         | The effective document CMYK profile is used as the PDF/X output intent profile.                  |
|                       |                       |                                                                                                  |
|    DocumentCMYK       |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | Document RGB          | The effective document RGB profile is used as the PDF/X output intent profile.                   |
|                       |                       |                                                                                                  |
|    DocumentRGB        |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+

.. note::

   When color management is on and PDF/X compliance has been specified, the effective profiles specified by ``DestinationProfileName`` , ``CalCMYKProfile`` and ``PDFXOutputIntentProfile`` must be the same.

See `Using the PDF/X output intent settings <PDF_Create_UsingSettings.html#99125>`__ for more information about how this setting is used along with the other standards settings.

.. _supported-by-22:

**Supported by**


Illustrator, InDesign, Photoshop

.. _type-22:

**Type**


name

.. _ui-name-22:

**UI name**


Output Intent Profile Name

.. _default-value-21:

**Default value**


::

   DocumentCMYK 

PreserveEditing
---------------

If ``true`` , data is saved in the PDF that allows you to subsequently re-open and edit the data in the authoring application.

.. note::

   This capability is not available when specifying PDF/X compliance (see `CheckCompliance <PDF_Create_CommonSettings.html#17664>`__).

.. _supported-by-23:

**Supported by**


Illustrator, Photoshop

.. _type-23:

**Type**


Boolean

.. _ui-name-23:

**UI name**


Preserve *application name* Editing Capabilities

.. _default-value-22:

**Default value**


::

   true

.. raw:: html

   <a name="99249"></a>

UntaggedCMYKHandling
--------------------

Specifies whether untagged CMYK content (content with no embedded profiles) should be tagged. Valid values are:

* ``LeaveUntagged`` : Do not add profiles to untagged objects.
* ``UseDocumentProfile`` : Use document CMYK profile for untagged objects.

.. note::

   In InDesign and Illustrator, this value applies to placed content originating in other applications. Native content is treated as inherently untagged unless the option to include all profiles is chosen.

See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details of how these settings interact with the other color settings and how they appear in the UI.

.. _supported-by-24:

**Supported by**


Illustrator, InDesign, Photoshop

.. _type-24:

**Type**


name

.. _ui-name-24:

**UI name**


Output panel: Color

.. _default-value-23:

**Default value**


::

   LeaveUntagged

.. raw:: html

   <a name="18660"></a>

UntaggedRGBHandling
-------------------

Specifies whether untagged RGB content (content with no embedded profiles) should be tagged. Valid values are:

* ``LeaveUntagged`` : Do not add profiles to untagged objects.
* ``UseDocumentProfile`` : Use document RGB profile for untagged objects.

See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details of how these settings interact with the other color settings and how they appear in the UI.

.. _supported-by-25:

**Supported by**


all applications

.. _type-25:

**Type**


name

.. _ui-name-25:

**UI name**


Output panel: Color

.. _default-value-24:

**Default value**


::

   UseDocumentProfile

.. raw:: html

   <a name="68036"></a>

UseDocumentBleed
----------------

If ``true`` , the bleed values (otherwise specified by ``BleedOffset`` ) are populated based on the document's bleed.

.. _supported-by-26:

**Supported by**


InDesign

.. _type-26:

**Type**


Boolean

.. _ui-name-26:

**UI name**


Use Document Bleed

.. _default-value-25:

**Default value**


::

   false


.. raw:: html

   <a name="46753"></a>

InDesign namespace settings
===========================

The following settings belong to the ``InDesign`` namespace. They are supported by InDesign only.

AsReaderSpreads
---------------

If ``true`` , spreads are exported as single PDF pages. A *spread* is a set of pages that are viewed together, such as the two pages that are visible when a magazine is opened.

.. _type-27:

**Type**


Boolean

.. _ui-name-27:

**UI name**


Spreads

.. _default-value-26:

**Default value**


::

   false

.. raw:: html

   <a name="97401"></a>

CropImagesToFrames
------------------

If ``true`` , only data that represents the visible (non-cropped) part of an image is exported in the PDF file.

.. note::

   InDesign crops images to the visible portion of the frame. Distiller has settings for cropping (see `Disabling of image cropping <PDF_Create_UsingSettings.html#16777>`__) that use the clip area.

.. _type-28:

**Type**


Boolean

.. _ui-name-28:

**UI name**


Crop Image Data to Frames

.. _default-value-27:

**Default value**


::

   true

.. raw:: html

   <a name="92883"></a>

ErrorControl
------------

Specifies what should be done when errors occur when generating a PDF file. The following table shows the valid values.

.. _section-4:


 

+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                             | Description                                                                                                                                                                       |
+===================================+===================================================================================================================================================================================+
|                                   | A warning dialog box is issued. The user can choose to continue and the PDF file will be produced. If the UI is disabled in scripting, the dialog box is automatically dismissed. |
|                                   |                                                                                                                                                                                   |
|    WarnAndContinue                |                                                                                                                                                                                   |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Errors are ignored.                                                                                                                                                               |
|                                   |                                                                                                                                                                                   |
|    Ignore                         |                                                                                                                                                                                   |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | No PDF file is produced.                                                                                                                                                          |
|                                   |                                                                                                                                                                                   |
|    CancelJob                      |                                                                                                                                                                                   |
+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _type-29:

**Type**


name

.. _ui-name-29:

**UI name**


*none* (supported via scripting)

.. _default-value-28:

**Default value**


::

   WarnAndContinue

FlattenerIgnoreSpreadOverrides
------------------------------

If ``true`` , transparency flattener settings are applied to all spreads in a document, overriding the flattener settings for individual spreads.

.. _type-30:

**Type**


Boolean

.. _ui-name-30:

**UI name**


Ignore Spread Overrides

.. _default-value-29:

**Default value**


::

   false

IncludeGuidesGrids
------------------

If ``true`` , visible grids and guides will appear in the PDF document.

.. _type-31:

**Type**


Boolean

.. _ui-name-31:

**UI name**


Visible Guides and Baseline Grids

.. _default-value-30:

**Default value**


::

   false

IncludeNonPrinting
------------------

If ``true`` , non-printing objects (which have had the Nonprinting option applied in the Attributes palette) will appear in the PDF document.

.. _type-32:

**Type**


Boolean

.. _ui-name-32:

**UI name**


Non-Printing Objects

.. _default-value-31:

**Default value**


::

   false

IncludeSlug
-----------

If ``true`` , the slug area (an area outside the page and bleed that contains information such as printer instructions) is included in the PDF document.

.. _type-33:

**Type**


Boolean

.. _ui-name-33:

**UI name**


Include Slug area

.. _default-value-32:

**Default value**


::

   false

OmitPlacedBitmaps
-----------------

If ``true`` , imported bitmap images are not included in the PDF document but are replaced by OPI comments.

.. _type-34:

**Type**


Boolean

.. _ui-name-34:

**UI name**


Omit for OPI: bitmap images

.. _default-value-33:

**Default value**


::

   false

OmitPlacedEPS
-------------

If ``true`` , imported Encapsulated PostScript (EPS) images are not included in the PDF document but are replaced by OPI comments.

.. _type-35:

**Type**


Boolean

.. _ui-name-35:

**UI name**


Omit for OPI: EPS

.. _default-value-34:

**Default value**


::

   false

OmitPlacedPDF
-------------

If ``true`` , PDF that has been placed (imported) into the document is not included in the PDF document but are replaced by OPI comments.

.. _type-36:

**Type**


Boolean

.. _ui-name-36:

**UI name**


Omit for OPI: PDF

.. _default-value-35:

**Default value**


::

   false

.. raw:: html

   <a name="42609"></a>

SimulateOverprint
-----------------

Simulates the appearance of printing separations by maintaining the appearance of overprinting in composite output. The following values are valid.

.. _section-5:


 

+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                      |
+=======================+=======================+==================================================================================================+
|                       | unchecked             | Preserve overprint & spot colors when flattening.                                                |
|                       |                       |                                                                                                  |
|    Legacy             |                       |                                                                                                  |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+
|                       | checked               | Spot colors are changed to process equivalents.                                                  |
|                       |                       |                                                                                                  |
|    SimulatePress      |                       | The transparency flattener simulates the appearance of overprinted objects using process colors. |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------+

This setting applies only when the following conditions are met:

-  ``CompatibilityLevel`` is 1.3 (Acrobat 4) or earlier (that is, when transparency is not supported)
-  There is a CMYK or RGB output color space.

.. _type-37:

**Type**


name

.. _ui-name-37:

**UI name**


Simulate Overprint check box

.. _default-value-36:

**Default value**


::

   Legacy

