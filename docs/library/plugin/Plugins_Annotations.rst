******************************************************
Creating Annotations
******************************************************

An annotation associates an object such as a note, sound, or movie with a location on a page of a PDF document, or provides a way to interact with the user by means of the mouse and keyboard.

The Acrobat core API provides methods for working with annotations in PDF documents. Annotations are represented by a ``PDAnnot`` typedef, which is the abstract superclass for all annotations.

Several annotation types exist, which are identified by their subtype. Each subtype can have additional properties that extend the basic ones. The subtype for text annotations (also called notes) is text. The subtype for link annotations is link. The Acrobat core API contains two built-in annotation typedefs ``PDTextAnnot`` and ``PDLinkAnnot``. A ``PDTextAnnot`` object corresponds to a text annotation and a ``PDLinkAnnot`` object corresponds to a link annotation.

You can use ``PDAnnot`` methods to get and set various annotation properties, such as color, date, title, location, and subtype. For example, you can invoke the ``PDAnnotSetColor`` method to set the color of an annotation.

.. note::

   This chapter does not discuss how to create 3D annotations. (See `Creating 3D Annotations <Plugins_3D_samples.html#50618421_43763>`__.)

Working with text annotations
=============================

The Acrobat API lets you create text annotations and retrieve and modify attributes of an existing text annotation. Acrobat displays text annotations as sticky notes.

Creating text annotations
-------------------------

You can create a text annotation by performing the following tasks:

#. Create a rectangle region that specifies the annotation's location. To create a rectangle region, create an ``ASFixedRect`` object.
#. Define the rectangle's borders by setting the ``ASFixedRect`` object's left, top, right, and bottom attributes.
#. Create a ``PDPage`` object that represents the page that will contain the new annotation by invoking the ``PDDocAcquirePage`` method. The first argument passed to this method is a ``PDDoc`` object that represents the PDF document and the second is an ``ASInt32`` object that represents the page number on which the annotation is applied. This method returns a ``PDPage`` object.
#. Create a ``PDAnnot`` object by invoking the ``PDPageCreateAnnot`` method and passing the following arguments:

   -  A ``PDPage`` object that represents the page that will contain the new annotation.
   -  An ``ASAtom`` object that represents the annotation's subtype. Because a text annotation is created, specify ``Text`` as the annotation's subtype. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.)
   -  The address of the ``ASFixedRect`` object.

5. Cast the ``PDAnnot`` object to a ``PDTextAnnot`` object by invoking the ``CastToPDTextAnnot`` method. This method requires a ``PDAnnot`` object and returns a ``PDTextAnnot`` object.
#. Open the text annotation by invoking the ``PDTextAnnotSetOpen`` method. Opening an annotation enables you to set its content. This method requires a ``PDTextAnnot`` object and an ``ASBool`` value that specifies ``true``.
#. Set the text of the annotation by invoking the ``PDTextAnnotSetContents`` method and passing the following arguments:

   -  A ``PDTextAnnot`` object that represents the annotation for which text is set.
   -  A character pointer that specifies the text to set.
   -  An ``ASInt32`` object that specifies the length of the character pointer.

8. Add the text annotation to the page by invoking the ``PDPageAddAnnot`` method and passing the following arguments:

   -  A ``PDPage`` object that represents the page that will contain the new annotation.
   -  An ``ASInt32`` object that specifies the index that controls where the annotation is added. The first annotation in the array has an index of zero. Passing a value of -2 adds the annotation to the end of the array.
   -  A ``PDTextAnnot`` object that represents the annotation.

The following code example adds a text annotation to a PDF document page. In this code example, a ``PDDoc`` object named ``myPDDoc`` exists. (See `Creating a PDDoc object <Plugins_Documents.html#50618416_97094>`__.)


::

   PDPage page = NULL;
   PDAnnot annot,textannot;
   char* ptr = "This is initial text";

   //Create an ASFixed object and define its borders
   ASFixedRect fr;
   fr.left = ASInt32ToFixed(36);
   fr.top = ASInt32ToFixed(792-36);
   fr.right = ASInt32ToFixed(136);
   fr.bottom = ASInt32ToFixed(792-136);

   //Create a PDPage object
   page = PDDocAcquirePage(myPDDoc, 0);

   //Create a PDAnnot object
   annot = PDPageCreateAnnot (page, ASAtomFromString("Text"),&fr);

   //Cast the PDAnnot object to a PDTextAnnot object
   textannot = CastToPDTextAnnot(annot);  

   //Open the annotation, set the text, and add it to a page
   PDTextAnnotSetOpen (textannot, true);
   PDTextAnnotSetContents (textannot, ptr, strlen (ptr));
   PDPageAddAnnot(page,-2, textannot);

Retrieving existing annotations
-------------------------------

You can use the Acrobat core API to retrieve existing annotations located within a PDF document by performing the following tasks:

