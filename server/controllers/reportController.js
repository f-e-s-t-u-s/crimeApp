// todo test
// handles functions for reporting a new crime and getting all reported crimes
const connection = require("../db");
const handleNewCrime = (req, res) => {
  const {
    user_id,
    category_id,
    incident_description,
    incident_location,
    incident_date_time,
  } = req.body;
  console.log(req.body);

  try {
    connection.query(
      "INSERT INTO Incidents (user_id, category_id, incident_description, incident_date_time, incident_location) VALUES ?, ?, ?, ?, ? ",
      [
        user_id,
        category_id,
        incident_description,
        incident_date_time,
        incident_location,
      ],
      (err, result, fields) => {
        if (err) {
          console.error(err);
          return res.sendStatus(500);
        }
        return res
          .status(201)
          .json({ message: "Success! Your report has been recorded." });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
  return res.json("done");
};

module.exports = { handleNewCrime };
