import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,

    [theme.breakpoints.down("sm")]: {
      margin: "auto !important",
      marginBottom: "32px !important",
    },
  },
  media: {
    height: 200,
  },
  cardContent: {
    padding: "32px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "16px !important",
    },
  },
  btn: {
    backgroundColor: "#422776 !important",
    marginBottom: "16px !important",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.img} />
      <CardContent className={classes.cardContent}>
        <Link to={props.linkTo} style={{ textDecoration: "none" }}>
          <Button fullWidth variant="contained" className={classes.btn}>
            {props.title}
          </Button>
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
