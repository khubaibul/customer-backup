import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const AI = () => {
  const machineID = [
    { machineID: "FHSD0984R9HF" },
    { machineID: "FHSD09D4R9FD" },
    { machineID: "FHSD0984RAH4" },
    { machineID: "FHSD0984R990" },
  ];
  return (
    <Box sx={{ padding: "40px", height: "80vh" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {machineID?.map((machine) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#FFFFFF",
              padding: "16px 8px",
              borderRadius: "2px",
            }}
          >
            <Typography
              sx={{ color: "#4D5983", fontWeight: "700", fontSize: "18px" }}
            >
              MACHINE ID: {machine?.machineID}
            </Typography>
            <ArrowDropDown sx={{ fontSize: "40px", color: "#526375" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AI;
