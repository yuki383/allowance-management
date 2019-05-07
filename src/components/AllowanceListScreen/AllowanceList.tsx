import * as React from "react";
import { View, Text, List, ListItem, } from "native-base";

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

}

export default class AllowanceList extends React.Component<Props> {
  render() {
    const items = arr.map(obj => {
      return <AllowanceListItem key={obj.date} date={obj.date} isDone={obj.isDone} />
    })

    return (
      <List>
        {items}
      </List>
    )
  }
}