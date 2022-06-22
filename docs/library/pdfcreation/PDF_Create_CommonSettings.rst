******************************************************
Common PDF Settings
******************************************************

This chapter describes the Adobe PDF settings that belong to the Common namespace. (See `Namespaces <PDF_Create_Principles.html#90851>`__.) These settings have historically been documented in *Acrobat Distiller Parameters* . They are supported by Distiller and may be supported by one or more of the applications in the Creative Suite, version 2.0 and later. The settings in other namespaces are described in `Other Namespaces <PDF_Create_NewNamespaces.html#69127>`__.

The settings are grouped into the same categories that appear in the Distiller user interface (UI). The Creative Suite applications have similar interfaces for PDF creation settings, although they may differ in some respects. More information on the use of Adobe PDF settings can be found in Help for Distiller and the Creative Suite applications.

.. raw:: html

   <a name="36016"></a>

Settings descriptions
=====================

The possible values for the settings are enumerated, with their meanings.

**Supported by**


Indicates which of the applications (Distiller, Illustrator, InDesign, and Photoshop) support this setting.

**Type**


The type of data. The types are consistent with PostScript syntax and can include Boolean, number, string, array, and dictionary.

**UI name**


The name (if any) of the user interface control that corresponds to this setting. (There can be slight variations based on application)

**Default value**


Each setting has a default value, which is the value that is used when a setting is not specified in the settings file.

.. note::

   The default values are the same as those in the ``Standard.joboptions`` file, with the following exceptions:

-  *NeverEmbed* defaults to [true] (no list of fonts)
-  *Description* is not provided
-  *TransferFunctionInfo* defaults to Preserve
-  *CompressObjects* defaults to Off
-  *CalGrayProfile* defaults to ()
-  *PassThroughJPEGImages* defaults to false

.. raw:: html

   <a name="31533"></a>

General settings
================

These settings are available in the General panel of the Distiller settings dialog box. Those settings that are supported by Creative Suite applications are indicated.

AutoRotatePages
---------------

Allows Distiller to automatically orient (rotate) pages based on the predominant text orientation. Auto-rotation is not done if the file contains the ``%%ViewingOrientation`` DSC comment and ``ParseDSCComments`` is true. If ``AutoRotatePages`` is set to ``None`` , pages are not automatically oriented and the ``%%ViewingOrientation`` DSC comment is ignored.


 

+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                 |
+=======================+=======================+=============================================================================================================+
|                       | Off                   | No automatic page rotation.                                                                                 |
|                       |                       |                                                                                                             |
|    None               |                       |                                                                                                             |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------+
|                       | Collectively by File  | All pages are rotated to match the predominant text orientation.                                            |
|                       |                       |                                                                                                             |
|    All                |                       |                                                                                                             |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------+
|                       | Individually          | Pages are rotated on a page-by-page basis. This value is useful for mixed portrait and landscape documents. |
|                       |                       |                                                                                                             |
|    PageByPage         |                       |                                                                                                             |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------+

.. _supported-by-1:

**Supported by**


Distiller

.. _type-1:

**Type**


name

.. _ui-name-1:

**UI name**


Auto-Rotate Pages

.. _default-value-1:

**Default value**


::

   All

.. raw:: html

   <a name="45892"></a>

Binding
-------

Controls the value of the ``PageDirection`` entry in the ``ViewerPreferences`` dictionary of the PDF file. ``PageDirection`` determines how the printed pages would be bound.

.. _section-1:


 

+-----------------------+-----------------------+-----------------------+
| Value                 | UI equivalent         | Description           |
+=======================+=======================+=======================+
|                       | Left                  | For left binding      |
|                       |                       |                       |
|    Left               |                       |                       |
+-----------------------+-----------------------+-----------------------+
|                       | Right                 | For right binding     |
|                       |                       |                       |
|    Right              |                       |                       |
+-----------------------+-----------------------+-----------------------+

.. note::

   InDesign does not use this setting but sets the binding through other UI controls.

.. _supported-by-2:

**Supported by**


Distiller

.. _type-2:

**Type**


name

.. _ui-name-2:

**UI name**


Binding

.. _default-value-2:

**Default value**


::

   Left

.. raw:: html

   <a name="88058"></a>

CompatibilityLevel
------------------

The PDF version number: 1.2, 1.3, 1.4, 1.5, 1.6, or 1.7.

.. note::

   Applications other than Distiller do not support saving files as PDF 1.2.

.. note::

   If you create files with Acrobat 7.0 compatibility, the resulting PDF files may not be compatible with earlier Acrobat versions.

.. _supported-by-3:

**Supported by**


all applications

.. _type-3:

**Type**


real

.. _ui-name-3:

**UI name**


Compatibility

.. _default-value-3:

**Default value**


::

   1.4

.. raw:: html

   <a name="24772"></a>

CompressObjects
---------------

Controls object-level compression, introduced in PDF 1.5. PDF objects that are not individually compressible can be combined into *object streams* that can be efficiently compressed. Only PDF consumers that support PDF 1.5 can process object streams.

.. _section-2:


 

+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                                                                                                   |
+=======================+=======================+===============================================================================================================================================================================================================================================================================================+
|                       | Off                   | PDF 1.5 object compression is not used.                                                                                                                                                                                                                                                       |
|                       |                       |                                                                                                                                                                                                                                                                                               |
|    Off                |                       |                                                                                                                                                                                                                                                                                               |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Tags Only             | PDF 1.5 object compression is applied to the logical structure tree in a document. Versions 5 and earlier of Acrobat and Adobe Reader can open and use these documents, but cannot use the logical structure (tag) information. Versions 6 and later have full access to the tag information. |
|                       |                       |                                                                                                                                                                                                                                                                                               |
|    Tags               |                       |                                                                                                                                                                                                                                                                                               |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Maximum               | Maximum compression of objects is performed. The compressed file is readable by Acrobat and Adobe Reader version 6 and later. Available only if ``CompatibilityLevel`` is 1.5 or higher.                                                                                                      |
|                       |                       |                                                                                                                                                                                                                                                                                               |
|    All                |                       |                                                                                                                                                                                                                                                                                               |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. note::

   Creative Suite applications do not provide a user interface for this setting. For InDesign, if ``GenerateStructure`` (in the ``CreativeSuite`` namespace) is ``true`` , Tagged PDF is generated and this setting is set to ``Tags`` (if ``CompatibilityLevel`` is 1.5 or higher). A value of ``All`` will be treated as ``Tags`` by Creative Suite applications.

.. _supported-by-4:

**Supported by**


all applications

.. _type-4:

**Type**


name

.. _ui-name-4:

**UI name**


Object-Level Compression Distiller

.. _default-value-4:

**Default value**


::

   Off

CoreDistVersion
---------------

*(Read only)* Version number of the Distiller implementation. This is neither the version number of the PostScript interpreter used in Distiller nor the version number displayed in the UI.

.. _supported-by-5:

**Supported by**


Distiller

.. _type-5:

**Type**


integer

.. _default-value-5:

**Default value**


7000

.. raw:: html

   <a name="34385"></a>

Description
-----------

Provides a description of the Adobe PDF settings file that can be displayed in the UI. Each key in the dictionary is a standard 3-letter language code; for example, ``ENU`` for English (see the `Acrobat and PDF Library API Reference <./API_References/Acrobat_API_Reference/index.html>`__ for a listing of these codes). The value associated with each language key is a string that contains the description of the settings file in that language. It is assumed that the string will be reflowed to fit the width of the display field.

.. _supported-by-6:

**Supported by**


all applications

.. _type-6:

**Type**


dictionary

.. _ui-name-5:

**UI name**


Description

.. raw:: html

   <a name="21672"></a>

DoThumbnails
------------

If ``true`` , thumbnails are created for the pages of the resulting PDF file.

.. _supported-by-7:

**Supported by**


all applications

.. _type-7:

**Type**


Boolean

.. _ui-name-6:

**UI name**


| Distiller: Embed Thumbnails
| Creative Suite: Embed Page Thumbnails

.. _default-value-6:

**Default value**


::

   false

EndPage
-------

The last page of the document to be produced.

``StartPage`` and ``EndPage`` together determine the range of pages in the PostScript file that are converted to PDF. If ``StartPage`` is greater than 1 (the default), no PDF output is produced for the first (``StartPage`` ``-1`` ) pages of PostScript. ``StartPage`` becomes page 1 of the PDF file. If ``EndPage`` is greater than ``-1`` , distilling stops after the ``EndPage`` of PostScript. Distiller checks these two settings at the time that the first PostScript marking operator is executed in a job.

.. note::

   ``StartPage`` and ``EndPage`` are useful when debugging PostScript. They are not recommended for general purpose use, as Distiller does not retain page number references in document links.

.. _supported-by-8:

**Supported by**


Distiller

.. _type-8:

**Type**


integer

.. _ui-name-7:

**UI name**


All Pages, Pages From: To:

.. _default-value-7:

**Default value**


::

   -1

ExportLayers
------------

Controls the layer output of exported spreads, based on their visibility & printability layer attributes.

.. _supported-by-9:

**Supported by**


InDesign

.. _type-9:

**Type**


Name

.. _ui-name-8:

**UI name**


Export Layers

.. _default-value-8:

**Default value**


::

   ExportVisiblePrintableLayers

.. raw:: html

   <a name="28903"></a>

HWResolution
------------

Provides the resolution for the PDF file if this value has not already been supplied by the PostScript file itself.

.. note::

   This setting appears as part of the ``setpagedevice`` dictionary in a settings file, as described in `Organization of settings files <PDF_Create_Principles.html#18721>`__. See *PostScript Language Reference* for more information.

.. _supported-by-10:

**Supported by**


Distiller

.. _type-10:

**Type**


array

.. _ui-name-9:

**UI name**


Resolution

.. _default-value-9:

**Default value**


::

   [600 600]

ImageMemory
-----------

The number of bytes in the buffer used in the sample processing of color, grayscale, and monochrome images. When the buffer is full, Distiller writes its contents to disk.

The value of this setting should be between ``0`` and ``1048576`` . If it is set to a negative integer, zero is used.

.. _supported-by-11:

**Supported by**


Distiller

.. _type-11:

**Type**


integer

.. raw:: html

   <a name="11145"></a>

Namespace
---------

This setting identifies the namespace to which all other settings in the same settings dictionary belong. This setting may appear in any namespace. For the ``Common`` namespace, it is optional. For all other namespaces, it is required. See `Namespaces <PDF_Create_Principles.html#90851>`__ for more information.

.. _supported-by-12:

**Supported by**


all applications

.. _type-12:

**Type**


array

.. _default-value-10:

**Default value**


::

   [ (Adobe) (Common) (1.0) ]

.. raw:: html

   <a name="24205"></a>

Optimize
--------

