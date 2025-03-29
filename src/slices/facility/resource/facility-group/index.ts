import { EditGuesser, RaRecord, ResourceProps } from "react-admin";
import { FacilityGroupShow } from "./show";
import { FacilityGroupList } from "./list";
import { FacilityGroupCreate } from "./create";

export const facilityGroup: ResourceProps = {
  name: "room-type-facility-groups",
  show: FacilityGroupShow,
  list: FacilityGroupList,
  create: FacilityGroupCreate,
  edit: EditGuesser,
  recordRepresentation: (record: RaRecord) => `${record.id}`,
};
