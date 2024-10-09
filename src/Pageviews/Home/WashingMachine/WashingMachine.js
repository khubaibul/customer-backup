import React from "react";
import washingMachine from "../../../Assets/Home/washingMachine/washing_machine.png";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WashingMachine = () => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  return (
    <Box
      sx={{
        padding: breakpoint === "xl" ? "40px" : "24px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ marginBottom: "16px" }}>
        <Typography
          sx={{
            fontSize: breakpoint === "xl" ? "24px" : "14px",
            fontWeight: "700",
          }}
        >
          Washing Machine
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Typography sx={{ fontSize: breakpoint === "xl" ? "16px" : "10px" }}>
            Dashboard /{" "}
          </Typography>
          <Typography
            sx={{
              color: "#24459C",
              fontWeight: "600",
              fontSize: breakpoint === "xl" ? "16px" : "10px",
            }}
          >
            Washing Machine
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <img src={washingMachine} alt="" />
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "24px",
              color: "#FB7181",
            }}
          >
            Looks like you have not add any <br /> washing machine Yet.
          </Typography>
          <Link
            to="/washing-machine/add-washing-machine"
            style={{
              background: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              padding: "8px 48px",
              color: "white",
              borderRadius: "24px",
              textTransform: "none",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Add New
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default WashingMachine;
