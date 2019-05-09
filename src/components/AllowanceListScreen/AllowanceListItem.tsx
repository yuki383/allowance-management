import * as React from "react";
import { View, Text, ListItem, Left, Right, Icon,  } from "native-base";
import { StyleSheet, Alert } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  allowance: {
    date: string,
    isDone: boolean,
  }
  navigation: NavigationScreenProp<any, any>
}
export default class AllowanceListItem extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    const { date, isDone } = this.props.allowance;
    const color = isDone ? "green" : "gray";

    return(
      <ListItem
        onPress={() => 
          navigation.navigate("Recipients", {
            date: date,
          })}
      >
        <Left>
          <Text>{date}</Text>
        </Left>
        <Right>
          <Icon type="AntDesign" name="check" style={{ color }} />
        </Right>
      </ListItem>
    ) 
  }
}

const styles = StyleSheet.create({
})