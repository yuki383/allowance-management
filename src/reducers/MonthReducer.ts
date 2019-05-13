import { createReducer, Action } from "redux-starter-kit";
import { Month, ActionType } from "../constants/types";
import { createMonthList, deleteMonthList, addMonthAllowance, Payload, } from "../actions/MonthListActions";
import { number } from "prop-types";

interface State {
  monthList: Month;
}

const initialState: State = {
  monthList: {},
};

type MonthAllowanceAction =  ActionType<{ date: string, allowance: number}>

export const MonthListReducer = createReducer(initialState, {

  [createMonthList.type]: (state: State, action: ActionType<Payload>) => {
    const { date } = action.payload;
    state.monthList[date] = { allowances: [] };
  },

  [deleteMonthList.type]: (state: State, action: ActionType<Payload>) => {
    const { date } = action.payload;
    delete state.monthList[date]
  },

  [addMonthAllowance.type]: (state: State, action: MonthAllowanceAction) => {
    const { date, allowance } = action.payload
    state.monthList[date].allowances.push(allowance);
  }
});
