import React, { Fragment, useState } from "react";
import "tailwindcss/tailwind.css";
import CreditCardForm from "./CreditCardForm";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import BillingAdres from "./BillingAdres";
import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const PayPage = () => {
  function createData(title: string, derection: string, button: string) {
    return { title, derection, button };
  }
  const rows = [
    createData("Contact", "Name", "Change"),
    createData(" ", "Mail", " "),
    createData(
      "Snip to ",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, porro.",
      "Change"
    ),
    createData(
      "Method ",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, porro.",
      "Free"
    ),
  ];
  return (
    <Fragment>
      <Container maxWidth="sm">
        <form
          style={{
            display: "grid",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="h6" display="inline">
                <strong>Locoste</strong>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <img src="" alt="11" style={{ display: "inline" }} />
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="body1">
                    <Link to="\Home" style={{ color: "green" }}>
                      Home
                    </Link>
                    <ArrowForwardIosIcon fontSize="small" />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <Link to="\Page" style={{ color: "green" }}>
                      Page
                    </Link>{" "}
                    <ArrowForwardIosIcon fontSize="small" />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <Link to="\Home" style={{ color: "green" }}>
                      Shipping
                    </Link>{" "}
                    <ArrowForwardIosIcon fontSize="small" />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">Payment</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container maxWidth="sm">
        <TableContainer
          style={{
            display: "grid",

            boxSizing: "border-box",
            width: "100%",
            margin: "3px",
            padding: "3px 3px 3px 20px",
          }}
        >
          <Typography variant="h6"> Contact information</Typography>
          <Table style={{ border: "1px solid #CCC" }}>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{
                    "&:first-child td, &:first-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell
                    align="left"
                    // sx={{
                    //   "&:second-child, &:second-child": {
                    //     alignItems: "flex-start",
                    //     justifyContent: "flex-start",
                    //   },
                    // }}
                  >
                    {row.derection}
                  </TableCell>
                  <TableCell align="left">
                    <Button style={{ justifyContent: "left" }}>
                      {row.button}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <CreditCardForm />
      <BillingAdres />
    </Fragment>
  );
};

export default PayPage;
