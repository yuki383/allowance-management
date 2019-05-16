import { createAction, PayloadActionCreator } from "redux-starter-kit";
import { ActionType } from "../constants/types";

export const createMonthList = createAction("monthList/create");
export const deleteMonthList = createAction("monthList/delete");
export const addMonthAllowance = createAction("monthAllowance/allowance");

export interface Payload {
  id: number;
  date: string;
  allowance: number[];
}
