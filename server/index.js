// Importing required modules
var cors = require('cors');
var mysql = require('mysql');
var express = require('express');

// Creating a MySQL connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'angular-node-db'
});

// Checking the type of the express module
console.log(typeof express);

// Creating an Express application
var app = express();

// Handling GET request for fetching users
app.get("/users", (req, res) => {
    // Querying the database to select all user details
    connection.query('SELECT * FROM users', (err, result) => {
        // Checking for errors in the query execution
        if (!err) {
            // Sending the query result as response
            res.send(result);
        } else {
            // Sending error response if query fails
            res.status(500).send("Error fetching users: " + err.message);
        }
    });
});


// Listening on port 9000 for incoming requests
app.listen(8500, () => {
    console.log("Server is running on port 8500");
});