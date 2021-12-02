import React from "react";
import { FeaturedInfos, Chart } from "../../Imports/Index";
import { HomeAdmins } from "../../Styles/StylePages/Admin/HomeAdmin";
const HomeAdmin = () => {
  return (
    <>
      <HomeAdmins>
        <div className="home">
          <FeaturedInfos />
          <Chart />
          <div className="homeWidgets"></div>
        </div>
      </HomeAdmins>
    </>
  );
};

export default HomeAdmin;
