import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer } from "../";
const CheckOut = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <CheckoutItem />
      <Footer />
    </>
  );
};

export default CheckOut;
