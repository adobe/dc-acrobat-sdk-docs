******************************************************
Security
******************************************************

This chapter will introduce you to the various security options available through JavaScript for Acrobat. You will understand how to customize security in PDF documents by applying passwords and digital signatures, certifying documents, encrypting files, adding security to attachments, managing digital IDs and certificates, and customizing security policies.



Security essentials
=================================

JavaScript for Acrobat provides a number of objects that support security. These are managed by the ``security``, securityPolicy, and securityHandler objects for managing certificates, security policies, and signatures. The certificate, directory, signatureInfo, and dirConnection objects are used to manage digital signatures and access the user certificates.

Methods for adding security to PDF documents
--------------------------------------------

The general procedures for applying various types of security to a PDF document are described below. Details and examples are provided in the later sections of this chapter.

Passwords and restrictions
----------------------------------------------

The basic way to protect a document from unauthorized access is to encrypt it for a list of authorized recipients using the Doc object ``encryptForRecipients`` method. This essentially requires that the authorized recipients use a private key or credential to gain access to it. Restrictions may be applied so that the recipients' access to the document may be controlled.

.. raw:: html

   <a name="88320"></a>

Certifying documents
----------------------------------------------

The certification signature for a document makes modification detection and prevention (mdp) possible. When this type of signature is applied, it is possible to certify the document, and thereby specify information about its contents and the types of changes that are allowed in order for the document to remain certified.

To apply an author signature to a document, create an certification signature field using the Doc object ``addField`` method. Then sign the field using the Field object ``signatureSign`` method, in which you will provide parameters containing the security handler, a signatureInfo object containing an ``mdp`` property value other than ``allowAll``, and a legal attestation explaining why certain legal warnings are embedded in the document. The SignatureInfo object has properties common to all security handlers. These properties are described below in the following table.

SignatureInfo properties

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - buildInfo
     - Software build and version for the signature.

   * - date
     - Date and time of the signature.

   * - dateTrusted
     - A Boolean value, which if ``true``, specifies that the date is to be trusted. 

   * - handlerName
     - Security handler name specified in the ``Filter`` attribute in the signature dictionary.

   * - handlerUserName
     - Security handler name specified by ``handlerName``. 

   * - handlerUIName
     - Security handler name specified by ``handlerName``. 

   * - location
     - Physical location or hostname.

   * - mdp
     - Modification detection and prevention setting (``allowNone``, ``allowAll``, ``default``, ``defaultAndComments``). 

   * - name
     - Name of the user.

   * - numFieldsAltered
     - Number of fields altered since the previous signature.

   * - numFieldsFilledIn
     - Number of fields filled in since the previous signature.

   * - numPagesAltered
     - Number of pages altered since the previous signature.

   * - numRevisions
     - The number of revisions in the document.

   * - reason
     - Reason for signing.

   * - revision
     - Signature revision.

   * - sigValue
     - Raw bytes of the signature, as a hex-encoded string.

   * - status
     - Validity status (``4`` represents a completely valid signature).

   * - statusText
     - String representation of signature status.

   * - subFilter
     - Formats used for public key signatures.

   * - timeStamp
     - The URL of the server for time-stamping the signature.

   * - verifyDate
     - The date and time that the signature was verified.

   * - verifyHandlerName
     - Security handler used to validate signature.

   * - verifyHandlerUIName
     - Handler specified by ``verifyHandlerName.``

.. raw:: html

   <a name="99032"></a>

Encrypting files using certificates
================================================

When you invoke the Doc object ``encryptForRecipients`` method, it encrypts the document using the public key certificates of each recipient. The groups of recipients are specified in the ``oGroups`` parameter, which is an array of ``Group`` objects, each of which contains two properties: ``permissions`` and ``userEntities``. The ``userEntities`` property is an array of ``UserEntity`` objects (described below in the `UserEntity object properties <JS_Dev_Security.html#11928>`__ table), each of which describes a user and their associated certificates, and is returned by a call to the DirConnection object ``search`` method. The associated certificates are represented in a property containing an array of Certificate objects (described below in `Certificate object properties <JS_Dev_Security.html#95193>`__ table), each of which contains read-only access to the properties of an X.509 public key certificate.

To obtain a group of recipients (the ``oGroups`` parameter mentioned above), you can invoke the ``security`` object ``chooseRecipientsDialog`` method, that opens a dialog box prompting the user to choose a list of recipients.

UserEntity object properties
----------------------------------------------

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - firstName
     - The first name of the user.

   * - lastName
     - The last name of the user.

   * - fullName
     - The full name of the user.

   * - certificates
     - Array of certificate objects for the user.

   * - defaultEncryptCert
     - An array of preferred certificate objects.

