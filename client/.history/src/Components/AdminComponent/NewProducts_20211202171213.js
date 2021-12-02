import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar } from "../../Imports/Index";

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
