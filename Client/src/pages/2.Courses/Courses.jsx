import React, { useState, useEffect } from "react";
import "./Courses.css";

const Courses = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fetchCoursesForDepartment = (departmentName) => {
    fetch(
      `http://localhost:5000/api/courses/${encodeURIComponent(departmentName)}`
    )
      .then((response) => response.json())
      .then((data) => setDepartmentCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    fetchCoursesForDepartment(department.department);
  };

  const handleBackToDepartments = () => {
    setSelectedDepartment(null);
    setDepartmentCourses([]);
  };

  return (
    <>
      <section className="courses">
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            {selectedDepartment ? (
              <>
                <h3 style={{ color: "white" }}>
                  Courses From {selectedDepartment?.department}
                </h3>
                <div className="course-list">
                  {departmentCourses.map((course, index) => (
                    <a key={index} className="department-card">
                      <div className="d-flex align-items-center flex-column">
                        <h2>{course.course_name}</h2>
                        <img
                          src="/black-bg-logo.png"
                          alt={`Logo for ${course.course_name}`}
                        />
                      </div>
                    </a>
                  ))}
                </div>
                <button
                  className="btn btn-outline-light py-2"
                  type="submit"
                  onClick={handleBackToDepartments}
                >
                  Back to Departments
                </button>
              </>
            ) : (
              <div className="department-cards">
                {departments.map((department, index) => (
                  <a
                    key={index}
                    className="department-card"
                    onClick={() => handleDepartmentClick(department)}
                  >
                    <div className="d-flex align-items-center flex-column">
                      <h2>{department.department}</h2>
                      <img
                        src="/black-bg-logo.png"
                        alt={`Logo for ${department.department}`}
                      />
                      {/* You can add more information or styling here */}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
