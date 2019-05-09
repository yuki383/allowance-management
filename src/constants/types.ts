import {
  NavigationScreenConfig,
  NavigationScreenOptions
} from "react-navigation";

export type NavigationOptions = NavigationScreenConfig<NavigationScreenOptions>;

export interface Recipients {
  date: string;
  isDone: boolean;
  recopients: Recipient[];
}

export interface Recipient {
  name: string;
  allowances: Allowance[];
}


export interface Allowance {
  id: number;
  isDone: boolean;
  title: string;
  amount: number;
  memo: string;
}
