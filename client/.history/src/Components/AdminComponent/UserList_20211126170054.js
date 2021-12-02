import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBarStyle } from "../../Styles/StylePages/Admin/TopBarStyle";

const UserList = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBarStyle />
      <div className="container">
        <SidebarAdmins />
        <HomeAdmin />
      </div>
    </>
  );
};

export default UserList;
