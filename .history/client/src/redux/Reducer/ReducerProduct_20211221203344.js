import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  product: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_API_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: true,
        Admin: action.payload,
      };

    case types.LOGIN_API_FAIL:
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
