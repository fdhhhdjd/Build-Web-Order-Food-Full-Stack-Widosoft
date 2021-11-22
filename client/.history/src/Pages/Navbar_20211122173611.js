import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
const Navbar = () => {
  return (
    <>
      <HeaderNavbar>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>food Pizza
        </a>
        <div id="menu-bar" className="fas fa-bars "></div>
        <nav className="navbar">
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
