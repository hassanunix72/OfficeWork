import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const TestingFooter = () => {
  return (
    <Container>
      {/* SignUp Section Start */}
      <Box
        sx={{
          fontFamily: "Inter var, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "96px",
          marginBottom: "16px",
          border: "2px solid rgb(5, 30, 68)",
          borderRadius: "6px",
          color: "rgb(50, 50, 50)",
          width: "100%",
          padding: "20px",
        }}>
        <Grid container spacing={1}>
          <Grid item lg={12} xs={12}>
            <Box
              sx={{
                position: "relative",
                bottom: 20,
                bgcolor: "#051e44",
                marginX: "-20px",
                padding: "4px 24px",
                lineHeight: "20px",
              }}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Inter var, sans-serif",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "14px",
                }}>
                Hand Picked Daily
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontFamily: "Inter var, sans-serif",
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "600",
                marginBottom: "10px",
              }}>
              Get Today's Top Deals Straight to Your Inbox
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              id="email"
              label="Email address"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                bgcolor: "rgb(0, 166, 170)",
                color: "#fff",
                "&:hover": {
                  bgcolor: "rgb(0, 150, 153)",
                },
              }}>
              Unlock Deals
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="start"
              sx={{
                fontFamily: "Inter var, sans-serif",
                color: "#6b7280",
                fontSize: "12px",
                letterSpacing: "normal",
                lineHeight: "16px",
                margin: "10px 0",
              }}>
              This newsletter may contain advertising, deals, or affiliate
              links. Subscribing to a newsletter indicates your consent to our
              Terms of Use and Privacy Policy. You may unsubscribe from the
              newsletters at any time.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* SignUp Section End */}

      {/* Section: Links Start */}
      <Container>
        <Grid
          container
          spacing={10}
          sx={{
            lineHeight: "30px",
            fontSize: "14px",
          }}>
          <Grid item lg={3} sm={6}>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "8px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
              }}>
              Popular Stores
            </Typography>
            <Box
              component={"ul"}
              sx={{
                listStyle: "none",
              }}>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Amazon
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  DICK'S Sporting Goods
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Hobby Lobby
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Home Depot
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  JCPenney
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  JOANN
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Kohl's
                </Link>
              </li>
            </Box>
          </Grid>
          {/* Repeat for other Link sections */}
          <Grid item lg={3} sm={6}>
            <Box
              component={"ul"}
              sx={{
                listStyle: "none",
                marginTop: "30px",
              }}>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Macy's
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  SHEIN
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Target
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  TEMU
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  ULTA
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Walmart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Wayfair
                </Link>
              </li>
            </Box>
          </Grid>
          {/* Repeat for other Link sections */}
          <Grid item lg={3} sm={6}>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "8px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
              }}>
              Categories
            </Typography>
            <Box
              component={"ul"}
              sx={{
                listStyle: "none",
              }}>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Auto Parts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Clothing & Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Fast Food
                </Link>
              </li>
            </Box>
          </Grid>
          {/* Repeat for other Link sections */}
          <Grid item lg={3} sm={6}>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "8px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
              }}>
              Savings Events
            </Typography>
            <Box
              component={"ul"}
              sx={{
                listStyle: "none",
              }}>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Savings Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Black Friday
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Easter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  Cyber Monday
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#323232", "&:hover": { color: "#009599" } }}>
                  All Events
                </Link>
              </li>
            </Box>
          </Grid>
          {/* Repeat for other Link sections */}
        </Grid>
      </Container>
      {/* About & Contact Section Start */}

      <Box
        sx={{
          textAlign: "center",
          margin: "50px auto",
          width: "90%",
          maxWidth: "1200px",
        }}>
        <Grid container spacing={2}>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              About US
            </Link>
          </Grid>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              Careers
            </Link>
          </Grid>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              Sitemap
            </Link>
          </Grid>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              Contact
            </Link>
          </Grid>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              FAQ
            </Link>
          </Grid>
          <Grid item lg={2} xs={6}>
            <Link
              underline="none"
              sx={{
                color: "#323232",
                "&:hover": { color: "#009599" },
              }}>
              Privacy Policy
            </Link>
          </Grid>
          {/* 2nd Row */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item lg={2} xs={12}>
              <Link
                underline="none"
                sx={{
                  color: "#323232",
                  "&:hover": { color: "#009599" },
                }}>
                Accessibility Statement
              </Link>
            </Grid>

            <Grid item lg={2} xs={12}>
              <Link
                underline="none"
                sx={{
                  color: "#323232",
                  "&:hover": { color: "#009599" },
                }}>
                Terms of Use
              </Link>
            </Grid>
            <Grid item lg={2} xs={12}>
              <Link
                underline="none"
                sx={{
                  color: "#323232",
                  "&:hover": { color: "#009599" },
                }}>
                Do Not Sell My Personal Information
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* About & Contact Section End */}

      {/* Section: Social media Start */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <IconButton color="primary" aria-label="Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Google">
          <GoogleIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Linkedin">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Github">
          <GitHubIcon />
        </IconButton>
      </Box>
      {/* Section: Social media End */}
    </Container>
  );
};

export default TestingFooter;
