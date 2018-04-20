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
connection.connect(function (err) {
    if (err) throw err;
    //run the start function after the connection is made
    console.log("connected as id " + connection.threadId);
    var allProducts = queryAllProducts();
    // run startfunction after connection is made and list of products is shown
    start(allProducts);
});

//function which shows the list of products 
function queryAllProducts() {
    // make the connection and select all products table
    connection.query("SELECT * FROM products", function (err, res) {
        for (i = 0; i < res.length; i++) {
            console.log(" ------------------------- ")

            console.log(` Item Id: ${res[i].item_id} Product Name:  ${res[i].product_name} | Dept: ${res[i].dept_name} | Qty In Stock: ${res[i].stock_quantity} | Price: ${res[i].price} | `)
        }
        console.log(" ------------------------- ")

        return res
    });

}

//function which prompts user for what product id and number of units they'd like 
function start(res) {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Hi! Write the ITEM ID you'd like to purchase: ",
        //validate if number below
        // validate: function(value) {
        //     if (isNaN(value) === false) {
        //       return true;
        //     }
        //     return false;
        //   }     
    }]).then(function (ans) {

        // loop through the object
        for (var i = 0; i < res.length; i++) {
        if(ans.id == res[i].item_id) {
            product = res[i].product_name,
            quantity = res[i].stock_quantity
        }}
        // save the results in an an 
        // check if answer logged
        console.log(quantity);
        console.log(product);
        

        // second question 
        if (ans) {
            inquirer.prompt([{
                name: "qty",
                type: "input",
                message: "How many would you like?"
                //validate if number below
                // validate: function(value) {
                //     if (isNaN(value) === false) {
                //       return true;
                //     }
                //     return false; }

            }]).then(function (quantity) {
                quantity: "qty";
                checkStock();
            })
        }
        // if the user didn't write an answer that was on list console.log "select from products listed"
        else {
            console.log("select from the products listed");
        }
    })

}

// confirm if item is sold in store
// function checkItem(){
//     console.log("Confirming if item is sold here ")
// }

function checkStock() {
    console.log("Checking stock");
    // not sure if I need to reconnect 
    // connection.connect(function (err) {
    //     if (err) throw (err);
    //     console.log(connection.threadId);
    // });
    // query the db for the item being purchased
    connection.query("SELECT item_id FROM products", function (err, res) {
        if (err) {
            throw err;
        } else {
            // test for response     
            // console.log(res);
        // if(res === )
        }

        // if the user id is real and the qty is sufficient 
        // then order if fulfilled:  "The item you've chosen is in stock. In a moment, you will receive your total cost"
        // Update stock quantity 
        // Show total cost of items 
    })
}