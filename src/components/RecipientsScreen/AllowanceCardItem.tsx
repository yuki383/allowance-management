import * as React from "react";
import {
  Button,
  View,
  Text,
} from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from "react-native";
import { Allowance } from "../../constants/types";

interface Props {
  allowance: Allowance
  navigation: NavigationScreenProp<any>;
}

// TODO タグによってデザインを変える
export default class AllowanceCard extends React.Component<Props> {
  render() {
    const { allowance, navigation } = this.props;
    const { title, amount, isDone } = allowance;
    const cardStyle = isDone ? styles.CompletedButton : this._chooseButtonStyle();
    return(
      <View style={{ paddingRight: 5, paddingLeft: 5}}>
        <Button style={cardStyle}
          onPress={() =>
            navigation.navigate("AllowancePropertyModal", {
              allowanceId: this.props.allowance.id,
              monthId: navigation.getParam("monthId")
          })} 
        >
          <View style={{ padding: 5}}>
            <Text style={styles.ButtonText}>{title}</Text>
            <Text style={styles.ButtonText}>{amount}</Text>
          </View>
        </Button>
      </View>
    )
  }

  _chooseButtonStyle() {
    const { tags } = this.props.allowance;
    if( tags === "hobby")
      return styles.HobbyButton;
    else if (tags === "food")
      return styles.FoodButton;
    else if (tags === "transport")
      return styles.TransportationButton;
    else
      return styles.DefaultButton;
  }
}

const styles = StyleSheet.create({
  ButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    flex: 1

  },
  CompletedButton: {
    backgroundColor: "gray",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300,

  },
  DefaultButton: {
    backgroundColor: "#483d8b",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300
  },
  HobbyButton: {
    backgroundColor: "#CAB783",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300
  },
  TransportationButton: {

  },
  FoodButton: {

  }
})
