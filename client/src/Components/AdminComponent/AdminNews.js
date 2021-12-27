import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, AdminNew } from "../../Imports/Index";
const UserNews = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <AdminNew />
      </div>
    </>
  );
};

export default UserNews;
