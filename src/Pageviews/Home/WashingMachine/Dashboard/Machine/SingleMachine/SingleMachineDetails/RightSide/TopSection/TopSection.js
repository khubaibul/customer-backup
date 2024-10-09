import React from "react";
import overload from "../../../../../../../../../Assets/Home/washingMachine/overload.png";
import heater from "../../../../../../../../../Assets/Home/washingMachine/electric_heater.png";
import waterLeakage from "../../../../../../../../../Assets/Home/washingMachine/water_live.png";
import nozzle from "../../../../../../../../../Assets/Home/washingMachine/nozzle.png";
import door from "../../../../../../../../../Assets/Home/washingMachine/akar_door.png";
import physicalDamage from "../../../../../../../../../Assets/Home/washingMachine/physical_damage.png";
import { Box, Typography } from "@mui/material";

const TopSection = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={overload} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Overload
          </Typography>
        </Box>
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={heater} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Electric Heater Issue
          </Typography>
        </Box>
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={waterLeakage} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Water Leakage
          </Typography>
        </Box>
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={nozzle} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Nozzle Rotation Failure
          </Typography>
        </Box>
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={door} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Door/Other Malfunction
          </Typography>
        </Box>
        <Box
          sx={{
            width: "120px",
            height: "80px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={physicalDamage} alt="" />
          <Typography
            sx={{ fontSize: "14px", color: "#868DAA", textAlign: "center" }}
          >
            Physical Damage
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default TopSection;
