******************************************************
SOAP and Web Services
******************************************************

Acrobat 7.0 and later provides support for the SOAP 1.1 and 1.2 standards in order to enable PDF forms to communicate with web services. This support has made it possible to include both SOAP header and body information, send binary data more efficiently, use document/literal encoding, and facilitate authenticated or encrypted communications. In addition, it provides the ability to locate network services using DNS Service Discovery. All of this makes it possible to integrate PDF files into existing workflows by binding XML forms to schemas, databases, and web services. These workflows include the ability to share comments remotely or invoke web services through form field actions.

.. note::

   Acrobat's SOAP implementation cannot handle faults that follow the SOAP 1.2 specification. Acrobat will not trigger an error when it receives a SOAP 1.2 response containing a failure.

.. note::

   Beginning with version 8, the *SOAP* object is deprecated, though support will continue. Use the ``Net.SOAP`` when developing any new web services. See the documentation of the ``Net`` object in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for details.

.. raw:: html

   <a name="62945"></a>

Using SOAP and web services
===========================

JavaScript for Acrobat provides a ``SOAP`` object that encapsulates the support for web services and service discovery. Through the usage of this object, you can extend and customize your workflows by engaging in XML-based communication with remote servers.

The ``SOAP`` object has a ``wireDump`` property that sends all XML requests and responses to the JavaScript Console for debugging purposes. In addition, the ``SOAP`` object provides the methods described in the following table.

SOAP object

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - connect
     - Obtains a WSDL proxy object used to invoke a web service.

   * - queryServices
     - Locates network services using DNS Service Discovery.

   * - resolveService
     - Binds a service name to a network address and port.

   * - request
     - The principal method used to invoke a web service.

   * - response
     - A callback method used in asynchronous web method calls.

   * - streamDecode
     - Decodes a Base64 or Hex stream object.

   * - streamEncode
     - Applies Base64 or Hex encoding to a stream object.

   * - streamFromString
     - Converts a string to a stream object.

   * - stringFromStream
     - Converts a stream object to a string.

SOAP and web services topics
------------------------------------------------

-  `Using a WSDL proxy to invoke a web service <JS_Dev_SOAPWS.html#33881>`__
-  `Synchronous and asynchronous information exchange <JS_Dev_SOAPWS.html#87576>`__
-  `Using document/literal encoding <JS_Dev_SOAPWS.html#64119>`__
-  `Exchanging file attachments and binary data <JS_Dev_SOAPWS.html#65159>`__
-  `Converting between string and readstream information <JS_Dev_SOAPWS.html#27755>`__
-  `Accessing SOAP version information <JS_Dev_SOAPWS.html#85422>`__
-  `Accessing SOAP header information <JS_Dev_SOAPWS.html#69867>`__
-  `Authentication <JS_Dev_SOAPWS.html#73593>`__
-  `Error handling <JS_Dev_SOAPWS.html#63210>`__

.. _section-1:

.. raw:: html

   <a name="33881"></a>

Using a WSDL proxy to invoke a web service
------------------------------------------

When connecting to a web service, your JavaScript code may use a WSDL proxy object to generate a SOAP envelope. The envelope contains a request for the server to run a web method on behalf of the client. To obtain the WSDL proxy object, invoke the ``SOAP`` object's ``connect`` method, which accepts a single parameter containing the HTTP or HTTPS URL of the WSDL document.

The returned proxy object contains the web methods available in the web service described by the WSDL document. If the web service uses SOAP/RPC encoding, the parameters in the proxy object's methods will match the order specified in the WSDL document. If the web service uses document/literal encoding, the methods will accept a single parameter describing the request message.

In the example shown below, a connection to a web service will be established, and its RPC-encoded web methods will be invoked. Assume that ``myURL`` contains the address of the WSDL document:

::

      // Obtain the WSDL proxy object:
      var myProxy = SOAP.connect(myURL);
      
      // Invoke the echoString web service, which requires a string parameter:
      var testString = "This is a test string.";
      var result = myProxy.echoString(testString);
      
      // Display the response in the console:
      console.println("Result is " + result);
      
      // Invoke the echoInteger web service, which requires an integer parameter:
      // Since JavaScript does not support XSD-compliant integer values, 
      // we will create an integer object compliant with the XSD standard:
      var myIntegerObject = {
          soapType: "xsd:int",
          soapValue: "10"
      };
      var result = myProxy.echoInteger(myIntegerObject);
      
      // Display the response in the console:
      console.println("Result is " + result);

