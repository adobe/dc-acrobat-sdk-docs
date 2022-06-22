******************************************************
Creating and Modifying PDF Documents
******************************************************

This chapter provides a detailed overview of how to apply JavaScript in order to dynamically create PDF files, modify them, and convert PDF files to XML format.


Creating and modifying PDF files
==========================================

The Acrobat extensions to JavaScript provide support for dynamic PDF file creation and content generation. This means that it is possible to dynamically create a new PDF file and modify its contents in an automated fashion. This can help make a document responsive to user input and can enhance the workflow.

To create a new PDF file, invoke the ``newDoc`` method of the ``app`` object, as shown in the example below:

::

      var myDoc = app.newDoc();

This statement creates a blank PDF document and is used primarily for testing purposes.

Once this statement has been executed from the console, you can manipulate the page by invoking methods contained within the Doc object, as indicated in the following table. Details of these methods are found in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__.

JavaScript for manipulating a PDF document







.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Content
     - Object
     - Methods

   * - page
     - Doc
     - newPage, insertPages, replacePage

   * - page
     - template
     - spawn

   * - annot
     - Doc
     - addAnnot

   * - field
     - Doc
     - addField

   * - icon
     - Doc
     - addIcon

   * - link
     - Doc
     - addLink

   * - document-level| JavaScript
     - Doc
     - addScript

   * - thumbnails
     - Doc
     - addThumbnails

   * - bookmark
     - Doc ``.bookmarkRoot`` 
     - createChild, insertChild

   * - web link
     - Doc
     - addWebLinks

   * - template
     - Doc
     - createTemplate

The ``Doc.newDoc()`` method cannot write text content to the newly created document. To do that, you need to use the ``Report`` object.

Creating a document with content
-----------------------------------------------

The following example creates a PDF document, sets the font size, sets the color to blue, and writes a standard string to the document using the ``writeText`` method of the Report object. Finally, it opens the document in the viewer. See the *JavaScript for Acrobat API Reference* or details of this object, its properties and methods and for additional examples.

::

      var rep = new Report();
      rep.size = 1.2;
      rep.color = color.blue;
      rep.writeText("Hello World!");
      rep.open("My Report");

The Report object has many useful applications. With it, for example, you can create a document that reports back a list of all form fields in the document, along with their types and values; another application is to summarize all comments in a document. the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ has an example of the latter application in the ``Report`` object section.

.. raw:: html

   <a name="51553"></a>

Combining PDF documents
-----------------------

You can customize and automate the process of combining PDF documents.

If you would like to combine multiple PDF files into a single PDF document, you can do so through a series of calls to the Doc object's ``insertPages`` method.

#. Creating a new document from two other documents

::

      // Create a new PDF document:
      var newDoc = app.newDoc();
      
      // Insert doc1.pdf:
      newDoc.insertPages({
          nPage: -1,
          cPath: "/c/temp/doc1.pdf",
      });
      
      // Insert doc2.pdf:
      newDoc.insertPages({
          nPage: newDoc.numPages-1,
          cPath: "/c/temp/doc2.pdf",
      });
      
      // Save the new document:
      newDoc.saveAs({
          cPath: "/c/temp/myNewDoc.pdf";
      });
      
      // Close the new document without notifying the user:
      newDoc.closeDoc(true);

.. raw:: html

   <a name="57285"></a>

Combining files
------------------------------

It is possible to combine several PDF files using the ``Doc.insertPages()`` method.

Combining several PDF files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example, a document is opened with an absolute path reference, then other PDF files in the same folder are appended to the end of the document. For convenience, the files that are appended are placed in an array for easy execution and generalization.

::

   var doc = app.openDoc({
       cPath: "/C/temp/doc1.pdf"
   })
   aFiles = new Array("doc2.pdf","doc3.pdf");
   for ( var i=0; i < aFiles.length; i++) {
       doc.insertPages ({
       nPage: doc.numPages-1,
       cPath: aFiles[i],
       nStart: 0
       });
   }

Another problem is to combine several files of possibly different file types. In recent versions of Acrobat, the notion of a *binder* as introduced. There is a nice UI for combining files of different formats. How do you do it programmatically?

Combining files of different formats
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example, an initial PDF file is opened, and all other files are appended to it.

::

   doc = app.openDoc({ cPath: "/C/temp/doc1.pdf" })
   // List of files of different extensions
   aFiles = new Array( "doc2.eps", "doc3.jpg", "doc4.pdf");
   
   for ( var i=0; i < aFiles.length; i++) {
      // Open and convert the document
      newDoc = app.openDoc({
          oDoc: doc,
          cPath: aFiles[i],
          bUseConv: true
      })
      // Save the new PDF file to a temp folder
      newDoc.saveAs({ cPath: "/c/temp/tmpDoc.pdf" });
      // Close it without notice
      newDoc.closeDoc(true);
      // Now insert that PDF file just saved to the end of the first document
      doc.insertPages ({
          nPage: doc.numPages-1,
          cPath: "/c/temp/tmpDoc.pdf",
          nStart: 0
      });   
   }

