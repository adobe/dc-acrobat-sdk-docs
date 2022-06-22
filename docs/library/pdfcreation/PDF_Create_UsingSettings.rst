******************************************************
Using PDF Creation Settings
******************************************************

This chapter provides information on using PDF creation settings that supplements the information in the settings reference chapters, `Common PDF Settings <PDF_Create_CommonSettings.html#80362>`__ and `Other Namespaces <PDF_Create_NewNamespaces.html#69127>`__.

.. raw:: html

   <a name="29125"></a>

Using the image settings
========================

PDF settings files provide several options for the processing of images:

-  Images (as well as text and line art) can be *compressed* , thereby significantly reducing the size of a PDF file with little or no loss of detail and precision, depending on the settings chosen.
-  Images can be resampled (downsampled or subsampled), which also allows reduction in image size.
-  Distiller provides some options relating to bit depth (number of bits per sample) and cropping of images.

The image settings can be specified for these types of images:

* **Color images** : Images that have more than one color component
* **Grayscale images** : Images that have only one color component and more than one bit per sample
* **Monochrome images** : Images that have only one color component and only one bit per sample

The names of the settings indicate which type of image they apply to (for example, ``ColorImageFilter`` , ``GrayImageFilter`` , and ``MonoImageFilter`` ).

The image settings are described in detail in `Image settings <PDF_Create_CommonSettings.html#37637>`__.

.. raw:: html

   <a name="90149"></a>

Image compression settings
--------------------------

The compression settings fall into several categories. This section describes the overall logic of image compression. There are several options for compression, including JPEG, JPEG2000, CCITTFax, RunLength, Flate, as well as automatic compression. See the following sections for details on each compression type.

The following Boolean settings determine whether compression takes place on the specified image type. If the value is ``false`` , no compression takes place, and the other compression settings for that image type are ignored:

-  `EncodeColorImages <PDF_Create_CommonSettings.html#29745>`__
-  `EncodeGrayImages <PDF_Create_CommonSettings.html#16389>`__
-  `EncodeMonoImages <PDF_Create_CommonSettings.html#49057>`__

.. note::

   In this document, the term *encode* is used to refer to compression. Strictly speaking, encoding in PDF does not always involve compression.

These settings are Boolean values that determine whether *automatic compression* , in which the producer application chooses compression settings based on the image contents, is applied:

-  `AutoFilterColorImages <PDF_Create_CommonSettings.html#24040>`__
-  `AutoFilterGrayImages <PDF_Create_CommonSettings.html#89851>`__

See `Automatic compression <PDF_Create_UsingSettings.html#99144>`__ for details. (Automatic compression is not used for monochrome images.)

When automatic compression is chosen, these settings provide further information:

-  `ColorImageAutoFilterStrategy <PDF_Create_CommonSettings.html#62153>`__
-  `GrayImageAutoFilterStrategy <PDF_Create_CommonSettings.html#99033>`__
-  `ColorACSImageDict <PDF_Create_CommonSettings.html#30939>`__
-  `GrayACSImageDict <PDF_Create_CommonSettings.html#38481>`__
-  `JPEG2000ColorACSImageDict <PDF_Create_CommonSettings.html#90844>`__
-  `JPEG2000GrayACSImageDict <PDF_Create_CommonSettings.html#90478>`__

When automatic compression is not chosen, these settings determine the type of compression (JPEG, Flate, etc.) to be used for the specified image type:

-  `ColorImageFilter <PDF_Create_CommonSettings.html#24916>`__
-  `GrayImageFilter <PDF_Create_CommonSettings.html#87077>`__
-  `MonoImageFilter <PDF_Create_CommonSettings.html#77003>`__

These settings provide further information during non-automatic compression:

-  `ColorImageDict <PDF_Create_CommonSettings.html#13008>`__
-  `GrayImageDict <PDF_Create_CommonSettings.html#79547>`__
-  `JPEG2000ColorImageDict <PDF_Create_CommonSettings.html#80211>`__
-  `JPEG2000GrayImageDict <PDF_Create_CommonSettings.html#99239>`__

Images can be compressed using any one of several compression filters. See Section 3.13 of the *PostScript Language Reference* and Section 3.3 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for information on the compression filters.

.. note::

   Because the values of settings can be modified in a PostScript file (see `Modifying settings during the job <PDF_Create_Principles.html#68813>`__), it is possible when using Distiller to explicitly apply different image settings to specific images. This capability does not apply to Creative Suite applications.

The following sections summarize the types of compression and how Adobe PDF settings can be used to control them.

.. raw:: html

   <a name="86654"></a>

Flate
^^^^^

Flate (also called Zip) is a compression method that works well on images with large areas of single colors or repeating patterns, such as screen shots and simple images created with paint programs, and for black-and-white images that contain repeating patterns. The Flate method is *lossless* , which means it does not remove data to reduce file size and so does not affect an image's quality.

Adobe's implementation of the Flate filter is derived from the zlib package of Jean-Loup Gailly and Mark Adler.

.. raw:: html

   <a name="13229"></a>

JPEG
^^^^

The JPEG compression method is suitable for grayscale or color images, such as continuous-tone photographs that contain more detail than can be reproduced on screen or in print. JPEG is a *lossy* compression method that can achieve much smaller file sizes than Flate compression, which is lossless. JPEG attempts to reduce file size with the minimum loss of information.

JPEG encoding and decoding is done by means of the direct cosine transformation (DCT) algorithm. This algorithm can take several optional parameters. In PostScript files, these parameters are contained in the ``DCTEncode`` parameter dictionary that is used by the ``DCTEncode`` filter. See "DCTEncode Filter" in Section 3.13.3 of the *PostScript Language Reference* for detailed information.

Four PDF settings are dictionaries that specify parameters to control JPEG compression. They are ``ColorACSImageDict`` and ``GrayACSImageDict`` (for automatic compression) and ``ColorImageDict`` and ``GrayImageDict`` (for non-automatic compression). These dictionaries are based on the ``DCTEncode`` parameter dictionary.

The default value for each of these dictionaries is

::

     <</Qfactor 0.76 /Hsamples [2 1 1 2] /Vsamples [2 1 1 2]>>

The following should be noted about these dictionaries:

-  The ``QFactor`` entry is the only one that can be set directly. It provides a measure of the trade-off between image compression and image quality. Lower values of ``QFactor`` mean higher quality and therefore less compression.
-  ``HSamples`` and ``VSamples`` can be set in the PDF settings file. However, Distiller and other applications ignore these values and provide their own values based on ``QFactor`` . If ``QFactor`` >= 0.5, both the ``HSamples`` and ``VSamples`` arrays are set to [2 1 1 2]. If ``QFactor`` < 0.5, then both the ``HSamples`` and ``VSamples`` arrays are set to [1 1 1 1]. If you save the settings to a file, the computed values for ``HSamples`` and ``VSamples`` are saved in the file, regardless of the original values present in the file.
-  The other entries that can appear in a ``DCTEncode`` parameter dictionary are not settable through these image dictionaries. They include ``Columns`` , ``Rows`` , ``Colors`` , ``QuantTables`` , ``HuffTables`` , ``ColorTransform`` , and ``CloseTarget`` . These parameters are set internally in Distiller (or other application) depending on the properties of each image. ``ColorTransform`` is set to the "best" value for each image. It is set to 0 if the color space is Lab or Gray or (CMYK AND QFactor >= 0.5). Otherwise, ``ColorTransform`` is set to 1.

In the user interface of Distiller and the Creative Suite applications, you can use the ``Quality`` field to achieve one of five levels of image quality. The following table shows the values of ``HSamples`` , ``VSamples`` , and ``QFactor`` that correspond to Minimum, Low, Medium, High, and Maximum image quality.

Image compression quality


 

======= ========= ========= =======
Quality HSamples  VSamples  QFactor
======= ========= ========= =======
Minimum [2 1 1 2] [2 1 1 2] 2.40
Low     [2 1 1 2] [2 1 1 2] 1.30
Medium  [2 1 1 2] [2 1 1 2] 0.76
High    [1 1 1 1] [1 1 1 1] 0.40
Maximum [1 1 1 1] [1 1 1 1] 0.15
======= ========= ========= =======

