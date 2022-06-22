******************************************************
Rights-Enabled PDF Files
******************************************************

When creating a PDF document, it is possible to create certified documents by assigning special rights to it that enable users of Acrobat Reader to fill in forms, participate in online reviews, and attach files. Adobe Reader Extensions may be used to activate additional functionality within Acrobat Reader for a particular document, thereby enabling the user to perform such operations as save, fill in, annotate, sign, certify, authenticate, and submit the document, thus streamlining collaboration for document reviews and automating data capture with electronic forms. In addition, users of Acrobat Pro DC can Reader-enable collaboration.

.. raw:: html

   <a name="62945"></a>

Additional usage rights
=======================

LiveCycle Reader Extensions sets permissions within a PDF document that would otherwise be disabled through the usage of a certificate issued by the Acrobat Reader Extension Root Certificate Authority. Permissions for Reader-enabled PDF files are determined by the combination of the user rights settings in the PDF file and a special Object Identifier (OID), embedded within the certificate, specifying the additional permissions to be made available. The permissions are listed below:

* **Form**:  fill-in and document full-save

* **Form**:  import and export

* **Form**:  add and delete

* **Form**:  submit standalone

* **Form**:  spawn template, spawn page from template, and delete spawned pages.

.. warning::

   Changing page visibility using ``template.hidden`` is not allowed through JavaScript.

* **Signature**:  modify

* **Annotation**:  create, delete, modify, and copy

* **Annotation**:  import and export

* **Form**:  barcode plain text

* **Annotation**:  online

* **Form**:  online

.. warning::

   JavaScript allows SOAP access in forms. For Acrobat Reader 6.0, SOAP access is allowed in Acrobat forms. For Acrobat Reader 6.02, OleDb database access is allowed in Windows for static XML forms. For Acrobat Reader 7.0.5, SOAP access is allowed for static and dynamic XML forms.

* **Embedded File**:  create, delete, modify, copy, and import.

.. note::

   The ability to manipulate embedded data objects is available in Acrobat Reader 6.0 and later.

.. raw:: html

   <a name="63210"></a>

Writing JavaScript for Adobe Reader
===================================

It is possible to access or assign additional usage rights within a PDF file by using the LiveCycle Reader Extensions API or its web user interface.

.. note::

   For rights-enabled documents, certain editing features normally available within the Acrobat Standard DC and Acrobat Pro DC products will be disabled. This will ensure that the user does not inadvertently invalidate the additional usage rights in a document under managed review before passing the document on to an Acrobat Reader user for further commenting.

If a document is rights-enabled but commenting is not allowed, then the JavaScript methods shown in the following table will be disabled.

When commenting is not allowed in Reader-enabled documents

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Feature
     - Method

   * - Add a comment
     - Doc.addAnnot

   * - Import comments
     - Doc.importAnFDF

   * - Export comments
     - ``Doc.exportAsFDF`` (when ``bAnnotations`` is set to ``true``) 

If a document is rights-enabled but file attachments are not allowed, then the following JavaScript methods will be disabled:

-  ``Doc.createDataObject``
-  ``Doc.importDataObject``
-  ``Doc.setDataObjectContents``
-  ``Doc.removeDataObject``

If a document is rights-enabled but digital signatures are not allowed, then the following JavaScript methods will be disabled:

-  ``Doc.getField`` (for signature fields)
-  ``Doc.addField`` (when ``cFieldType = "signature"``)
-  ``Field.removeField`` (when ``cFieldType = "signature"``)
-  ``Field.signatureSign``

For more information on developing JavaScript solutions for Acrobat Reader see *Developing for Adobe Reader*.

.. raw:: html

   <a name="35244"></a>

Enabling collaboration
======================

By using RSS, collaboration servers can provide customized XML-based user interfaces directly inside of Acrobat itself, thus providing a more dynamic and personalized tool, and providing JavaScript developers a means to extend collaboration, including full user interfaces.

In addition, it is now straightforward to migrate comments from one document to another, carry comments across multiple versions of a document, and anchor comments to content so that the annotations remain in the right place even if the content changes.

The advantages of this are that it is possible to automate discovery of collaboration servers, initiation workflows, and RSS feeds which may be used to populate content inside Acrobat Reader.

It is significant to note that users of Acrobat Pro DC can enable both file-based and online collaboration, thus enabling them to invite users of Acrobat Reader to participate in the review process.

The following JavaScript methods will be enabled in Acrobat Reader when collaboration is enabled:

-  ``Doc.addAnnot``
-  ``Doc.importAnFDF``
-  ``Doc.exportAnFDF``

When collaboration is not enabled, it is still possible for annotations to appear in a browser by embedding the following statement in the FDF file:

::

      Collab.showAnnotToolsWhenNoCollab = true;

A complete example of an FDF file that makes it possible for annotations to appear in a browser is shown below:

::

      %FDF-1.2
      %âãÏÓ
      1 0 obj
      <<
      /FDF
      <<
      /F (file:///C:/ReaderAnnots/seafood_wallet_re.pdf)
      /JavaScript
      <<
      /AfterPermsReady 2 0 R
      >>
      >>
      >>
      endobj
      2 0 obj
      <<
      >>
      stream
      app.alert("DocumentOpen Script Start");
      Collab.showAnnotToolsWhenNoCollab = true;
      endstream
      endobj
      trailer
      <<
      /Root 1 0 R
      >>%%EOF
