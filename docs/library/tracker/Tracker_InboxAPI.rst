******************************************************
Tracker API
******************************************************

This chapter presents information on the Tracker URL API, XML feed extensions, and a JavaScript-based user interface driver for customizing the Tracker user interface.

.. raw:: html

   <a name="28803"></a>

Tracker URL API
===============

Tracker responds to the execution of URL commands for adding, updating, selecting, and removing subscriptions to RSS feeds, converting subscriptions to PDF files, and displaying the Tracker window within Acrobat DC. This section describes URL commands that can do the following tasks:

-  `Add a subscription <Tracker_InboxAPI.html#18543>`__
-  `Update a subscription <Tracker_InboxAPI.html#27784>`__
-  `Select a subscription <Tracker_InboxAPI.html#34948>`__
-  `Remove a subscription <Tracker_InboxAPI.html#20604>`__
-  `Convert a subscription to a PDF file <Tracker_InboxAPI.html#70156>`__
-  `Display Tracker <Tracker_InboxAPI.html#49265>`__

.. note::

   For all of the Tracker URL commands, Acrobat DC is launched if it is not already open.

.. raw:: html

   <a name="18543"></a>

Add a subscription
------------------

::

     acrobat:Inbox?addFeed=<URL>

Adds the RSS feed specified by ``URL``, and opens the Tracker window. A security dialog box may appear, indicating the source of the subscription and providing the user with the option to cancel the feed subscription.

.. raw:: html

   <a name="27784"></a>

Update a subscription
---------------------

::

     acrobat:Inbox?updateFeed=<URL>

Asynchronously updates the RSS feed specified by ``URL``, and opens the Tracker window.

.. raw:: html

   <a name="34948"></a>

Select a subscription
---------------------

::

     acrobat:Inbox?selectFeed=<URL>

Selects the RSS feed specified by ``URL``, and opens the Tracker window.

Alternatively, the following notation can be used to select an item within a feed:

::

     acrobat:Inbox?selectFeed=<URL>#<GUID>

In this case, ``GUID`` is the RSS GUID item. For example, if the user subscribes to the RSS feed at http://example.org/RSS/example and the item within the feed has a GUID of http://example.org/RSS/abc, the following notation is used:

::

     acrobat:Inbox?selectFeed=<http://example.org/RSS/example>#

       <GUID>@<http://example.org/RSS/abc>

.. raw:: html

   <a name="20604"></a>

Remove a subscription
---------------------

::

     acrobat:Inbox?removeFeed=<URL>

Removes the RSS subscription specified by ``URL``. A verification dialog box appears, providing the user with the option to cancel the subscription removal.

.. raw:: html

   <a name="70156"></a>

Convert a subscription to a PDF file
------------------------------------

::

     acrobat:Inbox?convert=<URL>

Converts the RSS subscription specified by ``URL`` to a PDF file. The user is not required to subscribe to the feed, and in such cases the feed does not remain in Tracker after the conversion has taken place.

.. raw:: html

   <a name="49265"></a>

Display Tracker
---------------

::

     acrobat:Inbox?show

Displays the Tracker window.

.. raw:: html

   <a name="19240"></a>

RSS XML feed extensions
=======================

You can add XML extensions to RSS 2.0 feeds to customize the user interface for the subscriptions in Tracker. The extensions are based on the following specifications:

-  `Namespace <Tracker_InboxAPI.html#29789>`__
-  `Channel extensions <Tracker_InboxAPI.html#71290>`__
-  `Item extensions <Tracker_InboxAPI.html#78122>`__

.. raw:: html

   <a name="29789"></a>

Namespace
---------

Tracker extensions use the namespace defined at http://ns.adobe.com/Acrobat/RSS/Inbox to extend RSS 2.0. You can set the namespace prefix by adding the following XML attribute to the RSS node:

::

     xmlns:inbox="http://ns.adobe.com/Acrobat/RSS/Inbox"

For more information on XML namespaces, see http://www.w3.org/TR/REC-xml-names/ .

.. raw:: html

   <a name="71290"></a>

Channel extensions
------------------

You can add extensions as children of the RSS 2.0 ``<channel/>`` element. These can be used to perform the following actions:

-  `Customizing the user interface <Tracker_InboxAPI.html#10491>`__
-  `Grouping items within a feed <Tracker_InboxAPI.html#82216>`__
-  `Sorting items within a feed <Tracker_InboxAPI.html#17865>`__
-  `Assigning icons to feeds <Tracker_InboxAPI.html#30285>`__
-  `Marking feed items as unread <Tracker_InboxAPI.html#31839>`__

.. raw:: html

   <a name="10491"></a>

Customizing the user interface
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

     <inbox:feedUI/>

Provides a URL for a JavaScript user interface driver. For security reasons, the URL for the driver must be relative to the URL of the XML document containing the RSS feed. For example, the following code uses ``myCustomUI.js`` :

::

     <inbox:feedUI>myCustomUI.js</inbox:feedUI>

.. note::

   This type of URL is known as a *code subscription feed* . Code subscription is done through the same mechanism as RSS and the contents are stored locally. However, the files are standard JavaScript files. Code subscription feeds are checked for updates infrequently, and update only the local copy since code changes do not occur dynamically. The code changes do not take effect until the next time Tracker is started.

Grouping items within a feed
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

     <inbox:groupBy/>

       <inbox:grouping/>

Provides the name of an element that should be used for grouping items within a feed. For example, ``author`` would indicate that the RSS ``<author/>`` element should be used for grouping items according to author name, as shown in the following code:

::

     <inbox:groupBy>author</inbox:groupBy>

If the grouping element is an XML namespace, the elements can be specified using the following notation: ``namespace:local name``. For example, if the namespace is http://example.org/myInfoNamespace/ and the local name is ``timeZone``, the notation would appear as follows:

::

     <inbox:groupBy>http://example.org/myInfoNamespace/:timeZone</inbox:groupBy>

The ``<inbox:groupBy/>`` element can use multiple child ``<inbox:grouping/>`` elements. This allows for multiple levels of grouping for feed items. In the following example, items will be grouped according to author name, and within those groups there will be subgroups of items grouped according to the year:

::

     <inbox:groupBy>
          <grouping>author</grouping>
          <grouping>year</grouping>
      </inbox:groupBy>

Sorting items within a feed
~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

     <inbox:sortBy/>

Provides the name of an element to be used for lexically sorting items within a feed. For example, ``author`` would indicate that the RSS ``author`` element should be used for sorting items according to author name, as shown in the following code:

::

     <inbox:sortBy>author</inbox:sortBy>

If the grouping element is an XML namespace, the elements can be specified using the following notation: ``namespace:local name``. For example, if the namespace is http://example.org/myInfoNamespace/ and the local name is ``timeZone``, the notation would appear as follows:

::

     <inbox:sortBy>http://example.org/myInfoNamespace/:timeZone</inbox:sortBy>

.. raw:: html

   <a name="30285"></a>

Assigning icons to feeds
~~~~~~~~~~~~~~~~~~~~~~~~

::

     <inbox:icon/>

Provides the URL of an icon to be used for the tree view item icon for a feed. For security reasons, the URL for the icon must be relative to the URL of the XML document containing the RSS feed. You can subscribe to icons provided they are in PNG format and are less than 20 by 20 pixels in size. For example, the following code assigns the icon contained in ``Circle.png`` to the feed:

::

     <inbox:icon>Circle.png</inbox:icon>

Marking feed items as unread
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

     <inbox:markUnread/>

Indicates whether unread items in the feed should be highlighted. The default is for the items to be marked. The following code indicates that unread items should be marked:

::

     <inbox:markUnread>true</inbox:markUnread>

Item extensions
---------------

You can add extensions as children of the RSS 2.0 ``channel`` element. These can be used to perform the following actions:

-  `Nesting feed items <Tracker_InboxAPI.html#51517>`__
-  `Hiding feed items <Tracker_InboxAPI.html#58221>`__

As with channel extensions, item extensions can also be used to perform the following actions:

-  `Customizing the user interface <Tracker_InboxAPI.html#10491>`__
-  `Assigning icons to feeds <Tracker_InboxAPI.html#30285>`__

.. raw:: html

   <a name="51517"></a>

Nesting feed items
~~~~~~~~~~~~~~~~~~

::

     <inbox:subfeed/>

