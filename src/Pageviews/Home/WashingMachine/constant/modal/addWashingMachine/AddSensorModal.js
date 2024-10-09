import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const AddSensorModal = ({
  addSensorModalOpen,
  setAddSensorModalOpen,
  sensorDetailsModuleOneOpen,
  setSensorDetailsModuleOneOpen,
}) => {
  const searchSensorModule = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  const goNext = () => {
    setSensorDetailsModuleOneOpen(!sensorDetailsModuleOneOpen);
    setAddSensorModalOpen(!addSensorModalOpen);
  };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addSensorModalOpen}
    >
      <Container
        sx={{
          width: "30%",
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
            Add a Sensor
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
              setAddSensorModalOpen(!addSensorModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "24px 0px" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search Sensor MAC ID ..."
            label="Search Sensor MAC ID ..."
            name="macId"
            //   value={newStatus}
            onKeyDown={(e) => searchSensorModule(e)}
          />
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

export default AddSensorModal;
