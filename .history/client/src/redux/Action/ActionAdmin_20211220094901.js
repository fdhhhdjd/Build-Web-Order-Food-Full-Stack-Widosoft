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

//Register
export const RegisterInitiate = (name, email, password, date, sex, phone) => {
  return async function (dispatch) {
    dispatch(RegisterStart());
    await axios
      .get("/admin/register", {
        name,
        email,
        password,
        date,
        sex,
        phone,
      })
      .then(({ user }) => {
        dispatch(
          RegisterSuccess(user, toast.success("Register Success Thank You!"))
        );
      })
      .catch((error) => {
        dispatch(RegisterFail(toast.error(error.response.data.msg)));
      });
  };
};
