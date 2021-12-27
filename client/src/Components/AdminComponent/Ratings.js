import React from "react";
import { TopBar, SidebarAdmins, Rating } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const ProfileAdmin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Rating />
      </div>
    </>
  );
};

export default ProfileAdmin;
