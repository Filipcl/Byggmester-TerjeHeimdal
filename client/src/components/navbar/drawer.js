import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      width: "220px",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80px",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: "80px",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function MobileDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          style={{ color: "#000" }}
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Link to={"/"} className="nav-link" onClick={handleDrawerClose}>
          <ListItem button>
            <ListItemText>Hjem</ListItemText>
          </ListItem>
        </Link>
        <Link to={"/about"} className="nav-link" onClick={handleDrawerClose}>
          <ListItem button>
            <ListItemText>Våre ansatte</ListItemText>
          </ListItem>
        </Link>
        <Link to={"/projects"} className="nav-link" onClick={handleDrawerClose}>
          <ListItem button>
            <ListItemText>Prosjekter</ListItemText>
          </ListItem>
        </Link>
        <Link to={"/contact"} className="nav-link" onClick={handleDrawerClose}>
          <ListItem button>
            <ListItemText>Kontakt</ListItemText>
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText>
            <a href="https://www.instagram.com/bmh.as/">
              <InstagramIcon />
            </a>
          </ListItemText>
        </ListItem>
      </Drawer>
    </div>
  );
}
