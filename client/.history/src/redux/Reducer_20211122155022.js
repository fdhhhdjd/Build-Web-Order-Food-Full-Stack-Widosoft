const initialState = {
  product: [],
  loading: false,
  error: null,
};
const CartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:

    case types.REMOVE_FROM_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default CartsReducer;
