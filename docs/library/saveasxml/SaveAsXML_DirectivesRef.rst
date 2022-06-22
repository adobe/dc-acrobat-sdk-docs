******************************************************
Mapping Table Elements Reference
******************************************************

This chapter provides complete details of all mapping table directives and their attributes.

Call-event-list
===============

Inserts the named event-list at this point in the mapping table. This directive is identical to a macro call.

DTD content rule


::

   Void?

**Attributes**



 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Name
     - String
     - Required. The name of a event list (as in ``<Define-event-list>``) to be included at this point in the current event list. |


Call-proc-list
==============

Inserts the named proc-list at this point in the mapping table. This directive is identical to a macro call.

.. _dtd-content-rule-1:

**DTD content rule**


::

   Void?


**Attributes**


.. _section-1:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Name
     - String
     - Required. The name of a variable processing list (see ``<define-proc-list>``) to be included at this point in the current event or proc-list. |


Comment
=======

Allows documentation or notes to be included in the mapping table. This directive does no processing.

.. _dtd-content-rule-2:

**DTD content rule**


::

   <TEXT>

Conditional-delimiter
=====================

Emits the contained text if this ``proc-var`` is not the first one to be accepted and processed after the start of an event or the first one to be processed after a ``conditional-prefix`` control element.

.. _dtd-content-rule-3:

**DTD content rule**


::

   <TEXT>

**Attributes**


.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Emit-newline-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        *  ``Emit-newline-before``: Emit a newline before emitting any content text.

        *  ``No-newline-before``: Do not emit a newline before emitting any content text.

   * - Emit-newline-after
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        * ``Emit-newline-after``: Emit a newline after emitting any content text.
       
        *  ``No-newline-after``: Do not emit a newline after emitting any content text.

   * - Emit-space-after
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        *  ``Emit-space-after``: Emit a space after emitting any content text.
       
        * ``No-space-after``: Do not emit a space after emitting any content text.

   * - Emit-space-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        * ``Emit-space-before``: Emit a space before emitting any content text.
       
        * ``No-space-before``: Do not emit a space before emitting any content text.


Conditional-prefix
==================

Caches and emits the contained text if any ``proc-var`` is accepted to be processed before the end of the current event or before the next ``Conditional-suffix`` control element.

.. _dtd-content-rule-4:

**DTD content rule**


::

   <TEXT>

.. _attributes-3:

**Attributes**

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Emit-newline-after
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-after``: Emit a newline after emitting any content text.
       
       *  ``No-newline-after``: Do not emit a newline after emitting any content text.

   * - Emit-newline-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-before``: Emit a newline before emitting any content text.
       
       *  ``No-newline-before``: Do not emit a newline before emitting any content text.

   * - Emit-space-after
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       * ``Emit-space-after``: Emit a space after emitting any content text.
       
       *  ``No-space-after``: Do not emit a space after emitting any content text.

   * - Emit-space-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        *  ``Emit-space-before``: Emit a space before emitting any content text.
       
        * ``No-space-before``: Do not emit a space before emitting any content text.


Conditional-suffix
==================

Emits the contained text if the preceding ``Conditional-prefix`` within the current event was emitted.

.. _dtd-content-rule-5:

**DTD content rule**


::

   <TEXT>

.. _attributes-4:

**Attributes**


.. _section-4:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Emit-newline-after
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-after``: Emit a newline after emitting any content text.
       
       *  ``No-newline-after``: Do not emit a newline after emitting any content text.

   * - Emit-newline-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-before``: Emit a newline before emitting any content text.
       
       *  ``No-newline-before``: Do not emit a newline before emitting any content text.

   * - Emit-space-after
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-space-after``: Emit a space after emitting any content text.
       
       * ``No-space-after``: Do not emit a space after emitting any content text.

   * - Emit-space-before
     - Choice
     - Required. Since XML strips the first and last space in each element and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        * ``Emit-space-before``: Emit a space before emitting any content text.
       
        * ``No-space-before``: Do not emit a space before emitting any content text.


Define-event-list
=================

