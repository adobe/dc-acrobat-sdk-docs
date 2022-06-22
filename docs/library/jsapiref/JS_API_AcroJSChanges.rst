******************************************************
New Features and Changes
******************************************************

This section summarizes the new features and changes introduced in Acrobat and earlier.

Acrobat XI changes
==================

For more information on the following changes, see the JavaScript for Acrobat API Reference and Developing Acrobat Applications Using JavaScript.

Changes to PrintParams object
-----------------------------

The ``colorOverride`` property of the ``PrintParams`` object is no longer supported.

Acrobat X changes
=================

For more information on the following changes, see the JavaScript for Acrobat API Reference and Developing Acrobat Applications Using JavaScript.

New JavaScript version
----------------------

This release supports JavaScript version 1.8.

Impact of Acrobat menu restructuring on JavaScript APIs
-------------------------------------------------------

Starting Acrobat X, the number of top-level menu items has been reduced. The menu items available from Acrobat X onwards are: File, Edit, View, Window, and Help. If any of your previous scripts referred to a top-level menu item that no longer exists, the reference will not work.

Starting Acrobat X, the toolbar commands are available through the Tools pane on the right side of the display. Accordingly, methods and properties to customize the toolbar such as ``app.addToolButton``, ``hideToolBarButton``, and ``removeToolButton``, now apply to the Tools pane area. For example, ``app.addToolButton`` adds a button to the Plugin Addon Tools panel in the Tools pane.

New util method
---------------

The new ``readFileIntoStream`` util method loads an external file into a JavaScript stream, optionally encodes it as base64, and returns the content as a base64 encoded stream.

Changes to search object
------------------------

The following changes have been made to the "search" object properties

-  The ``thesaurus`` and ``soundex`` properties have been removed
-  The ``legacySearch`` property is now deprecated and always returns false.

Changes to SearchExecuteQuery
-----------------------------

The following have been removed from ``nWordOptions`` parameter of ``SearchExecuteQuery`` :

-  ``kWordOptionSoundsLike``
-  ``kWordOptionThesaurus``

Function SearchIsLegacySearchAvailable deprecated
-------------------------------------------------

The function ``SearchIsLegacySearchAvailable`` has been deprecated and will always return false.

Enhancements to PDFOptPDFVersion
--------------------------------

The following have been added to ``PDFOptPDFVersion`` :

-  ``kPDFOptAcrobat9``
-  ``kPDFOptAcrobat10``

Enhancements to Doc object
--------------------------

In this release, the following enhancements have been made to the ``Doc`` object:

Enhancements to the getDataObjectContents method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A ``NotAllowedError`` is thrown and the method fails if it attempts to access the content of an embedded file attachment for which any of the following conditions is true (all file name extension matching is case-insensitive):

-  The attachment's file name extension is ".SWF". If a legitimate .SWF application or module run as part of Acrobat's Rich Media Annotation or PDF Portfolio navigator is allowed access to the content bytes of .SWF embedded file attachments, it is possible that the legitimate .SWF will load a malicious .SWF.

.. note::

   If you use the ``Data.MIMEType`` property to check whether a Data object represents a .SWF file, note that the MIME type for .SWF files is ``application/x-shockwave-flash``.

-  The attachment's file name extension is ".GIF", ".JPG", ".JPEG", or ".PNG" and the first three bytes of its content have the header signature of a .SWF file ("FWS" or "CWS"). The reason for this security restriction is that the same ``ActionScriptflash.display.Loader class load()`` method that can be used to load GIF, JPEG, and PNG images can also be used to load a SWF file. If a malicious SWF file's extension has been altered to that of one of these image types, the SWF could be loaded.

Enhancements to the SaveAs Method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following enhancements have been made to the ``SaveAs`` method of the ``Doc`` object:

New Values of cConvID
'''''''''''''''''''''

The following new values of cConvID have been added:

========================== ===============
Value                      Valid Extension
========================== ===============
``com.adobe.acrobat.docx`` ``docx``
``com.adobe.acrobat.xlsx`` ``xlsx``
========================== ===============

Deprecated Values of cConvID
''''''''''''''''''''''''''''

The conversion IDs listed below are deprecated in Acrobat X. They are not registered but (only when used with the JavaScript ``doc.saveAs`` call) are internally mapped to valid, registered conversion IDs. Support for the deprecated conversion IDs will be fully removed in subsequent Acrobat releases.

========================================== ==========================
Deprecated cConvID                         Equivalent Valid cConvID
========================================== ==========================
``com.adobe.acrobat.html-3-20``            ``com.adobe.acrobat.html``
``com.adobe.acrobat.htm l- 4-01-css-1-00`` ``com.adobe.acrobat.html``
========================================== ==========================

New timestampSign and certifyInvisibleSign Doc methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For more information on the new Doc methods ``timestampSign and certifyInvisibleSign``, see the next section, Signature support for Emerging PAdES ETSI ESI standard.

.. raw:: html

   <a name="84989"></a>

Signature support for Emerging PAdES ETSI ESI standard
------------------------------------------------------

The European Telecommunications Standards Institute (ETSI) has published a multi-part standard that defines a series of profiles for PAdES—Advanced Electronic Signatures for Portable Document Format (PDF) documents. For more information, see: http://www.etsi.org/website/newsandevents/200909_electronicsignature.aspx

The standard includes a new feature to "timestamp the document", which adds an invisible timestamp signature to a document. This release provides a corresponding JavaScript ``Doc`` method to do the same. Additionally, the release provides a ``Doc`` method to apply an invisible certification (this is already available as a menu item in Acrobat and is now supported in JavaScript as well). Both these methods take the same parameters as ``field.signatureSign``, but are at the ``Doc`` level. These methods can only be executed during a batch, console, or application initialization event.

Adding an invisible timestamp
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The new ``timestampSign`` Doc method adds an invisible timestamp to a document.

NOTE: This method is not available in Reader.

Adding an invisible Certification
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The new ``certifyInvisibleSign`` Doc method adds an invisible certification to a document.

For more information on these methods, see the description of the ``Doc`` object in the JavaScript API reference.

ADBC Support Removed from Documentation
---------------------------------------

ADBC is not supported since the previous release of Acrobat. In this release, the section on ADBC support has been removed from Acrobat SDK documentation.

Acrobat 9.0 changes
===================

Important: For the Mac OS, the location of the user JavaScript folder has changed. Developers may locate this folder by executing the command ``app.getPath("user",`` ``"javascript")`` in the JavaScript debugger console window. Any user folder JavaScript files need to be moved to the new location.

The ``util``. `crackURL <JS_API_AcroJS.html#98835>`__ method can now break a URL that uses IPv6 addressing into its components. A new property, ``nURLType``, is added to the return value object.

The two field properties `display <JS_API_AcroJS.html#10117>`__ and `hidden <JS_API_AcroJS.html#29686>`__ no longer require forms rights for them to function in Adobe Reader.

There are two new methods. The app. `loadPolicyFile <JS_API_AcroJS.html#76382>`__ method is used to specify a cross-domain policy file and the Doc. `applyRedactions <JS_API_AcroJS.html#64761>`__ method applies redaction marks.

Two new printing parameters were introduced with version 8, but were undocumented. The properties `DuplexType <JS_API_AcroJS.html#24870>`__ and `NumCopies <JS_API_AcroJS.html#58768>`__ of the `PrintParams <JS_API_AcroJS.html#43354>`__ object allow users to set the duplex mode and the number of copies to be printed. There is also a change of status of the `printerName <JS_API_AcroJS.html#92611>`__, this property is now available for the Mac OS. The description of the choice of the printer when ``printerName`` is set to the empty string has changed as well.

The property Doc. ``nocache``, introduced in version 7.0, is now undefined and is removed from the documentation. Beginning with version 8.0, within a browser, when a user navigates away from a page containing a PDF, Acrobat and Adobe Reader now exit very quickly and any temporary data is deleted. If the user navigates back to the PDF, any form data is gone.

There is a new ``Authors`` property to the `info <JS_API_AcroJS.html#19596>`__ object. This property should be used with a semi-colon delimited list of multiple authors.

Acrobat 9 introduces JavaScript API in support of PDF portfolios (also called portable collections and PDF packages). These are list in the table below.


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - App object
     - methods:  `newCollection <JS_API_AcroJS.html#10067>`__

   * - Doc object
     - properties:  `collection <JS_API_AcroJS.html#22209>`__

   * - Data object
     - methods:  `getFieldValue <JS_API_AcroJS.html#72277>`__  `setFieldValue <JS_API_AcroJS.html#16110>`__

   * - `Collection <JS_API_AcroJS.html#26749>`__ object
     - properties:  `fields <JS_API_AcroJS.html#67804>`__  `initialDoc <JS_API_AcroJS.html#10634>`__  `initialView <JS_API_AcroJS.html#11002>`__  methods:  `addField <JS_API_AcroJS.html#23829>`__  `getField <JS_API_AcroJS.html#87286>`__  `removeField <JS_API_AcroJS.html#70653>`__

   * - `collectionField <JS_API_AcroJS.html#31572>`__ object
     - properties:  `name <JS_API_AcroJS.html#50349>`__  `order <JS_API_AcroJS.html#70457>`__  `readOnly <JS_API_AcroJS.html#30423>`__  `sort <JS_API_AcroJS.html#94450>`__  `text <JS_API_AcroJS.html#56468>`__  `type <JS_API_AcroJS.html#20646>`__


Acrobat 6.0 (and Later) Compatible Media relies on the underlying operating system to locate and launch a multimedia player residing on the user's system; however, Acrobat 9.0 natively supports Flash video (FLV) and Flash applications (SWF) which can be embedded in, or streamed to, a PDF document. Native support for Flash enables reliable cross-platform playback. No additional media player or specific codec is necessary.

Acrobat 6.0 (and Later) Compatible Media is superseded by the multimedia of Acrobat 9.0, which uses rich media annotations. Developers of PDFs with multimedia assets are, therefore, strongly encouraged to use the rich media annotations of Acrobat 9.

Below is a listing of the JavaScript API that support rich media annotations.

.. _section-1:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - Doc object
     - methods:  `getAnnotRichMedia <JS_API_AcroJS.html#16446>`__  `getAnnotsRichMedia <JS_API_AcroJS.html#55638>`__

   * - `AnnotRichMedia <JS_API_AcroJS.html#99657>`__ object
     - properties:  `activated <JS_API_AcroJS.html#35022>`__  `context3D <JS_API_AcroJS.html#94284>`__  `name <JS_API_AcroJS.html#65756>`__  `page <JS_API_AcroJS.html#67124>`__  `rect <JS_API_AcroJS.html#62225>`__  `subtype <JS_API_AcroJS.html#53504>`__  methods:  `callAS <JS_API_AcroJS.html#36391>`__


Acrobat 8.1 changes
===================

There are new security restrictions for the `search <JS_API_AcroJS.html#68641>`__ object's ``addIndex``, ``query``, and ``removeIndex`` methods, as well as the `spell <JS_API_AcroJS.html#11682>`__ object's ``removeWord`` method. For more information, see those method descriptions.

Acrobat 8.0 changes
===================

The JavaScript interpreter now supports E4X, ECMA-357. "EMCAScript for XML (E4X) Specification", *http://www.ecma-international/publications/standards/Ecma-357.htm* , documents this specification. An example following `metadata <JS_API_AcroJS.html#92040>`__ illustrates E4X usage.

