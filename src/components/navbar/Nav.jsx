import React from "react";
import Footer from "../footer/Footer.js";
// import { Link } from "react-router-dom";

import SearchBar from "../searchBar/SearchBar.jsx";
import "./Nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <span>Weather App</span>
        <SearchBar onSearch={onSearch} />

      </div>
      <div>
        <Footer />
      </div>
    </nav>
  );
}