Certificate object properties
----------------------------------------------

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - binary
     - The raw bytes of the certificate.

   * - issuerDN
     - The distinguished name of the user.

   * - keyUsage
     - The value of the certificate key usage extension.

   * - MD5Hash
     - The MD5 digest of the certificate.

   * - SHA1Hash
     - The SHA1 digest of the certificate.

   * - serialNumber
     - A unique identifier for the certificate.

   * - subjectCN
     - The common name of the signer.

   * - subjectDN
     - The distinguished name of the signer.

   * - usage
     - The purposes for which the certification may be used: end-user signing or encryption.

   * - ubrights
     - An application ``Rights`` object.

Security policies
========================================

Security policies are groups of reusable security settings that may include the type of encryption, the permission settings, and the password or public key to be used. You can create folder-level scripts containing objects that reflect these policies. Security policies may be customized through the use of ``securityPolicy`` objects, which can be accessed and managed by the ``security`` object ``getSecurityPolicies`` and ``chooseSecurityPolicy`` methods as well as the Doc object ``encryptUsingPolicy`` method.

Secure forms
============================================

You can lock form fields by creating a script containing a call to the Field object ``setLock`` method, and passing that script as the second parameter to the ``signature`` field ``setAction`` method.

In addition, you can sign an embedded FDF data object by invoking its ``signatureSign`` method, and subsequently validate the signature by invoking its ``signatureValidate`` method.

.. raw:: html

   <a name="55922"></a>

Digitally signing PDF documents
===============================

A certification signature contains identifying information about the person signing the document. When applying an certification signature, which must be the first signature in the document, it is also possible to certify the document. This involves providing a legal attestation as to the document's contents and specifying the types of changes allowed for the document in order for it to remain certified.

Signing a PDF document
----------------------

To sign a document, create a signature field, choose a security handler, and invoke the field object ``signatureSign`` method. The ``signatureSign`` method accepts the following parameters:

* ``oSig``: the security handler object

* ``oInfo``: a ``signatureInfo`` object

* ``cDIPath``: the device-independent path to which the file will subsequently be saved

* ``bUI``: whether the security handler will display a user interface when signing

* ``cLegalAttest``: a string that describes content or feature and explains why it is present (for certification signatures only)

The creation and usage of these parameters are explained below in the following sections: `The security handler object <JS_Dev_Security.html#62516>`__, `The SignatureInfo object <JS_Dev_Security.html#98360>`__, and `Applying the signature <JS_Dev_Security.html#98354>`__.

.. raw:: html

   <a name="62516"></a>

The security handler object
---------------------------

To obtain a security handler (the ``oSig`` parameter), invoke the ``security`` object ``getHandler`` method. The method, which returns a security handler object, takes the following parameters:

