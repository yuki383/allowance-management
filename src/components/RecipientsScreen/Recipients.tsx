import * as React from "react";
import { View, Text, Row, Grid } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from "react-native";

import RecipientItem from "./RecipientItem";
import { AllowanceState, User, Month } from "../../constants/types";
import { connect } from "react-redux";
import { getAllowance, groupAllowanceByUserId,} from "../../models";
interface Props {
  navigation: NavigationScreenProp<any>;
  monthList: Month;
  usersState: User;
  allowanceState: AllowanceState;
}


class Recipients extends React.Component<Props> {

  render() {
    const { navigation, allowanceState, monthList, usersState } = this.props;
    const AllowamceOfMonthId = navigation.getParam("allowances", []);
    const { Ids: idOfUser, ByIds: users} = usersState;
    const allowances = getAllowance(allowanceState).filter(allowance => AllowamceOfMonthId.some(n => n === allowance.id));
    const grouped = groupAllowanceByUserId(allowances, idOfUser);
    const hoge = idOfUser.map(id => {
      const name = users[id]["name"];
      const allowances = grouped[id];
      return <RecipientItem key={id} name={name} allowances={allowances} navigation={navigation} />
    })

    return(
      <Grid>
      {hoge}
      </Grid>
    )

  }
}

const mapStateToProps = (state, ownProps) => ({
  allowanceState: state.allowance,
  usersState: state.users,
  monthList: state.monthList.monthList,
  ...ownProps,
})

export default connect(
  mapStateToProps,
)(Recipients);
