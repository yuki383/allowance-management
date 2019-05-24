import * as React from "react";
import { Text, ListItem, Left, Right, Icon,  } from "native-base";
import { StyleSheet, } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { AllowanceState } from "../../constants/types";
import { connect } from "react-redux";
import { getAllowance } from "../../models";

interface Props {
    month: {
      id: number;
      date: string;
      allowances: number[];
    }
    allowanceState: AllowanceState;
  navigation: NavigationScreenProp<any, any>;
}
class MonthListItem extends React.Component<Props> {
  render() {
    const { navigation, month, allowanceState } = this.props;
    const { id, date, allowances } = month;
    const allowanceList = getAllowance(allowanceState).filter(allowance => allowances.some(n => n === allowance.id));
    const isCompletedOfAll = allowanceList.every(allowance => allowance.isDone);
    const checkColor = isCompletedOfAll ? "#00CC33" : "gray";
    return(
      <ListItem
        onPress={() => 
          navigation.navigate("Recipients", {
            title: date,
            monthId: id,
          })}
      >
        <Left>
          <Text>{date}</Text>
        </Left>
        <Right>
          <Icon type="AntDesign" name="check" style={{ color: checkColor }} />
        </Right>
      </ListItem>
    ) 
  }
}

const styles = StyleSheet.create({
})

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.recipients,
    allowanceState: state.allowance,
    ...ownProps,
  }
}

export default connect(
  mapStateToProps
)(MonthListItem);