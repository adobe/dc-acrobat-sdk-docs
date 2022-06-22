******************************************************
Creating Plugin and PDF Library Applications
******************************************************

Use the Acrobat SDK and the Adobe PDF Library SDK to create plugin applications as well as stand-alone applications that interact with PDF documents.

Working with platform-specific techniques
=========================================

The Acrobat API is nearly platform-independent. By using the memory allocation and file system APIs provided by Acrobat or Adobe Reader, many parts of a plugin are highly portable across platforms. While this chapter contains platform-specific development information for Windows and Mac, the guidelines here should help you plugins more portable among the various supported platforms.

About platform-dependent data
-----------------------------

The following are platform-specific data types that appear explicitly in the Acrobat core API:

* **platform data structures**: Data structures such as the Win32 data structure that represents a window.

* **platform path values**: The data structure that represents the path to a file.

* **platform event**: The data structure that represents mouse clicks, key presses, window activation, and so on.

* **Return value**: Constants that indicate, for example, that a file could not be opened because it was not found.

The following are platform-specific data types that do not appear explicitly in the API, but are used by Acrobat, Adobe Reader, or plugins:

* **Cursors**: Data structures representing a cursor.

* **Toolbar button icons**: Pixmaps that appear in the Acrobat or Adobe Reader toolbar.

* **Menu item icons**: Icons that some platforms let you display adjacent to a menu item.

* **Menu items**: Remember that not all Acrobat or Adobe Reader implementations have the same menu items.

Portability techniques
----------------------

The following techniques can improve your plugin's portability:

-  Use predefined types instead of short and long.
-  Use Acrobat API methods wherever possible instead of platform-specific APIs.
-  Use ``#if`` around platform-specific code such as dialog boxes and use the predefined platform constants (``MAC_PLATFORM``, ``WIN_PLATFORM``, and so forth) to test what platform you are compiling for.
-  Place platform-specific code in separate files from the main portion of the plugin, so that you can easily recognize and rewrite platform-dependent sections.

Windows techniques
------------------

Developing Windows plugins
~~~~~~~~~~~~~~~~~~~~~~~~~~

You can put your plugins in the default Acrobat plugin location the plugins folder (in the same directory as the Acrobat executable).

You are encouraged to use the plugin samples BasicUI and Starter as a basis for developing plugins. These samples have all of the appropriate project settings. The Starter sample only builds a loadable plugin while the BasicUI sample adds menu items.

Locating and loading plugins
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When Acrobat or Adobe Reader starts, it scans the plugins folder (in the same directory as the Acrobat executable) for DLLs with the extension.API. Acrobat or Adobe Reader also searches nested directories, allowing you to group plugins in folders. When it locates a file with the extension.API, it looks for the ``PlugInMain`` exported symbol, which specifies the entry point for your plugin. Acrobat or Adobe Reader loads the plugin by invoking the ``LoadLibrary`` function and then calls the function referenced by the ``PlugInMain`` symbol.

The ``LoadLibrary`` function calls your plugin's ``DLLMain`` entry point with the parameter ``DLL_PROCESS_ATTACH`` passed. Your plugin can run some initialization code in DLLMain, such as allocating memory, before its ``PluginMain`` function is called by Acrobat or Adobe Reader.

If you allocate memory in your plugin's ``DLLMain`` entry point, it must deallocate that memory when ``DLLMain`` is called with ``DLL_PROCESS_DETACH``. If your plugin relies on its implementation of the ``PluginUnload`` function to deallocate memory, it could fail if Acrobat or Adobe Reader unloads the plugin immediately without calling the plugin's handshaking callbacks. This would happen in the following situations:

-  If the plugin is not Adobe-certified and the user has specified the Certified Plugins Only option in the Preferences settings.
-  If the plugin is running under Adobe Reader, but it is not enabled for Adobe Reader. This could potentially cause a crash when Acrobat or Adobe Reader closes.

Why a plugin might not load
~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are several reasons why a plugin may not load successfully:

-  The plugin's filename extension was not changed from.dll to.api.
-  Too many plugins are being loaded by either Acrobat or Adobe Reader. The number of plugins that can be loaded at any one time depends on the code generation settings of all loaded plugins.
-  The plugin attempts to register with the same ``extensionName`` as another plugin that has already loaded. In this case, Acrobat or Adobe Reader displays an error message indicating the problem.
-  You cloned your project from an existing plugin project that uses a.def file and forgot to change the ``LIBRARY`` entry in the.def file.
-  The DLL is bad. This can occur even if the plugin compiled and linked without errors. Generally, rebuilding the plugin completely (doing a Rebuild All) solves the problem.

