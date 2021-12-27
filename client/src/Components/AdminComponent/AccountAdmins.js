import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { SidebarAdmins, TopBar, AccountAdmin } from "../../Imports/Index";

const AccountAdmins = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <AccountAdmin />
      </div>
    </>
  );
};

export default AccountAdmins;
