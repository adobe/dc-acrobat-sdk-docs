******************************************************
Working with Document Security
******************************************************

About document security
=======================

Encryption is controlled by an encryption dictionary in the PDF file. The Acrobat core API uses RC4 (a proprietary algorithm provided by RSA Data Security, Inc.) to encrypt document data, and a standard (proprietary) method to encrypt, decrypt, and verify user passwords to determine whether or not a user is authorized to open a document.

Each stream or string object in a PDF file is individually encrypted. This level of encryption improves performance because objects can be individually decrypted as needed rather than decrypting an entire file. All objects, except for the encryption dictionary (which contains the security handler's private data), are encrypted using the RC4 algorithm Adobe licenses from RSA Data Security, Inc. A plugin may not substitute another encryption scheme for RC4.

A plugin that implements a security handler is responsible for encrypting the values it places into the encryption dictionary, and it may use any encryption scheme. If the security handler does not encrypt the values it places into the encryption dictionary, the values are in plain text.

The core API provides two Cos layer methods to encrypt and decrypt data using the RC4 algorithm. These methods are ``CosEncryptData`` and ``CosDecryptData``. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.)

Security handlers may use these methods to encrypt data they want to put into the PDF file's encryption dictionary and decrypt data when it is read from the dictionary. Security handlers may instead choose to ignore these methods and use their own encryption algorithms.

About security handlers
=======================

Application logic that performs user authorization and sets permissions is known as a security handler. Acrobat has these built-in security handlers: password, Adobe and public key security handler. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.)

A security handler supports two passwords:

-  A user password that enables a user to open and read a protected document with whatever permissions the owner chose
-  An owner password that allows a document's owner to also change the permissions granted to users

You can use the Acrobat core API's built-in security handler or write your own security handlers to perform user authorization (for example, by the presence of a specific hardware key or file, or by reading a magnetic card reader).

Security handlers are responsible for performing the following tasks:

-  Setting permissions on a file
-  Authorizing access to a file
-  Setting up a file's encryption and decryption keys
-  Maintaining the encryption dictionary of the PDF file containing the document

Security handlers are used in the following situations:

-  A document is opened. The security handler determines whether a user is authorized to open the file and sets up the decryption key that is used to decrypt the PDF file.
-  A document is saved. The security handler sets up the encryption key and writes extra security-related information into the PDF file's encryption dictionary.
-  A user attempts to change a document's security settings. The security handler determines whether the user is permitted to perform this task.

A document may have zero, one, or two security handlers associated with it. A document has zero security handlers if no security is used on the file. When security is applied to a file, or the user selects a different security handler for a secured file, the newly-chosen security handler is not put in place immediately. Instead this new security handler is simply associated with the document; it is a pending security handler until the document is saved.

The new security handler is not put in place immediately because it is responsible for decrypting the contents of the document's encryption dictionary, and that dictionary is re-encrypted in the correct format for the new security handler only when the document is saved. As a result, a document may have both a current and a new security handler associated with it.

A security handler has two names: one that is placed in each PDF file that is saved by the handler (for example, ADBE_Crypt), and another name that Acrobat can use in any user interface items in which the security handler appears (for example, Acrobat Developer Technologies default encryption). This is similar to the two-name scheme used for menu items: a language-independent name that the application logic can refer to regardless of the user interface language, and another name that appears in the user interface. (See `Adding menu commands to menus <Plugins_Menu.html#50618409_63428>`__.)

Adding a security handler
-------------------------

You can add a security handler by performing the following tasks:

-  Writing a set of callback routines to perform security-related functions.
-  Specifying the callbacks in a ``PDCryptHandlerRec`` structure.
-  Registering the handler by passing the structure to ``PDRegisterCryptHandlerEx``.

Security handlers data
^^^^^^^^^^^^^^^^^^^^^^

The following list describes three types of data used by security handlers:

-  Authorization data is the data the security handler needs to determine the user's authorization level for a particular file (for example, not authorized to open the file, authorized to access the file with user permissions, authorized to access the file with owner permissions). Passwords are a common type of authorization data.
-  Security data is whatever internal data the security handler uses. It includes security information, internal flag values, seed values, and so on.
-  Security information is a subset of the security data. Specifically, it is a collection of flags that contains the information that Acrobat uses to display the current permissions to the user. This information includes permissions and the user's authorization level (user or owner).

Security handler callbacks
^^^^^^^^^^^^^^^^^^^^^^^^^^

A security handler must provide callbacks that performs the following tasks:

-  Determines whether a user is authorized to open a particular file and what permissions the user has once the file is open (``PDCryptAuthorizeExProc`` ).
-  Creates and fills an authorization data structure, using whatever user interface is needed to obtain the data. For example, displaying a dialog box into which the user can type a password (``PDCryptGetAuthDataExProc`` ).
-  Creates, fills, and verifies a security data structure (``PDCryptNewSecurityDataProc`` ).
-  Extracts security information from the security data structure (``PDCryptGetSecurityInfoProc`` ).
-  Allows the user to request different security settings, usually by displaying a dialog box. (``PDCryptDisplaySecurityDataProc`` )
-  Sets up the encryption key used to encrypt the file (``PDCryptNewCryptDataProc`` ).
-  Fills or reads the PDF filefs encryption dictionary (``PDCryptFillEncryptDictProc`` ).
-  Displays the current document's permissions (required with ``PDCryptAuthorizeExProc`` and ``PDCryptGetAuthDataExProc`` callbacks).