Macros and project settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following macros must be defined or set in your preprocessor definitions:

-  ``WIN_ENV``
-  ``WIN_PLATFORM (preferred)``
-  ``WIN32``
-  ``WINDOWS``

For a plugin to be loaded, it must export the symbol ``PlugInMain``. This task can be accomplished by including a.def file in the project for the plugin or by including the line ``/EXPORT:PlugInMain`` in the project settings for the plugin. If you are developing an Adobe Reader plugin, you also must define a macro to access HFTs available to Adobe Reader. (See `Creating an Adobe Reader plugin <Plugins_ReaderPlug.html#50618405_11144>`__.)

Interapplication communication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Plugins can add their own DDE messages to those supported by Acrobat or Adobe Reader by registering to receive DDE messages directly. The DDEClnt sample in the Acrobat SDK shows how to do this.

A plugin cannot implement OLE automation or be an ActiveX server through the use of MFC. This is because Acrobat or Adobe Reader uses MFC to implement its OLE automation and there cannot be two MFC-based OLE automation servers in the same process. OLE or ActiveX server plugins must be implemented using the ActiveX Template Library. Plugins should use the DDEML library to handle DDE messages. Problems may arise if they do not.

Debugging
~~~~~~~~~

Generally, the debugger built into Visual C++ is adequate to debug plugins. Debugging a Windows plugin compiled with Visual C++ is quite simple if you remember a few things:

-  Specify the Acrobat plugin directory under the link | output tab in the Project Settings dialog box.
-  Specify the Acrobat or Adobe Reader executable under the executable for debug session in the Project Settings dialog box.
-  The first time you build a plugin, do a Rebuild All.
-  Set breakpoints in your source code by selecting the line and clicking the hand icon or pressing the F9 key.
-  After setting breakpoints, press the F5 key to have Microsoft Visual Studio start Acrobat or Adobe Reader.

Two common reasons why breakpoints may not be hit are:

-  You started Acrobat or Adobe Reader from the File Manager or Program Manager. Acrobat or Adobe Reader must be started from within Microsoft Visual Studio to debug plugins.
-  You copied your plugin into Acrobat's plugin directory, instead of specifying the plugin directory in the Link | Output dialog box.

Handling the thread local storage (TLS) limit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is a limit to the number of plugins that Acrobat or Adobe Reader can load at any given time. This is due to a limitation of the multi-threading model used by the Win32 API and is dependent on the code generation settings of the plugins being loaded.

The following information can help maximize the ability of Acrobat and Adobe Reader to load plugins.

When a process is created, an array of bit flags is allocated for the management of thread-specific data. In the current Win32 implementation, this array is limited to 64 members or TLS slots. Every DLL/plugin that uses thread local storage is allocated at least one slot when loaded using LoadLibrary. This includes system DLLs, plugins, and all the DLLs they load. When all of the TLS slots have been occupied for a process, LoadLibrary will fail for any DLL requiring a TLS slot.

The following guidelines will minimize the TLS slots occupied by plugins:

-  Plugins that are not multi-threaded should only link with the single-threaded run-time libraries that do not occupy a TLS slot.
-  If your plugin is multi-threaded, consider linking it with the multi-threaded DLL run-time library. Both the DLL and static versions of the run-time libraries occupy a TLS slot. However, many plugins shipped with Acrobat or Adobe Reader use the DLL version so the run-time DLL does not occupy another TLS slot after it is loaded by the process.

.. note::

   Acrobat and Adobe Reader do not currently generate an error when a plugin fails to load due to the TLS limit.

Using modal dialog boxes
~~~~~~~~~~~~~~~~~~~~~~~~

If you write plugins that contain modal dialog boxes on the Windows platform, you need to perform the following steps:

#. When you are creating your dialog box, get the parent ``HWND`` of the dialog box using the ``WinAppGetModalParent`` method. Then use this ``HWND`` when creating the dialog box.

Ensure that you get the mouse capture before putting up your dialog box so that Acrobat or Adobe Reader does not receive the mouse clicks. After your dialog box returns, set the mouse capture back.

::

        HWND CapturehWnd, hParent;
         CapturehWnd = GetCapture();
         if ( CapturehWnd != NULL )
             ReleaseCapture();
         hParent = WinAppGetModalParent(AVAppGetActiveDoc());
         nRetVal = DialogBox(gHINSTANCE, MAKEINTRESOURCE(IDD_PROPS), hParent,
         PropsDialogProc);
         if ( CapturehWnd != NULL )
             SetCapture( CapturehWnd );

