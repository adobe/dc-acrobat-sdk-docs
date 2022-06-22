******************************************************
Review, Markup, and Approval
******************************************************

In this chapter you will learn how to make use of Acrobat's ability to facilitate online collaborative reviews for many types of content. At the heart of this process is the set of commenting, markup, and approval tools available to the reviewers, and the tools available to the initiator for managing the review.

You can use JavaScript to customize the review process and how comments are handled, to add additional annotations, and to configure a SOAP-based online repository.

.. raw:: html

   <a name="46929"></a>

Working with comments using JavaScript
======================================

The Commenting toolbar provides reviewers with the tools necessary to create comments, which may be placed in the document in the form of notes, highlighting, and other markup. In this section, you are introduced to the various annotation types from the JavaScript point of view. In `Getting annotation data <JS_Dev_RMA.html#59776>`__ you will learn how to extract content from comments and later, in `Setting comment properties <JS_Dev_RMA.html#32848>`__, you will learn to set the properties of a comment.

Annotation types
----------------

Each annotation has a JavaScript type. In the paragraphs that follow, the relation between each UI name and its corresponding type is delineated.

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - UI tool name
     - Type

   * - Sticky Note tool
     - Text

   * - Text Box tool
     - FreeText

   * - Highlight Text tool
     - HighLight

   * - Cross-Out Text tool
     - StrikeOut

   * - Underline Text tool
     - Underline

   * - Stamp tool
     - Stamp

   * - Cloud tool. Polygon tool
     - Polygon

   * - Arrow tool
     - Line

   * - Rectangle tool
     - Square

   * - Pencil Tool
     - Ink

   * - Oval Tool
     - Circle

   * - Attach a File as a Comment tool
     - FileAttachment

   * - Record Audio Comment tool
     - Sound

   * - Polygon Line tool
     - PolyLine

.. raw:: html

   <a name="59776"></a>

Getting annotation data
-----------------------

There are two methods for getting annotation information present in a document, or a collection of documents. These methods are ``getAnnot`` and ``getAnnots`` of the Doc object.

The ``getAnnot`` method returns an Annotation object, an object that holds all data of the annotation. This method takes two parameters, ``nPage`` (page number) and ``cName`` (the name of the annot). For example,

::

      var a = this.getAnnot({ nPage: 2, cName: "myAnnot" });
      if ( a != null ) {
          console.println("This annot has type " + a.type);
          if ( (a.type != "FileAttachment")  (a.type != "Sound") )
              console.println("The comment of this annot is " + a.contents);
      }

When the user makes a comment using the UI, the name of the comment is randomly assigned. As a consequence, unless the annotation is created with the ``addAnnot`` method, in which the name of the annot can be assigned at the time of creation, the name is not typically known to the developer.

In normal workflows, the problem is to gather all comments in a document and process them in some way. The tool for doing this is ``getAnnots``. The method returns an array of Annotation objects based on the search parameters, all of which are optional:

* ``nPage`` - The page number to search for annotations, if not provided, the whole document is searched.

* ``nSortBy`` - The method used to sort the search results, these include page, author, and modification date.

* ``bReverse`` - If true, the array is reverse-sorted.

* ``nFilterBy`` - Get anntotations satisfying certain criteria, such as getting only those annotations that can be printed, that can be viewed, or that can be edited.

Additional discussion can be found in `Sorting comments <JS_Dev_RMA.html#33122>`__. See the *JavaScript for Acrobat API Reference* or full descriptions of these parameters.

The following code retrieves all annotations in the document, and sorts them by author name:

::

      var annots = this.getAnnots({
          nSortBy: ANSB_Author
      });
      console.println("nAnnot Report for document: " + this.documentFileName);
      if ( annots != null ) {
          console.show();
          console.println("Number of Annotations: " + annots.length);
          var msg = "    %s in a %s annot said: "%s"";
          for (var i = 0; i < annots.length; i++)
          console.println(util.printf(msg, annots[i].author, annots[i].type,
          annots[i].contents));
      } else
          console.println("       No annotations in this document.");

