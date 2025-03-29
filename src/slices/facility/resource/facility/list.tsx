import {
  ArrayField,
  TextField,
  Datagrid,
  ImageField,
  List,
  ListProps,
  SingleFieldList,
  ChipField,
  FunctionField,
} from "react-admin";

export const FacilityList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <ImageField source="iconUrl" label="Иконка" />
        <TextField source="iconBase64" label="Название" />
        <TextField source="order" label="Порядок" />

        <ArrayField source="locales" label="Локализация">
          <SingleFieldList>
            <ChipField source="name" />
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
      </Datagrid>
    </List>
  );
};
