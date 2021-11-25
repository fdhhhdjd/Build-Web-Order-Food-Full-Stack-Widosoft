import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/StylePages/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const handleNative = () => {
    setNative(!native);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/checkout") {
      setActiveTab("Checkout");
    } else if (location.pathname === "/product") {
      setActiveTab("Product");
    } else if (location.pathname === "/payment") {
      setActiveTab("Payment");
    } else if (location.pathname === "/feedback") {
      setActiveTab("Feedback");
    } else if (location.pathname === "/login") {
      setActiveTab("Login");
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
            <Link
              to="/"
              className={` a ${activeTab === "Home" ? " active1" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>
            <Link
              to="/checkout"
              className={` a ${activeTab === "Checkout" ? " active1" : ""}`}
              onClick={() => setActiveTab("Checkout")}
            >
              Checkout
            </Link>
            <Link
              to="/product"
              className="a"
              className={` a ${activeTab === "Product" ? " active1" : ""}`}
              onClick={() => setActiveTab("Product")}
            >
              Product
            </Link>
            <Link
              to="/payment"
              className="a"
              className={` a ${activeTab === "Payment" ? " active1" : ""}`}
              onClick={() => setActiveTab("Payment")}
            >
              Payment
            </Link>
            <Link
              to="/feedback"
              className="a"
              className={` a ${activeTab === "Feedback" ? " active1" : ""}`}
              onClick={() => setActiveTab("Feedback")}
            >
              Feedback
            </Link>
            <Link
              to="/Login"
              className={` a ${activeTab === " Login" ? " active1" : ""}`}
              onClick={() => setActiveTab("Login")}
            >
              Login
            </Link>
            <span className="a">
              <FaShoppingCart />
              &nbsp;&nbsp;
              <span class="badge badge-warning" id="lblCartCount">
                {" "}
                5{" "}
              </span>
            </span>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
