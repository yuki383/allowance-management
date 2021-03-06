import * as React from "react";
import { Container, Content } from "native-base";
import { NavigationScreenProp, } from "react-navigation";
import Recipients from "./Recipients";
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
