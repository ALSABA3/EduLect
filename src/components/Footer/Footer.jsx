import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer py-3 border-top">
      <div className="container d-flex flex-column flex-wrap justify-content-around align-items-center">
        <div className="m-3">
          <ul class="nav align-items-center justify-content-end">
            <li class="nav-item m-1">
              <a href="#">
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  width="30"
                  height="30"
                  className="foot-img"
                />
              </a>
            </li>
            <li class="nav-item m-1">
              <a href="#">
                <img
                  src="/instagram.png"
                  alt="Twitter"
                  width="30"
                  height="30"
                  className="foot-img"
                />
              </a>
            </li>
            <li class="nav-item m-1">
              <a href="#">
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  width="30"
                  height="30"
                  className="foot-img"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-body-primary">
            © 2023 EduLect ,Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
