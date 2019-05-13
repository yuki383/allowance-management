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

const styles = StyleSheet.create({
  headerIcon: {
    padding: 5,
  }
})

interface Props {
  navigation: NavigationScreenProp<any, any>;
  monthList: Month;
  ids: number[];
  createMonthList: ({ date: string, allowance: number }) => void;
}

class AllowanceListScreen extends React.Component<Props> {

  static navigationOptions: NavigationOptions = ({navigation}) =>  ({
    title: "AllowanceListScreen",
    headerRight: (
      <Icon 
        type="AntDesign"
        name="plus"
        style={styles.headerIcon}
        onPress={() => navigation.getParam("createMonthList")()}
        />
    )
  })

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
    const { createMonthList, monthList, ids } = this.props;
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.monthList,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps,
  { createMonthList }
)(AllowanceListScreen);