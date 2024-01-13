import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  // Stack,
  // Paper,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
import EventIcon from "@mui/icons-material/Event";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   flexGrow: 1,
// }));

const BookingOptions = () => {
  // const [bookingData, setBookingData] = useState(null);
  const [userData, setUserData] = useState({
    from: "",
    to: "",
    depature: null,
    roundtrip: null,
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  // useEffect(() => {
  //   // Fetch data from your API endpoint
  //   fetch("/api/bookings")
  //     .then((response) => response.json())
  //     .then((data) => setBookingData(data));
  // }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          border: 1,
          padding: 6,
          marginTop: 10,
          borderRadius: 2,
          backgroundColor: "#FCEDDA",
        }}
      >
        <Typography variant="h5" align="center">
          Booking
        </Typography>
        <br />
        <TextField
          name="from"
          onChange={handler}
          value={userData.from}
          type="text"
          label="From"
        ></TextField>
        <br />
        <br />
        <TextField
          name="to"
          onChange={handler}
          value={userData.to}
          type="text"
          label="To"
        ></TextField>
        <br />
        <br />
        <TextField
          id="depart-on"
          type="date"
          value={userData.depature}
          label="Depart on"
          onChange={handler}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EventIcon /> {/* Date icon */}
              </InputAdornment>
            ),
          }}
        />
        &nbsp;&nbsp;
        <br />
        <br />
        <TextField
          id="depart-on"
          type="date"
          value={userData.roundtrip}
          onChange={handler}
          label="Round trip"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EventIcon /> {/* Date icon */}
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={() => navigate("/buses")}>
          Check Avaliability
        </Button>
      </Box>
    </Box>
  );
};

export default BookingOptions;