#. Create a ``PDDoc`` object that represents the PDF document that contains annotations. (See `Creating a PDDoc object <Plugins_Documents.html#50618416_97094>`__.)
#. Search for existing annotations by iterating through the PDF document page by page. One way to perform this task is to create a for loop structure and invoke the ``PDDocGetNumPages`` method. This method requires a ``PDDoc`` object as an argument and returns the number of pages within the document.
#. For each page within the PDF document, obtain a ``PDPage`` object by invoking the ``PDDocAcquirePage`` method and passing the following arguments:

   -  A ``PDDoc`` object that represents the PDF document that contains the page.
   -  An ``ASInt32`` object that represents the page number.

4. After you obtain a ``PDPage`` object, get the number of annotations located on the page by invoking the ``PDPageGetNumAnnots`` method. This method requires a ``PDPage`` object as an argument and returns an ``ASInt32`` object representing the number of annotations located on the page.
#. For each annotation on a page, invoke the ``PDPageGetAnnot`` method. This method requires a ``PDPage`` object and an ``ASInt32`` object that represents the index of the annotation. This method returns a ``PDAnnot`` object.

The following code example retrieves existing annotations located within a PDF document. After an annotation is retrieved, information about the annotation is displayed within an alert box. Information about the annotation is retrieved by invoking the ``PDAnnotGetSubtype`` method. This method returns an ``ASAtom`` object representing the annotation's subtype. For example, if the annotation is a stamp, then an ``ASAtom`` object storing the value ``Stamp`` is returned. You can get the string value from an ``ASAtom`` object by invoking the ``ASAtomGetString`` method and passing the ``ASAtom`` object.


::

   PDPage page;
   ASInt32 i,i2;
   PDAnnot annot;
   char* ptr;
   char buf[200];
   ASAtom atom; 

   //Iterate through the PDF document page by page
   for (i = 0; i < PDDocGetNumPages(myPDDoc); i ++){

   //Get each page within the document
    page = PDDocAcquirePage(myPDDoc, i);
         

   //Get each annotation on the page
    for (i2 = 0; i2 < PDPageGetNumAnnots(page); i2++) {
            //Get a specific annotation
         annot = PDPageGetAnnot(page,i2);
         if (PDAnnotIsValid(annot))      {
   

   //Display subtype information about the annotation
            atom = PDAnnotGetSubtype(annot);
             

   //Cast the ASAtom object to a character pointer
            ptr = (char*) ASAtomGetString(atom);
             sprintf(buf, "The annotation's subtype is %s", ptr);
             AVAlertNote (buf);
         }   
     }
   }

.. note::

   In the previous code example, assume a ``PDDoc`` object named ``myPDDoc`` exists. (See `Creating a PDDoc object <Plugins_Documents.html#50618416_97094>`__.)

Modifying text annotations
--------------------------

You can modify an annotation after you retrieve it. For example, you can retrieve an existing text annotation and modify its text. For information about retrieving an annotation, see `Retrieving existing annotations <Plugins_Annotations.html#50618420_93262>`__.

Before you modify an annotation, determine whether the annotation is the correct subtype. That is, before modifying a text annotation, ensure that the annotation is a ``Text`` annotation. You can determine whether an annotation is the correct subtype by invoking the ``PDAnnotGetSubtype`` method. This method requires a ``PDAnnot`` object and returns an ``ASAtom`` object that specifies the annotation's subtype.

When modifying a text annotation, it is recommended that you check its contents. For example, you can retrieve all text annotations in a PDF document, retrieve the annotation's text, and modify annotations that contain specific text. To retrieve the text of an annotation, invoke the ``PDTextAnnotGetContents`` method and pass the following arguments:

-  A ``PDTextAnnot`` object that contains text to retrieve.
-  A character pointer that is populated with the annotation's text.
-  An ``ASInt32`` object that represents the size of the character pointer.

The following code example iterates through all annotations located in a PDF document. Each valid annotation is checked to determine whether it is a ``Text`` annotation. This task is performed by invoking the ``PDAnnotGetSubtype`` method. If the annotations is a ``Text`` annotation, then the annotation's text is retrieved by invoking the ``PDTextAnnotGetContents`` method.

Because the size of the annotation's text is unknown, the ``PDTextAnnotGetContents`` is invoked twice. The first time it is invoked, ``NULL`` is passed as the buffer address (second argument) and ``0`` is specified as the buffer size (third argument). The text length is returned to an ``ASInt32`` object named ``bufSize``. The ``ASmalloc`` method is invoked which allocates ``bufSize`` bytes to the character pointer.

The second time ``PDTextAnnotGetContents`` is invoked, the allocated character pointer is passed as well as the ``ASInt32`` object named ``bufSize``. The character pointer is populated with the annotation's text.

Next the ``strcmp`` method is invoked to compare the annotation's text with a specific string value. If the annotation's text matches the string value, then the ``PDTextAnnotSetContents`` method is invoked, which replaces the annotation's text with new text.