Provides a URL to an RSS feed to be nested under the current Tracker item. This allows a multi-level hierarchy of information to be displayed in Tracker. For security reasons, the URL for the nested feed must be relative to the URL of the XML document containing the current RSS feed.

.. raw:: html

   <a name="58221"></a>

Hiding feed items
~~~~~~~~~~~~~~~~~

::

     <inbox:hidden/>

Indicates that the item should not be displayed in Tracker. This can be used to force the display of empty groups.

.. raw:: html

   <a name="52247"></a>

User interface driver
=====================

The Tracker extensions provide the ``inbox:feedUI`` element, which consists of a URL to a code subscription feed. If no user interface driver is specified, a generic driver is used. If only some of the methods are implemented in the user interface driver object defined in the JavaScript file, the default RSS driver is used to implement the remaining methods.

The user interface driver JavaScript file should return a driver object as the event result, as shown in the following example:

::

     var ui = { /* User interface driver object */ };
      event.result = ui;

The user interface driver is active when a feed or any of its elements are selected. Multiple feeds can use the same driver.

The user interface driver requires the following object definitions:

-  `Dialog object <Tracker_InboxAPI.html#49449>`__
-  `Driver object <Tracker_InboxAPI.html#24450>`__
-  `Layout description object <Tracker_InboxAPI.html#26052>`__
-  `RSS object <Tracker_InboxAPI.html#63607>`__
-  `Selection object <Tracker_InboxAPI.html#38710>`__

.. raw:: html

   <a name="49449"></a>

Dialog object
-------------

The ``dialog`` object is described in the *JavaScript for Acrobat API Reference* . However, when using Tracker, it is augmented with the following methods:

- `getSelection <Tracker_InboxAPI.html#35313>`__
- `isFeedSelection <Tracker_InboxAPI.html#62860>`__
- `isItemSelection <Tracker_InboxAPI.html#78914>`__
- `isGroupSelection <Tracker_InboxAPI.html#59598>`__
- `getFeed <Tracker_InboxAPI.html#40650>`__

.. raw:: html

   <a name="35313"></a>

getSelection
~~~~~~~~~~~~

This method returns the current ``selection`` object. This can be a subscription feed or a group or item within a feed, and it can be identified using the ``isFeedSelection``, ``isGroupSelection``, and ``isItemSelection`` methods.

.. raw:: html

   <a name="62860"></a>

isFeedSelection
~~~~~~~~~~~~~~~

This method returns ``true`` if the current ``selection`` object is a subscription feed as described in the ``RSS.getContents`` method.

.. raw:: html

   <a name="78914"></a>

isItemSelection
~~~~~~~~~~~~~~~

This method returns ``true`` if the current ``selection`` object is an item within a subscription feed.

.. raw:: html

   <a name="59598"></a>

isGroupSelection
~~~~~~~~~~~~~~~~

This method returns ``true`` if the current ``selection`` object is a string representing the name of a group within a subscription feed.

.. raw:: html

   <a name="40650"></a>

getFeed
~~~~~~~

This method returns the subscription feed of the current selection.

.. raw:: html

   <a name="24450"></a>

Driver object
-------------

The JavaScript driver feed is a script that is executed. The script should set the ``event.result`` property to an object implementing some or all of the methods defined in this section.


.. raw:: html

   <a name="22830"></a>

createToolBar
~~~~~~~~~~~~~

This method displays a toolbar at the top of Tracker when items that use the driver are selected. The method should return an array of objects (one for each toolbar button), each containing the following properties:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - cType
     - String
     - 
       * ``button``: A toolbar button.
       * ``separator``: A toolbar button separator bar.
       * ``textButton``: A button with a text field.

   * - cName
     - String
     - A unique name for the button.

   * - cDisplayName
     - String
     - A string to display on the button's label.

   * - cTip
     - String
     - A tooltip to display for the button.

   * - onExecute
     - Function
     - A function that is executed when the button is clicked. The function is passed a ``selection`` object as a parameter. If ``cType`` is ``textButton``, there will be a second parameter containing the value of the text field.

   * - onEnabled
     - Function
     - A function that is executed to determine if the button should be enabled. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the button should be enabled, ``false`` otherwise. If the method is not defined, the button is always enabled.


createContext
~~~~~~~~~~~~~

