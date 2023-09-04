// Connection file to the mysql database
const mysql = require("mysql");

// sql database connection
// todo chnage to use dotenv
const connection = mysql.createConnection({
  // ! use ip address for host
  host: "127.0.0.1",
  user: "nixcraft",
  password: "root",
  database: "crimeApp",
});

module.exports = connection;
