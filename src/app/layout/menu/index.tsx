import { useState } from "react";
import { DashboardMenuItem, MenuProps, Menu as RAMenu } from "react-admin";

import { Resource } from "./menu-item.prop";
import { Rooms, Reservations, Faq, Facility, AdditionalService } from "./items";

export const Menu = ({ dense = false }: MenuProps) => {
  const [items, setItems] = useState<Record<Resource, boolean>>({
    rooms: false,
    reservations: false,
    faq: false,
    facility: false,
    roomTypeFacilityGroup: false,
    facilityGroupLocale: false,
    additionalService: false,
  });

  const handleToggle = (menu: Resource) => {
    setItems({ ...items, [menu]: !items[menu] });
  };

  return (
    <RAMenu>
      <Rooms
        handleToggle={handleToggle}
        isOpen={items["rooms"]}
        dense={dense}
        resource={"rooms"}
      />
      <Reservations
        handleToggle={handleToggle}
        isOpen={items["reservations"]}
        resource={"reservations"}
        dense={dense}
      />
      <Faq
        handleToggle={handleToggle}
        isOpen={items["faq"]}
        resource={"faq"}
        dense={dense}
      />
      <Facility
        handleToggle={handleToggle}
        isOpen={items["facility"]}
        resource={"facility"}
        dense={dense}
      />
      <AdditionalService
        handleToggle={handleToggle}
        isOpen={items["additionalService"]}
        resource={"additionalService"}
        dense={dense}
      />
    </RAMenu>
  );
};
