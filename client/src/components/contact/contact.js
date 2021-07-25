import React from "react";
import ContactForm from "../form/form";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contactTitle: {
    marginBottom: "3rem",
    fontWeight: "bold",
  },
  contactInfo: {
    textAlign: "left",
    padding: "3rem",
  },
  contactContainer: {
    backgroundColor: "#F8FAFC",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.contactContainer}>
        <Grid item xs={12} sm={6} className={classes.contactInfo}>
          <Typography variant="h3" className={classes.contactTitle}>
            Kontakt oss
          </Typography>
          <Typography variant="body1">
            Ta kontakt for mer informasjon eller be om en uforpliktende befaring
            og pristilbud.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "2rem" }}>
            Vårt team kan hjelpe deg med:
          </Typography>
          <ul>
            <li>Nybygg</li>
            <li>Oppussing</li>
            <li>Flislegging</li>
            <li>Restaurering</li>
          </ul>
          <Typography variant="body1" style={{ marginTop: "2rem" }}>
            Foretrekker du å kontakte oss direkte? Ring oss på:
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            +47 402 00 499
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
