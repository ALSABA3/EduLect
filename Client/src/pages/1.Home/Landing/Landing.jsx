import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="" id="landing">
      <div className="container h-100 d-flex align-content-center justify-content-center px-4 py-5">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center g-5 py-5">
          <div className=" d-flex justify-content-center px-5">
            <img
              src="/black-bg-logo.png"
              className="landing-img d-block mx-lg-auto img-fluid breathing-div"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="slideRight px-5">
            <h1 className="about-title display-5 fw-bold lh-1 m-4">
              BE UNIQUE WITH US
            </h1>
            <p className="about-content lead">
              EduLect is the first platform in Turkiye to explain Undergraduate
              subjects in arabic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
