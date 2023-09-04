const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = (content, subject, userEmail) => {
  // send the link via email
  return new Promise((resolve, rejetc) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "wschool752@gmail.com", //you can chnage to your own and replace pass with your app password
        pass: process.env.MAIL,
      },
    });

    // html contenet from emails folder
    const htmlContent = content;

    const mailOptions = {
      from: "Cyber Safe wschool752@gmail.com",
      to: userEmail,
      subject: subject,
      html: htmlContent,
    };
// send as html
    mailOptions.headers = {
      "Content-Type": "text/html",
    };

    // send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        rejetc(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve("Email Sent");
      }
    });
  });
};

module.exports = { sendEmail };
