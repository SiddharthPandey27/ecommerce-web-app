import React from "react";

import SignInComponent from "../../components/signInComponent/signInComponent";
import SignUpComponent from "../../components/signUpComponent/signUpComponent";

import "./styles.scss";

const SignIn = () => {
  return (
    <div className="sign-in-sign-up-container">
      <div className="sign-in-box">
        <h2>Get me back to my Profile.</h2>
        <p>Sign In with email and password or with Google Account.</p>
        <SignInComponent />
      </div>
      <div className="sign-up-box">
        <h2>Welcome to BuyBuy. Create my profile!</h2>
        <p>Sign Up by providing the details below.</p>
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignIn;
