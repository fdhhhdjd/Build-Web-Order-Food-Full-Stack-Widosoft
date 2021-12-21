import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, ManagerAmin } from "../../Imports/Index";
const ManagerAmins = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <ManagerAmin />
      </div>
    </>
  );
};

export default ManagerAmins;