.. note::

   When Distiller processes PostScript files to produce PDF, it normally decompresses all JPEG images and then recompresses them according to the settings in effect. The exception is when the ``PassThroughJPEGImages`` setting is ``true`` . Illustrator and InDesign do not use this setting but normally behave as if it were ``true`` with regard to placed PDF files containing compressed images. That is, they do not uncompress and recompress them unless color conversion or downsampling takes place. See the reference entry for ``PassThroughJPEGImages`` for more information.

.. raw:: html

   <a name="60774"></a>

JPEG2000
^^^^^^^^

JPEG2000 is a new international standard for the compression and packaging of image data. It defines a wavelet-based method for image compression that gives somewhat better size reduction than other methods such as JPEG or CCITT. It is suitable both for images that have a single color component and for those with multiple color components. JPEG2000 is especially well suited for color images with smooth variation in color values.

There is no filter name defined for JPEG2000 compression in the PostScript language definition). PDF files use the ``JPXDecode`` filter to decompress JPEG2000 images. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for information about JPEG2000 compression in PDF files. See also http://www.jpeg.org/JPEG2000.htm .

The JPEG2000 compression filter provides the ability to encode different versions of an image with varying resolution. For example, a thumbnail version of the image may be encoded in the data, followed by a sequence of other versions of the image, each with approximately four times as many samples (twice the width, twice the height) as the previous one. The last version is the highest resolution image, corresponding to the value of the ``Quality`` key (see the following table). A PDF viewer may not need to decode the highest resolution version but only the resolution that best matches the current viewing or printing needs. Therefore, fewer bytes need to be processed, a particular benefit when viewing files over the Web. JPEG2000 data also has a built-in tiling structure, such that if the full image is not visible, only those tiles being displayed need to be decoded (to an appropriate resolution).

There are four PDF settings that specify dictionaries for customizing color or grayscale image compression for the JPEG2000 filter:

-  ``JPEG2000ColorImageDict`` and ``JPEG2000GrayImageDict`` are used with regular (non-automatic) compression.
-  ``JPEG2000ColorACSImageDict`` and ``JPEG2000GrayACSImageDict`` are used with automatic compression.

These dictionaries have three entries you can set, as shown in the following table. Since all entries are optional, an empty dictionary is acceptable.

Entries in JPEG2000 image dictionaries

.. _section-1:


 

+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Key                   | Type                  | Value                                                                                                                                                                                                                                                                     |
+=======================+=======================+===========================================================================================================================================================================================================================================================================+
|                       | integer               | *(Optional)* The width of JPEG2000 image tiles in samples. Valid values are 128 - 2048; values outside this range generate a range error.                                                                                                                                 |
|                       |                       |                                                                                                                                                                                                                                                                           |
|    TileWidth          |                       | Default value: 256.                                                                                                                                                                                                                                                       |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | integer               | *(Optional)* The height of JPEG2000 image tiles in samples. Valid values are 128 - 2048; values outside this range generate a range error.                                                                                                                                |
|                       |                       |                                                                                                                                                                                                                                                                           |
|    TileHeight         |                       | Default value: 256.                                                                                                                                                                                                                                                       |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                       | integer               | *(Optional)* The required image quality for the highest resolution image in the image progression. Valid values are 1 - 100, where 1 is the lowest quality (highest compression), 99 means visually lossless compression, and 100 means numerically lossless compression. |
|                       |                       |                                                                                                                                                                                                                                                                           |
|    Quality            |                       | Default value: 15 (Medium).                                                                                                                                                                                                                                               |
|                       |                       |                                                                                                                                                                                                                                                                           |
|                       |                       | In the Compression panel of the Distiller UI, the mapping that occurs for the predefined options is as follows:                                                                                                                                                           |
|                       |                       |                                                                                                                                                                                                                                                                           |
|                       |                       | -  Minimum = 5                                                                                                                                                                                                                                                            |
|                       |                       | -  Low = 10                                                                                                                                                                                                                                                               |
|                       |                       | -  Medium = 15                                                                                                                                                                                                                                                            |
|                       |                       | -  High = 20                                                                                                                                                                                                                                                              |
|                       |                       | -  Maximum = 30                                                                                                                                                                                                                                                           |
|                       |                       | -  Lossless = 100                                                                                                                                                                                                                                                         |
+-----------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

The user interface provides a Tile Size option if ``CompatibilityLevel`` is set to 1.5 or higher and the Compression setting is JPEG2000 or Automatic (JPEG2000). The amount specified sets both the ``TileWidth`` and ``TileHeight`` parameters to the same value. If a settings file has been modified so that the values are different, Distiller accepts both values, but Creative Suite applications use the value of ``TileWidth`` for both.

.. raw:: html

   <a name="99144"></a>

Automatic compression
---------------------

Automatic compression for color or grayscale bitmap images means that the application producing the PDF determines the compression filters to be applied to individual images. Setting ``AutoFilterColorImages`` and/or ``AutoFilterGrayImages`` to ``true`` causes automatic compression to take place for color and grayscale images, respectively.

You can use the ``ColorImageAutoFilterStrategy`` and ``GrayImageAutoFilterStrategy`` settings to choose between two automatic compression strategies. The value of these settings can be either ``JPEG`` (the default) or ``JPEG2000`` (which applies only to PDF 1.5 and later files). If you choose ``JPEG`` :

-  JPEG compression (the ``DCTEncode`` filter) is used for 8-bit images that have smooth color changes (low-frequency images). The parameters specified in the ``ColorACSImageDict`` or ``GrayACSImageDict`` dictionary are used to provide further control. JPEG typically provides greater compression than Flate, but is *lossy* (can lose information).
-  Flate compression is used for all other images. Flate is a lossless compression method, so it is more suitable for images with sharp color changes (high-frequency images). Flate does not take any additional parameters.

.. warning::

   Flate compression is also used when the image uses a ``DeviceN`` color space, is small ( < 1024 bytes), extremely wide ( > 40000 pixels) or is ChromaKeyed.

If you choose ``JPEG2000`` :

-  Lossy JPEG2000 compression is used for low-frequency images. The compression parameters specified in the ``JPEG2000ColorACSImageDict`` or ``JPEG2000GrayACSImageDict`` dictionary provide further control of the compression. See `JPEG2000 <PDF_Create_UsingSettings.html#60774>`__ for information about these dictionaries.
-  Lossless JPEG2000 compression is used for high-frequency images. The compression ``JPEG2000ColorACSImageDict`` or ``JPEG2000GrayACSImageDict`` dictionaries are used as well, with the modification that the ``Quality`` parameter is forced to 100 (to achieve lossless compression).

Non-automatic compression
-------------------------

This section describes the compression options that are available when automatic compression is not chosen. (Automatic compression does not apply to monochrome images.)

Color and grayscale images
^^^^^^^^^^^^^^^^^^^^^^^^^^

Grayscale images have one color component and more than one 1 bit per component. Color images have more than one color component and 1 or more bits per component:

-  For grayscale images that have 2 or 4 bits per component or color images with 1, 2, or 4 bits per component, only Flate compression is permitted
-  For grayscale or color images with 8 bits per component, JPEG, JPEG2000, and Flate are permitted

.. warning::

   For grayscale or color images with more than 8 bits per component, the least significant bits of each image sample are removed, yielding 8 bits per sample.

When image compression is selected (with ``EncodeColorImages`` , ``EncodeGrayImages`` , or ``EncodeMonoImages`` ), the ``ColorImageFilter`` , ``GrayImageFilter`` , or ``MonoImageFilter`` settings specify which compression filter should be used. If no filter name is specified (is absent), lossless Flate is used in all cases. Invalid filter names generate an error.

.. note::

   The following filters are *never* selected, even if they are specified in the Adobe PDF settings file: ``LZWEncode`` , ``ASCII85Encode`` , and ``ASCIIHexEncode`` .

Under the following conditions, ``FlateEncode`` is used even if another filter is specified:

-  The selected filter is ``CCITTFaxEncode`` and the image is wide (more than 40,000 columns).
-  The selected filter is ``JPXEncode`` and the image is indexed or ChromaKeyed or ``CompatibilityLevel`` is less than 1.5.
-  The selected filter is ``DCTEncode`` and the image is wide (more than 40,000 columns), indexed, deviceN or ChromaKeyed.
-  The selected filter is not supported for the number of colors or sample depth of the particular image being compressed.

.. raw:: html

   <a name="90740"></a>

