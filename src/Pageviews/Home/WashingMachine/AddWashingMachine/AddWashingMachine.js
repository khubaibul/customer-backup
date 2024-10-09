import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LeftSide from "./LestSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useSelector } from "react-redux";

const AddWashingMachine = () => {
  const [step, setStep] = useState(1);
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
            Washing Machine /{" "}
          </Typography>
          <Typography
            sx={{
              color: "#24459C",
              fontWeight: "600",
              fontSize: breakpoint === "xl" ? "16px" : "10px",
            }}
          >
            Add Washing Machine
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          display: "flex",
          gap:
            (breakpoint === "xl" && "96px") || (breakpoint === "lg" && "56px"),
          justifyContent: "center",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <LeftSide step={step} setStep={setStep} />
        <RightSide step={step} setStep={setStep} />
      </Box>
    </Box>
  );
};

export default AddWashingMachine;