Event-lists and proc-lists, like macros, allow the user to define a series of processing directives that can be used in multiple locations within the SaveAs mapping table.

Event-lists govern the selection and processing of elements in the layout, metadata, logical structure, or stylesheet trees. Proc-lists govern the processing of attributes or properties associated with a given event or structural element. For more information, see `Define-proc-list <SaveAsXML_DirectivesRef.html#50409488_50945>`__.

.. _dtd-content-rule-6:

**DTD content rule**


::

   ( Comment | Event | Call-event-list)+

.. _attributes-5:

**Attributes**


.. _section-5:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Name
     - String
     - Required. The name to be applied to the event processing list being defined by this element. This is referenced in the ``<Walk-*>`` elements by the ``Use-event-list`` attribute. The name must be unique across all Define-event-list elements within a given mapping table file.


Define-proc-list
================

Proc-lists and event-lists, like macros, allow the user to define a series of processing directives that can be used in multiple locations within the SaveAs mapping table.

Proc-lists govern the processing of attributes and properties associated with a given event or structural element. Event-lists govern the selection and processing of elements in the layout, metadata, logical structure, or stylesheet trees. (See `Define-event-list <SaveAsXML_DirectivesRef.html#50409488_81516>`__.)

.. _dtd-content-rule-7:

**DTD content rule**


::

   (Comment | Proc-var | Walk-proplist | Call-proc-list)+

.. _attributes-6:

**Attributes**


.. _section-6:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Name
     - String
     - Required. The name to be applied to the variable processing list being defined by this element. This is referenced in the ``<Call-proc-list>`` element via its ``Name`` attribute. The name must be unique across all ``Define-proc-list`` elements within a given mapping table file.


Element-name
============

Outputs the Element-name, which is used in the XML output filter to generate the user-supplied element tag.

.. _dtd-content-rule-8:

**DTD content rule**


::

   Void?

.. _attributes-7:

**Attributes**


.. _section-7:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Node-type
     - Choice
     - Required. Specifies whether to get the structural element name to emit directly from the ``/S`` key of the StructElem (``Structure-user-label``) or from the result of processing that key via the RoleMap (``Structure-role``). One of: |
       
        * ``Structure-role``: Use the result of processing the StructElem's ``/S`` key via the RoleMap.
       
        * ``Structure-user-label``: Use the StructElem's ``/S`` key.


Emit-all-metadata
=================

Copies the full set of XAP metadata to the output file.

.. _dtd-content-rule-9:

**DTD content rule**


::

   Void?

.. _attributes-8:

**Attributes**


.. _section-8:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Emit-newline-after
     - Choice
     - Required. XML strips the first and last space and most newlines from the parsed result, so it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-after``: Emit a newline after emitting any content text.
       
       *  ``No-newline-after``: Do not emit a newline after emitting any content text.

   * - Emit-newline-before
     - Choice
     - Required. XML strips the first and last space in each element and most newlines from the parsed result, so it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-before``: Emit a newline before emitting any content text.
       
       *  ``No-newline-before``: Do not emit a newline before emitting any content text.

   * - Emit-space-after
     - Choice
     - Required. XML strips the first and last space in each element and most newlines from the parsed result, so it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-space-after``: Emit a space after emitting any content text.
       
       *  ``No-space-after``: Do not emit a space after emitting any content text.

   * - Emit-space-before
     - Choice
     - Required. XML strips the first and last space in each element and most newlines from the parsed result, so it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        * ``Emit-space-before``: Emit a space before emitting any content text.
       
        * ``No-space-before``: Do not emit a space before emitting any content text.


Emit-string
===========

Emits the text contained in this mapping table element.

.. _dtd-content-rule-10:

**DTD content rule**


::

   <TEXT>

.. _attributes-9:

**Attributes**


