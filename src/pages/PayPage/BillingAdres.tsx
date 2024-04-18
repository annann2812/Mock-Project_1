import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BillingAdres = () => {
  // handle save address change
  return (
    <Container
      maxWidth="sm"
      sx={{
        ddisplay: "grid",
        padding: "20px",
        boxSizing: "border-box",

        p: 2,
      }}
    >
      <form
        style={{
          display: "grid",
          //   placeItems: "center",
          // minHeight: "100vh",
          padding: "20px",
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
                    value="sameaddress"
                    control={<Radio />}
                    label="Same as shipping address"
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
                    value="different"
                    control={<Radio />}
                    label="Use a different billing addrest"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </form>
      <form
        style={{
          display: "grid",

          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" padding="5px">
            <NavLink to="./Home">
              {" "}
              <ArrowBackIosIcon fontSize="small" /> Back to shop{" "}
            </NavLink>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="center"
          style={{
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Button variant="contained" disableElevation fullWidth>
            Pay Now
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default BillingAdres;
