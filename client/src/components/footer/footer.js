import React from "react";
import "./footer.css";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import Ansvarsrett from "../../images/ansvarsrett.png";
import LogoSmall from "../../images/logoSmall.png";
import Byggmester from "../../images/byggmester.png";
import Lærling from "../../images/lærling.png";
import Byggmesterforbundet from "../../images/byggmesterforbund.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
  },
  brands: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    margin: 0,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  brand: {
    paddingLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
    },
  },
  smallLogo: {
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  footerImages: {
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <footer className={classes.footer}>
        <img
          src={LogoSmall}
          alt="Liten logo"
          className={classes.footerImages}
        />
        <ul className={classes.brands}>
          <li className={classes.brand}>
            <img
              src={Byggmesterforbundet}
              alt="byggmesterforbundet"
              className={classes.footerImages}
            />
          </li>
          <li className={classes.brand}>
            <img src={Lærling} alt="lærling" className={classes.footerImages} />
          </li>
          <li className={classes.brand}>
            <img
              src={Ansvarsrett}
              alt="ansvarsrett"
              className={classes.footerImages}
            />
          </li>
          <li className={classes.brand}>
            <img
              src={Byggmester}
              alt="Byggmester"
              className={classes.footerImages}
            />
          </li>
        </ul>

        {/*<a href="https://www.instagram.com/bmh.as/">
          <InstagramIcon />
        </a>
        <Typography variant="h6">
          <a href="mailto:martin@bmh.as">Send Feedback</a>
        </Typography>

        <Typography variant="body2">
          Copyright © <a href="http://www.filiplarsen.com">Filip Larsen</a> 2021
        </Typography>*/}
      </footer>
    </>
  );
}
