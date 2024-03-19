import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardsData from "./Components/CardsData";
import ThumbNailData from "./Components/ThumbNailData";
import FeaturedCardData from "./Components/FeaturedCardData";

import { Box } from "@mui/material";
import AccordData from "./Components/AccordData";

import Footer from "./Components/Footer";
function App() {
  return (
    <Box sx={{ maxWidth: "2000px" }}>
      <Navbar />

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
