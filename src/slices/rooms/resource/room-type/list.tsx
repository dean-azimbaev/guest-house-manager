import {
  ArrayField,
  ChipField,
  Datagrid,
  ImageField,
  List,
  ListProps,
  SingleFieldList,
  TextField,
} from "react-admin";

export const RoomTypesList = (props: ListProps) => {
  return (
    <List {...props} title="Типы номеров">
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="capacity" label="Вместимость" />
        <ArrayField source="roomTypeLocales" label="Локализации">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>

        <ArrayField source="roomTypeImages" label="Изображения">
          <SingleFieldList>
            <ImageField source="url" />
          </SingleFieldList>
        </ArrayField>
      </Datagrid>
    </List>
  );
};
