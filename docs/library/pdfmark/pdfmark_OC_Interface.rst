******************************************************
Distilling Optional Content
******************************************************

The ProcSet entry in a content stream's resource dictionary holds an array consisting of the names of the procedure sets used in that content stream. This section describes the ProcSet used to build optional content into a PDF document.

Optional content refers to content in a PDF document that can be selectively viewed or hidden. Optional content is a feature that became available with Acrobat 6.

For more information on ProcSet entries and optional content, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .

.. note::

   While the optional content ProcSet makes extensive use of pdfmark internally, clients of the optional content ProcSet should not have to use pdfmark to add optional content to a PDF file.

Initialization and termination code
===================================

To use the optional content ProcSet, clients must insert the following code into the document setup section of the PostScript job. This places definitions of the optional content ProcSet procedures in ``userdict`` for easy access by the client.

::

    {/OCProcSet /ProcSet findresource} stopped not
     {/initialize get exec}
     {
         /BeginOC /pop load def
         /EndOC {} def
         /SimpleOC /pop load def
         /SetOCGInitState {pop pop} bind def
         /OCEndPage {} def
         /SetOCGIntent {pop pop} bind def
         /SetOCGUsage {pop pop} bind def
         /AddASEvent {pop pop pop} bind def
         /GetOCGPdfmarkTag {{---invalidpdfmarkname---}} bind def
     }
     ifelse

Also, the following code must be inserted into the trailer section of the PostScript file:

::

    {/OCProcSet /ProcSet findresource /terminate get exec} stopped pop

When using the optional content ProcSet, the optional content group is the primary data item. It is referred to by the group's name, which is a string object. (See the description of the entries in the optional content group dictionary in the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ .) Clients of the ProcSet do not need to do anything to set up optional content groups—they simply refer to them by their name strings, and the ProcSet takes care of creating them on-the-fly. Clients can set the initial state, intent, and usage info for optional content groups, using ``SetOCGInitState`` , ``SetOCGIntent`` , and ``SetOCGUsage`` , respectively.

There are two techniques for using the ProcSet to make content optional: one for non-nested optional content, and one for nested optional content:

-  The simplest technique is for non-nested optional content using the ``SimpleOC`` procedure. Simply pass in a string for the optional content group name, and all marks up to the next ``SimpleOC`` belong to the optional content group with that name. Passing in ``null SimpleOC`` makes subsequent content non-optional. At the end of the page, before the ``showpage`` , issue ``null SimpleOC`` .
-  For nested optional content, the technique is for documents that have nested visibility control. For these the ProcSet provides stack-style optional content control. This is also the style of control used if you have content that requires an Optional Content Membership Dictionary (OCMD), because it belongs to more than one optional content group and can require a visibility policy entry in the OCMD. For this sort of optional content, use the ``BeginOC`` and ``EndOC`` procedures. With this style, you should call ``OCEndPage`` at the end of the page (before ``showpage`` ). This ensures that the marked content is closed properly.


Procedure definitions
=====================

This section describes the optional content procedures and provides their syntax and examples.


AddASEvent
----------

Adds an auto state event to the PDF's default configuration. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for a description of auto state control for optional content.

**Syntax**

::

   event_type event_categories ocgnames AddASEvent

**Parameters**

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - event_type
     - Must be a PostScript name. Either ``/View`` , ``/Print`` , or ``/Export`` .

   * - event_categories
     - Must be a PostScript array of name objects (typically matching keys in optional content group usage dictionaries). For a description of usage dictionaries, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__

   * - ocgnames
     - Array of valid PostScript string variables representing optional content groups


****Example****


::

    /View [/Zoom] [(30,000 Feet) (5,000 Feet) (100 Feet)] AddASEvent

The example declares that the three optional content groups named ``30,000 Feet`` , ``5,000 Feet`` , and ``100 Feet`` are to be controlled for on-screen viewing, based on the current zoom level and the ``/Zoom`` information in each optional content group's ``Usage`` dictionary.

BeginOC
-------

The ``BeginOC`` procedure is used to begin a span of content that belongs to the optional content groups supplied. It is used for nested visibility control when content can belong to more than one optional content group. Both multiple membership (using the array of optional content group names) and stack-based nesting are supported. The ``EndOC`` calls must come before the ``showpage`` call of any page. Every ``BeginOC`` call should have a matching ``EndOC`` call.

.. note::

   You cannot mix ``SimpleOC`` and ``BeginOC/EndOC`` on the same page.

.. _**Syntax**-1:

**Syntax**


::

   ocgname BeginOC
   ocgnames BeginOC
   ocgname 
   policy
    BeginOC
   ocgnames 
   policy
    BeginOC

.. _parameters-1:

**Parameters**


.. _section-1:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - Array of string objects identifying a set of optional content groups.

   * - ocgnames
     - String object identifying an optional content group.

   * - policy
     - Optional. One of the following names: ``/AllOn`` , ``/AnyOn`` , ``/AllOff`` , or ``/AnyOff`` , identifying the visibility policy to use. If no ``policy`` is specified, ``/AnyOn`` is used by default.


.. note:: `EndOC <pdfmark_OC_Interface.html#50454551_83170>`__

EndOC
-----

The ``EndOC`` procedure is used to end a span of optional content. It is used to close a span of optional content started by ``BeginOC`` . Both multiple membership (using an array of optional content group names) and stack-based nesting are supported. The ``EndOC`` calls must come before the ``showpage`` call of any page.

