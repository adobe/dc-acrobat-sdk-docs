.. raw:: html

   <a name="38527"></a>

*********************************
Snippet Runner Cookbook
*********************************

The SnippetRunner architecture consists of these major components:

-  A back-end server that provides the basic functionality, which includes a parameter input mechanism, debug support, and exception handling. For the Acrobat SDK, the back-end server is the SnippetRunnerServer Acrobat plug-in. For the PDF Library, it is the SnippetRunner application.
-  The SnippetRunner Common Interface, which acts as a client to the back-end server and provides a unified cross-platform user interface to use and extend SnippetRunner functionality.