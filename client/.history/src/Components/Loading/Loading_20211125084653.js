import React from "react";
import { Loadings } from "../../Styles/StylesComponent/Loadings";
import loading from "../../images/loader.gif";

const Loading = () => {
  return (
    <>
      <Loadings>
        <div className=" loader-container">
          <img src={loading} alt="" />
        </div>
      </Loadings>
    </>
  );
};

export default Loading;
