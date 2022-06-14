import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import WcIcon from "@material-ui/icons/Wc";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { UserStyle } from "../../Styles/StylePages/Admin/UserStyle";
import { API_URL } from "../../utils/Config";
import LoadingImage from "../Loading/LoadingImage";
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
const ProfileAdmins = () => {
  const { InfoAdmin, allUsers, token } = useSelector(
    (state) => state.authAdmin
  );
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const [callback, setCallback] = state.callback;

  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  useEffect(() => {
    if (InfoAdmin) {
      setUser({ ...InfoAdmin });
      if (InfoAdmin.url === "") {
        setImages(InfoAdmin.url);
      } else {
        setImages(InfoAdmin);
      }
    }
  }, [InfoAdmin, allUsers]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

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
      <UserStyle />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">{`Profile Admin: ${InfoAdmin.hoten}`}</h1>
          <Link to={`/changePassword/${InfoAdmin.id}`}>
            <button className="userAddButton">Change Password</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={InfoAdmin.url || img} alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {`${InfoAdmin.hoten} (Admin)`}
                </span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.username}</span>
              </div>
              <div className="userShowInfo">
                <WcIcon className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {(InfoAdmin.gioitinh === 1 && "Nam") ||
                    (InfoAdmin.gioitinh === 0 && "Nữ ")}
                </span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {moment(`${InfoAdmin.ngaysinh}`).format("Do MMM YYYY")}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.dienthoai}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Nha Trang | VIET NAM</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit Admin</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder=""
                    name="username"
                    value={user.username}
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="hoten"
                    value={user.hoten}
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="dienthoai"
                    value={user.dienthoai}
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Date</label>
                  <input
                    type="date"
                    name="ngaysinh"
                    value={user.ngaysinh}
                    placeholder="New York | USA"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="gioitinh">Gender</label>
                  <div className="newUserGender userUpdateInput">
                    <input
                      type="radio"
                      value="1"
                      id="gioitinh"
                      name="gioitinh"
                      checked={user.gioitinh == 1}
                      onChange={handleChangeInput}
                    />
                    &nbsp; &nbsp;
                    <label htmlFor="male">Nam</label>
                    &nbsp; &nbsp; &nbsp;
                    <input
                      type="radio"
                      name="gioitinh"
                      id="gioitinh"
                      value="0"
                      checked={user.gioitinh == 0}
                      onChange={handleChangeInput}
                    />
                    &nbsp;&nbsp;
                    <label htmlFor="female">Nữ</label>
                  </div>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <div className="upload">
                    <input
                      type="file"
                      name="file"
                      id="file_up"
                      onChange={handleUpload}
                    />
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

export default ProfileAdmins;
