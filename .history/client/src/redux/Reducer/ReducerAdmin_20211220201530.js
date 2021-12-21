import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  token: [],
  Admin: [],
  AdminRegister: [],
  isLogout: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.REGISTER_API_START:
    case types.LOGOUT_API_START:
    case types.REFRESH_TOKEN_ADMIN_START:
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
    case types.REGISTER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        AdminRegister: action.payload,
      };
    case types.REFRESH_TOKEN_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case types.LOGOUT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: false,
      };
    case types.LOGIN_API_FAIL:
    case types.REGISTER_API_FAIL:
    case types.LOGIN_API_FAIL:
    case types.REFRESH_TOKEN_ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
