import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Imports/Index";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      {/* <Routes> */}
      <GlobalStyle />
      <Navbar />
      {/* </Routes> */}
    </>
  );
}

export default App;
