import * as React from "react";
import { View, Container, Content, Form, Item, Label, Input, Button, Text } from "native-base";

export class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }

  render() {
    return(
      <View>
        <Container>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>User Name</Label>
                <Input onChangeText={name => this.setState({ name })} />
              </Item>
              <Button
                onPress={() => {}}
              >
                <Text>Create</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </View>
    )
  }
}