Monochrome (black and white) images
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Monochrome images are defined as images with only one color component and one bit per sample. For monochrome image compression, the available filters are ``CCITTFaxEncode`` , ``RunLengthEncode`` , and ``FlateEncode`` .

The ``CCITTFaxEncode`` parameter dictionary specifies options for CCITT compression. See "CCITTFaxEncode Filter" in Section 3.13.3 of the *PostScript Language Reference* for details. The ``MonoImageDict`` setting is a dictionary that contains the same keys as the ``CCITTFaxEncode`` parameter dictionary; any of the keys can be customized.

``CCITTFaxEncode`` (CCITT Group 4) compression typically yields the best compression of monochrome images. It is specified by a value of -1 for the ``K`` key in the ``CCITTFaxEncode`` parameter dictionary, for two-dimensional encoding. A value of 0 for this key corresponds to CCITT Group 3 (one-dimensional encoding).

.. note::

   With the exceptions of the ``AntiAliasMonoImages`` and ``MonoImageDepth`` parameters, the monochrome image compression parameters also can be applied to stencil masks created by the ``imagemask`` operator. Parameter behavior is the same in both cases. For details on ``imagemask`` , see the *PostScript Language Reference* .

.. raw:: html

   <a name="68478"></a>

Downsampling and subsampling images
-----------------------------------

Downsampling and subsampling are processes that reduce the number of pixels per inch in an image. To do so, pixels in a sample area are combined to make one larger pixel.

The following subsampling and downsampling methods are available:

**Subsampling** : A pixel in the center of the sample area replaces the entire area at the specified resolution. Subsampling is significantly faster than downsampling but results in images that are less smooth and continuous.

**Average downsampling** : The pixels in a sample area are averaged, and the average pixel color replaces the entire area at the specified resolution.

**Bicubic downsampling** : A weighted average is used to determine pixel color and usually yields better results than the simple averaging method of downsampling. This is the slowest but most precise method, resulting in the smoothest tonal gradations.

You should downsample or subsample bitmap images when they are sampled at a higher resolution than the output device supports. The excess data increases the time it takes the device to process the image without improving image quality. For example, by reducing an image from a typical printer resolution of 300 pixels per inch to a typical monitor resolution of 72 pixels per inch, the amount of data needed to represent an image is decreased by a factor of 16, and the image can be drawn on the screen much more quickly.

Downsampling settings
^^^^^^^^^^^^^^^^^^^^^

These settings are Boolean values that specify whether images of the specified type should be downsampled: ``DownsampleColorImages`` , ``DownsampleGrayImages`` , and ``DownsampleMonoImages`` .

These settings specify the resolution to which images should be downsampled: ``ColorImageResolution`` , ``GrayImageResolution`` , or ``MonoImageResolution`` .

These settings specify the type of sampling (average or bicubic downsampling, subsampling, or none) ``ColorImageDownsampleType`` , ``GrayImageDownsampleType`` , or ``MonoImageDownsampleType`` .

In order for downsampling to actually occur, the ratio of the input image resolution to the desired output resolution (specified by the above parameters) must exceed the *downsampling threshold.* These settings are used to set the downsampling threshold resolution: ``ColorImageDownsampleThreshold`` , ``GrayImageDownsampleThreshold`` , and ``MonoImageDownsampleThreshold`` .

For example, if ``ColorImageResolution`` is 72 and ``ColorImageDownsampleThreshold`` is set to 1.5, an image is not downsampled unless its input resolution is greater than 108 pixels per inch:

::

     trunc((72 * 1.5) + .5) = 108 pixels per inch

Threshold values must be between 1.0 through 10.0, inclusive, with a default value of 1.5. (If you set the threshold out of range, it reverts to 1.5.)

.. raw:: html

   <a name="70454"></a>

Controlling the range of bit depths for which downsampling occurs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also control the range of bit depths for which downsampling occurs. For example, in a workflow where there is a mixture of 1-bit and 8-bit data, you can downsample the 8-bit data while not touching the 1-bit data. This is done with the following settings:

-  ``ColorImageMinDownsampleDepth`` can be 1, 2, 4, or 8
-  ``GrayImageMinDownsampleDepth`` can be 2, 4, or 8

For example, a value of 4 for ``ColorImageMinDownsampleDepth`` means that only 4- and 8 bits-per-sample color images are downsampled (assuming ``DownsampleColorImages`` is ``true`` ). Similarly, a value of 8 for ``GrayImageMinDownsampleDepth`` means that only 8 bits-per-sample gray images are downsampled (assuming ``DownsampleGrayImages`` is ``true`` ).

.. note::

   12 bits-per-sample images (valid in PostScript) are treated exactly as 8 bits-per-sample images because they are converted to 8 bits per sample before downsampling takes place.

Setting compression of text, line art, and objects
--------------------------------------------------

You can use the ``CompressPages`` setting to set the compression of text and line art. For PDF 1.5 and above, you can use the ``CompressObjects`` setting to control object-level compression, which is the consolidation of small objects that cannot be individually compressed into *streams* that can then be efficiently compressed.

.. raw:: html

   <a name="99863"></a>

Distiller-only image settings
-----------------------------

The following options apply only to Distiller and are not supported by Creative Suite applications.

.. raw:: html

   <a name="95410"></a>

Controlling bit depth
^^^^^^^^^^^^^^^^^^^^^

*Bit depth* is the number of bits used to represent each color component of each sample of an image. (For example, red, green, and blue are the color components in an RGB image). Distiller supports the control of bit depth by means of the ``ColorImageDepth`` , ``GrayImageDepth`` , and ``MonoImageDepth`` settings.

The bit depth of an image can be decreased (for example, from 8 bits per sample to 4 bits per sample) to save space, regardless of whether the image is downsampled.

If an image is downsampled, the bit depth can be increased to provide *anti-aliasing* . Anti-aliasing increases the number of bits per sample to preserve some of the information that is otherwise lost by downsampling. Anti-aliasing occurs only in the following conditions:

-  The image depth setting specifies a bit depth greater than that of the incoming image.
-  The value of the appropriate setting ``AntiAliasColorImages`` , ``AntiAliasGrayImages`` , or ``AntiAliasMonoImages`` is ``true`` . (They need not be ``true`` to decrease the bit depth.)
-  Sampling is enabled and the downsample thresholds are met; therefore, sampling actually occurs.

In these cases, Distiller first increases the bit depth, then downsamples the image.

For example, suppose a 300 pixel-per-inch monochrome image is downsampled to 150 pixels per inch. If ``MonoImageDepth`` is 4 and ``AntiAliasMonoImages`` is ``true`` , the bit depth of the image is increased prior to downsampling so that it becomes a 4-bit grayscale image. Each of the samples in the downsampled image is produced from four samples in the input image; because each of the input samples can be either on or off, there are 16 possible values for each sample in the downsampled image.

Note that after the bit depth settings have been applied, an input grayscale or monochrome image may be changed to the other type.

-  A grayscale image specified to have a ``GrayImageDepth`` of 1 is treated as a monochrome image.
-  A monochrome image that has a ``MonoImageDepth`` of 2, 4, or 8 becomes a grayscale image.

Distiller determines whether to apply compression settings *after* downsampling has taken place. If the bit depth has changed, the resulting image type determines which encoding setting is examined. For example, if a monochrome image was changed to have a bit depth of 2 or more, the ``EncodeGrayImages`` setting would be checked. If encoding is enabled, the image is compressed using the filter type and filter parameter dictionary specified by the settings for the resulting image type.

The PostScript example below shows a code fragment specifying that monochrome images be downsampled to 72 pixels per inch, converted to 2 bits per sample, and encoded using Flate compression. Because the downsampled images are grayscale, the filter is specified using the grayscale rather than the monochrome image settings. Also, assuming that the input image is a 300-pixels-per-inch image, it is downsampled to 75 pixels per inch, the closest possible value to the 72 pixels per inch requested.

::

     <<    /DownsampleMonoImages true
           /MonoImageResolution 72
           /MonoImageDepth 2
           /EncodeGrayImages true
           /AntiAliasMonoImages true
           /GrayImageFilter /FlateEncode
     >> setdistillerparams

.. raw:: html

   <a name="75361"></a>

Specifying a minimum resolution of sampled images
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In addition to the downsampling settings, starting with version 7.0, Distiller provides settings to check whether images meet a minimum resolution.

