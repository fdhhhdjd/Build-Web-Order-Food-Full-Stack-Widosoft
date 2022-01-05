import React from "react";
import { FeaturedInfo } from "../../Styles/StylePages/Admin/FeaturedInfo";
import { MdArrowDownward } from "../../Imports/Icons";
import { useDispatch, useSelector } from "react-redux";
const FeaturedInfos = () => {
  const { total } = useSelector((state) => state.products);
  console.log("Featured", total);
  return (
    <>
      <FeaturedInfo>
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Total Buy</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$ {total[0].tong_doanhthu}</span>
              <span className="featuredMoneyRate">
                -11.4 <MdArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$4,415</span>
              <span className="featuredMoneyRate">
                -1.4 <MdArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,225</span>
              <span className="featuredMoneyRate">
                +2.4 <MdArrowDownward className="featuredIcon" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
      </FeaturedInfo>
    </>
  );
};

export default FeaturedInfos;
