import { createReducer } from "redux-starter-kit";
import { inputAllowanceState } from "../actions/FormStateActions";
import { AllowanceFormState, AllowanceFormAction} from "../constants/types";

const initialState: AllowanceFormState = {
  userId: 0,
  memo: "",
};

export const AllowanceForm = createReducer(initialState, {
  [inputAllowanceState.type]: (state: AllowanceFormState, action: AllowanceFormAction) => ({
    ...state,
    ...action.payload
  })
})