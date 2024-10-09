import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const StepTwo = ({ step, setStep }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
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
            Step 2/3
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
            Step 2 Title
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            sx={{
              color: "#9A9FA4",
              fontSize:
                (breakpoint === "xl" && "14px") ||
                (breakpoint === "lg" && "10px"),
            }}
          >
            Select “Search” after entering your postal code, then select your
            city and addresses.
          </Typography>
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
              Postal Code
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                id="outlined-basic"
                label="Enter Postal Code"
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
              />
              <Button
                sx={{
                  position: "absolute",
                  backgroundColor: "#24459C",
                  "&:hover": {
                    background: "#24459C",
                  },
                  textTransform: "none",
                  padding: "2px 16px",
                  color: "white",
                  fontWeight: "600",
                  top: "4px",
                  right: "10px",
                }}
              >
                Search
              </Button>
            </Box>
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
              Perfecture
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter Perfecture"
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
              City and address
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter City and address"
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
              Street Address (Excluding building name and room number)
            </Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <TextField
                id="outlined-basic"
                label="Enter Street Address"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
              />
              <TextField
                id="outlined-basic"
                label="Building name and room number"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
              />
            </Box>
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
              Google Map
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                id="outlined-basic"
                label="Enter Google Map API"
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
              />
              <Button
                sx={{
                  position: "absolute",
                  backgroundColor: "#24459C",
                  "&:hover": {
                    background: "#24459C",
                  },
                  textTransform: "none",
                  padding: "2px 16px",
                  color: "white",
                  fontWeight: "600",
                  top: "4px",
                  right: "10px",
                }}
              >
                Open Map
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", gap: "24px" }}>
        <Button
          onClick={() => setStep(step - 1)}
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
          Previous
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

export default StepTwo;
