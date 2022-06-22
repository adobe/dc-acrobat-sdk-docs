******************************************************
Acrobat Templates
******************************************************

This chapter will help you understand the role of templates in PDF form structures, and the options and implications related to their use. You will also learn about the parameters for the ``template`` object methods.

.. raw:: html

   <a name="78613"></a>

The role of templates in PDF form architecture
==============================================

The Acrobat extension of JavaScript defines a template object that supports interactive form architectures. In this context, a *template* is a named page within a PDF document that provides a convenient format within which to automatically generate and manipulate a large number of form fields. These pages contain visibility settings, and can be used to spawn new pages containing identical sets of form controls to those defined within the template.

As you learned earlier, it is possible to use templates to dynamically generate new content within a document. Templates help to create reusable content, and can be used for replicating logic.

A template is used to reproduce the logic on a given page at any new location in the document. This logic may include form fields such as text fields and buttons, digital signatures, and embedded logic such as scripts that email form data to another user. To create a template based on a page, invoke the Doc object ``createTemplate`` method, in which you will name your template and specify the page from which it will be created. The code below creates a template called ``myTemplate`` based on page 5 of the current document:

::

      this.createTemplate({cName: "myTemplate", nPage: 5});

There are two steps required to generate pages based on a template contained in the document:

#. Select a template from the Doc object ``templates`` property, which is an array of ``template`` objects.
#. Spawn a page invoking the ``template`` object ``spawn`` method.

The following code adds a new page at the end of the current document that is based on the first template contained in the document:

::

      var myTemplateArray = this.templates;
      var myTemplate = myTemplateArray[0];
      myTemplate.spawn(this.numPages, false, false);

.. raw:: html

   <a name="99654"></a>

Spawning templates

In this section you will learn how to spawn a page and about the naming convention for any form fields residing on a template page. Finally, a detailed example is presented.

Dynamic form field generation
-----------------------------

When spawning templates, you an specify whether the form fields are renamed on the new page or retain the same names as those specified in the template. This is done through the optional ``bRename`` parameter. If you set the parameter's value to ``true``, the form fields on each spawned page have unique names, and values entered into any of those fields do not affect values in their counterparts on other pages. This would be useful, for example, in forms containing expense report items. If you set the parameter's value to ``false``, the form fields on each spawned page have the same name as their counterparts on all the other spawned pages. This might be useful if you would like, for example, to duplicate a button or display the date on every page, since entering it once results in its duplication throughout all the spawned pages.

Suppose the ``bRename`` parameter is ``true`` and the field name on the template is ``myField``. If the template is named ``myTemplate`` and is spawned onto page 4, the new corresponding field name is ``P4.myTemplate.myField``. The page number embedded in the new field guarantees its uniqueness.

.. raw:: html

   <a name="61656"></a>

Dynamic page generation
-----------------------

When templates are used to spawn new pages, those pages contain an identical set of form fields to those defined in the template. Depending on the parameters used, this process may result in a file size inflation problem. This is because there are two ways to specify page generation: one option is to repeatedly spawn the same page which results in the duplication of ``XObject`` objects (external graphics objects), and the other is to generate page contents as ``XObject`` objects, which only requires that those objects be repositioned.

The ``nPage`` parameter is used to specify the zero-based index of the page number used to create the page. If the ``bOverlay`` value is set to ``true``, the new page overlays on to the page number specified in the ``nPage`` parameter. If the ``bOverlay`` value is set to ``false``, the new page is inserted as a new page before the specified page. To append a page at the end of the document, set the ``bOverlay`` value to false and the ``nPage`` parameter to the total number of pages in the document.

.. raw:: html

   <a name="48912"></a>

Template syntax and usage
-------------------------

In this first example, all the templates will be spawned once, the field names will not be unique in each resultant page (``bRename`` will be ``false``), and the resultant pages will be appended to the end of the document (``bOverlay`` will be ``false``). The ``oXObject`` parameter will be used to prevent file size inflation:

::

      // Obtain the collection of templates:
      var t = this.templates;
      
      // Spawn each template once as a page appended at the end:
      for (var i = 0; i < t.length; i++)
          t[i].spawn(this.numPages, false, false);

In this next example, the same template will be spawned 10 times, will overlay on to pages 0 through 9 (``bOverlay`` will be ``true``), and the field names will be unique on each page (``bRename`` will be ``true``):

