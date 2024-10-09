import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import phone from "../../../Assets/Onboarding/Login/phone.png";
import faceId from "../../../Assets/Onboarding/Login/Face_ID.png";
import google from "../../../Assets/Onboarding/Login/google.svg";
import apple from "../../../Assets/Onboarding/Login/Apple.svg";
import SliderImage1 from "../../../Assets/Onboarding/Login/Image-1.png";
import SliderImage2 from "../../../Assets/Onboarding/Login/Image-2.png";
import SliderImage3 from "../../../Assets/Onboarding/Login/Image-3.png";
import SliderImage4 from "../../../Assets/Onboarding/Login/Image-4.png";
import ShowaFullBlackLogo from "../../../Assets/Onboarding/showa_full_black_logo.png";
import usa from "../../../Assets/Onboarding/Login/usa.svg";
import {
  CheckCircle,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Fade } from "react-slideshow-image";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import LoginWithPhone from "./LoginWithPhone/LoginWithPhone";
import { loginUser, setUser } from "../../../features/authentication/authSlice";
import ProgressingLoader from "../../../Utils/ProgressingLoader";
import { toast } from "react-toastify";

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

const Login = ({}) => {
  const [passVisible, setPassVisible] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [loginWithPhoneOpen, setLoginWithPhoneOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(true);
  const { isLoading, user, googleLoading, isError, error } = useSelector(
    (state) => state.auth
  );

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid) {
      navigate(from, { replace: true });
    }
  }, [user, isLoading]);

  const dispatch = useDispatch();
  const classes = usesStyles();

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

  const login = (e) => {
    e.preventDefault();
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    if (email === "") {
      toast.info("Please provide an email address to login");
      return;
    }
    if (password === "") {
      toast.info("Please provide your password to login");
      return;
    }

    dispatch(loginUser({ email, password }))
      .then((result) => {
        if (result?.payload?.email) {
          setUser(result?.payload);
          toast.success("Login Successful...");
        } else if (isError) {
          toast.error(error?.message);
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const toggleToPhone = () => {
    setLoginFormOpen(!loginFormOpen);
    setLoginWithPhoneOpen(!loginWithPhoneOpen);
  };

  const toggleToForgotPassword = () => {
    setLoginFormOpen(!loginFormOpen);
    setForgotPasswordOpen(!forgotPasswordOpen);
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
        <Typography
          sx={{ textAlign: "right", color: "#686868", fontSize: "16px" }}
        >
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            style={{
              color: "#24459C",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {forgotPasswordOpen && (
            <ForgotPassword toggleToForgotPassword={toggleToForgotPassword} />
          )}
          {loginWithPhoneOpen && (
            <LoginWithPhone toggleToPhone={toggleToPhone} />
          )}
          {loginFormOpen && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  sx={{ color: "#121222", fontSize: "28px", fontWeight: "700" }}
                >
                  Welcome Back!
                </Typography>

                <Box sx={{ marginTop: "32px" }}>
                  <Typography
                    sx={{
                      color: "#231F20s",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Sign in with
                  </Typography>

                  <Box sx={{ marginTop: "12px", display: "flex", gap: "8px" }}>
                    <Button
                      onClick={() => toggleToPhone()}
                      sx={{
                        border: "1px solid #BBBBBBCC",
                        width: "16px",
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 0px",
                      }}
                    >
                      <img
                        src={phone}
                        alt=""
                        style={{ width: "16px", height: "16px" }}
                      />
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid #BBBBBBCC",
                        width: "16px",
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 0px",
                      }}
                    >
                      <img
                        src={faceId}
                        alt=""
                        style={{ width: "16px", height: "16px" }}
                      />
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid #BBBBBBCC",
                        width: "16px",
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 0px",
                      }}
                    >
                      <img
                        src={google}
                        alt=""
                        style={{ width: "16px", height: "16px" }}
                      />
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid #BBBBBBCC",
                        width: "16px",
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 0px",
                      }}
                    >
                      <img
                        src={apple}
                        alt=""
                        style={{ width: "16px", height: "16px" }}
                      />
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "18px",
                  }}
                >
                  <Divider sx={{ flex: 1 }} />
                  <Typography sx={{ mx: 2, color: "#686868" }}>Or</Typography>
                  <Divider sx={{ flex: 1 }} />
                </Box>
                <form
                  onSubmit={(e) => login(e)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "36px",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <label
                      htmlFor="email"
                      style={{
                        color: "#231F20s",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      Email or Username
                    </label>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      variant="outlined"
                      placeholder="Email or Username"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <label
                        htmlFor="password"
                        style={{
                          color: "#231F20s",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "4px",
                        }}
                      >
                        Password
                      </label>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                      <TextField
                        fullWidth
                        type={passVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        variant="outlined"
                        placeholder="Password"
                        size="small"
                      />
                      <Button
                        sx={{
                          color: "#5B646B",
                          position: "absolute",
                          right: "1px",
                          top: "3px",
                        }}
                        onClick={() => setPassVisible(!passVisible)}
                      >
                        {passVisible ? (
                          <VisibilityOffOutlined />
                        ) : (
                          <VisibilityOutlined />
                        )}
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "6px",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              "& .MuiSvgIcon-root": {
                                borderRadius: "6px", // Custom square-ish checkbox if needed
                              },
                            }}
                          />
                        }
                        label="Remember me"
                        sx={{ color: "gray" }}
                      />

                      <Typography
                        onClick={() => toggleToForgotPassword()}
                        sx={{
                          color: "#24459c",
                          fontSize: "22",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#24459C",
                      padding: "10px 40px",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {isLoading ? <ProgressingLoader /> : "Sign In"}
                  </Button>
                </form>
              </Box>
            </Box>
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

export default Login;
