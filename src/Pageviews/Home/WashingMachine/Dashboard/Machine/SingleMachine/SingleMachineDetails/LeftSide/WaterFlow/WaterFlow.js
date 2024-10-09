import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Box, Typography } from "@mui/material";

// Register the necessary components of Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

const WaterFlow = () => {
  // Chart.js Data Configuration
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  // Chart.js Options Configuration with drawTime in plugins
  const options = {
    plugins: {
      // Custom plugin to draw on specific times
      customLine: {
        drawTime: "beforeDraw", // Modify drawTime here (can be 'beforeDraw', 'afterDraw', etc.)
      },
    },
  };

  // Custom Plugin (draws a line on the chart)
  const customLinePlugin = {
    id: "customLine",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const yAxis = chart.scales.y;
      const xAxis = chart.scales.x;

      ctx.save();
      ctx.strokeStyle = "rgba(255, 99, 132, 0.75)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xAxis.left, yAxis.getPixelForValue(70)); // Horizontal line at y-value of 70
      ctx.lineTo(xAxis.right, yAxis.getPixelForValue(70));
      ctx.stroke();
      ctx.restore();
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "12px",
        gap: "12px",
        borderRadius: "4px",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{ color: "#4D5983", fontSize: "14px", fontWeight: "600" }}
      >
        Water Flow
      </Typography>
      <Line data={data} options={options} plugins={[customLinePlugin]} />
    </Box>
  );
};

export default WaterFlow;
