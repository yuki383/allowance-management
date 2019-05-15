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

export interface AllowanceState {
  allowances: Allowances;
  ids: number[];
}

export type AllowanceAction = ActionType<Allowance>

// ドメイン
export interface User {
  ByIds: {
    [id: number]: {
      id: number;
      name: string;
    }
  },
  Ids: number[];
}

export interface Month {
  [id: number]: {
    id: number;
    date: string;
    allowances: number[];
  }
  }


export interface Allowances {
  [id: number]: Allowance;
}

export interface Allowance {
  id: number;
  userId: number;
  isDone: boolean;
  title: string;
  amount: string;
  memo: string;
}
