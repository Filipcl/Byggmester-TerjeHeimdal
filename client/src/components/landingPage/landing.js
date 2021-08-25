import React from "react";
import { Grid, Typography } from "@material-ui/core";
import LandingPhoto from "../../images/bil-bakgrunn-2.jpg";
import mobilePhoto from "../../images/mobileBil.jpg";
import { makeStyles } from "@material-ui/core/styles";
import LandingCard from "./landingCard";
import projectImage from "../projects/ProjectImages/husoy/20210817_094301.jpg";
import kontaktImage from "../../images/landing_test.jpg";

import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
  landingImage: {
    backgroundImage: `url(${LandingPhoto})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "60vh",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      width: "100%",
      backgroundImage: `url(${mobilePhoto})`,
    },
  },

  heading: {
    position: "absolute",
    left: "850px",
    top: "50px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      left: "0 !important",
      bottom: "0 !important",
      right: "0 !important",
      margin: "auto !important",
      top: "120px !important",
    },
    [theme.breakpoints.down("sm")]: {
      left: "0 !important",
      bottom: "0 !important",
      right: "0 !important",
      margin: "auto !important",
      top: "450px !important",
    },
  },

  landingContent: {
    width: "80%",
    textAlign: "left",
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "1rem",
    },
  },
  landingText: {
    padding: "1rem 0px",
    maxWidth: "75ch",
  },
  firstHeading: {
    fontWeight: "600 !important",
    fontSize: "32px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px !important",
    },
  },
  secHeading: {
    textTransform: "uppercase",
    fontSize: "24px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px !important",
    },
  },
  landingCardRoot: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "64px 200px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "64px 32px",
    },
  },
  landingCardContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginBottom: "32px",
    },
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const fadeProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });
  const textFadeProps = useSpring({
    to: { opacity: 1, left: "850px", top: "550px" },
    from: { opacity: 0, left: "850px", top: "450px" },
    delay: 600,
  });

  return (
    <>
      <animated.div style={fadeProps}>
        <img className={classes.landingImage} alt={""} />
      </animated.div>
      <animated.div style={textFadeProps} className={classes.heading}>
        <Typography className={classes.firstHeading} variant="h2">
          MED FOKUS PÅ
          <br />
          <Typography className={classes.secHeading} variant="h4">
            HØY KVALITET OG GODE KUNDEOPPLEVELSER
          </Typography>
        </Typography>
      </animated.div>
      <Grid className={classes.landingContent}>
        <Typography className={classes.landingText} variant="h4">
          Om oss
        </Typography>
        <Typography className={classes.landingText} variant="body1">
          Byggmester Terje Heimdal AS holder til på Nøtterøy, og ble etablert i
          2007. De fleste av våre oppdrag er på fastlandet i kommunene Færder og
          Tønsberg. Vi har også lang erfaring med arbeid på øyene i skjærgården
          – hvor vi har raske og effektive transportløsninger.
          <br />
          <br />
          De siste årene har vi utført flere prosjekter andre steder på
          Østlandet, blant annet totalrehabilitering av enebolig i Oslo,
          ombygging hytte Drøbak, takomlegging hytte Veggli og nytt kjøkken og
          stue i Asker.
          <br />
          <br />
          Våre ansatte har høy kompetanse og lang erfaring innen byggfaget. Vi
          utfører oppdrag som nybygg, tilbygg, restaurering, bad, tak med mere,
          med{" "}
          <span style={{ fontWeight: "bold" }}>
            fokus på høy kvalitet og gode kundeopplevelser.
          </span>{" "}
          <br />
          <br />
          Vi samarbeider med bedrifter innen fagområdene rørlegger, elektriker,
          maler og grunnarbeider, slik at vi kan være din totalleverandør.
          <br />
          <br />
          Byggmester Terje Heimdal har Sentral godkjenning for ansvarsrett, og
          er en lærling bedrift. Vi har kontinuerlig nye lærlinger hos oss, for
          å sikre fremtidig rekruttering til tømrerfaget.
        </Typography>
      </Grid>
      <Grid
        style={{
          backgroundColor: "#E7E7E7",
          color: "#464646",
          padding: "32px",
        }}
      >
        <Typography variant="h6">
          "Fornøyde kunder som utfordrer oss i hverdagen, er med på å skape vårt
          rykte og renomé.
          <br />
          Derfor har vi alltid fokus på høy kvalitet, for at du som kunde skal
          være fornøyd!"
        </Typography>
      </Grid>
      <Grid className={classes.landingCardRoot}>
        <Grid item className={classes.landingCardContainer}>
          <LandingCard
            img={projectImage}
            title="Se våre prosjekter"
            content="God kompetanse og kunnskap gir trygghet"
            linkTo="/projects"
          />
        </Grid>
        <Grid item className={classes.landingCardContainer}>
          <LandingCard
            img={kontaktImage}
            title="Ta kontakt med oss"
            content="Vi hjelper deg å realisere  ditt byggeprojekt "
            linkTo="/contact"
          />
        </Grid>
      </Grid>
    </>
  );
}
