/*slip 8:
Create a node.js file that Select all records from the "customers" table, 
and display the result object on console. 
 */

/*Note: create and add table, values on sql workbench
create table customers (id int, name varchar(20), address varchar(20));
insert into customers (id, name, address) values (01, "a", "asdfgh");
*/
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',         //add user name of Mysql workbench
  password: 'DevManus', //add password of Mysql Workbench set pass
  database: 'mcs22'     //add main database name where you created customers table
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  // Select all records from the "customers" table
  connection.query('SELECT * FROM customers', (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      return;
    }

    // Display the result object on the console
    console.log('Result:', results);

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing the connection:', err);
        return;
      }

      console.log('Connection closed');
    });
  });
});
