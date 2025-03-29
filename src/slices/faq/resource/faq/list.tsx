import { Datagrid, List, ListProps, TextField } from "react-admin";

export const FaqList = (props: ListProps) => {
  return (
    <List {...props} title="Faq">
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};
