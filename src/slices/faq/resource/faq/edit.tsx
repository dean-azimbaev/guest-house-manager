import { Edit, SimpleForm, TextInput } from "react-admin";

export const FaqEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );
};
