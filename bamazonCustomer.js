// download external node packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "iwtmbabp2018",
  database: "bamazon"
});

//connect to mysql server and db
connection.connect(function(err){
    if(err) throw err;
    //run the start function after the connection is made
    start();
});

