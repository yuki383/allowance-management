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
import { Root, } from "native-base";

import MonthListScreen from "./components/MonthListScreen/MonthListScreen";
import AllowancePropertyScreen from "./components/AllowancePropertyScreen/AllowancePropertyScreen";
import RecipientsScreen from "./components/RecipientsScreen/RecipientsScreen";

import DefaultAllowance from "./components/DefaultAllowance/DefaultAllowance";
import AllowanceForm from "./components/utils/AllowanceForm";

const DefaultAllowanceStack = createStackNavigator({
  DefaultsScreen: {
    screen: DefaultAllowance,
  },
  DefaultAllowanceForm: {
    screen: AllowanceForm
  }
},
{
  mode: "modal",
})


const MainStack = createStackNavigator(
  {
    AllowanceList: {
      screen: MonthListScreen,
    },
    Recipients: {
      screen: RecipientsScreen,
    },
    Defaults: {
      screen: DefaultAllowance,
    }
  },
  {
    mode: "card",
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    AllowancePropertyModal: {
      screen: AllowancePropertyScreen,
    },
    DefaultAllowanceForm: {
      screen: AllowanceForm,
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
      <Root>
        <AppContainer />
        </Root>
      </Provider>
    );
  }
}
