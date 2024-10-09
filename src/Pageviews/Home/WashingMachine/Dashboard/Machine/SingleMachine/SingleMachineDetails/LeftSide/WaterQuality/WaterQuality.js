import React from "react";
import waterQuality from "../../../../../../../../../Assets/Home/washingMachine/Water_Quality.png";
import { Box, Typography } from "@mui/material";

const WaterQuality = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        gap: "12px",
        borderRadius: "4px",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            borderRadius: "100%",
            border: "1px solid #64717B",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={waterQuality} alt="" />
        </Box>
        <Box>
          <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
            Water Quality:
          </Typography>
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            3 pH
          </Typography>
        </Box>
      </Box>
      <Box>
        <span
          style={{
            backgroundColor: "#D6FFE9",
            color: "#39D07F",
            padding: "6px 10px",
            borderRadius: "40px",
            fontSize: "10px",
          }}
        >
          Good
        </span>
      </Box>
    </Box>
  );
};

export default WaterQuality;
