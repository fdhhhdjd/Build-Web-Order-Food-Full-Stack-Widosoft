import React, { useState, useEffect } from "react";
import { WidgetSms } from "../../Styles/StylePages/Admin/WidgetSms";
import { MdVisibility } from "../../Imports/Icons";
import { useSelector } from "react-redux";
const initialState = {
  id: "",
  hoten: "",
  username: "",
  ngaysinh: "",
  gioitinh: "",
  email: "",
  dienthoai: "",
  password: "",
  admin: "",
};
const WidgetSm = () => {
  const { allUsers } = useSelector((state) => state.authAdmin);
  const [customers, setCustomers] = useState(initialState);
  const [images, setImages] = useState(false);
  useEffect(() => {
    if (allUsers) {
      allUsers.forEach((user) => {
        console.log(user, "user");
        if (user.admin === 0) {
          setCustomers(user);
        }
      });
    }
  }, [allUsers]);
  console.log(customers, "customersasdasd");
  return (
    <>
      <WidgetSms />
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/82004808_2436559736585583_2015022699063017472_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jCckj4rURmAAX941u-y&tn=Ehi8DlrdZeXFqU6o&_nc_ht=scontent.fsgn2-4.fna&oh=4b8c32748225488ccba6f3975fd6528b&oe=61C8309D"
              alt=""
              className="widgetSmImg"
            />
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
      </div>
    </>
  );
};

export default WidgetSm;
