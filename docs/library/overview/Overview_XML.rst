******************************************************
XML and the Acrobat SDK
******************************************************

The Adobe XML architecture offers enterprises a step-by-step migration from manual, paper-based workflows to streamlined, automated processes that accelerate the flow of business-critical information between employees, customers, and suppliers. This chapter summarizes the Acrobat DC XML support and features.

.. raw:: html

   <a name="56335"></a>

Adobe XML architecture
======================

The Adobe XML architecture leverages the capabilities of XML and PDF to support a variety of business applications, while offering connectivity to systems through a variety of industry-standard and Adobe technologies.

.. raw:: html

   <a name="68638"></a>

XML forms model
---------------

The Adobe XML forms model uses a Document Object Model (DOM) architecture to manage the components that comprise a form. These include the base template, the form itself, and the data contained within the form fields. In addition, all calculations, validations, and formatting are specified and managed within the DOM and XML processes. Static are supported by Acrobat DC. A static form presents a fixed set of text, graphics, and field areas at all times.

XML templates
-------------

JavaScript defines an object that supports interactive form architectures. In this context, a template is a named page within a PDF document that provides a convenient format to automatically generate and manipulate a large number of form fields. These pages contain visibility settings, and can be used to spawn new pages containing identical sets of form controls to those defined within the template.

Extensible Metadata Platform
----------------------------------

Adobe's Extensible Metadata Platform (XMP) is a labeling technology that allows you to embed metadata into the file itself. With XMP, desktop applications and back-end publishing systems use a common method for capturing, sharing, and leveraging metadata. For more information, see `Metadata, Accessibility, and PDF Layers <Overview_Metadata.html#62568>`__.

.. raw:: html

   <a name="40748"></a>

SOAP and web services
=====================

Acrobat DC supports SOAP 1.1 and 1.2 to enable PDF forms to communicate with web services. This makes it possible to include both SOAP header and body information, send binary data more efficiently, use document/literal encoding, and facilitate authenticated or encrypted communications. It also provides the ability to locate network services using DNS Service Discovery (DNS-SD). All of this enables the integration of PDF files into existing workflows by binding Adobe XML forms to schemas, databases, and web services. These workflows include the ability to share comments remotely or invoke web services through form field actions.

If the exact URL for a given service is not known, but it is available locally because it has been published using DNS Service Discovery, Acrobat DC provides JavaScript methods to locate the service on the network and bind to it for communications.

A SOAP-based collaboration server can be used to share comments remotely using a web-based comment repository. Through the DNS Service Discovery support, it is possible to enable dynamic discovery of collaboration servers, initiation workflows, and RSS feeds that can provide customized user interfaces, using XML, directly inside of Acrobat DC.

In addition, it is possible to deploy web-based JavaScript code that always maintain the most updated information and processes, and to connect to those scripts using form field actions that invoke web services.

For more information, see `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

.. raw:: html

   <a name="80142"></a>

Conversion of PDF documents to XML format
=========================================

Because XML representation is the basis for the exchange of information with web services and enterprise infrastructures, it is often useful to convert your PDF documents into XML format. It is a straightforward process to do this using JavaScript. For more information, see `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .

Alternatively, you can use the SaveAsXML plug-in, which extends the Save As Type choices in the Save As dialog box to allow a Tagged PDF document to be saved in a number of XML, HTML, or similar text-based formats. The plug-in uses mapping tables to control the conversion process for the SaveAsXML feature. For more information, see the `Acrobat Plugin Developer Guide <http://www.adobe.com/go/acrobatsdk_pluginguide>`__ .

.. raw:: html

   <a name="55869"></a>

XML-based information
=====================

JavaScript provides support for XML-based information generated within workflows. For more information, see `Acrobat JavaScript Developer Guide <http://www.adobe.com/go/acrobatsdk_jsdevguide>`__ .