``ColorImageMinResolution`` , ``GrayImageMinResolution`` , and ``MonoImageMinResolution`` are settings that specify an integer between 9 to 64000 representing the minimum resolution for an image.

``ColorImageMinResolutionPolicy`` , ``GrayImageMinResolutionPolicy`` , and ``MonoImageMinResolutionPolicy`` are settings that specify what happens when images are found that do not meet the minimum resolution. They are names that can take one of the following values:

* ``OK`` : the minimum resolution settings are ignored.
* ``Warning`` : Any image with a resolution smaller than the specified minimum generates a warning when the PDF file is created.
* ``Error`` : Any image with a resolution smaller than the specified minimum generates an error, and the job fails with a limit check error.

The default values for these settings in the predefined Adobe PDF settings files are chosen to be the same as the values for the default downsampling resolution. With these default values, Distiller's default behavior does not change; that is, Distiller does not enforce any lower limit on image resolution.

These settings can be used to ensure that a PDF file does not have any images with lower resolution than the defined limit. This feature is primarily for prepress people who want to detect that no low resolution images make it into a PDF file. An example is a sampled image in an advertisement where the image must be of a certain quality.

If you get a warning or error about a low resolution image and the settings are correct according to your requirements, you need to go to the source of the image and regenerate it with a higher resolution. Distiller cannot actively alter these images because it doesn't support up-sampling.

In the following example, Distiller issues a warning every time a sampled gray image with resolution smaller than 100 ppi is placed in the PDF file:

::

     /GrayImageMinResolution 100
     /GrayImageMinResolutionPolicy /Warning

The warning messages will look like this:

::

     %%[ Warning: Gray image resolution (92 ppi) is

       lower than /GrayImageMinResolution (100 ppi) ]%%

If ``GrayImageMinResolutionPolicy`` is set to ``Error`` , then an error message is emitted and the job fails with a ``limitcheck`` error. If ``GrayImageMinResolutionPolicy`` is set to ``OK`` , then distillation continues normally.

.. note::

   While there are no dependencies or interaction between the downsampling settings and the minimum resolution settings, normally you would not set the resolution policy to ``Warning`` or ``Error`` and at the same time set the minimum resolution to a value that is higher than the downsampling threshold. If you do this, the result is that *all* images are flagged as having too low a resolution. If the resolution policy is ``Error`` , then only PDF files with no images would be distilled.

.. raw:: html

   <a name="36967"></a>

Controlling downsampling and encoding for each sampled image
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can separately control the downsampling and encoding of each sampled image in a PostScript file. To do this, you must make adjustments to the Distiller parameters in the file just before, and appropriate to, each image.

.. raw:: html

   <a name="16777"></a>

Disabling of image cropping
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Distiller determines whether more than 10 percent of an image sample falls outside the existing clip path. If so, Distiller normally discards (crops) the image samples that fall outside the clip area, resulting in smaller images and PDF files.

For workflows in which the full-size (non-cropped) images must be extracted for special-purpose image manipulation, it is possible to disable cropping, using the settings ``CropColorImages`` , ``CropGrayImages`` , and ``CropMonoImages`` for color, grayscale, and monochrome images, respectively. These settings are Boolean values:

* ``false`` : indicates that Distiller should not clip image samples regardless of the current clip area.
* ``true`` : (the default) indicates that Distiller should crop only if the 10 percent criteria is met.

.. note::

   InDesign uses a separate setting, ``CropImagesToFrames`` , to control cropping.

.. raw:: html

   <a name="38175"></a>

Using the font settings
=======================

Fonts can be included ( *embedded* ) in a PDF file to ensure that the file can be rendered correctly, regardless of whether the fonts are installed on the machine used to view the file. For example, the exact font may be needed to achieve certain effects such as high-end printing or to ensure portability in situations where the viewer cannot create a substitute font.

Distiller supports the ``EmbedAllFonts`` setting, which specifies whether fonts should be embedded. Other Creative Suite applications always embed fonts when possible.

.. note::

   Embedding is subject to license; specific fonts can indicate that embedding is not permitted.

See `Font settings <PDF_Create_CommonSettings.html#38175>`__ for a description of each of the font settings.

Embedded fonts make a PDF file larger. To produce files as small as possible, fonts can be *subsetted* . When you subset a font, only the information required to draw glyphs (specific renderings) for the characters used in the document is embedded. Subsetting is expressed as a percentage of the font glyphs for a font format. The ``SubsetFonts`` and ``MaxSubsetPct`` settings are used to control partial embedding of fonts.

Distiller supports additional settings to control which fonts are embedded. The rest of this section describes how Distiller chooses whether to embed fonts.

Distiller maintains lists of fonts that will be embedded or not embedded. ``AlwaysEmbed`` specifies fonts that should always be embedded, and ``NeverEmbed`` specifies fonts that should never be embedded. These two settings are arrays that contain a list of font names. Optionally, the first element in the arrays may be a Boolean value (``true`` or ``false`` ).

-  If the first element is not a Boolean value, the array of font names represents the entire list of fonts to be embedded or not embedded.
-  If the first element is the Boolean ``true`` , the font names in the array are *added to* Distiller's internal list of fonts to be embedded (``AlwaysEmbed`` ) or not embedded (``NeverEmbed`` ).
-  If the first element is the Boolean ``false`` , the font names in the array are *removed from* Distiller's internal list of fonts to be embedded (``AlwaysEmbed`` ) or not embedded (``NeverEmbed`` ).

If a font appears in both the ``NeverEmbed`` and ``AlwaysEmbed`` lists, it is never embedded.

The ``EmbedAllFonts`` setting is a Boolean value that, when ``true`` , specifies that all fonts be embedded except those in the ``NeverEmbed`` array.

.. note::

   A font may not be embedded if its license doesn't permit embedding, even though its name is in the ``AlwaysEmbed`` list or ``EmbedAllFonts`` is ``true`` . Furthermore, a symbolic font is always embedded (if license permits) even if its name is in the ``NeverEmbed`` list.

In this PostScript example, Minion Regular is always embedded, and ITC Stone Serif Italic and ITC Stone Sans are never embedded.

::

     << /AlwaysEmbed [ /Minion-Regular ]

               /NeverEmbed [ /StoneSans /StoneSerif-Italic ]

       >> setdistillerparams

.. note::

   The font name given to definefont does not have to match the name in the FontInfo dictionary. For instance, in this example the full name of the font defined as 'StoneSans' is 'ITC Stone Sans.'

The following table identifies the types of fonts that you can (or cannot) embed or subset through Distiller settings.

Distiller control over embedding and subsetting fonts

.. _section-2:


 

+---------------------+----------------------+--------------+-----------------------+
| Font                | NeverEmbed?          | AlwaysEmbed? | Subset?               |
+=====================+======================+==============+=======================+
| Type 1              | Yes                  | Yes          | Yes                   |
+---------------------+----------------------+--------------+-----------------------+
| Type 3              | No - Always embedded |              | No - Always subsetted |
+---------------------+----------------------+--------------+-----------------------+
| True Type (Type 42) | Yes                  | Yes          | No - Always subsetted |
+---------------------+----------------------+--------------+-----------------------+
| CIDFontType0        | Yes                  | Yes          | No - Always subsetted |
+---------------------+----------------------+--------------+-----------------------+
| CIDFontType1        | No - Always embedded |              | No - Always subsetted |
+---------------------+----------------------+--------------+-----------------------+
| CIDFontType2        | Yes                  | Yes          | No - Always subsetted |
+---------------------+----------------------+--------------+-----------------------+
| OpenType            | Yes                  | Yes          | Yes                   |
+---------------------+----------------------+--------------+-----------------------+

For additional information on Type 1, Type 3, Type 42, and CID-keyed fonts, see Chapter 5, "Fonts," in the *PostScript Language Reference* and Chapter 5 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ . You also can find additional documentation on fonts at the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

.. note::

   Distiller 5 and above also support OpenType fonts; Distiller 4 does not. OpenType fonts are based on the compact font format (CFF). For more information, see the *Compact Font Format Specification* at the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__ .

.. raw:: html

   <a name="86731"></a>

Using the color conversion settings
===================================

This section describes how the color conversion settings are used and explains the correspondence between different groups of settings.

