import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { AiOutlineArrowUp, MdArrowDownward } from "../../Imports/Icons";
import { FeaturedInfo } from "../../Styles/StylePages/Admin/FeaturedInfo";
const FeaturedInfos = () => {
  const {
    total,
    cancel,
    moth,
    received,
    compareTotal,
    compareTotalCancel,
    compareTotalReceived,
  } = useSelector((state) => state.products);
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
            </div>
            <span className="featuredSub">Total All Buy every a month</span>
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
            </div>
            <span className="featuredSub">Cancel Bill All Every A Month</span>
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
            </div>
            <span className="featuredSub">Not Received Every A Month</span>
          </div>
        </div>
        {/* row tow */}
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Total Compare to last month</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotal[1].doanh_thu_thang_nay}
                  duration={5.75}
                  separator=","
                />
                <br />
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotal[1].doanh_thu_thang_truoc}
                  duration={5.75}
                  separator=","
                />
              </span>
              <span className="featuredMoneyRate">
                {compareTotal[1].sosanh_thang_truoc < 0 ? (
                  <>
                    -{compareTotal[1].sosanh_thang_truoc}
                    <MdArrowDownward className="featuredIcon negative" />
                  </>
                ) : (
                  <>
                    +
                    {(compareTotal[1].sosanh_thang_truoc ===
                      "last month does not exist data" &&
                      "0") ||
                      compareTotal[1].sosanh_thang_truoc}
                    <AiOutlineArrowUp className="featuredIcon" />
                  </>
                )}
              </span>
            </div>
            <span className="featuredSub">
              {compareTotal[1].sosanh_thang_truoc < 0
                ? "Decrease Compared to last month"
                : "Increase Compared to last month"}
            </span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              Cancel bill Compare to last month
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotalCancel[1].tong_hd_thang_nay}
                  duration={5.75}
                  separator=","
                />
                <br />
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotalCancel[1].tong_hd_thang_truoc}
                  duration={5.75}
                  separator=","
                />
              </span>
              <span className="featuredMoneyRate">
                {compareTotalCancel[1].sosanh_thang_truoc < 0 ? (
                  <>
                    +{compareTotalCancel[1].sosanh_thang_truoc}
                    <MdArrowDownward className="featuredIcon negative" />
                  </>
                ) : (
                  <>
                    {(compareTotalCancel[1].sosanh_thang_truoc ===
                      "last month does not exist data" &&
                      "0") ||
                      compareTotalCancel[1].sosanh_thang_truoc}
                    <AiOutlineArrowUp className="featuredIcon" />
                  </>
                )}
              </span>
            </div>
            <span className="featuredSub">
              {compareTotalCancel[1].sosanh_thang_truoc < 0
                ? "Decrease Compared to last month"
                : "Increase Compared to last month"}
            </span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              Not Received Compare to last month
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotalReceived[1].tong_hd_thang_nay}
                  duration={5.75}
                  separator=","
                />
                <br />
                $&nbsp;
                <CountUp
                  className="count"
                  start={0}
                  end={compareTotalReceived[1].tong_hd_thang_truoc}
                  duration={5.75}
                  separator=","
                />
              </span>
              <span className="featuredMoneyRate">
                {compareTotalReceived[1].sosanh_thang_truoc < 0 ? (
                  <>
                    {compareTotalReceived[1].sosanh_thang_truoc}
                    <MdArrowDownward className="featuredIcon negative" />
                  </>
                ) : (
                  <>
                    {compareTotalReceived[1].sosanh_thang_truoc}
                    <AiOutlineArrowUp className="featuredIcon" />
                  </>
                )}
              </span>
            </div>
            <span className="featuredSub">
              {compareTotalReceived[1].sosanh_thang_truoc < 0
                ? "Decrease Compared to last month"
                : "Increase Compared to last month"}
            </span>
          </div>
        </div>
      </FeaturedInfo>
    </>
  );
};

export default FeaturedInfos;
