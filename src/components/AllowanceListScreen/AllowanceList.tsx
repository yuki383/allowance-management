import * as React from "react";
import { View, Text, List, ListItem, } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import AllowanceListItem from "./AllowanceListItem";

const arr = [
  {
    date: "2019/4",
    isDone: true,
  },
  {
    date: "2019/5",
    isDone: false,
  },
  {
    date: "2019/6",
    isDone: true,
  },

]

interface Props {
  navigation: NavigationScreenProp<any, any> 
}

export default class AllowanceList extends React.Component<Props> {
  render() {
    const items = arr.map(property => {
      return <AllowanceListItem key={property.date} allowance={property} navigation={this.props.navigation} />
    })

    return (
      <List>
        {items}
      </List>
    )
  }
}