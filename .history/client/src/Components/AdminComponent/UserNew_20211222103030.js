import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
import moment from "moment";
import "moment/locale/vi";
import axios from "axios";
import { LoadingImage } from "../../Imports/Index";
import { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
const initialState = {
  hoten: "",
  username: "",
  ngaysinh: "",
  gioitinh: "",
  email: "",
  dienthoai: "",
  password: "",
};

const UserNew = () => {
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const { allUsers, token } = useSelector((state) => state.authAdmin);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();

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
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not Exists");
      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");
      let formData = new FormData();
      console.log(formData);
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/cloud/uploadUserImage/admin", formData, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "content-type": "multipart/form-data",
        },
      });
      setLoading(false);
      setImages(res.data);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!images) return alert("No Image Upload");
      await axios.patch(
        `/admin/users/${user.id}`,
        { ...user, images },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      setCallback(!callback);
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/cloud/destroy/admin",
        { public_id: images.public_id },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <UserListStyle />
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img">
            <LoadingImage />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ""} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
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
              name="email"
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
              onChange={handleChangeInput}
            >
              <option value="DEFAULT" disabled>
                Choose a salutation ...
              </option>
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
