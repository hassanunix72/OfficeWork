import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ThumbNail from "./ThumbNail";

const ThumbNailData = () => {
  return (
    <>
      <Box sx={{ marginLeft: "18rem", paddingTop: "2rem", width: "70%" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter var , sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            margin: "32px 0px 0px 2rem",
            lineHeight: "40px",
          }}>
          Savings Tips
        </Typography>
        <Grid container spacing={0}>
          <Grid item lg={6} xs={12}>
            <ThumbNail
              image={
                "https://sgi2.offerscdn.net/i/production/published/65/filename/23159.h120.w120.flim.v30.bffffff.png"
              }
              headingInfo={
                "6 Non-Toxic Beauty Buys for Embracing Your Clean Girl Era"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi1.offerscdn.net/i/production/published/65/filename/23059.h120.w120.flim.v29.bffffff.png"
              }
              headingInfo={
                "Baby Essentials to Help You Embrace Your New Mom Era"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} md={8} sm={12}>
            <ThumbNail
              image={
                "https://sgi2.offerscdn.net/i/production/published/65/filename/22890.h120.w120.flim.v17.bffffff.jpg"
              }
              headingInfo={
                "Costco Can Help You Save and Stick to Your New Year’s Resolutions"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi1.offerscdn.net/i/production/published/65/filename/22794.h120.w120.flim.v30.bffffff.jpg"
              }
              headingInfo={
                "How You Can Get Bally Sports Streaming Services for Under $20 a Month"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>{" "}
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi2.offerscdn.net/i/production/published/65/filename/23159.h120.w120.flim.v30.bffffff.png"
              }
              headingInfo={
                "6 Non-Toxic Beauty Buys for Embracing Your Clean Girl Era"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi1.offerscdn.net/i/production/published/65/filename/23059.h120.w120.flim.v29.bffffff.png"
              }
              headingInfo={
                "Baby Essentials to Help You Embrace Your New Mom Era"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi2.offerscdn.net/i/production/published/65/filename/22890.h120.w120.flim.v17.bffffff.jpg"
              }
              headingInfo={
                "Costco Can Help You Save and Stick to Your New Year’s Resolutions"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ThumbNail
              image={
                "https://sgi1.offerscdn.net/i/production/published/65/filename/22794.h120.w120.flim.v30.bffffff.jpg"
              }
              headingInfo={
                "How You Can Get Bally Sports Streaming Services for Under $20 a Month"
              }
              brandLink={"Tazi Phillips "}
              dateInfo={"March 6, 2024"}
              paraInfo={
                "Shop some of our favorite cruelty-free products at Walmart."
              }
              itemLink={"Cosmetic"}
              sponsorLink={"Sponsored"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ThumbNailData;
