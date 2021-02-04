import React from "react";
import ContactForm from "../form/form";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border: "solid 3px #000",
  },
  contactTitle: {
    marginBottom: "54px",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.contactTitle} component="h1" variant="h3">
        Kontakt Oss
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Ring oss på
            </Typography>
            <Typography variant="h6">402 00 499</Typography>
            <br />
            <Typography component="h1" variant="h5">
              Eller via mail
            </Typography>
            <Typography variant="h6">
              <a href="mailto:martin@bmh.as">Send Feedback</a>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
