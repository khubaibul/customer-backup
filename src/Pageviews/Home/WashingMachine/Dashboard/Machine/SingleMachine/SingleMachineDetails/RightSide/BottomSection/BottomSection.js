import React from "react";
import operatingStatus from "../../../../../../../../../Assets/Home/washingMachine/operating_status.png";
import cycleProgress from "../../../../../../../../../Assets/Home/washingMachine/cycle_progress.png";
import temperature from "../../../../../../../../../Assets/Home/washingMachine/temperature.png";
import vibration from "../../../../../../../../../Assets/Home/washingMachine/vibration.png";
import wave from "../../../../../../../../../Assets/Home/washingMachine/wave.png";
import waterDrop from "../../../../../../../../../Assets/Home/washingMachine/water_drop.png";
import waterLeak from "../../../../../../../../../Assets/Home/washingMachine/water_leak.png";
import bar from "../../../../../../../../../Assets/Home/washingMachine/bar.png";
import range from "../../../../../../../../../Assets/Home/washingMachine/range.png";
import recycle from "../../../../../../../../../Assets/Home/washingMachine/recycle.png";
import energy from "../../../../../../../../../Assets/Home/washingMachine/energy.png";
import co2 from "../../../../../../../../../Assets/Home/washingMachine/co2.png";
import environmentalImp from "../../../../../../../../../Assets/Home/washingMachine/env.png";
import abnormal from "../../../../../../../../../Assets/Home/washingMachine/abnormal.png";
import costSavingsEnergy from "../../../../../../../../../Assets/Home/washingMachine/cost.png";
import costSavingsWater from "../../../../../../../../../Assets/Home/washingMachine/cost2.png";
import totalSavings from "../../../../../../../../../Assets/Home/washingMachine/total_savings.png";
import carbon from "../../../../../../../../../Assets/Home/washingMachine/carbon_offset.png";
import eco from "../../../../../../../../../Assets/Home/washingMachine/eco.png";
import estimatedEnergyCost from "../../../../../../../../../Assets/Home/washingMachine/est_energy.png";
import estimatedWaterCost from "../../../../../../../../../Assets/Home/washingMachine/est_cost.png";
import { Box, Typography } from "@mui/material";
const BottomSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "16px",
        borderRadius: "4px",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={operatingStatus} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Operating Status
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Running
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={cycleProgress} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Cycle Progress
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          49
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={temperature} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Current Water Temperature
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          200C
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={temperature} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Temperature Status
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Normal
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={vibration} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Vibration Levels
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Normal
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={vibration} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Shock Events
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          20
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={wave} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Water Flow Rate
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          5
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={waterDrop} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Water Efficiency Rate
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Good
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={waterLeak} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Leak Detection
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Yes
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={bar} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Machine Health Indicator
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Critical
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={range} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Maintenance Due In
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          30 Days
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={recycle} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Remaining Life Estimate
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          1 year
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={energy} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Energy Consumption
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          2 kWh
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={co2} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            CO&#8322; Emissions
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          2 kg
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={temperature} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Water Consumption
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          20 L
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={environmentalImp} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Environmental Impact Summary
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Good
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={abnormal} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Abnormal Condition Alerts
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Alert
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={costSavingsEnergy} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Cost Savings on Energy
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          2 kWh
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={costSavingsWater} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Cost Savings on Water
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          2 L
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={totalSavings} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Total Savings So Far
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Excellent
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={carbon} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Carbon Offset Potential
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Text
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={eco} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Eco Mode Suggestion
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          Text
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={estimatedEnergyCost} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Estimated Monthly Energy Cost
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          $1,500
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={estimatedWaterCost} alt="" />
          <Typography sx={{ color: "#4D5983", fontSize: "14px" }}>
            Estimated Monthly Water Cost
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "16px", fontWeight: "700" }}
        >
          $500c
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomSection;
