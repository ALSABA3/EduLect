import React from "react";
import "./Study.css";

const Study = () => {
  return (
    <section className="" id="study">
      <div class="container h-100 d-flex align-content-center justify-content-center px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-5">
            <div class="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
              <img src="/z.png" className="study-img" />
            </div>
            <div class="col-lg-6">
              <div className="d-flex flex-column align-items-center justify-content-center p-5">
                <h1 class="study-title display-5 fw-bold lh-1 my-2">
                  Study <span style={{ color: "#8F75E6" }}>24/7</span> with us
                </h1>
                <p class="study-content lead my-2">
                  With the distinctive explanation. With a team of Outstanding
                  students. Distinguish yourself with us
                </p>
                <button
                  class="study-btn btn btn-light btn-lg my-4"
                  type="button"
                  onClick={() => {
                    location.href = "#coming-soon";
                  }}
                >
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
