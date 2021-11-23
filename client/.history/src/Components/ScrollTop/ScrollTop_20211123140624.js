import React from "react";
// import { ScrollTops } from "../../Styles/ScrollTops";
import styled from "styled-components";
// import "./a.css";
const ScrollTop = () => {
  return (
    <>
      {/* <ScrollTops> */}
        <ScrollTops href="#home" className="fas fa-angle-up active" id="scroll-top"></ScrollTops>
    </>
  );
};

export default ScrollTop;
 const ScrollTops = styled.a`
  position: fixed;
  top: -120%;
  right: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 4rem;
  background: #ff3838;
  color: #fff;
  border-radius: 0.5rem;
  transition: 1s linear;
  z-index: 1000;

  .active {
    top: calc(100% - 12rem);
  }
`;
