import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

const Accord = ({ accordDetails, accordSummary }) => {
  return (
    <Box sx={{ margin: "10px 0" }}>
      <Divider />

      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
        }}>
        <AccordionSummary expandIcon={<ExpandLessIcon />}>
          <Typography>{accordSummary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{accordDetails}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accord;
