import { Datagrid, List, ListProps, TextField } from "react-admin";

export const PricingList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="price" />
      </Datagrid>
    </List>
  );
};
