import { ArrowDropDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SingleMachineDetails from "./SingleMachineDetails/SingleMachineDetails";

const SingleMachine = ({ machine }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box
        onClick={() => setShowDetails(!showDetails)}
        sx={{
          backgroundColor: "white",
          padding: "12px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{ color: "#4D5983", fontWeight: "600", fontSize: "18px" }}
        >
          MACHINE ID: {machine?.machineID}
        </Typography>
        <ArrowDropDown />
      </Box>
      {showDetails && <SingleMachineDetails machine={machine} />}
    </Box>
  );
};

export default SingleMachine;
