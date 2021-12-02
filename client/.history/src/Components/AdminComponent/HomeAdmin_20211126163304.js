import React from "react";
import { FeaturedInfos, Chart, WidgetSm, WidgetLg } from "../../Imports/Index";
import { HomeAdmins } from "../../Styles/StylePages/Admin/HomeAdmin";
import { userData } from "../../utils/DataChart";
import "./c.css";
const HomeAdmin = () => {
  return (
    <>
      {/* <HomeAdmins> */}
      <div className="home">
        <FeaturedInfos />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
      {/* </HomeAdmins> */}
    </>
  );
};

export default HomeAdmin;