2. As soon as you have an ``HWND`` for the dialog box itself, usually in response to the ``WM_INITDIALOG`` message, you should acquire a new ``AVWindow`` using the ``AVWindowNewFromPlatformThing`` method. Save this ``AVWindow`` in some place where you can access it when the dialog box is destroyed. Then pass the ``AVWindow`` to the ``AVAppBeginModal`` method.

Here is code that is called in response to a ``WM_INITDIALOG`` message:

::

        static AVWindow sAVWin;
        .....
         // hWnd is the window handle of the dialog box window
         sAVWin = AVWindowNewFromPlatformThing(AVWLmodal, 0, NULL,
         gExtensionID, hWnd);
         AVAppBeginModal(sAVWin);

3. At the time the dialog box is destroyed, usually in response to a ``WM_DESTROY`` message, end the modal operations using ``AVAppEndModal``. If you are not using MFC, destroy the AVWindow for which you saved the handle with ``AVWindowDestroy``. Here is a section of code called in response to a ``WM_DESTROY`` message:

::

        AVAppEndModal();
        AVWindowDestroy(sAVWin);

If you are using MFC to put up your dialog box, do not call ``AVWindowDestroy`` in the ``WM_DESTROY`` message. MFC will cause Acrobat or Adobe Reader to destroy the AVWindow automatically.

Mac OS techniques
-----------------

Developing a Mac OS plugin
~~~~~~~~~~~~~~~~~~~~~~~~~~

Apple Xcode 9.2is the currently-supported development environment for developing plugins. Apple developer tools contain the correct frameworks and libraries in addition to extensive documentation on making plugins (and applications) Mach-O and Carbon compliant.

With macOS 10.14.5 and macOS 10.15 Catalina, Apple has mandated notarization of all applications. Conforming to this requirement, October 2019 updates for both Adobe Acrobat and Adobe Acrobat Reader applications on DC and 2017 tracks are notarized. Adobe recommends that third-party plug-in developers should get their plug-ins notarized by Apple. Without notarization, your plug-ins will fail to load in Adobe Acrobat and Adobe Acrobat Reader on macOS 10.14.5 and above.

For more information on the Apple Notarization process, see `Notarizing Your App Before Distribution <https://developer.apple.com/documentation/security/notarizing_your_app_before_distribution>`__.

.. note::

   Acrobat SDK samples are built against the MacOSX10.11 as universal binaries.

Using the samples
~~~~~~~~~~~~~~~~~~~~~~~~~~

You are encouraged to use the Starter plugin sample as a basis for developing your plugins. This sample contains the appropriate project settings as defined in the supplied Xcode project configuration files. The Starter sample does nothing other than build a loadable plugin. In addition, other plugins that could be useful as a starting point for developing plugins are available.

The Info.plist file contains a list of properties used by the package. Adobe provides a common info.plist file. It uses project settings to define properties appropriately for each plugin.

Establishing Carbon or Cocoa compliance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Carbon and Cocoa are application environments of the Mac OS X operating system. Each includes programming interfaces that include header files, a library, and a runtime.

Acrobat 9.0 uses property lists (Info.plists), which are stored with the executable files and resources that make up an application, known as an application bundle. For more information about converting existing Mac OS applications into Carbon, see http://developer.apple.com/documentation/Carbon/Conceptual/carbon_porting_guide/.

.. note::

   To prevent problems with older style event handling, plugins must replace calls to ``WaitNextEvent`` with calls to ``RunCurrentEventQueue`` or ``ReceiveNextEvent``.

Xcode configuration files
~~~~~~~~~~~~~~~~~~~~~~~~~~

Mac OS plugin sample build settings are defined in SDK and project-level configuration files and not within the projects themselves. Xcode configuration files include lists of build settings definitions that can be applied to multiple projects and/or multiple targets.

The configuration files and settings have a hierarchical structure modeled after `Apple Developer documentation <http://developer.apple.com/documentation/DeveloperTools/Conceptual/XcodeUserGuide/Contents/Resources/en.lproj/05_05_build_configs/chapter_33_section_6.html>`_

Each project is based on a project-level build settings file(s) that includes SDK-level settings.

At the SDK level, there are separate configuration files for SDK plugin settings (Default.xcconfig), environmental variables (Environment.xcconfig) and resource settings (Resources.xcconfig). Global target settings for _debug and _release targets are stored in Debug.xcconfig and Release.xcconfig, respectively.

At the project level, there are four configuration files:

-  ProjectDefault.xcconfig
-  ProjectResources.xcconfig
-  Project_debug.xcconfig
-  Project_release.xcconfig.

