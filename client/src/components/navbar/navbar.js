import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../../images/Logo.svg";
import MobileDrawer from "./drawer";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Link } from "react-router-dom";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {},
  },
  navItems: {
    width: "400px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navItem: {
    listStyle: "none",
  },
  burger: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <div className={classes.navbar}>
            <Link to={"/"} className="nav-link" id="home-link">
              <img className="logo" src={logo} alt="test" />
            </Link>
            <div className={classes.burger}>
              <MobileDrawer />
            </div>
            <ul className={classes.navItems}>
              <li className={classes.navItem}>
                <Link to={"/about"} className="nav-link">
                  Om oss
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={"/projects"} className="nav-link">
                  Prosjekter
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={"/contact"} className="nav-link">
                  Kontakt
                </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/bmh.as/">
                  {" "}
                  <InstagramIcon style={{ color: "#464646" }} />
                </a>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
