import React from "react";
import {
  TopBar,
  HomeAdmin,
  SidebarAdmins,
  ProfileAdmins,
} from "../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyle";
const ProfileAdmin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <ProfileAdmins />
      </div>
    </>
  );
};

export default ProfileAdmin;