Extracting files
------------------------------

You can also programmatically extract pages and save them to a folder.

Suppose the current document consists of a sequence of invoices, each of which occupies one page. The following code creates separate PDF files, one for each invoice:

::

      var filename = "invoice";
      for (var i = 0; i < this.numPages; i++)
          this.extractPages({
              nStart: i,
              cPath : filename + i + ".pdf"
          });

.. raw:: html

   <a name="39711"></a>

Creating file attachments
-------------------------

Another way you can "combine files" is by attaching one or more files to your PDF document. This is useful for packaging a collection of documents and send them together by emailing the PDF file. This section describes the basic object, properties and methods of attaching and manipulating attachments.

These are the objects, properties and methods relevant to file attachments.

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Name
     - Description

   * - Doc.createDataObject()
     - Creates a file attachment.

   * - Doc.dataObjects
     - Returns an array of ``Data`` objects representing all files attached to the document.

   * - Doc.exportDataObject()
     - Saves the file attachment to the local file system

   * - Doc.getDataObject()
     - Acquires the ``Data`` object of a particular attachment.

   * - Doc.importDataObject()
     - Attaches a file to the document.

   * - Doc.removeDataObject()
     - Removes a file attachment from the document.

   * - Doc.openDataObject()
     - Returns the Doc object for an attached PDF file.

   * - Doc.getDataObjectContents()
     - Allows access to the contents of the file attachment associated with a ``Data`` object.

   * - Doc.setDataObjectContents()
     - Rights to the file attachment.

   * - util.streamFromString()
     - Converts a stream from a string

   * - util.stringFromStream()
     - Converts a string from a stream.

Saving form data to and reading form data from an attachment
-----------------------------------------------------------------------

This example takes the response given in a text field of this document and appends it to an attached document. (Perhaps this document is circulating by email, and the user can add in their comments through a multiline text field.) This example uses four of the methods listed above.

::

   var v = this.getField("myTextField").value;
   // Get the contents of the file attachment with the name "MyNotes.txt"
   var oFile = this.getDataObjectContents("MyNotes.txt");
   // Convert the returned stream to a string
   var cFile = util.stringFromStream(oFile, "utf-8");
   // Append new data at the end of the string
   cFile += "rn" + v;
   // Convert back to a stream
   oFile = util.streamFromString( cFile, "utf-8");
   // Overwrite the old attachment
   this.setDataObjectContents("MyNotes.txt", oFile);
   
   // Read the contents of the file attachment to a multiline text field
   var oFile = this.getDataObjectContents("MyNotes.txt");
   var cFile = util.stringFromStream(oFile, "utf-8");
   this.getField("myTextField").value = cFile;

Beginning with Acrobat 8, the JavaScript interpreter includes E4X, the ECMA-357 Standard that provides native support of XML in JavaScript. See the document *ECMAScript for XML (E4X) Specification* or the complete specification of E4X. The next example illustrates the use of E4X and file attachments.

Accessing an XML attachment using E4X
---------------------------------------------------

The following script describes a simple database system. The database is an XML document attached to the PDF file. The user enters the employee ID into a text field, the JavaScript accesses the attachment, finds the employee's record and displays the contents of the retrieved record in form fields.

We have a PDF file, ``employee.pdf``, with three form fields, whose names are ``employee.id``, ``employee.name.first`` and ``employee.name.last``. Attached to the PDF file is an XML document created by the following script:

::

   // Some E4X code to create a database of info
   x = <employees/>;
   function popXML(x,id,fname,lname)
   {
       y = <a/>;
       y.employee.@id = id;
       y.employee.name.first = fname;
       y.employee.name.last = lname;
       x.employee += y.employee;
   }
   popXML(x,"334234", "John", "Public");
   popXML(x,"324234", "Jane", "Doe");
   popXML(x,"452342", "Davey", "Jones");
   popXML(x,"634583", "Tom", "Jefferson");

Copy and paste this code into the console and execute it. You'll see the XML document as the output of this script. The output was copied and pasted into a document named ``employee.xml``, and saved to the same folder as ``employee.pdf``.

You can attach ``employee.xml`` using the UI, but the script for doing so is as follows:

::

   var thisPath = this.path.replace(/.pdf$/, ".xml");
   try { this.importDataObject("employees", thisPath); }
       catch(e) { console.println(e) };

