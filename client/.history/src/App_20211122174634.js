import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <Routes>
        <GlobalStyle />
        <Navbar />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
