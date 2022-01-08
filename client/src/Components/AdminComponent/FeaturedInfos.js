import React from "react";
import { FeaturedInfo } from "../../Styles/StylePages/Admin/FeaturedInfo";
import { MdArrowDownward } from "../../Imports/Icons";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";
const FeaturedInfos = () => {
  const { total, cancel, moth, received } = useSelector(
    (state) => state.products
  );
  return (
    <>
      <FeaturedInfo>
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Total Buy</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={total[0].tong_doanhthu}
                  duration={5.75}
                  separator=","
                />
              </span>
              <span className="featuredMoneyRate">
                -11.4 <MdArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cancel Bill</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={cancel[0].tong_hd_bi_huy}
                  duration={5.75}
                  separator=","
                />
              </span>
              <span className="featuredMoneyRate">
                -1.4 <MdArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Not Received</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={received[0].tong_hd_khach_chua_nhan_hang}
                  duration={5.75}
                  separator=","
                />
              </span>
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
