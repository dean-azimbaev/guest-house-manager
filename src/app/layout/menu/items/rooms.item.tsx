import {
  StickyNote2,
  AttachMoney,
  DomainAddRounded,
  Apartment,
} from "@mui/icons-material";
import { MenuItemLink } from "react-admin";

import { MenuItemProps } from "../menu-item.prop";
import { SubMenu } from "../sub-menu";

export const Rooms = (props: MenuItemProps) => {
  return (
    <SubMenu
      name="Номера"
      isOpen={props.isOpen}
      handleToggle={() => props.handleToggle("rooms")}
      icon={<Apartment />}
      dense={props.dense}
      expandIcon={<DomainAddRounded />}
    >
      <MenuItemLink
        leftIcon={<StickyNote2 />}
        primaryText="Типы номеров"
        to={`manager/room-types`}
      />
      <MenuItemLink
        leftIcon={<AttachMoney />}
        primaryText="Прайс лист"
        to={`room-type-pricing`}
      />
    </SubMenu>
  );
};
