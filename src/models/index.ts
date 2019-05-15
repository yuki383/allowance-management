import { Payload } from "../actions/DefaultActions";
import {Allowance, Allowances, AllowanceState} from "../constants/types";
import { State as DefaultState } from "../reducers/DefaultStatusReducer";

export const getDefaultAllowance = (defaults: AllowanceState) => {
  const { ids, allowances } = defaults;
  return ids.map(id => {
    return {
      ...allowances[id],
    }
  })
}

interface groupedAllowance {
  [userId: number]: Allowance[];
}

export const groupAllowanceByUserId: (allowances: Allowance[], userId: number[]) => groupedAllowance = (allowances: Allowance[], userId: number[]) => { 
  const group = (containter: groupedAllowance, index: number) => {
    if(index === 0) {
      return containter;
    } else {
      const allowance = allowances[index - 1];
      containter[allowance.userId].push(allowance);
      return group(containter, index - 1);
    }
  }
  const containter: groupedAllowance = userId.reduce(makeAllowanceContainer, {});
  return group(containter, allowances.length);

}

const makeAllowanceContainer: (acc: groupedAllowance, current: number) => groupedAllowance = (acc, current) => {
  acc[current] = [];
  return acc;
}

