import React, { Fragment, useState } from "react";
import "tailwindcss/tailwind.css";
import CreditCardForm from "./CreditCardForm";

import BillingAdres from "./BillingAdres";
import { Container, Grid, Typography } from "@mui/material";
import { Form } from "formik";

const PayPage = () => {
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
              <Typography variant="caption">
                All transactions are secure and end crypted
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
      <div className="payment-wrap">
        <div className="contact-infomation  ">
          <table className="table-auto w-full mx-auto">
            <p>
              <strong>Contact Infomation</strong>
            </p>
            <tbody>
              <tr className="border border-gray-400 ">
                <td className=" p-4 w-1/3">Contact</td>
                <td className="p-4 w-1/3">Name & Email</td>
                <td className=" p-4 w-1/3">
                  <button className="bg-transparent border-0 hover:bg-blue-500 hover:text-white font-semibold hover:py-2 px-4 rounded">
                    Change
                  </button>
                </td>
              </tr>
              <tr className="border border-gray-400 ">
                <td className=" p-4 w-1/3">Snip to</td>
                <td className="p-4 w-1/3">Address</td>
                <td className=" p-4 w-1/3">
                  <button className="bg-transparent border-0 hover:bg-blue-500 hover:text-white font-semibold hover:py-2 px-4 rounded">
                    Change
                  </button>
                </td>
              </tr>
              <tr className="border border-gray-400 ">
                <td className=" p-4 w-1/3">Method</td>
                <td className="p-4 w-1/3">
                  <strong>Economy</strong>(sadasdsads)
                </td>
                <td className=" p-4 w-1/3">
                  <button className="bg-transparent border-0 hover:bg-blue-500 hover:text-white font-semibold hover:py-2 px-4 rounded">
                    Free
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
      </div>
      <CreditCardForm />
      <BillingAdres />
    </Fragment>
  );
};

export default PayPage;
