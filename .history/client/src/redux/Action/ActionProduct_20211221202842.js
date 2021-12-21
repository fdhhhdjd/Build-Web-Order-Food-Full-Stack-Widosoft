import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
export const ChangePasswordAdminStart = () => ({
  type: types.GET_ALL_PRODUCT_START,
});
export const ChangePasswordAdminSuccess = (token) => ({
  type: types.GET_ALL_PRODUCT_SUCCESS,
  payload: token,
});
export const ChangePasswordAdminFail = (error) => ({
  type: types.GET_ALL_PRODUCT_FAIL,
  payload: error,
});
