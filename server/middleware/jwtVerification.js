const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtVerification = (req, res, next) => {
  // get access token from headers
  const authHeaders = req.headers["authorization"];

  // if no auth headers
  if (!authHeaders) {
    return res.status(401).json({ message: "Unauthorised" });
  }

  // console.log(authHeaders);

  // spilt the bearer with tokem
  const token = authHeaders.split(" ")[1];

  // verify the token
  // takes, token, acces_token, callback
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res
        .status(403)
        .json({ auth: false, message: "Invalid auth token" });
    }
    const current_time = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < current_time) {
      return res.status(401).json({
        auth: false,
        message: "Token has expired, please log in again",
      });
    }
    req.email = decoded.email;
    req.user_id = decoded.user;
    next();
  });
};

module.exports = { jwtVerification };
