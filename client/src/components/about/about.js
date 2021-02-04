import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Terje from "../../employees/Terje-2020.jpg";
import Martin from "../../employees/Martin-2020.jpg";
import Remi from "../../employees/Remi-2020.jpg";
import Anders from "../../employees/Anders-2020.jpg";
import Nikolai from "../../employees/Nikolai-2020.jpg";

import "./about.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
    border: "solid 3px #000",
  },
  AboutImg: {
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "170px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "110px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "80px",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Om oss</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://media.snl.no/media/38822/article_topimage_operaen.jpg"
            alt="Om Oss"
            className={classes.AboutImg}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div style={{ textAlign: "left" }}>
              <p>
                Byggmester Terje Heimdal AS er et byggmester firma som ble
                etablert i 2007. <br />
                Firmaets 5 ansatte har høy kunnskap og lang erfaring innen
                byggfaget. Vårt primære arbeidsområde er Nøtterøy, Veierland,
                Tønsberg og omegn, men får stadig flere oppdrag i Oslo. Vårt
                kjernesatsningsområde er totalansvar for bad – nytt eller
                rehabilitering, med fokus på kvalitet og leveringstid.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Våre medarbeidere</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={Terje} alt="Ansatt" />
            </div>
            <div className="employee-info">
              <h2>Terje Heimdal</h2>
              <h4>Byggmester</h4>
              <p>
                Tonje er en kjempeflink designer med masse erfaring innen
                kattepass og pc spilling. Hun er ekstra engasjert i hestespill
                hvor målet ikke er så mye. Kanskje hoppe over et par hinder
                også. Utover dette er Tonje sertifisert skigåer og
                ishockeyspiller.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={Martin} alt="Ansatt" />
            </div>
            <div className="employee-info">
              <h2>Terje Heimdal</h2>
              <h4>Byggmester</h4>
              <p>
                Tonje er en kjempeflink designer med masse erfaring innen
                kattepass og pc spilling. Hun er ekstra engasjert i hestespill
                hvor målet ikke er så mye. Kanskje hoppe over et par hinder
                også. Utover dette er Tonje sertifisert skigåer og
                ishockeyspiller.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={Remi} alt="Ansatt" />
            </div>
            <div className="employee-info">
              <h2>Terje Heimdal</h2>
              <h4>Byggmester</h4>
              <p>
                Tonje er en kjempeflink designer med masse erfaring innen
                kattepass og pc spilling. Hun er ekstra engasjert i hestespill
                hvor målet ikke er så mye. Kanskje hoppe over et par hinder
                også. Utover dette er Tonje sertifisert skigåer og
                ishockeyspiller.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={Anders} alt="Ansatt" />
            </div>
            <div className="employee-info">
              <h2>Terje Heimdal</h2>
              <h4>Byggmester</h4>
              <p>
                Tonje er en kjempeflink designer med masse erfaring innen
                kattepass og pc spilling. Hun er ekstra engasjert i hestespill
                hvor målet ikke er så mye. Kanskje hoppe over et par hinder
                også. Utover dette er Tonje sertifisert skigåer og
                ishockeyspiller.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={Nikolai} alt="Ansatt" />
            </div>
            <div className="employee-info">
              <h2>Terje Heimdal</h2>
              <h4>Byggmester</h4>
              <p>
                Tonje er en kjempeflink designer med masse erfaring innen
                kattepass og pc spilling. Hun er ekstra engasjert i hestespill
                hvor målet ikke er så mye. Kanskje hoppe over et par hinder
                også. Utover dette er Tonje sertifisert skigåer og
                ishockeyspiller.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
