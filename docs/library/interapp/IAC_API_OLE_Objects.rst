******************************************************
OLE Automation
******************************************************

This chapter describes the objects, data types, and methods in the OLE automation interface.

The names ``AcroExch.App`` and ``AxAcroPDFLib.AxAcroPDF`` are the external strings OLE clients use to create objects of certain types. The Acrobat developer type libraries call them ``CAcro.App`` and ``AcroPDFLib``, respectively.

Acrobat supports dual interfaces, so the methods all have a return type of ``HResult``.

The following table summarizes the available objects and data types.

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Object
     - Description

   * - `testlink AcroExch.App <IAC_API_OLE_Objects.html#50532405_31190>`__
     - The application itself.

   * - `AcroExch.AVDoc <IAC_API_OLE_Objects.html#50532405_36696>`__
     - A document as seen in the user interface.

   * - `AcroExch.PDDoc <IAC_API_OLE_Objects.html#50532405_34812>`__
     - The underlying PDF representation of a document.

   * - `AcroExch.HiliteList <IAC_API_OLE_Objects.html#50532405_39171>`__
     - An entry in a highlight list.

   * - `AcroExch.AVPageView <IAC_API_OLE_Objects.html#50532405_13484>`__
     - The area of the window that displays the contents of a page.

   * - `AcroExch.PDPage <IAC_API_OLE_Objects.html#50532405_28781>`__
     - A single page in the PDF representation of a document.

   * - `AcroExch.PDAnnot <IAC_API_OLE_Objects.html#50532405_42349>`__
     - An annotation on a page in the PDF file.

   * - `AcroExch.PDBookmark <IAC_API_OLE_Objects.html#50532405_29095>`__
     - A bookmark in a PDF file.

   * - `AcroExch.PDTextSelect <IAC_API_OLE_Objects.html#50532405_33981>`__
     - A selection of text on a single page.

   * - `AxAcroPDFLib.AxAcroPDF <IAC_API_OLE_Objects.html#50532405_76583>`__
     - An object containing PDF browser controls.

   * - `AcroExch.Point <IAC_API_OLE_Objects.html#50532405_76536>`__
     - A point, specified by its x–coordinate and y–coordinate.

   * - `AcroExch.Rect <IAC_API_OLE_Objects.html#50532405_39836>`__
     - A rectangle, specified by the top-left and bottom-right points.

   * - `AcroExch.Time <IAC_API_OLE_Objects.html#50532405_86731>`__
     - A specified time, accurate to the millisecond.

.. raw:: html

   <a name="50532405_31190"></a>

AcroExch.App
============

The Acrobat application itself. This is a creatable interface. From the application layer, you can control the appearance of Acrobat, whether Acrobat appears, and the size of the application window. This object provides access to the menu bar and the toolbar, as well as the visual representation of a PDF file on the screen (through an ``AVDoc`` object).

Methods
---------------------------------

The ``App`` object has the following methods.

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__
     - Closes all open documents.

   * - `Exit <IAC_API_OLE_Objects.html#50532405_24553>`__
     - Exits Acrobat. 

   * - `GetActiveDoc <IAC_API_OLE_Objects.html#50532405_36544>`__
     - Gets the frontmost document.

   * - `GetActiveTool <IAC_API_OLE_Objects.html#50532405_26079>`__
     - Gets the name of the currently active tool.

   * - `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__
     - Gets an ``AcroExch.AVDoc`` object via its index within the list of open ``AVDoc`` objects.

   * - `GetFrame <IAC_API_OLE_Objects.html#50532405_24866>`__
     - Gets the window's frame.

   * - `GetInterface <IAC_API_OLE_Objects.html#50532405_91171>`__
     - Gets an ``IDispatch`` interface for a named object, typically a third-party plug-in.

   * - `GetLanguage <IAC_API_OLE_Objects.html#50532405_84453>`__
     - Gets a code that specifies which language the Acrobat application's user interface is using. 

   * - `GetNumAVDocs <IAC_API_OLE_Objects.html#50532405_17689>`__
     - Gets the number of open ``AcroExch.AVDoc`` objects.

   * - `GetPreference <IAC_API_OLE_Objects.html#50532405_36273>`__
     - Gets a value from the preferences file.

   * - `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__
     - Gets the specified application preference, using the VARIANT type to pass values.

   * - `Hide <IAC_API_OLE_Objects.html#50532405_35477>`__
     - Hides the Acrobat application. 

   * - `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__
     - Locks the Acrobat application. 

   * - `Minimize <IAC_API_OLE_Objects.html#50532405_95716>`__
     - Minimizes the Acrobat application. 

   * - `Maximize <IAC_API_OLE_Objects.html#50532405_28128>`__
     - Maximizes the Acrobat application. 

   * - `MenuItemExecute <IAC_API_OLE_Objects.html#50532405_17615>`__
     - Executes the menu item whose language-independent menu item name is specified.

   * - `MenuItemIsEnabled <IAC_API_OLE_Objects.html#50532405_38263>`__
     - Determines whether the specified menu item is enabled.

   * - `MenuItemIsMarked <IAC_API_OLE_Objects.html#50532405_31861>`__
     - Determines whether the specified menu item is marked.

   * - `MenuItemRemove <IAC_API_OLE_Objects.html#50532405_28065>`__
     - Removes the menu item whose language-independent menu item is specified.

   * - `Restore <IAC_API_OLE_Objects.html#50532405_61057>`__
     - Restores the main window of the Acrobat application. 

   * - `SetActiveTool <IAC_API_OLE_Objects.html#50532405_34602>`__
     - Sets the active tool according to the specified name, and determines whether the tool is to be used only once or should remain active after being used (persistent).

   * - `SetFrame <IAC_API_OLE_Objects.html#50532405_14415>`__
     - Sets the window's frame to the specified rectangle.

   * - `SetPreference <IAC_API_OLE_Objects.html#50532405_33867>`__
     - Sets a value in the preferences file.

   * - `SetPreferenceEx <IAC_API_OLE_Objects.html#50532405_91929>`__
     - Sets the application preference specified by ``nType`` to the value stored at ``pVal``. 

   * - `Show <IAC_API_OLE_Objects.html#50532405_20395>`__
     - Shows the Acrobat application. 

   * - `ToolButtonIsEnabled <IAC_API_OLE_Objects.html#50532405_10079>`__
     - Determines whether the specified toolbar button is enabled.

   * - `ToolButtonRemove <IAC_API_OLE_Objects.html#50532405_31485>`__
     - Removes the specified button from the toolbar.

   * - `Unlock <IAC_API_OLE_Objects.html#50532405_37485>`__
     - Unlocks the Acrobat application if it was previously locked. 

   * - `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__
     - Unlocks the Acrobat application if it was previously locked. 

.. raw:: html

   <a name="50532405_33231"></a>

CloseAllDocs
------------

Closes all open documents. You can close each individual ``AVDoc`` object by calling ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ .

You must explicitly close all documents or call ``App.CloseAllDocs``. Otherwise, the process never exits.

**Syntax**

::

   VARIANT_BOOL CloseAllDocs(); 

**Returns**

``-1`` if successful, ``0`` if not.

**Related methods**

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_24553"></a>

Exit
----

Exits Acrobat. Applications should call ``App.Exit`` before exiting.

.. note::

   Use ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__ to close all the documents before calling this method.

**Syntax**

::

   VARIANT_BOOL Exit();

**Returns**

 Returns ``-1`` if the entire shutdown process succeeded. This includes closing any open documents, releasing OLE references, and finally exiting the application. If any step fails, the function returns ``0``, and the application continues running. This method does not work if the application is visible (if the user is in control of the application). In such cases, if the ``Show`` method had previously been called, you can call ``Hide`` and then ``Exit``.

.. _related-methods-1:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

.. raw:: html

   <a name="50532405_36544"></a>

GetActiveDoc
------------

Gets the frontmost document.

**Syntax**

::

   LPDISPATCH GetActiveDoc();

**Returns**

The ``LPDISPATCH`` for the frontmost ``AcroExch.AVDoc`` object. If there are no documents open, it returns ``NULL``.

.. _related-methods-2:

**Related methods**

* ``App.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_35267>`__

.. raw:: html

   <a name="50532405_26079"></a>

GetActiveTool
-------------

Gets the name of the currently active tool.

**Syntax**

::

   BSTR GetActiveTool();

**Returns**

 Returns ``NULL`` if there is no active tool . Returns the name of the currently active tool otherwise. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of tool names.

.. _related-methods-3:

**Related methods**

* ``App.`` `SetActiveTool <IAC_API_OLE_Objects.html#50532405_34602>`__

.. raw:: html

   <a name="50532405_26359"></a>

GetAVDoc
--------

Gets an ``AcroExch.AVDoc`` object from its index within the list of open ``AVDoc`` objects. Use ``App.`` `GetNumAVDocs <IAC_API_OLE_Objects.html#50532405_17689>`__ to determine the number of ``AcroExch.AVDoc`` objects.

**Syntax**

::

   LPDISPATCH GetAVDoc(long nIndex);

**Parameters**

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nIndex
     - The index of the document to get.

**Returns**

The ``LPDISPATCH`` for the specified ``AcroExch.AVDoc`` document, or ``NULL`` if ``nIndex`` is greater than the number of open documents.

.. _related-methods-4:

**Related methods**

* ``App.`` `GetActiveTool <IAC_API_OLE_Objects.html#50532405_26079>`__

.. raw:: html

   <a name="50532405_24866"></a>

GetFrame
--------

Gets the window's frame.

GetFrame is not useful when the PDF file was opened with ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__ . GetFrame returns the application window's frame (not the document window's frame). However, the application's window is hidden when a document is opened using `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__ , and does not change in size as document windows are moved and resized.

This method is also not useful if the Acrobat application is in single document interface (SDI) mode.

**Syntax**

::

   LPDISPATCH GetFrame();

**Returns**

The ``LPDISPATCH`` for the window's frame, specified as an ``AcroExch.Rect``.

If the Acrobat application is in SDI mode, a [0,0,0,0] ``Rect`` is returned.

.. _related-methods-5:

**Related methods**

* ``App.`` `Maximize <IAC_API_OLE_Objects.html#50532405_28128>`__

* ``App.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_91171"></a>

GetInterface
------------

Gets an ``IDispatch`` interface for a named object, typically a third-party plug-in. This is an entry point to functionality that is undefined and which must be provided by the plug-in author. If you are accessing third-party functionality through ``GetInterface``, ask the author for additional information.

**Syntax**

::

   LPDISPATCH GetInterface (BSTR szName);

.. _parameters-1:

**Parameters**

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szName
     - Name of the object.

**Returns**

The ``LPDISPATCH`` for the objects's interface or ``NULL`` if the object was not found.

.. raw:: html

   <a name="50532405_84453"></a>

GetLanguage
-----------

Gets a code that specifies which language the Acrobat application's user interface is using.

**Syntax**

::

   BSTR GetLanguage();

**Returns**

String containing a three-letter language code. Must be one of the following:

-  DEU-German
-  ENU-English
-  ESP-Spanish
-  FRA-French
-  ITA-Italian
-  NLD-Dutch
-  SVE-Swedish

.. _related-methods-6:

**Related methods**

* ``App.`` `GetPreference <IAC_API_OLE_Objects.html#50532405_36273>`__

* ``App.`` `SetPreference <IAC_API_OLE_Objects.html#50532405_33867>`__

.. raw:: html

   <a name="50532405_17689"></a>

GetNumAVDocs
------------

Gets the number of open ``AcroExch.AVDoc`` objects. The maximum number of documents the Acrobat application can open at a time is specified by the ``avpMaxOpenDocuments`` preference, which can be obtained with ``App.`` `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__ and set by ``App.`` `SetPreferenceEx <IAC_API_OLE_Objects.html#50532405_91929>`__ .

**Syntax**

::

   long GetNumAVDocs();

**Returns**

The number of open ``AcroExch.AVDoc`` objects.

.. _related-methods-7:

**Related methods**

* ``App.`` `GetActiveDoc <IAC_API_OLE_Objects.html#50532405_36544>`__

* ``App.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__

.. raw:: html

   <a name="50532405_36273"></a>">

GetPreference

.. note::

   This method is deprecated; use `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__ instead. ``GetPreference`` is unable to accept important data types such as strings, but `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__ can convert many data types into acceptable formats.

Gets a value from the preferences file. Zoom values (used in ``avpDefaultZoomScale`` and ``avpMaxPageCacheZoom``) are returned as percentages (for example, 1.00 is returned as 100). Colors (used in ``avpNoteColor`` -- ``PDcolorValue``) are automatically converted to RGB values from the representation used in the preferences file.

**Syntax**

::

   long GetPreference(short nType);

.. _parameters-2:

**Parameters**

.. _section-4:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - The preferences item whose value is set. For more information, see the `PDF Library documentation <https://www.adobe.com/go/pdflibrary>`__ .

**Returns**

The value of the specified preference item.

.. _related-methods-8:

**Related methods**

* ``App.`` `GetLanguage <IAC_API_OLE_Objects.html#50532405_84453>`__

* ``App.`` `SetPreference <IAC_API_OLE_Objects.html#50532405_33867>`__

.. raw:: html

   <a name="50532405_13271"></a>

GetPreferenceEx
---------------

Gets the specified application preference, using the VARIANT type to pass values.

**Syntax**

::

   VARIANT GetPreferenceEx(short nType);

.. _parameters-3:

**Parameters**

.. _section-5:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - The name of the preferences item whose value is obtained.

**Returns**

The value of the specified preference item.

.. _related-methods-9:

**Related methods**

* ``App.`` `GetLanguage <IAC_API_OLE_Objects.html#50532405_84453>`__

* ``App.`` `SetPreferenceEx <IAC_API_OLE_Objects.html#50532405_91929>`__

.. raw:: html

   <a name="50532405_35477"></a>

Hide
----

Hides the Acrobat application. When the viewer is hidden, the user has no control over it, and the Acrobat application exits when the last automation object is closed.

**Syntax**

::

   VARIANT_BOOL Hide();

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-10:

**Related methods**

* ``App.`` `Show <IAC_API_OLE_Objects.html#50532405_20395>`__

.. raw:: html

   <a name="50532405_19732"></a>

Lock
----

Locks the Acrobat application. Typically, this method is called when using ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__ to draw into another application's window. If you call ``App.Lock``, you should call ``App.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__ when you are done using OLE automation.

There are some advantages and disadvantages of locking the viewer when using ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__ . You must consider these before deciding whether to lock the viewer:

-  Locking prevents problems that can sometimes occur if two processes are trying to open a file at the same time.
-  Locking prevents a user from using Acrobat's user interface (such as adding annotations) in your application's window.
-  Locking can prevent any other application, including the Acrobat application, from opening PDF files. This problem can be minimized by calling ``App.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__ as soon as the file has been opened.

**Syntax**

::

   VARIANT_BOOL Lock(BSTR szLockedBy);

.. _parameters-4:

**Parameters**

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szLockedBy
     - A string that is used as the name of the application that has locked the Acrobat application. 

**Returns**

``-1`` if the Acrobat application was locked successfully, ``0`` otherwise. Locking fails if the Acrobat application is visible.

.. _related-methods-11:

**Related methods**

* ``App.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__

.. raw:: html

   <a name="50532405_95716"></a>

Minimize
--------

Minimizes the Acrobat application.

**Syntax**

::

   VARIANT_BOOL Minimize(long BMinimize);

.. _parameters-5:

**Parameters**

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - BMinimize
     - If a positive number, the Acrobat application is minimized. If ``0``, the Acrobat application is returned to its normal state. 

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-12:

**Related methods**

* ``App.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_24866>`__

* ``App.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_28128"></a>

Maximize
--------

Maximizes the Acrobat application.

**Syntax**

::

   VARIANT_BOOL Maximize(long bMaximize);

.. _parameters-6:

**Parameters**

.. _section-8:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bMaximize
     - If a positive number, the Acrobat application is maximized. If ``0``, the Acrobat application is returned to its normal state. 

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-13:

**Related methods**

* ``App.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_24866>`__

* ``App.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_17615"></a>

MenuItemExecute
---------------

Executes the menu item whose language-independent menu item name is specified.

**Syntax**

::

   VARIANT_BOOL MenuItemExecute(BSTR szMenuItemName);

.. _parameters-7:

**Parameters**

.. _section-9:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szMenuItemName
     - The language-independent name of the menu item to execute. See the *PDF Library documentation* for a list of menu item names.

**Returns**

 Returns ``-1`` if the menu item executes successfully, or ``0`` if the menu item is missing or is not enabled.

.. _related-methods-14:

**Related methods**

* ``App.`` `MenuItemIsEnabled <IAC_API_OLE_Objects.html#50532405_38263>`__

* ``App.`` `MenuItemIsMarked <IAC_API_OLE_Objects.html#50532405_31861>`__

* ``App.`` `MenuItemRemove <IAC_API_OLE_Objects.html#50532405_28065>`__

.. raw:: html

   <a name="50532405_38263"></a>

MenuItemIsEnabled
-----------------

Determines whether the specified menu item is enabled.

**Syntax**

::

   VARIANT_BOOL MenuItemIsEnabled(BSTR szMenuItemName);

.. _parameters-8:

**Parameters**

.. _section-10:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szMenuItemName
     - The language-independent name of the menu item whose enabled state is obtained. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of menu item names.

**Returns**

``-1`` if the menu item is enabled, ``0`` if it is disabled or does not exist.

.. _related-methods-15:

**Related methods**

* ``App.`` `MenuItemExecute <IAC_API_OLE_Objects.html#50532405_17615>`__

* ``App.`` `MenuItemIsMarked <IAC_API_OLE_Objects.html#50532405_31861>`__

* ``App.`` `MenuItemRemove <IAC_API_OLE_Objects.html#50532405_28065>`__

.. raw:: html

   <a name="50532405_31861"></a>

MenuItemIsMarked
----------------

Determines whether the specified menu item is marked.

**Syntax**

::

   VARIANT_BOOL MenuItemIsMarked(BSTR szMenuItemName);

.. _parameters-9:

**Parameters**

.. _section-11:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szMenuItemName
     - The language-independent name of the menu item whose marked state is obtained. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of menu item names.

**Returns**

``-1`` if the menu item is marked, ``0`` if it is not marked or does not exist.

.. _related-methods-16:

**Related methods**

* ``App.`` `MenuItemExecute <IAC_API_OLE_Objects.html#50532405_17615>`__

* ``App.`` `MenuItemIsEnabled <IAC_API_OLE_Objects.html#50532405_38263>`__

* ``App.`` `MenuItemRemove <IAC_API_OLE_Objects.html#50532405_28065>`__

.. raw:: html

   <a name="50532405_28065"></a>

MenuItemRemove
--------------

Removes the menu item whose language-independent menu item is specified.

**Syntax**

::

   VARIANT_BOOL MenuItemRemove(BSTR szMenuItemName);

.. _parameters-10:

**Parameters**

.. _section-12:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szMenuItemName
     - The language-independent name of the menu item to remove. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of menu item names.

**Returns**

``-1`` if the menu item was removed, ``0`` if the menu item does not exist.

.. _related-methods-17:

**Related methods**

* ``App.`` `MenuItemExecute <IAC_API_OLE_Objects.html#50532405_17615>`__

* ``App.`` `MenuItemIsEnabled <IAC_API_OLE_Objects.html#50532405_38263>`__

* ``App.`` `MenuItemIsMarked <IAC_API_OLE_Objects.html#50532405_31861>`__

.. raw:: html

   <a name="50532405_61057"></a>

Restore
-------

Restores the main window of the Acrobat application. Calling this with ``bRestore`` set to a positive number causes the main window to be restored to its original size and position and to become active.

