import * as React from "react";
import { View, Text, Button, Container, Content } from "native-base";
import { Allowance, Tags } from "../../constants/types";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { doneAllowance, deleteAllowance } from "../../actions/AllowanceActions";
import { deleteMonthAllowance } from "../../actions/MonthListActions";
import { StyleSheet } from "react-native";
import { deleteDefaultAllowance } from "../../actions/DefaultActions";

interface Props {
  navigation: NavigationScreenProp<any>
  allowances: Allowance[];
  defaultAllowances: Allowance[];
  doneAllowance: ({ id: number }) => void;
  deleteAllowance: ({ id: number }) => void;
  deleteDefaultAllowance: ({ id: number }) => void;
  deleteMonthAllowance: (payload: { monthId: number, allowanceId: number }) => void;
}

class AllowancePropertyScreen extends React.Component<Props> {

  render() {
    const { navigation, allowances, defaultAllowances } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    const isDefualt = navigation.getParam("isDefault");
    const allowance = isDefualt ? defaultAllowances[allowanceId] : allowances[allowanceId];
    if (allowance) {
      const { id, isDone, title, amount, memo, tags } = allowance;

      return (
        <Container>
          <Content>
            <View style={{ flex: 1, paddingLeft: 50, paddingRight: 50, paddingTop: 50 }}>
              <View>
                <Text style={styles.Title} >{title}</Text>
                <Text style={[styles.Common, { lineHeight: 40}]}>{amount}円</Text>
                <Text style={styles.Common}>タグ： {this._selectTagOfDisplay(tags)}</Text>
                <Text style={styles.Common}>メモ：</Text>
                <Text style={[styles.Memo, {paddingLeft: 10}]}>{memo}</Text>
              </View>
              <View style={[{ flexDirection: "row", paddingTop: "100%"}]}>
                {this._doneToggleButton(isDone)}
                <Button
                  style={[styles.DeleteButton, styles.ButtonSize]}
                  onPress={() => this._deleteAllowance(id)}
                >
                  <Text>削除</Text>
                </Button>
              </View>
            </View>
          </Content>
        </Container>
      )
    } else {
      return (
        <Container></Container>
      )
    }
  }

  _doneToggleButton(isDone: boolean) {
    const { doneAllowance, navigation } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    const buttonText = isDone ? "未完了にする" : "完了にする";
    const buttonStyle = isDone ? styles.CompletedButton : styles.Button;

    return <Button style={[buttonStyle, styles.ButtonSize]} onPress={() => doneAllowance({ id: allowanceId })} ><Text>{buttonText}</Text></Button>
  }

  _selectTagOfDisplay(tags?: Tags) {
    if(tags === "food")
      return "食費"
    else if(tags === "hobby")
      return "趣味"
    else if(tags === "transport")
      return "交通費"
    else
      return "なし"
  }

  _deleteAllowance(allowanceId: number) {
    const { deleteAllowance, deleteDefaultAllowance, deleteMonthAllowance, navigation } = this.props;
    const isDefault = navigation.getParam("isDefault");
    const monthId = navigation.getParam("monthId");
    if (!isDefault) {
      deleteAllowance({ id: allowanceId });
      deleteMonthAllowance({ monthId, allowanceId });
    } else {
      deleteDefaultAllowance({ id: allowanceId });
    }
    navigation.popToTop();
  }

}

const styles = StyleSheet.create({
  Title: {
    fontSize: 26,
    lineHeight: 30,
  },
  Common: {
    fontSize: 20,
    lineHeight: 30,
    paddingLeft: 5,
  },
  Memo: {
    fontSize: 18,
  },
  CompletedButton: {
    backgroundColor: "#d3d3d3"
  },
  Button: {
    backgroundColor: "#5cb85c"
  },
  DeleteButton: {
    backgroundColor: "#d9534f"
  },
  ButtonSize: {
    width: "45%",
  }
})

const mapStateToProps = (state) => ({
  allowances: state.allowance.allowances,
  defaultAllowances: state.defaultAllowance.allowances
})

export default connect(
  mapStateToProps,
  { doneAllowance, deleteAllowance, deleteDefaultAllowance,  deleteMonthAllowance }
)(AllowancePropertyScreen);
