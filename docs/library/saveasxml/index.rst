******************************************************
Acrobat and PDFL SDK: Extending the SaveAsXML Plugin
******************************************************

This document describes a sample mapping table and its directives, how SaveAsXML interacts with the mapping tables, and how to edit mapping tables.

When the SaveAsXML plug-in registers itself with Acrobat DC, it inspects the set of XML files in the ``MappingTables`` folder to determine the number of conversion services that are available.

The ``MappingTables`` folder must be inside the ``SaveAsXML`` folder, which is at the same level as ``SaveAsXML.api``. Files in the ``MappingTables`` folder are the only ones that are inspected as potential conversion services supported by the plug-in. This folder must not contain any files with the ``.xml`` extension that are not mapping tables.

If the registration process finds the Root element and its menu-name attribute, which may be a string or a predefined identifier, it adds the menu-name to the list of file format choices available in the Save As dialog box. The menu-name must be unique, or the user may be confused by similarly identified entries among the Save As dialog box's file formats.

When a user selects an applicable file format in the Save As dialog box, the dialog box handler activates the SaveAsXML plug-in. The plug-in reads the associated mapping table and converts it to a binary in-memory format, which it uses to control the processing of the current tagged PDF document.

Sample mapping table
====================

The following sample mapping table, which is simplified and incomplete, demonstrates the basic operations of SaveAsXML processing. The sample is followed by a detailed analysis of the directives.

For more complete examples, see the mapping tables distributed with SaveAsXML. Directives that are currently supported are used in one or more of the distributed tables. For a reference of directives and their attributes, see the following chapter, `Mapping Table Elements Reference <SaveAsXML_DirectivesRef.html#50409488_74509>`__.

::

   <Root File-format = "Xml-1-00" Menu-name = "Sample Mapping Table"
         Mac-creator = "MSIE" Mac-type = "TEXT" Win-suffix = "xml"
         Encode-out = "Utf-8-out">
     <Emit-string ... >&lt;XML-Doc&gt;</Emit-string>
     <Walk-structure Use-event-list = "Block-events"></Walk-structure>
     <Emit-string ...>&lt;/XML-Doc&gt;</Emit-string>
     <Define-event-list Name = "Block-events">
       <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
               Node-name = "Div" Alternate-name = "-none-"
               Node-content = "Has-kids" Event-class = "Enter">
         <Emit-string ...>&lt;Div</Emit-string>
         <Call-proc-list Name = "Block-attributes"></Call-proc-list>
         <Emit-string ...>&gt;</Emit-string>
         <Walk-children Use-event-list = "Inline-events"></Walk-children>
       </Event>
         <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
                 Node-name = "Div" Alternate-name = "-none-"
                 Node-content = "Has-kids" Event-class = "Exit">
         <Emit-string ...>&lt;/Div&gt;</Emit-string>
       </Event>
       <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
               Node-name = "Div" Alternate-name = "-none-"
               Node-content = "Empty" Event-class = "Enter">
         <Emit-string ...>&lt;Div</Emit-string>
         <Call-proc-list Name = "Block-attributes"></Call-proc-list>
         <Emit-string ...>/&gt;</Emit-string>
       </Event>
     </Define-event-list>
     <Define-event-list Name = "Inline-events">
       <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
               Node-name = "Span" Alternate-name = "-none-"
               Node-content = "Has-kids" Event-class = "Enter">
         <Emit-string ...>&lt;Span</Emit-string>
         <Call-proc-list Name = "Span-attributes"></Call-proc-list>
         <Emit-string ...>&gt;</Emit-string>
         <Walk-children Use-event-list = "Inline-events"></Walk-children>
       </Event>
       <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
               Node-name = "Span" Alternate-name = "-none-"
               Node-content = "Has-kids" Event-class = "Exit">
         <Emit-string ...>&lt;/Span&gt;</Emit-string>
       </Event>
       <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
               Node-name = "Span" Alternate-name = "-none-"
               Node-content = "Empty" Event-class = "Enter">
         <Emit-string ...>&lt;Span</Emit-string>
         <Call-proc-list Name = "Span-attributes"></Call-proc-list>
         <Emit-string ...>/&gt;</Emit-string>
       </Event>
       <Event  Inf-type = "Pds-mc" Name-type = "Any" Node-name = "-none-"
               Alternate-name = "-none-" Node-content = "Has-text-only"
               Event-class = "Enter">
         <Proc-doc-text do-br-substitution = "do-br-substitution"></Proc-doc-text>
       </Event>
     </Define-event-list>
     <Define-proc-list Name = "Block-attributes">
       <Proc-var  Pdf-var = "Alt" Owner = "Structelem" Type = "String"
                 Has-enum = "No-enum" Inherit = "Not-inherited" Default = "-none-"
                 Condition = "Has-value">
         <Emit-string ...>alt="</Emit-string>
         <Proc-string></Proc-string>
         <Emit-string ...>"</Emit-string>
       </Proc-var>
     </Define-proc-list>
     <Define-proc-list Name = "Span-attributes">
       <Proc-var  Pdf-var = "ActualText" Owner = "Structelem" Type = "String"
                 Has-enum = "No-enum" Inherit = "Not-inherited" Default = "-none-"
                 Condition = "Always">
         <Emit-string ...>actual-text="</Emit-string>
         <Proc-string></Proc-string>
         <Emit-string ...>"</Emit-string>
       </Proc-var>
     </Define-proc-list>
   </Root>

