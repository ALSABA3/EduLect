import React, { useState, useEffect } from "react";
import "./Courses.css";

const Courses = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="courses">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="department-cards">
              {departments.map((department, index) => (
                <a href="#">
                  <div
                    key={index}
                    className="department-card d-flex align-items-center flex-column"
                  >
                    <h2>{department.department}</h2>
                    <img src="/black-bg-logo.png" />
                    {/* You can add more information or styling here */}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
