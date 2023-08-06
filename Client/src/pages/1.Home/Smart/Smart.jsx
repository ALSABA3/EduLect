import React from "react";
import "./Smart.css";

const Smart = () => {
  return (
    <section className="" id="Smart">
      <div className="container h-100 d-flex align-content-center justify-content-center px-4 py-5">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center g-5 py-5">
          <div className=" d-flex justify-content-center px-5">
            <img src="/zz.png" className="smart-img" />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center px-5">
            <h1 className="smart-title display-5 fw-bold lh-1 my-3">
              Study <span style={{ color: "#8F75E6" }}>smarter</span>
            </h1>
            <p className="smart-content lead my-2">
              Enjoy our many features such as quizzes, assignments or discussion
              community to enhance your learning experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smart;
