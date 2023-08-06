import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });
      console.log("Response from server:", response.data);
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
              Sign In
            </button>
            <p>
              don't have an account? <a href="/signup">register</a>
            </p>
            {/* <FacebookButton
    onLoginSuccess={handleFacebookLoginSuccess}
    onLoginFailure={handleFacebookLoginFailure}
  /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
