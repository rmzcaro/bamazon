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
  // run startfunction after connection is made and list of products is shown
  start();
});

//function which shows the list of products 
function queryAllProducts() {
    // make the connection and select all products table
    connection.query("SELECT * FROM products", function(err, res) {
        for(i = 0; i < res.length; i++) {
            console.log(" ------------------------- ")

            console.log(` Item Id: ${res[i].item_id} Product Name:  ${res[i].product_name} | Dept: ${res[i].dept_name} | Qty In Stock: ${res[i].stock_quantity} | Price: ${res[i].price} | `)
        }
        console.log(" ------------------------- ")
    });

}

//function which prompts user for what product id and number of units they'd like 
function start() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Hi! Write the ITEM ID you'd like to purchase: ",
        //validate if number below
        // validate: function(value){
        // }
    }
]).then(function(ans) {
    // check if answer logged
    // console.log(ans);

    // second question 
    if(ans) {
        inquirer.prompt([{
            name: "qty",
            type: "input",
            message: "How many would you like?"
            //validate if number below
            // validate: function(value){
            // }
        }]).then(function(quantity){
            quantity: "qty";
        })
    }
    // if the user didn't write an answer that was on list console.log "select from products listed"
    else {
        console.log("select from the products listed");
    }
})
   


}