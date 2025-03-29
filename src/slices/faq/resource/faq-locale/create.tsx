import {
  Create,
  CreateProps,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useFormGroupContext,
} from "react-admin";

export const FaqLocaleCreate = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="id" reference="faqs">
          <SelectInput
            optionText="title"
            helperText="Пожалуйста, выберите нужный FAQ из списка."
          />
        </ReferenceInput>
        <SelectInput
          source="locale"
          choices={[
            { id: "KZ_kz", name: "Кыргызский" },
            { id: "RU_ru", name: "Русский" },
            { id: "KG_kg", name: "Казахский" },
          ]}
          validate={[required()]}
        />
        <TextInput source="answer" validate={[required()]} />
        <TextInput source="question" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
