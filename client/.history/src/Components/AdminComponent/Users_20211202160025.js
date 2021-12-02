import React from "react";

const Users = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Products />
      </div>
    </>
  );
};

export default Users;
