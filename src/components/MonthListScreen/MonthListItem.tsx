import * as React from "react";
import { View, Text, ListItem, Left, Right, Icon,  } from "native-base";
import { StyleSheet, Alert } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Allowance, RecipientsList, MonthLists } from "../../constants/types";
import Recipients from "../RecipientsScreen/Recipients";

interface Props {
  monthList: MonthLists;
  navigation: NavigationScreenProp<any, any>
}
export default class MonthListItem extends React.Component<Props> {
  render() {
    const { navigation, monthList } = this.props;
    const { date, isDone } = monthList;
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