The JavaScript category in the Preferences dialog box (Ctrl + K) has a new security check box, "Enable global object security policy".

-  When checked, the default, each time a global variable is written to, the origin which set it is remembered. Only origins that match can then access the variable. For files, this means only the file that set it, having the same path it had when the variable was set, can access the variable. For documents from URLs, it means only the web host which set it can access the variable.

There is an important exception to the restrictions described above. Global variables can be defined and accessed in a privileged context, in the console, in a batch sequence and in folder JavaScript. For more information on privileged contexts, see ` <JS_API_AcroJSPreface.html#76421>`__.

-  When not checked, documents from different origins are permitted to access the variable; this is the behavior previous to version 8.0.

See the section on the `global <JS_API_AcroJS.html#12440>`__ object for additional details and examples.

There is a new restriction on the use of ``app.execMenuItem`` to a list of safe menu items. See the security note.

The following properties and methods are introduced in Acrobat 8.0:

.. _section-2:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `Certificate <JS_API_AcroJS.html#44855>`__ object
     - properties:  `privateKeyValidityEnd <JS_API_AcroJS.html#62254>`__  `privateKeyValidityStart <JS_API_AcroJS.html#63122>`__  `validityEnd <JS_API_AcroJS.html#74572>`__ (First introduced in version 7.0.5, but undocumented.)  `validityStart <JS_API_AcroJS.html#55071>`__ (First introduced in version 7.0.5, but undocumented.)

   * - `CertificateSpecifier Object <JS_API_AcroJS.html#83422>`__
     - properties ``:``   ```subjectDN`` <JS_API_AcroJS.html#63090>`__  ```keyUsage`` <JS_API_AcroJS.html#11614>`__  ```urlType`` <JS_API_AcroJS.html#77120>`__  Expanded description of the ``url`` property.  Added four new bit flags to the ``flags`` property: ``subjectDN``, ``issuerDN``, ``keyUsage``, ``url``. 

   * - `colorConvertAction <JS_API_AcroJS.html#40112>`__ object
     - properties:  `action <JS_API_AcroJS.html#60292>`__  `alias <JS_API_AcroJS.html#95592>`__  `colorantName <JS_API_AcroJS.html#66014>`__  `convertIntent <JS_API_AcroJS.html#41068>`__  `convertProfile <JS_API_AcroJS.html#84007>`__  `embed <JS_API_AcroJS.html#29705>`__  `isProcessColor <JS_API_AcroJS.html#85716>`__  `matchAttributesAll <JS_API_AcroJS.html#68063>`__  `matchAttributesAny <JS_API_AcroJS.html#55787>`__  `matchIntent <JS_API_AcroJS.html#23732>`__  `matchSpaceTypeAll <JS_API_AcroJS.html#45157>`__  `matchSpaceTypeAny <JS_API_AcroJS.html#78757>`__  `preserveBlack <JS_API_AcroJS.html#36011>`__  `useBlackPointCompensation <JS_API_AcroJS.html#66694>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `xfa <JS_API_AcroJS.html#55666>`__ (First introduced in version 6.0.2, but undocumented.)  `XFAForeground <JS_API_AcroJS.html#40320>`__  methods:  `colorConvertPage <JS_API_AcroJS.html#87010>`__  `embedOutputIntent <JS_API_AcroJS.html#79258>`__  `exportAsFDFStr <JS_API_AcroJS.html#71999>`__  `exportAsXFDFStr <JS_API_AcroJS.html#49722>`__  `getColorConvertAction <JS_API_AcroJS.html#82396>`__

   * - `Net <JS_API_AcroJS.html#78835>`__ object
     - properties:  `SOAP <JS_API_AcroJS.html#63722>`__  (``Net.SOAP`` has properties and methods aliased with ``SOAP.wireDump``, ``SOAP.connect``, ``SOAP.request``, ``SOAP.response``.)   `Discovery <JS_API_AcroJS.html#17451>`__  (``Net.Discovery`` has methods aliased with ``SOAP.queryServices`` and ``SOAP.resolveService``.)   `HTTP <JS_API_AcroJS.html#85823>`__  methods:  `streamDecode <JS_API_AcroJS.html#58022>`__  `streamDigest <JS_API_AcroJS.html#26234>`__  `streamEncode <JS_API_AcroJS.html#14265>`__

   * -  `Net.HTTP <JS_API_AcroJS.html#37414>`__  object
     - methods:  `request <JS_API_AcroJS.html#99486>`__

   * - `PrintParams <JS_API_AcroJS.html#43354>`__
     - properties:  `booklet <JS_API_AcroJS.html#75229>`__  `constants <JS_API_AcroJS.html#12065>`__. bookletBindings  `constants <JS_API_AcroJS.html#12065>`__. bookletDuplexModes  `constants <JS_API_AcroJS.html#12065>`__.handling.booklet ( See  `pageHandling <JS_API_AcroJS.html#89810>`__ for a description.) 

   * - `RDN <JS_API_AcroJS.html#79704>`__ object
     - properties: Added 22 properties to the RDN object:  ``businessCategory``, ``countryOfCitizenship``, ``countryOfResidence``, ``dateOfBirth``, ``dc``, ``dnQualifier``, ``gender``, ``generationQualifier``, ``givenName``, ``initials``, ``l``, ``name``, ``nameAtBirth``, ``placeOfBirth``, ``postalAddress``, ``postalCode``, ``pseudonym``, ``serialNumber``, ``sn``, ``st``, ``street``, ``title`` 

   * - `SecurityHandler <JS_API_AcroJS.html#25690>`__ object
     - properties: The following three properties were previously undocumented.  `docDecrypt <JS_API_AcroJS.html#33360>`__  `docEncrypt <JS_API_AcroJS.html#32731>`__  `validateFDF <JS_API_AcroJS.html#51812>`__

   * - `SeedValue Object <JS_API_AcroJS.html#64991>`__
     - Added three new flags: ``legalAttestations``, ``shouldAddRevInfo``, ``digestMethod``.   Change of behavior of the ``reasons`` property.  Added the ``digestMethod`` property.  Change in wording of the description of the ``version`` property.  Added the ``shouldAddRevInfo`` property.

   * -  `SignatureInfo <JS_API_AcroJS.html#51916>`__  object
     - properties:  digestMethod


The following properties and methods are modified in Acrobat 8.0:

.. _section-3:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `app <JS_API_AcroJS.html#81243>`__ object
     - methods:  `openDoc <JS_API_AcroJS.html#61826>`__ (``cDest`` parameter added)

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - methods:  `addAnnot <JS_API_AcroJS.html#92733>`__ (New default values for the ``author`` property.)  `addRecipientListCryptFilter <JS_API_AcroJS.html#27295>`__ (Added note for Acrobat 7.0.)  `getLegalWarnings <JS_API_AcroJS.html#27797>`__ (No longer dirties document. Return value changed.)  `importTextData <JS_API_AcroJS.html#92335>`__ (Can be only executed during a console or batch event.)

   * - FDF object
     - methods:  `addEmbeddedFile <JS_API_AcroJS.html#10402>`__ (Updated description of the ``nSaveOption`` parameter for version 8.)

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - methods:  `buttonImportIcon <JS_API_AcroJS.html#27194>`__ (Can be executed only during a console or batch event)

   * -  `FullScreen <JS_API_AcroJS.html#16267>`__  object
     - properties:  `escapeExits <JS_API_AcroJS.html#54221>`__ (Can be set to ``false`` only during console and batch events)

   * - `LoginParameters Object <JS_API_AcroJS.html#81900>`__
     - Modified wording of the ``cURI`` and ``cUserId`` properties.

   * - `submitForm <JS_API_AcroJS.html#20780>`__ method
     - The ``cPassword`` parameter can no longer be used. As of Acrobat 8.0, you cannot create password-encrypted FDF files. If this parameter is used, a form trying to submit a password-encrypted FDF will throw an ``ESErrorInvalidArgs`` exception and the form submission will not occur.


Acrobat 7.0.5 changes
=====================

Columns 5 and 6 of the quick bars have been removed.

The following properties and methods were introduced in Acrobat 7.0.5:

.. _section-4:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `Collab <JS_API_AcroJS.html#29350>`__ object
     - methods:  `documentToStream <JS_API_AcroJS.html#77375>`__

   * - `Data <JS_API_AcroJS.html#69212>`__ object
     - properties:  `description <JS_API_AcroJS.html#89891>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `hostContainer <JS_API_AcroJS.html#53327>`__  `isModal <JS_API_AcroJS.html#96424>`__  `viewState <JS_API_AcroJS.html#36404>`__  methods:  `addRequirement <JS_API_AcroJS.html#17850>`__  `removeRequirement <JS_API_AcroJS.html#63100>`__

   * - `Embedded PDF <JS_API_AcroJS.html#92005>`__ object
     - properties:  `messageHandler <JS_API_AcroJS.html#71300>`__  method:  `postMessage <JS_API_AcroJS.html#48590>`__

   * - `HostContainer <JS_API_AcroJS.html#29659>`__ object
     - properties:  `messageHandler <JS_API_AcroJS.html#85023>`__  methods:  `postMessage <JS_API_AcroJS.html#90555>`__

   * - `util <JS_API_AcroJS.html#70434>`__ object
     - methods:  `crackURL <JS_API_AcroJS.html#98835>`__


The following properties and methods were modified in Acrobat 7.0.5:

.. _section-5:

.. list-table::

   * - `SOAP <JS_API_AcroJS.html#56402>`__ object
     - methods:  `request <JS_API_AcroJS.html#74380>`__ (``cRequestStyle`` and ``cContent`` parameters added)  `response <JS_API_AcroJS.html#71544>`__ (``cRequestStyle`` and ``cContent`` parameters added)


Acrobat 7.0 changes
===================

The *Acrobat Multimedia JavaScript Reference* , which appeared as a separate document in version 6.0.2, was merged into the *Acrobat JavaScript Scripting Reference* , now named *JavaScript for Acrobat API Reference* . See the section `Introduced in Acrobat 6.0.2 <JS_API_AcroJSChanges.html#30696>`__ for a listing of all multimedia JavaScript objects, properties and methods.

Execution of JavaScript through a menu event is no longer privileged. There is now support for executing privileged code in a non-privileged context. See ` <JS_API_AcroJSPreface.html#76421>`__ for details.

In versions of Acrobat earlier than 7.0, the JavaScript files ``AForm.js``, ``ADBC.js``, ``Annots.js``, ``AnWizard.js``, ``media.js``, and ``SOAP.js`` resided in the App JavaScript folder. Beginning with Acrobat 7.0, these files are not shipped with Acrobat Pro, Acrobat Standard or Adobe Reader. In their place, a precompiled bytecode is used to improve performance. The ``debugger.js`` file in the App folder is not included in the bytecode.

Files in the User JavaScript folder are not included in the precompiled bytecode file.

It is recommended that users put their own ``.js`` files in the user JavaScript folder, the same place where ``glob.js`` resides. JavaScript code that sets up menu items (`addMenuItem <JS_API_AcroJS.html#52015>`__ ) should be put in ``config.js`` in the User JavaScript folder. The location of this folder can be found programmatically by executing ``app.getPath("user","javascript")`` from the console.

