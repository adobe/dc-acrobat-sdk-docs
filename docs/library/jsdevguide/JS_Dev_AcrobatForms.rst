******************************************************
Using JavaScript in Forms
******************************************************

In this chapter you will learn how to extend the functionality of Acrobat forms through the application of JavaScript. You will learn how to generate, modify, and enhance all types of PDF forms and the elements they contain, and ensure the proper collection and export of information in various formats relevant to your workflow needs. In addition, you will understand how to leverage the XML Forms Architecture (XFA) so that your presentation format will be not only responsive to user input, but will also ensure that the information can be exchanged with web services and enterprise infrastructures.

.. raw:: html

   <a name="78613"></a>

Forms essentials
================

You can extend the capability of your forms by using JavaScript to automate formatting, calculations, and data validation. In addition, you can develop customized actions assigned to user events. Finally, it is possible for your forms to interact with databases and web services.

.. raw:: html

   <a name="93532"></a>

About PDF forms
---------------

There are two types of PDF forms: Acrobat forms and Adobe LiveCycle Designer forms (XML form object model).

Acrobat forms present information using form fields. They are useful for providing the user with a structured format within which to view or print information. Forms permit the user to fill in information, select choices, and digitally sign the document. Once the user has entered data, the information within the PDF form can be sent to the next step in the workflow for extraction or, in the case of browser-based forms, immediately transferred to a database.

The XML form object model uses a document object model (DOM) architecture to manage the components that comprise a form. These include the base template, the form itself, and the data contained within the form fields. In addition, all calculations, validations, and formatting are specified and managed within the DOM and XML processes.

A static XML form presents a fixed set of text, graphics, and field areas at all times. Dynamic XML forms are created by dividing a form into a series of subforms and repeating subforms. They support dynamically changing fields that can grow or shrink based on content, variable-size rows and tables, and intelligent data import/export features.

Elements of Acrobat forms
----------------------------

The form fields used in Acrobat forms are the basis of interaction with the user. They include buttons, check boxes, combo boxes, list boxes, radio buttons, text fields, and digital signature fields. In addition, you can enhance the appearance and value of your forms through the use of tables, templates, watermarks, and other user interface elements such as bookmarks, thumbnails, and dialog boxes. Finally, the JavaScript methods you define in response to events will help customize the utility and behavior of the form within the context of its workflow.

Text fields can be useful for either presenting information or collecting data entered by the user, such as an address or telephone number.

Digital signature fields can be used to ensure the security of a document.

When presenting the user with decisions or choices, you can use check boxes and radio buttons for a relatively small set of choices, or list boxes and combo boxes for a larger set of dynamically changing choices.

Guidelines for creating a new form
----------------------------------

When designing a PDF form, consider first its purpose and the data it must manage. It may be that the same page is used in multiple contexts, depending on user interactions and decisions. In this case, there may be multiple sets of form fields. When this occurs, treat each set of form fields as a different problem, as though each set had its own page. This will also require extra logic applied to visibility settings. Your form design may have dynamically changing features such as the current date, as well as convenience options such as automatic generation of email messages. It may even have a dynamically changing appearance and layout which is responsive to user interactions.

Usability is a major factor in the design of forms since they are essentially graphical user interfaces, so layout and clarity will be a major consideration. Finally, consider the medium in which the form will be presented: screens with limited resolution may affect your decisions, and printing characteristics may also be relevant.

When creating forms programmatically, consider the form elements that will be needed for a given area. Declare those variables associated with the form elements, and apply logical groupings to those elements that belong to the same collections, such as radio buttons or check boxes. This will simplify the task of assigning properties, formatting options, validation scripts, calculation scripts, and tabbing order to each of the individual form elements.

The creation of a new form, whether done through the Acrobat layout tools or programmatically through JavaScript, will require that you consider the following:

-  How the form fields will be positioned.
-  Which form fields will be associated in collections so that their properties can be set with consistency and efficiency.
-  How size, alignment, and distribution of form fields within the document will be determined.
-  When and how to set up duplicate form fields so that when the user types information into one form field, that information automatically appears in the duplicate form fields.
-  When to create multiple form fields for array-based access and algorithms.
-  The tab order of form fields.

.. raw:: html

   <a name="59191"></a>

Creating Acrobat form fields
-------------------------------

There are seven types of Acrobat form fields, each associated with a field type value as shown in the following table.

Acrobat form field types

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Form field
     - Field type value

   * - Button
     - button

   * - Check box
     - checkbox

   * - Combo box
     - combobox

   * - List box
     - listbox

   * - Radio button
     - radiobutton

   * - Text field
     - text

   * - Digital signature
     - signature

You can use JavaScript to create a form field by invoking the ``addField`` method of the Doc object, which returns a Field object. This method permits you to specify the following information:

-  The field name. This may include hierarchical syntax in order to facilitate logical groupings. For example, the name ``myGroup.firstField`` implies that the form field ``firstField`` belongs to a group of fields called ``myGroup``. The advantage of creating logical hierarchies is that you can enforce consistency among the properties of related form fields by setting the properties of the group, which automatically propagate to all form fields within the group.
-  One of the seven field type values listed above, surrounded by quotes.
-  The page number where the form field is placed, which corresponds to a zero-based indexing scheme. Thus, the first page is considered to be page 0.
-  The location, specified in rotated user space (the origin is located at the bottom left corner of the page), on the page where the form field is placed. The location is specified through the use of an array of four values. The first two values represent the coordinates of the upper left corner, and the second two values represent the coordinates of the lower right corner: ``[upper-left x, upper-left y, lower-right x, lower-right y]``.

For example, suppose you would like to place a button named ``myButton`` on the first page of the document. Assume that the button is one inch wide, one inch tall, and located 100 points in from the left side of the page and 400 points up from the bottom of the page (there are 72 points in 1 inch). The code for creating this button would appear as follows:

::

      var name = "myButton";
      var type = "button";
      var page = 0;
      var location = [100, 472, 172, 400];
      var myField = this.addField(name, type, page, location);

This approach to creating form fields is applicable to all fields, but it should be noted that radio buttons require special treatment. Since a set of radio buttons represents a set of mutually exclusive choices, they belong to the same group. Because of this, the names of all radio buttons in the same group must be identical. In addition, the export values of the set of radio buttons must be set with a single statement, in which an array of values are assigned by the ``exportValues`` property of the Field object.

For example, suppose we would like to create a set of three radio buttons, each 12 points wide and 12 points high, all named ``myRadio``. We will place them on page 5 of the document, and their export values will be ``Yes``, ``No``, and ``Cancel``. They can be created as shown in the code given below:

::

      var name = "myRadio";
      var type = "radiobutton";
      var page = 5;
      var rb = this.addField(name, type, page, [400, 442, 412, 430]);
      this.addField(name, type, page, [400, 427, 412, 415]);
      this.addField(name, type, page, [400, 412, 412, 400]);
      rb.exportValues=["Yes", "No", "Cancel"];

.. raw:: html

   <a name="13510"></a>

Setting Acrobat form field properties
----------------------------------------

Javascript provides a large number of properties and methods for determining the appearance and associated actions of form fields. In this section you will learn what properties and methods are available, and how to write scripts that control the appearance and behavior of form fields.

The list of topics in this section is:

-  `Field properties <JS_Dev_AcrobatForms.html#37986>`__
-  `Button fields <JS_Dev_AcrobatForms.html#28613>`__
-  `Check box fields <JS_Dev_AcrobatForms.html#85887>`__
-  `Combo box fields <JS_Dev_AcrobatForms.html#44065>`__
-  `List box fields <JS_Dev_AcrobatForms.html#53749>`__
-  `Radio button fields <JS_Dev_AcrobatForms.html#34428>`__
-  `Signature fields <JS_Dev_AcrobatForms.html#61295>`__
-  `Text fields <JS_Dev_AcrobatForms.html#64180>`__
-  `Validation scripts <JS_Dev_AcrobatForms.html#34131>`__
-  `Calculation script <JS_Dev_AcrobatForms.html#68521>`__

.. _section-1:

.. raw:: html

   <a name="37986"></a>

Field properties
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A form field has certain properties that determines its appearance, printability, orientation, and the actions performed when the user interacts with it. Some properties are common to all form fields, while others are particular to certain types of fields. The properties of a field can be set not only through the UI, but also programmatically with JavaScript.

The most basic property of every form field is its name, which provides the reference necessary for subsequent access and modification. The key to setting the properties of a field is to first acquire the Field object of that field using its name; this is done using the ``getField`` method of the Doc object:

::

      var f = this.getField("myField");

The ``getField`` method takes as its argument the field name of the target field. The Field object can be obtained using other methods as well, for example, the ``addField`` method returns the Field object of the field it just created.

General properties that apply to all form fields include the display rectangle, border style, border line thickness, stroke color, orientation, background color, and tooltip. In addition, you can choose whether it should be read only, have the ability to scroll, and be visible on screen or in print.

There are also specific settings you can apply to text characteristics, button and icon size and position relationships, button appearance when pushed, check box and radio button glyph appearance, and the number and selection options for combo box and list box items.

All formatting options are listed and described in the following table.


userName
readonly
doNotScroll
display
textFont, textColor, textSize, richText,
richValue, comb, multiline,
charLimit, fileSelect, password
alignment
buttonAlignX, buttonAlignY
buttonFitBounds, buttonScaleHow, buttonScaleWhen
highlight
style
numItems
editable
multipleSelection


