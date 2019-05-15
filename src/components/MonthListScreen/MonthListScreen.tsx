import * as React from "react";
import { StyleSheet, } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Icon,
} from "native-base";
import { NavigationScreenProp } from "react-navigation";

import MonthList from "./MonthList";
import { NavigationOptions, Month, } from "../../constants/types";
import { connect } from "react-redux";
import { createMonthList } from "../../actions/MonthListActions";
import { State as MonthState } from "../../reducers/MonthReducer";
import { State as DefaultState } from "../../reducers/DefaultStatusReducer";
import { getDefaultAllowance } from "../../models";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  monthListState: MonthState;
  defaultState: DefaultState;
  ids: number[];
  createMonthList: ({ date: string, allowance: number }) => void;
}

class AllowanceListScreen extends React.Component<Props> {

  componentDidMount() {
    this.props.navigation.setParams({createMonthList: this.props.createMonthList});
    this._createMonthItem();
  }

  render() {
    return (
      <Container>
        <Content>
          <MonthList navigation={this.props.navigation} />
        </Content>
      </Container>
    )
  }

  _createMonthItem = () => {
    const { createMonthList, monthListState, defaultState } = this.props;
    const { ids, monthList} = monthListState;
    const defaults = getDefaultAllowance(defaultState);
    const nextMonth = this._getMonth(1);
    if (ids.length === 0) {
      createMonthList({ date: this._getMonth(0), allowance: 0 });
    }
    if (!ids.some(id => monthList[id].date === nextMonth)) {
      createMonthList({ date: nextMonth, allowance: 0 });
    }
  }

  _getMonth = (plus: number) => {
    const date = new Date();
    return date.getFullYear() + "/" + ("00" + (date.getMonth() + 1 + plus)).slice(-2);
  }

  /**
   * TODO AllowanceReducerを実装したら、
   * デフォルトから付きのAllowanceを作成
   * 作成したAllowanceのIDからMonthListを作成
   */
  _createAllowance = (state: DefaultState) => {
    const { ids: Ids, allowances } = state;
    let idsOfMonth = [];

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    monthListState: state.monthList,
    defaultState: state.defaultAllowance,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  { createMonthList }
)(AllowanceListScreen);