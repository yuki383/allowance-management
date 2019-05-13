import * as React from "react";
import { View, Text, ListItem, Left, Right, Icon,  } from "native-base";
import { StyleSheet, Alert } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Allowance } from "../../constants/types";
import { connect } from "react-redux";

interface Props {
  month: string;
  navigation: NavigationScreenProp<any, any>
}
class MonthListItem extends React.Component<Props> {
  render() {
    const { navigation, month } = this.props;
    // TODO Recipientsを実装したらRightのアイコンのいろをisDoneに合わせて変更できるようにする
    return(
      <ListItem
        onPress={() => 
          navigation.navigate("Recipients", {
            date: month,
          })}
      >
        <Left>
          <Text>{month}</Text>
        </Left>
        <Right>
          <Icon type="AntDesign" name="check" style={{  }} />
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
    ...ownProps,
  }
}

export default connect(
  mapStateToProps
)(MonthListItem);