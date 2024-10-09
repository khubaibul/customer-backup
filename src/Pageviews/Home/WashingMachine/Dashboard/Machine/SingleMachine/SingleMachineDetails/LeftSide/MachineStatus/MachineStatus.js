import React from "react";
import machineStatus from "../../../../../../../../../Assets/Home/washingMachine/WashingMachineStatus.png";
import { Box, Typography } from "@mui/material";

const MachineStatus = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        padding: "12px",
        gap: "12px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          borderRadius: "100%",
          border: "2px solid #64717B",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={machineStatus} alt="" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Typography sx={{ color: "#64717B", fontSize: "14px" }}>
          Machine Status:{" "}
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
        </Typography>
        <Typography sx={{ color: "#64717B", fontSize: "14px" }}>
          Machine Name: Dish Washing Machine
        </Typography>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Typography sx={{ color: "#5B646B", fontSize: "14px" }}>
          Mitshubishi Corp Ltd. ⚪ Laudry Shop
        </Typography>
        <Typography sx={{ color: "#5B646B", fontSize: "14px" }}>
          291-1215, Miyoshicho, Fuchu-shi, Tokyo,
        </Typography>
      </Box>
    </Box>
  );
};

export default MachineStatus;
