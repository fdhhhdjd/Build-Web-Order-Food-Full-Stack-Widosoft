import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { SidebarAdmin } from "../../Styles/StylePages/Admin/SidebarAdmin";
import {
  MdLineStyle,
  MdTimeline,
  FiTrendingUp,
  MdPermIdentity,
  MdStorefront,
  MdMailOutline,
  MdDynamicFeed,
  MdChatBubbleOutline,
  MdWorkOutline,
  IoMdAnalytics,
  MdCategory,
  AiOutlineLogout,
  MdCreate,
} from "../../Imports/Icons";

import { LogoutInitiate } from "../../redux/Action/ActionAdmin";
import { useDispatch } from "react-redux";
const SidebarAdmins = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutInitiate());
  };
  useEffect(() => {
    if (location.pathname === "/admin") {
      setActiveTab("Home");
    } else if (location.pathname === "/profileAdmin") {
      setActiveTab("Profile");
    } else if (location.pathname === "/users") {
      setActiveTab("Users");
    }
  }, [location]);
  return (
    <>
      <SidebarAdmin>
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/admin" className="link">
                  <li className="sidebarListItem active">
                    <MdLineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
                <Link to="/profileAdmin" className="link">
                  <li className="sidebarListItem">
                    <MdTimeline className="sidebarIcon" />
                    Profile
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <FiTrendingUp className="sidebarIcon" />
                  Sales
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Product</h3>
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <MdPermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <MdStorefront className="sidebarIcon" />
                    Products
                  </li>
                </Link>
                <Link to="/category" className="link">
                  <li className="sidebarListItem">
                    <MdCategory className="sidebarIcon" />
                    Categories
                  </li>
                </Link>
                <Link to="/newproduct" className="link">
                  <li className="sidebarListItem">
                    <MdCreate className="sidebarIcon" />
                    Create
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MdMailOutline className="sidebarIcon" />
                  Mail
                </li>
                <li className="sidebarListItem">
                  <MdDynamicFeed className="sidebarIcon" />
                  Feedback
                </li>
                <li className="sidebarListItem">
                  <MdChatBubbleOutline className="sidebarIcon" />
                  Messages
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MdWorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <IoMdAnalytics className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem" onClick={handleLogout}>
                  <AiOutlineLogout className="sidebarIcon" />
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SidebarAdmin>
    </>
  );
};

export default SidebarAdmins;
