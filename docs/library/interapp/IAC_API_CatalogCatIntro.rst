******************************************************
Acrobat Catalog Plug-In
******************************************************

This chapter describes IAC support for the Acrobat Catalog plug-in, which allows you to create a full-text index of a set of PDF documents. A full-text index is a searchable database of all the text in the documents. After building an index, you can use the Acrobat Search command to search the entire library quickly. Searches of full-text indexes created using Catalog are faster and more convenient than using the Find command.

For more information on Catalog, see the Acrobat Help and the *Acrobat and PDF Library API Reference* .

Catalog Windows messages
========================

Catalog broadcasts a set of Windows messages when certain operations occur. These messages are broadcast whether the operations are initiated from the user interface, HFT methods, or DDE methods.

* ``AcrobatCatalogBuildSuccess``: On every successful build.

* ``AcrobatCatalogBuildFail``: On every failed build.

* ``AcrobatCatalogBuildStopped``: When a build has stopped.

Catalog DDE methods
===================

Clients can connect to the Catalog plug-in through DDE using the service name ``Acrobat`` and the topic name ``Control``. This section lists the available DDE methods.

AppExit
-------

Exits Acrobat Catalog.

**Syntax**

::

   [AppExit()]

**Returns**

If ``true``, Catalog exited successfully, otherwise ``false``.

AppFront
--------

Brings Catalog to the front.

**Syntax**

::

   [AppExit()]

FileBuild
---------

Builds an index based on the specified index definition file.

**Syntax**

::

   [FileBuild(char* fullPath)]

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be opened, including the .pdx extension.

**Returns**

If ``true``, the file opened successfully, otherwise ``false``.

FileOpen
--------

Opens an index definition file and displays the Edit Index Definition dialog box.

**Syntax**

::

   [FileOpen(char* fullPath)]

.. _parameters-1:

**Parameters**

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1
   
   * - Parameters
     - Description
   * - fullPath
     - The full path of the file to be opened, including the .pdx extension.

**Returns**

``true`` if the file opened successfully, otherwise ``false``.

FilePurge
---------

Purges an index definition file.

**Syntax**

::

   [FilePurge(char* fullPath)]

.. _parameters-2:

**Parameters**

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1
 
   * - Parameters
     - Description
 
   * - Parameters
     - Description

   * - fullPath
     - The full path of the file to be purged, including the .pdx extension.

**Returns**

``true`` if the file was successfully purged, otherwise ``false``.
