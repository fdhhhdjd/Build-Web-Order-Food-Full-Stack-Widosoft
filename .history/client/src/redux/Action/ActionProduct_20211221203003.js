import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
export const GetAllProductStart = () => ({
  type: types.GET_ALL_PRODUCT_START,
});
export const GetAllProductSuccess = (token) => ({
  type: types.GET_ALL_PRODUCT_SUCCESS,
  payload: token,
});
export const GetAllProductFail = (error) => ({
  type: types.GET_ALL_PRODUCT_FAIL,
  payload: error,
});
export const GetAllProductInitiate = () => {
    return async function (dispatch) {
      dispatch(());
      await axios
        .get("/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((user) => {
          dispatch(GetAllUserSuccess(user.data));
        })
        .catch((error) => {
          dispatch(GetAllUserFail(error.data));
        });
    };
  };