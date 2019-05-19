import { createReducer } from "redux-starter-kit";
import {ActionType, User, Allowances, Allowance, AllowanceState, AllowanceAction } from "../constants/types";
import {
  addDefaultAllowance,
  updateDefaultAllowance,
  deleteDefaultAllowance,
  Payload,
} from "../actions/DefaultActions";

const initialState: AllowanceState = {
  allowances: {},
  ids: []
}

const initialMock: AllowanceState = {
  allowances: {
    0: {
      id: 0,
      userId: 0,
      isDone: false,
      title: "Monthly Allowance",
      amount: "3000",
      memo: "monthly allowance for user 0."
    }
  },
  ids: [0]
}

export const DefaultStatusReducer = createReducer(initialMock, {

  [addDefaultAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { ids } = state;
    const id = ids.length > 0 ? ids[ids.length - 1] + 1 : 0;
    const newAllowance: Allowance = {
      ...action.payload,
      id,
      isDone: false,
    };
    state.allowances[id] = newAllowance;
    state.ids.push(id);
  },

  [updateDefaultAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { id } = action.payload;
    state.allowances[id] = {
      ...state.allowances[id],
      ...action.payload,
    }
  },

  [deleteDefaultAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { id } = action.payload;
    const { allowances, ids } = state;
    const index = ids.indexOf(id);
    delete allowances[id];
    ids.splice(index, 1);
  }
})
