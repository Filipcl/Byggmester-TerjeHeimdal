import React from "react";
import "./footer.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Ansvarsrett from "../../images/ansvarsrett.png";
import Byggmester from "../../images/byggmester.png";
import Lærling from "../../images/lærling.png";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "135px",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  brands: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    margin: 0,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      padding: "0",
      paddingTop: "16px",
    },
  },
  brand: {
    paddingLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },
  footerImages: {
    height: "70px",
  },
  footerIcons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "64px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  FooterIcon: {
    margin: "0px 10px",
    width: "18px",
    height: "18px",
  },
  FooterInfo: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "8px 0px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <hr />
      <footer className={classes.footer}>
        <div className={classes.footerIcons}>
          <div className={classes.FooterInfo}>
            <MailIcon className={classes.FooterIcon} />
            <a className="nav-link" href="mailto:post@bmh.no">
              post@bmh.no
            </a>
          </div>
          <div className={classes.FooterInfo}>
            <PhoneIcon className={classes.FooterIcon} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">+47 402 00 499</Typography>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <ul className={classes.brands}>
            <li className={classes.brand}>
              <img
                src={Lærling}
                alt="lærling"
                width="auto"
                height="70px"
                className={classes.footerImages}
              />
            </li>
            <li className={classes.brand}>
              <img
                src={Ansvarsrett}
                alt="ansvarsrett"
                width="auto"
                height="70px"
                className={classes.footerImages}
              />
            </li>
            <li className={classes.brand}>
              <img
                src={Byggmester}
                alt="Byggmester"
                width="auto"
                height="70px"
                className={classes.footerImages}
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
