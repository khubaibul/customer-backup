import React, { useEffect } from "react";
import Header from "./header/Header";
import { Box } from "@mui/material";
import Body from "./body/Body";
import { useLocation, useNavigate } from "react-router-dom";

const RightSection = ({
  serviceProviderDetails,
  serviceProviderDetailsRefetch,
}) => {
  const navigate = useNavigate();

  const location = useLocation();
  //   forcefully navigate to details page
  useEffect(() => {
    if (
      !(
        location?.pathname?.endsWith("request") ||
        location?.pathname?.endsWith("revenue") ||
        location?.pathname?.endsWith("team") ||
        location?.pathname?.endsWith("schedule") ||
        location?.pathname?.endsWith("setting")
      )
    ) {
      navigate("request");
    }
  }, [location?.pathname, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box>
        <Body
          serviceProviderDetails={serviceProviderDetails}
          serviceProviderDetailsRefetch={serviceProviderDetailsRefetch}
        />
      </Box>
    </Box>
  );
};

export default RightSection;
