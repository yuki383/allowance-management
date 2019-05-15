import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import MonthListScreen from "../components/MonthListScreen/MonthListScreen";
import AllowancePropertyScreen from "../components/AllowancePropertyScreen/AllowancePropertyScreen";
import RecipientsScreen from "../components/RecipientsScreen/RecipientsScreen";
import DefaultAllowance from "../components/DefaultAllowance/DefaultAllowance";
import AllowanceForm from "../components/utils/AllowanceForm";
import ModalHeader from "../components/utils/ModalHeader";

import { NavigationOptions } from "../constants/types";


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
);

const Forms = createMaterialTopTabNavigator(
  {
    AllowanceForm: {
      screen: AllowanceForm,
    },
  }
)

const WrapedForm = createStackNavigator({
  Forms: {
    screen: Forms,
  }
},
{
})


export const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    AllowancePropertyModal: {
      screen: AllowancePropertyScreen,
    },
    Forms: {
      screen: AllowanceForm,
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "Main",
  }
)


