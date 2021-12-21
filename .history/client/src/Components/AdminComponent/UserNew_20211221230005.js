import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
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

const UserNew = () => {
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers } = useSelector((state) => state.authAdmin);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleUpload = () => {};
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      allUsers.forEach((product) => {
        if (product.id == id) {
          setUser(product);
        }
      });
    } else {
      setOnEdit(false);
      setUser(initialState);
      setImages(false);
    }
  }, [id, allUsers]);

  return (
    <>
      <UserListStyle />
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />

        <div id="file_img">
          <img
            src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=agAKQQBr9wIAX-_Jvsz&_nc_ht=scontent.fdad3-3.fna&oh=00_AT_3d66MMhlYLwh22ihbTzmIash8pzVf04LJG3i7z0116A&oe=61E790B1"
            alt=""
          />
          <span>X</span>
        </div>
      </div>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="john"
              name="username"
              value={user.username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="hoten">Full Name</label>
            <input
              type="text"
              placeholder="John Smith"
              name="hoten"
              value={user.hoten}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              value={user.email}
              onChange={handleChangeInput}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChangeInput}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="dienthoai">Phone</label>
            <input
              type="text"
              placeholder="+1 123 456 78"
              name="dienthoai"
              value={user.dienthoai}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="ngaysinh">date</label>
            <input
              type="text"
              placeholder="+1 123 456 78"
              name="ngaysinh"
              value={moment(`${user.ngaysinh}`).format("Do MMM YYYY")}
              onChange={handleChangeInput}
            />
          </div>

          <div className="newUserItem">
            <label htmlFor="gioitinh">Gender</label>
            <div className="newUserGender">
              <input
                type="radio"
                name="gioitinh"
                id="Nam"
                value="Nam"
                checked={user.gioitinh === 1 && "Nam"}
                onChange={handleChangeInput}
              />
              <label htmlFor="male">Nam</label>
              <input
                type="radio"
                name="gender"
                id="Nữ"
                value="Nữ"
                checked={user.gioitinh === 0 && "Nữ"}
                onChange={handleChangeInput}
              />
              <label htmlFor="female">Nữ</label>
            </div>
          </div>
          <div className="newUserItem">
            <label htmlFor="active">Active</label>
            <select
              className="newUserSelect"
              name="active"
              id="active"
              defaultValue={"DEFAULT"}
            >
              <option value="1" selected={user.admin === 1}>
                Admin
              </option>
              <option value="0" selected={user.admin === 0}>
                Customer
              </option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    </>
  );
};

export default UserNew;
