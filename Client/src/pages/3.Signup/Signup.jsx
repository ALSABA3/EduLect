import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
// import FacebookButton from "../../components/FacebookButton";

const Signup = () => {
  const [formData, setFormData] = useState({
    user_fname: "",
    user_lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      console.log("Signup successful!");
    } catch (error) {
      console.error(
        "Error:",
        error.response?.data?.error || "An error occurred"
      );
    }
  };

  // const handleFacebookLoginSuccess = (response) => {
  //   console.log("Facebook login success!", response);
  //   // Handle the successful login (e.g., send the data to your backend for authentication)
  // };

  // const handleFacebookLoginFailure = () => {
  //   console.log("Facebook login failed.");
  //   // Handle the login failure if needed
  // };

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
            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

            <div className="form-floating">
              <input
                type="text"
                name="user_fname"
                value={formData.user_fname}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="form-control"
              />
              <label htmlFor="user_fname">First Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="user_lname"
                value={formData.user_lname}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="form-control"
              />
              <label htmlFor="user_lname">Last Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign Up
            </button>

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

export default Signup;