* ``cName``: The name of the security handler (contained in the ``security`` object's ``handlers`` property)

* ``bUIEngine``: If ``true``, the method returns the existing engine associated with the Acrobat user interface; if ``false``, the default, it returns a new engine.

The following code illustrates how to set up signature validation whenever the document is opened, lists all available security handlers, and selects the ``Adobe.PPKLite`` engine associated with the Acrobat user interface:

::

      // Validate signatures when the document is opened:
      security.validateSignaturesOnOpen = true;
      
      // List all the available signature handlers
      for (var i=0; i<security.handlers.length; i++)
          console.println(security.handlers[i]);
      
      // Select the Adobe.PPKLite engine with the Acrobat user interface:
      var ppklite = security.getHandler(security.PPKLiteHandler, true);

After obtaining the security handler, invoke the securityHandler object login method, which makes it possible to access and select your digital ID as shown in the following code:

::

      var oParams = {
          cPassword: "myPassword", 
          cDIPath: "/C/signatures/myName.pfx" // Digital signature profile
      };
      ppklite.login(oParams);

.. raw:: html

   <a name="98360"></a>

The SignatureInfo object
------------------------------------

To create the ``oInfo`` parameter for the signature field's ``signatureSign`` method, create a generic object containing the properties as described in the table `SignatureInfo properties <JS_Dev_Security.html#74773>`__:

::

      var myInfo = {
          password: "myPassword",
          location: "San Jose, CA",
          reason: "I am approving this document",
          contactInfo: "userName@example.com",
          appearance: "Fancy",
          mdp: "allowNone" // An mdp value is needed for certification signatures
      };

.. raw:: html

   <a name="98354"></a>

Applying the signature
-----------------------------------

Now that the security handler and signature information have been created, you can invoke the signature field's ``signatureSign`` method, as shown in the code below:

::

      // Obtain the signature field object:
      var f = this.getField("Signature1");
      
      // Sign the field:
      f.signatureSign({
          oSig: ppklite,
          oInfo: myInfo,
          cDIPath: "/C/temp/mySignedFile.pdf",
          cLegalAttest: "Fonts are not embedded to reduce file size"
      }); //End of signature

See also the discussion of `Signature fields <JS_Dev_AcrobatForms.html#61295>`__.

Clearing a digital signature
------------------------------------------------------------

To clear a signature, invoke the Doc object ``resetForm`` method. In the example below, ``Signature1`` is cleared:

::

      this.resetForm(["Signature1"]);

Getting signature information from another user
-----------------------------------------------

You can maintain a list of trusted user identities by adding the certificates contained within FDF files sent to you by other users. You can also obtain signature information from an FDF file by invoking the FDF object ``signatureValidate`` method, which returns a ``signatureInfo`` object, as shown in the example below:

::

      // Open the FDF file sent to you by the other user:
      var fdf = app.openFDF("/C/temp/myDoc.fdf");
      
      // Obtain the security handler:
      var engine = security.getHandler("Adobe.PPKLite");
      
      // Check to see if the FDF has been signed:
      if (fdf.isSigned)
      {
          // Obtain the other user's signature info:
          sigInfo = fdf.signatureValidate({
              oSig: engine,
              bUI: true
          });
      
          // Display the signature status and description:
          console.println("Signature Status: " + sigInfo.status);
          console.println("Description: " + sigInfo.statusText);
      }
      else
          console.println("This FDF was not signed.");

Removing signatures
-------------------

To remove a signature field, invoke the Doc object ``removeField`` method. In the example below, ``Signature1`` is removed:

::

      var sigFieldName = "Signature1"   
      this.resetForm([sigFieldName]); // clear the signature
      this.removeField(sigFieldName); // remove the field

Certifying a document
---------------------

When applying a signature to certify a document, check the ``trustFlags`` property of the ``signatureInfo`` object. If its value is ``2``, the signer is trusted for certifying documents.

Validating signatures
---------------------

To validate a signature, invoke the signature field's ``signatureValidate`` method. It returns one of the following integer validity status values:

* ``-1``: not a signature field

* ``0``: signature is blank

* ``1``: unknown status

* ``2``: signature is invalid

* ``3``: signature is valid, identity of signer could not be verified

* ``4``: signature and identity of signer are both valid

The method accepts two parameters:

* ``oSig``: the security handler used to validate the signature (a ``securityHandler`` or ``SignatureParameters`` object)

* ``bUI``: determines whether the user interface is shown when validating the data file

A ``SignatureParameters`` object contains two properties:

* ``oSecHdlr``: the security handler object

* ``bAltSecHdlr``: determines whether an alternate security handler may be used

In the following example, ``mySignatureField`` is analyzed for validity:

::

      // Obtain the signature field:
      var f = this.getField("mySignatureField");
      
      // Validate the signature field:
      var status = f.signatureValidate();
      
      // Obtain the signature information
      var sigInfo = f.signatureInfo();
      
      // Check the status returned from the validation:
      if (status < 3)
          var msg = "Signature is not valid: " + sigInfo.statusText;
      else
          var msg = "Signature is valid: " + sigInfo.statusText;
      
      // Display the status message:
      app.alert(msg);

Setting digital signature properties with seed values
-----------------------------------------------------

Sometimes form authors need to limit the choices a user can make when signing a particular signature field. In enterprise settings, document authors can craft documents with behaviors and features that meet specific business needs, thereby enabling administrative control of signature properties such as appearance, signing reasons, and so on.

Such customizations are possible by using signature field seed values. A seed value specifies an attribute and attribute value. The author can make the seed value a preference or a requirement.

The Field method ``signatureSetSeedValue`` sets the properties that are used when signing signature fields. The properties are stored in the signature field and are not altered when the field is signed, the signature is cleared, or when ``resetForm`` is called.

Refer to the *Acrobat 8.0 Security User Guide* or obtain a deeper understanding of the use of signature seed values.

#. Certification signature

The following script sets the seed values for the certification signature, and forces a certifying signature.

Certified signatures are always associated with modification detection and prevention (MDP) settings that control which changes are allowed to be made to a document before the signature becomes invalid. Changes are stored in the document as incremental saves beyond the original version of the document that was covered by the certifying signature.

::

      // Obtain the signature field object:
      var f = this.getField("theAuthorSignature");
      f.signatureSetSeedValue({
          mdp: "defaultAndComments",
          legalAttestations: ["Trust me and be at ease.",
          "You can surely trust the author."],
          reasons: ["This is a reason", "This is a better reason"],
          flags: 8
      });

.. raw:: html

   <a name="48096"></a>

Adding security to PDF documents
================================

This section discusses various aspects of security: adding security, including encrypting files for a list of recipients, encrypting files using security policies and adding security to document attachments.

Adding passwords and setting security options
---------------------------------------------

Since the Standard security handler, used for password encryption of documents, is not JavaScript-enabled, the most direct way to add passwords is through the creation of user or master passwords in the Acrobat user interface.

As described in `Encrypting files using certificates <JS_Dev_Security.html#99032>`__, you can encrypt a document for a number of recipients using certificates, and can set security policies through the application of a certification signature accompanied by the desired modification, detection, and prevention settings shown in the table `SignatureInfo properties <JS_Dev_Security.html#74773>`__.

.. raw:: html

   <a name="95020"></a>

Adding usage rights to a document
---------------------------------

You can decide which usage rights will be permitted for a set of users. You can specify either full, unrestricted access to the document, or rights that address accessibility, content extraction, allowing changes, and printing. You can use JavaScript to customize these rights when encrypting a document for a list of recipients. For more information, see `Rights-Enabled PDF Files <JS_Dev_Ubiquity.html#10389>`__.

Encrypting PDF files for a list of recipients
---------------------------------------------

The Doc object ``encryptForRecipients`` method is the primary means of encrypting PDF files for a list of recipients using JavaScript. In `Reviewing documents with additional usage rights <JS_Dev_RMA.html#97742>`__, the certificates used were gathered by connecting to a directory, which is a repository of user information. The directory object contains an ``info`` property with which it is possible to create and activate a new directory. It is accessible either through the ``directories`` property or the ``newDirectory`` method of the securityHandler object.

The value of the ``info`` property is a DirectoryInformation object, that may contain standard properties related to the name of the directory as well as additional properties specific to a particular directory handler (these may include server and port information).

To create a new directory, create a DirectoryInformation object, obtain a SecurityHandler object and invoke its ``newDirectory`` method, and assign the DirectoryInformation object to the new directory's ``info`` property.

::

      // Create and activate a new directory:
      var newDirInfo = {
          dirStdEntryID: "dir0",
          dirStdEntryName: "Employee LDAP Directory",
          dirStdEntryPrefDirHandlerID: "Adobe.PPKMS.ADSI",
          dirStdEntryDirType: "LDAP",
          server: "ldap0.example.com",
          port: 389
      };
      
      // Obtain the security handler:
      var sh = security.getHandler("Adobe.PPKMS");
      
      // Create the new directory object:
      var newDir = sh.newDirectory();
      
      // Store the directory information in the new directory:
      newDir.info = newDirInfo;

In order to obtain certificates from a directory, you must first connect to it using the Directory object ``connect`` method, and return a DirConnection object. An example is given below:

::

      // Obtain the security handler:
      var sh = security.getHandler("Adobe.PPKMS");
      var dc = sh.directories[0].connect();

It is then possible to use the DirConnection object to search for certificates. You can specify the list of attributes to be used for the search by invoking the DirConnection object ``setOutputFields`` method, that accepts two parameters:

* ``oFields``: an array of attributes to be used in the search

* ``bCustom``: whether the attributes are standard output attribute names

For example, the following code specifies standard output attributes (``certificates`` and ``email``):

::

      dc.setOutputFields({oFields: ["certificates", "email"]});

To perform the search, invoke the DirConnection object ``search`` method. It takes the following parameters:

* ``oParams``: an array of key-value pairs consisting of search attribute names and their corresponding strings

* ``cGroupName``: the name of the group to which to restrict the search

* ``bCustom``: whether ``oParams`` contains standard attribute names

* ``bUI``: whether a user interface is used to collect the search parameters

In the following example, the directory is searched for certificates for the user whose last name is "Smith", and displays the user's email address:

::

      var retval = dc.search({oParams: {lastName: "Smith"}});
      if (retval.length > 0) console.println(retval[0].email);

When you invoke the Doc object ``encryptForRecipients`` method, the ``oGroups`` parameter is an array of ``Group`` objects, each of which contains a ``permissions`` property. The ``permissions`` property is an object containing the properties described in the following table.

Permissions object

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - allowAll
     - Full, unrestricted access.

   * - allowAccessibility
     - Content access for the visually impaired.

   * - allowContentExtraction
     - Content copying and extraction.

   * - allowChanges
     - Allowed changes (``none``, ``documentAssembly``, ``fillAndSign``, ``editNotesFillAndSign``, ``all``). 

   * - allowPrinting
     - Printing security level (``none``, ``lowQuality``, ``highQuality``). 

The following code allows full and unrestricted access to the entire document for one set of users (``importantUsers``), and allows high quality printing for another set of users (``otherUsers``):

::

      // Obtain the security handler:
      var sh = security.getHandler("Adobe.PPKMS");
      
      // Connect to the directory containing the user certificates:
      var dir = sh.directories[0];
      var dc = dir.connect();
      
      // Search the directory for certificates:
      dc.setOutputFields({oFields:["certificates"]});
      var importantUsers = dc.search({oParams:{lastName:"Smith"}});
      var otherUsers = dc.search({oParams:{lastName:"Jones"}});
      
      // Allow important users full, unrestricted access:
      var importantGroup = {
          userEntities: importantUsers,
          permissions: {allowAll: true}
      };
      
      // Allow other users high quality printing:
      var otherGroup = {
          userEntities: otherUsers,
          permissions: {allowPrinting: "highQuality"}
      };
      
      // Encrypt the document for the intended recipients:
      this.encryptForRecipients({
          oGroups:[importantGroup, otherGroup],
          bMetaData: true
      });

See a related example in the section `Reviewing documents with additional usage rights <JS_Dev_RMA.html#97742>`__.

Encrypting PDF files using security policies
--------------------------------------------

It is possible to define a security policy for a PDF document. The policy can contain a list of people who can open the document, restrictions limiting their ability to modify, print, or copy the document, and an expiration date for the document after which it cannot be opened.

There are two kinds of security policies: a personal policy is one created by a user and is stored on a local computer, and a organizational policy is developed by an administrator and stored on a policy server.

There are three types of custom policies. You can create policies for password security, certificate security, and and server policies.

JavaScript for Acrobat defines a securityPolicy object that contains the following properties:

* ``policyID``: a machine-readable policy ID string

* ``name``: the policy name

* ``description``: the policy description

* ``lastModified``: the date when the policy was last modified

* ``handler``: the handler that implements the policy (``Adobe.APS``, ``Adobe.PubSec``, and ``Adobe.Standard``)

* ``target``: the target data covered by the policy (``document`` or ``attachments``)

To obtain a list of the security policies currently available, invoke the ``security`` object ``getSecurityPolicies`` method. The method accepts two parameters:

* ``oOptions``: a SecurityPolicyOptions object containing parameters used to filter the list

* ``bUI``: determines whether the user interface will be displayed (affects ``bCheckOnline`` in the ``oOptions`` parameter)

The SecurityPolicyOptions object is a generic object used to filter the list of security policies that will be returned by the method, and contains the following properties:

* ``bFavorites``: determines whether to return policies are favorites or not

* ``cFilter``: returns policies using the specified security filter (``Adobe.APS``, ``Adobe.PubSec``, and ``Adobe.Standard``)

* ``cTarget``: returns policies using the specified ``target`` (``document`` or ``attachments``)

The following example illustrates how to request and display a list of favorite security policies:

::

      // Set up the filtering options (SecurityOptionsPolicy object):
      var options = {
          bFavorites: true,
          cFilter: "Adobe.PubSec"
      };
      
      // Obtain the filtered list of security policies:
      var policyArray = security.getSecurityPolicies(options);
      
      // Display the list of security policies by name:
      for (var i=0; i<policyArray.length; i++)
          console.println(policyArray[i].name);

To encrypt a PDF file using a security policy, you must first choose a security policy by invoking the ``security`` object ``chooseSecurityPolicy`` method and then encrypt the file by invoking the Doc object's ``encryptUsingPolicy`` method.

The ``security`` object ``chooseSecurityPolicy`` method opens a dialog box that permits the user to choose from a list of security policies filtered according to a SecurityPolicyOptions object.

The Doc object ``encryptUsingPolicy`` method accepts three parameters:

* ``oPolicy``: the policy object to use when encrypting the document

* ``oGroups``: an array of Group objects that the handler should use when applying the policy

* ``oHandler``: the SecurityHandler object to be used for encryption

* ``bUI``: whether the UI is displayed

In the following example, a newly created document is encrypted for a list of recipients, using the ``encryptUsingPolicy`` method, by choosing and applying a security policy. A Policy Server must be configured for publishing before running this example.

::

      // Create the new document
      var myDoc = app.newDoc();
          
      // Choose the list of recipients
      var recipients = [{
          userEntities: [
              {email: "user1@example.com"},
              {email: "user2@example.com"},
              {email: "user3@example.com"}
          ]
      }];
      
      // Encrypt the document using the security policy:
      var results = myDoc.encryptUsingPolicy({
          oPolicy: "adobe_secure_for_recipients",
          oGroups: recipients
      });
      
      if ( results.errorCode == 0) 
          console.println("The policy applied was: " + results.policyApplied.name);

Adding security to document attachments
---------------------------------------

You can add security to a document by encrypting its attachments and enclosing them in an *eEnvelope*. To do this with JavaScript, invoke the Doc object ``addRecipientListCryptFilter`` method, which is used to encrypt data objects and accepts two parameters:

* ``oCryptFilter``: the name of the encryption filter

* ``oGroup``: an array of ``Group`` objects representing the intended recipients

.. note::

   For Acrobat 7.0, the value of ``cCryptFilter`` must be the string ``DefEmbeddedFile``, beginning with Acrobat 8, the value of ``cCryptFilter`` can be any string.

Thus, an eEnvelope is a PDF file that contains encrypted attachments. The name of the crypt filter, which represents the recipient list, is defined and used when importing the attachment. An example is given below:

::

      // Create instructions to be used in the recipient dialog box:
      var note = "Select the recipients. Each must have ";
      note += "an email address and a certificate.";
      
      // Specify the remaining options used in the recipient dialog box:
      var options = {
          bAllowPermGroups: false,
          cNote: note,
          bRequireEmail: true
      };
      
      // Obtain the intended recipient Group objects:
      var groupArray = security.chooseRecipientsDialog(options);
      
      // Open the eEnvelope document:
      var env = app.openDoc("/C/eEnvelopes/myeEnvelope.pdf");
      
      // Set up the crypt filter:
      env.addRecipientListCryptFilter("myFilter", groupArray);
      
      // Attach the current document to the eEnvelope:
      env.importDataObject("secureMail0", this.path, "myFilter");
      
      // Save the eEnvelope:
      env.saveAs("/C/output/outmail.pdf");

.. raw:: html

   <a name="92158"></a>

Digital IDs and certification methods
=====================================

It is possible to customize and extend the management and usage of digital IDs using JavaScript. In addition, it is possible to share digital ID certificates, build a list of trusted identities, and analyze the information contained within certificates.

Digital IDs
-----------

A digital ID is represented with a SignatureInfo object, which contains properties of the digital signature common to all handlers, in addition to other properties defined by public key security handlers. These additional properties are described in the following table.

SignatureInfo public key security handler properties

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - appearance
     - User-configured appearance name.

   * - certificates
     - Chain of certificates from signer to certificate authority.

   * - contactInfo
     - User-specified contact information for determining trust.

   * - byteRange
     - Bytes covered by this signature.

   * - docValidity
     - Validity status of the document byte range digest.

   * - idPrivValidity
     - Validity of the identity of the signer.

   * - idValidity
     - Numerical validity of the identity of the signer.

   * - objValidity
     - Validity status of the object digest.

   * - trustFlags
     - What the signer is trusted for.

   * - password
     - Password used to access the private key for signing.

About digital ID providers
~~~~~~~~~~~~~~~~~~~~~~~~~~

A digital ID provider is a trusted 3rd party, or *certificate authority*. that verifies the digital ID owner's identity, and issues the certificate or private key. The ``certificates`` property of the SignatureInfo object contains an array of certificates that reflects the certificate chain leading from the signer's certificate to that issued by the certificate authority. Thus, you can inspect the details of the certificate issued by the digital ID provider (such as its ``usage`` property).

For example, the following code encrypts the current document for everyone in the address book. It does this by creating a collection of certificates suitable for encrypting documents, that are filtered from the overall collection. This is accomplished by examining all the certificates in the address book and excluding those entries containing sign-only certificates, CA certificates, no certificates, or certificates otherwise unsuitable for encryption:

::

      // Obtain the security handler:
      var eng = security.getHandler("Adobe.AAB");
      
      // Connect to the directory containing the certificates:
      var dc = eng.directories[0].connect();
      
      // Obtain the list of all recipients in the directory:
      var rcp = dc.search();
      
      // Create the filtered recipient list:
      var fRcp = new Array();
      
      // Populate the filtered recipient list:
      for (var i=0; i<rcp.length; i++) {
          if (rcp[i].defaultEncryptCert &&
               rcp[i].defaultEncryptCert.usage.endUserEncryption)
              fRcp[fRcp.length] = rcp[i];
          if (rcp[i].certificates) {
              for (var j=0; j<rcp[i].certificates.length; j++)
                  if (rcp[i].certificates[j].usage.endUserEncryption)
                      fRcp[fRcp.length] = rcp[i];
          }
      }
      
      // Now encrypt for the filtered recipient list:
      this.encryptForRecipients({ oGroups:[{userEntities: fRcp}] });

Creating a digital ID (default certificate security)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you would like to create a certificate for a new user, invoke the ``securityHandler`` object ``newUser`` method, which supports enrollment with the ``Adobe.PPKLite`` and ``Adobe.PPKMS`` security handlers by creating a new self-sign digital ID, and prevents the user from overwriting the file. It accepts the following parameters:

* ``cPassword``: the password needed to access the digital ID file

* ``cDIPath``: the location of the digital ID file

* ``oRDN``: the *relative distinguished name* represented as an ``RDN`` object) containing the issuer or subject name for the certificate

