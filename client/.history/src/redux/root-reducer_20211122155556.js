import { combineReducers } from "redux";
import ProductReducer, { CartsReducer } from "./Reducer";
const rootReducer = combineReducers({
  data: ProductReducer,
  cart: CartsReducer,
});
export default rootReducer;
