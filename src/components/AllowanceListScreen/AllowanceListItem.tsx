import * as React from "react";
import { View, Text, ListItem, Left, Right, Icon,  } from "native-base";
import { StyleSheet, Alert } from "react-native";

interface Props {
  date: string;
  isDone: boolean;
}
export default class AllowanceListItem extends React.Component<Props> {
  render() {
    const { date, isDone } = this.props;
    const color = isDone ? "green" : "gray";

    return(
      <ListItem
        onPress={() => Alert.alert("pushed", `date is ${date}`)}
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