* ``oCPS``: the certificate policy information, which is a generic object containing the following properties:

* ``oid``: the certificate policy object identifier

* ``url``: URL pointing to detailed policy information

* ``notice``: shortened version of detailed policy information

* ``bUI``: determines whether to use the user interface to enroll the new user

The relative distinguished name is a generic object containing the properties shown in the following table.

RDN object

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - c
     - Country or region

   * - cn
     - Common name

   * - o
     - Organization name

   * - ou
     - Organization unit

   * - e
     - Email address

An example is given below:

::

      // Obtain the security handler:
      var ppklite = security.getHandler("Adobe.PPKLite");
      
      // Create the relative distinguished name:
      var newRDN = {
          cn: "newUser",
          c: "US"
      };
      
      // Create the certificate policy information:
      var newCPS = {
          oid: "1.2.3.4.5",
          url: "www.example.com/newCPS.html",
          notice: "This is a self-generated certificate"
      };
      
      // Create the new user's certificate:
      security.newUser({
          cPassword: "newUserPassword",
          cDIPath: "/C/temp/newUser.pfx",
          oRDN: newRDN,
          oCPS: newCPS,
          bUI: false
      });

The ``securityHandler`` object has a ``DigitalIDs`` property that contains the certificates associated with the currently selected digital IDs for the security handler. The ``DigitalIDs`` property is a generic object containing the following properties:

