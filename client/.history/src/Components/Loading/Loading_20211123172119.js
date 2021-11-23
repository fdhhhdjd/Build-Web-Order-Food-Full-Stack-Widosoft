import React from "react";
import { Loadings } from "../../Styles/Loadings";
import loading from "../../images/loader.gif";
const Loading = () => {
  return (
    <>
      <Loadings>
        <div class="loader-container">
          <img src="images/loader.gif" alt="" />
        </div>
      </Loadings>
    </>
  );
};

export default Loading;
