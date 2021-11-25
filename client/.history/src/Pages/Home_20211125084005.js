import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import {
  Specialty,
  Content,
  Popular,
  Navbar,
  StepContainer,
  Gallery,
  Footer,
  ScrollTop,
} from "../Imports/Index";
const Home = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <Content />
      <Specialty />
      <Popular />
      <StepContainer />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
