******************************************************
Print Production
******************************************************

This chapter will provide you with an in-depth understanding of the ways in which you can manage print production workflows for PDF documents.

.. raw:: html

   <a name="43419"></a>

Setting print options
=====================

Since printing involves sending pages to an output device, there are many options that can affect print quality. JavaScript can be used to enhance and automate the use of these options in print production workflows, primarily through the use of the PrintParams object, whose properties and methods are described in the following table.

PrintParams properties

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - binaryOK
     - Binary printer channel is supported.

   * - bitmapDPI
     - DPI used for bitmaps or rasterizing transparency.

   * - booklet
     - An object used to set properties of booklet printing.

   * - colorProfile
     - Color profile based on available color spaces.

   * - constants
     - Wrapper object for PrintParams constants.

   * - downloadFarEastFonts
     - Sends Far East fonts to the printer.

   * - fileName
     - ``fileName`` is used when printing to a file instead of a printer.

   * - firstPage
     - The first zero-based page to be printed.

   * - flags
     - A bit field of flags to control printing options.

   * - fontPolicy
     - Used to determine when fonts are emitted.

   * - gradientDPI
     - The DPI used for rasterizing gradients.

   * - interactive
     - Sets the level of interaction for the user.

   * - lastPage
     - The last zero-based page to be printed.

   * - nUpAutoRotate
     - Auto rotate pages during multiple pages per sheet printing.

   * - nUpNumPagesH
     - Number of pages to lay out horizontally during multiple pages per sheet printing.

   * - nUpNumPagesV
     - Number of pages to lay out vertically during multiple pages per sheet printing.

   * - nUpPageBorder
     - Determines whether a page boundary is drawn and printed during multiple pages per sheet printing.

   * - nUpPageOrder
     - Determines how the multiple pages are laid out on the sheet for multiple pages per sheet printing.

   * - pageHandling
     - How pages will be handled (fit, shrink, or tiled).

   * - pageSubset
     - Even, odd, or all pages are printed.

   * - printAsImage
     - Sends pages as large bitmaps.

   * - printContent
     - Determines whether form fields and comments will be printed.

   * - printerName
     - The name of the destination printer.

   * - psLevel
     - The level of PostScript emitted to the printer.

   * - rasterFlags
     - A bit field of flags for outlines, clips, and overprint.

   * - reversePages
     - Prints pages in reverse order.

   * - tileLabel
     - Labels each page of tiled output.

   * - tileMark
     - Output marks to cut the page and where overlap occurs.

   * - tileOverlap
     - The number of points that tiled pages have in common.

   * - tileScale
     - The amount that tiled pages are scaled.

   * - transparencyLevel
     - The degree to which high level drawing operators are preserved.

   * - userPrinterCRD
     - Determines whether the printer Color Rendering Dictionary is used.

   * - useT1Conversion
     - Determines whether Type 1 fonts will be converted.

In addition to the properties of the PrintParams object, the ``app`` object's ``printColorProfiles`` and ``printerNames`` properties provide a list of available color spaces and printer names, respectively.

When printing a document, any comments and form fields of the document may or may not print, depending on the settings of the individual annotations. The ``print`` property of the Annotation and Field objects is used to set whether an individual annotation is printed.

.. raw:: html

   <a name="89379"></a>

Printing PDF documents
======================

It is possible to use JavaScript to specify whether a PDF document is sent to a printer or to a PostScript file. In either case, to print a PDF document, invoke the Doc object ``print`` method. Its parameters are described in the following table.

Print method parameters

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description

   * - bAnnotations
     - Determines whether to print annotations.

   * - bPrintAsImage
     - Determines whether to print each page as an image.

   * - bReverse
     - Determines whether to print in reverse page order.

   * - bShrinkToFit
     - Determines whether the page is shrunk to fit the imageable area of the printed page.

   * - bSilent
     - Suppresses the Cancel dialog box while the document is printed.

   * - bUI
     - Determines whether to present a user interface to the user.

   * - nEnd
     - The zero-based index of the last page.

   * - nStart
     - The zero-based index of the beginning page.

   * - printParams
     - The PrintParams object containing the printing settings.  -  The ``printParams`` parameter is available in Acrobat 6.0 or later. If this parameter is passed, it is passed as a literal object and any other parameters are ignored. 

