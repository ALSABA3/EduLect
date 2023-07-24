import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="" id="landing">
      <div class="container h-100 d-flex align-content-center justify-content-center col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="my-border d-flex flex-column flex-lg-row-reverse align-items-center justify-content-center p-5">
            <div class="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
              <img
                src="/black-bg-logo.png"
                class="laning-img d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="about-title display-5 fw-bold lh-1 m-4">
                Be unique with us
              </h1>
              <p class="about-content lead">
                EduLect is the first platform in Türkiye to explain
                Undergraduate subjects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
