import React, { useState, useContext, useEffect } from "react";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ChangeAdminInitiate } from "../../redux/Action/ActionAdmin";
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};
const ChangePassword = () => {
  const [state, setState] = useState(initialState);
  const { InfoAdmin, token, Admin } = useSelector((state) => state.authAdmin);
  const { email, password, confirmPassword } = state;
  const { id } = useParams();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(ChangeAdminInitiate(token.accessToken, ...state));
    // await axios.patch(
    //   "/admin/changePassword",
    //   { ...state },
    //   {
    //     headers: { Authorization: `Bearer ${token.accessToken}` },
    //   }
    // );
    // swal("Edit product successfully 🤩", {
    //   icon: "success",
    // });
  };
  console.log(Admin.accessToken);
  useEffect(() => {
    if (id) {
      setState({ ...InfoAdmin.data[0] });
    } else {
      setState(initialState);
    }
  }, [id, InfoAdmin]);
  return (
    <>
      <UserListStyle />
      <div className="newUser">
        <h1 className="newUserTitle">Change Password</h1>
        <form className="newUserForm" onSubmit={handleSubmit}>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
          <button className="newUserButton">Change</button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