Note that each call to a web method generates a SOAP envelope that is delivered to the web service, and that the return value is extracted from the corresponding envelope returned by the web service. Also, since XML relies on text, there is no problem sending a string to the web service. In the case of integers, however, it is necessary to create an XSD-compliant object to represent the integer value. JavaScript for Acrobat does support some of the standard data types specified in the XSD. These are shown in the following table.

XSD-compliant data types supported in JavaScript

.. _section-2:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - JavaScript type
     - Equivalent XSD-compliant type

   * - String
     - xsd:string

   * - Number
     - xsd:float

   * - Date
     - xsd:dateTime

   * - Boolean
     - xsd:boolean

   * - ReadStream
     - SOAP-ENC:base64

   * - Array
     - SOAP-ENC:Array

.. raw:: html

   <a name="87576"></a>

Synchronous and asynchronous information exchange
-------------------------------------------------

The ``SOAP`` object ``request`` method may be used to establish either synchronous or asynchronous communication with a web service, and provides extensive support for SOAP header information, firewall support, the type of encoding used, namespace qualified names, compressed or uncompressed attachments, the SOAP protocol version to be used, authentication schemes, response style, and exception handling.

The ``request`` method accepts the parameters shown in the following table.

.. _section-3:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Parameter
     - Description

   * - cURL
     - URL for SOAP HTTP endpoint.

   * - oRequest
     - Object containing RPC information.

   * - oAsync
     - Object used for asynchronous method invocation.

   * - cAction
     - SOAPAction header used by firewalls and servers to filter requests.

   * - bEncoded
     - Indicates whether SOAP encoding is used.

   * - cNamespace
     - Message schema namespace when SOAP encoding is not used.

   * - oReqHeader
     - SOAP header to be included with request.

   * - oRespHeader
     - SOAP header to be included with response.

   * - cVersion
     - SOAP protocol version to be used (1.1 or 1.2).

   * - oAuthenticate
     - Authentication scheme.

   * - cResponseStyle
     - The type and structure of the response information (JS, XML, Message).

   * - cRequestStyle
     - Indicates how oRequest is interpreted.

   * - cContentType
     - Specifies the HTTP content-type header.

Establishing a synchronous connection
------------------------------------------------

The ``SOAP`` object ``request`` method may be used to establish a synchronous connection with a web service. To establish the connection and invoke the web methods, it is necessary to provide the ``cURL``, ``oRequest``, and ``cAction`` parameters. The example below demonstrates how to invoke the same web services used in the previous example.

Similar to the parameter used in the ``connect`` method, the ``cURL`` parameter contains the URL for the WSDL document. For the purposes of our example, assume that ``myURL`` represents the WSDL document location.

The ``oRequest`` parameter is a fully qualified object literal specifying both the web method name and its parameters, in which the namespace is separated from the method name by a colon. It may also contain the following properties:

* ``soapType``: the SOAP type used for the value
* ``soapValue``: the SOAP value used when generating the message
* ``soapName``: the element name used when generating the SOAP message
* ``soapAttributes``: an object containing the XML attributes in the request node
* ``soapQName``: the namespace-qualified name of the request node
* ``soapAttachment``: determines whether ``soapValue`` is encoded as an attachment according to the SwA/MTOM specification. In this case, ``soapValue`` will be a stream.

Assume that the namespace is http://www.example.com/methods, the method name is ``echoString``, and it accepts a string parameter called ``inputString``. The following code represents the ``oRequest`` parameter:

::

      var echoStringRequest = {
          "http://www.example.com/methods:echoString {
              inputString: "This is a test."
          }
      };

The ``cAction`` parameter contains header information described by the WSDL document that is used by firewalls to filter SOAP requests. In our example, we will supply the location of the WSDL document:

::

      var mySOAPAction = "http://www.example.com/methods";

We may now invoke the ``echoString`` web method:

::

      var response = SOAP.request ({
          cURL: myURL,
          oRequest: echoStringRequest,
          cAction: mySOAPAction
      });

In the case of synchronous requests such as this one, the value returned by the ``request`` method (``response`` in this example) is an object containing the result of the web method, which will be one of the JavaScript types corresponding to XSD types. The default format for the response value is an object describing the SOAP body (or header) of the returned message.

.. note::

   In the case of base64 or hex encoding of binary information, the type returned will be a ``readStream`` object.