In the first example below, pages 1-10 of the document are sent to the default printer, printed silently without user interaction, and are shrunk to fit the imageable area of the pages:

::

      this.print({
          bUI: false,
          bSilent: true,
          bShrinkToFit: true,
          nStart: 1,
          nEnd: 10
      });

The syntax above is used for versions of Acrobat previous to 6.0.

For Acrobat 6.0 or later, the recommend method is to pass a PrintParams object to the ``Doc.print`` method. All the subsequent examples use this method.

To print the document to a PostScript file, obtain the PrintParams object by invoking the Doc object ``getPrintParams`` method. Set its ``printerName`` property to the empty string, and set its ``fileName`` property to a string containing the device-independent path of the PostScript file to which it will be printed, as shown in the following example:

::

      var pp = this.getPrintParams();
      pp.printerName = "";
      // File name must be a safe path
      pp.fileName = "/C/temp/myPSDoc.ps";
      this.print(pp);

If you would like send the file to a particular printer, you can specify the printer by setting the ``printerName`` property of the PrintParams object, as shown in the following example:

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.automatic;
      pp.printerName = "Our office printer";
      this.print(pp);

.. raw:: html

   <a name="69102"></a>

Silent printing
---------------

There are various ways to print a document without requiring user interaction. One way is to use the Doc object ``print`` method and set the ``bSilent`` attribute to ``true``, as the following example shows.

::

      this.print({bUI: false, bSilent: true, bShrinkToFit: true});

Beginning with version 7.0, non-interactive printing can only be done in batch and console events. Using the PrintParams object, this is the script for printing silently:

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.silent;
      this.print(pp);

If you would like to print without requiring user interaction, and would like the progress monitor and Cancel dialog box to be removed when printing is complete, use the ``interactive`` property as shown in the following example:

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.automatic;

There are many options you can choose without requiring user interaction. For example, you can select the paper tray:

::

      var fv = pp.constants.flagValues;
      pp.flags = fv.setPageSize;

These coding approaches may be used in menus or buttons within a PDF file, may exist at the folder or batch levels, and are available through Acrobat or Acrobat Reader 6.0 or later. For more information, see the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__, as well as the Acrobat SDK samples ``SDKSilentPrint.js`` and ``SDKJSSnippet1.pdf``.

.. raw:: html

   <a name="26072"></a>

Printing comments and forms
---------------------------

The ``printContent`` property of the PrintParams object can be used to control whether document content, form fields, and comments will be printed. In the following example, only the form field contents will be printed (this is useful when sending data to preprinted forms):

::

      var pp = this.getPrintParams();
      pp.interactive = pp.constants.interactionLevel.silent;
      pp.printContent = pp.constants.printContent.formFieldsOnly;
      this.print(pp);

.. raw:: html

   <a name="13332"></a>

Booklet printing
----------------

Beginning with Acrobat 8.0, you can print booklets. To do so, begin by getting the PrintParams object:

::

      var pp = this.getPrintParams();

Then set the ``pageHandling`` property to booklet:

::

      pp.pageHandling = pp.constants.handling.booklet;

Use the ``booklet`` property of PrintParams to set the specialized printing parameters for booklet printing. ``pp.booklet`` is an object with properties:

* ``binding``: determines the paper binding direction and the page arrange order

* ``duplexMode``: determines the duplex printing mode

* ``subsetFrom``: determines the first booklet sheet to be printed. Independently from the general page range selection

* ``subsetTo``: determines the last booklet sheet to be printed

All the properties above take integers for their values.

The value for ``binding`` is set through the properties of the ``constants.bookletBindings`` object of PrintParams, as illustrated in the following example.

#. Set up booklet printing for right-side binding of text and print

::

      var pp = this.getPrintParams();
      pp.pageHandling = pp.constants.handling.booklet;
      pp.booklet.binding = pp.constants.bookletBindings.Right;
      this.print(pp);

