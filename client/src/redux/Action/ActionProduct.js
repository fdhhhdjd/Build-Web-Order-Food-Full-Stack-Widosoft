import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?get All Product
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
//?get all Categories
export const GetAllCategoryStart = () => ({
  type: types.GET_ALL_CATEGORY_START,
});
export const GetAllCategorySuccess = (token) => ({
  type: types.GET_ALL_CATEGORY_SUCCESS,
  payload: token,
});
export const GetAllCategoryFail = (error) => ({
  type: types.GET_ALL_CATEGORY_FAIL,
  payload: error,
});
//?total Product
export const ProductTotalStart = () => ({
  type: types.PRODUCT_TOTAL_START,
});
export const ProductTotalSuccess = (token) => ({
  type: types.PRODUCT_TOTAL_SUCCESS,
  payload: token,
});
export const ProductTotalFail = (error) => ({
  type: types.PRODUCT_TOTAL_FAIL,
  payload: error,
});
//?total cancel
export const ProductTotalCancelStart = () => ({
  type: types.PRODUCT_TOTAL_CANCEL_START,
});
export const ProductTotalCancelSuccess = (token) => ({
  type: types.PRODUCT_TOTAL_CANCEL_SUCCESS,
  payload: token,
});
export const ProductTotalCancelFail = (error) => ({
  type: types.PRODUCT_TOTAL_CANCEL_FAIL,
  payload: error,
});
//?total NOT  RECEIVED
export const ProductTotalNotReceivedStart = () => ({
  type: types.PRODUCT_TOTAL_NOT_RECEIVED_START,
});
export const ProductTotalNotReceivedSuccess = (token) => ({
  type: types.PRODUCT_TOTAL_NOT_RECEIVED_SUCCESS,
  payload: token,
});
export const ProductTotalNotReceivedFail = (error) => ({
  type: types.PRODUCT_TOTAL_NOT_RECEIVED_FAIL,
  payload: error,
});
//? every total moth
export const ProductTotalMothStart = () => ({
  type: types.PRODUCT_TOTAL_MOTH_START,
});
export const ProductTotalMothSuccess = (token) => ({
  type: types.PRODUCT_TOTAL_MOTH_SUCCESS,
  payload: token,
});
export const ProductTotalMothFail = (error) => ({
  type: types.PRODUCT_TOTAL_MOTH_FAIL,
  payload: error,
});
//?Voucher All
export const VoucherAllStart = () => ({
  type: types.VOUCHER_ALL_START,
});
export const VoucherAllSuccess = (token) => ({
  type: types.VOUCHER_ALL_SUCCESS,
  payload: token,
});
export const VoucherAllFail = (error) => ({
  type: types.VOUCHER_ALL_FAIL,
  payload: error,
});

//! Get All Product
export const GetAllProductInitiate = () => {
  return async function (dispatch) {
    dispatch(GetAllProductStart());
    await axios
      .get("/product")
      .then((product) => {
        dispatch(GetAllProductSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetAllProductFail(error.data));
      });
  };
};

//! Get All Category
export const GetAllCategoryInitiate = () => {
  return async function (dispatch) {
    dispatch(GetAllCategoryStart());
    await axios
      .get("/category")
      .then((category) => {
        dispatch(GetAllCategorySuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllCategoryFail(error.data));
      });
  };
};
//!Total All
export const ProductTotalInitiate = (token) => {
  return async function (dispatch) {
    dispatch(ProductTotalStart());
    await axios
      .get("/admin/totalRevenue", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(ProductTotalSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(ProductTotalFail(error.data));
      });
  };
};
//! total cancel
export const ProductTotalCancelInitiate = (token) => {
  return async function (dispatch) {
    dispatch(ProductTotalCancelStart());
    await axios
      .get("/admin/totalBillCancelled", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(ProductTotalCancelSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(ProductTotalCancelFail(error.data));
      });
  };
};
//! Total Not RECEIVED
export const ProductTotalNotReceivedInitiate = (token) => {
  return async function (dispatch) {
    dispatch(ProductTotalNotReceivedStart());
    await axios
      .get("/admin/totalBillCustomerNotReceived", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(ProductTotalNotReceivedSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(ProductTotalNotReceivedFail(error.data));
      });
  };
};
//!every total moth
export const ProductTotalMothInitiate = (token) => {
  return async function (dispatch) {
    dispatch(ProductTotalMothStart());
    await axios
      .get("/admin/revenueByMonth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(ProductTotalMothSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(ProductTotalMothFail(error.data));
      });
  };
};
//!Voucher All
export const VoucherAllInitiate = (token) => {
  return async function (dispatch) {
    dispatch(VoucherAllStart());
    await axios
      .get("/voucher/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((category) => {
        dispatch(VoucherAllSuccess(category.data.data));
      })
      .catch((error) => {
        dispatch(VoucherAllFail(error.data));
      });
  };
};
