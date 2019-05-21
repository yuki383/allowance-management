import * as React from "react"
import RecipientItem from "../RecipientsScreen/RecipientItem";
import { Text, Icon, Grid, ActionSheet, Container, Content, View } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { NavigationOptions, Allowance, AllowanceState, User } from "../../constants/types";
import { Payload, } from "../../actions/DefaultActions";
import { getAllowance, groupAllowanceByUserId } from "../../models";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any>;
  defaults: AllowanceState;
  users: User;
}

class DefaultAllowance extends React.Component<Props> {

  componentDidMount() {
  }

  render() {
    const { navigation, defaults, users, } = this.props;
    const itemList: Allowance[] = getAllowance(defaults);
    console.log(users)
    const { Ids, ByIds} = users;
    const grouped = Ids.length > 0 ? groupAllowanceByUserId(itemList, Ids) : {};
    const items = Ids.map((id, index) => {
      const name = ByIds[id].name;
      const allowances = grouped[id];
      if(index === 0) return <RecipientItem key={id} name={name} allowances={allowances} navigation={navigation} isTop={true} />
      else return <RecipientItem key={id} name={name} allowances={allowances} navigation={navigation} />
    })

    return(
      <Container>
        <Content>
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