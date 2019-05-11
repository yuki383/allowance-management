import { combineReducers } from "redux";
import { MonthListReducer } from "./MonthListReducer";

export default combineReducers({
  monthList: MonthListReducer,
});