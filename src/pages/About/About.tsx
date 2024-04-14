import { Container, Grid, Typography } from "@mui/material";

import React from "react";

const About = () => {
  return (
    <Container>
      <Grid
        container
        direction={{ sm: "column", md: "row" }}
        margin="auto"
        padding="10px"
        justifyContent="center"
        alignItems="flex-start"
        style={{ border: "2px solid #CCC" }}
      >
        <Grid item xs={4} sx={{ width: "100%" }}>
          <Typography variant="h6">Our Company</Typography>
          <Typography>
            <strong>Lorem ipsum dolor sit amet.</strong>
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            odit.
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            odit.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ width: "100%" }}>
          <Typography variant="h6">Our Team</Typography>
          <Typography>
            <img src="" alt="Anh" />
          </Typography>
          <Typography variant="h6">Nhom 4 nguoi</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem
            ab ad neque dolores blanditiis!
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ width: "100%" }}>
          <Typography variant="h6">Testimonials</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem
            ab ad neque dolores blanditiis!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
