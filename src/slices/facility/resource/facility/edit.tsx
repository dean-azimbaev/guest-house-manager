import { Locale } from "@/shared";
import {
  ArrayInput,
  Edit,
  EditProps,
  FileField,
  FileInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

interface ILocale {
  id: string;
  locale: Locale;
  name: string;
}

export const FacilityEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="iconName" label="Название иконки" />
        <TextInput source="order" label="Порядок" />
        <FileInput
          source="file"
          label="Иконка"
          helperText="Выберите новый файл, чтобы заменить текущую иконку"
        >
          <FileField source="iconUrl" title="title" />
        </FileInput>

        <ArrayInput source="locales" label="Локализация">
          <SimpleFormIterator>
            <SelectInput
              source="locale"
              label="Язык"
              choices={[
                { id: Locale.RU, name: "Русский" },
                { id: Locale.KG, name: "Кыргызский" },
                { id: Locale.EN, name: "Английский" },
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
    </Edit>
  );
};