We may now obtain the returned value by using syntax that corresponds to the SOAP body sent back by the web method:

::

      var responseString = "http://www.example.com/methods:echoStringResponse";
      var result = response[responseString]["return"];
      
      // Display the response in the console:
      console.println("Result is " + result);

Similarly, we can invoke the ``echoInteger`` method. To do this, we will use the same value for the ``cURL`` and ``cAction`` parameters, and develop an ``oRequest`` parameter like the one we used for the ``echoString`` method. In this case, however, we must supply an XSD-compliant object to represent the integer value:

::

      var myIntegerObject = {
          soapType: "xsd:int",
          soapValue: "10"
      };
      
      var echoIntegerRequest = {
          "http://www.example.com/methods:echoInteger {
              inputInteger: myIntegerObject
          }
      };

Now we may invoke the ``echoInteger`` web method and display its results:

::

      var response = SOAP.request ({
          cURL: myURL,
          oRequest: echoIntegerRequest,
          cAction: mySOAPAction
      });
      
      var responseString = "http://www.example.com/methods:echoIntegerResponse";
      var result = response[responseString]["return"];
      
      // Display the response in the console:
      console.println("Result is " + result);

Asynchronous web service calls
----------------------------------------

The ``SOAP`` object ``request`` method may be used in conjunction with the ``response`` method to establish asynchronous communication with a web service. In this case, the ``request`` method calls a method on the notification object, and does not return a value.

Asynchronous communication is made possible by assigning a value to the ``request`` method's ``aSync`` parameter, which is an object literal that must contain a function called ``response`` that accepts two parameters: ``oResult`` (the result object) and ``cURI`` (the URI of the requested HTTP endpoint).

In the example below, the ``aSync`` parameter named ``mySync`` contains an attribute called ``isDone``, which is used to monitor the status of the web service call, and an attribute called ``val`` which will contain the result of the web service call. When the ``response`` function is called by the web service, it sets ``isDone`` to ``true`` indicating that the asynchronous call has been completed:

::

      // Create the aSync parameter:
      var mySync = {
          isDone: false,
          val: null,
      
          // Generates the result of the web method:
          result: function(cMethod) 
          {
              this.isDone = false;
              var name = "http://www.example.com/methods/:" + cMethod + "Response";
      
              if (typeof this.val[name] == "undefined") 
                  return null;
              else
                  return this.val[name]["return"];
          },
      
          // The method called by the web service after completion:
          response: function(oResult, cURI) 
          {
              this.val = oResult;
              this.isDone = true;
          },
      
          // While the web service is not done, do something else:
          wait: function()
          {
              while (!this.isDone) doSomethingElse();
          }
      };
   
      // Invoke the web service:
      SOAP.request({
          cURL: myURL,
          oRequest: echoIntegerRequest,
          oAsync: mySync,
          cAction: mySOAPAction
      });
      
      
      // The response callback function could contain the following code:
      
      // Handle the asynchronous response:
      var result = mySync.result("echoInteger");
      
      // Display the response in the console:
      console.println("Result is " + result);

.. raw:: html

   <a name="64119"></a>

Using document/literal encoding
-------------------------------

You can use document/literal encoding in your SOAP messages by assigning values to the following parameters of the ``request`` method:

* ``bEncoded``: Assign a value of ``false`` to this parameter.

* ``cNamespace``: Specify a namespace for the message schema.

| *cResponseStyle*. Assign ``SOAPMessageStyle.JS``, ``SOAPMessageStyle.XML``, or
| ``SOAPMessageStyle.Message`` value to this parameter.

Once this is done, fill the ``oRequest`` parameter with an object literal containing the data. An example is given below:

::

      // Set up two integer values to be added in a web method call:
      var aInt = {soapType: "xsd:int", soapValue: "10"};
      var bInt = {soapType: "xsd:int", soapValue: "4"};
      
      // Set up the document literal:
      var req = {};
      req["Add"] = {a: aInt, b: bInt};
      
      // Invoke the web service:
      var response = SOAP.request({
          cURL: myURL,
          oRequest: req,
          cAction: mySOAPAction,
          bEncoded: false,
          cNamespace: myNamespace,
          cResponseStyle: SOAPMessageStyle.Message
      });
      // Display the response to the console:
      var value = response[0].soapValue[0].soapValue;
      console.println("ADD(10 + 4) = " + value);

.. raw:: html

   <a name="65159"></a>