**Syntax**

::

   VARIANT_BOOL Restore(long bRestore);

.. _parameters-11:

**Parameters**

.. _section-13:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bRestore
     - If a positive number, the Acrobat application is restored, ``0`` otherwise. 

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-18:

**Related methods**

* ``App.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_24866>`__

* ``App.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_34602"></a>

SetActiveTool
-------------

Sets the active tool according to the specified name, and determines whether the tool is to be used only once or should remain active after being used (persistent).

**Syntax**

::

   VARIANT_BOOL SetActiveTool(BSTR szButtonName,
                             long bPersistent);

.. _parameters-12:

**Parameters**

.. _section-14:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szButtonName
     - The name of the tool to set as the active tool. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of tool names.

   * - bPersistent
     - A request indicating whether the tool should be persistent. A positive number indicates a request to the Acrobat application for the tool to remain active after it has been used. If ``0`` is specified, the Acrobat application reverts to the previously active tool after this tool is used once. 

**Returns**

``-1`` if the tool was set, ``0`` otherwise.

.. _related-methods-19:

**Related methods**

* ``App.`` `GetActiveTool <IAC_API_OLE_Objects.html#50532405_26079>`__

* ``App.`` `ToolButtonIsEnabled <IAC_API_OLE_Objects.html#50532405_10079>`__

* ``App.`` `ToolButtonRemove <IAC_API_OLE_Objects.html#50532405_31485>`__

.. raw:: html

   <a name="50532405_14415"></a>

SetFrame
--------

Sets the window's frame to the specified rectangle. This method has no effect if the Acrobat application is in single document interface (SDI) mode.

**Syntax**

::

   VARIANT_BOOL SetFrame(LPDISPATCH iAcroRect);

.. _parameters-13:

**Parameters**

.. _section-15:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroRect
     - The ``LPDISPATCH`` for an ``AcroExch.Rect`` specifying the window frame. ``iAcroRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``-1`` if the frame was set, ``0`` if ``iAcroRect`` is not of type ``AcroExch.Rect``.

.. _related-methods-20:

**Related methods**

* ``App.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_24866>`__

* ``App.`` `Maximize <IAC_API_OLE_Objects.html#50532405_28128>`__

.. raw:: html

   <a name="50532405_33867"></a>

SetPreference
-------------

.. note::

   This method is deprecated; use `SetPreferenceEx <IAC_API_OLE_Objects.html#50532405_91929>`__ instead. ``SetPreference`` is unable to accept important data types such as strings, but `SetPreferenceEx <IAC_API_OLE_Objects.html#50532405_91929>`__ can convert many data types into acceptable formats.

Sets a value in the preferences file. Zoom values (used in ``avpDefaultZoomScale`` and ``avpMaxPageCacheZoom``) must be passed as percentages and are automatically converted to fixed point numbers (for example, 100 is automatically converted to 1.0). Colors (used in ``avpHighlightColor`` or ``avpNoteColor``) are automatically converted from RGB values to the representation used in the preferences file.

**Syntax**

::

   VARIANT_BOOL SetPreference(short nType, long nValue);

.. _parameters-14:

**Parameters**

.. _section-16:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - The preferences item whose value is set. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of preference items.

   * - nValue
     - The value to set.

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-21:

**Related methods**

* ``App.`` `GetLanguage <IAC_API_OLE_Objects.html#50532405_84453>`__

* ``App.`` `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__

.. raw:: html

   <a name="50532405_91929"></a>

SetPreferenceEx
---------------

Sets the application preference specified by ``nType`` to the value stored at ``pVal``. If ``pVal`` has a non-conforming ``VARTYPE``, ``SetPreferenceEx`` performs type conversion. For example, a string representation of an integer is converted to an actual integer.

**Syntax**

::

   VARIANT_BOOL SetPreferenceEx(short nType, VARIANT* pVal);

.. _parameters-15:

**Parameters**

.. _section-17:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - The preferences item whose value is set. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of preference items.

   * - pVal
     - The value to set.

**Returns**

 Returns ``-1`` if ``nType`` is a supported type or the type conversion is successful, ``0`` otherwise.

.. _related-methods-22:

**Related methods**

* ``App.`` `GetLanguage <IAC_API_OLE_Objects.html#50532405_84453>`__

* ``App.`` `GetPreferenceEx <IAC_API_OLE_Objects.html#50532405_13271>`__

.. raw:: html

   <a name="50532405_20395"></a>

Show
----

Shows the Acrobat application. When the viewer is shown, the user is in control, and the Acrobat application does not automatically exit when the last automation object is destroyed. However, it will exit if no documents are being displayed.

**Syntax**

::

   VARIANT_BOOL Show();

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-23:

**Related methods**

* ``App.`` `Hide <IAC_API_OLE_Objects.html#50532405_35477>`__

.. raw:: html

   <a name="50532405_10079"></a>

ToolButtonIsEnabled
-------------------

Determines whether the specified toolbar button is enabled.

**Syntax**

::

   VARIANT_BOOL ToolButtonIsEnabled(BSTR szButtonName);

.. _parameters-16:

**Parameters**

.. _section-18:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szButtonName
     - The name of the button whose enabled state is checked. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of toolbar button names.

**Returns**

``-1`` if the button is enabled, ``0`` if it is not enabled or does not exist.

.. _related-methods-24:

**Related methods**

* ``App.`` `GetActiveTool <IAC_API_OLE_Objects.html#50532405_26079>`__

* ``App.`` `SetActiveTool <IAC_API_OLE_Objects.html#50532405_34602>`__

* ``App.`` `ToolButtonRemove <IAC_API_OLE_Objects.html#50532405_31485>`__

.. raw:: html

   <a name="50532405_31485"></a>

ToolButtonRemove
----------------

Removes the specified button from the toolbar.

**Syntax**

::

   VARIANT_BOOL ToolButtonRemove(BSTR szButtonName);

.. _parameters-17:

**Parameters**

.. _section-19:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szButtonName
     - The name of the button to remove. See the `PDF Library documentation  <https://www.adobe.com/go/pdflibrary>`__ for a list of toolbar button names.

**Returns**

``-1`` if the button was removed, ``0`` otherwise.

.. _related-methods-25:

**Related methods**

* ``App.`` `GetActiveTool <IAC_API_OLE_Objects.html#50532405_26079>`__

* ``App.`` `SetActiveTool <IAC_API_OLE_Objects.html#50532405_34602>`__

* ``App.`` `ToolButtonIsEnabled <IAC_API_OLE_Objects.html#50532405_10079>`__

.. raw:: html

   <a name="50532405_37485"></a>

Unlock
------

.. note::

   In version 4.0 or later, use ``App.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__ instead.

Unlocks the Acrobat application if it was previously locked. This method clears a flag that indicates the viewer is locked. If you called ``App.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__ , you should call ``App.Unlock`` when you are done using OLE automation.

Use ``App.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__ and App ``.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__ if you call `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__ .

Typically, you call ``App.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__ when your application initializes and ``App.Unlock`` in your application's destructor method.

**Syntax**

::

   VARIANT_BOOL Unlock();

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-26:

**Related methods**

* ``App.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__

* ``App.`` `UnlockEx <IAC_API_OLE_Objects.html#50532405_30535>`__

.. raw:: html

   <a name="50532405_30535"></a>

UnlockEx
--------

Unlocks the Acrobat application if it was previously locked.

**Syntax**

::

   VARIANT_BOOL UnlockEx (BSTR szLockedBy);

.. _parameters-18:

**Parameters**

.. _section-20:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szLockedBy
     - A string indicating the name of the application to be unlocked.

**Returns**

``-1`` if successful, ``0`` if not.

.. _related-methods-27:

**Related methods**

* ``App.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__

.. raw:: html

   <a name="50532405_36696"></a>

AcroExch.AVDoc
==============

A view of a PDF document in a window. This is a creatable interface. There is one ``AVDoc`` object per displayed document. Unlike a ``PDDoc`` object, an ``AVDoc`` object has a window associated with it.

.. _methods-1:

Methods
--------------------

The AVDoc object has the following methods.

.. _section-21:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `BringToFront <IAC_API_OLE_Objects.html#50532405_25352>`__
     - Brings the window to the front.

   * - `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__
     - Clears the current selection.

   * - `Close <IAC_API_OLE_Objects.html#50532405_10907>`__
     - Closes a document.

   * - `FindText <IAC_API_OLE_Objects.html#50532405_28644>`__
     - Finds the specified text, scrolls so that it is visible, and highlights it.

   * - `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__
     - Gets the ``AcroExch.AVPageView`` associated with an ``AcroExch.AVDoc``. 

   * - `GetFrame <IAC_API_OLE_Objects.html#50532405_28538>`__
     - Gets the rectangle specifying the window's size and location.

   * - `GetPDDoc <IAC_API_OLE_Objects.html#50532405_25013>`__
     - Gets the ``AcroExch.PDDoc`` associated with an ``AcroExch.AVDoc``. 

   * - `GetTitle <IAC_API_OLE_Objects.html#50532405_12179>`__
     - Gets the window's title.

   * - `GetViewMode <IAC_API_OLE_Objects.html#50532405_29291>`__
     - Gets the current document view mode (pages only, pages and thumbnails, or pages and bookmarks).

   * - `IsValid <IAC_API_OLE_Objects.html#50532405_42634>`__
     - Determines whether the ``AcroExch.AVDoc`` is still valid.

   * - `Maximize <IAC_API_OLE_Objects.html#50532405_13863>`__
     - Maximizes the window if ``bMaxSize`` is a positive number.

   * - `Open <IAC_API_OLE_Objects.html#50532405_23963>`__
     - Opens a file.

   * - `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__
     - Opens a PDF file and displays it in a user-specified window.

   * - `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__
     - Opens a PDF file and displays it in a user-specified window.

   * - `PrintPages <IAC_API_OLE_Objects.html#50532405_30920>`__
     - Prints a specified range of pages displaying a print dialog box.

   * - `PrintPagesEx <IAC_API_OLE_Objects.html#50532405_37344>`__
     - Prints a specified range of pages, displaying a print dialog box.

   * - `PrintPagesSilent <IAC_API_OLE_Objects.html#50532405_16535>`__
     - Prints a specified range of pages without displaying any dialog box.

   * - `PrintPagesSilentEx <IAC_API_OLE_Objects.html#50532405_38114>`__
     - Prints a specified range of pages without displaying any dialog box.

   * - `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__
     - Sets the window's size and location.

   * - `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__
     - Sets the document's selection to the specified text selection.

   * - `SetTitle <IAC_API_OLE_Objects.html#50532405_28000>`__
     - Sets the window's title.

   * - `SetViewMode <IAC_API_OLE_Objects.html#50532405_37022>`__
     - Sets the mode in which the document will be viewed (pages only, pages and thumbnails, or pages and bookmarks)

   * - `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__
     - Changes the view so that the current text selection is visible.

.. raw:: html

   <a name="50532405_25352"></a>

BringToFront
------------

Brings the window to the front.

**Syntax**

::

   VARIANT_BOOL BringToFront();

**Returns**

 Returns ``0`` if no document is open, ``-1`` otherwise.

.. raw:: html

   <a name="50532405_16710"></a>

ClearSelection
--------------

Clears the current selection.

**Syntax**

::

   VARIANT_BOOL ClearSelection();

**Returns**

 Returns ``-1`` if the selection was cleared, ``0`` if no document is open or the selection could not be cleared.

.. _related-methods-28:

**Related methods**

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_26583>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_10907"></a>

Close
-----

Closes a document. You can close all open ``AVDoc`` objects by calling ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__ .

To reuse an ``AVDoc`` object, close it with ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ , then use the ``AVDoc`` object's ``LPDISPATCH`` for ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__ .

**Syntax**

::

   VARIANT_BOOL Close(long bNoSave);

.. _parameters-19:

**Parameters**

.. _section-22:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bNoSave
     - If a positive number, the document is closed without saving it. If ``0`` and the document has been modified, the user is asked whether or not the file should be saved.

**Returns**

Always returns ``-1``, even if no document is open.

.. _related-methods-29:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_28644"></a>

FindText
--------

Finds the specified text, scrolls so that it is visible, and highlights it.

**Syntax**

::

   VARIANT_BOOL FindText(BSTR szText, long bCaseSensitive, long bWholeWordsOnly, long bReset);

.. _parameters-20:

**Parameters**

.. _section-23:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szText
     - The text to be found.

   * - bCaseSensitive
     - If a positive number, the search is case-sensitive. If ``0``, it is case-insensitive. 

   * - bWholeWordsOnly
     - If a positive number, the search matches only whole words. If ``0``, it matches partial words. 

   * - bReset
     - If a positive number, the search begins on the first page of the document. If ``0``, it begins on the current page. 

**Returns**

``-1`` if the text was found, ``0`` otherwise.

.. raw:: html

   <a name="50532405_35375"></a>

GetAVPageView
-------------

Gets the ``AcroExch.AVPageView`` associated with an ``AcroExch.AVDoc``.

**Syntax**

::

   LPDISPATCH GetAVPageView();

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.AVPageView`` or ``NULL`` if no document is open.

.. _related-methods-30:

**Related methods**

* ``AVDoc.`` `GetPDDoc <IAC_API_OLE_Objects.html#50532405_25013>`__

* ``AVDoc.`` `SetViewMode <IAC_API_OLE_Objects.html#50532405_37022>`__

* ``AVPageView.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_35267>`__

* ``AVPageView.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

.. raw:: html

   <a name="50532405_28538"></a>

.. _getframe-1:

GetFrame
--------

Gets the rectangle specifying the window's size and location.

**Syntax**

::

   LPDISPATCH GetFrame();

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Rect`` containing the frame, or ``NULL`` if no document is open.

.. _related-methods-31:

**Related methods**

* ``AVDoc.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_25013"></a>

GetPDDoc
--------

Gets the ``AcroExch.PDDoc`` associated with an ``AcroExch.AVDoc``.

**Syntax**

::

   LPDISPATCH GetPDDoc();

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDDoc`` or ``NULL`` if no document is open.

.. _related-methods-32:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVPageView.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__

* ``AVPageView.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

.. raw:: html

   <a name="50532405_12179"></a>

GetTitle
--------

Gets the window's title.

**Syntax**

::

   BSTR GetTitle();

**Returns**

The window's title or ``NULL`` if no document is open.

.. _related-methods-33:

**Related methods**

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_29291"></a>

GetViewMode
-----------

Gets the current document view mode (pages only, pages and thumbnails, or pages and bookmarks).

**Syntax**

::

   long GetViewMode();

**Returns**

The current document view mode or ``0`` if no document is open. The return value is one of the following:

* ``PDDontCare``: ``0``: leave the view mode as it is

* ``PDUseNone``: ``1``: display without bookmarks or thumbnails

* ``PDUseThumbs``: ``2``: display using thumbnails

* ``PDUseBookmarks``: ``3``: display using bookmarks

* ``PDFullScreen``: ``4``: display in full screen mode

.. _related-methods-34:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVDoc.`` `SetViewMode <IAC_API_OLE_Objects.html#50532405_37022>`__

.. raw:: html

   <a name="50532405_42634"></a>

IsValid
-------

Determines whether the ``AcroExch.AVDoc`` is still valid. This method only checks if the document has been closed or deleted; it does not check the internal structure of the document.

**Syntax**

::

   VARIANT_BOOL IsValid();

**Returns**

``-1`` if the document can still be used, ``0`` otherwise.

.. _related-methods-35:

**Related methods**

* ``App.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__

* ``AVPageView.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_35267>`__

.. raw:: html

   <a name="50532405_13863"></a>

.. _maximize-1:

Maximize
--------

Maximizes the window if ``bMaxSize`` is a positive number.

**Syntax**

::

   VARIANT_BOOL Maximize(long bMaxSize);

.. _parameters-21:

**Parameters**

.. _section-24:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bMaxSize
     - Indicates whether the window should be maximized.

**Returns**

``-1`` if a document is open, ``0`` otherwise.

.. _related-methods-36:

**Related methods**

* ``AVDoc.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_28538>`__

* ``AVDoc.`` `SetFrame <IAC_API_OLE_Objects.html#50532405_14434>`__

.. raw:: html

   <a name="50532405_23963"></a>

Open
----

Opens a file. A new instance of ``AcroExch.AVDoc`` must be created for each displayed PDF file.

.. note::

   An application must explicitly close any ``AVDoc`` that it opens by calling ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ (the destructor for the ``AcroExch.AVDoc`` class does not call ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__).

**Syntax**

::

   VARIANT_BOOL Open(BSTR szFullPath, BSTR szTempTitle);

.. _parameters-22:

**Parameters**

.. _section-25:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szFullPath
     - The full path of the file to open.

   * - szTempTitle
     - An optional title for the window in which the file is opened. If ``szTempTitle`` is ``NULL`` or the empty string, it is ignored. Otherwise, ``szTempTitle`` is used as the window title.

**Returns**

``-1`` if the file was opened successfully, ``0`` otherwise.

.. _related-methods-37:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_12179>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``AVDoc.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_28000>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_40575"></a>

OpenInWindow
------------

.. note::

   As of Acrobat 3.0, this method simply returns ``false``. Use the method ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__ instead.

**Syntax**

::

   VARIANT_BOOL OpenInWindow(BSTR fileName, short hWnd);

.. _parameters-23:

**Parameters**

.. _section-26:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fileName
     - The full path of the file to open.

   * - hWnd
     - Handle for the window in which the file is displayed.

**Returns**

``-1``

.. _related-methods-38:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_41972>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_22014"></a>

OpenInWindowEx
--------------

Opens a PDF file and displays it in a user-specified window. The default Windows file system is used to open the file.

.. note::

   Acrobat uses only its built-in implementation of the file opening code—not any replacement file system version that a developer might have added with a plug-in.

An application must explicitly close any ``AVDoc`` that it opens by calling ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ (the destructor for the ``AcroExch.AVDoc`` class does not call ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ ).

Do not set the view mode to `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ with ``AVDoc.`` `SetViewMode <IAC_API_OLE_Objects.html#50532405_37022>`__ when using ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__ ; this will cause the viewer and application to hang.

If you use a view mode of ``AV_PAGE_VIEW``, the ``pagemode`` parameter will be ignored.

See ``AVApp.`` `Lock <IAC_API_OLE_Objects.html#50532405_19732>`__ for a discussion of whether to lock the viewer before making this call.

**Syntax**

::

   VARIANT_BOOL OpenInWindowEx(LPCTSTR szFullPath, long hWnd,

                    long openFlags, long useOpenParams

                    long pgNum, short pageMode,

                    short zoomType, long zoom, short top,

                    short left);

.. _parameters-24:

**Parameters**

