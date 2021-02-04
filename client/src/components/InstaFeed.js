import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(12),
  },
}));

export default function InstaFeed() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
