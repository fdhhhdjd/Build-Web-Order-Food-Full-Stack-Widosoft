import React from "react";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
import { SidebarAdmins, TopBar, UserList } from "../Imports/Index";

const UserLists = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <UserList />
      </div>
    </>
  );
};

export default UserLists;
