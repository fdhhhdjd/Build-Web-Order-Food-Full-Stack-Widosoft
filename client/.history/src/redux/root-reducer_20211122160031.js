import { combineReducers } from "redux";
import FoodReducer from "./Reducer";
const rootReducer = combineReducers({
  data: FoodReducer,
});
export default rootReducer;
