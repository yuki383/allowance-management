import { createAction } from "redux-starter-kit";

export const createAllowance = createAction("allowance/create");

export const allowanceActionCreators = {
  create: () => {
    createAllowance();
  }
}
