import React from "react";
import { ScrollTops } from "../../Styles/ScrollTops";
const ScrollTop = () => {
  return (
    <>
      <ScrollTops>
        <a href="#home" className="fas fa-angle-up" id="scroll-top active"></a>
      </ScrollTops>
    </>
  );
};

export default ScrollTop;
