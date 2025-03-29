import { Resource } from "react-admin";

import { roomTypes } from "./room-type";
import { roomTypePricing } from "./pricing";

export const RoomsResources = [
  <Resource {...roomTypes} key="roomTypes" />,
  <Resource {...roomTypePricing} key={roomTypePricing.name} />,
];