.. _section-2:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Description
     - Field properties

   * - display rectangle
     - Position and size of field on page.
     - rect

   * - border style
     - Rectangle border appearance.
     - borderStyle

   * - stroke color
     - Color of bounding rectangle.
     - strokeColor

   * - border thickness
     - Width of the edge of the surrounding rectangle.
     - lineWidth

   * - orientation
     - Rotation of field in 90-degree increments.
     - rotation

   * - background color
     - Background color of field (gray, transparent, RGB, or CMYK).
     - fillColor

   * - tooltip
     - Short description of field that appears on mouse-over.
     - userName

   * - read only
     - Whether the user may change the field contents.
     - readonly

   * - scrolling
     - Whether text fields may scroll.
     - doNotScroll

   * - display
     - Whether visible or hidden on screen or in print.
     - display

   * - text
     - Font, color, size, rich text, comb format, multiline, limit to number of characters, file selection format, or password format.
     - textFont, textColor, textSize, richText, richValue, comb, multiline, charLimit, fileSelect, password

   * - text alignment
     - Text layout in text fields.
     - alignment

   * - button alignment
     - Alignment of icon on button face.
     - buttonAlignX, buttonAlignY

   * - button icon scaling
     - Relative scaling of an icon to fit inside a button face.
     - buttonFitBounds, buttonScaleHow, buttonScaleWhen

   * - highlight mode
     - Appearance of a button when pushed.
     - highlight

   * - glyph style
     - Glyph style for checkbox and radio buttons.
     - style

   * - number of items
     - Number of items in a combo box or list box.
     - numItems

   * - editable
     - Whether the user can type in a combo box.
     - editable

   * - multiple selection
     - Whether multiple list box items may be selected.
     - multipleSelection

.. raw:: html

   <a name="28613"></a>

Button fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will begin by creating a button named ``myButton`` :

::

      var f = this.addField("myButton", "button", 0, [200, 250, 250, 400]);

In most cases, however, a form field, such as this button, is created through the UI.

If the field already exists, get the Field object as follows:

::

      var f = this.getField("myButton");

To create a blue border along the edges of its surrounding rectangle, we will set its ``strokeColor`` property:

::

      f.strokeColor = color.blue;

In addition, you can select from one of the following choices to specify its border style: solid (``border.s``), beveled (``border.b``), dashed (``border.d``), inset (``border.i``), or underline (``border.u``). In this case we will make the border appear beveled by setting its ``borderStyle`` property:

::

      f.borderStyle = border.b;

To set the line thickness (in points) of the border, set its ``lineWidth`` property:

::

      f.lineWidth = 1;

To set its background color to yellow, we will set its ``fillColor`` property:

::

      f.fillColor = color.yellow;

To specify the text that appears on the button, invoke its ``buttonSetCaption`` method:

::

      f.buttonSetCaption("Click Here");

You can set the text size, color, and font:

::

      f.textSize = 16;
      f.textColor = color.red;
      f.textFont = font.Times;

To create a tooltip that appears when the mouse hovers over the button, set its ``userName`` property:

::

      f.userName = "This is a button tooltip for myButton.";

In addition to the text, it is also possible to specify the relative positioning of the icon and text on the button's face. In this case, we will set the layout so that the icon appears to the left of the text:

::

      f.buttonPosition = position.iconTextH;

To specify whether the button should be visible either on screen or when printing, set its ``display`` property:

::

      f.display = display.visible;

To set the button's appearance in response to user interaction, set its ``highlight`` property to one of the following values: none (``highlight.n``), invert (``highlight.i``), push (``highlight.p``), or outline (``highlight.o``). In this example, we will specify that the button appears to be pushed:

::

      f.highlight = highlight.p;

It is possible to specify the scaling characteristics of the icon within the button face. You can determine when scaling takes place by setting the button's ``buttonScaleWhen`` property to one of the following values: always (``scaleWhen.always``), never (``scaleWhen.never``), if the icon is too big (``scaleWhen.tooBig``), or if the icon is too small (``scaleWhen.tooSmall``). In this case, we will specify that the button always scales:

::

      f.buttonScaleWhen = scaleWhen.always;

You can also determine whether the scaling will be proportional by setting the ``buttonScaleHow`` property to one of the following values: ``buttonScaleHow.proportional`` or ``buttonScaleHow.anamorphic``. In this case, we will specify that the button scales proportionally:

::

      f.buttonScaleHow = buttonScaleHow.proportional;

To guarantee that the icon scales within the bounds of the rectangular region for the button, set the ``buttonFitBounds`` property:

::

      f.buttonFitBounds = true;

You can specify the alignment characteristics of the icon by setting its ``buttonAlignX`` and ``buttonAlignY`` properties. This is done by specifying the percentage of the unused horizontal space from the left or the vertical space from the bottom that is distributed. A value of ``50`` would mean that 50 percent of the unused space would be distributed to the left or bottom of the icon (centered). We will center our icon in both dimensions:

::

      f.buttonAlignX = 50;
      f.buttonAlignY = 50;

Now that you have prepared the space within the button for the icon, you can import an icon into the document and place it within the button's area. There are two methods for importing an icon for a button face and associating it with a button

-  Use the ``buttonImportIcon`` method of the Field object, this imports and associates in one step:

::

          var retn = f.buttonImportIcon("/C/temp/myIcon.pdf");
          if ( retn != 0 ) app.alert("Icon not imported");

If the argument of ``buttonImportIcon`` is empty, the user is prompted to choose an icon. This approach works for Acrobat Reader.

-  Import the icon using the ``importIcon`` method of the Doc object, then associate the icon with the button using the ``buttonSetIcon`` method of the Field object.

::

          this.importIcon({
              cName: "myIconName", cDIPath: "/C/temp/myIcon.pdf", nPage: 0});
          var myIcon = this.getIcon("myIconName");
          f.buttonSetIcon(myIcon);

If the ``cDIPath`` parameter is specified, which is the case in this example, the importIcon method can only be executed in batch and console events; however, this restrictions can be bypassed using the techniques discussed in `Executing privileged methods in a non-privileged context <JS_Dev_Contexts.html#30303>`__. When ``cDIPath`` is not specified, the script works for Acrobat Reader.

To rotate the button counterclockwise, set its ``rotation`` property:

::

      f.rotation = 90;

Finally, you will undoubtedly wish to associate an action to be executed when the button is clicked. You can do this by invoking the ``setAction`` method of the Field object, which requires a trigger (an indication of the type of mouse event) and an associated script. The possible triggers are ``MouseUp``, ``MouseDown``, ``MouseEnter``, ``MouseExit``, ``OnFocus``, and ``OnBlur``. The following code displays a greeting when the button is clicked:

::

      f.setAction("MouseUp", "app.alert('Hello');" );

.. raw:: html

   <a name="85887"></a>

Check box fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The check box field supports many of the same properties as the button, and actions are handled in the same manner. The properties common to both form fields are:

-  ``userName``
-  ``readonly``
-  ``display``
-  ``rotation``
-  ``strokeColor``
-  ``fillColor``
-  ``lineWidth``
-  ``borderStyle``
-  ``textSize``
-  ``textColor``

In the case of ``textFont``, however, the font is always set to ``Adobe`` ``Pi``.

The ``style`` property of the Field object is used to set the appearance of the check symbol that appears when the user clicks in the check box. Permissible values of the ``style`` property are check (``style.ch``), cross (``style.cr``), diamond (``style.di``), circle (``style.ci``), star (``style.st``), and square (``style.sq``). For example, the following code causes a check to appear when the user clicks in the check box:

::

      f.style = style.ch;

The export value of the check box can be set using the ``exportValues`` property of the Field object. For example, the code below associates the export value "buy" with the check box:

::

      var f = this.getField("myCheckBox");
      f.exportValues=["buy"];

If there are several check box fields, you can indicate that one particular form field is always checked by default. To do this, you must do two things:

-  Invoke the ``defaultIsChecked`` method of the Field object. Note that since there may be several check boxes that belong to the same group, the method requires that you specify the zero-based index of the particular check box.
-  Reset the field to ensure that the default is applied by invoking the ``resetForm`` method of the Doc object.

This process is shown in the following code:

::

      var f = this.getField("myCheckBox");
      f.defaultIsChecked(0); // 0 means that check box #0 is checked
      this.resetForm([f.name]);

Other useful Field methods are

-  ``checkThisBox`` : used to check a box
-  ``isBoxChecked`` : used test whether a check box is checked
-  ``isDefaultChecked`` : use to test whether the default setting is the one selected by user

.. raw:: html

   <a name="44065"></a>

Combo box fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The combo box has the same properties as the button and check box fields. Its primary differences lie in its nature. Since the combo box maintains an item list in which the user may be allowed to enter custom text, it offers several properties that support its formatting options.

If you would like the user to be permitted to enter custom text, set the ``editable`` property of the Field object, as shown in the following code:

::

      var f = this.getField("myComboBox");
      f.editable = true;

You can specify whether the user's custom text will be checked for spelling by setting its ``doNotSpellCheck`` property. The following code indicates that the spelling is not checked:

::

      f.doNotSpellCheck = true;

A combo box can interact with the user in one of two ways: either a selection automatically results in a response, or the user first makes their selection and then takes a subsequent action, such as clicking a ``Submit`` button.

In the first case, as soon as the user clicks on an item in the combo box, an action can automatically be triggered. If you would like to design your combo box this way, then set its ``commitOnSelChange`` property to ``true``. Otherwise, set the value to ``false``. The following code commits the selected value immediately:

::

      f.commitOnSelChange = true;

To set the export values for the combo box items, invoke its ``setItems`` method, which can be used to set both the face and export values. In this case, the face (or appearance) value (the value that appears in the combo box) is the first value in every pair, and the export value is the second. The following code results in the full state names appearing in the combo box (as the face or appearance values), and abbreviated state names as their corresponding export values:

::

      f.setItems( ["Ohio", "OH"], ["Oregon", "OR"], ["Arizona", "AZ"] );

In many cases, it is desirable to maintain a sorted collection of values in a combo box. In order to do this, you will need to write your own sorting script. Recall that the JavaScript ``Array`` object has a ``sort`` method that takes an optional argument which may be a comparison function.

This means that you must first define a ``compare`` function that accepts two parameters. The function must return a negative value when the first parameter is less than the second, ``0`` if the two parameters are equivalent, and a positive value if the first parameter is greater.

