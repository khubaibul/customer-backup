import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";
import React from "react";

const TimeLine = () => {
  return (
    <Timeline position="left">
      <TimelineItem sx={{ ml: "5px" }}>
        <TimelineSeparator sx={{ height: "100px" }}>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx={{ height: "100px" }}>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx={{ height: "100px" }}>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx={{ height: "100px" }}>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineSeparator sx={{ height: "100px" }}></TimelineSeparator>
    </Timeline>
  );
};

export default TimeLine;