Of the three form fields in the document ``employee.pdf``, only ``employee.id`` has any script. The following is a custom keystroke script:

::

   if (event.willCommit) {
      try {   
      // Get the data contents of the "employees" attachment
      var oDB = this.getDataObjectContents("employees");
      // Convert to a string
      var cDB = util.stringFromStream(oDB);
      // Use the eval method to evaluate the string, you get an XML variable
      var employees = eval(cDB);
          // Retrieve record with the id input in the employee.id field
          var record = employees.employee.(@id == event.value);
          // If the record is an empty string, or there was nothing entered...
          if ( event.value != "" && record.toString() == "" ) {
              app.alert("Record not found");
              event.rc = false;
          }
          // Populate the two other fields
          this.getField("employee.name.first").value = record.name.first;
          this.getField("employee.name.last").value = record.name.last;
          } catch(e) {
              app.alert("The DB is not attached to this document!");
              event.rc = false;        
          }
   }

.. raw:: html

   <a name="89656"></a>

Cropping and rotating pages
---------------------------

In this section we discuss the JavaScript API for cropping and rotating a page.

Cropping pages
^^^^^^^^^^^^^^^^^^^^^^^^^

The Doc object provides methods for setting and retrieving the page layout dimensions. These are the ``setPageBoxes`` and ``getPageBox`` methods. There are five types of boxes available:

-  Art
-  Bleed
-  Crop
-  Media
-  Trim

See the `PDF Reference <https://www.adobe.com/go/pdfreference>`_ for a discussion of these types of boxes.

The ``setPageBoxes`` method accepts the following parameters:

* ``cBox``: the type of box

* ``nStart``: the zero-based index of the beginning page

* ``nEnd``: the zero-based index of the last page

* ``rBox``: the rectangle in rotated user space

For example, the following code crops pages 2-5 of the document to a 400 by 500 pixel area:

::

      this.setPageBoxes({
          cBox: "Crop",
          nStart: 2,
          nEnd: 5,
          rBox: [100,100,500,600]
      });

The ``getPageBox`` method accepts the following parameters:

* ``cBox``: the type of box

* ``nPage``: the zero-based index of the page

For example, the following code retrieves the crop box for page 3:

::

      var rect = this.getPageBox("Crop", 3);

Rotating pages
^^^^^^^^^^^^^^^^^^^^^

You can use JavaScript to rotate pages in 90-degree increments in the clockwise direction relative to the normal position. This means that if you specify a 90-degree rotation, no matter what the current orientation is, the upper portion of the page is placed on the right side of your screen.

The Doc object's ``setPageRotations`` and ``getPageRotation`` methods are used to set and retrieve page rotations.

The ``setPageRotations`` method accepts three parameters:

* ``nStart``: the zero-based index of the beginning page

* ``nEnd``: the zero-based index of the last page

* ``nRotate``: 0, 90, 180, or 270 are the possible values for the clockwise rotation

In the following example, pages 2 and 5 are rotated 90 degrees in the clockwise direction:

::

      this.setPageRotations(2,5,90);

To retrieve the rotation for a given page, invoke the Doc object ``getPageRotation`` method, which requires only the page number as a parameter. The following code retrieves and displays the rotation in degrees for page 3 of the document:

::

      var rotation = this.getPageRotation(3);
      console.println("Page 3 is rotated " + rotation + " degrees.");

.. raw:: html

   <a name="29721"></a>

Extracting, moving, deleting, replacing, and copying pages
----------------------------------------------------------

The Doc object, in combination with the ``app`` object, can be used to extract pages from one document and place them in another, and moving or copying pages within or between documents.

The ``app`` object an be used to create or open any document. To create a new document, invoke its ``newDoc`` method, and to open an existing document, invoke its ``openDoc`` method.

The Doc object offers three useful methods for handling pages:

* ``insertPages``: Inserts pages from the source document into the current document

* ``deletePages``: Deletes pages from the document

* ``replacePages``: Replaces pages in the current document with pages from the source document.

These methods enable you to customize the page content within and between documents.

Suppose you would like to remove pages within a document. Invoke the Doc object's ``deletePages`` method, which accepts two parameters:

* ``nStart``: the zero-based index of the beginning page

* ``nEnd``: the zero-based index of the last page

For example, the following code deletes pages 2 through 5 of the current document:

::

      this.deletePages({nStart: 2, nEnd: 5});

Suppose you would like to copy pages from one document to another. Invoke the Doc object ``insertPages`` method, which accepts four parameters:

* ``nPage``: the zero-based index of the page after which to insert the new pages

* ``cPath``: the device-independent path of the source file

