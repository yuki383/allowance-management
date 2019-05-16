import { createReducer } from "redux-starter-kit";
import {ActionType, User, Allowances, Allowance } from "../constants/types";
import {
  addDefaultAllowance,
  updateDefaultAllowance,
  deleteDefaultAllowance,
  Payload,
} from "../actions/DefaultActions";
import { isDebuggerStatement } from "@babel/types";

export interface State {
  allowances: {
    [id: number]: Allowance;
  }
  ids: number[];
}

const initialState: State = {
  allowances: {},
  ids: []
}

const initialMock: State = {
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

type Action = ActionType<Payload>

export const DefaultStatusReducer = createReducer(initialMock, {

  [addDefaultAllowance.type]: (state: State, action: Action) => {
    const { ids } = state;
    const id = ids[ids.length - 1] ? ids[ids.length - 1] + 1 : 0;
    const newAllowance: Allowance = {
      ...action.payload,
      id,
      isDone: false,
    };
    state.allowances[id] = newAllowance;
    state.ids.push(id);
  },

  [updateDefaultAllowance.type]: (state: State, action: Action) => {
    const { id } = action.payload;
    state.allowances[id] = {
      ...state.allowances[id],
      ...action.payload,
    }
  },

  [deleteDefaultAllowance.type]: (state: State, action: Action) => {
    const { id } = action.payload;
    const { allowances, ids } = state;
    const index = ids.indexOf(id);
    delete allowances[id];
    ids.splice(index, 1);
  }
})
