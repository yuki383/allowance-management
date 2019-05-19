import * as React from "react";
import { Container, Content, Form, Item, Header, Text, Input, Picker, Icon, Button, Label, Left, Body, Right, Title, ActionSheet } from "native-base";
import { connect } from "react-redux";
import { addDefaultAllowance, updateDefaultAllowance, deleteDefaultAllowance, Payload } from "../../actions/DefaultActions";
import { addAllowance, } from "../../actions/AllowanceActions";
import { addMonthAllowance } from "../../actions/MonthListActions";
import { inputAllowanceState } from "../../actions/FormStateActions";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "./ModalHeader";
import { Allowance, User, AllowanceFormState, AllowanceInputs } from "../../constants/types";
import UserPicker from "./AllowanceForm/UserPicker";
import AllowanceFormItems from "./AllowanceForm/AllowanceFormItems";

interface Inputed {
  userId: number;
  title: string;
  amount: string;
  memo: string;
}

interface Props {
  addDefaultAllowance: (defaults: Allowance) => void;
  addAllowance: (allowance: Allowance) => void;
  addMonthAllowance: (payload: {id: number; allowance: number;}) => void;
  inputAllowanceState: (payload: AllowanceFormState) => void;
  users: User;
  inputs: AllowanceFormState;
  allowanceId: number[];
  navigation: NavigationScreenProp<{ mode?: "default" }>;
}

class AllowanceForm extends React.Component<Props> {

  componentDidMount() {
    const { navigation } = this.props;
    const mode = navigation.getParam("mode");
    const date = navigation.getParam("month");
    // Userのドメインを作成したらマウント時にuserIdを降順一番上のユーザーのものにする
  }

  render() {
    const { users, inputs} = this.props;
    return (
      <Container>
        <Content>
          <AllowanceFormItems
            users={users}
            values={inputs}
            handleChangePicker={input => this._changePicker(input)}
            handleChangeValue={input => this._changeValue(input)}
          />
          <Button
            onPress={() => this._pressSubmitButton()}
          >
            <Text>submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }

  _pressSubmitButton() {
    const { inputs, navigation } = this.props;
    const { userId, title, amount, memo } = inputs;
    const mode = navigation.getParam("mode");

    if(title && amount) {
      switch(mode) {
        case "default":
          this._addDefaultAllowance();
          break;
        default:
          this._addAllowaneOfMonth();
          break;
      }
      navigation.pop();
    }
    
  }

  _addDefaultAllowance() {
    const { userId, title, amount, memo } = this.props.inputs as Inputed;
    const monthId = this.props.navigation.getParam("monthId");
    this.props.addDefaultAllowance({ id: -1, userId, title, amount, memo, isDone: false });

  }

  _addAllowaneOfMonth() {
    const { allowanceId, navigation, inputs } = this.props;
    const { userId, title, amount, memo } = inputs as Inputed;
    const newId = allowanceId.length > 0 ? allowanceId[allowanceId.length - 1] + 1 : 0;
    const monthId = navigation.getParam("monthId");
    this.props.addAllowance({ id: newId, userId, title, amount, memo, isDone: false });
    this.props.addMonthAllowance({id: monthId, allowance: newId});
  }

  _changePicker(input: string): void {
    const { inputs, inputAllowanceState } = this.props;
    inputAllowanceState({
      ...inputs,
      userId: parseInt(input)
    });
  };

  _changeValue(input: AllowanceInputs) {
    const { inputs, inputAllowanceState } = this.props;
    inputAllowanceState({
      ...inputs,
      ...input
    });
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    allowanceId: state.allowance.ids,
    inputs: state.allowanceForm,
    users: state.users,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  { addDefaultAllowance, addAllowance, addMonthAllowance, inputAllowanceState }
)(AllowanceForm);