* ``oEndUserSignCert``: the certificate used when signing

* ``oEndUserCryptCert``: the certificate used when encrypting

* ``certs``: an array of certificates corresponding to all the digital IDs

* ``stores``: an array of strings (one for every ``certificate`` object) indicating where the digital IDs are stored

You can use the ``security`` object ``exportToFile`` method to save a certificate file to disk. In the following example, the signing certificate is written to disk:

::

      // Obtain the security handler:
      var sh = security.getHandler("Adobe.PPKMS");
      
      // Obtain the certificates:
      var ids = sh.DigitalIDs;
      
      // Write the signing certificate to disk:
      security.exportToFile(ids.oEndUserSignCert, "/C/mySignCert.cer");

Using digital IDs (default certificate security)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As you learned earlier, you can obtain signature information from a signature field by invoking its ``signatureInfo`` method. In addition to this, you can also use an existing certificate to create a digital ID. To do this, obtain the certificate from an existing, signed field and create the relative distinguished name using the information it contains:

::

      // Obtain the security handler:
      var ppklite = security.getHandler("Adobe.PPKLite");
      
      // Obtain the signature field:
      var f = this.getField("existingSignature");
      
      // Validate the signature:
      f.signatureValidate();
      
      // Obtain the signature information:
      var sigInfo = f.signatureInfo();
      
      // Obtain the certificates and distinguished name information
      var certs = sigInfo.certificates;
      var rdn = certs[0].subjectDN;
      
      // Now create the digital signature:
      ppklite.newUser({
          cPassword: "newUserPassword",
          cDIPath: "/C/temp/newUser.pfx",
          oRDN: rdn,
      });

