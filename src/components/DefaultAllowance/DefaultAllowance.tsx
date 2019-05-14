import * as React from "react"
import Recipients from "../RecipientsScreen/Recipients";
import RecipientItem from "../RecipientsScreen/RecipientItem";
import { Text, Icon } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { NavigationOptions, Allowance } from "../../constants/types";
import { Payload, } from "../../actions/DefaultActions";
import { getDefaultAllowance } from "../../models";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any>;
  allowances: {
    [id: number]: Payload;
  };
  Ids: number[];
}

class DefaultAllowance extends React.Component<Props> {

  static navigationOptions: NavigationOptions = ({ navigation }) => ({
    title: "Default",
    headerRight: (
      <Icon 
       type="AntDesign"
       style={{ padding: 10}}
       name="plus"
      onPress={() => navigation.navigate("DefaultAllowanceForm")}
      />
    ),
  })

  componentDidMount() {
  }

  render() {
    const { Ids, allowances, navigation } = this.props;
    const itemList: Allowance[] = getDefaultAllowance(Ids, allowances);

    return(
      <RecipientItem name="hoge" allowances={itemList} navigation={navigation} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ...state.defaultAllowance,
  }
}

export default connect(
  mapStateToProps,
)(DefaultAllowance);