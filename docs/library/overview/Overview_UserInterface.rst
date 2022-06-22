******************************************************
User Interface Modifications
******************************************************

This chapter describes how you can modify menus and toolbars in the Acrobat DC or Acrobat Reader user interface using the Acrobat SDK.

.. raw:: html

   <a name="94229"></a>

Menu items and menus
====================

You can use the Acrobat SDK to manipulate menu items, menus, and menu bars. For complete information on what functionality is available with each SDK technology, see the `Acrobat and PDF Library API Reference, <https://www.adobe.com/go/apireference>`__ the `Acrobat JS API Reference <http://www.adobe.com/go/acrobatsdk_jsapiref>`__ , or the `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .

Menu items
----------

You can use a plug-in or JavaScript to add or remove menu items or submenus to or from an existing menu. With IAC OLE automation, you can remove a menu item but you cannot add one.

Menu items added by plug-ins can have shortcuts (keyboard accelerators). Acrobat DC and Acrobat Reader do not ensure that plug-ins add unique shortcuts, but it is possible for a plug-in to check which shortcuts are already in use before adding its own. The only way to ensure there are no shortcut conflicts is for all plug-ins to check for conflicts before adding their own shortcuts.

You are encouraged to have your plug-in add its menu items to the Tools menu. When it is launched, Acrobat DC or Acrobat Reader automatically adds this menu, as well as the About Plug-ins and Plug-in Help menus (see `Plug-in help files <Overview_UserInterface.html#38030>`__). After Acrobat DC or Acrobat Reader loads all plug-ins, it checks these three menus and removes any that are empty.

Adobe keeps a registry of plug-in menu item names to help avoid conflicts between plug-ins. For more information on registering and using plug-in prefixes, see `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ .

Menus
-----

You can create a new menu from a plug-in. However, you cannot create menus or add menus to menu bars using JavaScript or IAC.

.. raw:: html

   <a name="72680"></a>

Toolbars
========

You can use the Acrobat SDK to manipulate tool buttons and toolbars. For complete information on what functionality is available with each SDK technology, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ , the `Acrobat JS API Reference <http://www.adobe.com/go/acrobatsdk_jsapiref>`__ , or the `Interapplication Communication Developer Guide <http://www.adobe.com/go/acrobatsdk_iacguide>`__ .

Items on a toolbar
------------------

You can add or remove buttons to the toolbar, although the size and resolution of the user's monitor can limit the number of tool buttons that can be added.

Toolbar creation
----------------

Plug-ins also can create new toolbars, called flyouts, that can be attached to buttons on the main toolbar. The selection tools, for example, are all on a flyout. Not all tool buttons are located on the main toolbar; some may be located on a flyout.

You cannot create a flyout with JavaScript or IAC.

.. raw:: html

   <a name="45888"></a>

Customization of Acrobat Help
=============================

You can manipulate specific parts of the Acrobat DC Help system using a plug-in. There is no equivalent functionality from JavaScript or IAC.

About dialog box and splash screen
----------------------------------

Plug-ins can set values in the preferences file to prevent the Acrobat DC or Acrobat Reader About dialog box or splash screen from appearing before displaying the first document. These changes take effect the next time Acrobat DC or Acrobat Reader is launched.

.. raw:: html

   <a name="38030"></a>

Plug-in help files
------------------

The Help directory that accompanies Acrobat DC or Acrobat Reader provides a standard location for your plug-in help files. About Acrobat Plug-Ins is a standard menu item in the Help menu. This menu item contains a submenu. You are encouraged to have your plug-in add a menu item to the submenu to display its own About box.

You can place a help file either in the Help directory or in a subdirectory of the Help directory. If, for example, your plug-in is localized for Japanese, you can place the Japanese help file in its own subdirectory. For more information, see the `Acrobat and PDF Library API Reference. <https://www.adobe.com/go/pdflibrary>`__
