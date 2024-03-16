import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCardData = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Inter var , sans-serif",
          fontSize: "18px",
          fontWeight: "700",
          margin: "32px 0px 0px 0rem",
          lineHeight: "40px",
          color: "#323232",
        }}>
        Featured Stores
      </Typography>
      {/* 1st Row */}
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/02zLDwCqTbhlnKCTPdI0yqf.h90.w134.flpad.v1382.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi3.offerscdn.net/i/zdcs-merchants/073UdDKKpSjWtYHuCBrRJmU.h90.w134.flpad.v499.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi2.offerscdn.net/i/zdcs-merchants/07ceq7iAfFfRlRYt8DCvPYM.h90.w134.flpad.v1473.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/06ISnmvmwHm24DGSqX9lN4V.h90.w134.flpad.v486.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/01QLXxCupAIBjsJQbhEtFm9.h90.w134.flpad.v1119.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi2.offerscdn.net/i/zdcs-merchants/01XRnUl7OSueaApseZ3TYDs.h90.w134.flpad.v996.bffffff.png"
            }
          />
        </Grid>
        {/* 2nd Row */}

        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi3.offerscdn.net/i/zdcs-merchants/02RGwAdnXnoxI2rPZTySLqq.h90.w134.flpad.v2066.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/01i9tKlJXzBMTf9YzjaObEQ.h90.w134.flpad.v176.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi3.offerscdn.net/i/zdcs-merchants/00PdyjRpqcbuGvEnK1Ylabm.h90.w134.flpad.v1461.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi2.offerscdn.net/i/zdcs-merchants/05tLlq1sAaOC0SpWlLSNBrD.h90.w134.flpad.v581.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/03NyX02V015XMrkQFT1iFbG.h90.w134.flpad.v2064.bffffff.png"
            }
          />
        </Grid>
        <Grid item lg={2}>
          <FeaturedCard
            image={
              "https://sgi1.offerscdn.net/i/zdcs-merchants/02l3hn547E4ktcHIJosrxL3.h90.w134.flpad.v977.bffffff.png"
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedCardData;