.. raw:: html

   <a name="83401"></a>

Adding comments with JavaScript

You can include a text box comment in a document and control its border, background color, alignment, font, and size characteristic. To create a ``Square`` type annotation, such as one created by the Rectangle tool in the UI, use the Document method ``addAnnot`` as follows:

::

      this.addAnnot({
          page: 0,
          type: "Square",
          rect: [0,0,100,100],
          name: "OnMarketShare",
          author: "A.C. Robat",
          contents: "This section needs revision"
      });

Refer to the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for full descriptions of the properties specified above.

All annotations can be constructed in this way, in the case of sound and file attachment annotations, there is no JavaScript method for associating a recording with a sound annotation or a file with a file attachment.

.. raw:: html

   <a name="32848"></a>

Setting comment properties
--------------------------

To set the properties of a comment, create an object literal containing the properties to be applied to your comment. Then apply the properties to your annotation:

::

      // Create the common properties in an object literal:
      var myProps = {
          strokeColor: color.red,
          popupOpen: true,
          arrowBegin: "Diamond",
          arrowEnd: "OpenArrow"
      };
      
      // Assign the common properties to a previously created annot:
      myAnnot.setProps(myProps);

The object literal, ``myProps``, can be used again to change the properties of a collection of annotations, perhaps ones returned by the ``getAnnots``, as discussed in `Getting annotation data <JS_Dev_RMA.html#59776>`__.

.. raw:: html

   <a name="78613"></a>

Online collaboration essentials
===============================

You can initiate several types of review workflows for PDF documents:

-  Email the document to all reviewers, and import the returned comments into the original document.
-  Set up an automated email-based review.
-  Set up an automated browser-based review through the use of a shared server.
-  Initiate an email-based approval workflow.
-  Initiate an JavaScript-based review.

Online collaboration essentials topics
------------------------------------------------

-  `Reviewing documents with additional usage rights <JS_Dev_RMA.html#97742>`__
-  `Emailing PDF documents <JS_Dev_RMA.html#33983>`__
-  `JavaScript-based collaboration driver <JS_Dev_RMA.html#53029>`__
-  `Spell-checking in comments and forms <JS_Dev_RMA.html#93532>`__
-  `Approval <JS_Dev_RMA.html#31420>`__

.. _section-1:

.. raw:: html

   <a name="97742"></a>

Reviewing documents with additional usage rights
------------------------------------------------

For email-based reviews, the specification of additional usage rights within a document enables extra capabilities within Acrobat Reader. This enables the reviewer to add comments, import and export form-related content, save the document, or apply a digital signature.

For example, when using the Doc object ``encryptForRecipients`` method, you can specify the following permissions for reviewers:

* allowAll: Permits full and unrestricted access to the entire document.

* allowAccessibility: Permits content accessed for readers with visual or motor impairments.

* allowContentExtraction: Permits content copying and extraction.

* allowChanges: Permits either no changes, or changes to part or all of the document assembly, content, forms, signatures, and notes.

* allowPrinting: Permits no printing, low-quality printing, or high-quality printing.

The following code allows full and unrestricted access to the entire document for one set of users (``importantUsers``), and allows high quality printing for another set of users (``otherUsers``):

::

      var sh = security.getHandler("Adobe.PPKMS");
      var dir = sh.directories[0];
      var dc = dir.connect();
      dc.setOutputFields({oFields:["certificates","email"]});
      var importantUsers = dc.search({oParams:{lastName:"Smith"}});
      var otherUsers = dc.search({oParams:{lastName:"Jones"}});
      this.encryptForRecipients({
          oGroups:[
              {
                  userEntities: importantUsers, 
                  permissions: { allowAll: true }
              },
              {
                  userEntities: otherUsers,
                  permissions: { allowPrinting: "highQuality" }
              }
          ],
          bMetaData: true
      });
      eMailList = "";
      for ( var i=0; i < importantUsers.length; i++) 
          eMailList +=  (importantUsers[i].email + ",");
      for ( var i=0; i<otherUsers.length; i++)
          eMailList +=  (otherUsers[i].email + ",");
      // Now email the secured document.
      this.mailDoc({
          cTo: eMailList,
          cSubject: "For your eyes only",
          cMsg: "Please review for the meeting on Friday."
   })

