import * as React from "react"
import Recipients from "../RecipientsScreen/Recipients";
import { Text, Icon } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { NavigationOptions } from "../../constants/types";

interface Props {
  navigation: NavigationScreenProp<any>;
}

export default class DefaultAllowance extends React.Component<Props> {

  static navigationOptions: NavigationOptions = ({ navigation }) => ({
    title: "Default",
    headerRight: (
      <Icon 
       type="AntDesign"
       name="plus"
      onPress={() => navigation.navigate("DefaultAllowanceForm")}
      />
    ),
  })

  componentDidMount() {
    // this.props.navigation.setParams({openForm: this.props.navigation.navigate("DefaultAllowanceForm")})
  }

  render() {
    return(
      <Recipients navigation={this.props.navigation} />
    )
  }

  _openAllowanceForm() {

  }
}