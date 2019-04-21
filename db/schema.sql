DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgers_table
(
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (40) NOT NULL,
    devoured BOOLEAN DEFAULT false
);