Root node
---------

Processing begins with the root node of the mapping table and generally proceeds as a pre-order hierarchical traversal of the control nodes.

::

     <Root File-format = "Xml-1-00" Menu-name = "Sample Mapping Table"
           Mac-creator = "MSIE" Mac-type = "TEXT" Win-suffix = "xml"
           Encode-out = "Utf-8-out">

In processing the ``Root`` node of the mapping table, the SaveAsXML processor opens the output file using the path and name of the PDF document to be saved, replacing the file suffix with that specified by the ``Win-suffix`` attribute in this node. In Mac OS, the ``Mac-creator`` and ``Mac-type`` are also used to open the output file. The remaining attributes in the ``Root`` node are available to the SaveAsXML processor and are used to control or optimize the conversion.

Emit-string
-----------

::

     <Emit-string ... >&lt;XML-Doc&gt;</Emit-string>

The ``Emit-string`` directive causes its content to be translated to the output encoding specified in the ``Encode-out`` attribute of the ``Root`` node, then emits the converted data to the output file. In this sample, it issues the start tag for the document: ``<XML-Doc>``. For clarity, the additional attributes of the ``Emit-string`` directive have been omitted in the sample.

Here, as in any mapping table directive, the following code is used to represent special characters:

-  ``&lt;`` represents the less-than (<) character.
-  ``&gt;`` represents the greater-than (>) character.
-  ``&amp;`` represents the ampersand (&) character.

Walk-structure
--------------

::

     <Walk-structure Use-event-list = "Block-events"></Walk-structure>

The ``Walk-structure`` directive causes the SaveAsXML processor to walk the first-level structural elements (Kids array of the StructRoot) of the tagged PDF document to be saved. For more information, see `Walk-children <SaveAsXML_DeveloperInfo.html#50409487_34099>`__.

Structural elements are traversed in the order found in the logical structure tree. An event is generated on entering and on exiting each structural element. The event-list specified by the ``Use-event-list`` attribute of the ``Walk-structure`` directive is searched for a matching ``Event`` directive. For more information, see `Define-event-list <SaveAsXML_DeveloperInfo.html#50409487_51177>`__.

If a match is found, the directives within that ``Event`` directive are processed (which may include the recursive processing of children of the current structural element via a ``Walk-children`` directive). Searching of the event-list is terminated and the next event is generated.

If no match is found, or when processing is completed on the matching ``Event`` directive, the next event is generated.

Processing continues until all first-level structural elements (Kids array of the StructRoot) have been traversed, then the directive following the ``Walk-structure`` directive is processed. In this sample, it is:

::

     <Emit-string Emit-space-after = "Emit-space-after" ...>
     &#lt;/XML-Doc&gt;
     </Emit-string>

This ``Emit-string`` directive issues the end tag: ``</XML-Doc>``. Because newlines and spaces are often modified or stripped by various XML tools, the ``Emit-space-after`` attribute, and the other related attributes of the ``Emit-string`` directive, guarantees the retention of these characters.

