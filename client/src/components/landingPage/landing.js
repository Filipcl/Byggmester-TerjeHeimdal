import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    height: "auto",
    width: "auto",
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  landingInfo: {
    textAlign: "left",
    listStyle: "none",
  },
  contactBtn: {
    padding: "16px",
  },
  certificates: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem",
  },
  certificate: {
    height: "180px",
    width: "180px",
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100px",
      width: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      width: "60px",
    },
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <img
              className={classes.landingImage}
              src={
                "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              alt={"Landing Page"}
            />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.landingInfo}>
            <h1>Byggmester Terjeheimdal AS</h1>
            <h2>Byggmester firma med over 30 års erfaring.</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget quam porttitor lectus dictum dignissim id pulvinar nibh. Nam
              id nibh eu sem commodo convallis vel ac neque. Proin congue varius
              ipsum bibendum ultricies. Cras quis tortor urna. Suspendisse
              potenti.
            </h4>
            <h4>
              Morbi ac dolor leo. Pellentesque scelerisque ex non tellus
              dignissim, id finibus tellus fringilla. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Etiam vulputate posuere sapien ac eleifend. Vivamus gravida a est
              at ullamcorper. Nulla facilisi.
            </h4>
          </Container>
          <Container className={classes.contactBtn}>
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
          </Container>
        </Grid>
      </Grid>
      <Grid container className={classes.certificates}>
        <Grid item md={3}>
          <div>
            <img
              className={classes.certificate}
              src={
                "https://www.byggmesterhofstad.no/wp-content/uploads/2019/03/mestermerket-BH.png"
              }
              alt={""}
            />
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <img
              className={classes.certificate}
              src={
                "https://byggmesteren.as/wp-content/uploads/2015/12/SG-merke-2016_web.jpg"
              }
              alt={""}
            />
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <img
              className={classes.certificate}
              src={"https://www.byggforsk.no/Image/Display/51932"}
              alt={""}
            />
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <img
              className={classes.certificate}
              src={
                "https://www.udir.no/globalassets/filer/bilder/fy/merket-bedrifter-med-laerling.png"
              }
              alt={""}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