Exchanging file attachments and binary data
-------------------------------------------

As you learned earlier, the ``oRequest`` parameter provides alternative options for sending binary-encoded data. This may be useful for sending information such as serialized object data or embedded images. You can embed binary information in text-based format in the SOAP envelope by using base64 encoding, or take advantage of the Soap With Attachments (SwA) standard or the Message Transmission Optimization Mechanism (MTOM) to send the binary data in a more efficient format. Both SwA and MTOM can significantly reduce network transmission time, file size, and XML parsing time.

SwA can be used by setting the ``oRequest`` parameter ``soapAttachment`` value to ``true``, as shown in the example below. Assume ``myStream`` is a ``readStream`` object containing binary data:

::

      // Use the SwA standard:
      var SwARequest = {
          "http://www.example.com/methods:echoAttachment": {
              dh:
              {
                  soapAttachment: true,
                  soapValue: myStream
              }
          }
      };
      
      var response = SOAP.request ({
          cURL: myURL,
          oRequest: SwARequest
      });
      
      var responseString =               "http://www.example.com/methods:echoAttachmentResponse";
      var result = response[responseString]["return"];

MTOM is used by additionally setting the ``request`` method's ``bEncoded`` parameter to ``false`` and the ``cNamespace`` parameter to an appropriate value. This is illustrated in the following code, which creates an ``oRequest`` object:

::

      // Use the MTOM standard:
      var MTOMRequest = {
          "echoAttachmentDL": {
              dh:
              {
                  inclusion:
                  {
                      soapAttachment: true,
                      soapValue: myStream
                  }
              }
          }
      };
      
      var response = SOAP.request({
          cURL: myURL,
          oRequest: MTOMRequest,
          bEncoded: false,
          cNamespace: myNamespace
      });

.. raw:: html

   <a name="27755"></a>

Converting between string and readstream information
----------------------------------------------------

The ``SOAP`` object ``streamFromString`` and ``stringFromStream`` methods are useful for converting between formats. The ``streamFromString`` method is useful for submitting data in a web service call, and the ``stringFromStream`` method is useful for examining the contents of a response returned by a web service call. An example is shown below:

::

      // Create a ReadStream object from an XML string:
      var myStream = streamFromString("<mom name = 'Mary'></mom>");
      
      // Place the information in an attachment:
      this.setDataObjectContents("org.xml", myStream);
      
      // Convert the ReadStream object back to a string and display in console:
      console.println(stringFromStream(myStream));

.. raw:: html

   <a name="85422"></a>

Accessing SOAP version information
----------------------------------

Acrobat 7.0 and later provides improved support for SOAP Version 1.1 and support for Version 1.2. To encode the message using a specific version, assign one of the following values to the ``request`` method's ``cVersion`` parameter: ``SOAPVersion.version_1_1`` (SOAP Version 1.1) or ``SOAPVersion.version_1_2`` (SOAP Version 1.2). Its usage is shown in the following example:

::

      var response = SOAP.request ({
          cURL: myURL,
          oRequest: myRequest,
          cVersion: SOAPVersion.version_1_2
      });

.. raw:: html

   <a name="69867"></a>

Accessing SOAP header information
---------------------------------

You can send SOAP header information to the web service using the ``request`` method's ``oReqHeader`` parameter, and access the returned header information using the ``oRespHeader`` parameter. The ``oReqHeader`` is identical to the ``oRequest`` object, with the addition of two attributes:

* ``soapActor``: the SOAP actor that should interpret the header

* ``soapMustUnderstand``: determines whether the SOAP actor must understand the header contents

Their usage is shown in the following example:

::

      // Set up the namespace to be used:
      var myNamespace = "http://www.example.com/methods/:";
      
      // Create the oReqHeader parameter:
      var sendHeader = {};
      sendHeader[myNamespace + "testSession"] = {
          soapType: "xsd:string",
          soapValue: "Header Test String"
      };
      
      // Create the intially empty oRespHeader parameter:
      var responseHeader = {};
      responseHeader[myNamespace + "echoHeader"] = {};
      
      // Exchange header information with the web service:
      var response = SOAP.request({
          cURL: myURL,
          oRequest: {},
          cAction: "http://www.example.com/methods",
          oReqHeader: sendHeader,
          oRespHeader: responseHeader
      });

.. raw:: html

   <a name="73593"></a>

Authentication
--------------

