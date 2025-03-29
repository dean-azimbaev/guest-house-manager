import { Schedule, CalendarToday, BookOnline } from "@mui/icons-material";
import { MenuItemLink } from "react-admin";

import { MenuItemProps } from "../menu-item.prop";
import { SubMenu } from "../sub-menu";

export const Reservations = (props: MenuItemProps) => {
  return (
    <SubMenu
      name="Бронирования"
      isOpen={props.isOpen}
      handleToggle={() => props.handleToggle("reservations")}
      icon={<BookOnline />}
      dense={props.dense}
      expandIcon={<CalendarToday />}
    >
      <MenuItemLink
        leftIcon={<Schedule />}
        primaryText="График"
        to={`reservations`}
      />
    </SubMenu>
  );
};
