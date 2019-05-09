import * as React from "react";
import { Header, Left, Icon } from "native-base";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class ModalHeader extends React.Component<Props> {
  render() {
    return(
      <Header>
        <Left>
          <Icon type="AntDesign" name="down" onPress={() => this.props.navigation.goBack()} />
        </Left>
      </Header>
    )
  }
}