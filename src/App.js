import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TicketCancel from "./Components/TicketCancel.js";
import TrackService from "./Components/TrackService.js";
import TrackStatus from "./Components/TrackStatus.js";
import Gallery from "./Components/Gallery.js";
import BookingOptions from "./Components/BookingOptions.js";
import { Box } from "@mui/material";
import PageNotFound from "./Components/PageNotFound.js";
import Buses from "./Components/Buses.js";
function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookingOptions />} />
          <Route path="/TicketCancel" element={<TicketCancel />} />
          <Route path="/TrackStatus" element={<TrackStatus />} />
          <Route path="/TrackService" element={<TrackService />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/buses" element={<Buses />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
