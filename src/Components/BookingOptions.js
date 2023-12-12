import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Stack,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EventIcon from "@mui/icons-material/Event";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const BookingOptions = () => {
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("/api/bookings")
      .then((response) => response.json())
      .then((data) => setBookingData(data));
  }, []);
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
        <TextField name="From" type="text" label="From"></TextField>
        <br />
        <br />
        <TextField name="To" type="text" label="To"></TextField>
        <br />
        <br />
        <TextField
          id="depart-on"
          type="date"
          label="Depart on" 
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
        <Button variant="contained" onClick={()=> navigate('/buses')}>Check Avaliability</Button>
      </Box>
      {bookingData && (
        <Box>
          <Typography variant="h6">Available Bookings</Typography>
          <Stack>
            {bookingData.map((booking, index) => (
              <Item key={index}>
                From: {booking.from}, To: {booking.to}, Departure Date:{" "}
                {booking.departureDate}
              </Item>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default BookingOptions;
