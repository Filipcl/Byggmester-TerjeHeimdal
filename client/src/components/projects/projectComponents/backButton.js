import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backLink: {
    display: "flex !important",
    justifyContent: "left",
    color: "#fff",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
    },
  },
}));

export default function BackButton() {
  const classes = useStyles();
  return (
    <>
      <Link to={"./projects"} className={classes.backLink}>
        <Button
          variant="contained"
          disableRipple={true}
          startIcon={
            <ChevronLeftIcon
              style={{
                color: "#fff",
              }}
            />
          }
          style={{
            height: "36px",
            backgroundColor: "#422776",
            color: "#fff",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Tilbake
        </Button>
      </Link>
    </>
  );
}