.. raw:: html

   <a name="33983"></a>

Emailing PDF documents
----------------------

In addition to the email options available in the Acrobat menu and toolbar, it is also possible to use JavaScript to set up an automated email review workflow. This may be done through the Doc object ``mailDoc`` method. In the code shown below, the document is automatically sent to ``recipient@example.com`` :

::

      this.mailDoc({
          bUI: false, 
          cTo: "recipient@example.com", 

          cSubject: "Review", 
          cMsg: "Please review this document and return. Thank you."
      });

.. note::

   For Windows systems, the default mail program must be MAPI-enabled.

.. raw:: html

   <a name="53029"></a>

JavaScript-based collaboration driver
-------------------------------------

JavaScript can be used to describe the workflow for a given document review, and can be used in review management. This is done by specifying a state model for the types of annotations a reviewer may use and creating an annotation store on the server for customized comment and review within browser-based workflows. The ``Collab`` object provides you with control over the possible states annotation objects may have, and may be used in conjunction with the ``SOAP`` object to create an annotation store.

There are several methods available within the ``Collab`` object that enable you to describe the state model for the review: these include ``addStateModel``, ``getStateInModel``, ``transitionToState``, and ``removeStateModel``.

The ``addStateModel`` method is used to add a new state model to Acrobat describing the possible states for an ``annot`` object using the model, and the ``removeStateModel`` method removes the model, though it does not affect previously created ``annot`` objects. Their usage is shown in the code below:

::

      // Add a state model, this script can be placed at the folder level to  
      // install a custom state model for enterprise users, for example.
      try{
          var myStates = new Object;
          myStates["initial"] = {cUIName: "Haven't reviewed it"};
          myStates["approved"] = {cUIName: "I approve"};
          myStates["rejected"] = {cUIName: "Forget it"};
          myStates["resubmit"] = {cUIName: "Make some changes"};
          Collab.addStateModel({
              cName: "ReviewStates", 
              cUIName: "My Review", 
              oStates: myStates, 
              cDefault: "initial"
          });
      }
      catch(e){console.println(e);}
   
      // Now transition all annots to the "rejected" state. 
      var myAnnots =              this.getAnnots( );
      for ( var i=0; i<myAnnots.length; i++ )
          myAnnots[i].transitionToState("ReviewStates", "rejected");
   
      // Now remove the state model.
      try {Collab.removeStateModel("ReviewStates");}
      catch(e){console.println(e);}

You can also use the ``SOAP`` object's ``connect``, ``request``, and ``response`` methods to create customized commenting and review within browser-based workflows. You can do this by setting up a SOAP-based annotation store on the server using the ``Collab`` object's ``addAnnotStore`` and ``setStoreSettings`` methods.

The ``Collab`` object's ``addAnnotStore`` method requires three parameters:

* cIntName: The internal name for the annotation store.

* cDispName: The display name for the annotation store.

* cStore: The definition for the new ``Collab`` store class.

The new ``Collab`` store class must contain the following definitions for the functions used to add, delete, update, and enumerate through the array of annotations:

* enumerate: Communicates with the web service to request the array of annotations stored on the server. It is used when the PDF document is loaded for online review, or when the user clicks Upload or Send on the Commenting toolbar.

* complete: Passes the annotation data to the collaboration server so that it can be updated.

* update: Uploads new and modified annotations to the server.

The class ``SDKSampleSOAPAnnotStore``, as shown in the sample code below, is defined in ``sdkSOAPCollabSample.js`` in the Acrobat SDK, and contains complete definitions of the three functions described above.

