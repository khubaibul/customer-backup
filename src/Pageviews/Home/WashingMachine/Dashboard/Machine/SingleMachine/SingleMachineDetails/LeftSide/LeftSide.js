import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UnfoldMore } from "@mui/icons-material";
import MachineStatus from "./MachineStatus/MachineStatus";
import WaterQuality from "./WaterQuality/WaterQuality";
import dashboard from "../../../../../../../../Assets/Home/washingMachine/Water_Quality.png";
import WashingPump from "./WashingPump/WashingPump";
import Door from "./Door/Door";
import RinsePump from "./RinsePump/RinsePump";
import WaterFlow from "./WaterFlow/WaterFlow";

const LeftSide = () => {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <MachineStatus />
      <WaterQuality />
      <WashingPump />
      <Door />
      <RinsePump />
      <WaterFlow />
    </Box>
  );
};

export default LeftSide;
