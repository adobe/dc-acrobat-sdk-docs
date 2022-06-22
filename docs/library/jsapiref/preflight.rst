******************************************************
Preflight APIs
******************************************************


Preflight
=========

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

This object represents the Preflight tool.

Preflight methods
-----------------

* `createComplianceProfile <JS_API_AcroJS.html#99636>`__
* `getNthProfile <JS_API_AcroJS.html#20339>`__
* `getNumProfiles <JS_API_AcroJS.html#30742>`__
* `getProfileByName <JS_API_AcroJS.html#26571>`__
* `getProfileByFingerPrint <JS_API_AcroJS.html#50413>`__

.. raw:: html

   <a name="99636"></a>

createComplianceProfile
~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only
	
Creates a compliance profile for a given PDF standard for the document.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cStandardKey``
     - The PDF Standard version to verify.

   * - ``oThermometer``
     - (optional) Show the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 

Valid standard version keys:

-  PDF/X-1a:2001
-  PDF/X-1a:2003
-  PDF/X-3:2002
-  PDF/X-3:2003
-  PDF/X-4:2008
-  PDF/X-4p:2008
-  PDF/X-5g:2008
-  PDF/X-5n:2008
-  PDF/X-5pg:2008
-  PDF/A-1a:2005
-  PDF/A-1b:2005
-  PDF/E-1:2008



**Returns** 

A `PreflightProfile <JS_API_AcroJS.html#83635>`__ object. ``Undefined`` is returned otherwise.

Example: Check the current PDF document to PDF/A-1b:2005 compliance.

::

   var oProfile = Preflight.createComplianceProfile("PDF/A-1b:2005")
   if( oProfile != undefined )
   {
      var oThermometer = app.thermometer;
      var myPreflightResult = this.preflight( oProfile, true, oThermometer);
      if( myPreflightResult.numErrors > 0 ) {
          console.println( "PDF document is NOT PDF/A-1b:2005 compliant.");
      } else {
      console.println( "PDF document is PDF/A-1b:2005 compliant.");
      }
   }

.. raw:: html

   <a name="20339"></a>

getNthProfile
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Retrieves the Nth Preflight profile from the list of installed Preflight profiles.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``nIndex``
     - The zero-based index of the profile that should be obtained.

   * - ``oThermometer``
     - (optional) Shows the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 



**Returns** 

A `PreflightProfile <JS_API_AcroJS.html#83635>`__ object containing the profile that corresponds to ``nIndex``. ``Undefined`` is returned otherwise.

Example: Enumerate through all of the profiles in Preflight.

::

   var num = Preflight.getNumProfiles(app.thermometer);
   for( i= 0; i< num; ++i)
   {
      var oProfile = Preflight.getNthProfile(i);
      console.println("-----------------------------------------");
      console.println("Name: " + oProfile.name);
      console.println("Comment: " + oProfile.description);
      console.println("HasFixups: " + oProfile.hasFixups);
      console.println("HasChecks: " + oProfile.hasChecks);
      console.println("-----------------------------------------");
   }

.. raw:: html

   <a name="30742"></a>

getNumProfiles
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Retrieves the number of installed Preflight profiles.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oThermometer``
     - (optional) Shows the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 



**Returns** 

The number of installed Preflight profiles.

.. raw:: html

   <a name="26571"></a>

getProfileByName
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Retrieves the Preflight profile with a specific name from the list of installed Preflight profiles.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cName``
     - The name of the profile to be obtained.

   * - ``oThermometer``
     - (optional) Shows the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 



**Returns** 

A `PreflightProfile <JS_API_AcroJS.html#83635>`__ object if a profile with the specified name exists. ``Undefined`` is returned otherwise.

Example: Get a profile with the name "Magazine Ads".

::

   var oProfile = Preflight.getProfileByName("Magazine Ads");
   if( oProfile != undefined) {
      console.println("-----------------------------------------");
      console.println("Name: " + oProfile.name);
      console.println("Comment: " + oProfile.description);
      console.println("HasFixups: " + oProfile.hasFixups);
      console.println("HasChecks: " + oProfile.hasChecks);
      console.println("-----------------------------------------");
   }

.. raw:: html

   <a name="50413"></a>