Adobe Reader now has a console window. Under Edit > Preferences > JavaScript select Show Console on Errors and Messages. In addition to errors and exceptions, the console can also be opened programmatically with ``console.show()``. See the `console <JS_API_AcroJS.html#48998>`__ object for a few other details.

The debugging capability of the JavaScript Debugging window can be made available for Adobe Reader for the Windows and Mac OS platforms. To debug within Adobe Reader, the JavaScript file ``debugger.js`` must be installed, and the Windows registry must be edited appropriately. See ` <../AcroJSGuide/JS_Dev_Overview.html#50777>`__ for the technical details.

.. raw:: html

   <a name="38168"></a>

Introduced in Acrobat 7.0
-------------------------

The following properties and methods were introduced in Acrobat 7.0.

.. _section-6:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `Alerter <JS_API_AcroJS.html#53810>`__ object
     - methods:  `dispatch <JS_API_AcroJS.html#41501>`__

   * - ` <JS_API_AcroJS.html#41213>`__ object
     - properties:  `callout <JS_API_AcroJS.html#99031>`__  `caretSymbol <JS_API_AcroJS.html#41597>`__ *a*  `creationDate <JS_API_AcroJS.html#59581>`__ *a*  `dash <JS_API_AcroJS.html#48107>`__ *b*  `delay <JS_API_AcroJS.html#44387>`__ *b*  `doCaption <JS_API_AcroJS.html#42571>`__  `intent <JS_API_AcroJS.html#42956>`__  `leaderExtend <JS_API_AcroJS.html#88415>`__  `leaderLength <JS_API_AcroJS.html#18708>`__  `lineEnding <JS_API_AcroJS.html#46482>`__  `opacity <JS_API_AcroJS.html#91716>`__ *b*  `refType <JS_API_AcroJS.html#77065>`__  `richDefaults <JS_API_AcroJS.html#95750>`__ *a*  `seqNum <JS_API_AcroJS.html#46593>`__ *b*  `state <JS_API_AcroJS.html#11707>`__ *a*  `stateModel <JS_API_AcroJS.html#51718>`__ *a*  `style <JS_API_AcroJS.html#29533>`__  `subject <JS_API_AcroJS.html#49482>`__ *a*

   * - `Annot3D <JS_API_AcroJS.html#98081>`__ object
     - properties:  `activated <JS_API_AcroJS.html#87772>`__  `context3D <JS_API_AcroJS.html#38599>`__  `innerRect <JS_API_AcroJS.html#98501>`__  `name <JS_API_AcroJS.html#29343>`__  `page <JS_API_AcroJS.html#53981>`__  `rect <JS_API_AcroJS.html#24770>`__

   * - `app <JS_API_AcroJS.html#81243>`__ object
     - properties:  `constants <JS_API_AcroJS.html#99849>`__  methods:  `beginPriv <JS_API_AcroJS.html#93097>`__  `browseForDoc <JS_API_AcroJS.html#38492>`__  `endPriv <JS_API_AcroJS.html#77464>`__  `execDialog <JS_API_AcroJS.html#27233>`__  `launchURL <JS_API_AcroJS.html#88818>`__  `trustedFunction <JS_API_AcroJS.html#32666>`__  `trustPropagatorFunction <JS_API_AcroJS.html#79731>`__

   * - `Dialog <JS_API_AcroJS.html#26032>`__ object
     - methods:  `enable <JS_API_AcroJS.html#83122>`__  `end <JS_API_AcroJS.html#99912>`__  `load <JS_API_AcroJS.html#32700>`__  `store <JS_API_AcroJS.html#63111>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `docID <JS_API_AcroJS.html#34893>`__ *a*  `dynamicXFAForm <JS_API_AcroJS.html#38772>`__  `external <JS_API_AcroJS.html#49680>`__  `hidden <JS_API_AcroJS.html#66824>`__  `mouseX <JS_API_AcroJS.html#20930>`__  `mouseY <JS_API_AcroJS.html#22578>`__  `noautocomplete <JS_API_AcroJS.html#33664>`__  ``nocache (removed in version 9)``  `requiresFullSave <JS_API_AcroJS.html#59354>`__  methods:  `addWatermarkFromFile <JS_API_AcroJS.html#85679>`__  `addWatermarkFromText <JS_API_AcroJS.html#73135>`__  `embedDocAsDataObject <JS_API_AcroJS.html#62491>`__  `encryptUsingPolicy <JS_API_AcroJS.html#41211>`__  `getAnnot3D <JS_API_AcroJS.html#54780>`__  `getAnnots3D <JS_API_AcroJS.html#86665>`__  `getDataObjectContents <JS_API_AcroJS.html#42001>`__  `getOCGOrder <JS_API_AcroJS.html#78739>`__  `openDataObject <JS_API_AcroJS.html#51160>`__  `removeScript <JS_API_AcroJS.html#89341>`__  `setDataObjectContents <JS_API_AcroJS.html#44192>`__  `setOCGOrder <JS_API_AcroJS.html#53506>`__

   * - `Doc.media <JS_API_AcroJS.html#69910>`__ object
     - methods:  `getOpenPlayers <JS_API_AcroJS.html#65571>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - methods:  `signatureGetModifications <JS_API_AcroJS.html#63549>`__

   * - `OCG <JS_API_AcroJS.html#66402>`__ object
     - properties:  `constants <JS_API_AcroJS.html#78529>`__  `initState <JS_API_AcroJS.html#34918>`__  `locked <JS_API_AcroJS.html#16397>`__  methods:  `getIntent <JS_API_AcroJS.html#71160>`__  `setIntent <JS_API_AcroJS.html#15064>`__

   * - `PlayerInfo <JS_API_AcroJS.html#58967>`__ object
     - methods:  `honors <JS_API_AcroJS.html#54413>`__

   * - `PrintParams <JS_API_AcroJS.html#43354>`__ object
     - properties:  `nUpAutoRotate <JS_API_AcroJS.html#87255>`__  `nUpNumPagesH <JS_API_AcroJS.html#90256>`__  `nUpNumPagesV <JS_API_AcroJS.html#27311>`__  `nUpPageBorder <JS_API_AcroJS.html#90998>`__  `nUpPageOrder <JS_API_AcroJS.html#93690>`__

   * - `search <JS_API_AcroJS.html#68641>`__ object
     - properties:  `attachments <JS_API_AcroJS.html#22722>`__  `ignoreAccents <JS_API_AcroJS.html#85878>`__  `objectMetadata <JS_API_AcroJS.html#87907>`__  `proximityRange <JS_API_AcroJS.html#26700>`__

   * - `security <JS_API_AcroJS.html#79993>`__ object
     - `security constants <JS_API_AcroJS.html#66342>`__  methods:  `chooseSecurityPolicy <JS_API_AcroJS.html#20074>`__  `getSecurityPolicies <JS_API_AcroJS.html#45284>`__

   * - `SecurityPolicy <JS_API_AcroJS.html#30747>`__ object
     - `SecurityPolicy properties <JS_API_AcroJS.html#77960>`__

   * - `SOAP <JS_API_AcroJS.html#56402>`__ object
     - methods:  `queryServices <JS_API_AcroJS.html#74868>`__  `resolveService <JS_API_AcroJS.html#96557>`__  `streamDigest <JS_API_AcroJS.html#22036>`__

   * - `util <JS_API_AcroJS.html#70434>`__ object
     - methods:  `iconStreamFromIcon <JS_API_AcroJS.html#71009>`__  `streamFromString <JS_API_AcroJS.html#10740>`__  `stringFromStream <JS_API_AcroJS.html#25458>`__

   * - `XMLData <JS_API_AcroJS.html#43545>`__ object
     - methods:  `applyXPath <JS_API_AcroJS.html#36467>`__  `parse <JS_API_AcroJS.html#63609>`__

   * - a. Present in version 6.0, documented in version 7.0.b. Present in version 5.0, documented in version 7.0.
     - 


Modified in Acrobat 7.0
-----------------------

The following properties and methods were changed or enhanced:

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `app <JS_API_AcroJS.html#81243>`__ object
     - methods:  `addToolButton <JS_API_AcroJS.html#99640>`__  `execMenuItem <JS_API_AcroJS.html#25717>`__  `getPath <JS_API_AcroJS.html#92839>`__  `mailGetAddrs <JS_API_AcroJS.html#75294>`__  `openDoc <JS_API_AcroJS.html#61826>`__

   * - `console <JS_API_AcroJS.html#48998>`__ object
     - The console window is now available in Adobe Reader.

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - methods:  `createTemplate <JS_API_AcroJS.html#36567>`__  `mailDoc <JS_API_AcroJS.html#56439>`__  `print <JS_API_AcroJS.html#71443>`__  `saveAs <JS_API_AcroJS.html#34461>`__  `submitForm <JS_API_AcroJS.html#20780>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - methods:  `signatureSetSeedValue <JS_API_AcroJS.html#65475>`__

   * - `Index <JS_API_AcroJS.html#95590>`__ object
     - methods:  `build <JS_API_AcroJS.html#15721>`__

   * - `OCG <JS_API_AcroJS.html#66402>`__ object
     - properties:  `name <JS_API_AcroJS.html#90593>`__

   * - `PrintParams <JS_API_AcroJS.html#43354>`__ object
     - properties:  `pageHandling <JS_API_AcroJS.html#89810>`__

   * - `search <JS_API_AcroJS.html#68641>`__ object
     - properties:  `indexes <JS_API_AcroJS.html#96142>`__

   * - `security <JS_API_AcroJS.html#79993>`__ object
     - properties:  `handlers <JS_API_AcroJS.html#27159>`__  methods:  `getHandler <JS_API_AcroJS.html#71913>`__

   * - `SecurityHandler <JS_API_AcroJS.html#25690>`__ object
     - properties:  `digitalIDs <JS_API_AcroJS.html#69297>`__  methods:  `login <JS_API_AcroJS.html#75651>`__  `newUser <JS_API_AcroJS.html#96919>`__

   * - `SOAP <JS_API_AcroJS.html#56402>`__ object
     - methods:  `connect <JS_API_AcroJS.html#56159>`__  `request <JS_API_AcroJS.html#74380>`__

   * - `spell <JS_API_AcroJS.html#11682>`__ object
     - The ``Spell`` object is not available in Adobe Reader 7.0 or later.  methods:  `addWord <JS_API_AcroJS.html#47325>`__

   * - `util <JS_API_AcroJS.html#70434>`__ object
     - methods:  `printd <JS_API_AcroJS.html#84295>`__


Acrobat 6.0 changes
===================

The notion of a safe path was introduced for this version of Acrobat. See ` <JS_API_AcroJSPreface.html#63828>`__ for details.

Introduced in Acrobat 6.0
-------------------------

The following properties and methods were introduced in Acrobat 6:

.. _section-8:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - ADBC object
     - SQL types

   * - `AlternatePresentation <JS_API_AcroJS.html#15210>`__ object
     - properties:  `active <JS_API_AcroJS.html#45263>`__  `type <JS_API_AcroJS.html#39659>`__  methods:  `start <JS_API_AcroJS.html#63957>`__  `stop <JS_API_AcroJS.html#40183>`__

   * - ` <JS_API_AcroJS.html#41213>`__ object
     - properties:  `borderEffectIntensity <JS_API_AcroJS.html#14280>`__  `borderEffectStyle <JS_API_AcroJS.html#98183>`__  `inReplyTo <JS_API_AcroJS.html#58242>`__  `richContents <JS_API_AcroJS.html#52718>`__  `toggleNoView <JS_API_AcroJS.html#70681>`__  methods:  `getStateInModel <JS_API_AcroJS.html#88159>`__  `transitionToState <JS_API_AcroJS.html#92934>`__

   * - `app <JS_API_AcroJS.html#81243>`__ object
     - properties:  `fromPDFConverters <JS_API_AcroJS.html#72896>`__  `printColorProfiles <JS_API_AcroJS.html#52944>`__  `printerNames <JS_API_AcroJS.html#16579>`__  `runtimeHighlight <JS_API_AcroJS.html#70509>`__  `runtimeHighlightColor <JS_API_AcroJS.html#80977>`__  `thermometer <JS_API_AcroJS.html#18969>`__  `viewerType <JS_API_AcroJS.html#39047>`__  methods:  `addToolButton <JS_API_AcroJS.html#99640>`__  `getPath <JS_API_AcroJS.html#92839>`__  `mailGetAddrs <JS_API_AcroJS.html#75294>`__  `newFDF <JS_API_AcroJS.html#93566>`__  `openFDF <JS_API_AcroJS.html#28383>`__  `popUpMenuEx <JS_API_AcroJS.html#40999>`__  `removeToolButton <JS_API_AcroJS.html#29847>`__

   * - `Bookmark <JS_API_AcroJS.html#49491>`__ object
     - methods:  `setAction <JS_API_AcroJS.html#52228>`__

   * - `catalog <JS_API_AcroJS.html#33812>`__ object
     - properties:  `isIdle <JS_API_AcroJS.html#59187>`__  `jobs <JS_API_AcroJS.html#22300>`__  methods:  `getIndex <JS_API_AcroJS.html#87258>`__  `remove <JS_API_AcroJS.html#37233>`__

   * - `Certificate <JS_API_AcroJS.html#44855>`__ object
     - properties:  `keyUsage <JS_API_AcroJS.html#87992>`__  `usage <JS_API_AcroJS.html#81656>`__

   * - `Collab <JS_API_AcroJS.html#29350>`__ object
     - methods:  `addStateModel <JS_API_AcroJS.html#49904>`__  `removeStateModel <JS_API_AcroJS.html#90340>`__

   * - `console <JS_API_AcroJS.html#92099>`__ object
     - methods:  ` <JS_API_AcroJS.html#13261>`__ 

   * - `dbg <JS_API_AcroJS.html#65262>`__ object
     - properties:  `bps <JS_API_AcroJS.html#45894>`__  methods:  `c <JS_API_AcroJS.html#24979>`__  `cb <JS_API_AcroJS.html#54263>`__  `q <JS_API_AcroJS.html#14994>`__  `sb <JS_API_AcroJS.html#85448>`__  `si <JS_API_AcroJS.html#70905>`__  `sn <JS_API_AcroJS.html#67180>`__  `so <JS_API_AcroJS.html#47502>`__  `sv <JS_API_AcroJS.html#92782>`__

   * - `Directory <JS_API_AcroJS.html#60701>`__ object
     - properties:  `info <JS_API_AcroJS.html#53347>`__  methods:  `connect <JS_API_AcroJS.html#36168>`__

   * - `DirConnection <JS_API_AcroJS.html#70131>`__ object
     - properties:  `canList <JS_API_AcroJS.html#61351>`__  `canDoCustomSearch <JS_API_AcroJS.html#54768>`__  `canDoCustomUISearch <JS_API_AcroJS.html#19446>`__  `canDoStandardSearch <JS_API_AcroJS.html#64521>`__  `groups <JS_API_AcroJS.html#38818>`__  `name <JS_API_AcroJS.html#68524>`__  `uiName <JS_API_AcroJS.html#66947>`__  methods:  `search <JS_API_AcroJS.html#65566>`__  `setOutputFields <JS_API_AcroJS.html#89710>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `alternatePresentations <JS_API_AcroJS.html#27482>`__  `documentFileName <JS_API_AcroJS.html#38270>`__  `metadata <JS_API_AcroJS.html#92040>`__  `permStatusReady <JS_API_AcroJS.html#45430>`__  methods:  `addLink <JS_API_AcroJS.html#21259>`__  `addRecipientListCryptFilter <JS_API_AcroJS.html#27295>`__  `addRequirement <JS_API_AcroJS.html#17850>`__  `encryptForRecipients <JS_API_AcroJS.html#21893>`__  `exportAsText <JS_API_AcroJS.html#64033>`__  `exportXFAData <JS_API_AcroJS.html#36024>`__  `getLegalWarnings <JS_API_AcroJS.html#27797>`__  `getLinks <JS_API_AcroJS.html#80686>`__  `getOCGs <JS_API_AcroJS.html#82809>`__  `getPrintParams <JS_API_AcroJS.html#39806>`__  `importXFAData <JS_API_AcroJS.html#65500>`__  `newPage <JS_API_AcroJS.html#58928>`__  `removeLinks <JS_API_AcroJS.html#57408>`__  `setAction <JS_API_AcroJS.html#35182>`__  `setPageAction <JS_API_AcroJS.html#69422>`__  `setPageTabOrder <JS_API_AcroJS.html#43314>`__

   * - `Error <JS_API_AcroJS.html#13935>`__ object
     - properties:  `fileName <JS_API_AcroJS.html#50406>`__  `lineNumber <JS_API_AcroJS.html#67199>`__  `message <JS_API_AcroJS.html#71361>`__  `name <JS_API_AcroJS.html#24685>`__  methods:  `toString <JS_API_AcroJS.html#69913>`__

   * - `event <JS_API_AcroJS.html#38077>`__ object
     - properties:  `fieldFull <JS_API_AcroJS.html#98939>`__  `richChange <JS_API_AcroJS.html#85239>`__  `richChangeEx <JS_API_AcroJS.html#86693>`__  `richValue <JS_API_AcroJS.html#73797>`__

   * - `FDF <JS_API_AcroJS.html#43659>`__ object
     - properties:  `deleteOption <JS_API_AcroJS.html#61881>`__  `isSigned <JS_API_AcroJS.html#83309>`__  `numEmbeddedFiles <JS_API_AcroJS.html#69469>`__  methods:  `addContact <JS_API_AcroJS.html#59252>`__  `addEmbeddedFile <JS_API_AcroJS.html#10402>`__  `addRequest <JS_API_AcroJS.html#71568>`__  `close <JS_API_AcroJS.html#49024>`__  `mail <JS_API_AcroJS.html#38284>`__  `save <JS_API_AcroJS.html#72930>`__  `signatureClear <JS_API_AcroJS.html#98207>`__  `signatureSign <JS_API_AcroJS.html#33751>`__  `signatureValidate <JS_API_AcroJS.html#81915>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - properties:  `buttonFitBounds <JS_API_AcroJS.html#13558>`__  `comb <JS_API_AcroJS.html#64322>`__  `commitOnSelChange <JS_API_AcroJS.html#74343>`__  `defaultStyle <JS_API_AcroJS.html#14483>`__  `radiosInUnison <JS_API_AcroJS.html#54850>`__  `richText <JS_API_AcroJS.html#87647>`__  `richValue <JS_API_AcroJS.html#88243>`__  `rotation <JS_API_AcroJS.html#35949>`__  methods:  `getLock <JS_API_AcroJS.html#28478>`__  `setLock <JS_API_AcroJS.html#73832>`__  `signatureGetSeedValue <JS_API_AcroJS.html#10692>`__  `signatureSetSeedValue <JS_API_AcroJS.html#65475>`__

   * - `Index <JS_API_AcroJS.html#95590>`__ object
     - methods:  `build <JS_API_AcroJS.html#15721>`__

   * - `Link <JS_API_AcroJS.html#48288>`__ object
     - properties:  `borderColor <JS_API_AcroJS.html#38599>`__  `borderWidth <JS_API_AcroJS.html#89645>`__  `highlightMode <JS_API_AcroJS.html#41034>`__  `rect <JS_API_AcroJS.html#29424>`__  methods:  `setAction <JS_API_AcroJS.html#91831>`__

   * - `OCG <JS_API_AcroJS.html#66402>`__ object
     - properties:  `name <JS_API_AcroJS.html#90593>`__  `state <JS_API_AcroJS.html#24633>`__  methods:  `setAction <JS_API_AcroJS.html#39535>`__

   * - `PrintParams <JS_API_AcroJS.html#43354>`__ object
     - properties:  `binaryOK <JS_API_AcroJS.html#39494>`__  `bitmapDPI <JS_API_AcroJS.html#72759>`__  ` <JS_API_AcroJS.html#36185>`__   `colorProfile <JS_API_AcroJS.html#78256>`__  `constants <JS_API_AcroJS.html#12065>`__  `downloadFarEastFonts <JS_API_AcroJS.html#57970>`__  `fileName <JS_API_AcroJS.html#22668>`__  `firstPage <JS_API_AcroJS.html#95550>`__  `flags <JS_API_AcroJS.html#37069>`__  `fontPolicy <JS_API_AcroJS.html#11931>`__  `gradientDPI <JS_API_AcroJS.html#64020>`__  `interactive <JS_API_AcroJS.html#91914>`__  `lastPage <JS_API_AcroJS.html#49783>`__  `pageHandling <JS_API_AcroJS.html#89810>`__  `pageSubset <JS_API_AcroJS.html#51148>`__  `printAsImage <JS_API_AcroJS.html#72914>`__  `printContent <JS_API_AcroJS.html#95227>`__  `printerName <JS_API_AcroJS.html#92611>`__  `psLevel <JS_API_AcroJS.html#86941>`__  `rasterFlags <JS_API_AcroJS.html#25286>`__  `reversePages <JS_API_AcroJS.html#54392>`__  `tileLabel <JS_API_AcroJS.html#27667>`__  `tileMark <JS_API_AcroJS.html#94282>`__  `tileOverlap <JS_API_AcroJS.html#73551>`__  `tileScale <JS_API_AcroJS.html#75324>`__  `transparencyLevel <JS_API_AcroJS.html#88218>`__  `usePrinterCRD <JS_API_AcroJS.html#15187>`__  `useT1Conversion <JS_API_AcroJS.html#62958>`__

   * - `Report <JS_API_AcroJS.html#62908>`__ object
     - properties:  `style <JS_API_AcroJS.html#50854>`__

   * - `search <JS_API_AcroJS.html#68641>`__ object
     - properties:  `docInfo <JS_API_AcroJS.html#89341>`__  `docText <JS_API_AcroJS.html#81268>`__  `docXMP <JS_API_AcroJS.html#95372>`__  `bookmarks <JS_API_AcroJS.html#80980>`__  `ignoreAsianCharacterWidth <JS_API_AcroJS.html#45257>`__  `jpegExif <JS_API_AcroJS.html#68401>`__  `legacySearch <JS_API_AcroJS.html#15077>`__  `markup <JS_API_AcroJS.html#72708>`__  `matchWholeWord <JS_API_AcroJS.html#29234>`__  `wordMatching <JS_API_AcroJS.html#70958>`__

   * - `security <JS_API_AcroJS.html#79993>`__ object
     - methods:  `chooseRecipientsDialog <JS_API_AcroJS.html#42796>`__  `getSecurityPolicies <JS_API_AcroJS.html#45284>`__  `importFromFile <JS_API_AcroJS.html#36368>`__

   * - `SecurityHandler <JS_API_AcroJS.html#25690>`__ object
     - properties:  `digitalIDs <JS_API_AcroJS.html#69297>`__  `directories <JS_API_AcroJS.html#57042>`__  `directoryHandlers <JS_API_AcroJS.html#53498>`__  `signAuthor <JS_API_AcroJS.html#42384>`__  `signFDF <JS_API_AcroJS.html#67664>`__  methods:  `newDirectory <JS_API_AcroJS.html#36849>`__

   * - `SOAP <JS_API_AcroJS.html#56402>`__ object
     - properties:  `wireDump <JS_API_AcroJS.html#49077>`__  methods:  `connect <JS_API_AcroJS.html#56159>`__  `request <JS_API_AcroJS.html#74380>`__  `response <JS_API_AcroJS.html#71544>`__  `streamDecode <JS_API_AcroJS.html#75761>`__  `streamEncode <JS_API_AcroJS.html#25086>`__  `streamFromString <JS_API_AcroJS.html#82501>`__  `stringFromStream <JS_API_AcroJS.html#73242>`__

   * - `Span <JS_API_AcroJS.html#63410>`__ object
     - properties:  `alignment <JS_API_AcroJS.html#52413>`__  `fontFamily <JS_API_AcroJS.html#21820>`__  `fontStretch <JS_API_AcroJS.html#29520>`__  `fontStyle <JS_API_AcroJS.html#58492>`__  `fontWeight <JS_API_AcroJS.html#72325>`__  `text <JS_API_AcroJS.html#51541>`__  `textColor <JS_API_AcroJS.html#21770>`__  `textSize <JS_API_AcroJS.html#92976>`__  `strikethrough <JS_API_AcroJS.html#62996>`__  `subscript <JS_API_AcroJS.html#43036>`__  `superscript <JS_API_AcroJS.html#42303>`__  `underline <JS_API_AcroJS.html#31477>`__

   * - `spell <JS_API_AcroJS.html#11682>`__ object
     - properties:  `languages <JS_API_AcroJS.html#62448>`__  `languageOrder <JS_API_AcroJS.html#64159>`__  methods:  `customDictionaryClose <JS_API_AcroJS.html#10279>`__  `customDictionaryCreate <JS_API_AcroJS.html#65594>`__  `customDictionaryExport <JS_API_AcroJS.html#36485>`__  `customDictionaryOpen <JS_API_AcroJS.html#30271>`__  `ignoreAll <JS_API_AcroJS.html#68941>`__

   * - `Thermometer <JS_API_AcroJS.html#87483>`__ object
     - properties:  `cancelled <JS_API_AcroJS.html#74557>`__  `duration <JS_API_AcroJS.html#35975>`__  `value <JS_API_AcroJS.html#68275>`__  `text <JS_API_AcroJS.html#17228>`__  methods:  `begin <JS_API_AcroJS.html#37386>`__  `end <JS_API_AcroJS.html#93535>`__

   * - `util <JS_API_AcroJS.html#70434>`__ object
     - methods:  `printd <JS_API_AcroJS.html#84295>`__  `spansToXML <JS_API_AcroJS.html#18255>`__  `xmlToSpans <JS_API_AcroJS.html#70013>`__


