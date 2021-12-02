import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar, HomeAdmin } from "../Imports/Index";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
const Admin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <HomeAdmin />
    </>
  );
};

export default Admin;
