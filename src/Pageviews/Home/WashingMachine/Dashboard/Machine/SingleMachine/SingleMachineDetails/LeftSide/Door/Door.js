import React from "react";
import dashboard from "../../../../../../../../../Assets/Home/washingMachine/Water_Quality.png";
import { Box, Button, Typography } from "@mui/material";
import { UnfoldMore } from "@mui/icons-material";

const Door = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        gap: "12px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{ fontSize: "14px", fontWeight: "600", color: "#868DAA" }}
      >
        Door
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
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
              <img src={dashboard} alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography
                sx={{ color: "#4D5983", fontSize: "14px", fontWeight: "600" }}
              >
                Base:
                <span
                  style={{
                    backgroundColor: "#D6FFE9",
                    color: "#39D07F",
                    padding: "6px 10px",
                    borderRadius: "40px",
                    fontSize: "10px",
                    marginLeft: "8px",
                  }}
                >
                  Good
                </span>
              </Typography>
              <Typography sx={{ color: "#64717B", fontSize: "14px" }}>
                Vibration Sensor 01 : 22 Hz | Temperature Sensor 01 : 100*C
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "12px",
              color: "#4D5983",
              fontWeight: "600",
            }}
          >
            Expand
            <UnfoldMore
              sx={{
                backgroundColor: "#F0F1F3",
                padding: "4px",
                borderRadius: "100%",
                marginLeft: "8px",
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Door;
