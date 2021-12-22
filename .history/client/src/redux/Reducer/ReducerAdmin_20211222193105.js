import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  token: [],
  Admin: [],
  AdminRegister: [],
  isLogout: false,
  InfoAdmin: [],
  changePassword: [],
  allUser: [],
  allUsers: [],
  uploadImg: [],
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.REGISTER_API_START:
    case types.LOGOUT_API_START:
    case types.REFRESH_TOKEN_ADMIN_START:
    case types.ACCEPT_TOKEN_GET_ADMIN_START:
    case types.CHANGE_ADMIN_PASSWORD_START:
    case types.GET_ALL_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_API_SUCCESS:
      return {
        ...state,
        loading: false,

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
    case types.ACCEPT_TOKEN_GET_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        InfoAdmin: action.payload.data[0],
      };
    case types.CHANGE_ADMIN_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        changePassword: action.payload,
      };
    case types.LOGOUT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: false,
      };
    case types.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: true,
        allUser: action.payload,
        allUsers: action.payload.data,
      };

    case types.LOGIN_API_FAIL:
    case types.REGISTER_API_FAIL:
    case types.LOGIN_API_FAIL:
    case types.REFRESH_TOKEN_ADMIN_FAIL:
    case types.ACCEPT_TOKEN_GET_ADMIN_FAIL:
    case types.CHANGE_ADMIN_PASSWORD_FAIL:
    case types.GET_ALL_USER_FAIL:
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
