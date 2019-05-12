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
  name: string;
}

export interface RecipientsList {
  [date: string]: [
    {
      user: User;
      allowances: Allowance[];
    }[]
  ]
}

export interface Allowance {
  id: number;
  isDone: boolean;
  title: string;
  amount: number;
  memo: string;
}
