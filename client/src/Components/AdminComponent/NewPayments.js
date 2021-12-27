import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, NewPayment } from "../../Imports/Index";

const NewPayments = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <NewPayment />
      </div>
    </>
  );
};

export default NewPayments;
