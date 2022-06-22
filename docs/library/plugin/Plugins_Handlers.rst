******************************************************
Creating Handlers
******************************************************

Adobe Reader and Acrobat plugins and PDF Library applications can add new types of tools, annotations, actions, file systems, and so on, thereby expanding the number of supported object types. To accomplish this task, the Acrobat core API provides a collection of callback routines called handlers that support objects. Handlers perform operations, such as creating and destroy objects, handling mouse clicks, handling keyboard events, and so on.

About handlers
==============

To add a new handler, you must write callback functions, create the appropriate data structure containing the callbacks and other data, and pass the structure to Acrobat by invoking the appropriate method. Subsequently, Acrobat automatically invokes the correct callback when it encounters an object of the type handled by the handler.

It is possible to subclass existing handlers or to create entirely new handler types. For example, a plugin can subclass the built-in text annotation handler by adding the ability to hide annotations. To accomplish this task, perform the following tasks:

#. Obtain the built-in text annotation handler structure by invoke the ``AVAppGetAnnotHandlerByName`` method.
#. Copy the structure before modifying it (not modifying the original).
#. Replace the handler's ``Draw`` callback with one that invokes the built-in ``Draw`` callback (obtained from the structure) if annotations are visible, or simply return without drawing anything if annotations are hidden.
#. Register the new handler by invoking the ``AVAppRegisterAnnotHandler`` method with a new type.

If a handler requires more data than provided in the predefined structures that are described in this section, you can append additional data to the predefined structures. To do this, create a new structure type with the predefined structure as its first member and the additional data as subsequent members. Before passing the expanded structure to an Acrobat method, cast the structure to the predefined structure type. Upon return of the structure from Acrobat, re-cast the structure to its expanded type to access the appended data.

Each handler data structure contains a size field, which specifies the structure's size. This field provides future compatibility. Different versions of the structure have different sizes, allowing Acrobat to determine which version your plugin was written to use.

.. note::

   Regardless of whether your plugin adds data to the predefined structures, it must pass the size of the predefined structure (rather than the size of its expanded structure) in the size field.

Action handlers
===============

Support for action types can be added by defining and registering an action handler. For example, the Acrobat Weblink plugin uses this ability to add support for URL links.

To add a new action type, you must provide a set of callbacks. Specify them in the ``AVActionHandlerProcs`` structure, and invoke the ``AVAppRegisterActionHandler`` method to register them.

By using an action handler, you can perform the following tasks:

-  Perform an action, such as setting a specific view, by invoking the ``AVActionPerformProc`` method.
-  Allow the user to set the action's properties (if the properties can be set) by invoking the ``AVActionDoPropertiesProc`` method.
-  Initialize an action's dictionary with default values by invoking the ``AVActionFillActionDictProc`` method.
-  Display a string containing brief instructions for the action by invoking the ``AVActionGetInstructionsProc`` method.
-  Display various text strings to be used in dialog boxes by invoking one of the following methods: ``AVActionGetButtonTextProc``, ``AVActionGetStringOneTextProc``, or ``AVActionGetStringTwoTextProc``.
-  Copy the action by invoking the ``AVActionCopyProc`` method.

Annotation handlers
===================

Support for annotation types in Acrobat can be added by defining and registering an annotation handler. For example, the Acrobat movie plugin uses an annotation handler to support video annotations.

To add an annotation type, you must provide a set of callbacks, specify them in the ``AVAnnotHandler`` structure, and register them with ``AVAppRegisterAnnotHandler``.

By using an annotation handler, you can perform the following tasks:

-  Draw the annotation by using the ``AVAnnotHandlerDrawProc`` callback method.
-  Handle mouse clicks in the annotation by using the ``AVAnnotHandlerDoClickProc`` callback method.
-  Control the cursor shape when the cursor is over the annotation by using the ``AVAnnotHandlerAdjustCursorProc`` callback method.
-  Determine whether or not a specified point is within the annotation boundary by using the ``AVAnnotHandlerPtInAnnotViewBBoxProc`` callback method.
-  Return the rectangle bounding that the annotation occupies by using the ``AVAnnotHandlerGetAnnotViewBBoxProc`` callback method.
-  Highlight (unhighlight) the annotation when it is added to (removed from) the selection by using the following callback methods: ``AVAnnotHandlerNotifyAnnotAddedToSelectionProc`` or ``AVAnnotHandlerNotifyAnnotRemovedFromSelectionProc``.
-  Return the annotation's subtype by using the ``AVAnnotHandlerGetTypeProc`` callback method.
-  Get the annotation's layer by using the ``AVAnnotHandlerGetLayerProc`` callback method.

.. note::

   For information about working with annotations, see `Creating Annotations <Plugins_Annotations.html#50618420_98126>`__.

AVCommand handlers
==================

An ``AVCommand`` represents an action that a user can perform on the current document or the current selection in the current document. ``AVCommands`` are exposed to Adobe Reader or Acrobat through ``AVCommand`` handlers. You can add new command types by defining and registering an ``AVCommand`` handler. Commands can be executed interactively, programmatically, or through batch processing.

Creating an AVCommand handler
-----------------------------

``AVCommand`` handlers consist of a series of callback functions contained in the ``AVCommandHandlerRec`` structure (see AVExpt.h). To create a command handler, perform the following tasks:

#. Initialize an instance of the ``AVCommandHandlerRec`` structure.
#. Register the ``AVCommandHandlerRec`` structure by invoking the ``AVAppRegisterCommandHandler`` method.

::

   static AVCommandHandlerRec gAVCmdHandler;
   const char *kCmdName = "MinimalCommand";

   static ACCB1 AVCommandStatus ACCB2 DoWorkImpl (AVCommand cmd)
    
   {
     AVAlertNote("The DoWorkImpl method was invoked");
     return kAVCommandDone;
   }

   void InitializeCommandHandler()
    
   {
     memset (&gAVCmdHandler, 0, sizeof(AVCommandHandlerRec));
     gAVCmdHandler.size = sizeof(AVCommandHandlerRec);
     gAVCmdHandler.Work = ASCallbackCreateProto (AVCommandWorkProc,
     &DoWorkImpl);
     AVAppRegisterCommandHandler (ASAtomFromString(kCmdName),
     &gAVCmdHandler);
   }

.. note::

   To view a complete example, see `Running commands <Plugins_Handlers.html#50618413_55225>`__.

Invoking AVCommands
-------------------

To programmatically invoke ``AVCommands`` using ``AVCommand`` methods, perform the following tasks:

#. Instantiate the command by invoking the ``AVCommandNew`` method, providing the registered name of the command:

::

    ASAtom cmdName;
     AVCommand cmd;
     cmdName = ASAtomFromString ("MinimalCommand");
     cmd = AVCommandNew(cmdName);

2. Configure the command by setting required and optional parameters.
#. Run the command by invoking the ``AVCommandExecute`` or ``AVCommandWork`` method.

Configuring AVCommands
----------------------

Prior to executing an ``AVCommand``, you configure three categories of properties:

-  Input parameters (required)
-  Configuration parameters (optional - initialized to defaults)
-  AVCommand parameters (optional - initialized to defaults)

Setting input parameters
^^^^^^^^^^^^^^^^^^^^^^^^

At minimum, you must configure input parameters. The command must be provided with a ``PDDoc`` object that represents the PDF document on which to operate, as shown in the following example. For information about a ``PDDoc`` object, see `Creating a PDDoc object <Plugins_Documents.html#50618416_97094>`__.

