import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <a href="#" class="logo">
          <i class="fas fa-utensils"></i>food
        </a>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#speciality">speciality</a>
          <a href="#popular">popular</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
