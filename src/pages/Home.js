import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure you have a logo image in this path

const Home = () => {
  return (
    <Box display="flex" height="100vh">
      <Box
        width="60%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f4f4f4"
      >
        <img src={logo} alt="logo" style={{ width: "50%", height: "auto" }} />
      </Box>
      <Box
        width="40%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Typography
          variant="body1"
          sx={{ marginTop: "16px", textAlign: "center" }}
        >
          Don't have an account?
          <Box
            component={Link}
            to="/signup"
            sx={{
              display: "block",
              marginTop: "8px",
              backgroundColor: "#1976d2",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