:: 

   //Create a PDDoc object based on the current PDF document
   AVDoc avDoc = AVAppGetActiveDoc();
   AVPageView pageView = AVDocGetPageView(avDoc);
   PDPageNumber pageNum = AVPageViewGetPageNum(pageView);
   PDDoc pdDoc = AVDocGetPDDoc(avDoc);

   //Create an ASCab object to store input parameters
   ASCab inputs = ASCabNew();
   ASCabPutPointer (inputs, kAVCommandKeyPDDoc, PDDoc, pdDoc, NULL);

   //Set the input parameters
   if (kAVCommandReady != AVCommandSetInputs(cmd, inputs)) {

   // Handle error
   //Destroy the ASCab container
   ASCabDestroy (inputs);

.. note::

   For more information about the ``AVCommandSetInputs`` method, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Setting configuration parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Optionally you can set configuration parameters. The default UI policy is for commands to be fully interactive. To invoke the command programmatically, create an ``ASCab`` object and populate it with the appropriate parameters, as shown in the following example.

:: 
   
   // Create an ASCab object to store config parameters
   ASCab config = ACabNew();
   ASCabPutInt (config, "UIPolicy", kAVCommandUISilent);
   
   if (kAVCommandReady != AVCommandSetConfig (cmd, config)) {

   // Handle error
   ASCabDestroy (config);
   }

Setting AVCommand parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An ``AVCommand`` parameter set is specific to each command. For example, the Document Summary command accepts values for these parameters: ``Title``, ``Subject``, ``Author``, ``Keywords``, ``Binding``, and ``LeaveAsIs``. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.)

You can create an ``ASCab`` object to store the appropriate parameters; then create empty ``ASText`` objects to hold the parameter values and place these values into the ``ASCabs`` object. The following example uses this approach to set the Document Summary ``Title`` and ``Subject`` values.


::

   const char *docTitleValue = "Document Title";
   const char *docSubjectValue = "Document Subject";
   
   //Create an ASCab object to hold command parameters
   ASCab params = ASCabNew();
   ASText text = ASTextNew();
   ASTextSetEncoded(text, docTitleValue,(ASHostEncoding)PDGetHostEncoding());
   ASCabPutText (params, docTitleValue, text);
   
   //Clear the ASText object
   text = ASTextNew();
   ASTextSetEncoded(text, docSubjectValue,(ASHostEncoding)PDGetHostEncoding());
   ASCabPutText(params, docSubjectValue, text);

Running commands
----------------

The following code example shows an entire example of creating an ``AVCommand`` and running it.

::

   void InitializeCommandHandler()
    
   {

   //Declare local variables
   static AVCommandHandlerRec gAVCmdHandler;
   const char *kCmdName = "MinimalCommand";
   ASAtom cmdName;
   AVCommand cmd;
   const char *docTitleValue = "Document Title";
   const char *docSubjectValue = "Document Subject";
   

   //Create a PDDoc object based on the current PDF document
   AVDoc avDoc = AVAppGetActiveDoc();
   AVPageView pageView = AVDocGetPageView(avDoc);
   PDPageNumber pageNum = AVPageViewGetPageNum(pageView);
   PDDoc pdDoc = AVDocGetPDDoc(avDoc);
   

   //Create an AVCommandHandlerRec object
   memset (&gAVCmdHandler, 0, sizeof(AVCommandHandlerRec));
   gAVCmdHandler.size = sizeof(AVCommandHandlerRec);
   gAVCmdHandler.Work = ASCallbackCreateProto (AVCommandWorkProc, DoWorkImpl);
   AVAppRegisterCommandHandler (ASAtomFromString(kCmdName),&gAVCmdHandler);
   

   //Invoke the AVCommand
   cmdName = ASAtomFromString ("MinimalCommand");
   cmd = AVCommandNew(cmdName);
   

   //Set the input parameters
   ASCab inputs = ASCabNew();
   ASCabPutPointer (inputs, kAVCommandKeyPDDoc, PDDoc, pdDoc, NULL);
   

   //Set the input parameters and destroy the container ASCab
   if (kAVCommandReady != AVCommandSetInputs (cmd, inputs)) {
      // Handle error
   }
   

   //Create an ASCab object to hold command parameters
   ASCab params = ASCabNew();
   ASText text = ASTextNew();
   ASTextSetEncoded(text, docTitleValue,(ASHostEncoding)PDGetHostEncoding());
   ASCabPutText (params, docTitleValue, text);
   

   //Clear the ASText object
   text = ASTextNew();
   ASTextSetEncoded(text, docSubjectValue,(ASHostEncoding)PDGetHostEncoding());
   ASCabPutText(params, docSubjectValue, text);
   

   //Invoke the command
   AVCommandExecute(cmd);
   }
   

   static ACCB1 AVCommandStatus ACCB2 DoWorkImpl (AVCommand cmd)
    
   {
   AVAlertNote("The DoWorkImpl method was invoked");
   return kAVCommandDone;
   }

