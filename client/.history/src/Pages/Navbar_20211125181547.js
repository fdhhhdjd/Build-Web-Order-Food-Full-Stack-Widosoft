import React, { useState } from "react";
import { HeaderNavbar } from "../Styles/StylePages/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const location = useLocation();
  const handleNative = () => {
    setNative(!native);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/checkout") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
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
            <Link to="/" className="a ">
              home
            </Link>
            <Link to="/checkout" className="a active1">
              Checkout
            </Link>
            <Link to="/product" className="a">
              Product
            </Link>
            <Link to="/payment" className="a">
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
