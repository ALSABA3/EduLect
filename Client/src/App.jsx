import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "./components/useAuth";

// import NavBar from "./components/NavBar/NavBar";
import NavbarLoggedIn from "./components/NavBar/NavbarLoggedIn";
import NavbarLoggedOut from "./components/NavBar/NavbarLoggedOut";

import Home from "./pages/1.Home/Home";
import Courses from "./pages/2.Courses/Courses";
import SignUp from "./pages/3.Signup/Signup";
import Signin from "./pages/4.Signin/Signin";
import Course from "./pages/2.Courses/Course";

function App() {
  const { isLoggedIn, accessToken, login, logout } = useAuth();
  return (
    <>
      <Router>
        {isLoggedIn ? <NavbarLoggedIn logout={logout} /> : <NavbarLoggedOut />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/departments" element={<Courses />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Signin" element={<Signin login={login} />} />
          <Route path="/departments/:course_name" element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
