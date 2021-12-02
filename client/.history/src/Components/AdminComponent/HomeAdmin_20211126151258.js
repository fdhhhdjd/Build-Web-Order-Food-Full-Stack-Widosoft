import React from "react";
import { FeaturedInfos } from "../../Imports/Index";
const HomeAdmin = () => {
  return (
    <>
      <div className="home">
        <FeaturedInfos />

        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
