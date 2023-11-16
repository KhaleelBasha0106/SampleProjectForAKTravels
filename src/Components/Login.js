import React, { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/home')
  //   try {
  //     const response = await axios.post("http://localhost:3001/login", 
  //     values);

  //     if (response.status === 200) {
  //       alert("Login successful");
  //     } else {
  //       alert("Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  //   //  navigate('/home')

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
              Login
            </Typography>
            <br />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            ></TextField>
            <br />
            <br />
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></TextField>
            <br />
            <br />
            <Button fullWidth variant="contained" color="success" type="submit">
              Submit
            </Button>
            <br />
            <br />
            <Link to="/signup">
              <Button fullWidth variant="contained">
                Register
              </Button>
            </Link>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
