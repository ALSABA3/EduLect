import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "./Landing/Landing";
import ComingSoon from "./ComingSoon/ComingSoon";
import Study from "./Study/Study";
import Smart from "./Smart/Smart";
import Team from "./Team/Team";
import Why from "./Why/Why";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const targetDate = "2023-09-16T00:00:00";
  return (
    <>
      <>
        <Landing />
        <ComingSoon targetDate={targetDate} />
        <Study />
        <Smart />
        <Team />
        <Why />
        <Footer />
      </>
    </>
  );
};

export default Home;
