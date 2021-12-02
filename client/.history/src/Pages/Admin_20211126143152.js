import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar, HomeAdmin, SidebarAdmins } from "../Imports/Index";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
const Admin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <HomeAdmin />
      <SidebarAdmins />
    </>
  );
};

export default Admin;
