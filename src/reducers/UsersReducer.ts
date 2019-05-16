import { createReducer } from "redux-starter-kit";
import { User, ActionType } from "../constants/types";
import { addUser, deleteUser } from "../actions/UsersActions";

const initialState: User = {
  ByIds: {},
  Ids: [],
}

const initialMock: User = {
  ByIds: {
    0: {
      id: 0,
      name: "user 0"
    }
  },
  Ids: [0]
}

export const usersReducer = createReducer(initialMock, {
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