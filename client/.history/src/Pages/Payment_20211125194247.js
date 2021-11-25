import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, PaymentItem, ScrollTop } from "../Imports/Index";
const Payment = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <PaymentItem />
      <Footer />
    </>
  );
};

export default Payment;
