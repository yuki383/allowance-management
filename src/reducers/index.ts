import { combineReducers } from "redux";
import { MonthListReducer } from "./MonthReducer";

export default combineReducers({
  monthList: MonthListReducer,
});