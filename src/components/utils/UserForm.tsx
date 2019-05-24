import * as React from "react";
import { Container, Content, Form, Item, Label, Input, Button, Text } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { addUser } from "../../actions/UsersActions";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any>
  addUser: ({ name: string }) => void;
}

interface State {
  name: string;
}

class UserForm extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }

  render() {
    return(
        <Container>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>User Name</Label>
                <Input onChangeText={name => this.setState({ name })} />
              </Item>
              <Button
                onPress={() => this._addUser()}
              >
                <Text>Create</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    )
  }

  _addUser() {
    const { name } = this.state;
    this.props.addUser({ name });
    this.props.navigation.goBack();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  { addUser }
)(UserForm);