.. _section-27:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szFullPath
     - The full path of the file to open.

   * - hWnd
     - Handle for the window in which the file is displayed.

   * - openFlags
     - Type of window view. Must be one of the following:  ``AV_EXTERNAL_VIEW``: Display the ``AVPageView``, scrollbars, toolbar, and bookmark or thumbnails pane. Annotations are active.   ``AV_DOC_VIEW``: Display the ``AVPageView``, scrollbars, and bookmark or thumbnails pane. Annotations are active.   ``AV_PAGE_VIEW``: Display only the ``AVPageView`` (the window that displays the PDF file). Do not display scrollbars, the toolbar, and bookmark or thumbnails pane. Annotations are active.  -  Use either ``AV_DOC_VIEW`` or ``AV_PAGE_VIEW`` whenever possible. Use ``AV_EXTERNAL_VIEW`` only if you do not want the application to display its own toolbar. Use ``AV_PAGE_VIEW`` to open the file with no scrollbars and no status window at the bottom of the page.

   * - useOpenParams
     - ``0`` indicates that the open action of the file is used; a positive number indicates that the action is overridden with the parameters that follow.

   * - pgNum
     - Page number at which the file is to be opened if ``useOpenParams`` is a positive number. The first page is zero.

   * - pageMode
     - Specifies page view mode if ``useOpenParams`` is a positive number. Possible values:  ``PDDontCare``: ``0``: leave the view mode as it is  ``PDUseNone``: ``1``: display without bookmarks or thumbnails  ``PDUseThumbs``: ``2``: display using thumbnails  ``PDUseBookmarks``: ``3``: display using bookmarks  ``PDFullScreen``: ``4``: display in full screen mode

   * - zoomType
     - Zoom type of the page view if ``useOpenParams`` is a positive number. Possible values are:  ``AVZoomFitHeight``: Fits the page's height in the window.  ``AVZoomFitPage``: Fits the page in the window.  ``AVZoomFitVisibleWidth``: Fits the page's visible content into the window.  ``AVZoomFitWidth``: Fits the page's width into the window.  ``AVZoomNoVary``: A fixed zoom, such as 100%.

   * - zoom
     - Zoom factor, used only for ``AVZoomNoVary`` if ``useOpenParams`` is a positive number.

   * - top
     - Used for certain zoom types (such as ``AVZoomNoVary``) if ``useOpenParams`` is a positive number. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for information on views. 

   * - left
     - Used for certain zoom types (such as ``AVZoomNoVary``) if ``useOpenParams`` is a positive number. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for information on views. 

**Returns**

``-1`` if the document was opened successfully, ``0`` otherwise.

.. _related-methods-39:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_30920"></a>

PrintPages
----------

Prints a specified range of pages displaying a print progress dialog box. ``PrintPages`` always uses the default printer setting. It is possible to create custom dialog boxes as shown in the ActiveViewVB sample. Such custom dialog boxes could be used in place of the print progress dialog box or any other dialog box.

**Syntax**

::

   VARIANT_BOOL PrintPages(long nFirstPage, 
                    long nLastPage,long nPSLevel,

                    long bBinaryOk, long bShrinkToFit);

.. _parameters-25:

**Parameters**

.. _section-28:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFirstPage
     - The first page to be printed. The first page in a ``PDDoc`` object is page ``0``. 

   * - nLastPage
     - The last page to be printed.

   * - nPSLevel
     - Valid values are ``2`` and ``3``. If ``2``, PostScript® Level 2 operators are used. If ``3``, PostScript Language Level 3 operators are also used. 

   * - bBinaryOk
     - If a positive number, binary data can be included in the PostScript program. If ``0``, all data is encoded as 7-bit ASCII. 

   * - bShrinkToFit
     - If a positive number, the page is shrunk (if necessary) to fit within the imageable area of the printed page. If ``0``, it is not. 

**Returns**

``0`` if there were any exceptions while printing or if no document was open, ``-1`` otherwise.

.. _related-methods-40:

**Related methods**

* ``AVDoc.`` `PrintPagesEx <IAC_API_OLE_Objects.html#50532405_37344>`__

* ``AVDoc.`` `PrintPagesSilent <IAC_API_OLE_Objects.html#50532405_16535>`__

* ``AVDoc.`` `PrintPagesSilentEx <IAC_API_OLE_Objects.html#50532405_38114>`__

.. raw:: html

   <a name="50532405_37344"></a>

PrintPagesEx
------------

Prints a specified range of pages, displaying a print progress dialog box. ``PrintPagesEx`` has more parameters than ``PrintPages``. ``PrintPagesEx`` always uses the default printer setting. It is possible to create custom dialog boxes as shown in the ActiveViewVB sample. Such custom dialog boxes could be used in place of the print progress dialog box or any other dialog box.

**Syntax**

::

   VARIANT_BOOL printPagesEx(long nFirstPage,long nLastPage,
                    long nPSLevel, long bBinaryOk,

                    long bShrinkToFit, long bReverse,

                    long bFarEastFontOpt, long bEmitHalftones,

                    long iPageOption);

.. _parameters-26:

**Parameters**

.. _section-29:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFirstPage
     - The first page to be printed. The first page in a ``PDDoc`` object is page ``0``. 

   * - nLastPage
     - The last page to be printed.

   * - nPSLevel
     - If ``2``, PostScript Level 2 operators are used. If ``3``, PostScript Language Level 3 operators are also used. 

   * - bBinaryOk
     - If a positive number, binary data may be included in the PostScript program. If ``0``, all data is encoded as 7-bit ASCII. 

   * - bShrinkToFit
     - If a positive number, the page is shrunk (if necessary) to fit within the imageable area of the printed page. If ``0``, it is not. 

   * - bReverse
     - (PostScript printing only) If a positive number, print the pages in reverse order. If false, print the pages in the regular order.

   * - bFarEastFontOpt
     - (PostScript printing only) Set to a positive number if the destination printer has multibyte fonts; set to ``0`` otherwise.

   * - bEmitHalftones
     - (PostScript printing only) If a positive number, emit the halftones specified in the document. If ``0``, do not. 

   * - iPageOption
     - Pages in the range to print. Must be one of: ``PDAllPages``, ``PDEvenPagesOnly``, or ``PDOddPagesOnly``. 

**Returns**

``0`` if there were any exceptions while printing or if no document was open, ``-1`` otherwise.

.. _related-methods-41:

**Related methods**

* ``AVDoc.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_30920>`__

* ``AVDoc.`` `PrintPagesSilent <IAC_API_OLE_Objects.html#50532405_16535>`__

* ``AVDoc.`` `PrintPagesSilentEx <IAC_API_OLE_Objects.html#50532405_38114>`__

.. raw:: html

   <a name="50532405_16535"></a>

PrintPagesSilent
----------------

Prints a specified range of pages without displaying any dialog box. This method is identical to ``AVDoc.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_30920>`__ except for not displaying the dialog box. ``PrintPagesSilent`` always uses the default printer setting.

**Syntax**

::

   VARIANT_BOOL PrintPagesSilent(long nFirstPage, long nLastPage,

                    long nPSLevel, long bBinaryOk,

                    long bShrinkToFit);

.. _parameters-27:

**Parameters**

.. _section-30:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFirstPage
     - The first page to be printed. The first page in a ``PDDoc`` object is page ``0``. 

   * - nLastPage
     - The last page to be printed.

   * - nPSLevel
     - If ``2``, PostScript Level 2 operators are used. If ``3``, PostScript Language Level 3 operators are also used. 

   * - bBinaryOk
     - If a positive number, binary data may be included in the PostScript program. If ``0``, all data is encoded as 7-bit ASCII. 

   * - bShrinkToFit
     - If a positive number, the page is shrunk (if necessary) to fit within the imageable area of the printed page. If ``0``, it is not. 

**Returns**

``0`` if there were any exceptions while printing or if no document was open, ``-1`` otherwise.

.. _related-methods-42:

**Related methods**

* ``AVDoc.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_30920>`__

* ``AVDoc.`` `PrintPagesEx <IAC_API_OLE_Objects.html#50532405_37344>`__

* ``AVDoc.`` `PrintPagesSilentEx <IAC_API_OLE_Objects.html#50532405_38114>`__

.. raw:: html

   <a name="50532405_38114"></a>

PrintPagesSilentEx
------------------

Prints a specified range of pages without displaying any dialog box. This method is identical to ``AVDoc.`` `PrintPagesEx <IAC_API_OLE_Objects.html#50532405_37344>`__ except for not displaying the dialog box. ``PrintPagesSilentEx`` has more parameters than ``PrintPagesSilent``. ``PrintPagesSilentEx`` always uses the default printer setting.

**Syntax**

::

   VARIANT_BOOL PrintPagesSilentEx(long nFirstPage, 
                    long nLastPage,

                    long nPSLevel, long bBinaryOk,

                    long bShrinkToFit, long bReverse,

                    long bFarEastFontOpt,

                    long bEmitHalftones,

                    long iPageOption);

.. _parameters-28:

**Parameters**

.. _section-31:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFirstPage
     - The first page to be printed.

   * - nLastPage
     - The last page to be printed.

   * - nPSLevel
     - If ``2``, PostScript Level 2 operators are used. If ``3``, PostScript Language Level 3 operators are also used. 

   * - bBinaryOk
     - If a positive number, binary data may be included in the PostScript program. If ``0``, all data is encoded as 7-bit ASCII. 

   * - bShrinkToFit
     - If a positive number, the page is shrunk (if necessary) to fit within the imageable area of the printed page. If ``0``, it is not. 

   * - bReverse
     - (PostScript printing only) If a positive number, print the pages in reverse order. If false, print the pages in the regular order.

   * - bFarEastFontOpt
     - (PostScript printing only) Set to a positive number if the destination printer has multibyte fonts; set to ``0`` otherwise.

   * - bEmitHalftones
     - (PostScript printing only) If a positive number, emit the halftones specified in the document. If ``0``, do not. 

   * - iPageOption
     - Pages in the range to print. Must be one of: ``PDAllPages``, ``PDEvenPagesOnly``, or ``PDOddPagesOnly``. 

**Returns**

``0`` if there were any exceptions while printing, ``-1`` otherwise.

.. _related-methods-43:

**Related methods**

* ``AVDoc.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_30920>`__

* ``AVDoc.`` `PrintPagesEx <IAC_API_OLE_Objects.html#50532405_37344>`__

* ``AVDoc.`` `PrintPagesSilentEx <IAC_API_OLE_Objects.html#50532405_38114>`__

.. raw:: html

   <a name="50532405_14434"></a>

.. _setframe-1:

SetFrame
--------

Sets the window's size and location.

**Syntax**

::

   VARIANT_BOOL SetFrame(LPDISPATCH iAcroRect);

.. _parameters-29:

**Parameters**

.. _section-32:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroRect
     - The ``LPDISPATCH`` for an ``AcroExch.Rect`` specifying the window frame. ``iAcroRect's`` instance variable ``m_lpDispatch`` contains this ``LPDISPATCH``. 

**Returns**

Always returns ``-1``.

.. _related-methods-44:

**Related methods**

* ``AVDoc.`` `GetFrame <IAC_API_OLE_Objects.html#50532405_28538>`__

.. raw:: html

   <a name="50532405_34749"></a>

SetTextSelection
----------------

Sets the document's selection to the specified text selection. Before calling this method, use one of the following to create the text selection:

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__ : Creates from a rectangle.

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__ : Creates from a list of character offsets and counts.

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__ : Creates from a list of word offsets and counts.

After calling this method, use ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__ to show the selection.

**Syntax**

::

   VARIANT_BOOL SetTextSelection(LPDISPATCH iAcroPDTextSelect);

.. _parameters-30:

**Parameters**

.. _section-33:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroPDTextSelect
     - The ``LPDISPATCH`` for the text selection to use. ``iAcroPDTextSelect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

 Returns ``-1`` if successful . Returns ``0`` if no document is open or the ``LPDISPATCH`` is not a ``PDTextSelect`` object.

.. _related-methods-45:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_26583>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_28000"></a>

SetTitle
--------

Sets the window's title.

**Syntax**

::

   VARIANT_BOOL SetTitle(BSTR szTitle);

.. _parameters-31:

**Parameters**

.. _section-34:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szTitle
     - The title to be set. This method cannot be used for document windows, but only for windows created by Plugins.

**Returns**

 Returns ``0`` if no document is open, ``-1`` otherwise.

.. _related-methods-46:

**Related methods**

* ``AVDoc.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_37022"></a>

SetViewMode
-----------

Sets the mode in which the document will be viewed (pages only, pages and thumbnails, or pages and bookmarks).

**Syntax**

::

   VARIANT_BOOL SetViewMode(long nType);

.. _parameters-32:

**Parameters**

.. _section-35:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - The view mode to be set. Possible values:  ``PDDontCare``: ``0``: leave the view mode as it is  ``PDUseNone``: ``1``: display without bookmarks or thumbnails  ``PDUseThumbs``: ``2``: display using thumbnails  ``PDUseBookmarks``: ``3``: display using bookmarks  .. note::  Do not set the view mode to ``Close`` with ``AVDoc.SetViewMode`` when using ``AVDoc.OpenInWindowEx`` ; this will cause the viewer and application to hang.

**Returns**

``0`` if an error occurred while setting the view mode or if no document was open, ``-1`` otherwise.

.. _related-methods-47:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVDoc.`` `GetViewMode <IAC_API_OLE_Objects.html#50532405_29291>`__

.. raw:: html

   <a name="50532405_27147"></a>

ShowTextSelect
--------------

Changes the view so that the current text selection is visible.

**Syntax**

::

   VARIANT_BOOL ShowTextSelect();

**Returns**

 Returns ``0`` if no document is open, ``-1`` otherwise.

.. _related-methods-48:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_13484"></a>

AcroExch.AVPageView
===================

The area of the Acrobat application's window that displays the contents of a document's page. This is a non-creatable interface. Every ``AVDoc`` object has an ``AVPageView`` object and vice versa. The object provides access to the ``PDDoc`` and ``PDPage`` objects for the document being displayed.

.. _methods-2:

Methods
-----------------------

The ``AVPageView`` object has the following methods.

.. _section-36:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `DevicePointToPage <IAC_API_OLE_Objects.html#50532405_34128>`__
     - Converts the coordinates of a point from device space to user space.

   * - `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__
     - Goes to the previous view on the view history stack, if any.

   * - `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__
     - Goes to the next view on the view history stack, if any.

   * - `GetAperture <IAC_API_OLE_Objects.html#50532405_17623>`__
     - Gets the aperture of the specified page view.

   * - `GetAVDoc <IAC_API_OLE_Objects.html#50532405_35267>`__
     - Gets the ``AcroExch.AVDoc`` associated with the current page.

   * - `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__
     - Gets the ``AcroExch.PDDoc`` corresponding to the current page.

   * - `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__
     - Gets the ``AcroExch.PDPage`` corresponding to the current page.

   * - `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__
     - Gets the page number of the current page.

   * - `GetZoom <IAC_API_OLE_Objects.html#50532405_27016>`__
     - Gets the current zoom factor, specified as a percent.

   * - `GetZoomType <IAC_API_OLE_Objects.html#50532405_24520>`__
     - Gets the current zoom type.

   * - `Goto <IAC_API_OLE_Objects.html#50532405_19981>`__
     - Goes to the specified page.

   * - `PointToDevice <IAC_API_OLE_Objects.html#50532405_19347>`__
     - Deprecated. Converts the coordinates of a point from user space to device space.

   * - `ReadPageDown <IAC_API_OLE_Objects.html#50532405_20099>`__
     - Scrolls forward through the document by one screen area.

   * - `ReadPageUp <IAC_API_OLE_Objects.html#50532405_41587>`__
     - Scrolls backward through the document by one screen area.

   * - `ScrollTo <IAC_API_OLE_Objects.html#50532405_28175>`__
     - Scrolls to the specified location on the current page.

   * - `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__
     - Zooms to the specified magnification.

.. raw:: html

   <a name="50532405_34128"></a>

DevicePointToPage
-----------------

Converts the coordinates of a point from device space to user space.

**Syntax**

::

   LPDISPATCH DevicePointToPage(LPDISPATCH iAcroPoint);

.. _parameters-33:

**Parameters**

.. _section-37:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroPoint
     - The ``LPDISPATCH`` for the ``AcroExch.Point`` whose coordinates are converted. ``iAcroPoint`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Point`` containing the converted coordinates.

.. _related-methods-49:

**Related methods**

* ``AVPageView.`` `PointToDevice <IAC_API_OLE_Objects.html#50532405_19347>`__

.. raw:: html

   <a name="50532405_27205"></a>

DoGoBack
--------

Goes to the previous view on the view history stack, if any.

**Syntax**

::

   VARIANT_BOOL DoGoBack();

**Returns**

Always returns ``-1``.

.. _related-methods-50:

**Related methods**

* ``AVPageView.`` `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__

.. raw:: html

   <a name="50532405_15639"></a>

DoGoForward
-----------

Goes to the next view on the view history stack, if any.

**Syntax**

::

   VARIANT_BOOL DoGoForward();

**Returns**

Always returns ``-1``.

.. _related-methods-51:

**Related methods**

* ``AVPageView.`` `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__

.. raw:: html

   <a name="50532405_17623"></a>

GetAperture
-----------

Gets the aperture of the specified page view. The aperture is the rectangular region of the window in which the document is drawn, measured in device space units.

**Syntax**

::

   CAcroRect* GetAperture();

**Returns**

A pointer to the aperture rectangle. Its coordinates are specified in device space.

.. _related-methods-52:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVPageView.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__

* ``AVPageView.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``AVPageView.`` `GetZoomType <IAC_API_OLE_Objects.html#50532405_24520>`__

.. raw:: html

   <a name="50532405_35267"></a>

.. _getavdoc-1:

GetAVDoc
--------

Gets the ``AcroExch.AVDoc`` associated with the current page.

**Syntax**

::

   LPDISPATCH GetAVDoc();

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.AVDoc``.

.. _related-methods-53:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVDoc.`` `GetPDDoc <IAC_API_OLE_Objects.html#50532405_25013>`__

* ``AVPageView.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

.. raw:: html

   <a name="50532405_11484"></a>

GetDoc
------

Gets the ``AcroExch.PDDoc`` corresponding to the current page.

**Syntax**

::

   LPDISPATCH GetDoc();

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDDoc``.

.. _related-methods-54:

**Related methods**

* ``AVDoc.`` `GetAVPageView <IAC_API_OLE_Objects.html#50532405_35375>`__

* ``AVDoc.`` `GetPDDoc <IAC_API_OLE_Objects.html#50532405_25013>`__

* ``AVPageView.`` `GetAVDoc <IAC_API_OLE_Objects.html#50532405_26359>`__

.. raw:: html

   <a name="50532405_11673"></a>

GetPage
-------

Gets the ``AcroExch.PDPage`` corresponding to the current page.

**Syntax**

::

   LPDISPATCH GetPage();

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDPage``.

.. _related-methods-55:

**Related methods**

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

.. raw:: html

   <a name="50532405_19046"></a>

GetPageNum
----------

Gets the page number of the current page. The first page in a document is page zero.

**Syntax**

::

   long GetPageNum();

**Returns**

The current page's page number.

.. _related-methods-56:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_40890>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

.. raw:: html

   <a name="50532405_27016"></a>

GetZoom
-------

Gets the current zoom factor, specified as a percent. For example, 100 is returned if the magnification is 1.0.

**Syntax**

::

   long GetZoom();

**Returns**

The current zoom factor.

.. _related-methods-57:

**Related methods**

* ``App.`` `GetPreference <IAC_API_OLE_Objects.html#50532405_36273>`__

* ``AVPageView.`` `GetZoomType <IAC_API_OLE_Objects.html#50532405_24520>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_24520"></a>

GetZoomType
-----------

Gets the current zoom type.

**Syntax**

::

   short GetZoomType();

**Returns**

Zoom type. The value is one of the following:

* ``AVZoomFitHeight``: Fits the page's height in the window.

* ``AVZoomFitPage``: Fits the page in the window.

* ``AVZoomFitVisibleWidth``: Fits the page's visible content into the window.

* ``AVZoomFitWidth``: Fits the page's width into the window.

* ``AVZoomNoVary``: A fixed zoom, such as 100%.

.. _related-methods-58:

**Related methods**

* ``App.`` `GetPreference <IAC_API_OLE_Objects.html#50532405_36273>`__