::

   PDPage page;
   ASInt32 i,i2;
   PDAnnot annot;
   char setbuf[200];
   ASAtom atom;
   

   //Iterate through the PDF document page by page
   for (i = 0; i < PDDocGetNumPages(myPDDoc); i ++){

   //Get each page within the document
    page = PDDocAcquirePage(myPDDoc, i);
         

   //Get each annotation on the page
    for (i2 = 0; i2 < PDPageGetNumAnnots(page); i2++) {

   //Get a specific annotation
        annot = PDPageGetAnnot(page,i2);
         if (PDAnnotIsValid(annot)){

   //Determine if the annotation is a Text annotation
            if (PDAnnotGetSubtype(annot) == ASAtomFromString("Text")) {

   //Create a character pointer to store the annotation's text
                char * annBuf; 
                 ASInt32 bufSize = PDTextAnnotGetContents(annot, NULL, 0) +1;
   

   //Allocate the size of bufSize to the character pointer
                annBuf = (char*)ASmalloc((os_size_t)bufSize);
   

   //Populate annBuf with the annotation's text
                PDTextAnnotGetContents(annot, annBuf, bufSize);
   

   //Compare the contents of annBuf with a string
                if (strcmp(annBuf,"This is initial text") == 0){

   //Modify the annotation's text
                    sprintf (setbuf, "This is the new text for the annotation.");
                     PDTextAnnotSetOpen (annot, true);
                     PDTextAnnotSetContents (annot, setbuf, strlen(setbuf));
                 }
          }
     }
   }

.. note::

   In the previous code example, assume a ``PDDoc`` object named ``myPDDoc`` exists. (See `Creating a PDDoc object <Plugins_Documents.html#50618416_97094>`__.)

Working with redaction annotations
==================================

The Acrobat API lets you create redaction annotations and access and modify the attributes in an existing redaction annotation. It also lets you apply an existing redaction annotation, which permanently removes the redacted material from the PDF document.

A redaction annotation identifies content to be removed from the document. The intent of redaction annotations is to enable the following process:

#. Create redaction annotations that identify the content to be removed from the document. The redaction annotation specifies a rectangle that covers the content to be removed and specifies the appearance of the rectangle and associated information.
#. Apply redaction annotations, which remove the content in the area specified by a set of redaction annotations. In the removed content's place, some marking appears to indicate that the area was redacted. Also, the redaction annotations are removed from the PDF document.

A single content removal operation can remove the content specified by multiple redaction annotations.

Creating a redaction annotation
-------------------------------

To create a redaction annotation that identifies the content to be removed from the document and the appearance of the redaction annotation, perform the following tasks:

#. Create a ``PDRedactParamsRec`` structure and populate it with values that describe characteristics of the redaction annotation, such as the page number on which the redaction is to be applied and the regions on the page being redacted.
#. Apply the redaction annotation to the document, by invoking the ``PDDocCreateRedaction`` method.

The ``PDDocCreateRedaction`` function automatically sets common annotation properties, such as the annotation rectangle (``Rect`` ) and the annotations unique name (``NM`` ). Further changes to the annotation are unnecessary. However, if you want to set values for annotation properties not set by the ``PDDocCreateRedaction`` method, convert the ``PDAnnot`` object returned from that method into a Cos object and set its dictionary values. (See `Working with Cos Objects <Plugins_Cos.html#50618418_86959>`__ and `Creating the attributes dictionary <Plugins_3D_samples.html#50618421_26840>`__.)

Modifying an existing redaction annotation
------------------------------------------

To modify the attributes of an existing redaction annotation, perform the following tasks:

#. Obtain a pointer to the redaction annotation. (See `Retrieving existing annotations <Plugins_Annotations.html#50618420_93262>`__.) Ensure that the pointer references an annotation with the ``Subtype`` value ``Redact``.
#. Get the redaction annotation's properties, by invoking the PDRedactionGetProps function. The first argument is the pointer to the redaction annotation obtained in Step `Obtain a pointer to the redaction annotation. (See Retrieving existing annotations.) Ensure that the pointer references an annotation with the ``Subtype`` value ``Redact``. <Plugins_Annotations.html#50618420_94111>`__ and the second argument is a pointer to the ``PDRedactParamsRec`` structure.
#. Modify the members of the ``PDRedactParamsRec`` structure supplied by the PDRedactionGetProps function. The first argument is the pointer to the redaction annotation obtained in Step `Obtain a pointer to the redaction annotation. (See Retrieving existing annotations.) Ensure that the pointer references an annotation with the ``Subtype`` value ``Redact``. <Plugins_Annotations.html#50618420_94111>`__, and the second argument is a pointer to the ``PDRedactParamsRec`` structure.
#. Set the redaction annotation's properties by invoking the ``PDRedactionSetProps`` function.

Applying redaction annotations (removing redacted content)
----------------------------------------------------------

To apply previously created redaction annotations, perform the following tasks:

#. Create a PDApplyRedactionParamsRec structure that specifies the redaction annotations to apply. The structure also lets you provide callback functions that Acrobat invokes as it applies the redaction annotations.
#. Apply the redaction annotations by invoking the ``PDDocApplyRedactions`` function. This function name is overloaded with two forms. The simpler form specifies a first argument that is the pointer to the document, and the second argument that is the structure created in Step `Create a PDApplyRedactionParamsRec structure that specifies the redaction annotations to apply. The structure also lets you provide callback functions that Acrobat invokes as it applies the redaction annotations. <Plugins_Annotations.html#50618420_30308>`__. The more complex forms let you specify progress callbacks.