In the following example, we define a ``compare`` function that accepts two parameters, both of which are user/export value pairs, and compares their user values. For example, if the first parameter is ``["Ohio", "OH"]`` and the second parameter is ``["Arizona", "AZ"]``, the compare function returns ``1``, since ``"Ohio"`` is greater than ``"Arizona"`` :

::

      function compare (a,b)
      {
          if (a[0] < b[0]) return -1; // index 0 means user value
          if (a[0] > b[0]) return 1;
          return 0;
      }

Create a temporary array of values and populate it with the user/export value pairs in your combo box field. The following code creates the array, iterates through the combo box items, and copies them into the array:

::

      var arr = new Array();
      var f = this.getField("myCombobox");
      for (var i = 0; i < f.numItems; i++)
          arr[i] = [f.getItemAt(i,false), f.getItemAt(i)];

At this point you can invoke the ``sort`` method of the ``Array`` object and replace the items in the combo box field:

::

      arr.sort(compare); // Sort the array using your compare method
      f.setItems(arr);

Responding to combo box changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Format tab of the Combo Box properties lists categories of formats available to combo box text. They are None, Number, Percentage, Date, Time, Special and Custom. For all formatting categories, except None and Custom, the JavaScript interpreter uses special formatting functions to properly process the text of a combo box; these functions are undocumented now, so comments here are focused on the None and Custom category.

If the formatting category is set to None, then processing the combo box is easy. Whereas the combo box does not process its own change in value, another form element can easily read the current setting of the combo box. For example, if the name of the combo box is ``myComboBox``, then the following code gets the current value:

::

   var f = this.getField("myComboBox"
   );
   var valueCombo = f.value;

The variable ``valueCombo`` contains the export value of the combo box. You cannot, by the way, get the face value, if the export value is different from the face value.

When the formatting category is set to Custom, there are two types of formatting scripts, Custom Keystroke Script and Custom Format Script.

The Custom Keystroke Script has the following general form:

::

      if (event.willCommit) {
          // Script that is executed when the choice is committed
      } else {
          // Script that is executed when the choice changes, or, if the 
          // combox box is editable, when text is typed in.
      }

With regard to the Custom Keystroke Script, there are three event properties that can be read: ``value``, ``change`` and ``changeEx``. To illustrate these event properties, let's use the state combo box, defined above. Here is the Custom Keystroke Script:

::

      if (event.willCommit) {
          console.println("Keystroke: willCommit")
              console.println("event.value = " + event.value);
              console.println("event.change = " + event.change);
              console.println("event.changeEx = " + event.changeEx);
      } else {
              console.println("Keystroke: not Committed") 
              console.println("event.value = " + event.value);
              console.println("event.change = " + event.change);
              console.println("event.changeEx = " + event.changeEx);
      }

The results of this script are listed below. Assume the combo box is set on a face value of ``"Arizona"`` and you change the combo box to read ``"Ohio"``. Additional comments are inserted.

::

   // Select Ohio, but not committed. Note that the value of event.value is still
   // set to "Arizona", but event.change is now set to the face value of the new 
   // choice, and event.changeEx is set to the export value of the new selection.
   Keystroke: not Committed
   event.value = Arizona
   event.change = Ohio
   event.changeEx = OH
   
   // The choice is committed. Note that the value of event.value is now "Ohio" 
   // and that event.change and event.changeEx are empty.
   Keystroke: willCommit
   event.value = Ohio
   event.change = 
   event.changeEx = 

The only difference between the above sequence of events when ``f.commitOnSelChange=false`` versus ``f.commitOnSelChange=true`` is that in the first case, after the user makes a (new) choice from the combo box (and the "not committed" script is executed), the user must press the Enter key or click on a white area outside the field to commit the change, at this point, the "willCommit" script will execute. When ``f.commitOnSelChange=true``, these two blocks of code will execute one after the other, with the "not committed" code executing first.

A combo box can also be editable. An editable combo box is one where the user is allowed to type in, or paste in, a selection. A combo box can be made editable by checking Allow User to Enter Custom Text in the Options tab of the Combo Box Properties dialog box. For JavaScript, the ``editable`` field property is used, as in the following example.

::

      var f = this.getField("myComboBox");
      f.editable = true;

The above output was captured in the console from a combo box that was not editable. The output is the same when the user selects one of the items in the combo box; when the user types in a selection, the output looks like this, assuming the user has already typed in the string "``Te"`` and is now typing in ``"x":``

::

   /* 
      Note that when the selection is not committed, event.changeEx is empty. You
      can test whether the user is typing in by using the conditional test
      if ( event.changeEx == "" ) {<type/paste in>} else {<select from list>}
      Note also that the value of event.value is "Te" and the value of 
      event.change is "x"; the previous keystrokes and the current keystroke,
      respectively. When the user pastes text into the combo box, the length of
      event.change will be larger than one, 
      if(event.change.length > 1 ) {<pasted text>} else {<typed text>}
   */
   Keystroke: not Committed
   event.value = Te
   event.change = x
   event.changeEx = 
   // ...Additional keystrokes to spell "Texas"
   // Once committed, this output is the same as when the combo box is not
   // editable.
   Keystroke: willCommit
   event.value = Texas
   event.change = 
   event.changeEx = 

Custom script for a combo box
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Suppose now you want to make the combo box editable, and ask to user to pick a state from the pop-up combo box, or to type in a state. You want to format the state entered by the user so that the first letter is capitalized, and the rest are lower case.

The following script is used for the Custom Keystroke Script of the combo box:

::

      if (event.willCommit) {
          // Test to be sure there something more than white spaces.
          if ( event.rc = !( event.value.replace(/s/g,"") == "" )) {
              // On commit, split event.value into an array, convert to lower case
              // and upper case for the first letter.
              var aStr = event.value.split(" ");
              for ( var i=0; i<aStr.length; i++){
                  aStr[i] = aStr[i].charAt(0).toUpperCase()
                      +aStr[i].substring(1,aStr[i].length).toLowerCase();
              }
              // Join the separate words together, and return as the new value.
              event.value = aStr.join(" ");
          }
          
      } else {
          // User is typing in something, make sure it is a letter or space
          var ch = event.change;
          if ( ch.length==1 )
          event.rc = (ch==" ")  (ch>="a" &&  ch<="z")  (ch>="A" && ch<="Z");
      }

Format the combo box so that is reads ``"State`` ``of`` ``Ohio"``, for example.

Custom format script:

::

      event.value =  "State of " + event.value;

If the user has pasted into the editable combo box, you can catch any non-letters or spaces with the validation script. A regular expression is used to see if there is something different from a letter or space.

Custom validation script:

::

      event.rc = !/[^a-zA-Z ]+/.test(event.value);

These various events, Keystroke, Format and Validate, define the ``rc`` property of the event object. In the above code, the ``event.rc`` is used to signal that the input is acceptable (``true``) or not acceptable (``false``). In this way, the input can be checked, validated, and formatted, or, at some stage, can be canceled by setting ``event.rc = false``.

Full documentation of the objects used in the above sample script can be found in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__.

.. raw:: html

   <a name="53749"></a>

List box fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A list box has many of the same properties as buttons and combo boxes, except for the fact that the user cannot enter custom text and, consequently, that spellchecking is not available.

However, the user can select multiple entries. To enable this feature, set its ``multipleSelection`` property to ``true``, as shown in the code below:

::

      var f = this.getField("myListBox");           
      f.multipleSelection = true;

The List Box Properties dialog box has a Selection Change tab, this corresponds to the ``"Keystroke"`` trigger of the combo box or text field. To enter script to process a change in the status of the list box, you can either use the UI, or you can install your script, like so,

::

      f.setAction( "Keystroke", "myListboxJavascript();" );

In the above, the action is to simply call a JavaScript function, defined, perhaps, as document JavaScript.

The manner in which you process a selection change is the same as the combo box, with one exception.

::

   // Note that unlike the combo box, the value of event.value is the export value
   // of the field, not the face value as it is with the combo box.
   Keystroke: not committed
   event.value = FL
   event.change = Arizona
   event.changeEx = AZ
   // When we commit, the value of event.value is the face value, not the export
   // value.
   Keystroke: willCommit
   event.value = Arizona
   event.change = 
   event.changeEx = 

You can allow the user to make multiple selections from a list box by checking the Multiple Selection check box in the Options tab of the List Box Properties dialog box, or you can make this selection using JavaScript:

::

      var f = this.getField("myListBox");
      f.multipleSelection=true;

It is not possible to detect multiple selection using a Selection Change script; however, multiple selection can be detected from another form field, such as a button. To get and set multiple values of the list box, use the ``currentValueIndices`` property of the Field object. The following example illustrates the techniques.

#. Accessing a list from another field

This example accesses the list box which allows multiple selections. It simply reads the current value and reports to the console. When the current value of the list box is a single selection, ``currentValueIndices`` returns a number type (the index of the item selected); when there are multiple selections, ``currentValueIndices`` returns an array of indices.

::

      var f = this.getField("myListBox");
      var a = f.currentValueIndices;
      if (typeof a == "number") // A single selection
          console.println("Selection: " + f.getItemAt(a, false));
      else {// Multiple selections
          console.println("Selection:");
          for (var i = 0; i < a.length; i ++)
              console.println(" " + f.getItemAt(a[i], false));
      }

The field method ``getItemAt`` is used to get the face values of the list, using the index value returned by ``currentValueIndices``.

Other relevant field properties and methods not mentioned in this section are ``numItems``, ``insertItemAt``, ``deleteItemAt`` and ``setItems``. The *JavaScript for Acrobat API Reference* documents all these methods and supplies many informative examples.

.. raw:: html

   <a name="34428"></a>

Radio button fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The unique nature of radio buttons is that they are always created in sets, and represent a collection of mutually exclusive choices. This means that when you create a set of radio buttons, you must give all of them identical names with possibly different export values.