Each project level configuration file includes the settings from its related (parent) SDK configuration file (for example, ProjectDefault.xconfig includes Default.xcconfig and ProjectResources.xcconfig includes Resources.xcconfig). Generally, SDK-level setting definitions are not included directly, but rather are included through project-level configuration files.

Each SDK plugin project includes a single (Default) configuration based on the ProjectDefault.xcconfig build settings which include the SDK-level Default.xcconfig build settings. Each project has two targets: a _debug target and a _release target. The targets' build settings are based on Project_debug.xcconfig and Project_release.xconfig, respectively. Similar to the project configuration files, each target configuration settings include its parent SDK configuration file; for instance, Project_debug includes Debug.xcconfig settings.

Project-level configuration files whose names begins with Project are the default project settings included with most SDK plugin samples. Project-level configuration files that are prefixed with a specific sample's name include settings specific to that sample. The build settings for most SDK projects are extremely similar with most definitions residing in the SDK configuration files.

Using SetGWorld rather than SetPort
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With the move to carbonization and double buffering, you should use GetGWorld rather than the toolbox call SetPort. Using both calls in the same plugin can cause the current port to get out of sync with the current device. Using only GetGWorld maintains the correct port and device settings.

In all cases, you should pass ``GetMainDevice`` unless you have a particular device in mind or you are restoring the GWorld to its original state. The following code is an example.

::

    ACCB void ACCB2 foo(AVPageView pageView)
     {
         CGrafPtr oldGWorld, pagePort = NULL;
         GDHandle oldDevice;
         pagePort = (CGrafPtr)AVPageViewAcquireMachinePort(pageView);
         if (pagePort){
             GetGWorld(&oldGWorld, &oldDevice);
             SetGWorld(pagePort, GetMainDevice());
             //Draw to the port here
             SetGWorld(oldGWorld, oldDevice);
             AVPageViewReleaseMachinePort(pageView, pagePort);
         }
     }

.. _locating-and-loading-plugins-1:

Locating and loading a plugin
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When Acrobat or Adobe Reader starts, it scans the plugin folder to locate and load plugins with the acroplugin file extension. PowerPC plugins must have creator ``CARO`` (CFBundleSignature) and type ``XTND`` (CFBundlePackageType). Each plugin exports a single main entry point, ``AcroPluginMain``. When loading a plugin, Acrobat or Adobe Reader jumps to the plugin's entry point to begin handshaking. (See `Handshaking <Plugins_Pimech.html#50618406_89824>`__.)

Using memory
~~~~~~~~~~~~

The Acrobat or Adobe Reader memory allocator gets its memory from the system and not from the application's memory partition. (See `Acquiring and releasing objects <Plugins_Pimech.html#50618406_68646>`__.)

Memory allocation guidelines are particularly important in Mac OS to ensure that memory is allocated from the system rather than from the application partition. Otherwise, your plugin is very likely to cause Acrobat or Adobe Reader to run out of memory.

Resource file considerations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Acrobat or Adobe Reader open a plugin's resource file with read-only permissions. In addition, plugins cannot assume that their resource file is on top of the resource chain each time they are entered by using an ``ASCallback``. Plugins must explicitly move their resource file to the top of the resource chain before accessing resources in it. As a result, all code that directly or indirectly invokes ``GetResource`` must be modified. This can be accomplished either directly or by using the SafeResources routines in the Acrobat SDK.

Using SafeResources
~~~~~~~~~~~~~~~~~~~~~~~~~~

The recommended way to access resources in the plugin file is to use the functions declared in the header file SafeResources.h in the SDK. These functions are direct replacements for each Toolbox function that directly or indirectly calls ``GetResource``. The replacement functions automatically place the plugin file on top of the resource chain before accessing the resource, and restore the old resource chain after accessing the resource.

Manipulating the resource chain directly
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you choose to manipulate the resource chain directly, you must modify all code that directly or indirectly calls GetResource. The list of such Toolbox calls can be determined from SafeResources.h, by removing the prefix Safe from the names of the calls. Before calling each such Toolbox function, you must put the plugin's resource file on top of the resource chain, and after such calls, you must restore the old resource chain. For example:

::

    DialogPtr myDialog = GetNewDialog(23, NULL, (Ptr) -1);

must be rewritten as:

::

    short oldResFile;
     DialogPtr myDialog;
     oldResFile = CurResFile();
     UseResFile(gResFile);
     myDialog = GetNewDialog(23, NULL, (Ptr) -1);
     useResFile(oldResFile);

The global variable ``gResFile`` is automatically set up during handshaking and is declared in PICommon.h.

Macros
~~~~~~~~~~~~~~~~~~~~~~~~~~

The following macros must be defined:

