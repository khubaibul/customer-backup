import { Box, Typography } from "@mui/material";
import React from "react";
import SingleMachine from "./SingleMachine/SingleMachine";

const Machine = () => {
  const machineID = [
    {
      machineID: "FJHSDFHS454HJ",
    },
    {
      machineID: "FJHSDFHS45455",
    },
    {
      machineID: "FJHSDFHS44e6tJ",
    },
    {
      machineID: "FJHSDFHS454HJF",
    },
    {
      machineID: "FJHSDFHSFDSGFD",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {machineID?.map((machine) => (
        <SingleMachine machine={machine} />
      ))}
    </Box>
  );
};

export default Machine;
