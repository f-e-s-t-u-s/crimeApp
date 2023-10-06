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

const addNewHotline = (req, res) => {
  const { hotline_name, hotline_description, hotline_contact } = req.body;

  try {
    connection.query(
      "INSERT INTO Hotlines (hotline_name,hotline_description,hotline_contact) VALUES (?,?,?)",
      [hotline_name, hotline_description, hotline_contact],
      (err, results, fields) => {
        if (err) {
          console.log(err);
        }
        return res
          .status(201)
          .json({ results, message: "Hotline added successfully" });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: "An error occurred" });
  }
};

module.exports = { sendHotlines, addNewHotline };
