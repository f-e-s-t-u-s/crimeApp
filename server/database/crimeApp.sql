CREATE TABLE Users (
    user_id int primary key auto_increment,
    username varchar(255) not null UNIQUE,
    email varchar(255) not null UNIQUE,
    password_hash varchar(255),
    verified BOOLEAN not null,
    profile_pic VARCHAR(255),
    isAnonymous BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE IncidentCategories (
    category_id int primary key auto_increment,
    category_name varchar(255) not null,
) CREATE TABLE Incidents (
    incident_id int primary key auto_increment,
    user_id int,
    incident_type varchar(255) not null,
    incident_description TEXT,
    incident_date_time DATETIME not null,
    incident_location varchar(255) not null,
    foreign key user_id references Users(user_id)
);
CREATE TABLE RefMedia (
    media_id int not null primary key,
    incident_id not null,
    media_type varchar(255),
    media_url varchar(255),
    foreign key incident_id references Incidents(incident_id)
);
-- CREATE TABLE Hotlines () -- insert crimes types
INSERT INTO IncidentCategories (category_name)
VALUES (
        "Burglary",
        "Alcohol and Substance Abuse",
        "Robbery",
        "Corruption",
        "Assault",
        "Theft",
        "Shoplifting",
        "Vandalism",
        " Car Theft",
        " Drug Offences",
        " Domestic Violence",
        "Homicide",
        " Sexual Assault",
        "Cybercrime",
        "Fraud",
        "Harassment",
        " Child Abuse",
        " Human Trafficking",
        " Hate Crimes",
        "Environmental Crimes",
        "Arson",
    );