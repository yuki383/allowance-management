import * as React from "react";
import { Container, Content, Text, Button } from "native-base";
import { connect } from "react-redux";
import { addDefaultAllowance } from "../../actions/DefaultActions";
import { addAllowance, } from "../../actions/AllowanceActions";
import { addMonthAllowance } from "../../actions/MonthListActions";
import { inputAllowanceState } from "../../actions/FormStateActions";
import { NavigationScreenProp } from "react-navigation";
import { Allowance, User, AllowanceFormState, AllowanceInputs, Tags } from "../../constants/types";
import AllowanceFormItems from "./AllowanceForm/AllowanceFormItems";

interface Inputed {
  userId: number;
  tags?: Tags;
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
   // Userのドメインを作成したらマウント時にuserIdを降順一番上のユーザーのものにする
  }

  // TODO 入力中にフォームを閉じた場合に値が残ったままになるバグの修正
  render() {
    const { users, inputs} = this.props;
    return (
      <Container>
        <Content>
          <AllowanceFormItems
            users={users}
            values={inputs}
            handleChangeUserPicker={input => this._changeUserPicker(input)}
            handleChangeTagsPicker={input => this._changeTagsPicker(input)}
            handleChangeValue={input => this._changeValue(input)}
          />
          <Button
            style={{ padding: 10}}
            onPress={() => this._pressSubmitButton()}
          >
            <Text>submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }

  _pressSubmitButton() {
    const { inputs, navigation, inputAllowanceState, users } = this.props;
    const { userId, title, amount, memo } = inputs;
    const mode = navigation.getParam("mode");

    if(title && amount && users.Ids.length) {
      switch(mode) {
        case "default":
          this._addDefaultAllowance();
          break;
        default:
          this._addAllowaneOfMonth();
          break;
      }
      inputAllowanceState({ userId: 0, tags: undefined, memo: "", title: undefined, amount: undefined});
      navigation.pop();
    }
    
  }

  _addDefaultAllowance() {
    const { userId, title, amount, memo, tags } = this.props.inputs as Inputed;
    const monthId = this.props.navigation.getParam("monthId");
    this.props.addDefaultAllowance({ id: -1, userId, tags, title, amount, memo, isDone: false });

  }

  _addAllowaneOfMonth() {
    const { allowanceId, navigation, inputs } = this.props;
    const { userId, title, amount, memo, tags } = inputs as Inputed;
    const newId = allowanceId.length > 0 ? allowanceId[allowanceId.length - 1] + 1 : 0;
    const monthId = navigation.getParam("monthId");
    this.props.addAllowance({ id: newId, userId, tags, title, amount, memo, isDone: false });
    this.props.addMonthAllowance({id: monthId, allowance: newId});
  }

  _changeUserPicker(input: string): void {
    const { inputs, inputAllowanceState } = this.props;
    inputAllowanceState({
      ...inputs,
      userId: parseInt(input)
    });
  };

  _changeTagsPicker(input?: Tags): void {
    const { inputs, inputAllowanceState } = this.props;
    inputAllowanceState({
      ...inputs,
      tags: input,
    });
  }

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