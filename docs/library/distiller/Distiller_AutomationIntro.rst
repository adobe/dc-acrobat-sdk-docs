******************************************************
Acrobat Distiller API Reference
******************************************************

Restriction on Directory Access
===============================

Distiller restricts the directories that PostScript file operators can access. The default behavior limits directory access to the temp and font cache directories. Earlier versions of Acrobat DC Distiller allowed PostScript file operators to have unlimited directory access.

The following Acrobat DC Distiller command line options (Windows) and user preference (Mac) enable unlimited directory access. Such unlimited access can pose security problems.

-  Windows: -F command line option
-  Mac OS: AllowPSFileOps user preference

For information on using these Acrobat DC Distiller command line options and preferences with the EMBED pdfMark command, refer to the *PDFmark Reference* .

.. raw:: html

   <a name="43358"></a>

Windows Automation
==================

For most applications, the best way to automate Distiller under Windows is through the automation interface. The automation interface makes it easy to create and control Distiller from any programming language that supports automation. Distiller supports Visual Basic and Visual C++ with or without MFC.

Distiller exposes one interface: ``PdfDistiller`` . This interface provides methods, properties, and events.

In Visual Basic, if you want to just create and use a Distiller instance without spooling or events, the code can be as simple as the following:

::

     Dim pdf As PdfDistiller
      pdf.FileToPdf "My Test File.ps", "", ""

Unless otherwise noted, all examples in this chapter use Visual Basic notation.

.. raw:: html

   <a name="57118"></a>

Methods
=======

* `Create <Distiller_AutomationIntro.html#85293>`__
* `FileToPDF <Distiller_AutomationIntro.html#58197>`__
* `FileToPDF2 <Distiller_AutomationIntro.html#66622>`__

.. raw:: html

   <a name="85293"></a>

Create
------

Creates a Distiller instance. You do not need to call this method, because a Distiller instance is always created if one of the other methods needs it. However, you may want to call this method if you are handling events and want to display the Distiller startup messages before you submit any jobs.

Each user of the automation interface has its own Distiller instance. There is no sharing of a common Distiller as is done with the ``WM_COPYDATA`` interface.

.. raw:: html

   <a name="58197"></a>

FileToPDF
---------

Submits a PostScript file job to Distiller.

This method always creates a log file, regardless of the setting of the Delete Log Files for Successful Jobs preference in Distiller.

**Parameters**



 

+-----------------------------------+----------------------------------------------------------+
|                                   | The PostScript file to process.                          |
|                                   |                                                          |
|    strInputPostScript             |                                                          |
+-----------------------------------+----------------------------------------------------------+
|                                   | The name of the PDF file.                                |
|                                   |                                                          |
|    strOutputPDF                   |                                                          |
+-----------------------------------+----------------------------------------------------------+
|                                   | The name and path of the Adobe PDF settings file to use. |
|                                   |                                                          |
|    strPDFOptions                  |                                                          |
+-----------------------------------+----------------------------------------------------------+

**Returns**

``short int`` (``true`` on success, ``false`` otherwise)

If ``0`` is returned, the parameters are invalid; if ``-1`` is returned, the PDF creation itself failed. If the user set the ``bSpoolJobs`` flag before calling this method, then it returns an error only for invalid parameters.

.. raw:: html

   <a name="66622"></a>

FileToPDF2
----------

Submits a PostScript file job to Distiller. This method is the same as ``FileToPDF`` except for the addition of an option to apply security.

.. _parameters-1:

**Parameters**


.. _section-1:


 

+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The PostScript file to process.                                                                                                                               |
|                                   |                                                                                                                                                               |
|    strInputPostScript             |                                                                                                                                                               |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The name of the PDF file.                                                                                                                                     |
|                                   |                                                                                                                                                               |
|    strOutputPDF                   |                                                                                                                                                               |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | The name and path of the Adobe PDF settings file to use.                                                                                                      |
|                                   |                                                                                                                                                               |
|    strPDFOptions                  |                                                                                                                                                               |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                   | A Boolean value that, if greater than ``0`` , causes security to be applied to the PDF as currently defined in the Distiller application security dialog box. |
|                                   |                                                                                                                                                               |
|    long bApplySecurity            |                                                                                                                                                               |
+-----------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns**

