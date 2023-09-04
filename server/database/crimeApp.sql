CREATE TABLE Users (
    user_id int primary key auto_increment,
    username varchar(255) not null UNIQUE,
    email varchar(255) not null UNIQUE,
    password_hash varchar(255),
    verified BOOLEAN not null,
    profile_pic VARCHAR(255)
);