::

      // Obtain the template:
      var t = this.templates;
      var T = t[0];
      
      // Prevent file size inflation by using the XObject. Do this by
      // spawning once, saving the result (an XObject), and passing
      // the resultant XObject to the oXObject parameter in
      // the subsequent calls to the spawn method:
      var XO = T.spawn(0, true, true);
      for (var i = 1; i < 10; i++)
          T.spawn(i, true, true, XO);

In this next example, we will retrieve the template named ``myTemplate``, overlay it onto pages 5 through 10 (``bOverlay`` will be ``true``), and use the same field names on each page (``bRename`` will be ``false``):

::

      // Obtain the template name "myTemplate":
      var t = this.getTemplate("myTemplate");
      
      // Prevent file size inflation:
      var XO = t.spawn(5, true, false);
      
      // Spawn the remaining pages:
      for (var i = 6; i <= 10; i++)
          t.spawn(i, true, false, XO);

#. Gathering personal data using templates

In this example, we have a two page document and one hidden template page named ``datapage``. On the first page of the document, the head of household fills in his/her name, as well as the names of the dependents, the spouse and children. After doing this, a button is clicked. The button action spawns the hidden template, ``datapage``, for a number of instances equal to the number of people in the household. The names of each member of the household are pre-populated into each of the templates. On each of these template pages, the head of household fills in personal data of each household member: name (pre-populated), age, gender (combo box, Male or Female), and income.

The button action on the first page looks like this:

::

      // Define an array of field names for the first page, up to five children
      var aFamily = ["family.head","family.spouse", "family.child1",
              "family.child2", "family.child3", "family.child4", "family.child5" ]
      // Get the template object of the template datapage.
      var T = this.getTemplate("datapage");
      var fName = "P1.datapage.name";
      // Put this just before the last page.
      var XO = T.spawn(this.numPages-1, true, false);
      var f = this.getField(aFamily[0]);
      var g = this.getField(fName);
      // Populate this name field of the first template with the name of 
      //the head of household
      g.value = f.value;
      // Now, go through the other fields, extracting names, and spawning
      // templates
      for ( var i=1; i < aFamily.length; i++ ) {
          var f = this.getField(aFamily[i]);
          if ( f.value != "" ) { 
              // Insert a new template just before the last page.
              var fName = "P"+(this.numPages-1)+".datapage.name";
                  T.spawn(this.numPages-1, true, false, XO);
                  console.println("fName = " + fName);
                  g.value = f.value;
          } else break;
      }

Now for the last page. On this page we have a series of four fields that summarizes the information entered in the template pages. These fields give the total number of dependents; the spouse's name, age, and gender; and each of the children's names, genders and ages. The following script is placed as a Page Open event for the last page, the one that contains the summary information.

::

      if ( this.pageNum != 1 ) {
          // Number of dependents = number of pages - 3
              var numDependents = this.numPages - 3
              this.getField("dependents").value = numDependents;
   
              var totalincome = 0;
          // Get the head of household's income
              var income = this.getField("P1.datapage.income").value;
              totalincome += income;
   
              // Spouse's name and gender is on P2
              if ( numDependents > 0 ) {
              var gender = this.getField("P2.datapage.gender").value;
              var age =  this.getField("P2.datapage.age").value;
              var spouseStr = this.getField("P2.datapage.name").value 
                  +" (" + gender +", " + age + ")";
              this.getField("spouse").value = spouseStr
              income = this.getField("P2.datapage.income").value;        
              totalincome += income;        
          }
              if ( numDependents > 1 ) {
              var nChildren = numDependents - 1;
              var l = nChildren + 3;
              var childStr = "";
              for ( var i=3; i < l; i++) {    
                  var childName = this.getField("P"+i+".datapage.name").value;
                  var gender = this.getField("P"+i+".datapage.gender").value;
                  var age =  this.getField("P"+i+".datapage.age").value;
                  childStr += (childName + " (" + gender +", "+ age +"); ");
                  var income = this.getField("P"+i+".datapage.income").value;
                  totalincome += income;       
              } 
              this.getField("children").value = childStr;        
          }
              this.getField("totalincome").value = totalincome;
      }

In the script above, the field names of the spawned templates have been renamed. To extract the information contained in these template pages, the field names have to be built. Knowledge of the naming convention used by templates, as well as the structure of the document and the placement of the templates in the document is essential.
