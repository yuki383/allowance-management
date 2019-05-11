import { createReducer } from "redux-starter-kit";
import { RecipientsList, MonthLists, ActionType } from "../constants/types";
import { actions, CreatePayload, DeletePayload, InquirePayload,  } from "../actions/MonthListActions";

interface State {
  monthLists: MonthLists[];
}

const initialState: State = {
  monthLists: [],
};

export const MonthListReducer = createReducer(initialState, {
  [actions.create.type]: (state: State, action: ActionType<CreatePayload>) => {
    if (!state.monthLists.some(item => item.date === action.payload.date)) {
      return {
        monthLists: [
          ...state.monthLists,
          {
            date: action.payload.date,
            isDone: action.payload.isDone
          }
        ]
      };
    }
    return state;
  },
  [actions.delete.type]: (state: State, action: ActionType<DeletePayload>) => {
    const removedList = [...state.monthLists].filter(item => {
      !(item.date === action.payload.date);
    });
    return {
      monthLists: removedList
    };
  },
  [actions.inquire.type]: (
    state: State,
    action: ActionType<InquirePayload>
  ) => {
    const { date, isDone } = action.payload;
    const updatedList = [...state.monthLists].map(item => {
      if (item.date === date) {
        return {
          date: date,
          isDone: isDone
        };
      }
      return item;
    });
    return {
      monthLists: updatedList
    };
  }
});
