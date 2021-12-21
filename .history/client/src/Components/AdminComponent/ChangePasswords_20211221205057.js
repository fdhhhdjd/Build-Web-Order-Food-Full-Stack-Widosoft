import React from "react";
import {
  TopBar,
  HomeAdmin,
  SidebarAdmins,
  ChangePassword,
} from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const ChangePasswords = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <ChangePassword />
      </div>
    </>
  );
};

export default ChangePasswords;
