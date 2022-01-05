import React from "react";
import { TopBar, SidebarAdmins, Voucher } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const Vouchers = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Voucher />
      </div>
    </>
  );
};

export default Vouchers;
