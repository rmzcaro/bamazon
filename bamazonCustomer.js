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
console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

//function which shows the list of products 
function queryAllProducts() {
    // make the connection and select all products table
    connection.query("SELECT * FROM products", function(err, res) {
        for(i = 0; i < res.length; i++) {
            console.log(` ${res[i].item_id} Product Name:  ${res[i].product_name} | Dept: ${res[i].dept_name} | Qty In Stock: ${res[i].stock_quantity} | Price: ${res[i].price} | `)
        }
        console.log(" ------------------------- ")
    });

}
