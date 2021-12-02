import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { FeaturedInfos, Chart } from "../../Imports/Index";
import { HomeAdmins } from "../../Styles/StylePages/Admin/HomeAdmin";
import { userData } from "../../utils/DataChart";
const HomeAdmin = () => {
  return (
    <>
      <HomeAdmins>
        <div className="home">
          <FeaturedInfos />
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets"></div>
        </div>
      </HomeAdmins>
    </>
  );
};

export default HomeAdmin;
