import React from "react";
import { FeaturedInfos } from "../../Imports/Index";
import { HomeAdmins } from "../../Styles/StylePages/Admin/HomeAdmin";
const HomeAdmin = () => {
  return (
    <>
      <HomeAdmins>
        <div className="home">
          <FeaturedInfos />
          <div className="homeWidgets"></div>
        </div>
      </HomeAdmins>
    </>
  );
};

export default HomeAdmin;
