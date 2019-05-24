import * as React from "react";
import { Form, Item, Label, Input } from "native-base";
import UserPicker from "./UserPicker";
import { User, AllowanceFormState, AllowanceInputs, Tags } from "../../../constants/types";
import TagsPicker from "./TagsPicker";

interface Props {
  users: User;
  values: AllowanceFormState;
  handleChangeValue: (input: AllowanceInputs) => void;
  handleChangeUserPicker: (input: string) => void; 
  handleChangeTagsPicker: (input?: Tags) => void;
}

export default class AllowanceFormItems extends React.Component<Props> {

  render() {
    const { handleChangeUserPicker, handleChangeTagsPicker, values, users, handleChangeValue } = this.props;
    return(
      <Form>
        {/* Allowanceを追加するユーザーのピッカー */}
        <Item picker stackedLabel >
          <Label>ユーザー</Label>
          <UserPicker 
            handleChangePicker={itemValue => handleChangeUserPicker(itemValue)} 
            selectedValue={values.userId}
            users={users}
          />
        </Item>
        <Item picker stackedLabel >
        <Label>タグ</Label>
        <TagsPicker
          selectedValue={values.tags}
          handleChangePicker={itemValue => handleChangeTagsPicker(itemValue)}
        />
        </Item>
        <Item stackedLabel>
          <Label>タイトル</Label>
          <Input onChangeText={title => handleChangeValue({ title })} />
        </Item>
        <Item stackedLabel >
          <Label>金額</Label>
          <Input onChangeText={amount => handleChangeValue({ amount })} />
        </Item>
        <Item stackedLabel >
          <Label>メモ</Label>
          <Input
            multiline={true}
            numberOfLines={4}
            onChangeText={memo => handleChangeValue({ memo })}
          />
        </Item>
      </Form>
    )
  }
}