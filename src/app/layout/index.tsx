import { LayoutProps, Layout as RALayout } from "react-admin";

import { Menu } from "./menu";

export const Layout = (props: LayoutProps) => (
  <RALayout {...props} menu={Menu} />
);
