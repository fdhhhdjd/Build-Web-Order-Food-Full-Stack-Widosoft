import React from "react";
import { ContentHome } from "../../Styles/ContentHome";
import { content } from "../../Imports/Image";
import Buttons from "../Buttons/Buttons";
const Content = () => {
  return (
    <>
      <ContentHome>
        <section className="home" id="home">
          <div className="content">
            <h3>food made with love</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              accusamus tempore temporibus rem amet laudantium animi optio
              voluptatum. Natus obcaecati unde porro nostrum ipsam itaque
              impedit incidunt rem quisquam eos!
            </p>

            {/* <Buttons css="btn" name="order now" /> */}
          </div>

          <div className="image">
            <img src={content} alt="" />
          </div>
        </section>
      </ContentHome>
    </>
  );
};

export default Content;
