import * as React from "react";
import { View, Text, Grid, Row, Col, Container, Content, } from "native-base";
import { NavigationScreenProp, } from "react-navigation";
import Recipients from "./Recipients";

import {
  NavigationOptions,
} from "../../constants/types";

interface Props {
  navigation: NavigationScreenProp<any>;
}

export default class AllwanceProertyScreen extends React.Component<Props> {

  static navigationOptions: NavigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title")
  })

  render() {
    return (
      <Container>
        <Content>
          <Recipients navigation={this.props.navigation} />
        </Content>
      </Container>
    )
  }
}
