import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Row, Grid } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import AllowanceCardItem from "./AllowanceCardItem";
import { Allowance } from "../../constants/types";

interface Props {
  isTop?: boolean;
  isDefault?: boolean;
  name: string;
  allowances: Allowance[];
  navigation: NavigationScreenProp<any>;
}
export default class RecipientItem extends React.Component<Props> {

  render() {
    const { name, allowances, navigation, isTop, isDefault } = this.props;
    const cards = allowances.map(allowance => {
      return <AllowanceCardItem key={allowance.id} allowance={allowance} isDefault={isDefault} navigation={navigation} />
    });

    return (
        <Grid style={ isTop ? styles.TopGridStyle : styles.GridStyle }>
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
    backgroundColor: "#a0d8ef",
  },
  allowancesRow: {
    height: 160,
    backgroundColor: "#f5f5f5",
  },
  TopGridStyle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  GridStyle: {
    borderBottomWidth: 1,
    
  }
})