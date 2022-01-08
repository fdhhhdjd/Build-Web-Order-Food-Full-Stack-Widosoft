import React from "react";
import { useSelector } from "react-redux";
import { WidgetLgs } from "../../Styles/StylePages/Admin/WidgetLgs";
const WidgetLg = () => {
  const { AccountBuyMuch } = useSelector((state) => state.info);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
      <WidgetLgs />
      <div className="widgetLg">
        <h3 className="widgetLgTitle">The most total purchase</h3>
        <table className="widgetLgTable">
          <tbody>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">User Name</th>
              <th className="widgetLgTh">Total Price</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            {AccountBuyMuch.map((item, i) => {
              return (
                <tr className="widgetLgTr" key={i}>
                  <td className="widgetLgUser">
                    <img
                      src={item.url || img}
                      alt={item.hoten}
                      className="widgetLgImg"
                    />
                    {/* <span className="widgetLgName"></span> */}
                  </td>
                  <td className="widgetLgAmount">{item.hoten}</td>
                  <td className="widgetLgAmount">${item.tong_giao_dich}</td>
                  <td className="widgetLgStatus">
                    <Button type="Approved" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WidgetLg;
