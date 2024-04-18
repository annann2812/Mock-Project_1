import React, { Fragment } from "react";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginWithGG = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <GoogleOAuthProvider clientId="846149742047-ejle7gbl04nb33s2kfb97p6om7oibfto.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse: CredentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            window.sessionStorage.setItem("usernameGG", decoded.name);
            navigate("/");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </Fragment>
  );
};

export default LoginWithGG;
