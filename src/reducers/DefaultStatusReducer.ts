import { createReducer } from "redux-starter-kit";
import {ActionType, User, Allowances, Allowance } from "../constants/types";
import {
  addDefaultAllowance,
  updateDefaultAllowance,
  deleteDefaultAllowance,
  Payload,
} from "../actions/DefaultActions";
import { isDebuggerStatement } from "@babel/types";

interface State {
  allowances: {
    [id: number]: Allowance;
  }
  Ids: number[];
}

const initialState: State = {
  allowances: {},
  Ids: []
}

type Action = ActionType<Payload>

export const DefaultStatusReducer = createReducer(initialState, {

  [addDefaultAllowance.type]: (state: State, action: Action) => {
    console.log(action)
    const { userId, title, amount, memo } = action.payload;
    const id = state.Ids.length;
    const newAllowance: Allowance = {
      ...action.payload,
      id,
      isDone: false,
    };
    state.allowances[id] = newAllowance;
    state.Ids.push(id);
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
    const { allowances, Ids } = state;
    const index = Ids.indexOf(id);
    delete allowances[id];
    Ids.splice(index, 1);
  }
})
