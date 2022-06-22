.. raw:: html

   <a name="38527"></a>

*********************************
PDFMark Reference
*********************************

The Adobe Acrobat Distiller application is a PostScript language interpreter that converts PostScript language files into Adobe PDF files. Because PDF has features (such as annotations, bookmarks, articles, and forms) that are not expressible using the standard PostScript operators, some PostScript language extension is necessary to describe features that are present in PDF but not in standard PostScript.

To satisfy this need, Distiller supports the pdfmark operator, which is not supported by standard PostScript interpreters. The use of pdfmark allows an independent software vendor (ISV) already using the PostScript language to express, in PostScript syntax, idioms that are converted by Distiller to PDF without having to write PDF files directly.