import React, { useState, useEffect } from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { useSelector } from "react-redux";

const WidgetSm = () => {
  const { allUsers } = useSelector((state) => state.authAdmin);
  const [customers, setCustomers] = useState({});
  const [images, setImages] = useState(false);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        {allUsers.map((item, index) => {
          return (
            <ul className="widgetSmList">
              <li className="widgetSmListItem">
                <img src={allUsers.url || img} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <MdVisibility className="widgetSmIcon" />
                  Display
                </button>
              </li>

              <div className="widgetSmUser">
                <button className="widgetSmButton1">Load More</button>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default WidgetSm;
