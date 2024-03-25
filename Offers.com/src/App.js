import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardsData from "./Components/CardsData";
import ThumbNailData from "./Components/ThumbNailData";
import FeaturedCardData from "./Components/FeaturedCardData";

import { Box } from "@mui/material";
import AccordData from "./Components/AccordData";

import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

function App() {
  return (
    <Box>
      <Box sx={{ display: { lg: "block", sm: "none" } }}>
        <Navbar />
      </Box>
      <Box sx={{ display: { lg: "none", sm: "block" } }}>
        <ResponsiveAppBar />
      </Box>

      <Slider />

      <CardsData />

      <ThumbNailData />

      <FeaturedCardData />

      <AccordData />
      {/* <Footer /> */}
      <Footer />
    </Box>
  );
}

export default App;
