import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  ImageListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const BillingAdres = () => {
  // handle save address change
  return (
    <Container maxWidth="sm">
      <form
        style={{
          display: "grid",

          boxSizing: "border-box",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Billing Address </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            Selec the dress the matches your card of payments methed
          </Typography>
        </Grid>
        <hr />

        <Grid
          item
          xs={12}
          style={{
            maxWidth: "100%",
            border: "1px solid",
            margin: "3px",
            padding: "3px",
          }}
        >
          <FormControl>
            <Grid container xs={12}>
              <Grid
                item
                xs={12}
                style={{
                  borderBottom: "1px solid",
                  padding: "3px",
                }}
              >
                <RadioGroup name="radio-buttons-group">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={
                      <ImageListItem>
                        <img srcSet="" src="" alt="Image Paypal" />
                      </ImageListItem>
                    }
                  />
                </RadioGroup>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "3px",
                }}
              >
                <RadioGroup name="radio-buttons-group">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label={
                      <ImageListItem style={{ marginRight: "15rem" }}>
                        <img srcSet="" src="" alt="Image Paypal" />
                      </ImageListItem>
                    }
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </form>
    </Container>
  );
};

export default BillingAdres;
