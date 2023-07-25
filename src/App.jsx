import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Study from "./components/Study/Study";
import Team from "./components/Team/Team";
import Smart from "./components/Smart/Smart";

function App() {
  const targetDate = "2023-09-16T00:00:00";
  return (
    <>
      <NavBar />
      <Landing />
      <ComingSoon targetDate={targetDate} />
      <Smart />
      <Study />
      <Team />
      <Footer />
    </>
  );
}

export default App;
