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
            <a href="#" onclick="return false;">
              home
            </a>
            <a href="#" onclick="return false;">
              speciality
            </a>
            <a href="#" onclick="return false;">
              popular
            </a>
            <a href="#" onclick="return false;">
              gallery
            </a>
            <a href="#" onclick="return false;">
              review
            </a>
            <Link to="/feedback">
              <a href="#" onclick="return false;">
                Feedback
              </a>
            </Link>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
