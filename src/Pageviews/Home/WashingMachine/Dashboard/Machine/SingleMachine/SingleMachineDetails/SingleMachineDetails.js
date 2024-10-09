import { Box } from "@mui/material";
import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const SingleMachineDetails = ({ machine }) => {
  return (
    <Box sx={{ display: "flex", gap: "18px" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );
};

export default SingleMachineDetails;
