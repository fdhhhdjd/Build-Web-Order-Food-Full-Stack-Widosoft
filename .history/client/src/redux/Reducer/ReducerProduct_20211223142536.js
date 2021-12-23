import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  product: [],
  categories: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_START:
    case types.GET_ALL_CATEGORY_START:
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

    case types.GET_ALL_PRODUCT_FAIL:
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
