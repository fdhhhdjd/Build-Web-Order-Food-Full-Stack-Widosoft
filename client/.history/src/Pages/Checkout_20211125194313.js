import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, CheckoutItem, ScrollTop } from "../Imports/Index";
const CheckOut = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <CheckoutItem />
      <Footer />
    </>
  );
};

export default CheckOut;