Managing digital IDs (Windows certificate security)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A Directory object is a repository of user information, including public key certificates. On Windows, the ``Adobe.PPKMS`` security handler provides access to the directories created by the user through the Microsoft Active Directory Script Interface (ADSI). These are created sequentially with the names ``Adobe.PPKMS.ADSI.dir0``, ``Adobe.PPKMS.ADSI.dir1``, etc. In this case, the ``Adobe.PPKMS.ADSI`` directory handler includes the directory information object properties shown in the following table.

Adobe.PPKMS.ADSI directory handler object properties

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - server
     - The server hosting the data

   * - port
     - The port number (standard LDAP port is 389)

   * - searchBase
     - Used to narrow the search to a section of the directory

   * - maxNumEntries
     - Maximum number of entries retrieved from search

   * - timeout
     - Maximum time allowed for search

For example, the following code displays information for an existing directory:

::

      // Obtain the security handler:
      var ppkms = security.getHandler("Adobe.PPKMS");
      
      // Obtain the directory information object:
      var info = ppkms.directories[0].info;
      
      // Display some of the directory information:
      console.println("Directory: " + info.dirStdEntryName);
      console.println("Address: " + info.server + ":" + info.port);

Managing digital ID certificates
--------------------------------

This section contains a brief discussion on sharing digital ID certificates and extracting information from the certificate of a digital ID.

