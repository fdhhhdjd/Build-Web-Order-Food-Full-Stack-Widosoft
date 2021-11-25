import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Footer, Navbar } from "../Imports/Index";
import { Review, FormFeedback, ScrollTop } from "../Imports/Index";
const FeedBack = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <Review />
      <FormFeedback />
      <Footer />
    </>
  );
};

export default FeedBack;
