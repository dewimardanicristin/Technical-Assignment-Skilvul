-- create database silvulbookstore --
create database skilvulbookstore;

-- create table penerbit fill it with its attribute --
create table penerbit(
     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
     nama VARCHAR(50) DEFAULT NULL, 
     kota varchar(50) DEFAULT NULL
);

-- create table penulis fill it with its attribute --
create table penulis(
    id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    nama VARCHAR(50) DEFAULT NULL, 
    kota varchar(50) DEFAULT NULL
);

-- create table buku fill it with its attribute --
create table buku(
    id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    ISBN VARCHAR(50) DEFAULT NULL, 
    judul varchar(50) DEFAULT NULL, 
    penulis INT(10) DEFAULT NULL,
    penerbit INT(10) DEFAULT NULL, 
    harga INT(10) default NULL, 
    stock INT(10) default NULL, 
    constraint fk_penulis foreign key(penulis) references penulis(id),
    constraint fk_penerbit foreign key(penerbit) references penerbit(id)
);

-- insert a data to table penulis --
insert into penulis values(NULL,'Penulis A',"Jakarta");
insert into penulis values(NULL,'Penulis B',"Jakarta");
insert into penulis values(NULL,'Penulis C',"Surabaya");

-- insert a data to table penerbit --
insert into penerbit values(NULL,'penerbit A',"Surabaya");
insert into penerbit values(NULL,'penerbit B',"Surabaya");
insert into penerbit values(NULL,'penerbit C',"Jakarta");

-- insert a data to table buku --
insert into buku values(NULL,'2468101214','judul A',1,2,5000,20);
insert into buku values(NULL,'1357913151','judul B',3,1,150000,20);
insert into buku values(NULL,'1245781315','judul C',2,2,40000,10);

-- join table with inner join --
SELECT * FROM buku inner join penerbit on buku.penerbit = penerbit.id;

-- join table with left join --
select* from buku left join penerbit on buku.penerbit = penerbit.id;

-- join table with right join --
select* from buku right join penerbit = penerbit.id;

-- check the maximum value from column harga where stock less than 10 --
select MAX(harga) from buku where stock < 10;

-- check the minimum value from column harga --
select MIN(harga) from buku;

-- count how much data with price less than 100000 --
select count(*) from buku where harga < 100000;