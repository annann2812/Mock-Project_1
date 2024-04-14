import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Delivery = () => {
  return (
    <Container>
      <Grid
        container
        direction={{ sm: "column", md: "row" }}
        margin="5px"
        padding="20px"
        justifyContent="center"
        alignItems="center"
        style={{ border: "2px solid #CCC" }}
      >
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Typography variant="body1">
            <div>Your pack shipment</div>
          </Typography>
          <Typography variant="caption">
            <div style={{ margin: "5px" }}>
              Packages are generally dispatched within 2 days after receipt of
              payment and are shipped via UPS with tracking and drop-off without
              signature. If you prefer delivery by UPS Extra with required
              signature, an additional cost will be applied, so please contact
              us before choosing this method. Whichever shipment choice you
              make, we will provide you with a link to track your package
              online.
            </div>
          </Typography>
          <Typography variant="caption">
            <div style={{ margin: "5px" }}>
              Shipping fees include handling and packing fees as well as postage
              costs. Handling fees are fixed, whereas transport fees vary
              according to total weight of the shipment. We advise you to group
              your items in one order. We cannot group two distinct orders
              placed separately, and shipping fees will apply to each of them.
              Your package will be dispatched at your own risk, but special care
              is taken to protect fragile objects.
            </div>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Delivery;