Modified in Acrobat 6.0
-----------------------

.. _changed-or-enhanced-objects-methods-and-properties-1:

The following properties and methods were changed or enhanced:

.. _section-9:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `app <JS_API_AcroJS.html#81243>`__ object
     - methods:  `addMenuItem <JS_API_AcroJS.html#52015>`__  `alert <JS_API_AcroJS.html#20224>`__  `listMenuItems <JS_API_AcroJS.html#86089>`__  `listToolbarButtons <JS_API_AcroJS.html#35171>`__  `response <JS_API_AcroJS.html#87724>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `layout <JS_API_AcroJS.html#45922>`__  `zoomType <JS_API_AcroJS.html#77812>`__  methods:  `createDataObject <JS_API_AcroJS.html#49328>`__  `exportAsFDF <JS_API_AcroJS.html#26522>`__  `exportAsXFDF <JS_API_AcroJS.html#87686>`__  `exportDataObject <JS_API_AcroJS.html#84187>`__  `flattenPages <JS_API_AcroJS.html#97907>`__  `getField <JS_API_AcroJS.html#16389>`__ (see `Extended Methods <JS_API_AcroJSChanges.html#63660>`__)  `getURL <JS_API_AcroJS.html#57404>`__  `importDataObject <JS_API_AcroJS.html#64990>`__  `importIcon <JS_API_AcroJS.html#49983>`__  `print <JS_API_AcroJS.html#71443>`__  `saveAs <JS_API_AcroJS.html#34461>`__  `spawnPageFromTemplate <JS_API_AcroJS.html#94080>`__  `submitForm <JS_API_AcroJS.html#20780>`__

   * - `event <JS_API_AcroJS.html#38077>`__ object
     - properties:  `changeEx <JS_API_AcroJS.html#64007>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - properties:  `name <JS_API_AcroJS.html#13887>`__  methods:  `buttonImportIcon <JS_API_AcroJS.html#27194>`__  `signatureInfo <JS_API_AcroJS.html#89499>`__  `signatureSign <JS_API_AcroJS.html#20782>`__  `signatureValidate <JS_API_AcroJS.html#95248>`__

   * - `global <JS_API_AcroJS.html#12440>`__ object
     - Persistent global data only applies to variables of type Boolean, Number or String. Acrobat 6.0 has reduced the maximum size of global persistent variables from 32 KB to 2-4 KB. Any data added to the string after this limit is dropped.

   * - `search <JS_API_AcroJS.html#68641>`__ object
     - methods:  `query <JS_API_AcroJS.html#21823>`__

   * - `SecurityHandler <JS_API_AcroJS.html#25690>`__ object
     - The following were introduced in Acrobat 5.0 as properties and methods of the PPKLite Signature Handler Object. In Acrobat 6.0, they are properties and methods of the `SecurityHandler <JS_API_AcroJS.html#25690>`__ object. All of these have new descriptions, and some have additional parameters.  -  When signing using JavaScript methods, the user's digital signature profile must be a ``.pfx`` file, not an ``.apf``, as in earlier versions of Acrobat. To convert an ``.apf`` profile to the new ``.pfx`` type, use the UI (click Advanced > Manage Digital IDs > My Digital ID Files > Select My Digital ID File) to import the ``.apf`` profile.   properties:  `appearances <JS_API_AcroJS.html#84619>`__  `isLoggedIn <JS_API_AcroJS.html#99723>`__  `loginName <JS_API_AcroJS.html#43875>`__  `loginPath <JS_API_AcroJS.html#63004>`__  `name <JS_API_AcroJS.html#51304>`__  `signInvisible <JS_API_AcroJS.html#18752>`__  `signVisible <JS_API_AcroJS.html#31575>`__  `uiName <JS_API_AcroJS.html#13603>`__  methods:  `login <JS_API_AcroJS.html#75651>`__  `logout <JS_API_AcroJS.html#95399>`__  `newUser <JS_API_AcroJS.html#96919>`__  `setPasswordTimeout <JS_API_AcroJS.html#11628>`__

   * - `Template <JS_API_AcroJS.html#79743>`__ t object 
     - methods:   `spawn <JS_API_AcroJS.html#97092>`__


.. raw:: html

   <a name="63660"></a>

**Extended Methods**

The Document ``.getField`` method was extended in Acrobat 6.0 so that it retrieves the Field object of individual widgets. See the `Field <JS_API_AcroJS.html#36795>`__ object for a discussion of widgets and how to work with them.

Deprecated in Acrobat 6.0
-------------------------

.. _section-10:

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `search <JS_API_AcroJS.html#68641>`__ object
     - properties:  soundex  thesaurus

   * - `spell <JS_API_AcroJS.html#11682>`__ object
     - methods:  `addDictionary <JS_API_AcroJS.html#81814>`__  `removeDictionary <JS_API_AcroJS.html#17528>`__


.. raw:: html

   <a name="30696"></a>

Introduced in Acrobat 6.0.2
---------------------------

The following table lists the objects, properties and methods of the Multimedia plug-in. In Acrobat 6.0.2, multimedia JavaScript was documented in a separate document called the "Acrobat Multimedia JavaScript Reference".

