******************************************************
Working with Unicode Paths
******************************************************

This chapter explains how to work with Acrobat or Adobe Reader's support of Unicode paths. Using this feature, you can programmatically open and save Unicode-named files and select Unicode-named folders. You can, for example, enable a user to open a Unicode-named file and view the corresponding PDF document in Acrobat or Adobe Reader.

About Unicode paths
===================

The Unicode file path feature takes effect when an end user selects a Unicode-named PDF file to open or save. This feature is also used when a Unicode-named file path is passed as an argument to an Acrobat core API method. However, this feature is in effect only when it is required. That is, when a non-Unicode file system is used, the Unicode path feature is not in effect. As a result, the Unicode file system is separate from the default file system, which is non-Unicode.

You can programmatically use this feature by obtaining a pointer to the Unicode file system ``fileSys`` argument and then invoking a method that accepts the ``fileSys`` argument. The Windows Unicode file system can be obtained by either invoking the ``ASGetDefaultUnicodeFileSys`` method or by invoking the ``ASFileGetFileSysByName`` method and passing either ``ASAtomFromString("Win")``.

Creating Unicode file path application logic
============================================

When creating application logic that requires a file system argument (either a Unicode file system or the default file system), do not pass ``Null`` and avoid invoking the ``ASGetDefaultFileSys`` method. A file system argument must be provided along with the path name argument.

Never assume that the ``ASPathName`` argument is a character pointer. Do not typecast any character value to an ``ASPathName``, and do not typecast a returned ``ASPathName`` value to a character pointer. If you are passing an ``ASPathName`` argument without a file system argument, then ensure that you add the file system argument.

Never assume that path and file names can be stored and passed as character pointers (``char`` ``*`` values). If you have limited code that passes file names, then change them to an ``ASText`` value or to something that is capable of storing a full Unicode path. If you have a lot of code that passes character pointer values as file names, then consider changing the internal representation of those character pointer values to UTF-8 encoded file names.

The following table lists Acrobat core API methods that should be replaced by newer methods in order to work with Unicode paths.

