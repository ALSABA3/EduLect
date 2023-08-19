import React, { useState } from "react";
import axios from "axios";

const Signin = ({ setIsLoggedIn, setProfilePhoto }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (response.data.message === "Signin successful") {
        setIsLoggedIn(true);
        setProfilePhoto(response.data.user[0].profile_photo);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/google", {
        mode: "no-cors",
      });
      console.log(response.data.message);
      setProfilePhoto(response.data.user[0].profile_photo);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/api/facebook");
      console.log(response.data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit}>
            <img
              src="/black-bg-logo.png"
              alt="logo"
              width="112"
              height="100"
              className="mb-4"
            />
            <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
                className="form-control"
              />
              <label htmlFor="uemail">Email Address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Login
            </button>
            <div className="d-flex">
              <a className="col-6" role="button" onClick={handleGoogleLogin}>
                Continue with Google
              </a>
              <a className="col-6" role="button" onClick={handleFacebookLogin}>
                Continue with Facebook
              </a>
            </div>
            <p>
              don't have an account? <a href="/signup">register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
