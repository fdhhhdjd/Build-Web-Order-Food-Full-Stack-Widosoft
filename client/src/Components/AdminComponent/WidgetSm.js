import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineReload, MdVisibility } from "../../Imports/Icons";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
const WidgetSm = () => {
  const { newAccount } = useSelector((state) => state.authAdmin);
  const navigate = useNavigate();
  const [items, setItems] = useState(newAccount);
  const [visible, setVisible] = useState(3);
  const HandleLoadMore = () => {
    setVisible((pre) => pre + 3);
  };
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        {items.slice(0, visible).map((item, i) => {
          return (
            <ul className="widgetSmList" key={i}>
              <li className="widgetSmListItem">
                <img src={item.url || img} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{item.hoten}</span>
                </div>
                <button
                  className="widgetSmButton"
                  onClick={() => navigate(`/newUser/${item.id}`)}
                >
                  <MdVisibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            </ul>
          );
        })}
        <button className="widgetSmButton1" onClick={HandleLoadMore}>
          <AiOutlineReload className="widgetSmIcon" />
          Load More
        </button>
      </div>
    </>
  );
};

export default WidgetSm;
