import React from "react";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
import { SidebarAdmins, UserList } from "../Imports/Index";
import { TopBarStyle } from "../Styles/StylePages/Admin/TopBarStyle";

const UserLists = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBarStyle />
      <div className="container">
        <SidebarAdmins />
        <UserList />
      </div>
    </>
  );
};

export default UserLists;
