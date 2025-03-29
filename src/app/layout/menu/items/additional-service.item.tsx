import { MenuItemLink } from "react-admin";
import { MenuItemProps } from "../menu-item.prop";
import { SubMenu } from "../sub-menu";
import {
  RoomService,
  RoomServiceOutlined,
  BathtubOutlined,
} from "@mui/icons-material";

export const AdditionalService = (props: MenuItemProps) => {
  return (
    <SubMenu
      name="Доп удобства"
      isOpen={props.isOpen}
      handleToggle={() => props.handleToggle("additionalService")}
      icon={<RoomService />}
      dense={props.dense}
      expandIcon={<RoomServiceOutlined />}
    >
      <MenuItemLink
        leftIcon={<BathtubOutlined />}
        primaryText="Доп удобства"
        to={`manager/additional-services`}
      />
    </SubMenu>
  );
};
