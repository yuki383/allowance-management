import { createAction, PayloadActionCreator } from "redux-starter-kit";
import { ActionType } from "../constants/types";

const create = createAction("monthList/create");
const del = createAction("monthList/delete");
const inquire = createAction("monthList/inquire");

export interface Payload {
  date: string;
  isDone?: boolean;
}

export interface CreatePayload {
  date: string;
  isDone: boolean;
}

export interface DeletePayload {
  date: string;
}

export interface InquirePayload {
  date: string;
  isDone: boolean;
}

export const actions = {
  create: create,
  delete: del,
  inquire: inquire,
}

export const createMonthList = (date: string = "") => {
  return dispatch => {
    console.log("create");
    const nowDate = getNowDate();
    const formatedDate = date.length === 0 ? nowDate : date;
    dispatch(create({ date: formatedDate, isDone: false }));
  };
};

export const clearMonthList = () => {
  del();
}

export const inquireMonthList = (isDone: boolean) => {
  inquire({ isDone })
}

const addRecipient = createAction("recipient/add");
const deleteRecipient = createAction("recipient/delete");

const addAllowance = createAction("allowance/add");
const deleteAllowance = createAction("allowance/delete");
const doneAllowance = createAction("allowance/done");
const updateAllowance = createAction("allowance/update");

const getNowDate = () => {
  const date = new Date();
  return date.getFullYear() + "/" + ("00" + (date.getMonth() +1)).slice(-2);
}
