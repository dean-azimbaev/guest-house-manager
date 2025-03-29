import { Resource } from "react-admin";
import { facility } from "./facility";

import { facilityGroup } from "./facility-group";

export const FacilityResource = [<Resource {...facility} key="facility" />];

export const FacilityGroupResource = [
  <Resource {...facilityGroup} key="facility-group" />,
];