.. _section-9:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Emit-newline-after
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-after``: Emit a newline after emitting any content text.
       
       *  ``No-newline-after``: Do not emit a newline after emitting any content text.

   * - Emit-newline-before
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-newline-before``: Emit a newline before emitting any content text.
       
       *  ``No-newline-before``: Do not emit a newline before emitting any content text.

   * - Emit-space-after
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
       *  ``Emit-space-after``: Emit a space after emitting any content text.
       
       *  ``No-space-after``: Do not emit a space after emitting any content text.

   * - Emit-space-before
     - Choice
     - Required. Since XML strips the first and last space and most newlines from the parsed result, it is necessary to have this set of flags to control explicit insertion of these control codes. One of:
       
        * ``Emit-space-before``: Emit a space before emitting any content text.
       
        * ``No-space-before``: Do not emit a space before emitting any content text.


Evaluate-var
============

Does the same processing as ``Proc-var``, except it does not make the data value available to the other contained processing directives. For more information, see `Proc-var <SaveAsXML_DirectivesRef.html#50409488_21899>`__.

.. _dtd-content-rule-11:

**DTD content rule**


::

   (Comment | Conditional-delimeter | Emit-string | Conditional-prefix |
   Element-name | Proc-string | Proc-integer | Proc-fixed | Proc-length |
   Proc-pixels | Proc-enum | Proc-var | Walk-proplist | Call-proc-list |
   Proc-graphic-content | Proc-image-content | Proc-doc-text | Walk-children |
   Walk-metadata | Emit-all-metadata | Walk-cached-property-sets |
   Walk-structure | Walk-layout | Conditional-suffix )+

.. _attributes-10:

**Attributes**

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Compare
     - String
     - Optional. The value used to determine ``Diff-from-value``, ``Matches-value``, ``Less-than-value``, or ``More-than-value``. This should be the same type (Fixed, Int32, Atom, String) as the property.                    |

   * - Condition
     - Choice
     - Required. Indicates whether the directives that are children of the ``Proc-var`` directive are to be executed. One of:
       
        * ``Always``: Always execute the children of this ``Proc-var`` directive.
       
        * ``Has-value``: Execute the children of this ``Proc-var`` directive if a value is found on this node (either explicit or Default).
       
        * ``Diff-from-default-for-event``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by Default.
       
        * ``Diff-from-ancestor``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by searching the inheritance tree for any ancestor.
       
        * ``Diff-from-parent``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by examining the inheritance cache of the parent.
       
        * ``Diff-from-predecessor``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by examining the inheritance cache of the preceding peer.
       
        * ``Diff-from-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by ``Compare``. Can be used with any type.                                         |
       
        * ``Matches-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value matches that specified by ``Compare``. Can be used with any type.                                                |
       
        * ``Less-than-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is less than that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.                 |
       
        * ``Less-equal-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is less than or equal to that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.    |
       
        * ``More-than-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is greater than that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.              |
       
        * ``More-equal-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is greater than or equal to that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String. |

   * - Default
     - String
     - Optional. The value to be used if the property is not found on this element (or through inheritance). This should be the same type (Fixed, Int32, Atom, String) as the property.

   * - Inherit
     - Choice
     - Optional. Whether the property value can be inherited from a parent. One of:
       
        * ``Inheritable``: This property can be inherited.
       
        * ``Not-inherited``: This property cannot be inherited (Default).

   * - Owner
     - Choice
     - Required. The owner of the property dictionary. One of:
       
        * ``Metadata``: This is a pseudo-owner for entries in the document's metadata.
       
        * ``Structelem``: This is a pseudo-owner for properties specified directly in the StructElem's obj dictionary.
       
        * ``Layout``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Layout.
       
        * ``Link``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Link.
       
        * ``List``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by List.
       
        * ``Table``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Table.
       
        * ``Auto-span``: This is a pseudo-owner generated by the SaveAs processor for each span it synthesizes by consolidating Tj operators having common styling properties (font, size, color, etc.)
       
        * ``Inline-markup``: This is a pseudo-owner generated by the SaveAs processor when the following inline marking is encountered:
       
       
       
              /Span << ... >> BDC (abbrev.) Tj EMC

   * - Pdf-var
     - String
     - Required. The name of a property in a given property dictionary (see ``Owner``) to be processed or evaluated.                                                                                                               |

   * - Type
     - Choice
     - Required. The primary PDF datatype of the property (see ``Has-enum`` for a possible secondary datatype). One of:
       
        * ``Fixed``: Fixed-point number.
       
        * ``Int32``: A signed integer.
       
        * ``Atom``: A PDF key (/XYZ).
       
        * ``String``: A PDF string.
       
        * ``Color``: An RGB color (array of three Fixed values).
       
        * ``BBox``: A bounding box (array of four Fixed values).


