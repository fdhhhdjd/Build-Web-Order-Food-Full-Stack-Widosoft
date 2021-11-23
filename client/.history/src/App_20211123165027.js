import React, { useEffect, useState, lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
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
        <GlobalStyle />
        <Navbar />
        <ScrollTop />
        <Routes>
          <Suspense fallback={<Loading />}>
            <Route path="/" element={<Home />} />
          </Suspense>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
