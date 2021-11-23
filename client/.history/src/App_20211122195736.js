import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, NotFound } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home name="nam la sieu nhan" />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Home name="fb" />
      <Home name="email" />
      <Home name="ticktock" />
    </>
  );
}

export default App;
