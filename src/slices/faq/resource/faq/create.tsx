import { Create, CreateProps, required, SimpleForm, TextInput } from "react-admin";

export const FaqCreate = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
