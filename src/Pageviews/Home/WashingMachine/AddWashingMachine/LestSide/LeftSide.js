import { Box } from "@mui/material";
import React from "react";
import progress from "../../../../../Assets/Home/washingMachine/ProgressiveStep.png";
import TimeLine from "./TimeLine/TimeLine";
import MachineInfo from "./MachineInfo/MachineInfo";

const LeftSide = ({ step, setStep }) => {
  return (
    <Box sx={{ display: "flex", width: "30%", justifyContent: "end" }}>
      <Box>
        <MachineInfo step={step} />
      </Box>
      <Box>{/* <TimeLine /> */}</Box>
    </Box>
  );
};

export default LeftSide;
