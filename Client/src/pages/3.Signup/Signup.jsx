import React, { useState } from "react";
import axios from "axios";
import FacebookButton from "../../components/FacebookButton";

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
      // Perform any necessary actions after successful signup (e.g., redirect, show success message)
    } catch (error) {
      console.error(
        "Error:",
        error.response?.data?.error || "An error occurred"
      );
      // Handle signup error (e.g., show error message)
    }
  };

  const handleFacebookLoginSuccess = (response) => {
    console.log("Facebook login success!", response);
    // Handle the successful login (e.g., send the data to your backend for authentication)
  };

  const handleFacebookLoginFailure = () => {
    console.log("Facebook login failed.");
    // Handle the login failure if needed
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <input
        type="text"
        name="user_fname"
        value={formData.user_fname}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="user_lname"
        value={formData.user_lname}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      <FacebookButton
        onLoginSuccess={handleFacebookLoginSuccess}
        onLoginFailure={handleFacebookLoginFailure}
      />
    </form>
  );
};

export default Signup;
