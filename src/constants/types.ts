import {
  NavigationScreenConfig,
  NavigationScreenOptions
} from "react-navigation";

/**
 * コンポーネントのNavigationOptionsの型
 * static NavigationOptions: NavigationOptions = ({ ... }) => ({...})
 */
export type NavigationOptions = NavigationScreenConfig<NavigationScreenOptions>;

export interface ActionType<T> {
  type: string;
  payload: T;
}

export interface User {
  ByIds: {
    [id: number]: {
      id: number;
      name: string;
    }
  },
  Ids: number;
}

export interface Month {
  [date: string]: {
    allowances: number[];
  }
}


export interface Allowances {
  [id: number]: Allowance;
}

export interface Allowance {
  id: number;
  isDone: boolean;
  title: string;
  amount: number;
  memo: string;
}
