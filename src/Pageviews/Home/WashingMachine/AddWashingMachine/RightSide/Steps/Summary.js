import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddSensorModal from "../../../constant/modal/addWashingMachine/AddSensorModal";
import { useSelector } from "react-redux";
import SensorDetailsModuleTwo from "../../../constant/modal/sensorDetails/SensorDetailsModuleTwo";
import SensorDetailsModuleOne from "../../../constant/modal/sensorDetails/SensorDetailsModuleOne";
import SensorDetailsModuleThree from "../../../constant/modal/sensorDetails/SensorDetailsModuleThree";
import SensorDetailsModuleFour from "../../../constant/modal/sensorDetails/SensorDetailsModuleFour";

const Summary = ({ step, setStep }) => {
  const [addSensorModalOpen, setAddSensorModalOpen] = useState(false);
  const [sensorDetailsModuleOneOpen, setSensorDetailsModuleOneOpen] =
    useState(false);
  const [sensorDetailsModuleTwoOpen, setSensorDetailsModuleTwoOpen] =
    useState(false);
  const [sensorDetailsModuleThreeOpen, setSensorDetailsModuleThreeOpen] =
    useState(false);
  const [sensorDetailsModuleFourOpen, setSensorDetailsModuleFourOpen] =
    useState(false);
  const { width, breakpoint } = useSelector((state) => state.browser);

  return (
    <>
      {addSensorModalOpen && (
        <AddSensorModal
          addSensorModalOpen={addSensorModalOpen}
          setAddSensorModalOpen={setAddSensorModalOpen}
          sensorDetailsModuleOneOpen={sensorDetailsModuleOneOpen}
          setSensorDetailsModuleOneOpen={setSensorDetailsModuleOneOpen}
        />
      )}
      {sensorDetailsModuleOneOpen && (
        <SensorDetailsModuleOne
          sensorDetailsModuleTwoOpen={sensorDetailsModuleTwoOpen}
          setSensorDetailsModuleTwoOpen={setSensorDetailsModuleTwoOpen}
          sensorDetailsModuleOneOpen={sensorDetailsModuleOneOpen}
          setSensorDetailsModuleOneOpen={setSensorDetailsModuleOneOpen}
        />
      )}
      {sensorDetailsModuleTwoOpen && (
        <SensorDetailsModuleTwo
          sensorDetailsModuleTwoOpen={sensorDetailsModuleTwoOpen}
          setSensorDetailsModuleTwoOpen={setSensorDetailsModuleTwoOpen}
          sensorDetailsModuleThreeOpen={sensorDetailsModuleThreeOpen}
          setSensorDetailsModuleThreeOpen={setSensorDetailsModuleThreeOpen}
        />
      )}
      {sensorDetailsModuleThreeOpen && (
        <SensorDetailsModuleThree
          sensorDetailsModuleThreeOpen={sensorDetailsModuleThreeOpen}
          setSensorDetailsModuleThreeOpen={setSensorDetailsModuleThreeOpen}
          sensorDetailsModuleFourOpen={sensorDetailsModuleFourOpen}
          setSensorDetailsModuleFourOpen={setSensorDetailsModuleFourOpen}
        />
      )}
      {sensorDetailsModuleFourOpen && (
        <SensorDetailsModuleFour
          sensorDetailsModuleFourOpen={sensorDetailsModuleFourOpen}
          setSensorDetailsModuleFourOpen={setSensorDetailsModuleFourOpen}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box>
            <Typography
              sx={{
                color: "#5B646B",
                fontSize:
                  (breakpoint === "xl" && "16px") ||
                  (breakpoint === "lg" && "12px"),
              }}
            >
              Successfully Complete
            </Typography>
            <Typography
              sx={{
                color: "#231F20",
                fontSize:
                  (breakpoint === "xl" && "22px") ||
                  (breakpoint === "lg" && "18px"),
                fontWeight: "600",
              }}
            >
              Summary
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  color: "#8D8D8D",
                  fontSize:
                    (breakpoint === "xl" && "14px") ||
                    (breakpoint === "lg" && "10px"),
                }}
              >
                Shop or company name
              </Typography>
              <Typography
                sx={{
                  color: "#000000s",
                  fontSize:
                    (breakpoint === "xl" && "16px") ||
                    (breakpoint === "lg" && "12px"),
                  fontWeight: "600",
                }}
              >
                Mitsubishi Corp LLC
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  color: "#8D8D8D",
                  fontSize:
                    (breakpoint === "xl" && "14px") ||
                    (breakpoint === "lg" && "10px"),
                }}
              >
                Type of shop
              </Typography>
              <Typography
                sx={{
                  color: "#000000s",
                  fontSize:
                    (breakpoint === "xl" && "16px") ||
                    (breakpoint === "lg" && "12px"),
                  fontWeight: "600",
                }}
              >
                Laundry Shop
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#8D8D8D",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "10px"),
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                color: "#000000s",
                fontSize:
                  (breakpoint === "xl" && "16px") ||
                  (breakpoint === "lg" && "12px"),
                fontWeight: "600",
              }}
            >
              Laundry Shop
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  color: "#8D8D8D",
                  fontSize:
                    (breakpoint === "xl" && "14px") ||
                    (breakpoint === "lg" && "10px"),
                }}
              >
                Type of washing machine
              </Typography>
              <Typography
                sx={{
                  color: "#000000s",
                  fontSize:
                    (breakpoint === "xl" && "16px") ||
                    (breakpoint === "lg" && "12px"),
                  fontWeight: "600",
                }}
              >
                Dish Washing Machine
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  color: "#8D8D8D",
                  fontSize:
                    (breakpoint === "xl" && "14px") ||
                    (breakpoint === "lg" && "10px"),
                }}
              >
                Select brand
              </Typography>
              <Typography
                sx={{
                  color: "#000000s",
                  fontSize:
                    (breakpoint === "xl" && "16px") ||
                    (breakpoint === "lg" && "12px"),
                  fontWeight: "600",
                }}
              >
                Showa
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#8D8D8D",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "10px"),
              }}
            >
              Model
            </Typography>
            <Typography
              sx={{
                color: "#000000s",
                fontSize:
                  (breakpoint === "xl" && "16px") ||
                  (breakpoint === "lg" && "12px"),
                fontWeight: "600",
              }}
            >
              SHEM63W55N
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#FB7181",
              fontWeight: "800",
              fontSize:
                (breakpoint === "xl" && "28px") ||
                (breakpoint === "lg" && "20px"),
            }}
          >
            Sensor is required!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize:
                  (breakpoint === "xl" && "16px") ||
                  (breakpoint === "lg" && "12px"),
              }}
            >
              If you order sensor, you can add now with this washing machine,
              and can monitor your washing machine from anywhere!
            </Typography>
            <Button
              onClick={() => {
                setAddSensorModalOpen(!addSensorModalOpen);
              }}
              sx={{
                border: "1px solid #24459C",
                textTransform: "none",
                display: "flex",
                padding:
                  (breakpoint === "xl" && "4px 32px") ||
                  (breakpoint === "lg" && "2px 24px"),
                backgroundColor: "#24459C",
                "&:hover": {
                  background: "#24459C",
                },
                color: "white",
                fontWeight: "600",
                borderRadius: "20px",
              }}
            >
              Add Now
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ width: "100%", display: "flex", gap: "24px", marginTop: "8px" }}
        >
          <Button
            sx={{
              border: "1px solid #24459C",
              textTransform: "none",
              display: "flex",
              width: "50%",
              padding: "4px 0px",
              color: "#24459C",
              fontWeight: "600",
              fontSize:
                (breakpoint === "xl" && "16px") ||
                (breakpoint === "lg" && "12px"),
            }}
          >
            Skip
          </Button>
          <Button
            sx={{
              border: "1px solid #24459C",
              textTransform: "none",
              display: "flex",
              width: "50%",
              padding: "4px 0px",
              backgroundColor: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              color: "white",
              fontWeight: "600",
              fontSize:
                (breakpoint === "xl" && "16px") ||
                (breakpoint === "lg" && "12px"),
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Summary;