The sample code below provides a standard example of how to use the ``SOAP`` and ``Collab`` objects to customize your online collaborative review. Note that all of the reviewers must have a copy of the JavaScript collaboration store code. In Acrobat 7.0 and later, the ``Custom`` collaboration store type allows you to put the JavaScript on the server. The store type used is ``CUSTOM``, and the setting is a URL to the JavaScript file:

::

      // Here is the URL for a SOAP HTTP service:
      var mySetting = "http://sampleSite/comments.asmx?WSDL";
      
      // Here is the internal name for the collaborative store:
      var myType = "mySOAPCollabSample";
      
      // Set the connection settings for the SOAP collab store:
      Collab.setStoreSettings(mySetting, myType);
      
      // Set the default collab store:
      Collab.defaultStore = myType;
      
      // Add the collab store to the Acrobat Collab servers:
      if (typeof SOAPFileSys == "undefined")
          Collab.addAnnotStore(
              myType, 
              "SOAP Sample",
              {
                  // Annot store instantiation function is required:
                  create: function(doc, user, settings)
                  {
                      if (settings && settings != "")
                          return new SDKSampleSOAPAnnotStore(
                              doc, user, settings
                          );
                      else
                          return null;
                  }
              }
          );

.. raw:: html

   <a name="93532"></a>

Spell-checking in comments and forms

You can check the spelling of any word using the ``spell`` object' ``checkWord`` method. This can be applied to any form field or annotation. First retrieve the contents, and submit each word to the method.

Setting spelling preferences
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To set the dictionary order, first retrieve the array of dictionaries using the Doc object's ``spellDictionaryOrder`` property. Then modify the order of the array entries, and assign the array to the same property. An array of currently available dictionaries can be obtained using the ``spell`` object's ``dictionaryNames`` property.

To set the language order, perform a similar algorithm using the Doc object's ``spellLanguageOrder`` property. An array of currently available dictionaries can be obtained using the ``spell`` object's ``languages`` property.

Adding words to a dictionary
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can add words to a dictionary by invoking the ``spell`` object's ``addWord`` method, as shown in the code sample below:

::

      spell.addWord(myDictionary, "myNewWord");

.. raw:: html

   <a name="31420"></a>

Approval

Approval workflows may include an automated process in which a PDF document is automatically sent via email to a recipient for their approval. For example, this may be accomplished through the usage of the Doc object's ``mailDoc`` method. The user may then use a standard approval stamp, use a custom stamp, or use a Hanko stamp to create a secure digital signature.

.. raw:: html

   <a name="63345"></a>

Managing comments
=================

In this section, you will look in a more detailed way at the method of managing the comments in a document. The topics covered are:

-  `Selecting, moving, and deleting comments <JS_Dev_RMA.html#39621>`__
-  `Using the comments list <JS_Dev_RMA.html#13970>`__
-  `Exporting and importing comments <JS_Dev_RMA.html#79147>`__
-  `Comparing comments in two PDF documents <JS_Dev_RMA.html#69782>`__
-  `Aggregating comments for use in Excel <JS_Dev_RMA.html#68889>`__
-  `Extracting comments in a batch process <JS_Dev_RMA.html#78138>`__

.. _section-2:

.. raw:: html

   <a name="39621"></a>

Selecting, moving, and deleting comments
----------------------------------------

Just as you can access the Comments List in the Acrobat user interface, you can likewise do so through using the ``syncAnnotScan`` and ``getAnnots`` methods of the Doc object. The ``syncAnnotScan`` method guarantees that all annotations in the document are scanned, and the ``getAnnots`` method returns a list of annotations satisfying specified criteria.

For example, the following code scans all the annotations on page 2 of the document and captures them all in the variable ``myAnnotList`` :

::

      this.syncAnnotScan();
      var myAnnotList = this.getAnnots({nPage: 1}); // Zero-based page number 

To move a comment, use the corresponding ``setProps`` method of the Annotation object to specify a new location or page. To delete the comment, invoke the corresponding ``destroy`` method of the Annotation object. In the code sample below, all the free text comments on page 2 of the document are deleted:

::

      for (var i=0; i<myAnnotList.length; i++)
          if (myAnnotList[i].type == "FreeText") 
              myAnnotList[i].destroy();

.. raw:: html

   <a name="13970"></a>

Using the comments list
-----------------------

Once you have acquired the comments list through the ``syncAnnotScan`` and ``getAnnots`` methods of the Doc object, you can change their status, appearance, order, and visibility. In addition, you will be able to search for comments having certain characteristics.

.. raw:: html

   <a name="70709"></a>

Changing the status of comments
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To change the status of a comment, invoke the corresponding ``transitionToState`` method of the Annotation object, as shown in the code below:

::

      // Transition myAnnot to the "approved" state:
      myAnnot.transitionToState("ReviewStates", "approved");

The code above assumes ``myAnnot`` is an Annotation object of the document.

Changing the appearance of comments
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can change the appearance of a comment in a variety of ways. In general, the appearance of any comment may be changed by invoking the ``setProps`` method of the Annotation object, as shown in the code below:

::

      myAnnot.setProps({
          page: 0,
          points: [[10,40], [200,200]],
          strokeColor: color.red,
          popupOpen: true,
          popupRect: [200,100,400,200],
          arrowBegin: "Diamond",
          arrowEnd: "OpenArrow"
      });

.. raw:: html

   <a name="33122"></a>

Sorting comments
----------------

To sort comments, use ``getAnnots`` method of the Doc object and specify a value for the ``nSortBy`` parameter. Permissible values of ``nSortBy`` are

* ANSB_None: Do not sort.

* ANSB_Page: Sort by page number.

* ANSB_Author: Sort by author.

* ANSB_ModDate: Sort by modification date.

* ANSB_Type: Sort by annotation type.

In addition, you can specify that the sorting be performed in reverse order by submitting the optional ``bReverse`` parameter to the method.

The code sample given below shows how to obtain a list of comments from page 2 of the document, sorted in reverse order by author:

::

      this.syncAnnotScan();
      var myAnnotList = this.getAnnots({
          nPage: 2, 
          nSortBy: ANSB_Author,
          bReverse: true
      });

Showing and hiding comments
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To show or hide a comment, set its corresponding ``hidden`` property of the Annotation object. For example, the following code hides ``myAnnot`` :

::

      myAnnot.hidden = true;

.. raw:: html

   <a name="79147"></a>

Exporting and importing comments
--------------------------------

To export all the comments in a file, invoke the ``exportAsFDF`` or ``exportAsXFDF`` methods of the Doc object. In both cases, set the ``bAnnotations`` parameter to ``true``, as shown in the code sample below, which exports only the comments and nothing else:

::

      this.exportAsFDF({bAnnotations: true});

To import comments from an FDF or XFDF into a file, invoke the ``importAnFDF`` or ``importAnXFDF`` methods of the Doc object.

.. raw:: html

   <a name="68889"></a>

Aggregating comments for use in Excel
-------------------------------------

The ``createDataObject`` method of the Doc object may be used to create a tab-delimited text file, which can then be used in Excel. To aggregate comments for use in Excel, collect all the comments using the ``getAnnots`` method, iterate through them and store them into a tab-delimited string, create a text file attachment object using the ``createDataObject`` method of the Doc object, pass the string to the ``cValue`` parameter in the ``createDataObject`` method, and optionally, save the attachment to the local hard drive using ``exportDataObject``. Below is a sample script which follows the above outline:

