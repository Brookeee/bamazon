DROP DATABASE IF EXISTS bamazonprods;
CREATE DATABASE bamazonprods;

USE bamazonprods; 

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name TEXT NOT NULL,
department_name TEXT NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_qty INT NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("SD Card", "Electronics", 30.00, 50);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Hard Drive", "Electronics", 100.00, 5);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Backpack", "Travel", 29.99, 10);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Pilot Pens", "Home", 7.99, 25);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Pillow cases", "Home", 18.99, 12);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Laundry Detergent", "Home", 12.99, 18);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Nike Free Runs", "Fitness", 45.99, 10);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Air Fryer","Kitchen", 99.99, 8);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Beats X Headphones", "Electronics", 89.99, 20);
INSERT INTO products (product_name, department_name, price, stock_qty) 
VALUES ("Essentia Water", "Food", 18.99, 5);