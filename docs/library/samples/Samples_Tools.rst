******************************************************
Tools
******************************************************

Plugin Wizard
=============

**Location**


Acrobat SDK/Visual Studio App Wizard

**Description**


Wizard to create plugins for Acrobat with Visual Studio.

The Plugin Wizard extends Microsoft Visual Studio to simplify the creation of Visual Studio C++ projects that create plugins for Acrobat.

**Installation**

If Visual Studio 2019 is installed when the Acrobat Plugin wizard installer is run, the installer will install the necessary files in the Visual Studio installation.

**Usage**


In Visual Studio, create a new project by clicking on **New Project** or choosing the File > New > Project command. Select "Visual C++ Projects" in the Project Types pane. Choose Acro9PIWiz in the Templates pane. Enter a name and location for the project and click OK.

The first time you use the Plugin wizard, you will be prompted to locate Acrobat SDK header path. You can check "Do not show at startup" if you don't want to see the dialog next time you start Visual Studio. However, if you want to check whether you have specify the correct location for the headers at a later time, you can always click on the "Headers" button to bring up the dialog showing the header path.

The Plugin Wizard will now start, offering you many high-level choices about the plugin that will be created. Select those that you desire and the wizard will create the project and populate it with the necessary files.

Replaceable functions can have many different return types, from void to built-in to structured types. Because of this, projects that use replaceable functions will draw compiler warnings as the variable used to hold the return value is not initialized. You should, of course, complete the replaceable function to do what you would like, and in the process initialize the return value to eliminate the compiler warning.

Limitations
--------------------

-  Requires Visual Studio 2019
-  Windows only
-  If you intend to use Visual Studio App Wizard to create a plugin that uses privileged operations and you are running on Windows Vista, you must establish yourself as an administrator. This is required even if your user ID has Admin privileges.
-  Select the Windows start icon.From All Programs, navigate to Visual Studio C++. Right click Visual Studio C++.Select "Run as ...."Select "Run as administrator", which is the only selection that elevates your privilege level to administrator.

ShowPermissions
===============

.. _location-1:

**Location**


Acrobat SDK/ShowPermissions

.. _description-1:

**Description**


ShowPermissions uses the PDDocPermRequest function to check operation permissions for the front PDF, and saves the results to text files.

Since the Acrobat products have different versions and variations and the PDF may have certain level of Reader-Enabled usage-rights, this plugin can provide useful information about the Acrobat functionality / API availabilities and the PDF permitted operations.

ShowPermissions.api will work with Acrobat 7 or later, and it has been Reader-enabled for use with Adobe Reader. Note that if you directly build the ShowPermissions plugin sample in the SDK, then that plugin won't be able to run in Adobe Reader.

.. _usage-1:

**Usage**


Copy this file to the Acrobat or Adobe Reader plug_ins directory. The plugin will add a menu item titled "Show Permissions" under the Tools menu. When chosen, you can select a folder for the output, and then save the operation permission list to a plain text file and a tab delimited text file. The latter can be opened by Excel. The output's filenames are the PDF filename plus -permissions.txt or .xls.

.. note::

   Windows only.
