import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Bar from "./Bar";
import Pie from "./Pie";
import Geography from "./Geography";
import Line from "./Line";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const naviagte = useNavigate();
  return (
    <Box m="20px">
      <Box>
        <Header title="Dashboard" subTitle="Welcome to your Dashboard" />
        <Box display="flex">
          <Box
            onClick={() => {
              naviagte("/browse/bar");
            }}
            className="dashboard"
          >
            <Bar isDashboard={true} />
          </Box>

          <Box
            onClick={() => {
              naviagte("/browse/pie");
            }}
            className="dashboard"
          >
            <Pie isDashboard={true} />
          </Box>
        </Box>
        <Box display="flex">
          <Box
            onClick={() => {
              naviagte("/browse/line");
            }}
            className="dashboard"
          >
            <Line isDashboard={true} />
          </Box>

          <Box
            onClick={() => {
              naviagte("/browse/geography");
            }}
            className="dashboard"
          >
            <Geography isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
