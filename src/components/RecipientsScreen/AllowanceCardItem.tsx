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

export default class AllowanceCard extends React.Component<Props> {
  render() {
    const { title, amount } = this.props.allowance;
    return(
      <View style={{ paddingRight: 5, paddingLeft: 5}}>
        <Button style={{ flex: 1, height: 140, minWidth: 150, maxWidth: 300, backgroundColor: "#000080" }}
          onPress={() => this.props.navigation.navigate("AllowancePropertyModal", { allowance: this.props.allowance })} 
        >
          <View style={{ padding: 5}}>
            <Text style={styles.ButtonText}>{title}</Text>
            <Text style={styles.ButtonText}>{amount}</Text>
          </View>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    flex: 1

  }
})
