import React from "react";
import { Loadings } from "../../Styles/Loadings";
import loading from "../../images/loader.gif";
const Loading = () => {
  return (
    <>
      <Loadings>
        <div className="loader-container fade-out">
          <img src={loading} alt="" />
        </div>
      </Loadings>
    </>
  );
};

export default Loading;
