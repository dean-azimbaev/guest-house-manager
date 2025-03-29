import { EditGuesser, RaRecord, ResourceProps } from "react-admin";
import { FacilityCreate } from "./create";
import { FacilityList } from "./list";
import { FacilityShow } from "./show";
import { FacilityEdit } from "./edit";

export const facility: ResourceProps = {
  name: "facilities",
  show: FacilityShow,
  list: FacilityList,
  create: FacilityCreate,
  edit: FacilityEdit,
  recordRepresentation: (record: RaRecord) => record.iconBase64,
};