::

      var annots = this.getAnnots();
      var cMyC = "NametPagetComment";
      for ( var i=0; i<annots.length; i++ )
          cMyC += ("n"+annots[i].author + "t" + annots[i].page + "t"" 
              + annots[i].contents+""");
   
      this.createDataObject({cName: "myCommentList.xls", cValue: cMyC});
      this.exportDataObject({cName: "myCommentList.xls", nLaunch: 1});

.. raw:: html

   <a name="69782"></a>

Comparing comments in two PDF documents
---------------------------------------

While the Acrobat user interface provides you with a menu choice for comparing two documents, it is possible to customize your comparisons using JavaScript. To gain access to multiple documents, invoke the ``app`` object's ``openDoc`` method for each document you would like to analyze. Each Doc object exposes the contents of each document, such as an array of annotations. You can then compare and report any information using customized algorithms. For example, the code below reports how many annotations exist in the two documents:

::

      var doc2 = app.openDoc("/C/secondDoc.pdf");
      var annotsDoc1 = this.getAnnots();
      var annotsDoc2 = doc2.getAnnots();
      console.println("Doc 1: " + annotsDoc1.length + " annots.");
      console.println("Doc 2: " + annotsDoc2.length + " annots.");

The above code will work if executed in the console. If executed from a non-privileged context, the ``secondDoc.pdf`` must be disclosed for ``app.openDoc`` to return its Doc object. Disclosed means that the code ``this.disclosed=true`` is executed when the document is opened, either as an open page action, or as part of a top level execution of document scripts. See the documentation of ``app.openDoc`` in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for details.

.. raw:: html

   <a name="78138"></a>

Extracting comments in a batch process
--------------------------------------

In a batch process, you can open any number of Doc objects using the ``app`` object ``openDoc`` method. For each open document, you can invoke its corresponding Doc object ``getAnnots`` method to collect the comments in that file. If you would like to put all the comments together in one file, you can do so by creating a new document and saving the various arrays of comments into that new file.

The batch sequence samples include a sequence called Comments to Tab-Delimited File. This sequence uses the techniques described in the previous paragraph.

.. raw:: html

   <a name="44729"></a>

Approving documents using stamps (Japanese workflows)
=====================================================

Approval workflows are similar to other email-based collaborative reviews, and provide you with the ability to set the order in which participants are contacted. This means that, based on the approval issued by a participant, the document can be mailed to the next participant, and an email can be sent to the initiator.

.. raw:: html

   <a name="35058"></a>

Setting up a Hanko approval workflow
------------------------------------

A registered Hanko is a stamp used in Japanese document workflows, and can be used to sign official contracts. Every registered hanko is unique and is considered a legal form of identification.

A personal Hanko is not registered, and is used for more common types of signatures, such as those used in meeting notes or budget proposals. Everyone in an organization who is involved in a document review must add their Hanko to the document in order for it to gain final approval.

Acrobat provides an assistant to help you set up an approval workflow. You can customize your workflow as well, by adding form fields to the document containing recipient lists to be chosen by the participant. This way, in case there are multiple directions for a given branch in the workflow, the participant may invoke automated functions that send the document to the correct participants, as well as an email to the initiator containing a record of activity.

You can use JavaScript to automate various steps within the workflow by sending the document and other information by email using the ``Doc.mailDoc`` method.

.. raw:: html

   <a name="56222"></a>

Participating in a Hanko approval workflow
------------------------------------------

A participant receives an email with instructions for opening the document and completing their portion of the approval process. As noted above, this can be customized and automated through the use of form fields if the workflow is complex.

A Hanko stamp is a commenting tool used in approval workflows, and an Inkan stamp is a unique image that can represent an individual's identity and can be used in place of a signature. Both are created, customized, and managed through the Acrobat user interface.

In order to use a Hanko or Inkan stamp, you will need to create a custom stamp and add digital signature information. Once the stamp has been created, you can apply it in your workflows.

Installing and customizing Hanko stamps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Creating custom Hanko stamp information involves the combination of user information and a digital signature. Once you have set this up, it can be saved in a PDF file which is stored in the Stamps folder.

Creating custom Inkan stamps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To create an Inkan stamp, add your name, title, department, and company, choose a layout, and provide a name to use for the stamp. You can also import a PDF form to add customized features and additional fields containing personal information. In addition, it is possible to add secure digital signature information to an Inkan stamp.

Deleting custom stamps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can delete any Hanko and Inkan stamps that you created, though it is not possible to delete any of the predefined stamps in the Stamps palette.
