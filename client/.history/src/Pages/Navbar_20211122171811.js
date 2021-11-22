import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleToggleNavbar = () => {
    setNav(!Nav);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleToggleNavbar);
    return () => {
      window.removeEventListener("scroll", handleToggleNavbar);
    };
  });
  return (
    <>
      <HeaderNavbar>
        <a href="#" class="logo">
          <i class="fas fa-utensils"></i>food Pizza
        </a>
        <div id="menu-bar" class="fas fa-bars "></div>
        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#speciality">speciality</a>
          <a href="#popular">popular</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