* ``AVPageView.`` `GetZoomType <IAC_API_OLE_Objects.html#50532405_24520>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_19981"></a>

Goto
----

Goes to the specified page.

**Syntax**

::

   VARIANT_BOOL GoTo(long nPage);

.. _parameters-34:

**Parameters**

.. _section-38:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nPage
     - Page number of the destination page. The first page in a ``PDDoc`` object is page ``0``. 

**Returns**

``-1`` if the Acrobat application successfully went to the page, ``0`` otherwise.

.. _related-methods-59:

**Related methods**

* ``AVPageView.`` `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__

* ``AVPageView.`` `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__

* ``AVPageView.`` `ReadPageDown <IAC_API_OLE_Objects.html#50532405_20099>`__

* ``AVPageView.`` `ReadPageUp <IAC_API_OLE_Objects.html#50532405_41587>`__

* ``AVPageView.`` `ScrollTo <IAC_API_OLE_Objects.html#50532405_28175>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_19347"></a>

PointToDevice
-------------

Converts the coordinates of a point from user space to device space.

.. note::

   Deprecated. Do not use this method.

**Syntax**

::

   LPDISPATCH PointToDevice(LPDISPATCH iAcroPoint);

.. _parameters-35:

**Parameters**

.. _section-39:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroPoint
     - The ``LPDISPATCH`` for the ``AcroExch.Point`` whose coordinates are converted. ``iAcroPoint`` contains the instance variable ``m_lpDispatch``, which contains this ``LPDISPATCH``. 

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Point`` containing the converted coordinates.

.. _related-methods-60:

**Related methods**

* ``AVPageView.`` `DevicePointToPage <IAC_API_OLE_Objects.html#50532405_34128>`__

.. raw:: html

   <a name="50532405_20099"></a>

ReadPageDown
------------

Scrolls forward through the document by one screen area.

**Syntax**

::

   VARIANT_BOOL ReadPageDown();

**Returns**

Always returns ``-1``.

.. _related-methods-61:

**Related methods**

* ``AVPageView.`` `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__

* ``AVPageView.`` `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__

* ``AVPageView.`` `Goto <IAC_API_OLE_Objects.html#50532405_19981>`__

* ``AVPageView.`` `ReadPageUp <IAC_API_OLE_Objects.html#50532405_41587>`__

* ``AVPageView.`` `ScrollTo <IAC_API_OLE_Objects.html#50532405_28175>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_41587"></a>

ReadPageUp
----------

Scrolls backward through the document by one screen area.

**Syntax**

::

   VARIANT_BOOL ReadPageUp();

**Returns**

Always returns ``-1``.

.. _related-methods-62:

**Related methods**

* ``AVPageView.`` `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__

* ``AVPageView.`` `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__

* ``AVPageView.`` `Goto <IAC_API_OLE_Objects.html#50532405_19981>`__

* ``AVPageView.`` `ReadPageDown <IAC_API_OLE_Objects.html#50532405_20099>`__

* ``AVPageView.`` `ScrollTo <IAC_API_OLE_Objects.html#50532405_28175>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_28175"></a>

ScrollTo
--------

Scrolls to the specified location on the current page.

**Syntax**

::

   VARIANT_BOOL ScrollTo(short nX, short nY);

.. _parameters-36:

**Parameters**

.. _section-40:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nX
     - The x–coordinate of the destination.

   * - nY
     - The y–coordinate of the destination.

**Returns**

``-1`` if the Acrobat application successfully scrolled to the specified location, ``0`` otherwise.

.. _related-methods-63:

**Related methods**

* ``AVPageView.`` `DoGoBack <IAC_API_OLE_Objects.html#50532405_27205>`__

* ``AVPageView.`` `DoGoForward <IAC_API_OLE_Objects.html#50532405_15639>`__

* ``AVPageView.`` `Goto <IAC_API_OLE_Objects.html#50532405_19981>`__

* ``AVPageView.`` `ReadPageDown <IAC_API_OLE_Objects.html#50532405_20099>`__

* ``AVPageView.`` `ReadPageUp <IAC_API_OLE_Objects.html#50532405_41587>`__

* ``AVPageView.`` `ZoomTo <IAC_API_OLE_Objects.html#50532405_19513>`__

.. raw:: html

   <a name="50532405_19513"></a>

ZoomTo
------

Zooms to the specified magnification.

**Syntax**

::

   VARIANT_BOOL ZoomTo(short nType, short nScale);

.. _parameters-37:

**Parameters**

.. _section-41:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - Zoom type. Possible values are:  ``AVZoomFitHeight``: Fits the page's height into the window.  ``AVZoomFitPage``: Fits the page into the window.  ``AVZoomFitVisibleWidth``: Fits the page's visible content into the window.  ``AVZoomFitWidth``: Fits the page's width into the window.  ``AVZoomNoVary``: A fixed zoom, such as 100%.

   * - nScale
     - The desired zoom factor, expressed as a percentage. For example, 100 is a magnification of 1.0.

**Returns**

``-1`` if the magnification was set successfully, ``0`` otherwise.

.. _related-methods-64:

**Related methods**

* ``AVPageView.`` `GetZoomType <IAC_API_OLE_Objects.html#50532405_24520>`__

* ``AVPageView.`` `Goto <IAC_API_OLE_Objects.html#50532405_19981>`__

* ``AVPageView.`` `ScrollTo <IAC_API_OLE_Objects.html#50532405_28175>`__

.. raw:: html

   <a name="50532405_39171"></a>

AcroExch.HiliteList
===================

A highlighted region of text in a PDF document, which may include one or more contiguous groups of characters or words on a single page. This is a creatable interface. This object has a single method, ``Add``, and is used by the ``PDPage`` object to create ``PDTextSelect`` objects.

.. raw:: html

   <a name="50532405_30712"></a>

Add
---

Adds the highlight specified by ``nOffset`` and ``nLength`` to the current highlight list. Highlight lists are used to highlight one or more contiguous groups of characters or words on a single page.

Highlight lists are used both for character-based and word-based highlighting, although a single highlight list cannot contain a mixture of character and word highlights. After creating a highlight list, use ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__ or ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__ (depending on whether the highlight list is used for characters or words) to create a text selection from the highlight list.

**Syntax**

::

   VARIANT_BOOL Add(short nOffset, short nLength);

.. _parameters-38:

**Parameters**

.. _section-42:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nOffset
     - Offset of the first word or character to be highlighted, the first of which has an offset of zero.

   * - nLength
     - The number of consecutive words or characters to be highlighted.

**Returns**

Always returns ``-1``.

.. _related-methods-65:

**Related methods**

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

.. raw:: html

   <a name="50532405_42349"></a>

AcroExch.PDAnnot
================

An annotation on a page in a PDF file. This is a non-creatable interface. Acrobat applications have two built-in annotation types: ``PDTextAnnot`` and ``PDLinkAnnot``. The object provides access to the physical attributes of the annotation. Plugins may add movie and Widget (form field) annotations, and developers can define new annotation subtypes by creating new annotation handlers.

.. _methods-3:

Methods
-------------------------

The ``PDAnnot`` object has the following methods.

.. _section-43:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `GetColor <IAC_API_OLE_Objects.html#50532405_37589>`__
     - Gets an annotation's color.

   * - `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__
     - Gets a text annotation's contents.

   * - `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__
     - Gets an annotation's date.

   * - `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__
     - Gets an annotation's bounding rectangle.

   * - `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__
     - Gets an annotation's subtype.

   * - `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__
     - Gets a text annotation's title.

   * - `IsEqual <IAC_API_OLE_Objects.html#50532405_41878>`__
     - Determines whether an annotation is the same as the specified annotation.

   * - `IsOpen <IAC_API_OLE_Objects.html#50532405_24800>`__
     - Tests whether a text annotation is open.

   * - `IsValid <IAC_API_OLE_Objects.html#50532405_21326>`__
     - Tests whether an annotation is still valid.

   * - `Perform <IAC_API_OLE_Objects.html#50532405_37155>`__
     - Performs a link annotation's action.

   * - `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__
     - Sets an annotation's color.

   * - `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__
     - Sets a text annotation's contents.

   * - `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__
     - Sets an annotation's date.

   * - `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__
     - Opens or closes a text annotation.

   * - `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__
     - Sets an annotation's bounding rectangle.

   * - `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__
     - Sets a text annotation's title.

.. raw:: html

   <a name="50532405_37589"></a>

GetColor
--------

Gets an annotation's color.

**Syntax**

::

   long GetColor();

**Returns**

The annotation's color, a long value of the form 0x00BBGGRR where the first byte from the right (RR) is a relative value for red, the second byte (GG) is a relative value for green, and the third byte (BB) is a relative value for blue. The high-order byte must be ``0``.

.. _related-methods-66:

**Related methods**

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

.. raw:: html

   <a name="50532405_16450"></a>

GetContents
-----------

Gets a text annotation's contents.

**Syntax**

::

   BSTR GetContents();

**Returns**

The annotation's contents.

.. _related-methods-67:

**Related methods**

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

.. raw:: html

   <a name="50532405_41515"></a>

GetDate
-------

Gets an annotation's date.

**Syntax**

::

   LPDISPATCH GetDate();

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Time`` object containing the date.

.. _related-methods-68:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

.. raw:: html

   <a name="50532405_19800"></a>

GetRect
-------

Gets an annotation's bounding rectangle.

**Syntax**

::

   LPDISPATCH GetRect();

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Rect`` containing the annotation's bounding rectangle.

.. _related-methods-69:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

.. raw:: html

   <a name="50532405_17093"></a>

GetSubtype
----------

Gets an annotation's subtype.

**Syntax**

::

   BSTR GetSubtype();

**Returns**

The annotation's subtype. The built-in subtypes are Text and Link.

.. _related-methods-70:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

.. raw:: html

   <a name="50532405_14780"></a>

.. _gettitle-1:

GetTitle
--------

Gets a text annotation's title.

**Syntax**

::

   BSTR GetTitle();

**Returns**

The annotation's title.

.. _related-methods-71:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__

.. raw:: html

   <a name="50532405_41878"></a>

IsEqual
-------

Determines whether an annotation is the same as the specified annotation.

**Syntax**

::

   VARIANT_BOOL IsEqual(LPDISPATCH PDAnnot);

.. _parameters-39:

**Parameters**

.. _section-44:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - PDAnnot
     - The ``LPDISPATCH`` for the ``AcroExch.PDAnnot`` to be tested. ``PDAnnot`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``-1`` if the annotations are the same, ``0`` otherwise.

.. _related-methods-72:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``PDAnnot.`` `IsOpen <IAC_API_OLE_Objects.html#50532405_24800>`__

* ``PDAnnot.`` `IsValid <IAC_API_OLE_Objects.html#50532405_21326>`__

.. raw:: html

   <a name="50532405_24800"></a>

IsOpen
------

Tests whether a text annotation is open.

**Syntax**

::

   VARIANT_BOOL IsOpen();

**Returns**

``-1`` if open, ``0`` otherwise.

.. _related-methods-73:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``PDAnnot.`` `IsEqual <IAC_API_OLE_Objects.html#50532405_41878>`__

* ``PDAnnot.`` `IsValid <IAC_API_OLE_Objects.html#50532405_21326>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

.. raw:: html

   <a name="50532405_21326"></a>

.. _isvalid-1:

IsValid
-------

Tests whether an annotation is still valid. This method is intended only to test whether the annotation has been deleted, not whether it is a completely valid annotation object.

**Syntax**

::

   VARIANT_BOOL IsValid();

**Returns**

``-1`` if the annotation is valid, ``0`` otherwise.

.. _related-methods-74:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `GetDate <IAC_API_OLE_Objects.html#50532405_41515>`__

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `GetSubtype <IAC_API_OLE_Objects.html#50532405_17093>`__

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``PDAnnot.`` `IsEqual <IAC_API_OLE_Objects.html#50532405_41878>`__

* ``PDAnnot.`` `IsOpen <IAC_API_OLE_Objects.html#50532405_24800>`__

.. raw:: html

   <a name="50532405_37155"></a>

Perform
-------

Performs a link annotation's action.

**Syntax**

::

   VARIANT_BOOL Perform(LPDISPATCH iAcroAVDoc);

.. _parameters-40:

**Parameters**

.. _section-45:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroAVDoc
     - The ``LPDISPATCH`` for the ``AcroExch.AVDoc`` in which the annotation is located. ``iAcroAVDoc`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``-1`` if the action was executed successfully, ``0`` otherwise.

.. _related-methods-75:

**Related methods**

* ``PDAnnot.`` `IsValid <IAC_API_OLE_Objects.html#50532405_21326>`__

.. raw:: html

   <a name="50532405_39464"></a>

SetColor
--------

Sets an annotation's color.

**Syntax**

::

   VARIANT_BOOL SetColor(long nRGBColor);

.. _parameters-41:

**Parameters**

.. _section-46:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nRGBColor
     - The color to use for the annotation.

**Returns**

``-1`` if the annotation's color was set, ``0`` if the Acrobat application does not support editing.

``nRGBColor`` is a long value with the form 0x00BBGGRR where the first byte from the right (RR) is a relative value for red, the second byte (GG) is a relative value for green, and the third byte (BB) is a relative value for blue. The high-order byte must be ``0``.

.. _related-methods-76:

**Related methods**

* ``PDAnnot.`` `GetColor <IAC_API_OLE_Objects.html#50532405_37589>`__

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__

.. raw:: html

   <a name="50532405_22402"></a>

SetContents
-----------

Sets a text annotation's contents.

**Syntax**

::

   VARIANT_BOOL SetContents(BSTR szContents);

.. _parameters-42:

**Parameters**

.. _section-47:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szContents
     - The contents to use for the annotation.

**Returns**

``0`` if the Acrobat application does not support editing, ``-1`` otherwise.

.. _related-methods-77:

**Related methods**

* ``PDAnnot.`` `GetContents <IAC_API_OLE_Objects.html#50532405_16450>`__

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__

.. raw:: html

   <a name="50532405_40644"></a>

SetDate
-------

Sets an annotation's date.

**Syntax**

::

   VARIANT_BOOL SetDate(LPDISPATCH iAcroTime);

.. _parameters-43:

**Parameters**

.. _section-48:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroTime
     - The ``LPDISPATCH`` for the date and time to use for the annotation. ``iAcroTime's`` instance variable ``m_lpDispatch`` contains this ``LPDISPATCH``. 

**Returns**

``-1`` if the date was set, ``0`` if the Acrobat application does not support editing.

.. _related-methods-78:

**Related methods**

* ``PDAnnot.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_15243>`__

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__

.. raw:: html

   <a name="50532405_27381"></a>

SetOpen
-------

Opens or closes a text annotation.

**Syntax**

::

   VARIANT_BOOL SetOpen(long bIsOpen);

.. _parameters-44:

**Parameters**

.. _section-49:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bIsOpen
     - If a positive number, the annotation is open. If ``0``, the annotation is closed. 

**Returns**

Always returns ``-1``.

.. _related-methods-79:

**Related methods**

* ``PDAnnot.`` `IsOpen <IAC_API_OLE_Objects.html#50532405_24800>`__

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__

.. raw:: html

   <a name="50532405_16563"></a>

SetRect
-------

Sets an annotation's bounding rectangle.

**Syntax**

::

   VARIANT_BOOL SetRect(LPDISPATCH iAcroRect);

.. _parameters-45:

**Parameters**

.. _section-50:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroRect
     - The ``LPDISPATCH`` for the bounding rectangle (``AcroExch.Rect``) to set. ``iAcroRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``-1`` if a rectangle was supplied, ``0`` otherwise.

.. _related-methods-80:

**Related methods**

* ``PDAnnot.`` `GetRect <IAC_API_OLE_Objects.html#50532405_19800>`__

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

* ``PDAnnot.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__

.. raw:: html

   <a name="50532405_37671"></a>

.. _settitle-1:

SetTitle
--------

Sets a text annotation's title.

**Syntax**

::

   VARIANT_BOOL SetTitle(BSTR szTitle);

.. _parameters-46:

**Parameters**

.. _section-51:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szTitle
     - The title to use.

**Returns**

``-1`` if the title was set, ``0`` if the Acrobat application does not support editing.

.. _related-methods-81:

**Related methods**

* ``PDAnnot.`` `GetByTitle <IAC_API_OLE_Objects.html#50532405_32270>`__

* ``PDAnnot.`` `SetColor <IAC_API_OLE_Objects.html#50532405_39464>`__

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDAnnot.`` `SetDate <IAC_API_OLE_Objects.html#50532405_40644>`__

* ``PDAnnot.`` `SetOpen <IAC_API_OLE_Objects.html#50532405_27381>`__

* ``PDAnnot.`` `SetRect <IAC_API_OLE_Objects.html#50532405_16563>`__

.. raw:: html

   <a name="50532405_29095"></a>

AcroExch.PDBookmark
===================

A bookmark for a page in a PDF file. This is a creatable interface. Each bookmark has a title that appears on screen, and an action that specifies what happens when a user clicks on the bookmark.

Bookmarks can either be created interactively by the user through the Acrobat application's user interface or programmatically generated. The typical action for a user-created bookmark is to move to another location in the current document, although any action can be specified. It is not possible to create a bookmark with OLE—only to destroy one.

.. _methods-4:

Methods
---------------------------

The ``PDBookmark`` object has the following methods.

.. _section-52:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `Destroy <IAC_API_OLE_Objects.html#50532405_26583>`__
     - Destroys a bookmark.

   * - `GetByTitle <IAC_API_OLE_Objects.html#50532405_32270>`__
     - Gets the bookmark that has the specified title.

   * - `GetTitle <IAC_API_OLE_Objects.html#50532405_15243>`__
     - Gets a bookmark's title.

   * - `IsValid <IAC_API_OLE_Objects.html#50532405_11084>`__
     - Determines whether the bookmark is valid.

   * - `Perform <IAC_API_OLE_Objects.html#50532405_22695>`__
     - Performs a bookmark's action.

   * - `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__
     - Sets a bookmark's title.

.. raw:: html

   <a name="50532405_26583"></a>

Destroy
-------

Destroys a bookmark.

**Syntax**

::

   VARIANT_BOOL Destroy();

**Returns**

``0`` if the Acrobat application does not support editing (making it impossible to delete the bookmark), ``-1`` otherwise.

.. _related-methods-82:

**Related methods**

* ``PDBookmark.`` `IsValid <IAC_API_OLE_Objects.html#50532405_11084>`__

.. raw:: html

   <a name="50532405_32270"></a>

GetByTitle
----------

Gets the bookmark that has the specified title. The ``AcroExch.PDBookmark`` object is set to the specified bookmark as a side effect of the method; it is not the method's return value. You cannot enumerate bookmark titles with this method.

**Syntax**

::

   VARIANT_BOOL GetByTitle(LPDISPATCH iAcroPDDoc, 
                    BSTR bookmarkTitle);

.. _parameters-47:

**Parameters**

.. _section-53:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroPDDoc
     - The ``LPDISPATCH`` for the document (``AcroExch.PDDoc`` object) containing the bookmark. ``iAcroPDDoc`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

   * - bookmarkTitle
     - The title of the bookmark to get. The capitalization of the title must match that in the bookmark.

**Returns**

* ``-1`` if the specified bookmark exists (the method determines this using the ``PDBookmark.`` `IsValid <IAC_API_OLE_Objects.html#50532405_11084>`__ method), ``0`` otherwise.

.. _related-methods-83:

**Related methods**

