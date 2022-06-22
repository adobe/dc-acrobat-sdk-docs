.. raw:: html

   <a name="57730"></a>

*********************************
Writing Snippets
*********************************

A code snippet must contain at least the following:

-  A single main function that acts as its entry point. Snippets may contain additional functions as needed.
-  A macro call that binds the snippet to the SnippetRunner environment.

An example of a single-function snippet that is included with the SnippetRunner project, SimpleSnip.cpp, is shown below. The code for this snippet also includes comments (not shown here) that provide useful development hints.

::

     #include "SnippetRunner.h"
      #include "SnippetRunnerUtils.h"
      
      void SimpleSnip()
      {
          Console::displayString("This is a simple snippet.");
          Console::displayString("Simple snippet executed");
      }
      
      SNIPRUN_REGISTER(SimpleSnip, "Simple Framework", "SimpleSnip creates a framework for a snippet.")

This snippet has a single function, SimpleSnip, which writes two messages to the output pane of the Common Interface (see `Using the Common Interface <Snippet_SnippetRunnerCookbook.html#24853>`__) using the utility function ``Console::displayString`` . This function enables you to perform memory dumps and view strings (``char *`` ), ``ASText`` objects, and Cos objects. (See the source files SnippetRunnerUtils.cpp and Console.cpp for details.)

Because the ``SimpleSnip`` function requires no parameters, it uses the macro call ``SNIPRUN_REGISTER`` to bind to the SnippetRunner environment. (See `Passing parameters to snippets <Snippet_WritingSnippets.html#93537>`__ for other possibilities.) This macro requires three parameters:

-  The name of the function that is the entry point for the snippet (the same as the snippet's file name).
-  A string indicating where the snippet's node is to appear in the Snippet Collection pane of the Common Interface user interface. If the snippet location is not at the root level of the hierarchy, the string specifies the path to the snippet, with folder names separated by colons. For example, the GetFontInfoSnip snippet would specify: "PD Layer:Fonts:Get Font Info".
-  A string of descriptive text to be presented in the Snippet Description pane.

.. tip:: A snippet's node name is limited to 49 characters.

SimpleSnip is a synchronous or "one-shot" snippet, meaning that it executes and then terminates. See `Toggling behavior and asynchronous snippets <Snippet_WritingSnippets.html#52396>`__ for other possibilities.

.. raw:: html

   <a name="93537"></a>

Passing parameters to snippets
==============================

You can pass parameters to a snippet's main function. To enable this mechanism, use the ``SNIPRUN_REGISTER_WITH_DIALOG`` macro in your snippet to bind the snippet to SnippetRunner. This call takes an extra parameter (beyond the three required by ``SNIPRUN_REGISTER`` ), which is a single string representing default parameter(s) separated by spaces.

When a snippet implemented with ``SNIPRUN_REGISTER_WITH_DIALOG`` is invoked, a dialog box with the snippet's descriptive text appears that includes a text edit box pre-populated with the default values set by the fourth parameter.

If necessary, this dialog box can be suppressed using the utility calls ``turnParamDialogOff`` (``/On`` ) and ``toggleParamDialog`` (see SnippetRunnerUtils.cpp).

An example of the use of this macro and its resulting values is in the TextChangeColour snippet, whose macro call is written as follows:

::

     SNIPRUN_REGISTER_WITH_DIALOG(TextChangeColourSnip, "PDE Layer:
           Text:Change colour","Shows how to change the colour of text 
           in a document","0 0 65000")

When this snippet is invoked, a dialog box displays "Shows how to change colour of text in a document" and the parameter text edit box is pre-populated with the default values: "0 0 65000". For this example, the parameters are meant to represent RGB color values. You can edit the text in the dialog box to change the values of the parameters.

To access the parameters passed in through the dialog box, use the ``ParamsManager`` class. This class (see ParamManager.cpp) provides a set of methods that allow you to obtain the input parameters as integer, string, hex, and fixed data types. (To provide support for other data types, you must extend the ``ParamsManager`` class.)

For example, the ``TextChangeColour`` function is defined with a single parameter of type ``ParamManager *`` , to provide storage for the snippet's parameters:

::

     void TextChangeColourSnip(ParamManager * thePM)

The following code in the ``TextChangeColourSnip`` function converts the input parameter string to three separate RGB values of type integer:

::

     ASInt32 red,green,blue;
      
      thePM->getNextParamAsInt(red);
      thePM->getNextParamAsInt(green);
      thePM->getNextParamAsInt(blue);

.. raw:: html

   <a name="52396"></a>

Toggling behavior and asynchronous snippets
===========================================

This section applies to Acrobat plug-in snippets only; not to the PDF Library SDK.

SnippetRunner provides utility methods for toggling behavior. For example, FormCalculationsSnip turns on and off the ability to perform form calculations. It uses the ``toggleSnippetCheck`` method (see SnippetRunnerUtils.cpp) to turn the state on if it was previously off, and vice versa.

Other snippets that toggle behavior include AVPageViewToggleWireframeDrawingSnip, and AVAppShowAnnotProperties.

Some snippets define and register callbacks in the same manner as plug-ins. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__ and ` <../PluginAppsDeveloperGuide/Plugins_Introduction.html#97017>`__ for information regarding ``ASCallback`` objects, ``ASCallbackCreateProto`` and ``ASCallbackDestroy`` ). Specifically, to register a snippet for a notification, use ``AVAppRegisterNotification`` and provide a callback function with the appropriate arguments. To register your snippet for a specific event, such as ``IdleProc`` , ``PageViewDrawing`` , ``PageViewClicks`` or ``PageViewAdjustCursor`` , use the related ``AVAppRegister`` XXX method. You can toggle a snippet to Off by checking for its On state and unregistering via the complementary ``AVAppUnregister`` XXX method.

Such snippets can be asynchronous in the sense that they register a callback whose output (or other result) does not appear until a particular event occurs. Snippets that register for notifications include: ``OptContNotificationTracerSnip`` , ``AVAppFrontDocChangeNotSnip`` , ``AVAppRegisterForPageViewDrawingSnip`` , ``PDDocDidDeletePagesNotSnip`` and ``IdleProcSnip``.

Handling exceptions
===================

The SnippetRunner provides an exception handler that reports the name of the snippet that caused an exception. Synchronous snippets require no special considerations with regard to exception handling within the SnippetRunner environment.

However, if you write a snippet containing a callback that is called asynchronously, the callback function should include its own exception handlers to trap and handle various exceptions. When an exception occurs, your exception handler can perform any necessary cleanup, such as releasing memory. The core API provides the following macros for handling errors: ``DURING`` , ``HANDLER`` , ``END_HANDLER`` and ``E_RETURN`` . If methods in your snippet code could return an error code or ``NULL`` if something goes wrong, you can call the ``ASRaise`` method, which generates an exception.

Handling documents
==================

SnippetRunner provides a C++ class, ``CDocument`` , that handles getting documents in the SnippetRunner environment. (See CDocument.h and CDocument.cpp.)

To use this class, a document must be open. You declare a ``CDocument`` object and then cast it to the type you need. For example:

::

     CDocument document;
      AVDocGetFoo((AVDoc)document);

Supported cast types are:

* *AVDoc* — The front document (does not apply to PDF Library)
* *PDDoc* — The front ``AVDoc`` in Acrobat or the document that is open in PDF Library
* *CosDoc* — Derived from the current ``PDDoc``
* *AVPageView* — The current page view in the front document (does not apply to PDF Library)
* *PDPage* — The page associated with the current page view in Acrobat (or the page that has been set in PDF Library). It defaults to the first page.

The destructor method of ``CDocument`` is called when the snippet returns. Therefore, you do not need to write code to release or destroy these objects.
