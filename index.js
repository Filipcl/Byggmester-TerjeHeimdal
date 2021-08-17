const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Node mailer setup
app.post("/api/form", (req, res) => {
  let data = req.body;
  let smtpTransport = nodeMailer.createTransport({
    host: "https://bmh-nettside.herokuapp.com/",
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

// GOOGLE CMS setup
const getRows = async (req, res) => {
  // sheet id finner du i Google Sheets-urlen
  const SHEET_ID = process.env.SHEET_ID;
  // lag en Google Sheets representasjon
  const doc = new GoogleSpreadsheet(SHEET_ID);
  // Autentiser med nøkler du får i Googles utviklerportal
  await doc.useServiceAccountAuth({
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  });
  // last inn regnearket ditt
  await doc.loadInfo();
  // pek på første ark i Google Sheets-urlen
  const sheet = doc.sheetsByIndex[0];
  // hent radene
  const rows = await sheet.getRows();
  return rows;
};

// CMS endpoint
app.get("/api/cms", async function (req, res) {
  try {
    let resp = await getRows();
    console.log(resp);
    let resArray = [];
    resp.map((row) => {
      if (row._rawData[4] === "ja") {
        resArray.push({
          id: row._rowNumber,
          title: row._rawData[0],
          content: row._rawData[1],
          jobtitle: row._rawData[3],
          type: row._rawData[2],
          img: row._rawData[5],
        });
      }
    });
    res.json(resArray);
  } catch (e) {
    console.log(`noe gikk galt ${e}`);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
