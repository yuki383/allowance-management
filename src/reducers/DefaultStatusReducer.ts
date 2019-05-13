import { createReducer } from "redux-starter-kit";
import {ActionType, User, Allowances, Allowance } from "../constants/types";
import {
  addDefaultAllowance,
  updateDefaultAllowance,
  deleteDefaultAllowance,
} from "../actions/DefaultActions";
import { identifier } from "@babel/types";

interface State {
  allowances: {
    [id: number]: Default;
  }
  Ids: number[];
}

const initialState: State = {
  allowances: {},
  Ids: []
}

interface Default {
  id: number;
  title: string;
  amount: number;
  memo: string;
}

type Action = ActionType<{property: Default}>

export const DefaultStatusReducer = createReducer(initialState, {

  [addDefaultAllowance.type]: (state: State, action: Action) => {
    const { title, amount, memo } = action.payload.property;
    const id = state.Ids.length;
    const newAllowance: Default = {
      id,
      title,
      amount,
      memo
    };
    state.allowances[id] = newAllowance;
  },

  [updateDefaultAllowance.type]: (state: State, action: Action) => {
    
  }
})

/**
 *  addDefaultRecipientのReducer 
 * @param state 現在のstate
 * @param action 送られてきたAction
 */
const addRecipient = (state: State, action: RecipientsAction): State => ({
  recipients: [
    ...state.recipients,
    {
      user: action.payload.user,
      allowances: []
    }
  ]
});

/**
 *  updateDefaultRecipientのReducer 
 * @param state 現在のState
 * @param action 送られてきたAction
 */
const updateRecipient = (state: State, action: RecipientsAction): State => {
  const newRecipients: Recipients[] = state.recipients.map(recipient => {
    const { id, name } = action.payload.user;
    if (recipient.user.id === id) {
      return {
        ...recipient,
        user: {
          ...recipient.user,
          name: name,
        }
      }
    }
    return recipient;
  });
  return {
    recipients: newRecipients
  }
}

const deleteRecipient = (state: State, acrion: RecipientsAction) => {
  const { user } = acrion.payload
  const newRecipients = state.recipients.filter(recipient => recipient.user.id !== user.id);
  return newRecipients;
}