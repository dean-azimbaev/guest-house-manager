import {
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export const AdditionalServiceShow = (props: ShowProps) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="order" label="Порядок" />
        <ArrayField source="locales" label="Локализация">
          <SingleFieldList>
            <ChipField source="name" label="Название" />
          </SingleFieldList>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};
