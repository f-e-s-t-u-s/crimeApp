const connection = require("../db");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

// user login function
const handleUserLogin = async (req, res) => {
  const { emailOrUsername, password } = req.body;
  try {
    connection.query(
      `SELECT user_id, verified, email, username, password_hash FROM Users WHERE (username = ? OR email = ?)`,
      [emailOrUsername, emailOrUsername],
      async (error, results, fields) => {
        if (error) {
          console.log(error);
          return res.json("an error occurred");
        }
        // if nothing returns
        if (results.length === 0) {
          return res.status(400).json("Invalid login details");
        }
        // console.log(results);
        // assign var user to results from db request
        const user = results[0];
        // compare passwords
        const passwordCheck = await bcrypt.compare(
          password,
          user.password_hash
        );
        if (!passwordCheck) {
          return res.status(400).json({ message: "Invalid login details" });
        }

        // create jwts
        const accessToken = jwt.sign(
          { email: user.email, user: user.user_id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30m" }
        );

        const refreshToken = jwt.sign(
          { email: user.email_address, user: user.user_id },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "10d" }
        );
          console.log(user.verified);
        // todo check if user email is verified
        if (user.verified === 0) {
          return res
            .status(202)
            .json({
              message:
                "You need to verify your account to login. Check your email",
            });
        } else {
          // send both tokens to mobile

          return res
            .status(200)
            .json({ accessToken, refreshToken, message: "Login sucessful" });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Error" });
  }
};

module.exports = { handleUserLogin };
