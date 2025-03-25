import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Ensure the logo path is correct

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo on the Left */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6">Store Planning</Typography>
        </Box>

        {/* Spacer to push Sign In button to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Sign In Button on the Right */}
        <Button color="inherit" component={Link} to="/signin">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
