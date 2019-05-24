import { createAction, PayloadActionCreator } from "redux-starter-kit";

export const createMonthList = createAction("monthList/create");
export const deleteMonthList = createAction("monthList/delete");
export const addMonthAllowance = createAction("monthAllowance/allowance-add");
export const deleteMonthAllowance = createAction("monthAllowance/allowance-delete")

export interface Payload {
  id: number;
  date: string;
  allowance: number[];
}
