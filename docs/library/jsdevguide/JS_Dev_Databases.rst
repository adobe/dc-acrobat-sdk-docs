******************************************************
Interacting with Databases
******************************************************

It is possible to use JavaScript for Acrobat to interact with Windows databases through an ODBC connection. This means that you can use JavaScript objects to connect to a database, retrieve tables, and execute queries. The object model associated with database interaction is centered on the ``ADBC`` object, which provides an interface to the ODBC connection. The ``ADBC`` object interacts with other objects to facilitate database connectivity and interaction ``DataSourceInfo``, ``connection``, ``statement``, ``Column``, ``ColumnInfo``, ``row``, and ``TableInfo``. These objects can be used in document-level scripts to execute database queries.

.. raw:: html

   <a name="24347"></a>

About ADBC
==========

The Acrobat extensions to JavaScript provides an ODBC-compliant object model called Acrobat Database Connectivity (ADBC), which can be used in document-level scripts to connect to a database for the purposes of inserting new information, updating existing information, and deleting database entries. ADBC provides a simplified interface to ODBC, which it uses to establish a connection to a database and access its data, and supports the usage of SQL statements for data access, update, deletion, and retrieval.

Thus, a necessary requirement to the usage of ADBC is that ODBC must be installed on a client machine running a Microsoft Windows operating system. In addition, ADBC does not provide security measures with respect to database access; it is assumed that the database administrator will establish and maintain the security of all data.

The ``ADBC`` object provides methods through which you can obtain a list of accessible databases and form a connection with one of them. These methods are called ``getDataSourceList`` and ``newConnection``. In addition, the ``ADBC`` object provides a number of properties corresponding to all supported SQL and JavaScript data types, which include representations of numeric, character, time, and date formats.

.. note::

   To activate ADBC, create a registry key of type DWORD with the name "bJSEnable" and a value of "true" (1) in the following location:

::

              HKEY_CURRENT_USER\SOFTWARE\Adobe\Adobe Acrobat\8.0\ADBC

This activates ADBC in Acrobat 8.0. In previous releases of Acrobat, ADBC was active by default. In Acrobat 8.0 and later, this setting was changed to require user intervention to activate ADBC because most users do not want to have ADBC accessible from PDF.

.. raw:: html

   <a name="73593"></a>

Establishing an ADBC connection
===============================

There are normally two steps required to establish an ADBC connection. First, obtain a list of accessible databases by invoking the ``ADBC`` object's ``getDataSourceList`` method. Then establish the connection by passing the Data Source Name (DSN) of one of the databases in the list to the ``ADBC`` object's ``newConnection`` method.

The ``getDataSourceList`` method returns an array of ``DataSourceInfo`` generic objects, each of which contains the following properties:

* ``name``: a string identifying the database

* ``description``: a description containing specific information about the database

In the following example, a list of all available databases is retrieved, and the DSN of the ``DataSourceInfo`` object representing ``Q32000Data`` is identified and stored in the variable ``DB`` :

::

      // Obtain a list of accessible databases:
      var databaseList = ADBC.getDataSourceList();
      
      // Search the DataSourceInfo objects for the "Q32000Data" database:
      if (databaseList != null) {
          var DB = "";
          for (var i=0; i<databaseList.length; i++)
              if (databaseList[i].name == "Q32000Data") {
                  DB = databaseList[i].name;
                  break;
              }
      }

To establish the database connection, invoke the ``ADBC`` object's ``newConnection`` method, which accepts the following parameters:

* ``cDSN``: the Data Source Name (DSN) of the database

* ``cUID``: the user ID

* ``cPWD``: the password

The ``newConnection`` method returns a connection object, which encapsulates the connection by providing methods which allow you to create a statement object, obtain information about the list of tables in the database or columns within a table, and close the connection.

In the following example, a connection is established with the ``Q32000Data`` database:

::

      if (DB != "") {
          // Connect to the database and obtain a Connection object:
          var myConnection = ADBC.newConnection(DB.name);
      }

Normally, the DSN is known on the system, so searching for it is not necessary. You can connect in a more direct way:

::

          var myConnection = ADBC.newConnection("Q32000Data");

The connection object provides the methods shown in the following table.

Connection object

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - close
     - Closes the database connection.

   * - newStatement
     - Creates a statement object used to execute SQL statements.

   * - getTableList
     - Retrieves information about the tables within the database.

   * - getColumnList
     - Retrieves information about the various columns within a table.

