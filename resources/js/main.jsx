import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../css/app.css";
import './bootstrap.js';

createRoot(document.getElementById("app")).render(<App />);
