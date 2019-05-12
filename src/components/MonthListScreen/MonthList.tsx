import * as React from "react";
import { View, Text, List, ListItem, } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import MonthListItem from "./MonthListItem";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any, any> 
  monthLists: string[];
}

class MonthList extends React.Component<Props> {
  render() {
    const items = this.props.monthLists.map(date => {
      return <MonthListItem key={date} month={date} navigation={this.props.navigation} />
    });
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