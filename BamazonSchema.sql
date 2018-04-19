DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE products;

CREATE TABLE products(
  item_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL ,
  product_name VARCHAR(20),
  dept_name VARCHAR(20),
  stock_quantity INT,
  price DECIMAL(4,2),
  );

