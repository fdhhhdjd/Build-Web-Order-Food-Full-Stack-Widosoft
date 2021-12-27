import React from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { useSelector } from "react-redux";
const WidgetSm = () => {
  const { allUsers } = useSelector((state) => state.authAdmin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        {allUsers.map((item) => {
          return (
            <ul className="widgetSmList" key={item.id}>
              <li className="widgetSmListItem">
                <img src={item.url || img} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{item.hoten}</span>
                </div>
                <button className="widgetSmButton">
                  <MdVisibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default WidgetSm;
