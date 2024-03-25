import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Accord from "./Accord";
const AccordData = () => {
  return (
    <Box
      sx={{
        margin: "5rem auto",
        width: "80%",
      }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Inter var , sans-serif",
          fontSize: "18px",
          fontWeight: "700",
          margin: "32px 0px 0px 1.1rem",
          lineHeight: "40px",
          color: "#323232",
        }}>
        Frequently Asked Questions
      </Typography>

      <Accord
        accordSummary={"How can Offers.com save me money when shopping online?"}
        accordDetails={
          "The Offers.com team is dedicated to helping you save on every online purchase. On every store page, you will find the latest coupons, free shipping offers and promo codes available to apply at checkout. Our store pages also share the best of-the-moment deals your favorite retailers, restaurants and services have on offer — to ensure you don't miss out on any significant saving opportunities."
        }
      />

      <Accord
        accordSummary={
          "Where can I find promo codes, coupon codes, and deals on Offers.com?"
        }
        accordDetails={
          "In addition to browsing the latest deals and coupons and promo codes promoted here on the Offers.com homepage, you can use our search bar to go straight to your favorite store's dedicated Offers.com page. There you will find a list of the best promo codes, coupons and deals on offer for that specific retailer, restaurant or service."
        }
      />
      <Accord
        accordSummary={
          "What other ways can Offers.com help me save at my favorite retailers and restaurants?"
        }
        accordDetails={
          "The Offers.com blog is your ultimate destination for expert insight into the best ways to save at your favorite retailers, restaurants and more. There you'll find everything from food freebies and store holiday hours to free shipping hacks and ways to earn points through your favorite travel rewards programs. Here are a few blogs ready to help you start saving now:"
        }
      />
      <Accord
        accordSummary={"Can Offers.com save me money when I shop in-store?"}
        accordDetails={
          "Yes, Offers.com is ready to help you save on purchases made in-person at your favorite retailers and restaurants. In fact, many of the coupons and promo codes featured on Offers.com can be used on in-store purchases. Just know that select sales and promotions are, at times, exclusively available to online shoppers, so always read the fine print before heading out and expecting in-store savings."
        }
      />
      <Accord
        accordSummary={
          "Does Offers.com have an app, browser extension or cash back program?"
        }
        accordDetails={
          "Offers.com does not have an app, browser extension or cash back program at the moment. Offers.com may offer these services in the future, and we will be sure to share if and when those services become available. Offers.com is committed to helping you save on every purchase. Your best way to score savings is to visit our store pages where you will find the latest and greatest coupon codes and deals available."
        }
      />

      <Divider />
      {/* Website Description */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter var , sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            margin: "7rem 0px 0px 1.1rem",
            lineHeight: "40px",
            color: "#323232",
          }}>
          Offers.com is your place to save every day
        </Typography>
        <Box sx={{ margin: "12px 0px 0px 1.1rem" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Inter var , sans-serif",

              textAlign: "start",
            }}>
            We make it our mission to find you the best coupons, promo codes,
            deals and sales to ensure you walk away from every shopping
            experience with savings in tow – in money and time. Whether you're
            shopping for apparel online, booking a flight, ordering from a
            favorite restaurant or signing up for a streaming service,
            Offers.com is here to help you find the best ways to lower your cart
            total. Beyond our coupons and promo codes, you can receive the
            latest and greatest deals right in your inbox by signing up for our
            Offers email newsletters. And for expert insight into the best sales
            to shop, the hottest products on the market and the best hacks to
            help you save at your favorite retailers, be sure to give our blog a
            read.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AccordData;
