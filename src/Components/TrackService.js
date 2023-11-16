import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const TrackService = () => {
  return (
    <Box>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h6" align="center" sx={{ marginTop: 10 }}>
          Track Service Status 
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 3,
              }}
            >
              <TextField label="Service No" type="text"></TextField>&nbsp;
              <TextField
                id="Journey Date"
                type="date"
                label="Journey Date"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon /> {/* Date icon */}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", margin: 3 }}>
              <Button variant="contained" color="error">
                Track Bus
              </Button>
             
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackService;
