import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    height: "36px",
    backgroundColor: "#422776 !important",
    color: "#fff",
    textTransform: "none",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));

export default function ProjectButton(props) {
  const classes = useStyles();
  return (
    <>
      <Link
        to={props.linkTo}
        style={{
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          disableRipple={true}
          className={classes.buttonStyle}
          startIcon={
            <ChevronRightIcon
              style={{
                color: "#fff",
              }}
            />
          }
        >
          {props.text}
        </Button>
      </Link>
    </>
  );
}