This method displays a window at the bottom of Tracker when items that use the driver are selected. The method returns a ``layout`` description object (see `Layout description object <Tracker_InboxAPI.html#26052>`__ for more information). If the driver does not provide this method, the default behavior is for the HTML content in the RSS feed to be rendered in the context window.

.. raw:: html

   <a name="51037"></a>

getInitiateName
~~~~~~~~~~~~~~~

This method provides a user interface name for an initiation workflow provided by the ``getInitiateMenu`` method.

getInitiateMenu
~~~~~~~~~~~~~~~

This method provides a menu item in the context menu of the Acrobat DC Send for Review menu. This allows a user interface driver to provide a workflow initiation user interface. The method returns an array of objects corresponding to menu items, each having the following properties:

.. _section-1:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - cName
     - String
     - A unique name for the menu.

   * - cDisplayName
     - String
     - A localized display name for the menu item.

   * - onExecute
     - Function
     - A function that is executed when the menu is selected. The function is passed a ``selection`` object as a parameter.

   * - onEnabled
     - Function
     - A function that is executed to determine if the menu should be enabled. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be enabled, ``false`` otherwise. If the method is not defined, the menu is always enabled.

   * - onMarked
     - Function
     - A function that is executed to determine if the menu should be marked. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be marked, ``false`` otherwise. If the method is not defined, the menu is always unmarked.

   * - bSeparator
     - Boolean
     - Determines whether this menu item is a separator.

   * - oSubMenu
     - Array
     - An array of objects containing the same properties as the menu items for a hierarchical sub menu.


.. raw:: html

   <a name="26634"></a>

getFeedContextMenu
~~~~~~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns an array of objects corresponding to menu items in a context menu, each having the following properties:

.. _section-2:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - cName
     - String
     - A unique name for the menu.

   * - cDisplayName
     - String
     - A localized display name for the menu item.

   * - onExecute
     - Function
     - A function that is executed when the menu is selected. The function is passed a ``selection`` object as a parameter.

   * - onEnabled
     - Function
     - A function that is executed to determine if the menu should be enabled. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be enabled, ``false`` otherwise. If the method is not defined, the menu is always enabled.

   * - onMarked
     - Function
     - A function that is executed to determine if the menu should be marked. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be marked, ``false`` otherwise. If the method is not defined, the menu is always unmarked.

   * - bSeparator
     - Boolean
     - Determines whether this menu item is a separator.

   * - oSubMenu
     - Array
     - An array of objects containing the same properties as the menu items for a hierarchical sub menu.


.. raw:: html

   <a name="45057"></a>

getItemContextMenu
~~~~~~~~~~~~~~~~~~

This method is passed a feed and feed item as parameters, and returns an array of objects corresponding to menu items, each having the following properties:

.. _section-3:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - cName
     - String
     - A unique name for the menu.

   * - cDisplayName
     - String
     - A localized display name for the menu item.

   * - onExecute
     - Function
     - A function that is executed when the menu is selected. The function is passed a ``selection`` object as a parameter.

   * - onEnabled
     - Function
     - A function that is executed to determine if the menu should be enabled. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be enabled, ``false`` otherwise. If the method is not defined, the menu is always enabled.

   * - onMarked
     - Function
     - A function that is executed to determine if the menu should be marked. The function is passed a ``selection`` object as a parameter, and returns ``true`` if the menu should be marked, ``false`` otherwise. If the method is not defined, the menu is always unmarked.

   * - bSeparator
     - Boolean
     - Determines whether this menu item is a separator.

   * - oSubMenu
     - Array
     - An array of objects containing the same properties as the menu items for a hierarchical sub menu.


.. raw:: html

   <a name="10839"></a>

getFeedTitle
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns a display string for the feed title.

.. raw:: html

   <a name="59756"></a>

getItemTitle
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns a display string for the feed item text.

.. raw:: html

   <a name="32456"></a>

getGroupTitle
~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns a display string for the text used for a group.

.. raw:: html

   <a name="99454"></a>

getFeedTip
~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns a display string for the feed tooltip.

.. raw:: html

   <a name="60396"></a>

getGroupTip
~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and returns a display string for the tooltip used for a group.

.. raw:: html

   <a name="52475"></a>

onSelectFeed
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a feed is selected.

