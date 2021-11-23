import React, { useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const handleNative = () => {
    setNative(!native);
  };
  return (
    <>
      <HeaderNavbar>
        <header>
          <Link to="/">
            <div className="logo">
              <i className="fas fa-utensils"></i>food Pizza
            </div>
          </Link>

          <div
            id="menu-bar"
            className="fas fa-bars "
            onClick={handleNative}
          ></div>
          <nav className={`navbar ${native ? "active" : ""}`}>
            <a href="#">home</a>
            <a href="#">speciality</a>
            <a href="#">popular</a>
            <a href="#">gallery</a>
            <a href="#">review</a>

            <a href="#">
              <Link to="/feedback">Feedback </Link>
            </a>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
