const express = require("express");
const nodeMailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();

//Node mailer setup
app.post("/api/form", (req, res) => {
  let data = req.body;
  let smtpTransport = nodeMailer.createTransport({
    host: "https://bmh.as",
    service: "Outlook",
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectunauthorized: false,
    },
  });

  let mailOptions = {
    from: '"BMH hendvendelse 🏠" <post@bmh.as>',
    to: "post@bmh.as",
    subject: `Nettside`,
    html: `
        <h3>Informasjon</h3>
        <ul>
        <li>Navn: ${data.Navn}</li>
        <li>Email: ${data.Email}</li>
        <li>Telefon: ${data.phone}</li>
        </ul>
        <h3>Melding</h3>
        <p>${data.Melding}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Sucess");
    }
    smtpTransport.close();
  });
});

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
