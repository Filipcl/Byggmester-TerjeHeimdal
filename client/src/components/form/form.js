import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "@material-ui/lab/Alert";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  msg: {
    display: "none",
  },
  msgAppear: {
    display: "block",
  },
  contactContainer: {
    display: "flex",
    position: "relative",
    minHeight: "550px",
    minWidth: "1100px",
    zIndex: "1000",
    [theme.breakpoints.down("lg")]: {
      width: "70%",
      minWidth: "auto",
      margin: "20px",
    },
  },
  contactInfo: {
    position: "absolute",
    top: "40px",
    width: "350px",
    height: "calc(100% - 130px)",
    backgroundColor: "#422776",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    boxShadow: "0px 20px 25px rgba(0,0,0,0.15)",
    [theme.breakpoints.down("md")]: {
      top: "0px",
      width: "100%",
    },
  },
  emailFormContainer: {
    position: "absloute",
    padding: "70px 50px",
    paddingLeft: "250px",
    marginLeft: "150px",
    width: "calc(100% - 200px)",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 50px 50px rgba(0,0,0,0.25)",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "calc(100% - 350px)",
      paddingLeft: "0px",
      marginLeft: "0px",
      padding: "40px",
      height: "550px",
      boxShadow: "none",
    },
  },
  listItem: {
    postion: "relative",
    listStyle: "none",
    display: "flex",
    margin: "20px 0",
    cursor: "pointer",
    alignItems: "flex-start",
  },
  submit: {
    position: "relative",
    maxWidth: "150px",
    padding: "12px",
    backgroundColor: "#422776 !important",
    color: "#fff",
    "&:hover": {
      opacity: "0.9",
    },
  },
}));

const schema = yup.object().shape({
  Navn: yup
    .string()
    .matches(
      /^([^0-9<>{}"/|;:.,~!?@#$%^=&]*)$/,
      "Navn kan ikke inneholde tall eller spesialtegn"
    )
    .required("Navn feltet er obligatorisk "),
  Email: yup
    .string()
    .email("Dette er ikke en gyldig epost")
    .required("Epost feltet er obligatorisk "),
  Melding: yup.string().required("Meldingsfeltet er obligatorisk "),
});

export default function ContactForm(props) {
  const classes = useStyles();
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [isSent, setSent] = useState(false);
  const [isError, setError] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    axios
      .post("/api/form", data)
      .then((res) => {
        setSent(!isSent);
        resetForm();
      })
      .catch(() => {
        setError(true);
        console.log("hei, noe gikk galt med post requesten");
      });
  };

  const resetForm = () => {
    reset();
    setTimeout(() => {
      setSent(false);
      setError(false);
    }, 3000);
  };

  return (
    <Grid className={classes.contactContainer}>
      <Grid className={classes.contactInfo}>
        <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
          Kontakt info
        </h2>
        <ul style={{ postion: "relative", margin: "20px 0px" }}>
          <li className={classes.listItem}>
            <span>
              <LocationOnIcon style={{ fontSize: "30px", color: "#fff" }} />
            </span>
            <span
              style={{ color: "#fff", marginLeft: "10px", fontWeight: "300" }}
            >
              Utsiktsveien 3, 3121 Nøtterøy
            </span>
          </li>
          <li className={classes.listItem}>
            <span>
              <MailIcon style={{ fontSize: "30px", color: "#fff" }} />
            </span>
            <span
              style={{ color: "#fff", marginLeft: "10px", fontWeight: "300" }}
            >
              post@bmh.no
            </span>
          </li>
          <li className={classes.listItem}>
            <span>
              <PhoneIcon style={{ fontSize: "30px", color: "#fff" }} />
            </span>
            <span
              style={{ color: "#fff", marginLeft: "10px", fontWeight: "300" }}
            >
              +47 402 00 499
            </span>
          </li>
        </ul>
      </Grid>
      <Grid className={classes.emailFormContainer}>
        <h2 style={{ color: "#464646", fontSize: "24px", fontWeight: "500" }}>
          Send oss en E-post
        </h2>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            item
            className={classes.formContainer}
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingTop: "30px",
            }}
          >
            <Grid style={{ postion: "relative", marginBottom: "35px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                autoComplete="name"
                name="Navn"
                variant="outlined"
                label="Fornavn"
                autoFocus
                inputRef={register}
                error={!!errors.Navn}
                helperText={errors?.Navn?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid style={{ postion: "relative", marginBottom: "35px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                autoComplete="name"
                name="etternavn"
                variant="outlined"
                label="Etternavn"
                inputRef={register}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid style={{ postion: "relative", marginBottom: "35px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Ditt telefon nummer"
                variant="outlined"
                id="phone"
                name="phone"
                autoComplete="phone"
                inputRef={register}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid style={{ postion: "relative", marginBottom: "35px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                variant="outlined"
                id="email"
                label="Din e-postadresse"
                name="Email"
                autoComplete="email"
                inputRef={register}
                error={!!errors.Email}
                helperText={errors?.Email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              style={{
                width: "100%",
                postion: "relative",
                marginBottom: "35px",
              }}
            >
              <TextField
                className={classes.msgInput}
                id="outlined-multiline-static"
                label="Hva kan vi hjelpe deg med ?"
                name="Melding"
                minRows={2}
                fullWidth
                multiline
                variant="outlined"
                inputRef={register}
                error={!!errors.Melding}
                helperText={errors?.Melding?.message}
              />
              <div className={isSent ? classes.msgAppear : classes.msg}>
                <Alert severity={isError ? "warning" : "success"}>
                  {isError
                    ? "Ops, noe gikk galt fra vår side.. Ring oss isted"
                    : "Meldingen ble sendt"}
                </Alert>
              </div>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Send
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
