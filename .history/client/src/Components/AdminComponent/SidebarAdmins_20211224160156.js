import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarAdmin } from "../../Styles/StylePages/Admin/SidebarAdmin";
import {
  MdLineStyle,
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
  const [activeTab, setActiveTab] = useState("Home");
  const dispatch = useDispatch();
  const location = useLocation();
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
    } else if (location.pathname === "/products") {
      setActiveTab("Products");
    } else if (location.pathname === "/newproduct") {
      setActiveTab("Create");
    } else if (location.pathname === "/category") {
      setActiveTab("Category");
    } else if (location.pathname === "/accountAdmin") {
      setActiveTab("AccountAdmin");
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
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Home")}
                  >
                    <MdLineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
                <Link to="/profileAdmin" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Profile")}
                  >
                    <i className="far fa-user-circle sidebarIcon"></i>
                    Profile
                  </li>
                </Link>
                <Link to="/accountAdmin" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "AccountAdmin" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("AccountAdmin")}
                  >
                    <i className="fas fa-user-lock sidebarIcon"></i>
                    Admin
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Product</h3>
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Users" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Users")}
                  >
                    <MdPermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Products" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Products")}
                  >
                    <MdStorefront className="sidebarIcon" />
                    Products
                  </li>
                </Link>
                <Link to="/category" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Category" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Category")}
                  >
                    <MdCategory className="sidebarIcon" />
                    Categories
                  </li>
                </Link>
                <Link to="/newproduct" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Create" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Create")}
                  >
                    <MdCreate className="sidebarIcon" />
                    Create
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <Link to="/payment" className="link">
                  <li className="sidebarListItem">
                    <i class="far fa-money-bill-alt sidebarIcon"></i>
                    Payment
                  </li>
                </Link>
                <Link to="/bill" className="link">
                  <li className="sidebarListItem">
                    <i class="fas fa-file-invoice-dollar sidebarIcon"></i>
                    Bill
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <i class="fas fa-star sidebarIcon"></i>
                  Rating
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
