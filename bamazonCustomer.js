// Dependencies
require("dotenv").config();
var keys = require("./keys.js");
// downloaded 7/14

var mysql = require("mysql");
//Both NPM packages downloaded 7/14
var inquirer = require("inquirer");

var connected = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.password,
  database: "bamazonprods"
});

// Display bamazon Inventory
connected.connect(function(error) {
  if (error) throw error;
  //   console.log("******WELCOME TO BAMAZON******");
  //   console.log("-------------------------------------");
});

function begin() {
  connected.query("SELECT * FROM products", function(error, res) {
    if (error) throw error;
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Item ID: " +
          res[i].item_id +
          " | Product: " +
          res[i].product_name +
          " | Price: " +
          res[i].price
      );
    }
  });
}

// Customer input prompt. FIXED
inquirer.prompt([
  {
    type: "input",
    name: "id",
    message: "What is the ID of the product you would like to purchase?",
    validate: function(value) {
      if (isNaN(value) == false) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "input",
    message: "How many would you like to purchase?",
    name: "quantity",
    validate: function(value) {
      if (isNaN(value) == false) {
        return true;
      } else {
        return false;
      }
    }
  }
]);

begin();

//     if(error) throw error;
//     console.log("Connection ID: " + connected.threadId + "\n");
// });
