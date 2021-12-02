import React from "react";
import { ProductId } from "../../Imports/Index";
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
