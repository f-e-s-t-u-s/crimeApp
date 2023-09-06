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
    category_name varchar(255) not null
);
CREATE TABLE Incidents (
    incident_id int primary key auto_increment,
    user_id int not null,
    incident_type varchar(255) not null,
    incident_description TEXT,
    incident_date_time DATETIME not null,
    incident_location varchar(255) not null,
    foreign key (user_id) references Users(user_id)
);
CREATE TABLE RefMedia (
    media_id int not null primary key,
    incident_id int not null,
    media_type varchar(255),
    media_url varchar(255),
    foreign key (incident_id) references Incidents(incident_id)
);
CREATE TABLE Hotlines (
    hotline_id INT auto_increment primary key,
    hotline_name varchar(255) not null,
    hotline_description TEXT,
    hotline_contact varchar(255) not null
);
-- insert holimne details
INSERT INTO Hotlines (
        hotline_name,
        hotline_description,
        hotline_contact
    )
VALUES (
        "Healthcare Assistance Kenya",
        "Healthcare Assistance Kenya (HAK) is a humanitarian Non-Governmental Organization that operates the only and the first-ever Sexual and Gender-Based Violence Rapid Response System and Helpline 1195 that today supports survivors of GBV from grassroots to break the silence and quickly access GBV services through helpline 1195 after a violation. The main aim of this project is to help survivors access quick GBV services on referral through a confidential SMS system for timely prevention and treatment of infections such as HIV.",
        1195
    ),
    (
        "Gender Violence Recovery Centre (GVRC)",
        "GVRC is a non-profit mak­ing, non-​partisan; char­i­ta­ble trust of the Nairobi Women’s Hos­pi­tal (NWH) which is a pri­vate insti­tu­tion that spe­cialises in obstet­rics and gynae­col­ogy ser­vices and seeks to pro­vide holis­tic care to women and their families.
GVRC’s main pur­pose is to bring back mean­ing to survivor’s lives and their fam­i­lies. They do this through the pro­vi­sion of free med­ical treat­ment and psy­choso­cial sup­port to sur­vivors of gen­der based vio­lence. The med­ical sup­port given is the basic treat­ment for sur­vivors of Gen­der Based Vio­lence (GBV) that includes emo­tional, phys­i­cal, sex­ual and psy­cho­log­i­cal abuse.

",
        254719638006
    ),
    (
        "CREAW Kenya",
        "Following the rise of GBV cases in 2020,  CREAW in partnership with Oxfam, Wangu Kanja Foundation, Acted Horn of Africa, Concern Worldwide, and Impact initiatives are providing support services to GBV survivors, among them cash transfers, counselling and shelter.",
        0800720186
    ),
    (
        "LVCT Counseling Hotline",
        "LVCT is the only youth sexuality and sexual health toll-free hotline in Kenya and the largest in East Africa. The peer-led hotline targeting young people aged 15-24 years was established by LVCT Health in 2006. It provides free information on HIV and AIDS, sexuality, sexual reproductive health and rights in a confidential and non-judgmental way over the phone.",
        1190
    ),
    (
        "Kelin Kenya (Reclaiming Rights, Rebuilding Lives)",
        "The KELIN Strategic Litigation department uses litigation as a tool for social change. They undertake litigation on health-related cases to ensure that individuals and communities whose fundamental rights and freedoms have been violated have access to justice. To access justice, email complain@kelinkenya.org.",
        254202515790
    ),
    (
        "Family Health International (FHI)",
        "Are you going through isolation, anxiety, loss, or stress? Do you know anyone going through anxiety and stress? Family health Isolation (FHI360) has a hotline dedicated to helping people going through stress issues.",
        254776543099
    ),
    (
        "Childline Kenya",
        "Childline Kenya works in partnership with the Government to STOP child abuse and provide a safe environment for all children. They offer the only nationwide helpline service dedicated to children that runs 24 hours toll-free and is accessible by simply dialling 116.",
        116
    );
INSERT INTO IncidentCategories (category_name)
VALUES
  ("Burglary"),
  ("Alcohol and Substance Abuse"),
  ("Robbery"),
  ("Corruption"),
  ("Assault"),
  ("Theft"),
  ("Shoplifting"),
  ("Vandalism"),
  ("Car Theft"),
  ("Drug Offences"),
  ("Domestic Violence"),
  ("Homicide"),
  ("Sexual Assault"),
  ("Cybercrime"),
  ("Fraud"),
  ("Harassment"),
  ("Child Abuse"),
  ("Human Trafficking"),
  ("Hate Crimes"),
  ("Environmental Crimes"),
  ("Arson");
