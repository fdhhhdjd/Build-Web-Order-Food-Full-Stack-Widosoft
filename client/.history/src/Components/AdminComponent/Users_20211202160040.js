import React from "react";

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
