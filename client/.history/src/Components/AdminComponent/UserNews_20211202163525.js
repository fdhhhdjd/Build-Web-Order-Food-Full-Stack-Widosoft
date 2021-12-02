import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar } from "../../Imports/Index";

const UserNews = () => {
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

export default UserNews;
