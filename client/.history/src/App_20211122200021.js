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
      <Home
        link="https://www.facebook.com/profile.php?id=100006139249437"
        name="tai"
      />
      <Home link="https://www.facebook.com/nam.thaihoang.370" name="name" />
    </>
  );
}

export default App;