The behavior of the radio buttons depends on several factors, whether or not there are two or more members of the same radio set that have the same export value, and whether or not the item Buttons With the Same Name and Value are Selected in Unison is checked in the Options tab of the Radio Button Properties dialog box. (The latter can be set by JavaScript using the ``radiosInUnison`` field property.) The differences are illustrated in the discussion below.

You have four radio buttons all in the same group (all having the same name of ``"myRadio"``):

::

      var f = this.getField("myRadio"
   );

Suppose the export values are ``export0``, ``export1``, ``export2``, and ``export3``. This is the simplest case, all choices are mutually exclusive; the behavior does not depend on whether Buttons With the Same Name and Value are Selected in Unison is checked.

Now suppose the export values of the four radio buttons are ``export0``, ``export1``, ``export2``, and ``export2``. If ``f.radiosInUnison`` = ``false``, the four buttons behave as in the simplest case above. If ``f.radiosInUnison`` = ``true,`` then there are only three mutually exclusive buttons; clicking either of the two radios with export value ``export2`` will select both of them, while clicking the radio button with export value of ``export0`` will select only that button.

Accessing individual radio button widgets
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This example illustrates how you can programmatically access the individual radio buttons in the same radio group (all having the same name). Assume the command name is ``myRadio`` and there are four widgets in the field.

::

      var f = this.getField("myRadio");
      // Get the second widget, change its appearance and add an action
      var g = this.getField(f.name+".1");
      g.strokeColor = color.red;
      g.setAction("MouseUp", 
          "app.alert('Export value is ' + this.getField('myRadio').value)");

Some properties of the Field object, such as ``value``, apply to all widgets that are children of that field. Other properties, such as ``strokeColor`` and ``setAction``, are specific to individual widgets. See the section on the Field object in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for a complete list of Field properties accessible at the widget level.

Counting the number of widgets in a radio button field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sometimes the number of widgets in a radio button field is unknown. The code below counts the number of widgets.

::

      var f = this.getField("myRadio")
      var nWidgets=0;
      while(true) {
          if ( this.getField(f.name + "." + nWidgets) == null ) break;
              nWidgets++;
      }
      console.println("There are " + nWidgets + " widgets in this radio field");

.. raw:: html

   <a name="61295"></a>

Signature fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Signature fields have the usual properties, as listed under the General and Appearance tabs of the Digital Signature Properties dialog box. These can be set in the standard way, by the UI or through JavaScript, as in this example:

::

      var f = this.getField("Signature1");
      f.strokeColor = color.black;

When the signature field is signed, you may want to execute some script in response to this event. The script can be entered through the Signed tab of the Digital Signature Properties dialog box, or through the ``setAction`` method of the Field object.

You can set the action of a signature field by invoking its ``setAction`` method and passing in the ``Format`` trigger name as the first parameter. When the user signs the form, you can reformat other form fields with the script you pass in to the ``setAction`` method.

Once a document is signed, you may wish to lock certain form fields within the document. You can do so by creating a script containing a call to the signature field's ``setLock`` method and passing that script as the second parameter to the signature field's ``setAction`` method.

The ``setLock`` method requires a ``Lock`` object, which you will obtain by invoking the form field's ``getLock`` method. Once you obtain the ``Lock`` object, set its ``action`` and ``fields`` properties. The ``action`` property can be set to one of 3 values: ``"All"`` (lock all fields), ``"Exclude"`` (lock all fields except for these), or ``"Include"`` (lock only these fields). The ``fields`` property is an array of fields.

For example, suppose you created a signature and would like to lock the form field whose name is ``myField`` after the user signs the document. The following code would lock ``myField`` :

::

      var f = this.getField("Signature1");
      var oLock = f.getLock();
      oLock.action = "Include";
      oLock.fields = new Array("myField");
      f.setLock(oLock);

To actually sign a document, you must do two things: choose a security handler, and then invoke the signature field's ``signatureSign`` method. The following code is an example of how to choose a handler and actually sign the document:

::

      var f = this.getField("Signature1");  
      var ppklite = security.getHandler("Adobe.PPKLite");
      var oParams = {
          cPassword: "myPassword", 
          cDIPath: "/C/signatures/myName.pfx" // Digital signature profile
      };
      ppklite.login(oParams);
      f.signatureSign(ppklite,
          {
              password: "myPassword",
              location: "San Jose, CA",
              reason: "I am approving this document",
              contactInfo: "userName@example.com",
              appearance: "Fancy"
          }
      ); //End of signature
      ppklite.logout()

.. raw:: html

   <a name="64180"></a>

Text fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The text field has many of the same properties as buttons and combo boxes. In addition, it offers the following specialized properties shown in the following table. (The table assumes that ``f`` is the field object of a text field.)

Text field properties

.. _section-3:

.. list-table::
   :widths: 10 10 80
   :header-rows: 1

   * - Property
     - Description
     - Example

   * - alignment
     - Justify text
     - 

   * - charLimit
     - Limit on number of characters in area
     - 

   * - comb
     - Comb of characters subject to limitation set by ``charLimit``
     - 

   * - defaultValue
     - Set a default text string
     - 

   * - doNotScroll
     - Permit scrolling of long text
     - 

   * - doNotSpellCheck
     - Set spell checking
     - 

   * - fileSelect
     - Format field as a file path
     - 

   * - multiline
     - Allow multiple lines in the area
     - 

   * - password
     - Use special formatting to protect the user's password
     - 

   * - richText
     - Set rich text formatting
     - 

When the user enters data into a text field, the usual ``event`` object can be queried to process the keystrokes, the behavior is similar to the combo box. In the output below, assume the user has already typed in the ``"Te"`` and types in the letter ``"x":``

::

   // The value of event.value is the current text in text field, event.change has
   // the current keystroke. Note that event.changeEx is always empty, and is not
   // relevant to the text field.
   Keystroke: not Committed
   event.value = Te
   event.change = x
   event.changeEx = 
   
   Keystroke: willCommit
   event.value = Texas
   event.change = 
   event.changeEx =

Use the Custom Keystroke Script to intercept user keystrokes and process them. For example, the following script changes all input to upper case:

Custom Keystroke Script:

::

   if (!event.willCommit) event.change = event.change.toUpperCase();

.. raw:: html

   <a name="34131"></a>

Validation scripts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can enforce valid ranges, values, or characters entered in form fields. The main reason to use validation is to ensure that users are only permitted to enter valid data into a form field. Validation is used whenever the user enters text into a form field, for text fields and for editable combo boxes.

Enter the validation script through the Validation tab of the Text Field Properties dialog box, or through the ``setAction`` method of the Field object. In the latter case, pass ``Validate`` as the first parameter, as follows:

::

      var f = this.getField("myText");
      f.setAction("Validate", "myValidateRange(true, -1, true, 5)");

Normally, however, such a script is entered through the UI.

Inputting numbers and checking the range in a text field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a simple example of a Custom Keystroke Script for inputting a number, and a simple validation script for checking the range of the number.

Custom Keyboard Script:

::

      if ( event.willCommit ) {
          var value = ""+event.value.replace(/s*/g,"");
          if ( value != "" ) {
              if (!isFinite(value)) {
                  app.beep(0);
                      event.rc = false;
              }
          }
      } else 
          if ( event.change == " " ) event.change = "";

A representative Custom Validation Script is

::

          myValidateRange(true, -1, true, 5);

which checks whether the value entered is strictly between ``-1`` and ``5``. The validation script calls the following document JavaScript:

::

      function myRangeCheck(bGreater, nGreater, bLess, nLess)
      {
              value = event.value;
              if ( bGreater && ( value <= nGreater ) ) {
              app.alert("Value must be greater than " + nGreater);
                      app.beep();
                      event.rc = false;
                      return;
          }
          if ( bLess && ( value >= nLess ) ) {
              app.alert("Value must be less than " + nLess);
                      app.beep();
                      event.rc = false;
                      return;       
              }
      }

.. raw:: html

   <a name="68521"></a>

Calculation script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Calculation options make it possible to automate mathematical calculations associated with form fields. To apply a calculation to a form field action, enter the script through the Calculate tab of the Text Field Properties dialog box. On this tab there are three options:

#. The value is the sum(+)/product(x), average/minimum/maximum of a specified collection of fields.
#. The value is the result of simplified field notation.
#. The value is the result of a Custom Calculation Script.

Options (1) and (2) are entered through the UI, option (3) is entered through the UI or through the ``setAction`` method of the Field object. If you use the ``setAction`` method, pass ``"Calculate"`` as the first parameter, and pass a script containing a call to a calculation script as the second parameter.

The calculation script makes all necessary calculations, perhaps drawing values from other text fields, then reports the calculated value to the field by setting ``event.value``.

Calculating the average of several text fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The script presented here calculates the average of several text fields. If one of the fields has no value, it is not figured into the average. The example assumes all fields require a number for their value.

The following script is entered as a custom calculation script:

::

      var aNumFields = new Array("Text1.0", "Text1.1", "Text1.2","Text1.3",

           "Text1.4");
      myAverageFunction(aNumFields);

The script above simply calls the ``myAverageFunction``, it is this function that calculates the average of the array of fields passed as its argument, and sets ``event.value``. The function is placed in the document as document JavaScript.

::

      function myAverageFunction(aNumFields)
      {
          // n = number of fields that have a numerical value
          var n=0, sum = 0;
              for ( var i=0; i<aNumFields.length; i++) {
              var v = this.getField(aNumFields[i]).value;
                          if ( v != "" ) {
                                  n++;
                                  sum += v;
                          }
              }
          if ( n == 0 ) event.value = "";
              else event.value = sum/n;    
      }

.. raw:: html

   <a name="39370"></a>

Task-based topics
=================

In this section, common problems/tasks are presented, including such topics as highlighting required fields, positioning form fields, duplicating form fields, importing and exporting form data and global variables.

.. raw:: html

   <a name="15846"></a>

Highlighting required form fields
---------------------------------

You can require that some text fields on a form are not left blank: these are called *required form fields*. It is helpful to the user to highlight them so that they can be easily recognized. The following example demonstrates one approach to the problem.