Event
=====

Governs the processing of a node in the layout, logical-structure, metadata, or stylesheet trees. Specifies the processing that is to be performed on entering or exiting the named node.

.. _dtd-content-rule-12:

**DTD content rule**


::

   (Comment | Emit-string | Conditional-prefix | Element-name | Proc-var |
   Walk-proplist | Call-proc-list | Conditional-suffix | Proc-graphic-content |
   Proc-image-content | Proc-doc-text | Walk-children | Walk-metadata |
   Emit-all-metadata | Walk-cached-property-sets | Walk-structure | Walk-layout |
   Evaluate-var)+

.. _attributes-11:

**Attributes**


.. _section-11:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Event-class
     - Choice
     - Required. Identifies which transition into or out of the node is to be processed using this event description. One of:
       
        * ``Enter``: Node is being entered from either parent or peer.
       
        * ``Enter-from-parent``: Node is being entered from parent, but not from peer.
       
        * ``Enter-from-peer``: Node is being entered from peer, but not from parent.
       
        * ``Exit``: Node is being exited to either parent or to peer.
       
        * ``Exit-to-parent``: Node is being exited to parent, but not to peer.
       
        * ``Exit-to-peer``: Node is being exited to peer, but not to parent.
       
        * ``Begin-children``: Node is being exited to begin processing its children.
       
        * ``End-children``: Node is being re-entered after processing its children.

   * - Node-content
     - Choice
     - Required. One of:
       
        * ``Empty``: Node has no children or direct content.
       
        * ``Has-text-only``: Node has only text content (no other elements).
       
        * ``Has-kids``: Node has child elements (including possible text-only spans.
       
        * ``Graphic``: Node contains (vector) graphic data.
       
        * ``Image``: Node contains bitmap image data.
       
        * ``Other``: Node is something other than those listed above.

   * - Node-name
     - String
     - Required. Name of the element or role to match, in order to select this event descriptor for processing.

   * - Node-type
     - Choice
     - Required. The ``Node-name`` attribute is matched against either the ``/S`` key of the StructElem (``Structure-user-label``) or against the result of processing that key via the RoleMap (``Structure-role``). One of: |
       
        * ``Any``: Attempt to match on ``Structure-user-label`` then on ``Structure-role``. Also used for matching within metadata and stylesheet construction.                                                                  |
       
        * ``Structure-role``: Compare ``Node-name`` to the result of processing the StructElem's ``/S`` key via the RoleMap.
       
        * ``Structure-user-label``: Compare ``Node-name`` to the StructElem's ``/S`` key.


Proc-doc-text
=============

Emits the text contained in the current structural element.

.. _dtd-content-rule-13:

**DTD content rule**


::

   Void?

.. _attributes-12:

**Attributes**


.. _section-12:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - do-br-substitution
     - Choice
     - Required. One of:
       
        * ``do-br-substitution``: Emit a ``<BR>`` for every newline found in the doc text.
       
        * ``do-xml-br-substitution``: Emit a ``<br />`` for every newline found in the doc text.
       
        * ``no-substitution``: Disregard newlines in doc text.


Proc-enum
=========

If the data cached by the containing ``Proc-var`` directive is a string or an atom, searches for a match among the ``proc-enum`` choice elements that are children of this control element. If a match is found, issues the ``Value-out`` value of the matching ``Proc-enum-choice`` directive as a string.

.. _dtd-content-rule-14:

**DTD content rule**


::

   Proc-enum-choice+

Proc-enum-choice
================

Specifies the choice and output values for a ``Proc-enum`` directive.

.. _dtd-content-rule-15:

**DTD content rule**


::

   Void?

.. _attributes-13:

**Attributes**


.. _section-13:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Value-in
     - String
     - Required. This value is compared to the value cached by the containing ``proc-var`` directive.

   * - Value-out
     - String
     - Required. This value is emitted as a string if a match against ``Value-in`` is found.


Proc-fixed
==========

If the data cached by the containing ``Proc-var`` directive is a FixedPoint number, emits the text representation of the value. This value is scaled using the attributes of this directive as follows:

#. The original value is multiplied by the value of the ``Mul`` attribute.
#. The value of the ``Add`` attribute is added to the result of step 1.
#. The result of step 2 is divided by ``Div``.
#. The result of step 3 is converted to a string. ``Frac-len`` controls the number of digits to the right of the decimal point. ``Frac-dlm`` is the fraction-radix character to be issued if ``Frac-len`` is greater than 0.

``Proc-fixed``, ``Proc-length``, and ``Proc-pixels`` vary only in the default values for ``Mul``, ``Div``, and ``Add``.

.. _dtd-content-rule-16:

**DTD content rule**


::

   Void?

.. _attributes-14:

**Attributes**


.. _section-14:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Add
     - String
     - Optional. Default is 0.

   * - Div
     - String
     - Optional. Default is 1.

   * - Frac-dlm
     - String
     - Optional. Default is "."

   * - Frac-len
     - String
     - Optional. Default is 2.

   * - Mul
     - String
     - Optional. Default is 1.


Proc-graphic-content
====================

Processes the content of the current structural element as a vector graphic.

.. _dtd-content-rule-17:

**DTD content rule**


::

   Void?

Proc-hex
========

If the data cached by the containing ``Proc-var`` directive is an Int32, an Uns32, or a Fixed, emits the text representation of the integer portion of the value, after the scaling algorithm is applied. This value is scaled using the attributes of this directive as follows:

#. The original value is multiplied by the value of the ``Mul`` attribute.
#. The value of the ``Add`` attribute is added to the result of step 1.
#. The result of step 2 is divided by ``Div`` and the fraction is discarded.
#. The result of step 3 is converted to a string.

.. _dtd-content-rule-18:

**DTD content rule**


::

   Void?

.. _attributes-15:

**Attributes**


.. _section-15:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Add
     - String
     - Optional. Default is 0.

   * - Div
     - String
     - Optional. Default is 1.

   * - Mul
     - String
     - Optional. Default is 1.

   * - Num-digits
     - String
     - Optional. Default is 2.


Proc-image-content
==================

Processes the content of the current structural element as a bitmapped graphic.

.. _dtd-content-rule-19:

**DTD content rule**


::

   Void?

Proc-integer
============

If the data cached by the containing ``Proc-var`` directive is an Int32 or an Uns32, emits the text representation of the value. This value is scaled using the attributes of this directive as follows:

#. The original value is multiplied by the value of the ``Mul`` attribute.
#. The value of the ``Add`` attribute is added to the result of step 1.
#. The result of step 2 is divided by ``Div`` and the fraction is discarded.
#. The result of step 3 is converted to a string.

.. _dtd-content-rule-20:

**DTD content rule**


::

   Void?

.. _attributes-16:

**Attributes**


.. _section-16:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Add
     - String
     - Optional. Default is 0.

   * - Div
     - String
     - Optional. Default is 1.

   * - Mul
     - String
     - Optional. Default is 1.


Proc-length
===========

If the data cached by the containing ``Proc-var`` directive is a FixedPoint number, emits the text representation of the value. This value is scaled using the attributes of this directive as follows:

#. The original value is multiplied by the value of the ``Mul`` attribute.
#. The value of the ``Add`` attribute is added to the result of step 1.
#. The result of step 2 is divided by ``Div``.
#. The result of step 3 is converted to a string. ``Frac-len`` controls the number of digits to the right of the decimal point. ``Frac-dlm`` is the fraction-radix character to be issued if ``Frac-len`` is greater than 0.

``Proc-fixed``, ``Proc-length``, and ``Proc-pixels`` vary only in the default values for ``Mul``, ``Div``, and ``Add``.

.. _dtd-content-rule-21:

**DTD content rule**


::

   Void?

.. _attributes-17:

**Attributes**


.. _section-17:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Add
     - String
     - Optional. Default is 0.

   * - Div
     - String
     - Optional. Default is 72.

   * - Frac-dlm
     - String
     - Optional. Default is "." (decimal point).

   * - Frac-len
     - String
     - Optional. Default is 2.

   * - Mul
     - String
     - Optional. Default is 72.


Proc-pixels
===========

If the data cached by the containing ``Proc-var`` directive is a FixedPoint number, emits the text representation of the value. This value is scaled using the attributes of this directive:

#. The original value is multiplied by the value of the ``Mul`` attribute.
#. The value of the ``Add`` attribute is added to the result of step 1.
#. The result of step 2 is divided by ``Div``.
#. The result of step 3 is converted to a string. ``Frac-len`` controls the number of digits to the right of the decimal point. ``Frac-dlm`` is the fraction-radix character to be issued if ``Frac-len`` is greater than 0.

``Proc-fixed``, ``Proc-length``, and ``Proc-pixels`` vary only in the default values for ``Mul``, ``Div``, and ``Add``.

.. _dtd-content-rule-22:

**DTD content rule**


::

   Void?

.. _attributes-18:

**Attributes**


.. _section-18:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Add
     - String
     - Optional. Default is 36.

   * - Div
     - String
     - Optional. Default is 72.

   * - Frac-dlm
     - String
     - Optional. Default is "." (decimal point).

   * - Frac-len
     - String
     - Optional. Default is 0.

   * - Mul
     - String
     - Optional. Default is 96.


Proc-property
=============

Processes an arbitrary property. This is similar to ``proc-var``, except that it does not select or filter which properties are processed, but simply takes each property owned by the current owner in turn.

.. _dtd-content-rule-23:

**DTD content rule**


::

   (Comment | Conditional-delimeter | Emit-string | Property-name | Property-type)+

Proc-string
===========

If the data cached by the containing ``Proc-var`` directive is a string or an atom, emits the text content of the string or a text representation of the atom's name.

.. _dtd-content-rule-24:

**DTD content rule**


::

   Void?

Proc-var
========

Specifies the formatting and conversion of the named attribute or property (PDF-variable).

This directive also caches the data value and type of the value specified for use by various processing directives within this element.

.. _dtd-content-rule-25:

**DTD content rule**


::

   (Comment | Conditional-delimeter |Emit-string | Conditional-prefix |
   Element-name | Proc-string | Proc-integer | Proc-fixed | Proc-length |
   Proc-pixels | Proc-enum | Proc-doc-text | Proc-graphic-content |
   Proc-image-content | Conditional-suffix )+

.. _attributes-19:

**Attributes**


.. _section-19:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Compare
     - String
     - Optional. The value used to determine ``Diff-from-value``, ``Matches-value``, ``Less-than-value``, or ``More-than-value``. This should be the same type (Fixed, Int32, Atom, String) as the property.                    |

   * - Condition
     - Choice
     - Required. Indicates whether the directives that are children of the ``Proc-var`` directive are to be executed. One of:
       
        * ``Always``: Always execute the children of this ``Proc-var`` directive.
       
        * ``Has-value``: Execute the children of this ``Proc-var`` directive if a value is found on this node (either explicit or Default).
       
        * ``Diff-from-default-for-event``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by Default.
       
        * ``Diff-from-ancestor``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by searching the inheritance tree for any ancestor.
       
        * ``Diff-from-parent``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by examining the inheritance cache of the parent.
       
        * ``Diff-from-predecessor``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by examining the inheritance cache of the preceding peer.
       
        * ``Diff-from-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value differs from that specified by ``Compare``. Can be used with any type.                                         |
       
        * ``Matches-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value matches that specified by ``Compare``. Can be used with any type.                                                |
       
        * ``Less-than-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is less than that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.                 |
       
        * ``Less-equal-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is less than or equal to that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.    |
       
        * ``More-than-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is greater than that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String.              |
       
        * ``More-equal-value``: Execute the children of this ``Proc-var`` directive if a value is found and that value is greater than or equal to that specified by ``Compare``. Can only be used with: Fixed, Int32, Atom, String. |

   * - Default
     - String
     - Optional. The value to be used if the property is not found on this element (or through inheritance). This should be the same type (Fixed, Int32, Atom, String) as the property.

   * - Inherit
     - Choice
     - Optional. Whether the property value can be inherited from a parent. One of:
       
        * ``Inheritable``: This property can be inherited.
       
        * ``Not-inherited``: This property cannot be inherited (Default).

   * - Owner
     - Choice
     - Required. The owner of the property dictionary. One of:
       
        * ``Metadata``: This is a pseudo-owner for entries in the document's metadata.
       
        * ``Structelem``: This is a pseudo-owner for properties specified directly in the StructElem's obj dictionary.
       
        * ``Layout``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Layout.
       
        * ``Link``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Link.
       
        * ``List``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by List.
       
        * ``Table``: Properties in the StructElem's Attribute dictionary list within the dictionary owned by Table.
       
        * ``Auto-span``: This is a pseudo-owner generated by the SaveAs processor for each span it synthesizes by consolidating Tj operators having common styling properties (font, size, color, etc.).
       
        * ``Inline-markup``: This is a pseudo-owner generated by the SaveAs processor when the following inline marking is encountered:
       
       
       
              /Span << ... >> BDC (abbrev.) Tj EMC

   * - Pdf-var
     - String
     - Required. The name of a property in a given property dictionary (see Owner) to be processed or evaluated.

   * - Type
     - Choice
     - Required. The primary PDF datatype of the property (see ``Has-enum`` for a possible secondary datatype). One of:
       
        * ``Fixed``: Fixed-point number.
       
        * ``Int32``: A signed integer.
       
        * ``Atom``: A PDF key (/XYZ).
       
        * ``String``: A PDF string.
       
        * ``Color``: An RGB color (array of three Fixed values)
       
        * ``BBox``: A bounding box (array of four Fixed values)


Property-name
=============

Processes the name and key portion of an arbitrary property.

.. _dtd-content-rule-26:

**DTD content rule**


::

   Void?

Property-type
=============

Processes the data portion of an arbitrary property.

.. _dtd-content-rule-27:

**DTD content rule**


::

   (Comment | Conditional-delimeter | Emit-string | Proc-string | Proc-integer |
   Proc-fixed | Proc-length | Proc-pixels | Proc-enum | Proc-doc-text |
   Proc-graphic-content | Proc-image-content)+

.. _attributes-20:

**Attributes**


.. _section-20:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Type
     - Choice
     - Required—The primary PDF datatype of the property. One of:
       
        * ``Fixed``: Fixed-point number.
       
        * ``Int32``: A signed integer.
       
        * ``Atom``: A PDF key (/XYZ).
       
        * ``String``: A PDF string.
       
        * ``Color``: An RGB color (array of three Fixed values).
       
        * ``BBox``: A bounding box (array of four Fixed values).


Root
====

The root node of a mapping table. Its attributes specify the name of the filter to appear in the menu and information necessary to properly generate the output file name and type information.

.. _dtd-content-rule-28:

**DTD content rule**


::

   (Comment | Emit-string | Define-event-list | Define-proc-list |
   Walk-metadata | Emit-all-metadata | Walk-cached-property-sets |
   Walk-structure | Walk-layout)+

.. _attributes-21:

**Attributes**


.. _section-21:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Encode-out
     - Choice
     - Required. The encoding of the output file. One of:
       
        * ``Utf-8-out``: The file is encoded in UTF-8 (8-bit Unicode).
       
        * ``Utf-16-out``: The file is encoded in UTF-16 (16-bit Unicode).
       
        * ``Ucs-4-out``: The file is encoded in UCS-4 (32-bit Unicode).
       
        * ``Iso-latin-1-out``: The file is encoded as ISO-Latin-1. All Unicode values above 0x00FF are output as numeric character entities (&#xFFFF;).
       
        * ``Html-ascii-out``: The file is encoded as 7-bit ASCII. All Unicode values above 0x007F are output as numeric character entities (&#xFFFF;).

   * - File-format
     - Choice
     - Required. Internal unique name that describes the format of the output file. The following formats are provided:
       
       -  ``Html-3-02``
       -  ``Html-4-01-with-css-1-00``
       -  ``Xml-1-00``
       -  ``Plain Text``

   * - Mac-creator
     - String
     - Required. The file creator field for a Mac OS file.

   * - Mac-type
     - String
     - Required. The file type field for a Mac OS file.

   * - Menu-name
     - | String or | Identifier
     - Required. The text string describing the file format that appears in the Save As dialog box's pulldown menu. The following predefined identifiers, which provide localized menu name strings, can be used in place of a string:
       
       -  ``$IDS_HTML_3_2_MENU_NAME - localized string "HTML 3.2"``
       -  ``$IDS_HTML_4_01_CSS_1_0_MENU_NAME - localized string "HTML 4.01 with CSS 1.0"``
       -  ``$IDS_XML_1_0_MENU_NAME - localized string "XML 1.0"``
       -  ``$IDS_PLAIN_TEXT_MENU_NAME - localized string "Text (Plain)"``

   * - Win-suffix
     - String
     - Required. The three-letter file type suffix for the Windows environment. Also used on Mac OS files.


Void
====

This node is used to avoid the ``<empty/>`` syntax of XML and force the ``<name></name>`` syntax of SGML, which allows editing on any SGML editor as well as any XML editor.

Many elements have the content rule "Void?". However, the Void element should never be specified, thereby leaving the containing node empty.

.. _dtd-content-rule-29:

**DTD content rule**


::

   <EMPTY>

Walk-cached-property-sets
=========================

Directs the SaveAs processor to construct a stylesheet cache and walk the stylesheet data.

.. _dtd-content-rule-30:

**DTD content rule**


::

   Void?

.. _attributes-22:

**Attributes**


.. _section-22:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Use-event-list
     - String
     - Required. The name of an event processing list (as in ``<define-event-list>``) to be used to process the events generated by walking the stylesheet data (ClassMap and class information) of the document. |


Walk-children
=============

Directs the SaveAs processor to walk the kids list of the current structural element.

.. _dtd-content-rule-31:

**DTD content rule**


::

   Void?

.. _attributes-23:

**Attributes**


.. _section-23:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Use-event-list
     - String
     - Required. The name of an event processing list (see ``<define-event-list>``) to be used to process the events generated by walking the first-level children of the current structural element. |


Walk-layout
===========

This directive is not supported in this version of SaveAsXML.

Walk-metadata
=============

Directs the SaveAsXML processor to walk the ``DocInfo`` metadata portion of the PDF document.

.. _dtd-content-rule-32:

**DTD content rule**


::

   Void?

.. _attributes-24:

**Attributes**


.. _section-24:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Use-proc-list
     - String
     - Required. The name of an event processing list (as in ``<define-proc-list>``) to be used to process the attributes found by walking the metadata portion of the document. |


Walk-proplist
=============

Directs the SaveAs processor to walk the specified generic property list (property lists owned by XML, HTML-3.20, and HTML-4.01). This is used to process arbitrary, user-supplied attributes of the current structural element.

.. _dtd-content-rule-33:

**DTD content rule**


::

   (Comment | Conditional-delimeter | Emit-string | Proc-property)+

.. _attributes-25:

**Attributes**


.. _section-25:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Owner
     - Choice
     - Required. Selects the attribute list owner. One of:
       
       -  ``Xml``
       -  ``Html-3.20``
       -  ``Html-4.01``
       -  ``Css-1.00``
       -  ``Css-2.00``


Walk-structure
==============

Directs the SaveAsXML processor to walk the logical structure tree and associated content of the PDF document.

.. _dtd-content-rule-34:

DTD content rule


::

   Void?

.. _attributes-26:

**Attributes**


.. _section-26:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Name
     - Type
     - Description

   * - Use-event-list
     - String
     - Required. The name of an event processing list (as in ``<define-event-list>``) to be used to process the events generated by walking the structure tree of the document. |



