// Connection file to the sql database
const sql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

// sql database connection

const connection = sql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  
});
module.exports = connection;