-  ``POWER_PC`` must be defined
-  ``PLATFORM`` must be defined as MacPlatform.h
-  ``PRODUCT`` must be defined as Plugin.h

These macros are automatically defined correctly for the platform and development environment by the header file PIPrefix.h. You are encouraged to use this header file.

Mac OS-only methods
~~~~~~~~~~~~~~~~~~~

Plugins should not use the ``ASPathFromPlatformPath`` method in Mac OS. Instead, they should invoke ``ASFileSysCreatePathName``. The ``AVAppDidOrWillSwitchForDialog`` method is only useful to plugins in Mac OS.

.. _interapplication-communication-1:

Inter application communication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Plugins can add their own Apple events to those supported by Acrobat or Adobe Reader by hooking into the Apple event handling loop for Acrobat or Adobe Reader. This is done by replacing the ``AVAppHandleAppleEvent`` method in the API. If the plugin receives an Apple event it does not want to handle, it should invoke the implementation of the method it replaced, allowing other plugins or Acrobat or Adobe Reader the opportunity to handle the Apple event.

Creating a sample plugin
========================

When you start a new Acrobat plugin for the Windows platform, it is recommended that you use the Starter sample plugin as a starting point. On Windows, the project file is named Starter.sln and can be found in the following directories:

* C:Acrobat SDK\PluginSupport\Samples\Starte\rwin32
* C:Acrobat SDK\PluginSupport\Samples\Starter\win64

However, to improve your understanding of creating plugins, the remaining parts of this section discuss what tasks you must perform when creating a plugin from a blank project. When using the Starter sample plugin, it is not necessary to perform some of the tasks discussed in this section. For example, you do not need to start a new project, include header files, or add the PIMain source file. However, you still have to add application logic, compile, and build your project.

If you are developing on Windows using Visual Studio, you can use the Plugin Wizard tool to set up your plugin project. This tool includes the Acrobat SDK header files required for specific types of plugin solutions, and it adds the PIMain source file. The Wizard creates classes that uses ``ToDo`` markers to identify logic you must supply. You must still compile and build your plugin, as described in this section. See the `Plugin Wizard, see <../SamplesGuide/book/Samples_Tools.html#96791>`__.

For information on developing an Adobe Reader plugin, see `Creating an Adobe Reader plugin <Plugins_ReaderPlug.html#50618405_11144>`__.

To create a plugin:

#. Start a new C project.
#. Include Acrobat SDK header files.
#. Add the PIMain source file to your project.
#. Add application logic to meet your business requirements.
#. Compile and build your plugin.

Including Acrobat SDK library files
-----------------------------------

To create a plugin, you must include Acrobat SDK library files, such as header files, into your project. You can link to these library files from within your development environment. For more information, see the documentation that accompanies your development environment.

The Acrobat SDK library files are separated into the following categories:

-  Header files that are common to most plugins and generally referenced from PIMain.c.
-  Header files specific to core and extended APIs.

You can find these header files in  \Acrobat SDK\PluginSupport\Headers

Adding the PIMain source file
-----------------------------

You must add the PIMain.c file to your project in order to create a plugin. This source file contains application logic such as handshaking methods, that are required by plugins. You can find this file in \Acrobat SDK\PluginSupport\Headers\API

After you add this file, you can add application logic to your project.

.. note::

   As a plugin developer, you will never have to create the application logic that is located in the PIMain.c file or modify this file. However, you must include this file in your project.

Adding application logic
------------------------

You must add a source file to your project that contains the following methods:

-  ``PluginExportHFTs``
-  ``PluginImportReplaceAndRegister``
-  ``PluginInit``
-  ``PluginUnload``
-  ``GetExtensionName``
-  ``PIHandshake``

You can copy the source code that is located in the StartInit.cpp file (located in the Starter plugin) and paste it. For information about these methods, see `About plugin initialization <Plugins_Pimech.html#50618406_58810>`__.

The entry point to a plugin is the ``PluginInit`` method. For example, if you add the following line of code to this method, an alert box is displayed when Adobe Reader or Acrobat is started:

::

    AVAlertNote("This is your first plugin");

You can add an application to the ``PluginInit`` method to meet your business requirements. You can invoke other user-defined functions that you create or you can add application logic to this method that performs a specific task. For example, you can add application logic to this method that adds a new menu item to Adobe Reader or Acrobat. (See `Creating Menus and Menu Commands <Plugins_Menu.html#50618409_98126>`__.)

Compiling and building your plugin
----------------------------------

You must compile your plugin to build the API file. As stated earlier in this guide, plugins are equivalent to Windows DLLs; however, the file extension is.api, not.dll. Once you create an API file, you must add it to \Program Files\Adobe\Acrobat\plugins.

