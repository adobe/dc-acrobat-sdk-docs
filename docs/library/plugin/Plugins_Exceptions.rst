******************************************************
Handling Exceptions
******************************************************

This chapter explains how to handle exceptions that are raised by Acrobat core API methods. Acrobat core API methods generally do not return error codes; instead, they raise exceptions when errors occur. Exceptions are handled by exception handlers. It is recommended that you create your own exception handlers to trap and handle exceptions.

Creating exception handlers
===========================

Exception handlers typically perform object cleanup (such as releasing memory) when an exception occurs. Your exception handler can either deal with the exception or pass it along to the next handler on the exception handler stack.

You use the ``DURING``, ``HANDLER``, and ``END_HANDLER`` macros to define exception handlers. Application logic that may raise an exception appears between the ``DURING`` and ``HANDLER`` macros. Application logic that handles exceptions appears between the ``HANDLER`` and ``END_HANDLER`` macros.

If the method raises an exception, the handler code is executed; otherwise, it is not executed. When an exception occurs, your handler can access the exception error code by using the ``ERRORCODE`` macro. The value returned by the ``ERRORCODE`` macro does not change until another exception is raised. (See the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.)

The following code example declares an error handler that is active during a call to the ``AVDocOpenFromFile`` method. If an exception occurs, an error message is displayed to the user. For information about opening a PDF document by using the ``AVDocOpenFromFile`` method, see `Opening PDF documents <Plugins_Documents.html#50618416_65430>`__.

#. Creating an exception handler

::

   DURING 
     AVDoc avd = AVDocOpenFromFile(asp, NULL, (char *)NULL);
   HANDLER 
     AVAlertNote("Error opening file");
   END_HANDLER

.. note::

   For code brevity, most of the code examples located in this guide do not include ``DURING``, ``HANDLER``, and ``END_HANDLER`` macros to handle exceptions. You should include these macros in your own custom code.

Returning a value from an exception handler
===========================================

To return a value from a ``DURING`` ``HANDLER`` block, do not use a return statement. Instead, use the ``E_RETURN(x)`` or ``E_RTRN_VOID`` macros. The ``E_RETURN(x)`` macro returns a value and the ``E_RTRN_VOID`` macro does not return a value (this is equivalent to a ``void`` function).

The ``E_RETURN(x)`` macro must not invoke a function that might raise an exception, because the macro pops an exception frame off the stack before evaluating the expression to return. If this evaluation raises an exception, it does not call your handler, but instead calls the next handler up the stack. For example, consider the following application logic:

::

    E_RETURN(myfn());

This is not recommended if there is any possibility that ``myfn`` could raise an exception. If you need to invoke a function, it is best to do it this way:

::

      result = myfn();

       E_RETURN(result);

Now, if ``myfn`` raises an exception, your handler will be executed.

Raising exceptions
==================

Although many Acrobat core API methods raise exceptions, some methods do return error codes or ``NULL`` if something goes wrong. Inside a ``DURING HANDLER`` block, if your plugin detects one of these cases, it can invoke the ``ASRaise`` method, which generates an exception. This has the effect of causing the ``HANDLER END_HANDLER`` code to execute, just as if the original method raised an exception.

You can also use the ``RERAISE`` macro when you do not want your exception handler to handle an exception, but want to pass the exception to the next exception handler on the stack.

.. note::

   Your plugin should use the ``ASRegisterErrorString`` method to define its own exceptions.

Exception handling scenarios
============================

This section discusses the following potential problems with exception handling:

-  Goto statements
-  Nested exception handlers in a single function
-  Register usage

Using goto statements
---------------------

It is recommended that you not use a ``goto`` within a ``DURING HANDLER`` block. Jumping outside a ``DURING HANDLER`` block disrupts the stack frame, as shown in the following example:

::

    DURING 
         goto error;
     HANDLER
     END_HANDLER
     error:

This action leads to unpredictable results because the top stack frame has not been removed. As a result, the frame is incorrect. Instead, use the ``ASRaise`` method and then use the ``goto`` statement within the ``HANDLER END_HANDLE`` block, as shown in the following example:

::

    DURING  ...
         ASRaise(myspecialerrorcode);
     HANDLER  
     if ERRORCODE == myspecialerrorcode 
         goto error;
     END_HANDLER
     error:

For information about the ``goto`` statement, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

Using nested exception handlers
-------------------------------

Avoid using nested exception handlers within a single function. The exception handling macros change the call stack, and nesting them can disrupt the stack. Your plugin can safely nest an exception handler if the nested handler is in another function called inside the ``DURING HANDLER`` block, as shown in the following example.

::

    DURING
    ...
         MyFunction();
    ...
     HANDLER
    ...
     END_HANDLER
    ...
         void MyFunction(void) 
    ...
     DURING
    ...
     HANDLER
    ...
     END_HANDLER
    ...
     }

If you insist on nesting exception handlers in a single function, do not return from the inner exception handler (either through a call to return in a handler or ``E_RETURN`` from body code). This action leaves the exception stack out of sync with the call stack. Any errors raised in body code surrounded by the outer exception handler will restore the incorrect calling environment and lead to unpredictable results, as shown in the following example.

::

    {
     DURING /* Places one frame on the exception stack */
     pdoc = AVDocGetPDDoc(avdoc);
         DURING /* Places a second frame on the stack */
             rootBm = PDDocGetBookmarkRot(pdDoc);
             if (!PDBookmarkIsValid(rootBm)){
             E_RTRN_VOID
             /*
             Returning here interferes with the exception stack
             because two frames have been placed on the stack
             and E_RTRN_VOID only clears one of them before
             returning
             */
     }
     pdAction = PDBookMarkGetAction(parentBm);
     HANDLER
             AVAlertNote("Bad AVDoc");
             return (1);
             /*
             Returning here interferes with the exception stack
             because there is still a frame on the stack from
             the outer DURING macro and it will not be cleared
             before the function returns
             */
     END_HANDLER
     HANDLER
         AVAlertNote("Bad PDDoc");
     END_HANDLER
     }

Using register variables
------------------------

The ``DURING`` and ``HANDLER`` macros use the standard C ``setjmp/longjmp`` mechanism. The ``DURING`` macro calls ``setjmp``. An exception results in a ``longjmp`` to the context that was saved by the most recent ``setjmp``. When a ``longjmp`` occurs, all registers, including those containing variables the compiler optimized into register variables, are restored to the values they held when the ``setjmp`` occurred.

As a result, the state of local variables that have been optimized into registers is unpredictable when the exception handler is invoked. To avoid this situation, declare all variables that are set in the main body of the code and used in the exception handler or beyond (if the handler lets execution continue) as volatile. This ensures that they are never optimized into register variables, but are always referenced from memory.

When using the ``volatile`` statement, place the keyword in the correct location, such as the following:

::

      volatile myStruct* p = 0;

The previous statement declares the instance of the structure to be volatile. The next statement declares the pointer itself to be volatile:

::

    myStruct* volatile p = 0;

In general, the second version is the one to use.
