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
            <div className="a">home</div>
            <div className="a">speciality</div>
            <div className="a">popular</div>
            <div className="a">gallery</div>
            <div className="a">review</div>
            <Link to="/" className="a">
              Feedback
            </Link>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