The connection object's ``getTableList`` method returns an array of ``TableInfo`` generic objects, each of which corresponds to a table within the database and contains the following properties:

* ``name``: the table name

* ``description``: a description of database-dependent information about the table

In the following example, the name and description of every table in the database is printed to the console:

::

      // Obtain the array of TableInfo objects representing the database tables:
      var tableArray = myConnection.getTableList();
      
      // Print the name and description of each table to the console:
      for (var i=0; i<tableArray.length; i++) {
          console.println("Table Name: " + tableArray[i].name);
          console.println("Table Description: " + tableArray[i].description);
      }

The connection object's ``getColumnList`` method accepts a parameter containing the name of one of the database tables, and returns an array of ``ColumnInfo`` generic objects, each of which corresponds to a column within the table and contains the following properties:

* ``name``: the name of the column

* ``description``: a description of database-dependent information about the column

* ``type``: a numeric identifier representing an ``ADBC`` SQL type

* ``typeName``: a database-dependent string representing the data type

In the following example, a complete description of every column in the ``Q32000Data`` database table called ``Sales`` is printed to the console:

::

      // Obtain the array of ColumnInfo objects representing the Sales table:
      var columnArray = myConnection.getColumnList("Sales");
      
      // Print a complete description of each column to the console:
      for (var i=0; i<columnArray.length; i++) {
          console.println("Column Name: " + columnArray[i].name);
          console.println("Column Description: " + columnArray[i].description);
          console.println("Column SQL Type: " + columnArray[i].type);
          console.println("Column Type Name: " + columnArray[i].typeName);
      }

.. raw:: html

   <a name="63210"></a>

Executing SQL statements
========================

To execute SQL statements, first create a statement object by invoking the connection object ``newStatement`` method. The newly created statement object can be used to access any row or column within the database table and execute SQL commands.

In the following example, a statement object is created for the ``Q32000Data`` database created in the previous sections:

::

      myStatement = myConnection.newStatement();

The statement object provides the methods shown the following table.

Statement object

.. _section-1:

.. list-table::
   :widths: 10 90
   :header-rows: 1

   * - Method
     - Description

   * - execute
     - Executes an SQL statement.

   * - getColumn
     - Obtains a column within the table.

   * - getColumnArray
     - Obtains an array of columns within the table.

   * - getRow
     - Obtains the current row in the table.

   * - nextRow
     - Iterates to the next row in the table.

In addition to the methods shown above, the statement object provides two useful properties:

* ``columnCount``: the number of columns in each row of results returned by a query

* ``rowCount``: the number of rows affected by an update

To execute an SQL statement, invoke the statement object ``execute`` method, which accepts a string parameter containing the SQL statement. Note that any names containing spaces must be surrounded by escaped quotation marks, as shown in the following example:

::

      // Create the SQL statement:
      var SQLStatement = 'Select from "Client Data"';
      
      // Execute the SQL statement:
      myStatement.execute(SQLStatement);

There are two steps required to obtain a row of data. First, invoke the statement object ``nextRow`` method; this makes it possible to retrieve the row's information. Then, invoke the statement object ``getRow`` method, which returns a ``Row`` generic object representing the current row.

In the example shown below, the first row of information will be displayed in the console. Note that the syntax is simplified in this case because there are no spaces in the column names:

::

      // Create the SQL statement:
      var st = 'Select firstName, lastName, ssn from "Employee Info"';
      
      // Execute the SQL statement:
      myStatement.execute(st);
      
      // Make the next row (the first row in this case) available:
      myStatement.nextRow();
      
      // Obtain the information contained in the first row (a Row object):
      var firstRow = myStatement.getRow();
      
      // Display the information retrieved:
      console.println("First name: " + firstRow.firstName.value);
      console.println("Last name: " + firstRow.lastName.value);
      console.println("Social Security Number: " + firstRow.ssn.value);

If the column names contain spaces, the syntax can be modified as shown below:

::

      // Create the SQL statement:
      var st = 'Select "First Name", "Last Name" from "Employee Info"';
      
      // Execute the SQL statement:
      myStatement.execute(st);
      
      // Make the next row (the first row in this case) available:
      myStatement.nextRow();
      
      // Obtain the information contained in the first row (a Row object):
      var firstRow = myStatement.getRow();
      
      // Display the information retrieved:
      console.println("First name: " + firstRow["First Name"].value);
      console.println("Last name: " + firstRow["Last Name"].value);
