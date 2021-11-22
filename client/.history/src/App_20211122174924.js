import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      {" "}
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
