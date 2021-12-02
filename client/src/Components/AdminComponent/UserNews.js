import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, UserNew } from "../../Imports/Index";

const UserNews = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <UserNew />
      </div>
    </>
  );
};

export default UserNews;
