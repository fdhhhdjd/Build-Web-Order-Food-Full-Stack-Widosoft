import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, NotFound, Footer } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
