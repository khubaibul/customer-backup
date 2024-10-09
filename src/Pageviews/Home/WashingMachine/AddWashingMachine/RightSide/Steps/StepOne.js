import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const StepOne = ({ step, setStep }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "56px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Box>
          <Typography
            sx={{
              color: "#5B646B",
              fontSize:
                (breakpoint === "xl" && "16px") ||
                (breakpoint === "lg" && "12px"),
            }}
          >
            Step 1/3
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
            Step 1 Title
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                color: "#231F20",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
                fontWeight: "600",
              }}
            >
              Shop or company name
            </Typography>
            <TextField
              id="outlined-basic"
              label="Your shop name"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                color: "#231F20",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
                fontWeight: "600",
              }}
            >
              Type of shop
            </Typography>
            <TextField
              id="outlined-basic"
              label="Your shop type"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", gap: "24px" }}>
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
          Cancel
        </Button>
        <Button
          onClick={() => setStep(step + 1)}
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
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepOne;
