-- show all database --
show databases;

-- create database --
create database bookstore;

-- use a database bookstore --
use bookstore;

-- show all tables in database bookstore --
show tables;

-- create table books add fill it with its attribute --
create table books(
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    tittle VARCHAR(100),
    description VARCHAR(100),
    place_sell char(3),
    stock INT DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- add column price and status then drop a colum place_sell --
ALTER TABLE books 
    ADD price INT DEFAULT 0, 
    ADD status ENUM('available','out of stock','limited'),
    DROP COLUMN place_sell;

-- Insert three data to tables books--
INSERT INTO books VALUES (NULL, "Dewi", "Mardani","Cristin","tittle1","description1",3,DEFAULT,50000,'available');
INSERT INTO books VALUES (NULL, "Zelda", "Elma","Sibuea","tittle2","description2",10,DEFAULT,100000,'out of stock');
INSERT INTO books VALUES (NULL, "Sabrina", "Lydia","Simanjuntak","tittle3","description3",20,DEFAULT,150000,'limited');

-- select all data from books--
select* from books;

-- select with alias --
SELECT id as ID, author1 as A1, author2 as A2, author3 as A3 from books;

-- Select books with id=1 --
select* from books
    where id = 1;

-- select data with and argument--
select* from books
    where stock > 10
        and price > 10000;

-- select data with or argument--
select* from books
    where stock > 10
        or status = "limited";

-- select data with not argument --
select * from books 
    where not author1 = "Sabrina";

-- order data with ascending --
select * from books ORDER BY id ASC;

-- show data maks 2 row --
select * from books limit 2;

-- update data from rows witd id=1 --
UPDATE books 
    set author1 = "Deux", 
        price=75000 
            where id=1;

-- delete row with id=3 --
DELETE FROM books where id=3;