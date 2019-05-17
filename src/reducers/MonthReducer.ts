import { createReducer, Action } from "redux-starter-kit";
import { Month, ActionType } from "../constants/types";
import { createMonthList, deleteMonthList, addMonthAllowance, Payload, } from "../actions/MonthListActions";

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
    console.log(state.ids)
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
    console.log(arr)
    state.monthList[id].allowances.push(allowance);
  } 
});