getProfileByFingerPrint
~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Retrieves the Preflight profile with a specific fingerprint of the audit trail. The fingerprint can be acquired from the ``doc.getPreflightAuditTrail`` method.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``cFingerPrint``
     - The fingerprint of the profile to be obtained.

   * - ``oThermometer``
     - (optional) Shows the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 



**Returns** 

A `PreflightProfile <JS_API_AcroJS.html#83635>`__ object if a profile with the specified fingerprint exists. ``Undefined`` is returned otherwise.

Example: Get a profile from the audit trail.

::

   var oAuditTrail = this.getPreflightAuditTrail();
   var oProfile = Preflight.getProfileByFingerPrint(oAuditTrail.profile_fingerprint);
   if( oProfile != undefined) {
      console.println("-----------------------------------------");
      console.println("Name: " + oProfile.name);
      console.println("Comment: " + oProfile.description);
      console.println("HasFixups: " + oProfile.hasFixups);
      console.println("HasChecks: " + oProfile.hasChecks);
      console.println("-----------------------------------------");
   }

.. raw:: html

   <a name="72375"></a>

PreflightAuditTrail
===================

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

A ``PreflightAuditTrail`` represents information about a Preflight check that has been carried out for the PDF, and contains information about the Preflight profile used as well as what the outcome of the Preflight check was.

PreflightAuditTrail properties
------------------------------

* `preflight_executed_date <JS_API_AcroJS.html#21621>`__
* `preflight_results <JS_API_AcroJS.html#78427>`__
* `preflight_results_description <JS_API_AcroJS.html#83215>`__
* `profile_creator <JS_API_AcroJS.html#16414>`__
* `profile_creator_version <JS_API_AcroJS.html#15765>`__
* `profile_fingerprint <JS_API_AcroJS.html#15543>`__
* `profile_format_version <JS_API_AcroJS.html#84437>`__
* `profile_name <JS_API_AcroJS.html#88021>`__

.. raw:: html

   <a name="21621"></a>

preflight_executed_date
~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The date and time when the profile was executed.


.. raw:: html

   <a name="78427"></a>

preflight_results
~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The result of executing the profile, with four possible values:

-  "``Errors`` "
-  "``Warnings`` "
-  "``Info`` "
-  "``Success`` "


.. raw:: html

   <a name="83215"></a>

preflight_results_description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The descriptive text about the errors.



.. raw:: html

   <a name="16414"></a>

profile_creator
~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The software by which the profile was created.



.. raw:: html

   <a name="15765"></a>

profile_creator_version
~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The version number of the software used for creating the profile.


.. raw:: html

   <a name="15543"></a>

profile_fingerprint
~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The fingerprint for the profile that was used to carry out the Preflight check.


.. raw:: html

   <a name="84437"></a>

profile_format_version
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The version number of the format in which the profile was stored.


.. raw:: html

   <a name="88021"></a>

profile_name
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The name of the Preflight profile used.

Example: Display the properties from the audit trail.

::

   var oAuditTrail = this.getPreflightAuditTrail();
   if( oAuditTrail != undefined) {
      var oProfile = Preflight.getProfileByFingerPrint(oAuditTrail.profile_fingerprint);
      if( oProfile != undefined) {
          console.println("-----------------------------------------");
          console.println("Name: " + oAuditTrail.profile_name);
          console.println("Creator: " + oAuditTrail.profile_creator);
          console.println("Creator Version: " + oAuditTrail.profile_creator_version);
          console.println("Format Version: " + oAuditTrail.profile_format_version);
          console.println("Results: " + oAuditTrail.preflight_results);
          console.println("Description: " + oAuditTrail.preflight_results_description);
          console.println("Executed Date: " + oAuditTrail.preflight_executed_date);
          console.println("Fingerprint: " + oAuditTrail.profile_fingerprint);
          console.println("-----------------------------------------");
      } else {
          this.removePreflightAuditTrail();
      }
   }

.. raw:: html

   <a name="83635"></a>

PreflightProfile
================

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

A ``PreflightProfile`` represents a particular Preflight profile; that is a Preflight profile that is installed in the Preflight tool. The ``PreflightProfile`` object can be acquired from ``Preflight.getNthProfile``, ``Preflight.getProfileByName``, ``Preflight.createComplianceProfile`` or ``Preflight.getProfileByFingerPrint``.

PreflightProfile properties
---------------------------

