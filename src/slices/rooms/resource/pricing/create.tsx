import {
  Create,
  CreateProps,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PricingCreate = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="price" label="Цена" />
        <DateInput source="periodStart" label="Начало периода" />
        <DateInput source="periodEnd" label="Конец периода" />
        <ReferenceInput
          source="roomType"
          reference="manager/room-types"
          label="Тип номера"
        >
          <SelectInput
            optionText={(roomType) =>
              roomType.roomTypeLocales
                ?.map((locale: any) => `${locale.title}`)
                .join(", ") || "Нет доступных локалей для удобства"
            }
            helperText="Выберите тип номера для этого удобства."
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
