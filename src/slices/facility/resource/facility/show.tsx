import {
  ArrayField,
  DateField,
  ImageField,
  Show,
  ShowProps,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  ChipField,
} from "react-admin";

export const FacilityShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ImageField source="iconUrl" label="Иконка" />
        <TextField source="id" label="ID" />
        <TextField source="iconBase64" label="Название" />
        <TextField source="order" label="Порядок" />
        <DateField source="createdAt" label="Дата создания" showTime />
        <DateField source="updatedAt" label="Дата обновления" showTime />
        <ArrayField source="locales" label="Локализация">
          <SingleFieldList>
            <ChipField source="name" label="Название" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="groups" label="Группы">
          <SingleFieldList>
            <ArrayField source="locales" label="Локализации группы">
              <SingleFieldList>
                <ChipField source="name" />
              </SingleFieldList>
            </ArrayField>
          </SingleFieldList>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};
