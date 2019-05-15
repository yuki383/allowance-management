import * as React from "react"
import RecipientItem from "../RecipientsScreen/RecipientItem";
import { Text, Icon, Grid, ActionSheet, Container, Content, View } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { NavigationOptions, Allowance, AllowanceState } from "../../constants/types";
import { Payload, } from "../../actions/DefaultActions";
import { getDefaultAllowance } from "../../models";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any>;
  allowanceState: AllowanceState;
}

class DefaultAllowance extends React.Component<Props> {

  componentDidMount() {
    this.props.navigation.setParams({ actionSheet: this._openActionSheet })
  }

  render() {
    const { navigation, allowanceState } = this.props;
    const itemList: Allowance[] = getDefaultAllowance(allowanceState);

    return(
      <Container>
        <Content>
          <View>
          <RecipientItem name="hoge" allowances={itemList} navigation={navigation} />
          <RecipientItem name="fuga" allowances={itemList} navigation={navigation} />
</View>
        </Content>
      </Container>
    )
  }

  _openActionSheet() {
    const buttons = ["User", "Allowance", "Cancel"];
    const cancelIndex = 2;
    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex: cancelIndex,
        title: "action",
      },
      buttonIndex => {}
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allowanceState: state.defaultAllowance,
  }
}

export default connect(
  mapStateToProps,
)(DefaultAllowance);