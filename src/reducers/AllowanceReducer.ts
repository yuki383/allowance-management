import { createReducer, Action } from "redux-starter-kit";
import { AllowanceState, AllowanceAction, Allowances, Allowance, ActionType} from "../constants/types";
import { addAllowance, updateAllowance, deleteAllowance, doneAllowance } from "../actions/AllowanceActions";
import { updateDefaultAllowance } from "../actions/DefaultActions";
import { deleteMonthAllowance } from "../actions/MonthListActions";


const initialState: AllowanceState = {
  allowances: {},
  ids: []
}

export const allowanceReducer = createReducer(initialState, {
  [addAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { ids } = state;
    const id = ids.length > 0 ? ids[ids.length - 1] + 1 : 0;
    const newAllowance: Allowance = {
      ...action.payload,
      id
    };
    state.allowances[id] = newAllowance;
    state.ids.push(id);
  },

  [updateAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { id } = action.payload;
    state.allowances[id] = {
      ...state.allowances[id],
      ...action.payload,
    }
  },

  [doneAllowance.type]: (state: AllowanceState, action: ActionType<{id: number}>) => {
    const allowance = state.allowances[action.payload.id];
    allowance.isDone = !allowance.isDone;
  },

  [deleteAllowance.type]: (state: AllowanceState, action: ActionType<{id: number}>) => {
    const { id } = action.payload;
    const { allowances, ids } = state;
    const index = ids.indexOf(id);
    delete allowances[id];
    ids.splice(index, 1);
  },
});