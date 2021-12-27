import React from "react";
import { TopBar, SidebarAdmins, InfoApp } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const InfoApps = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <InfoApp />
      </div>
    </>
  );
};

export default InfoApps;
