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
            <a href="#" className="logo">
              <i className="fas fa-utensils"></i>food Pizza
            </a>
          </Link>

          <div
            id="menu-bar"
            className="fas fa-bars "
            onClick={handleNative}
          ></div>
          <nav className={`navbar ${native ? "active" : ""}`}>
            <a href="#home">home</a>
            <a href="#speciality">speciality</a>
            <a href="#popular">popular</a>
            <a href="#gallery">gallery</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