* ``nStart``: the zero-based index of the beginning page

* ``nEnd``: the zero-based index of the last page

For example, the following code inserts pages 2 through 5 from ``mySource.pdf`` at the beginning of the current document:

::

      this.insertPages({
          nPage: -1,
          cPath: "/C/temp/mySource.pdf",
          nStart: 2,
          nEnd: 5
      });

You can combine these operations to extract pages from one document and move them to another (they will be deleted from the first document). The following code will extract pages 2 through 5 in ``mySource.pdf`` and move them into ``myTarget.pdf`` :

::

      // The operator, this, represents myTarget.pdf  
      // First copy the pages from the source to the target document
      this.insertPages({
          nPage: -1,
          cPath: "/C/temp/mySource.pdf",
          nStart: 2,
          nEnd: 5
      });
   
      // Now delete the pages from the source document
      var source = app.openDoc({cPath:"/C/temp/mySource.pdf"});
      source.deletePages({nStart: 2, nEnd: 5});

To replace pages in one document with pages from another document, invoke the target document's ``replacePages`` method, which accepts four parameters:

* ``nPage``: The zero-based index of the page at which to start replacing pages

* ``cPath``: The device-independent pathname of the source file

* ``nStart``: The zero-based index of the beginning page

* ``nEnd``: The zero-based index of the last page

In the following example, pages 2 through 5 from ``mySource.pdf`` replace pages 30 through 33 of ``myTarget.pdf`` :

::

      // This represents myTarget.pdf
      this.replacePages({
          nPage: 30,
          cPath: "/C/temp/mySource.pdf",
          nStart: 2,
          nEnd: 5
      });

To safely move pages within the same document, it is advisable to perform the following sequence:

#. Copy the source pages to a temporary file.
#. Insert the pages in the temporary file at the new location in the original document.
#. Delete the source pages from the original document.

The following example moves pages 2 through 5 to follow page 30 in the document:

::

      // First create the temporary document:
      var tempDoc = app.newDoc("/C/temp/temp.pdf");
      
      // Copy pages 2 to 5 into the temporary file
      tempDoc.insertPages({
          cPath: "/C/temp/mySource.pdf",
          nStart: 2,
          nEnd: 5
      });
      
      // Copy all of the temporary file pages back into the original:
      this.insertPages({
          nPage: 30,
          cPath: "/C/temp/temp.pdf"
      });
      
      // Now delete pages 2 to 5 from the source document
      this.deletePages({nStart: 2, nEnd: 5});

.. raw:: html

   <a name="11561"></a>

Adding watermarks and backgrounds
---------------------------------

The Doc object ``addWatermarkFromText`` and ``addWatermarkFromFile`` methods create watermarks within a document, and place them in *optional content groups* (OCGs).

The ``addWatermarkFromFile`` method adds a page as a watermark to the specified pages in the document. The example below adds the first page of ``watermark.pdf`` as a watermark to the center of all pages within the current document:

::

      this.addWatermarkFromFile("/C/temp/watermark.pdf");

In the next example, the ``addWatermarkFromFile`` method is used to add the second page of ``watermark.pdf`` as a watermark to the first 10 pages of the current document. It is rotated counterclockwise by 45 degrees, and positioned one inch down and two inches over from the top left corner of each page:

::

      this.addWatermarkFromFile({
          cDIPath: "/C/temp/watermark.pdf",
          nSourcePage: 1,
          nEnd: 9,
          nHorizAlign: 0,
          nVertAlign: 0,
          nHorizValue: 144,
          nVertValue: -72,
          nRotation: 45
      });

It is also possible to use the ``addWatermarkFromText`` method to create watermarks. In this next example, the word ``Confidential`` is placed in the center of all the pages of the document, and its font helps it stand out:

::

      this.addWatermarkFromText(
          "Confidential", 
          0, 
          font.Helv, 
          24, 
          color.red
      );

.. raw:: html

   <a name="51169"></a>

Converting PDF documents to XML format
======================================

Since XML is often the basis for information exchange within web services and enterprise infrastructures, it may often be useful to convert your PDF documents into XML format.

It is a straightforward process to do this using the Doc object ``saveAs`` method, which not only performs the conversion to XML, but also to a number of other formats.

In order to convert your PDF document to a given format, you will need to determine the device-independent path to which you will save your file, and the conversion ID used to save in the desired format. A list of conversion IDs for all formats is provided in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__. For XML, the conversion ID is ``com.adobe.acrobat.xml-1-00``.

The following code converts the current PDF file to XML and saves it at ``C:temptest.xml`` :

::

      this.saveAs("/c/temp/test.xml", "com.adobe.acrobat.xml-1-00");
