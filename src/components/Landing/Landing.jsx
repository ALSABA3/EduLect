import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="" id="landing">
      <div class="container h-100 d-flex flex-column align-items-center justify-content-center px-4 pt-5  text-center">
        <h1 class="about-title fw-bold mb-4 ">About Us</h1>
        <div class="mx-auto">
          <p
            class="about-content lead mb-4 fs-4"
            style={{ fontFamily: "seguibl" }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer posuere erat a ante.lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-light btn-lg px-4 me-sm-3">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
