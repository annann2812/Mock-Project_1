import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../../Layout/Layout";
import { ContactForm, FormValues } from "../../../public/type";
import { PrimaryButton, UserInput } from "../../../public/styled";
import { Box, TextareaAutosize } from "@mui/material";

const initialValues: ContactForm = {
  message: "",
  email: "",
  subject: "",
};

const onSubmit = (values: ContactForm) => {
  alert("Your Form is Submitted");
};

const validationSchema = Yup.object({
  username: Yup.string().required("UserName is Required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Password is Required"),
});

const Contact: React.FC = () => {
  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Box sx={{
            border: "1px solid #ccc",
            padding: "30px",
            borderRadius: "5px",
            backgroundColor: "#FAFAFA",
        }}>
          <Form>
            <div>
              <label htmlFor="username"> Subject: </label>
              <UserInput
                type="text"
                id="username"
                name="username"
                placeholder="Enter Your UserName"
              />
              <ErrorMessage name="username">
                {(errMsg) => <div className="errors">{errMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="email"> E-mail Address: </label>
              <UserInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your E-mail"
              />
              <ErrorMessage name="email">
                {(errMsg) => <div className="errors">{errMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="message"> Message: </label>
              <TextareaAutosize
                name="message"
                placeholder="How can we help?"
              />
              <ErrorMessage name="password">
                {(errMsg) => <div className="errors">{errMsg}</div>}
              </ErrorMessage>
            </div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px 0",
            }}>
                <PrimaryButton to = "/" className="loginButton" type="submit">SEND</PrimaryButton>
            </Box>
          </Form>
        </Box>
      </Formik>
    </Layout>
  );
};

export default Contact;