After you add the plugin to this directory, you must restart Acrobat for the plugin to take effect.

Creating a sample PDF Library application
=========================================

A PDF Library application does not have the same overhead as a plugin. That is, unlike a plugin, a PDF Library project does not require handshaking and initialization methods. A PDF Library application is a standard C/C++ project with PDF Library files included.

.. note::

   For a detailed discussion about using the PDF Library API, see `Inserting Text into PDF Documents <Plugins_Insertext.html#50618411_44849>`__.

Contents of the PDF Library SDK
-------------------------------

The Adobe PDF Library SDK consists of the following components:

-  Core libraries that provide PDF Library functionality
-  Header files that provide access to the libraries
-  Fonts used in the library's basic operations
-  Sample applications and code snippets showing how to use the library for a variety of purposes
-  Documentation discussing development techniques and the PDF Library APIs.

Including library files
~~~~~~~~~~~~~~~~~~~~~~~

The following components are shipped with the PDF Library SDK:

-  **Acrobat PDF Library**: These are DLLs on the Windows platform and a shared object library Mac OS. In Windows, an interface library must be included in your Microsoft Visual Studio project. The following are the file names of these libraries:
- **AdobePDFL.lib**: The interface library for the Windows PDF Library DLL.
-  **AdobePDFL.dll**: The Windows PDF Library DLL.
-  **libpdfl.so**: The shared object library for supported UNIX platforms (deprecated).
-  **AdobePDFL framework**: The framework for Mac OS.
-  PDF Library SDK header files: The PDF Library SDK include directory contains headers for accessing the API methods. You can link to these library files from within your development environment. Consult the documentation that accompanies your development environment for information about linking to library files.

   These files perform the same task in the PDF Library SDK as in the Acrobat SDK. For example, the PDCalls.h provides HFT functionality for PD layer functions. (See `Including Acrobat SDK library files <Plugins_CreatingSimplePlug.html#50618417_78469>`__.)

Sample code
~~~~~~~~~~~

Samples are provided for the Windows and Mac OS in two forms:

-  Stand-alone sample programs-  mi
-  The SnippetRunner, an environment and infrastructure for code snippets that illustrate specific functions or techniques.

Sample code is intended to demonstrate the use of the PDF Library API and is not necessarily robust enough for a final implementation. The sample code itself is platform-independent, as is the majority of the PDF Library API; the only difference between the sample source code for different platforms is the line-endings.

The Mac OS samples are provided as application packages. This format is normal for double-clickable applications, but they can also be run from the command line. To run them from the command line, you can either specify the command line arguments in the Xcode project file and execute within the IDE, or you can target the actual executable, which is in the Contents/MacOS folder inside the package. For example, from the Terminal window:

::

    $ cd helowrld.app/Contents/MacOS/
    $ helowrld

The MT (multi-threading) samples require command line arguments (a default set is added to the project files). Therefore, execution from within the IDE is preferred. Also, for those samples you must use absolute paths for the command line arguments.

Stand-alone samples
'''''''''''''''''''

The following table lists the stand-alone sample applications that accompany the PDF Library SDK.

.. _section-1:


 

+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sample application                | Description                                                                                                                                                        |
+===================================+====================================================================================================================================================================+
|                                   | Shows how to modify existing pages in a PDF file. It adds a footer to each page and shifts the first line of each text run.                                        |
|                                   |                                                                                                                                                                    |
|    addelem                        |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Used to compile all samples at the same time. Available for Windows and Mac OS only.                                                                               |
|                                   |                                                                                                                                                                    |
|    all                            |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to create tiling patterns in a PDF document.                                                                                                             |
|                                   |                                                                                                                                                                    |
|    CreatePattern                  |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to programmatic-ally decrypt a PDF document encrypted with Acrobat standard security options.                                                            |
|                                   |                                                                                                                                                                    |
|    Decryption                     |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to render a page to memory using the ``PDPageDrawContentsToMemory`` PDF Library method, and creates a PDF file with a bitmap image rendered on the page. |
|                                   |                                                                                                                                                                    |
|    drawtomemory                   |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows font enumeration and font embedding.                                                                                                                         |
|                                   |                                                                                                                                                                    |
|    fontembd                       |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows the basics of creating a PDF document.                                                                                                                       |
|                                   |                                                                                                                                                                    |
|    helowrld                       |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Re-encodes PDF embedded images with the JPX filter and writes out a new PDF file with the re-encoded images embedded.                                              |
|                                   |                                                                                                                                                                    |
|    JPXEncode                      |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to merge two PDF files.                                                                                                                                  |
|                                   |                                                                                                                                                                    |
|    mergepdf                       |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Demonstrates use of an in-memory file system for a simple workflow within a multi-threaded context.                                                                |
|                                   |                                                                                                                                                                    |
|    MTInMemFS                      |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Demonstrates creation of multiple threads to simultaneously generate multiple PDFs.                                                                                |
|                                   |                                                                                                                                                                    |
|    MTSerialNums                   |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Demonstrates multiple threads concurrently processing multiple PDF documents.                                                                                      |
|                                   |                                                                                                                                                                    |
|    MTTextExtract                  |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to add hyperlinking (specifically targeting URIs) capabilities to an existing PDF document.                                                              |
|                                   |                                                                                                                                                                    |
|    Peddler                        |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | Shows how to print a PDF file to a printer or to a file using the PDF Library method PDFLPrintDoc.                                                                 |
|                                   |                                                                                                                                                                    |
|    printpdf                       |                                                                                                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+

