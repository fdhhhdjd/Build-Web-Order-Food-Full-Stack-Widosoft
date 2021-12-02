import React from "react";
import { Outlet } from "react-router-dom";
const AdminHome = () => {
  return (
    <>
      <h1>Admin Home</h1>
      <Outlet />
    </>
  );
};

export default AdminHome;
