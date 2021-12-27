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

//! Get All Payment
export const GetAllPaymentInitiate = () => {
  return async function (dispatch) {
    dispatch(GetAllPaymentStart());
    await axios
      .get("/payment")
      .then((product) => {
        dispatch(GetAllPaymentSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetAllPaymentFail(error.data));
      });
  };
};

//! Get All Bill
export const GetAllBillInitiate = () => {
  return async function (dispatch) {
    dispatch(GetAllBillStart());
    await axios
      .get("/category")
      .then((category) => {
        dispatch(GetAllBillSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllBillFail(error.data));
      });
  };
};
//! Get All rating
export const GetAllRatingInitiate = () => {
  return async function (dispatch) {
    dispatch(GetAllRatingStart());
    await axios
      .get("/category")
      .then((category) => {
        dispatch(GetAllRatingSuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllRatingFail(error.data));
      });
  };
};
