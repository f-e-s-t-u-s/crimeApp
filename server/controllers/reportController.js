// todo test
// handles functions for reporting a new crime and getting all reported crimes
const connection = require("../db");
const handleNewCrime = (req, res) => {
  const email = req.email;
  const user_id = req.user_id;
  console.log(email, user_id);

  const {
    category_id,
    incident_description,
    incident_location,
    incident_date_time,
    media_files,
  } = req.body;
  // console.log(media_files);

  try {
    connection.query(
      "INSERT INTO Incidents (user_id, category_id, incident_description, incident_date_time, incident_location) VALUES (?, ?, ?, ?, ?)",
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
          return res
            .status(500)
            .json({ error: true, message: "An error occurred" });
        }
        console.log(result);
        const incident_id = result.insertId;
        async function insertMedia(media) {
          connection.query(
            "INSERT INTO RefMedia (incident_id, media_type, media_url) VALUES (?,?,?)",
            [incident_id,media.media_type, media.media_url],
            (err, results) => {
              if (err) {
                console.log("An error occurred while inserting", err);
                return res
                  .status(500)
                  .json({ error: true, message: "An error occured" });
              }
              console.log("media inserted successfully");
            }
          );
        }
       media_files.forEach((singleMedia) => {
          insertMedia(singleMedia);
        });

        return res
          .status(201)
          .json({ message: "Success! Your report has been recorded." });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { handleNewCrime };
