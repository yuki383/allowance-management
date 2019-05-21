import * as React from "react";
import { Tags } from "../../../constants/types";
import { Picker, Icon } from "native-base";

interface Props {
  selectedValue?: Tags;
  handleChangePicker: (input?: Tags) => void;
}

export default class TagsPicker extends React.Component<Props> {

  render() {
    const { selectedValue, handleChangePicker } = this.props;
    return(
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        selectedValue={selectedValue}
        onValueChange={itemValue => handleChangePicker(itemValue)}
      >
        <Picker.Item label={"なし"} value={undefined} />
        <Picker.Item label={"趣味"} value={"hobby"} />
        <Picker.Item label={"交通費"} value={"transport"} />
        <Picker.Item label={"食費"} value={"food"} />
      </Picker>
    )
  }
}