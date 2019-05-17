import * as React from "react";
import { Container, Content, Form, Item, Header, Text, Input, Picker, Icon, Button, Label, Left, Body, Right, Title, ActionSheet } from "native-base";
import { connect } from "react-redux";
import { addDefaultAllowance, updateDefaultAllowance, deleteDefaultAllowance, Payload } from "../../actions/DefaultActions";
import { addAllowance, } from "../../actions/AllowanceActions";
import { addMonthAllowance } from "../../actions/MonthListActions";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "./ModalHeader";
import { Allowance } from "../../constants/types";

interface Props {
  addDefaultAllowance: (defaults: Allowance) => void;
  addAllowance: (allowance: Allowance) => void;
  addMonthAllowance: (payload: {id: number; allowance: number;}) => void;
  allowanceId: number[];
  navigation: NavigationScreenProp<{ mode?: "default" }>;
}

interface State {
  userId: number;
  title: string;
  amount: string;
  memo: string;
  mode: string;
}



class AllowanceForm extends React.Component<Props, State> {
  constructor(props) {
    super(props),
      this.state = {
        userId: 0,
        title: "",
        amount: "",
        memo: "",
        mode: "",
      }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const mode = navigation.getParam("mode");
    const date = navigation.getParam("month");
    this.setState({ mode });
    // Userのドメインを作成したらマウント時にuserIdを降順一番上のユーザーのものにする
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker stackedLabel >
              <Label>User</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.userId}
                onValueChange={itemValue => { this.setState({ userId: itemValue }) }}
              >
                <Picker.Item label={"hoge"} value={1} />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>Title</Label>
              <Input onChangeText={title => this.setState({ title })} />
            </Item>
            <Item stackedLabel>
              <Label>amount</Label>
              <Input onChangeText={amount => this.setState({ amount })} />
            </Item>
            <Item stackedLabel>
              <Label>memo</Label>
              <Input onChangeText={memo => this.setState({ memo })} />
            </Item>
            <Button onPress={() => this._pressSubmitButton()} >
              <Text>button</Text>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("UserForm");
              }} >
              <Text>user form</Text>
            </Button>
          </Form>
          <Text>userId: {this.state.userId}</Text>
          <Text>title: {this.state.title}</Text>
          <Text>amount: {this.state.amount}</Text>
          <Text>memo: {this.state.memo}</Text>
        </Content>
      </Container>
    )
  }

  _pressSubmitButton() {
    const { title, amount, mode} = this.state;
    if(title.length > 0 && parseInt(amount) >= 0) {
      switch(mode) {
        case "default":
          this._addDefaultAllowance();
          break;
        default:
          this._addAllowaneOfMonth();
          break;
      }
      this.props.navigation.pop();
    }
    
  }

  _addDefaultAllowance() {
    const { userId, title, amount, memo } = this.state;
    const monthId = this.props.navigation.getParam("monthId");
    this.props.addDefaultAllowance({ id: -1, userId, title, amount, memo, isDone: false });

  }

  _addAllowaneOfMonth() {
    const { userId, title, amount, memo } = this.state;
    const { allowanceId, navigation } = this.props;
    const newId = allowanceId.length > 0 ? allowanceId[allowanceId.length - 1] + 1 : 0;
    const monthId = navigation.getParam("monthId");
    this.props.addAllowance({ id: newId, userId, title, amount, memo, isDone: false });
    this.props.addMonthAllowance({id: monthId, allowance: newId});
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    allowanceId: state.allowance.ids,
    
    ...state.users,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  { addDefaultAllowance, addAllowance, addMonthAllowance }
)(AllowanceForm);