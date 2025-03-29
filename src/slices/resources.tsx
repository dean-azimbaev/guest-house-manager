import { FacilityGroupResource, FacilityResource } from "./facility";
import { FaqLocaleResource, FaqResource } from "./faq";
import { RoomsResources } from "./rooms";
import { AdditonalServiceResource } from "./additional-service";

export const Resources = [
  ...RoomsResources,
  ...FaqResource,
  ...FaqLocaleResource,
  ...FacilityResource,
  ...FacilityGroupResource,
  ...AdditonalServiceResource,
];
