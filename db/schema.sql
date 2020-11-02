DROP DATABASE IF EXISTS burgers_db;


CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table .
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT BURGERS,

  PRIMARY KEY (id)
);

-- Inserted the required data.
INSERT INTO burgers (burger_name,devoured) VALUES ('cheese burger',0);
INSERT INTO burgers (burger_name,devoured) VALUES ('doublepattyburger',0);
INSERT INTO burgers (burger_name,devoured) VALUES ('spicy jalapeno burger',0);