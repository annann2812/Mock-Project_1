import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormValues } from "../../../public/type";
import Layout from "../../Layout/Layout";
import { Box, Typography } from "@mui/material";
import { PrimaryButton, UserInput } from "../../../public/styled";

const initialValues: FormValues = {
  username: "",
  email: "",
  password: "",
};

const onSubmit = (values: FormValues) => {
  alert("Your Account Created!");
};

const validationSchema = Yup.object({
  username: Yup.string().required("UserName is Required"),
  email: Yup.string()
    .email("InValid Email Address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Password is Required"),
});

const SignUp = () => {
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
        }} >
          <Form>
            <div className="form-control">
              <label htmlFor="username"> User Name: </label>
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
            <div className="form-control">
              <label htmlFor="email"> E-mail: </label>
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
            <div className="form-control">
              <label htmlFor="CreatePassword"> Password: </label>
              <UserInput
                type="password"
                id="password"
                name="password"
                placeholder=" Create New Password"
              />
              <ErrorMessage name="password">
                {(errMsg) => <div className="errors">{errMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="ConfirmPassword"> Confirm Password: </label>
              <UserInput
                type="password"
                id="password"
                name="password"
                placeholder=" Confirm Your Password"
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
                <PrimaryButton to = "/" className="loginButton" type="submit">
                Sign Up
                </PrimaryButton>
            <Typography>Already SignUp?{" "}</Typography>
            <Link to="/login" className="link">
                Log In
            </Link>
            </Box>
          </Form>
        </Box>
      </Formik>
    </Layout>
  );
};

export default SignUp;

