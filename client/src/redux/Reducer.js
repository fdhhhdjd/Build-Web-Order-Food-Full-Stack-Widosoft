import * as types from "./ActionTypes";
const initialState = {
  product: [],
  loading: false,
  error: null,
};
const CartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_API_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_API_SUCCESS:
      return {
        ...state,
      };
    case types.FETCH_API_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default CartsReducer;
