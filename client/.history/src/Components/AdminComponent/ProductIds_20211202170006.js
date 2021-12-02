import React from "react";
import { ProductId } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, ProductId, SidebarAdmins } from "../../Imports/Index";
const ProductIds = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <ProductId />
      </div>
    </>
  );
};

export default ProductIds;
