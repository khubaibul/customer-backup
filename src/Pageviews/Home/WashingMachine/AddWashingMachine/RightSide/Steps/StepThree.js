import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const StepThree = ({ step, setStep }) => {
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
            Step 3/3
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
            Step 3 Title
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
              Select type of washing machine
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={""}
                label=""
                // onChange={handleChange}
                size="small"
              >
                <MenuItem value={"washing_machine"}>Washing Machine</MenuItem>
                <MenuItem value={"sensor machine"}>Sensor Machine</MenuItem>
              </Select>
            </FormControl>
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
              Select Brand
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={""}
                label=""
                // onChange={handleChange}
                size="small"
              >
                <MenuItem value={"google"}>Google</MenuItem>
                <MenuItem value={"samsung"}>Samsung</MenuItem>
              </Select>
            </FormControl>
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
              Select Model
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={""}
                label=""
                // onChange={handleChange}
                size="small"
              >
                <MenuItem value={"pixel_7a"}>Pixel 7A</MenuItem>
                <MenuItem value={"s22_ultra"}>S22 Ultra</MenuItem>
              </Select>
            </FormControl>
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

export default StepThree;