Define-event-list
-----------------

::

     <Define-event-list Name = "Block-events">

The ``Define-event-list`` directive is similar to a macro or subroutine definition in most programming languages. It encapsulates and names a set of event directives. The directives are activated by a ``Walk-structure``, ``Walk-children``, or ``Call-event-list`` directive specifying the name of the event list in the ``Use-event-list`` attribute.

Event
~~~~~

::

     <Event  Inf-type = "Struct-elem" Name-type = "Structure-role"
             Node-name = "Div" Alternate-name = "-none-"
             Node-content = "Has-kids" Event-class = "Enter">

The ``Event`` directive includes a set of attributes that are used to determine if the directives within it are to be processed. The directive in the sample is activated by entering (either from a parent element or from the prior peer element) a structural element (``Inf-type = "Struct-elem"``), where the element is role-mapped (``Name-type = "Structure-role"``) to ``"Div"`` and the element has children.

When an ``Event`` directive is activated, the directives within it (before its ``</Event>`` tag) are processed. In this sample, the directive is:

::

     <Emit-string ...>&lt;Div</Emit-string>

This issues the ``"Div"`` portion of the output element's start-tag.

Call-proc-list
~~~~~~~~~~~~~~

::

     <Call-proc-list Name = "Block-attributes"></Call-proc-list>

The ``Call-proc-list`` directive processes the properties associated with this structural element, using the processing list specified by the ``Name`` property on the ``Call-proc-list`` directive.

Although the event-list processing stops on the first match, the proc-list processing continues for every directive in the selected processing list.

The directive:

::

     <Emit-string ...>&gt;</Emit-string>

issues the closing ``">"`` on the output element's start-tag.

Walk-children
~~~~~~~~~~~~~

::

     <Walk-children Use-event-list = "Inline-events"></Walk-children>

The ``Walk-children`` directive is functionally identical to the ``Walk-structure`` directive, except that it walks the first level children of the current structural element.

The ``</Event>`` tag indicates the end of the processing for this event. Remaining entries in this event-list follow a similar model.

The next ``Event`` included in this event-list handles events that are generated when exiting ``Div`` elements that have children. This generates the close tag on the output element.

::

     <Event Inf-type = "Struct-elem" Name-type = "Structure-role"
                   Node-name = "Div" Alternate-name = "-none-"
                   Node-content = "Has-kids" Event-class = "Exit">
           <Emit-string ...>&lt;/Div&gt;</Emit-string>
     </Event>

The final ``Event`` directive included in this event-list handles events that are generated on entering an element which has no children. It does not and should not contain a ``Walk-children`` directive.

::

       <Event Inf-type = "Struct-elem" Name-type = "Structure-role"
                     Node-name = "Div" Alternate-name = "-none-"
                     Node-content = "Empty" Event-class = "Enter">
               <Emit-string ...>&lt;Div</Emit-string>
               <Call-proc-list Name = "Block-attributes"></Call-proc-list>
               <Emit-string ...>/&gt;</Emit-string>
       </Event>
     </Define-event-list>

The ``</Define-event-list>`` tag ends the list of entries in the ``Block-events`` event-list.

The following event-list handles inline elements and is similar to the one above.

::

     <Define-event-list Name = "Inline-events">
       <Event Inf-type = "Struct-elem" Name-type = "Structure-role"
                     Node-name = "Span" Alternate-name = "-none-"
                     Node-content = "Has-kids" Event-class = "Enter">
               <Emit-string ...>&lt;Span</Emit-string>
               <Call-proc-list Name = "Span-attributes"></Call-proc-list>
               <Emit-string ...>&gt;</Emit-string>
               <Walk-children Use-event-list = "Inline-events">
               </Walk-children>
       </Event>
       <Event Inf-type = "Struct-elem" Name-type = "Structure-role"
                     Node-name = "Span" Alternate-name = "-none-"
                     Node-content = "Has-kids" Event-class = "Exit">
               <Emit-string ...>&lt;/Span&gt;</Emit-string>
       </Event>
       <Event Inf-type = "Struct-elem" Name-type = "Structure-role"
                     Node-name = "Span" Alternate-name = "-none-"
                     Node-content = "Empty" Event-class = "Enter">
               <Emit-string ...>&lt;Span</Emit-string>
               <Call-proc-list Name = "Span-attributes"></Call-proc-list>
               <Emit-string ...>/&gt;</Emit-string>
       </Event>

