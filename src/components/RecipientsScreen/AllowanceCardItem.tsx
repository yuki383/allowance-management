import * as React from "react";
import {
  Button,
  View,
  Text,
  Icon,
  Grid,
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
    const textStyle = isDone ? styles.CompletedText : styles.Text;

    return(
      <View style={{ paddingRight: 5, paddingLeft: 5}}>
        <Button style={cardStyle}
          bordered={true}
          onPress={() =>
            navigation.navigate("AllowancePropertyModal", {
              allowanceId: this.props.allowance.id,
              monthId: navigation.getParam("monthId")
          })} 
        >
          <View style={{ padding: 5, }}>
                {this._chooseTagsIcon()}
                <Text style={[textStyle, { flex: 1, fontSize: 24 }]}>{title.slice(0, 12)}</Text>
                <Text style={[textStyle, { flex: 1, paddingLeft: 10 }]}>{amount}円</Text>
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

  _chooseTagsIcon() {
    const { tags, isDone } = this.props.allowance;
    const iconStyle = [isDone ? styles.CompletedTagIcon : styles.TagIcon, { flex: 1 }];
    if(tags === "hobby")
      return <Icon type="FontAwesome" name="smile-o" style={iconStyle} />
    else if(tags === "food")
      return <Icon type="MaterialCommunityIcons" name="food-fork-drink" style={iconStyle} />
    else if(tags === "transport")
      return <Icon type="MaterialCommunityIcons" name="train" style={iconStyle} />
    else
      return <Icon type="MaterialCommunityIcons" name="coin" style={iconStyle} />
  }

}

const styles = StyleSheet.create({
  CompletedText: {
    color: "#e6e6e6",
    fontSize: 20,
    fontWeight: "700",
  },
  Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  CompletedButton: {
    backgroundColor: "#d3d3d3",
    borderColor: "gray",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300,

  },
  DefaultButton: {
    backgroundColor: "#483d8b",
    borderColor: "black",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300
  },
  HobbyButton: {
    backgroundColor: "#CAB783",
    borderColor: "black",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300
  },
  TransportationButton: {
    backgroundColor: "#3399cc",
    borderColor: "#426579",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300

  },
  FoodButton: {
    backgroundColor: "#e49e61",
    borderColor: "#CC6633",
    flex: 1,
    height: 140,
    minWidth: 150,
    maxWidth: 300

  },
  TagIcon: {
    color: "white",
    paddingLeft: 10,

  },
  CompletedTagIcon: {
    color: "#e6e6e6",
    paddingLeft: 10,
  }
})
