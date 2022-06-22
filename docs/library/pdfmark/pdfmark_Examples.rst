******************************************************
Examples
******************************************************
This section provides several examples illustrating various uses of the pdfmark operator.

Building an Output Intents array
================================

The following Windows and Mac OS examples demonstrate how to build an Output Intents array, which is useful in color processing. The hard-coded file and directory path should be applicable to most users.

#. Output Intents array in Windows

Define the profile object. The file is set up using a Windows path. You can also use a Mac OS or embed the profile data in the PostScript.*

::

    
     [ /NamespacePush pdfmark
       [ /_objdef {Profile} /type /stream /OBJ pdfmark
       [ {Profile} <</N 4>> /PUT pdfmark
       [ {Profile}
       (c:/Program Files/Common
       Files/Adobe/Color/Profiles/Recommended/EuroscaleCoated.icc)
       (r) file /PUT pdfmark

   % Build the OutputIntent objects
       [ /_objdef {OIDict} /type /dict /OBJ pdfmark
       [ /_objdef {OIArray} /type /array /OBJ pdfmark
       [ {OIDict} << /Type /OutputIntent /OutputCondition (Test) /S
       /GTS_PDFX /OutputConditionIdentifier (Custom) /DestOutputProfile
       {Profile} >> /PUT pdfmark
       [ {OIArray} 0 {OIDict} /PUT pdfmark
       % Store the OutputIntents array in the catalog.
   
    [ {Catalog}<< /OutputIntents {OIArray} >> /PUT pdfmark
     [ /NamespacePop pdfmark

#. Output Intents array in Mac OS

Define the profile object. The file is set up using a Mac OS path. You can also use a Windows or embed the profile data in the PostScript.

::

     [ /NamespacePush pdfmark
       [ /_objdef {Profile} /type /stream /OBJ pdfmark
       [ {Profile} <</N 4>> /PUT pdfmark
       [ {Profile}
       (/Library/Application Support/Adobe/Color/Profiles/JapanStandard.icc)
       (r) file /PUT pdfmark
       % Build the OutputIntent objects

       [ /_objdef {OIDict} /type /dict /OBJ pdfmark
       [ /_objdef {OIArray} /type /array /OBJ pdfmark
       [ {OIDict} << /Type /OutputIntent /OutputCondition (Test) /S
       /GTS_PDFX /OutputConditionIdentifier (Custom) /DestOutputProfile
       {Profile} >> /PUT pdfmark
       [ {OIArray} 0 {OIDict} /PUT pdfmark

       % Store the OutputIntents array in the catalog.
       [ {Catalog}<< /OutputIntents {OIArray} >> /PUT pdfmark
     [ /NamespacePop pdfmark

Named object examples
=====================

The following examples demonstrate how to work with named objects.

**Creating user-defined named objects**

::

   [    /_objdef {myarrayname} /type/ array /OBJ pdfmark
   [ /_objdef {mydictname} /type /dict /OBJ pdfmark
   [ /_objdef {mystreamname} /type /stream /OBJ pdfmark

#. Adding values to named objects

::

   % Insert 132 at location 0

   [   {myarrayname} 0 132 /PUT pdfmark
   [   {myarrayname} 100 /APPEND pdfmark
   [   {myarrayname} /name2 /APPEND pdfmark
   [   {myarrayname} 2 [200 300] /PUTINTERVAL pdfmark

   % At the end of the above examples, the array {myarrayname}
   % has the value [132 100 200 300 /name2]
   % Insert key–value pair into dictionary

   [   {mydictname} << /TheKey 366 >> /PUT pdfmark

   % Insert string into stream object

   [   {mystreamname} (any string) /PUT pdfmark

   % Use predefined named objects
   % Insert key–value pair into Catalog

   [   {Catalog} << /Answer 42 >> /PUT pdfmark

   % Insert key–value pair into Page 37's dictionary

   [   {Page37} << /SpecialKey (special string) >> /PUT pdfmark

   % Insert key–value pair into the current page's dictionary

   [   {ThisPage} << /NewKey (new string) >> /PUT pdfmark

#. Creating an annotation as a named object and adding content to it

::

   % Create text annotation

   [ /_objdef {MikesAnnot} /Contents (a simple text annot)
       /Rect [100 100 200 200] /Subtype /Text /ANN pdfmark

   % Add another key to this text annotation

   [   {MikesAnnot} << /AnotherKey (another string value) >> /PUT pdfmark

#. Using a named object as a value

This example creates a text annotation on the current page with extra keys in the annotation dictionary. These keys, ``MyPrivateAnnotArrayData`` and ``MyPrivateAnnotDictData`` , have values that are indirect references to the array and dictionary objects created by the previous pdfmark entries.

::

   [    /_objdef {myarray} /type /array /OBJ pdfmark
   [ /_objdef {mydict} /type /dict /OBJ pdfmark
   [ /MyPrivateAnnotArrayData {myarray}
       /MyPrivateAnnotDictData {mydict}
       /SubType /Text
       /Rect [500 500 550 550]
       /Contents (Here is a text annotation)
       /ANN pdfmark

#. Putting a file's contents into a text annotation

::

   /F (file's platform dependent path name) (r) file def
   [ /_objdef {mystream} /type /stream /OBJ pdfmark
   [   {mystream} F /PUT pdfmark
   [ /MyPrivateAnnotmyStreamData {mystream}
       /SubType /Text
       /Rect [500 500 550 550]
       /Contents (Here is a text annotation)
       /ANN pdfmark

#. Using OBJ to add an open action to a PDF File

::

   % Go to the fifth page of a document upon opening it.
   % First and third lines can be reused.
   % Second line specifies the GoTo action, which can be customized easily.

   [ /_objdef {MyAction} /type /dict /OBJ pdfmark
   [ {MyAction} << /S /GoTo /D [ {Page5} /FitH 770 ] >> /PUT pdfmark
   [ {Catalog} << /OpenAction {MyAction} >> /PUT pdfmark

#. Using OBJ to create a base URI
::

   % Create a dictionary object
   [ /_objdef {myURIdict} /type /dict /OBJ pdfmark
   % Add a "Base" key-value pair to the dictionary we just created
   [   {myURIdict} << /Base (http://www.adobe.com) >> /PUT pdfmark
   % Add our dictionary to the PDF file's Catalog dictionary
   [   {Catalog} << /URI {myURIdict} >> /PUT pdfmark

#. Using OBJ and PUT pdfmarks to create an alternate image

This example shows how to create alternate images. In this case, an image is created that has one Alternate. The Alternate is stored as a JPEG file on a web server, and is the default image used when printing.

::

   % Give the next image a name, so we can add an Alternates array to it later
   [ /_objdef {myImage} /NI pdfmark

   % Create the base image (just a 2x1 pixel grayscale image for this sample)

   <<
   /Width 2
   /Height 1
   /ImageMatrix [1 0 0 1 0 0]
   /ImageType 1
   /Decode [0 1]
   /BitsPerComponent 8
   /DataSource (1Z)
   >> image

   % Create a stream for the Alternate Image

   [/_objdef {myPrintingImageStream} /type /stream /OBJ pdfmark

   % Add the necessary key-value pairs to the stream dictionary to make it a
   % valid image XObject.
   % This particular image XObject uses the external streams capability of PDF
   % to point to an image stored on an IIP server, retrieving it as a JPEG file.
   % Since all stream data is stored on a web server, we don't explicitly add
   % data to the stream. As a result, the stream ends up with a length of zero,
   % which is OK for external streams.

   [   {myPrintingImageStream}
           <<
           /Type /XObject /Subtype /Image /Width 150 /Height 150
           /FFilter /DCTDecode /ColorSpace /DeviceRGB /BitsPerComponent 8
           /F << /FS /URL /F (http://www.mycompany.com/myfile.jpg) >>
           >>
       /PUT pdfmark

   % Add an Alternates array to the base image

       [   {myImage}
           <<
           /Alternates
               [ <</Image {myPrintingImageStream} /DefaultForPrinting true >> ]
           >>
       /PUT pdfmark

There are two possibilities for alternate images:

-  Alternate image data is outside the PDF file
-  Alternate image data is inside the PDF file

The above example shows only how to construct the first type. Note also that if the Alternate uses a different color space than the base image, it is possible that the PDF file may not contain the appropriate ``ProcSet`` references in the Resources dictionary to print the page to PostScript. For example, if the base image is grayscale and the Alternate is ``DeviceRGB`` , it is likely that the page's Resources contains only the ``ImageB`` ProcSet (for grayscale images) and not the ``ImageC`` ProcSet (for color images).

Forms examples
==============

The examples in this section show how to use the Forms pdfmark suite.

#. Define the AcroForm dictionary at the document Catalog

The AcroForm dictionary includes these required entries (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for more information):

-  ``Fields`` (the array from where all widgets in the form can be found)
-  ``DA`` (Default Appearance)
-  ``DR`` (Default Resources)
-  ``NeedAppearances`` , set to true to indicate that when the document is opened, all widgets are traversed to generate their display and to add them to the ``Fields`` array.

It also includes definitions of common objects that are used by the widgets such as fonts, encoding arrays, and Form *XObjects* for button faces.

::

   [    /_objdef {pdfDocEncoding} /type /dict /OBJ pdfmark
   [   {pdfDocEncoding}
           <<
           /Type /Encoding
           /Differences
               [
               24  /breve /caron /circumflex /dotaccent /hungarumlaut /ogonek /ring
                   /tilde
               39 /quotesingle
               96 /grave
               128 /bullet /dagger /daggerdbl /ellipsis /emdash /endash /florin
                   /fraction /guilsinglleft /guilsinglright /minus /perthousand
                   /quotedblbase /quotedblleft /quotedblright /quoteleft /quoteright
                   /quotesinglbase /trademark /fi /fl /Lslash /OE /Scaron /Ydieresis
                   /Zcaron /dotlessi /lslash /oe /scaron /zcaron
               164 /currency
               166 /brokenbar
               168 /dieresis /copyright /ordfeminine
               172 /logicalnot /.notdef /registered /macron /degree /plusminus
                   /twosuperior /threesuperior /acute /mu
               183 /periodcentered /cedilla /onesuperior /ordmasculine
               188 /onequarter /onehalf /threequarters
               192 /Agrave /Aacute /Acircumflex /Atilde /Adieresis /Aring /AE
                   /Ccedilla /Egrave /Eacute /Ecircumflex /Edieresis /Igrave /Iacute
                   /Icircumflex /Idieresis /Eth /Ntilde /Ograve /Oacute /Ocircumflex
                   /Otilde /Odieresis /multiply /Oslash /Ugrave /Uacute /Ucircumflex
                   /Udieresis /Yacute /Thorn /germandbls /agrave /aacute /acircumflex
                   /atilde /adieresis /aring /ae /ccedilla /egrave /eacute
                   /ecircumflex /edieresis /igrave /iacute /icircumflex /idieresis
                   /eth /ntilde /ograve /oacute /ocircumflex /otilde /odieresis
                   /divide /oslash /ugrave /uacute /ucircumflex /udieresis /yacute
                   /thorn /ydieresis
               ]
           >>
       /PUT pdfmark


   [ /_objdef {ZaDb} /type /dict /OBJ pdfmark
   [   {ZaDb}
           <<
           /Type /Font
           /Subtype /Type1
           /Name /ZaDb
           /BaseFont /ZapfDingbats
           >>
       /PUT pdfmark


   [ /_objdef {Helv} /type /dict /OBJ pdfmark
   [   {Helv}
           <<
           /Type /Font
           /Subtype /Type1
           /Name /Helv
           /BaseFont /Helvetica
           /Encoding {pdfDocEncoding}
           >>
       /PUT pdfmark


   [ /_objdef {aform} /type /dict /OBJ pdfmark


   % Define Fields array of Acroform dictionary. It will contain entries for
   % each of the widgets defined below.
   % NOTE: It is not necessary to explicitly assign the widget annotations
   % to the Fields array; Acrobat does it automatically when the file is opened.


   [ /_objdef {afields} /type /array /OBJ pdfmark


   [   {aform}
           <<
           /Fields {afields}
           /DR << /Font << /ZaDb {ZaDb} /Helv {Helv} >> >>
           /DA (/Helv 0 Tf 0 g)
           /NeedAppearances true
           >>
       /PUT pdfmark


   % Put Acroform entry in catalog dictionary

   [   {Catalog} << /AcroForm {aform} >> /PUT pdfmark

#. Define the Widget annotations, which are also field dictionaries for this form

This is the collection of all individual widget annotations. It is possible to have multiple instances of these sections, such as for defining a single widget on each instance.

::

   [    /Subtype /Widget
       /Rect [216 647 361 684]
       /F 4
       /T (SL Text)
       /FT /Tx
       /DA (/Helv 14 Tf 0 0 1 rg)
       /V (5)
       /AA <<
           /K << /S /JavaScript /JS (AFNumber_Keystroke(2, 0, 0, 0, "$", true);)>>
           /F << /S /JavaScript /JS (AFNumber_Format(2, 0, 0, 0, "$", true); >>
           >>
       /ANN pdfmark
       [ /Subtype /Widget
       /Rect [216 503 361 612]
       /F 4
       /T (Ping Result)
       /FT /Tx
       /DA (/Helv 0 Tf 0 0 1 rg)
       /Ff 4096
       /ANN pdfmark



   [ /Subtype /Widget
       /Rect [216 432 252 468]
       /F 4
       /T (Check Box)
       /FT /Btn
       /DA (/ZaDb 0 Tf 0 g)
       /AS /Off
       /MK << /CA (4)>>
       /AP << /N << /Oui /null >> >>
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [216 360 252 396]
       /F 4
       /T (Radio)
       /FT /Btn
       /DA (/ZaDb 0 Tf 0 g)
       /Ff 49152
       /AS /Off
       /MK << /CA (8)>>
       /AP << /N << /V1 /null >> >>
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [ 261 360 297 396 ]
       /F 4
       /T (Radio)
       /FT /Btn
       /DA (/ZaDb 0 Tf 0 g)
       /Ff 49152
       /AS /Off
       /MK << /CA (8)>>
       /AP << /N << /V2 /null >> >>
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [ 306 360 342 396 ]
       /F 4
       /T (Radio)
       /FT /Btn
       /DA (/ZaDb 0 Tf 0 g)
       /Ff 49152
       /AS /Off
       /MK << /CA (8)>>
       /AP << /N << /V3 /null >> >>
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [ 351 360 387 396 ]
       /F 4
       /T (Radio)
       /FT /Btn
       /DA (/ZaDb 0 Tf 0 g)
       /Ff 49152
       /AS /Off
       /MK << /CA (8)>>
       /AP << /N << /V4 /null >> >>
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [216 287 361 324]
       /F 4
       /T (Pop Down)
       /FT /Ch
       /Ff 131072
       /Opt [ [(1)(First)] [(2)(Second)] [(3)(Third)] [(4)(Fourth)] [(5)(Fifth)]]
       /DV (5)
       /V (5)
       /DA (/TiIt 18 Tf 0 0 1 rg)
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [216 215 361 252]
       /F 4
       /T (Combo)
       /FT /Ch
       /Ff 917504
       /Opt [ (Black)(Blue)(Green)(Pink)(Red)(White)]
       /DA (/TiRo 18 Tf 0 g )
       /V (Black)
       /DV (Black)
       /ANN pdfmark


   [ /Subtype /Widget
       /Rect [216 107 253 180]
       /F 4
       /T (ListBox)
       /FT /Ch
       /DA (/Helv 10 Tf 1 0 0 rg)
       /Opt [(1)(2)(3)(4)(5)]
       /DV (3)
       /V (3)
       /ANN pdfmark


   % Example of how the /MK dictionary is used.
   % Notice that the text will be shown upside-down (180 degree rotation).

   [ /Subtype /Widget
       /Rect [ 430 110 570 150 ]
       /F 4
       /T (Clear)
       /FT /Btn
       /H /P
       /DA (/HeBo 18 Tf 0 0 1 rg)
       /Ff 65536
       /MK <<
           /BC [ 1 0 0 ]
           /BG [ 0.75 0.45 0.75 ]
           /CA (Clear)
           /AC (Done!)
           /R 180
       >>
       /BS <<
           /W 3
           /S /I
           >>
       /A << /S /ResetForm >>
       /ANN pdfmark

Structure examples
==================

This section provides examples of various uses of the structure pdfmark suite. The first example shows an entire structure tree, consisting of one section containing two paragraphs. It illustrates both how to create the tree structure and how the structure is related to the page content of the PDF file. The second example shows the parts of the output PDF file that result from the PostScript language code. Other examples follow.

#. A simple structure

This example has one section with two paragraphs, all on one page.

::

       % On the first page:
       % Start a section with the unnamed Structure Tree as parent.
       % Push the Section element onto the implicit parent stack as
       % current implicit parent.

       [ /Subtype /Section /StPNE pdfmark

       % Start a paragraph with the Section as implicit parent.
       % Push the Paragraph element on top of the implicit parent
       % stack as the current implicit parent.

       [ /Subtype /P /StPNE pdfmark

       % Begin the marked content holding the text of the
       % first paragraph. It is implicitly added to the Paragraph
       % element.

       [ /StBMC pdfmark

       % [PostScript code for the contents of the first paragraph
       % goes here.]

       % End the marked content holding the text of the first
       % paragraph.

       [ /EMC pdfmark

       % Pop the Paragraph element off the implicit parent stack.
       % This exposes the Section element as implicit parent again.

       [ /StPop pdfmark

       % And now for the second paragraph:

       [ /Subtype /P /StPNE pdfmark


       [ /StBMC pdfmark

       % PostScript code for the contents of the second paragraph goes here.

       [ /EMC pdfmark
  
    % We're being tidy by popping both the second Paragraph
    |  % element and the Section element off the stack. We could have
    | % left everything hanging at the end of the document, or used

    % [ /StPopAll pdfmark instead.

::

     [ /StPop pdfmark
     [ /StPop pdfmark

#. PDF output resulting from code in previous example

This example is for illustration purposes only. The PDF code actually produced by Distiller would not include comments and would differ in other ways.

::

       % In the Catalog dictionary, under the key StructTreeRoot,
       % the following dictionary is entered as object 3 0:
       3 0 obj
       <</Type /StructTreeRoot
       % The Section element is the only child.
       /K [4 0 R]
       /ParentTree 100 0 R
       >> endobj

       % The number tree that locates structure parents of marked content.
       100 0 obj
       <</Nums [0 101 0 R]
       >>
       endobj

       % Structure parents for page 1.
       101 0 obj
       [5 0 R 6 0 R]
       endobj
       % End of parent tree objects.
       % As object 4 0, the following dictionary represents the
       % Section element:
       4 0 obj
       <</Type /StructElement
       /S /Section
       % Parent link refers back to the dictionary representing the
       % Structure Tree Root.
       /P 3 0 R
       % The Section element has two Paragraph elements as children.
       /K [5 0 R 6 0 R]
       >> endobj

       % Object 5 0, the first Paragraph element
       5 0 obj
       <</Type /StructElement
       /S /P
       /P 4 0 R
       % Page in whose content stream integer Marked Content ID's denote Kids
       /Pg 10 0 R
       /K [0]
       >> endobj

       % Object 6 0, the second Paragraph element
       6 0 obj
       <</Type /StructElement
       /S /P
       /P 4 0 R
       % Page in whose content stream integer Marked Content ID's denote Kids
       /Pg 10 0 R
       /K [1]
       >> endobj

       % Object 10 0, the Page object for the page on which both
       % paragraphs are marked. Only the relevant entries in the
       % dictionary are shown.
       % The Resources dictionary of the Contents stream of the page.
       <</StructParents 0
       >>
       % Inside the Contents stream of the page.
       /P <</MCID 0>> BDC
       % [Paragraph 1 content marking goes here.]
       EMC
       /P <</MCID 1>> BDC
       % [Paragraph 2 content marking goes here]
       EMC

#. A bookmark for a structural element

::

    [ 
   other /StPNE key-value pairs

           /Bookmark
               <<
               /Title (an element in my structure)
               /Open true
               >>
           /StPNE pdfmark

#. Interrupted structure

This example shows a paragraph that is graphically interrupted by a table. The originating application has chosen to write out the PostScript in graphical order, but logically the paragraph is one element and the table is another. To further complicate the situation, the document contains a special element that is a list of tables.

::

       % Start a ListOfTables element directly under the Structure
       % Tree Root.  Give it an object name for later reference.
       [ /_objdef {LOT} /Subtype /ListOfTables /StPNE pdfmark
     
       % Pop it off the stack so that the next element becomes a
       % child of the Structure Tree Root.
       [ /StPop pdfmark
     
       % Start the page with the section on it.
     
       % Start the section, also making it the default parent element.
       [ /Subtype /Section /StPNE pdfmark  
       % Start the paragraph.

       [ /Subtype /P /StPNE pdfmark
   
       % Here comes the portion of the paragraph before the table
       [ /StBMC pdfmark
     
       % [Code to write the first portion of the paragraph goes here]
      
       [ /EMC pdfmark
     
       % Now we're interrupted by a table that doesn't belong to the
       % paragraph.  Save the context as a conservative move because
       % we don't want to worry about what the table code does to the
       % implicit parent stack.
       [ /StoreName /S1 /StStore pdfmark
     
       % The table is an element, and it contains cells as child elements.
       [ /E {LOT} /StPush pdfmark
       [ /Subtype /Table /StPNE pdfmark
     
       % Code to draw the table and establish its logical substructure here
      
       % Pop the table and the List of Tables off the implicit parent stack.
       [ /StPop pdfmark
       [ /StPop pdfmark
     
       % Resume the paragraph.  It turns out that the table code was
       % tidy, but it's probably a good thing that we didn't count on
       % it. Get the implicit parent stack back into a known state.
       [ /StoreName /S1 /StRetrieve pdfmark
      
       [ /StBMC pdfmark
     
       % [Code to write the second portion of the paragraph
       [ /EMC pdfmark
     
       % Pop the Paragraph and Section elements and the Structure
       % Tree Root off the stack.
       [ /StPop pdfmark
       [ /StPop pdfmark
       [ /StPop pdfmark

#. Independence of logical and physical structure

This example shows that the logical structure and the physical nesting of marked content can have different tree structures. In this example there are two Structure Trees. One is the usual hierarchical structure of the document; the other is a list of funny words that occur within the document. The words occur as nested marked content within the marked content forming the contents of a paragraph, but the words become the content of elements in a separate branch of the structure tree from the Paragraph elements.

::

       % Set up a List element to hold the Funny Word List.
       [ /_objdef {FWL}    /Subtype /List /Title (Funny Words) /StPNE pdfmark

       [ /StPop p
      
       [/Subtype /Section /StPNE p
      
       [ /Subtype /P /StPNE p
     
       % Begin PostScript code for the par
       [ /StBMC p
       (John was thrilled to find some 
       % Here's an occurrence of a funny word comi
       % Start an element for the funny word l
       [ /E {FWL} /StPush p
       [ /Subtype /Word /StPNE p
       % Fill that element with the funny word from the
       % page content. This content is still in the
       % marked content within the paragraph el
       [ /StBMC pdfmark
       (puccoon) show
       [ /EMC pdfmark

       % Pop the Word element off the implicit parent stack.

       [ /StPop pdfmark

       % Resume paragraph content that's not in the funny word
       % (, not knowing that it could also be called )
       % ... another funny word ...

       [ /E {FWL} /StPush pdfmark
       [ /Subtype /Word /StPNE pdfmark
       [ /StBMC pdfmark
       (gromwell) show
       [ /EMC pdfmark
       [ /StPop pdfmark
       (.) show

       % Close off the marked content for the paragraph...

       [ /EMC pdfmark

       % ...and tidy up the stack

       [ /StPop pdfmark
       [ /StPop pdfmark
       [ /StPop pdfmark

#. Page break within logical structure

This example shows how to handle a logical structure spanning more than one page. It shows a logical paragraph spanning a page break.

::

    %%Page: 1 1
       % Begin a Paragraph element

       [ /Subtype /P /StPNE pdfmark

       [ /StBMC pdfmark

       % ... write the portion of the paragraph that's on Page 1 ...

       [ /EMC pdfmark
       showpage

       %%Page: 2 2

       % The Paragraph element is still on the top of the stack, so
       % we can just add some more content to it implicitly.

       [ /StBMC pdfmark

       % ... write the portion of the paragraph that's on Page 2 ...

       [ /EMC pdfmark

#. Logical structure out-of-order in physical structure

This example shows how to build a logical structure whose elements appear in a different physical order in the document from their logical order. The example is based on a magazine in which an opinion piece starting on the last inside page is continued on an earlier page in the printing order.

::

    %%Page 5 5
       [ /Subtype /Section /ID (ID string) /StPNE pdfmark

       % Within the Section element, this Paragraph element is actually
       % a later paragraph than the Paragraph element that appears
       % on the next page.
       [ /Subtype /P /StPNE pdfmark
                   % No /At key, so defaults to being inserted
                   % as last child of its parent.

       [ /StBMC pdfmark
       % ... draw the paragraph...
       [ /EMC pdfmark

       % ... the rest of the page ...
       showpage

       % Pop the Paragraph element off the stack
       [ /StPop pdfmark
       %%Page 6 6

       [ /Subtype /P /At 0 /StPNE pdfmark
       % Insert as first child of parent.

       [ /StBMC pdfmark
       % ... draw the paragraph...
       [ /EMC pdfmark

       % Pop the Paragraph and Section elements off the stack
       [ /StPop pdfmark
       [ /StPop pdfmark
