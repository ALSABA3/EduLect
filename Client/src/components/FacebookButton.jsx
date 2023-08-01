import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookButton = ({ onLoginSuccess, onLoginFailure }) => {
  const handleFacebookResponse = (response) => {
    if (response.status !== "unknown") {
      onLoginSuccess(response);
    } else {
      onLoginFailure();
    }
  };

  return (
    <FacebookLogin
      appId="965971734680671"
      fields="name,email,picture"
      callback={handleFacebookResponse}
      cssClass="facebook-button"
      textButton="Continue with Facebook"
    />
  );
};

export default FacebookButton;
