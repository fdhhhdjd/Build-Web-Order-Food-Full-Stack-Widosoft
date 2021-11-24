import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, ProductDetail } from "../Imports/Index";
const ProductDetails = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetails;
