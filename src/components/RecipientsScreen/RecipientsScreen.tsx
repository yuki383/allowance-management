import * as React from "react";
import { View, Text, Grid, Row, Col, Container, Content, Button, } from "native-base";
import { NavigationScreenProp, } from "react-navigation";
import Recipients from "./Recipients";

import {
  NavigationOptions,
} from "../../constants/types";
import { StyleSheet } from "react-native";

interface Props {
  navigation: NavigationScreenProp<any>;
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: "#f3f3f3"
  }
})


export default class AllwanceProertyScreen extends React.Component<Props> {

  render() {
    return (
      <Container>
        <Content style={styles.ViewStyle}>
          <Recipients navigation={this.props.navigation} />
        </Content>
      </Container>
    )
  }
}
