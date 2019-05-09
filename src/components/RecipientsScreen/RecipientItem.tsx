import * as React from "react";
import { StyleSheet, ScrollViewBase, ScrollView } from "react-native";
import { View, Text, Row, Grid } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import AllowanceCardItem from "./AllowanceCardItem";
import { Allowance } from "../../constants/types";

interface Props {
  
  name: string,
  allowances: Allowance[]
  navigation: NavigationScreenProp<any>;
}
export default class RecipientItem extends React.Component<Props> {

  render() {
    const { name, allowances, navigation } = this.props;
    const cards = allowances.map(allowance => {
      return <AllowanceCardItem key={allowance.id} allowance={allowance} navigation={navigation} />
    });

    return (
      <Grid style={{ borderWidth: 1}}>
        <Row style={styles.nameRow}>
          <Text style={{ fontSize: 20, padding: 5, paddingLeft: 10,}}>{name}</Text>
        </Row>
        <Row style={styles.allowancesRow}>
        <ScrollView horizontal={true} style={{ padding: 10}}>
          {cards}
        </ScrollView>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  nameRow: {
    height: 40,
    backgroundColor: "#CCFFFF",
    borderBottomWidth: 1,
  },
  allowancesRow: {
    height: 160,
  }
})