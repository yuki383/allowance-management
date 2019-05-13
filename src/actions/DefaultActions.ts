import { createAction } from "redux-starter-kit";
import { User } from "../constants/types";

export interface Payload {
  id: number;
  userId: number;
  title: string;
  amount: string
  memo: string;
}

export const addDefaultRecipient = createAction("default-recipient/add");
export const updateDefaultRecipient = createAction("default-recipient/update");
export const deleteDefaultRecipient = createAction("default-recipient/delete");

export const addDefaultAllowance = createAction("default-allowance/add");
export const updateDefaultAllowance = createAction("default-allowance/update");
export const deleteDefaultAllowance = createAction("default-allowance/delete");
