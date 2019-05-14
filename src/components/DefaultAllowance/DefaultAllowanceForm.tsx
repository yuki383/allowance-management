import * as React from "react";
import { Container, Content, Form, Item, Header, Text, Input, Picker, Icon, Button, Label, Left, Body, Right, Title } from "native-base";
import { connect } from "react-redux";
import { addDefaultAllowance, updateDefaultAllowance, deleteDefaultAllowance, Payload } from "../../actions/DefaultActions";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  addDefaultAllowance: (defaults: Payload) => void;
  updateDefaultAllowance: (defaults: Payload) => void;
  deleteDefaultAllowance: (defaults: Payload) => void;
  navigation: NavigationScreenProp<any>;
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
          <Left>
            <Icon type="AntDesign" name="down"
              onPress={() => this.props.navigation.goBack()}
            />
          </Left>
          <Body style={{ alignItems: "center" }}>
            <Title>DefaultAllowanceForm</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <Form>
            <Item picker stackedLabel >
              <Label>User</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.userId}
                onValueChange={itemValue => {this.setState({ userId: itemValue })}}
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
    this.props.navigation.goBack();
  }

}

const mapStateToProps = (state, ownProps) => {
}

export default connect(
null,
{ addDefaultAllowance }
)(DefaultAllowanceForm);