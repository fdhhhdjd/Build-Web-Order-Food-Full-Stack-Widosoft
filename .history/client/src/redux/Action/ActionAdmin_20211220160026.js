import axios from "axios";
import * as types from "../ActionTypes";
import { ToastContainer, toast } from "react-toastify";

//Register
export const RegisterStart = () => ({
  type: types.REGISTER_API_START,
});
export const RegisterSuccess = (api) => ({
  type: types.REGISTER_API_SUCCESS,
  payload: api,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_API_FAIL,
  payload: error,
});
//Login
export const LoginStart = () => ({
  type: types.LOGIN_API_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_API_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_API_FAIL,
  payload: error,
});
//Logout
export const LogoutStart = () => ({
  type: types.LOGOUT_API_START,
});
export const LogoutSuccess = () => ({
  type: types.LOGOUT_API_SUCCESS,
});
export const LogoutFail = () => ({
  type: types.LOGOUT_API_FAIL,
});

//!Register
export const RegisterInitiate = (
  email,
  hoten,
  username,
  password,
  ngaysinh,
  gioitinh,
  dienthoai
) => {
  return async function (dispatch) {
    dispatch(RegisterStart());
    await axios
      .post("/admin/register", {
        email,
        hoten,
        username,
        password,
        ngaysinh,
        gioitinh,
        dienthoai,
      })
      .then((user) => {
        dispatch(
          RegisterSuccess(
            user.data,{
              email = "",
              hoten = "",
              username = "",
              password = "",
              ngaysinh = "",
              gioitinh = "",
              dienthoai = ""
            }
         
          )
        );
      })
      .catch((error) => {
        dispatch(RegisterFail(toast.error(error.data)));
      });
  };
};
//!login
export const loginInitiate = (email, password) => {
  return async function (dispatch) {
    dispatch(LoginStart());
    await axios
      .post("/admin/login", { email, password })
      .then((user) => {
        dispatch(LoginSuccess(user.data));
      })
      .catch((error) => {
        dispatch(LoginFail(toast.error(error.data)));
      });
  };
};
//!logout
export const LogoutInitiate = () => {
  return async function (dispatch) {
    dispatch(LogoutStart());
    await axios
      .get("/admin/logout")
      .then((user) => {
        dispatch(
          LogoutSuccess(
            user,
            toast.success("Logout Success Thank You!"),
            localStorage.removeItem("firstLogin"),
            (window.location.href = "/login")
          )
        );
      })
      .catch((error) => {
        dispatch(LoginFail(error));
      });
  };
};
