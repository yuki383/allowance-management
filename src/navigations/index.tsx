import * as React from "react";
import { Icon } from "native-base";
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import MonthListScreen from "../components/MonthListScreen/MonthListScreen";
import AllowancePropertyScreen from "../components/AllowancePropertyScreen/AllowancePropertyScreen";
import RecipientsScreen from "../components/RecipientsScreen/RecipientsScreen";
import DefaultAllowance from "../components/DefaultAllowance/DefaultAllowance";
import AllowanceForm from "../components/utils/AllowanceForm";
import ModalHeader from "../components/utils/ModalHeader";
import UserForm from "../components/utils/UserForm";

import { NavigationOptions } from "../constants/types";
import { Modal } from "react-native";
import { FormTabNavigation } from "../components/utils/FormTabNavigation";

const MainStack = createStackNavigator(
  {
    AllowanceList: {
      screen: MonthListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "MonthList",
        headerRight: (
          <Icon
            type="AntDesign"
            name="setting"
            style={{ padding: 10}}
            onPress={() => navigation.navigate("Defaults", { title: "Defaults" })}
          />
        )

      })
    },
    Recipients: {
      screen: RecipientsScreen,
      navigationOptions: ({ navigation }) => {
        const monthId = navigation.getParam("monthId");
        return {
        title: navigation.getParam("title"),
        headerRight: <Icon
          type="AntDesign"
          name="plus"
          style={{padding:10}}
          onPress={() => navigation.navigate("Forms", { mode: "allowance", monthId})}
        />
      }}
    },
    Defaults: {
      screen: DefaultAllowance,
      navigationOptions: ({ navigation }) => ({
        title: "Default",
        headerRight: (
          <Icon
            type="AntDesign"
            style={{ padding: 10 }}
            name="plus"
            onPress={() => navigation.navigate("Forms", { mode: "default"})}
          />
        ),
      })
    }
  },
);

const Forms = createMaterialTopTabNavigator({
    AllowanceForm: {
      screen: AllowanceForm,
    },
    UserForm: {
      screen: UserForm,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: <ModalHeader navigation={navigation} />
    }),
    tabBarOptions: {
      tabStyle: {backgroundColor: "#EEEEEE"},
      activeTintColor: "gray"
    }
  }
)

const WrapedForm = createStackNavigator({
  Forms: {
    screen: Forms,
  },
},
)


const WrapedProperty = createStackNavigator({
  AllowancePropertyModal: {
      screen: AllowancePropertyScreen,
      navigationOptions: ({navigation}) => ({
        header: <ModalHeader navigation={navigation} />
      })
  }
})


export const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Property: {
      screen: WrapedProperty,
    },
    Forms: {
      screen: FormTabNavigation,
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "Main",
  }
)


