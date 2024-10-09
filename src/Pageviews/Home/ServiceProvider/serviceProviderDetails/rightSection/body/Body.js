import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Body = ({ serviceProviderDetails, serviceProviderDetailsRefetch }) => {
  return (
    <Box>
      <Outlet
        context={{ serviceProviderDetails, serviceProviderDetailsRefetch }}
      />
    </Box>
  );
};

export default Body;
