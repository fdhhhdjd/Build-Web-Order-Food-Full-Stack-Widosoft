import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarAdmin } from "../../Styles/StylePages/Admin/SidebarAdmin";
import {
  MdLineStyle,
  MdPermIdentity,
  MdStorefront,
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
    } else if (location.pathname === "/payment") {
      setActiveTab("Payment");
    } else if (location.pathname === "/bill") {
      setActiveTab("Bill");
    } else if (location.pathname === "/rating") {
      setActiveTab("Rating");
    } else if (location.pathname === "/infoapp") {
      setActiveTab("Info");
    } else if (location.pathname === "/billdetail") {
      setActiveTab("billdetail");
    } else if (location.pathname === "/voucher") {
      setActiveTab("voucher");
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
                <Link to="/billdetail" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "billdetail" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("billdetail")}
                  >
                    <i className="fas fa-money-bill-alt"></i>
                    &nbsp; Bill Detail
                  </li>
                </Link>
                <Link to="/payment" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Payment" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Payment")}
                  >
                    <i className="far fa-money-bill-alt sidebarIcon"></i>
                    Payment
                  </li>
                </Link>
                <Link to="/bill" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Bill" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Bill")}
                  >
                    <i className="fas fa-file-invoice-dollar sidebarIcon"></i>
                    Bill
                  </li>
                </Link>
                <Link to="/rating" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Rating" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Rating")}
                  >
                    <i className="fas fa-star sidebarIcon"></i>
                    Rating
                  </li>
                </Link>
                <Link to="/infoapp" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "Info" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Info")}
                  >
                    <i className="fas fa-rocket"></i>
                    &nbsp; Info app
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <Link to="/voucher" className="link">
                  <li
                    className={` sidebarListItem  ${
                      activeTab === "voucher" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("voucher")}
                  >
                    <i className="fas fa-tags"></i>
                    &nbsp; Voucher
                  </li>
                </Link>
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
