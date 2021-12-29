import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, NewBill } from "../../Imports/Index";

const NewBills = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <NewBill />
      </div>
    </>
  );
};

export default NewBills;
