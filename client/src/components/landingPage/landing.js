import React from "react";
import { Grid, Typography } from "@material-ui/core";
import LandingPhoto from "../../images/landingPhoto.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingImage: {
    backgroundImage: `url(${LandingPhoto})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    width: "100%",
  },
  heading: {
    position: "absolute",
    left: "230px",
    top: "550px",
    color: "#f5f5f5",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
      top: "100px",
    },
  },
  landingInfo: {
    position: "absolute",
    top: "577px",
    left: "850px",
    backgroundColor: "#f5f5f5",
    width: "415px",
    height: "270px",
    opacity: "0.98",
    boxShadow: "0px 3.84242px 3.84242px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
      top: "800px",
      boxShadow: "none",
      width: "100vw",
    },
  },
  landingInfoItem: {
    padding: "3rem",
    color: "#696969",
  },
  landingContent: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <img className={classes.landingImage} alt={""} />
        <h1 className={classes.heading}>Byggmester Terje Heimdal AS</h1>
      </Grid>
      <Grid className={classes.landingInfo}>
        <Grid className={classes.landingInfoItem}>
          <Typography variant="h4">Om oss</Typography>
          <hr style={{ margin: "16px" }} />
          <Typography variant="paragraph">
            Vi er en kul håndtverkbedrift som liker å hjelpe folk med å bygg hus
            og mye mer.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.landingContent}>
        <Typography variant="h6" style={{ margin: "auto" }}>
          Ta kontakt med oss for en uformell prat. Følg oss gjerne på instagram
        </Typography>
      </Grid>
    </>
  );
}
