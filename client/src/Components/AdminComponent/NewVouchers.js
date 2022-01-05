import React from "react";
import { TopBar, SidebarAdmins, NewVoucher } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const Bills = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <NewVoucher />
      </div>
    </>
  );
};

export default Bills;
