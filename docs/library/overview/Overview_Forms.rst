******************************************************
Forms and the Acrobat SDK
******************************************************

You can use the Acrobat SDK to extend the functionality of forms. Your form design can have dynamically changing features such as the current date, as well as convenience options such as automatic generation of e-mail messages. It can even have a dynamically changing appearance and layout that is responsive to user interactions.

Acroforms can be used to retrieve form data using JavaScript or using the Forms API with plug-ins and external applications. With Acrobat DC forms, you can author form fields and retrieve data from those form fields. For Acrobat Reader, the Forms plug-in does not allow form authoring, but allows users to fill in data and print Acrobat DC forms. The Acrobat Reader Forms plug-in also does not allow users to save data to the local hard disk. Both Acrobat DC and Acrobat Reader allow web designers to send data from the form back to a web server. For new forms development, use XML forms instead.

Workflows for forms
===================

There are three basic workflows for forms:

-  Forms are filled in on the screen and then printed out. They are then returned by traditional methods such as fax or postal mail.
-  Forms contain a Submit button that enables the sending of an email message with an attached data file that contains only the form data.
-  Forms submit form data to a web server much like forms on the Internet. The user must be online to submit the information.

.. raw:: html

   <a name="27351"></a>

About XML forms
===============

For XML forms, properties and methods available only from JavaScript allow you to access specific objects. You cannot access these objects from a plug-in or external application.

**Form population** — You can populate forms from a database or using a standards-based network protocol such as SOAP. XML forms are particularly well suited for populating forms from an external database. For more information, see `SOAP and web services <Overview_XML.html#40748>`__.

**Web-ready forms** — XML forms can be used in workflows that require the exchange of information over the web. You can create forms that run in web browsers, and can submit and retrieve information between the client and server by making a Submit button available in the form. The button can perform tasks similar to those of HTML scripting macros.

**Data collection** — You can save your form data in pure XML format or save your forms in the XML Data Package format (XDP). The XDP format allow you to package units of PDF content within a surrounding XML container, and is thus considered an XML-based companion to PDF. The advantage of this format is that XML parsers provide direct access to the XML form-data subassembly of the PDF document.

Using JavaScript, form data can be saved in either FDF or XFDF format in a separate file that can subsequently be used in the next step within a workflow. This approach minimizes the file size to just the amount needed to store your data, thus decreasing network traffic and processing time for the next step in the workflow.

Once you've collected PDF form data in FDF or XML format from multiple users, you can organize the form data into a comma-delimited spreadsheet file (CSV). After exporting the form data to a CSV file, you can work with the data in a spreadsheet application, such as Microsoft Excel. You can also save form data as a tab-delimited file. Tab-delimited files can be imported where required.

Data from various attachments can also be imported into an XML document and submitted to a server for processing.

.. raw:: html

   <a name="63359"></a>

About Acrobat forms
===================

For Acrobat DC forms, a rich set of APIs allows you to create and manipulate form fields, and to retrieve form data using JavaScript, a plug-in, or an external application. Though you can manipulate form fields and form data from a plug-in, it is much quicker to develop Acrobat DC forms using JavaScript. Using the Acrobat SDK, you can perform the following tasks:

-  Create Adobe PDF forms from scratch or from a template
-  Add or remove form fields
-  Set form field properties
-  Make forms web-ready
-  Extract and export form data
-  Make forms accessible

You can extend the functionality of Acrobat DC forms with JavaScript. For example, you can use JavaScript to do the following tasks:

-  Automate formatting, calculations, and data validation
-  Develop customized actions assigned to user events
-  Interact with databases and web services

Forms API
---------

The Forms plug-in for Acrobat DC allows plug-in developers to author Acrobat DC form fields.

For Acrobat Reader, the Forms plug-in does not allow form authoring, but allows users to fill in data and print Acrobat DC forms. In general, the Acrobat Reader Forms plug-in does not allow users to save data to the local hard disk. However, if the PDF document has additional usage rights, then it may be able to save the document or perform other functions. For more information, see `Rights-Enabled PDF Documents and Security <Overview_UsageRights.html#88629>`__.

Both Acrobat DC and Acrobat Reader allow web designers to send data from the form back to a web server.

OLE automation
--------------

The Acrobat DC Forms plug-in works as an automation server on Windows. There is no equivalent support on Mac OS. OLE automation is particularly useful for creating custom forms from an external application. Methods and properties are provided that allow you to programmatically associate actions and JavaScript with form fields. You can also add document-level JavaScript. For more information, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/pdflibrary>`__ .