Sharing digital ID certificates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can share a self-signed digital ID certificate by exporting it as an FDF file. To do this, sign the FDF file by invoking the FDF object ``signatureSign`` method. The ``signatureSign`` method works similarly to that of the Doc object:

::

      // Obtain the security handler:
      var eng = security.getHandler("Adobe.PPKLite");
      
      // Access the digital ID:
      eng.login("myPassword", "/C/temp/myID.pfx");
      
      // Open the FDF:
      var myFDF = app.openFDF("/C/temp/myFDF.fdf");
      
      // Sign the FDF:
      if (!myFDF.isSigned) {
          // Sign the FDF
          myFDF.signatureSign({
              oSig: eng,
              nUI: 1,
              cUISignTitle: "Sign Embedded File FDF",
              cUISelectMsg: "Please select a digital ID"
          });
          
          // Save the FDF
          myFDF.save("/C/temp/myFDF.fdf");
      }

Building a list of trusted identities
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The trust level associated with a digital ID is stored in the ``trustFlags`` property defined in the ``signatureInfo`` object's public key security handler properties. The bits in this number indicate the level of trust associated with the signer and are valid only when the ``status`` property has a value of ``4``. These trust settings are derived from those in the recipient's trust database, such as the *Acrobat Address Book*.``Adobe.AAB``). The following bit assignments are described below:

