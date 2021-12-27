import React from "react";
import { TopBar, SidebarAdmins, Payment } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const ProfileAdmin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Payment />
      </div>
    </>
  );
};

export default ProfileAdmin;
