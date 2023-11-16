import React from "react";
import { Box, Typography,Card,CardMedia } from "@mui/material";
import busImage from '../Images/bus.jpeg'
const Gallery = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ border: 1, marginTop: 15, padding: 3,borderRadius:2 }}>
        <Typography variant="h5">Coaches</Typography>
        <Card>
        <CardMedia
          component="img"
          image={busImage}
          alt="green iguana"
          sx={{
            height:{
                xs:160,
                md:300
            }
          }}
        />
        </Card>
      </Box>
    </Box>
  );
};

export default Gallery;