Highlighting required fields
-------------------------------------

Create two buttons in a document containing form fields. One button has the JavaScript mouse up action

::

      showRequired();

that will highlight all required fields, the other button has the following mouse up action

::

      restoreRequired();

that restores the fields to the appearance state they were in before the ``showRequired()`` function executed.

The script that follows is a document-level JavaScript that defines the functions called by the two buttons.

::

      var oFieldNames = new Object(); // used to save the appearance of the fields
      function showRequired() {
          // Search through all fields for those that are set to required, excluding
          // any button fields.
          for ( var i=0; i < this.numFields; i++) {
              var fname = this.getNthFieldName(i);
              var f = this.getField(fname);
                      if ( (f.type != "button") && f.required) {
                  // Save appearance data in oFieldNames
                  oFieldNames[fname]={ strokeColor: f.strokeColor, 
                      fillColor: f.fillColor};
                  // Assign a red boundary color, and fill color
                  f.strokeColor=color.red;
                  f.fillColor=app.runtimeHighlightColor;
              }
          }   
      }
      // Now restore the fields.
      function restoreRequired() {
          if ( typeof oFieldNames == "object") {
              for ( var o in oFieldNames ) {
                  var f = this.getField(o);
                  f.strokeColor=oFieldNames[o].strokeColor;
                  f.fillColor=oFieldNames[o].fillColor;            
              }
          }
          oFieldNames = new Object();
      }

.. raw:: html

   <a name="99654"></a>

Making a form fillable

In order for a form to be fillable, its text fields or combo boxes must be formatted so that the user can edit them.

If you would like a text area to be enabled for typing, set its ``readonly`` property to ``false``, as shown in the following code:

::

      f.readonly = false;

If you would like a combo box to be enabled for typing, set its ``editable`` property to ``true``, as shown in the following code:

::

      f.editable = true;

.. raw:: html

   <a name="63888"></a>

Setting the hierarchy of form fields
------------------------------------

Fields can be arranged hierarchically within a document. For example, form fields with names like ``"FirstName"`` and "``LastName`` " are called flat names and there is no association between them. To change an attribute of these fields requires you to change the attribute for each field:

::

      var f = this.getField("FirstName");
      f.textColor = color.red;
      var f = this.getField("LastName");
      f.textColor = color.red;

The above code changes the text color of each of the two fields to red.

By changing the field names, a hierarchy of fields within the document can be created. For example, "``Name.First`` " and "``Name.Last`` " forms a tree of fields. The period (.) separator in Acrobat forms denotes a hierarchy shift. "``Name`` " in these fields is the parent; "``First`` " and "``Last`` " are the children. Also, the field "``Name`` " is an internal field because it has no visible appearance. "``First`` " and "``Last`` " are terminal fields that appear on the page.

Acrobat form fields that share the same name also share the same value. Terminal fields can have different presentations of that data. For example, they can appear on different pages, be rotated differently, or have a different font or background color, but they have the same value. Therefore, if the value of one presentation of a terminal field is modified, all others with the same name are updated automatically.

To repeat the above example using the naming scheme of "``Name.First`` " and "``Name.First`` ", the code is

::

      var f = this.getField("Name");
      f.textColor=color.red;

This changes the text color of both fields to red.

Of course, if you with to give the two fields different text colors, then you reference each field individually,

::

      var f = this.getField("Name.First");
      f.textColor = color.red;
      var f = this.getField("Name.Last");
      f.textColor = color.blue;

Each presentation of a terminal field is referred to as a widget. An individual widget does not have a name but is identified by index (0-based) within its terminal field. The index is determined by the order in which the individual widgets of this field were created (and is unaffected by tab-order).

You can determine the index for a specific widget by using the Fields navigation tab in Acrobat. The index is the number that follows the '#' sign in the field name shown. (In Acrobat 6.0 or later, the widget index is displayed only if the field has more than one widget.) You can double-click an entry in the Fields panel to go to the corresponding widget in the document. Alternatively, if you select a field in the document, the corresponding entry in the Fields panel is highlighted.

Beginning with Acrobat 6.0, ``getField`` can be used to retrieve the Field object of one individual widget of a field. This notation consists of appending a period (.) followed by the widget index to the field name passed. When this approach is used, the Field object returned by ``getField`` encapsulates only one individual widget. You can use the Field objects returned this way anywhere you would use a Field object returned by passing the unaltered field name.

For example, suppose you have four text fields all with the same name of ``"myTextField"``. Executing the following code changes the text color of all four fields to red.

::

      this.getField("myTextField").textColor=color.red;

To change the text color of an individual field, you would execute the following code:

::

      this.getField("myTextField.1").textColor=color.blue;

This code changes the text color of the text in the second field, the one labeled as ``"myTextField#1"`` in the Fields navigation tab, to blue.

The technique of referencing individual widgets is especially useful with radio button fields, see `Radio button fields <JS_Dev_AcrobatForms.html#34428>`__ for additional discussion and examples.

Some properties of the Field object, such as ``value``, apply to all widgets that are children of that field. Other properties, such as ``textColor`` and ``setAction``, are specific to individual widgets. See the section on the Field object in the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for a complete list of Field properties accessible at the widget level.

.. raw:: html

   <a name="72725"></a>

Creating forms
--------------

In this section you learn how to create a form field using the Doc object ``addField`` method. Topics include:

-  `Positioning form fields <JS_Dev_AcrobatForms.html#38340>`__
-  `Duplicating form fields <JS_Dev_AcrobatForms.html#58000>`__
-  `Creating multiple form fields <JS_Dev_AcrobatForms.html#92085>`__

.. _section-4:

.. raw:: html

   <a name="38340"></a>

Positioning form fields
-----------------------

Remember that form field positioning takes place in Rotated User Space, in which the origin of a page is located at the bottom left corner.

If you are accustomed to calculating the positions of form fields from the top left corner of a page, the following example will serve as a template for obtaining the correct position.

In this example, we will position a 1 inch by 2 inch form field 0.5 inches from the top of the page and 1 inch from the left side:

::

      // 1 inch = 72 points
      var inch = 72; 
   
      // Obtain the page coordinates in Rotated User Space
      var aRect = this.getPageBox({nPage: 2}); 
   
      // Position the top left corner 1 inch from the left side
      aRect[0] += 1 *inch; 
   
      // Make the rectangle 1 inch wide
      aRect[2] = aRect[0] + 1*inch; 
   
      // The top left corner is 0.5 inch down from the top of the page
      aRect[1] -= 0.5*inch; 
   
      // Make the rectangle 2 inches tall
      aRect[3] = aRect[1] - 2*inch;
   
      // Draw the button
      var f = this.addField("myButton", "button", 2, aRect);

Normally, when you create a form field, you do so using the UI; creating a form field using the ``addField`` has limited applications because the exact positioning of the field on the page (and relative to its content) is usually not known. The ``addField`` method is useful in situations when you either know the positioning of the field, or you can acquire that information from another method; the Example `Inserting navigation buttons on each page <JS_Dev_AcrobatForms.html#77049>`__ illustrates the use of ``addField`` when the positioning of the fields are known in advance.

.. raw:: html

   <a name="58000"></a>

Duplicating form fields
-----------------------

It may sometimes be useful to duplicate a form field in other pages of the document. For example, you may wish to insert navigation form buttons at the bottom of your document to help the user navigate.

Inserting navigation buttons on each page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The script that follows can be executed in the console, or it can be used as batch sequence JavaScript. Additional customizations are possible.

::

   var aPage = this.getPageBox();
   var w = 45;         // Width of each button
   var h = 12          // Height of each button
   var nNavi = 4;      // Number of buttons to be placed
   var g = 6;          // Gap between buttons
   var totalWidth = nNavi *. + (nNavi - 1) *.; // total width of navi bar
   
   var widthPage = aPage[2] - aPage[0];
   // Horizontal offset to center navi bar
   var hoffset = (widthPage - totalWidth) / 2; 
   var voffset = 12;          // vertical offset from bottom
   
   for (var nPage = 0; nPage < this.numPages; nPage++) {
           // Create the fields
           var pp = this.addField("PrevPage", "button", nPage,  
                  [ hoffset, voffset, hoffset + w, voffset + h ] );
               pp.buttonSetCaption(pp.name);
               pp.fillColor=color.ltGray;
               pp.setAction("MouseUp", "this.pageNum--");
           var np = this.addField("NextPage", "button", nPage,
               [ hoffset + w + g, voffset, hoffset + 2*w + g, voffset + h ] );
               np.buttonSetCaption(np.name);
               np.fillColor=color.ltGray;
               np.setAction("MouseUp", "this.pageNum++");
           var pv = this.addField("PrevView", "button", nPage,
               [ hoffset + 2*w + 2*g, voffset, hoffset + 3*w + 2*g, voffset + h ] );
               pv.buttonSetCaption(pv.name);
               pv.fillColor=color.ltGray;
               pv.setAction("MouseUp", "app.goBack()");
           var nv = this.addField("NextView", "button", nPage,
               [ hoffset + 3*w + 3*g, voffset, hoffset + 4*w + 3*g, voffset + h ] );
               nv.buttonSetCaption(nv.name);
               nv.fillColor=color.ltGray;
               nv.setAction("MouseUp", "app.goForward()");
   }

.. raw:: html

   <a name="92085"></a>

Creating multiple form fields
-----------------------------

The best approach to creating a row, column, or grid of form fields is to use array notation in combination with hierarchical naming.

For example, the following code creates a column of three text fields:

::

   var myColumn = new Array();
   myColumn[0] = "myFieldCol.name";
   myColumn[1] = "myFieldCol.birthday";
   myColumn[2] = "myFieldCol.ssn";
   var initialPosition = [ 36, 36 ];
   var w = 2*72;
   var h = 12;
   var vGap = 6;
   var aRect = [initialPosition[0], initialPosition[1]-(h+vGap),
   initialPosition[0]+w, initialPosition[1]-h-(h+vGap)];
   for (var i=0; i<myColumn.length; i++)
   {
       aRect[1] += (h+vGap); // move the next field down 100 points
       aRect[3] += (h+vGap); // move the next field down 100 points
       var f = this.addField(myColumn[i], "text", 0, aRect);
   }
   f = this.getField("myFieldCol");
   f.strokeColor = color.black; // set some common properties

.. raw:: html

   <a name="18928"></a>

Defining the tabbing order
======================================

You can specify the tabbing order on a given page by invoking the ``setPageTabOrder`` method of the Doc object, which requires two parameters: the page number and the order to be used.

There are three options for tabbing order: you can specify tabbing by rows (``"rows"``), columns (``"columns"``), or document structure (``"structure"``).

For example, the following code sets up tabbing by rows for page 2 of the document:

::

      this.setPageTabOrder(2, "rows");

To set the tab order on each page of the document, you would execute a script like this:

::

      for (var i = 0; i < this.numPages; i++)
      this.setPageTabOrder(i, "rows");

.. raw:: html

   <a name="13770"></a>

Defining form field calculation order
==================================================

When you add a text field or combo box that has a calculation script to a document, the new form field's name is appended to the *calculation order array*. When a calculation event occurs, the calculation script for each of the form fields in the array runs, beginning with the first element in the array (array index ``0``) and continuing in sequence to the end of the array.

If you would like one form field to have calculation precedence over another, you can change its calculation index, accessed through the Field object's ``calcOrderIndex`` property. A form field script with a lower calculation index executes first. The following code guarantees that the calculation script for form field ``subtotal`` will run before the one for form field ``total`` :

::

      var subtotal = this.getField("subtotal");
      var total = this.getField("total");
      total.calcOrderIndex = subtotal.calcOrderIndex + 1;

.. raw:: html

   <a name="75191"></a>

Making PDF forms web-ready

PDF forms can be used in workflows that require the exchange of information over the web. You can create forms that run in web browsers, and can submit and retrieve information between the client and server by making a Submit button available in the form. The button can perform similar tasks to those of HTML scripts.

You will need a CGI application on the web server that can facilitate the exchange of your form's information with a database. The CGI application must be able to retrieve information from forms in HTML, FDF, or XML formats.

In order to enable your PDF forms for data exchange over the web, be sure to name your form fields so that they match those in the CGI application. In addition, be sure to specify the export values for radio buttons and check boxes.

The client side form data may be posted to the server using the HTML, FDF, XFDF, or PDF formats. Note that the use of XFDF format results in the submission of XML-formatted data to the server, which will need an XML parser or library to read the XFDF data.

The equivalent MIME types for all posted form data are shown in the following table.

MIME types for data formats

.. _section-5:

=========== =================================
Data format MIME type
=========== =================================
HTML        application/x-www-form-urlencoded
FDF         application/vnd.fdf
XFDF        application/vnd.adobe.xfdf
PDF         application/pdf
XML         application/xml
=========== =================================

.. raw:: html

   <a name="64898"></a>

Creating a submit button
------------------------

To create a submit button, begin by showing the Forms toolbar (Tools pane> Forms > Edit). From the toolbar, select the Button tool. Once selected, you can either double-click the page, or drag a rectangle. On the Actions tab of the Button Properties dialog box, use the Mouse Up trigger and select Submit a Form action. You can specify which data format is used when you select the Export Format option. If it is necessary for the server to be able to recognize and reconstruct a digital signature, it is advisable that you choose the Incremental Changes to the PDF option.

Creating a reset form button
----------------------------

Create a button using the Button tool as described in `Creating a submit button <JS_Dev_AcrobatForms.html#64898>`__, above. On the Actions tab of the Button Properties dialog box, use the Mouse Up trigger and select the Reset a Form action. Click the Add button to select which fields you want to reset to their default values.

Defining CGI export values
--------------------------

The face value of a form is not necessarily the same as its export value. When a form is submitted, the export value of each form field is the value that is used. For text fields, the face and export value is the same; for combo boxes, list boxes, radio buttons and check boxes, the face value is not the same as the export value. You need to check all the export values of your form to be sure they are values that your server-side application recognizes and accepts. The values may represent identifying information that the server-side application uses to process the incoming data.

.. raw:: html

   <a name="89554"></a>

Importing and exporting form data
=================================

Form data can be exported to a separate file, which can then be sent using email or over the web. When doing this, save either to Forms Data Format (FDF) or XML-based FDF (XFDF). This creates an export file much smaller than the original PDF file. To programmatically save your data in one of these formats use the Doc object methods ``exportAsFDF`` and ``exportAsXFDF``.

On the server-side, use the FDF Toolkit to read the FDF data, or use a XML parser or library to read the XFDF data

Note that Acrobat forms support the FDF, XFDF, tab-delimited text, and XML formats, and that XML forms support XML and XDP formats.

Emailing completed forms
===================================

Recent versions of Acrobat have offered an entire workflow around email submittal of form data. To email a completed form in FDF format, invoke the ``mailForm`` method of the Doc object, which exports the data to FDF and sends it via email.

To make an interactive email session, pass ``true`` to the first parameter, which specifies whether a user interface should be used, as shown in the code below:

::

      this.mailForm(true);

To send the exported FDF data automatically, pass ``false`` to the first parameter, and specify the ``cTO``, ``cCc``, ``cBcc``, ``cSubject``, and ``cMsg`` fields (all of which are optional), as shown in the code below:

::

      this.mailForm(false, );
      this.mailForm({
          bUI: false,
              cTo: "recipient@example.com",
          cSubject: "You are receiving mail",
              cMsg: "A client filled in your online form and "
                   + "submitted the attached data."
      })

Unless this command is executed in a privileged context, see `Privileged versus non-privileged context <JS_Dev_Contexts.html#76421>`__, the mail client will appear to the user.

Use date objects
----------------

This section discusses the use of ``Date`` objects within Acrobat. The reader should be familiar with the JavaScript ``Date`` object and the ``util`` methods that process dates. JavaScript ``Date`` objects actually contain both a date and a time. All references to ``Date`` in this section refer to the date-time combination.

.. note::

   All date manipulations in JavaScript, including those methods that have been documented in this specification are Year 2000 (Y2K) compliant.

.. note::

   When using the ``Date`` object, do not use the ``getYear`` method, which returns the current year minus 1900. Instead use the ``getFullYear`` method which always returns a four digit year. For example,

::

              var d = new Date()
              d.getFullYear(); 

Converting from a date to a string
------------------------------------------

Acrobat provides several date-related methods in addition to the ones provided by the JavaScript ``Date`` object. These are the preferred methods of converting between ``Date`` objects and strings. Because of Acrobat's ability to handle dates in many formats, the ``Date`` object does not always handle these conversions correctly.

To convert a ``Date`` object into a string, the ``printd`` method of the ``util`` object is used. Unlike the built-in conversion of the ``Date`` object to a string, ``printd`` allows an exact specification of how the date should be formatted.

::

      /*  example of util.printd */
      var d = new Date(); // Create a Date object containing the current date
      /* create some strings from the Date object with various formats with util.printd */
      var s = [ "mm/dd/yy", "yy/m/d", "mmmm dd, yyyy", "dd-mmm-yyyy" ];
      for (var i = 0; i < s.length; i++) {
          /* print these strings to the console */
          console.println("Format " + s[i] + " looks like: "
              + util.printd(s[i], d));
      }

The output of this script would look like:

::

      Format mm/dd/yy looks like: 01/15/05
      Format yy/mm/dd looks like: 05/1/15
      Format mmmm dd, yyyy looks like: January 15, 2005
      Format dd-mmm-yyyy looks like: 15-Jan-2005

.. note::

   You should output dates with a four digit year to avoid ambiguity.

Converting from a string to a date
-----------------------------------------

To convert a string to a ``Date`` object, use the ``util`` object's ``scand`` method. It accepts a format string that it uses as a hint as to the order of the year, month, and day in the input string.

::

      /* Example of util.scand */
      /* Create some strings containing the same date in differing formats. */
      var s1 = "03/12/97";
      var s2 = "80/06/01";
      var s3 = "December 6, 1948";
      var s4 = "Saturday 04/11/76";
      var s5 = "Tue. 02/01/30";
      var s6 = "Friday, Jan. the 15th, 1999";
      /* Convert the strings into Date objects using util.scand */
      var d1 = util.scand("mm/dd/yy", s1);
      var d2 = util.scand("yy/mm/dd", s2);
      var d3 = util.scand("mmmm dd, yyyy", s3);
      var d4 = util.scand("mm/dd/yy", s4);
      var d5 = util.scand("yy/mm/dd", s5);
      var d6 = util.scand("mmmm dd, yyyy", s6);
      /* Print the dates to the console using util.printd */
      console.println(util.printd("mm/dd/yyyy", d1));
      console.println(util.printd("mm/dd/yyyy", d2));
      console.println(util.printd("mm/dd/yyyy", d3));
      console.println(util.printd("mm/dd/yyyy", d4));
      console.println(util.printd("mm/dd/yyyy", d5));
      console.println(util.printd("mm/dd/yyyy", d6));

The output of this script would look like this:

::

      03/12/1997
      06/01/1980
      12/06/1948
      04/11/1976
      01/30/2002
      01/15/1999

Unlike the date constructor (``new Date(...)``), ``scand`` is rather forgiving in terms of the string passed to it.

.. note::

   Given a two digit year for input, ``scand`` resolves the ambiguity as follows: if the year is less than 50 then it is assumed to be in the 21st century (i.e. add 2000), if it is greater than or equal to 50 then it is in the 20th century (add 1900). This heuristic is often known as the *Date Horizon*.

Date arithmetic
---------------

