import * as React from "react";
import { StyleSheet, } from "react-native";
import { 
  View,
  Text,
  Container,
  Content,
} from "native-base";
import { NavigationScreenProp } from "react-navigation";

import AllowanceList from "./AllowanceList";

interface Props {
  navigation: NavigationScreenProp<any, any>
  
}
export default class AllowanceListScreen extends React.Component<Props> {

  static navigationOptions = {
    title: "AllowanceListScreen"

  }

  render() {
    return(
      <Container>
        <Content>
          <AllowanceList navigation={this.props.navigation} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})