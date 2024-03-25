import React from "react";
import Cards from "./Cards";
import { Box, Container, Link, Typography, Grid } from "@mui/material";
import CVS from "./images/CVS.png";
import FL from "./images/Finish line.png";
import Shein from "./images/SHEIN.png";
import Ulta from "./images/Ulta.png";
import skecher from "./images/Skecher.png";
import target from "./images/Target.png";
import krispy from "./images/krispy.png";
import crocs from "./images/crocs.png";
import amazon from "./images/amazon.jpg";

const CardsData = () => {
  return (
    <Container maxWidth={"xxl"}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            fontSize: { lg: "45px", xs: "25px", sm: "30px", md: "35px" },
            lineHeight: "40px",
            margin: "16px 0",
          }}>
          Coupons and Deals From Stores You Love
        </Typography>
        <Typography variant="body1">
          When you buy through links on our site,{" "}
          <Link href="#" underline="hover">
            we may earn a commission.
          </Link>
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          lineHeight: "40px",
          margin: { lg: "32px 0 8px 11rem", xs: "30px 0 0 30px" },
          fontWeight: "bold",
          fontSize: "22px",
        }}>
        Featured Deals
        <Link
          href="#"
          color="primary"
          variant="body2"
          sx={{
            marginLeft: "12px",
            fontSize: "15px",
            lineHeight: "20px",
            color: "rgb(0, 149, 153)",
            textDecoration: "underline solid rgb(0, 149, 153)",
            fontWeight: "400",
          }}>
          View All
        </Link>
      </Typography>

      {/* Using Grid for responsive layout */}
      <Grid container justifyContent="center">
        {/* Rendering the cards */}
        {[
          {
            image: target,
            offerName: "Sitewide",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: krispy,
            offerName: "Sitewide",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: crocs,
            offerName: "Sitewide",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: Shein,
            offerName: "Sitewide",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: amazon,
            offerName: "Sitewide",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },

          // Add more card data as needed...
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Cards {...card} />
          </Grid>
        ))}
      </Grid>

      {/* 2nd Row */}
      <Typography
        variant="h6"
        sx={{
          lineHeight: "40px",
          margin: { lg: "115px 0 8px 11rem", xs: "70px 0 0 30px" },
          fontWeight: "bold",
          fontSize: "22px",
        }}>
        Our Favorite Deals From Women-Owned Businesses
      </Typography>
      <Grid container justifyContent="center">
        {/* Rendering the cards */}
        {[
          {
            image: CVS,
            offerName: "Hot",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: FL,
            offerName: "Hot",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: Shein,
            offerName: "Hot",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: Ulta,
            offerName: "Hot",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },
          {
            image: skecher,
            offerName: "Hot",
            offerDiscount: "50% off",
            offerBrand: "Michael kors",
            offerValue: "25% off on any orders",
          },

          // Add more card data as needed...
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Cards {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsData;
