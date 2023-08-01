import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/1.Home/Home";
import Courses from "./pages/2.Courses/Courses";
import SignUp from "./pages/3.Signup/Signup";
import Signin from "./pages/4.Signin/Signin";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