.. list-table::
   :widths: 10 90

   * - `app <JS_API_AcroJS.html#81243>`__ object
     - properties:  `media <JS_API_AcroJS.html#49059>`__  `monitors <JS_API_AcroJS.html#72376>`__

   * - `app.media <JS_API_AcroJS.html#19976>`__ object
     - properties:  `align <JS_API_AcroJS.html#81246>`__  `canResize <JS_API_AcroJS.html#97250>`__  `closeReason <JS_API_AcroJS.html#42939>`__  `defaultVisible <JS_API_AcroJS.html#55562>`__  `ifOffScreen <JS_API_AcroJS.html#99487>`__  `layout <JS_API_AcroJS.html#95552>`__  `monitorType <JS_API_AcroJS.html#91536>`__  `openCode <JS_API_AcroJS.html#16905>`__  `over <JS_API_AcroJS.html#77583>`__  `pageEventNames <JS_API_AcroJS.html#24937>`__  `raiseCode <JS_API_AcroJS.html#30071>`__  `raiseSystem <JS_API_AcroJS.html#51270>`__  `renditionType <JS_API_AcroJS.html#45162>`__  `status <JS_API_AcroJS.html#19461>`__  `trace <JS_API_AcroJS.html#64005>`__  `version <JS_API_AcroJS.html#81793>`__  `windowType <JS_API_AcroJS.html#31862>`__

   * - `app.media <JS_API_AcroJS.html#19976>`__ object(Continued)
     - methods:  `addStockEvents <JS_API_AcroJS.html#53287>`__  `alertFileNotFound <JS_API_AcroJS.html#98736>`__  `alertSelectFailed <JS_API_AcroJS.html#81716>`__  `argsDWIM <JS_API_AcroJS.html#89486>`__  `canPlayOrAlert <JS_API_AcroJS.html#45001>`__  `computeFloatWinRect <JS_API_AcroJS.html#29947>`__  `constrainRectToScreen <JS_API_AcroJS.html#75243>`__  `createPlayer <JS_API_AcroJS.html#97532>`__  `getAltTextData <JS_API_AcroJS.html#42321>`__  `getAltTextSettings <JS_API_AcroJS.html#12647>`__  `getAnnotStockEvents <JS_API_AcroJS.html#20177>`__  `getAnnotTraceEvents <JS_API_AcroJS.html#53877>`__  `getPlayers <JS_API_AcroJS.html#25402>`__  `getPlayerStockEvents <JS_API_AcroJS.html#16134>`__  `getPlayerTraceEvents <JS_API_AcroJS.html#63413>`__  `getRenditionSettings <JS_API_AcroJS.html#95330>`__  `getURLData <JS_API_AcroJS.html#27456>`__  `getURLSettings <JS_API_AcroJS.html#30722>`__  `getWindowBorderSize <JS_API_AcroJS.html#17972>`__  `openPlayer <JS_API_AcroJS.html#84417>`__  `removeStockEvents <JS_API_AcroJS.html#57992>`__  `startPlayer <JS_API_AcroJS.html#99051>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `innerAppWindowRect <JS_API_AcroJS.html#40177>`__  `innerDocWindowRect <JS_API_AcroJS.html#56840>`__  `media <JS_API_AcroJS.html#39862>`__  `outerAppWindowRect <JS_API_AcroJS.html#66325>`__  `outerDocWindowRect <JS_API_AcroJS.html#85278>`__  `pageWindowRect <JS_API_AcroJS.html#91323>`__

   * - `Doc.media <JS_API_AcroJS.html#69910>`__ object
     - properties:  `canPlay <JS_API_AcroJS.html#40443>`__  methods:  `deleteRendition <JS_API_AcroJS.html#47744>`__  `getAnnot <JS_API_AcroJS.html#50140>`__  `getAnnots <JS_API_AcroJS.html#90687>`__  `getRendition <JS_API_AcroJS.html#95842>`__  `newPlayer <JS_API_AcroJS.html#59092>`__

   * - `event <JS_API_AcroJS.html#38077>`__ object
     - A new Screen type used with Multimedia along with associated event names.

   * - `Events <JS_API_AcroJS.html#36164>`__ object
     - methods:  `add <JS_API_AcroJS.html#48718>`__  `dispatch <JS_API_AcroJS.html#27002>`__  `remove <JS_API_AcroJS.html#18138>`__

   * - `EventListener <JS_API_AcroJS.html#12169>`__ object
     - methods:  `afterBlur <JS_API_AcroJS.html#30006>`__  `afterClose <JS_API_AcroJS.html#83809>`__  `afterDestroy <JS_API_AcroJS.html#59810>`__  `afterDone <JS_API_AcroJS.html#44303>`__  `afterError <JS_API_AcroJS.html#92605>`__  `afterEscape <JS_API_AcroJS.html#87938>`__  `afterEveryEvent <JS_API_AcroJS.html#66809>`__  `afterFocus <JS_API_AcroJS.html#64720>`__  `afterPause <JS_API_AcroJS.html#39032>`__  `afterPlay <JS_API_AcroJS.html#72989>`__  `afterReady <JS_API_AcroJS.html#75362>`__  `afterScript <JS_API_AcroJS.html#96936>`__  `afterSeek <JS_API_AcroJS.html#67314>`__  `afterStatus <JS_API_AcroJS.html#20336>`__  `afterStop <JS_API_AcroJS.html#72199>`__  `onBlur <JS_API_AcroJS.html#50864>`__  `onClose <JS_API_AcroJS.html#45762>`__  `onDestroy <JS_API_AcroJS.html#56842>`__  `onDone <JS_API_AcroJS.html#34158>`__  `onError <JS_API_AcroJS.html#95692>`__  `onEscape <JS_API_AcroJS.html#38753>`__  `onEveryEvent <JS_API_AcroJS.html#48650>`__  `onFocus <JS_API_AcroJS.html#14108>`__  `onGetRect <JS_API_AcroJS.html#61508>`__  `onPause <JS_API_AcroJS.html#78625>`__  `onPlay <JS_API_AcroJS.html#42101>`__  `onReady <JS_API_AcroJS.html#82350>`__  `onScript <JS_API_AcroJS.html#85317>`__  `onSeek <JS_API_AcroJS.html#11271>`__  `onStatus <JS_API_AcroJS.html#12658>`__  `onStop <JS_API_AcroJS.html#67418>`__

   * - `Marker <JS_API_AcroJS.html#86741>`__ object
     - properties:  `frame <JS_API_AcroJS.html#42227>`__  `index <JS_API_AcroJS.html#90667>`__  `name <JS_API_AcroJS.html#81053>`__  `time <JS_API_AcroJS.html#55620>`__

   * - `Markers <JS_API_AcroJS.html#46714>`__ object
     - properties:  `player <JS_API_AcroJS.html#49163>`__  methods:  `get <JS_API_AcroJS.html#15049>`__

   * - `MediaOffset <JS_API_AcroJS.html#40623>`__ object
     - properties:  `frame <JS_API_AcroJS.html#85689>`__  `marker <JS_API_AcroJS.html#36461>`__  `time <JS_API_AcroJS.html#66128>`__

   * - `MediaPlayer <JS_API_AcroJS.html#47696>`__ object
     - properties:  `annot <JS_API_AcroJS.html#17383>`__  `defaultSize <JS_API_AcroJS.html#71321>`__  `doc <JS_API_AcroJS.html#51225>`__  `events <JS_API_AcroJS.html#12391>`__  `hasFocus <JS_API_AcroJS.html#77116>`__  `id <JS_API_AcroJS.html#94578>`__  `innerRect <JS_API_AcroJS.html#49000>`__  i `isOpen <JS_API_AcroJS.html#49436>`__   `isPlaying <JS_API_AcroJS.html#91927>`__  `markers <JS_API_AcroJS.html#54328>`__  `outerRect <JS_API_AcroJS.html#58125>`__  `page <JS_API_AcroJS.html#48828>`__  `settings <JS_API_AcroJS.html#31898>`__  `uiSize <JS_API_AcroJS.html#51769>`__  `visible <JS_API_AcroJS.html#96180>`__  methods:  `close <JS_API_AcroJS.html#11397>`__  `open <JS_API_AcroJS.html#50913>`__  `pause <JS_API_AcroJS.html#37680>`__  `play <JS_API_AcroJS.html#61004>`__  `seek <JS_API_AcroJS.html#41580>`__  `setFocus <JS_API_AcroJS.html#58878>`__  `stop <JS_API_AcroJS.html#21014>`__  `triggerGetRect <JS_API_AcroJS.html#63484>`__  `where <JS_API_AcroJS.html#90314>`__

   * - `MediaReject <JS_API_AcroJS.html#16239>`__ object
     - properties:  `rendition <JS_API_AcroJS.html#31167>`__

   * - `MediaSelection <JS_API_AcroJS.html#47359>`__ object
     - properties:  `selectContext <JS_API_AcroJS.html#36039>`__  `players <JS_API_AcroJS.html#77091>`__  `rejects <JS_API_AcroJS.html#83651>`__  `rendition <JS_API_AcroJS.html#11395>`__

   * - `MediaSettings <JS_API_AcroJS.html#91559>`__ object
     - properties:  `autoPlay <JS_API_AcroJS.html#11885>`__  `baseURL <JS_API_AcroJS.html#97037>`__  `bgColor <JS_API_AcroJS.html#83870>`__  `bgOpacity <JS_API_AcroJS.html#81817>`__  `endAt <JS_API_AcroJS.html#30733>`__  `floating <JS_API_AcroJS.html#16893>`__  `duration <JS_API_AcroJS.html#42027>`__  `floating <JS_API_AcroJS.html#83529>`__  `layout <JS_API_AcroJS.html#17615>`__  `monitor <JS_API_AcroJS.html#19974>`__  `monitorType <JS_API_AcroJS.html#26076>`__  `page <JS_API_AcroJS.html#37286>`__  `palindrome <JS_API_AcroJS.html#30683>`__  `players <JS_API_AcroJS.html#22715>`__  `rate <JS_API_AcroJS.html#86332>`__  `repeat <JS_API_AcroJS.html#94336>`__  `showUI <JS_API_AcroJS.html#22987>`__  `startAt <JS_API_AcroJS.html#25011>`__  `visible <JS_API_AcroJS.html#44957>`__  `volume <JS_API_AcroJS.html#97636>`__  `windowType <JS_API_AcroJS.html#46521>`__

   * - `Monitor <JS_API_AcroJS.html#80470>`__ object
     - properties:  `colorDepth <JS_API_AcroJS.html#17958>`__  `isPrimary <JS_API_AcroJS.html#30012>`__  `rect <JS_API_AcroJS.html#62397>`__  `workRect <JS_API_AcroJS.html#48528>`__

   * - `Monitors <JS_API_AcroJS.html#57963>`__ object
     - methods:  `bestColor <JS_API_AcroJS.html#59721>`__  `bestFit <JS_API_AcroJS.html#85937>`__  `desktop <JS_API_AcroJS.html#31310>`__  `document <JS_API_AcroJS.html#17611>`__  `filter <JS_API_AcroJS.html#60526>`__  `largest <JS_API_AcroJS.html#99555>`__  `leastOverlap <JS_API_AcroJS.html#73436>`__  `mostOverlap <JS_API_AcroJS.html#36907>`__  `nonDocument <JS_API_AcroJS.html#74274>`__  `primary <JS_API_AcroJS.html#20098>`__  `secondary <JS_API_AcroJS.html#90658>`__  `select <JS_API_AcroJS.html#32009>`__  `tallest <JS_API_AcroJS.html#30414>`__  `widest <JS_API_AcroJS.html#46128>`__

   * - `PlayerInfo <JS_API_AcroJS.html#58967>`__ object
     - properties:  `id <JS_API_AcroJS.html#26289>`__  `mimeTypes <JS_API_AcroJS.html#22221>`__  `name <JS_API_AcroJS.html#49721>`__  `version <JS_API_AcroJS.html#24800>`__  methods:  `canPlay <JS_API_AcroJS.html#76833>`__  `canUseData <JS_API_AcroJS.html#82266>`__

   * - `PlayerInfoList <JS_API_AcroJS.html#14162>`__ object
     - methods:  `select <JS_API_AcroJS.html#59419>`__

   * - `Rendition <JS_API_AcroJS.html#47886>`__ object
     - properties:  `altText <JS_API_AcroJS.html#57156>`__  `doc <JS_API_AcroJS.html#26757>`__  `fileName <JS_API_AcroJS.html#94327>`__  `type <JS_API_AcroJS.html#69594>`__  `uiName <JS_API_AcroJS.html#97659>`__  methods:  `getPlaySettings <JS_API_AcroJS.html#15194>`__  `select <JS_API_AcroJS.html#80973>`__  `testCriteria <JS_API_AcroJS.html#90781>`__

   * - `ScreenAnnot <JS_API_AcroJS.html#43548>`__ object
     - properties:  `altText <JS_API_AcroJS.html#36955>`__  `alwaysShowFocus <JS_API_AcroJS.html#93566>`__  `display <JS_API_AcroJS.html#63528>`__  `doc <JS_API_AcroJS.html#64999>`__  `events <JS_API_AcroJS.html#13656>`__  `extFocusRect <JS_API_AcroJS.html#94094>`__  `innerDeviceRect <JS_API_AcroJS.html#77921>`__  `noTrigger <JS_API_AcroJS.html#95673>`__  `outerDeviceRect <JS_API_AcroJS.html#96759>`__  `page <JS_API_AcroJS.html#92482>`__  `player <JS_API_AcroJS.html#16634>`__  `rect <JS_API_AcroJS.html#96047>`__  methods:  `hasFocus <JS_API_AcroJS.html#24895>`__  `setFocus <JS_API_AcroJS.html#93849>`__


Acrobat 5.0 changes
===================

Introduced in Acrobat 5.0
-------------------------

