import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, NotFound, Footer } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
import Swiper from "swiper";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
