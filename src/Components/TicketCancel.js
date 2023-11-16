import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
const TicketCancel = () => {
  return (
    <Box>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h6" align="center"  sx={{marginTop:10}}>
          <strong>Ticket Cancel</strong>
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
              <TextField label="Ticket No" type="text"></TextField>&nbsp;

              <TextField label="Mobile" type="tel"></TextField>&nbsp;

              <TextField label="UID Number" type="tel"></TextField>
            </Box>
            <Box sx={{ display: "flex",justifyContent:'center', margin: 3 }}>
              <Button variant="contained" color="error">
                Search
              </Button>&nbsp;
              <Button variant="contained" color="error">
                Reset
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TicketCancel;
