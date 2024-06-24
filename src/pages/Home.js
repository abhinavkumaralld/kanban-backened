import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to My Kanban App
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Login
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/signup"
        style={{ marginLeft: "10px" }}
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default Home;
