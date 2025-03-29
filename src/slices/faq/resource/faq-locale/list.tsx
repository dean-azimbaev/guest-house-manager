import { Datagrid, List, ListProps, TextField } from "react-admin";

export const FaqLocaleList = (props: ListProps) => {
  return (
    <List {...props} title="Faq">
      <Datagrid rowClick="show">
        <TextField source="answer" />
        <TextField source="question" />
      </Datagrid>
    </List>
  );
};
