import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar, HomeAdmin, SidebarAdmins } from "../Imports/Index";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
const Admin = () => {
  return (
    <>
      <GlobalStyleAmin />

      <div className="container">
        <TopBar />
        <SidebarAdmins />
        <HomeAdmin />
      </div>
    </>
  );
};

export default Admin;
