import React from "react";
import { Route } from "react-router-dom";
import { TopBar } from "../Imports/Index";
const Admin = () => {
  return (
    <>
      <Route path="/a" element={<TopBar />} />
      <h1>Admin</h1>
    </>
  );
};

export default Admin;
