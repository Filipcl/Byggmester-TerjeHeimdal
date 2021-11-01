import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import PhoneIcon from "@material-ui/icons/Phone";
import Martin from "../../images/ansatte/martin.JPG";
import Terje from "../../images/ansatte/terje.JPG";
import Nikolai from "../../images/ansatte/nikolai.jpg";
import ansatt1 from "../../images/ansatte/ansatt1.JPG";
import ansatt2 from "../../images/ansatte/ansatt2.JPG";
import ansatt3 from "../../images/ansatte/ansatt3.JPG";
import Mathias from "../../images/ansatte/mathias.jpg";
import EmployeeCard from "./card";

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
      paddingBottom: "64px !important",
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
          Medarbeiderne våre har høy kompetanse og lang erfaring innen
          byggfaget, og klare for flere oppdrag på Østlandsområdet.
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
            mail={"martin@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={Terje}
            name={"Terje Heimdal"}
            stilling={"Byggmester"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 974 89 186
                </Typography>
              </div>
            }
            mail={"terje@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt1}
            name={"Remi Alvestad"}
            stilling={"Tømrer med fagbrev"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 988 62 408
                </Typography>
              </div>
            }
            mail={"remi@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt2}
            name={"Anders Ljone"}
            stilling={"Tømrer"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 918 71 787
                </Typography>
              </div>
            }
            mail={"anders@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={Nikolai}
            name={"Nikolai Andersen"}
            stilling={"Lærling"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 988 47 284
                </Typography>
              </div>
            }
            mail={"nikolai@bmh.as"}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={ansatt3}
            name={"Tobias Sakariassen "}
            stilling={"Tømrer med fagbrev"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 918 71 787
                </Typography>
              </div>
            }
            mail={"tobias@bmh.as "}
          />
        </Grid>
        <Grid item className={classes.cardContainer}>
          <EmployeeCard
            img={Mathias}
            name={"Mathias Larsen"}
            stilling={"Tømrer med fagbrev"}
            tlf={
              <div className={classes.cardInfo}>
                <PhoneIcon className={classes.cardIcon} />
                <Typography
                  style={{ fontSize: "12px", fontWeight: 400 }}
                  variant="body1"
                >
                  +47 417 60 382
                </Typography>
              </div>
            }
            mail={"mathias@bmh.as"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
