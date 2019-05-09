import { createReducer } from "redux-starter-kit";
import { createAllowance } from "../actions/allowancePropertyAction";

const initialState = [
  {
    date: "2019/5",
    isDone: true,
  }
]

export const allowancePropertyReducer = createReducer(initialState, {
  [createAllowance.type]: (state, action) => {
    return [
      ...state,
      action
    ]
  }
})