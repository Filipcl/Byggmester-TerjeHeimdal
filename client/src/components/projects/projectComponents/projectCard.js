import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectButton from "../projectComponents/projectButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    width: "80%",
    height: "288px",
    padding: "16px 24px ",
    borderRadius: "5px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
      height: "auto",
    },
  },
  media: {
    maxWidth: 345,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
  },
  contentContainer: {
    textAlign: "start",
    margin: "0px 32px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 8px",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mediaContainer}>
        <img className={classes.media} src={props.img} alt="prosjekt bilde" />
      </div>
      <div className={classes.contentContainer}>
        <h4 style={{ fontWeight: "600", fontSize: "18px" }}>{props.title}</h4>
        <p style={{ fontSize: "16px" }}>{props.content}</p>
        <div className={classes.buttonContainer}>
          <ProjectButton
            text={"Se mer fra dette prosjektet"}
            linkTo={props.linktoProject}
          />
        </div>
      </div>
    </div>
  );
}
