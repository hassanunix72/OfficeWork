import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";

const ExampleCard = ({
  image,
  headingInfo,
  brandLink,
  dateInfo,
  paraInfo,
  itemLink,
  sponsorLink,
}) => {
  return (
    <Container>
      <Divider />
      <CardContent>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            image={image}
            alt="6 Non-Toxic Beauty Buys"
            sx={{
              flex: "0 0 auto",
              width: { lg: "128px", xs: "100px" },
              height: { lg: "128px", xs: "100px" },
              borderRadius: "100px",
              marginBottom: "25px",
            }}
          />
          <Box style={{ marginLeft: "1rem", width: "30rem" }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { xs: "13px", lg: "22px" },
                "&:hover": { color: "rgb(0, 149, 153)" },
              }}>
              {headingInfo}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ paddingBottom: "20px" }}>
              <Link
                href="#"
                sx={{
                  color: "#1f2937",
                  fontWeight: "300",
                  "&:hover": { color: "rgb(0, 149, 153)" },
                }}>
                {brandLink} &nbsp;
              </Link>
              • &nbsp;{dateInfo}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "10px", lg: "16px" } }}>
              {paraInfo}
            </Typography>
            {/* Anchor tag */}
            <Typography sx={{ textAlign: "end", paddingTop: "20px" }}>
              <Link
                sx={{
                  color: "#1f2937",
                  fontWeight: "300",
                  "&:hover": { color: "rgb(0, 149, 153)" },
                }}>
                {itemLink}
              </Link>
              &nbsp;
              <Link
                sx={{
                  color: "#1f2937",
                  fontWeight: "300",
                  "&:hover": { color: "rgb(0, 149, 153)" },
                }}>
                {sponsorLink}
              </Link>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
    </Container>
  );
};

export default ExampleCard;
