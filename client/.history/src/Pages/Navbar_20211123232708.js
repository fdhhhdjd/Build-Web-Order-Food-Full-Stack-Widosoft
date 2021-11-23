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
            <a href="#" onClick="return false;">
              home
            </a>
            <a href="#" onClick="return false;">
              speciality
            </a>
            <a href="#" onClick="return false;">
              popular
            </a>
            <a href="#" onClick="return false;">
              gallery
            </a>
            <a href="#" onClick="return false;">
              review
            </a>
            <Link to="/feedback">
              <a href="#" onClick="return false;">
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
