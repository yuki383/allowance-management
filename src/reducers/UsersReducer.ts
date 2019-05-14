import { createReducer } from "redux-starter-kit";
import { User, ActionType } from "../constants/types";
import { addUser, deleteUser } from "../actions/UsersActions";

const initialState: User = {
  ByIds: {},
  Ids: [],
}

export const usersReducer = createReducer(initialState, {
  [addUser.type]: (state: User, action: ActionType<{name: string}>) => {
    const id = state.Ids.length;
    state.ByIds[id] = {
      id,
      name: action.payload.name,
    };
  },
  [deleteUser.type]: (state: User, action: ActionType<{id: number}>) => {
    delete state.ByIds[action.payload.id];
  }
});