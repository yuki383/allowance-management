import { createAction } from "redux-starter-kit";

export const addAllowance= createAction("allowance/add");
export const updateAllowance = createAction("allowance/update");
export const deleteAllowance = createAction("allowance/delete");