import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import Board from "../components/Dashboard/Board";
import Analytics from "../components/Dashboard/Analytics";
import Settings from "../components/Dashboard/Setting";

const Dashboard = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard/board">
            <ListItemText primary="Board" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/analytics">
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="board" element={<Board />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
