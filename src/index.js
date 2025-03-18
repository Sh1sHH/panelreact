import React from "react";
import ReactDOM from "react-dom/client"; // Değiştirildi
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// React 18 için root oluşturuluyor
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
