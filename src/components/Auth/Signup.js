import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={4}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
      <Typography
        variant="body1"
        sx={{ marginTop: "16px", textAlign: "center" }}
      >
        Already have an account?
        <Box
          component={Link}
          to="/"
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
          Login
        </Box>
      </Typography>
    </Box>
  );
};

export default Signup;
