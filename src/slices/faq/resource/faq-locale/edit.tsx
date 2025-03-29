import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const FaqLocaleEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="answer" validate={[required()]} />
        <TextInput source="qu estion" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
