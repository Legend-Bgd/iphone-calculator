import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/index.js";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); // Render your app
