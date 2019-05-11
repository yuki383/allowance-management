import * as React from "react";
import { View, Text, List, ListItem, } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { MonthList as monthLists} from "../../constants/types";

import MonthListItem from "./MonthListItem";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any, any> 
  monthLists: monthLists[];
}

class MonthList extends React.Component<Props> {
  render() {
    const items = this.props.monthLists.map(property => {
      const monthList = { date: property.date, isDone: property.isDone };
      return <MonthListItem key={property.date} monthList={monthList} navigation={this.props.navigation} />
    })

    return (
      <List>
        {items}
      </List>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.monthList,
    ...ownProps
  }
}

export default connect(mapStateToProps)(MonthList);