import { combineReducers } from "redux";
import { MonthReducer } from "./MonthReducer";
import { DefaultStatusReducer } from "./DefaultStatusReducer";

export default combineReducers({
  monthList: MonthReducer,
  defaultAllowance: DefaultStatusReducer,
});