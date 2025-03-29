import { HotelOutlined, Hotel, WeekendRounded } from "@mui/icons-material";
import { MenuItemLink } from "react-admin";
import { MenuItemProps } from "../menu-item.prop";
import { SubMenu } from "../sub-menu";

export const Facility = (props: MenuItemProps) => {
  return (
    <SubMenu
      name="Удобства"
      isOpen={props.isOpen}
      handleToggle={() => props.handleToggle("facility")}
      icon={<Hotel />}
      dense={props.dense}
      expandIcon={<HotelOutlined />}
    >
      <MenuItemLink
        leftIcon={<Hotel />}
        primaryText="Удобства и услуги"
        to={`/facilities`}
      />
      <MenuItemLink
        leftIcon={<WeekendRounded />}
        primaryText="Группа удобств"
        to={`/room-type-facility-groups`}
      />
    </SubMenu>
  );
};