* ``PDBookmark.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_15243>`__

* ``PDBookmark.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__

**Example**

::

   CAcroPDBookmark* bookmark = new CAcroPDBookmark;
   
   bookmark->CreateDispatch("AcroExch.PDBookmark");
   
   bookmark->GetByTitle(m_pAcroAVDoc->GetPDDoc(), "Name of Bookmark");
   
   if (bookmark->IsValid()) 
       bookmark->Perform(m_pAcroAVDoc->m_lpDispatch);
   else
       AfxMessageBox("Bookmark not valid");

.. raw:: html

   <a name="50532405_15243"></a>

.. _gettitle-2:

GetTitle
--------

Gets a bookmark's title.

**Syntax**

::

   BSTR GetTitle();

**Returns**

The title.

.. _related-methods-84:

**Related methods**

* ``PDBookmark.`` `GetByTitle <IAC_API_OLE_Objects.html#50532405_32270>`__

* ``PDBookmark.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_16583>`__

.. raw:: html

   <a name="50532405_11084"></a>

.. _isvalid-2:

IsValid
-------

Determines whether the bookmark is valid. This method only checks whether the bookmark has been deleted; it does not thoroughly check the bookmark's data structures.

**Syntax**

::

   VARIANT_BOOL IsValid();

**Returns**

``-1`` if the bookmark is valid, ``0`` otherwise.

.. _related-methods-85:

**Related methods**

* ``PDBookmark.`` `Destroy <IAC_API_OLE_Objects.html#50532405_26583>`__

**Syntax** .. raw:: html

   <a name="50532405_22695"></a>

.. _perform-1:

Perform
-------

Performs a bookmark's action.

**Syntax**

::

   VARIANT_BOOL Perform(LPDISPATCH iAcroAVDoc);

.. _parameters-48:

**Parameters**

.. _section-54:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroAVDoc
     - The ``LPDISPATCH`` for the ``AcroExch.AVDoc`` in which the bookmark is located. ``iAcroAVDoc`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``-1`` if the action was executed successfully, ``0`` otherwise.

.. _related-methods-86:

**Related methods**

* ``PDBookmark.`` `IsValid <IAC_API_OLE_Objects.html#50532405_42634>`__

.. raw:: html

   <a name="50532405_16583"></a>

.. _settitle-2:

SetTitle
--------

Sets a bookmark's title.

**Syntax**

::

   VARIANT_BOOL SetTitle(BSTR szNewTitle);

.. _parameters-49:

**Parameters**

.. _section-55:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szNewTitle
     - The title to set.

**Returns**

``0`` if the Acrobat application does not support editing, ``-1`` otherwise.

.. _related-methods-87:

**Related methods**

* ``PDBookmark.`` `GetByTitle <IAC_API_OLE_Objects.html#50532405_32270>`__

* ``PDBookmark.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_15243>`__

.. raw:: html

   <a name="50532405_34812"></a>

AcroExch.PDDoc
==============

The underlying PDF representation of a document. This is a creatable interface. There is a correspondence between a ``PDDoc`` object and an ``ASFile`` object (an opaque representation of an open file made available through an interface encapsulating Acrobat's access to file services), and the ``PDDoc`` object is the hidden object behind every ``AVDoc`` object. An ``ASFile`` object may have zero or more underlying files, so a PDF file does not always correspond to a single disk file. For example, an ``ASFile`` object may provide access to PDF data in a database.

Through ``PDDoc`` objects, your application can perform most of the Document menu items from Acrobat (delete pages, replace pages, and so on), create and delete thumbnails, and set and retrieve document information fields.

.. _methods-5:

Methods
----------------------------------

The ``PDDoc`` object has the following methods.

.. _section-56:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__
     - Acquires the specified page.

   * - `ClearFlags <IAC_API_OLE_Objects.html#50532405_39995>`__
     - Clears a document's flags.

   * - `Close <IAC_API_OLE_Objects.html#50532405_37346>`__
     - Closes a file.

   * - `Create <IAC_API_OLE_Objects.html#50532405_58029>`__
     - Creates a new ``AcroExch.PDDoc``. 

   * - `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__
     - Creates a text selection from the specified rectangle on the specified page.

   * - `CreateThumbs <IAC_API_OLE_Objects.html#50532405_27374>`__
     - Creates thumbnail images for the specified page range in a document.

   * - `CropPages <IAC_API_OLE_Objects.html#50532405_22406>`__
     - Crops the pages in a specified range in a document.

   * - `DeletePages <IAC_API_OLE_Objects.html#50532405_13365>`__
     - Deletes pages from a file.

   * - `DeleteThumbs <IAC_API_OLE_Objects.html#50532405_37375>`__
     - Deletes thumbnail images from the specified pages in a document.

   * - `GetFileName <IAC_API_OLE_Objects.html#50532405_30617>`__
     - Gets the name of the file associated with this ``AcroExch.PDDoc``. 

   * - `GetFlags <IAC_API_OLE_Objects.html#50532405_24732>`__
     - Gets a document's flags.

   * - `GetInfo <IAC_API_OLE_Objects.html#50532405_19753>`__
     - Gets the value of a specified key in the document's ``Info`` dictionary.

   * - `GetInstanceID <IAC_API_OLE_Objects.html#50532405_27536>`__
     - Gets the instance ID (the second element) from the ID array in the document's trailer.

   * - `GetJSObject <IAC_API_OLE_Objects.html#50532405_28442>`__
     - Gets a dual interface to the JavaScript object associated with the PDDoc.

   * - `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__
     - Gets the number of pages in a file.

   * - `GetPageMode <IAC_API_OLE_Objects.html#50532405_27507>`__
     - Gets a value indicating whether the Acrobat application is currently displaying only pages, pages and thumbnails, or pages and bookmarks. 

   * - `GetPermanentID <IAC_API_OLE_Objects.html#50532405_36645>`__
     - Gets the permanent ID (the first element) from the ID array in the document's trailer.

   * - `InsertPages <IAC_API_OLE_Objects.html#50532405_16929>`__
     - Inserts the specified pages from the source document after the indicated page within the current document.

   * - `MovePage <IAC_API_OLE_Objects.html#50532405_35068>`__
     - Moves a page to another location within the same document.

   * - `Open <IAC_API_OLE_Objects.html#50532405_41972>`__
     - Opens a file.

   * - `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__
     - Opens a window and displays the document in it.

   * - `ReplacePages <IAC_API_OLE_Objects.html#50532405_40109>`__
     - Replaces the indicated pages in the current document with those specified from the source document.

   * - `Save <IAC_API_OLE_Objects.html#50532405_28634>`__
     - Saves a document.

   * - `SetFlags <IAC_API_OLE_Objects.html#50532405_31111>`__
     - Sets a document's flags indicating whether the document has been modified, whether the document is a temporary document and should be deleted when closed, and the version of PDF used in the file.

   * - `SetInfo <IAC_API_OLE_Objects.html#50532405_42162>`__
     - Sets the value of a key in a document's ``Info`` dictionary.

   * - `SetPageMode <IAC_API_OLE_Objects.html#50532405_34412>`__
     - Sets the page mode in which a document is to be opened: display only pages, pages and thumbnails, or pages and bookmarks.

.. raw:: html

   <a name="50532405_25809"></a>

AcquirePage
-----------

Acquires the specified page.

**Syntax**

::

   LPDISPATCH AcquirePage(long nPage);

.. _parameters-50:

**Parameters**

.. _section-57:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nPage
     - The number of the page to acquire. The first page is page 0.

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDPage`` object for the acquired page . Returns ``NULL`` if the page could not be acquired.

.. _related-methods-88:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_11484>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_39995"></a>

ClearFlags
----------

Clears a document's flags. The flags indicate whether the document has been modified, whether the document is a temporary document and should be deleted when closed, and the version of PDF used in the file. This method can be used only to clear, not to set, the flag bits.

**Syntax**

::

   VARIANT_BOOL ClearFlags(long nFlags);

.. _parameters-51:

**Parameters**

.. _section-58:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFlags
     - Flags to be cleared. See ``PDDoc.`` `GetFlags <IAC_API_OLE_Objects.html#50532405_24732>`__ for a description of the flags. The flags `PDDocWasRepaired <IAC_API_OLE_Objects.html#50532405_17887>`__ , `PDDocNewMajorVersion <IAC_API_OLE_Objects.html#50532405_41659>`__ , `PDDocNewMinorVersion <IAC_API_OLE_Objects.html#50532405_16605>`__ , and `PDDocOldVersion <IAC_API_OLE_Objects.html#50532405_19653>`__ are read-only and cannot be cleared.

**Returns**

Always returns ``-1``.

.. _related-methods-89:

**Related methods**

* ``PDDoc.`` `GetFlags <IAC_API_OLE_Objects.html#50532405_24732>`__

* ``PDDoc.`` `SetFlags <IAC_API_OLE_Objects.html#50532405_31111>`__

.. raw:: html

   <a name="50532405_37346"></a>

.. _close-1:

Close
-----

Closes a file.

.. note::

   If ``PDDoc`` and ``AVDoc`` are constructed with the same file, ``PDDoc.Close`` destroys both objects (which closes the document in the viewer).

**Syntax**

::

   VARIANT_BOOL Close();

**Returns**

``-1`` if the document was closed successfully, ``0`` otherwise.

.. _related-methods-90:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_58029"></a>

Create
------

Creates a new ``AcroExch.PDDoc``.

**Syntax**

::

   VARIANT_BOOL Create();

**Returns**

``-1`` if the document is created successfully, ``0`` if it is not or if the Acrobat application does not support editing.

.. raw:: html

   <a name="50532405_34819"></a>

CreateTextSelect
----------------

Creates a text selection from the specified rectangle on the specified page. After creating the text selection, use the ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__ method to use it as the document's selection, and use ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__ to show the selection.

**Syntax**

::

   LPDISPATCH CreateTextSelect(long nPage, LPDISPATCH iAcroRect);

.. _parameters-52:

**Parameters**

.. _section-59:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nPage
     - The page on which the selection is created. The first page in a ``PDDoc`` object is page 0.

   * - iAcroRect
     - The ``LPDISPATCH`` for the ``AcroExch.Rect`` enclosing the region to select. ``iAcroRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.PDTextSelect`` containing the text selection . Returns ``NULL`` if the text selection was not created successfully.

.. _related-methods-91:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_27374"></a>

CreateThumbs
------------

Creates thumbnail images for the specified page range in a document.

**Syntax**

::

   VARIANT_BOOL CreateThumbs(long nFirstPage, long nLastPage);

.. _parameters-53:

**Parameters**

.. _section-60:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFirstPage
     - First page for which thumbnail images are created. The first page in a ``PDDoc`` object is page ``0``. 

   * - nLastPage
     - Last page for which thumbnail images are created.

**Returns**

``-1`` if thumbnail images were created successfully, ``0`` if they were not or if the Acrobat application does not support editing.

.. _related-methods-92:

**Related methods**

* ``PDDoc.`` `DeleteThumbs <IAC_API_OLE_Objects.html#50532405_37375>`__

.. raw:: html

   <a name="50532405_22406"></a>

CropPages
---------

Crops the pages in a specified range in a document. This method ignores the request if either the width or height of the crop box is less than 72 points (one inch).

**Syntax**

::

   VARIANT_BOOL CropPages(long nStartPage, long nEndPage,

                    short nEvenOrOddPagesOnly, 

                    LPDISPATCH iAcroRect);

.. _parameters-54:

**Parameters**

.. _section-61:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nStartPage
     - First page that is cropped. The first page in a ``PDDoc`` object is page 0.

   * - nEndPage
     - Last page that is cropped.

   * - nEvenOrOddPagesOnly
     - Value indicating which pages in the range are cropped. Must be one of the following:  ``0``: crop all pages in the range  ``1``: crop only odd pages in the range  ``2``: crop only even pages in the range

   * - iAcroRect
     - An ``LPDISPATCH`` for a ``CAcroRect`` specifying the cropping rectangle, which is specified in user space.

**Returns**

``-1`` if the pages were cropped successfully, ``0`` otherwise.

.. _related-methods-93:

**Related methods**

* ``PDPage.`` `CropPages <IAC_API_OLE_Objects.html#50532405_22406>`__

.. raw:: html

   <a name="50532405_13365"></a>

DeletePages
-----------

Deletes pages from a file.

**Syntax**

::

   VARIANT_BOOL DeletePages(long nStartPage, long nEndPage);

.. _parameters-55:

**Parameters**

.. _section-62:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nStartPage
     - The first page to be deleted. The first page in a ``PDDoc`` object is page ``0``. 

   * - nEndPage
     - The last page to be deleted.

**Returns**

``-1`` if the pages were successfully deleted . Returns ``0`` if they were not or if the Acrobat application does not support editing.

.. _related-methods-94:

**Related methods**

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `DeletePages <IAC_API_OLE_Objects.html#50532405_13365>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDDoc.`` `InsertPages <IAC_API_OLE_Objects.html#50532405_16929>`__

* ``PDDoc.`` `MovePage <IAC_API_OLE_Objects.html#50532405_35068>`__

* ``PDDoc.`` `ReplacePages <IAC_API_OLE_Objects.html#50532405_40109>`__

.. raw:: html

   <a name="50532405_37375"></a>

DeleteThumbs
------------

Deletes thumbnail images from the specified pages in a document.

**Syntax**

::

   VARIANT_BOOL DeleteThumbs(long nStartPage, long nEndPage);

.. _parameters-56:

**Parameters**

.. _section-63:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nStartPage
     - First page whose thumbnail image is deleted. The first page in a ``PDDoc`` object is page ``0``. 

   * - nEndPage
     - Last page whose thumbnail image is deleted.

**Returns**

``-1`` if the thumbnails were deleted, ``0`` if they were not deleted or if the Acrobat application does not support editing.

.. _related-methods-95:

**Related methods**

* ``PDDoc.`` `CreateThumbs <IAC_API_OLE_Objects.html#50532405_27374>`__

.. raw:: html

   <a name="50532405_30617"></a>

GetFileName
-----------

Gets the name of the file associated with this ``AcroExch.PDDoc``.

**Syntax**

::

   BSTR GetFileName();

**Returns**

The file name, which can currently contain up to 256 characters.

.. _related-methods-96:

**Related methods**

* ``PDDoc.`` `Save <IAC_API_OLE_Objects.html#50532405_28634>`__

.. raw:: html

   <a name="50532405_24732"></a>

GetFlags
--------

Gets a document's flags. The flags indicate whether the document has been modified, whether the document is a temporary document and should be deleted when closed, and the version of PDF used in the file.

**Syntax**

::

   long GetFlags();

**Returns**

The document's flags, containing an OR of the following:

.. _section-64:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Flag
     - Description

   * - PDDocNeedsSave
     - Document has been modified and needs to be saved.

   * - PDDocRequiresFullSave
     - Document cannot be saved incrementally; it must be written using ``PDSaveFull``. 

   * - PDDocIsModified
     - Document has been modified slightly (such as bookmarks or text annotations have been opened or closed), but not in a way that warrants saving.

   * - PDDocDeleteOnClose
     - Document is based on a temporary file that must be deleted when the document is closed or saved.

   * - PDDocWasRepaired
     - Document was repaired when it was opened.

   * - PDDocNewMajorVersion
     - Document's major version is newer than current.

   * - PDDocNewMinorVersion
     - Document's minor version is newer than current.

   * - PDDocOldVersion
     - Document's version is older than current.

   * - PDDocSuppressErrors
     - Don't display errors.

.. _related-methods-97:

**Related methods**

* ``PDDoc.`` `ClearFlags <IAC_API_OLE_Objects.html#50532405_39995>`__

* ``PDDoc.`` `SetFlags <IAC_API_OLE_Objects.html#50532405_31111>`__

.. raw:: html

   <a name="50532405_19753"></a>

GetInfo
-------

Gets the value of a specified key in the document's ``Info`` dictionary. A maximum of 512 bytes are returned.

**Syntax**

::

   BSTR GetInfo(BSTR szInfoKey);

.. _parameters-57:

**Parameters**

.. _section-65:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szInfoKey
     - The key whose value is obtained.

**Returns**

The string if the value was read successfully . Returns an empty string if the key does not exist or its value cannot be read.

.. _related-methods-98:

**Related methods**

* ``PDDoc.`` `SetInfo <IAC_API_OLE_Objects.html#50532405_42162>`__

.. raw:: html

   <a name="50532405_27536"></a>

GetInstanceID
-------------

Gets the instance ID (the second element) from the ID array in the document's trailer.

**Syntax**

::

   BSTR GetInstanceID();

**Returns**

A string whose maximum length is 32 characters, containing the document's instance ID.

.. _related-methods-99:

**Related methods**

* ``PDDoc.`` `GetPermanentID <IAC_API_OLE_Objects.html#50532405_36645>`__

.. raw:: html

   <a name="50532405_28442"></a>

GetJSObject
-----------

Gets a dual interface to the JavaScript object associated with the ``PDDoc``. This allows automation clients full access to both built-in and user-defined JavaScript methods available in the document.

**Syntax**

::

   LDispatch* GetJSObject();

**Returns**

The interface to the JavaScript object if the call succeeded, ``NULL`` otherwise.

.. raw:: html

   <a name="50532405_30052"></a>

GetNumPages
-----------

Gets the number of pages in a file.

**Syntax**

::

   long GetNumPages();

**Returns**

The number of pages, or ``-1`` if the number of pages cannot be determined.

.. _related-methods-100:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_27507"></a>

GetPageMode
-----------

Gets a value indicating whether the Acrobat application is currently displaying only pages, pages and thumbnails, or pages and bookmarks.

**Syntax**

::

   long GetPageMode();

**Returns**

The current page mode. Will be one of the following values:

* ``PDDontCare``: ``0``: leave the view mode as it is

* ``PDUseNone``: ``1``: display without bookmarks or thumbnails

* ``PDUseThumbs``: ``2``: display using thumbnails

* ``PDUseBookmarks``: ``3``: display using bookmarks

* ``PDFullScreen``: ``4``: display in full screen mode

.. _related-methods-101:

**Related methods**

* ``PDDoc.`` `SetPageMode <IAC_API_OLE_Objects.html#50532405_34412>`__

.. raw:: html

   <a name="50532405_36645"></a>

GetPermanentID
--------------

Gets the permanent ID (the first element) from the ID array in the document's trailer.

**Syntax**

::

   BSTR GetPermanentID();

**Returns**

A string whose maximum length is 32 characters, containing the document's permanent ID.

.. _related-methods-102:

**Related methods**

* ``PDDoc.`` `GetInstanceID <IAC_API_OLE_Objects.html#50532405_27536>`__

.. raw:: html

   <a name="50532405_16929"></a>

InsertPages
-----------

Inserts the specified pages from the source document after the indicated page within the current document.

**Syntax**

::

   VARIANT_BOOL InsertPages(long nInsertPageAfter,
                    LPDISPATCH iPDDocSource,long nStartPage, 
                    long nNumPages, long bBookmarks);

.. _parameters-58:

**Parameters**

.. _section-66:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nInsertPageAfter
     - The page in the current document after which pages from the source document are inserted. The first page in a ``PDDoc`` object is page 0.

   * - iPDDocSource
     - The ``LPDISPATCH`` for the ``AcroExch.PDDoc`` containing the pages to insert. ``iPDDocSource`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

   * - nStartPage
     - The first page in ``iPDDocSource`` to be inserted into the current document.

   * - nNumPages
     - The number of pages to be inserted.

   * - bBookmarks
     - If a positive number, bookmarks are copied from the source document. If ``0``, they are not. 

**Returns**

``-1`` if the pages were successfully inserted . Returns ``0`` if they were not or if the Acrobat application does not support editing.

.. _related-methods-103:

**Related methods**

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `DeletePages <IAC_API_OLE_Objects.html#50532405_13365>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDDoc.`` `MovePage <IAC_API_OLE_Objects.html#50532405_35068>`__

* ``PDDoc.`` `ReplacePages <IAC_API_OLE_Objects.html#50532405_40109>`__

.. raw:: html

   <a name="50532405_35068"></a>

MovePage
--------