SnippetRunner application
'''''''''''''''''''''''''

SnippetRunner allows you to quickly prototype code containing PDF Library API calls without the overhead of writing and verifying a complete application. It provides an infrastructure and utility functions to support execution and testing of code snippets, which are small but complete portions of PDF Library application code.

SnippetRunner consists of these major components:

-  An application that acts as a back-end server and that provides the basic functionality, including a parameter input mechanism, debug support, and exception handling.
-  A graphical user interface that acts as a client to the back-end server. (This user interface, called the Common User Interface, is also provided with the Acrobat SDK, which uses an Acrobat plugin for its back end.)

For more information about SnippetRunner, see the ` <../SnippetRunnerCookbook/Snippet_SnippetRunnerCookbook.html#38527>`__.

Developing applications with the Adobe PDF Library
--------------------------------------------------

This section details the compiler environment variables (macros) required to build applications against the Adobe PDF Library. On all platforms, you must define the PRODUCT macro for the preprocessor.

::

    PRODUCT="HFTLibrary.h"

This macro is used as a trigger for conditional compilation and allows the same headers to be used for both the Acrobat core API and the Adobe PDF Library.

Windows
~~~~~~~

The following macros must also be defined in the IDE project settings for applications to compile correctly on the Windows platform:

-  ``WIN_ENV``
-  ``WIN32``
-  ``WIN_PLATFORM``

The Adobe PDF Library is compiled with code generation set to Multithreaded. Applications linking with the Adobe PDF Library must have code generation settings that match or there will be conflicts between the Microsoft libraries ``MSVCRT`` and ``LIBCMT``.

In Visual Studio, the Ignore Libraries settings (click Project Settings > Link > Input > Ignore libraries) should not ignore LIBCMT (other versions of PDF Library do ignore it).

The Adobe PDF Library is distributed as an interface library (AdobePDFL.lib) and matching DLL (AdobePDFL.dll). You should link the interface library into your application.

The operating system must be able to access the Adobe PDF Library at runtime. It does so by searching the paths specified by the PATH environment variable, as well as the folder in which the application was launched.

Mac OS
~~~~~~

The Mac OS libraries use a precompiled header and prefix file to define the appropriate macros. See Precompile.pch in the Samples:utils directory of the Adobe PDF Library SDK for the macros required to successfully compile the samples.

Initialization and termination
------------------------------

Applications must initialize and terminate the Adobe PDF Library appropriately:

-  Call ``PDFLInit`` to set up internal data structures, locate required resources such as fonts, and perform initialization (such as setting client-provided memory allocation routines). Calling most library functions without successfully initializing the library results in error conditions. The rest of this section provides details on using PDFLInit.
-  Call ``PDFLTerm`` to clean up before an application terminates or when access to PDF Library functionality is no longer needed.

Since the PDF Library supports thread-safety (since version 6.1.2), initialization and termination are handled on a per-thread basis.

The ``PDFLInit`` function takes as a parameter a ``PDFLData`` structure, defined in the API header file PDFInit.h. You must provide valid values for the following members of the structure before passing it to ``PDFLInit`` :

-  size denotes the size of the structure and can be obtained with ``sizeof(PDFLDataRec)``.
-  listLen is the number of directories listed in dirList.
-  dirList is an array of directories that contain font resources. The following discussion explains how to use this member on each of the supported platforms.

In Windows and Mac OS, the PDF Library searches for fonts in the default system and in their subdirectories (to 99 levels). You can specify additional font directories to search (also to 99 levels) in the dirList array. (Note that this can affect performance.)

Here is an example showing how to pass the font paths to dirList for Windows:

