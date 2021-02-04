const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Velkommen til BMH Mail Server!");
});

app.post("/api/form", (req, res) => {
  let data = req.body;
  let smtpTransport = nodeMailer.createTransport({
    service: "Outlook",
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"BMH hendvendelse 🏠" <Filip.larsen@live.no>',
    to: "Filip.larsen@live.no",
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
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
