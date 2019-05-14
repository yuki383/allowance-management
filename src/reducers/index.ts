import { combineReducers } from "redux";
import { MonthReducer } from "./MonthReducer";
import { DefaultStatusReducer } from "./DefaultStatusReducer";
import { usersReducer } from "./UsersReducer";

export default combineReducers({
  monthList: MonthReducer,
  defaultAllowance: DefaultStatusReducer,
  users: usersReducer,
});