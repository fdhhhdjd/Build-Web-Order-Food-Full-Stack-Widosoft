import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  product: [],
  categories: [],
  total: [],
  voucher: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_START:
    case types.GET_ALL_CATEGORY_START:
    case types.PRODUCT_TOTAL_START:
    case types.VOUCHER_ALL_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.data,
      };
    case types.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.data,
      };
    case types.PRODUCT_TOTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.payload,
      };
    case types.VOUCHER_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        voucher: action.payload,
      };
    case types.GET_ALL_PRODUCT_FAIL:
    case types.GET_ALL_PRODUCT_FAIL:
    case types.PRODUCT_TOTAL_FAIL:
    case types.VOUCHER_ALL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