``short int`` (``true`` on success, ``false`` otherwise)

If ``0`` is returned, the parameters are invalid; if ``-1`` is returned, the PDF creation itself failed. If the user set the ``bSpoolJobs`` flag before calling this method, then it returns an error only for invalid parameters.

.. raw:: html

   <a name="21067"></a>

Properties
==========

`bShowWindow <Distiller_AutomationIntro.html#53752>`__

`bSpoolJobs <Distiller_AutomationIntro.html#12100>`__

.. raw:: html

   <a name="53752"></a>

bShowWindow
-----------

Specifies whether Distiller opens with the status windows. This property takes effect only if you set it before calling the ``Create`` method or any other method. If you have already started Distiller, ``bShowWindow`` has no effect.

**Syntax**

::

   [get/set] As Long

.. raw:: html

   <a name="12100"></a>

bSpoolJobs
----------

Specifies whether Distiller queues PDF jobs through its internal spooler or processes each job immediately.

By default, ``bSpoolJobs`` is ``false`` , and ``FileToPDF`` processes the PDF job immediately and does not return until the PDF file is created.

If ``bSpoolJobs`` is ``true`` , ``FileToPDF`` submits the PDF job to Distiller's internal job queue and returns immediately. The job will be processed at some later time. To find out when the job is done, you can watch for the events Distiller runs during job processing.

**Syntax**

::

   [get/set] As Long


.. raw:: html

   <a name="20892"></a>

Events
======

* `OnJobStart <Distiller_AutomationIntro.html#85285>`__
* `OnJobDone <Distiller_AutomationIntro.html#24413>`__
* `OnJobFail <Distiller_AutomationIntro.html#34425>`__
* `OnLogMessage <Distiller_AutomationIntro.html#98813>`__
* `OnPercentDone <Distiller_AutomationIntro.html#85527>`__
* `OnPageNumber <Distiller_AutomationIntro.html#65131>`__

.. raw:: html

   <a name="85285"></a>

OnJobStart
----------

Run once when a job begins processing.

**Syntax**

::

   OnJobStart( ByVal strInputPostScript As String, 
      ByVal_ strOutputPDF As String )

.. raw:: html

   <a name="24413"></a>

OnJobDone
---------

Run once when a job completes successfully.

**Syntax**

::

   OnJobDone( ByVal strInputPostScript As String,
      _ByVal strOutputPDF As String )

.. raw:: html

   <a name="34425"></a>

OnJobFail
---------

Run once when a job ends unsuccessfully.

**Syntax**

::

   OnJobFail( ByVal strInputPostScript As String,
      _ByVal strOutputPDF As String )

.. raw:: html

   <a name="98813"></a>

OnLogMessage
------------

Run at various times with the text messages that normally appear in Distiller's message log window.

A single call to ``OnLogMessage`` may contain multiple lines or partial lines of text. In the current version of Distiller, the text may contain line feed characters without carriage return characters. Your application should not make any assumptions about how this text is formatted and should be prepared to receive either line feed characters (LF) alone or carriage return - line feed (CR-LF) pairs.

**Syntax**

::

   OnLogMessage( ByVal strMessage As String )

.. raw:: html

   <a name="85527"></a>

OnPercentDone
-------------

Run periodically during a job to indicate overall progress.

**Syntax**

::

   OnPercentDone( ByVal nPercentDone As Long )

.. raw:: html

   <a name="65131"></a>

OnPageNumber
------------

Run periodically during a job to indicate the current page number.

**Syntax**

::

   OnPageNumber( ByVal nPageNumber As Long )

