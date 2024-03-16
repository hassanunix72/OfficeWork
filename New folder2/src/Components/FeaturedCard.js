import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { CardActionArea, Link, Box } from "@mui/material";

export default function FeaturedCard({ image, link }) {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 200,
          lineHeight: "24px",
          boxSizing: "border-box",
          height: "90px",
          textDecoration: "none solid rgb(97, 251, 255)",
          bgcolor: "rgb(255, 255, 255)",

          margin: "10px 0px 10px 0px",

          "&:hover": {
            boxShadow:
              "0px 10px 10px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
          },
        }}>
        <CardActionArea>
          <Link href={link}>
            <CardMedia
              component="img"
              height="90"
              image={image}
              alt="img"
              sx={{
                maxWidth: 134,

                margin: "auto",
              }}
            />
          </Link>
        </CardActionArea>
      </Card>
    </Box>
  );
}