You can use the ``request`` method's ``oAuthenticate`` parameter to specify how to handle HTTP authentication or provide credentials used in Web Service Security (WS-Security). Normally, if authentication is required, an interface will handle HTTP authentication challenges for BASIC and DIGEST authentication using the SOAP header, thus making it possible to engage in encrypted or authenticated communication with the web service. This parameter helps to automate the authentication process.

The ``oAuthenticate`` parameter contains two properties:

* ``Username``: A string containing the username

* ``Password``: A string containing the authentication credential

Its usage is shown in the following example:

::

      // Create the oAuthenticate object:
      var myAuthentication = {
          Username: "myUsername",
          Password: "myPassword"
      };
      
      // Invoke the web service using the username and password:
      var response = SOAP.request ({
          cURL: myURL,
          oRequest: echoStringRequest,
          cAction: mySOAPAction
          oAuthenticate: myAuthentication
      });

.. raw:: html

   <a name="63210"></a>

Error handling

The ``SOAP`` object provides extensive error handling capabilities within its methods. In addition to the standard JavaScript for Acrobat exceptions, the ``SOAP`` object also provides ``SOAPError`` and ``NetworkError`` exceptions.

A ``SOAPError`` exception is thrown when the SOAP endpoint returns a SOAPFault. The ``SOAPError`` exception object will include information about the SOAP Fault code, the SOAP Actor, and the details associated with the fault. The ``SOAP`` object's ``connect`` and ``request`` methods support this exception type.

A ``NetworkError`` exception is thrown when there is a problem with the underlying HTTP transport layer or in obtaining a network connection. The ``NetworkError`` exception object will contain a status code indicating the nature of the problem. The ``SOAP`` object's ``connect``, ``request``, and ``response`` methods support this exception type.

.. raw:: html

   <a name="92835"></a>

DNS service discovery
=====================

Suppose the exact URL for a given service is not known, but that it is available locally because it has been published using *DNS Service Discovery* (DNS-SD). You can use the ``SOAP`` object ``queryServices`` and ``resolveService`` methods to locate the service on the network and bind to it for communications.

The ``queryServices`` method can locate services that have been registered using Multicast DNS (mDNS) for location on a local network link, or through unicast DNS for location within an enterprise. The method performs an asynchronous search, and the resultant service names can be subsequently bound to a network location or URL through the ``SOAP`` object ``resolveService`` method.

The ``queryServices`` method accepts the following parameters:

* ``cType``: The DNS SRV service name (such as "http" or "ftp")

* ``oAsync``: A notification object used when services are located or removed (implements ``addServices`` and ``removeServices`` methods). The notification methods accept a parameter containing the following properties:

* ``name``: the Unicode display name of the service

* ``domain``: the DNS domain for the service

* ``type``: the DNS SRV service name (identical to ``cType``)

* ``aDomains``: An array of domains for the query. The valid domains are ``ServiceDiscovery.local`` (searches the local networking link using mDNS) and ``ServiceDiscovery.DNS`` (searches the default DNS domain using unicast DNS).

An example of its usage is shown below:

::

      // Create the oAsync notification object:
      var myNotifications = {
          // This method is called whenever a service is added:
          addServices: function(services)
          {
              for (var i=0; i<services.length; i++) {
                  var str = "ADD: ";
                  str += services[i].name;
                  str += " in domain ";
                  str += services[i].domain;
                  console.println(str); 
              }
          },
          // This method is called whenever a service is removed:
          removeServices: function(servces)
          {
                  var str = "DEL: ";
                  str += services[i].name;
                  str += " in domain ";
                  str += services[i].domain;
                  console.println(str); 
          }
      };
      
      // Perform the service discovery:
      SOAP.queryServices
   ({
          cType: "http",
          oAsync: myNotifications,
          aDomains: [ServiceDiscovery.local, ServiceDiscovery.DNS]
      });

Once a service has been discovered, it can be bound through the ``SOAP`` object ``resolveService`` method to a network address and port so that a connection can be established. The ``resolveService`` method accepts the following parameters:

* ``cType``: the DNS SRV service name (such as "http" or "ftp").

* ``cDomain``: the domain in which the service is located.

* ``cService``: the service name to be resolved.

* ``oResult``: a notification object used when the service is resolved. It implements a ``resolve`` method that accepts parameters ``nStatus`` (``0`` if successful) and ``oInfo`` (used if successful, contains a ``serviceInfo`` object). The ``serviceInfo`` object contains the following properties:

