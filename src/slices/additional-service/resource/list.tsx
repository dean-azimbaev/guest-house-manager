import {
  Datagrid,
  List,
  ListProps,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export const AdditionalServiceList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="order" label="Порядок" />
        <ArrayField source="locales" label="Локализации">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
      </Datagrid>
    </List>
  );
};
