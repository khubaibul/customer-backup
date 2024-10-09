import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import japan from "../../../../Assets/Onboarding/Login/japan.png";
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

const LoginWithPhone = ({ toggleToPhone }) => {
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
      <div className={classes.formHolder}>
        <Typography
          sx={{ color: "#2F2F2Fs", fontSize: "28px", fontWeight: "700" }}
        >
          Let's start with phone
        </Typography>

        <form
          onSubmit={(e) => passwordReset(e)}
          style={{
            width: "100%",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Box sx={{ display: "flex", gap: "12px", width: "100%" }}>
            <FormControl size="small" sx={{ width: "35%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={"Japan (+81)"}>
                  <Box sx={{ display: "flex" }}>
                    <img src={japan} alt="" />
                    <Typography>Japan (+81)</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              size="small"
              sx={{ width: "65%" }}
              placeholder="Phone number"
            />
          </Box>
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
            Next
          </Button>
        </form>
        <Typography
          onClick={() => toggleToPhone()}
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

export default LoginWithPhone;
