require("dotenv").config();
// downloaded 7/14

var mysql = require("mysql");
//Both NPM packages downloaded 7/14
var inquirer = require("inquirer");

// var connected = mysql.createConnection({
//     host: "localhost",
//     port: 3306, 
//     user: "root",
//     password: "",
//     database:"bamazonprods"
// });

connected.connect(function(error) {
    if(error) throw error;
    console.log("Connection ID: " + connected.threadId + "\n");
});