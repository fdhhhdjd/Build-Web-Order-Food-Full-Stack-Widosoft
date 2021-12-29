import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, EditBill } from "../../Imports/Index";

const NewBills = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <EditBill />
      </div>
    </>
  );
};

export default NewBills;