+---------------------------------------+--------------------------------------------+
| Old method                            | New method                                 |
+=======================================+============================================+
|                                       |                                            |
|                                       |                                            |
|    ASGetDefaultFileSys                |    ASGetDefaultFileSysForPath              |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASPathFromPlatformPath             |    ASFileSysCreatePathName                 |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASPathFromPlatformPathEx           |    ASFileSysCreatePathName                 |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysCreatePathName("Cstring") |    ASFileSysCreatePathName("ASTextPath")   |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysCreatePathName("Folder    |    ASFileSysCreatePathName("FolderPathName |
|                                       |                                            |
|    PathName")                         |    WithASText")                            |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysCreatePathName("DIPath")  |    ASFileSysCreatePathName("DIPathWithAS   |
|                                       |                                            |
|                                       |    Text")                                  |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysGetNameFromPath           |    ASFileSysGetNameFromPathAsASText        |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysDisplayStringFromPath     |    ASFileSysDisplayASTextFromPath          |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysDIPathFromPath            |    ASFileSysDIPathFromPathEx               |
+---------------------------------------+--------------------------------------------+
|                                       |                                            |
|                                       |                                            |
|    ASFileSysPathFromDIPath            |    ASFileSysPathFromDIPathEx               |
+---------------------------------------+--------------------------------------------+

If you have Windows-specific application logic that uses ``ASPlatformPathGetCstringPtr`` to get the native path name, invoke the ``ASFileSysAcquirePlatformPath`` method and pass ``WinUnicodePath`` as the ``platformPathType`` argument. The ``ASPlatformPathGetCstringPtr`` method will return an ``ASUTF16`` path.

If you use any of the following methods ``AVAppOpenDialog``, ``AVAppSaveDialog``, ``AVAppChooseFolderDialog``, ``CUIOpenDialog``, ``CUISaveDialog``, or ``CUIFolderDialog`` then ensure that the flag argument passed to these includes the ``kAVOpenSaveAllowForeignFileSystems`` flag so the Unicode file system can be used. (See `Opening a PDF document in an external window <Plugins_Documents.html#50618416_74021>`__.)

Retrieving Unicode path values
==============================

You can use the Acrobat core API to retrieve a Unicode path value. The Unicode file system is essentially the same as the classic Windows file system except that its ``ASPathName`` object supports a few additional calls (through the file system call table) and the implementation uses the wide-char (Unicode) version of the Window's APIs to access the native file system.

You can create an ``ASPathName`` object by using one of the following methods:

-  ``ASFileSysCreatePathName``
-  ``ASFileSysPathFromDIPathEx``

When you invoke either one of these methods, you must create an ``ASFileSys`` object to use as an argument.

Creating an ASFileSys object
----------------------------

Regardless whether you are working with Unicode paths or non-Unicode paths, you must create an ``ASFileSys`` object when performing tasks that manipulate files, such as opening a PDF file. An ``ASFileSys`` object represents the file system in which the file that you are manipulating is located.

To create an ``ASFileSys`` object, invoke the ``ASGetDefaultFileSysForPath`` method and specify the following arguments:

-  An ``ASAtom`` object that defines the format of the ``pathSpec`` argument (second argument). To create an ``ASAtom`` object, invoke the ``ASAtomFromString`` method and pass one of the following values:

   -  ``DIPathWithASText`` if the ``pathSpec`` is a ``DIPath`` being passed to ``ASFileSysPathFromDIPathEx``.
   -  ``ASTextPath`` for Windows
   -  ``FSRef``, ``CFURLRef``, ``POSIXPath``, ``FSSpec`` or ``Cstring`` for Mac OS

-  A void pointer that specifies the location of the file.

On Windows, the ``ASGetDefaultFileSysForPath`` method checks the specified path values and decides if the classic default file system is used works or if the Unicode file system is used. On Mac OS, the default file system is always returned (because neither has a separate Unicode file system; Mac OS already supports Unicode-named paths).

The following code example creates an ``ASFileSys`` object as part of the process of opening a PDF file. (See `Opening PDF documents <Plugins_Documents.html#50618416_65430>`__.)

::

   #if NOT_USING_UNICODE

   //Specify the PDF file to open (host encoded names only)
   //    const char* myPath = "C:PurchaseOrder.pdf";
     ASAtom pathType = ASAtomFromString("ASTextPath
   ");
   #else

   //Specify the PDF file to open (Unicode)
   //    const ASUns16* myPath = L"C:PurchaseOrder(assumeUnicodeCharacters).pdf";
     ASAtom pathType = ASAtomFromString("ASTextPath");             
   #endif
   
   //Create an ASText object
   //   ASText titleText = ASTextNew();
   ASTextSetPDText(titleText, "This PDF was opened by using the Acrobat SDK");

   //Create an ASPathName object
   //   ASFileSys fileSys = ASGetDefaultFileSysForPath(pathType, myPath);
   ASPathName pathName = ASFileSysCreatePathName(fileSys, pathType, myPath, NULL);

   //Open the PDF file
   //   AVDoc myDoc = AVDocOpenFromFile(pathName, fileSys, titleText);

   //Do some clean up
   //   ASFileSysReleasePath(fileSys, pathName);
   ASTextDestroy(titleText);

Creating an ASFileSys object that supports Unicode paths
--------------------------------------------------------

You can invoke the ``ASGetDefaultUnicodeFileSys`` method to create an ``ASFileSys`` object that represents a file system that supports Unicode paths. On Windows, this method returns an ``ASFileSys`` object that uses Unicode paths. On Mac OS, this method returns the value that the ``ASGetDefaultFileSys`` method returns because the Mac OS default file system already supports Unicode paths.

A Unicode file system can be retrieved by using the ``ASFileGetFileSysByName`` method if you pass ``Win`` (or ``ASAtomFromString("Win"`` )) for the ``ASAtom`` name argument.

As of Acrobat 8, a new ``platformPathType`` type named ``WinUnicodePath`` is supported. This is the Unicode version of the ``Cstring platformPathType`` type. It is used to get the Unicode platform path on Windows.

.. note::

   The classic Windows file system supports both ``Cstring`` and ``WinUnicodePath`` in its implementation of the ``ASFileSysAcquirePlatformPath`` and ``ASPlatformPathGetCstringPtr`` methods.

The SnippetRunner samples include a shared snippet named OpenUnicodeNamedDocSnip that demonstrates how to open a file with a Unicode (UTF-8) file name. The SnippetRunner samples are available at `Acrobat Developer Center <http://www.adobe.com/go/acrobat_developer>`__.

The following code example retrieves the host encoded platform path on Windows.

::

   char* path = NULL;
   ASPlatformPath platformPath = NULL;
   ASInt32 result = ASFileSysAcquirePlatformPath(
   fileSys, pathName, ASAtomFromString("Cstring"), &platformPath);
   if ((result == 0) && (platformPath != NULL)
     path = ASPlatformPathGetCstringPtr(platformPath);
   ASFileSysReleasePlatformPath(fileSys, platformPath);

In contrast, the following code example retrieves a Unicode platform path on Windows.

::

   ASUTF16* path = NULL;
   ASPlatformPath platformPath = NULL;
   ASInt32 result = ASFileSysAcquirePlatformPath(
   fileSys, pathName, ASAtomFromString("WinUnicodePath"), &platformPath);
   if ((result == 0) && (platformPath != NULL)
     path = (ASUTF16*)ASPlatformPathGetCstringPtr(platformPath);
   ASFileSysReleasePlatformPath(fileSys, platformPath);

Note that the ``ASPlatformPathGetCstringPtr`` method is still called to get the path string, but that a wide-char string is returned since ``WinUnicodePath`` was passed to the ``ASFileSysAcquirePlatformPath`` method.
