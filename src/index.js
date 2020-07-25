import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "https://210.179.121.232:80";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
