import * as React from "react";
import {List } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import MonthListItem from "./MonthListItem";
import { connect } from "react-redux";
import { Month } from "../../constants/types";

interface Props {
  navigation: NavigationScreenProp<any, any> 
  monthList: Month;
  ids: number[];
}

class MonthList extends React.Component<Props> {
  render() {
    const items = this.props.ids.map(id => {
      return <MonthListItem key={id} month={this.props.monthList[id]} navigation={this.props.navigation} />
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