.. _section-13:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - ADBC object
     - methods:  getDataSourceList  newConnection

   * - ` <JS_API_AcroJS.html#41213>`__ object
     - properties:  `alignment <JS_API_AcroJS.html#99809>`__  `AP <JS_API_AcroJS.html#13531>`__  `arrowBegin <JS_API_AcroJS.html#17692>`__  `arrowEnd <JS_API_AcroJS.html#57468>`__  `author <JS_API_AcroJS.html#80493>`__  `contents <JS_API_AcroJS.html#62713>`__  `doc <JS_API_AcroJS.html#61639>`__  `fillColor <JS_API_AcroJS.html#69717>`__  `hidden <JS_API_AcroJS.html#72369>`__  `modDate <JS_API_AcroJS.html#22713>`__  `name <JS_API_AcroJS.html#95838>`__  `noView <JS_API_AcroJS.html#51663>`__  `page <JS_API_AcroJS.html#18012>`__  `point <JS_API_AcroJS.html#25272>`__  `points <JS_API_AcroJS.html#47728>`__  `popupRect <JS_API_AcroJS.html#35916>`__  `print <JS_API_AcroJS.html#25722>`__  `rect <JS_API_AcroJS.html#31420>`__  `readOnly <JS_API_AcroJS.html#64008>`__  `rotate <JS_API_AcroJS.html#37250>`__  `strokeColor <JS_API_AcroJS.html#14118>`__  `textFont <JS_API_AcroJS.html#93184>`__  `type <JS_API_AcroJS.html#68108>`__  `soundIcon <JS_API_AcroJS.html#27366>`__  `width <JS_API_AcroJS.html#86349>`__  methods:  `destroy <JS_API_AcroJS.html#47511>`__  `getProps <JS_API_AcroJS.html#43743>`__  `setProps <JS_API_AcroJS.html#59338>`__

   * - `app <JS_API_AcroJS.html#81243>`__ object
     - properties:  `activeDocs <JS_API_AcroJS.html#82645>`__  `fs <JS_API_AcroJS.html#70082>`__  `plugIns <JS_API_AcroJS.html#56835>`__  `viewerVariation <JS_API_AcroJS.html#29204>`__  methods:  `addMenuItem <JS_API_AcroJS.html#52015>`__  `addSubMenu <JS_API_AcroJS.html#61494>`__  `clearInterval <JS_API_AcroJS.html#17506>`__  `clearTimeOut <JS_API_AcroJS.html#16685>`__  `listMenuItems <JS_API_AcroJS.html#86089>`__  `listToolbarButtons <JS_API_AcroJS.html#35171>`__  `newDoc <JS_API_AcroJS.html#24970>`__  `openDoc <JS_API_AcroJS.html#61826>`__  `popUpMenu <JS_API_AcroJS.html#24690>`__  `setInterval <JS_API_AcroJS.html#89991>`__  `setTimeOut <JS_API_AcroJS.html#17472>`__

   * - `Bookmark <JS_API_AcroJS.html#49491>`__ object
     - properties:  `children <JS_API_AcroJS.html#98065>`__  `color <JS_API_AcroJS.html#71326>`__  `doc <JS_API_AcroJS.html#40682>`__  `name <JS_API_AcroJS.html#76081>`__  `open <JS_API_AcroJS.html#57280>`__  `parent <JS_API_AcroJS.html#36697>`__  `style <JS_API_AcroJS.html#86167>`__  methods:  `createChild <JS_API_AcroJS.html#81576>`__  `execute <JS_API_AcroJS.html#81661>`__  `insertChild <JS_API_AcroJS.html#61060>`__  `remove <JS_API_AcroJS.html#43068>`__

   * - `color <JS_API_AcroJS.html#37083>`__ object
     - methods:  `convert <JS_API_AcroJS.html#16408>`__  `equal <JS_API_AcroJS.html#10606>`__

   * - `console <JS_API_AcroJS.html#92099>`__ object
     - methods:  ` <JS_API_AcroJS.html#80545>`__   ` <JS_API_AcroJS.html#64837>`__   `console <JS_API_AcroJS.html#48998>`__

   * - `Data <JS_API_AcroJS.html#69212>`__ object
     - properties:  `creationDate <JS_API_AcroJS.html#35317>`__  `modDate <JS_API_AcroJS.html#17649>`__  `MIMEType <JS_API_AcroJS.html#45643>`__  `name <JS_API_AcroJS.html#27704>`__  `path <JS_API_AcroJS.html#11291>`__  `size <JS_API_AcroJS.html#68523>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `bookmarkRoot <JS_API_AcroJS.html#74889>`__  `disclosed <JS_API_AcroJS.html#28746>`__ (5.0.5)  `icons <JS_API_AcroJS.html#12748>`__  `info <JS_API_AcroJS.html#19596>`__  `layout <JS_API_AcroJS.html#45922>`__  `securityHandler <JS_API_AcroJS.html#22498>`__  `selectedAnnots <JS_API_AcroJS.html#40269>`__  `sounds <JS_API_AcroJS.html#41410>`__  `templates <JS_API_AcroJS.html#83340>`__  `URL <JS_API_AcroJS.html#51048>`__  methods:  `addAnnot <JS_API_AcroJS.html#92733>`__  `addField <JS_API_AcroJS.html#10776>`__  `addIcon <JS_API_AcroJS.html#42105>`__  `addThumbnails <JS_API_AcroJS.html#78355>`__  `addWeblinks <JS_API_AcroJS.html#89952>`__  `bringToFront <JS_API_AcroJS.html#73981>`__  `closeDoc <JS_API_AcroJS.html#34158>`__  `createDataObject <JS_API_AcroJS.html#49328>`__  `createTemplate <JS_API_AcroJS.html#36567>`__  `deletePages <JS_API_AcroJS.html#99469>`__  `deleteSound <JS_API_AcroJS.html#26240>`__  `exportAsXFDF <JS_API_AcroJS.html#87686>`__  `exportDataObject <JS_API_AcroJS.html#84187>`__  `extractPages <JS_API_AcroJS.html#60156>`__  `flattenPages <JS_API_AcroJS.html#97907>`__  `getAnnot <JS_API_AcroJS.html#27614>`__  `getAnnots <JS_API_AcroJS.html#26254>`__  `getDataObject <JS_API_AcroJS.html#86645>`__  `getIcon <JS_API_AcroJS.html#79139>`__  `getPageBox <JS_API_AcroJS.html#40225>`__  `getPageLabel <JS_API_AcroJS.html#67733>`__  `getPageNthWord <JS_API_AcroJS.html#32356>`__  `getPageNthWordQuads <JS_API_AcroJS.html#68212>`__  `getPageRotation <JS_API_AcroJS.html#33574>`__  `getPageTransition <JS_API_AcroJS.html#67725>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object(Continued)
     - `getSound <JS_API_AcroJS.html#10552>`__  `importAnXFDF <JS_API_AcroJS.html#61122>`__  `importDataObject <JS_API_AcroJS.html#64990>`__  `importIcon <JS_API_AcroJS.html#49983>`__  `importSound <JS_API_AcroJS.html#42848>`__  `importTextData <JS_API_AcroJS.html#92335>`__  `insertPages <JS_API_AcroJS.html#20950>`__  `movePage <JS_API_AcroJS.html#52380>`__  `print <JS_API_AcroJS.html#71443>`__  `removeDataObject <JS_API_AcroJS.html#81117>`__  `removeField <JS_API_AcroJS.html#96986>`__  `removeIcon <JS_API_AcroJS.html#84305>`__  `removeTemplate <JS_API_AcroJS.html#97652>`__  `removeThumbnails <JS_API_AcroJS.html#54115>`__  `removeWeblinks <JS_API_AcroJS.html#63275>`__  `replacePages <JS_API_AcroJS.html#58207>`__  `saveAs <JS_API_AcroJS.html#34461>`__  `selectPageNthWord <JS_API_AcroJS.html#11214>`__  `setPageBoxes <JS_API_AcroJS.html#10299>`__  `setPageLabels <JS_API_AcroJS.html#22005>`__  `setPageRotations <JS_API_AcroJS.html#40483>`__  `setPageTransitions <JS_API_AcroJS.html#76168>`__  `submitForm <JS_API_AcroJS.html#20780>`__  `syncAnnotScan <JS_API_AcroJS.html#87285>`__

   * - `event <JS_API_AcroJS.html#38077>`__ object
     - properties:  `changeEx <JS_API_AcroJS.html#64007>`__  `keyDown <JS_API_AcroJS.html#72020>`__  `targetName <JS_API_AcroJS.html#40616>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - properties:  `buttonAlignX <JS_API_AcroJS.html#40106>`__  `buttonAlignY <JS_API_AcroJS.html#41863>`__  `buttonPosition <JS_API_AcroJS.html#23056>`__  `buttonScaleHow <JS_API_AcroJS.html#36156>`__  `buttonScaleWhen <JS_API_AcroJS.html#36367>`__  `currentValueIndices <JS_API_AcroJS.html#52225>`__  `doNotScroll <JS_API_AcroJS.html#30113>`__  `doNotSpellCheck <JS_API_AcroJS.html#73181>`__  `exportValues <JS_API_AcroJS.html#58250>`__  `fileSelect <JS_API_AcroJS.html#69226>`__  `multipleSelection <JS_API_AcroJS.html#72810>`__  `rect <JS_API_AcroJS.html#91364>`__  `strokeColor <JS_API_AcroJS.html#20562>`__  `submitName <JS_API_AcroJS.html#19265>`__  `valueAsString <JS_API_AcroJS.html#74707>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object(Continued)
     - methods:  `browseForFileToSubmit <JS_API_AcroJS.html#60961>`__  `buttonGetCaption <JS_API_AcroJS.html#21910>`__  `buttonGetIcon <JS_API_AcroJS.html#41330>`__  `buttonSetCaption <JS_API_AcroJS.html#22265>`__  `buttonSetIcon <JS_API_AcroJS.html#39147>`__  `checkThisBox <JS_API_AcroJS.html#20167>`__  `defaultIsChecked <JS_API_AcroJS.html#29663>`__  `isBoxChecked <JS_API_AcroJS.html#49604>`__  `isDefaultChecked <JS_API_AcroJS.html#74380>`__  `setAction <JS_API_AcroJS.html#37472>`__  `signatureInfo <JS_API_AcroJS.html#89499>`__  `signatureSign <JS_API_AcroJS.html#20782>`__  `signatureValidate <JS_API_AcroJS.html#95248>`__

   * - `FullScreen <JS_API_AcroJS.html#16267>`__ object
     - properties:  `backgroundColor <JS_API_AcroJS.html#95727>`__  `clickAdvances <JS_API_AcroJS.html#12908>`__  `cursor <JS_API_AcroJS.html#43744>`__  `defaultTransition <JS_API_AcroJS.html#46194>`__  `escapeExits <JS_API_AcroJS.html#54221>`__  `isFullScreen <JS_API_AcroJS.html#11586>`__  `loop <JS_API_AcroJS.html#70106>`__  `timeDelay <JS_API_AcroJS.html#11728>`__  `transitions <JS_API_AcroJS.html#85692>`__  `usePageTiming <JS_API_AcroJS.html#70905>`__  `useTimer <JS_API_AcroJS.html#88396>`__

   * - `global <JS_API_AcroJS.html#12440>`__ object
     - methods:  `subscribe <JS_API_AcroJS.html#28547>`__

   * - `identity <JS_API_AcroJS.html#68797>`__ object
     - properties:  `corporation <JS_API_AcroJS.html#69829>`__  `email <JS_API_AcroJS.html#33868>`__  `loginName <JS_API_AcroJS.html#98507>`__  `name <JS_API_AcroJS.html#95607>`__

   * - `Index <JS_API_AcroJS.html#95590>`__ object
     - properties:  `available <JS_API_AcroJS.html#32844>`__  `name <JS_API_AcroJS.html#21497>`__  `path <JS_API_AcroJS.html#46342>`__  `selected <JS_API_AcroJS.html#35848>`__

   * - `PlayerInfo <JS_API_AcroJS.html#58967>`__ object
     - properties:  `certified <JS_API_AcroJS.html#41150>`__  `loaded <JS_API_AcroJS.html#99810>`__  `name <JS_API_AcroJS.html#25279>`__  `path <JS_API_AcroJS.html#94716>`__  `version <JS_API_AcroJS.html#92542>`__

   * -  PPKLite Signature Handler Object| (now listed under the| `SecurityHandler <JS_API_AcroJS.html#25690>`__ object)
     - properties:  `appearances <JS_API_AcroJS.html#84619>`__  `isLoggedIn <JS_API_AcroJS.html#99723>`__  `loginName <JS_API_AcroJS.html#43875>`__  `loginPath <JS_API_AcroJS.html#63004>`__  `name <JS_API_AcroJS.html#51304>`__  `signInvisible <JS_API_AcroJS.html#18752>`__  `signVisible <JS_API_AcroJS.html#31575>`__  `uiName <JS_API_AcroJS.html#13603>`__  methods:  `login <JS_API_AcroJS.html#75651>`__  `logout <JS_API_AcroJS.html#95399>`__  `newUser <JS_API_AcroJS.html#96919>`__  `setPasswordTimeout <JS_API_AcroJS.html#11628>`__

   * - `Report <JS_API_AcroJS.html#62908>`__ object
     - properties:  `absIndent <JS_API_AcroJS.html#38579>`__  `color <JS_API_AcroJS.html#95175>`__  `absIndent <JS_API_AcroJS.html#47833>`__  methods:  `breakPage <JS_API_AcroJS.html#45222>`__  `divide <JS_API_AcroJS.html#79384>`__  `indent <JS_API_AcroJS.html#76312>`__  `outdent <JS_API_AcroJS.html#12120>`__  `open <JS_API_AcroJS.html#10871>`__  `mail <JS_API_AcroJS.html#52175>`__  `writeText <JS_API_AcroJS.html#30283>`__  `save <JS_API_AcroJS.html#55306>`__  `writeText <JS_API_AcroJS.html#29243>`__

   * - `search <JS_API_AcroJS.html#68641>`__ object
     - properties:  `available <JS_API_AcroJS.html#29386>`__  `indexes <JS_API_AcroJS.html#96142>`__  `markup <JS_API_AcroJS.html#72708>`__  `maxDocs <JS_API_AcroJS.html#21610>`__  `proximity <JS_API_AcroJS.html#13660>`__  `refine <JS_API_AcroJS.html#29056>`__  soundex  `stem <JS_API_AcroJS.html#34599>`__

   * - `search <JS_API_AcroJS.html#68641>`__ object(Continued)
     - methods:  `addIndex <JS_API_AcroJS.html#10631>`__  `getIndexForPath <JS_API_AcroJS.html#45356>`__  `query <JS_API_AcroJS.html#21823>`__  `removeIndex <JS_API_AcroJS.html#25991>`__

   * - `security <JS_API_AcroJS.html#79993>`__ object
     - properties:  `handlers <JS_API_AcroJS.html#27159>`__  `validateSignaturesOnOpen <JS_API_AcroJS.html#78307>`__  methods:  `getHandler <JS_API_AcroJS.html#71913>`__

   * - `spell <JS_API_AcroJS.html#11682>`__ object
     - properties:  `available <JS_API_AcroJS.html#83162>`__  `dictionaryNames <JS_API_AcroJS.html#13633>`__  `dictionaryOrder <JS_API_AcroJS.html#89351>`__  `domainNames <JS_API_AcroJS.html#64363>`__ s   methods:  `addDictionary <JS_API_AcroJS.html#81814>`__  `addWord <JS_API_AcroJS.html#47325>`__  `check <JS_API_AcroJS.html#46770>`__  `checkText <JS_API_AcroJS.html#17744>`__  `checkWord <JS_API_AcroJS.html#21151>`__  `removeDictionary <JS_API_AcroJS.html#17528>`__  `removeWord <JS_API_AcroJS.html#37786>`__  `userWords <JS_API_AcroJS.html#51706>`__

   * - `TableInfo <JS_API_AcroJS.html#32392>`__ object
     - properties:  ` <JS_API_AcroJS.html#85698>`__   ` <JS_API_AcroJS.html#60470>`__   methods:  ` <JS_API_AcroJS.html#46920>`__   ` <JS_API_AcroJS.html#99992>`__   ` <JS_API_AcroJS.html#89034>`__   ` <JS_API_AcroJS.html#43532>`__   ` <JS_API_AcroJS.html#26031>`__ 

   * - `Template <JS_API_AcroJS.html#79743>`__ object
     - properties:  `hidden <JS_API_AcroJS.html#78212>`__  `name <JS_API_AcroJS.html#16107>`__  methods:  `spawn <JS_API_AcroJS.html#97092>`__


