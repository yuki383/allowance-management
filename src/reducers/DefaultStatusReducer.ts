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

type Action = ActionType<Payload>

export const DefaultStatusReducer = createReducer(initialState, {

  [addDefaultAllowance.type]: (state: State, action: Action) => {
    const id = state.ids.length;
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
