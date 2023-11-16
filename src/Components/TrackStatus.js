import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
const TrackStatus = () => {
  return (
    <Box>
      <Box sx={{margin:5}}>
        <Typography variant="h6" align="center" sx={{marginTop:10}}>
          Track Ticket Status
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            border: 1,
            display: "flex",
            justifyContent: "center",
            width: "800px",
            borderRadius: 1,
            marginBottom: 4,
            padding: 5,
          }}
        >
          <Box>
            <Box>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormControlLabel
                    value="Ticket Enquiry"
                    control={<Radio />}
                    label="Ticket Enquiry"
                  />
                  <FormControlLabel
                    value="Transaction Status"
                    control={<Radio />}
                    label="Transaction Status"
                  />
                  <FormControlLabel
                    value="Service Status"
                    control={<Radio />}
                    label="Service Status"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 3,
              }}
            >
              <Box>
                <TextField label="Ticket No" type="text"></TextField>
              </Box>
              <Box>
                <TextField label="Mobile" type="tel"></TextField>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", margin: 3 }}>
              <Button variant="contained" color="error">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackStatus;
