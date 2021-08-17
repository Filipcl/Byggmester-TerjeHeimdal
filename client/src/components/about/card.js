import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  card: {
    width: "280px",
    padding: "16px, 24px, 16px, 24px",
    backgroundColor: "#FFF",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 4.00256px 4.00256px rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardContainer: {
    margin: "48px",
  },
  cardContent: {
    marginTop: "10px",
  },
  cardInfo: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cardIcon: {
    margin: "0px 10px",
    width: "18px",
    height: "18px",
  },
  divider: {
    width: "70%",
  },
});

export default function EmployeeCard(props) {
  const classes = useStyles();
  const [isEmpty, setEmpty] = useState(false);
  CheckPhone();

  function CheckPhone(props) {
    if (props === "") {
      setEmpty(true);
    }
  }

  return (
    <div className={classes.card}>
      <div id={props.id} className={classes.cardContainer}>
        <div className={classes.imgContainer}>
          <Avatar
            alt="Ansatt"
            style={{
              height: "184px",
              width: "184px",
              margin: "auto",
            }}
            srcSet={props.img}
          />
        </div>
        <div className={classes.cardContent}>
          <Typography
            style={{ fontSize: "14px", fontWeight: 500 }}
            variant="body1"
          >
            {props.name}
          </Typography>
          <Typography
            style={{ fontSize: "14px", fontWeight: 500, color: "#696969" }}
            variant="body1"
          >
            {props.stilling}
          </Typography>
          <hr className={classes.divider} />
          <div>{props.tlf}</div>

          <div className={classes.cardInfo}>
            <MailIcon className={classes.cardIcon} />
            <Typography
              style={{ fontSize: "12px", fontWeight: 400 }}
              variant="body1"
            >
              E-post: {props.mail}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
