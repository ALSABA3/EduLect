import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css";

import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
