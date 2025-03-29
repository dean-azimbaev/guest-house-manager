export type Resource =
  | "rooms"
  | "reservations"
  | "faq"
  | "facility"
  | "roomTypeFacilityGroup"
  | "facilityGroupLocale"
  | "additionalService";

export type MenuItemProps = {
  isOpen: boolean;
  handleToggle(resource: Resource): void;
  dense: boolean;
  resource: Resource;
};
