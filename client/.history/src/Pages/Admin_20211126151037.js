import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar, HomeAdmin, SidebarAdmins } from "../Imports/Index";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
const Admin = () => {
  return (
    <>
      <TopBar />
      <div className="container">
        <GlobalStyleAmin />
        <SidebarAdmins />
        <HomeAdmin />
      </div>
    </>
  );
};

export default Admin;
