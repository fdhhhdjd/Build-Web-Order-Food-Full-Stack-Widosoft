import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, Category, SidebarAdmins } from "../../Imports/Index";
const ProductIds = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Category />
      </div>
    </>
  );
};

export default ProductIds;
