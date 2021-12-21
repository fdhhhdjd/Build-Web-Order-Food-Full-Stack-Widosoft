import React, { useState, useEffect } from "react";
import { UserStyle } from "../../Styles/StylePages/Admin/UserStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { NotFound } from "../../Imports/Index";
import WcIcon from "@material-ui/icons/Wc";
import moment from "moment";
import "moment/locale/vi";
const initialState = {
  hoten: "",
  username: "",
  ngaysinh: "",
  gioitinh: "",
  email: "",
  dienthoai: "",
};
const User = () => {
  const [AllUser, setAllUser] = useState(initialState);
  const { hoten, username, ngaysinh, email, dienthoai, gioitinh } = AllUser;
  const { id } = useParams();
  const { allUser } = useSelector((state) => state.authAdmin);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAllUser({ ...AllUser, [name]: value });
  };
  useEffect(() => {
    if (id) {
      allUser.data.forEach((product) => {
        console.log(product.id === id, "allllo");
        if (product.id === id) {
          setAllUser(product);
        }
      });
    } else {
      setAllUser(initialState);
    }
  }, [id, allUser.data]);
  console.log(allUser.data, "chans");
  if (allUser.data.length === 0) return <NotFound />;
  return (
    <>
      <UserStyle />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=agAKQQBr9wIAX8SQtLh&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8qgwvHAdA2XJnlc5g0g4kcZDpjBgJ_H-7Rd8ooqvmEFg&oe=61E58E1E"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{`${AllUser.hoten}`}</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{AllUser.username}</span>
              </div>
              <div className="userShowInfo">
                <WcIcon className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {(AllUser.gioitinh === 1 && "Nam") ||
                    (AllUser.gioitinh === 0 && "Nữ ")}
                </span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {moment(`${AllUser.ngaysinh}`).format("Do MMM YYYY")}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{AllUser.dienthoai}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{AllUser.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Nha Trang | VIET NAM</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>DisplayName</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                    name="hoten"
                    id="hoten"
                    value={AllUser.hoten}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>UserName</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    name="username"
                    value={username}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Sex</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    name="gioitinh"
                    value={gioitinh}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Date</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    name="ngaysinh"
                    value={ngaysinh}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    name="dienthoai"
                    value={dienthoai}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
