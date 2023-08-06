import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark"
      aria-label="navbar"
    >
      <div className="container">
        <div className="col d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <p className="mb-3" style={{ fontFamily: "DAMENTIONDEMOREGULAR" }}>
              EDULECT
            </p>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto col align-items-center justify-content-end">
            <li className="nav-item m-1">
              <a className="nav-link fs-5" aria-current="page" href="/courses">
                Courses
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="cart nav-link" href="/cart">
                <img
                  src="/cart.png"
                  alt="enter"
                  width="26"
                  height="26"
                  className="cart-icon"
                />
              </a>
            </li>
            <li className="nav-item m-1">
              <a
                type="button"
                className="enter btn btn-outline-light"
                href="/signin"
              >
                <span>join</span>
                <img
                  src="/enter.png"
                  alt="enter"
                  width="24"
                  height="24"
                  className="ms-2"
                />
              </a>
            </li>
            <li className="nav-item m-1 dropdown d-flex flex-column flex-wrap align-content-center justify-content-center">
              <a
                className="nav-link dropdown-toggle text-center"
                href="#coming-soon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  viewBox="0 0 24 24"
                  id="language"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                </svg>
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#coming-soon">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#coming-soon">
                    Arabic
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
