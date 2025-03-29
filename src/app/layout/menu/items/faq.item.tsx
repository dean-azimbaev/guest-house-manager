import { HelpOutline, Assignment, Help } from "@mui/icons-material";
import { MenuItemProps } from "../menu-item.prop";
import { SubMenu } from "../sub-menu";
import { MenuItemLink } from "react-admin";

export const Faq = (props: MenuItemProps) => {
  return (
    <SubMenu
      name="FAQ"
      isOpen={props.isOpen}
      handleToggle={() => props.handleToggle("faq")}
      icon={<Help />}
      dense={props.dense}
      expandIcon={<HelpOutline />}
    >
      <MenuItemLink
        leftIcon={<Assignment />}
        primaryText="Список FAQ"
        to={`/faqs`}
      />
      <MenuItemLink
        leftIcon={<Assignment />}
        primaryText="Список FAQ Locale"
        to={`/faq-locales`}
      />
    </SubMenu>
  );
};
