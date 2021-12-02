import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar } from "../../Imports/Index";
const Users = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <User />
      </div>
    </>
  );
};

export default Users;
