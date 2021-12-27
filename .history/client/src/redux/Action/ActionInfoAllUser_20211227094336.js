import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?get All Payment
export const GetAllPaymentStart = () => ({
  type: types.GET_ALL_PAYMENT_START,
});
export const GetAllPaymentSuccess = (token) => ({
  type: types.GET_ALL_PAYMENT_SUCCESS,
  payload: token,
});
export const GetAllPaymentFail = (error) => ({
  type: types.GET_ALL_PAYMENT_FAIL,
  payload: error,
});
//?get all Bill
export const GetAllBillStart = () => ({
  type: types.GET_ALL_BILL_START,
});
export const GetAllBillSuccess = (token) => ({
  type: types.GET_ALL_BILL_SUCCESS,
  payload: token,
});
export const GetAllBillFail = (error) => ({
  type: types.GET_ALL_BILL_FAIL,
  payload: error,
});
//?get all rating
export const GetAllRatingStart = () => ({
  type: types.GET_ALL_RATING_START,
});
export const GetAllRatingSuccess = (token) => ({
  type: types.GET_ALL_RATING_SUCCESS,
  payload: token,
});
export const GetAllRatingFail = (error) => ({
  type: types.GET_ALL_RATING_FAIL,
  payload: error,
});
//?get all info app
export const GetAllInfoStart = () => ({
  type: types.GET_ALL_APP_INFO_START,
});
export const GetAllInfoSuccess = (token) => ({
  type: types.GET_ALL_APP_INFO_SUCCESS,
  payload: token,
});
export const GetAllInfoFail = (error) => ({
  type: types.GET_ALL_APP_INFO_FAIL,
  payload: error,
});

//! Get All Payment
export const GetAllPaymentInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllPaymentStart());
    await axios
      .get("/payment", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((product) => {
        dispatch(GetAllPaymentSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetAllPaymentFail(error.data));
      });
  };
};

//! Get All Bill
export const GetAllBillInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllBillStart());
    await axios
      .get("/bill/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllBillSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllBillFail(error.data));
      });
  };
};
//! Get All rating
export const GetAllRatingInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllRatingStart());
    await axios
      .get("/rating/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllRatingSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
export const GetAllRatingInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllRatingStart());
    await axios
      .get("/appInfo")
      .then((category) => {
        dispatch(GetAllRatingSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
