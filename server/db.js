// Connection file to the mysql database
const mysql = require("mysql");
const dotenv = require('dotenv')
dotenv.config();

// sql database connection
const connection = mysql.createConnection({
  // ! use ip address for host
  host: process.env.HOST,
  // user: process.env.USER,
  user: "sql11644576",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});


module.exports = connection;
