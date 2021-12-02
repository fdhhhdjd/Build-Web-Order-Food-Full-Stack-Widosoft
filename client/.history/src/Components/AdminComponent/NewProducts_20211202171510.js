import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, NewProduct } from "../../Imports/Index";

const NewProducts = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <NewProduct />
      </div>
    </>
  );
};

export default NewProducts;
