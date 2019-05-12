import { createReducer } from "redux-starter-kit";
import { RecipientsList, ActionType } from "../constants/types";
import { createMonthList, deleteMonthList, Payload, } from "../actions/MonthListActions";

interface State {
  monthLists: string[];
}

const initialState: State = {
  monthLists: [],
};

export const MonthListReducer = createReducer(initialState, {
  [createMonthList.type]: (state: State, action: ActionType<Payload>) => {
    if (!state.monthLists.some(date => date === action.payload.date)) {
      return {
        monthLists: [
          ...state.monthLists,
          action.payload.date,
        ]
      };
    }
    return state;
  },
  [deleteMonthList.type]: (state: State, action: ActionType<Payload>) => {
    const removedList = [...state.monthLists].filter(date => {
      !(date === action.payload.date);
    });
    return {
      monthLists: removedList
    };
  },
});
