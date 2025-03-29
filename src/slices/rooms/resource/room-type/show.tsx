import {
  ArrayField,
  ChipField,
  ImageField,
  Show,
  ShowProps,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";

export const RoomTypeShow = (props: ShowProps) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="capacity" label="Вместимость" />
        <ArrayField source="roomTypeImages" label="Изображения">
          <SingleFieldList>
            <ImageField source="url" title="url" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="roomTypeLocales" label="Локализации">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="facilityGroups" label="Группы удобств">
          <SingleFieldList>
            <TextField source="name" label="Название группы" />
            <ArrayField source="locales" label="Локализации">
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
