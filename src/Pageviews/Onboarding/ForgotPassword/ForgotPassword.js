import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import LinkSentModal from "./LinkSentModal";
import NoUserFound from "./NoUserFound";
import { ArrowBack } from "@mui/icons-material";

const usesStyles = makeStyles((theme) => ({
  sliderContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "#D5DCED",
    padding: theme?.spacing(2),
  },
  loginFormContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100vh",
    width: "100%",
    padding: theme?.spacing(2),
  },
  formHolder: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm") && theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  logoContainer: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.up("sm") && theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      width: "150px",
    },
  },
  logo: {
    width: "100%",
  },
  titleTxet: {
    color: "#231F20",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "start",
  },
  welcomeTxet: {
    color: "#121212",
    fontSize: "24px",
    fontWeight: "700",
  },
  input: {
    width: "100%",
  },
  spacer: {
    width: "15px",
    height: "15px",
  },
  spacerSmall: {
    width: "5px",
    height: "5px",
  },
}));

const ForgotPassword = ({ toggleToForgotPassword }) => {
  const classes = usesStyles();
  const [linkSentModal, setLinkSentModal] = useState(false);
  const [noUserFoundModal, setNoUserFoundModal] = useState(false);

  const passwordReset = (e) => {
    e.preventDefault();
    if (e.target?.email?.value === "" || undefined) {
      setNoUserFoundModal(!noUserFoundModal);
      return;
    } else {
      setLinkSentModal(!linkSentModal);
    }
  };

  return (
    <>
      {linkSentModal && (
        <LinkSentModal
          linkSentModal={linkSentModal}
          setLinkSentModal={setLinkSentModal}
        />
      )}
      {noUserFoundModal && (
        <NoUserFound
          noUserFoundModal={noUserFoundModal}
          setNoUserFoundModal={setNoUserFoundModal}
        />
      )}
      <div className={classes.formHolder}>
        <div className={classes.welcomeTxet}>Forgot Password</div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div style={{ color: "#6B7280", fontSize: "20", fontWeight: "400" }}>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </div>

        <div className={classes.spacer}></div>

        <div style={{ color: "#6B7280", fontSize: "20", fontWeight: "400" }}>
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </div>

        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>

        <div className={classes.titleTxet}>Email Address</div>
        <div className={classes.spacerSmall}></div>

        <form onSubmit={(e) => passwordReset(e)} style={{ width: "100%" }}>
          <TextField
            variant="outlined"
            placeholder="Email Address"
            name="email"
            size="small"
            className={classes.input}
          />
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#24459c",
              padding: "10px 40px",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "18px",
              textTransform: "none",
              width: "100%",
            }}
          >
            Send Reset Instructions
          </Button>
        </form>
        <Typography
          onClick={() => toggleToForgotPassword()}
          sx={{
            paddingTop: "36px",
            color: "#24459c",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          <ArrowBack sx={{ fontSize: "18px" }} /> Back to Login Screen
        </Typography>
      </div>
    </>
  );
};

export default ForgotPassword;
