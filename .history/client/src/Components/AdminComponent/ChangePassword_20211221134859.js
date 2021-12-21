import React, { useState, useContext, useEffect, useRef } from "react";
import { UserListStyle } from "../../Styles/StylePages/Admin/NewUserStyle";
import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import { ChangeAdminInitiate } from "../../redux/Action/ActionAdmin";
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};
const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    reset,
  } = useForm();
  const passwords = useRef({});
  const [state, setState] = useState(initialState);
  const { InfoAdmin, token, Admin, changePassword } = useSelector(
    (state) => state.authAdmin
  );
  const { email, password, confirmPassword } = state;
  const { id } = useParams();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmitForm = (data) => {
    dispatch(ChangeAdminInitiate(token.accessToken, { ...data }));
  };
  useEffect(() => {
    if (changePassword.status === 200) {
      swal(`${changePassword.message} 🤩`, {
        icon: "success",
      });
    } else if (changePassword.status === 400) {
      swal("Edit Password Fail 🤨", {
        icon: "error",
      });
    }
  }, [changePassword]);
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
        <form className="newUserForm" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              name="email"
              value={email}
              onChange={handleChangeInput}
              disabled
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              // value={password}
              // onChange={handleChangeInput}
              name="password"
              id="password"
            />
          </div>
          <div className="newUserItem">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              // value={confirmPassword}
              // onChange={handleChangeInput}

              id="passwordConfirm"
            />
          </div>
          <button className="newUserButton">Change</button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
