import React, { useState } from "react";
import { HeaderNavbar } from "../Styles/StylePages/Navbar";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
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

          <div id="menu-bar" onClick={handleNative}>
            <FaPizzaSlice />
          </div>
          <nav className={`navbar ${native ? "active" : ""}`}>
            <Link to="/" className="a">
              home
            </Link>
            <Link to="/speciality" className="a">
              speciality
            </Link>
            <Link to="/product" className="a">
              Product
            </Link>
            <Link to="/checkout" className="a">
              payment
            </Link>
            <Link to="/feedback" className="a">
              Feedback
            </Link>
            <Link to="/Login" className="a">
              Login
            </Link>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
