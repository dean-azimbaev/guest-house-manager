import {
  ArrayField,
  ChipField,
  Datagrid,
  List,
  SingleFieldList,
  TextField,
} from "react-admin";

export const FacilityGroupList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="order" label="Порядок" />
        <ArrayField source="locales" label="Локализация">
          <SingleFieldList>
            <ChipField source="name" />
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
      </Datagrid>
    </List>
  );
};
