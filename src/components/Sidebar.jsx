// src/components/Sidebar.jsx
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open = true }) => {
  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Institutes", path: "/institutes" },
    { text: "Departments", path: "/departments" },
    { text: "Events", path: "/events" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
