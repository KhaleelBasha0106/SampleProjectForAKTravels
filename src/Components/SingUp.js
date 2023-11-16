import React, { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3000/signup", values)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.error("Resource not found. Check the URL or endpoint.");
        } else {
          console.error("An error occurred:", error.message);
        }
      });
  };

  return (
    <Box>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}
      >
        <Box
          sx={{
            border: 1,
            padding: 10,
            borderRadius: 3,
            backgroundColor: "wheat",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" align="center">
              Sign Up
            </Typography>
            <br />
            <TextField
              label="Name"
              type="text"
              fullWidth
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <br />
            <br />
            <TextField
              label="Email"
              type="email"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <br />
            <br />
            <TextField
              label="Password"
              type="password"
              fullWidth
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <br />
            <br />
            <Button fullWidth variant="contained" color="success" type="submit">
              Register
            </Button>
            <br />
            <br />
            <Link to="/">
              <Button fullWidth variant="contained">
                Login
              </Button>
            </Link>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