.. raw:: html

   <a name="30828"></a>

onSelectItem
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a feed item is selected.

.. raw:: html

   <a name="75311"></a>

onActivateFeed
~~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a feed is double-clicked.

.. raw:: html

   <a name="76321"></a>

onActivateItem
~~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a feed item is double-clicked.

.. raw:: html

   <a name="34959"></a>

onActivateGroup
~~~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a group is double-clicked.

.. raw:: html

   <a name="34860"></a>

canDeleteFeed
~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called to determine if a feed can be deleted. If the feed can be deleted, the method returns ``true``.

.. raw:: html

   <a name="98962"></a>

onDeleteFeed
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a feed is deleted. If the method returns ``true``, the feed has been deleted. In this case, the method should modify the subscription accordingly.

.. raw:: html

   <a name="31466"></a>

canDeleteItem
~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called to determine if an item can be deleted. If the item can be deleted, the method returns ``true``.

.. raw:: html

   <a name="66274"></a>

onDeleteItem
~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when an item is deleted. If the method returns ``true``, the item has been deleted. In this case, the method should modify the subscription accordingly.

.. raw:: html

   <a name="77034"></a>

canDeleteGroup
~~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called to determine if a group can be deleted. If the feed can be deleted, the method returns ``true``.

.. raw:: html

   <a name="75040"></a>

onDeleteGroup
~~~~~~~~~~~~~

This method is passed a ``selection`` object as a parameter, and is called when a group is deleted. If the method returns ``true``, the group has been deleted. In this case, the method should modify the subscription accordingly.

.. raw:: html

   <a name="68897"></a>

shouldSort
~~~~~~~~~~

This method determines whether the feed items should be sorted. If it returns ``true``, the items will be sorted.

.. raw:: html

   <a name="85516"></a>

sortCompare
~~~~~~~~~~~

This method is used to sort feed items. It is passed a feed description and two item descriptions ``A`` and ``B`` as parameters, and returns one of the following values:

-  If ``A`` < ``B``, the method returns ``-1``.
-  If ``A`` = ``B``, the method returns ``0``.
-  If ``A`` > ``B``, the method returns ``1``.

.. raw:: html

   <a name="86375"></a>

shouldGroup
~~~~~~~~~~~

This method determines whether the feed items should be grouped together. If it returns ``true``, the items will be grouped.

.. raw:: html

   <a name="98368"></a>

groupItem
~~~~~~~~~

This method is used to group the items in a feed. It is passed an item description as a parameter, and returns either a localized category name for the method or an empty string indicating that there is no grouping category.

.. raw:: html

   <a name="95742"></a>

shouldFilterFeed
~~~~~~~~~~~~~~~~

This method determines whether an entire feed should be displayed. It is passed a feed description and the document ID of the current document as parameters. If it returns ``false``, the feed is hidden, otherwise it is displayed.

.. raw:: html

   <a name="25530"></a>

shouldFilterItem
~~~~~~~~~~~~~~~~

This method determines whether a feed item should be displayed. It is passed an item description as a parameter. If it returns ``false``, the feed is hidden, otherwise it is displayed.

.. raw:: html

   <a name="36459"></a>

getIdlePeriod
~~~~~~~~~~~~~

This method returns the period in seconds that the ``idle`` method should be called while the user interface for this driver is active and displayed.

.. raw:: html

   <a name="26012"></a>

idle
~~~~

This method is passed the periodicity, obtained from the ``getIdlePeriod`` method, as a parameter, assuming that the periodicity was a positive value. It should run for the number of seconds specified by the periodicity.

.. raw:: html

   <a name="19710"></a>

getHTMLRendition
~~~~~~~~~~~~~~~~

This method returns an HTML representation of the ``selection`` object. The HTML representation is typically used to convert the content to a PDF file using the WebCapture plug-in.

.. raw:: html

   <a name="43506"></a>

canChangeGroups
~~~~~~~~~~~~~~~

This method indicates whether the user interface driver supports drag and drop operations on items between groups in the feed. The method returns ``true`` if the operations are supported, ``false`` otherwise, and its outcome is based on the values returned by the ``canModifyItemGroup`` and ``modifyItemGroup`` methods.

.. raw:: html

   <a name="13700"></a>

