/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import * as React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { store } from "./configureStore";

import MonthListScreen from "./components/MonthListScreen/MonthListScreen";
import AllowancePropertyScreen from "./components/AllowancePropertyScreen/AllowancePropertyScreen";
import RecipientsScreen from "./components/RecipientsScreen/RecipientsScreen";

const MainStack = createStackNavigator(
  {
    AllowanceList: {
      screen: MonthListScreen,
    },
    Recipients: {
      screen: RecipientsScreen,
    }
  },
  {
    mode: "card"
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    AllowancePropertyModal: {
      screen: AllowancePropertyScreen,
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
