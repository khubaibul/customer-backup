import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Machine from "./Machine/Machine";

const Dashboard = () => {
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
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Typography sx={{ fontSize: breakpoint === "xl" ? "16px" : "10px" }}>
            Washing Machine /{" "}
          </Typography>
          <Typography
            sx={{
              color: "#24459C",
              fontWeight: "600",
              fontSize: breakpoint === "xl" ? "16px" : "10px",
            }}
          >
            Dashboard
          </Typography>
        </Box>
      </Box>

      <Box>
        <Machine />
      </Box>
    </Box>
  );
};

export default Dashboard;
