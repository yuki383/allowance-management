import * as React from "react";
import { Form, Item, Label, Input } from "native-base";
import UserPicker from "./UserPicker";
import { User, AllowanceFormState, AllowanceInputs } from "../../../constants/types";

interface Props {
  users: User;
  values: AllowanceFormState;
  handleChangeValue: (input: AllowanceInputs) => void;
  handleChangePicker: (input: string) => void; 
}

export default class AllowanceFormItems extends React.Component<Props> {

  render() {
    const { handleChangePicker, values, users, handleChangeValue } = this.props;
    return(
      <Form>
        {/* Allowanceを追加するユーザーのピッカー */}
        <Item picker stackedLabel >
          <Label>User</Label>
          <UserPicker 
            handleChangePicker={itemValue => handleChangePicker(itemValue)} 
            selectedValue={values.userId}
            users={users}
          />
        </Item>
        <Item stackedLabel>
          <Label>Title</Label>
          <Input onChangeText={title => handleChangeValue({ title })} />
        </Item>
        <Item stackedLabel >
          <Label>金額</Label>
          <Input onChangeText={amount => handleChangeValue({ amount })} />
        </Item>
        <Item stackedLabel >
          <Label>メモ</Label>
          <Input onChangeText={memo => handleChangeValue({ memo })} />
        </Item>
      </Form>
    )
  }
}