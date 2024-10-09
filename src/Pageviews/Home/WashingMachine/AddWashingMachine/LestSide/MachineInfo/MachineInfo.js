import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import shop from "../../../../../../Assets/Home/washingMachine/shop_details.png";
import address from "../../../../../../Assets/Home/washingMachine/address.png";
import machineType from "../../../../../../Assets/Home/washingMachine/type.png";
import { CheckCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";

const MachineInfo = ({ step }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Timeline position="left">
        <TimelineItem
          sx={{
            height:
              (breakpoint === "xl" && "125px") ||
              (breakpoint === "lg" && "100px"),
          }}
        >
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                height:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#20C18D",
              }}
            >
              <img
                src={shop}
                style={{
                  width:
                    (breakpoint === "xl" && "20px") ||
                    (breakpoint === "lg" && "16px"),
                  padding: "4px",
                }}
                alt=""
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#20C18D",
                fontWeight: "600",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
              }}
            >
              Shop Details
            </Typography>
            <Typography
              sx={{
                color: "#9A9FA4",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "12px"),
                width: "300px",
              }}
            >
              Name, age and other identifying information
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem
          sx={{
            height:
              (breakpoint === "xl" && "125px") ||
              (breakpoint === "lg" && "100px"),
          }}
        >
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                height:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  step === 2 || step === 3 || step === 4 ? "#20C18D" : "",
              }}
            >
              <img
                src={address}
                style={{
                  width:
                    (breakpoint === "xl" && "20px") ||
                    (breakpoint === "lg" && "16px"),
                  padding: "4px",
                }}
                alt=""
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
                color:
                  step === 2 || step === 3 || step === 4
                    ? "#20C18D"
                    : "#152F47",
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                color: "#9A9FA4",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "12px"),
                width: "300px",
              }}
            >
              The location, including prefecture, city, street
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem
          sx={{
            height:
              (breakpoint === "xl" && "125px") ||
              (breakpoint === "lg" && "100px"),
          }}
        >
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                height:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: step === 3 || step === 4 ? "#20C18D" : "",
              }}
            >
              <img
                src={machineType}
                style={{
                  width:
                    (breakpoint === "xl" && "20px") ||
                    (breakpoint === "lg" && "16px"),
                  padding: "4px",
                }}
                alt=""
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
                color: step === 3 || step === 4 ? "#20C18D" : "#152F47",
              }}
            >
              Washing Machine Type
            </Typography>
            <Typography
              sx={{
                color: "#9A9FA4",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "12px"),
                width: "300px",
              }}
            >
              The location, including prefecture, city, street
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*  */}
        <TimelineItem
          sx={{
            height:
              (breakpoint === "xl" && "125px") ||
              (breakpoint === "lg" && "100px"),
          }}
        >
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                height:
                  (breakpoint === "xl" && "32px") ||
                  (breakpoint === "lg" && "24px"),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: step === 4 ? "#20C18D" : "",
              }}
            >
              <CheckCircle
                sx={{
                  width:
                    (breakpoint === "xl" && "30px") ||
                    (breakpoint === "lg" && "24px"),
                  height:
                    (breakpoint === "xl" && "30px") ||
                    (breakpoint === "lg" && "24px"),
                  padding: "4px",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize:
                  (breakpoint === "xl" && "18px") ||
                  (breakpoint === "lg" && "14px"),
                color: step === 4 ? "#20C18D" : "#152F47",
              }}
            >
              Complete
            </Typography>
            <Typography
              sx={{
                color: "#9A9FA4",
                fontSize:
                  (breakpoint === "xl" && "14px") ||
                  (breakpoint === "lg" && "12px"),
                width: "300px",
              }}
            >
              Completing your profile successfully
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default MachineInfo;
