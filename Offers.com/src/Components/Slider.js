import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { IconButton, Typography } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://sgi3.offerscdn.net/i/production/published/92/image/3746.h312.w1248.flpad.v2.bffffff.jpg",
    label: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    imgPath:
      "https://sgi2.offerscdn.net/i/production/published/92/image/3745.h312.w1248.flpad.v2.bffffff.jpg",
    label: "Bird",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%", // Adjust width as needed
        margin: "0 auto", // Center horizontally
        padding: "15px 0 3rem 0",
      }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ maxWidth: "100%" }} // Limit image width
      >
        {images.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}>
                <Typography
                  component={"img"}
                  sx={{
                    height: { lg: "90%", xs: "20vh" },
                    width: { lg: "100%", xs: "100%" },
                    borderRadius: "20px",
                  }}
                  src={step.imgPath}
                  alt={step.label}></Typography>

                <Box
                  sx={{
                    display: {
                      lg: "block",
                      xs: "none",
                      sm: "none",
                      md: "none",
                    },
                  }}>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 160,
                      left: 10,
                      bgcolor: "white",
                      color: "black",
                      borderRadius: "50%",
                    }}
                    onClick={handleBack}
                    disabled={activeStep === 0}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bgcolor: "white",
                      color: "black",
                      right: 10,
                      top: 160,
                      borderRadius: "50%",
                    }}
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </IconButton>
                </Box>
              </Box>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: { lg: "none", md: "block" } }}>
        <IconButton
          sx={{
            position: "absolute",
            top: { md: 200, xs: 160, sm: 160 },
            left: 10,
            bgcolor: "white",
            color: "black",
            borderRadius: "50%",
          }}
          onClick={handleBack}
          disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            bgcolor: "white",
            color: "black",
            right: 10,
            top: { md: 200, xs: 160, sm: 160 },
            borderRadius: "50%",
          }}
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Slider;
