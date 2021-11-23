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
            <div href="#home">home</div>
            <div href="#speciality">speciality</div>
            <div href="#popular">popular</div>
            <div href="#gallery">gallery</div>
            <div href="#review">review</div>
            <div href="">Feedback</div>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
