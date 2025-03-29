import { Resource } from "react-admin";
import { additionalService } from "./resource";

export const AdditonalServiceResource = [
  <Resource {...additionalService} key={additionalService.name} />,
];
