import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
import ProductReducer from "./Reducer/ReducerProduct";
const rootReducer = combineReducers({
  authAdmin: AuthReducer,
  products: ProductReducer,
});
export default rootReducer;
