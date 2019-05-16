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
import { connect } from "react-redux";
import { createMonthList } from "../../actions/MonthListActions";
import { State as MonthState } from "../../reducers/MonthReducer";
import { State as DefaultState } from "../../reducers/DefaultStatusReducer";
import { getAllowance } from "../../models";
import { addAllowance } from "../../actions/AllowanceActions";
import { Allowance } from "../../constants/types";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  monthListState: MonthState;
  defaultState: DefaultState;
  allowanceId: number[];
  ids: number[];
  createMonthList: ({ date: string, allowance: number }) => void;
  addAllowance: (allowance: Allowance) => void;
}

class AllowanceListScreen extends React.Component<Props> {

  componentDidMount() {
    this.props.navigation.setParams({ createMonthList: this.props.createMonthList });
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

  async _createMonthItem() {
    const { createMonthList, monthListState, defaultState } = this.props;
    const { ids, monthList } = monthListState;
    const defaults = getAllowance(defaultState);
    const nextMonth = this._getMonth(1);
    if (ids.length === 0) {
      const allowances = this._createAllowance(defaults);
      createMonthList({ date: this._getMonth(0), allowance: allowances });
    }
    if (!ids.some(id => monthList[id].date === nextMonth)) {
      const allowances = this._createAllowance(defaults);
      createMonthList({ date: nextMonth, allowance: allowances });
    }
  }

  _getMonth = (plus: number) => {
    const date = new Date();
    return date.getFullYear() + "/" + ("00" + (date.getMonth() + 1 + plus)).slice(-2);
  }

  async _createAllowance(allowances: Allowance[]) {
    const { allowanceId: id, addAllowance } = this.props;
    let newId: number = id[id.length - 1] ? id[id.length - 1] + 1 : 0;
    let idsOfMonth: number[] = [];
    await allowances.forEach(allowance => {
      const newAllowance: Allowance = {
        ...allowance,
        id: newId
      }

      addAllowance(newAllowance);
      idsOfMonth.push(newId);
      newId += 1;
    });

    return newId;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    monthListState: state.monthList,
    defaultState: state.defaultAllowance,
    allowanceId: state.allowance.ids,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  { createMonthList, addAllowance }
)(AllowanceListScreen);