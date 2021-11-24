import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Footer, Navbar } from "../Imports/Index";
import { Review } from "../Imports/Index";
const FeedBack = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Review />
      <Footer />
    </>
  );
};

export default FeedBack;
