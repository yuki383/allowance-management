import { Payload } from "../actions/DefaultActions";
import {Allowance, Allowances, AllowanceState, User} from "../constants/types";

export const getAllowance = (allowance: AllowanceState): Allowance[] => {
  const { ids, allowances } = allowance;
  return ids.map(id => {
    return {
      ...allowances[id],
    }
  })
}

export const getUser = (users: User): {id: number, name: string}[] => {
  const { ByIds, Ids } = users;
  return Ids.map(id => ByIds[id]);
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
  const container: groupedAllowance = userId.reduce(makeAllowanceContainer, {});
  return group(container, allowances.length);

}

const makeAllowanceContainer: (acc: groupedAllowance, current: number) => groupedAllowance = (acc, current) => {
  acc[current] = [];
  return acc;
}

