import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import PhoneIcon from "@material-ui/icons/Phone";
import Martin from "../../images/ansatte/martin.JPG";
import Terje from "../../images/ansatte/terje.JPG";
import Nikolai from "../../images/ansatte/nikolai.jpg";
import Steinar from "../../images/ansatte/steinar.JPG";
import ansatt1 from "../../images/ansatte/ansatt1.JPG";
import ansatt2 from "../../images/ansatte/ansatt2.JPG";
import ansatt3 from "../../images/ansatte/ansatt3.JPG";
import EmployeeCard from "./card";

import "./about.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    flexGrow: 1,
    padding: "64px 24px 24px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  cardContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "64px !important",
    },
  },
  cardIcon: {
    margin: "0px 10px",
    width: "18px",
    height: "18px",
  },
  cardInfo: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4">Våre ansatte</Typography>
        <Typography variant="body1" style={{ padding: "24px 0px" }}>
          Vi er en gjeng med tømrere stasjonert i ferder kommune. Vi har ulik
          spisskometanse og tar tilbud Vestfold og Oslo.
        </Typography>
        <hr style={{ color: "#422776", width: "80%", marginBottom: "64px" }} />
      </Grid>
      <Grid container justifyContent="center" spacing={16}>
        <Grid item>
          <EmployeeCard
            id={"martin"}
            img={Martin}
            name={"Martin Syvertsen"}
            stilling={"Daglig leder"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 402 00 499
                </Typography>
              </div>
            }
            mail={"matin@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={Terje}
            name={"Terje Heimdal"}
            stilling={"Byggmester"}
            tlf={""}
            mail={"terje@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt1}
            name={"Remi Alvestad"}
            stilling={"Tømrer"}
            tlf={""}
            mail={"remi@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt2}
            name={"Anders Ljone"}
            stilling={"Tømrer"}
            tlf={""}
            mail={"anders@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={Nikolai}
            name={"Nikolai Andersen"}
            stilling={"Lærling"}
            tlf={""}
            mail={"nikolai@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt3}
            name={"Tobias Sakariassen "}
            stilling={"Tømrer"}
            tlf={""}
            mail={"tobias@bmh.as "}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            name={"-----"}
            stilling={"Tømrer"}
            tlf={""}
            mail={"tets@test.com"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