Every ``BeginOC`` call should have a matching ``EndOC`` call.

.. note::

   You cannot mix ``SimpleOC`` and ``BeginOC/EndOC`` on the same page.

.. _syntax-2:

**Syntax**


::

   EndOC

.. _see-also-1:

See also


`BeginOC <pdfmark_OC_Interface.html#50454551_51091>`__

GetOCGPdfmarkTag
----------------

The ``GetOCGPdfmarkTag`` returns the object that the ProcSet implementation uses to identify the optional content group object for pdfmark. Using this object, the client can use the ``/PUT`` pdfmark command to add additional key/value pairs to the optional content group dictionary.

The ``GetOCGPdfmarkTag`` is not available in the OCProcSet ``userdict`` by default. To use this procedure, you can add the following to the OCProcSet initialization code within its ``{/initialize get exec ... end}`` clause:

::

   userdict begin
         /GetOCGPdfmarkTag dup OCProcSetRes exch get def
      end

.. _syntax-3:

**Syntax**


::

   ocgname
    GetOCGPdfmarkTag 
   procedure

.. _parameters-2:

**Parameters**


.. _section-2:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - String object identifying an optional content group


Returns


The optional content group's ``/OBJ`` pdfmark tag.

.. _see-also-2:

See also


pdfmark ``/OBJ`` and ``/PUT`` commands.

.. _example-1:

****Example****


::

    [(MyLayer) GetOCGPdfmarkTag <</key1 (easy as) /key2 3.14159>> /PUT pdfmark

This example adds the key/value pairs:

::

    /key1 (easy as)
     /key2 3.14159

to the dictionary for the optional content group with the name ``MyLayer`` .

OCEndPage
---------

The ``OCEndPage`` is called at the end of the page in a multi-page PostScript file to allow the ProcSet to close any open optional content on the current page. It can be used to close a call to either ``SimpleOC`` or ``BeginOC`` .

.. _syntax-4:

**Syntax**


::

   OCEndPage

SetOCGInitState
---------------

The ``SetOCGInitState`` procedure sets the initial state of an optional content group to be either ON (``true`` ) or OFF (``false`` ).

.. _syntax-5:

**Syntax**


::

   ocgname bool SetOCGInitState

.. _parameters-3:

**Parameters**


.. _section-3:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - Valid PostScript string variable representing an optional content group.

   * - bool
     - ``true`` or ``false`` . Value of ocgname's initial state. For a description of an optional content group's state, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__.


SetOCGIntent
------------

The ``SetOCGIntent`` procedure sets the ``Intent`` key in ocgname to intent.

.. _syntax-6:

**Syntax**


::

   ocgname intent SetOCGIntent

.. _parameters-4:

**Parameters**


.. _section-4:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - Valid PostScript string variable representing an optional content group.

   * - intent
     - Value of ocgname's ``Intent`` key, such as ``/Design`` , ``/View`` , ``/All`` , or ``/None`` , or an array of names, excluding ``/All`` and ``/None`` For a description of an optional content group's ``Intent`` key, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__


SetOCGUsage
-----------

The ``SetOCGUsage`` procedure sets the ``Usage`` key in ocgname to the dict supplied. This is the top level usage dictionary, not a usage category dictionary. Only one call per optional content group is honored, so the client must collect all usage subdictionaries and issue a single call to set the ``Usage`` dictionary for the optional content group.

.. _syntax-7:

**Syntax**


::

   ocgname dict SetOCGUsage

.. _parameters-5:

**Parameters**


.. _section-5:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - Valid PostScript string variable representing an optional content group.

   * - dict
     - Value of ocgname's ``Usage`` key, which is a dictionary. For a description of an optional content group's ``Usage`` key, see the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ . By default, there is no ``Usage`` key in the optional content group's dictionary. Th


.. _example-2:

****Example****


::

    (30,000 Feet) <</Zoom << /max 0.5 >> >> SetOCGUsage
     (5,000 Feet) <</Zoom << /min 0.5 /max 4>> >> SetOCGUsage
     (100 Feet) <</Zoom << /min 4 >> >> SetOCGUsage

This example specifies, in conjunction with the ``AddASEvent`` example, that the objects in the ``30,000 Feet`` optional content group should be visible when the zoom level is less than 50%, the objects in the ``5,000 Feet`` optional content group should be visible between 50% and 400%, and the objects in the ``100 Feet`` optional content group should be visible when the zoom level is at least 400%.

SimpleOC
--------

The ``SimpleOC`` procedure ends any current optional content span, and begins a new one where the content belongs to ``ocgname`` .

To use the ``SimpleOC`` procedure, simply pass in a string for the optional content group name, and all marks up to the next ``SimpleOC`` belong to the optional content group with that name. Passing in ``null SimpleOC`` makes subsequent content non-optional. At the end of the page, before the ``showpage`` , issue ``null SimpleOC`` .

.. note::

   You cannot mix ``SimpleOC`` and ``BeginOC/EndOC`` on the same page.

.. _syntax-8:

**Syntax**


::

   ocgname SimpleOC

.. _parameters-6:

**Parameters**


.. _section-6:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - ocgname
     - Valid PostScript string variable representing an optional content group.


.. _example-3:

**Example**


To show content on all layers (at all times):

::

    null SimpleOC 

