import { combineReducers } from "redux";
import { allowancePropertyReducer } from "./allowancePropertyReducer";

export default combineReducers({
  allowance: allowancePropertyReducer,
});