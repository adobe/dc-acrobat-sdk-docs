******************************************************
Acrobat JavaScript API Reference
******************************************************

This document is a complete reference to the Acrobat extensions to JavaScript, its objects, methods, and properties. It is organized alphabetically by object name.

The Acrobat extensions to core JavaScript date back to Adobe Exchange 3.01. JavaScript functionality was added to this version by means of the "Acrobat Forms Author Plug-in 3.5 Update". Initially, JavaScript version 1.2 was used, as the table below shows. In Acrobat 5.0, there was a major effort to extend core JavaScript, then version 1.5, to include much of the functionality of the application and its plug-ins. The most recent version of Acrobat now uses JavaScript 1.7.


================== ==== === === === === === === ====
Acrobat version    3.01 4.0 5.0 6.0 7.0 8.0 9.0 10.0
JavaScript version 1.2  1.2 1.5 1.5 1.5 1.6 1.7 1.8
================== ==== === === === === === === ====

When developing a JavaScript solution, you must have a minimum Acrobat (or Adobe Reader) version in mind. The choice of target application determines, by the table above, the version of JavaScript you should use.

Most JavaScript API are documented for all versions of Acrobat and Adobe Reader, while others are only defined in later versions. Additionally, some APIs are restricted to Acrobat Pro and some cannot be used by Adobe Reader, while others can be used in Adobe Reader only when the document has the appropriate Reader Extension Rights. Again, for a JavaScript solution, all these factors must be considered.

For documentation on core JavaScript, the reader is directed to the Mozilla Developer Center, http://developer.mozilla.org/en/docs/JavaScript .
