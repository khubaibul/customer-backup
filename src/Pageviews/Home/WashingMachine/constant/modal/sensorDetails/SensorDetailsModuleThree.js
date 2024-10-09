import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SensorDetailsModuleThree = ({
  sensorDetailsModuleThreeOpen,
  setSensorDetailsModuleThreeOpen,
  sensorDetailsModuleFourOpen,
  setSensorDetailsModuleFourOpen,
}) => {
  const goNext = () => {
    setSensorDetailsModuleThreeOpen(!sensorDetailsModuleThreeOpen);
    setSensorDetailsModuleFourOpen(!sensorDetailsModuleFourOpen);
  };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "scroll",
      }}
      open={sensorDetailsModuleThreeOpen}
    >
      <Container
        sx={{
          width: "50%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            00:1E:0c:2C:22:AC
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#868DAA",
              textAlign: "center",
            }}
          >
            Details
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setSensorDetailsModuleThreeOpen(!sensorDetailsModuleThreeOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box
          sx={{
            padding: "24px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#4A4A4A",
              }}
            >
              Module 3
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#868DAA",
              }}
            >
              This module includes one vibration and one temperature sensor and
              is used for the dishwashing machine.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                backgroundColor: "#717EFA",
                padding: "2px 4px 1px 4px",
                borderRadius: "4px",
                width: "130px",
                textAlign: "center",
                color: "white",
                fontSize: "14px",
              }}
            >
              Vibration Sensor
            </Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 01
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 02
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 03
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 04
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 05
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Vibration Sensor 06
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Vibration Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                backgroundColor: "#717EFA",
                padding: "2px 4px 1px 4px",
                borderRadius: "4px",
                width: "140px",
                textAlign: "center",
                color: "white",
                fontSize: "14px",
              }}
            >
              Temperature Sensor
            </Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Temperature Sensor 01
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Temperature Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Temperature Sensor 02
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Temperature Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontWeight: "600" }}
                >
                  Select Temperature Sensor 03
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={Vibration Sensor 01}
                  label="Select Temperature Sensor 01"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                backgroundColor: "#717EFA",
                padding: "2px 4px 1px 4px",
                borderRadius: "4px",
                width: "140px",
                textAlign: "center",
                color: "white",
                fontSize: "14px",
              }}
            >
              Sensor Purpose
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Base"
              sx={{
                backgroundColor: "#F6F6F6",
                border: "none",
                outline: "none",
                fontWeight: 600,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => goNext()}
            type="submit"
            style={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            {/* {isLoading ? <ProgressingLoader /> : "Add"} */} Next
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default SensorDetailsModuleThree;
