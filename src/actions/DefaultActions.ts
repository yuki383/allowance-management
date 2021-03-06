import { createAction } from "redux-starter-kit";

export interface Payload {
  id: number;
  userId: number;
  title: string;
  amount: string
  memo: string;
}

export const addDefaultAllowance = createAction("default-allowance/add");
export const updateDefaultAllowance = createAction("default-allowance/update");
export const deleteDefaultAllowance = createAction("default-allowance/delete");