Exposing AVCommands to the batch framework
------------------------------------------

Acrobat or Adobe Reader builds the list of commands that users see in the ``Batch Sequences`` and ``Batch Edit Sequence`` dialog boxes from an internal list of ``AVCommands`` referred to as the global command list.

Adding a handler to the global command list
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To expose a command to the batch framework, the ``AVCommand`` handler must first add an instance of the command to this global list by invoking the ``AVAppRegisterGlobalCommand`` method.

::

    AVCommand cmd = AVCommandNew(ASAtomFromString(kCmdName));
     AVAppRegisterGlobalCommand(cmd);

Although this step can be performed at any time once the command handler is registered, handlers commonly register commands from within the ``AVCommandRegisterCommandsProc`` callback (of the ``AVCommandHandlerRec`` structure).

Supporting properties
^^^^^^^^^^^^^^^^^^^^^

When building a list of batchable commands, Adobe Reader or Acrobat iterates through its internal command list, querying each command for the ``CanBatch`` and ``GroupTitle`` properties. To be exposed through the batch framework user interface, a command must support these properties (that is, return ``true`` and a valid ``ASText`` object, respectively). The ``AVCommand`` handler must implement the ``GetProps`` callback of the ``AVCommandHandlerRec`` structure.

If an ``AVCommand`` supports these properties, Adobe Reader or Acrobat queries a number of additional properties as the user interacts with the batch framework. Of these additional properties, only two are required: ``Title`` and ``Generic Title``. A command must provide the title strings that will be displayed in the Batch Sequences and Batch Edit Sequence dialog boxes.

