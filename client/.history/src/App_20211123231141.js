import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Footer, Loading } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { Home } from "./Imports/LazyRouter";
function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
