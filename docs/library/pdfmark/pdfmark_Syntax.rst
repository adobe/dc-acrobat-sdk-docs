pdfmark Reference

******************************************************
Introduction
******************************************************

This chapter describes the pdfmark operator, its syntax, and its use by Distiller and other PostScript interpreters. It also describes how built-in and user-defined PDF objects are referred to and defined.

The pdfmark operator is a PostScript-language extension that describes features that are present in PDF, but not in standard PostScript. The pdfmark operator has been available beginning with Distiller 3.0, and, as an extensible operator, has evolved with each release of the PDF specification. This document describes pdfmark as it applies to the Acrobat 9.0 and later suite of products.

.. note::

   While the pdfmark operator provides for greater extensibility, it is not intended to define every feature that is present in PDF but not in standard PostScript.

Those using pdfmark typically do so in one of the following ways:

-  By manual creation or modification of PostScript code
-  By filtering or post-processing existing PostScript code
-  By an application that directly generates pdfmark constructs as part of its PostScript code generation

Syntax of pdfmark operators
===========================

The pdfmark operator requires the following syntax:

::

   [ any
   1
    ... any
   n
    feature pdfmark

The syntax has the following characteristics:

-  It begins with a mark object (either ``mark`` or ``[`` ).
-  It is followed by zero or more PostScript objects called the arguments of the pdfmark operator.
-  It concludes with a name object that indicates the particular feature that the pdfmark operator is to apply.

Any instance of the pdfmark operator, the mark, its arguments, and the feature name in a PostScript program is referred to as a pdfmark in this document.

Frequently, the arguments for a given feature are sequences of key-value pairs. Many of the pdfmark keys correspond directly to PDF dictionary keys. However, some keys may be new, entirely different, or abbreviated forms of keys as found in PDF dictionaries. For example, the PDF ``Subtype`` key may become the pdfmark key ``S`` , the ``Dest`` key may become ``D`` , and the ``File`` key may become ``F`` , and so forth. See the `PDF Reference <https://www.adobe.com/go/pdfreference>`__ for more information on PDF keys.

The pdfmark operator does not change the operand nor the dictionary stacks, but may alter the execution, graphics state, or clipping stacks, depending on the particular pdfmark feature.

Usage with standard PostScript interpreters
===========================================

Support for the pdfmark operator is implemented in Distiller, but is not available in many other PostScript products. Therefore, if a PostScript program containing pdfmark constructs is to be used by other such products, they must be able to respond appropriately when they encounter the pdfmark operator.

One reasonable response is to ignore pdfmark constructs. This can be accomplished by defining a pdfmark procedure that discards the pdfmark code for interpreters in which the pdfmark operator does not exist. One way to do this is to place the following code in the prolog of a PostScript program.

#. Ignoring pdfmark constructs

::

    %%BeginProlog
     /pdfmark where  
   % Is pdfmark already available?
    
         { pop }  
   % Yes: do nothing (use that definition)
    
         {  
   % No: define pdfmark as follows:
    
         /globaldict where  
   % globaldict is preferred because
    
             { pop globaldict }  
   % globaldict is always visible; else,
    
             { userdict }  
   % use userdict otherwise.
    
         ifelse
         /pdfmark /cleartomark load put
         }  
   % Define pdfmark to remove all objects
    
     ifelse  
   % up to and including the mark object.
    
     %%EndProlog

This code example works on PostScript Level 1 and higher interpreters. To simplify the presentation of the following examples, PostScript Level 2 or higher is assumed.

Here is a similar example.

#. Ignoring pdfmark if not defined in the PostScript interpreter

::

   %%BeginProlog
   /pdfmark where
     { pop globaldict /?pdfmark /exec load put }  
   % pdfmark is built-in: exec code.

     {
     globaldict
         begin
         /?pdfmark /pop load def  
   % pdfmark is absent: ignore code.

         /pdfmark /cleartomark load def
         end
     }
   ifelse
   %%EndProlog

Most pdfmark features are atomic. That is, the pdfmark construct stands alone and, if removed, does not affect surrounding PostScript code. A few pdfmark features, on the other hand, are modal. A modal feature is one that, once completed, leaves the interpreter in a different state. Most modal features are paired: one feature shifts to a new state and a corresponding feature shifts back to the previous state. For example, consider:

::

   [ any
   1
    ... any
   n
    /BeginFeature pdfmark
     
   additional PostScript code
    
    [ any
   1
    ... any
   m
    /EndFeature pdfmark

If you want to make the additional PostScript code conditional on the availability of the pdfmark operator, then the above definition of pdfmark needs to be improved.

::

    %%BeginProlog
     /pdfmark where
         { pop globaldict /?pdfmark /exec load put }  
   % pdfmark is built-in: exec code.
    
         {
         globaldict
             begin
             /?pdfmark /pop load def  
   % pdfmark is absent: ignore code.
    
             /pdfmark /cleartomark load def
             end
         }
     ifelse
     %%EndProlog

With this, the handling of modal code can be performed as:

::

   [ 
   any

   1

    ... any

   n
    /BeginFeature pdfmark
     { 
   additional PostScript code
    } ?pdfmark
    [ 
   any

   1

    ... any

   m
    /EndFeature pdfmark

While the above solution is sufficient in most circumstances, you might want to define a pdfmark procedure to handle individual features. The following example demonstrates a simple framework for handling individual pdfmark features:

#. Handling individual pdfmark features

::

    %%BeginProlog
     currentglobal currentpacking   
   % Because the pdfmark definition below uses
    
     true setglobal true setpacking   
   % composite objects, we need to make sure
    
         
   % the procedure is defined in global VM mode.
    
     /pdfmark where
         { pop globaldict /?pdfmark /exec load put}
         {
         globaldict
             begin
             /?pdfmark /pop load def
             /pdfmark
                 {
                     { counttomark pop }   
   % Check to see that a mark is on the stack.
    
                 stopped
                     { /pdfmark errordict /unmatchedmark get exec stop }
                 if        
   % Raise an error if no mark is found.
    
                 dup type /nametype ne   
   % The topmost argument must be the feature.
    
                     { /pdfmark errordict /typecheck get exec stop }
                 if        
   % The feature must be a name object.
    
                     {
                     dup /FEATURE
   1
    eq
                         { (Interpreting FEATURE 1n) print cleartomark exit }
                     if        
   % Replace the above code with actual code
    
                     dup /
   FEATURE

   2
    eq
                         { (Interpreting FEATURE 2n) print cleartomark exit }
                     if        
   % Replace the above code with actual code
    
                     (Feature not supported: ) print == cleartomark exit
         
   % Replace the above code with actual code
    
                     }
                 loop
                 } bind def
             end
         }
     ifelse
     setpacking setglobal  
   % Restore to original modes.
    
     %%EndProlog

In the preceding code, the name objects ``FEATURE`` *n* would be replaced with actual pdfmark feature names and the code that follows the ``dup /FEATURE`` *n* ``eq`` would be replaced with code that consumes all of the arguments and the mark object.

In the examples that follow in this document, the ``?pdfmark`` definition is assumed to be as shown above. To work correctly with non-Distiller PostScript interpreters, any production implementation of these or additional definitions must take into account factors such as PostScript level, VM allocation modes, packing modes, and others.

Syntax for private keys
=======================

Some features can accept arbitrary key–value pairs, providing a way of placing private data into PDF files. All keys must be name objects. Unless otherwise stated, values must be Boolean, number, string, name, array, or dictionary objects. Array elements must be Boolean, number, string, or name objects.

When specifying arbitrary key–value pairs, key names must contain a specific prefix to ensure that they do not collide with key names used by other developers. Contact Adobe to obtain a prefix to be used by your company or organization.

.. note::

   The private key names in this document use the Adobe prefix ``ADBE`` .

Named objects
=============

This section describes how built-in and user-defined PDF objects are referred to and defined.

Built-in named objects
----------------------

A PDF file contains built-in objects such as the Catalog and Page dictionaries. To refer to one of these dictionaries in a pdfmark construct, a syntax called a named object is used:

::

    {objname}

The objname is one of:

* *Catalog* — The PDF file's Catalog dictionary
* *DocInfo* — The PDF file's Info dictionary
* *Page* *N* — The dictionary for page N (where N is a positive integer)
* *ThisPage* — The dictionary for the current page being processed in the PostScript stream
* *PrevPage* — The dictionary for the page before the current page
* *NextPage* — The dictionary for the page after the current page

.. note::

   The objname used here is not a standard PostScript name object. It does not start with a slash "``/`` " but instead is surrounded with braces "``{}`` ". It otherwise follows the syntax of PostScript name objects. The objname serves as a reference name to identify particular PDF objects and has no relationship to any identifier created in the resultant PDF file.

User-defined named objects
--------------------------

In addition to built-in named objects, user-defined named objects can be created. The syntax to specify a user-defined named object is the following:

::

   [ /_objdef {
   objname
   } /type 
   objtype 
   /OBJ pdfmark

The name ``/_objdef`` indicates that a named object is to be defined and is followed by the {objname}. The object type, objtype, specifies the PDF type of the named object that is to be created and must be one of the following name objects:

* */array* — Creates an array.
* */dict* — Creates a dictionary.
* */stream* — Creates a stream.

.. note::

   The feature ``/OBJ`` is used only to declare a particular objname and its associated type. Other pdfmark features are required to associate this objname with actual content and to have some existing PDF object refer to it.

Here is an example in which the named object "galaxy" is declared to be a dictionary type:

::

    [ /_objdef {galaxy} /type /dict /OBJ pdfmark

A few pdfmark features allow for the definition of a named object as part of the argument list. In these cases, the modified syntax is as follows:

::

    [ /_objdef {
   objname
   } 
   any

   1

    ... any

   n

    feature
    pdfmark 

In this case, the objname is not only created, but also refers to the PDF object created as a result of the pdfmark feature. The ``type`` entry is not used because the feature implicitly provides this information. The following features support this syntax:

* *ANN* — Annotation
* *BP* — Encapsulated graphic
* *DEST* — Named destination
* *NI* — Encapsulated image
* *StPNE* — Structure element

Named objects created in any of the preceding ways can be used in the definition of other named objects. That is, an {objname} can be used as an argument in a pdfmark construct as the value of a key–value pair or as an element in an array. In these cases, Distiller places an indirect reference to the object with which {objname} is associated in the PDF file.

.. note::

   A pdfmark construct can make an object reference to {objname} before defining the object {objname}. That is, the {objname} can be in the argument list of a pdfmark construct before it is defined. If {objname} is never defined, it is left as an unresolved reference in the cross-reference table. Hence, any consumer of such a PDF file must be able to handle unresolved references.

Namespaces
----------

When using named objects in PostScript programs, it is possible that the same name might be used more than once. To avoid conflicts in name object definitions, Distiller provides a means for specifying the scope in which named objects have well-defined meaning.

In addition to the standard five PostScript stacks, Distiller maintains a stack of namespaces. The namespace stack is similar to the PostScript dictionary stack, except that only the top-most namespace name objects are visible. The namespace stack is also similar to the graphics state stack, except that no ``currentgstate`` analog is provided. For more information on PostScript stacks, see the *PostScript Language Reference* .

A namespace contains:

-  Names for user-defined named objects (see `User-defined named objects <pdfmark_Syntax.html#50454537_72745>`__)
-  Names for stored implicit parent stacks (see `StStore <pdfmark_Logical.html#50454553_60367>`__)
-  Names for images (see `Named images (NI) <pdfmark_Basic.html#50454556_14682>`__)

The appropriate use of namespaces can help ensure that there are no named-object conflicts when you use pdfmark constructs from various sources to create a PostScript file. A common example is the handling of Encapsulated PostScript files (see `EPS considerations <pdfmark_Logical.html#50454553_89401>`__).

.. note::

   The built-in named objects are managed separately from the namespace stack and are always visible.

The following pdfmark features are available for manipulating namespaces:

-  ``NamespacePush`` causes a new, empty namespace to be pushed onto the namespace stack and causes all other namespaces to be hidden. The syntax for pushing a namespace is as follows:

::

        [ /NamespacePush pdfmark

-  ``NamespacePop`` pops the topmost namespace from the stack. Once a namespace has been popped, it cannot be accessed again. The next lower namespace on the stack becomes the current namespace.

The syntax for popping a namespace is as follows:

::

        [ /NamespacePop pdfmark

A warning is issued by Distiller if ``NamespacePop`` is encountered when the namespace stack is empty.

::

        %%[ Warning: /NamespacePop pdfmark ignored: No matching NamespacePush ]%%

.. note::

   There are no pdfmark features to save or restore namespaces.

Adding content to named objects
-------------------------------

Once a named object has been declared, content can be added to the PDF object that it refers to. There are several pdfmark features to accomplish this for each of the types of named objects:

* `Arrays <pdfmark_Syntax.html#50454537_34588>`__
* `Dictionaries <pdfmark_Syntax.html#50454537_41622>`__
* `Streams <pdfmark_Syntax.html#50454537_54618>`__

Arrays
~~~~~~

There are several methods for adding content to arrays that are named objects. The most basic of these is the ``PUT`` feature, using this syntax:

::

    [   {
   arrayname
   } 
   index value
    /PUT pdfmark

The ``PUT`` feature inserts the value argument at the location index. Indices start at 0, and the array grows automatically to hold the largest index specified. Unspecified entries are created as NULL objects. For example:

::

     [ /_objdef {MoonInfo} /type /array /OBJ pdfmark
     [ {MoonInfo} 0 (Earth to Moon) /PUT pdfmark
     [ {MoonInfo} 1 238855 /PUT pdfmark
     [ {MoonInfo} 2 /miles /PUT pdfmark

The above code creates an array object and populates it with objects of various types. At this point, the named object cannot be reached because there are no entries in the PDF file's cross-reference table or file trailer that lead to it.

Adding array objects as above can become tedious. When adding objects to contiguous array index positions, the pdfmark feature ``PUTINTERVAL`` can simplify this task. The syntax for this feature is as follows:

::

    [ {
   arrayname
   } 
   index
    [
   value

   1
    ... value
   n 
   ] /PUTINTERVAL pdfmark

The operation of this feature is the same as in PostScript: value *1* is placed in arrayname *index* , value *2* is placed in arrayname *index+1* , and so forth. The array is resized if necessary to hold the objects added. The previous example can be simplified to:

::

    [ /_objdef {MoonInfo} /type /array /OBJ pdfmark
    [ {MoonInfo} 0 [(Earth to Moon) 238855 /miles] /PUTINTERVAL pdfmark

One additional convenience for adding objects to an array is available: the ``APPEND`` feature. This feature adds one additional entry immediately after the end of the array. Its syntax is as follows:

::

   [ {
   arrayname
   } 
   value 
   /APPEND pdfmark

Dictionaries
~~~~~~~~~~~~

The ``PUT`` feature can also be used to add dictionary content. The named object can be either a built-in name, such as ``{Catalog}`` or ``{Page37}`` , or a user-defined object name.

For dictionary named objects, the syntax of the ``PUT`` feature is as follows:

::

   [   {
   dictname
   } <<
   key

   1
    
   value

   1
    ... 
   key

   n
    
   value

   n
    >> /PUT pdfmark

For dictionary named objects, ``PUT`` adds the key–value pairs provided as arguments. Continuing the previous example:

::

   [ {Catalog} << /TheMoon {MoonInfo} >> /PUT pdfmark

This adds a key–value pair to the PDF Catalog dictionary. The inserted key is ``/TheMoon`` and the value is an indirect object. To illustrate this, the resultant PDF file might have the following content:

::

    trailer
     << … /Root 9 0 R … >>
     …
     9 0 obj << … /Type /Catalog … /TheMoon 3 0 R … >>
     endobj
     3 0 obj [(Earth to Moon)238855/miles]
     endobj

The named object ``MoonInfo`` does not appear in the resultant PDF file, but the object it referred to, ``3 0 obj`` in this case, does.

Streams
~~~~~~~

For stream named objects, the syntax can take several forms:

::

   [   {
   streamname
   } 
   string
    /PUT pdfmark

      [   {
   streamname
   } 
   file
    /PUT pdfmark
    [   {
   streamname
   } <<
   key

   1
    
   value

   1
    ... 
   key

   n
    
   value

   n
    >> /PUT pdfmark

A stream object consists of a sequence of bytes, its character data, and an associated dictionary. When the stream named object is created, the character data is empty. The source of stream data can come from an explicit string or can be read from a PostScript file object (a file or filter), in which case reading proceeds until the end of file is reached.

In addition to the character data, a stream has an associated PDF dictionary. Some dictionary entries such as ``Length`` are created automatically. Key–value pairs that do not conflict with the keys common to PDF stream dictionaries can be added to this dictionary. The resultant PDF object associated with the stream named object is always compressed using a lossless method that can be specified in Distiller's Adobe PDF Settings dialog box.

The ``CLOSE`` feature closes a stream object created by pdfmark and has the syntax:

::

   [   {
   streamname
   } /CLOSE pdfmark

The named stream object is closed and written to the PDF file. The {streamname} is still valid and may be referenced by other objects, but it can no longer be written to. When Distiller completes writing a PDF file, any open streams are closed and written automatically.

For example:

::

     [   /_objdef {MoonNotes} /type /stream /OBJ pdfmark
     [   {MoonNotes} (Hipparchus around 129 BC calculated the distance to the Moon.n)
         /PUT pdfmark
     [   {MoonNotes} (The Moon was first touched by Armstrong on July 20, 1969.n)
         /PUT pdfmark
     [   {MoonNotes} << /Author (Steve Amerige) /Company (Adobe) >> /PUT pdfmark
     [   {Catalog} << /MoonNotes {MoonNotes} >> /PUT pdfmark
     [   {MoonNotes} /CLOSE pdfmark