Moves a page to another location within the same document.

**Syntax**

::

   VARIANT_BOOL MovePage(long nMoveAfterThisPage, 
                    long nPageToMove);

.. _parameters-59:

**Parameters**

.. _section-67:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nMoveAfterThisPage
     - The page being moved is placed after this page number. The first page in a ``PDDoc`` object is page ``0``. 

   * - nPageToMove
     - Page number of the page to be moved.

**Returns**

``0`` if the Acrobat application does not support editing, ``-1`` otherwise.

.. _related-methods-104:

**Related methods**

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `DeletePages <IAC_API_OLE_Objects.html#50532405_13365>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDDoc.`` `InsertPages <IAC_API_OLE_Objects.html#50532405_16929>`__

* ``PDDoc.`` `ReplacePages <IAC_API_OLE_Objects.html#50532405_40109>`__

.. raw:: html

   <a name="50532405_41972"></a>

.. _open-1:

Open
----

Opens a file. A new instance of ``AcroExch.PDDoc`` must be created for each open PDF file.

**Syntax**

::

   VARIANT_BOOL Open(BSTR szFullPath);

.. _parameters-60:

**Parameters**

.. _section-68:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szFullPath
     - Full path of the file to be opened.

**Returns**

``-1`` if the document was opened successfully, ``0`` otherwise.

.. _related-methods-105:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `OpenAVDoc <IAC_API_OLE_Objects.html#50532405_14888>`__

.. raw:: html

   <a name="50532405_14888"></a>

OpenAVDoc
---------

Opens a window and displays the document in it.

**Syntax**

::

   LPDISPATCH OpenAVDoc(BSTR szTitle);

.. _parameters-61:

**Parameters**

.. _section-69:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szTitle
     - The title to be used for the window. A default title is used if ``szTitle`` is ``NULL`` or an empty string.

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.AVDoc`` that was opened, or ``NULL`` if the open fails.

.. _related-methods-106:

**Related methods**

* ``App.`` `CloseAllDocs <IAC_API_OLE_Objects.html#50532405_33231>`__

* ``AVDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``AVDoc.`` `GetTitle <IAC_API_OLE_Objects.html#50532405_14780>`__

* ``AVDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

* ``AVDoc.`` `OpenInWindow <IAC_API_OLE_Objects.html#50532405_40575>`__

* ``AVDoc.`` `OpenInWindowEx <IAC_API_OLE_Objects.html#50532405_22014>`__

* ``AVDoc.`` `SetTitle <IAC_API_OLE_Objects.html#50532405_37671>`__

* ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__

* ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__

.. raw:: html

   <a name="50532405_40109"></a>

ReplacePages
------------

Replaces the indicated pages in the current document with those specified from the source document. No links or bookmarks are copied from ``iPDDocSource``, but text annotations may optionally be copied.

**Syntax**

::

   VARIANT_BOOL ReplacePages(long nStartPage, 
                    LPDISPATCH iPDDocSource,

                    long nStartSourcePage, long nNumPages,

                    long bMergeTextAnnotations);

.. _parameters-62:

**Parameters**

.. _section-70:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nStartPage
     - The first page within the source file to be replaced. The first page in a ``PDDoc`` object is page ``0``. 

   * - iPDDocSource
     - The ``LPDISPATCH`` for the ``AcroExch.PDDoc`` containing the new copies of pages that are replaced. ``iPDDocSource`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

   * - nStartSourcePage
     - The first page in ``iPDDocSource`` to use as a replacement page.

   * - nNumPages
     - The number of pages to be replaced.

   * - bMergeTextAnnotations
     - If a positive number, text annotations from ``iPDDocSource`` are copied. If ``0``, they are not. 

**Returns**

``-1`` if the pages were successfully replaced . Returns ``0`` if they were not or if the Acrobat application does not support editing.

.. _related-methods-107:

**Related methods**

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `DeletePages <IAC_API_OLE_Objects.html#50532405_13365>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDDoc.`` `InsertPages <IAC_API_OLE_Objects.html#50532405_16929>`__

* ``PDDoc.`` `MovePage <IAC_API_OLE_Objects.html#50532405_35068>`__

.. raw:: html

   <a name="50532405_28634"></a>

Save
----

Saves a document.

**Syntax**

::

   VARIANT_BOOL Save(short nType, BSTR szFullPath);

.. _parameters-63:

**Parameters**

.. _section-71:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nType
     - Specifies the way in which the file should be saved.  ``nType`` is a logical OR of one or more of the following flags:  ``PDSaveIncremental``: Write changes only, not the complete file. This will always result in a larger file, even if objects have been deleted.  ``PDSaveFull``: Write the entire file to the filename specified by ``szFullPath``.   ``PDSaveCopy``: Write a copy of the file into the file specified by ``szFullPath``, but keep using the old file. This flag can only be specified if ``PDSaveFull`` is also used.   ``PDSaveCollectGarbage``: Remove unreferenced objects; this often reduces the file size, and its usage is encouraged. This flag can only be specified if ``PDSaveFull`` is also used.  ``PDSaveLinearized``: Save the file optimized for the web, providing hint tables. This allows the PDF file to be byte-served. This flag can only be specified if ``PDSaveFull`` is also used.  -  If you save a file optimized for the web using the ``PDSaveLinearized`` flag, you must follow this sequence:  1. Open the PDF file with ``PDDoc.`` `Open <IAC_API_OLE_Objects.html#50532405_23963>`__ .  2. Call ``PDDoc.`` `Save <IAC_API_OLE_Objects.html#50532405_28634>`__ using the ``PDSaveLinearized`` flag.  3. Call ``PDDoc.`` `Close <IAC_API_OLE_Objects.html#50532405_10907>`__ .  This allows batch optimization of files.

   * - szFullPath
     - The new path to the file, if any.

**Returns**

``-1`` if the document was successfully saved . Returns ``0`` if it was not or if the Acrobat application does not support editing.

.. _related-methods-108:

**Related methods**

* ``PDDoc.`` `GetFileName <IAC_API_OLE_Objects.html#50532405_30617>`__

.. raw:: html

   <a name="50532405_31111"></a>

SetFlags
--------

Sets a document's flags indicating whether the document has been modified, whether the document is a temporary document and should be deleted when closed, and the version of PDF used in the file. This method can be used only to set, not to clear, the flag bits.

**Syntax**

::

   VARIANT_BOOL SetFlags(long nFlags);

.. _parameters-64:

**Parameters**

.. _section-72:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFlags
     - Flags to be set. See ``PDDoc.`` `GetFlags <IAC_API_OLE_Objects.html#50532405_24732>`__ for a description of the flags. The flags `PDDocWasRepaired <IAC_API_OLE_Objects.html#50532405_17887>`__ , `PDDocNewMajorVersion <IAC_API_OLE_Objects.html#50532405_41659>`__ , `PDDocNewMinorVersion <IAC_API_OLE_Objects.html#50532405_16605>`__ , and `PDDocOldVersion <IAC_API_OLE_Objects.html#50532405_19653>`__ are read-only and cannot be set.

**Returns**

Always returns ``-1``.

.. _related-methods-109:

**Related methods**

* ``PDDoc.`` `ClearFlags <IAC_API_OLE_Objects.html#50532405_39995>`__

* ``PDDoc.`` `GetFlags <IAC_API_OLE_Objects.html#50532405_24732>`__

.. raw:: html

   <a name="50532405_42162"></a>

SetInfo
-------

Sets the value of a key in a document's Info dictionary.

**Syntax**

::

   VARIANT_BOOL SetInfo(BSTR szInfoKey, BSTR szBuffer);

.. _parameters-65:

**Parameters**

.. _section-73:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szInfoKey
     - The key whose value is set.

   * - szBuffer
     - The value to be assigned to the key.

**Returns**

``-1`` if the value was added successfully, ``0`` if it was not or if the Acrobat application does not support editing.

.. _related-methods-110:

**Related methods**

* ``PDDoc.`` `GetInfo <IAC_API_OLE_Objects.html#50532405_19753>`__

.. raw:: html

   <a name="50532405_34412"></a>">

SetPageMode

Sets the page mode in which a document is to be opened: display only pages, pages and thumbnails, or pages and bookmarks.

**Syntax**

::

   VARIANT_BOOL SetPageMode(long nPageMode);

.. _parameters-66:

**Parameters**

.. _section-74:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nPageMode
     - The page mode to be set. Possible values:  ``PDDontCare``: ``0``: leave the view mode as it is  ``PDUseNone``: ``1``: display without bookmarks or thumbnails  ``PDUseThumbs``: ``2``: display using thumbnails  ``PDUseBookmarks``: ``3``: display using bookmarks

**Returns**

Always returns ``-1``.

.. _related-methods-111:

**Related methods**

* ``PDDoc.`` `GetPageMode <IAC_API_OLE_Objects.html#50532405_27507>`__

* ``PDDoc.`` `SetPageMode <IAC_API_OLE_Objects.html#50532405_34412>`__

.. raw:: html

   <a name="50532405_28781"></a>

AcroExch.PDPage
===============

A single page in the PDF representation of a document. This is a non-creatable interface. Just as PDF files are partially composed of their pages, ``PDDoc`` objects are composed of ``PDPage`` objects. A page contains a series of objects representing the objects drawn on the page (``PDGraphic`` objects), a list of resources used in drawing the page, annotations (``PDAnnot`` objects), an optional thumbnail image of the page, and the threads used in any articles that occur on the page. The first page in a ``PDDoc`` object is page 0.

.. _methods-6:

Methods
------------------------------------

The ``PDPage`` object has the following methods.

