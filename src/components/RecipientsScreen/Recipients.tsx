import * as React from "react";
import { View, Text, Row, Grid } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from "react-native";

import RecipientItem from "./RecipientItem";

interface Props {
  navigation: NavigationScreenProp<any>;
}

const arr = {
    name: "hoge",
    allowances: [
      {
        id: 1,
        isDone: false,
        title: "monthly allowance",
        amount: 3000,
        memo: "monthly allowance of highscool student in my family."
      },
      {
        id: 2,
        isDone: false,
        title: "hoge",
        amount: 40000,
        memo: "aaaaaa"
      },
      {
        id: 3,
        isDone: true,
        title: "hoge",
        amount: 40000,
        memo: "aaaaaa"
      },
      {
        id: 4,
        isDone: false,
        title: "hoge",
        amount: 40000,
        memo: "aaaaaa"
      },
    ]
  }


export default class Recipients extends React.Component<Props> {

  render() {
    const { name, allowances } = arr;
    const { navigation } = this.props;

    return(
      <Grid>
        <RecipientItem name={name} allowances={allowances} navigation={navigation} />
      </Grid>
    )

  }
}
