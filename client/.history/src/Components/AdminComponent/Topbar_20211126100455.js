import React from "react";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">lamaadmin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <MdOutlineNotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <FaLanguage />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <FiSettings />
            </div>
            <img
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bHH1UmVI9KoAX-TXeEQ&_nc_ht=scontent.fsgn2-6.fna&oh=0c6fa78c853575f690db9a6af5a8f74c&oe=61C3F831"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
