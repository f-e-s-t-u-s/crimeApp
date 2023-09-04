// imports
const { create, verify } = require("./routes/register");
const connection = require("./db");
const { login } = require("./routes/login");



// app cofig
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const { changePass } = require("./routes/changePass");
const { forgotPass, emailLink } = require("./routes/forgot");
const app = express();
app.set("view engine", "ejs");

// middlewares
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));


// port connection
connection.connect((err) => {
    if (err) {
      console.log("failed to connect to db");
      console.log(err);
    } else {
      console.log("database connected");
  
      app.listen(9000, () => {
        console.log("app listening on port 9000");
      });
    }
  });
  

// ! routes
// acc stuff
app.use(create)
app.use(verify)
app.use(login)
app.use(changePass)
app.use(forgotPass)
app.use(emailLink)