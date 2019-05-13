import { combineReducers } from "redux";
import { MonthReducer } from "./MonthReducer";

export default combineReducers({
  monthList: MonthReducer,
});