import React, { useEffect, useState, lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Navbar, NotFound, Footer, Loading } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Imports/Index")), 1000);
  });
});
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <GlobalStyle />
          <Navbar />
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
