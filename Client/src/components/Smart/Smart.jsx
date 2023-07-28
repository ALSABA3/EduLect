import React from "react";
import "./Smart.css";

const Smart = () => {
  return (
    <section className="" id="Smart">
      <div class="container h-100 d-flex align-content-center justify-content-center col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="d-flex flex-column flex-lg-row-reverse align-items-center justify-content-center p-5">
            <div class="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
              <img src="/zz.png" className="smart-img" />
            </div>
            <div class="col-lg-6">
              <div className="d-flex flex-column align-items-center justify-content-center p-5">
                <h1 class="smart-title display-5 fw-bold lh-1 my-2">
                  Study <span style={{ color: "#8F75E6" }}>smarter</span>
                </h1>
                <p class="smart-content lead my-2">
                  Enjoy our many features such as quizzes, assignments or
                  discussion community to enhance your learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smart;
