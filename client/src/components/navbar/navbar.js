import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../../images/logo-bgc.png";
import MobileDrawer from "./drawer";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
  isActive: {
    fontWeight: "bold",
    borderBottom: "2px solid #422776",
    paddingBottom: "4px",
  },
  navLogo: {
    marginRight: "30rem",
    [theme.breakpoints.down("lg")]: {
      marginRight: "20rem",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
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
            <Link className={classes.navLogo} to={"/"} id="home-link">
              <img
                className="logo"
                src={logo}
                alt="test"
                width="auto"
                height="auto"
              />
            </Link>
            <div className={classes.burger}>
              <MobileDrawer />
            </div>
            <ul className={classes.navItems}>
              <li className={classes.navItem}>
                <NavLink
                  to={"/about"}
                  className="nav-link"
                  activeClassName={classes.isActive}
                >
                  Våre ansatte
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to={"/projects"}
                  className="nav-link"
                  activeClassName={classes.isActive}
                >
                  Prosjekter
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to={"/contact"}
                  className="nav-link"
                  activeClassName={classes.isActive}
                >
                  Kontakt
                </NavLink>
              </li>
              <li className={classes.navItem}>
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
