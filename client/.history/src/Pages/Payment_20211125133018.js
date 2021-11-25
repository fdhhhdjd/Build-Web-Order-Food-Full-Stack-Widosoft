import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, PaymentItem } from "../Imports/Index";
const Payment = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <PaymentItem />
      <Footer />
    </>
  );
};

export default Payment;
