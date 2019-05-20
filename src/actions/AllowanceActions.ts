import { createAction } from "redux-starter-kit";

export const addAllowance= createAction("allowance/add");
export const updateAllowance = createAction("allowance/update");
export const doneAllowance = createAction("allowance/done");
export const deleteAllowance = createAction("allowance/delete");