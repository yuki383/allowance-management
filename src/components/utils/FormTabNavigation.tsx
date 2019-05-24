import * as React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Tabs, Tab, Container, Header, Left, Icon, Body, Right } from "native-base";
import AllowanceForm from "./AllowanceForm";
import UserForm from "./UserForm";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  Icon: {
    padding: 10,
  }
})

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

export class FormTabNavigation extends React.Component<Props> {

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Icon
              style={styles.Icon}
              type="AntDesign" 
              name="down"
              onPress={() => this.props.navigation.pop()}
            />
          </Left>
          <Body style={{ alignItems: "center" }}>
          </Body>
          <Right></Right>
        </Header>
        <Tabs>
          <Tab heading="allowance">
            <AllowanceForm navigation={navigation} />
          </Tab>
          <Tab heading="users">
            <UserForm navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
