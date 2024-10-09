import { Box } from "@mui/material";
import React from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";

const RightSide = ({ step, setStep }) => {
  return (
    <Box
      sx={{
        width: "30%",
        padding: "48px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "56px",
      }}
    >
      {step === 1 && <StepOne step={step} setStep={setStep} />}
      {step === 2 && <StepTwo step={step} setStep={setStep} />}
      {step === 3 && <StepThree step={step} setStep={setStep} />}
      {step === 4 && <Summary step={step} setStep={setStep} />}
    </Box>
  );
};

export default RightSide;