::

   const char *kCmdTitle = "Command Title";
   const char *kGroupTitle = "Group Title";
   const char *kCmdGenericTitle = "Generic Title";
   
   ASBool doItAll = false;
   if (ASCabNumEntries(params) == 0)
   doItAll = true;
   if (doItAll || ASCabKnown (params, kAVCommandKeyGroupTitle))
   {

   // Create a new text object and insert it into the ASCab
   text = ASTextNew();
   ASTextSetEncoded (text, kGroupTitle, (
   ASHostEncoding)PDGetHostEncoding());
   ASCabPutText(params, kAVCommandKeyGroupTitle, text);
   }
   if (doItAll || ASCabKnown (params, kAVCommandKeyCanBatch))
   ASCabPutBool (params, kAVCommandKeyCanBatch, true );
   if (doItAll || ASCabKnown (params, kAVCommandKeyGenericTitle))
   {

   //Create a new text object and insert it into the ASCab
   text = ASTextNew();
   ASTextSetEncoded (text, kCmdGenericTitle,
   (ASHostEncoding)PDGetHostEncoding());
   ASCabPutText (params, kAVCommandKeyGenericTitle, text);
   }
   if (doItAll || ASCabKnown (params, kAVCommandKeyTitle))
   {

   // Create another text object and insert it into the ASCab
   text = ASTextNew();
   ASTextSetEncoded (text, kCmdTitle,
   (ASHostEncoding)PDGetHostEncoding());
   ASCabPutText (params, kAVCommandKeyTitle, text);

.. note::

   The ``params`` object was declared in `Running an AVCommand <Plugins_Handlers.html#50618413_70559>`__.

File format conversion handlers
===============================

A plugin can add file conversion handlers to Acrobat (but not Adobe Reader) for performing the following file conversion operations:

-  To import a PDF document from another file format.
-  To export a PDF document to another file format.

To add a new file conversion handler, you provide a set of callback functions, specify them in the ``AVConversionToPDFHandler`` or ``AVConversionFromPDFHandler`` structures, and invoke the ``AVAppRegisterToPDFHandler`` or ``AVAppRegisterFromPDFHandler`` methods to register them.

Specify the file types that the plugin can convert and whether it can perform synchronous conversion (required for the handler to be accessible from the batch framework). Upon registration, the conversion handlers are automatically added to the respective Open and Save As dialog boxes.

By using a file format conversion handler, you can perform the following tasks:

-  Provide default settings for the conversion by using the ``AVConversionDefaultSettingsProc`` callback method.
-  Provide conversion parameter information by using the ``AVConversionParamDescProc`` callback method.
-  Display a settings dialog box by using the ``AVConversionSettingsDialogProc`` callback method.
-  Convert a non-PDF file to or from a PDF file by invoking either the ``AVConversionConvertToPDFProc`` or ``AVConversionConvertFromPDFProc`` callback methods.

File specification handlers
===========================

A file specification handler converts between a ``PDFileSpec`` object and an ``ASPathName`` object. Each file specification handler works with a single file system, which the handler specifies.

To create a new file specification handler, a plugin or application must provide callbacks that:

-  Convert an ``ASPathName`` to a ``PDFileSpec``. It is called by ``PDFileSpecNewFromASPath``.
-  Convert a ``PDFileSpec`` to an ``ASPathName``.

Selection servers
=================

A selection server enables the selection of specific data types such as annotations, text, or graphics. You can also create selection servers to enable the selection of data types not already supported. To add a new selection server, you must provide a set of callbacks, specify them in the ``AVDocSelectionServer`` data structure, and register them using an ``AVDocRegisterSelectionServer`` object.

By using a selection server, you can perform the following tasks:

-  Return the selection type serviced by the handler by using the ``AVDocSelectionGetTypeProc`` callback method.
-  Highlight or unhighlight a selection by using the ``AVDocSelectionHighlightSelectionProc`` callback method.
-  Handle key presses by using the ``AVDocSelectionKeyDownProc`` callback method.
-  Delete the selection by invoking the ``AVDocSelectionDeleteProc`` method.
-  Cut the selection to the clipboard by using the ``AVDocSelectionCutProc`` callback method.
-  Copy the selection to the clipboard by using the ``AVDocSelectionCopyProc`` callback method.
-  Paste the selection from the clipboard by using the ``AVDocSelectionPasteProc`` callback method.
-  Enumerate the items in the current selection by using the ``AVDocSelectionEnumSelectionProc`` callback method.
-  Scroll the view so that the current selection is available by using the ``AVDocSelectionShowSelectionProc`` callback method.
-  Determine whether or not the Properties menu item is enabled by using the ``AVDocSelectionCanPropertiesProc`` callback method.
-  If the selection type has a properties dialog box, display the dialog box by using the ``AVDocSelectionPropertiesProc`` callback method.

For a complete list of the callbacks in a selection server, see the description of ``AVDocSelectionServer`` in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

.. note::

   The SelectionServer sample plugin that is located in the Acrobat SDK shows an example of a selection server.

Tool callbacks
==============

To add a new tool, you must provide a set of callbacks, specify them in the ``AVTool`` data structure, and register them using ``AVAppRegisterTool``. By using tool callbacks, you can perform the following tasks:

-  Activate the tool when the tool is selected by using the ``ActivateProcType`` callback method.
-  Deactivate the tool when another tool is selected by using the ``DeactivateProcType`` callback method.
-  Handle mouse clicks by using the ``DoClickProcType`` callback method.
-  Handle key presses by using the ``DoKeyDownProcType`` callback method.
-  Control the cursor shape by using the ``AdjustCursorProcType`` callback method.
-  Return the tool's name by using the ``GetTypeProcType`` callback method.
-  Indicate whether the tool stays active after it is used by using the ``IsPersistentProcType`` callback method.
-  Determine whether the tool is enabled by using the ``AVComputeEnabledProc`` callback method. For example, if a tool is meant to be used within documents, but there are no documents open, it does not make sense to activate the tool.

.. note::

   For a complete list of callbacks, see the description of ``AVTool`` in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Window handlers
===============

When a plugin creates a window, it can register the window, so that it behaves like other windows in Acrobat; for example, when Adobe Reader or Acrobat is minimized or hidden. For each window that a plugin provides, a window handler must be provided. Window handlers are used only in the Mac OS version of Adobe Reader or Acrobat. Windows versions of Acrobat instead use the platform's native window handling mechanisms. (See `Opening a PDF document in an external window <Plugins_Documents.html#50618416_74021>`__.)

To define a window handler, you must provide a set of callbacks, specify them in an ``AVWindowHandler`` structure, and pass the structure to ``AVWindowNew`` or ``AVWindowNewFromPlatformThing``. The window handler's callbacks are automatically called by Acrobat. Default behavior is used for any missing callbacks.

By using a window handler, you can perform the following tasks:

-  Handle mouse clicks in the window by using the ``AVWindowMouseDownProc`` callback method.
-  Handle keystrokes in the window by using the ``AVWindowKeyDownProc`` callback method.
-  Draw the window's contents by using the ``AVWindowDrawProc`` callback method.
-  Permit or prevent closing of the window by using the ``AVWindowWillCloseProc`` callback method.
-  Clean up after the window has been closed by using the ``AVWindowDidCloseProc`` callback method.
-  Do anything that must be done when the window is activated or deactivated by using the following callback methods: ``AVWindowDidActivateProc`` or ``AVWindowWillDeactivateProc``.
-  Permit or constrain window size changes by using the ``AVWindowWillBeResizedProc`` callback method.
-  Determine whether the Cut, Copy, Paste, Clear, SelectAll, and Undo menu items are enabled by using the ``AVWindowCanPerformEditOpProc`` callback method.
-  Perform Cut, Copy, Paste, Clear, SelectAll, and Undo operations by using the ``AVWindowPerformEditOpProc`` callback method.
-  Control the shape of the cursor when it is within the window by using the ``AVWindowAdjustCursorProc`` callback method.

For a complete list of callbacks in a window handler, see the description of ``AVWindowHandler`` in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

File systems
============

Plugins can add new file systems to Acrobat or Adobe Reader, to access files on a device that cannot be accessed as a local hard disk, such as a socket or a modem line.

To add a new file system, you must provide a set of callbacks and specify them in the ``ASFileSysRec`` structure. This structure is passed as a parameter to calls that require a file system. A file system handler does not require explicit registration.

By using a file system handler, you can perform the following tasks:

-  Open a file by using the ``ASFileSysOpenProc`` callback method.
-  Close a file by using the ``ASFileSysCloseProc`` callback method.
-  Flush a file's buffered data to disk by using the ``ASFileSysFlushProc`` callback method.
-  Get or set the current position in a file by using one of the following callback methods: ``ASFileSysSetPosProc`` or ``ASFileSysGetPosProc``.
-  Get or set a file's logical size by using one of the following callback methods: ``ASFileSysGetEofProc`` or ``ASFileSysSetEofProc``.
-  Read data from a file by using the ``ASFileSysReadProc`` callback method.
-  Write data to a file by using the ``ASFileSysWriteProc`` callback method.
-  Delete a file by using the ``ASFileSysRemoveProc`` callback method.
-  Rename a file by using the ``ASFileSysRenameProc`` callback method.
-  Get a file's name by using the ``ASFileSysGetNameProc`` callback method.
-  Get a file system's name by using the ``ASFileSysGetFileSysNameProc`` callback method.
-  Determine whether two files are the same by using the ``ASFileSysIsSameFileProc`` callback method.
-  Get a path to a temporary file by using the ``ASFileSysGetTempPathNameProc`` callback method.
-  Copy a path (not the underlying file) by using the ``ASFileSysCopyPathNameProc`` callback method.
-  Convert between device-independent and device-dependent path by using the ``ASFileSysDiPathFromPathProc`` callback method.
-  Dispose of a path (not the underlying file) by using the ``ASFileSysDisposePathNameProc`` callback method.
-  Flush data on a volume by using the ``ASFileSysFlushVolumeProc`` callback method.
-  Handle asynchronous I/O operations by using the following callback methods: ``ASFileSysAsyncReadProc`` or ``ASFileSysAsyncWriteProc``.
-  Handle multiple read requests by using the ``ASFileSysMReadRequestProc`` callback method.

For details about each of the callbacks in a file system, see the description of ``ASFileSysRec`` in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Progress monitors
=================

Progress monitors provide feedback to a user on the progress of a time-consuming operation. Some potentially time-consuming methods in the Acrobat core API require a progress monitor as a parameter. Acrobat has a default progress monitor, which generally is sufficient for plugins to use. The built-in progress monitor can be obtained by using the ``AVAppGetDocProgressMonitor`` method.

Plugins can use the default progress monitor or implement their own by providing a set of callbacks, specifying them in the ``ASProgressMonitorRec`` data structure, and passing a pointer to the structure to the methods that require a progress monitor (there is no explicit registration method).

Using a progress monitor, you can perform the following tasks:

-  Initialize the progress monitor and display it with a current value of zero by invoking the ``PMBeginOperationProc`` method.
-  Draw a full progress monitor, then remove the progress monitor from the display by invoking the ``PMEndOperationProc`` method.
-  Set the value that corresponds to a full progress monitor display by invoking the ``PMSetDurationProc`` method.
-  Set the current value of the progress monitor and update the display by invoking the ``PMSetCurrValueProc`` method.
-  Get the progress monitor's maximum value by invoking the ``PMGetDurationProc`` method.
-  Get the progress monitor's current value by invoking the ``PMGetCurrValueProc`` method.

For details, see the description of ``ASProgressMonitorRec`` in the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Transition handlers
===================

Transitions allow effects such as dissolves or wipe-downs when displaying a new page. New transition types can be added by defining and registering a transition handler.

To add a new transition, you must provide a set of callbacks, specify them in the ``AVTransHandler`` data structure, and register them by invoking the ``AVAppRegisterTransHandler`` method.

Using a transition handler, you can perform the following tasks:

-  Get the transition type by invoking the ``AVTransHandlerGetTypeProc`` method.
-  Perform the transition (change to the next page with this transition style) by invoking the ``AVTransHandlerExecuteProc`` method.
-  Fill in the transition dictionary in the PDF file by using either the ``AVTransHandlerInitTransDictProc`` or ``AVTransHandlerCompleteTransDictProc`` methods.
-  Provide information for the user interface that sets the attributes of the transition by invoking the ``AVTransHandlerGetUINameProc`` method.

Adding message handling
=======================

Plugins can add their own DDE messages and Apple events to those supported by Acrobat and Adobe Reader. On Windows, plugins can register to receive DDE messages directly. On Mac OS, plugins must hook into Acrobat or Adobe Reader's Apple event handling loop to handle Apple events. To do this, replace the API's AVAppHandleAppleEvent method. For information about replacing methods, see `Replacing HFT methods <Plugins_Hft.html#50618412_19489>`__.

If a plugin receives an Apple event it does not want to handle, it should invoke the implementation of the method it replaced, allowing other plugins or Acrobat or Adobe Reader the opportunity to handle the Apple event.

.. note::

   Plugins should use the DDEML library to handle DDE messages. Problems may arise if they do not.


