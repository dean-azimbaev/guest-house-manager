import dataProvider from "@/app/api/provider";
import { Locale } from "@/shared";
import {
  ArrayInput,
  AutocompleteArrayInput,
  Create,
  CreateProps,
  ReferenceArrayInput,
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

export const FacilityGroupCreate = (props: CreateProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleCreate = async (data: Record<string, any>) => {
    try {
      const { data: group } = await dataProvider.create(
        "room-type-facility-groups",
        {
          data: {
            order: data.order,
            facilities: data.facilities,
          },
        }
      );

      if (data.locales) {
        await Promise.all(
          data.locales.map((locale: ILocale) =>
            dataProvider.create("facility-group-locales", {
              data: {
                id: group.id,
                locale: locale.locale,
                name: locale.name,
              },
            })
          )
        );
      }
      notify("Группа удобств успешно создано", { type: "success" });
      redirect("/room-type-facility-groups");
    } catch (error) {}
  };
  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput
          source="order"
          label="Порядок"
          helperText="Укажите порядок отображения группы удобств."
        />

        <ArrayInput source="locales">
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
                {
                  id: Locale.KZ,
                  name: "Казахский",
                },
              ]}
              helperText="Выберите язык для локализации группы."
            />
            <TextInput
              source="name"
              label="Название"
              helperText="Укажите название группы на выбранном языке."
            />
          </SimpleFormIterator>
        </ArrayInput>

        <ReferenceArrayInput source="facilities" reference="facilities">
          <AutocompleteArrayInput
            optionText={(facility) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {facility.iconUrl && (
                  <img
                    src={facility.iconUrl}
                    alt="icon"
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                )}
                <span>
                  {facility.locales
                    ?.map((locale: any) => `${locale.name}`)
                    .join(", ") || "Нет доступных локалей для удобства"}
                </span>
              </div>
            )}
            helperText="Выберите удобства для этой группы."
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
