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
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
