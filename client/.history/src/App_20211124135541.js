import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Loading } from "./Imports/Index";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { Home, FeedBack, ProductDetails } from "./Imports/LazyRouter";
function App() {
  return (
    <>
      <ScrollTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
