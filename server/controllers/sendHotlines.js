// functio to send hotlines to frontend
const connection = require("../db");
const sendHotlines = (req, res) => {
  try {
    connection.query(
      "SELECT hotline_id, hotline_name, hotline_description, hotline_contact FROM Hotlines",
      [],
      (err, result, fields) => {
        if (err) {
          console.error(err);
          return res.sendStatus(500);
        }

        const hotlines = result;
        return res.status(200).json(hotlines);
      }
    );
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = { sendHotlines };
