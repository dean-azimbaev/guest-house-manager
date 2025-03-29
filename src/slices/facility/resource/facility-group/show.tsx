import {
  ArrayField,
  ChipField,
  DateField,
  Show,
  ShowProps,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";

export const FacilityGroupShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="order" label="Порядок" />
        <DateField source="createdAt" label="Дата создания" showTime />
        <DateField source="updatedAt" label="Дата обновления" showTime />
        <ArrayField source="locales" label="Локализация">
          <SingleFieldList>
            <ChipField source="name" label="Название" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="facilities" label="Удобства">
          <SingleFieldList>
            <ArrayField source="locales" label="Локализации удобств">
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
