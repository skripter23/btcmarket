import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage";
import "./Styles/global/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
