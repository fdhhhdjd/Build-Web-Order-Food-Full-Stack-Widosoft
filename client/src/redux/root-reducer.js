import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
const rootReducer = combineReducers({
  authAdmin: AuthReducer,
});
export default rootReducer;
