CREATE TABLE User (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name varchar(40),
    email varchar(40),
    password varchar(40)
);

CREATE TABLE Singer (
    singer_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name varchar(40)
);

CREATE TABLE Album (
    album_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name varchar(40),
    singer_id int DEFAULT NULL,
    constraint fk_singer foreign key(singer_id) references Singer(singer_id)
);

CREATE TABLE Track (
    track_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    singer_id int DEFAULT NULL,
    album_id int default NULL,
    tittle varchar(40),
    constraint fk_singer foreign key(singer_id) references Singer(singer_id),
    constraint fk_album foreign key(album_id) references Album(album_id)
);

CREATE TABLE Playlist (
    playlist_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id int DEFAULT NULL,
    tracks varchar(40),
    constraint fk_user foreign key(user_id) references User(user_id)
);

CREATE TABLE album_playlist (
    Albumalbum_id int DEFAULT NULL,
    playlist_id int DEFAULT NULL,
    constraint fk_album foreign key(Albumalbum_id) references Album(album_id),
    constraint fk_playlist foreign key(playlist_id) references Playlist(playlist_id)
);