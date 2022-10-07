const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.end();
  } else {
    if (req.method !== "POST") {
      return;
    }

    try {
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.subject}`,
        text: req.body.message,
        html: `
          <p>${req.body.message}</p>
          <p>From: ${req.body.name}</p>
          <p>Email: ${req.body.email}</p>
          <p>Phone: ${req.body.tel}</p>
        `,
      };

      return mailTransport.sendMail(mailOptions).then(() => {
        res.status(200).send({
          isEmailSend: true,
        });
      });
    } catch (error) {
      console.error("There was an error while sending the email:", error);
      res.status(500).send({
        isEmailSend: false,
      });
    }
  }
});
