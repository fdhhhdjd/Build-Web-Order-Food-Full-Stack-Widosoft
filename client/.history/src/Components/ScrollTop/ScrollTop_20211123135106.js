import React, { useEffect } from "react";
import { ScrollTops } from "../../Styles/ScrollTops";
const ScrollTop = () => {
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
      <ScrollTops>
        <a href="#home" class="fas fa-angle-up" id="scroll-top"></a>
      </ScrollTops>
    </>
  );
};

export default ScrollTop;
