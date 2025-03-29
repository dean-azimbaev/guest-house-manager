import { Admin } from "react-admin";
import { Layout } from "./layout";
import dataProvider from "./api/provider";
import { authProvider } from "./api/auth";
import { Resources, Routes } from "../slices";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    {Routes}
    {Resources}
  </Admin>
);
