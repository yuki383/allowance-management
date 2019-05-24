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
import { store, persistor } from "./configureStore";
import { Root, Button, Text, } from "native-base";
import { PersistGate } from "redux-persist/integration/react";

import { RootStack } from "./navigations";


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    // TODO 完成時にpurgeのボタンを削除する
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <Root>
            <AppContainer />
            <Button onPress={() => persistor.purge()} ><Text>purge </Text></Button> 
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
