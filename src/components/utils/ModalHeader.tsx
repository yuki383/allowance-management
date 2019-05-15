import * as React from "react";
import { Header, Left, Icon, Body, Title, Right } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Icon: {
    padding: 10,
  }
})

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class ModalHeader extends React.Component<Props> {
  render() {
    return(
        <Header>
          <Left>
            <Icon
              style={styles.Icon}
              type="AntDesign" 
              name="down"
            />
          </Left>
          <Body style={{ alignItems: "center" }}>
          </Body>
          <Right></Right>
        </Header>
    )
  }
}