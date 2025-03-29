import { EditGuesser, RaRecord, ResourceProps, ShowGuesser } from "react-admin";

import { RoomTypesList } from "./list";
import { RoomTypeCreate } from "./create";
import { RoomTypeShow } from "./show";

export const roomTypes: ResourceProps = {
  name: `manager/room-types`,
  show: RoomTypeShow,
  create: RoomTypeCreate,
  list: RoomTypesList,
  edit: EditGuesser,
  recordRepresentation: (record: RaRecord) => `${record.id}`,
};
