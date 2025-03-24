import React from "react";
import Chart from "../components/Chart";
import { Container, Typography } from "@mui/material";

const ChartPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sales & GM Chart
      </Typography>
      <Chart />
    </Container>
  );
};

export default ChartPage;
