import React from "react";
import { Box, CardContent, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Cards = ({ offerName, offerDiscount, offerBrand, offerValue, image }) => {
  return (
    <Box sx={{ maxWidth: { xs: "90%", lg: 300 }, margin: "15px" }}>
      <Card
        sx={{
          position: "relative",

          margin: "15px ",
          borderRadius: "16px",
          cursor: "pointer",
          "&:hover": {
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
            transform: "scale(1.05)",
            transition: "0.5s",
          },
        }}>
        {/* Offer label */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "#051e44",
            width: "6rem",
            height: "1.7rem",
            borderTopLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            lineHeight: "1.5rem",
            textAlign: "center",
          }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              color: "white",
              marginTop: "3.5px",
              textTransform: "uppercase",
            }}>
            {offerName}
          </Typography>
        </Box>

        {/* Discount label */}
        <Box
          sx={{
            position: "absolute",
            bottom: "51%",
            right: 8,
            bgcolor: "white",
            width: "5rem",
            height: "2rem",
            borderRadius: "16px",
            lineHeight: "1.5rem",
            textAlign: "center",
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
          }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              color: "black",
              textTransform: "uppercase",
              padding: "8px 16px",
              lineHeight: "16px",
            }}>
            {offerDiscount}
          </Typography>
        </Box>

        {/* Card Media */}
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="img"
          sx={{
            width: { lg: "250px", sm: "100%" },
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <CardContent sx={{ height: "9rem" }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: "500",
              textTransform: "uppercase",
            }}>
            {offerBrand}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: "500",
              textTransform: "capitalize",
              margin: "3px 0",
            }}>
            {offerValue}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
