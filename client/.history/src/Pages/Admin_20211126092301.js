import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../Imports/Index";
const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <Outlet />
    </>
  );
};

export default Admin;
