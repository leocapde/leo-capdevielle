import React from "react";
import ReactDOM from "react-dom/client";
import "./base.css";
import App from "./pages/app";
import Header from "./components/header";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
