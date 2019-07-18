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

// Display bamazon Inventory. Welcome comes after question.. FIX!
connected.connect(function(error) {
  if (error) throw error;
  begin();
  console.log("****** WELCOME TO BAMAZON ******");
  console.log("-------------------------------------");
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
    inquirer
      .prompt([
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
      ])
      .then(function(choice) {
        // User choices for item and cost

        var query =
          "SELECT product_name, price, stock_qty FROM products WHERE ?";
        connected.query(query, { item_id: choice.id }, function(error, res) {
          if (error) throw error;

          var product = res[0];
          console.log(
            "Item " + product.product_name + " has been chosen" + ". "
          );
          console.log("The cost of this item is: $ " + product.price + ". ");
        });
      });
  });
}
function customerOrder(id, qtyWant) {
  connected.query("SELECT * FROM products WHERE item_id " + id, function(error,res) {

  })
}
