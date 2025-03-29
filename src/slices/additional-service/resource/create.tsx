import { Locale } from "@/shared";
import dataProvider from "@/app/api/provider";
import {
  Create,
  CreateProps,
  TextInput,
  SimpleForm,
  SimpleFormIterator,
  SelectInput,
  ArrayInput,
  useNotify,
  useRedirect,
} from "react-admin";

interface ILocale {
  locale: Locale;
  name: string;
  description: string;
}

export const AdditionalServiceCreate = (props: CreateProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleCreate = async (data: Record<string, any>) => {
    try {
      const { data: additonal } = await dataProvider.create(
        "manager/additional-services",
        {
          data: data,
        }
      );
      if (data.locales) {
        await Promise.all(
          data.locales.map((locale: ILocale) =>
            dataProvider.create("additional-service-locales ", {
              data: {
                id: additonal.id,
                locale: locale.locale,
                name: locale.name,
                description: locale.description,
              },
            })
          )
        );
      }

      notify("Вы успешно создали Дополнительное удобство");

      redirect("/manager/additional-services");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput
          source="order"
          label="Порядок"
          helperText="Введите порядок для дополнительных удобств"
        />
        <TextInput
          source="price"
          label="Цена"
          helperText="Введите цену для допольнительных удобств"
        />
        <TextInput
          source="currency"
          label="Валюта"
          helperText="Введите валюту для допольнительных удобств"
        />
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
            <TextInput
              source="description"
              label="Описание"
              helperText="Введите описание на выбранном языке"
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
