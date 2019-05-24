import { createReducer, Action } from "redux-starter-kit";
import { Month, ActionType } from "../constants/types";
import { createMonthList, deleteMonthList, addMonthAllowance, Payload, deleteMonthAllowance, } from "../actions/MonthListActions";

export interface State {
  monthList: Month;
  ids: number[];
}

const initialState: State = {
  monthList: {},
  ids: [],
};

type MonthAllowanceAction =  ActionType<{ id: number, allowance: number}>

export const MonthReducer = createReducer(initialState, {

  [createMonthList.type]: (state: State, action: ActionType<Payload>) => {
    const { date, allowance } = action.payload;
    const index = state.ids.length;
    state.ids.push(index);
    state.monthList[index] = { id: index, date, allowances: allowance };
  },

  [deleteMonthList.type]: (state: State, action: ActionType<Payload>) => {
    const { id } = action.payload;
    delete state.monthList[id];
  },
  // TODO 
  [addMonthAllowance.type]: (state: State, action: MonthAllowanceAction) => {
    const { id, allowance } = action.payload;
    const { allowances } = state.monthList[id];
    const arr = [...state.monthList[id].allowances]
    arr.push(allowance)
    state.monthList[id].allowances.push(allowance);
  },

  [deleteMonthAllowance.type]: (state: State, action: ActionType<{monthId: number, allowanceId: number}>) => {
    const { monthList } = state;
    const { monthId, allowanceId } = action.payload;
    const allowances = monthList[monthId].allowances;
    const index = allowances.indexOf(allowanceId);
    allowances.splice(index, 1);
  }

});
