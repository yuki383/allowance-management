import * as React from "react";
import { View, Text, Button, Icon, Container, Content, Header, Left } from "native-base";
import { Allowance, NavigationOptions, Tags } from "../../constants/types";
import { NavigationScreenProp } from "react-navigation";
import ModalHeader from "../utils/ModalHeader";
import { connect } from "react-redux";
import { doneAllowance, deleteAllowance } from "../../actions/AllowanceActions";
import { deleteMonthAllowance } from "../../actions/MonthListActions";
import { StyleSheet } from "react-native";

interface Props {
  navigation: NavigationScreenProp<any>
  allowances: Allowance[];
  doneAllowance: ({ id: number }) => void;
  deleteAllowance: ({ id: number }) => void;
  deleteMonthAllowance: (payload: { monthId: number, allowanceId: number }) => void;
}

class AllowancePropertyScreen extends React.Component<Props> {

  render() {
    const { navigation, allowances } = this.props;
    const allowanceId = navigation.getParam("allowanceId");
    if (allowances[allowanceId]) {
      const { id, isDone, title, amount, memo, tags } = allowances[allowanceId];

      return (
        <Container>
          <Content>
            <View style={{ flex: 1, padding: 50 }}>
              <View>
                <Text style={styles.Title} >{title}</Text>
                <Text style={[styles.Common, { lineHeight: 40}]}>{amount}円</Text>
                <Text style={styles.Common}>タグ： {this._selectTagOfDisplay(tags)}</Text>
                <Text style={styles.Common}>メモ：</Text>
                <Text style={[styles.Memo, {paddingLeft: 10}]}>{memo}</Text>
              </View>
              <View style={[{ flexDirection: "row"}]}>
                {this._doneToggleButton(isDone)}
                <Button
                  style={[styles.DeleteButton]}
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

    return <Button style={[buttonStyle]} onPress={() => doneAllowance({ id: allowanceId })} ><Text>{buttonText}</Text></Button>
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
    const { deleteAllowance, deleteMonthAllowance, navigation } = this.props;
    const monthId = navigation.getParam("monthId");
    deleteAllowance({ id: allowanceId });
    deleteMonthAllowance({ monthId, allowanceId });
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
  }
})

const mapStateToProps = (state) => ({
  allowances: state.allowance.allowances,
})

export default connect(
  mapStateToProps,
  { doneAllowance, deleteAllowance, deleteMonthAllowance }
)(AllowancePropertyScreen);
