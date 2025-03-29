import { RaRecord, ResourceProps, ShowGuesser } from "react-admin";
import { FaqLocaleCreate } from "./create";
import { FaqLocaleList } from "./list";
import { FaqLocaleEdit } from "./edit";

export const faqLocale: ResourceProps = {
  name: "faq-locales",
  show: ShowGuesser,
  list: FaqLocaleList,
  create: FaqLocaleCreate,
  edit: FaqLocaleEdit,
  recordRepresentation: (record: RaRecord) => record.answer,
};
