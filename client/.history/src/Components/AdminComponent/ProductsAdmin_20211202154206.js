import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, Products } from "../../Imports/Index";
const ProductsAdmin = () => {
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

export default ProductsAdmin;
