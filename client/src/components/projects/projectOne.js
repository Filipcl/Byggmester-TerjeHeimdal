import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5rem",
  },
}));

export default function ProjectOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Prosjekt 1</h1>
    </div>
  );
}
