import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

const Accord = () => {
  return (
    <Box sx={{ margin: "auto", width: "50rem", paddingRight: "20rem" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandLessIcon />}>
          <Typography>
            How can Offers.com save me money when shopping online?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Offers.com team is dedicated to helping you save on every online
            purchase. On every store page, you will find the latest coupons,
            free shipping offers and promo codes available to apply at checkout.
            Our store pages also share the best of-the-moment deals your
            favorite retailers, restaurants and services have on offer — to
            ensure you don't miss out on any significant saving opportunities.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accord;
