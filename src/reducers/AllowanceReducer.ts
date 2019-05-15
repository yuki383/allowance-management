import { createReducer } from "redux-starter-kit";
import { AllowanceState, AllowanceAction, Allowances, Allowance} from "../constants/types";
import { addAllowance, updateAllowance, deleteAllowance } from "../actions/AllowanceActions";
import { updateDefaultAllowance } from "../actions/DefaultActions";


const initialState: AllowanceState = {
  allowances: {},
  ids: []
}

export const allowanceReducer = createReducer(initialState, {
  [addAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const id = state.ids.length;
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

  [updateAllowance.type]: (state: AllowanceState, action: AllowanceAction) => {
    const { id } = action.payload;
    const { allowances, ids } = state;
    const index = ids.indexOf(id);
    delete allowances[id];
    ids.splice(index, 1)
  }

})