canModifyItemGroup
~~~~~~~~~~~~~~~~~~

This method determines whether the user can perform a drag and drop operation on an item within a group. It receives three parameters: a ``selection`` object for the currently selected item, an array of the group labels to which the item currently belongs, and an array of destination group labels. The method returns ``true`` if the operation is allowed.

.. raw:: html

   <a name="44926"></a>

modifyItemGroup
~~~~~~~~~~~~~~~

This method is called when the user performs a drag and drop operation on an item within a group. It receives three parameters: a ``selection`` object for the currently selected item, an array of the group labels to which the item currently belongs, and an array of destination group labels. The method returns ``true`` if the operation is allowed.

.. raw:: html

   <a name="26052"></a>

Layout description object
-------------------------

The layout of Tracker's context window is described by a ``layout`` description object. This object contains a hierarchical set of views and a set of event handlers for those views. Each view has a view identifier (its ``item_id`` property) that provides access to the view value as well as a notification callback. The ``layout`` description object is returned by the user interface driver object's ``createContext`` method.

.. _section-4:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - name
     - String
     - A generic label that may be used for a variety of view types, such as a ``button`` or ``cluster``.

   * - type
     - String
     - 
        * ``view``: A generic group of other views (default).
        * ``cluster``: A labeled cluster of views.
        * ``check_box``: A check box.
        * ``ok``: An OK button.
        * ``ok_cancel``: An OK/Cancel button group.
        * ``ok_cancel_other``: An OK/Cancel/Other button group.
        * ``button``: A button.
        * ``html``: An HTML view.

   * - align_children
     - String
     - 
        * ``align_center``: Centers the element within its parent.
        * ``align_fill``: Stretches the element to fill the entire row.
        * ``align_left``: Aligns the element to the left within its parent.
        * ``align_right``: Aligns the element to the right within its parent.

   * - align
     - Array
     - 
        * ``align_center``: Centers the children.
        * ``align_fill``: Distributes the children to fill the entire row.
        * ``align_left``: Aligns the children to the left.
        * ``align_right``: Aligns the children to the right.

   * - elements
     - Array
     - An array of child views for this view.

   * - width
     - Number
     - The view's width in points.

   * - height
     - Number
     - The view's height in points.

   * - item_id
     - String
     - The view identifier used to get and set the view value and to set a handler method.


.. raw:: html

   <a name="63607"></a>

RSS object
----------

The ``RSS`` object is used to add, remove, and update RSS feeds, and manage their content and user interface behavior.

.. _section-5:


 

.. list-table::
   :widths: 10 10 10 70 
   :header-rows: 0


   * - Property
     - Type
     - Access
     - Description
   * - feeds
     - Array
     - R
     - This property contains the currently subscribed feed URLs.
   * - hasExternalReader
     - Boolean
     - R
     - This property indicates that there is an external news reader available that can handle ``feed://`` subscription URLs.
         * `addFeed <Tracker_InboxAPI.html#48607>`__
         * `removeFeed <Tracker_InboxAPI.html#90502>`__
         * `getContents <Tracker_InboxAPI.html#84187>`__
         * `update <Tracker_InboxAPI.html#62125>`__
         * `addUI <Tracker_InboxAPI.html#23401>`__

addFeed
~~~~~~~

Adds the feed specified by ``cURL`` to the subscriptions managed by Acrobat DC.

**Parameters**


.. _section-6:


 

.. list-table::
   :widths: 10 90
   :header-rows: 0


   * - cURL
     - The URL of the RSS feed.

   * - bHidden
     - Optional. Determines whether the RSS feed is displayed in Tracker. If ``true`` (default), the feed will not be displayed.

   * - bPersistent
     - Optional. Determines whether the RSS feed contents will be stored persistently and will be available when Acrobat DC is offline or restarted. If ``true`` (default), the feed contents will be stored persistently.

   * - cType
     - Optional. The type of RSS feed to be added. The possible values are:  ``RSS``: The subscription is an XML document (RSS 0.9 or higher, 1.0, or 2.0).  ``JS``: The subscription is a JavaScript document.  ``Icon``: The subscription is a PNG icon.  ``UI``: The subscription is a JavaScript document to be registered as a UI driver.

   * - bUpdateAsync
     - Optional. Determines whether the subscription contents are initially retrieved asynchronously. If ``true`` (default), the contents are retrieved asynchronously. If ``false``, the contents will be retrieved before the method returns, which may take a significant period of time and should be avoided if possible.