Acrobat Distiller uses a number of settings to control color conversion. As with all Distiller parameters, these settings are defined in the ``Common`` namespace (see `Common PDF Settings <PDF_Create_CommonSettings.html#80362>`__" for details).

Creative Suite applications have a sophisticated user interface for determining color conversions when producing PDF files. The options provided in the UI correspond to settings in the ``CreativeSuite`` namespace of the settings files (see `Other Namespaces <PDF_Create_NewNamespaces.html#69127>`__" for details). These options provide a superset of the functionality provided by the Distiller settings in the ``Common`` namespace. To maximize interoperability, Creative Suite applications store approximations to their color settings in the Common settings when saving settings files.

Distiller color conversion settings
-----------------------------------

Distiller uses a number of settings related to color. The following settings are only used by Distiller: ``DefaultRenderingIntent`` , ``ParseICCProfilesInComments`` , ``PreserveDICMYKValues`` , ``PreserveHalftoneInfo`` , ``TransferFunctionInfo`` , and ``UCRandBGInfo`` . They control such features as whether Distiller preserves (that is, passes into the PDF file) halftoning, overprinting, and transfer function information. See `Common PDF Settings <PDF_Create_CommonSettings.html#80362>`__ for information on these settings.

Other color conversion settings are shared to a limited degree with Creative Suite applications. They are:

* ``ColorSettingsFile`` : A file containing color settings. When a color settings file is specified, all other color conversion settings are ignored and not selectable in the UI. The Creative Suite applications recognize the existence of this setting as an indication that the user has modified color settings outside the suite.
* ``CalCMYKProfile`` , ``CalGrayProfile`` , ``CalRGBProfile`` : Settings that specify the names of ICC profiles to be used for tagging or converting CMYK, gray, or RGB color data, respectively.
* ``sRGBProfile`` : The name of an ICC profile to use for converting color spaces to CalRGB (PDF 1.2) or sRGB (PDF 1.3 and above).

.. warning::

   The Creative Suite applications do not support saving files as PDF 1.2.

``ColorConversionStrategy`` : Specifies a strategy for determining output color family and color space and the inclusion of ICC profiles. (See "ICCBased Color Spaces" in Section 4.5.4 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for details on profiles.) The ``ColorConversionStrategy`` setting has the following possible values.

.. _section-3:


 

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
|    UseDeviceIndependentColor-ForImages |                                        |
+----------------------------------------+----------------------------------------+
|                                        | Convert All Colors to sRGB             |
|                                        |                                        |
|    sRGB                                |                                        |
+----------------------------------------+----------------------------------------+
|                                        | Convert All Colors to CMYK             |
|                                        |                                        |
|    CMYK                                |                                        |
+----------------------------------------+----------------------------------------+

.. note::

   Distiller leaves ``Separation`` and ``DeviceN`` color spaces unchanged in PDF output. Creative Suite applications convert the alternate color spaces; for example, when converting to CMYK, the alternate color space is changed to CMYK if necessary and the tint transform is adjusted accordingly.

The following table shows how Distiller converts the PostScript input to the equivalent color space for each ``ColorConversionStrategy`` value. The notes below the table provide further information.

PS color space (in) vs. PDF color space (out)

.. _section-4:


 

+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| PS Input               | | LeaveColor | | UseDevice   | | UseDevice      | sRGB       | CMYK                                           |
|                        | | Unchanged  | | Independent | | Independent    |            |                                                |
|                        |              | | Color       | | ColorForImages |            |                                                |
+========================+==============+===============+==================+============+================================================+
| Gray text and graphics | DeviceGray   | ICCBased      | DeviceGray       | DeviceGray | DeviceGray                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| Gray image             | DeviceGray   | ICCBased      | ICCBased         | DeviceGray | DeviceGray                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| RGB text and graphics  | DeviceRGB    | ICCBased      | DeviceRGB        | sRGB       | DeviceCMYK                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| RGB image              | DeviceRGB    | ICCBased      | ICCBased         | sRGB       | DeviceCMYK                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| CMYK text and graphics | DeviceCMYK   | ICCBased      | DeviceCMYK       | sRGB       | DeviceCMYK                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| CMYK image             | DeviceCMYK   | ICCBased      | ICCBased         | sRGB       | DeviceCMYK                                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| CIE text and graphics  | ICCBased     | ICCBased      | ICCBased         | sRGB       | DeviceGray/ DeviceCMYK (1)                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+
| CIE image              | ICCBased     | ICCBased      | ICCBased         | sRGB       | DeviceGray/ DeviceCMYK (1)                     |
+------------------------+--------------+---------------+------------------+------------+------------------------------------------------+

.. note:: (1) CIEBasedA becomes DeviceGray; others become DeviceCMYK.

Notes on the PS color space (in) vs. PDF color space (out) table:

-  ICCBased color spaces were introduced in PDF 1.3. When creating PDF 1.2 files using device-independent colors, the color spaces CalGray (for gray), CalRGB (for RGB), or Lab (for CMYK) are used in place of ICCBased.
-  ``sRGB`` is an industry standard color space, but PDF does not have a color space by this name. Instead, it can be represented precisely in PDF as an ICCBased color space or approximated by a CalRGB color space. During conversion, Distiller chooses either CalRGB or ICCBased as appropriate. (For PDF 1.2, it must choose CalRGB.)

.. raw:: html

   <a name="74214"></a>

Creative Suite color conversion settings
----------------------------------------

Creative Suite applications use several color conversion settings. The settings, which are in the ``CreativeSuite`` namespace, determine whether colors should be converted and which profiles should be included for which objects. They appear in the Output panel of the PDF export dialog box in the user interface. This section explains how the settings are used.

Converting colors
^^^^^^^^^^^^^^^^^

The ``ConvertColors`` setting determines whether colors should be converted. A value of ``NoConversion`` corresponds to "No Color Conversion" in the UI. Values of ``ConvertToCMYK`` and ``ConvertToRGB`` can correspond to either of the following UI settings, as follows:

* **Convert to Destination**: All colors are converted to destination profile space unless profiles are same as destination profile. (Native and untagged placed objects are treated as if tagged with the corresponding document profile.)
* **Convert to Destination (Preserve Numbers)**: (This option is not used by Photoshop.) Colors are converted to the destination profile if the color space family (for example, CMYK) does not match the destination color space family. Colors are not converted if there is no embedded profile or if the object is native (that is, created in the application itself as opposed to placed graphics such as images or PDF).

Including profiles
^^^^^^^^^^^^^^^^^^

This section describes the settings that control whether and which color profiles should be included.

``IncludeProfiles`` is a Boolean value. If it is ``false`` , no profiles are included in the generated PDF. The UI setting is "Don't Include Profiles". If ``IncludeProfiles`` is ``true`` and colors are being converted to a destination, the UI specifies "Include Destination Profiles."

If ``IncludeProfiles`` is ``true`` and colors are not being converted, the options are:

* **Include All Profiles** : Includes profiles for all content.
* **Include Tagged Source Profiles** : Leaves device-dependent colors unchanged and preserves device-independent colors as the nearest possible equivalent in PDF.
* **Include All RGB and Tagged Source CMYK Profiles** : Includes profiles for tagged RGB and tagged CMYK objects, as well as the Document RGB profile for untagged RGB objects.

These correspond to additional settings, explained below.

.. note::

   In the Photoshop UI, only "Include Destination Profile" is available when converting colors.

``UntaggedRGBHandling`` and ``UntaggedCMYKHandling`` determine what should happen to untagged RGB or CMYK objects during conversion. They can either be left untagged (``LeaveUntagged`` ) or tagged with the document profile (``UseDocumentProfile`` ).

The choice of profiles is controlled by ``DestinationProfileSelector`` , which can take these values:

-  ``NA`` means that no color conversion takes place (``ConvertColors`` is ``NoConversion`` ).
-  ``WorkingCMYK`` , ``WorkingRGB`` , ``DocumentCMYK`` , and ``DocumentRGB`` specify the profile to be used for color conversion. When using ``WorkingCMYK`` or ``DocumentCMYK`` , Creative Suite applications also write the profile name to ``DestinationProfileName`` .
-  ``UseName`` means that the ICC profile specified by ``DestinationProfileName`` should be used for color conversion.

.. raw:: html

   <a name="35911"></a>

Color settings interchange
--------------------------

This section describes how Creative Suite applications decide whether to use the ``CreativeSuite`` namespace settings or the ``Common`` settings and what values they store when saving settings files.

When common settings are used
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Creative Suite applications use the Common settings when the CreativeSuite settings are not present in the settings file or when there is an inconsistency between the two types of settings. This section describes when the Common settings are used.

The following settings indicate that the settings file was not created by a Creative Suite application:

-  A value for ``ColorSettingsFile`` other than the empty string or ``(None)`` . In this case, the other Common settings are used.
-  A value of ``UseDeviceIndependentColorForImages`` for ``ColorConversionStrategy`` . In this case, Creative Suite applications override this value and use ``LeaveColorsUnchanged`` .

In other cases, the Common settings and CreativeSuite settings are present but inconsistent, indicating that the settings file must have been modified subsequent to being written by a Creative Suite application. In these cases, ``ColorSettingsFile`` is empty or unspecified and the following values are present:

-  The value of ``ColorConversionStrategy`` is ``UseDeviceIndependentColorForImages`` . In this case, Creative Suite applications override this value and use ``LeaveColorsUnchanged`` .
-  The value of ``ColorConversionStrategy`` is ``CMYK`` and the value of ``ConvertColors`` (Creative Suite) is ``ConvertToRGB`` or ``NoConversion`` .
-  The value of ``ColorConversionStrategy`` is ``sRGB`` and the value of ``ConvertColors`` is ``ConvertToCMYK`` or ``NoConversion`` .
-  The value of ``ColorConversionStrategy`` is ``LeaveColorsUnchanged`` and the value of ``ConvertColors`` is ``ConvertToCMYK`` or ``ConvertToRGB`` .
-  The value of ``ColorConversionStrategy`` is ``LeaveColorsUnchanged`` , the value of ``ConvertColors`` is ``NoConversion`` , ``IncludeProfiles`` is ``true`` , and ``UntaggedCMYKHandling`` is ``UseDocumentProfile`` .
-  The value of ``ColorConversionStrategy`` is ``UseDeviceIndependentColor`` and the value of ``ConvertColors`` is ``ConvertToCMYK`` or ``ConvertToRGB`` .
-  The value of ``ColorConversionStrategy`` is ``UseDeviceIndependentColor`` , the value of ``ConvertColors`` is ``NoConversion`` , and ``IncludeProfiles`` is ``false`` .
-  ``CalCMYKProfile`` has a non-empty value, ``DestinationProfileName`` has a non-empty value that does not match ``CalCMYKProfile`` , and the value of ``ConvertColors`` is ``ConvertToCMYK`` .

In all other cases, the CreativeSuite settings are used.

When the Common settings are used, the following table shows how the Common setting ``ColorConversionStrategy`` determines the values of the Creative Suite UI elements. (See the table `Conversion from CreativeSuite settings to Common settings <PDF_Create_UsingSettings.html#68602>`__ for additional information.) Note that in all cases, if color management is off, the Profile Inclusion Policy defaults to "Don't Include Profiles."

Creative Suite equivalents for ColorConversionStrategy

.. _section-5:


 

+---------------------------------------+--------------------------------------------------------------+
| ColorConversionStrategy               | UI elements                                                  |
+=======================================+==============================================================+
|                                       | Color Conversion = No Conversion                             |
|                                       |                                                              |
|    LeaveColorsUnchanged               | Profile Inclusion Policy = Include Tagged Source Profiles    |
+---------------------------------------+--------------------------------------------------------------+
|                                       | Color Conversion = No Conversion                             |
|                                       |                                                              |
|    UseDeviceIndependentColor          | Profile Inclusion Policy = Include All Profiles              |
+---------------------------------------+--------------------------------------------------------------+
|                                       | Color Conversion = No Conversion                             |
|                                       |                                                              |
|    UseDeviceIndependentColorForImages | Profile Inclusion Policy = Include Tagged Source Profiles    |
+---------------------------------------+--------------------------------------------------------------+
|                                       | Color Conversion = Convert to Destination                    |
|                                       |                                                              |
|    sRGB                               | Profile Inclusion Policy = Include All Profiles              |
|                                       |                                                              |
|                                       | Destination Profile = sRGBProfile                            |
+---------------------------------------+--------------------------------------------------------------+
|                                       | Color Conversion = Convert to Destination (Preserve Numbers) |
|                                       |                                                              |
|    CMYK                               | Profile Inclusion Policy = Don't Include Profiles            |
|                                       |                                                              |
|                                       | Destination Profile = CalCMYKProfile                         |
+---------------------------------------+--------------------------------------------------------------+

.. note::

   When specifying PDF/X-1a compliance (that is, the value of ``CheckCompliance`` is either [``PDFX1a:2001`` ] or [``PDFX1a:2003`` ]), Creative Suite applications always use ``CMYK`` as the value of ``ColorConversionStrategy`` . See `Using the standards settings <PDF_Create_UsingSettings.html#86848>`__ for more information.

Saving common settings equivalents
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When saving settings files, the Creative Suite applications write the best possible approximations of their color settings to the Common settings. ``ColorSettingsFile`` is always set to ``()`` . This section describes how the other settings are determined.

The following table shows the relationship between the Creative Suite UI, the Creative Suite settings and the Common settings. The first four columns show the possible values of ``ConvertColors`` , ``IncludeProfiles`` , ``UntaggedCMYKHandling`` , and ``UntaggedRGBHandling`` . The last column shows the Common settings that correspond to them. The first column also shows what UI names correspond to the groups of settings.

Conversion from CreativeSuite settings to Common settings

.. _section-6:


 

+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
| | ConvertColors                               | | Include   | | UntaggedCMYK        | | UntaggedRGB         | Common settings                                    |
| | /UI Name                                    | | Profiles  | | Handling            | | Handling            |                                                    |
+===============================================+=============+=======================+=======================+====================================================+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|    NoConversion                               |    false    |    LeaveUntagged      |    LeaveUntagged      |    ColorConversionStrategy                         |
|                                               |             |                       |                       |                                                    |
| Don't Include Profiles                        |             |                       |                       |    = LeaveColorsUnchanged                          |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
| Include Tagged Source Profiles                |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |             |    true               |    LeaveUntagged      |    LeaveUntagged                                   |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
| Include All RGB & Tagged Source CMYK Profiles |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |             |    true               |    LeaveUntagged      |    UseDocumentProfile                              |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
| Include All Profiles                          |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |    true     |    UseDocumentProfile |    UseDocumentProfile |    ColorConversionStrategy                         |
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |    = UseDeviceIndependent                          |
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |    Color                                           |
|                                               |             |                       |                       |    CalCMYKProfile = Document CMYK                  |
|                                               |             |                       |                       |    CalRGBProfile = Document RGB                    |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|    ConvertToCMYK                              |    false    |    UseDocumentProfile |    UseDocumentProfile |    ColorConversionStrategy = CMYK                  |
|                                               |             |                       |                       |                                                    |
| Convert To Destination                        |             |                       |                       | ``CalCMYKProfile =`` destination CMYK profile name |
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       | ``CalRGBProfile =`` document RGB profile name      |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |    true     |                       |                       |    UseDocumentProfile                              |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
| Convert To Destination                        |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
| (Preserve Numbers)                            |             |                       |    false              |    LeaveUntagged                                   |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |    true               |    LeaveUntagged                                   |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|    ConvertToRGB                               |    false    |    UseDocumentProfile |    UseDocumentProfile |    ColorConversionStrategy = RGB                   |
|                                               |             |                       |                       |                                                    |
| Convert To Destination                        |             |                       |                       | ``CalCMYKProfile =`` document CMYK profile name    |
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       | ``CalRGBProfile =`` document RGB profile name      |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |    true     |                       |    UseDocumentProfile |    UseDocumentProfile                              |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|    ConvertToRGB                               |             |    false              |    UseDocumentProfile |    LeaveUntagged                                   |
|                                               |             |                       |                       |                                                    |
| Convert To Destination                        |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
| (Preserve Numbers)                            |             |                       |                       |                                                    |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+
|                                               |             |                       |                       |                                                    |
|                                               |             |                       |                       |                                                    |
|                                               |             |    true               |    UseDocumentProfile |    LeaveUntagged                                   |
+-----------------------------------------------+-------------+-----------------------+-----------------------+----------------------------------------------------+

.. raw:: html

   <a name="86103"></a>

Using the advanced Adobe PDF settings
=====================================

You can customize advanced Adobe PDF settings. When the ``CreateJobTicket`` setting is ``true`` , Distiller produces *internal job tickets* (that is, job tickets within the PDF file). Job ticket keys are created in response to ``setpagedevice`` keys and DSC comments.

The relationship between ``setpagedevice`` keys and job ticket keys, and the relationship between DSC comments and job ticket keys is described in the following sections. For details on the format and contents of job tickets, see *Portable Job Ticket Format, Version 1.1* .

Relationship between setpagedevice keys and job ticket keys
------------------------------------------------------------------

The following table lists the ``setpagedevice`` keys that Distiller supports and describes where in an internal job ticket Distiller stores the corresponding key values.

.. note::

   ``setpagedevice`` keys that are distilled into the JobTicketContents dictionary rather than into the PageRange dictionary must appear in the first page of the PostScript job; otherwise, they are ignored. In the ``PS page`` column of the following table, "First" identifies ``setpagedevice`` keys that must appear on the first page.

Relationship between setpagedevice keys and job ticket keys

.. _section-7:


 

+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| setpagedevice key                                    | PS page               | job ticket key                                                                                                                                                         |
+======================================================+=======================+========================================================================================================================================================================+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Bind                                              |                       |    JobTicketContents::Finishing                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
| -  ``Bind`` is unrelated to the ``Binding`` setting. |                       |                                                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 | | If the value of the ``CutMedia setpagedevice`` key is less than 4, Distiller represents the ``setpagedevice`` value in ``JobTicketContents::MediaUsage::CutMedia`` . |
|                                                      |                       | | Otherwise, it represents the value in *JobTicketContents::PrintLayout::Signature::                                                                                   |
|    CutMedia                                          |                       |   Sheets::MediaUsage::CutMedia* .                                                                                                                                      |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    DeviceRenderingInfo/                              |                       |    PageRange::Rendering::ValuesPerColor                                                                                                                                |
|                                                      |                       |                                                                                                                                                                        |
|    ValuesPerColorComponent                           |                       |    Component                                                                                                                                                           |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Duplex                                            |                       |    JobTicketContents::PrintLayout                                                                                                                                      |
|                                                      |                       |                                                                                                                                                                        |
|                                                      |                       | See Appendix B.4 in the *Portable Job Ticket Format, Version 1.1* , for a description of the general appearance of a job ticket that can produce duplex printing.      |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Fold                                              |                       |    JobTicketContents::Finishing                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    HWResolution                                      |                       |    PageRange::Rendering::Resolution                                                                                                                                    |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Jog                                               |                       |    JobTicketContents::Finishing                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Laminate                                          |                       |    JobTicketContents::Finishing                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    ManualFeed                                        |                       |    JobTicketContents::MediaSource::ManualFeed                                                                                                                          |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MediaClass                                        |                       |    JobTicketContents::MediaSource::MediaClass                                                                                                                          |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MediaColor                                        |                       |    JobTicketContents::MediaSource::MediaColor                                                                                                                          |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MediaPosition                                     |                       |    JobTicketContents::MediaSource::Position                                                                                                                            |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MediaType                                         |                       |    JobTicketContents::Media::Category                                                                                                                                  |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MediaWeight                                       |                       |    JobTicketContents::Media::Weight                                                                                                                                    |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    MirrorPrint                                       |                       |    JobTicketContents::MediaUsage::MirrorPrint                                                                                                                          |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    NegativePrint                                     |                       |    JobTicketContents::MediaUsage::NegativePrint                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    PageSize                                          |                       |    PageRange::MediaBox                                                                                                                                                 |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    PostRenderingEnhance                              |                       |    PageRange::Rendering::PostRenderingEnhance                                                                                                                          |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    PreRenderingEnhance                               |                       |    PageRange::Rendering::PreRenderingEnhance                                                                                                                           |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    ProcessColorModel                                 |                       |    PageRange::ColorModel::ProcessColorModel                                                                                                                            |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    SeparationColorNames                              |                       |    PageRange::ColorModel::ColorantParams                                                                                                                               |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    SeparationOrder                                   |                       |    PageRange::ColorModel::ColorantOrder                                                                                                                                |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Separations                                       |                       |    PageRange::ColorModel::Separations                                                                                                                                  |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Staple                                            |                       |    JobTicketContents::Finishing                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Trapping                                          |                       |    PageRange::Trapping::Trapping                                                                                                                                       |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | Any                   |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    TrappingDetails                                   |                       |    PageRange::Trapping::TrappingDetails                                                                                                                                |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Trim                                              |                       |    JobTicketContents::Finishing                                                                                                                                        |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      | First                 |                                                                                                                                                                        |
|                                                      |                       |                                                                                                                                                                        |
|    Tumble                                            |                       |    JobTicketContents::PrintLayout                                                                                                                                      |
|                                                      |                       |                                                                                                                                                                        |
|                                                      |                       | Such a job ticket is identical to that described for the ``Duplex setpagedevice`` key, except the ``CTM`` for the ``Back`` surface is rotated 180 degrees.             |
+------------------------------------------------------+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Relationship between PostScript comments and job ticket keys
--------------------------------------------------------------------

When the ``ParseDSCComments`` setting is ``true`` , Distiller interprets certain PostScript comments to produce true job ticket ``PlaneOrder`` objects. Such PostScript comments include ``%%Page:`` (which is more specifically a DSC comment), ``%%QRKPageBegin:`` , and ``%%PlateColor:`` . Distiller also supports the ``%%PlateColor:`` *PostScript comment*; however, use of that comment is discouraged.

.. raw:: html

   <a name="86848"></a>

Using the standards settings
============================

The Standards settings provide control over PDF/A- and PDF/X-compliant output:

-  PDF/A is a proposed ISO standard for the long-term preservation (archival) of electronic documents.
-  PDF/X is a focused subset of PDF designed specifically for reliable prepress data interchange. It is an International Standards Organization (ISO) standard ( `www.iso.org <http://www.iso.org>`__ ).

See `Standards settings <PDF_Create_CommonSettings.html#77813>`__ for details on the settings that are relevant to standards compliance.

.. raw:: html

   <a name="83753"></a>

Using the compliance checking settings
--------------------------------------

In Acrobat 6, the ``PDFX1aCheck`` and ``PDFX3Check`` settings were introduced to check for compliance with PDF/X-1a (2001) and PDF/X-3 (2002), respectively.

The ``CheckCompliance`` setting was introduced in Distiller 7 and is supported by Creative Suite applications. It specifies the standard against which the document's compliance is checked. It is an array of strings, each of which is the name of a standard.

.. note::

   Currently only one string may appear in the array.

In Distiller 7 and the Creative Suite, ``CheckCompliance`` , if present, takes precedence over ``PDFX1aCheck`` and ``PDFX3Check`` :

-  ``/CheckCompliance [ /PDFX1a:2001 ]`` has the same meaning as ``/PDFX1aCheck true``
-  ``/CheckCompliance [ /PDFX3:2002 ]`` has the same meaning as ``/PDFX3Check true``
-  Other values of ``CheckCompliance`` have no corresponding Distiller 6 values.

If a settings file contains ``CheckCompliance`` and not ``PDFX1aCheck`` or ``PDFX3Check`` , the appropriate values of ``PDFX1aCheck`` and ``PDFX3Check`` are written out when the file is saved to provide backward compatibility with Distiller 6 for testing of PDF/X-1a:2001 and PDF/X-3:2002 standards compliance. That is,

::

     /CheckCompliance [ /PDFX1a:2001 ] 

without ``PDFX1aCheck`` and ``PDFX3Check`` is written out and also generates:

::

     /PDFX1aCheck true 
     /PDFX3Check false 

Similarly:

::

     /CheckCompliance [ /PDFX3:2002 ] 

without ``PDFX1aCheck`` and ``PDFX3Check`` is written out and also generates:

::

     /PDFX1aCheck false 
     /PDFX3Check true 

Any other values for ``CheckCompliance`` also generates:

::

     /PDFX1aCheck false 
     /PDFX3Check false 

If ``PDFX1aCheck`` and/or ``PDFX3Check`` are present, they are preserved when the file is saved.

If ``CheckCompliance`` is not present in a file:

-  If ``PDFX1aCheck`` is present and ``true`` , ``CheckCompliance`` takes the value ``[/PDFX1a:2001]`` .
-  Otherwise, if ``PDFX3Check`` is ``true`` , ``CheckCompliance`` takes the value ``[/PDFX3:2002]`` .
-  Otherwise, ``CheckCompliance`` takes the value ``[/None]`` .

.. raw:: html

   <a name="99125"></a>

Using the PDF/X output intent settings
--------------------------------------

In a PDF/X compliant file, the document catalog must contain an ``OutputIntents`` entry that specifies a *PDF/X output intent dictionary* . Several settings are used to specify the entries in this dictionary. The rest of this section explains how they work.

Distiller uses the following settings to create the output intent dictionary: ``PDFXOutputIntentProfile`` , ``PDFXOutputCondition`` , ``PDFXOutputConditionIdentifier`` , and ``PDFXRegistryName`` . For compatibility, these settings are also used by Creative Suite applications , along with the Creative Suite-specific ``PDFXOutputIntentProfileSelector`` setting.

For Distiller only, these settings are ignored in the case where the output intent dictionary is specified explicitly in the PostScript file (by means of ``pdfmark`` operators). The rest of this discussion assumes the PostScript file does not specify this information.

The PDF/X output intent dictionary is described in Section 10.10.4 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ . It specifies the following entries (note that these are PDF names):

* ``OutputConditionIdentifier`` : A string identifying the intended printing condition of the document. Typically, it is the reference name of a standard production condition in an industry-standard registry such as the ICC Characterization Data Registry (see ``RegistryName`` below). It can be specified by the ``PDFXOutputConditionIdentifier`` setting.
* ``DestOutputProfile`` : A PDF/X *output intent profile* , which is a stream representing an ICC profile that defines the transformation from the PDF document's source colors to the output device colorants. It is not required if ``OutputConditionIdentifier`` specifies a standard production condition. However, Creative Suite applications always store the profile.
* ``OutputCondition`` : An optional human-readable comment describing the printing condition. It can be specified by the ``PDFXOutputCondition`` setting.
* ``RegistryName`` : A string identifying the registry that defines the condition defined by ``OutputConditionIdentifier`` . It can be specified by the ``PDFXRegistryName`` setting.
* ``Info`` : A string containing additional information. Distiller and Creative Suite aplications use this entry to store the profile name.

The ``PDFXOutputIntentProfile`` setting is used to identify a profile name. It may have one of the following values:

-  ``(None)`` or the empty string ``()`` are supported by Distiller only. This value means that the PostScript document must specify the output intent destination profile for PDF/X validation to succeed.
-  ``(Use Output Condition Identifier)`` is also supported by Distiller only and overridden by Creative Suite applications (as described in the rest of this section). In this case, Distiller uses the value defined by ``PDFXOutputConditionIdentifier`` and a profile is not included in the PDF file.
-  The name of the output intent destination profile. This profile is embedded as the value of the ``DestOutputProfile`` entry.

.. warning::

   For Distiller only, if the profile corresponding to the name is not present on the system, Distiller stores the profile name in ``OutputConditionIdentifier`` .

Creative Suite applications use the ``PDFXOutputIntentProfileSelector`` (in the ``CreativeSuite`` namespace) to identify the profile, which can be a name specified by ``PDFXOutputIntentProfile`` or a reference to the Working CMYK, Working RGB, Document CMYK, or DocumentRGB profile.

As mentioned above, Creative Suite applications do not support the value of ``(Use Output Condition Identifier)`` for ``PDFXOutputIntentProfile`` . When they encounter it in a settings file, they override it as follows:

-  ``PDFXOutputIntentProfileSelector`` and ``DestinationProfileSelector`` are set to ``UseName`` .
-  If ``PDFXOutputConditionIdentifier`` specifies a known condition (that is, one that maps to a specific set of characterization data at `www.color.org <http://www.color.org>`__ (the ICC web site), then ``PDFXOutputIntentProfile`` and ``DestinationProfileName`` are set to the name of the profile associated with the condition. The following table shows a list of profiles and their corresponding characterization data:

.. _section-8:


 

+-----------------------------------+-----------------------------------+
| ICC Profile                       | Characterization data             |
|                                   |                                   |
|                                   | (output condition identifier)     |
+===================================+===================================+
| U.S. Web Coated (SWOP) v2         | CGATS TR 001                      |
+-----------------------------------+-----------------------------------+
| Euroscale Coated v2               | FOGRA1                            |
+-----------------------------------+-----------------------------------+
| Euroscale Uncoated v2             | FOGRA4                            |
+-----------------------------------+-----------------------------------+
| Europe ISO Coated FOGRA27         | FOGRA27                           |
+-----------------------------------+-----------------------------------+
| Japan Color 2001 Coated           | JC200103                          |
+-----------------------------------+-----------------------------------+
| Japan Color 2001 Uncoated         | JC200104                          |
+-----------------------------------+-----------------------------------+
| Japan Color 2002 Newspaper        | JCN2002                           |
+-----------------------------------+-----------------------------------+

-  If ``PDFXOutputConditionIdentifier`` specifies an unknown condition and ``DestinationProfileName`` is a "PRTR" profile and maps to an unknown condition, then ``PDFXOutputIntentProfile`` is set to the value of ``DestinationProfileName`` .
-  If ``PDFXOutputConditionIdentifier`` specifies an unknown condition and ``DestinationProfileName`` is not a "PRTR" profile or maps to a known condition, then

   -  If ``ColorConversionStrategy`` is ``CMYK`` , ``PDFXOutputIntentProfile`` and ``DestinationProfileName`` are set to ``(U.S. Web Uncoated V2)`` .
   -  If ``ColorConversionStrategy`` is ``sRGB`` , ``PDFXOutputIntentProfile`` and ``DestinationProfileName`` are set to ``(ROMM RGB)`` .

.. warning::

   For Creative Suite applications, when color management is on and PDF/X compliance has been specified, the effective profiles specified by ``DestinationProfileName`` , ``CalCMYKProfile`` and ``PDFXOutputIntentProfile`` must be the same.

In addition, when specifying PDF/X-1a compliance (that is, the value of ``CheckCompliance`` is either ``[PDFX1a:2001]`` or ``[PDFX1a:2003]`` ), if the value of ``ColorConversionStrategy`` is not ``CMYK`` , the Creative Suite applications use the following values:

-  ``ColorConversionStrategy`` = ``CMYK``
-  ``ConvertColors`` = ``ConvertToCMYK``
-  ``UntaggedCMYKHandling`` = ``LeaveUntagged``
-  ``UntaggedRGBHandling`` = ``UseDocumentProfile``
-  ``IncludeProfiles`` = ``false``

Distiller examples
------------------

The following examples show how Distiller sets the values in the output intent dictionary.

Setting the output intent dictionary to Euroscale Uncoated v2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example, the ``PDFXOutputIntentProfile`` is set to ``(Euroscale Uncoated v2)`` , whose corresponding output condition identifier (``FOGRA4`` ) is known by Distiller.

::

     12 0 obj
       <<
               /Type /OutputIntent
               /S /GTS_PDFX
               /OutputConditionIdentifier (FOGRA4)
               /RegistryName (http://www.color.org)
               /Info (Euroscale Uncoated v2) 
               /DestOutputProfile 11 0 R
       >>
      endobj
      11 0 obj
       <<
               /N 4
               /Length 388226
               /Filter /FlateDecode
       >>
       stream
      ... ICCProfile data ... 
      endstream
      endobj

#. Setting the output intent dictionary to U.S. Web Uncoated v2

In this example, ``PDFXOutputIntentProfile`` is set to ``(U.S. Web Uncoated v2)`` and Distiller does not know the corresponding output condition identifier. In this case, the value of the output condition identifier is set to the profile name.

::

     12 0 obj
       <<
               /Type /OutputIntent
               /S /GTS_PDFX
               /OutputConditionIdentifier (U.S. Web Uncoated v2) 
               /Info (U.S. Web Uncoated v2)
               /DestOutputProfile 11 0 R
       >>
      endobj
      11 0 obj
       <<
               /N 4
               /Length 386435
               /Filter /FlateDecode
       >>
       stream
      ... ICCProfile data ... 
      endstream
      endobj

