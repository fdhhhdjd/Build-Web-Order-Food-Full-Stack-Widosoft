import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";

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
        console.log(product.id, "sieunhan");
        if (product.id === id) {
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
            <label>Username</label>
            <input
              type="text"
              placeholder="john"
              name="username"
              value={user.username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Smith"
              name="hoten"
              value={user.hoten}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    </>
  );
};

export default UserNew;
