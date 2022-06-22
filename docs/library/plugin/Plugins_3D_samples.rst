******************************************************
Working with 3D Annotations
******************************************************

Three-dimensional annotations can be viewed in a PDF document by means of *3D annotations*. This chapter explains how to create 3D annotations and modify existing ones by using Cos objects. Before you read this chapter, it is strongly recommended that you become familiar with Cos objects. (See `Working with Cos Objects <Plugins_Cos.html#50618418_86959>`__.)

The underlying 3D object data in a 3D annotation must conform to the Adobe PRC Format Specification the Universal 3D (U3D) format developed by the 3D Industry Forum ( http://www.3dif.org ). Acrobat supports a subset of U3D, as described in the document *U3D Elements*, which can be found at the `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__.

Creating 3D annotations
=========================

Before you can add three-dimensional data to an annotation, you must create it. Annotations are represented by an annotation dictionary. A *dictionary* is a data structure with one or more entries, which are *key-value pairs:*

-  The key is a *name object*.
-  The value is some type of PDF object. The `PDF Reference <https://www.adobe.com/go/pdfreference>`__. describes all the PDF object types. If the value is a dictionary, that dictionary has its own key-value pairs. Therefore, dictionaries can be nested within other dictionaries (as you will see with the 3D structures). For details, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__.

General annotation dictionary entries are described in Table 8.15 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. Those specific to 3D annotations are described in Table 9.33.

The following code example creates a 3D annotation with corners (1, 9.5) and (7,4) using the ``PDPageAddNewAnnot`` method:

::

    ASFixedRect annotRect;
     annotRect.left   = Int16ToFixed(1*72); 
     annotRect.top    = Int16ToFixed(9.5*72);     
     annotRect.right  = Int16ToFixed(7.0*72);
     annotRect.bottom = Int16ToFixed(4*72); 
     
     PDAnnot newAnnot = PDPageAddNewAnnot(pdPage, -2, ASAtomFromString("3D"),
     &annotRect);

This method contains the following parameters:

-  The ``PDPage`` on which to place the annotation.
-  An ``ASInt32`` indicating where to add the annotation in the page's annotation array. The value -2 is normally used and means the annotation is added to the end of the page's annotation array. For information about this value, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.
-  The type of the annotation, which in this case is ``3D``. This sets the value of the annotation dictionary's ``Subtype`` entry. It is important to note that in PDF this is a *name object*, not a string. In the API, the ``ASAtom`` type is frequently used to represent names; the ``ASAtomFromString`` method converts a string to a name.
-  The rectangle in which the annotation appears on the page. This sets the value of the annotation dictionary's ``Rect`` entry.

After the annotation has been created, you must complete the other entries in the annotation dictionary. The ``F`` (flags) entry is set here:

::

    PDAnnotSetFlags(newAnnot, pdAnnotPrint | pdAnnotReadOnly);

The annotation's initial appearance (the ``AP`` entry) can be set. (See `Setting the annotation appearance <Plugins_3D_samples.html#50618421_59797>`__.)

Other entries are set using the ``EmbedDataIn3Dannot`` function (See `Adding 3D data to an annotation <Plugins_3D_samples.html#50618421_21047>`__.)

If you add PRC data to a 3D annotation, you must also ensure that the document's ``Catalog`` dictionary contains an Adobe ``Extension`` dictionary that specifies the PDF base version (``1.7`` ) and extension level (``1`` or greater) that added PRC data to 3D annotations. (See `PDF version extensions <Plugins_Documents.html#50618416_53916>`__.)

Adding 3D data to an annotation
===============================

The Acrobat and PDF Library API does not contain methods for working specifically with 3D annotations. To add entries to a 3D annotation dictionary, you must use Cos-level API methods. These methods enable you to create PDF objects of any type (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ) and to set their values.

The Cos API uses two primary object types:

-  ``CosDoc`` represents an entire PDF document.
-  ``CosObj`` represents all other PDF objects: simple types like numbers and string values as well as complex types such as dictionaries, arrays, and streams.

The API provides methods for creating and working with different object types. The creation methods are of the form ``CosNew`` Object, where Object is the object being created: for example, ``CosNewDict``, which creates a dictionary object, ``CosNewBoolean``, and ``CosNewStream``.

The first two parameters for the ``CosNew`` Object methods (with the exception of ``CosNewNull``, which takes no parameters) are these:

-  The ``CosDoc`` object that represents the current document.
-  A Boolean parameter that specifies whether the new object should be indirect. Indirect objects (see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ) are given object numbers and can be referred to from more than one place in a PDF file. Direct objects are specified only where they are used and cannot be referred to from anywhere else.

The remaining parameters vary depending on the object type:

-  For simple types, the third parameter specifies its value. For arrays and dictionaries, the third parameter specifies the number of elements.
-  For streams, there are several additional parameters. See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__ for details on each method.

The return value of these methods is the newly created object. In the API, this object is always a ``CosObj``. That is, even though you call ``CosNewDict`` to create a dictionary object, and you use methods like ``CosDictPut`` to work with dictionary objects, there is not a formal object type called ``CosDict``.

If necessary, you can determine the type of a ``CosObj`` by calling the ``CosObjGetType`` method, which returns a constant (``CosNull``, ``CosInteger``, ``CosFixed``, ``CosReal``, ``CosBoolean``, ``CosName``, ``CosString``, ``CosDict``, ``CosArray``, or ``CosStream`` ).

Most of the code described here involves setting the entries of dictionaries (``CosObjs`` of type ``CosDict`` ). Dictionaries contain a number of key-value pairs, where the key is a *name object* and the value is any type of ``CosObj``.

There are several common methods that can be used, which differ only in how the keys are specified. The ``CosDictPutKeyString`` method (available in Acrobat 7.0 or later) allows the key to be specified as a string and is the recommended method, as in the following example:

::

    CosDictPutKeyString(theDict,   // The dictionary
         "TheKey",                   // The key: a string
         theCosValue);               // The value: a CosObj

``CosDictPut`` requires the key to be specified as an ``ASAtom``. ``CosDictPutKey`` requires the key to be a name object (a ``CosObj`` of type ``CosName`` ).

Creating the 3D annotation dictionary entries
---------------------------------------------

To work with annotations at the Cos level, you must get the Cos object corresponding to the ``PDAnnot`` object. To perform this task, invoke the ``PDAnnotGetCotObj`` method and pass the ``PDAnnot`` object, as shown in the following example:

::

    CosObj cosAnnot = PDAnnotGetCosObj(theAnnot);

Next, get the ``CosDoc`` object corresponding to the document by invoking the ``CosObjGetDoc`` method and passing the ``CosObj`` object, as shown in the following example:

::

    CosDoc cosDoc = CosObjGetDoc(cosAnnot);

Two additional dictionary entries (which are not specific to 3D annotations)—the ``P`` (page) and ``Contents`` entries—can be set as follows:

::

    CosDictPutKeyString(cosAnnot, "P", PDPageGetCosObj(pdPage));
     CosDictPutKeyString(cosAnnot, "Contents", 
     CosNewString(cosDoc, false, "3D Model", strlen("3D Model")));

The following sections show how to set the dictionary entries that are specific to 3D annotations: (See Table 9.33 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__.)

*3DD* : A 3D stream specifying the 3D content (See `Specifying the 3D stream <Plugins_3D_samples.html#50618421_14693>`__.)

*3DV* : The initial view of the 3D content (See `Setting the default view <Plugins_3D_samples.html#50618421_69581>`__.)

*3DA* : The activation dictionary (See `Setting the activation dictionary <Plugins_3D_samples.html#50618421_16449>`__.)

Specifying the 3D stream
------------------------

The ``3DD`` entry of the annotation dictionary specifies a *stream* containing the PRC or U3D data. Streams are PDF objects that can be thought of as having two parts, the stream data and an associated dictionary:

-  Stream data is the PRC or U3D data that represents the 3D content.
-  The associated dictionary (sometimes called the *attributes dictionary* ) contains entries that specify information about the stream. Some entries are common to all stream dictionaries (see Table 3.4 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ). They include:

   -   *Length* (required): The length of the stream data
   -   *Filter* (optional): A compression filter that is applied to the data to reduce its size (there are also filters that do not compress data)

Other entries are unique to 3D streams (see Table 9.35 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ). They include:

-   *Type* (optional): Must be ``3D`` if present.
-   *Subtype* (required): For PRC data, set this value to ``PRC`` ; for U3D data, set this value to ``U3D``.
-   *OnInstantiate* (optional): A JavaScript script to be executed when the 3D stream is read. (See `Specifying JavaScript code <Plugins_3D_samples.html#50618421_12859>`__.)

Creating the stream object
~~~~~~~~~~~~~~~~~~~~~~~~~~

You must create a Cos stream that is based on the file containing the PRC or U3D data (this file was created with 3D authoring software) in order to create a 3D annotation. A data stream can be a buffer in memory, a file, or an arbitrary user-written procedure. A stream is represented by an ``ASStm`` object, which must be converted into a Cos stream.

To create a Cos stream that is based on the file that contains the PRC or U3D data, perform the following steps:

#. Create an ``ASPathName`` object that represents the file that contains the PRC or U3D data by invoking the ``ASPathFromPlatformPath`` method and passing a character pointer that specifies the location of the file that contains the PRC or U3D data. If you are working on the Mac OS platform, invoke the ``GetMacPath`` method and pass a character pointer that specifies the file location.
#. Declare an ``ASFile`` object.
#. Populate the ``ASFile`` object with the PRC or U3D data by invoking the ``ASFileSysOpenFile`` method and passing the following arguments:

   -  An ``ASFileSys`` object that represents the file system in which the PDF file is located. Invoke the ``ASGetDefaultFileSys`` method to get the default file system.
   -  An ``ASPathName`` object that represents the path in which the file that contains the PRC or U3D data is located (pass the ``ASPathName`` object created in step 1).
   -  An ``ASFileMode`` object that represents the mode in which to open the file. For example, specify ``ASFILE_READ`` to open the file in read mode.
   -  The address of an ``ASFile`` object. The ``ASFileSysOpenFile`` method populates this argument using the file that was opened (file information is obtained from the ``ASPathName`` object).

#. Create an ``ASStm`` object by invoking the ``ASFileStmRdOpen`` method and passing the following arguments:

   -  The ``ASFile`` object with the file that contains the PRC or U3D data.
   -  Length of data buffer, in bytes. If you specify ``0``, then the default buffer size (currently 4kB) is used.

#. Invoke the ``CosNewStream`` method to create a Cos stream containing the data that is located within the ``ASStm`` object. This Cos stream will become the value of the 3DD entry of the 3D annotation. Pass the following arguments to this method:

   -  A ``CosDoc`` object that specifies the PDF document in which the Cos stream is inserted.
   -  An ``ASBool`` object that specifies whether the Cos stream is an indirect object. Because all streams are indirect objects, this argument must be set to ``true``.
   -  An ``ASStm`` object that contains the stream data (pass the ``ASStm`` object created in step 4).
   -  A ``CosStreamStartAndCode`` object that specifies the byte offset from which data reading starts. You can pass ``0`` to ensure that data reading starts at the beginning of the stream.
   -  An ``ASBool`` object that specifies whether the data is encoded using filters specified in the stream dictionary before it is written to the Cos stream.
   -  A ``CosObj`` object that represents the stream dictionary. You can invoke the ``CosNewNull`` method.
   -  A ``CosObj`` object that represents the parameters that are used by the encoding filter if the source data is encoded before it is written to the file. If encoding parameters are not required, this value is ignored. For information about encoding filters, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__.
   -  A ``CosByteMax`` object that specifies the amount of data read from the source. If this value is ``-1``, data is read from the source until it reaches the end of the stream.

The ``CosNewStream`` method returns a ``CosObj`` object that represents the Cos stream. The following code example creates a Cos stream.

   //Create an ASPathName that specifies the location of the.U3D file

   //u3dFileName is a character pointer that specifies the path to this file

::

    ASPathName u3DPathName =  ASPathFromPlatformPath((void*) u3dFileName);
     

   //Create an ASFile object and populate it

::

    ASFile asFile = NULL;
     ASInt32 err = ASFileSysOpenFile(ASGetDefaultFileSys(), u3DPathName,     ASFILE_READ, &asFile);
     ASFileSysReleasePath (ASGetDefaultFileSys(), u3DPathName);
     
     if (asFile == NULL)
         AVAlertNote("Error opening 3D data file.");
   

   //Read data stream from the file

::

    ASStm fileStm = ASFileStmRdOpen(asFile, 0);
     if (fileStm == NULL)
         AVAlertNote("Empty 3D data stream.");
         

   //Create a new Cos stream and set it under 3DD key in the annot dictionary

::

    CosObj stm3D = CosNewStream(cosDoc, true, fileStm, 0, false, CosNewNull(),
     CosNewNull(), -1);

Adding the Cos stream to the annotation dictionary
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After you create a a ``CosObj`` object that represents the Cos stream, invoke the ``CosDictPutKeyString`` method to add the Cos stream as the value of the ``3DD`` entry of the annotation dictionary:

::

    CosDictPutKeyString(cosAnnot,   // The annotation dictionary
         "3DD",                       // The key
         stm3D);                      // The CosObj object used as the 
   value

Creating the attributes dictionary
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Complete the entries in the 3D stream dictionary. The ``CosStreamDict`` method obtains the Cos dictionary associated with the stream:

::

    CosObj attrObj = CosStreamDict(stm3D);

Next, entries can be added to the dictionary. The ``Type`` and ``Subtype`` entries both take name objects as values. Therefore, strings specified in the code must be explicitly converted to names:

   //Set the stream's dictionary

::

    CosDictPutKeyString(attrObj, "Subtype", CosNewName(cosDoc, false,
     ASAtomFromString("U3D")));
     CosDictPutKeyString(attrObj, "Type", CosNewNameFromString(cosDoc, false,
     "3D"));

Specifying JavaScript code
~~~~~~~~~~~~~~~~~~~~~~~~~~

You can create JavaScript that manipulates the 3D annotation. JavaScript is optional and if you do not specify it, then the 3D annotation is still inserted into the PDF document; however, it remains a static graphic. For information about creating JavaScript that manipulates 3D annotations, see the *JavaScript for Acrobat 3D Annotations API Reference*.

The following code example creates an ``ASFile`` object and populates it with the JavaScript file. The ``JsFileName`` variable is a character pointer that specifies the location of the JavaScript file.

   //Create a char pointer that specifies the location of the JavaScript file

::

    char*JsFileName = "C:3DJavaScript.js"
   

   //Declare an ASFile object that will reference the JavaScript file

::

    ASFile jsFile = NULL;
   

   //Create an ASPathName object based on the JavaScript file

::

    ASPathName JsPathName =  ASPathFromPlatformPath((void*) JsFileName);
   

   //Populate the ASFile object

::

    if(JsPathName)
         ASInt32 err1 = ASFileSysOpenFile(ASGetDefaultFileSys(), JsPathName,
         ASFILE_READ, &jsFile);

Next, the data from the file is read into a stream:

::

    ASStm JsFileStm = ASFileStmRdOpen(jsFile, 0);

In the following code, an entry is added to the stream dictionary in the process of creating the stream, rather than afterwards as in the previous code. First, the ``CosNewDict`` method is used to create a new dictionary:

::

    CosObj dictJsStm = CosNewDict(cosDoc, false, 1);

This method requires three parameters:

-  The document in which the dictionary is used.
-  A Boolean value that specifies whether the dictionary should be an indirect object. All stream dictionaries must be direct; hence the value of this parameter is ``false``.
-  A hint for the number of entries in the dictionary (however, dictionaries grow dynamically as needed).

Next, the value of the ``Filter`` entry is set to ``FlateDecode`` using the ``CosDictPutKeyString`` method. This means that the stream will be compressed using Flate (ZIP) compression.

::

    CosDictPutKeyString(dictJsStm, "Filter", 
         CosNewNameFromString(cosDoc, false, "FlateDecode"));

Next, the Cos stream is created, using the stream data and attributes dictionary already created:

::

    stm3Djscode = CosNewStream(cosDoc, true, 
         JsFileStm,    //The stream
         0, true, 
         dictJsStm,   // The stream dictionary
         CosNewNull(), -1);

Set it as the value of the ``OnInstantiate`` entry of the 3D stream dictionary. The following code example specifies a JavaScript script as the value of the ``OnInstantiate`` entry of the 3D stream dictionary.

::

    CosDictPutKeyString(attrObj, "OnInstantiate", stm3Djscode);

Then some cleanup is done:

::

    ASFileSysReleasePath (ASGetDefaultFileSys(), JsPathName);
     ASStmClose(JsFileStm);

Setting the default view
------------------------

A 3D *view* specifies parameters such as position, orientation, and projection style, which are applied to the *virtual camera* associated with the 3D annotation (see section 9.5.3 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ). The *default view* is the view that is chosen when the annotation is activated.

3D data typically contains a default initial view. This view is used by default if not otherwise specified. In addition, views can be specified by the entries in a view dictionary.

The ``VA`` entry in the 3D stream dictionary is an array of view dictionaries. One of the views can be chosen as the default by means of the ``3DV`` entry in the 3D annotation dictionary or the ``DV`` entry in a 3D stream dictionary.

The following code creates a view dictionary and specifies its entries. The code assumes the Cos objects ``cosAnnot`` for the annotation and ``cosDoc`` for the document have already been obtained. First, a view dictionary is created by invoking the ``CosNewDict`` method:

::

    CosObj cosView = CosNewDict (cosDoc, true, 8);

Next, the code sets the following entries: (See Table 9.39 in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. for more detailed information.)

*Type* (optional): If present, must be the name ``3DView``.

*XN* (required): The name of the view, a string that can be displayed in the user interface.

*IN* (optional): The internal name of the view, a string that can be used to refer to the view from other objects, such as in JavaScript code.

*C2W* (optional): A transformation matrix specifying the camera position. To use this, it is also necessary to set the value of the ``MS`` entry to ``M``.

*CO* (optional): A number indicating the distance to the center of orbit for this view.

The following code creates an array of type ``double`` and specifies values for views:

::

    char* externalViewName = "Default View";
     char* internalViewName = "Sample3dView";
     
     double gMatrixVals[12] = 
         {1.0, 0.0, 0.0, 0.0, 0.0000000000000000612303, -1.0, 
         0.0, 1.0, 0.0000000000000000612303, 82.9517, -883.324, 115.166};
     float gCOvalue = (float) 725.305;

Now the values of the dictionary entries are set:

::

    CosDictPutKeyString(cosView, "Type", 
         CosNewNameFromString(cosDoc, false,"3DView"));
     
     CosDictPutKeyString(cosView, "XN", CosNewString(cosDoc, false, 
         externalViewName, strlen(externalViewName))); 
     
     CosDictPutKeyString(cosView, "IN", CosNewString(cosDoc, false, 
         internalViewName, strlen(internalViewName))); 
     
     CosDictPutKeyString(cosView, "MS", 
         CosNewNameFromString(cosDoc, false, "M"));
   
     CosDictPutKeyString(cosView, "CO", CosNewFixed(cosDoc, false,
         FloatToASFixed(gCOvalue)));

Here the ``C2W`` matrix is populated with the appropriate values:

::

    CosObj matrixArray = CosNewArray(cosDoc, false, 12);
         for(int i=0; i<12; i++) 
             CosArrayPut(matrixArray, i, 
                 CosNewFloat(cosDoc, false, (float) gMatrixVals[i]));
     CosDictPutKeyString(cosView, "C2W", matrixArray);

Last, the dictionary is set as the value of the ``3DV`` key in the annotation dictionary:

::

    CosDictPutKeyString(cosAnnot, "3DV", cosView);

Setting the annotation appearance
---------------------------------

You may optionally provide a *poster* as the initial appearance of the annotation. The poster may be an image or other graphic content that is in a file or in memory. It must be converted to a PDF *form XObject* to be used as the annotation appearance (see section 4.9 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ).

The ``AP`` entry of the annotation dictionary specifies an *appearance dictionary.* This dictionary contains one or more *appearance streams* (see section 8.4.4 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ) that are PDF content streams (form XObjects) rendered inside the annotation rectangle.

For 3D annotations, the appearance stream is used in the following situations:

-  To provide an annotation appearance for PDF viewers that do not support 3D.
-  To provide an initial appearance for the annotation prior to activation. The settings in the activation dictionary determine whether this appearance is ever displayed.

There are several ways to get the poster. The function described below, ``GetFormXObjectFromFile``, illustrates one method. The appearance is generated from a separate PDF file containing an image or other content. You call this function as follows:

::

    CosObj formXObject = GetFormXObjectFromFile
         (gsPosterFilePath, //The external file
         pdDoc);

The function returns a Cos object, ``formXObject``, which is the form XObject to be used as the appearance.

::

    CosObj cosAnnot = PDAnnotGetCosObj(newAnnot);
     CosDoc cosDoc = CosObjGetDoc(cosAnnot);

Then you create the appearance dictionary:

::

    CosObj apprDict = CosNewDict(cosDoc, false, 1);

and set its ``N`` (normal) entry to the appearance stream obtained above.

::

    CosDictPutKeyString(apprDict, "N", formXObject);
     CosDictPutKeyString(cosAnnot, "AP", apprDict);

The following is the ``GetFormXObjectFromFile`` function:

::

    CosObj GetFormXObjectFromFile
         (char* pdfImageFilePath, //Path of image PDF file
         PDDoc TargetPdDoc)          // The current document
     {
     PDDoc posterPDFDoc = NULL;                  //Initialization code
     PDPage pdPageImage = NULL;
     ASPathName asPathName; 
     CosObj contentFormXObject = CosNewNull();
     CosObj formXObject = CosNewNull();

First, the PDF file containing the image is opened:

::

    if(strlen(pdfImageFilePath) > 0 ) {
         char sPathFlag[16] = "Cstring";
     #ifdef MAC_PLATFORM
     if (!strchr(pdfImageFilePath,(int)':'))
         strcpy (sPathFlag, "POSIXPath");
     #endif
     
     asPathName = ASFileSysCreatePathName (ASGetDefaultFileSys(),
         ASAtomFromString(sPathFlag), pdfImageFilePath, 0);

The content to be used is expected to be on the first page of the PDF file. The ``PDDocAcquirePage`` method returns a ``PDPage`` object for the first page.

::

    pdPageImage = PDDocAcquirePage(posterPDFDoc, 0);

The code then uses PDE-layer (PDFEdit) methods that work with the content streams on the PDF page. (See the *Overview* guide for more information on how these methods work.)

The ``PDPageAcquirePDEContent`` method returns a ``PDEContent`` object representing the page's contents. The first parameter is the ``PDPage`` and the second identifies the caller: for PDF Library, it is zero; for plugins, it should be the ``gExtensionID`` extension:

::

    PDEContent pdeContent = PDPageAcquirePDEContent (pdPageImage, 0);

The ``PDEContentGetAttrs`` method gets information about the content in a ``PDEContentAttrs`` structure:

::

    PDEContentAttrs pdeContentAttrs;
     PDEContentGetAttrs
         (pdeContent, &pdeContentAttrs, sizeof(pdeContentAttrs));
     
     CosObj contentResources = CosNewNull();
     CosDoc pdDocCos = PDDocGetCosDoc(posterPDFDoc);

The ``PDEContentToCosObj`` method converts the ``PDEContent`` to a form XObject Cos object.

::

    PDEContentToCosObj (pdeContent, 
         kPDEContentToForm,             // To Form XObject
         &pdeContentAttrs,              // PDEContentAttrsP
         sizeof(pdeContentAttrs),       // attrsSize,
         pdDocCos,                      // The CosDoc
         NULL,                          // PDEFilterArrayP
         &contentFormXObject,           // Resulting form Cos object
         &contentResources);            // Resulting resource Cos object 

The following are parameters to this method:

-  The ``PDEContent`` object.
-  A flag indicating what type of Cos object should be created; in this case, a form XObject.
-  The ``PDEContentAttrs`` structure containing information about the ``PDEContent``.
-  The size of the ``PDEContentAttrs`` structure.
-  The Cos document.
-  A pointer indicating which filters to use to encode the contents (in this case, null).
-  The resulting Cos object (in this case, the form XObject which is the variable ``contentFormXObject`` ).
-  The resulting Cos object representing the resources needed by the Cos object. These resources can include fonts and other items (see section 3.7.2 of the `PDF Reference <https://www.adobe.com/go/pdfreference>`__. ).

::

            
         if (!CosObjEqual(contentFormXObject, CosNewNull()) &&  
             !CosObjEqual(contentResources, CosNewNull())) {

The returned resources must be put into the form XObject's ``Resources`` dictionary:

::

    CosDictPutKeyString(contentFormXObject, "Resources", 
             contentResources);

The ``BBox`` entry of the form XObject is required and is set to the value of the page's media box:

::

        ASFixedRect boundingBox;  
         PDPageGetMediaBox(pdPageImage, &boundingBox);
         CosObj BBoxArray = CosNewArray(pdDocCos, 4, false);
         CosArrayPut(BBoxArray,0, CosNewInteger(pdDocCos, false,

       ASFixedRoundToInt16(boundingBox.left)));
         CosArrayPut(BBoxArray,1, CosNewInteger(pdDocCos, false,

       ASFixedRoundToInt16(boundingBox.bottom)));
         CosArrayPut(BBoxArray,2, CosNewInteger(pdDocCos, false,

       ASFixedRoundToInt16(boundingBox.right)));
         CosArrayPut(BBoxArray,3, CosNewInteger(pdDocCos, false,

       ASFixedRoundToInt16(boundingBox.top)));
         CosDictPutKeyString(contentFormXObject, "BBox", BBoxArray);
         // Set matrix key in form object 

The ``Matrix`` entry of the form XObject is set to the values obtained from the page by means of the ``PDPageGetDefaultMatrix`` method:

::

    ASFixedMatrix defaultMatrix;
     PDPageGetDefaultMatrix(pdPageImage, &defaultMatrix);
     CosObj MatrixArray = CosNewArray(pdDocCos, 6, false);
     CosArrayPut(MatrixArray,0, CosNewFixed(
         pdDocCos, false, defaultMatrix.a));
     CosArrayPut(MatrixArray,1, CosNewFixed
         (pdDocCos, false, defaultMatrix.b));
     CosArrayPut(MatrixArray,2, CosNewFixed
         (pdDocCos, false, defaultMatrix.c));
     CosArrayPut(MatrixArray,3, CosNewFixed
         (pdDocCos, false, defaultMatrix.d));
     CosArrayPut(MatrixArray,4, CosNewFixed
         (pdDocCos, false, defaultMatrix.h));
     CosArrayPut(MatrixArray,5, CosNewFixed
         (pdDocCos, false, defaultMatrix.v));
     CosDictPutKeyString(contentFormXObject, "Matrix", MatrixArray);
     }

Finally, the ``CosObjCopy`` method is used to copy the Cos object ``contentFormXObject`` into the current PDF document. The following are parameters are available:

-  The ``CosObj`` to copy.
-  The ``CosDoc`` for the document in which to copy it.
-  A Boolean value: tru ``e`` means that all indirectly referenced objects from the source should be copied to the destination.

::

        formXObject = CosObjCopy (contentFormXObject, 
             PDDocGetCosDoc(TargetPdDoc), true);  

And finally, there is some cleanup code:

::

    ASFileSysReleasePath (ASGetDefaultFileSys(), asPathName);
     PDPageRelease(pdPageImage); 
     return formXObject;
     }

Setting the activation dictionary
---------------------------------

The optional ``3DA`` entry of the 3D annotation specifies an *activation dictionary* whose entries indicate when the annotation should be activated and deactivated and the state of the 3D content at these times.

When an annotation is inactive, it displays its normal appearance. (See `Setting the annotation appearance <Plugins_3D_samples.html#50618421_59797>`__.) When it is activated, one of its views (specified by the ``3DV`` entry) is displayed.

First the dictionary is created and set as the ``3DA`` entry of the 3D annotation:

::

    CosObj activationDict = CosNewDict(CosObjGetDoc(cosAnnot), false, 1);
     CosDictPutKeyString (cosAnnot, "3DA", activationDict);

It is not necessary to set any entries whose default values are acceptable. Here the non-default entries are set.

The ``DIS`` entry of the activation dictionary specifies the state of the 3D content when it is deactivated. In this case, it is set to ``I``, meaning that it should be instantiated. (The default is ``U`` for uninstantiated.)

::

    CosDictPutKeyString (activationDict, "DIS", 
         CosNewNameFromString (cosDoc, false, "I"));

The code provides a variable to determine the value of the ``A`` entry. The default value is ``XA``, meaning that the annotation needs to be explicitly activated. ``PO`` means that the annotation should be activated as soon as the page containing the annotation is opened:

::

    // Optional activation choice
     if(gbShowDefaultViewWhenOpenPage == true)
         CosDictPutKeyString(activationDict, "A", 
             CosNewNameFromString (cosDoc, false, "PO"));
