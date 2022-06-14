import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { API_URL } from "../../utils/Config";
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
//?get all bill Detail
export const GetAllBillDetailStart = () => ({
  type: types.GET_ALL_BILL_DETAIL_START,
});
export const GetAllBillDetailSuccess = (token) => ({
  type: types.GET_ALL_BILL_DETAIL_SUCCESS,
  payload: token,
});
export const GetAllBillDetailFail = (error) => ({
  type: types.GET_ALL_BILL_DETAIL_FAIL,
  payload: error,
});
//?customers buy the most
export const GetAccountMuchStart = () => ({
  type: types.GET_ACCOUNT_BUY_MUCH_START,
});
export const GetAccountMuchSuccess = (token) => ({
  type: types.GET_ACCOUNT_BUY_MUCH_SUCCESS,
  payload: token,
});
export const GetAccountMuchFail = (error) => ({
  type: types.GET_ACCOUNT_BUY_MUCH_FAIL,
  payload: error,
});

//! Get All Payment
export const GetAllPaymentInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllPaymentStart());
    await axios
      .get(`${API_URL}/payment`)
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
      .get(`${API_URL}/bill/all`, {
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
      .get(`${API_URL}/rating/all`, {
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
//! Get all info app
export const GetAllInfoAppInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllInfoStart());
    await axios
      .get(`${API_URL}/appInfo`)
      .then((category) => {
        dispatch(GetAllInfoSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllInfoFail(error.data));
      });
  };
};
//! Get all Bill Detail
export const GetAllBillDetailInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllBillDetailStart());
    await axios
      .get(`${API_URL}/billDetail/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAllBillDetailSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
//!Customers buy the most
export const GetAccountMuchInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAccountMuchStart());
    await axios
      .get(`${API_URL}/bill/sortTransaction`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(GetAccountMuchSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(GetAccountMuchFail(error.data));
      });
  };
};
