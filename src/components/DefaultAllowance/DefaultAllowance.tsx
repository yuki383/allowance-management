import * as React from "react"
import RecipientItem from "../RecipientsScreen/RecipientItem";
import { Text, Icon, Grid, ActionSheet, Container, Content, View } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { NavigationOptions, Allowance, AllowanceState, User } from "../../constants/types";
import { Payload, } from "../../actions/DefaultActions";
import { getAllowance, groupAllowanceByUserId } from "../../models";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";

interface Props {
  navigation: NavigationScreenProp<any>;
  defaults: AllowanceState;
  users: User;
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: "#f3f3f3"
  }
})

// TODO デフォルトの時でもカードアイテムを押した時に通常の方のお小遣いのプロパティが表示されてしまう。

class DefaultAllowance extends React.Component<Props> {

  componentDidMount() {
  }

  render() {
    const { navigation, defaults, users, } = this.props;
    const itemList: Allowance[] = getAllowance(defaults);
    const { Ids, ByIds} = users;
    const grouped = Ids.length > 0 ? groupAllowanceByUserId(itemList, Ids) : {};
    const items = Ids.map((id, index) => {
      const name = ByIds[id].name;
      const allowances = grouped[id];
      if(index === 0) return <RecipientItem key={id} name={name} allowances={allowances} isDefault={true} navigation={navigation} isTop={true} />
      else return <RecipientItem key={id} name={name} allowances={allowances} isDefault={true} navigation={navigation} />
    })

    return(
      <Container>
        <Content style={styles.ViewStyle}>
          <View>
          {items}
          </View>
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    defaults: state.defaultAllowance,
    users: state.users,
  }
}

export default connect(
  mapStateToProps,
)(DefaultAllowance);