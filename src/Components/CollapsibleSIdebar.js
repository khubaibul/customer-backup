import dashboard_icon from "../Assets/Component/dashboard_icon.svg";
import ai_dashboard_icon from "../Assets/Component/ai_dashboard.svg";
import vendor_icon from "../Assets/Component/vendor_icon.svg";
import customer_icon from "../Assets/Component/customers_icon.svg";
import chat_icon from "../Assets/Component/chat_icon.svg";
import feed_icon from "../Assets/Component/feed_icon.svg";
import reservation_icon from "../Assets/Component/reservation_icon.svg";
import iot_icon from "../Assets/Component/iot_icon.svg";
import wallet_icon from "../Assets/Component/wallet_icon.svg";
import team_icon from "../Assets/Component/team_icon.svg";
import shop_icon from "../Assets/Component/shop_icon.svg";
import inventory_icon from "../Assets/Component/inventory_icon.svg";
import bids_icon from "../Assets/Component/bids_icon.svg";
import notification_icon from "../Assets/Component/notification_icon.svg";
import help_ai_icon from "../Assets/Component/help_ai_icon.svg";
import offers_icon from "../Assets/Component/offers_icon.svg";
import packages_icon from "../Assets/Component/packages_icon.svg";
import settings_icon from "../Assets/Component/settings_icon.svg";
import bids_sub_icon from "../Assets/Component/sub_icon.svg";
import control_panel_icon from "../Assets/Component/control_panel_icon.svg";
import reports_icon from "../Assets/Component/reports_icon.svg";
import sensor_connected_icon from "../Assets/Component/sensor_connected_icon.svg";
import sensor_not_connected_icon from "../Assets/Component/sensor_not_connected_icon.svg";

import invoice_icon from "../Assets/Component/invoice_icon.svg";
import project_icon from "../Assets/Component/project_icon.svg";
import data_export_icon from "../Assets/Component/data_export_icon.svg";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "@mui/icons-material";

import logo_small from "../Assets/Component/logo_small.svg";
import logo_full from "../Assets/Component/logo_full.svg";
import signOut from "../Assets/Component/sing_out.png";
import user from "../Assets/Component/user_image.jfif";
import SidebarItem from "./SIdebarItem";
import { Box, Typography } from "@mui/material";
import Footer from "../Utils/Footer";

const generalRoutes = [
  {
    name: "Dashboard",
    path: "/",
    icon: <img className="navlink_icon" alt="" src={dashboard_icon} />,
  },
  {
    name: "AI",
    path: "/ai",
    icon: <img className="navlink_icon" alt="" src={ai_dashboard_icon} />,
  },
  {
    name: "Feed",
    path: "/feed",
    icon: <img className="navlink_icon" alt="" src={feed_icon} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <img className="navlink_icon" alt="" src={chat_icon} />,
  },
];