removeFeed
~~~~~~~~~~

Removes the subscription specified by ``cURL`` that was previously added by calling ``addFeed``.

**Parameters**


.. _section-7:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - cURL
     - The URL of the RSS feed.


getContents
~~~~~~~~~~~

**Returns** the current contents of the RSS cache for the feed specified by ``cURL``.

.. _**Parameters**-2:

**Parameters**


.. _section-8:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - cURL
     - The URL of the RSS feed.


**Returns**

::

   Object

If the feed has not yet been fetched, the result is a ``null`` object. Otherwise, the object returned depends on the type of feed. If the subscription is an RSS or ATOM feed, it returns an object with the following properties.

.. _section-9:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Property
     - Description

   * - Title
     - The title of the RSS feed.

   * - Link
     - A link to an HTML document describing the RSS feed.

   * - Description
     - A description of the RSS feed. This may be an HTML fragment.

   * - ModDate
     - The last time the RSS feed was modified.

   * - Extensions
     - An object describing any extensions made to the RSS feed. The ``key`` of each object property will be the name of the element. If there is more than one occurrence of an element, the ``value`` will be an array of those element values. Otherwise the ``value`` will be the contents of the element.

   * - Item
     - An array of objects corresponding to the Items in the RSS feed. The Items have the following properties:  ``Description``: The description of the item. This may be an HTML fragment.  ``Title``: The title of the item.  ``Link``: A hyperlink to a related document.  ``ModDate``: The modification time of the item.  ``Extensions``: An object describing extensions made to the RSS Item. The ``key`` of each object property is the name of the element. If there is more than one occurrence of an element, the ``value`` is an array of those element values. Otherwise the ``value`` is the contents of the element.


update
~~~~~~

Forces the update of the subscription specified by ``cURL``.


**Parameters**


.. _section-10:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - cURL
     - Optional. The URL of the RSS feed. If no URL is specified, all RSS feeds will be updated.

   * - bForce
     - Optional. Determines whether the RSS feed is updated even if it is not required. If ``true`` (default), the feed is updated. If ``false``, the feed is only updated when required. Updates are normally based on the last modification, time to live (TTL), and skipdays or skiphours feed properties.

   * - bAsync
     - Optional. Determines whether the subscription contents are updated asynchronously. If ``true`` (default), the contents are updated asynchronously. If ``false``, the contents are updated synchronously.

   * - cType
     - Optional. Determines the type of update:  ``local``: Updates the user interface without refreshing the subscription content.  ``subscription`` (default): Updates only the subscription contents.  ``recursive``: Updates the subscription and any related contents, including the user interface, related subscriptions, and icons.


addUI
~~~~~

Adds a user interface driver for a feed.

**Parameters**


.. _section-11:


 

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - cURL
     - The URL that RSS feeds can reference to request the driver. The convention is that machine local resources use ``local://<uniqueName>`` for their URLs.
   * - oDriver
     - A ``UI Driver`` object. See `User interface driver <Tracker_InboxAPI.html#52247>`__ for more information on specifying this parameter.


.. raw:: html

   <a name="38710"></a>

Selection object
----------------

The ``selection`` object is passed to many of the user interface driver methods and indicates the selection context for the method.

.. _section-12:


 

.. list-table::
   :widths: 10 10 80
   :header-rows: 0


   * - Property
     - Type
     - Description

   * - type
     - String
     - Indicates whether a feed, a feed item, or a group of items is currently selected. The following values may be used:

        * ``feed``: The selection is a top level feed.
        * ``item``: The selection is an item in a feed.
        * ``group``: The selection is a group of items.

   * - feed
     - Object
     - A description of the feed. For more information, see the RSS object's ``getContents`` method.

   * - item
     - Object
     - If the selection is an item in a feed, the property will be the item selected. For more information, see the RSS object's ``getContents`` method. The property is undefined if the selection is not a feed item.

   * - group
     - String
     - If the selection is a group of items, the property will be the name of the selected group. The property is undefined if the selection is not a group of items.



