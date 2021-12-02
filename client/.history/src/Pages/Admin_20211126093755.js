import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../Imports/Index";
import GlobalStyleAmin from "../GlobalStyleAmin";
const Admin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
    </>
  );
};

export default Admin;
