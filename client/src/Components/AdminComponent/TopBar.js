import React from "react";
import {
  FaLanguage,
  MdOutlineNotificationsNone,
  FiSettings,
} from "../../Imports/Icons";
import { TopBarStyle } from "../../Styles/StylePages/Admin/TopBarStyle";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <TopBarStyle>
        <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">Admin : Nguyễn Tiến Tài</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <MdOutlineNotificationsNone style={{ fontSize: "1.5rem" }} />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <FaLanguage style={{ fontSize: "1.5rem" }} />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <FiSettings style={{ fontSize: "1.5rem" }} />
              </div>
              <Link to="/profileAdmin">
                <img
                  src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bHH1UmVI9KoAX-TXeEQ&_nc_ht=scontent.fsgn2-6.fna&oh=0c6fa78c853575f690db9a6af5a8f74c&oe=61C3F831"
                  alt=""
                  className="topAvatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </TopBarStyle>
    </>
  );
};

export default TopBar;
