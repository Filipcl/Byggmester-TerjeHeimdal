import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "@material-ui/lab/Alert";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  msg: {
    display: "none",
  },
  msgAppear: {
    display: "block",
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
  },
}));

const themeTest = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

const schema = yup.object().shape({
  Navn: yup
    .string()
    .matches(
      /^([^0-9<>{}"/|;:.,~!?@#$%^=&]*)$/,
      "Navn kan ikke inneholde tall eller spesialtegn"
    )
    .required("Navn er et obligatorisk felt "),
  Email: yup
    .string()
    .email("Dette er ikke en gyldig epost")
    .required("Epost feltet er obligatorisk "),
  Melding: yup.string().required("Meldingsfeltet er obligatorisk "),
});

export default function ContactForm() {
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
    <Container
      component="main"
      maxWidth="xs"
      style={{ backgroundColor: "#fff", padding: "2rem" }}
    >
      <div>
        <Typography component="h1" variant="h5">
          Send oss en epost
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <ThemeProvider theme={themeTest}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Navn"
                  variant="outlined"
                  fullWidth
                  id="Navn"
                  label="Ditt navn"
                  autoFocus
                  inputRef={register}
                  error={!!errors.Navn}
                  helperText={errors?.Navn?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Epost Adresse"
                  name="Email"
                  autoComplete="email"
                  inputRef={register}
                  error={!!errors.Email}
                  helperText={errors?.Email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Telefon"
                  name="phone"
                  autoComplete="phone"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Melding"
                  name="Melding"
                  multiline
                  fullWidth
                  rows={4}
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#e76f51",
                color: "#fff",
                marginTop: "1rem",
              }}
              className={classes.submit}
            >
              Send
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </Container>
  );
}
