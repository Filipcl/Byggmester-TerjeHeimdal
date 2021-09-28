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
    display: "block",
  },
  contactInfo: {
    backgroundColor: "#422776",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  emailFormContainer: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  listItem: {
    postion: "relative",
    listStyle: "none",
    display: "flex",
    cursor: "pointer",
    alignItems: "flex-start",
  },
  submit: {
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

export default function MobileForm(props) {
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
      <Grid className={classes.emailFormContainer}>
        <h2 style={{ color: "#464646", fontSize: "24px", fontWeight: "500" }}>
          Send oss en E-post
        </h2>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid item className={classes.formContainer}>
            <Grid style={{ marginBottom: "16px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                autoComplete="name"
                name="Navn"
                variant="outlined"
                label="Fullt navn"
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
            <Grid style={{ marginBottom: "16px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Ditt telefon nummer"
                variant="outlined"
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
            <Grid style={{ marginBottom: "16px" }}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                variant="outlined"
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
                marginBottom: "16px",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <TextField
                className={classes.msgInput}
                id="outlined-multiline-static"
                label="Hva kan vi hjelpe deg med ?"
                name="Melding"
                minRows={4}
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
              style={{ marginBottom: "16px" }}
            >
              Send
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid className={classes.contactInfo}>
        <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
          Kontakt info
        </h2>
        <ul
          style={{
            margin: "12px 0px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
              <a
                style={{ color: "#fff", marginLeft: "10px", fontWeight: "300" }}
                className="nav-link"
                href="mailto:post@bmh.as"
              >
                post@bmh.as
              </a>
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
    </Grid>
  );
}
