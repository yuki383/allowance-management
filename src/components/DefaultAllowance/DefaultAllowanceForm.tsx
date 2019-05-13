import * as React from "react";
import { Container, Content, Form, Item, Header, Text, Input, Picker, Icon, Button } from "native-base";
import { connect } from "react-redux";
import { addDefaultAllowance, updateDefaultAllowance, deleteDefaultAllowance, Payload } from "../../actions/DefaultActions";

interface Props {
  addDefaultAllowance: (defaults: Payload) => void;
  updateDefaultAllowance: (defaults: Payload) => void;
  deleteDefaultAllowance: (defaults: Payload) => void;
}

interface State {
  userId: number;
  title: string;
  amount: string;
  memo: string;
}

class DefaultAllowanceForm extends React.Component<Props, State> {
  constructor(props) {
    super(props),
    this.state = {
      userId: 1,
      title: "",
      amount: "",
      memo: "",
    }
  }

  componentDidMount() {
    // Userのドメインを作成したらマウント時にuserIdを降順一番上のユーザーのものにする
  }

  render() {
    return(
      <Container>
        <Header>
          <Text>{this.state.title}</Text>
        </Header>
        <Content>
          <Form>
            <Item picker stackedLabel >
              <Picker
                mode="dropdown"
                placeholder="User"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.userId}
                onValueChange={itemValue => {this.setState({ userId: itemValue })}}
              >
                <Picker.Item label={"hoge"} value={1} />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Input placeholder="Title" onChangeText={title => this.setState({ title })} />
            </Item>
            <Item>
              <Input placeholder="amount" onChangeText={amount => this.setState({ amount })} />
            </Item>
            <Item>
              <Input placeholder="memo" onChangeText={memo => this.setState({ memo })} />
            </Item>
              <Button onPress={() => this._addDefaultAllowance()} >
                <Text>button</Text>
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

  _addDefaultAllowance() {
    const { userId, title, amount, memo } = this.state;
    console.log(userId, title, amount, memo)
    this.props.addDefaultAllowance({ id: -1, userId, title, amount, memo });
  }

}

const mapStateToProps = (state, ownProps) => {
}

export default connect(
null,
{ addDefaultAllowance }
)(DefaultAllowanceForm);