const productRoutes = [
  {
    name: "Reservation",
    path: "/reservation",
    icon: <img className="navlink_icon" alt="" src={reservation_icon} />,
    children: [
      {
        name: "Sensor Connected",
        path: "/reservation/connected/all",
        icon: (
          <img className="navlink_icon" alt="" src={sensor_connected_icon} />
        ),
        children: [
          {
            name: "All Reservation Request",
            path: "/reservation/connected/all",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/reservation/connected/on-demand",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/reservation/connected/within-one-week",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/reservation/connected/within-two-week",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/reservation/connected/schedule-time",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Accepted Request",
            path: "/reservation/connected/accepted",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Ongoing Maintenance",
            path: "/reservation/connected/ongoing",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Reschedule Request",
            path: "/reservation/connected/reschedule",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Completed Request",
            path: "/reservation/connected/completed",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
        ],
      },
      {
        name: "Sensor Non-Connected",
        path: "/reservation/non-connected/all",
        icon: (
          <img
            className="navlink_icon"
            alt=""
            src={sensor_not_connected_icon}
          />
        ),
        children: [
          {
            name: "All Reservation Request",
            path: "/reservation/non-connected/all",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "On Demand Request",
            path: "/reservation/non-connected/on-demand",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Within 1 Week Request",
            path: "/reservation/non-connected/within-one-week",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Within 2 Week Request",
            path: "/reservation/non-connected/within-two-week",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Schedule Time Request",
            path: "/reservation/non-connected/schedule-time",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Accepted Request",
            path: "/reservation/non-connected/accepted",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Ongoing Maintenance",
            path: "/reservation/non-connected/ongoing",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Reschedule Request",
            path: "/reservation/non-connected/reschedule",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
          {
            name: "Completed Request",
            path: "/reservation/non-connected/completed",
            icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
          },
        ],
      },
    ],
  },
  {
    name: "Washing Machine",
    path: "/washing-machine",
    icon: <img className="navlink_icon" alt="" src={wallet_icon} />,
    children: [
      {
        name: "Dashboard",
        path: "/washing-machine/dashboard",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Add Washing Machine",
        path: "/washing-machine/add-washing-machine",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "All",
        path: "/washing-machine/all",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Running",
        path: "/washing-machine/running",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Pending",
        path: "/washing-machine/pending",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Out of Subscription",
        path: "/washing-machine/out-of-subscription",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
    ],
  },
  {
    name: "General",
    path: "/general",
    icon: <img className="navlink_icon" alt="" src={wallet_icon} />,
    children: [],
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    icon: <img className="navlink_icon" alt="" src={shop_icon} />,
  },
  {
    name: "IOT",
    path: "/iot",
    icon: <img className="navlink_icon" alt="" src={iot_icon} />,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <img className="navlink_icon" alt="" src={wallet_icon} />,
    children: [
      {
        name: "All Transaction",
        path: "/wallet/alltransaction",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Withdarw Request",
        path: "/wallet/withdrawrequest",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
    ],
  },
  {
    name: "Subscription",
    path: "/subscription",
    icon: <img className="navlink_icon" alt="" src={iot_icon} />,
  },
  {
    name: "Help AI",
    path: "/helpai/faq",
    icon: <img className="navlink_icon" alt="" src={help_ai_icon} />,
    children: [
      {
        name: "FAQ",
        path: "/helpai/faq",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
      {
        name: "Learning Resources",
        path: "/helpai/learningresources",
        icon: <img className="navlink_icon" alt="" src={bids_sub_icon} />,
      },
    ],
  },
];

const settingsRoutes = [
  {
    name: "Notifications",
    path: "/notifications",
    icon: <img className="navlink_icon" alt="" src={notification_icon} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <img className="navlink_icon" alt="" src={settings_icon} />,
  },
];

const profileOpen = {
  name: "Profile",
  path: "/update-profile",
  icon: <img className="navlink_icon" alt="" src={settings_icon} />,
};

const CollapsibleSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width:
              windowWidth >= 1280 && windowWidth <= 1440
                ? isOpen
                  ? "180px"
                  : "35px"
                : isOpen
                ? "250px"
                : "45px", // Conditional width based on window width range
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={isOpen ? "sidebarOpen" : "sidebarClosed"}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img alt="" src={logo_full} />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              {!isOpen ? (
                <div className="logo_small">
                  <img src={logo_small} onClick={toggle} />
                </div>
              ) : (
                <Menu onClick={toggle} />
              )}
            </div>
          </div>
          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              General
            </Typography>
          )}
          <section className="routes">
            {generalRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>
          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              Products
            </Typography>
          )}
          <section className="routes">
            {productRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>
          {isOpen && (
            <Typography
              style={{
                color: "#6B7280",
                fontSize: "14px",
                marginLeft: "16px",
                marginTop: "24px",
              }}
            >
              Settings
            </Typography>
          )}
          <section className="routes">
            {settingsRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                route={route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showAnimation={showAnimation}
              />
            ))}
          </section>

          {isOpen ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                my: "76px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Box
                  sx={{
                    background: "#D9D9D9",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={user}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px",
                    }}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "600", color: "#D1D5DB" }}
                >
                  Mori Masumi
                </Typography>
              </Box>
              <img src={signOut} alt="" />
            </Box>
          ) : (
            <>
              {" "}
              <img
                src={user}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                }}
                alt=""
              />
            </>
          )}
        </motion.div>

        <main className={isOpen ? "mainSmall" : "mainFull"}>
          {children} <Footer />
        </main>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
