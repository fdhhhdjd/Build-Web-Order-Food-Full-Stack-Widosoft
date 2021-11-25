import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, CheckOutItem } from "../Imports/Index";
const CheckOut = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <CheckOutItem />
      <Footer />
    </>
  );
};

export default CheckOut;
