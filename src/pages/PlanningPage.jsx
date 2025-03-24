import React from "react";
import PlanningGrid from "../components/PlanningGrid";
import { Container, Typography } from "@mui/material";

const Planning = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Planning Dashboard
      </Typography>
      <PlanningGrid />
    </Container>
  );
};

export default Planning;
