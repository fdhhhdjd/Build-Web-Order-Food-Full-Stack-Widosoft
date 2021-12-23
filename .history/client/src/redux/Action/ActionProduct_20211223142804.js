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
export const GetAllCategoryInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllCategoryStart());
    await axios
      .get("/product")
      .then((category) => {
        dispatch(GetAllCategorySuccess(category.data));
      })
      .catch((error) => {
        dispatch(GetAllCategoryFail(error.data));
      });
  };
};