For event-lists that process structural elements that contain text or graphics, an ``Event`` entry similar to the following is required. The code in the SaveAsXML plug-in that traverses the logical structure tree also reports entering and exiting of the marked content containers (the wrappers around the low-level text and graphic content in the PDF page's marking stream). The labels on these nodes are hidden in the Tags view in Acrobat DC. (The corresponding ``Event`` for a ``Pds-mc`` element where the content is ``Image`` is more complex. See the mapping tables distributed with SaveAsXML for complete examples.)

::

     <Event Inf-type = "Pds-mc" Name-type = "Any" Node-name = "-none-"
                   Alternate-name = "-none-" Node-content = "Has-text-only"
                   Event-class = "Enter">

This ``Event`` directive processes the low-level marked content containers (``Inf-type = "Pds-mc"``) that actually contain the text (``Node-content = "Has-text-only"``). A corresponding exit directive is not required.

Proc-doc-text
~~~~~~~~~~~~~

::

     <Proc-doc-text do-br-substitution = "do-br-substitution"></Proc-doc-text>

The ``Proc-doc-text`` directive converts the text from the active marked content container in the PDF page's marking stream to the output encoding specified in the ``Encode-out`` attribute of the ``Root`` node and then emits the converted data to the output file. The ``do-br-substitution`` attribute controls whether the LF character is to be converted to a ``<BR/>`` tag in the output stream, converted to a space, or discarded.

::

   </Event>
   </Define-event-list>

Define-proc-list
----------------

::

     <Define-proc-list Name = "Block-attributes">

The ``Define-proc-list`` directive is also a macro or subroutine similar to the ``Define-event-list`` directive. Whereas the event-list describes how to process transition events in traversing the logical structure tree, the proc-list describes how to process the properties (attributes) of a structural element.

Proc-var
~~~~~~~~

::

     <Proc-var Pdf-var = "Alt" Owner = "Structelem" Type = "String"
                      Has-enum = "No-enum" Inherit = "Not-inherited" 
                      Default = "-none-" Condition = "Has-value">

The ``Proc-var`` directive searches an internal cache of the properties on the current structural element for the value of the property specified by its ``Pdf-var`` and ``Owner`` attributes. If inheritance is enabled, it also searches the cached properties of all ancestors of the current structural element for an applicable value. Once it determines if there is (or is not) a value, it uses the remaining attributes to determine if the value should be processed. If it determines it should be processed, then the directives contained in the ``Proc-var`` directive are processed.

Proc-string
~~~~~~~~~~~

::

     <Emit-string ...>alt="</Emit-string>
     <Proc-string></Proc-string>

The ``Proc-string`` directive causes the string selected by the containing ``Proc-var`` directive to be translated to the output encoding specified in the ``Encode-out`` attribute of the ``Root`` node, and then emits the converted data to the output file.

::

                   <Emit-string ...>"</Emit-string>
         </Proc-var>
     </Define-proc-list>

The ``</Define-proc-list>`` tag indicates the end of this proc-list.

The following proc-list has a similar organization for ``Block-attributes``.

::

       <Define-proc-list Name = "Span-attributes">
           <Proc-var Pdf-var = "ActualText" Owner = "Structelem" 
                             Type = "String" Has-enum = "No-enum" 
                             Inherit = "Not-inherited" Default = "-none-" 
                             Condition = "Always">
                     <Emit-string ...>actual-text="</Emit-string>
                     <Proc-string></Proc-string>
                     <Emit-string ...>"</Emit-string>
           </Proc-var>
       </Define-proc-list>
     
     </Root>

The ``</Root>`` tag is the last line of a mapping table file. It indicated the end of the ``Root`` directive.

Editing the mapping tables
==========================

You can edit the ``.xml`` versions of the mapping tables in any XML or SGML editor.


