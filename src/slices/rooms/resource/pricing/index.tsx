import { RaRecord, ResourceProps, ShowGuesser } from "react-admin";
import { PricingCreate } from "./create";
import { PricingList } from "./list";

export const roomTypePricing: ResourceProps = {
  name: `room-type-pricing`,
  create: PricingCreate,
  show: ShowGuesser,
  list: PricingList,
  recordRepresentation: (record: RaRecord) => record.name,
};