If ``true`` , the PDF file is optimized for fast web viewing. This process is also referred to as *linearization* (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for detailed information.

.. _supported-by-13:

**Supported by**


all applications

.. _type-13:

**Type**


Boolean

.. _ui-name-10:

**UI name**


Optimize For Fast Web View

.. _default-value-11:

**Default value**


::

   true

.. raw:: html

   <a name="93531"></a>

OtherNamespaces
---------------

This setting is an array containing additional settings dictionaries in namespaces other than the current namespace. See `Namespaces <PDF_Create_Principles.html#90851>`__ for more information.

.. _supported-by-14:

**Supported by**


all applications

.. _type-14:

**Type**


array

.. raw:: html

   <a name="42586"></a>

PageSize
--------

Provides the page size for the PDF file if this value has not already been supplied by the PostScript file itself.

.. note::

   This setting appears as part of the ``setpagedevice`` dictionary in a settings file, as described in `Organization of settings files <PDF_Create_Principles.html#18721>`__. See *PostScript Language Reference* for more information.

.. _supported-by-15:

**Supported by**


Distiller

.. _type-15:

**Type**


array

.. _ui-name-11:

**UI name**


Default Page Size

.. _default-value-12:

**Default value**


::

   [612.000 729.000]

.. raw:: html

   <a name="75610"></a>

StartPage
---------

See the description of the ``EndPage`` setting.

.. _supported-by-16:

**Supported by**


Distiller

.. _type-16:

**Type**


integer

.. _ui-name-12:

**UI name**


All Pages, Pages From: To:

.. _default-value-13:

**Default value**


::

   1


.. raw:: html

   <a name="37637"></a>

Image settings
==============

This section lists the Adobe PDF settings that apply to each image type. In Distiller, these options appear in the "Images" panel of the user interface. For the Creative Suite applications, these settings appear in the "Compression" panel. (Photoshop does not present different options for the different image types but uses the settings that apply to the active image.)

For more information on how these settings are used together, see `Using the image settings <PDF_Create_UsingSettings.html#29125>`__.

.. raw:: html

   <a name="17123"></a>

Color image settings
====================

This section lists the compression and downsampling settings for color images (images that have more than one color component).

.. raw:: html

   <a name="58917"></a>

AntiAliasColorImages
--------------------

If ``true`` , Distiller permits anti-aliasing on color images.

Anti-aliasing increases the number of bits per component in downsampled images to preserve some of the information that is otherwise lost by downsampling. Anti-aliasing is only performed if the image is actually downsampled and ``ColorImageDepth`` has a value greater than the number of bits per color component in the input image.

For more information on anti-aliasing see `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__.

.. _supported-by-17:

**Supported by**


Distiller

.. _type-17:

**Type**


Boolean

.. _default-value-14:

**Default value**


::

   false

.. raw:: html

   <a name="24040"></a>

AutoFilterColorImages
---------------------

If ``true`` , the compression filter for color images is chosen based on the properties of each image, in conjunction with the ``ColorImageAutoFilterStrategy`` setting. See `Automatic compression <PDF_Create_UsingSettings.html#99144>`__ for more information.

If ``false`` , all color sampled images are compressed using the filter specified by ``ColorImageFilter`` .

This setting is relevant only if ``EncodeColorImages`` is ``true`` .

.. _supported-by-18:

**Supported by**


all applications

.. _type-18:

**Type**


Boolean

.. _ui-name-13:

**UI name**


Compression: Automatic (JPEG) & Automatic (JPEG2000)

.. _default-value-15:

**Default value**


::

   true

.. raw:: html

   <a name="30939"></a>

ColorACSImageDict
-----------------

Dictionary of parameters for JPEG compression when JPEG is chosen from the Automatic filter selection (see `AutoFilterColorImages <PDF_Create_CommonSettings.html#24040>`__). ``ColorACSImageDict`` is based on the ``DCTEncode`` parameter dictionary described in Section 3.13.3 in the *PostScript Language Reference* .

See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for details on the use of this dictionary.

.. _supported-by-19:

**Supported by**


all applications

.. _type-19:

**Type**


dictionary

.. _ui-name-14:

**UI name**


Compression, Image Quality

.. _default-value-16:

**Default value**


::

   <</Qfactor 0.76 /Hsamples [2 1 1 2] /Vsamples [2 1 1 2]>>

.. raw:: html

   <a name="62153"></a>

ColorImageAutoFilterStrategy
----------------------------

Specifies the automatic compression strategy that is used when ``AutoFilterColorImages`` is set to ``true`` . Must be one of the following values:

.. _section-3:


 

+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                                   |
+=======================+=======================+===============================================================================================================================================================================================================================+
|                       | Automatic (JPEG)      | Lossy JPEG compression is used for low-frequency images and lossless Flate compression for high-frequency images.                                                                                                             |
|                       |                       |                                                                                                                                                                                                                               |
|    JPEG               |                       |                                                                                                                                                                                                                               |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Automatic (JPEG2000)  | Applies only when ``CompatibilityLevel`` is set to 1.5 or higher. Lossy JPEG2000 compression is used for low-frequency images (images with smooth color changes) and lossless JPEG2000 compression for high-frequency images. |
|                       |                       |                                                                                                                                                                                                                               |
|    JPEG2000           |                       |                                                                                                                                                                                                                               |
+-----------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

See `Automatic compression <PDF_Create_UsingSettings.html#99144>`__ for more information.

.. _supported-by-20:

**Supported by**


Distiller, Illustrator, InDesign

.. _type-20:

**Type**


name.

.. _ui-name-15:

**UI name**


Compression

.. _default-value-17:

**Default value**


::

   JPEG

.. raw:: html

   <a name="21873"></a>

ColorImageDepth
---------------

Specifies the number of bits per color component in the output image. See `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__ for more information.

Allowed values are:

-  The number of bits per sample: ``1`` , ``2`` , ``4`` , or ``8`` .
-  ``-1`` , which forces the downsampled image to have the same number of bits per color component as the original image

.. note::

   Photoshop uses the ``Downsample16BitImages`` setting to decrease the bit depth of 16-bit images to 8 bits per sample so that JPEG compression can be used.

.. _supported-by-21:

**Supported by**


Distiller

.. _type-21:

**Type**


integer

.. _default-value-18:

**Default value**


::

   -1

.. raw:: html

   <a name="13008"></a>

ColorImageDict
--------------

Dictionary of parameters for JPEG compression. ``ColorImageDict`` is based on the ``DCTEncode`` parameter dictionary described in Section 3.13.3 in the *PostScript Language Reference* .

See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for details on how this dictionary is used.

.. _supported-by-22:

**Supported by**


all applications

.. _type-22:

**Type**


dictionary

.. _ui-name-16:

**UI name**


Compression, Image Quality

.. _default-value-19:

**Default value**


::

   <</Qfactor 0.76 /Hsamples [2 1 1 2] /Vsamples [2 1 1 2]>>

ColorImageDownsampleThreshold
-----------------------------

Sets the downsample threshold for color images. This is the ratio of image resolution to output resolution above which downsampling may be performed. Must be between 1.0 through 10.0, inclusive. If you set the threshold out of range, it reverts to a default of 1.5.

See `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__ for details on using this setting.

.. _supported-by-23:

**Supported by**


all applications

.. _type-23:

**Type**


number

.. _ui-name-17:

**UI name**


pixels per inch; for images above: *value* pixels per inch

.. _default-value-20:

**Default value**


1.5 (UI shows 225 pixels-per-inch)

.. raw:: html

   <a name="85568"></a>

ColorImageDownsampleType
------------------------

Must be one of the following values:

.. _section-4:


 

+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
| Value                 | UI equivalent           | Description                                                                         |
+=======================+=========================+=====================================================================================+
|                       | Average Downsampling to | Groups of samples are averaged to get the new downsampled value.                    |
|                       |                         |                                                                                     |
|    Average            |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Bicubic Downsampling to | Bicubic interpolation is used on a group of samples to get a new downsampled value. |
|                       |                         |                                                                                     |
|    Bicubic            |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Subsampling to          | The center sample from a group of samples is used as the new downsampled value.     |
|                       |                         |                                                                                     |
|    Subsample          |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Distiller: Off          | No sampling                                                                         |
|                       |                         |                                                                                     |
|    None               | CS: Do Not Downsample   |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+

.. _supported-by-24:

**Supported by**


all applications

.. _type-24:

**Type**


name

.. _ui-name-18:

**UI name**


Sampling

.. _default-value-21:

**Default value**


::

   Bicubic

.. raw:: html

   <a name="24916"></a>

ColorImageFilter
----------------

Specifies the compression filter to be used for color images. Ignored if ``AutoFilterColorImages`` is ``true`` or ``EncodeColorImages`` is ``false`` .

Must be one of the following values:

.. _section-5:


 

+-----------------------+-----------------------+----------------------------------+
| Value                 | UI equivalent         | Description                      |
+=======================+=======================+==================================+
|                       | JPEG                  | Selects JPEG compression.        |
|                       |                       |                                  |
|    DCTEncode          |                       |                                  |
+-----------------------+-----------------------+----------------------------------+
|                       | ZIP                   | Selects Flate (ZIP) compression. |
|                       |                       |                                  |
|    FlateEncode        |                       |                                  |
+-----------------------+-----------------------+----------------------------------+
|                       | JPEG2000              | Selects JPEG2000 compression.    |
|                       |                       |                                  |
|    JPXEncode          |                       |                                  |
+-----------------------+-----------------------+----------------------------------+

.. note::

   JPEG2000 options only appear in UI if ``CompatibilityLevel`` is set to 1.5 or higher.

``DCTEncode`` is used only if the output image has 8 bits per color component; otherwise ``FlateEncode`` is used.

For compatibility with Distiller 3.0 Adobe PDF settings files, Distiller 6.0 and later (as well as Creative Suite applications) revert to Flate compression if this setting is set to ``LZWEncode`` . Other values cause Distiller to stop with a range error.

.. _supported-by-25:

**Supported by**


all applications

.. _type-25:

**Type**


name

.. _ui-name-19:

**UI name**


Compression

.. _default-value-22:

**Default value**


::

   DCTEncode

.. raw:: html

   <a name="62736"></a>

ColorImageMinDownsampleDepth
----------------------------

If ``DownsampleColorImages`` is ``true`` , controls the range of bit depths for which color image downsampling occurs. Valid values are 1, 2, 4 or 8.

For more information, see `Controlling the range of bit depths for which downsampling occurs <PDF_Create_UsingSettings.html#70454>`__.

.. _supported-by-26:

**Supported by**


Distiller

.. _type-26:

**Type**


integer

.. _default-value-23:

**Default value**


::

   1

.. raw:: html

   <a name="11702"></a>

ColorImageMinResolution
-----------------------

Imposes a lower limit to the resolution of sampled images. Valid values are from 9 to 64000, inclusive.

How this value is used is determined by ``ColorImageMinResolutionPolicy`` . For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-27:

**Supported by**


Distiller

.. _type-27:

**Type**


integer

.. _ui-name-20:

**UI name**


Policy->Color Image Policy

.. _default-value-24:

**Default value**


::

   150

.. raw:: html

   <a name="97542"></a>

ColorImageMinResolutionPolicy
-----------------------------

Sets the policy for imposition of a lower limit to the resolution of sampled color images as specified by the ``ColorImageMinResolution`` setting. The following table shows the valid names.

.. _section-6:


 

+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                  |
+=======================+=======================+==============================================================================================================================================================================================================+
|                       | Ignore                | Distiller's default behavior does not change—i.e., Distiller does not enforce any lower limit on image resolution, ignoring any value specified by ``ColorImageMinResolution`` .                             |
|                       |                       |                                                                                                                                                                                                              |
|    OK                 |                       |                                                                                                                                                                                                              |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Warn and continue     | A warning is issued every time a sampled color image with resolution smaller than the value specified by ``ColorImageMinResolution`` is placed in the PDF file. The job continues after issuing the warning. |
|                       |                       |                                                                                                                                                                                                              |
|    Warning            |                       |                                                                                                                                                                                                              |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Cancel job            | An error occurs when a sampled color image with resolution smaller than the value specified by ``ColorImageMinResolution`` is placed in the PDF file. The job fails with a limit check error.                |
|                       |                       |                                                                                                                                                                                                              |
|    Error              |                       |                                                                                                                                                                                                              |
+-----------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-28:

**Supported by**


Distiller

.. _type-28:

**Type**


name

.. _ui-name-21:

**UI name**


Policy->Color Image Policy

.. _default-value-25:

**Default value**


::

   OK

.. raw:: html

   <a name="35897"></a>

ColorImageResolution
--------------------

Specifies the resolution to which downsampled color images are reduced; valid values are 9 to 2400 pixels per inch. A color image is downsampled if ``DownsampleColorImages`` is ``true`` and the resolution of the input image meets the criteria described in `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__.

.. _supported-by-29:

**Supported by**


all applications

.. _type-29:

**Type**


integer

.. _ui-name-22:

**UI name**


Sampling: pixels per inch

.. _default-value-26:

**Default value**


::

   150

.. raw:: html

   <a name="35272"></a>

ConvertImagesToIndexed
----------------------

If ``true`` , Distiller converts images that use fewer than 257 colors to an indexed color space for compactness. This conversion, when enabled, produces smaller PDF files but may make distillation slower.

.. note::

   Creative Suite applications behave as if this setting is always ``true`` .

.. _supported-by-30:

**Supported by**


Distiller

.. _type-30:

**Type**


Boolean

.. _default-value-27:

**Default value**


::

   true

.. raw:: html

   <a name="56842"></a>

CropColorImages
---------------

If ``CropColorImages`` is ``false`` , color images are never cropped, whether or not the current clip would remove any image samples.

For more information, see `Disabling of image cropping <PDF_Create_UsingSettings.html#16777>`__.

.. _supported-by-31:

**Supported by**


Distiller

.. _type-31:

**Type**


Boolean

.. _default-value-28:

**Default value**


::

   true

.. raw:: html

   <a name="50851"></a>

DownsampleColorImages
---------------------

If ``true`` , color images are downsampled using the resolution specified by ``ColorImageResolution`` , assuming the threshold specified by ``ColorImageDownsampleThreshold`` is met. If ``false`` , downsampling is not done and the resolution of color images in the PDF file is the same as the source images.

See `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__ for more information.

.. _supported-by-32:

**Supported by**


all applications

.. _type-32:

**Type**


Boolean

.. _ui-name-23:

**UI name**


Sampling

.. _default-value-29:

**Default value**


::

   true

.. raw:: html

   <a name="29745"></a>

EncodeColorImages
-----------------

If ``true`` , color images are encoded using the compression filter specified by the value of ``ColorImageFilter`` . If ``false`` , compression filters are not applied to color images.

.. _supported-by-33:

**Supported by**


all applications

.. _type-33:

**Type**


Boolean

.. _ui-name-24:

**UI name**


Compression

.. _default-value-30:

**Default value**


::

   true

.. raw:: html

   <a name="90844"></a>

JPEG2000ColorACSImageDict
-------------------------

Dictionary of parameters for automatic JPEG2000 compression of color images. See `JPEG2000 <PDF_Create_UsingSettings.html#60774>`__ for details.

.. _supported-by-34:

**Supported by**


all applications

.. _type-34:

**Type**


dictionary

.. _ui-name-25:

**UI name**


Compression, Image Quality, Tile Size

.. _default-value-31:

**Default value**


::

   <</TileWidth 256/TileHeight 256/Quality 15 >>

.. raw:: html

   <a name="80211"></a>

JPEG2000ColorImageDict
----------------------

Dictionary of parameters for JPEG2000 compression of color images. See `JPEG2000 <PDF_Create_UsingSettings.html#60774>`__ for details.

.. _supported-by-35:

**Supported by**


all applications

.. _type-35:

**Type**


dictionary

.. _ui-name-26:

**UI name**


Compression, Image Quality, Tile Size

.. _default-value-32:

**Default value**


::

   <</TileWidth 256/TileHeight 256/Quality 15 >>


.. raw:: html

   <a name="87924"></a>

Grayscale image settings
========================

This section lists compression and downsampling settings for grayscale images (images with only one color component and more than one bit per sample).

.. raw:: html

   <a name="98715"></a>

AntiAliasGrayImages
-------------------

If ``true`` , Distiller permits anti-aliasing on grayscale images. Anti-aliasing increases the number of bits per component in downsampled images to preserve some of the information that is otherwise lost by downsampling. Anti-aliasing is only performed if the image is actually downsampled and ``GrayImageDepth`` has a value greater than the number of bits per sample in the input image. For more information, see `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__.

.. _supported-by-36:

**Supported by**


Distiller

.. _type-36:

**Type**


Boolean

.. _default-value-33:

**Default value**


::

   false

.. raw:: html

   <a name="89851"></a>

AutoFilterGrayImages
--------------------

If ``true`` , the compression filter for gray images is chosen based on the properties of each image, in conjunction with the ``GrayImageAutoFilterStrategy`` setting. See `Automatic compression <PDF_Create_UsingSettings.html#99144>`__ for more information. If ``false`` , all color sampled images are compressed using the filter specified by ``GrayImageFilter`` . This setting is relevant only if ``EncodeGrayImages`` is ``true`` .

.. _supported-by-37:

**Supported by**


all applications

.. _type-37:

**Type**


Boolean

.. _ui-name-27:

**UI name**


Compression

.. _default-value-34:

**Default value**


::

   true

.. raw:: html

   <a name="97898"></a>

CropGrayImages
--------------

If ``false`` , gray images are never cropped, whether or not the current clip would remove any image samples. See `Disabling of image cropping <PDF_Create_UsingSettings.html#16777>`__ for more information.

.. _supported-by-38:

**Supported by**


Distiller

.. _type-38:

**Type**


Boolean

.. _default-value-35:

**Default value**


::

   true

.. raw:: html

   <a name="99054"></a>

DownsampleGrayImages
--------------------

If ``true`` , grayscale images are downsampled using the resolution specified by ``GrayImageResolution`` . If ``false`` , downsampling does not occur, and the resolution of grayscale images in the PDF file is the same as the source images.

.. _supported-by-39:

**Supported by**


all applications

.. _type-39:

**Type**


Boolean

.. _ui-name-28:

**UI name**


Sampling

.. _default-value-36:

**Default value**


::

   true

.. raw:: html

   <a name="16389"></a>

EncodeGrayImages
----------------

If ``true`` , grayscale images are encoded using the compression filter specified by the value of ``GrayImageFilter`` . If ``false`` , compression filters are not applied to grayscale sampled images.

.. _supported-by-40:

**Supported by**


all applications

.. _type-40:

**Type**


Boolean

.. _ui-name-29:

**UI name**


Compression

.. raw:: html

   <a name="38481"></a>

GrayACSImageDict
----------------

Dictionary of parameters for JPEG compression when JPEG is chosen from the Automatic filter selection (see `AutoFilterGrayImages <PDF_Create_CommonSettings.html#89851>`__).

``GrayACSImageDict`` is based on the ``DCTEncode`` parameter dictionary described in Section 3.13.3 in the *PostScript Language Reference* .

See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for details on how this dictionary is used.

.. _supported-by-41:

**Supported by**


all applications

.. _type-41:

**Type**


dictionary

.. _ui-name-30:

**UI name**


Compression, Image Quality

.. _default-value-37:

**Default value**


::

   <</Qfactor 0.76 /Hsamples [2 1 1 2] /Vsamples [2 1 1 2]>>

.. raw:: html

   <a name="99033"></a>

GrayImageAutoFilterStrategy
---------------------------

Specifies the automatic compression strategy that is used when ``AutoFilterGrayImages`` is set to ``true`` . The following table shows the valid values.

.. _section-7:


 

+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                                 |
+=======================+=======================+=============================================================================================================================================================================================================================+
|                       | Automatic (JPEG)      | Lossy JPEG compression is used for low-frequency images and lossless Flate compression for high-frequency images.                                                                                                           |
|                       |                       |                                                                                                                                                                                                                             |
|    JPEG               |                       |                                                                                                                                                                                                                             |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Automatic (JPEG2000)  | Applies only if ``CompatibilityLevel`` is set to 1.5 or higher. Lossy JPEG2000 compression is used for low-frequency images (images with smooth color changes) and lossless JPEG2000 compression for high-frequency images. |
|                       |                       |                                                                                                                                                                                                                             |
|    JPEG2000           |                       |                                                                                                                                                                                                                             |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

See `Automatic compression <PDF_Create_UsingSettings.html#99144>`__ for more information.

.. _supported-by-42:

**Supported by**


all applications

.. _type-42:

**Type**


name

.. _ui-name-31:

**UI name**


Compression

.. _default-value-38:

**Default value**


::

   JPEG 

.. raw:: html

   <a name="16705"></a>

GrayImageDepth
--------------

Specifies the number of bits per sample in the image. The following values are valid:

-  The number of bits per sample: ``1`` , ``2`` , ``4`` , or ``8`` .
-  ``-1`` , which forces the downsampled image to have the same number of bits per sample as the original image

See `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__ for more information.

.. _supported-by-43:

**Supported by**


Distiller

.. _type-43:

**Type**


integer

.. _default-value-39:

**Default value**


::

   -1

.. raw:: html

   <a name="79547"></a>

GrayImageDict
-------------

Dictionary of parameters for JPEG compression. ``GrayImageDict`` is based on the ``DCTEncode`` parameter dictionary described in Section 3.13.3 in the *PostScript Language Reference* .

See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for details on how this dictionary is used.

.. _supported-by-44:

**Supported by**


all applications

.. _type-44:

**Type**


dictionary

.. _ui-name-32:

**UI name**


Compression, Image Quality

.. _default-value-40:

**Default value**


::

   <</Qfactor 0.76 /Hsamples [2 1 1 2] /Vsamples [2 1 1 2]>>

.. raw:: html

   <a name="70763"></a>

GrayImageDownsampleThreshold
----------------------------

Sets the image downsample threshold for grayscale images. This is the ratio of image resolution to output resolution above which downsampling may be performed.

See `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__ for details on using this setting.

.. _supported-by-45:

**Supported by**


all applications

.. _type-45:

**Type**


number

.. _ui-name-33:

**UI name**


pixels per inch, for images above: *value* pixels per inch

.. _default-value-41:

**Default value**


::

   1.50000 

.. raw:: html

   <a name="87439"></a>

GrayImageDownsampleType
-----------------------

Must be one of the following values.

.. _section-8:


 

+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
| Value                 | UI equivalent           | Description                                                                         |
+=======================+=========================+=====================================================================================+
|                       | Average Downsampling to | Groups of samples are averaged to get the new downsampled value.                    |
|                       |                         |                                                                                     |
|    Average            |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Bicubic Downsampling to | Bicubic interpolation is used on a group of samples to get a new downsampled value. |
|                       |                         |                                                                                     |
|    Bicubic            |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Subsampling to          | The center sample from a group of samples is used as the new downsampled value.     |
|                       |                         |                                                                                     |
|    Subsample          |                         |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+
|                       | Distiller: Off          | No sampling                                                                         |
|                       |                         |                                                                                     |
|    None               | CS: Do Not Downsample   |                                                                                     |
+-----------------------+-------------------------+-------------------------------------------------------------------------------------+

.. _supported-by-46:

**Supported by**


all applications

.. _type-46:

**Type**


name

.. _ui-name-34:

**UI name**


Sampling

.. _default-value-42:

**Default value**


::

   Bicubic

.. raw:: html

   <a name="87077"></a>

GrayImageFilter
---------------

Specifies the compression filter to be used for grayscale images. Ignored if ``AutoFilterGrayImages`` is ``true`` or ``EncodeGrayImages`` is ``false`` . The following values are valid.

.. _section-9:


 

+-----------------------+-----------------------+----------------------------------+
| Value                 | UI equivalent         | Description                      |
+=======================+=======================+==================================+
|                       | JPEG                  | Selects JPEG compression.        |
|                       |                       |                                  |
|    DCTEncode          |                       |                                  |
+-----------------------+-----------------------+----------------------------------+
|                       | ZIP                   | Selects Flate (ZIP) compression. |
|                       |                       |                                  |
|    FlateEncode        |                       |                                  |
+-----------------------+-----------------------+----------------------------------+
|                       | JPEG2000              | Selects JPEG2000 compression.    |
|                       |                       |                                  |
|    JPXEncode          |                       |                                  |
+-----------------------+-----------------------+----------------------------------+

.. note::

   JPEG2000 options only appear in UI if ``CompatibilityLevel`` is set to 1.5 or higher.

``DCTEncode`` is used only if the output image has 8 bits per sample; otherwise ``FlateEncode`` is used. For compatibility with Distiller 3.0 Adobe PDF settings files, Distiller 6.0 and later (as well as Creative Suite applications) revert to Flate compression if this setting is set to ``LZWEncode`` .

.. _supported-by-47:

**Supported by**


all applications

.. _type-47:

**Type**


name

.. _ui-name-35:

**UI name**


Compression

.. _default-value-43:

**Default value**


::

   DCTEncode

.. raw:: html

   <a name="93916"></a>

GrayImageMinDownsampleDepth
---------------------------

If ``DownsampleGrayImages`` is ``true`` , controls the range of bit depths for which gray image downsampling occurs. Valid values are 2, 4 or 8.

For more information, see `Controlling the range of bit depths for which downsampling occurs <PDF_Create_UsingSettings.html#70454>`__.

.. _supported-by-48:

**Supported by**


Distiller

.. _type-48:

**Type**


integer

.. _default-value-44:

**Default value**


::

   2 

.. raw:: html

   <a name="83370"></a>

GrayImageMinResolution
----------------------

Imposes a lower limit to the resolution of sampled grayscale images. The legal values are from 9 to 64000, inclusive. How this value is used by Distiller is determined by ``GrayImageMinResolutionPolicy`` . For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-49:

**Supported by**


Distiller

.. _type-49:

**Type**


integer

.. _ui-name-36:

**UI name**


Policy->Grayscale Image Policy

.. _default-value-45:

**Default value**


::

   150

.. raw:: html

   <a name="58792"></a>

GrayImageMinResolutionPolicy
----------------------------

Sets the policy for imposition of a lower limit to the resolution of sampled images as specified by the ``GrayImageMinResolution`` setting. The following values are valid.

.. _section-10:


 

+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                     |
+=======================+=======================+=================================================================================================================================================================================================================+
|                       | Ignore                | Distiller's default behavior does not change—i.e., Distiller does not enforce any lower limit on image resolution, ignoring any value specified by ``GrayImageMinResolution`` .                                 |
|                       |                       |                                                                                                                                                                                                                 |
|    OK                 |                       |                                                                                                                                                                                                                 |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Warn and continue     | A warning is issued every time a sampled grayscale image with resolution smaller than the value specified by ``GrayImageMinResolution`` is placed in the PDF file. The job continues after issuing the warning. |
|                       |                       |                                                                                                                                                                                                                 |
|    Warning            |                       |                                                                                                                                                                                                                 |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Cancel job            | An error occurs when a sampled grayscale image with resolution smaller than the value specified by ``GrayImageMinResolution`` is placed in the PDF file. The job fails with a limit check error.                |
|                       |                       |                                                                                                                                                                                                                 |
|    Error              |                       |                                                                                                                                                                                                                 |
+-----------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-50:

**Supported by**


Distiller

.. _type-50:

**Type**


name

.. _ui-name-37:

**UI name**


Policy->Grayscale Image Policy

.. _default-value-46:

**Default value**


::

   OK

.. raw:: html

   <a name="83653"></a>

GrayImageResolution
-------------------

Specifies the resolution to which downsampled gray images are reduced. Valid values are 9 to 2400 pixels per inch. A gray image is downsampled if ``DownsampleGrayImages`` is ``true`` and the resolution of the input image meets the criteria described in `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__.

.. _supported-by-51:

**Supported by**


all applications

.. _type-51:

**Type**


integer

.. _ui-name-38:

**UI name**


pixels per inch

.. _default-value-47:

**Default value**


::

   150 

.. raw:: html

   <a name="90478"></a>

JPEG2000GrayACSImageDict
------------------------

Dictionary of parameters for automatic JPEG2000 compression of grayscale. See `JPEG2000 <PDF_Create_UsingSettings.html#60774>`__ for details.

.. _supported-by-52:

**Supported by**


all applications

.. _type-52:

**Type**


dictionary

.. _ui-name-39:

**UI name**


Compression, Image Quality, Tile Size

.. _default-value-48:

**Default value**


::

   <</TileWidth 256 /TileHeight 256 /Quality 15>>

.. raw:: html

   <a name="99239"></a>

JPEG2000GrayImageDict
---------------------

Dictionary of parameters for JPEG2000 compression of grayscale images. See `JPEG2000 <PDF_Create_UsingSettings.html#60774>`__ for details.

.. _supported-by-53:

**Supported by**


all applications

.. _type-53:

**Type**


dictionary

.. _ui-name-40:

**UI name**


Compression, Image Quality, Tile Size

.. _default-value-49:

**Default value**


::

   <</TileWidth 256 /TileHeight 256 /Quality 15 >>


.. raw:: html

   <a name="80036"></a>

Monochrome image settings
=========================

This section lists the compression and downsampling settings for monochrome images (images with only one color component and one bit per sample). See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for more information.

.. note::

   With the exception of the ``AntiAliasMonoImages`` and ``MonoImageDepth`` settings, the compression settings also can be applied to stencil masks created by the ``imagemask`` operator. Settings behavior is the same in both cases. For details on ``imagemask`` , see the *PostScript Language Reference* .

.. raw:: html

   <a name="60083"></a>

AntiAliasMonoImages
-------------------

If ``true`` , anti-aliasing is permitted on monochrome images.

Anti-aliasing increases the number of bits per sample in downsampled images to preserve some of the information that is otherwise lost by downsampling. Anti-aliasing is only performed if the image is actually downsampled and ``MonoImageDepth`` has a value greater than 1. For more information on anti-aliasing see `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__.

.. note::

   Distiller does not do anti-aliasing for image masks, regardless of the value of ``AntiAliasMonoImages`` .

.. _supported-by-54:

**Supported by**


Distiller

.. _type-54:

**Type**


Boolean

.. _ui-name-41:

**UI name**


Anti-Alias to gray

.. _default-value-50:

**Default value**


::

   false

.. raw:: html

   <a name="31068"></a>

CropMonoImages
--------------

If ``false`` , monochrome images are never cropped, whether or not the current clip would remove any image samples.

For more information, see `Disabling of image cropping <PDF_Create_UsingSettings.html#16777>`__.

.. _supported-by-55:

**Supported by**


Distiller

.. _type-55:

**Type**


Boolean

.. _default-value-51:

**Default value**


::

   true

.. raw:: html

   <a name="91682"></a>

DownsampleMonoImages
--------------------

If ``true`` , monochrome images are downsampled using the resolution specified by ``MonoImageResolution`` . If ``false`` , downsampling is not done and the resolution of monochrome images in the PDF file is the same as the source images.

.. _supported-by-56:

**Supported by**


all applications

.. _type-56:

**Type**


Boolean

.. _ui-name-42:

**UI name**


Sampling

.. _default-value-52:

**Default value**


::

   true

.. raw:: html

   <a name="49057"></a>

EncodeMonoImages
----------------

If ``true`` , monochrome images are encoded using the compression filter specified by the value of ``MonoImageFilter`` . If ``false`` , no compression filters are applied to monochrome images.

.. _supported-by-57:

**Supported by**


all applications

.. _type-57:

**Type**


Boolean

.. _ui-name-43:

**UI name**


Compression

.. _default-value-53:

**Default value**


::

   true

.. raw:: html

   <a name="72434"></a>

MonoImageDepth
--------------

Specifies the number of bits per sample in a downsampled image. Allowed values are:

-  The number of bits per sample: ``1`` , ``2`` , ``4`` , or ``8`` . When the value is greater than ``1`` , monochrome images are converted to grayscale images.
-  ``-1`` , which forces the downsampled image to have the same number of bits per sample as the original image. (For monochrome images, this is the same as a value of 1.)

``MonoImageDepth`` is not used unless ``DownsampleMonoImages`` and ``AntiAliasMonoImages`` are ``true`` . See `Controlling bit depth <PDF_Create_UsingSettings.html#95410>`__ for more information.

.. note::

   Distiller ignores ``MonoImageDepth`` for image masks.

.. _supported-by-58:

**Supported by**


Distiller

.. _type-58:

**Type**


integer

.. _ui-name-44:

**UI name**


Anti-Alias to gray

.. _default-value-54:

**Default value**


::

   -1

.. raw:: html

   <a name="79634"></a>

MonoImageDict
-------------

Dictionary of parameters for CCITT compression. ``MonoImageDict`` is based on the ``CCITTFaxEncode`` parameter dictionary. A value of ``-1`` for ``K`` corresponds to CCITT Group 4; 0 corresponds to CCITT group 3. See `Monochrome (black and white) images <PDF_Create_UsingSettings.html#90740>`__ for more information.

.. _supported-by-59:

**Supported by**


all applications

.. _type-59:

**Type**


dictionary

.. _ui-name-45:

**UI name**


Compression, Quality

.. _default-value-55:

**Default value**


::

   << /K -1 >>

.. raw:: html

   <a name="61923"></a>

MonoImageDownsampleThreshold
----------------------------

Sets the image downsample threshold for monochrome images. This is the ratio of image resolution to output resolution above which downsampling may be performed. See `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__ for more information.

.. _supported-by-60:

**Supported by**


all applications

.. _type-60:

**Type**


number

.. _ui-name-46:

**UI name**


pixels-per-inch for images above: *value* pixels-per-inch

.. _default-value-56:

**Default value**


``1.50000`` (UI shows 450 pixels-per-inch)

.. raw:: html

   <a name="27721"></a>

MonoImageDownsampleType
-----------------------

Must be one of the following values.

.. _section-11:


 

+-----------------------+---------------------------------------+-------------------------------------------------------------------------------------+
| Value                 | UI equivalent                         | Description                                                                         |
+=======================+=======================================+=====================================================================================+
|                       | Average Downsampling to               | Groups of samples are averaged to get the new downsampled value.                    |
|                       |                                       |                                                                                     |
|    Average            |                                       |                                                                                     |
+-----------------------+---------------------------------------+-------------------------------------------------------------------------------------+
|                       | Bicubic Downsampling to               | Bicubic interpolation is used on a group of samples to get a new downsampled value. |
|                       |                                       |                                                                                     |
|    Bicubic            |                                       |                                                                                     |
+-----------------------+---------------------------------------+-------------------------------------------------------------------------------------+
|                       | Subsampling to                        | The center sample from a group of samples is used as the new downsampled value.     |
|                       |                                       |                                                                                     |
|    Subsample          |                                       |                                                                                     |
+-----------------------+---------------------------------------+-------------------------------------------------------------------------------------+
|                       | Distiller: Off; CS: Do Not Downsample | No sampling                                                                         |
|                       |                                       |                                                                                     |
|    None               |                                       |                                                                                     |
+-----------------------+---------------------------------------+-------------------------------------------------------------------------------------+

.. _supported-by-61:

**Supported by**


all applications

.. _type-61:

**Type**


name

.. _ui-name-47:

**UI name**


Sampling

.. _default-value-57:

**Default value**


::

   Bicubic

.. raw:: html

   <a name="77003"></a>

MonoImageFilter
---------------

Specifies the compression filter to be used for monochrome images. Must be one of the following values:

.. _section-12:


 

+-----------------------+-----------------------+-----------------------------------------------+
| Value                 | UI equivalent         | Description                                   |
+=======================+=======================+===============================================+
|                       | CCITT Group 3/        | Selects CCITT Group 3 or 4 facsimile encoding |
|                       |                       |                                               |
|    CCITTFaxEncode     | CCITT Group 4         |                                               |
+-----------------------+-----------------------+-----------------------------------------------+
|                       | ZIP                   | Selects Flate (ZIP) compression               |
|                       |                       |                                               |
|    FlateEncode        |                       |                                               |
+-----------------------+-----------------------+-----------------------------------------------+
|                       | Run Length            | Selects run length encoding                   |
|                       |                       |                                               |
|    RunLengthEncode    |                       |                                               |
+-----------------------+-----------------------+-----------------------------------------------+

For compatibility with Distiller 3.0 Adobe PDF settings files, Distiller 6.0 and later (as well as Creative Suite applications) revert to Flate compression if this setting is set to ``LZWEncode`` . Other values cause Distiller to stop with a range error.

.. _supported-by-62:

**Supported by**


all applications

.. _type-62:

**Type**


name

.. _ui-name-48:

**UI name**


Compression

.. _default-value-58:

**Default value**


::

   CCITTFaxEncode

.. raw:: html

   <a name="27387"></a>

MonoImageMinResolution
----------------------

Imposes a lower limit to the resolution of sampled monochrome images. The legal values are from 9 to 64000, inclusive. How this value is used by Distiller is determined by ``MonoImageMinResolutionPolicy`` . For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-63:

**Supported by**


Distiller

.. _type-63:

**Type**


integer

.. _ui-name-49:

**UI name**


Policy->Monochrome Image Policy

.. _default-value-59:

**Default value**


::

   300

.. raw:: html

   <a name="54212"></a>

MonoImageMinResolutionPolicy
----------------------------

Sets the policy for imposition of a lower limit to the resolution of sampled images as specified by the ``MonoImageMinResolution`` setting. The following values are valid.

.. _section-13:


 

+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                      |
+=======================+=======================+==================================================================================================================================================================================================================+
|                       | Ignore                | Distiller's default behavior does not change—i.e., Distiller does not enforce any lower limit on image resolution, ignoring any value specified by ``MonoImageMinResolution`` .                                  |
|                       |                       |                                                                                                                                                                                                                  |
|    OK                 |                       |                                                                                                                                                                                                                  |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Warn and continue     | A warning is issued every time a sampled monochrome image with resolution smaller than the value specified by ``MonoImageMinResolution`` is placed in the PDF file. The job continues after issuing the warning. |
|                       |                       |                                                                                                                                                                                                                  |
|    Warning            |                       |                                                                                                                                                                                                                  |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Cancel job            | An error occurs when a sampled monochrome image with resolution smaller than the value specified by ``MonoImageMinResolution`` is placed in the PDF file. The job fails with a limit check error.                |
|                       |                       |                                                                                                                                                                                                                  |
|    Error              |                       |                                                                                                                                                                                                                  |
+-----------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

For more information, see `Specifying a minimum resolution of sampled images <PDF_Create_UsingSettings.html#75361>`__.

.. _supported-by-64:

**Supported by**


Distiller

.. _type-64:

**Type**


name

.. _ui-name-50:

**UI name**


Policy->Monochrome Image Policy

.. _default-value-60:

**Default value**


::

   OK

.. raw:: html

   <a name="38342"></a>

MonoImageResolution
-------------------

Specifies the resolution to which downsampled monochrome images are reduced; valid values are 9 to 2400 pixels per inch. A monochrome image is downsampled if ``DownsampleMonoImages`` is ``true`` and the resolution of the input image meets the criteria described in `Downsampling and subsampling images <PDF_Create_UsingSettings.html#68478>`__.

.. _supported-by-65:

**Supported by**


all applications

.. _type-65:

**Type**


integer

.. _ui-name-51:

**UI name**


pixels per inch

.. _default-value-61:

**Default value**


::

   300


.. raw:: html

   <a name="16406"></a>

Page Compression Setting
========================

This section describes the page compression setting.

.. raw:: html

   <a name="84100"></a>

CompressPages
-------------

If ``true`` , Flate compression is used to compress page content streams as well as form, pattern, and Type 3 font content streams.

InDesign also compresses ICC profiles, OutputIntentProfile and shading streams.

.. _supported-by-66:

**Supported by**


all applications

.. _type-66:

**Type**


Boolean

.. _ui-name-52:

**UI name**


Distiller: *none*

InDesign: Compress Text and Line Art

.. _default-value-62:

**Default value**


::

   true


.. raw:: html

   <a name="38175"></a>

Font settings
=============

This section lists the settings available for controlling font embedding and subsetting. For more information on font embedding, see `Using the font settings <PDF_Create_UsingSettings.html#38175>`__.

.. note::

   Embedding is subject to license; specific fonts can indicate that embedding is not permitted.

.. raw:: html

   <a name="41375"></a>

AlwaysEmbed
-----------

An array consisting either entirely of font names, or of a Boolean value followed by font names. Each name is the PostScript language name of the font (the name given to ``definefont`` ).

-  If the array consists entirely of names, Distiller sets its internal list of fonts that must be embedded to be exactly the list of names in the array.
-  If the first array value is the Boolean ``true`` , Distiller adds the font names in the rest of the ``AlwaysEmbed`` array to its internal list of fonts that must be embedded.
-  If the first array value is the Boolean ``false`` , Distiller removes the font names in the rest of the ``AlwaysEmbed`` array from its internal list of fonts to be embedded.

If a font name appears in both ``AlwaysEmbed`` and ``NeverEmbed`` , ``NeverEmbed`` takes precedence.

.. _supported-by-67:

**Supported by**


Distiller

.. _type-67:

**Type**


array

.. _ui-name-53:

**UI name**


Always Embed Font

.. _default-value-63:

**Default value**


::

   [true]

CannotEmbedFontPolicy
---------------------

The policy Distiller uses if it cannot find, or cannot embed, the font. The following values are valid.

.. _section-14:


 

+-----------------------+-----------------------+---------------------------------------------+
| Value                 | UI equivalent         | Description                                 |
+=======================+=======================+=============================================+
|                       | Ignore                | Distiller ignores and continues.            |
|                       |                       |                                             |
|    OK                 |                       |                                             |
+-----------------------+-----------------------+---------------------------------------------+
|                       | Warn and continue     | Distiller displays a warning and continues. |
|                       |                       |                                             |
|    Warning            |                       |                                             |
+-----------------------+-----------------------+---------------------------------------------+
|                       | Cancel job            | Distiller quits distilling the current job. |
|                       |                       |                                             |
|    Error              |                       |                                             |
+-----------------------+-----------------------+---------------------------------------------+

.. _supported-by-68:

**Supported by**


Distiller

.. _type-68:

**Type**


name

.. _ui-name-54:

**UI name**


When embedding fails

.. _default-value-64:

**Default value**


::

   Warning

.. raw:: html

   <a name="62786"></a>

EmbedAllFonts
-------------

If ``true`` , all fonts that have correct permissions are embedded in the PDF file; if ``false`` , they are not embedded:

-  Creative Suite applications automatically embed fonts.
-  Distiller never embeds fonts in its ``NeverEmbed`` list even if this setting is ``true`` .

.. _supported-by-69:

**Supported by**


Distiller

**Name:** Boolean

.. _ui-name-55:

**UI name**


Embed all fonts

.. _default-value-65:

**Default value**


::

   true

EmbedOpenType
-------------

If ``true`` , OpenType fonts are embedded only if all of the following are true:

-  The OpenType font is to be embedded within a Type 1 font descriptor
-  ``EmbedOpenType`` is ``true``
-  ``CompatibilityLevel`` is 1.6 or higher
-  ``SubsetFonts`` is ``false`` , or ``SubsetFonts`` is ``true`` and the percentage of characters used is greater than ``MaxSubsetPct`` .

.. _supported-by-70:

**Supported by**


Distiller

.. _type-69:

**Type**


Boolean

.. _ui-name-56:

**UI name**


Embed OpenType fonts

.. note::

   Embed OpenType fonts can only be set from the UI if ``CompatibilityLevel`` is set to 1.6 or higher.

.. _default-value-66:

**Default value**


::

   false

.. raw:: html

   <a name="32083"></a>

MaxSubsetPct
------------

The maximum percentage of glyphs in a font that can be used before the entire font is embedded instead of a subset. The allowable range is 1 through 100.

Distiller only uses this value if ``SubsetFonts`` is ``true`` . For example, a value of 30 means that a font will be embedded in full (not subset) if more than 30% of glyphs are used; a value of 100 means all fonts will be subset no matter how many glyphs are used (because you cannot use more than 100% of glyphs).

.. _supported-by-71:

**Supported by**


all applications

.. _type-70:

**Type**


integer

.. _ui-name-57:

**UI name**


Subset embedded fonts when percent of characters used is less than: *value* %

.. _default-value-67:

**Default value**


::

   100

.. raw:: html

   <a name="83204"></a>

NeverEmbed
----------

An array consisting either entirely of font names, or of a Boolean value followed by font names. Each font name must be the PostScript language name of the font (that is, the name given to ``definefont`` ).

-  If the array consists entirely of names, Distiller sets its internal list of fonts that must never be embedded to be exactly the list of names in the array.
-  If the first array value is the Boolean ``true`` , Distiller adds the font names in the rest of the ``NeverEmbed`` array to its internal list of fonts that must never be embedded.
-  If the first array value is the Boolean ``false`` , Distiller removes the font names in the rest of the ``NeverEmbed`` array from its internal list of fonts to never be embedded.

If a font name appears in both ``AlwaysEmbed`` and ``NeverEmbed`` , ``NeverEmbed`` takes precedence.

.. _supported-by-72:

**Supported by**


Distiller

.. _type-71:

**Type**


array

.. _ui-name-58:

**UI name**


Never Embed Font

.. _default-value-68:

**Default value**


::

   [true]

.. raw:: html

   <a name="95022"></a>

SubsetFonts
-----------

If ``true`` , font subsetting is enabled. If ``false`` , subsetting is not enabled. Font subsetting embeds only those glyphs that are used in a document, instead of the entire font. This reduces the size of a PDF file that contains embedded fonts. If font subsetting is enabled, the application determines whether to embed the entire font or a subset by the number of glyphs in the font that are used (including component glyphs referenced by 'seac' [Type 1] glyphs), and the value of ``MaxSubsetPct`` .

Subsetted fonts in the PDF file appear with a 6-letter prefix and a plus (+) sign. For example, Palatino subsetted may appear as:

::

     NPBOME+Palatino-Roman

.. note::

   Embedded instances of multiple master fonts and of Type 3, TrueType, and CID fonts are always subsetted, regardless of the value of ``SubsetFonts`` .

.. _supported-by-73:

**Supported by**


all applications

.. _type-72:

**Type**


Boolean

.. _ui-name-59:

**UI name**


Subset embedded fonts when percent of characters used is less than:

.. raw:: html

   <a name="99371"></a>

Color conversion settings
=========================

This section lists the color conversion settings supported by Distiller. Some are indicated as supported by Creative Suite applications and can approximate the settings defined in the ``CreativeSuite`` namespace, which provide greater control over color conversions. Creative Suite applications can use these settings if present and write them to settings files for compatibility. See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details.

.. raw:: html

   <a name="20259"></a>

CalCMYKProfile
--------------

The name of the ICC profile that is used for tagging or converting CMYK images, text, and/or graphics.

.. note::

   Creative Suite applications give precedence to their own color management settings and may use this setting for compatibility with Distiller; see `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details.

.. _supported-by-74:

**Supported by**


all applications

.. _type-73:

**Type**


string

.. _ui-name-60:

**UI name**


Working Spaces: CMYK

.. _default-value-69:

**Default value**


::

   (U.S. Web Coated SWOP v2)

.. raw:: html

   <a name="59365"></a>

CalGrayProfile
--------------

The name of the ICC profile that is used for tagging or converting Gray images, text, and/or graphics.

.. note::

   Creative Suite applications give precedence to their own color management settings and may use this setting for compatibility with Distiller; see `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details.

.. _supported-by-75:

**Supported by**


all applications

.. _type-74:

**Type**


string

.. _ui-name-61:

**UI name**


Working Spaces: Gray

.. raw:: html

   <a name="95437"></a>

CalRGBProfile
-------------

The name of the ICC profile that is used for tagging or converting RGB images, text, and/or graphics.

.. note::

   Creative Suite applications give precedence to their own color management settings and may use this setting for compatibility with Distiller; see `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details.

.. _supported-by-76:

**Supported by**


all applications

.. _type-75:

**Type**


string

.. _ui-name-62:

**UI name**


Working Spaces: RGB

.. _default-value-70:

**Default value**


::

   (sRGB IEC61966-2.1)

.. raw:: html

   <a name="13366"></a>

ColorConversionStrategy
-----------------------

Sets the color conversion strategy, which includes the output color family and color space and the inclusion of ICC profiles.

See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for details on how to use this setting.

The section `Color settings interchange <PDF_Create_UsingSettings.html#35911>`__ describes how the values of this setting map to those in the ``CreativeSuite`` ``namespace`` .

The following values are valid.

.. _section-15:


 

+----------------------------------------+----------------------------------------+
| Value                                  | UI equivalent                          |
+========================================+========================================+
|                                        | Leave Color Unchanged                  |
|                                        |                                        |
|    LeaveColorUnchanged                 |                                        |
+----------------------------------------+----------------------------------------+
|                                        | | Tag Everything for Color Management  |
|                                        | | (no conversion)                      |
|    UseDeviceIndependentColor           |                                        |
+----------------------------------------+----------------------------------------+
|                                        | | Tag Only Images for Color Management |
|                                        | | (no conversion)                      |
|    UseDeviceIndependendColor-ForImages |                                        |
+----------------------------------------+----------------------------------------+
|                                        | Convert All Colors to sRGB             |
|                                        |                                        |
|    sRGB                                |                                        |
+----------------------------------------+----------------------------------------+
|                                        | Convert All Colors to CMYK             |
|                                        |                                        |
|    CMYK                                |                                        |
+----------------------------------------+----------------------------------------+

.. _supported-by-77:

**Supported by**


all applications

.. _type-76:

**Type**


name

.. _ui-name-63:

**UI name**


Distiller: Color Management Policies

Creative Suite: no single setting (see below)

.. _default-value-71:

**Default value**


::

   sRGB

.. raw:: html

   <a name="26433"></a>

ColorSettingsFile
-----------------

Specifies the name of a color settings file to be used for color conversions. When this file is specified as a non-empty value, all other color conversion settings are ignored and not selectable in the UI.

If the name is ``(None)`` or ``()`` , the other settings are used.

The Creative Suite applications use color settings files but do not use this setting. See `Using the color conversion settings <PDF_Create_UsingSettings.html#86731>`__ for more information.

.. _supported-by-78:

**Supported by**


Distiller

.. _type-77:

**Type**


string

.. _ui-name-64:

**UI name**


Settings File

.. _default-value-72:

**Default value**


::

   ()

.. raw:: html

   <a name="17572"></a>

DefaultRenderingIntent
----------------------

Specifies the rendering intent for objects to be written to the PDF document, when not otherwise specified in the PostScript job by means of the ``findcolorrendering`` and ``setcolorrendering`` operators (see Section 7.1.3 in the *PostScript Language Reference* for details).

If the value of this setting is ``Default`` , no rendering intent is written to the PDF document. The following values are valid.

.. _section-16:


 

+-----------------------------------+-----------------------------------+
| Value                             | UI equivalent                     |
+===================================+===================================+
|                                   | Preserve                          |
|                                   |                                   |
|    Default                        |                                   |
+-----------------------------------+-----------------------------------+
|                                   | Perceptual                        |
|                                   |                                   |
|    Perceptual                     |                                   |
+-----------------------------------+-----------------------------------+
|                                   | Saturation                        |
|                                   |                                   |
|    Saturation                     |                                   |
+-----------------------------------+-----------------------------------+
|                                   | Absolute Colorimetric             |
|                                   |                                   |
|    AbsoluteColorimetric           |                                   |
+-----------------------------------+-----------------------------------+
|                                   | Relative Colorimetric             |
|                                   |                                   |
|    RelativeColorimetric           |                                   |
+-----------------------------------+-----------------------------------+

.. _supported-by-79:

**Supported by**


Distiller

.. _type-78:

**Type**


name

.. _ui-name-65:

**UI name**


Document Rendering Intent

.. _default-value-73:

**Default value**


::

   Default

.. raw:: html

   <a name="53017"></a>

ParseICCProfilesInComments
--------------------------

If ``true`` , Distiller honors EPS embedded ICC profiles when distilling. ICC profiles are honored only if they are enclosed in two DSC pairs: ``ICCProfile`` and ``SetColorSpace`` . See the ICC specification (available at http://www.color.org ), section B.2, for details on the syntax of these comment pairs.

This setting is ignored if ``CompatibilityLevel`` is set to 1.2.

.. _supported-by-80:

**Supported by**


Distiller

.. _type-79:

**Type**


Boolean

.. _ui-name-66:

**UI name**


*none*

.. _default-value-74:

**Default value**


::

   true

.. raw:: html

   <a name="50470"></a>

PreserveDICMYKValues
--------------------

Describes what to do with color values for device-independent CMYK color spaces. This setting is used only if ``ColorConversionStrategy`` is ``CMYK`` .

If ``true`` , CIEBasedDEFG CMYK color values are treated as DeviceCMYK values; CIEBasedDEFG color spaces will be ignored and discarded. If ``false`` , a conversion from CIEBasedDEFG color space to CMYK working space is performed.

.. _supported-by-81:

**Supported by**


Distiller

.. _type-80:

**Type**


Boolean

.. _ui-name-67:

**UI name**


Preserve CMYK values for calibrated CMYK color spaces

.. _default-value-75:

**Default value**


::

   true

.. raw:: html

   <a name="93521"></a>

PreserveHalftoneInfo
--------------------

If ``true`` , Distiller passes halftone screen information (frequency, angle, and spot function) into the PDF file. If ``false`` , halftone information is not passed in.

.. _supported-by-82:

**Supported by**


Distiller

.. _type-81:

**Type**


Boolean

.. _ui-name-68:

**UI name**


Preserve Halftone Information

.. _default-value-76:

**Default value**


::

   false

.. raw:: html

   <a name="25712"></a>

sRGBProfile
-----------

*(Read Only)* The name of the ICC profile that is used for converting device-dependent or device-independent color spaces to CalRGB (PDF 1.2) or ICCBased (PDF 1.3 and above).

.. _supported-by-83:

**Supported by**


all applications

.. _type-82:

**Type**


string

.. _default-value-77:

**Default value**


::

   (sRGB IEC61966-2.1)

.. raw:: html

   <a name="12788"></a>

TransferFunctionInfo
--------------------

Determines how Distiller handles transfer functions, which are traditionally used to compensate for dot gain or dot loss that may occur when an image is transferred to film. For example, a file that is intended for output on a particular imagesetter may contain transfer functions that compensate for the dot gain inherent with that printer. The following values are valid.

.. _section-17:


 

+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                                                                                                                                                                                                              |
+=======================+=======================+==========================================================================================================================================================================================================================================================================================================================================================+
|                       | Preserve              | Distiller preserves (passes into the PDF file) transfer functions.                                                                                                                                                                                                                                                                                       |
|                       |                       |                                                                                                                                                                                                                                                                                                                                                          |
|    Preserve           |                       |                                                                                                                                                                                                                                                                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Remove                | Distiller ignores transfer functions. They are neither applied to the color values by Distiller nor passed into the PDF file.                                                                                                                                                                                                                            |
|                       |                       |                                                                                                                                                                                                                                                                                                                                                          |
|    Remove             |                       |                                                                                                                                                                                                                                                                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Apply                 | Distiller uses the transfer function to modify the data it writes to the PDF file, instead of writing the transfer function itself to the file. This value is ignored by Distiller 4.0 but supported by Distiller 5.0 and later. It is sometimes used to achieve artistic effects (although the *PostScript Language Reference* discourages such usage). |
|                       |                       |                                                                                                                                                                                                                                                                                                                                                          |
|    Apply              |                       |                                                                                                                                                                                                                                                                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

If you are generating PDF/X-compliant files, do not set this to ``Preserve`` .

.. _supported-by-84:

**Supported by**


Distiller

.. _type-83:

**Type**


name

.. _ui-name-69:

**UI name**


When transfer functions are found:

.. _default-value-78:

**Default value**


::

   Preserve

.. raw:: html

   <a name="19009"></a>

UCRandBGInfo
------------

Tells Distiller whether to pass the arguments to ``setundercolorremoval`` and ``setblackgeneration`` into the PDF file.

Must be one of the following values.

.. _section-18:


 

+-----------------------+-----------------------+---------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                   |
+=======================+=======================+===============================================================+
|                       | checked               | Distiller preserves (passes into the PDF file) the arguments. |
|                       |                       |                                                               |
|    Preserve           |                       |                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------+
|                       | unchecked             | Distiller ignores the arguments.                              |
|                       |                       |                                                               |
|    Remove             |                       |                                                               |
+-----------------------+-----------------------+---------------------------------------------------------------+

See Section 7.2.3 in the *PostScript Language Reference* for details on the ``setundercolorremoval`` and ``setblackgeneration`` operators and descriptions of undercolor removal (UCR) and black generation (BG)

.. _supported-by-85:

**Supported by**


Distiller

.. _type-84:

**Type**


name

.. _ui-name-70:

**UI name**


Preserve Under Color Removal and Black Generation

.. _default-value-79:

**Default value**


::

   Remove


.. raw:: html

   <a name="86103"></a>

Advanced Adobe PDF settings
===========================

This section lists the settings in the Advanced panel of the Distiller settings dialog box. Some of these settings are also supported by Creative Suite applications, as indicated.

AllowPSXObjects
---------------

If ``true`` , allow PostScript XObjects. For a description of PostScript XObjects, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

.. _supported-by-86:

**Supported by**


Distiller

.. _type-85:

**Type**


Boolean

.. _ui-name-71:

**UI name**


Allow PostScript XObjects

.. _default-value-80:

**Default value**


::

   true

.. raw:: html

   <a name="30729"></a>

AllowTransparency
-----------------

The ``SetTransparency pdfmark`` is a ``pdfmark`` extension used to produce transparency in PDF 1.4 and later. For more details, see the ` <../pdfMarkReference/pdfmark_Syntax.html#95983>`__. If this setting is ``true, [... /SetTransparency pdfmark`` is allowed in PS jobs if ``CompatibilityLevel`` is 1.4 or higher. If ``false`` , this ``pdfmark`` is treated as error.

.. note::

   Creative Suite applications always include transparency in the exported PDF if ``CompatibilityLevel`` is 1.4 or higher.

.. _supported-by-87:

**Supported by**


Distiller

.. _type-86:

**Type**


Boolean

.. _default-value-81:

**Default value**


::

   false

ASCII85EncodePages
------------------

If ``true`` , Distiller ASCII85-encodes binary streams such as page content streams, sampled images, and embedded fonts, resulting in a PDF file that is pure ASCII. If ``false`` , Distiller does not encode the binary streams, resulting in a PDF file that may contain substantial amounts of binary data. Distiller checks the value of this setting only once per document. Any change to it must be made before any marks are placed on the first page of the document.

.. _supported-by-88:

**Supported by**


Distiller

.. _type-87:

**Type**


Boolean

.. _default-value-82:

**Default value**


::

   false

AutoPositionEPSFiles
--------------------

If ``true`` , Distiller resizes the created page to the size of the EPS file using the ``%%BoundingBox`` comment in the header of the file, and centers the EPS file on the page when the EPS file is distilled. Distiller ignores this setting if ``ParseDSCComments`` is ``false`` .

.. _supported-by-89:

**Supported by**


Distiller

.. _type-88:

**Type**


Boolean

.. _ui-name-72:

**UI name**


Resize page and center artwork for EPS files

.. _default-value-83:

**Default value**


::

   true

.. raw:: html

   <a name="76577"></a>

CreateJDFFile
-------------

If ``true`` , Distiller produces a Job Definition Format (JDF) file that reflects the parameters used for distillation. If ``false`` , a JDF file is not produced.

The Job Definition Format (JDF) Specification is owned and maintained by the International Cooperation for the Integration of Processes in Prepress, Press and PostPress (CIP4) (www.cip4.org). Distiller 7.0 complies with JDF Specification Version 1.1 Revision A, published on September 5, 2002. It is available on the web at:

http://www.cip4.org/documents/jdf_specifications/index.html

.. note::

   The Acrobat 7 Professional product now supports creation of both JDF 1.1- and JDF 1.2-compliant JDF files. For more information, see the *Acrobat Guide* in Distiller online Help.

The Adobe Normalizer product (see *Using Adobe Normalizer Server, Version 6.0.4* ) is also capable of producing JDF files, but it can consume them as well. `Conversions Related to JDF <PDF_Create_JDF.html#95687>`__," describes how Normalizer interprets and converts Distiller parameters; use this information to understand the JDF file created by Distiller.

The JDF file is output to the current directory with the ``.jdf`` extension. The filename is the same as the ``.log`` file and the file that is being distilled. (The "current directory" is the directory where the new PDF file is output.)

.. note::

   The ``JDF`` pdfmark allows the PostScript file/stream being distilled to specify certain elements and attributes to be added to a JDF file. For details, see *Using Adobe Normalizer Server, Version 6.0.4* and ` <../pdfMarkReference/pdfmark_Syntax.html#95983>`__.

.. _supported-by-90:

**Supported by**


Distiller

.. _type-89:

**Type**


Boolean

.. _ui-name-73:

**UI name**


Create Job Definition Format (JDF) file

.. _default-value-84:

**Default value**


::

   false

.. raw:: html

   <a name="60352"></a>

CreateJobTicket
---------------

If ``true`` , Distiller creates a Job Ticket object in the PDF file that contains specific information about this file—such as trapping information—that can be passed along to another application or print device.

This setting pertains to Portable Job Ticket Format 1.1, as described in *Portable Job Ticket Format, version 1.1* (Technical Note #5620).

.. _supported-by-91:

**Supported by**


Distiller

.. _type-90:

**Type**


Boolean

.. _ui-name-74:

**UI name**


Save Portable Job Ticket inside PDF file

.. _default-value-85:

**Default value**


::

   false

.. raw:: html

   <a name="40548"></a>

DetectBlends
------------

If ``true`` , Distiller enables the conversion of PostScript gradients to smooth shades. If ``false`` , Distiller disables conversion.

.. note::

   If ``CompatibilityLevel`` is less than 1.3, Distiller disables conversion regardless of the value of ``DetectBlends`` . In addition, Distiller always disables conversion if idiom recognition is turned off in the prologue file or in the PostScript file itself.

Distiller uses two methods to perform the conversion of gradients to smooth shades:

-  The PostScript Language Level 3 feature called *idiom recognition* replaces certain procedures (idioms) with others having equivalent behavior but producing better quality results. (See "Idiom Recognition" on page 119 of the *PostScript Language Reference* for details.) ``DetectBlends`` enables the subset of idioms that detect gradients (or blends) for the following applications: Adobe Illustrator, Adobe Freehand®, CorelDraw, and QuarkXPress.
-  Distiller also converts gradients to smooth shades independently of idiom recognition. This method is application-independent, but it is less reliable than the first.

In Distiller 4.0, the blend detecting idioms (first method) was controlled by the ``IdiomRecognition`` PostScript feature, while the second method was controlled by ``DetectBlends`` . You had to turn off ``IdiomRecognition`` to use ``DetectBlends`` .

In Distiller 5.0 and above, ``DetectBlends`` controls the blend detecting idioms. By default ``IdiomRecognition`` is turned on in Distiller 5.0 and above, and the blend detecting idioms are controlled using ``DetectBlends`` . You can still use the PostScript feature ``IdiomRecognition`` with the ``setuserparams`` operator, if needed.

.. _supported-by-92:

**Supported by**


Distiller

.. _type-91:

**Type**


Boolean

.. _ui-name-75:

**UI name**


Convert gradients to smooth shades

.. _default-value-86:

**Default value**


::

   true

DetectCurves
------------

The value of this setting must be in the range from 0.0000 to 10.0000. If the value is 0.0000, the feature is disabled. If positive, Distiller investigates graphics for curves that are not described efficiently and thus result in unacceptably large file sizes. Distiller converts these curves into bezier curves that take up much less file space.

This setting represents a value in user space (72 dpi) that controls Distiller's curve-fitting algorithm: the curve-fitting results should not part from the original line segments by more than this number. Visual inspection of the results suggests that the 0.1000 value yields the closest approximation to the original curve.

.. _supported-by-93:

**Supported by**


Distiller

.. _type-92:

**Type**


number

.. _ui-name-76:

**UI name**


Convert smooth lines to curves

.. _default-value-87:

**Default value**


::

   0.1

DSCReportingLevel
-----------------

Level can be either ``0`` , ``1`` , or ``2`` . ``0`` means no additional reporting. Level 1 shows all input as it is parsed and shows a tree crawl when getting into bad states. Level 2 shows transitions in addition to the information in Level 1.

.. _supported-by-94:

**Supported by**


Distiller

.. _type-93:

**Type**


integer

.. _default-value-88:

**Default value**


::

   0

.. raw:: html

   <a name="96989"></a>

EmbedJobOptions
---------------

If ``true`` , the settings file used to create the PDF is embedded in the PDF file and is accessible through the Acrobat UI (the Attachments tab in Acrobat 7). In the PDF file, the Adobe PDF creation settings file becomes an item in the ``Names->EmbeddedFiles`` tree (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ ).

.. note::

   Applications other than Distiller do not embed the settings file, regardless of the value of this setting.

.. _supported-by-95:

**Supported by**


Distiller

.. _type-94:

**Type**


Boolean

.. _ui-name-77:

**UI name**


Distiller: Save Adobe PDF settings inside PDF file

.. _default-value-89:

**Default value**


::

   false

EmitDSCWarnings
---------------

If ``true`` , Distiller displays warning messages about questionable or incorrect DSC comments during the distillation of the PostScript file. Distiller ignores this setting if ``ParseDSCComments`` is ``false`` .

.. _supported-by-96:

**Supported by**


Distiller

.. _type-95:

**Type**


Boolean

.. _ui-name-78:

**UI name**


Log DSC warnings

.. _default-value-90:

**Default value**


::

   false

.. raw:: html

   <a name="12775"></a>

LockDistillerParams
-------------------

If ``true`` , Distiller ignores any settings specified by ``setdistillerparams`` operators in the incoming PostScript file and uses only those settings present in the Adobe PDF settings file (or their default values if not present).

If ``false`` , any settings specified in the PostScript file override the initial settings. These settings are in effect for the duration of the current ``save`` level.

.. note::

   There are a number of settings whose values cannot be changed by ``setdistillerparams`` in a PostScript file. See `Modifying settings during the job <PDF_Create_Principles.html#68813>`__ for a complete list.

.. _supported-by-97:

**Supported by**


Distiller

.. _type-96:

**Type**


Boolean

.. _ui-name-79:

**UI name**


Allow PostScript file to override Adobe PDF settings

.. _default-value-91:

**Default value**


::

   false

.. raw:: html

   <a name="80125"></a>

OPM
---

Controls the overprint mode strategy in the job. Set to 0 for full overprint or 1 for non-zero overprint. For more information, refer to Technical Note #5044, *Color Separation Conventions for PostScript Language Programs* , and the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

.. note::

   Distiller ignores this setting if ``PreserveOverprintSettings`` is ``false`` .

.. _supported-by-98:

**Supported by**


Distiller

.. _type-97:

**Type**


integer

.. _ui-name-80:

**UI name**


Overprinting default is nonzero overprinting

.. _default-value-92:

**Default value**


::

   1

.. raw:: html

   <a name="90565"></a>

ParseDSCComments
----------------

If ``true`` , Distiller parses the DSC comments for any information that might be helpful for distilling the file or for information that is passed into the PDF file. If ``false`` , Distiller treats the DSC comments as pure PostScript comments and ignores them.

.. _supported-by-99:

**Supported by**


Distiller

.. _type-98:

**Type**


Boolean

.. _ui-name-81:

**UI name**


Process DSC Comments

.. _default-value-93:

**Default value**


::

   true

.. raw:: html

   <a name="84937"></a>

ParseDSCCommentsForDocInfo
--------------------------

If ``true`` , Distiller attempts to preserve the Document Information from the PostScript DSC comments as properties of the PDF document. The following table lists this information.

.. _section-19:


 

+----------------------+-------------------------------------------------------+
| Document Information | Source                                                |
+======================+=======================================================+
| Author               | from DSC keyword: ``%%For:``                          |
+----------------------+-------------------------------------------------------+
| Creator              | from DSC keyword: ``%%Creator:``                      |
+----------------------+-------------------------------------------------------+
| Title                | from DSC keyword: ``%%Title:``                        |
+----------------------+-------------------------------------------------------+
| Producer             | from Distiller product name ("Acrobat Distiller 7.0") |
+----------------------+-------------------------------------------------------+
| CreationDate         | from Distiller time stamp (creation time of PDF file) |
+----------------------+-------------------------------------------------------+
| ModDate              | from Distiller time stamp (creation time of PDF file) |
+----------------------+-------------------------------------------------------+

.. note::

   Distiller ignores this setting if ``ParseDSCComments`` is ``false`` .

Distiller 4.0 and higher places the Document Information in the ``Info`` dictionary of the PDF file; you can view the information in Acrobat by clicking File > Document Properties. Starting with version 5, Distiller also embeds the Document Information as XML in the PDF file. To embed the information, Distiller adds a ``Metadata`` key in the Catalog dictionary whose value is an indirect reference to a metadata stream object. The metadata object contains the metadata (the Document Information) for the PDF document. The metadata is represented as RDF, in conformance with Adobe's Extensible Metadata Platform (XMP).

.. note::

   If ``true`` , document properties of Microsoft Office files are carried into the PDF. A setting of ``false`` prevents this transfer of information.

.. _supported-by-100:

**Supported by**


Distiller

.. _type-99:

**Type**


Boolean

.. _ui-name-82:

**UI name**


Preserve document information from DSC

.. _default-value-94:

**Default value**


::

   true

.. raw:: html

   <a name="38057"></a>

PassThroughJPEGImages
---------------------

If ``true`` , JPEG images (images that are already compressed with the ``DCTEncode`` filter) are "passed through" Distiller without re-compressing them. (Distiller does perform a decompression to ensure that images are not corrupt, but then passes the original compressed image to the PDF file.) Images that are not compressed will still be compressed according to the image settings in effect for the type of image (for example, ``ColorImageFilter`` , etc.).

If ``false`` , all JPEG encoded images are decompressed and recompressed according the compression settings in effect.

Note, however, that JPEG images that meet the following criteria are *not* passed through even if the value of ``PassThroughJPEGImages`` is ``true`` :

-  The image will be downsampled.
-  ``ColorConversionStrategy`` is ``sRGB`` and the current PostScript color space (for the image) is not ``DeviceRGB`` or ``DeviceGray`` .
-  The image will be cropped—i.e., the clip path is such that more than 10% of the image pixels will be removed.

Creative Suite applications do not use this setting. However, Illustrator and InDesign normally behave as if it were ``true`` with regard to placed PDF files containing compressed images. That is, they do not normally uncompress and recompress them, unless color conversion or downsampling takes place.

Passing through JPEG images has these advantages:

**Performance** : Only decompression and not recompression occurs.

**No loss of image data** : DCT encoding inherently causes some loss of data; thus, with this option, since no recompression occurs, no data is lost.

**No loss of metadata** : When Distiller decompresses an image, all metadata is discarded; thus, with this option, no metadata is lost since no recompression on the decompressed image occurs.

.. note::

   Distiller's hard-coded default value of ``PassThroughJPEGImages`` is ``false`` to conform to older settings files where this setting did not exist. Most predefined Adobe PDF settings files set it to ``true`` . The ``Smallest File Size`` settings file sets it to ``false`` since that generally results in smaller file sizes. However, in some cases this setting could actually increase file size, for example, if the original JPEG in the PostScript file was compressed with a ``Quality`` setting lower than the ``Quality`` setting in the settings file.

.. _supported-by-101:

**Supported by**


Distiller

.. _type-100:

**Type**


Boolean

.. _ui-name-83:

**UI name**


Save original JPEG images in PDF if possible

.. _default-value-95:

**Default value**


::

   false

PreserveCopyPage
----------------

.. _default-value-96:

**Default value**


::

   true

If ``true`` , Distiller maintains PostScript Language Level 2 compatibility for the ``copypage`` operator. If ``false`` , Distiller uses the PostScript Language Level 3 definition of the ``copypage`` operator. See the *PostScript Language Reference* for more information.

.. _supported-by-102:

**Supported by**


Distiller

.. _type-101:

**Type**


Boolean

.. _ui-name-84:

**UI name**


Preserve Level 2 copypage semantics

.. raw:: html

   <a name="89116"></a>

PreserveEPSInfo
---------------

If ``true`` , and ``ParseDSCComments`` is ``true`` , Distiller attempts to preserve the encapsulated PostScript (EPS) information in the PostScript file as properties of the resulting PDF file. The distilled EPS content is identified as marked content using the ``EmbeddedDocument`` key.

The following table lists this information.

.. _section-20:


 

==================== ================================
Document Information Source
==================== ================================
Author               from DSC keyword: ``%%For:``
Creator              from DSC keyword: ``%%Creator:``
Title                from DSC keyword: ``%%Title:``
==================== ================================

Starting with version 5, Distiller also embeds the information for embedded EPS files as XML in the PDF file. To do this, Distiller performs the following tasks:

-  Adds a ``Metadata`` key in the property list of the marked content container for the EPS.
-  Stores the property list as an indirect reference in the page resources object.

The value of the ``Metadata`` key is an indirect reference to the metadata stream object, which contains the metadata (the EPS information). The metadata is represented as RDF, in conformance with Adobe's XMP.

.. _supported-by-103:

**Supported by**


Distiller

.. _type-102:

**Type**


Boolean

.. _ui-name-85:

**UI name**


Preserve EPS information from DSC

.. _default-value-97:

**Default value**


::

   false

.. raw:: html

   <a name="22620"></a>

PreserveFlatness
----------------

If ``true`` , the PostScript flatness set by the ``setflat`` operator is preserved. If ``false`` , flatness is discarded. Preserving flatness can increase rendering and printing speeds, since less time is spent determining how to precisely render curves and circles.

.. _supported-by-104:

**Supported by**


Distiller

.. _type-103:

**Type**


Boolean

.. _default-value-98:

**Default value**


::

   true

.. raw:: html

   <a name="71313"></a>

PreserveOPIComments
-------------------

If ``true`` , Distiller places the page contents within a set of Open Prepress Interface (OPI) comments in a Form XObject dictionary and preserves the OPI comment information in an OPI dictionary attached to the Form. Page contents data within a set of OPI comments may include proxy images, high-resolution images, or nothing.

If ``PreserveOPIComments`` is ``false`` , Distiller ignores OPI comments and their page contents. Setting ``PreserveOPIComments`` to ``false`` results in slightly simpler and smaller PDF files. Doing so is acceptable when use of an OPI server is not anticipated.

Distiller ignores ``PreserveOPIComments`` if ``ParseDSCComments`` is ``false`` .

Distiller recognizes both OPI 1.3 and OPI 2.0. See the specifications for OPI 1.3 and 2.0 (TN #5660) at the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

.. note::

   Creative Suite applications (Illustrator and InDesign) always behave as though this setting were ``true`` .

.. _supported-by-105:

**Supported by**


Distiller, InDesign

.. _type-104:

**Type**


Boolean

.. _ui-name-86:

**UI name**


Preserve OPI comments

.. _default-value-99:

**Default value**


::

   false

.. raw:: html

   <a name="63211"></a>

PreserveOverprintSettings
-------------------------

If ``true`` , Distiller passes the value of the ``setoverprint`` operator through to the PDF file. If ``false`` , overprint is ignored (the information is not passed.

For Illustrator, this setting is relevant only when saving to PDF 1.3 (no transparency support) and the document contains overprint. If this setting is ``true`` , any overprint in the artwork is passed through to the PDF file unchanged. If ``false`` , any overprint in the artwork is stripped out and the resulting PDF file will not contain any.

.. note::

   InDesign uses the ``SimulateOverprint`` setting that has additional options.

.. _supported-by-106:

**Supported by**


Distiller, Illustrator

.. _type-105:

**Type**


Boolean

.. _ui-name-87:

**UI name**


Distiller: Preserve overprint settings

Illustrator: Overprints: Preserve (Advanced panel)

.. _default-value-100:

**Default value**


::

   true

UsePrologue
-----------

If ``true`` , Distiller uses the ``prologue.ps`` file in the ``Data`` subdirectory and distills it prior to any PostScript job that is sent through. Distiller also distills the ``epilogue.ps`` file in the same directory after the same PostScript job is run. You can add any legal PostScript code and comments to these two files.

.. _supported-by-107:

**Supported by**


Distiller

.. _type-106:

**Type**


Boolean

.. _ui-name-88:

**UI name**


Use Prologue.ps and Epilogue.ps

.. _default-value-101:

**Default value**


::

   false


.. raw:: html

   <a name="77813"></a>

Standards settings
==================

This section lists the settings related to PDF/X and PDF/A compliance. See `Using the standards settings <PDF_Create_UsingSettings.html#86848>`__ for more information.

.. raw:: html

   <a name="17664"></a>

CheckCompliance
---------------

Specifies the name of a standard to which the PDF file should comply. The value is an array of names; however, at the present time, only one name may be specified. The following table shows the valid values.

.. _section-21:


 

+-----------------------------------+-----------------------------------+
| Value                             | UI equivalent (Distiller)         |
+===================================+===================================+
|                                   | None                              |
|                                   |                                   |
|    None                           |                                   |
+-----------------------------------+-----------------------------------+
|                                   | PDF/A (Acrobat 5.0 Compatible)    |
|                                   |                                   |
|    PDF/A-1b:2005 (CMYK)           |                                   |
+-----------------------------------+-----------------------------------+
|                                   | PDF/X-1a (Acrobat 4.0 Compatible) |
|                                   |                                   |
|    PDFX1a:2001                    |                                   |
+-----------------------------------+-----------------------------------+
|                                   | PDF/X-1a (Acrobat 5.0 Compatible) |
|                                   |                                   |
|    PDFX1a:2003                    |                                   |
+-----------------------------------+-----------------------------------+
|                                   | PDF/X-3 (Acrobat 4.0 Compatible)  |
|                                   |                                   |
|    PDFX3:2002                     |                                   |
+-----------------------------------+-----------------------------------+
|                                   | PDF/X-3 (Acrobat 5.0 Compatible)  |
|                                   |                                   |
|    PDFX3:2003                     |                                   |
+-----------------------------------+-----------------------------------+

.. note::

   The Creative Suite UI uses the standards names in the first column. Creative Suite applications do not support PDF/A.

In Distiller 7 and the Creative Suite, this setting takes precedence over ``PDFX1aCheck`` and ``PDFX3Check`` . For more information, see `Using the compliance checking settings <PDF_Create_UsingSettings.html#83753>`__.

For Creative Suite applications, ``CheckCompliance`` also takes precedence over values of other settings (such as ``ColorConversionStrategy`` or ``CompatibilityLevel`` ) that could potentially result in a file that is not compliant, and the values of the other settings are adjusted accordingly.

.. _supported-by-108:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-107:

**Type**


array

.. _ui-name-89:

**UI name**


Distiller: Compliance Standard

Creative Suite: Standard

.. _default-value-102:

**Default value**


::

   [/None] 

.. raw:: html

   <a name="72679"></a>

PDFX1aCheck
-----------

If ``true`` , checks compliance with the PDF/X-1a standard (ISO 15930-1:2001) and a PDF/X compliance report is written to the message log.

A value of ``/PDFX1aCheck true`` is equivalent in Distiller 7 to a value of ``/CheckCompliance [ /PDFX1a:2001 ]`` .

.. note::

   This setting is retained for compatibility with Distiller 6. For more information on how this setting works, see `Using the standards settings <PDF_Create_UsingSettings.html#86848>`__.

.. _supported-by-109:

**Supported by**

Distiller, Illustrator, InDesign, Photoshop

.. _type-108:

**Type**


Boolean

.. _ui-name-90:

**UI name**


*none*

.. _default-value-103:

**Default value**


::

   false

.. raw:: html

   <a name="18125"></a>

PDFX3Check
----------

If ``true`` , checks compliance with the PDF/X-3 standard (ISO 15930-3:2002) and a PDF/X compliance report is written to the message log. A value of ``/PDFX3Check true`` is equivalent in to a value of ``/CheckCompliance [ /PDFX3:2002 ]`` .

.. note::

   This setting is retained for compatibility with Distiller 6. For more information on how this setting works, see `Using the standards settings <PDF_Create_UsingSettings.html#86848>`__.

.. _supported-by-110:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-109:

**Type**


Boolean

.. _ui-name-91:

**UI name**


*none*

.. _default-value-104:

**Default value**

::

   false

PDFXBleedBoxToTrimBoxOffset
---------------------------

If the ``BleedBox`` entry is not specified in the page object, ``BleedBox`` is set to ``TrimBox`` with offsets. Offsets are specified as ``[`` left right top bottom ``]`` . All numbers must be greater than or equal to 0.0. ``BleedBox`` offsets place the ``BleedBox`` entirely outside the ``TrimBox`` .

.. note::

   This setting is ignored if ``PDFXSetBleedBoxToMediaBox`` is ``true`` .

.. _supported-by-111:

**Supported by**


Distiller

.. _type-110:

**Type**


array

.. _ui-name-92:

**UI name**


Set BleedBox to TrimBox with offsets (Points)

.. _default-value-105:

**Default value**


::

   [0.00000 0.00000 0.00000 0.00000]

PDFXCompliantPDFOnly
--------------------

Determines what to do when PDF/X compliance tests are not passed. The following table shows the valid values.

.. _section-22:


 

+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                                                                                               |
+=======================+=======================+===========================================================================================================================================================================+
|                       | Cancel job            | A PDF document is produced only if PDF/X compliance tests are passed.                                                                                                     |
|                       |                       |                                                                                                                                                                           |
|    true               |                       |                                                                                                                                                                           |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | Continue              | A PDF document is produced regardless of whether PDF/X compliance tests are passed. Distiller does not insert PDF/X additional key/value pairs into the created PDF file. |
|                       |                       |                                                                                                                                                                           |
|    false              |                       |                                                                                                                                                                           |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. note::

   InDesign uses its ``ErrorControl`` setting to determine what to do in this situation.

.. _supported-by-112:

**Supported by**


Distiller

.. _type-111:

**Type**


Boolean

.. _ui-name-93:

**UI name**


When not compliant

.. _default-value-106:

**Default value**


::

   false

.. raw:: html

   <a name="48641"></a>

PDFXNoTrimBoxError
------------------

If ``true`` and both the ``TrimBox`` and ``ArtBox`` entries are not specified in the page object, the condition is reported as an error.

.. _supported-by-113:

**Supported by**


Distiller

.. _type-112:

**Type**


Boolean

.. _ui-name-94:

**UI name**


Report as error

.. _default-value-107:

**Default value**


::

   true

.. raw:: html

   <a name="16708"></a>

PDFXOutputCondition
-------------------

This setting provides an optional comment which, if present, is added to the PDF file and describes the intended printing condition in a form that should be meaningful to a human operator at the site receiving the PDF document.

.. _supported-by-114:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-113:

**Type**


string

.. _ui-name-95:

**UI name**


Distiller: Output Condition

Creative Suite: Output Condition Name

.. _default-value-108:

**Default value**


::

   ()

.. raw:: html

   <a name="23709"></a>

PDFXOutputConditionIdentifier
-----------------------------

This setting is a reference name that is specified by the output intent profile name registry. The entry is automatically entered for known output intent profile names.

For Distiller only, if the value of ``PDFXOutputIntentProfile`` is ``(Use Output Condition Identifier)`` , this setting must be provided for PDF/X validation to succeed.

For a description of how this setting is used to fill out entries in the PDF/X output intent dictionary, see `Using the PDF/X output intent settings <PDF_Create_UsingSettings.html#99125>`__.

.. _supported-by-115:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-114:

**Type**


string

.. _ui-name-96:

**UI name**


Output Condition Identifier

.. _default-value-109:

**Default value**


::

   ()

.. raw:: html

   <a name="75677"></a>

PDFXOutputIntentProfile
-----------------------

This setting indicates the characterized printing condition for which the document has been prepared and is required for PDF/X compliance. The value may be one of the following:

-  The name of a specific profile. The UI lists a number of available profiles. This is the only value supported by Creative Suite applications.
-  ``(Use Output Condition Identifier)`` The profile is specified by ``PDFXOutputConditionIdentifier`` . This value is used by Distiller only.
-  ``(None)`` This value should be used for workflows that require the output intent dictionary to be specified in the PostScript document and that require compliance checking to fail if it is not specified. In the UI, it corresponds to "No Default Profile". This value is used by Distiller only.

For a description of how these values are used to fill out entries in the PDF/X output intent dictionary, see `Using the PDF/X output intent settings <PDF_Create_UsingSettings.html#99125>`__.

.. _supported-by-116:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-115:

**Type**


string

.. _ui-name-97:

**UI name**


Output Intent Profile Name

.. _default-value-110:

**Default value**


::

   ()

.. raw:: html

   <a name="25498"></a>

PDFXRegistryName
----------------

This setting specifies a URL where more information regarding the output intent profile can be obtained. This entry is automatically populated for recognized ICC profile names. If the value of ``PDFXOutputIntentProfile`` is ``(Use Output Condition Identifier)`` , this setting must be provided for PDF/X validation to succeed.

.. _supported-by-117:

**Supported by**


Distiller, Illustrator, InDesign, Photoshop

.. _type-116:

**Type**


string

.. _ui-name-98:

**UI name**


Registry Name (URL)

.. _default-value-111:

**Default value**


::

   ()

.. raw:: html

   <a name="42971"></a>

PDFXSetBleedBoxToMediaBox
-------------------------

If ``true`` and the ``BleedBox`` entry is not specified in the page object, ``BleedBox`` is set to ``MediaBox`` .

.. _supported-by-118:

**Supported by**


Distiller

.. _type-117:

**Type**


Boolean

.. _ui-name-99:

**UI name**


Set BleedBox to MediaBox

.. _default-value-112:

**Default value**


::

   true

PDFXTrapped
-----------

Indicates the state of trapping within the file. Can be one of the following values:

.. _section-23:


 

+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------+
| Value                 | UI equivalent         | Description                                                                                              |
+=======================+=======================+==========================================================================================================+
|                       | Leave Undefined       | The trapped state indicated in the PostScript file is used if present; otherwise the state is undefined. |
|                       |                       |                                                                                                          |
|    Unknown            |                       |                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------+
|                       | Insert False          | The document is not trapped.                                                                             |
|                       |                       |                                                                                                          |
|    False              |                       |                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------+
|                       | Insert True           | The document is trapped.                                                                                 |
|                       |                       |                                                                                                          |
|    True               |                       |                                                                                                          |
+-----------------------+-----------------------+----------------------------------------------------------------------------------------------------------+

.. note::

   ``True`` and ``False`` are name objects, not the Boolean values ``true`` and ``false`` .

A value of ``True`` or ``False`` is required for PDF/X compliance. If the PostScript file does not specify that the document is trapped, then the value provided here is used. ``Unknown`` should be used for workflows that require that the document specify a trapped state and for which compliance checking should fail if it is not present in the document.

.. note::

   Illustrator can set this value to ``True`` or ``False`` via "Mark as Trapped." InDesign always specifies ``False`` for PDF/X compliant files.

.. _supported-by-119:

**Supported by**


Distiller, Illustrator

.. _type-118:

**Type**


name

.. _ui-name-100:

**UI name**


Distiller: Trapped

Illustrator: Marked as Trapped

.. _default-value-113:

**Default value**


::

   False

PDFXTrimBoxtoMediaBoxOffset
---------------------------

If both the ``TrimBox`` and ``ArtBox`` entries are not specified in the page object, ``TrimBox`` is set to ``MediaBox`` with offsets. Offsets are specified as [left right top bottom]. All numbers must be greater than or equal to 0.0. ``TrimBox`` offsets place ``TrimBox`` entirely inside ``MediaBox`` .

.. note::

   This setting is ignored if ``PDFXNoTrimBoxError`` is ``true`` .

.. _supported-by-120:

**Supported by**


Distiller

.. _type-119:

**Type**


array

.. _ui-name-101:

**UI name**


Set TrimBox to MediaBox with offsets *(units* )

.. _default-value-114:

**Default value**


::

   [0.00000 0.00000 0.00000 0.00000]

