import { createReducer } from "redux-starter-kit";
import {ActionType, User, Allowances, Allowance } from "../constants/types";
import {
  addDefaultAllowance,
  updateDefaultAllowance,
  deleteDefaultAllowance,
} from "../actions/DefaultActions";
import { identifier } from "@babel/types";

interface State {
  allowances: {
    [id: number]: Default;
  }
  Ids: number[];
}

const initialState: State = {
  allowances: {},
  Ids: []
}

interface Default {
  id: number;
  title: string;
  amount: number;
  memo: string;
}

type Action = ActionType<{property: Default}>

export const DefaultStatusReducer = createReducer(initialState, {

  [addDefaultAllowance.type]: (state: State, action: Action) => {
    const { title, amount, memo } = action.payload.property;
    const id = state.Ids.length;
    const newAllowance: Default = {
      id,
      title,
      amount,
      memo
    };
    state.allowances[id] = newAllowance;
  },

  [updateDefaultAllowance.type]: (state: State, action: Action) => {
    const { id } = action.payload.property;
    state.allowances[id] = action.payload.property;
  },

  [deleteDefaultAllowance.type]: (state: State, action: Action) => {
    const { id } = action.payload.property;
    const { allowances, Ids } = state;
    const index = Ids.indexOf(id);
    delete allowances[id];
    Ids.splice(index, 1);
  }
})
