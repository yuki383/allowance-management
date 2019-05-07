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

import AllowanceListScreen from "./components/AllowanceListScreen/AllowanceListScreen";

const AppNavigator = createStackNavigator({
  AllowanceList: {
    screen: AllowanceListScreen,
  },
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