* ``target``: the IP address or DNS name of the machine providing the service.

* ``port``: the port on the machine.

* ``info``: an object with name/value pairs supplied by the service.

Its usage is illustrated in the following example:

::

      // Create the oAsync notification object:
      var myNotification = {
          // This method is called when the service is bound:
          resolve: function(nStatus, oInfo)
          {
              // Print the location if the service was bound:
              if (nStatus == 0){
                  var str = "RESOLVE: http://";
                  str += oInfo.target;
                  str += ":";
                  str += oInfo.port;
                  str += "/";
                  str += oInfo.info.path;
                  console.println(str); 
              }           
              // Display the error code if the service was not bound:
              else
                  console.println("ERROR: " + nStatus);
          }
      };
      
      // Attempt to bind to the service:
      SOAP.resolveService({
          cType: "http",
          cDomain: "local.",
          cService: "My Web Server",
          oResult: myNotification
      });

.. raw:: html

   <a name="37912"></a>

Managing XML-based information

JavaScript for Acrobat provides support for XML-based information generated within your workflows by providing an ``XMLData`` object, which represents an XML document tree that may be manipulated via the XFA Data DOM. (For example, it is possible to apply an XSL transformation (XSLT) to a node and its children using the ``XFA`` object). The ``XMLData`` object provides two methods for manipulating XML documents:

* ``parse``: Creates an object representing an XML document tree.

* ``applyXPath``: Permits the manipulation and query of an XML document via XPath expressions.

You can convert a string containing XML information into a document tree using the ``XMLData`` object ``parse`` method, and then manipulate and query the tree using its ``applyXPath`` method.

The ``XMLData`` object's ``parse`` method accepts two parameters:

* ``param1``: A string containing the text in the XML document.

* ``param2``: A Boolean value that determines whether the root node should be ignored.

Its usage is illustrated below:

::

      // XML string to be converted into a document tree:
      myXML = "<family name = 'Robat'>
                  <mom id = 'm1' name = 'Mary' gender = 'F'>
                      <child> m2 </child>
                      <personal>
                          <income>75000</income>
                      </personal>
                  </mom>
                  <son id = 'm2' name = 'Bob' gender = 'M'>
                      <parent> m1 </parent>
                      <personal>
                          <income>35000</income>
                      </personal>
                  </son>
              </family>";
      
      // Generate the document tree:
      var myTree = XMLData
   .parse(myXML, false);
      
      // Print mom's name:
      console.println("Mom: " + myXML.family.mom.value);
      
      // Change son's income:
      myXML.family.son.personal.income.value = 40000;

The ``XMLData`` object ``applyXPath`` method accepts two parameters:

* ``oXML``: An object representing the XML document tree.

* ``cXPath``: A string containing an XPath query to be performed on the document tree.

In the following example, assume that ``myXML`` is the document tree obtained in the previous example:

::

      // Obtain mom's information:
      var momInfo = XMLData
   .applyXPath(myXML, "//family/mom");
      
      // Save the information to a string:
      momInfo.saveXML('pretty');
      
      // Give mom a raise:
      momInfo.personal.income.value = "80000";

.. raw:: html

   <a name="41937"></a>

Workflow applications

Support for SOAP in JavaScript for Acrobat has a major impact on collaboration workflows. A SOAP-based collaboration server can be used to share comments remotely via a web-based comment repository. Through the DNS Service Discovery support, it is possible to enable dynamic discovery of collaboration servers, initiation workflows, and RSS feeds that can provide customized user interfaces, via XML, directly inside of Acrobat 7.0 or later.

In addition, it is possible to deploy web-based scripts that always maintain the most updated information and processes, and to connect to those scripts via form field actions that invoke web services.

In the following example, a form is submitted to a server using a SOAP-based invocation:

::

      // Populate the content object with form and SOAP information:
      var location = "http://example.com/Acrobat/Form/submit/"
      var formtype = location + "encodedTypes:FormData";
      var content = new Array();
      for(var i = 0; i < document.numFields; i++) {
              var name = document.getNthFieldName(i);
              var field = document.getField(name);
              content[i] = new Object();
              content[i].soapType = formtype;
              content[i].name = field.name;
              content[i].val = field.value;
      }
      
      // Send the form to the server:
          SOAP.request({
              cURL: cURL, 
              oRequest: {
                  location + ":submitForm":
                  {
                      content: content
                  }
              },
              cAction: location + "submitForm"
          }
