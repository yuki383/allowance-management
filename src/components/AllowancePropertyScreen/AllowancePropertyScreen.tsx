import * as React from "react";
import { View, Text, Button, Icon, Container, Content, Header, Left } from "native-base";
import { Allowance, NavigationOptions } from "../../constants/types";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "../utils/ModalHeader";
import { connect } from "react-redux";
import { doneAllowance } from "../../actions/AllowanceActions";

interface Props {
  navigation: NavigationScreenProp<any>
  allowances: Allowance[];
  doneAllowance: ({id: number}) => void;
}

class AllowancePropertyScreen extends React.Component<Props> {

  render() {
    const { navigation, allowances, doneAllowance } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    const { id, isDone, title, amount, memo } = allowances[allowanceId];
    const doneButtonText = isDone ? "未完了にする" : "完了にする";
    
    return(
      <Container>
        <Content>
          <Text>id: {id}</Text>
          <Text>isDone: {isDone ? "true": "false"}</Text>
          <Text>title: {title}</Text>
          <Text>amount: {amount}</Text>
          <Text>memo: {memo}</Text>
          {this._doneToggleButton(isDone)}
        </Content>
      </Container>
    )
  }

  _doneToggleButton(isDone: boolean) {
    const { doneAllowance, navigation } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    const buttonText = isDone ? "未完了にする" : "完了にする";

    return <Button onPress={() => doneAllowance({id: allowanceId})} ><Text>{buttonText}</Text></Button>
  }
}

const mapStateToProps = (state) => ({
  allowances: state.allowance.allowances,
})

export default connect(
  mapStateToProps,
  { doneAllowance }
)(AllowancePropertyScreen);
