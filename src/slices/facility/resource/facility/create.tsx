import dataProvider from "@/app/api/provider";
import { Locale } from "@/shared";

import {
  ArrayInput,
  Create,
  CreateProps,
  FileField,
  FileInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

interface ILocale {
  locale: Locale;
  name: string;
}

export const FacilityCreate = (props: CreateProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleCreate = async (data: Record<string, any>) => {
    try {
      const formData = new FormData();
      if (data.file) {
        formData.append("file", data.file.rawFile);
      }

      formData.append("order", data.order);
      formData.append("iconName", data.iconName);

      const { data: facility } = await dataProvider.create("facilities", {
        data: formData,
      });

      if (data.locales) {
        await Promise.all(
          data.locales.map((locale: ILocale) =>
            dataProvider.create("facility-locales", {
              data: {
                id: facility.id,
                locale: locale.locale,
                name: locale.name,
              },
            })
          )
        );
      }
      notify("Удобства успешно создано", { type: "success" });
      redirect("/facilities");
    } catch (error) {
      notify("Возникла ошибка при создании удобств или локализации", {
        type: "warning",
      });
    }
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput
          source="iconName"
          label="Название иконки"
          helperText="Введите название иконки для отображения"
        />
        <TextInput
          source="order"
          label="Порядок"
          helperText="Укажите порядок, в котором элемент будет отображаться"
        />
        <FileInput
          source="file"
          label="Иконка"
          helperText="Выберите файл для загрузки"
        >
          <FileField source="src" title="title" />
        </FileInput>

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
              source="name"
              label="Название"
              helperText="Введите название на выбранном языке"
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