Modified in Acrobat 5.0
-----------------------

The console can act as an editor and can execute JavaScript code.

The following properties and methods have been changed or enhanced:

.. _section-14:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `app <JS_API_AcroJS.html#81243>`__ object
     - `language <JS_API_AcroJS.html#82355>`__  `execMenuItem <JS_API_AcroJS.html#25717>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - `exportAsFDF <JS_API_AcroJS.html#26522>`__  `print <JS_API_AcroJS.html#71443>`__  `submitForm <JS_API_AcroJS.html#20780>`__

   * - `event <JS_API_AcroJS.html#38077>`__ object
     - `type <JS_API_AcroJS.html#12523>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - `textFont <JS_API_AcroJS.html#11104>`__  `value <JS_API_AcroJS.html#22606>`__  `buttonImportIcon <JS_API_AcroJS.html#27194>`__  `getItemAt <JS_API_AcroJS.html#14076>`__

   * - `util <JS_API_AcroJS.html#70434>`__ object
     - `printd <JS_API_AcroJS.html#84295>`__


The section related to `event <JS_API_AcroJS.html#38077>`__ object has been greatly enhanced to facilitate better understanding of the Acrobat JavaScript Event model.

Deprecated in Acrobat 5.0
-------------------------

The following properties and methods have been deprecated:

.. _section-15:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - `app <JS_API_AcroJS.html#81243>`__ object
     - `fullscreen <JS_API_AcroJS.html#42010>`__  `numPlugIns <JS_API_AcroJS.html#19633>`__  `getNthPlugInName <JS_API_AcroJS.html#28851>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - `author <JS_API_AcroJS.html#38374>`__  `creationDate <JS_API_AcroJS.html#31203>`__  `creationDate <JS_API_AcroJS.html#13471>`__  `keywords <JS_API_AcroJS.html#50133>`__  `modDate <JS_API_AcroJS.html#14361>`__  `numTemplates <JS_API_AcroJS.html#20010>`__  `producer <JS_API_AcroJS.html#84415>`__  `title <JS_API_AcroJS.html#18152>`__  `getNthTemplate <JS_API_AcroJS.html#94458>`__  `spawnPageFromTemplate <JS_API_AcroJS.html#94080>`__

   * - `Field <JS_API_AcroJS.html#36795>`__ object
     - `hidden <JS_API_AcroJS.html#29686>`__

   * - `TTS <JS_API_AcroJS.html#24782>`__ object
     - `soundCues <JS_API_AcroJS.html#37694>`__  `speechCues <JS_API_AcroJS.html#96528>`__


Modified in Acrobat 5.05
------------------------

-  A new symbol was added to the quick bar denoting which methods are missing from Acrobat Approval.
-  In the `Doc <JS_API_AcroJS.html#53130>`__ object, the property `disclosed <JS_API_AcroJS.html#28746>`__ was added.

.. raw:: html

   <a name=""></a>Changes for 5.1

Modified in Adobe Reader 5.1
----------------------------

Access to the following properties and methods was changed for the Adobe 5.1 Reader:

.. _section-16:


 

.. list-table::
   :widths: 10 90
   :header-rows: 1


   * - ` <JS_API_AcroJS.html#41213>`__ object
     - properties:  `alignment <JS_API_AcroJS.html#99809>`__  `AP <JS_API_AcroJS.html#13531>`__  `arrowBegin <JS_API_AcroJS.html#17692>`__  `arrowEnd <JS_API_AcroJS.html#57468>`__  `author <JS_API_AcroJS.html#80493>`__  `contents <JS_API_AcroJS.html#62713>`__  `doc <JS_API_AcroJS.html#61639>`__  `fillColor <JS_API_AcroJS.html#69717>`__  `hidden <JS_API_AcroJS.html#72369>`__  methods:  `destroy <JS_API_AcroJS.html#47511>`__  `getProps <JS_API_AcroJS.html#43743>`__  `setProps <JS_API_AcroJS.html#59338>`__  `modDate <JS_API_AcroJS.html#22713>`__  `name <JS_API_AcroJS.html#95838>`__  `noView <JS_API_AcroJS.html#51663>`__  `page <JS_API_AcroJS.html#18012>`__  `point <JS_API_AcroJS.html#25272>`__  `points <JS_API_AcroJS.html#47728>`__  `popupRect <JS_API_AcroJS.html#35916>`__  `print <JS_API_AcroJS.html#25722>`__  `rect <JS_API_AcroJS.html#31420>`__  `readOnly <JS_API_AcroJS.html#64008>`__  `rotate <JS_API_AcroJS.html#37250>`__  `strokeColor <JS_API_AcroJS.html#14118>`__  `textFont <JS_API_AcroJS.html#93184>`__  `type <JS_API_AcroJS.html#68108>`__  `soundIcon <JS_API_AcroJS.html#27366>`__  `width <JS_API_AcroJS.html#86349>`__

   * - `Doc <JS_API_AcroJS.html#53130>`__ object
     - properties:  `selectedAnnots <JS_API_AcroJS.html#40269>`__  methods:  `addAnnot <JS_API_AcroJS.html#92733>`__  `addField <JS_API_AcroJS.html#10776>`__  `exportAsFDF <JS_API_AcroJS.html#26522>`__  `exportAsXFDF <JS_API_AcroJS.html#87686>`__  `getAnnot <JS_API_AcroJS.html#27614>`__  `getAnnots <JS_API_AcroJS.html#26254>`__  `getNthTemplate <JS_API_AcroJS.html#94458>`__  `importAnFDF <JS_API_AcroJS.html#21267>`__  `importAnXFDF <JS_API_AcroJS.html#61122>`__  `importDataObject <JS_API_AcroJS.html#64990>`__  `mailDoc <JS_API_AcroJS.html#56439>`__  `mailForm <JS_API_AcroJS.html#29734>`__  `spawnPageFromTemplate <JS_API_AcroJS.html#94080>`__  `submitForm <JS_API_AcroJS.html#20780>`__  `syncAnnotScan <JS_API_AcroJS.html#87285>`__

   * - `Template <JS_API_AcroJS.html#79743>`__ object
     - methods:  `spawn <JS_API_AcroJS.html#97092>`__



