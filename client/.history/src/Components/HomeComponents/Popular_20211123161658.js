import React from "react";
import { PopularHome } from "../../Styles/PopularHome";
import DataPopularHome from "../../utils/DataPopular";
import PopularItem from "./PopularItem";
const Popular = () => {
  return (
    <>
      <PopularHome>
        <section class="popular" id="popular">
          <h1 class="heading">
            most <span>popular</span> foods
          </h1>
          <div class="box-container">
            {DataPopularHome.map((item) => (
              <PopularItem item={item} />
            ))}
          </div>
        </section>
      </PopularHome>
    </>
  );
};

export default Popular;
