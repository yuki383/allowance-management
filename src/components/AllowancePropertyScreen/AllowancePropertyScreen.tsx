import * as React from "react";
import { View, Text, Button, Icon, Container, Content, Header, Left } from "native-base";
import { Allowance, NavigationOptions } from "../../constants/types";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "../utils/ModalHeader";
import { connect } from "react-redux";
import { doneAllowance, deleteAllowance } from "../../actions/AllowanceActions";
import { deleteMonthAllowance } from "../../actions/MonthListActions";

interface Props {
  navigation: NavigationScreenProp<any>
  allowances: Allowance[];
  doneAllowance: ({ id: number }) => void;
  deleteAllowance: ({ id: number }) => void;
  deleteMonthAllowance: (payload: { monthId: number, allowanceId: number }) => void;
}

class AllowancePropertyScreen extends React.Component<Props> {

  render() {
    const { navigation, allowances } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    if (allowances[allowanceId]) {
      const { id, isDone, title, amount, memo } = allowances[allowanceId];

      return (
        <Container>
          <Content>
            <Text>id: {id}</Text>
            <Text>isDone: {isDone ? "true" : "false"}</Text>
            <Text>title: {title}</Text>
            <Text>amount: {amount}</Text>
            <Text>memo: {memo}</Text>
            {this._doneToggleButton(isDone)}
            <Button
              onPress={() => this._deleteAllowance(id)}
            >
              <Text>削除</Text>
            </Button>
          </Content>
        </Container>
      )
    } else {
      return (
        <Container></Container>
      )
    }
  }

  _doneToggleButton(isDone: boolean) {
    const { doneAllowance, navigation } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    const buttonText = isDone ? "未完了にする" : "完了にする";

    return <Button onPress={() => doneAllowance({ id: allowanceId })} ><Text>{buttonText}</Text></Button>
  }

  _deleteAllowance(allowanceId: number) {
    const { deleteAllowance, deleteMonthAllowance, navigation } = this.props;
    const monthId = navigation.getParam("monthId");
    deleteAllowance({ id: allowanceId });
    deleteMonthAllowance({ monthId, allowanceId });
    navigation.popToTop();
  }

}

const mapStateToProps = (state) => ({
  allowances: state.allowance.allowances,
})

export default connect(
  mapStateToProps,
  { doneAllowance, deleteAllowance, deleteMonthAllowance }
)(AllowancePropertyScreen);
