import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, CheckoutItem } from "../Imports/Index";
const CheckOut = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <CheckoutItem />
      {/* <Footer /> */}
    </>
  );
};

export default CheckOut;
