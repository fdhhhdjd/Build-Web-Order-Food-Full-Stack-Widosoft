import React from "react";

const NewProducts = () => {
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

export default NewProducts;
