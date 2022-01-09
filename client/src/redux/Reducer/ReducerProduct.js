import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  product: [],
  categories: [],
  total: [],
  voucher: [],
  cancel: [],
  moth: null,
  received: [],
  compareTotal: [],
  compareTotalCancel: [],
  compareTotalReceived: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_START:
    case types.GET_ALL_CATEGORY_START:
    case types.PRODUCT_TOTAL_START:
    case types.PRODUCT_TOTAL_CANCEL_START:
    case types.PRODUCT_TOTAL_NOT_RECEIVED_START:
    case types.PRODUCT_TOTAL_MOTH_START:
    case types.VOUCHER_ALL_START:
    case types.COMPARE_REVENUE_TOTAL_BUY_MOTH_START:
    case types.COMPARE_REVENUE_TOTAL_CANCEL_MOTH_START:
    case types.COMPARE_REVENUE_TOTAL_NOT_RECEIVED_MOTH_START:
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
    case types.PRODUCT_TOTAL_CANCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        cancel: action.payload,
      };
    case types.PRODUCT_TOTAL_NOT_RECEIVED_SUCCESS:
      return {
        ...state,
        loading: false,
        received: action.payload,
      };
    case types.PRODUCT_TOTAL_MOTH_SUCCESS:
      return {
        ...state,
        loading: false,
        moth: action.payload,
      };
    case types.VOUCHER_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        voucher: action.payload,
      };
    case types.COMPARE_REVENUE_TOTAL_BUY_MOTH_SUCCESS:
      return {
        ...state,
        loading: false,
        compareTotal: action.payload,
      };
    case types.COMPARE_REVENUE_TOTAL_CANCEL_MOTH_SUCCESS:
      return {
        ...state,
        loading: false,
        compareTotalCancel: action.payload,
      };
    case types.COMPARE_REVENUE_TOTAL_NOT_RECEIVED_MOTH_SUCCESS:
      return {
        ...state,
        loading: false,
        compareTotalReceived: action.payload,
      };
    case types.GET_ALL_PRODUCT_FAIL:
    case types.GET_ALL_PRODUCT_FAIL:
    case types.PRODUCT_TOTAL_FAIL:
    case types.VOUCHER_ALL_FAIL:
    case types.PRODUCT_TOTAL_CANCEL_FAIL:
    case types.PRODUCT_TOTAL_MOTH_FAIL:
    case types.PRODUCT_TOTAL_NOT_RECEIVED_FAIL:
    case types.COMPARE_REVENUE_TOTAL_BUY_MOTH_FAIL:
    case types.COMPARE_REVENUE_TOTAL_CANCEL_MOTH_FAIL:
    case types.COMPARE_REVENUE_TOTAL_NOT_RECEIVED_MOTH_FAIL:
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
