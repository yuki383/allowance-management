import { combineReducers } from "redux";
import { MonthReducer } from "./MonthReducer";
import { DefaultStatusReducer } from "./DefaultStatusReducer";
import { usersReducer } from "./UsersReducer";
import { allowanceReducer } from "./AllowanceReducer"; 
import {AllowanceForm } from "./AllowanceFormState";

export default combineReducers({
  monthList: MonthReducer,
  defaultAllowance: DefaultStatusReducer,
  users: usersReducer,
  allowance: allowanceReducer,
  allowanceForm: AllowanceForm,
});