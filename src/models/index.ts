import { Payload } from "../actions/DefaultActions";
import {Allowance} from "../constants/types";

export const getDefaultAllowance = (ids: number[], allowances: {[id: number]: Payload}) => {
  return ids.map(id => {
    return {
      ...allowances[id],
      isDone: false,
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

