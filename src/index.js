import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

reportWebVitals();
