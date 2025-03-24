import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Store Planning App
      </Typography>
      <Typography variant="body1">
        Use the sidebar to navigate through different sections.
      </Typography>
    </Container>
  );
};

export default Home;
