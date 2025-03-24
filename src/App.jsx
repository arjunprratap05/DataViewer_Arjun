import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StorePage from "./pages/StorePage";
import PlanningPage from "./pages/PlanningPage";
import ChartPage from "./pages/ChartPage";
import SKUPage from "./pages/SKUPage";

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar on the left */}
      <Box sx={{ width: "250px", flexShrink: 0, backgroundColor: "#f4f4f4" }}>
        <Sidebar />
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {/* Navbar at the top */}
        <Navbar />

        {/* Page Content */}
        <Box sx={{ flexGrow: 1, padding: "20px", overflow: "auto" }}>
          <Routes>
            <Route path="/stores" element={<StorePage />} />
            <Route path="/skus" element={<SKUPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/charts" element={<ChartPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
