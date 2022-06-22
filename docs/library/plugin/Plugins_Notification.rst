******************************************************
Registering for Event Notifications
******************************************************

This chapter explains how to register for notification of a specific event. The Acrobat core API provides a notification mechanism so that plugins can synchronize their actions with Acrobat or Adobe Reader. Notifications enable plugins to indicate that they are interested in a specified event (such as the initialization of Adobe Reader or Acrobat) and to provide a callback function that is invoked by Adobe Reader or Acrobat each time an event occurs.

The order in which notifications occur may vary depending on the platform. For example, after opening a PDF document on the Windows platform, notifications occur in this order:

#. ``AVPageViewDidChange``
#. ``AVDocDidOpen``
#. ``AVDocDidActivate``
#. ``AVPageViewDidChange``

In contrast, after opening a PDF document in Mac OS, notifications occur in this order:

#. ``AVPageViewDidChange``
#. ``AVDocDidActivate``
#. ``AVPageViewDidChange``
#. ``AVDocDidOpen``

Registering event notifications
===============================

Register for an event notification when you want your plugin to be notified when a specific event occurs. For example, you can register for a notification when Acrobat or Adobe Reader is finished initializing. To register for an event notification, you provide a callback function that Acrobat or Adobe Reader invokes when the event occurs. To view a list of notification methods used to register an event notification, see the `Acrobat and PDF Library API Reference <https://www.adobe.com/go/apireference>`__.

You can register for an event notification by performing the following tasks:

#. Create a user-defined function that is invoked when the event occurs.
#. Invoke the ``AVAppRegisterNotification`` method and pass the following arguments:

   -  The name of the Acrobat core API method that corresponds to the event notification. For example, to register for the event that occurs when Adobe Reader or Acrobat is finished initializing, pass ``AVAppDidInitialize``. Append the value ``NSEL`` to the end of the method name.
   -  An ``ASExtension`` object that represents the identity of the caller. For plugins, you can use ``gExtensionID`` (this is defined in the PIMain.c file).
   -  The callback function that is invoked when the event occurs. You can invoke the ``ASCallbackCreateNotification`` macro and pass the following arguments:

#. The name of the Acrobat core API method that corresponds to the event notification. Do not append a value to the method name.
#. The address of the user-defined function that is invoked when the event occurs.

   -  A pointer to user-supplied data. Pass ``NULL`` if you do not want to supply user-supplied data.

The following code example registers for the event that occurs when Adobe Reader or Acrobat is finished initializing. The name of the callback function is ``myNotificationCallback``. This function simply displays an alert box. Note that ``AVAppRegisterNotification`` is invoked within the ``PluginInit`` method. For information about this method, see `Handshaking <Plugins_Pimech.html#50618406_89824>`__.

#. Registering for an event notification

::

   ACCB1 ASBool ACCB2 PluginInit(void) 
   {
   

   //Register for an event notification

::

   AVAppRegisterNotification(AVAppDidInitializeNSEL,

   gExtensionID,ASCallbackCreateNotification(AVAppDidInitialize,

   &myNotificationCallback), NULL);
   
   }
   

   //Create a user-defined function that is invoked when Adobe Reader or Acrobat

   //has finished initializing

::

   ACCB1 void ACCB2 myNotificationCallback(void *clientData) 
   {
   AVAlertNote("Acrobat has finished initializing"); 
   }

Unregistering event notifications
=================================

You can unregister an event notification that you previously registered for by using the Acrobat core API. To unregister an event notification, invoke the ``AVAppUnregisterNotification`` method and pass the following arguments:

-  The name of the Acrobat core API method that corresponds to the event notification. For example, to register for the event that occurs when Adobe Reader or Acrobat has initialized, pass ``AVAppDidInitialize``. Append the value ``NSEL`` to the end of the method name.
-  An ``ASExtension`` object that represents the identity of the caller. For plugins, you can use ``gExtensionID`` (this is defined in the PIMain.c file).
-  The callback function that is invoked when the event occurs. You can invoke the ``ASCallbackCreateNotification`` macro and pass the following arguments:

   -  The name of the Acrobat core API method that corresponds to the event notification. Do not append a value to the method name.
   -  The address of the user-defined function that is invoked when the event occurs.

-  A pointer to user-supplied data. Pass ``NULL`` if you do not want to supply user-supplied data.

The following example unregisters the event notification that occurs when Adobe Reader or Acrobat has initialized.

#. Unregistering an event notification

::

   AVAppUnregisterNotification(AVAppDidInitializeNSEL,

   gExtensionID,ASCallbackCreateNotification(AVAppDidInitialize,

   &myNotificationCallback), NULL);

.. note::

   Pass the same arguments that you specified when you registered for the event notification. (See `Registering event notifications <Plugins_Notification.html#50618408_85504>`__.)
