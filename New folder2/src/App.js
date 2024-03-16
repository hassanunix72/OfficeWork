import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardsData from "./Components/CardsData";
import ThumbNailData from "./Components/ThumbNailData";
import FeaturedCardData from "./Components/FeaturedCardData";
import Accord from "./Components/Accord";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Navbar />

      <Slider />

      <CardsData />

      <ThumbNailData />

      <FeaturedCardData />

      {/* Contineu From Here */}
      <Box sx={{ marginTop: "10px" }}>
        <Accord />
      </Box>
    </>
  );
}

export default App;