* ``1``: trusted for signatures

* ``2``: trusted for certifying documents

* ``3``: trusted for dynamic content such as multimedia

* ``4``: Adobe internal use

* ``5``: the JavaScript in the PDF file is trusted to operate outside the normal PDF restrictions

Checking information on certificates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can obtain a certificates through the ``certificates`` property of a SignatureInfo object, that is returned by a call to the signature field's ``signatureInfo`` method. The certificate properties are described in the table `Certificate object properties <JS_Dev_Security.html#95193>`__ and the relative distinguished name properties are defined in the table `RDN object <JS_Dev_Security.html#84137>`__.

In the following example, the signer's common name, the certificate's serial number, and the distinguished name information are displayed:

::

      // Obtain the signature field:
      var f = this.getField("mySignatureField");
      
      // Validate the signature field:
      var status = f.signatureValidate();
      
      // Obtain the signature information
      var sigInfo = f.signatureInfo();
      
      // Obtain the certificate:
      var cert = sigInfo.certificates[0];
      
      console.println("signer's common name: " + cert.subjectCN);
      console.println("serial number: " + cert.serialNumber);
      
      // Distinguished name information:
      console.println("distinguished common name: " + cert.subjectDN.cn);
      console.println("distinguished organization: " + cert.subjectDN.o);

Task based topics
=================

This section contains a discussion of a few security-oriented tasks.

.. raw:: html

   <a name="92285"></a>

Disallowing changes in scripts
------------------------------

Go to File > Properties and select the Security tab. Set up either password or certificate security for the document by clicking Security Method and choosing either Password Security or Certificate Security. In the Permissions area of the dialog box that pops up, click Changes Allowed and select any of the options except Any Except Extracting Pages. You can verify that changes to scripts have been disabled by returning to the Security tab. In the Document Restrictions Summary portion, Changing the Document should be set to Not Allowed.

.. raw:: html

   <a name="87292"></a>

Hiding scripts
--------------

Go to File > Properties and select the Security tab. Set up either password or certificate security for the document by clicking Security Method and choosing either Password Security or Certificate Security. In the Permissions area of the dialog box that pops up, ensure that Enable Copying of Text, Images, and Other Content is unchecked. You can verify that changes to scripts have been disabled by returning to the Security tab. In the Document Restrictions Summary portion, Changing the Document should be set to Not Allowed.
