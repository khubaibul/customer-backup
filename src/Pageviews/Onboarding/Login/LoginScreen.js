import { makeStyles } from "@mui/styles";
import SliderImage1 from "../../../Assets/Onboarding/Login/Image-1.png";
import SliderImage2 from "../../../Assets/Onboarding/Login/Image-2.png";
import SliderImage3 from "../../../Assets/Onboarding/Login/Image-3.png";
import SliderImage4 from "../../../Assets/Onboarding/Login/Image-4.png";
import ShowaFullBlackLogo from "../../../Assets/Onboarding/showa_full_black_logo.png";
import usa from "../../../Assets/Onboarding/Login/usa.svg";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { auth } from "../../../firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { loginUser, setUser } from "../../../features/authentication/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import LoginForm from "./Login";
import { CheckCircle } from "@mui/icons-material";
import LoginWithPhone from "./LoginWithPhone/LoginWithPhone";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";

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

const LoginScreen = () => {
  const dispatch = useDispatch();
  const classes = usesStyles();

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [loginFormOpen, setLoginFormOpen] = useState(true);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [loginWithPhoneOpen, setLoginWithPhoneOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const fadeImages = [
    {
      url: SliderImage1,
      caption: "Data Analysis",
      subtitle: "Analysis business data",
    },
    {
      url: SliderImage2,
      caption: "AI  Decision",
      subtitle: "Effortless automation, smarter living",
    },
    {
      url: SliderImage3,
      caption: "Monitor Business",
      subtitle: "Always monitor your system",
    },
    {
      url: SliderImage4,
      caption: "Business Growth",
      subtitle: "Check your business growth",
    },
  ];

  const goToSignUpPage = () => {
    setLoginFormOpen(!loginFormOpen);
    setSignUpOpen(!signUpOpen);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={5} md={5} lg={4}>
        <Container className={classes.sliderContainer}>
          <div className={classes.logoContainer}>
            <img src={ShowaFullBlackLogo} className={classes.logo} alt="" />
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>

          <Fade arrows={false} indicators={true} duration={2000}>
            {fadeImages.map((fadeImage, index) => (
              <div
                className="each-fade"
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "60vh",
                  justifyContent: "center",
                }}
              >
                <div className="image-container">
                  <img src={fadeImage.url} style={{ width: "100%" }} alt="" />
                </div>
                <div className={classes.spacer}></div>
                <div className={classes.spacer}></div>
                <Typography
                  style={{
                    fontSize: "22px",
                    color: "#24459c",
                    fontWeight: "600",
                  }}
                >
                  {fadeImage.caption}
                </Typography>
                <div className={classes.spacerSmall}></div>
                <Typography
                  style={{
                    fontSize: "18px",
                    color: "#24459c",
                    textAlign: "center",
                  }}
                >
                  {fadeImage.subtitle}
                </Typography>
              </div>
            ))}
          </Fade>
        </Container>
      </Grid>

      <Grid
        item
        sm={7}
        md={7}
        lg={8}
        sx={{ background: "white", padding: "80px" }}
      >
        {signUpOpen ? (
          <Typography
            sx={{ textAlign: "right", color: "#686868", fontSize: "16px" }}
          >
            Already have account?{" "}
            <Link
              to="/login"
              style={{ color: "#24459C", fontWeight: "600", cursor: "pointer" }}
            >
              Sign-in
            </Link>
          </Typography>
        ) : (
          <Typography
            sx={{ textAlign: "right", color: "#686868", fontSize: "16px" }}
          >
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              style={{ color: "#24459C", fontWeight: "600", cursor: "pointer" }}
            >
              Register
            </Link>
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {loginFormOpen && (
            <LoginForm
              setLoginFormOpen={setLoginFormOpen}
              loginFormOpen={loginFormOpen}
              setForgotPasswordOpen={setForgotPasswordOpen}
              forgotPasswordOpen={forgotPasswordOpen}
              loginWithPhoneOpen={loginWithPhoneOpen}
              setLoginWithPhoneOpen={setLoginWithPhoneOpen}
            />
          )}

          {forgotPasswordOpen && (
            <ForgotPassword
              forgotPasswordEmail={forgotPasswordEmail}
              setForgotPasswordEmail={setForgotPasswordEmail}
            />
          )}
          {loginWithPhoneOpen && <LoginWithPhone />}
          {signUpOpen && (
            <SignUp
              signUpOpen={signUpOpen}
              setSignUpOpen={setSignUpOpen}
              loginFormOpen={loginFormOpen}
              setLoginFormOpen={setLoginFormOpen}
              loginWithPhoneOpen={loginWithPhoneOpen}
              setLoginWithPhoneOpen={setLoginWithPhoneOpen}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <img src={usa} alt="" />
            <Typography
              sx={{ fontSize: "18px", color: "#5B646B99", fontWeight: "600" }}
            >
              ENGLISH
            </Typography>
          </Box>
          <CheckCircle sx={{ color: "#50B652" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
