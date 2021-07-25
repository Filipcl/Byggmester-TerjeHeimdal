import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { GoogleSpreadsheet } from "google-spreadsheet";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F8FAFC",
    padding: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  AboutContent: {
    backgroundColor: "#c3c3c3",
    textAlign: "left",
    width: "clamp(200px, 50%, 600px)",
  },
  AboutImg: {
    marginBottom: "3rem",
    height: "440px",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "225px",
    },
  },
  description: {
    margin: "auto",
    width: "40%",
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Gets data from Doc
  // TODO legge dette i .env
  const getRowsFromDoc = async () => {
    const SHEET_ID = "1hY7RrWKwb1An5QLG1LyoZ1EbyLsfTrgcuPpSoaOhnS0";
    const doc = new GoogleSpreadsheet(SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: "bmh-cms-serviceaccount@bmh-cms.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDvbvgoHuOx1mZz\nNBS/zEB9jd4x24SxbgCE3frQbWsYGQoKpm2xGqnnwNQioRcELvAROxfeoob6UIov\nOlqQR09+WEp8MdwHNoRyaJEPWxfxguoggkYtVNgX8Hpbey5gj/j6s2cp/rO0CWTz\n1fCs89c+DUIjA6ZtJSv5H6TyzNA8Z4WsOV940ljODyNL71uv0x4lRbilrI+ZbOlz\nve3NUN4mLIftDMycvQFO82L6fbyE7aDE1R1RYIEOR/k0d6YYuaGuXr0lb/ES5WpQ\nS5xx7Pz0/CHpXyBZ60mj9q4rskEGpYGnwSkvGnTMxQ5MOXGIu7fMWE9Kp7QpXMS5\nf1F2h6QRAgMBAAECggEAAs3SYynlcb44ie3YtlxOfwnrybqv5aILqIKu/sThRbF5\nYCGN1E6jIb8s3ND1I4vnLNR71ZQir4jE7YOp7tme8TRYfvbYhE8bovldhYgEEkR9\nuG6+IqbFNxaOYEbjhqb4+/qg4SmF8jxP7dkaDfR3F1dxaFaRGuMeDjdUJ7HFWIe6\nCDr2IfX3QMBdZBEvyFIjnVlqaQfvs/3zZPsyWmxdF0xb++GHt9Dw0g4bpkgyR7GM\nluT1uXGN99VyYSMy8vGc7etzF1KKo56lCwQcIB/1fJsKPWrfu//4x9O+ruXH6ixd\nOzlbJ2payEZnMj3HM5B9HFtE7u+anz2N8qVSScHIpwKBgQD/1IzVwTDu4qUPP7K7\nJOclSuOwJSraZg9hJRtQLKXRB23ksGXNJei5PCtWOKj/eJvjPkiBq1LbQo+OceOW\nVT1cTMuC+9Om/al1R59cqqKQRN3EH3LoxJo1jVeWtooaDQNudJ0GN7LSRgFnXjcj\ng7q3XAG0ymbekSKARG2ogFuk2wKBgQDvl6JpDiduBDl/zqu/5Nb627UALlZvWIFC\nnigXVWFU8jt1Syg3N+bqLigLSvi9wH5Xelu0B7DIhbQCf1d+SbgE1AX3BzXm9vQF\n0xZFXtx7gmnM4BDbZgzwzJCUKHPDl6Sbwl83OPHTWSw6z6oZibGO6p/jUDWkHUFg\nPfF+kxVYgwKBgQC/wq6eOuVW6oQW3gQ2yv6HsY7hpbptYjr88jd67TyNZig1VxO3\npka/Mh65zla+x8TxnOn0aFr/BvFcMHoLYXFREi8py2FmtpSi2EDX0P9xbG1eaMRV\nPajpozyYN9Nkm4SK8tYQpwdfHiJHPRPPhxoZ/tk4js503g0iYChiOXR4KQKBgB9Z\nSM/UIUac2OUnJoPKLnLOUoV+iqKxAuCzju1Wp5CUzUDQn6dx8g3MEkNAAQHa8O0D\nPoJ0yyXBkMcO4GTOwnwnPcyPrfbVcyJb9zsGaXTjoHJFEw+R77mGGpi4HkWGTuxu\nZ0Tzd3i+3zGmwEvtH0Vi356/fPVHOqmcEUANgKp/AoGAO84AAAuZLfR4otFd99mh\n0g21JgsKFyMpg2XN/YfaXRuKfIuV/KnhJM+0GtXkttXgBjRia74zWv8V9pJIEA5P\nIglQjLDAo6+Az6jcb/fZFwBgY9ocVVQSYrasOiwjvmDS+9mvOpejasecyfDEIZPy\npqJB2TvSh0iNZloNjsVsXLc=\n-----END PRIVATE KEY-----\n".replace(
        /\\n/gm,
        "\n"
      ),
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    setData(rows);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      await getRowsFromDoc();
    }
    fetchData();
  }, []);

  const eventData = data.filter((row) => {
    return row._rawData[2] === "ansatt";
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Om oss</Typography>
        </Grid>
        <Grid item xs={12}>
          <img
            src="https://tellusdmsmedia.newmindmedia.com/wsimgs/Den-Norske-Opera_Ballett_1__c_VisitOSLO_Thomas-Johannessen_8977006.jpg[ProductImage][4D037D0DBEC323D15D8FF16649BD]"
            alt="Om Oss"
            className={classes.AboutImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.AboutContent}>
          <Typography variant="body1" component="p">
            Byggmester Terje Heimdal AS er et byggmester firma som ble etablert
            i 2007. Firmaets 5 ansatte har høy kunnskap og lang erfaring innen
            byggfaget.
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            Vårt primære arbeidsområde er Nøtterøy, Veierland, Tønsberg og
            omegn, men får stadig flere oppdrag i Oslo. Vårt
            kjernesatsningsområde er totalansvar for bad – nytt eller
            rehabilitering, med fokus på kvalitet og leveringstid.
          </Typography>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "3rem" }}>
          <Grid item xs={12}>
            <Typography variant="h4">Våre medarbeidere</Typography>
          </Grid>
          {isLoading ? (
            <CircularProgress style={{ margin: "auto" }}></CircularProgress>
          ) : (
            eventData.map((data) => (
              <Grid item xs={12} sm={6}>
                <div key={data.id}>
                  <Avatar
                    alt="Ansatt"
                    style={{
                      height: "200px",
                      width: "200px",
                      margin: "auto",
                    }}
                    srcSet={data.Bilde}
                  />
                </div>
                <div className={classes.description}>
                  <h3 style={{ borderBottom: "solid 2px" }}>{data.Stilling}</h3>
                  <a>{data.Innhold}</a>
                </div>
              </Grid>
            ))
          )}
        </Grid>
        <Grid
          container
          spacing={3}
          xs={12}
          style={{
            backgroundColor: "#c3c3c3",
            height: "300px",
            marginTop: "5rem",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Ta kontakt med våre flinke fagfolk
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to={"/contact"}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                endIcon={<MailOutlineIcon />}
              >
                Kontakt Oss
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
