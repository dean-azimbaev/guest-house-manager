import dataProvider from "@/app/api/provider";
import { Locale } from "@/shared";
import {
  ArrayInput,
  Create,
  CreateProps,
  FileField,
  FileInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

interface ILocale {
  locale: Locale;
  title: string;
  description: string;
}

export const RoomTypeCreate = (props: CreateProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleCreate = async (data: Record<string, any>) => {
    try {
      const { data: room } = await dataProvider.create("rooms", {
        data: data,
      });

      const { data: roomType } = await dataProvider.create(
        "manager/room-types",
        {
          data: {
            roomId: room.id,
            capacity: data.capacity,
            facilityGroups: data.facilityGroups,
          },
        }
      );

      if (data.locales) {
        await Promise.all(
          data.locales.map((locale: ILocale) =>
            dataProvider.create("room-type-locales ", {
              data: {
                id: roomType.id,
                locale: locale.locale,
                title: locale.title,
                description: locale.description,
              },
            })
          )
        );
      }

      if (data.files) {
        const formData = new FormData();

        formData.append("roomTypeId", roomType.id);

        data.files.map((file: any) => {
          formData.append("files", file.rawFile);
        });

        await dataProvider.create("room-type-images/bulk", { data: formData });

        notify("Вы успешно создали Тип номера ");

        redirect("/manager/room-types");
      }
    } catch (error) {}
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <FileInput source="files" label="Фотографии" multiple>
          <FileField source="src" title="title" />
        </FileInput>
        <TextInput source="capacity" label="Вместимость" />

        <ArrayInput
          source="locales"
          label="Локализация"
          helperText="Добавьте локализации"
        >
          <SimpleFormIterator>
            <SelectInput
              source="locale"
              label="Язык"
              choices={[
                { id: Locale.RU, name: "Русский" },
                { id: Locale.KG, name: "Кыргызский" },
                {
                  id: Locale.EN,
                  name: "Английский",
                },
                { id: Locale.KZ, name: "Казахский" },
              ]}
              helperText="Выберите язык для локализации"
            />
            <TextInput
              source="title"
              label="Название"
              helperText="Введите название на выбранном языке"
            />
            <TextInput
              source="description"
              label="Описание"
              helperText="Введите описание на выбранном языке"
            />
          </SimpleFormIterator>
        </ArrayInput>

        <ReferenceArrayInput
          source="facilityGroups"
          reference="room-type-facility-groups"
        >
          <SelectArrayInput
            optionText={(facilityGroup) =>
              facilityGroup.locales
                ?.map((locale: any) => `${locale.name}`)
                .join(", ") || "Нет доступных локалей для группы удобств"
            }
            helperText="Выберите группы удобств для типа номера."
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
