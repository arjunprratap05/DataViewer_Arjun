import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
    }}
  >
    <List>
      {["Stores", "SKUs", "Planning", "Charts"].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