* `name <JS_API_AcroJS.html#63688>`__
* `description <JS_API_AcroJS.html#84619>`__
* `hasFixups <JS_API_AcroJS.html#11020>`__
* `hasChecks <JS_API_AcroJS.html#86085>`__

.. raw:: html

   <a name="63688"></a>

.. _name-20:

name
~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The name of the Preflight profile.


.. raw:: html

   <a name="84619"></a>

.. _description-3:

description
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - String
     - R

The description of the Preflight profile.

.. raw:: html

   <a name="11020"></a>

hasFixups
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Boolean
     - R

``true`` if the Preflight profile has fixups, ``false`` otherwise.

.. raw:: html

   <a name="86085"></a>

hasChecks
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Boolean
     - R

``true`` if the Preflight profile has checks, ``false`` otherwise.

PreflightProfile methods
------------------------

hasConversion
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Checks whether the preflight profile contains a conversion to a specific PDF standard.

**Parameters**

============ ==========================================
``cVersion`` The PDF standard, represented as a string.
============ ==========================================

Valid standard keys:

-  PDF/X-1a:2001
-  PDF/X-1a:2003
-  PDF/X-3:2002
-  PDF/X-3:2003
-  PDF/X-4:2008
-  PDF/X-4p:2008
-  PDF/X-5g:2008
-  PDF/X-5n:2008
-  PDF/X-5pg:2008
-  PDF/A-1a:2005
-  PDF/A-1b:2005
-  PDF/E-1:2008



**Returns** 

``true`` if the specified conversion is configured in the profile, ``false`` otherwise.

.. raw:: html

   <a name="73619"></a>

PreflightResult
===============

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only


A ``PreflightResult`` represents a particular Preflight result; it is a data structure created by the Preflight tool. The ``PreflightResult`` object can be acquired from the ``doc.preflight`` method.

PreflightResult properties
--------------------------

* `numErrors <JS_API_AcroJS.html#89206>`__
* `numWarnings <JS_API_AcroJS.html#42669>`__
* `numInfos <JS_API_AcroJS.html#74894>`__
* `numFixed <JS_API_AcroJS.html#64789>`__
* `numNotFixed <JS_API_AcroJS.html#84811>`__

.. raw:: html

   <a name="89206"></a>

numErrors
~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Integer
     - R

Indicates the number of errors found in the PDF document.


.. raw:: html

   <a name="42669"></a>

numWarnings
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Integer
     - R

Indicates the number of warnings found in the PDF document.


.. raw:: html

   <a name="74894"></a>

numInfos
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Integer
     - R

Indicates the number of pieces of information found in the PDF document.

.. raw:: html

   <a name="64789"></a>

numFixed
~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Integer
     - R

Indicates the number of successfully applied fixups.



.. raw:: html

   <a name="84811"></a>

numNotFixed
~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
     - Type
     - Access
   * - 9.0
     - No
     - No
     - Acrobat Pro only
     - Integer
     - R

Indicates the number of unsuccessfully applied fixups.


PreflightResult methods
-----------------------

report
~~~~~~

.. list-table::
   :header-rows: 1

   * - Acrobat #
     - Save and Preferences
     - Security?
     - Availability
   * - 9.0
     - No
     - No
     - Acrobat Pro only

Creates a Preflight XML report.

**Parameters**

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description
   * - ``oThermometer``
     - (optional) Shows the status window and the progress bar that indicates to the user that a lengthy operation is in progress. To acquire a Thermometer object, use ``app.thermometer``. If ``oThermometer`` is not specified, no progress is shown. 



**Returns** 

A string containing the XML report. This string can be used with ``XMLData.parse`` method to create an ``XFA`` object that represents either a tree headed by a single node or a tree started by a list of nodes (a tree list).

Example: Create and parse a Preflight XML report.

::

   var oProfile = Preflight.getProfileByName("Magazine Ads")
   if( oProfile != undefined )
   {
      var oThermometer = app.thermometer;
      var myPreflightResult = this.preflight( oProfile, false, oThermometer);
      if( myPreflightResult.numErrors > 0 ) {
      var cXMLData = myPreflightResult.report(oThermometer);
      var oXMLData = XMLData.parse(sXMLData, false);
      // .
     .. do something with XMLData object ...
   }

.. raw:: html

   <a name="43354"></a>

