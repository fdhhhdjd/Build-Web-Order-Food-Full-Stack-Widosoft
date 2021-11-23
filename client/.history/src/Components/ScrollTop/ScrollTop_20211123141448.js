import React from "react";
import styled from "styled-components";
const ScrollTop = () => {
  const [Scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 60) {
      setScroll(true);
    } else if (scroll < 60) {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <>
      <ScrollTops>
        <a
          href="#home"
          className="fas fa-angle-up  scroll-top"
          id="scroll-top"
        ></a>
      </ScrollTops>
    </>
  );
};

export default ScrollTop;
const ScrollTops = styled.a`
  .scroll-top {
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
  }

  .active {
    top: calc(100% - 12rem);
  }
`;
