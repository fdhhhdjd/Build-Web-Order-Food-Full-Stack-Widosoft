import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, PaymentItem } from "../Imports/Index";
const CheckOut = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <PaymentItem />
      <Footer />
    </>
  );
};

export default CheckOut;
