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
    const { navigation, allowanceState, usersState, monthList } = this.props;
    const monthId = navigation.getParam("monthId")
    const AllowamceOfMonthId = monthList[monthId].allowances;
    const { Ids: idOfUser, ByIds: users} = usersState;
    const allowances = getAllowance(allowanceState).filter(allowance => AllowamceOfMonthId.some(n => n === allowance.id));
    const grouped = idOfUser.length > 0 ? groupAllowanceByUserId(allowances, idOfUser) : {};
    const recipientItems = idOfUser.map((id, index) => {
      const name = users[id]["name"];
      const allowances = grouped[id];
      if (index === 0) return <RecipientItem key={id} name={name} allowances={allowances} navigation={navigation} isTop={true} />
      else return <RecipientItem key={id} name={name} allowances={allowances} navigation={navigation} />
    })

    return(
      <View>
      {recipientItems}
      </View>
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
