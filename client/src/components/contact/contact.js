import React from "react";
import ContactForm from "../form/form";
import MobileForm from "../form/mobileForm";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "64px 24px 24px",
  },
  contactTitle: {
    marginBottom: "3rem",
    fontWeight: "bold",
  },
  contactInfo: {
    textAlign: "left",
    padding: "3rem",
  },
  cardInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardIcon: {
    width: "24px",
    height: "24px",
  },
  contactFormContainer: {
    margin: "82px 82px ",
    [theme.breakpoints.down("md")]: {
      margin: "32px 0px ",
    },
  },
  contactlg: {
    display: "block",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  contactmd: {
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.contactContainer}>
        <Grid item xs={12}>
          <Typography variant="h4">Kontakt oss</Typography>
          <Typography variant="body1" style={{ padding: "24px 0px" }}>
            Ta kontakt for en uforpliktende prat angående ditt prosjekt
          </Typography>
          <hr style={{ color: "#422776", width: "80%" }} />
        </Grid>
      </Grid>
      <Grid className={classes.contactFormContainer}>
        <div className={classes.contactlg}>
          <ContactForm />
        </div>
        <div className={classes.contactmd}>
          <MobileForm />
        </div>
      </Grid>
    </div>
  );
}