It is often useful to do arithmetic on dates to determine things like the time interval between two dates or what the date will be several days or weeks in the future. The JavaScript ``Date`` object provides several ways to do this. The simplest and possibly most easily understood method is by manipulating dates in terms of their numeric representation. Internally, JavaScript dates are stored as the number of milliseconds (one thousand milliseconds is one whole second) since a fixed date and time. This number can be retrieved through the ``valueOf`` method of the ``Date`` object. The ``Date`` constructor allows the construction of a new date from this number.

::

      /* Example of date arithmetic. */
      /* Create a Date object with a definite date. */
      var d1 = util.scand("mm/dd/yy", "4/11/76");
      /* Create a date object containing the current date. */
      var d2 = new Date();
      /* Number of seconds difference. */
      var diff = (d2.valueOf() - d1.valueOf()) / 1000;
      /* Print some interesting stuff to the console. */
      console.println("It has been " 
          + diff + " seconds since 4/11/1976");
      console.println("It has been " 
          + diff / 60 + " minutes since 4/11/1976");
      console.println("It has been " 
          + (diff / 60) / 60 + " hours since 4/11/1976");
      console.println("It has been " 
          + ((diff / 60) / 60) / 24 + " days since 4/11/1976");
      console.println("It has been " 
          + (((diff / 60) / 60) / 24) / 365 + " years since 4/11/1976");

The output of this script would look something like this:

::

      It has been 718329600 seconds since 4/11/1976
      It has been 11972160 minutes since 4/11/1976
      It has been 199536 hours since 4/11/1976
      It has been 8314 days since 4/11/1976
      It has been 22.7780821917808 years since 4/11/1976

The following example shows the addition of dates.

::

      /* Example of date arithmetic. */
      /* Create a date object containing the current date. */
      var d1 = new Date();
      /* num contains the numeric representation of the current date. */
      var num = d1.valueOf();
      /* ddd thirteen days to today's date, in milliseconds. */
      /* 0000 ms/sec, 60 sec/min, 60 min/hour, 24 hours/day, 13 days */
      num += 1000 *0 *0 *4 *3;
      /* create our new date, 13 days ahead of the current date. */
      var d2 = new Date(num);
      /* print out the current date and our new date using util.printd */
      console.println("It is currently: " 
          + util.printd("mm/dd/yyyy", d1));
      console.println("In 13 days, it will be: " 
          + util.printd("mm/dd/yyyy", d2));

The output of this script would look something like this:

::

      It is currently: 01/15/1999
      In 13 days, it will be: 01/28/1999

Defining global variables in JavaScript
=====================================================

In this section we discuss how to define, set, get and manage global variables.

.. raw:: html

   <a name="43014"></a>

Enable the global object security policy
----------------------------------------

Beginning with version 8, the access to global variables has changed somewhat. The JavaScript category in the Preferences dialog box (Ctrl+K) has a new security check box, Enable Global Object Security Policy.

-  When checked, the default, each time a global variable is written to, the origin which set it is remembered. Only origins that match can then access the variable.

   -  For files, this means only the file that set it, having the same path it had when the variable was set, can access the variable.
   -  For documents from URLs it means only the host which set it can access the variable.

There is an important exception to the restrictions described above, global variables can be defined and accessed in a privileged context, in the console, in a batch sequence and in folder JavaScript. A global variable set at the folder level can be accessed at the folder level, or from within the console.

-  When not checked, documents from different origins are permitted to access the variable; this is the behavior previous to version 8.0.

Additional discussion and examples, see `Global object security policy <JS_Dev_AcrobatForms.html#59406>`__.

Setting and getting a global variable
-------------------------------------

The Acrobat extensions to JavaScript define a ``global`` object to which you can attach global variables as properties. To define a new global variable called ``myVariable`` and set it equal to the number 1, you would type:

::

      global.myVariable = 1;

A global variable can be read in the usual way,

::

   console.println("The value of global.myVariable is " + global.myVariable);

The life of this variable ends when the application is closed.

In versions of Acrobat previous to 8.0, any document open in Acrobat (or Acrobat Reader) had access to any global variable and its value. This same behavior can be maintained in version 8 provided the item Enable Global Object Security Policy, found in the JavaScript section of the Preference, is unchecked. When checked, however, which is the default, a global variable is restricted to only that document that created the global variable in the case of viewing PDF files in Acrobat or Acrobat Reader, or to only those documents that come from the same web host where the global variable was set. See the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for a more detailed description of this policy.

Deleting global variables
-------------------------

Once you have finished using a global variable, it can be deleted with the ``delete`` operator.

::

      global.myVariable = 1;
      delete global.myVariable;

Making global variables persistent
----------------------------------

Global data does not persist across user sessions unless you specifically make your global variables persistent. The predefined ``global`` object has a method designed to do this. To make a variable named ``myVariable`` persist across sessions, use the following syntax:

::

      global.setPersistent("myVariable",true);

In future sessions, the variable will still exist with its previous value intact.

Beginning with Acrobat version 8, there is a new security policy for global variables that applies to global persistent variables as well. See the description above of this policy for more details.

Querying an Acrobat form field value in another open form
------------------------------------------------------------

Use the ``global`` object ``subscribe`` method to make the field(s) of interest available to others at runtime. For example, a document (Document A) may contain a document script (invoked when that document is first opened) that defines a global field value of interest:

::

      global.xyz_value = some value;

Then, when your document (Document B) wants to access the value of interest from the other form (Document A), it can subscribe to the variable in question:

::

      global.subscribe("xyz_value", ValueUpdate);

In this case, ``ValueUpdate`` refers to a user-defined function that is called automatically whenever ``xyz_value`` changes. If you were using ``xyz_value`` in Document B as part of a field called ``MyField``, you might define the callback function this way:

::

      function ValueUpdate( newValue ) {
          this.getField("MyField").value = newValue;}

Beginning with version 8.0 of Acrobat, there is a new security policy for global variables that applies to global variables. For the above solution to work, the Enable Global Object Security Policy, found in the JavaScript section of the Preferences, is unchecked, or both documents must be served from the same web host. See the previous description of this policy for more details.

.. raw:: html

   <a name="59406"></a>

Global object security policy
-----------------------------

The new global security policy places restrictions on document access to global variables. For more information and exceptions, see `Enable the global object security policy <JS_Dev_AcrobatForms.html#43014>`__.

In a document, named ``docA.pdf``, execute the following script in a non-privileged context (mouse-up button):

::

      global.x = 1
      global.setPersistent("x", true);

The path for ``docA.pdf`` is the origin saved with the ``global.x`` variable; consequently, ``docA.pdf`` can access this variable:

::

      console.println("global.x = " + global.x);

To set this global from ``docA.pdf``, we execute ``global.x = 3``, for example, in any context.

To have a document with a different path get and set this global variable, the getting and setting must occur in a trusted context, with a raised level of privilege. The following scripts are folder JavaScript.

::

      myTrustedGetGlobal = app.trustedFunction ( function()
      {
          app.beginPriv();
              var y = global.x;
              return y
              app.endPriv();
      });
      myTrustedSetGlobal = app.trustedFunction ( function(value)
      {
              app.beginPriv();
              global.x=value;
              app.endPriv();
      });

Another document, ``docB.pdf`` can access the ``global.x`` variable through the above trusted functions:

::

      // Mouse up button action from doc B
      console.println("The value of global.x is " + myTrustedGetGlobal());

The global can also be set from ``docB.pdf:``

::

      // Set global.x from docB.pdf
      myTrustedSetGlobal(2);

Once ``global.x`` has been set from ``docB.pdf,`` the origin is changed; ``docA.pdf`` cannot access ``global.x`` directly unless it is through a trusted function:

::

      // Execute a mouse up button action from docA.pdf
      console.println("The value of global.x is " + myTrustedGetGlobal());

Intercepting keystrokes in an Acrobat form
===================================================

Create a custom keystroke script (see the Format tab in the Properties dialog box for any text field or combo box) in which you examine the value of ``event.change``. By altering this value, you can alter the user's input as it takes place. See the discussion of the `Text fields <JS_Dev_AcrobatForms.html#64180>`__.

Constructing custom colors
======================================

Colors are ``Array`` objects in which the first item in the array is a string describing the color space (``"T"`` for transparent, "``G`` " for grayscale, ``"RGB"`` for RGB, ``"CMYK"`` for CMYK) and the following items are numeric values for the respective components of the color space. Hence:

::

      color.blue = new Array("RGB", 0, 0, 1);
      color.cyan = new Array("CMYK", 1, 0, 0, 0);

To make a custom color, just declare an array containing the color-space type and channel values you want to use.

Prompting the user for a response
================================================

Use the ``response`` defined in the ``app`` object. This method displays a dialog box containing a question and an entry field for the user to reply to the question. (Optionally, the dialog box can have a title or a default value for the answer to the question.) The return value is a string containing the user's response. If the user clicks Cancel, the response is the null object.

::

      var dialogTitle = "Please Confirm";
      var defaultAnswer = "No.";
      var reply = app.response("Did you really mean to type that?",
                      dialogTitle, defaultAnswer);

Fetching an URL from JavaScript
=================================================

Use the ``getURL`` method of the Doc object. This method retrieves the specified URL over the Internet using a GET. If the current document is being viewed inside the browser or Acrobat Web Capture is not available, it uses the Weblink plug-in to retrieve the requested URL.

Creating special rollover effects
============================================

You can create special rollover effects using buttons. Create a button with the border and fill colors set to transparent, and place it where you want to detect mouse entry or exit. Then attach scripts to the mouse-enter and/or mouse-exit actions of the field. When the user enters or exists the button region, the JavaScript you created will execute. For example, the following is a mouse enter JavaScript action:

::

      console.println("You have entered my secret area");

Global submit
==================================

Suppose you have a document that contains multiple attachments, from which you would like to compile information for submission to a server in XML format. You can create a global submit button whose mouse up action contains a script that collects the data from each of the attachments and creates a unified collection in XML format.

To do this, you will need to invoke the Doc object ``openDataObject`` method in order to open the attachments, followed by its ``submitForm`` method to upload the combined XML data to the server.

