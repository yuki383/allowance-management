import { createAction } from "redux-starter-kit";

export const addRecipient = createAction("recipient/add");
export const updateRecipient = createAction("recipient/update");
export const deleteRecipient = createAction("recipient/delete");
