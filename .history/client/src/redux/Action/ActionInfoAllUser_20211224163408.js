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
  type: types.GET_ALL_CATEGORY_START,
});
export const GetAllBillSuccess = (token) => ({
  type: types.GET_ALL_CATEGORY_SUCCESS,
  payload: token,
});
export const GetAllBillFail = (error) => ({
  type: types.GET_ALL_CATEGORY_FAIL,
  payload: error,
});
//?get all rating
export const GetAllRatingStart = () => ({
  type: types.GET_ALL_CATEGORY_START,
});
export const GetAllRatingSuccess = (token) => ({
  type: types.GET_ALL_CATEGORY_SUCCESS,
  payload: token,
});
export const GetAllRatingFail = (error) => ({
  type: types.GET_ALL_CATEGORY_FAIL,
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