The following example merges the data from several XML form attachments and submits it to a server:

::

      var oParent = event.target; 
   
      // Get the list of attachments:
      var oDataObjects = oParent.dataObjects; 
      if (oDataObjects == null) 
          app.alert("This form has no attachments!"); 
      else {
          // Create the root node for the global submit:
          var oSubmitData = oParent.xfa.dataSets.createNode(
              "dataGroup", 
              "globalSubmitRootNode"
          );
   
          // Iterate through all the attachments:
          var nChildren = oDataObjects.length; 
          for (var iChild = 0; iChild < nChildren; i++) {
   
              // Open the next attachment:
              var oNextChild = oParent.openDataObject(
                  oDataObjects[iChild].name
              );
              // Transfer its data to the XML collection:
              oSubmitData.nodes.append(
                  oNextChild.xfa.data.nodes.item(0)
              );
   
              close the attachment//
              oNextChild.closeDoc();
          }
   
          // Submit the XML data collection to the server
          oParent.submitForm({
              cURL: "http://www.example.com/cgi-bin/thescript.cgi",
              cSubmitAs: "XML",
              oXML: oSubmitData
          });
      }

.. raw:: html

   <a name="13336"></a>

Making forms accessible
=======================

The accessibility of electronic information is an increasingly important issue. Creating forms that adhere to the accessibility tips below will make your forms usable by all users.

Making a PDF form accessible to users who have impaired motor or visual ability requires that the document be structured, which means that PDF tags present in the document ensure that the content is organized according to a logical structure tree. This means that you will have added tags to the document. Once you do this, you can specify alternative text within the tags.

You can make forms accessible through the use of text-to-speech engines and tagged annotations containing alternative text.

Text-to-speech engines can translate structured text in a PDF document into audible sound, and tagged annotations containing alternative text can provide substitute content for graphical representations, which cannot be read by a screen reader. It is useful to consider embedding alternative text in links and bookmarks, as well as specifying the language of the document.

Text-to-speech
--------------

In order for text-to-speech engines to be able to work with your document, it must be structured. You can create structured documents using Adobe FrameMaker® 7.0 or Adobe FrameMaker SGML 6.0 running in structured mode.

To access the text-to-speech engine with JavaScript, use the ``TTS`` object, which has methods to render text as digital audio and present it in spoken form to the user.

For example, the following code displays a message stating whether the TTS engine is available:

::

      console.println("TTS available: " + tts.available);

The next code sample illustrates how to enumerate through all available speakers, queue a greeting into the ``TTS`` object for each one, and present the digital audio version of it to the user:

::

      for (var i=0; i < tts.numSpeakers; i++) {
          var cSpeaker = tts.getNthSpeakerName(i);
          console.println("Speaker[" + i + "] = " + cSpeaker);
          tts.speaker = cSpeaker;
          tts.qText("Hello");
          tts.talk();
      }

The properties and methods of the ``TTS`` object are summarized in the following two tables, `TTS properties <JS_Dev_AcrobatForms.html#66182>`__ and `TTS methods <JS_Dev_AcrobatForms.html#35410>`__, see`Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for more details.

TTS properties

.. _section-6:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - available
     - Returns ``true`` if the text-to-speech engine is available.

   * - numSpeakers
     - Returns the number of speakers in the engine.

   * - pitch
     - The baseline pitch between 0 and 10.

   * - speaker
     - A speaker with desired tone quality.

   * - speechRate
     - The rate in words per minute.

   * - volume
     - The volume between 0 and 10.

TTS methods

.. _section-7:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - getNthSpeakerName
     - Retrieves the Nth speaker in the current text-to-speech engine.

   * - pause
     - Pauses the audio output.

   * - qSilence
     - Queues a period of silence into the text.

   * - qSound
     - Inserts a sound cue using a ``.wav`` file.

   * - qText
     - Inserts text into the queue.

   * - reset
     - Stops playback, flushes the queue, and resets all text-to-speech properties.

   * - resume
     - Resumes playback on a paused ``TTS`` object.

   * - stop
     - Stops playback and flushes the queue.

   * - talk
     - Sends queue contents to a text-to-speech engine.

Tagging annotations
-------------------

Tagged files provide the greatest degree of accessibility, and are associated with a logical structure tree that supports the content. Annotations can be dynamically associated with a new structure tree that is separate from the original content of the document, thus supporting accessibility without modifying the original content. The annotation types supported for accessibility are:

::

      Text, FreeText, Line, Square, Circle, Polygon, Polyline, Highlight,
      Underline, Squiggly, Strikeout, Stamp, Caret, Ink, Popup, FileAttachment,
      Sound

To add an accessible tag, select Tools pane > Accessibility and choose Add Tags to Document.

Document metadata
-----------------

The metadata for a document can be specified using File > Properties > Description.

When a document is opened, saved, printed, or closed by a screen reader, the document title is spoken to the user. If the title has not been specified in the document metadata, then the file name is used. Often, file names are abbreviated or changed, so it is advised that the document author specify a title. For example, if a document has a file name of ``IRS1040.pdf``, a good document title would be *Form 1040: U.S. Individual Income Tax Return for 2007*.

In addition, third-party screen readers usually read the title in the window title bar. You can specify what appears in the window title bar by using File > Properties > Initial View and in the Window Options, choose to Show either the file name or document title.

Providing all of the additional metadata associated with a document (Author, Subject, Keywords) also makes it more easily searchable using Acrobat Search and Internet search engines.

Short description
-----------------

Every field that is not hidden must contain a user-friendly name (tooltip). The tooltip is accessible through the UI or through the Field object ``userName`` property.

The tooltip name is spoken when a user acquires the focus to that field and should give an indication of the field's purpose. For example, if a field is named ``name.first``, a good short description would be ``First`` ``Name``. The name should not depend on the surrounding context. For instance, if both the main section and spouse section of a document contain a ``First`` ``Name`` field, the field in the spouse section might be named ``Spouse's`` ``First`` ``Name``. This description is also displayed as a tooltip when the user positions the mouse over the field.

Setting tab order
-----------------

In order to traverse the document in a reasonable manner, the tab order for the fields must be set in a logical way. This is important as most users use the tab key to move through the document. For visually impaired users, this is a necessity as they cannot rely on mouse movements or visual cues.

Pressing the tab (shift-tab) key when there is no form field that has the keyboard focus will cause the first (last) field in the tab order on the current page to become active. If there are no form fields on the page then Acrobat will inform the user of this via a speech cue.

Using tab (shift-tab) while a field has the focus tabs forward (backward) in the tab order to the next (previous) field. If the field is the last (first) field on the page and the tab (shift-tab) key is pressed, the focus is set to the first (last) field on the next (previous) page if one exists. If such a field does not exist, then the focus "loops" to the first (last) field on the current page.

Reading order
-------------

The reading order of a document is determined by the Tags tree. In order for a form to be used effectively by a visually impaired user, the content and fields of a page must be included in the Tags tree. The Tags tree can also indicate the tab order for the fields on a page.

.. raw:: html

   <a name="34628"></a>

Using JavaScript to secure forms
================================

As you learned earlier in `Signature fields <JS_Dev_AcrobatForms.html#61295>`__, you can lock any form fields you deem appropriate once a document has been signed. In addition, you can also encrypt a document.

JavaScript provides a number of objects that support security. These are managed by the ``security`` and ``securityHandler`` objects for building certificates and signatures, as well as the ``certificate``, ``directory``, ``SignatureInfo``, and ``dirConnection`` objects which are used to access the user certificates. (The ``certificate`` object provides read-only access to an X.509 public key certificate).

These objects, in combination, provide you with the means to digitally sign or encrypt a document. Once you have built a list of authorized recipients, you can then encrypt the document using the ``encryptForRecipients`` method of the Doc object, save the document to commit the encryption, and email it to them.

For example, you can obtain a list of recipients for which the encrypted document is available, and then encrypt the document:

::

      // Invoke the recipients dialog box to select which recipients
      // will be authorized to view the encrypted document:
      var oOptions = {
          bAllowPermGroups: false,
          cNote: "Recipients with email and certificates",
          bRequireEmail: true,
          bUserCert: true
      };
      var oGroups = security.chooseRecipientsDialog(oOptions);
   
      // Build the mailing list
      var numCerts = oGroups[0].userEntities.length;
      var cMsg = "Encrypted for these recipients:n";
      var mailList = new Array;
      for (var i=0; i<numCerts; i++) {
          var ue = oGroups[0].userEntities[i];
          var oCert = ue.defaultEncryptCert;
          if (oCert == null) oCert = ue.certificates[0];
          cMsg += oCert.subjectCN + ", " + ue.email + "n";
          var oRDN = oCert.subjectDN;
          if (ue.email) mailList[i] = ue.email; 
          else if (oRDN.e) mailList[i] = oRDN.e;
      }
      // Now encrypt the document
      this.encryptForRecipients(oGroups);
      // Mail the document.
      this.mailDoc({
          cTo: mailList.toString(),
              cSubject: "For your review",
          cMsg: "Please read this before the meeting on Monday." 
   })
   

The properties and methods of the ``security`` object are described in the following two tables.

Security properties

.. _section-8:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Property
     - Description

   * - handlers
     - Returns an array of security handler names

   * - validateSignaturesOnOpen
     - User preference to be automatically validated when document opens

Security methods

.. _section-9:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - chooseRecipientsDialog
     - Opens a dialog box to choose a list of recipients

   * - chooseSecurityPolicy
     - Displays a dialog box to allow a user to choose from a list of security policies, filtered according to the options.

   * - exportToFile
     - Saves a ``Certificate`` object to a local disk

   * - getHandler
     - Obtains a security handler object

   * - getSecurityPolicies
     - Returns the list of security policies currently available, filtered according to the options specified.

   * - importFromFile
     - Reads in a ``Certificate`` object from a local disk

See the `Acrobat JavaScript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for documentation on these properties and methods.
