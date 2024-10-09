import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Topbar from "./Components/Topbar";

import CollapsibleSidebar from "./Components/CollapsibleSIdebar";
import { setUser, toggleLoading } from "./features/authentication/authSlice";

import { ToastContainer } from "react-toastify";
import DeleteAccountScreen from "./Pageviews/DeleteAccount/DeleteAccountScreen";
import AI from "./Pageviews/Home/AI/AI";
import useWindowSize from "./Hooks/useWindowSize";
import ScrollToTop from "./Utils/ScrollToTop";
import WashingMachine from "./Pageviews/Home/WashingMachine/WashingMachine";
import AddWashingMachine from "./Pageviews/Home/WashingMachine/AddWashingMachine/AddWashingMachine";
import Dashboard from "./Pageviews/Home/WashingMachine/Dashboard/Dashboard";
import LoginScreen from "./Pageviews/Onboarding/Login/LoginScreen";
import SignUp from "./Pageviews/Onboarding/SignUp/SignUp";
import Login from "./Pageviews/Onboarding/Login/Login";
import PrivateRoute from "./Pageviews/Onboarding/PrivateRoute/PrivateRoute";
import DashboardScreen from "./Pageviews/Home/Dashboard/dashboard_screen";

const theme = createTheme();

const useStyle = makeStyles((theme) => ({
  leftbar: {
    display: "flex",
    // [theme.breakpoints.down("sm")]: {
    //     display: "none",
    // },
  },
  container: {
    marginLeft: "250px",
    boxSizing: "borderBox",
    backgroundColor: "#e4e4e4",
    // [theme.breakpoints.down("sm")]: {
    //     marginLeft: "0px"            ,
    // },
  },

  inactiveContainer: {
    marginLeft: "60px",
    boxSizing: "borderBox",
    backgroundColor: "#e4e4e4",
    // [theme.breakpoints.down("sm")]: {
    //     marginLeft: "0px"          ,
    // },
  },
}));

function App() {
  const [authUser, setAuthUser] = useState(null);
  const { isLoading, user } = useSelector((state) => state.auth);

  const classes = useStyle();

  const isSidebarOpen = useSelector((state) => state.openSidebar);

  // OnAuthStateChanged
  const dispatch = useDispatch();

  useWindowSize();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("From Auth fads", user?.uid);
        fetch(
          `${process.env.REACT_APP_BASE_URL}/user/sign-in?uid=${user?.uid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("From Database", data);
            if (data?.success) {
              dispatch(setUser(data?.data?.user));
              localStorage.setItem(
                "user-token",
                JSON.stringify(data?.data?.token)
              );
            }
          });
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        <BrowserRouter>
          <>
            {user?._id ? (
              <CollapsibleSidebar>
                <Topbar />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <DashboardScreen />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/ai"
                    element={
                      <PrivateRoute>
                        <AI />
                      </PrivateRoute>
                    }
                  />
                  {/* Washin Machine Start */}
                  <Route
                    path="/washing-machine"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/washing-machine/add-washing-machine"
                    element={
                      <PrivateRoute>
                        <AddWashingMachine />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/washing-machine/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  {/* Washin Machine End */}
                  {/* <Route path="/login" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} /> */}
                  <Route
                    path="/deleteAccount"
                    element={
                      <PrivateRoute>
                        <DeleteAccountScreen />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </CollapsibleSidebar>
            ) : (
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            )}

            <ScrollToTop />
          </>
        </BrowserRouter>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;

<div
  style={{
    justifyContent: "center",
    margin: "0px auto",
  }}
>
  <BrowserRouter>
    {/* {authUser ? (
    <>
      <CollapsibleSidebar>
        <Topbar />
        <Routes>
          <Route path="/ai" element={<AI />} />
          <Route path="/washing-machine" element={<WashingMachine />} />
          <Route
            path="/washing-machine/add-washing-machine"
            element={<AddWashingMachine />}
          />
        </Routes>
      </CollapsibleSidebar>
      <ScrollToTop />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/deleteAccount" element={<DeleteAccountScreen />} />
    </Routes>
  )} */}
    <>
      <CollapsibleSidebar>
        <Topbar />
        <Routes>
          <Route path="/ai" element={<AI />} />

          {/* Washin Machine Start */}
          <Route path="/washing-machine" element={<Dashboard />} />
          <Route
            path="/washing-machine/add-washing-machine"
            element={<AddWashingMachine />}
          />
          <Route path="/washing-machine/dashboard" element={<Dashboard />} />
          {/* Washin Machine End */}
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </CollapsibleSidebar>
      <ScrollToTop />
    </>
  </BrowserRouter>
</div>;
