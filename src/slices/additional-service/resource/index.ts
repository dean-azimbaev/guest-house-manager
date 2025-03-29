import { EditGuesser, RaRecord, ResourceProps } from "react-admin";
import { AdditionalServiceShow } from "./show";
import { AdditionalServiceList } from "./list";
import { AdditionalServiceCreate } from "./create";

export const additionalService: ResourceProps = {
  name: "manager/additional-services",
  show: AdditionalServiceShow,
  list: AdditionalServiceList,
  create: AdditionalServiceCreate,
  edit: EditGuesser,
  recordRepresentation: (record: RaRecord) => `${record.id}`,
};