With Acrobat 5.0 and later, a finer granularity of permissions has been predefined for objects supported by a PDF document. Plugins can invoke the ``PDDocPermRequest`` method to request whether a particular operation is authorized to be performed on a specified object in a document.

To support the ``PDDocPermRequest`` method, there are two new callback methods: ``PDCryptAuthorizeExProc`` and ``PDCryptGetAuthDataExProc``. Acrobat 5.0 and later also includes optional security handling for batch operations (actions on one or more files). There are a number of callbacks (indicated by PDCryptBatch... ) that a security handler must provide to support batch processing. These callbacks are part of a ``PDCryptBatchHandler`` structure. The ``PDCryptHandlerRec`` structure contains a new member ``CryptBatchHandler``, which points to this structure.

To support batch processing, a security handler should provide a non-NULL value for ``CryptBatchHandler`` and implement the batch callbacks. Prior to Acrobat 5.0, the maximum length of the encryption key that Acrobat accepted was 40 bits. Acrobat version 5.0 or later accommodates an encryption key length of 128 bits. These length limitations are imposed to comply with export restrictions.

Acrobat's authorization procedure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Acrobat's built-in authorization procedure works as follows:

#. Acrobat invokes the security handler's authorize callback (which is either ``PDCryptAuthorizeExProc``, introduced with Acrobat 5.0, or the older ``PDCryptAuthorizeProc`` ) to determine whether the user is allowed to open the file. It passes NULL authorization data, to handle the case where no authorization data is needed. Acrobat also passes the following values:

   -  ``PDPermReqObjDoc`` and ``PDPermReqOprOpen`` when invoking ``PDCryptAuthorizeExProc``.
   -  ``pdPermOpen`` when calling ``PDCryptAuthorizeProc``.

#. If the authorize callback returns ``true``, the file is opened. Otherwise, the authorization procedure executes the following steps up to three times, to give the user three chances to enter a password, or whatever authorization the security handler uses.

   -  It calls the security handler's get authorization data callback (``PDCryptGetAuthDataExProc`` or the older ``PDCryptGetAuthDataProc)``. This callback should obtain the authorization data using whatever user interface (for example, a dialog box used to obtain a password) or other means necessary, and then creates and fills the authorization data structure.
   -  It calls the security handler's authorize callback, passing the authorization data returned by the get authorization data callback. If the authorization succeeds, the authorize callback returns the permissions granted to the user, and the authorization procedure returns.

The authorize callback can access the encrypted PDF document, allowing it to encrypt the authorization data using a mechanism that depends on the document's contents. By doing this, someone who knows a document's password cannot easily find out which other documents use the same password. The authorize callback can return permissions that depend on the password as well as the permissions specified when encryption was set up. This allows, for example, more rights to be granted to someone who knows a document's owner password than to someone who knows the document's user password.

Opening a secured file
----------------------

The Acrobat core API has several methods for opening files. The ``PDDocOpen`` (or ``PDDocOpenEx`` ) method is used to open PDF files, even when a plugin calls AV layer methods such as ``AVDocOpenFromASFileWithParams``. As a result, the sequence of operations is largely the same regardless of whether the document is being opened from the PD layer or from the AV layer. The difference is that if you call ``PDDocOpen`` directly, you must pass your own authorization procedure (``PDAuthProc`` ), while AV layer methods always use Acrobat's built-in authorization procedure.

The authorization procedure must implement the authorization strategy, such as giving the user three chances to enter a password. The ``PDAuthProc`` is not part of a security handler, but it must call the security handler's methods to authorize the user (for example, to get the password from the user and to check whether or not the password is valid).

Acrobat performs the following steps to open a secured PDF file:

