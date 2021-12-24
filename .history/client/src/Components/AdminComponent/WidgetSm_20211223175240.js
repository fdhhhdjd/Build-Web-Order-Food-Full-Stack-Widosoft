import React, { useState, useEffect } from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { useSelector } from "react-redux";

const WidgetSm = () => {
  const { allUsers } = useSelector((state) => state.authAdmin);
  const [customers, setCustomers] = useState([]);
  const [images, setImages] = useState(false);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  useEffect(() => {
    allUsers.map((item) => {
      console.log(item);
      if (item.admin === 0) {
        setCustomers(item);
      }
    });
  });
  console.log(customers);
  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        {allUsers.map((item, index) => {
          return (
            <ul className="widgetSmList">
              <li className="widgetSmListItem">
                <img src={item.url || img} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <MdVisibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            </ul>
          );
        })}
        <div className="widgetSmUser">
          <button className="widgetSmButton1">Load More</button>
        </div>
      </div>
    </>
  );
};

export default WidgetSm;
