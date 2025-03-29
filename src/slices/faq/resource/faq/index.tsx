import { RaRecord, ResourceProps, ShowGuesser } from "react-admin";
import { FaqList } from "./list";
import { FaqCreate } from "./create";
import { FaqEdit } from "./edit";

export const faq: ResourceProps = {
  name: "faqs",
  show: ShowGuesser,
  list: FaqList,
  create: FaqCreate,
  edit: FaqEdit,
  recordRepresentation: (record: RaRecord) => record.title,
};