.. _section-75:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `AddAnnot <IAC_API_OLE_Objects.html#50532405_29239>`__
     - Adds a specified annotation at a specified location in the page's annotation array

   * - `AddNewAnnot <IAC_API_OLE_Objects.html#50532405_27501>`__
     - Creates a new text annotation and adds it to the page.

   * - `CopyToClipboard <IAC_API_OLE_Objects.html#50532405_24289>`__
     - Copies a PDF image to the clipboard without requiring an ``hWnd`` or ``hDC`` from the client.

   * - `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__
     - Creates a text selection from a list of character offsets and character counts on a single page.

   * - `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__
     - Creates a text selection from a list of word offsets and word counts on a single page.

   * - `CropPage <IAC_API_OLE_Objects.html#50532405_26025>`__
     - Crops the page.

   * - `Draw <IAC_API_OLE_Objects.html#50532405_24561>`__
     - Deprecated. Draws page contents into a specified window.

   * - `DrawEx <IAC_API_OLE_Objects.html#50532405_35894>`__
     - Draws page contents into a specified window.

   * - `GetAnnot <IAC_API_OLE_Objects.html#50532405_15604>`__
     - Gets the specified annotation from the page's array of annotations.

   * - `GetAnnotIndex <IAC_API_OLE_Objects.html#50532405_12469>`__
     - Gets the index (within the page's annotation array) of the specified annotation.

   * - `GetDoc <IAC_API_OLE_Objects.html#50532405_40890>`__
     - Gets the ``AcroExch.PDDoc`` associated with the page.

   * - `GetNumAnnots <IAC_API_OLE_Objects.html#50532405_24017>`__
     - Gets the number of annotations on the page.

   * - `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__
     - Gets the page number of the current page. The first page in a document is page zero.

   * - `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__
     - Gets the rotation value, in degrees, for the current page.

   * - `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__
     - Gets a page's width and height in points.

   * - `RemoveAnnot <IAC_API_OLE_Objects.html#50532405_26919>`__
     - Removes the specified annotation from the page's annotation array.

   * - `SetRotate <IAC_API_OLE_Objects.html#50532405_33224>`__
     - Sets the rotation, in degrees, for the current page.

.. raw:: html

   <a name="50532405_29239"></a>

AddAnnot
--------

Adds a specified annotation at a specified location in the page's annotation array.

**Syntax**

::

   VARIANT_BOOL AddAnnot(long nIndexAddAfter, 
                    LPDISPATCH iPDAnnot);

.. _parameters-67:

**Parameters**

.. _section-76:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nIndexAddAfter
     - Location in the page's annotation array to add the annotation. The first annotation on a page has an index of zero.

   * - iPDAnnot
     - The ``LPDISPATCH`` for the ``AcroExch.PDAnnot`` to add. ``iPDAnnot`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

``0`` if the Acrobat application does not support editing, ``-1`` otherwise.

.. _related-methods-112:

**Related methods**

* ``PDPage.`` `AddNewAnnot <IAC_API_OLE_Objects.html#50532405_27501>`__

* ``PDPage.`` `RemoveAnnot <IAC_API_OLE_Objects.html#50532405_26919>`__

.. raw:: html

   <a name="50532405_27501"></a>

AddNewAnnot
-----------

Creates a new text annotation and adds it to the page.

The newly-created text annotation is not complete until ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__ has been called to fill in the ``/Contents`` key.

**Syntax**

::

   LPDISPATCH AddNewAnnot(long nIndexAddAfter, BSTR szSubType,

                    LPDISPATCH iAcroRect);

.. _parameters-68:

**Parameters**

.. _section-77:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nIndexAddAfter
     - Location in the page's annotation array after which to add the annotation. The first annotation on a page has an index of zero.

   * - szSubType
     - Subtype of the annotation to be created. Must be text.

   * - iAcroRect
     - The ``LPDISPATCH`` for the ``AcroExch.Rect`` bounding the annotation's location on the page. ``iAcroRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.PDAnnot`` object, or ``NULL`` if the annotation could not be added.

.. _related-methods-113:

**Related methods**

* ``PDAnnot.`` `SetContents <IAC_API_OLE_Objects.html#50532405_22402>`__

* ``PDPage.`` `AddAnnot <IAC_API_OLE_Objects.html#50532405_29239>`__

* ``PDPage.`` `RemoveAnnot <IAC_API_OLE_Objects.html#50532405_26919>`__

.. raw:: html

   <a name="50532405_24289"></a>

CopyToClipboard
---------------

Copies a PDF image to the clipboard without requiring an ``hWnd`` or ``hDC`` from the client. This method is only available on 32-bit systems.

**Syntax**

::

   VARIANT_BOOL CopyToClipboard(LPDISPATCH boundRect, 
                    short nXOrigin,short nYOrigin, 
                    short nZoom);

.. _parameters-69:

**Parameters**

.. _section-78:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - boundRect
     - The ``LPDISPATCH`` for the ``AcroExch.Rect`` bounding rectangle in device space coordinates. ``boundRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

   * - nXOrigin
     - The x–coordinate of the portion of the page to be copied.

   * - nYOrigin
     - The y–coordinate of the portion of the page to be copied.

   * - nZoom
     - Zoom factor at which the page is copied, specified as a percent. For example, 100 corresponds to a magnification of 1.0.

**Returns**

``-1`` if the page is successfully copied, ``0`` otherwise.

.. _related-methods-114:

**Related methods**

* ``PDPage.`` `DrawEx <IAC_API_OLE_Objects.html#50532405_35894>`__

.. raw:: html

   <a name="50532405_37822"></a>

CreatePageHilite
----------------

Creates a text selection from a list of character offsets and character counts on a single page. The text selection can then be set as the current selection using ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__ , and the view can be set to show the selection using ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__ .

**Syntax**

::

   LPDISPATCH CreatePageHilite(LPDISPATCH iAcroHiliteList);

.. _parameters-70:

**Parameters**

.. _section-79:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroHiliteList
     - The ``LPDISPATCH`` for the highlight list for which a text selection is created. ``iAcroHiliteList`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``.   Use ``HiliteList.`` `Add <IAC_API_OLE_Objects.html#50532405_30712>`__ to create a highlight list.

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDTextSelect`` containing the text selection, or ``NULL`` if the selection could not be created.

.. _related-methods-115:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``HiliteList.`` `Add <IAC_API_OLE_Objects.html#50532405_30712>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_14477"></a>

CreateWordHilite
----------------

Creates a text selection from a list of word offsets and word counts on a single page. The text selection can then be set as the current selection using ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__ , and the view can be set to show the selection using ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__ .

**Syntax**

::

   LPDISPATCH CreateWordHilite(LPDISPATCH iAcroHiliteList);

.. _parameters-71:

**Parameters**

.. _section-80:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroHiliteList
     - The ``LPDISPATCH`` for the highlight list for which a text selection is created. ``iAcroHiliteList`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``.   Use ``HiliteList.`` `Add <IAC_API_OLE_Objects.html#50532405_30712>`__ to create a highlight list.

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDTextSelect``, or ``NULL`` if the selection could not be created.

.. _related-methods-116:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``HiliteList.`` `Add <IAC_API_OLE_Objects.html#50532405_30712>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_26025"></a>

CropPage
--------

Crops the page. This method ignores the request if either the width or height of the crop box is less than 72 points (one inch).

**Syntax**

::

   VARIANT_BOOL CropPage(LPDISPATCH iAcroRect);

.. _parameters-72:

**Parameters**

.. _section-81:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iAcroRect
     - An ``LPDISPATCH`` for a ``CAcroRect`` specifying the cropping rectangle, which is specified in user space.

**Returns**

``-1`` if the page was cropped successfully, ``0`` otherwise.

.. _related-methods-117:

**Related methods**

* ``PDDoc.`` `CropPages <IAC_API_OLE_Objects.html#50532405_22406>`__

.. raw:: html

   <a name="50532405_24561"></a>

Draw
----

.. note::

   Deprecated. As of Acrobat 3.0, this method simply returns ``false``. Use the method ``AVDoc.`` `DrawEx <IAC_API_OLE_Objects.html#50532405_35894>`__ instead.

**Syntax**

::

   VARIANT_BOOL Draw(short window, short displayContext, 
                    short XOrigin,short YOrigin, short zoom);

.. _parameters-73:

**Parameters**

.. _section-82:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - window
     - ``HWND`` into which the page is to be drawn.

   * - displayContext
     - ``hDC`` to use for drawing. If ``NULL``, the ``HDC`` for ``window`` is used.   ``displayContext`` cannot be reliably used as the ``hDC`` for a printer device. In particular, Visual Basic applications cannot use `Draw <IAC_API_OLE_Objects.html#50532405_24561>`__ to print.

   * - XOrigin
     - The x–coordinate of the portion of the page to be drawn.

   * - YOrigin
     - The y–coordinate of the portion of the page to be drawn.

   * - zoom
     - Zoom factor at which the page is to be drawn, specified as a percent. For example, 100 corresponds to a magnification of 1.0.

**Returns**

``-1`` if the page is successfully drawn, ``0`` otherwise.

.. _related-methods-118:

**Related methods**

* ``PDPage.`` `CopyToClipboard <IAC_API_OLE_Objects.html#50532405_24289>`__

* ``PDPage.`` `DrawEx <IAC_API_OLE_Objects.html#50532405_35894>`__

.. raw:: html

   <a name="50532405_35894"></a>

DrawEx
------

Draws page contents into a specified window.

You can use ``PDPage.`` `CopyToClipboard <IAC_API_OLE_Objects.html#50532405_24289>`__ to copy page contents to the clipboard without an ``hWnd`` or ``hDC`` from the client.

**Syntax**

::

   VARIANT_BOOL DrawEx(long window, long displayContext,

                    LPDISPATCH updateRect, short xOrigin, 

                    short yOrigin, short zoom);

.. _parameters-74:

**Parameters**

.. _section-83:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - window
     - Handle for the window (``HWND``) into which the page is drawn. 

   * - displayContext
     - This parameter is invalid; do not use it. Assign it a ``NULL`` value. If it is not assigned ``NULL``, an exception is thrown.   -  ``displayContext`` cannot be reliably used as the ``hDC`` for a printer device. In particular, Visual Basic applications cannot use `DrawEx <IAC_API_OLE_Objects.html#50532405_35894>`__ to print.

   * - updateRect
     - ``LPDISPATCH`` for an ``AcroExch.Rect`` to be drawn with user space coordinates. ``updateRect`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``.   Any objects outside of ``updateRect`` are not drawn. All objects are drawn if ``updateRect`` is ``NULL``.   Use methods in the ``CAcroRect`` class to set the size of the rectangle. For example:

         :: 
               
               CAcroRect* rect = new CAcroRect;  
               rect->CreateDispatch("AcroExch.Rect", &e); 
                  if (rect) { /* Set values for rect - increases from right to left and bottom to top */ 
                  rect->SetLeft(100); 
                  rect->SetTop(400); 
                  rect->SetRight(400); 
                  rect->SetBottom(100); }

   * - xOrigin
     - The x–coordinate of the portion of the page to be drawn.

   * - yOrigin
     - The y–coordinate of the portion of the page to be drawn.

   * - zoom
     - Zoom factor at which the page is drawn, specified as a percent. For example, 100 corresponds to a magnification of 1.0.

**Returns**

A positive number if the page is successfully drawn, ``0`` otherwise.

.. _related-methods-119:

**Related methods**

* ``PDPage.`` `CopyToClipboard <IAC_API_OLE_Objects.html#50532405_24289>`__

.. raw:: html

   <a name="50532405_15604"></a>

GetAnnot
--------

Gets the specified annotation from the page's array of annotations.

**Syntax**

::

   LPDISPATCH GetAnnot(long nIndex);

.. _parameters-75:

**Parameters**

.. _section-84:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nIndex
     - Index (in the page's annotation array) of the annotation to be retrieved. The first annotation in the array has an index of zero.

**Returns**

The ``LPDISPATCH`` for the ``AcroExch.PDAnnot`` object.

.. _related-methods-120:

**Related methods**

* ``PDPage.`` `GetAnnotIndex <IAC_API_OLE_Objects.html#50532405_12469>`__

* ``PDPage.`` `GetNumAnnots <IAC_API_OLE_Objects.html#50532405_24017>`__

.. raw:: html

   <a name="50532405_12469"></a>

GetAnnotIndex
-------------

Gets the index (within the page's annotation array) of the specified annotation.

**Syntax**

::

   long GetAnnotIndex(LPDISPATCH iPDAnnot);

.. _parameters-76:

**Parameters**

.. _section-85:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - iPDAnnot
     - ``LPDISPATCH`` for the ``AcroExch.PDAnnot`` whose index is obtained. ``iPDAnnot`` contains the instance variable ``m_lpDispatch``, which contains the ``LPDISPATCH``. 

**Returns**

The annotation's index.

.. _related-methods-121:

**Related methods**

* ``PDPage.`` `GetAnnot <IAC_API_OLE_Objects.html#50532405_15604>`__

* ``PDPage.`` `GetNumAnnots <IAC_API_OLE_Objects.html#50532405_24017>`__

.. raw:: html

   <a name="50532405_40890"></a>

.. _getdoc-1:

GetDoc
------

Gets the ``AcroExch.PDDoc`` associated with the page.

**Syntax**

::

   LPDISPATCH GetDoc();

**Returns**

The ``LPDISPATCH`` for the page's ``AcroExch.PDDoc``.

.. _related-methods-122:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_24017"></a>

GetNumAnnots
------------

Gets the number of annotations on the page.

Annotations that have associated pop-up windows, such as a strikeout, count as two annotations. Also note that widget annotations (Acrobat form fields) are included.

**Syntax**

::

   long GetNumAnnots();

**Returns**

The number of annotations on the page.

.. _related-methods-123:

**Related methods**

* ``PDPage.`` `GetAnnot <IAC_API_OLE_Objects.html#50532405_15604>`__

* ``PDPage.`` `GetAnnotIndex <IAC_API_OLE_Objects.html#50532405_12469>`__

.. raw:: html

   <a name="50532405_32146"></a>

GetNumber
---------

Gets the page number of the current page. The first page in a document is page zero.

**Syntax**

::

   long GetNumber();

**Returns**

The page number of the current page. The first page in a ``PDDoc`` object is page ``0``.

.. _related-methods-124:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `GetDoc <IAC_API_OLE_Objects.html#50532405_40890>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_14436"></a>

GetRotate
---------

Gets the rotation value, in degrees, for the current page.

**Syntax**

::

   short GetRotate();

**Returns**

Rotation value.

.. _related-methods-125:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetSize <IAC_API_OLE_Objects.html#50532405_37312>`__

* ``PDPage.`` `SetRotate <IAC_API_OLE_Objects.html#50532405_33224>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_37312"></a>

GetSize
-------

Gets a page's width and height in points.

**Syntax**

::

   LPDISPATCH GetSize();

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Point`` containing the width and height, measured in points. Point x contains the width, point y the height.

.. _related-methods-126:

**Related methods**

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `AcquirePage <IAC_API_OLE_Objects.html#50532405_25809>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_26919"></a>

RemoveAnnot
-----------

Removes the specified annotation from the page's annotation array.

**Syntax**

::

   VARIANT_BOOL RemoveAnnot(long nIndex);

.. _parameters-77:

**Parameters**

.. _section-86:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nIndex
     - Index within the page's annotation array of the annotation to be deleted. The first annotation on a page has an index of zero.

**Returns**

``0`` if the Acrobat application does not support editing, a positive number otherwise.

.. _related-methods-127:

**Related methods**

* ``PDPage.`` `AddAnnot <IAC_API_OLE_Objects.html#50532405_29239>`__

* ``PDPage.`` `AddNewAnnot <IAC_API_OLE_Objects.html#50532405_27501>`__

* ``PDPage.`` `GetAnnotIndex <IAC_API_OLE_Objects.html#50532405_12469>`__

.. raw:: html

   <a name="50532405_33224"></a>

SetRotate
---------

Sets the rotation, in degrees, for the current page.

**Syntax**

::

   VARIANT_BOOL SetRotate(short nRotate);

.. _parameters-78:

**Parameters**

.. _section-87:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nRotate
     - Rotation value of 0, 90, 180, or 270.

**Returns**

``0`` if the Acrobat application does not support editing, ``-1`` otherwise.

.. _related-methods-128:

**Related methods**

* ``PDPage.`` `GetRotate <IAC_API_OLE_Objects.html#50532405_14436>`__

.. raw:: html

   <a name="50532405_33981"></a>

AcroExch.PDTextSelect
=====================

A selection of text on a single page that may contain more than one disjointed group of words. This is a non-creatable interface. A text selection is specified by one or more ranges of text, with each range containing the word numbers of the selected words. Each range specifies a start and end word, where "start" is the number of the first word of a series of selected words and "end" is the number of the next word after the last word in the selection.

.. _methods-7:

Methods
---------------------------------

The ``PDTextSelect`` object has the following methods.

.. _section-88:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__
     - Destroys a text selection object.

   * - `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__
     - Gets a text selection's bounding rectangle.

   * - `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__
     - Gets the number of text elements in a text selection.

   * - `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__
     - Gets the page number on which the text selection is located.

   * - `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__
     - Gets the text from the specified element of a text selection.

.. raw:: html

   <a name="50532405_15686"></a>

.. _destroy-1:

Destroy
-------

Destroys a text selection object.

**Syntax**

::

   VARIANT_BOOL Destroy();

**Returns**

Always returns ``-1``.

.. _related-methods-129:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_15335"></a>

GetBoundingRect
---------------

Gets a text selection's bounding rectangle.

**Syntax**

::

   LPDISPATCH GetBoundingRect();

**Returns**

The ``LPDISPATCH`` for an ``AcroExch.Rect`` corresponding to the text selection's bounding rectangle.

.. _related-methods-130:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_40099"></a>

GetNumText
----------

Gets the number of text elements in a text selection. Use this method to determine how many times to call the ``PDTextSelect``. `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__ method to obtain all of a text selection's text.

.. note::

   A text element is not necessarily a word. A text element consists of characters of the same font, size and style; therefore, there may be more than one text element in a word.

**Syntax**

::

   long GetNumText();

**Returns**

The number of elements in the text selection.

.. _related-methods-131:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_34289"></a>

.. _getpage-1:

GetPage
-------

Gets the page number on which the text selection is located.

**Syntax**

::

   long GetPage();

**Returns**

The text selection's page number. The first page in a ``PDDoc`` object is page 0.

.. _related-methods-132:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``AVPageView.`` `GetPage <IAC_API_OLE_Objects.html#50532405_11673>`__

* ``AVPageView.`` `GetPageNum <IAC_API_OLE_Objects.html#50532405_19046>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDDoc.`` `GetNumPages <IAC_API_OLE_Objects.html#50532405_30052>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDPage.`` `GetNumber <IAC_API_OLE_Objects.html#50532405_32146>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetText <IAC_API_OLE_Objects.html#50532405_24003>`__

.. raw:: html

   <a name="50532405_24003"></a>

GetText
-------

Gets the text from the specified element of a text selection. To obtain all the text within the text selection, use ``PDTextSelect``. `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__ to determine the number of elements in the text selection, then call this method in a loop to obtain each of the elements.

**Syntax**

::

   BSTR GetText(long nTextIndex);

.. _parameters-79:

**Parameters**

.. _section-89:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nTextIndex
     - The element of the text selection to get.

**Returns**

The text, or an empty string if ``nTextIndex`` is greater than the number of elements in the text selection.

.. _related-methods-133:

**Related methods**

* ``AVDoc.`` `ClearSelection <IAC_API_OLE_Objects.html#50532405_16710>`__

* ``AVDoc.`` `SetTextSelection <IAC_API_OLE_Objects.html#50532405_34749>`__

* ``AVDoc.`` `ShowTextSelect <IAC_API_OLE_Objects.html#50532405_27147>`__

* ``PDPage.`` `CreatePageHilite <IAC_API_OLE_Objects.html#50532405_37822>`__

* ``PDDoc.`` `CreateTextSelect <IAC_API_OLE_Objects.html#50532405_34819>`__

* ``PDPage.`` `CreateWordHilite <IAC_API_OLE_Objects.html#50532405_14477>`__

* ``PDTextSelect.`` `Destroy <IAC_API_OLE_Objects.html#50532405_15686>`__

* ``PDTextSelect.`` `GetBoundingRect <IAC_API_OLE_Objects.html#50532405_15335>`__

* ``PDTextSelect.`` `GetNumText <IAC_API_OLE_Objects.html#50532405_40099>`__

* ``PDTextSelect.`` `GetPage <IAC_API_OLE_Objects.html#50532405_34289>`__

.. raw:: html

   <a name="50532405_76536"></a>

AcroExch.Point
==============

Defines the location of an ``AcroPoint.``

**Properties**

The ``Point`` object has the following properties.

.. _section-90:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - `X <IAC_API_OLE_Objects.html#50532405_14799>`__
     - Gets or sets the x-coordinate of an ``AcroPoint``. 

   * - `Y <IAC_API_OLE_Objects.html#50532405_33201>`__
     - Gets or sets the y-coordinate of an ``AcroPoint``. 

.. raw:: html

   <a name="50532405_14799"></a>

X
-

Gets or sets the x-coordinate of an ``AcroPoint``.

**Syntax**

::

   [get/set] Short 

**Returns**

The x-coordinate of the ``AcroPoint``.

.. raw:: html

   <a name="50532405_33201"></a>

Y
-

Gets or sets the y-coordinate of an ``AcroPoint``.

**Syntax**

::

   [get/set] Short

**Returns**

The y-coordinate of the ``AcroPoint``.

.. raw:: html

   <a name="50532405_39836"></a>

AcroExch.Rect
=============

Defines the location of an ``AcroRect``.

The ``Rect`` object has the following properties.

**Properties**

.. _section-91:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - `Bottom <IAC_API_OLE_Objects.html#50532405_51838>`__
     - Gets or sets the bottom y-coordinate of an ``AcroRect``. 

   * - `Left <IAC_API_OLE_Objects.html#50532405_44078>`__
     - Gets or sets the left x-coordinate of an ``AcroRect``. 

   * - `Right <IAC_API_OLE_Objects.html#50532405_59707>`__
     - Gets or sets the right x-coordinate of an ``AcroRect``. 

   * - `Top <IAC_API_OLE_Objects.html#50532405_28094>`__
     - Gets or sets the top y-coordinate of an ``AcroRect``. 

.. raw:: html

   <a name="50532405_51838"></a>

Bottom
------

Gets or sets the bottom y-coordinate of an ``AcroRect``.

**Syntax**

::

   [get/set] Short

**Returns**

The y-coordinate of the bottom of the ``AcroRect``.

.. raw:: html

   <a name="50532405_44078"></a>

Left
----

Gets or sets left x-coordinate of an ``AcroRect``.

**Syntax**

::

   [get/set] Short

**Returns**

The x-coordinate of the left side of the ``AcroRect``.

.. raw:: html

   <a name="50532405_59707"></a>

Right
-----

Gets or sets the right x-coordinate of an ``AcroRect``.

**Syntax**

::

   [get/set] Short

**Returns**

The x-coordinate of the right side of the ``AcroRect``.

.. raw:: html

   <a name="50532405_28094"></a>

Top
---

Gets or sets the top y-coordinate of an ``AcroRect``.

**Syntax**

::

   [get/set] Short

**Returns**

The y-coordinate of the top of the ``AcroRect``.

.. raw:: html

   <a name="50532405_86731"></a>

AcroExch.Time
=============

Defines a specified time, accurate to the millisecond.

**Properties**

The ``Time`` object has the following properties.

.. _section-92:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - `Date <IAC_API_OLE_Objects.html#50532405_19244>`__
     - Gets or sets the date from an ``AcroTime``. 

   * - `Hour <IAC_API_OLE_Objects.html#50532405_34062>`__
     - Gets or sets the hour from an ``AcroTime``. 

   * - `Millisecond <IAC_API_OLE_Objects.html#50532405_89313>`__
     - Gets or sets the milliseconds from an ``AcroTime``. 

   * - `Minute <IAC_API_OLE_Objects.html#50532405_71117>`__
     - Gets or sets the minutes from an ``AcroTime``. 

   * - `Month <IAC_API_OLE_Objects.html#50532405_57342>`__
     - Gets or sets the month from an ``AcroTime``. 

   * - `Second <IAC_API_OLE_Objects.html#50532405_73027>`__
     - Gets or sets the seconds from an ``AcroTime``. 

   * - `Year <IAC_API_OLE_Objects.html#50532405_58044>`__
     - Gets or sets the year from an ``AcroTime``. 

.. raw:: html

   <a name="50532405_19244"></a>

Date
----

Gets or sets the date from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The date from the ``AcroTime``. The date runs from ``1`` to ``31``.

.. raw:: html

   <a name="50532405_34062"></a>

Hour
----

Gets or sets the hour from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The hour from the ``AcroTime``. The hour runs from ``0`` to ``23``.

.. raw:: html

   <a name="50532405_89313"></a>

Millisecond
-----------

Gets or sets the milliseconds from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The milliseconds from the ``AcroTime``. Milliseconds run from ``0`` to ``999``.

.. raw:: html

   <a name="50532405_71117"></a>

Minute
------

Gets or sets the minutes from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The minutes from the ``AcroTime``. Minutes run from ``0`` to ``59``.

.. raw:: html

   <a name="50532405_57342"></a>

Month
-----

Gets or sets the month from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The month from the ``AcroTime``. The month runs from ``1`` to ``12``, where ``1`` is January and ``12`` is December.

.. raw:: html

   <a name="50532405_73027"></a>

Second
------

Gets or sets the seconds from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The seconds from the ``AcroTime``. Seconds run from ``0`` to ``59``.

.. raw:: html

   <a name="50532405_58044"></a>

Year
----

Gets or sets the year from an ``AcroTime``.

**Syntax**

::

   [get/set] Short

**Returns**

The year from the ``AcroTime``. The Year runs from ``1`` to ``32767``.

.. raw:: html

   <a name="50532405_76583"></a>

AxAcroPDFLib.AxAcroPDF
======================

An object containing a set of methods that provide access to PDF browser controls. This is a creatable interface. This object makes it possible to load a file, move to various pages within the file, and specify various display and print options.

.. _methods-8:

Methods
----------------------------------

The ``AxAcroPDF`` object has the following methods.

.. _section-93:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - `GetVersions <IAC_API_OLE_Objects.html#50532405_36441>`__
     - Deprecated

   * - `GoBackwardStack <IAC_API_OLE_Objects.html#50532405_27582>`__
     - Goes to the previous view on the view stack, if the previous view exists.

   * - `GoForwardStack <IAC_API_OLE_Objects.html#50532405_83885>`__
     - Goes to the next view on the view stack, if the next view exists.

   * - `GotoFirstPage <IAC_API_OLE_Objects.html#50532405_37358>`__
     - Goes to the first page in the document, maintaining the current location within the page and zoom level.

   * - `GotoLastPage <IAC_API_OLE_Objects.html#50532405_56061>`__
     - Goes to the last page in the document, maintaining the current location within the page and zoom level.

   * - `GotoNextPage <IAC_API_OLE_Objects.html#50532405_61327>`__
     - Goes to the next page in the document, if it exists. Maintains the current location within the page and zoom level.

   * - `GotoPreviousPage <IAC_API_OLE_Objects.html#50532405_38257>`__
     - Goes to the previous page in the document, if it exists. Maintains the current location within the page and zoom level.

   * - `LoadFile <IAC_API_OLE_Objects.html#50532405_77539>`__
     - Opens and displays the specified document within the browser.

   * - `Print <IAC_API_OLE_Objects.html#50532405_80023>`__
     - Prints the document according to the options selected in a user dialog box.

   * - `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__
     - Prints the entire document without displaying a user dialog box.

   * - `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__
     - Prints the entire document without displaying a user dialog box, and the pages are shrunk, if necessary, to fit into the imageable area of a page in the printer.

   * - `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__
     - Prints the specified pages without displaying a user dialog box.

   * - `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__
     - Prints the specified pages without displaying a user dialog box.

   * - `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__
     - Prints the document according to the options selected in a user dialog box.

   * - `SetCurrentHighlight <IAC_API_OLE_Objects.html#50532405_42701>`__
     - Highlights the text selection within the specified bounding rectangle on the current page.

   * - `SetCurrentPage <IAC_API_OLE_Objects.html#50532405_60750>`__
     - Goes to the specified page in the document.

   * - `SetLayoutMode <IAC_API_OLE_Objects.html#50532405_65913>`__
     - Sets the layout mode for a page view according to the specified string.

   * - `SetNamedDest <IAC_API_OLE_Objects.html#50532405_95088>`__
     - Changes the page view to the named destination in the specified string.

   * - `SetPageMode <IAC_API_OLE_Objects.html#50532405_17156>`__
     - Sets the page mode according to the specified string.

   * - `SetShowScrollbars <IAC_API_OLE_Objects.html#50532405_92910>`__
     - Determines whether scrollbars will appear in the document view.

   * - `SetShowToolbar <IAC_API_OLE_Objects.html#50532405_48320>`__
     - Determines whether a toolbar will appear in the viewer.

   * - `SetView <IAC_API_OLE_Objects.html#50532405_82737>`__
     - Sets the view of a page according to the specified string.

   * - `SetViewRect <IAC_API_OLE_Objects.html#50532405_50198>`__
     - Sets the view rectangle according to the specified coordinates.

   * - `SetViewScroll <IAC_API_OLE_Objects.html#50532405_41219>`__
     - Sets the view of a page according to the specified string.

   * - `SetZoom <IAC_API_OLE_Objects.html#50532405_17296>`__
     - Sets the magnification according to the specified value.

   * - `SetZoomScroll <IAC_API_OLE_Objects.html#50532405_23108>`__
     - Sets the magnification according to the specified value, and scrolls the page view both horizontally and vertically according to the specified amounts.

**Properties**

The ``AxAcroPDF`` object has the following property.

.. _section-94:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - `Src <IAC_API_OLE_Objects.html#50532405_53488>`__
     - Gets or sets the URL for the document.

.. raw:: html

   <a name="50532405_36441"></a>

GetVersions
-----------

.. note::

   Deprecated. This method is no longer available.

**Syntax**

::

   VARIANT GetVersions();

.. raw:: html

   <a name="50532405_27582"></a>

GoBackwardStack
---------------

Goes to the previous view on the view stack, if the previous view exists. The previous view may be in a different document.

**Syntax**

::

   void GoBackwardStack();

.. _related-methods-134:

**Related methods**

* ``AcroPDF.`` `GoForwardStack <IAC_API_OLE_Objects.html#50532405_83885>`__

.. raw:: html

   <a name="50532405_83885"></a>

GoForwardStack
--------------

Goes to the next view on the view stack, if the next view exists. The next view may be in a different document.

**Syntax**

::

   void GoForwardStack();

.. _related-methods-135:

**Related methods**

* ``AcroPDF.`` `GoBackwardStack <IAC_API_OLE_Objects.html#50532405_27582>`__

.. raw:: html

   <a name="50532405_37358"></a>

GotoFirstPage
-------------

Goes to the first page in the document, maintaining the current location within the page and the current zoom level.

**Syntax**

::

   void gotoFirstPage();

.. _related-methods-136:

**Related methods**

* ``AcroPDF.`` `GotoLastPage <IAC_API_OLE_Objects.html#50532405_56061>`__ 

* ``AcroPDF.`` `GotoNextPage <IAC_API_OLE_Objects.html#50532405_61327>`__ 

* ``AcroPDF.`` `GotoPreviousPage <IAC_API_OLE_Objects.html#50532405_38257>`__ 

* ``AcroPDF.`` `SetCurrentPage <IAC_API_OLE_Objects.html#50532405_60750>`__

.. raw:: html

   <a name="50532405_56061"></a>

GotoLastPage
------------

Goes to the last page in the document, maintaining the current location within the page and the current zoom level.

**Syntax**

::

   void gotoLastPage();

.. _related-methods-137:

**Related methods**

* ``AcroPDF.`` `GotoFirstPage <IAC_API_OLE_Objects.html#50532405_37358>`__

* ``AcroPDF.`` `GotoNextPage <IAC_API_OLE_Objects.html#50532405_61327>`__

* ``AcroPDF.`` `GotoPreviousPage <IAC_API_OLE_Objects.html#50532405_38257>`__

* ``AcroPDF.`` `SetCurrentPage <IAC_API_OLE_Objects.html#50532405_60750>`__

.. raw:: html

   <a name="50532405_61327"></a>

GotoNextPage
------------

Goes to the next page in the document, if it exists. Maintains the current location within the page and the current zoom level.

**Syntax**

::

   void gotoNextPage();

.. _related-methods-138:

**Related methods**

* ``AcroPDF.`` `GotoFirstPage <IAC_API_OLE_Objects.html#50532405_37358>`__

* ``AcroPDF.`` `GotoLastPage <IAC_API_OLE_Objects.html#50532405_56061>`__

* ``AcroPDF.`` `GotoPreviousPage <IAC_API_OLE_Objects.html#50532405_38257>`__

* ``AcroPDF.`` `SetCurrentPage <IAC_API_OLE_Objects.html#50532405_60750>`__

.. raw:: html

   <a name="50532405_38257"></a>

GotoPreviousPage
----------------

Goes to the previous page in the document, if it exists. Maintains the current location within the page and the current zoom level.

**Syntax**

::

   void gotoPreviousPage();

.. _related-methods-139:

**Related methods**

* ``AcroPDF.`` `GotoFirstPage <IAC_API_OLE_Objects.html#50532405_37358>`__

* ``AcroPDF.`` `GotoLastPage <IAC_API_OLE_Objects.html#50532405_56061>`__

* ``AcroPDF.`` `GotoNextPage <IAC_API_OLE_Objects.html#50532405_61327>`__

* ``AcroPDF.`` `SetCurrentPage <IAC_API_OLE_Objects.html#50532405_60750>`__

.. raw:: html

   <a name="50532405_77539"></a>

LoadFile
--------

Opens and displays the specified document within the browser.

**Syntax**

::

   VARIANT_BOOL LoadFile(BSTR fileName);

.. _parameters-80:

**Parameters**

.. _section-95:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fileName
     - The path of the file to be opened.

**Returns**

``0`` if the file could not be opened, ``-1`` otherwise.

.. raw:: html

   <a name="50532405_80023"></a>

Print
-----

Prints the document according to the options selected in a user dialog box. The options include embedded printing (printing within a bounding rectangle on a given page), as well as interactive printing to a specified printer. This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void Print();

.. _related-methods-140:

**Related methods**

* ``AcroPDF.`` `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__

* ``AcroPDF.`` `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__

* ``AcroPDF.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__

* ``AcroPDF.`` `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__

* ``AcroPDF.`` `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__

.. raw:: html

   <a name="50532405_67867"></a>

PrintAll
--------

Prints the entire document without displaying a user dialog box. The current printer, page settings, and job settings are used. This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void printAll();

.. _related-methods-141:

**Related methods**

* ``AcroPDF.`` `Print <IAC_API_OLE_Objects.html#50532405_80023>`__

* ``AcroPDF.`` `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__

* ``AcroPDF.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__

* ``AcroPDF.`` `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__

* ``AcroPDF.`` `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__

.. raw:: html

   <a name="50532405_87648"></a>

PrintAllFit
-----------

Prints the entire document without displaying a user dialog box, and the pages are shrunk, if necessary, to fit into the imageable area of a page in the printer. The current printer, page settings, and job settings are used. This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void printAllFit(VARIANT_BOOL bOn);

.. _parameters-81:

**Parameters**

.. _section-96:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bOn
     - Determines whether to scale the imageable area when printing the document. A value of ``0`` indicates that no scaling should be used, and a positive value indicates that the pages are shrunk, if necessary, to fit into the imageable area of a page in the printer.

.. _related-methods-142:

**Related methods**

* ``AcroPDF.`` `Print <IAC_API_OLE_Objects.html#50532405_80023>`__

* ``AcroPDF.`` `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__

* ``AcroPDF.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__

* ``AcroPDF.`` `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__

* ``AcroPDF.`` `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__

.. raw:: html

   <a name="50532405_35579"></a>

.. _printpages-1:

PrintPages
----------

Prints the specified pages without displaying a user dialog box. The current printer, page settings, and job settings are used.This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void printPages( Long nFrom, Long nTo);

.. _parameters-82:

**Parameters**

.. _section-97:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFrom
     - The page number of the first page to be printed. The first page in a document is page ``0``. 

   * - nTo
     - The page number of the last page to be printed.

.. _related-methods-143:

**Related methods**

* ``AcroPDF.`` `Print <IAC_API_OLE_Objects.html#50532405_80023>`__

* ``AcroPDF.`` `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__

* ``AcroPDF.`` `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__

* ``AcroPDF.`` `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__

* ``AcroPDF.`` `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__

.. raw:: html

   <a name="50532405_72769"></a>

PrintPagesFit
-------------

Prints the specified pages without displaying a user dialog box. The current printer, page settings, and job settings are used. A parameter specifies whether to shrink pages, if necessary. This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void printPagesFit( Long nFrom, Long nTo, 
                    VARIANT_BOOL bShrinkToFit);

.. _parameters-83:

**Parameters**

.. _section-98:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nFrom
     - The page number of the first page to be printed. The first page in a document is page ``0``. 

   * - nTo
     - The page number of the last page to be printed.

   * - bShrinkToFit
     - Specifies whether the pages will be shrunk, if necessary, to fit into the imageable area of a page in the printer.

.. _related-methods-144:

**Related methods**

* ``AcroPDF.`` `Print <IAC_API_OLE_Objects.html#50532405_80023>`__

* ``AcroPDF.`` `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__

* ``AcroPDF.`` `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__

* ``AcroPDF.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__

* ``AcroPDF.`` `PrintWithDialog <IAC_API_OLE_Objects.html#50532405_48290>`__

.. raw:: html

   <a name="50532405_48290"></a>

PrintWithDialog
---------------

Prints the document according to the options selected in a user dialog box. The options include embedded printing (printing within a bounding rectangle on a given page), as well as interactive printing to a specified printer. This method returns immediately, even if the printing has not completed.

.. note::

   If security settings do not allow printing, this method is ignored.

**Syntax**

::

   void printWithDialog();

.. _related-methods-145:

**Related methods**

* ``AcroPDF.`` `Print <IAC_API_OLE_Objects.html#50532405_80023>`__

* ``AcroPDF.`` `PrintAll <IAC_API_OLE_Objects.html#50532405_67867>`__

* ``AcroPDF.`` `PrintAllFit <IAC_API_OLE_Objects.html#50532405_87648>`__

* ``AcroPDF.`` `PrintPages <IAC_API_OLE_Objects.html#50532405_35579>`__

* ``AcroPDF.`` `PrintPagesFit <IAC_API_OLE_Objects.html#50532405_72769>`__

.. raw:: html

   <a name="50532405_42701"></a>

SetCurrentHighlight
-------------------

Highlights the text selection within the specified bounding rectangle on the current page.

**Syntax**

::

   void setCurrentHighlight(LONG nLeft, LONG nTop, 
                    LONG nRight, LONG nBottom);

.. _parameters-84:

**Parameters**

.. _section-99:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nLeft
     - The distance in points from the left side of the page.

   * - nTop
     - The distance in points from the top of the page.

   * - nRight
     - The width of the bounding rectangle.

   * - nBottom
     - The height of the bounding rectangle.

.. raw:: html

   <a name="50532405_60750"></a>

SetCurrentPage
--------------

Goes to the specified page in the document. Maintains the current location within the page and the current zoom level.

**Syntax**

::

   void setCurrentPage(LONG nPage);

.. _parameters-85:

**Parameters**

.. _section-100:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - nPage
     - The page number of the destination page. The first page in a document is page ``0``. 

.. _related-methods-146:

**Related methods**

* ``AcroPDF.`` `GotoFirstPage <IAC_API_OLE_Objects.html#50532405_37358>`__

* ``AcroPDF.`` `GotoLastPage <IAC_API_OLE_Objects.html#50532405_56061>`__

* ``AcroPDF.`` `GotoNextPage <IAC_API_OLE_Objects.html#50532405_61327>`__

* ``AcroPDF.`` `GotoPreviousPage <IAC_API_OLE_Objects.html#50532405_38257>`__

.. raw:: html

   <a name="50532405_65913"></a>

SetLayoutMode
-------------

Sets the layout mode for a page view according to the specified string.

**Syntax**

::

   void setLayoutMode(BSTR szLayoutMode);

.. _parameters-86:

**Parameters**

.. _section-101:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szLayoutMode
     - Possible values:  ``DontCare``: use the current user preference  ``SinglePage``: use single page mode (as it would have appeared in pre-Acrobat 3.0 viewers)   ``OneColumn``: use one-column continuous mode  ``TwoColumnLeft``: use two-column continuous mode with the first page on the left  ``TwoColumnRight``: use two-column continuous mode with the first page on the right

.. _related-methods-147:

**Related methods**

* ``AcroPDF.`` `SetNamedDest <IAC_API_OLE_Objects.html#50532405_95088>`__

* ``AcroPDF.`` `SetView <IAC_API_OLE_Objects.html#50532405_82737>`__

* ``AcroPDF.`` `SetViewRect <IAC_API_OLE_Objects.html#50532405_50198>`__

* ``AcroPDF.`` `SetViewScroll <IAC_API_OLE_Objects.html#50532405_41219>`__

.. raw:: html

   <a name="50532405_95088"></a>

SetNamedDest
------------

Changes the page view to the named destination in the specified string.

**Syntax**

::

   void setNamedDest(BSTR szNamedDest);

.. _parameters-87:

**Parameters**

.. _section-102:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szNamedDest
     - The named destination to which the viewer will go.

.. _related-methods-148:

**Related methods**

* ``AcroPDF.`` `SetLayoutMode <IAC_API_OLE_Objects.html#50532405_65913>`__

* ``AcroPDF.`` `SetView <IAC_API_OLE_Objects.html#50532405_82737>`__

* ``AcroPDF.`` `SetViewRect <IAC_API_OLE_Objects.html#50532405_50198>`__

* ``AcroPDF.`` `SetViewScroll <IAC_API_OLE_Objects.html#50532405_41219>`__

.. raw:: html

   <a name="50532405_17156"></a>

SetPageMode
-----------

Sets the page mode according to the specified string.

**Syntax**

::

   void setPageMode(BSTR szPageMode);

.. _parameters-88:

**Parameters**

.. _section-103:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szPageMode
     - Possible values:  ``none``: displays the document, but does not display bookmarks or thumbnails (default)  ``bookmarks``: displays the document and bookmarks  ``thumbs``: displays the document and thumbnails

.. _related-methods-149:

**Related methods**

* ``AcroPDF.`` `SetShowScrollbars <IAC_API_OLE_Objects.html#50532405_92910>`__

* ``AcroPDF.`` `SetShowToolbar <IAC_API_OLE_Objects.html#50532405_48320>`__

.. raw:: html

   <a name="50532405_92910"></a>

SetShowScrollbars
-----------------

Determines whether scrollbars will appear in the document view.

**Syntax**

::

   void setShowScrollbars(VARIANT_BOOL bOn);

.. _parameters-89:

**Parameters**

.. _section-104:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bOn
     - A positive value indicates that scrollbars will appear, ``0`` indicates that they will not.

.. _related-methods-150:

**Related methods**

* ``AcroPDF.`` `SetPageMode <IAC_API_OLE_Objects.html#50532405_17156>`__

* ``AcroPDF.`` `SetShowToolbar <IAC_API_OLE_Objects.html#50532405_48320>`__

.. raw:: html

   <a name="50532405_48320"></a>

SetShowToolbar
--------------

Determines whether a toolbar will appear in the viewer.

**Syntax**

::

   void setShowToolbar(VARIANT_BOOL bOn);

.. _parameters-90:

**Parameters**

.. _section-105:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - bOn
     - A positive value indicates that the toolbar will appear, ``0`` indicates that it will not.

.. _related-methods-151:

**Related methods**

* ``AcroPDF.`` `SetPageMode <IAC_API_OLE_Objects.html#50532405_17156>`__

* ``AcroPDF.`` `SetShowScrollbars <IAC_API_OLE_Objects.html#50532405_92910>`__

.. raw:: html

   <a name="50532405_82737"></a>

SetView
-------

Sets the view of a page according to the specified string.

**Syntax**

::

   void setView(BSTR szViewMode);

.. _parameters-91:

**Parameters**

.. _section-106:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szViewMode
     - Possible values:  ``Fit``: Fits the entire page within the window both vertically and horizontally.  ``FitH``: Fits the entire width of the page within the window.  ``FitV``: Fits the entire height of the page within the window.  ``FitB``: Fits the bounding box within the window both vertically and horizontally.  ``FitBH``: Fits the entire width of the bounding box within the window.  ``FitB``: Fits the entire height of the bounding box within the window.

.. _related-methods-152:

**Related methods**

* ``AcroPDF.`` `SetLayoutMode <IAC_API_OLE_Objects.html#50532405_65913>`__

* ``AcroPDF.`` `SetNamedDest <IAC_API_OLE_Objects.html#50532405_95088>`__

* ``AcroPDF.`` `SetViewRect <IAC_API_OLE_Objects.html#50532405_50198>`__

* ``AcroPDF.`` `SetViewScroll <IAC_API_OLE_Objects.html#50532405_41219>`__

.. raw:: html

   <a name="50532405_50198"></a>

SetViewRect
-----------

Sets the view rectangle according to the specified coordinates.

**Syntax**

::

   void setViewRect(FLOAT left, FLOAT top, 
                    FLOAT width, FLOAT height);

.. _parameters-92:

**Parameters**

.. _section-107:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - left
     - The upper left horizontal coordinate.

   * - top
     - The vertical coordinate in the upper left corner.

   * - width
     - The horizontal width of the rectangle.

   * - height
     - The vertical height of the rectangle.

.. _related-methods-153:

**Related methods**

* ``AcroPDF.`` `SetLayoutMode <IAC_API_OLE_Objects.html#50532405_65913>`__

* ``AcroPDF.`` `SetNamedDest <IAC_API_OLE_Objects.html#50532405_95088>`__

* ``AcroPDF.`` `SetView <IAC_API_OLE_Objects.html#50532405_82737>`__

* ``AcroPDF.`` `SetViewScroll <IAC_API_OLE_Objects.html#50532405_41219>`__

.. raw:: html

   <a name="50532405_41219"></a>

SetViewScroll
-------------

Sets the view of a page according to the specified string. Depending on the view mode, the page is either scrolled to the right or scrolled down by the amount specified in ``offset``.

**Syntax**

::

   void setViewRect(BSTR szViewMode, FLOAT offset);

.. _parameters-93:

**Parameters**

.. _section-108:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - szViewMode
     - Possible values:  ``Fit``: Fits the entire page within the window both vertically and horizontally.  ``FitH``: Fits the entire width of the page within the window.  ``FitV``: Fits the entire height of the page within the window.  ``FitB``: Fits the bounding box within the window both vertically and horizontally.  ``FitBH``: Fits the entire width of the bounding box within the window.  ``FitBV``: Fits the entire height of the bounding box within the window.

   * - offset
     - The horizontal or vertical coordinate positioned either at the left or top edge.

.. _related-methods-154:

**Related methods**

* ``AcroPDF.`` `SetLayoutMode <IAC_API_OLE_Objects.html#50532405_65913>`__

* ``AcroPDF.`` `SetNamedDest <IAC_API_OLE_Objects.html#50532405_95088>`__

* ``AcroPDF.`` `SetView <IAC_API_OLE_Objects.html#50532405_82737>`__

* ``AcroPDF.`` `SetViewRect <IAC_API_OLE_Objects.html#50532405_50198>`__

.. raw:: html

   <a name="50532405_17296"></a>

SetZoom
-------

Sets the magnification according to the specified value.

**Syntax**

::

   void setZoom(FLOAT percent);

.. _parameters-94:

**Parameters**

.. _section-109:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - percent
     - The desired zoom factor, expressed as a percentage. For example, 1.0 represents a magnification of 100%.

.. _related-methods-155:

**Related methods**

* ``AcroPDF.`` `SetZoomScroll <IAC_API_OLE_Objects.html#50532405_23108>`__

.. raw:: html

   <a name="50532405_23108"></a>

SetZoomScroll
-------------

Sets the magnification according to the specified value, and scrolls the page view both horizontally and vertically according to the specified amounts.

**Syntax**

::

   void setZoomScroll(FLOAT percent, FLOAT left, FLOAT top);

.. _parameters-95:

**Parameters**

.. _section-110:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - percent
     - The desired zoom factor, expressed as a percentage. For example, 1.0 represents a magnification of 100%.

   * - left
     - The horizontal coordinate positioned at the left edge.

   * - top
     - The vertical coordinate positioned at the top edge.

.. _related-methods-156:

**Related methods**

* ``AcroPDF.`` `SetZoom <IAC_API_OLE_Objects.html#50532405_17296>`__

.. raw:: html

   <a name="50532405_53488"></a>

Src
---

Gets or sets the URL for the document.

**Syntax**

::

   [get/set] src

**Returns**

The URL for the document, formatted as a string.
