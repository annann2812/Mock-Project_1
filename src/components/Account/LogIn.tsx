import React, { Fragment } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormValues } from "../../../public/type";
import {
  BackgroundLogin,
  FormButton,
  FormIcon,
  FormInput,
  FormText,
  LoginForm,
} from "../../../public/styled";

const initialValues: FormValues = {
  username: "",
  email: "",
  password: "",
};

const onSubmit = (values: FormValues) => {
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

const Login: React.FC = () => {
  return (
    <Fragment>
      <BackgroundLogin className="py-3 vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-9">
            <FormIcon className="fa-solid fa-arrow-right"></FormIcon>
            <FormText>
              <Link to="/">Back to Home</Link>
            </FormText>
            <div className="card" style={{ borderRadius: "1rem" }}>
              <LoginForm className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    // style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black text-center">
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={validationSchema}
                    >
                      <Form>
                        <h3
                          className="fw-normal mb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h3>
                        <div className="social-icons my-3">
                          <FormIcon href="#" className="icon">
                            <i className="fa-brands fa-google-plus-g"></i>
                          </FormIcon>
                          <FormIcon href="#" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                          </FormIcon>
                          <FormIcon href="#" className="icon">
                            <i className="fa-brands fa-github"></i>
                          </FormIcon>
                          <FormIcon href="#" className="icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </FormIcon>
                        </div>
                        <p style={{ fontSize: "12px" }}>
                          or use your email password
                        </p>
                        <div className="form-outline mb-4">
                          <FormInput
                            type="text"
                            id="username"
                            name="username"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                          />
                          <ErrorMessage name="username">
                            {(errMsg) => (
                              <div className="text-danger">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>

                        <div className="form-outline mb-4">
                          <FormInput
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                          />
                          <ErrorMessage name="email">
                            {(errMsg) => (
                              <div className="text-danger">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>

                        <div className="form-outline mb-4">
                          <FormInput
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Password"
                          />
                          <ErrorMessage name="password">
                            {(errMsg) => (
                              <div className="text-danger">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>

                        <div className="pt-1 mb-4">
                          <FormButton
                            type="submit"
                            className="btn btn-dark btn-lg btn-block"
                          >
                            Login
                          </FormButton>
                        </div>

                        <FormText className="small text-muted" href="#!">
                          Forgot password?
                        </FormText>
                        <p
                          className="mt-3 pb-lg-2"
                        >
                          Don't have an account?{" "}
                          <br />
                          <Link to="/signup" style={{ color: "#76885B", fontWeight: "bold" }}>
                            Sign Up
                          </Link>
                        </p>
                        <FormText href="#!" className="small text-muted">
                          Terms of use
                        </FormText>
                        <FormText href="#!" className="small text-muted">
                          Privacy policy
                        </FormText>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </LoginForm>
            </div>
          </div>
        </div>
      </BackgroundLogin>
    </Fragment>
  );
};

export default Login;
