import React from "react";
import { PopularHome } from "../../Styles/StylePages/PopularHome";
import DataPopularHome from "../../utils/DataPopular";
import { PopularItem } from "../../Imports/Index";
const Popular = () => {
  return (
    <>
      <PopularHome>
        <section className="popular" id="popular">
          <h1 className="heading">
            most <span>popular</span> foods
          </h1>
          <div className="box-container">
            {DataPopularHome.map((item) => (
              <PopularItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </PopularHome>
    </>
  );
};

export default Popular;
