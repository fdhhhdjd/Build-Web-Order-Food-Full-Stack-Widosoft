import React from "react";
import { Loadings } from "../../Styles/Loadings";

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