The ``constants.bookBindings`` object has four properties: ``Left`` (the default), ``Right``, ``LeftTall`` and ``RightTall``.

The value for ``duplexMode`` is set through the properties of the ``constants.bookletDuplexModes`` object of PrintParams.

#. Print booklet in duplex mode, printing only the front pages

::

      pp.pageHandling = pp.constants.handling.booklet;
      pp.booklet.duplexMode = pp.constants.bookletDuplexModes.FrontSideOnly;
      this.print(pp);

``constants.bookletDuplexModes`` has three properties: ``BothSides``, ``FrontSideOnly`` and ``BackSideOnly``. For printers that print only on one side, use ``FrontSideOnly`` first then reinsert the printed pages and print again with ``BacksideOnly`` to complete a manual duplex printing.

.. raw:: html

   <a name="79684"></a>

Setting advanced print options
------------------------------

You can set the properties of the PrintParams object to specify advanced options including output, marks and bleeds, transparency flattening, PostScript options, and font options.

Specifying output settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can obtain a listing of printer color spaces available by invoking the ``app`` object ``printColorProfiles`` method. You can then assign one of these values to the PrintParams object ``colorProfile`` property.

In addition, you can set the ``flags`` property of the PrintParams object to specify advanced output settings, such as applying proof settings, shown in the example below:

::

      var pp = this.getPrintParams();
      var fv = pp.constants.flagValues;
      pp.flags = fv.applySoftProofSettings;
      this.print(pp);

Specifying marks and bleeds
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can specify the types of tile marks and where overlap occurs by setting the ``tileMark`` property of the PrintParams object. For example, in the following code, Western style tile marks are printed:

::

      var pp = this.getPrintPareams();
      pp.tileMark = pp.constants.tileMarks.west;
      this.print(pp);

Setting PostScript options
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can set the ``flags`` property of the PrintParams object to specify advanced PostScript settings, such as emitting undercolor removal/black generation, shown in the example below:

::

      var pp = this.getPrintParams();
      var fv = pp.constants.flagValues;
      pp.flags &= ~(fv.suppressBG  fv.suppressUCR);
      this.print(pp);

In addition, you can set the ``psLevel`` property of the PrintParams object to specify the level of PostScript emitted to PostScript printers. If the printer only supports PostScript level 1, set the PrintParams object's ``printAsImage`` property to ``true``.

Setting font options
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can control the font policy by setting the ``fontPolicy`` property of the PrintParams object. There are three values that may be used:

* ``everyPage``: emit needed fonts for every page, freeing fonts from the previous page. This is useful for printers having a small amount of memory.

* ``jobStart``: emit all fonts at the beginning of the print job, free them at the end of the print job. This is useful for printers having a large amount of memory.

* ``pageRange``: emit the fonts needed for a given range of pages, free them once those pages are printed. This can be used to optimize the balance between memory and speed constraints.

These values can be accessed through the ``constants.fontPolicies`` object of the PrintParams object. In the following example, all the fonts are emitted at the beginning of the print job, and freed once the job is finished:

::

      var pp = this.getPrintParams();
      pp.fontPolicy = pp.constants.fontPolicies.jobStart;
      this.print(pp);

You can also control whether Type 1 fonts will be converted to alternative font representations, by setting the ``useT1Conversion`` property of the PrintParams object. There are three values that can be used:

* ``auto``: let Acrobat decide whether to disable the conversion, based on its internal list of printers that have problems with these fonts.

* ``use``: allow conversion of Type 1 fonts.

* ``noUse``: do not allow conversion of Type 1 fonts.

These values are accessed through the ``constants.usages`` object of the PrintParams object. In the following example, conversion of Type 1 fonts is set to automatic:

::

      var pp = this.getPrintParams();
      pp.useT1Conversion = pp.constants.usages.auto;
      this.print(pp);

Finally, it is possible to send Far East fonts to the printer by setting the PrintParams object's ``downloadFarEastFonts`` property to ``true``.
