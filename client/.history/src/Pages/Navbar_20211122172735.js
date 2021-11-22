import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
const Navbar = () => {
  let menu = document.querySelector("#menu-bar");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  };
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
