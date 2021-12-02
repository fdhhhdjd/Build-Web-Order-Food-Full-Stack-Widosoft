import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmin } from "../../Imports/Index";
const ProductsAdmin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        {/* <UserList /> */}
      </div>
    </>
  );
};

export default ProductsAdmin;
