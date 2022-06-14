import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { LoadingImage } from "../../Imports/Index";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
import { API_URL } from "../../utils/Config";
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
          if (product.url === "") {
            setImages(product.url);
          } else {
            setImages(product);
          }
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
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/cloud/uploadUserImage/admin`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  console.log(images, "images");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images)
      return swal("No Image Upload 😅.", {
        icon: "error",
      });
    try {
      await axios.patch(
        `${API_URL}/admin/users/${user.id}`,
        { ...user, public_id: images.public_id, url: images.url },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      setCallback(!callback);
      navigate("/users");
      swal("Edit User successfully 🤩", {
        icon: "success",
      });
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${API_URL}/cloud/destroy/admin`,
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
        <h1 className="newUserTitle">Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="newUserItem">
            <label htmlFor="username">ID</label>
            <input
              type="text"
              placeholder="john"
              name="id"
              id="id"
              value={user.id}
              onChange={handleChangeInput}
              disabled
            />
          </div>
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
              id="hoten"
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
              id="email"
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
              id="password"
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
              id="dienthoai"
              value={user.dienthoai}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="ngaysinh">date</label>
            <input
              type="date"
              data-date=""
              data-date-format="DD MMMM YYYY"
              name="ngaysinh"
              id="ngaysinh"
              value={user.ngaysinh}
              onChange={handleChangeInput}
            />
          </div>

          <div className="newUserItem">
            <label htmlFor="gioitinh">Gender</label>
            <div className="newUserGender">
              <input
                type="radio"
                value="1"
                id="gioitinh"
                name="gioitinh"
                checked={user.gioitinh == 1}
                onChange={handleChangeInput}
              />
              <label htmlFor="male">Nam</label>
              <input
                type="radio"
                name="gioitinh"
                id="gioitinh"
                value="0"
                checked={user.gioitinh == 0}
                onChange={handleChangeInput}
              />
              <label htmlFor="female">Nữ</label>
            </div>
          </div>
          <div className="newUserItem">
            <label htmlFor="active">Active</label>
            <select
              className="newUserSelect"
              onChange={handleChangeInput}
              name="admin"
            >
              <option value="1" selected={user.admin == 1}>
                Admin
              </option>
              <option value="0" selected={user.admin == 0}>
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
