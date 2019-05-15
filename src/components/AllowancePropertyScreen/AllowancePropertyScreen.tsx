import * as React from "react";
import { View, Text, Button, Icon, Container, Content, Header, Left } from "native-base";
import { Allowance, NavigationOptions } from "../../constants/types";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "../utils/ModalHeader";

interface Props {
  navigation: NavigationScreenProp<any, {allowance: Allowance}>
}

export default class AllowancePropertyScreen extends React.Component<Props> {

  render() {
    const { navigation } = this.props;
    const { id, isDone, title, amount, memo } = navigation.getParam("allowance");
    return(
      <Container>
        <Content>
          <Text>id: {id}</Text>
          <Text>isDone: {isDone ? "true": "false"}</Text>
          <Text>title: {title}</Text>
          <Text>amount: {amount}</Text>
          <Text>memo: {memo}</Text>
        </Content>
      </Container>
    )
  }
}