::

    pdflLibData.dirList[0]= strdup("C:MyfontfolderCMap");
     pdflLibData.dirList[1]= strdup("C:MyfontfolderCIDFont");
     pdflLibData.dirList[2]= strdup("C:MyfontfolderFont");

The paths can be either full paths or paths relative to the directory from which the executable linking in the Adobe PDF Library was started. You can set the value ``kPDFLInitIgnoreDefaultDirectories`` in the flags field of the ``PDFLData`` structure to indicate that the default font directories should not be searched but only the directories provided in dirList.

For more details, see the functions ``PDFLGetDirList_Win`` and ``PDFLGetDirList_Mac`` in the MyPDFLibUtils.cpp file in the ``Samples/utils`` directory.

Multithreading
--------------

When using the thread-safe PDF Library, initialization and termination now additionally need to be performed for each thread that calls into the library, as well as at the process level. The interfaces for per-thread initialization/termination are the same as before.

Since each thread acquires an independent PDF Library memory context, you should not share PDF Library data and resources among threads. This includes sharing the same PDF file.

The Adobe PDF libraries are thread-safe. To use threads, simply make the appropriate system call (``beginthreadex`` on Windows). Multiple threads cannot share PDF Library data types. However, they share the same process heap; therefore, an application can share generic data types between threads. Multiple threads can open the same file read-only; however, multiple threads should not attempt to write to the same PDF document.

In Windows, ``CreateThread`` is not recommended if the application is using most stdio.h-defined functions, including file I/O and string manipulation. It is best to ``use _beginthreadex`` on Windows, which performs extra bookkeeping to ensure thread safety.

Upgrading existing plugins
==========================

This section discusses how to upgrade an existing Acrobat plugin to work with a newer version of Acrobat.

Refer to the Release Notes.

Detecting supported APIs
------------------------

Acrobat Pro and Acrobat Pro Extended support the full set of APIs. For Acrobat Standard and Adobe Reader, if you try to use an API that is not supported, nothing will happen. The same HFT version numbers are used across products, so all APIs are callable on all products, but some APIs simply do not work on certain products.

Additionally, the Extended APIs provided by plugins do not work if an Acrobat product does not support the use of those APIs. The HFTs do not load, so you must check whether the HFT was successfully imported.

It is possible to determine in your code whether the HFT you are expecting is in fact the one that you are importing, and whether it imported at all: simply check for a ``NULL`` return value. For example, a ``NULL`` will be returned in the following call if ``AcroColorHFTNAME`` with the specified version is not available:

::

    gAcroColorHFT = ASExtensionMgrGetHFT(ASAtomFromString(AcroColorHFTNAME),
     PI_ACROCOLOR_VERSION);

Plugins that use new HFTs introduced with the current Acrobat version do not run on earlier Acrobat versions. Whether or not an attempt to load these HFTs forces the plugin to fail is controlled by flags in PIMain.c of the form ``PI_HFT_OPTIONAL``. By default, these flags are undefined, so if your plugin attempts to load HFT and cannot, initialization fails. If you define ``PI_HFT_OPTIONAL`` with some value (preferably 1) and the load is not successful, initialization continues.

Use the ``ASGetConfiguration`` method to determine the configuration on which the plugin is running. Use conditional logic in your code so that it makes calls only to APIs that are supported on that particular configuration. In any case, your code should check for ``NULL`` HFTs so that it does not call APIs that are not supported on the current configuration.

Under Adobe Reader, when a rights-enabled PDF file is opened, a flag is set that allows a plugin to use APIs that become enabled as a result of loading the rights-enabled PDF. Familiarize yourself with the features available on the different configurations of Acrobat to ensure that you install plugin menus and toolbars appropriately at initialization. Ensure that you make calls only to APIs supported on the platform detected.

Migrating PDFL apps to Xcode
=============================================================

For the PDF Library, the supported Mac OS X development environment is Xcode (formerly the supported environment was Metrowerks CodeWarrior). With this change comes a new set of headers, frameworks and libraries that may or may not be compatible with existing plugin code and with existing CodeWarrior projects.

You can migrate a PDF Library application that was created using CodeWarrior to Xcode. As a starting point, it is recommended that you read the information that is located at the following URL: http://developer.apple.com/documentation/DeveloperTools/Conceptual/MovingProjectsToXcode/index.html.

The PDF Library SDK samples have debug and release targets that are built against the MacOSX10.4u.sdk SDK. These are carbon applications that create universal binaries linked to universal Adobe libraries. For a complete list of compatible application build settings, see the MacSDKConfiguration Xcode configuration files and ProjectConfigurations files included in the PDF Library SDK.
