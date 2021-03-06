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

export interface AllowanceInputs {
  title?: string;
  tags?: Tags;
  amount?: string;
  memo?: string;
}

export interface AllowanceFormState extends AllowanceInputs {
  userId: number;
}

export type AllowanceFormAction = ActionType<AllowanceFormState>;



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

export type Tags = "hobby" | "transport" | "food";

export interface Allowance {
  id: number;
  userId: number;
  isDone: boolean;
  tags?: Tags;
  title: string;
  amount: string;
  memo: string;
}
