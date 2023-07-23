import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  const targetDate = "2023-09-16T00:00:00";
  return (
    <>
      <NavBar />
      <Landing />
      <ComingSoon targetDate={targetDate} />
      <Footer />
    </>
  );
}

export default App;
