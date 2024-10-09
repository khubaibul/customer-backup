import { Box, Typography } from "@mui/material";
import React from "react";
import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";

const RightSide = () => {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <TopSection />
      <BottomSection />
    </Box>
  );
};

export default RightSide;
