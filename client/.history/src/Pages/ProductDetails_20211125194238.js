import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, ProductDetail, ScrollTop } from "../Imports/Index";
const ProductDetails = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetails;
