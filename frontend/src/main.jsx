import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css"
import "./styles/global.css";

const $root = document.querySelector("#root");

const reactRoot = ReactDOM.createRoot($root);

reactRoot.render(<App />);
