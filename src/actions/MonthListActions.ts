import { createAction, PayloadActionCreator } from "redux-starter-kit";
import { ActionType } from "../constants/types";

export const createMonthList = createAction("monthList/create");
export const deleteMonthList = createAction("monthList/delete");

export interface Payload {
  date: string;
}


/*
export const createMonthList = (date: string = "") => {
  return dispatch => {
    const nowDate = getNowDate();
    const formatedDate = date.length === 0 ? nowDate : date;
    dispatch(create({ date: formatedDate }));
  }
};

export const clearMonthList = () => {
  return dispatch => {
    dispatch(del());
  };
};
*/

const addAllowance = createAction("allowance/add");
const deleteAllowance = createAction("allowance/delete");
const doneAllowance = createAction("allowance/done");
const updateAllowance = createAction("allowance/update");