import React from "react";
import { GlobalStyleAmin } from "../GlobalStyleAmin";
import { SidebarAdmins } from "../Imports/Index";
import { TopBarStyle } from "../Styles/StylePages/Admin/TopBarStyle";

const UserLists = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBarStyle />
      <div className="container">
        <SidebarAdmins />
      </div>
    </>
  );
};

export default UserLists;
