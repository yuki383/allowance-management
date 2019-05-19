import * as React from "react";
import { Picker, Icon } from "native-base";
import { User } from "../../../constants/types";
import { getUser } from "../../../models";

interface Props {
  users: User;
  selectedValue: number;
  handleChangePicker: (input: string) => void;
}

export default class UserPicker extends React.Component<Props> {
  render() {
    const { users, handleChangePicker, selectedValue } = this.props;
    const usersList = getUser(users);
    const pickerItems = usersList.map(user => {
      const { id, name } = user;
      return <Picker.Item key={id} label={name} value={id} />
    });

    return(
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        selectedValue={selectedValue}
        onValueChange={itemValue => handleChangePicker(itemValue)}
      >
      {pickerItems}
      </Picker>
    )
  }
}