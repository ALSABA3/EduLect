import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <section className="" id="why">
      <div class="container h-100 d-flex align-content-center justify-content-center px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-5">
            <div class="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
              <img src="/zzz.png" className="why-img" />
            </div>
            <div class="col-lg-6">
              <div className="d-flex flex-column align-items-center justify-content-center p-5">
                <h1 class="why-title display-5 fw-bold lh-1 my-2">
                  <span style={{ color: "#8F75E6" }}>WHY</span> US ?
                </h1>
                <ul class="why-list my-4">
                  <li>
                    <p class="why-content lead my-2">
                      The first platform in turkiye to explain university majors
                      from student to student.
                    </p>
                  </li>
                  <li>
                    <p class="why-content lead my-2">
                      Discussion community to enhance your learning experience
                      with rating/points system to get cashbacks or discounts.
                    </p>
                  </li>
                  <li>
                    <p class="why-content lead my-2">
                      Students summaries to the students themselves.
                    </p>
                  </li>
                  <li>
                    <p class="why-content lead my-2">
                      Challenging questions with points system
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