#. Searches for an Encrypt key in the PDF document's trailer, to determine whether or not the document is encrypted. If there is no Encrypt key, Acrobat opens the document immediately.
#. If there is an Encrypt key, its value is an encryption dictionary. Acrobat gets the value of the Filter key in the dictionary to determine which security handler was used when the file was saved. It looks in the list of registered security handlers (which contains Acrobat's built-in handler and any handlers that plugins or applications have registered) for one whose name matches the name found in the PDF file. For information about a dictionary, see `Working with Cos dictionaries <Plugins_Cos.html#50618418_96656>`__.
#. If Acrobat finds no match, indicating that the necessary handler could not be found, it does not open the document. If it finds a matching security handler, it invokes that handler's P ``DCryptNewSecurityDataProc`` callback to extract and decrypt information from the PDF file's encryption dictionary.
#. Acrobat invokes the security handler's authorize callback (``PDCryptAuthorizeExProc`` ) with NULL authorization data, and with the requested permissions set to ``PDPermReqOprOpen`` or ``pdPermOpen`` (requesting that the user be allowed to open the file). This allows support for authorization schemes that do not need authorization data.
#. If authorization succeeds, the handler's authorization callback must return the ``PDPermReqStatus`` (when the callback is ``PDCryptAuthorizeExProc`` ) or ``pdPermOpen`` (when the callback is ``PDCryptAuthorizeProc`` ) indicating that the user is permitted to open the file.
#. If authorization fails, the authorization procedure passed in the call to open the ``PDDoc`` is called.
#. If authorization still fails, the file is not opened.
#. If authorization succeeds, Acrobat calls the security handler's ``PDCryptNewCryptDataProc`` callback to create the decryption key that is used to decrypt the file. The ``PDCryptNewCryptDataProc`` callback can construct the decryption key in any way it chooses, but generally performs some calculation based on the contents of the security data structure filled previously by the handler's ``PDCryptNewSecurityDataProc`` callback.

Saving a secured file
---------------------

When saving a file, it is important to remember the following information:

-  When a user selects document encryption for the first time or has selected a different security handler for an already encrypted file, the newly-selected handler does not take effect until the document is saved.
-  To be allowed to save a file, the user must have ``PDPermReqOprModify`` or either ``pdPermEdit`` or ``pdPermEditNotes`` permission.
-  In Acrobat 5.0, a save operation forces a complete encrypted copy of the file to be written.

The following information is applicable to when a secured file is saved:

-  If the file is being saved in an encrypted form for the first time or if a different security handler is selected, Acrobat calls the new security handler's ``PDCryptNewSecurityDataProc`` callback. This action creates a new copy of the new security handler's security data structure.
-  If the file is saved in an encrypted form for the first time or if a different security handler is selected, Acrobat calls the new security handlerfs ``PDCryptUpdateSecurityDataProc`` callback. This presents whatever user interface the security handler has for enabling the user to set permissions.
-  Acrobat invokes the new security handler's ``PDCryptFillEncryptDictProc`` callback to encrypt and write into the PDF file's encryption dictionary whatever data the security handler wants to save in the PDF file.
-  Acrobat writes out the encrypted file.
-  Acrobat sets the new security handler as the document's current security handler.

Setting security for a document
===============================

Acrobat calls the new security handler's ``PDCryptUpdateSecurityDataProc`` callback to present whatever user interface the security handler has for allowing the user to set security, passwords, and so forth.

When security is set, the security handler obtains the permissions and authorization data (such as passwords) to be used for the file. The settings do not take effect until the file is saved, as described in the previous section.

Saving a file with an encryption dictionary
-------------------------------------------

To save a file with a new encryption dictionary, use the following callbacks in the ``PDCryptHandlerRec`` :

#. ``PDCryptNewSecurityDataProc`` creates and initializes a security data structure. It is called with ``encryptDict`` (a Cos object) set either to NULL or to a valid encryption dictionary, in which case the fields of the encryption dictionary are read and placed into the security data structure. For information about a Cos object, see `Working with Cos Objects <Plugins_Cos.html#50618418_86959>`__.
#. ``PDCryptUpdateSecurityDataProc`` gets the current security data structure by invoking the ``PDDocGetNewSecurityData`` method. It then makes a copy of the structure with which to work. This new copy is freed if an error or cancel condition is encountered. The user is requested to log in to their PKI infrastructure to access the user's keys and certificates.

If the security data structure was seeded with information from ``encryptDict``, an internal authorize procedure is called. This procedure decrypts and examines the data fields in the security data structure copy that are set to indicate the user's permissions and, possibly, information relating to the document symmetric key.

A user interface is provided to enable your plugin to specify a list of recipients for the document. If all goes well, the ``secDataP`` argument to ``PDCryptUpdateSecurityDataProc`` is sent to the copy of the security data structure, and Acrobat frees the original security data structure.

#. ``PDCryptFillEncryptDictProc`` writes data from the security data structure into the encryption dictionary. When Acrobat is done with the security data structure, it invokes the ``PDCryptFreeSecurityDataPro`` c method.

Opening an encrypted file
-------------------------

The following callbacks are used when opening an encrypted file:

#. ``PDCryptNewSecurityDataPr`` oc is invoked as described in the previous section.
#. ``PDCryptAuthorizeExProc`` is invoked and returns NULL since the authorization permissions have not been determined. This callback should not present a user interface.
#. The plugin does not use the authorization data structure, but instead only the security data structure. It calls an internal authorization procedure that determines the authorization level of the logged-in user. This authorization procedure is the same procedure as is called by ``PDCryptUpdateSecurityDataProc`` in the previous section.
#. ``PDCryptAuthorizeEx`` or ``PDCryptAuthorize``. The authorization permissions have now been established (by the call to get the authorization data) and are returned. Acrobat opens the file.
