import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import meg from "../../images/Meg.jpg";
import "./project.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "16px",
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
  projectImg: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  projectContent: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  projectButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export default function Project() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "start" }}>
          <h1>Se flere av våre prosjekter på instagram</h1>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Fremtidig instagram feed</h3>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "start" }}>
          <h1>Hytte på Veierland</h1>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <div className="employee-photo">
                <img src={meg} alt="Ansatt" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
            <Paper className={classes.paper}>
              <div className="employee-photo">
                <img src={meg} alt="Ansatt" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
            <Paper className={classes.paper}>
              <div className="employee-photo">
                <img src={meg} alt="Ansatt" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
            <Paper className={classes.paper}>
              <div className="employee-photo">
                <img src={meg} alt="Ansatt" />
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.projectContent}>
          <Paper className={classes.paper}>
            <Container>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                laoreet pellentesque sem non molestie. Pellentesque at bibendum
                enim. Donec in ante nunc. Phasellus vel lacus quis odio sagittis
                malesuada ac ut lorem. Integer semper fringilla turpis ut
                varius. Mauris rhoncus dolor dui, ut aliquet ex pharetra ac.
                Pellentesque sed lacinia justo. Vivamus urna nisi, lacinia vel
                magna vitae, congue consectetur tortor. Quisque lectus metus,
                dictum quis rutrum tincidunt, blandit in turpis. Duis a congue
                quam, ut pulvinar tortor. Aliquam massa eros, ultricies ac enim
                nec, placerat tristique metus. Nunc est augue, fermentum et
                dictum eget, imperdiet et turpis. Suspendisse aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                laoreet pellentesque sem non molestie. Pellentesque at bibendum
                enim. Donec in ante nunc. Phasellus vel lacus quis odio sagittis
                malesuada ac ut lorem. Integer semper fringilla turpis ut
                varius. Mauris rhoncus dolor dui, ut aliquet ex pharetra ac.
                Pellentesque sed lacinia justo. Vivamus urna nisi, lacinia vel
                magna vitae, congue consectetur tortor. Quisque lectus metus,
                dictum quis rutrum tincidunt, blandit in turpis. Duis a congue
                quam, ut pulvinar tortor. Aliquam massa eros, ultricies ac enim
                nec, placerat tristique metus. Nunc est augue, fermentum et
                dictum eget, imperdiet et turpis. Suspendisse aliquet.
              </p>
            </Container>
          </Paper>
        </Grid>
        <Grid container className={classes.projectButton}>
          <Link to={"/projectOne"}>
            <Button variant="outlined" size="large" color="primary">
              Les mer om prosjektet
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "start" }}>
          <h1>Hytte i Drøbak</h1>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={meg} alt="Ansatt" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={meg} alt="Ansatt" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={meg} alt="Ansatt" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.projectImg}>
          <Paper className={classes.paper}>
            <div className="employee-photo">
              <img src={meg} alt="Ansatt" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.projectContent}>
          <Paper className={classes.paper}>
            <Container>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                laoreet pellentesque sem non molestie. Pellentesque at bibendum
                enim. Donec in ante nunc. Phasellus vel lacus quis odio sagittis
                malesuada ac ut lorem. Integer semper fringilla turpis ut
                varius. Mauris rhoncus dolor dui, ut aliquet ex pharetra ac.
                Pellentesque sed lacinia justo. Vivamus urna nisi, lacinia vel
                magna vitae, congue consectetur tortor. Quisque lectus metus,
                dictum quis rutrum tincidunt, blandit in turpis. Duis a congue
                quam, ut pulvinar tortor. Aliquam massa eros, ultricies ac enim
                nec, placerat tristique metus. Nunc est augue, fermentum et
                dictum eget, imperdiet et turpis. Suspendisse aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                laoreet pellentesque sem non molestie. Pellentesque at bibendum
                enim. Donec in ante nunc. Phasellus vel lacus quis odio sagittis
                malesuada ac ut lorem. Integer semper fringilla turpis ut
                varius. Mauris rhoncus dolor dui, ut aliquet ex pharetra ac.
                Pellentesque sed lacinia justo. Vivamus urna nisi, lacinia vel
                magna vitae, congue consectetur tortor. Quisque lectus metus,
                dictum quis rutrum tincidunt, blandit in turpis. Duis a congue
                quam, ut pulvinar tortor. Aliquam massa eros, ultricies ac enim
                nec, placerat tristique metus. Nunc est augue, fermentum et
                dictum eget, imperdiet et turpis. Suspendisse aliquet.
              </p>
            </Container>
          </Paper>
        </Grid>
        <Grid container className={classes.projectButton}>
          <Link to={"/projectTwo"}>
            <Button variant="outlined" size="large" color="primary">
              Les mer om prosjektet
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
