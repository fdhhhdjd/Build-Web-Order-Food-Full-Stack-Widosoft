import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  payment: [],
  bill: [],
  rating: [],
  infoApp: [],
  billDetail: [],
  AccountBuyMuch: [],
};
const ReducerInfoAllUser = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PAYMENT_START:
    case types.GET_ALL_BILL_START:
    case types.GET_ALL_RATING_START:
    case types.GET_ALL_APP_INFO_START:
    case types.GET_ALL_BILL_DETAIL_START:
    case types.GET_ACCOUNT_BUY_MUCH_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        payment: action.payload.data,
      };
    case types.GET_ALL_BILL_SUCCESS:
      return {
        ...state,
        loading: false,
        bill: action.payload.data,
      };
    case types.GET_ALL_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        rating: action.payload.data,
      };
    case types.GET_ALL_APP_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        infoApp: action.payload.data,
      };
    case types.GET_ALL_BILL_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        billDetail: action.payload.data,
      };
    case types.GET_ACCOUNT_BUY_MUCH_SUCCESS:
      return {
        ...state,
        loading: false,
        AccountBuyMuch: action.payload,
      };
    case types.GET_ALL_PAYMENT_FAIL:
    case types.GET_ALL_BILL_FAIL:
    case types.GET_ALL_RATING_FAIL:
    case types.GET_ALL_PAYMENT_FAIL:
    case types.GET_ALL_BILL_DETAIL_FAIL:
    case types.GET_ACCOUNT_BUY_MUCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ReducerInfoAllUser;
